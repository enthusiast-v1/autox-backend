import { User } from '@prisma/client';
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ProfileService } from './service';

const getUsers = catchAsync(async (req: Request, res: Response) => {
  const data = await ProfileService.getUsers();

  sendResponse<User[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Users Get successfully!',
    data,
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const data = await ProfileService.getSingleUser(req.params.id);

  sendResponse<User>(res, {
    statusCode: 200,
    success: true,
    message: 'User Get successfully!',
    data,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const data = await ProfileService.deleteUser(req.params.id);

  sendResponse<User>(res, {
    statusCode: 200,
    success: true,
    message: 'User Deleted successfully!',
    data,
  });
});

export const ProfileController = {
  getUsers,
  getSingleUser,
  deleteUser,
};
