import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CarController } from './car.controller';
import { CarValidation } from './car.validation';

const route = Router();
const { ZAddCar } = CarValidation;
const { add } = CarController;

route.post('/add', validateRequest(ZAddCar), add);

export const CarRoutes = route;
