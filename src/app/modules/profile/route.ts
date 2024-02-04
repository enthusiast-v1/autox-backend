import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProfileController } from './controller';
import { AuthValidation } from './validation';
import { ERole } from '@prisma/client';
import auth from '../../middlewares/auth';

const router = Router();
const { CUSTOMER, DRIVER, ADMIN, SUPER_ADMIN } = ERole;
const { ZProfileUpdate } = AuthValidation;
const { getProfile, getProfiles, deleteProfile, updateProfile } =
  ProfileController;

router
  .patch(
    '/',
    auth(CUSTOMER, DRIVER, ADMIN, SUPER_ADMIN),
    validateRequest(ZProfileUpdate),
    updateProfile,
  )
  .delete('/:id', auth(CUSTOMER, DRIVER, ADMIN, SUPER_ADMIN), deleteProfile)
  .get('/:id', auth(CUSTOMER, DRIVER, ADMIN, SUPER_ADMIN), getProfile)
  .get('/', auth(ADMIN, SUPER_ADMIN), getProfiles);

export const ProfileRoutes = router;
