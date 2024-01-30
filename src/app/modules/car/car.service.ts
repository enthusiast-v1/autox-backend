import prisma from '../../../constants/prisma';
import { ICar } from './car.interface';

const add = async (carData: ICar) => {
  const newCar = await prisma.car.create({
    data: carData,
  });

  return newCar;
};

const findAll = async () => {
  const result = await prisma.car.findMany();
  return result;
};
export const CarService = {
  add,
  findAll,
};
