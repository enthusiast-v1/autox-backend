import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { VehicleService } from './service';

const createVehicle = catchAsync(async (req: Request, res: Response) => {
  const result = await VehicleService.createVehicle(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Car created successfully',
    data: result,
  });
});

const findAllVehicle = catchAsync(async (req: Request, res: Response) => {
  const result = await VehicleService.findAllVehicle();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Get All Car Data Successfully',
    data: result,
  });
});

export const VehicleController = { createVehicle, findAllVehicle };
