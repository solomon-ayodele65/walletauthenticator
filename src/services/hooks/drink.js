import { useMutation } from "react-query";
import axiosClient from "../axios";
import { errorNotification } from "../utils";


// const all drinks api mutation 
const getAllDrinks = async () => axiosClient.get(`/drink/v1/drinks`)
  .then(({ data: result }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

function useAllDrinks() {
  return useMutation(
    () => getAllDrinks(),
    {
      onError: e=> errorNotification({description: String(e || "An Error Occurred!")}),
      mutationKey: "all_drinks",
      retry: 1,
    },
  );
}

// const drink details api mutation 
const getDrinkDetail = async (param) => axiosClient.get(`/drink/v1/drinks/${param}`)
  .then(({ data: result }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

function useDrinkDetails() {
  return useMutation(
    (data) => getDrinkDetail(data),
    {
      onError: e=> errorNotification({description: String(e || "An Error Occurred!")}),
      mutationKey: "drink_details",
      retry: 1,
    },
  );
}


export {
  useAllDrinks,
  useDrinkDetails
}