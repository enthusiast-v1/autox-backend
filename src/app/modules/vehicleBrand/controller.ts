import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { VehicleBrandService } from './service';
import sendResponse from '../../../shared/sendResponse';
import { VehicleBrand } from '@prisma/client';

const createVehicleBrand = catchAsync(async (req: Request, res: Response) => {
  const data = await VehicleBrandService.createVehicleBrand(req.body);

  sendResponse<VehicleBrand>(res, {
    statusCode: 201,
    success: true,
    message: 'Vehicle brand created successfully',
    data,
  });
});

export const VehicleBrandController = { createVehicleBrand };
