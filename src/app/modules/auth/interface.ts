<<<<<<< HEAD
import { Gender, User } from '@prisma/client';
=======
import { EGender, User } from '@prisma/client';
>>>>>>> dev-borhan

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
<<<<<<< HEAD
  gender: Gender;
=======
  gender: EGender;
>>>>>>> dev-borhan
  address?: string;
  image?: string;
  contactNo: string;
};

export { TUserWithoutPassword, TLoginResponse, TRegisterResponse, TRegister };
