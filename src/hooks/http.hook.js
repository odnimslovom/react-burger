import {useCallback, useState} from "react";
import {checkResponse} from "../utils/utils";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const request = useCallback(async (url,
                                     method = 'GET',
                                     body = null,
                                     headers = {'Content-type': 'application/json'}) => {

    setIsLoading(true);
    try {
      const response = await fetch(url, {method, body, headers});
      checkResponse(response);
      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (err) {
      setIsLoading(false);
      setHasError(err.message);
      throw err;
    }
  }, []);

  const clearError = useCallback(() => setHasError(null), []);
  return {isLoading, hasError, clearError, request}
}
