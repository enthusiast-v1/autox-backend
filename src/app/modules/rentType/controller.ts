import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { RentTypeService } from './service';
import sendResponse from '../../../shared/sendResponse';
import { RentType } from '@prisma/client';

const createRentType = catchAsync(async (req: Request, res: Response) => {
  const data = await RentTypeService.createRentType(req.body);

  sendResponse<RentType>(res, {
    statusCode: 200,
    success: true,
    message: 'Rent type created successfully',
    data,
  });
});

const getRentType = catchAsync(async (req: Request, res: Response) => {
  const data = await RentTypeService.getRentType(req.params.id);

  sendResponse<RentType>(res, {
    statusCode: 200,
    success: true,
    message: 'Rent type retrieved successfully',
    data,
  });
});

const getRentTypes = catchAsync(async (req: Request, res: Response) => {
  const data = await RentTypeService.getRentTypes();

  sendResponse<RentType[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Rent types retrieved successfully',
    data,
  });
});

export const RentTypeController = { createRentType, getRentType, getRentTypes };
