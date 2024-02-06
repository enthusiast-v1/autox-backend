import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookingValidation } from './validation';
import { BookingController } from './controller';
import { ERole } from '@prisma/client';

const router = Router();
const { CUSTOMER, DRIVER, ADMIN, SUPER_ADMIN } = ERole;
const { ZCreateBooking, ZUpdateBooking } = BookingValidation;
const { createBooking, getBooking, getBookings, updateBooking } =
  BookingController;

router
  .post('/', auth(CUSTOMER), validateRequest(ZCreateBooking), createBooking)
  .patch(
    '/:id',
    auth(CUSTOMER, DRIVER, ADMIN, SUPER_ADMIN),
    validateRequest(ZUpdateBooking),
    updateBooking,
  )
  .get('/:id', auth(CUSTOMER, DRIVER, ADMIN, SUPER_ADMIN), getBooking)
  .get('/', auth(ADMIN, SUPER_ADMIN), getBookings);

export const BookingRoutes = router;
