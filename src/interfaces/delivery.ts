export interface IDeliveryLocation {
  state: string;
  locals: ILocals[];
}

export interface ILocals {
	name: string;
	locationCode: string;
}

export interface IDeliveriesPriceDto {
  pickupCode: string;
  dropoffCode: string;
  pickupDate: string;
  pickupGeo?: {
    lat: string;
    long: string;
  };
  dropoffGeo?: {
    lat: string;
    long: string;
  };
}

export interface IDeliveryPriceData {
  status: boolean;
  message: string;
  data: {
    price: number;
  };
}
