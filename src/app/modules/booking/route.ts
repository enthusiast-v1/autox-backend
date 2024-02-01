import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookingValidation } from './validation';
import { BookingController } from './controller';
import { ERole } from '@prisma/client';

const router = Router();
const { CUSTOMER } = ERole;
const { ZCreateBooking } = BookingValidation;
const { createBooking } = BookingController;

router.post(
  '/',
  auth(CUSTOMER),
  validateRequest(ZCreateBooking),
  createBooking,
);

export const BookingRoutes = router;
