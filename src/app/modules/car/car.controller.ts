import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

const add = catchAsync(async (req: Request, res: Response) => {
  const result = sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User login successfully',
    data: [],
  });
});

const findAll = catchAsync((req: Request, res: Response) => {});

export const CarController = { add, findAll };
