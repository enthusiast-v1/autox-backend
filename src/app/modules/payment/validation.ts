import { z } from 'zod';

const ZCreatePayment = z.object({
  body: z.object({
    amount: z.number({ required_error: 'amount is required' }),
    transactionId: z.number({ required_error: 'transaction Id is required' }),
    name: z.string({ required_error: 'name is  required' }).optional(),
    email: z.string({ required_error: 'email required' }),
    address: z.string({ required_error: 'address is  required' }),
    phone: z.string({ required_error: 'phone is required' }),

    userId: z
      .string()
      .refine(id => id.length > 0, { message: 'User ID cannot be empty' }),
  }),
});

export const PaymentValidation = { ZCreatePayment };
