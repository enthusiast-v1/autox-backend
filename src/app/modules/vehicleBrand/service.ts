import { VehicleBrand } from '@prisma/client';
import prisma from '../../../constants/prisma';
import ApiError from '../../../errors/ApiError';

const createVehicleBrand = async (
  data: VehicleBrand,
): Promise<VehicleBrand> => {
  const isExist = await prisma.vehicleBrand.findFirst({
    where: { brand: data.brand },
  });

  if (isExist) throw new ApiError(409, 'The vehicle brand is already exists!');

  const vehicleBrand = await prisma.vehicleBrand.create({ data });

  if (!vehicleBrand) throw new ApiError(400, 'Failed to create vehicle brand!');

  return vehicleBrand;
};

export const VehicleBrandService = { createVehicleBrand };
