import { z } from 'zod';

const ZLogin = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required!' }).email(),
    password: z.string({ required_error: 'Password is required!' }),
  }),
});

const ZRegister = z.object({
  body: z.object({
    name: z.string({ required_error: 'First name is required!' }),
    email: z.string({ required_error: 'Email is required!' }).email(),
    password: z.string({ required_error: 'Password is required!' }),
    address: z.string().optional(),
    image: z.string().optional(),
    contactNo: z.string({ required_error: 'Contact number is required!' }),
  }),
});

export const AuthValidation = { ZLogin, ZRegister };
