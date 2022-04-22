import { ActionType } from "../action_types";

export interface IDeliveryPriceAction {
  type: ActionType.UPDATE_DELIVERY_PRICE;
  payload: number;
}
