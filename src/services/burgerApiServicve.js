import {API_URL} from "../utils/constans";
import {checkResponse} from "../utils/utils";

export const getAppData = async () => {
  return fetch(`${API_URL}/ingredients`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => checkResponse(res))
}

export const postOrder = async (ingredients) => {
  return fetch(`${API_URL}/orders`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          ingredients: ingredients
        }
      )
    })
    .then(res => checkResponse(res))
}
