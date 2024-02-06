import { z } from 'zod';

// const ZCreateRent = z.object({
//   body: z.object({
//     downPayment: z.number().optional(),
//     discount: z.number().optional(),
//     startTime: z.date({ required_error: 'startTime required' }),
//     endTime: z.date({ required_error: 'endTime required' }),
//     overTime: z.date().optional(),
//     damageCompensation: z.number().optional(),
//     refund: z.number().optional(),
//     totalCost: z.number({ required_error: 'total cost required' }),

//     bookingId: z
//       .string()
//       .refine(id => id.length > 0, { message: 'Booking ID cannot be empty' }),
//     driverId: z
//       .string()
//       .refine(id => id.length > 0, { message: 'Driver ID cannot be empty' }),
//   }),
// });

const ZCreateRent = z.object({
  body: z
    .object({
      downPayment: z.number().optional(),
      discount: z.number().optional(),
      startTime: z.date({ required_error: 'startTime required' }),
      endTime: z.date({ required_error: 'endTime required' }),
      overTime: z.date().optional(),
      damageCompensation: z.number().optional(),
      refund: z.number().optional(),
      totalCost: z.number({ required_error: 'total cost required' }),

      bookingId: z
        .string()
        .refine(id => id.length > 0, { message: 'Booking ID cannot be empty' }),
      driverId: z
        .string()
        .refine(id => id.length > 0, { message: 'Driver ID cannot be empty' }),
    })
    .transform(data => ({
      ...data,
      startTime: new Date(data.startTime),
      endTime: new Date(data.endTime),
      overTime: data.overTime ? new Date(data.overTime) : undefined,
    })),
});

const ZUpdateRent = ZCreateRent.partial();
export const RentValidation = { ZCreateRent, ZUpdateRent };
