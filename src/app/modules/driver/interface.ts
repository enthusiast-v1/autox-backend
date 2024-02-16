import { Driver, Profile, User } from '@prisma/client';

type TCreateDriver = User & Driver & Profile;

type TCreateDriverResponse = Omit<TCreateDriver, 'password'>;

type TDriverFilterRequest = {
  searchTerm?: string | undefined;
  driverId?: string | undefined;
  licenseNo?: string | undefined;
  licenseExpire?: string | undefined;
  nidNo?: string | undefined;
};

export { TCreateDriver, TCreateDriverResponse, TDriverFilterRequest };
