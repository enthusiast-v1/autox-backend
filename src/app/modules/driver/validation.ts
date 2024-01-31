import { EDriverStatus } from '@prisma/client';
import { z } from 'zod';

const ZCreateDriver = z.object({
  body: z.object({
    licenseNo: z.string({ required_error: 'License number id is required!' }),
    licenseExpire: z.string({
      required_error: 'License expire date is required!',
    }),
    nidNo: z.string({ required_error: 'NID number is required!' }),
    status: z.enum([...Object.keys(EDriverStatus)] as [string, ...string[]]),
    userId: z.string({ required_error: 'User id is required!' }),
  }),
});

export const DriverValidation = { ZCreateDriver };
