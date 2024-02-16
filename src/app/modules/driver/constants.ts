const driverSearchableFields: string[] = [
  'driverId',
  'licenseNo',
  'licenseExpire',
  'nidNo',
];

const driverFilterableFields: string[] = [
  'searchTerm',
  'driverId',
  'licenseNo',
  'licenseExpire',
  'nidNo',
];

const driverRelationalFields: string[] = ['userId'];

const driverRelationalFieldsMapper: { [key: string]: string } = {
  userId: 'user',
};

export {
  driverFilterableFields,
  driverRelationalFields,
  driverRelationalFieldsMapper,
  driverSearchableFields,
};
