import { User } from '@prisma/client';
import prisma from '../../../constants/prisma';
import ApiError from '../../../errors/ApiError';
import { IGenericResponse } from '../../../interfaces/common';

const createUser = async (data: User): Promise<User> => {
  const user = await prisma.user.create({ data });

  if (!user) throw new ApiError(400, 'Failed to create user!');

  return user;
};

const getUsers = async (): Promise<IGenericResponse<User[]>> => {
  const users = await prisma.user.findMany();
  const total = await prisma.user.count();

  return { meta: { page: 1, limit: 10, total }, data: users };
};

export const UserService = { createUser, getUsers };
