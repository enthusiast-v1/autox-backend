import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { RentController } from './controller';
import { RentValidation } from './validation';

const router = Router();
const { ZCreateRent, ZUpdateRent } = RentValidation;
const { createRent, updateRent, deleteRent, getRent, getRents } =
  RentController;

router.post('/', validateRequest(ZCreateRent), createRent);
router.get('/', getRents);
router.get('/:id', getRent);
router.delete('/:id', deleteRent);
router.patch('/:id', validateRequest(ZUpdateRent), updateRent);

export const RentRoutes = router;
