import { User } from '@prisma/client';
import prisma from '../../../constants/prisma';
import ApiError from '../../../errors/ApiError';
import { matchPassword } from '../../../helpers/bcrypt';
import { createToken } from '../../../helpers/jwt';

const login = async ({ email, password }: User) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new ApiError(404, 'User not found!');

  const isPasswordMatched = await matchPassword(password, user.password);

  if (!isPasswordMatched) throw new ApiError(401, 'Password is incorrect!');

  const { id, role } = user;

  const accessToken = createToken({ id, role }, 'access');
  const refreshToken = createToken({ id, role }, 'refresh');

  return { accessToken, refreshToken };
};

export const AuthService = { login };
