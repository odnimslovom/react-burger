import {API_URL} from "../utils/constans";
import {checkResponse} from "../utils/utils";

const request = (url, options) => {
  return fetch(url, options).then(checkResponse)
}

export const getAppData = async () => {
  return request(`${API_URL}/ingredients`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export const postOrderData = async (orderID) => {
  return request(`${API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        ingredients: orderID
      }
    )
  })
}
