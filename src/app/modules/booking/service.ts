import { Booking } from '@prisma/client';
import prisma from '../../../constants/prisma';
import ApiError from '../../../errors/ApiError';
import { BookingUtils } from './utils';

const createBooking = async (data: Booking): Promise<Booking> => {
  const vehicle = await prisma.vehicle.findUnique({
    where: { id: data.vehicleId },
  });

  if (!vehicle) throw new ApiError(400, 'Vehicle id mismatched!');

  if (vehicle.status !== 'Available')
    throw new ApiError(404, "The vehicle isn't available now!");

  // have to do some error handling via date and time

  data.bookingId = await BookingUtils.generateBookingId();

  const booking = await prisma.booking.create({ data });

  if (!booking) throw new ApiError(400, 'Failed to create booking!');

  return booking;
};

export const BookingService = { createBooking };
