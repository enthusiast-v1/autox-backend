import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './validation';
import { AuthController } from './controller';

const router = Router();
const { ZLogin, ZRegister } = AuthValidation;
const { login, register } = AuthController;

router
  .post('/login', validateRequest(ZLogin), login)
  .post('/register', validateRequest(ZRegister), register);

export const AuthRoutes = router;
