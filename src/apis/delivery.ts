import { client } from '.';
import { IDeliveriesPriceDto, IDeliveryDto } from '../interfaces';

/**
 * Send request for all delivery locations
 * @returns Delivery location data
 */
export const deliveryLocationsApi = () => {
  return client().get('/locations');
};

/**
 * Send request for wallet balance
 * @returns Wallet balance
 */
export const walletBalanceApi = () => {
  return client().get('/wallet/balance');
};

/**
 * Send request for delivery location price
 * @returns Delivery location price data
 */
export const deliveryPriceApi = (payload: IDeliveriesPriceDto) => {
  return client().post('/deliveries/price', payload);
};

/**
 * Send request to place a delivery
 * @returns Delivery order status
 */
export const placeDeliveryApi = (payload: IDeliveryDto) => {
  return client().post('/deliveries', payload);
};
