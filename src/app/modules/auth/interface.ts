import { User } from '@prisma/client';

type TUserWithoutPassword = Omit<User, 'password'>;

type TLoginResponse = {
  accessToken: string;
  refreshToken: string;
};

type TRegisterResponse = {
  user: TUserWithoutPassword;
} & TLoginResponse;

// name,  email, image, address,  contactNo, password.

type TRegister = {
  name: string;
  email: string;
  image?: string;
  address?: string;
  contactNo: string;
  password: string;
};

export { TLoginResponse, TRegister, TRegisterResponse, TUserWithoutPassword };
