import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { DriverService } from './service';
import sendResponse from '../../../shared/sendResponse';
import { Driver } from '@prisma/client';

const createDriver = catchAsync(async (req: Request, res: Response) => {
  const data = await DriverService.createDriver(req.body);

  sendResponse<Driver>(res, {
    statusCode: 201,
    success: true,
    message: 'Driver created successfully',
    data,
  });
});

export const DriverController = { createDriver };
