import { DriverUtils } from './utils';
import { ERole } from '@prisma/client';
import { TCreateDriver, TCreateDriverResponse } from './interface';
import prisma from '../../../constants/prisma';
import ApiError from '../../../errors/ApiError';

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

export const DriverService = { createDriver };
