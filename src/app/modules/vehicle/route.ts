import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { VehicleController } from './controller';
import { VehicleValidation } from './validation';

const route = Router();
const { ZCreateVehicle } = VehicleValidation;
const { createVehicle, findAllVehicle } = VehicleController;

route.post('/create', validateRequest(ZCreateVehicle), createVehicle);
route.get('/', findAllVehicle);

export const VehicleRoutes = route;
