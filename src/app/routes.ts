import { Router } from 'express';
import { AuthRoutes } from './modules/auth/route';
import { RentTypeRoutes } from './modules/rentType/route';

const router = Router();

[
  { path: '/auth', route: AuthRoutes },
  { path: '/rent-types', route: RentTypeRoutes },
].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
