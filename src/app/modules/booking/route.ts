import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookingValidation } from './validation';
import { BookingController } from './controller';
import { ERole } from '@prisma/client';

const router = Router();
const { CUSTOMER, DRIVER, ADMIN, SUPER_ADMIN } = ERole;
const { ZCreateBooking } = BookingValidation;
const { createBooking, getBooking } = BookingController;

router
  .post('/', auth(CUSTOMER), validateRequest(ZCreateBooking), createBooking)
  .get('/:id', auth(CUSTOMER, DRIVER, ADMIN, SUPER_ADMIN), getBooking);

export const BookingRoutes = router;
