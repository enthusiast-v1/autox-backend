import prisma from '../../../constants/prisma';
import { IVehicle } from './interface';

const createVehicle = async (carData: IVehicle) => {
  const newCar = await prisma.car.create({
    data: carData,
  });

  return newCar;
};

const findAllVehicle = async () => {
  const result = await prisma.car.findMany();
  return result;
};
export const VehicleService = {
  createVehicle,
  findAllVehicle,
};
