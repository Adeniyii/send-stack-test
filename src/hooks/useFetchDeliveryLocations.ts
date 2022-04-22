import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

import { RootState } from "../states/reducers";
import { IDeliveryLocation, ILocals } from "../interfaces/delivery";
import { fetchDeliveryLocations } from "../states/action_creators";

export const useFetchDeliveryLocations = () => {
  const deliveryLocations: IDeliveryLocation[] = useSelector((state: RootState) => state.deliveryLocations);
  const [provinces, setProvinces] = useState<ILocals[]>([]);
  const dispatch = useDispatch<any>();

  const handleSelectLocation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectProvinces(e.target!.value);
  };

  const selectProvinces = useCallback((state: string) => {
    const unSortedProvinces = deliveryLocations.find((province) => province.state === state)
    const sortedProvinces = unSortedProvinces!.locals.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      setProvinces(sortedProvinces);
  }, [deliveryLocations]);

  useEffect(() => {
    if (!deliveryLocations.length) {
      dispatch(fetchDeliveryLocations());
    }

    if (deliveryLocations.length && !provinces.length) {
      selectProvinces(deliveryLocations[0].state.toString());
    }
  }, [deliveryLocations, dispatch, provinces.length, selectProvinces]);

  return { deliveryLocations, provinces, handleSelectLocation };
};
