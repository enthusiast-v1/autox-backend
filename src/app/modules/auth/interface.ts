import { User } from '@prisma/client';

type TUserWithoutPassword = Omit<User, 'password'>;

type TLoginResponse = {
  accessToken: string;
  refreshToken: string;
};

type TRegisterResponse = {
  user: TUserWithoutPassword;
} & TLoginResponse;

type TRegister = {
  name: string;
  email: string;
  image?: string;
  address?: string;
  contactNo: string;
  password: string;
};

type TChangePassword = {
  oldPassword: string;
  newPassword: string;
};

export {
  TChangePassword,
  TLoginResponse,
  TRegister,
  TRegisterResponse,
  TUserWithoutPassword,
};
