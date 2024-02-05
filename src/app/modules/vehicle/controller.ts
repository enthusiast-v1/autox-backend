import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { VehicleService } from './service';
import sendResponse from '../../../shared/sendResponse';
import { Vehicle } from '@prisma/client';
import pick from '../../../shared/pick';
import { vehicleFilterableFields } from './constants';
import paginationFields from '../../../constants/pagination';

const createVehicle = catchAsync(async (req: Request, res: Response) => {
  const data = await VehicleService.createVehicle(req.body);

  sendResponse<Vehicle>(res, {
    statusCode: 201,
    success: true,
    message: 'Vehicle created successfully',
    data,
  });
});

const getVehicle = catchAsync(async (req: Request, res: Response) => {
  const data = await VehicleService.getVehicle(req.params.id);

  sendResponse<Vehicle>(res, {
    statusCode: 200,
    success: true,
    message: 'Vehicle retrieved successfully',
    data,
  });
});

const getVehicles = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, vehicleFilterableFields);
  const options = pick(req.query, paginationFields);

  const { meta, data } = await VehicleService.getVehicles(filters, options);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Vehicle retrieved successfully',
    meta,
    data,
  });
});

export const VehicleController = { createVehicle, getVehicle, getVehicles };
