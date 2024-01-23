import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ZCreateUser } from './validation';
import { UserController } from './controller';

const router = Router();
const { createUser, getUsers } = UserController;

router.post('/', validateRequest(ZCreateUser), createUser).get('/', getUsers);

export const UserRoutes = router;
