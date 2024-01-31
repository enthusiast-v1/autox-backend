import { Router } from 'express';
import { AuthRoutes } from './modules/auth/route';
import { RentTypeRoutes } from './modules/rentType/route';
import { BookingRoutes } from './modules/booking/route';
import { VehicleBrandRoutes } from './modules/vehicleBrand/route';

const router = Router();

[
  { path: '/auth', route: AuthRoutes },
  { path: '/rent-types', route: RentTypeRoutes },
  { path: '/bookings', route: BookingRoutes },
  { path: '/vehicle-brands', route: VehicleBrandRoutes },
].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
