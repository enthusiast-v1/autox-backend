import express from 'express';
import { ProfileController } from './controller';

const router = express.Router();

router.get('/', ProfileController.getUsers);
router.delete('/:id', ProfileController.deleteUser);
router.get('/:id', ProfileController.getSingleUser);

export const UserRoutes = router;
