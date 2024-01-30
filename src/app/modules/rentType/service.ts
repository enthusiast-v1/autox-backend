import { RentType } from '@prisma/client';
import prisma from '../../../constants/prisma';
import ApiError from '../../../errors/ApiError';

const createRentType = async (data: RentType): Promise<RentType> => {
  const isExist = await prisma.rentType.findFirst({
    where: { type: data.type },
  });

  if (isExist) throw new ApiError(409, 'The rent type is already exists!');

  const rentType = await prisma.rentType.create({ data });

  if (!rentType) throw new ApiError(400, 'Failed to create rent type!');

  return rentType;
};

const getRentType = async (id: string): Promise<RentType> => {
  const rentType = await prisma.rentType.findUnique({ where: { id } });

  if (!rentType) throw new ApiError(404, 'Rent type not found!');

  return rentType;
};

const getRentTypes = async (): Promise<RentType[]> => {
  const rentTypes = await prisma.rentType.findMany();

  return rentTypes;
};

export const RentTypeService = { createRentType, getRentType, getRentTypes };
