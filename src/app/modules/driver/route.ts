import { ERole } from '@prisma/client';
import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { DriverController } from './controller';
import { DriverValidation } from './validation';

const router = Router();
const { ADMIN, SUPER_ADMIN } = ERole;
const { ZCreateDriver } = DriverValidation;
const { createDriver, getDrivers } = DriverController;

router.post(
  '/',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(ZCreateDriver),
  createDriver,
);

router.get(
  '/',
  // auth(ADMIN, SUPER_ADMIN),
  // validateRequest(ZCreateDriver),
  getDrivers,
);

export const DriverRoutes = router;
