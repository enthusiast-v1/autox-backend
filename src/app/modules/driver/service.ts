import { Driver } from '@prisma/client';
import prisma from '../../../constants/prisma';
import ApiError from '../../../errors/ApiError';

const createDriver = async (data: Driver): Promise<Driver> => {
  const driver = await prisma.driver.create({ data });

  // there will be loat of change like user and profile creation and error handling

  if (!driver) throw new ApiError(400, 'Failed to create driver!');

  return driver;
};

export const DriverService = { createDriver };
