import { Router } from 'express';
import { ERole } from '@prisma/client';
import auth from '../../middlewares/auth';
import { VehicleController } from './controller';
import { VehicleValidation } from './validation';
import validateRequest from '../../middlewares/validateRequest';

const router = Router();
const { ADMIN, SUPER_ADMIN } = ERole;
const { ZCreateVehicle } = VehicleValidation;
const { createVehicle } = VehicleController;

router.post(
  '/',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(ZCreateVehicle),
  createVehicle,
);

export const VehicleRoutes = router;
