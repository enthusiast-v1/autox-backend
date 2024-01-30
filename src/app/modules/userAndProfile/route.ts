import express from 'express';
import { ProfileController } from './controller';

const router = express.Router();

router.post('/profile-update', ProfileController.updateProfile);
router.get('/', ProfileController.getUsers);
router.get('/:id', ProfileController.getSingleUser);

export const ProfileRoutes = router;
