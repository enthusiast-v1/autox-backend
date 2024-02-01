import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { VehicleService } from './service';
import sendResponse from '../../../shared/sendResponse';
import { Vehicle } from '@prisma/client';

const createVehicle = catchAsync(async (req: Request, res: Response) => {
  const data = await VehicleService.createVehicle(req.body);

  sendResponse<Vehicle>(res, {
    statusCode: 201,
    success: true,
    message: 'Vehicle created successfully',
    data,
  });
});

export const VehicleController = { createVehicle };
