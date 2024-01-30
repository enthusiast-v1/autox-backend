import { Profile, User } from '@prisma/client';
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ProfileService } from './service';

const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const data = await ProfileService.updateProfile(req.body);

  sendResponse<Profile>(res, {
    statusCode: 200,
    success: true,
    message: 'User Profile updated successfully!',
    data,
  });
});

const getUsers = catchAsync(async (req: Request, res: Response) => {
  const data = await ProfileService.getUsers();

  sendResponse<User[]>(res, {
    statusCode: 200,
    success: true,
    message: 'User Profile updated successfully!',
    data,
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const data = await ProfileService.getSingleUser(req.params.id);

  sendResponse<User>(res, {
    statusCode: 200,
    success: true,
    message: 'User Profile updated successfully!',
    data,
  });
});

// const getProfiles = async (req: Request, res: Response) => {
//   try {
//     const result = await ProfileService.getProfiles();
//     res.send({
//       succes: true,
//       message: 'data fetched successfully!',
//       data: result,
//     });
//   } catch (err) {
//     res.send(err);
//   }
// };

// const getSingleProfile = async (req: Request, res: Response) => {
//   try {
//     const result = await ProfileService.getSingleProfile(req.params.id);
//     res.send({
//       succes: true,
//       message: 'data fetched successfully!',
//       data: result,
//     });
//   } catch (err) {
//     res.send(err);
//   }
// };

export const ProfileController = {
  updateProfile,
  getUsers,
  getSingleUser,
  // getProfiles,
  // getSingleProfile,
};
