import {API_URL} from "../utils/constans";
import {useHttp} from "../utils/hocs/http.hoc";

export const useBurgerService = () => {
  const {isLoading, hasError, clearError, request} = useHttp();

  const getAppData = async () => {
    const response = await request(`${API_URL}/ingredients`);
    return response.data;
  }

  const getOrder = async (ingredientsIDs) => {
    const response = await request(`${API_URL}/orders`, 'POST', JSON.stringify({
      ingredients: ingredientsIDs
    }));
    return response.order.number;
  }

  return {
    isLoading,
    hasError,
    clearError,
    getAppData,
    getOrder
  }
}
