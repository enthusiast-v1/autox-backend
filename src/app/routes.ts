import { Router } from 'express';
import { AuthRoutes } from './modules/auth/route';
<<<<<<< HEAD
import { CarRoutes } from './modules/car/car.route';
=======
import { RentTypeRoutes } from './modules/rentType/route';
import { BookingRoutes } from './modules/booking/route';
>>>>>>> origin/dev-mehedi

const router = Router();

[
  { path: '/auth', route: AuthRoutes },
<<<<<<< HEAD
  { path: '/car', route: CarRoutes },
=======
  { path: '/rent-types', route: RentTypeRoutes },
  { path: '/bookings', route: BookingRoutes },
>>>>>>> origin/dev-mehedi
].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
