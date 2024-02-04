import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getUsers = async () => {
  const result = await prisma.user.findMany({
    // select: {
    //     email: true,
    //     name: true
    // }
    include: {
      profile: true,
    },
  });
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  });
  return result;
};

const deleteUser = async (id: string) => {
  const usr = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  });
  console.log(usr?.profile?.id);
  if (usr?.profile?.id) {
    const deletedProfile = await prisma.profile.delete({
      where: { id: usr?.profile?.id },
    });
    console.log(deletedProfile);
  }

  const result = await prisma.user.delete({
    where: {
      id,
    },
  });

  return result;
};

export const ProfileService = {
  getUsers,
  getSingleUser,
  deleteUser,
};
