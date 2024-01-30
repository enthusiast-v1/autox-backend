import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProfileController } from './controller';
import { AuthValidation } from './validation';

const router = express.Router();

const { ZProfileUpdate } = AuthValidation;

router.post(
  '/profile-update',
  validateRequest(ZProfileUpdate),
  ProfileController.updateProfile,
);
router.get('/', ProfileController.getUsers);
router.get('/:id', ProfileController.getSingleUser);

export const ProfileRoutes = router;
