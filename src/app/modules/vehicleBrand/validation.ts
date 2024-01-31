import { z } from 'zod';

const ZCreateVehicleBrand = z.object({
  body: z.object({
    brand: z.string({ required_error: 'Brand name is required!' }),
  }),
});

export const VehicleBrandValidation = { ZCreateVehicleBrand };
