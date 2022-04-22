import { IDeliveryLocation } from "../../interfaces/delivery";
import { IDeliveryLocationsAction } from "../actions/deliveryLocations.action";
import { ActionType } from "../action_types";

const initialState: IDeliveryLocation[] = [];

const countriesReducer = (state = initialState, action: IDeliveryLocationsAction): IDeliveryLocation[] => {
  switch (action.type) {
    case ActionType.FETCH_DELIVERY_LOCATIONS:
      return [ ...action.payload ];
    default:
      return [...state];
  }
};

export default countriesReducer;
