import { ERentType } from '@prisma/client';
import { z } from 'zod';

const ZCreateRentType = z.object({
  body: z.object({
    type: z.enum([...Object.keys(ERentType)] as [string, ...string[]], {
      required_error: 'Rent type is required!',
    }),
  }),
});

export const RentTypeValidation = { ZCreateRentType };
