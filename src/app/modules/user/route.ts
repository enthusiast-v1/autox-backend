import { Router } from 'express';
import { ProfileController } from './controller';
import { ERole } from '@prisma/client';
import auth from '../../middlewares/auth';

const router = Router();
const { CUSTOMER, DRIVER, ADMIN, SUPER_ADMIN } = ERole;
const { getUsers, getUser, deleteUser } = ProfileController;

router
  .delete('/:id', auth(CUSTOMER, DRIVER, ADMIN, SUPER_ADMIN), deleteUser)
  .get('/:id', auth(CUSTOMER, DRIVER, ADMIN, SUPER_ADMIN), getUser)
  .get('/', auth(ADMIN, SUPER_ADMIN), getUsers);

export const UserRoutes = router;
