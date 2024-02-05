const bookingSearchableFields: string[] = [
  'pickUpLocation',
  'dropOffLocation',
  'userId',
  'vehicleId',
];

const bookingFilterableFields: string[] = [
  'searchTerm',
  'rentType',
  'bookingStatus',
  'paymentStatus',
];

const bookingRelationalFields: string[] = ['vehicleId', 'userId'];

const bookingRelationalFieldsMapper: { [key: string]: string } = {
  vehicleId: 'vehicle',
  userId: 'user',
};

export {
  bookingSearchableFields,
  bookingFilterableFields,
  bookingRelationalFields,
  bookingRelationalFieldsMapper,
};
