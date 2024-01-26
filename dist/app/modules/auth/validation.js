"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
const ZLogin = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: 'Email is required!' }).email(),
        password: zod_1.z.string({ required_error: 'Password is required!' }),
    }),
});
const ZRegister = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string({ required_error: 'First name is required!' }),
        lastName: zod_1.z.string({ required_error: 'Last name is required!' }),
        email: zod_1.z.string({ required_error: 'Email is required!' }).email(),
        password: zod_1.z.string({ required_error: 'Password is required!' }),
        gender: zod_1.z.enum([...Object.keys(client_1.Gender)]),
        address: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        contactNo: zod_1.z.string({ required_error: 'Contact number is required!' }),
    }),
});
exports.AuthValidation = { ZLogin, ZRegister };
