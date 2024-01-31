import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ERole } from '@prisma/client';
import { VehicleBrandValidation } from './validation';
import { VehicleBrandController } from './controller';

const router = Router();
const { ADMIN, SUPER_ADMIN } = ERole;
const { ZCreateVehicleBrand } = VehicleBrandValidation;
const { createVehicleBrand } = VehicleBrandController;

router.post(
  '/',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(ZCreateVehicleBrand),
  createVehicleBrand,
);

export const VehicleBrandRoutes = router;
