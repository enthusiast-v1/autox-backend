import { EGender } from '@prisma/client';
import { z } from 'zod';

// const dZCreateDriver = z.object({
//   body: z.object({
//     // user info
//     email: z.string({ required_error: 'Email is required!' }).email(),
//     password: z.string({ required_error: 'Password is required!' }),

//     // profile info
//     name: z.string({ required_error: 'First name is required!' }),
//     gender: z.enum([...Object.keys(EGender)] as [string, ...string[]], {
//       required_error: 'Gender is required!',
//     }),
//     address: z.string().optional(),
//     image: z.string().optional(),
//     contactNo: z.string({ required_error: 'Contact number is required!' }),

//     // driver info
//     licenseNo: z.string({ required_error: 'License number id is required!' }),
//     licenseExpire: z.string({
//       required_error: 'License expire date is required!',
//     }),
//     nidNo: z.string({ required_error: 'NID number is required!' }),
//   }),
// });

// Define Zod schema for creating a driver
export const ZCreateDriver = z.object({
  body: z
    .object({
      // User info
      email: z.string({ required_error: 'Email is required!' }).email(),
      password: z.string({ required_error: 'Password is required!' }),

      // Profile info
      name: z.string({ required_error: 'First name is required!' }),
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
    })
    .strict(),
});
export const DriverValidation = { ZCreateDriver };
