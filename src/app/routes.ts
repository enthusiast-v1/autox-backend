import { Router } from 'express';
import { UserRoutes } from './modules/user/route';

const router = Router();

[
  { path: '/users', route: UserRoutes },
  /*
  { path: "/pathname1", route: AnotherRoute1 },
  { path: "/pathname2", route: AnotherRoute2 },
  { path: "/pathname3", route: AnotherRoute3 },
   */
].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
