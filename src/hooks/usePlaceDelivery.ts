import { useCallback, useState } from 'react'

import { placeDeliveryApi } from '../apis';
import { handleApiError } from '../helpers/common';
import { IDeliveryDto } from '../interfaces';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from 'axios';

export const usePlaceDelivery = () => {
	  const [submitting, setSubmitting] = useState(false);

    const placeDelivery = useCallback(async (payload: IDeliveryDto) => {
      try {
        const filteredDrops = payload.drops.filter((drop) => drop)
        payload.drops = filteredDrops
        payload.customerId = "000";

        setSubmitting(true);
        const { data } = await placeDeliveryApi(payload);
				if (data.status) {
					toast.success("Order placed successfully!")
				}
        setSubmitting(false);
      } catch (error) {
        const apiError = error as AxiosError;
        setSubmitting(false);
        toast.error(handleApiError(apiError.response));
      }
    }, []);

    return { submitting, placeDelivery };
}
