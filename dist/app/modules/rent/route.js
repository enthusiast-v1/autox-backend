"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const controller_1 = require("./controller");
const validation_1 = require("./validation");
const router = (0, express_1.Router)();
const { ZCreateRent, ZUpdateRent } = validation_1.RentValidation;
const { createRent, updateRent, deleteRent, getRent, getRents } = controller_1.RentController;
router.post('/', (0, validateRequest_1.default)(ZCreateRent), createRent);
router.get('/', getRents);
router.get('/:id', getRent);
router.delete('/:id', deleteRent);
router.patch('/:id', (0, validateRequest_1.default)(ZUpdateRent), updateRent);
exports.RentRoutes = router;
