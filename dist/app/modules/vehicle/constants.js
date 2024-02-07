"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleRelationalFieldsMapper = exports.vehicleRelationalFields = exports.vehicleFilterableFields = exports.vehicleSearchableFields = void 0;
const vehicleSearchableFields = [
    'model',
    'color',
    'location',
    'brand',
    'year',
];
exports.vehicleSearchableFields = vehicleSearchableFields;
const vehicleFilterableFields = [
    'searchTerm',
    'vehicleId',
    'model',
    'color',
    'basePrice',
    'fuelType',
    'passengerCapacity',
    'location',
    'status',
    'vehicleType',
    'brand',
    'year',
    'rentalRate',
];
exports.vehicleFilterableFields = vehicleFilterableFields;
const vehicleRelationalFields = ['driverId'];
exports.vehicleRelationalFields = vehicleRelationalFields;
const vehicleRelationalFieldsMapper = {
    driverId: 'driver',
};
exports.vehicleRelationalFieldsMapper = vehicleRelationalFieldsMapper;
