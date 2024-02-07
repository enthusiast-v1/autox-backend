"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentValidation = void 0;
const zod_1 = require("zod");
const ZCreateRent = zod_1.z.object({
    body: zod_1.z.object({
        downPayment: zod_1.z.number().optional(),
        discount: zod_1.z.number().optional(),
        startTime: zod_1.z.string({ required_error: 'startTime required' }),
        endTime: zod_1.z.string({ required_error: 'endTime required' }),
        overTime: zod_1.z.string().optional(),
        damageCompensation: zod_1.z.number().optional(),
        refund: zod_1.z.number().optional(),
        totalCost: zod_1.z.number({ required_error: 'total cost required' }),
        bookingId: zod_1.z
            .string()
            .refine(id => id.length > 0, { message: 'Booking ID cannot be empty' }),
        driverId: zod_1.z
            .string()
            .refine(id => id.length > 0, { message: 'Driver ID cannot be empty' }),
    }),
});
const ZUpdateRent = ZCreateRent.partial();
exports.RentValidation = { ZCreateRent, ZUpdateRent };
