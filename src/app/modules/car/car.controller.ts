import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CarService } from './car.service';

const add = catchAsync(async (req: Request, res: Response) => {
  const result = await CarService.add(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Car created successfully',
    data: result,
  });
});

const findAll = catchAsync(async (req: Request, res: Response) => {
  const result = await CarService.findAll();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Get All Car Data Successfully',
    data: result,
  });
});

export const CarController = { add, findAll };
