import { Router } from 'express';
import { ERole } from '@prisma/client';
import auth from '../../middlewares/auth';
import { VehicleController } from './controller';
import { VehicleValidation } from './validation';
import validateRequest from '../../middlewares/validateRequest';

const router = Router();
const { ADMIN, SUPER_ADMIN } = ERole;
const { ZCreateVehicle, ZUpdateVehicle } = VehicleValidation;
const { createVehicle, getVehicle, getVehicles, updateVahicle } =
  VehicleController;

router
  .post(
    '/',
    auth(ADMIN, SUPER_ADMIN),
    validateRequest(ZCreateVehicle),
    createVehicle,
  )
  .patch(
    '/:id',
    auth(ADMIN, SUPER_ADMIN),
    validateRequest(ZUpdateVehicle),
    updateVahicle,
  )
  .get('/:id', getVehicle)
  .get('/', getVehicles);

export const VehicleRoutes = router;
