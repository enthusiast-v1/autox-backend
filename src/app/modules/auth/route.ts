import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './controller';
import { AuthValidation } from './validation';

const router = Router();
const { ZLogin, ZRegister } = AuthValidation;
const { login, register } = AuthController;

router
  .post('/login', validateRequest(ZLogin), login)
  .post('/register', validateRequest(ZRegister), register);

export const AuthRoutes = router;
