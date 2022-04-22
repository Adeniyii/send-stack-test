import { IDeliveryPriceAction } from "../actions/deliveryPrice.action";
import { ActionType } from "../action_types";

const initialState = { price: 0 };

const deliveryPrice = (state = initialState, action: IDeliveryPriceAction): { price: number } => {
  switch (action.type) {
    case ActionType.UPDATE_DELIVERY_PRICE:
      return { price: action.payload };
    default:
      return { ...state };
  }
};

export default deliveryPrice;
