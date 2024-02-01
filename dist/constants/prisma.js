<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
=======
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const client_1 = require('@prisma/client');
>>>>>>> dev-borhan
const prisma = new client_1.PrismaClient({ errorFormat: 'minimal' });
exports.default = prisma;
