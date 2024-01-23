import { z } from 'zod';

const ZCreateUser = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required!' }),
    email: z.string({ required_error: 'Email is required!' }).email(),
  }),
});

export { ZCreateUser };
