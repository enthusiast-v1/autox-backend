import { Driver, ERole } from '@prisma/client';
import prisma from '../../../constants/prisma';
import ApiError from '../../../errors/ApiError';
import { TCreateDriver, TCreateDriverResponse } from './interface';
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

    result = { ...user, ...driver, ...profile };
  });

  if (!result) throw new ApiError(400, 'Failed to create driver!');

  return result;
};
const getDrivers = async () => {
  const result = await prisma.driver.findMany({});
  return result;
};

const getDriver = async (id: string) => {
  const result = await prisma.driver.findUnique({
    where: { id },
    include: { user: true },
  });

  return result;
};

// const updateDriver = async (data: Driver): Promise<Driver> => {
//   const isExist = await prisma.profile.findUnique({
//     where: { id: data.driverId },
//   });

//   if (isExist) {
//     const result = await prisma.profile.update({
//       where: { userId: data.userId },
//       data: data,
//     });
//     return result;
//   }

//   const result = await prisma.profile.create({ data });

//   return result;
// };

const deleteDriver = async (id: string): Promise<Driver> => {
  // const usr = await prisma.user.findUnique({
  //   where: { id },
  //   include: { profile: true },
  // });
  // console.log(usr?.profile?.id);
  // if (usr?.profile?.id) {
  //   const deletedProfile = await prisma.profile.delete({
  //     where: { id: usr?.profile?.id },
  //   });
  //   console.log(deletedProfile);
  // }

  // const result = await prisma.user.delete({ where: { id } });
  const result = await prisma.driver.delete({ where: { id } });

  return result;
};

export const DriverService = {
  createDriver,
  getDrivers,
  getDriver,
  // updateDriver,
  deleteDriver,
};
