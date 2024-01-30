import { Router } from 'express';
import { AuthRoutes } from './modules/auth/route';
import { CarRoutes } from './modules/car/car.route';

const router = Router();

[
  { path: '/auth', route: AuthRoutes },
  { path: '/car', route: CarRoutes },
].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
