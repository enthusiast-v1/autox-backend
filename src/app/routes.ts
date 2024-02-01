import { Router } from 'express';
import { AuthRoutes } from './modules/auth/route';
import { ProfileRoutes } from './modules/profile/route';
import { UserRoutes } from './modules/user/route';

const router = Router();

[
  { path: '/auth', route: AuthRoutes },
  { path: '/profile', route: ProfileRoutes },
  { path: '/user', route: UserRoutes },
].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
