'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.AuthRoutes = void 0;
const express_1 = require('express');
const validateRequest_1 = __importDefault(
  require('../../middlewares/validateRequest'),
);
const validation_1 = require('./validation');
const controller_1 = require('./controller');
const router = (0, express_1.Router)();
const { ZLogin, ZRegister } = validation_1.AuthValidation;
const { login, register } = controller_1.AuthController;
router
  .post('/login', (0, validateRequest_1.default)(ZLogin), login)
  .post('/register', (0, validateRequest_1.default)(ZRegister), register);
exports.AuthRoutes = router;
