import { Profile } from '@prisma/client';
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ProfileService } from './service';

const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const data = await ProfileService.updateProfile(req.body);

  sendResponse<Profile>(res, {
    statusCode: 200,
    success: true,
    message: 'Profile updated successfully!',
    data,
  });
});

const getProfiles = async (req: Request, res: Response) => {
  try {
    const result = await ProfileService.getProfiles();
    res.send({
      succes: true,
      message: 'Profiles get successfully!',
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getSingleProfile = async (req: Request, res: Response) => {
  try {
    const result = await ProfileService.getSingleProfile(req.params.id);
    res.send({
      succes: true,
      message: 'Profile fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const deleteProfile = catchAsync(async (req: Request, res: Response) => {
  const data = await ProfileService.deleteProfile(req.params.id);

  sendResponse<Profile>(res, {
    statusCode: 200,
    success: true,
    message: 'Profile Deleted successfully!',
    data,
  });
});

export const ProfileController = {
  updateProfile,
  getProfiles,
  getSingleProfile,
  deleteProfile,
};
