export const handleApiError = (error: any): string => {
  return error?.data
  ? error.data.message
  : "Error processing request. Please try again later"
};
