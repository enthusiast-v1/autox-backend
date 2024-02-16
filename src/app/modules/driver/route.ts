import { ERole } from '@prisma/client';
import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { DriverController } from './controller';
import { DriverValidation } from './validation';

const router = Router();
const { ADMIN, SUPER_ADMIN, DRIVER, CUSTOMER } = ERole;
const { ZCreateDriver } = DriverValidation;
const {
  createDriver,
  getDrivers,
  getDriver,
  deleteDriver,
  updateDriver,
  availableDrivers,
} = DriverController;

router.post(
  '/',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(ZCreateDriver),
  createDriver,
);

router.get('/', auth(ADMIN, SUPER_ADMIN), getDrivers);
router.get('/free-drivers', availableDrivers);
router.get('/:id', auth(ADMIN, SUPER_ADMIN, DRIVER, CUSTOMER), getDriver);
router.patch('/:id', auth(ADMIN, SUPER_ADMIN, DRIVER), updateDriver);
router.delete('/:id', auth(ADMIN, SUPER_ADMIN), deleteDriver);

export const DriverRoutes = router;
