import { Router } from 'express';
import { AuthRoutes } from './modules/auth/route';
import { BookingRoutes } from './modules/booking/route';
import { VehicleRoutes } from './modules/vehicle/route';
import { DriverRoutes } from './modules/driver/route';

const router = Router();

[
  { path: '/auth', route: AuthRoutes },
  { path: '/bookings', route: BookingRoutes },
  { path: '/vehicles', route: VehicleRoutes },
  { path: '/drivers', route: DriverRoutes },
].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
