import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CarController } from './car.controller';
import { CarValidation } from './car.validation';

const route = Router();
const { ZAddCar } = CarValidation;
const { add, findAll } = CarController;

route.post('/add', validateRequest(ZAddCar), add);
route.get('/', findAll);

export const CarRoutes = route;
