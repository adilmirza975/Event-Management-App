import axios from "axios";


export const AxiosInstance = axios.create({
  baseURL:"https://www.eventbriteapi.com/v3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_EVENTBRITE_TOKEN}`,
  },
})

export const getPublicEvents = (location = "India") => {
  return AxiosInstance.get("/events/search/", {
    params: {
      "location.address": location,
      "start_date.range_start": new Date().toISOString(),
      sort_by: "date",
    },
  });
};

