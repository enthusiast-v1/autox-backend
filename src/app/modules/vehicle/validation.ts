import { z } from 'zod';

const ZCreateVehicle = z.object({
  body: z.object({
    name: z.string({ required_error: ' name is required!' }),
    color: z.string({ required_error: 'color is required!' }),
    overview: z.string({ required_error: 'overview is required!' }),
    base_price: z.number({ required_error: 'base price is required!' }),
    fuel_type: z.string({ required_error: 'fuel type is required!' }),
    seats: z.number({ required_error: 'seats number is required!' }),
    location: z.string({ required_error: 'location is required!' }),
    plate_no: z.number({ required_error: 'plate no is required!' }),
    chassis_no: z.number({ required_error: 'chassis no is required!' }),
    status: z.string({ required_error: 'status is required is required!' }),
    image: z.string({ required_error: 'Image is required!' }),
  }),
});

export const VehicleValidation = { ZCreateVehicle };
