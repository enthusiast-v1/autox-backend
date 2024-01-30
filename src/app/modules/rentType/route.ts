import { Router } from 'express';
import { RentTypeController } from './controller';
import { RentTypeValidation } from './validation';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { ERole } from '@prisma/client';

const router = Router();
const { ADMIN, SUPER_ADMIN } = ERole;
const { createRentType, getRentType, getRentTypes } = RentTypeController;
const { ZCreateRentType } = RentTypeValidation;

router
  .post(
    '/',
    auth(ADMIN, SUPER_ADMIN),
    validateRequest(ZCreateRentType),
    createRentType,
  )
  .get('/:id', getRentType)
  .get('/', getRentTypes);

export const RentTypeRoutes = router;
