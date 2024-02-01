import { z } from 'zod';
<<<<<<< HEAD
import { Gender } from '@prisma/client';
=======
import { EGender } from '@prisma/client';
>>>>>>> dev-borhan

const ZLogin = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required!' }).email(),
    password: z.string({ required_error: 'Password is required!' }),
  }),
});

const ZRegister = z.object({
  body: z.object({
    firstName: z.string({ required_error: 'First name is required!' }),
    lastName: z.string({ required_error: 'Last name is required!' }),
    email: z.string({ required_error: 'Email is required!' }).email(),
    password: z.string({ required_error: 'Password is required!' }),
<<<<<<< HEAD
    gender: z.enum([...Object.keys(Gender)] as [string, ...string[]]),
=======
    gender: z.enum([...Object.keys(EGender)] as [string, ...string[]], {
      required_error: 'Gender is required!',
    }),
>>>>>>> dev-borhan
    address: z.string().optional(),
    image: z.string().optional(),
    contactNo: z.string({ required_error: 'Contact number is required!' }),
  }),
});

export const AuthValidation = { ZLogin, ZRegister };
