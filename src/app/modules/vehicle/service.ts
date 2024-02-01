import { Vehicle } from '@prisma/client';
import prisma from '../../../constants/prisma';
import ApiError from '../../../errors/ApiError';
import { VehicleUtils } from './utils';

const createVehicle = async (data: Vehicle): Promise<Vehicle> => {
  data.vehicleId = await VehicleUtils.generateVehicleId(data.vehicleType);

  const vehicle = await prisma.vehicle.create({ data });

  if (!vehicle) throw new ApiError(400, 'Failed to created vahicle!');

  return vehicle;
};

export const VehicleService = { createVehicle };
