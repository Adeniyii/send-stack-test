import React from "react";
import { formatMoney } from "../../helpers/common";
import { useFetchWalletBalance } from "../../hooks/useFetchWalletBalance";

const WalletBalanceComponent = () => {
  const { walletBalance } = useFetchWalletBalance()

  return (
    <div className="flex gap-4">
      <h3>Wallet Balance:</h3>
      <span className="font-medium">
        {walletBalance?.data.balance
          ? formatMoney(walletBalance?.data.balance)
          : formatMoney(0)}
      </span>
    </div>
  );
};

export default WalletBalanceComponent;
