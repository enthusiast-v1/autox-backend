import { Router } from 'express';
import { AuthRoutes } from './modules/auth/route';
import { BookingRoutes } from './modules/booking/route';
import { RentTypeRoutes } from './modules/rentType/route';
import { ProfileRoutes } from './modules/userAndProfile/route';

const router = Router();

[
  { path: '/auth', route: AuthRoutes },
  { path: '/rent-types', route: RentTypeRoutes },
  { path: '/bookings', route: BookingRoutes },
  { path: '/user', route: ProfileRoutes },
].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
