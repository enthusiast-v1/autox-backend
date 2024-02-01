import { Router } from 'express';
import { AuthRoutes } from './modules/auth/route';
import { VehicleRoutes } from './modules/vehicle/route';

const router = Router();

[
  { path: '/auth', route: AuthRoutes },
  { path: '/vehicle', route: VehicleRoutes },
].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
