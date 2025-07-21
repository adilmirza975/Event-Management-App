// import axios from "axios";

// export const AxiosInstance = axios.create({
//   baseURL:"https://www.eventbriteapi.com/v3",
//   headers: {
//     Authorization: `Bearer ${import.meta.env.VITE_EVENTBRITE_TOKEN}`,
//   },
// })

// export const getPublicEvents = (location = "India") => {
//   return AxiosInstance.get("/events/search/", {
//     params: {
//       "location.address": location,
//       "start_date.range_start": new Date().toISOString(),
//       sort_by: "date",
//     },
//   });
// };

// export const getEventDetails = (id) => {
//   return AxiosInstance.get(`/events/${id}`);
// };

// src/api/AxiosInstance.jsx
// src/api/AxiosInstance.jsx

// import axios from "axios";

// const token = import.meta.env.VITE_EVENTBRITE_API_TOKEN;

// const axiosInstance = axios.create({
//   baseURL: "https://www.eventbriteapi.com/v3/",
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

// export const getEventsList = async () => {
//   try {
//     const response = await axiosInstance.get("users/me/events/");
//     return {
//       status: 200,
//       data: response.data,
//     };
//   } catch (error) {
//     console.error("Error fetching events:", error);
//     return {
//       status: error.response?.status || 500,
//       data: null,
//     };
//   }
// };

// // ✅ NEW FUNCTION to get a single event by ID
// export const getEventDetails = async (eventId) => {
//   try {
//     const response = await axiosInstance.get(`events/${eventId}/`);
//     return {
//       status: 200,
//       data: response.data,
//     };
//   } catch (error) {
//     console.error("Error fetching event details:", error);
//     return {
//       status: error.response?.status || 500,
//       data: null,
//     };
//   }
// };

// export default axiosInstance;
// src/api/AxiosInstance.jsximport axios from "axios";
import axios from "axios"; 
const TOKEN = import.meta.env.VITE_EVENTBRITE_API_TOKEN;

const eventbrite = axios.create({
  baseURL: "https://www.eventbriteapi.com/v3/",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const getEventsList = async () => {
  try {
    const res = await eventbrite.get("/events/search/?location.address=delhi");
    return res.data.events;
  } catch (err) {
    console.error("Error fetching events:", err);
    return [];
  }
};

export const getEventDetails = async (eventId) => {
  try {
    const res = await eventbrite.get(`/events/${eventId}/`);
    return res.data;
  } catch (err) {
    console.error("Error fetching event details:", err);
    return null;
  }
};
