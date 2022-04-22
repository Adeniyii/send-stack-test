import { useState, useEffect } from 'react';

const useResetError = () => {
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  }, [error]);

  return { error, setError };
};

export default useResetError;
