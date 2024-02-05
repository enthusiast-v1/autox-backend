import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { BookingService } from './service';
import sendResponse from '../../../shared/sendResponse';
import { Booking } from '@prisma/client';

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const data = await BookingService.createBooking(req.body);

  sendResponse<Booking>(res, {
    statusCode: 201,
    success: true,
    message: 'Booking created successfully',
    data,
  });
});

const getBooking = catchAsync(async (req: Request, res: Response) => {
  const data = await BookingService.getBooking(req.params.id);

  sendResponse<Booking>(res, {
    statusCode: 200,
    success: true,
    message: 'Booking retrieved successfully',
    data,
  });
});

export const BookingController = { createBooking, getBooking };
