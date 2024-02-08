import { Rent } from '@prisma/client';
import { Request, Response } from 'express';
import paginationFields from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { rentFilterableFields } from './constants';
import { RentService } from './service';

const createRent = catchAsync(async (req: Request, res: Response) => {
  const data = await RentService.createRent(req.body);

  sendResponse<Rent>(res, {
    statusCode: 201,
    success: true,
    message: 'Rent created successfully',
    data,
  });
});

const getRents = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, rentFilterableFields);
  const options = pick(req.query, paginationFields);
  const { meta, data } = await RentService.getRents(filters, options);

  sendResponse<Rent[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Rents retrieve successfully!',
    meta,
    data,
  });
});

const getRent = catchAsync(async (req: Request, res: Response) => {
  const data = await RentService.getRent(req.params.id);

  sendResponse<Rent>(res, {
    statusCode: 200,
    success: true,
    message: 'Rent retrieve successfully!',
    data,
  });
});

const updateRent = catchAsync(async (req: Request, res: Response) => {
  const data = await RentService.updateRent(req.params.id, req.body);

  sendResponse<Rent>(res, {
    statusCode: 200,
    success: true,
    message: 'Rent updated successfully!',
    data,
  });
});

const deleteRent = catchAsync(async (req: Request, res: Response) => {
  const data = await RentService.deleteRent(req.params.id);

  sendResponse<Rent>(res, {
    statusCode: 200,
    success: true,
    message: 'Rent deleted successfully!',
    data,
  });
});

export const RentController = {
  createRent,
  getRents,
  getRent,
  updateRent,
  deleteRent,
};
