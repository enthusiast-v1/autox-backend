import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './validation';
import { AuthController } from './controller';

const router = Router();
const { ZLogin } = AuthValidation;
const { login } = AuthController;

router.post('/login', validateRequest(ZLogin), login);

export const AuthRoutes = router;
