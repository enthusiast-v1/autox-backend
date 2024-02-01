import { Router } from 'express';
import auth from '../../middlewares/auth';
import { ERole } from '@prisma/client';
import { DriverValidation } from './validation';
import { DriverController } from './controller';
import validateRequest from '../../middlewares/validateRequest';

const router = Router();
const { ADMIN, SUPER_ADMIN } = ERole;
const { ZCreateDriver } = DriverValidation;
const { createDriver } = DriverController;

router.post(
  '/',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(ZCreateDriver),
  createDriver,
);

export const DriverRoutes = router;
