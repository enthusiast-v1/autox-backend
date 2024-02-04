import { Profile } from '@prisma/client';
import prisma from '../../../constants/prisma';

const updateProfile = async (data: Profile): Promise<Profile> => {
  const isExist = await prisma.profile.findUnique({
    where: { userId: data.userId },
  });

  if (isExist) {
    const result = await prisma.profile.update({
      where: { userId: data.userId },
      data: data,
    });
    return result;
  }

  const result = await prisma.profile.create({ data });

  return result;
};

const getProfiles = async () => {
  const result = await prisma.profile.findMany({});

  return result;
};

const getProfile = async (userId: string) => {
  const result = await prisma.profile.findUnique({
    where: { userId },
    include: { user: true },
  });

  return result;
};

const deleteProfile = async (id: string) => {
  const result = await prisma.profile.delete({ where: { id } });

  return result;
};

export const ProfileService = {
  updateProfile,
  getProfiles,
  getProfile,
  deleteProfile,
};
