import { ERole } from '@prisma/client';
import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { DriverController } from './controller';
import { DriverValidation } from './validation';

const router = Router();
const { ADMIN, SUPER_ADMIN } = ERole;
const { ZCreateDriver } = DriverValidation;
const {
  createDriver,
  getDrivers,
  getDriver,
  deleteDriver,
  updateDriver,
  availableDrivers,
} = DriverController;

router
  .post(
    '/',
    auth(ADMIN, SUPER_ADMIN),
    validateRequest(ZCreateDriver),
    createDriver,
  )
  .delete('/:id', deleteDriver)
  .patch('/:id', updateDriver)
  .get('/free-drivers', availableDrivers)
  .get('/:id', getDriver)
  .get('/', getDrivers);

export const DriverRoutes = router;
