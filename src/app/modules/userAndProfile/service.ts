import { PrismaClient, Profile } from '@prisma/client';

const prisma = new PrismaClient();

const updateProfile = async (data: Profile): Promise<Profile> => {
  const result = await prisma.profile.update({
    where: {
      userId: data.userId,
    },
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      address: data.address,
      contactNo: data.contactNo,
      emergContact: data.emergContact,
      image: data.image,
    },
  });
  return result;
};

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

// const getProfiles = async () => {
//   const result = await prisma.profile.findMany({
//     select: {
//       email: true,
//       name: true,
//     },
//     include: {
//       user: true,
//     },
//   });
//   return result;
// };

// const getSingleProfile = async (id: string) => {
//   const result = await prisma.profile.findUnique({
//     where: {
//       id,
//     },
//     include: {
//       user: true,
//     },
//   });
//   return result;
// };

export const ProfileService = {
  updateProfile,
  getUsers,
  getSingleUser,
  // getProfiles,
  // getSingleProfile,
};
