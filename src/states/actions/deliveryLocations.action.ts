import { IDeliveryLocation } from "../../interfaces";
import { ActionType } from "../action_types";

export interface IDeliveryLocationsAction {
  type: ActionType.FETCH_DELIVERY_LOCATIONS;
  payload: IDeliveryLocation[];
}
