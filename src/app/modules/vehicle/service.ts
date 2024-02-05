/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma, Vehicle } from '@prisma/client';
import prisma from '../../../constants/prisma';
import ApiError from '../../../errors/ApiError';
import { VehicleUtils } from './utils';
import { TVehicleFilterRequest } from './interface';
import IPaginationOptions from '../../../interfaces/pagination';
import { IGenericResponse } from '../../../interfaces/common';
import { calculatePagination } from '../../../helpers/pagination';
import {
  vehicleRelationalFields,
  vehicleRelationalFieldsMapper,
  vehicleSearchableFields,
} from './constants';

const createVehicle = async (data: Vehicle): Promise<Vehicle> => {
  data.vehicleId = await VehicleUtils.generateVehicleId(data.vehicleType);

  const vehicle = await prisma.vehicle.create({ data });

  if (!vehicle) throw new ApiError(400, 'Failed to created vahicle!');

  return vehicle;
};

const getVehicle = async (id: string): Promise<Vehicle> => {
  const vehicle = await prisma.vehicle.findUnique({ where: { id } });

  if (!vehicle) throw new ApiError(404, 'Vehicle not found!');

  return vehicle;
};

const getVehicles = async (
  filters: TVehicleFilterRequest,
  options: IPaginationOptions,
): Promise<IGenericResponse<Vehicle[]>> => {
  const pipeline = [];
  const { limit, page, skip } = calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  if (searchTerm) {
    pipeline.push({
      OR: vehicleSearchableFields.map(field => ({
        [field]: { contains: searchTerm, mode: 'insensitive' },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    pipeline.push({
      AND: Object.keys(filterData).map(key => {
        if (vehicleRelationalFields.includes(key)) {
          return {
            [vehicleRelationalFieldsMapper[key]]: {
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

  const total = await prisma.vehicle.count({ where });

  const data = await prisma.vehicle.findMany({
    include: { driver: true },
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

export const VehicleService = { createVehicle, getVehicle, getVehicles };
