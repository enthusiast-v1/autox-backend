"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRelationalFieldsMapper = exports.bookingRelationalFields = exports.bookingFilterableFields = exports.bookingSearchableFields = void 0;
const bookingSearchableFields = [
    'pickUpLocation',
    'dropOffLocation',
    'userId',
    'vehicleId',
];
exports.bookingSearchableFields = bookingSearchableFields;
const bookingFilterableFields = [
    'searchTerm',
    'rentType',
    'bookingStatus',
    'paymentStatus',
];
exports.bookingFilterableFields = bookingFilterableFields;
const bookingRelationalFields = ['vehicleId', 'userId'];
exports.bookingRelationalFields = bookingRelationalFields;
const bookingRelationalFieldsMapper = {
    vehicleId: 'vehicle',
    userId: 'user',
};
exports.bookingRelationalFieldsMapper = bookingRelationalFieldsMapper;
