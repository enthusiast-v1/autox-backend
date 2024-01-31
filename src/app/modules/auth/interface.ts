import { EGender, User } from '@prisma/client';

type TUserWithoutPassword = Omit<User, 'password'>;

type TLoginResponse = {
  accessToken: string;
  refreshToken: string;
};

type TRegisterResponse = {
  user: TUserWithoutPassword;
} & TLoginResponse;

type TRegister = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: EGender;
  address?: string;
  image?: string;
  contactNo: string;
};

export { TUserWithoutPassword, TLoginResponse, TRegisterResponse, TRegister };
