import { ERentType } from '@prisma/client';
import { z } from 'zod';

const ZCreateBooking = z.object({
  body: z.object({
    pickUpDate: z.string({ required_error: 'Pick up date is required!' }),
    dropOffDate: z.string({ required_error: 'Drop off date is required!' }),
    pickUpTime: z.string({ required_error: 'Pick up time is required!' }),
    dropOffTime: z.string({ required_error: 'Drop off time is required!' }),
    pickUpLocation: z.string({
      required_error: 'Pick up location is required!',
    }),
    dropOffLocation: z.string({
      required_error: 'Drop off location is required!',
    }),
    userId: z.string({ required_error: 'User id is required!' }),
    vehicleId: z.string({ required_error: 'Vehicle id is required!' }),
    promoId: z.string().optional(),
    rentType: z.enum([...Object.keys(ERentType)] as [string, ...string[]], {
      required_error: 'Rent type is required!',
    }),
  }),
});

export const BookingValidation = { ZCreateBooking };
