import prisma from '../../../constants/prisma';
import ApiError from '../../../errors/ApiError';

const getUsers = async () => {
  const result = await prisma.user.findMany({
    // select: {
    //     email: true,
    //     name: true
    // }
    // include: {
    //   user: true,
    // },
  });
  return result;
};

const getUser = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: { id },
    include: { profile: true },
  });

  return result;
};

const deleteUser = async (id: string): Promise<string> => {
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) throw new ApiError(404, 'User not found!');

  await prisma.$transaction(async tx => {
    await tx.profile.delete({ where: { id: user.id } });
    await tx.user.delete({ where: { id } });
  });

  return 'User and profile deleted successfully';
};

export const ProfileService = {
  getUser,
  getUsers,
  deleteUser,
};
