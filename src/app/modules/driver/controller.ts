import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { DriverService } from './service';
import sendResponse from '../../../shared/sendResponse';
import { TCreateDriverResponse } from './interface';

const createDriver = catchAsync(async (req: Request, res: Response) => {
  const data = await DriverService.createDriver(req.body);

  sendResponse<TCreateDriverResponse>(res, {
    statusCode: 201,
    success: true,
    message: 'Driver created successfully',
    data,
  });
});

export const DriverController = { createDriver };
