import axios from 'axios';
import httpStatus from 'http-status';
import config from '../../../../config';
import ApiError from '../../../../errors/ApiError';
import { IPayment } from '../payment.interface';

const initPayment = async (payload: Omit<IPayment, 'userId'>) => {
  console.log(payload);
  try {
    const data = {
      store_id: config.ssl.storeId,
      store_passwd: config.ssl.storePass,
      total_amount: payload.amount,
      currency: 'BDT',
      tran_id: payload.transactionId, // use unique tran_id for each api call
      success_url: 'https://autox-bay.vercel.app/success',
      fail_url: 'http://localhost:3030/fail',
      cancel_url: 'http://localhost:3030/cancel',
      ipn_url: 'http://localhost:4000/webhook',
      shipping_method: 'N/A',
      product_name: 'Booking Payment',
      product_category: 'Payment',
      product_profile: 'Customer',
      cus_name: payload.name,
      cus_email: payload.email,
      cus_add1: payload.address,
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: payload.phone,
      cus_fax: '01711111111',
      ship_name: 'Customer Name',
      ship_add1: 'Dhaka',
      ship_add2: 'Dhaka',
      ship_city: 'Dhaka',
      ship_state: 'Dhaka',
      ship_postcode: 1000,
      ship_country: 'Bangladesh',
    };

    const response = await axios({
      method: 'post',
      url: config.ssl.sslPaymentUrl,
      data: data,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    return response.data;
  } catch (err) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Payment error');
  }
};

// const validate = async (data: any) => {
//   try {
//     const response = await axios({
//       method: 'GET',
//       url: `${config.ssl.sslValidationUrl}?val_id=${data.val_id}&store_id=${config.ssl.storeId}&store_passwd=${config.ssl.storePass}&format=json`,
//     });
//     console.log(response);
//     return response.data;
//   } catch (err) {
//     throw new ApiError(httpStatus.BAD_REQUEST, 'Payment error');
//   }
// };

export const sslService = {
  initPayment,
  // validate,
};
