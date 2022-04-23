export const handleApiError = (error: any): string => {
  return error?.data
  ? error.data.message
  : "Error processing request. Please try again later"
};

export const formatMoney = (money: number) => {
  return Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(money);
}
