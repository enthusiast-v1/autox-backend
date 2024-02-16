/* eslint-disable @typescript-eslint/no-explicit-any */
import { Driver, ERole, Prisma } from '@prisma/client';
import prisma from '../../../constants/prisma';
import ApiError from '../../../errors/ApiError';
import { hashPassword } from '../../../helpers/bcrypt';
import { calculatePagination } from '../../../helpers/pagination';
import { IGenericResponse } from '../../../interfaces/common';
import IPaginationOptions from '../../../interfaces/pagination';
import {
  driverRelationalFields,
  driverRelationalFieldsMapper,
  driverSearchableFields,
} from './constants';
import {
  TCreateDriver,
  TCreateDriverResponse,
  TDriverFilterRequest,
} from './interface';
import { DriverUtils } from './utils';

const createDriver = async ({
  email,
  password,
  driverId,
  licenseNo,
  licenseExpire,
  nidNo,
  userId,
  ...profileData
}: TCreateDriver): Promise<TCreateDriverResponse> => {
  driverId = await DriverUtils.generateDriverId();
  password = await hashPassword(password);

  let result;

  await prisma.$transaction(async tx => {
    const user = await tx.user.create({
      data: { email, password, role: ERole.DRIVER },
      select: { id: true, email: true, password: false },
    });

    userId = user.id;

    const driver = await tx.driver.create({
      data: {
        driverId,
        licenseNo,
        licenseExpire,
        nidNo,
        userId,
      },
    });

    const profile = await tx.profile.create({
      data: { userId, ...profileData },
    });

    result = { ...user, ...profile, ...driver };
  });

  if (!result) throw new ApiError(400, 'Failed to create driver!');

  return result;
};

const availableDrivers = async () // date: string,
: // Promise<Driver[]>
Promise<string> => {
  // Query all booked drivers for the provided date
  // const bookedDriverIds = (
  //   await prisma.booking.findMany({
  //     where: {
  //       pickUpDateTime: date,
  //     },
  //     select: {
  //       driverId: true,
  //     },
  //   })
  // ).map(booking => booking.driverId);

  // // Query available drivers by excluding booked drivers
  // const availableDrivers = await prisma.driver.findMany({
  //   where: {
  //     id: {
  //       notIn: bookedDriverIds,
  //     },
  //   },
  // });

  return '';
};

const getDrivers = async (
  { searchTerm, ...filterData }: TDriverFilterRequest,
  options: IPaginationOptions,
): Promise<IGenericResponse<Driver[]>> => {
  const pipeline = [];
  const { limit, page, skip } = calculatePagination(options);

  if (searchTerm) {
    pipeline.push({
      OR: driverSearchableFields.map(field => ({
        [field]: { contains: searchTerm, mode: 'insensitive' },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    pipeline.push({
      AND: Object.keys(filterData).map(key => {
        if (driverRelationalFields.includes(key)) {
          return {
            [driverRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
          };
        } else {
          return {
            [key]: { equals: (filterData as any)[key] },
          };
        }
      }),
    });
  }

  const where: Prisma.VehicleWhereInput =
    pipeline.length > 0 ? { AND: pipeline } : {};

  const total = await prisma.driver.count({ where });

  const data = await prisma.driver.findMany({
    where,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: 'desc' },
  });

  return { meta: { total, page, limit }, data };
};

const getDriver = async (id: string) => {
  const result = await prisma.driver.findUnique({
    where: { id },
    include: { user: true },
  });

  return result;
};

const updateDriver = async (
  id: string,
  updateData: Partial<Driver>,
): Promise<Driver> => {
  await getDriver(id);

  const result = await prisma.driver.update({
    where: { id },
    data: updateData,
  });

  return result;
};

const deleteDriver = async (id: string): Promise<Driver> => {
  const driverData = await prisma.driver.findUnique({
    where: { id },
    include: { user: true },
  });

  const usr = await prisma.user.findUnique({
    where: { id: driverData?.user?.id },
    include: { profile: true },
  });

  if (usr?.profile?.id) {
    const deletedProfile = await prisma.profile.delete({
      where: { id: usr?.profile?.id },
    });
    console.log(deletedProfile);
  }

  const result = await prisma.driver.delete({ where: { id } });
  const deletedUser = await prisma.user.delete({ where: { id: usr?.id } });
  console.log(deletedUser);
  return result;
};

export const DriverService = {
  createDriver,
  availableDrivers,
  getDrivers,
  getDriver,
  updateDriver,
  deleteDriver,
};
