import { useMutation } from "react-query";
import axiosClient from "../axios";
import { errorNotification } from "../utils";

// available section api mutation 
const getAvailableSection = async (param) => axiosClient.get(`/booked_section/v1/availablesections/${param}`)
  .then(({ data: result }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

function useAvailableSection() {
  return useMutation(
    (data) => getAvailableSection(data),
    {
      onError: e=> errorNotification({description: String(e || "An Error Occurred!")}),
      mutationKey: "available_section",
      retry: 1,
    },
  );
}

// booked section api mutation 
const getBookedSection = async () => axiosClient.get(`/booked_section/v1/bookedsections`)
  .then(({ data: result }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

function useBookedSection() {
  return useMutation(
    () => getBookedSection(),
    {
      onError: e=> errorNotification({description: String(e || "An Error Occurred!")}),
      mutationKey: "booked_section",
      retry: 1,
    },
  );
}

export {
  useAvailableSection,
  useBookedSection
}