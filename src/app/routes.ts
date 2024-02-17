import { Router } from 'express';
import { AuthRoutes } from './modules/auth/route';
import { BookingRoutes } from './modules/booking/route';
import { DriverRoutes } from './modules/driver/route';
import { PaymentRoutes } from './modules/payment/payment.route';
import { ProfileRoutes } from './modules/profile/route';
import { RentRoutes } from './modules/rent/route';
import { UserRoutes } from './modules/user/route';
import { VehicleRoutes } from './modules/vehicle/route';

const router = Router();

[
  { path: '/auth', route: AuthRoutes },
  { path: '/profiles', route: ProfileRoutes },
  { path: '/users', route: UserRoutes },
  { path: '/bookings', route: BookingRoutes },
  { path: '/vehicles', route: VehicleRoutes },
  { path: '/drivers', route: DriverRoutes },
  { path: '/rents', route: RentRoutes },
  { path: '/payment', route: PaymentRoutes },
].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
