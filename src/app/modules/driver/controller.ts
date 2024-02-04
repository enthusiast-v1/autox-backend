import { Driver } from '@prisma/client';
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { TCreateDriverResponse } from './interface';
import { DriverService } from './service';

const createDriver = catchAsync(async (req: Request, res: Response) => {
  const data = await DriverService.createDriver(req.body);

  sendResponse<TCreateDriverResponse>(res, {
    statusCode: 201,
    success: true,
    message: 'Driver created successfully',
    data,
  });
});

const getDrivers = catchAsync(async (req: Request, res: Response) => {
  const data = await DriverService.getDrivers();

  sendResponse<Driver[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Drivers retrieve successfully!',
    data,
  });
});

export const DriverController = { createDriver, getDrivers };
