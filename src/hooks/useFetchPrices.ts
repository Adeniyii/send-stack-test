import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { deliveryPriceApi } from "../apis";
import { handleApiError } from "../helpers/common";
import { IDeliveriesPriceDto } from "../interfaces";
import { IDeliveryPriceData } from "../interfaces/delivery";
import { RootState } from "../states/reducers";
import { ActionType } from "../states/action_types";

export const useFetchPrices = () => {
  const [submitting, setSubmitting] = useState(false);
  const { price } = useSelector((state: RootState) => state.deliveryPrice);
	const dispatch = useDispatch<any>()

  const fetchPrices = useCallback(async (payload: IDeliveriesPriceDto) => {
    try {
      setSubmitting(true);
      const response = await deliveryPriceApi(payload);
			const data: IDeliveryPriceData = response.data
			dispatch({type: ActionType.UPDATE_DELIVERY_PRICE, payload: data.data.price + price})
      setSubmitting(false);
    } catch (error: any) {
      setSubmitting(false);
      toast.error(handleApiError(error));
    }
  }, [dispatch, price]);

  return { submitting, fetchPrices };
};
