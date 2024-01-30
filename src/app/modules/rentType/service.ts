import { RentType } from '@prisma/client';
import prisma from '../../../constants/prisma';
import ApiError from '../../../errors/ApiError';

const createRentType = async (data: RentType): Promise<RentType> => {
  const rentType = await prisma.rentType.create({ data });

  if (!rentType) throw new ApiError(400, 'Failed to create rent type!');

  return rentType;
};

export const RentTypeService = { createRentType };
