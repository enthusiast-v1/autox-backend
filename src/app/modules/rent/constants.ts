const rentSearchableFields: string[] = ['discount', 'downPayment'];

const rentFilterableFields: string[] = ['searchTerm'];

const rentRelationalFields: string[] = ['driverId'];

const rentRelationalFieldsMapper: { [key: string]: string } = {
  driverId: 'driver',
};

export {
  rentFilterableFields,
  rentRelationalFields,
  rentRelationalFieldsMapper,
  rentSearchableFields,
};
