import { EPaymentStatus, Payment } from '@prisma/client';
import prisma from '../../../constants/prisma';
import { IPayment } from './payment.interface';
import { sslService } from './ssl/ssl.service';

const initPayment = async (data: IPayment) => {
  const paymentSession = await sslService.initPayment({
    amount: data.amount,
    transactionId: data.transactionId,
    name: data.name,
    email: data.email,
    address: data.address,
    phone: data.phone,
  });

  await prisma.payment.create({
    data: {
      amount: data.amount,
      transactionId: data.transactionId,
      userId: data.userId,
    },
  });
  return paymentSession.redirectGatewayURL;
};

const webhook = async (payload: { id: string }) => {
  // if (!payload || !payload?.status || payload?.status !== 'VALID') {
  //   return {
  //     massage: 'Invalid Payment!',
  //   };
  // }
  // const result = await sslService.validate(payload);

  // if (result?.status !== 'VALID') {
  //   return {
  //     massage: 'Payment failed',
  //   };
  // }

  const { id } = payload;
  await prisma.payment.updateMany({
    where: {
      id,
    },
    data: {
      status: EPaymentStatus.Paid,
    },
  });

  return {
    massage: 'Payment Success',
  };
};

const getAllFromDB = async (): Promise<Payment[]> => {
  //   //   const { searchTerm, ...filterData } = filters;

  //   const andConditions = [];

  //   //   if (searchTerm) {
  //   //     andConditions.push({
  //   //       OR: paymentSearchableFields.map(field => ({
  //   //         [field]: {
  //   //           contains: searchTerm,
  //   //           mode: 'insensitive',
  //   //         },
  //   //       })),
  //   //     });
  //   //   }

  //   //   if (Object.keys(filterData).length > 0) {
  //   //     andConditions.push({
  //   //       AND: Object.keys(filterData).map(key => ({
  //   //         [key]: {
  //   //           equals: (filterData as any)[key],
  //   //         },
  //   //       })),
  //   //     });
  //   //   }

  //   //   const whereConditions: Prisma.PaymentWhereInput =
  //   //     andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.payment.findMany({});
  // const total = await prisma.payment.count({});

  return result;
};

const getByIdFromDB = async (id: string): Promise<Payment | null> => {
  const result = await prisma.payment.findUnique({
    where: {
      id,
    },
  });
  return result;
};

export const PaymentService = {
  initPayment,
  webhook,
  getAllFromDB,
  getByIdFromDB,
};
