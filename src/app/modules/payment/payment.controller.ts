import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { PaymentService } from './payment.service';

import sendResponse from '../../../shared/sendResponse';

const initPayment = async (req: Request, res: Response) => {
  const result = await PaymentService.initPayment(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Payment init successfully',
    data: result,
  });
};

const webhook = async (req: Request, res: Response) => {
  const result = await PaymentService.webhook(req.body.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Payment Paid Successfully!',
    data: result,
  });
};

const getAllFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // const filters = pick(req.query, ['']);
    // const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await PaymentService.getAllFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Payments fetched successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getByIdFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await PaymentService.getByIdFromDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Payment fetched successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const PaymentController = {
  initPayment,
  webhook,
  getAllFromDB,
  getByIdFromDB,
};
