import { EGender } from '@prisma/client';

import { z } from 'zod';

const ZProfileUpdate = z.object({
  body: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    gender: z
      .enum([...Object.keys(EGender)] as [string, ...string[]])
      .optional(),
    address: z.string().optional(),
    image: z.string().optional(),
    contactNo: z.string().optional(),
    emergContact: z.string().optional(),
    dateOfBirth: z.date().optional(),
  }),
});

export const AuthValidation = { ZProfileUpdate };
