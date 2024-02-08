import { Prisma, Rent } from '@prisma/client';
import httpStatus from 'http-status';
import prisma from '../../../constants/prisma';
import ApiError from '../../../errors/ApiError';
import { calculatePagination } from '../../../helpers/pagination';
import IPaginationOptions from '../../../interfaces/pagination';
import {
  rentRelationalFields,
  rentRelationalFieldsMapper,
  rentSearchableFields,
} from './constants';
import { TRentFilterRequest } from './interface';

const createRent = async (rentData: Rent): Promise<Rent> => {
  const result = await prisma.rent.create({
    data: rentData,
  });
  return result;
};

const getRents = async (
  filters: TRentFilterRequest,
  options: IPaginationOptions,
) => {
  const pipeline = [];
  const { searchTerm, ...filterData } = filters;
  const { limit, page, skip } = calculatePagination(options);

  if (searchTerm) {
    pipeline.push({
      OR: rentSearchableFields.map(field => ({
        [field]: Number.isInteger(searchTerm)
          ? searchTerm
          : parseInt(searchTerm),
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    pipeline.push({
      AND: Object.keys(filterData).map(key => {
        if (rentRelationalFields.includes(key)) {
          return {
            [rentRelationalFieldsMapper[key]]: {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              id: (filterData as any)[key],
            },
          };
        } else {
          return {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            [key]: { equals: (filterData as any)[key] },
          };
        }
      }),
    });
  }

  const where: Prisma.RentWhereInput =
    pipeline.length > 0 ? { AND: pipeline } : {};

  const total = await prisma.rent.count({ where });

  const data = await prisma.rent.findMany({
    include: {
      driver: true,
      booking: true,
    },
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

const getRent = async (id: string) => {
  const result = await prisma.rent.findUnique({
    where: {
      id,
    },
    include: {
      driver: true,
      booking: true,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Rent Id not found');
  }
  return result;
};

const updateRent = async (
  id: string,
  updateData: Partial<Rent>,
): Promise<Rent> => {
  await getRent(id);
  const result = await prisma.rent.update({
    where: {
      id,
    },
    data: updateData,
  });
  return result;
};

const deleteRent = async (id: string): Promise<Rent> => {
  await getRent(id);
  const result = await prisma.rent.delete({
    where: {
      id,
    },
  });
  return result;
};

export const RentService = {
  createRent,
  getRents,
  getRent,
  updateRent,
  deleteRent,
};
