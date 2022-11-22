import { useMutation } from "react-query";
import axiosClient from "../axios";
import { errorNotification } from "../utils";


// const all hookahs api mutation 
const getAllHookahs = async () => axiosClient.get(`/hookah/v1/hookahs`)
  .then(({ data: result }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

function useAllHookahs() {
  return useMutation(
    () => getAllHookahs(),
    {
      onError: e=> errorNotification({description: String(e || "An Error Occurred!")}),
      mutationKey: "all_hookahs",
      retry: 1,
    },
  );
}

// const hookah details api mutation 
const getHookahDetail = async (param) => axiosClient.get(`/hookah/v1/hookahs/${param}`)
  .then(({ data: result }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

function useHookahDetails() {
  return useMutation(
    (data) => getHookahDetail(data),
    {
      onError: e=> errorNotification({description: String(e || "An Error Occurred!")}),
      mutationKey: "hookah_details",
      retry: 1,
    },
  );
}


export {
  useAllHookahs,
  useHookahDetails
}