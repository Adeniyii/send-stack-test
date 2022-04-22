import { useCallback, useEffect, useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { walletBalanceApi } from "../apis";
import { handleApiError } from "../helpers/common";
import { IWalletBalanceData } from "../interfaces";

export const useFetchWalletBalance = () => {
  const [submitting, setSubmitting] = useState(false);
  const [walletBalance, setWalletBalance] = useState<IWalletBalanceData>();

  const fetchPrices = useCallback(
    async () => {
      try {
        setSubmitting(true);
        const response = await walletBalanceApi();
        const data: IWalletBalanceData = response.data;
				setWalletBalance(data)
        setSubmitting(false);
      } catch (error: any) {
        setSubmitting(false);
        toast.error(handleApiError(error));
      }
    },
    []
  );

	useEffect(() => {
		fetchPrices()
	}, [fetchPrices])

  return { submitting, walletBalance };
};
