import { Dispatch } from "redux";

import { ActionType } from "../action_types";
import { deliveryLocationsApi } from "../../apis";
import { IDeliveryLocation } from "../../interfaces";
import { IDeliveryLocationsAction } from "../actions/deliveryLocations.action";

export const fetchDeliveryLocations =
  () => async (dispatch: Dispatch<IDeliveryLocationsAction>) => {
    try {
      const response = await deliveryLocationsApi();
      const deliveryLocations: IDeliveryLocation[] = response.data.data;

      dispatch({
        type: ActionType.FETCH_DELIVERY_LOCATIONS,
        payload: deliveryLocations,
      });
    } catch (error) {}
  };
