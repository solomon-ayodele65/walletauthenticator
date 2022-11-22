import { useMutation } from "react-query";
import axiosClient from "../axios";
import { errorNotification } from "../utils";


// const all sections api mutation 
const getAllSections = async () => axiosClient.get(`/section/v1/sections`)
  .then(({ data: result }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

function useAllSections() {
  return useMutation(
    () => getAllSections(),
    {
      onError: e=> errorNotification({description: String(e || "An Error Occurred!")}),
      mutationKey: "all_sections",
      retry: 1,
    },
  );
}

// const section details api mutation 
const getSectionDetail = async (param) => axiosClient.get(`/section/v1/sections/${param}`)
  .then(({ data: result }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

function useSectionDetails() {
  return useMutation(
    (data) => getSectionDetail(data),
    {
      onError: e=> errorNotification({description: String(e || "An Error Occurred!")}),
      mutationKey: "section_details",
      retry: 1,
    },
  );
}


export {
  useAllSections,
  useSectionDetails
}