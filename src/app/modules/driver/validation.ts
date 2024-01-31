import { z } from 'zod';
import { EGender } from '@prisma/client';

const ZCreateDriver = z.object({
  body: z.object({
    // user info
    email: z.string({ required_error: 'Email is required!' }).email(),
    password: z.string({ required_error: 'Password is required!' }),

    // profile info
    firstName: z.string({ required_error: 'First name is required!' }),
    lastName: z.string({ required_error: 'Last name is required!' }),
    gender: z.enum([...Object.keys(EGender)] as [string, ...string[]], {
      required_error: 'Gender is required!',
    }),
    address: z.string().optional(),
    image: z.string().optional(),
    contactNo: z.string({ required_error: 'Contact number is required!' }),

    // driver info
    licenseNo: z.string({ required_error: 'License number id is required!' }),
    licenseExpire: z.string({
      required_error: 'License expire date is required!',
    }),
    nidNo: z.string({ required_error: 'NID number is required!' }),
  }),
});

export const DriverValidation = { ZCreateDriver };
