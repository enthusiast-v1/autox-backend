import { PrismaClient, Profile } from '@prisma/client';

const prisma = new PrismaClient();

const updateProfile = async (data: Profile): Promise<Profile> => {
  const isExist = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });

  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: data,
    });
    return result;
  }

  const result = await prisma.profile.create({
    data,
  });
  return result;
};

const getProfiles = async () => {
  const result = await prisma.profile.findMany({
    // select: {
    //     email: true,
    //     name: true,
    // },
    // include: {
    //   user: true,
    // },
  });
  return result;
};

const getSingleProfile = async (id: string) => {
  const result = await prisma.profile.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
    },
  });
  return result;
};

const deleteProfile = async (id: string) => {
  const result = await prisma.profile.delete({
    where: { id },
  });

  return result;
};

export const ProfileService = {
  updateProfile,
  getProfiles,
  getSingleProfile,
  deleteProfile,
};
