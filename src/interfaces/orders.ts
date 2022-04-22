export interface IPickup {
  address: string;
  locationCode: string;
  pickupName: string;
  pickupNumber: string;
  altPickupNumber: string;
  pickupDate: string;
  note?: string;
}

export interface IDrops {
  locationCode: string;
  address: string;
  recipientName: string;
  recipientNumber: string;
  altRecipientNumber: string;
  note?: string;
}

export interface IDeliveryDto {
  customerId: string;
  pickup: IPickup;
  drops: IDrops[];
}
