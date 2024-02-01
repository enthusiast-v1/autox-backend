import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProfileController } from './controller';
import { AuthValidation } from './validation';

const router = express.Router();
const { ZProfileUpdate } = AuthValidation;

router.patch(
  '/update',
  validateRequest(ZProfileUpdate),
  ProfileController.updateProfile,
);
router.get('/', ProfileController.getProfiles);
router.delete('/:id', ProfileController.deleteProfile);
router.get('/:id', ProfileController.getSingleProfile);

export const ProfileRoutes = router;
