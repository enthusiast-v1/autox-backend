import { Booking } from '@prisma/client';
import prisma from '../../../constants/prisma';

const createBooking = async (data: Booking): Promise<Booking> => {
  const booking = await prisma.booking.create({ data });

  return booking;
};

export const BookingService = { createBooking };
