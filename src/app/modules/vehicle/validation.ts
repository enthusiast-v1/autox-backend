import { z } from 'zod';
import { EFuelType, EVehicleStatus, EVehicleType } from '@prisma/client';

const ZCreateVehicle = z.object({
  body: z.object({
    model: z.string({ required_error: 'Modle is required!' }),
    mileage: z.number({ required_error: 'Mileage is required!' }),
    color: z.string({ required_error: 'Color is required!' }),
    images: z.array(z.string(), { required_error: 'Images is required!' }),
    overview: z.string({ required_error: 'Overview is required!' }),
    basePrice: z.number({ required_error: 'Base price is required!' }).int(),
    fuelType: z.enum([...Object.keys(EFuelType)] as [string, ...string[]], {
      required_error: 'Fuel type is required!',
    }),
    passengerCapacity: z
      .number({ required_error: 'Passenger capacity is required!' })
      .int(),
    location: z.string({ required_error: 'Location is required!' }),
    plateNo: z.string({ required_error: 'Plate number is required!' }),
    chassisNo: z.string({ required_error: 'Chassis number is required!' }),
    status: z
      .enum([...Object.keys(EVehicleStatus)] as [string, ...string[]])
      .default(EVehicleStatus.Available)
      .optional(),
    owner: z.string().optional(),
    vehicleType: z.enum(
      [...Object.keys(EVehicleType)] as [string, ...string[]],
      { required_error: 'Vehicle type is required!' },
    ),
    driverId: z.string({ required_error: 'Driver id is required!' }),
    brandId: z.string({ required_error: 'Brand id is required!' }),
  }),
});

export const VehicleValidation = { ZCreateVehicle };
