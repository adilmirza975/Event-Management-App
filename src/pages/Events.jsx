// import { useEffect, useState, useTransition } from "react";
// import { getEventsList } from "../api/AxiosInstance";
// import { EventCard } from "../components/layout/EventCard";

// export const Events = () => {
//   const [isPending, startTransition] = useTransition();
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await getEventsList();
//       startTransition(() => {
//         if (res.status === 200) {
//           setEvents(res.data.events);
//         }
//       });
//     };
//     fetchData();
//   }, []);

//   if (isPending) return <Loader />;

//   return (
//     <section className="event-section container">
//       <ul className="grid grid-four-cols">
//         {events.map((event) => (
//           <EventCard key={event.id} event={event} />
//         ))}
//       </ul>
//     </section>
//   );
// };

// src/components/layout/EventDetails.jsx// src/pages/Events.jsx

// import { useEffect, useState, useTransition } from "react";
// import { getEventsList } from "../api/AxiosInstance";
// import { EventCard } from "../components/layout/EventCard";

// export const Events = () => {
//   const [isPending, startTransition] = useTransition();
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await getEventsList();
//       startTransition(() => {
//         if (res.status === 200) {
//           setEvents(res.data.events);
//         }
//       });
//     };
//     fetchData();
//   }, []);

//   if (isPending) return <p>Loading events...</p>; // Add <Loader /> if it's available

//   return (
//     <section className="event-section container">
//       <ul className="grid grid-four-cols">
//         {events.map((event) => (
//           <EventCard key={event.id} event={event} />
//         ))}
//       </ul>
//     </section>
//   );
// };// src/pages/events.jsx
import { useEffect, useState } from "react";
import { getEventsList } from "../api/AxiosInstance";

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEventsList();
      setEvents(data);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events in Delhi</h1>
      {events.length === 0 && <p>No events found.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="border rounded-xl p-4 shadow-md hover:shadow-xl transition-all"
          >
            <h2 className="text-lg font-semibold">{event.name.text}</h2>
            <p className="text-sm mt-2 text-gray-600">
              {event.description.text
                ? event.description.text.slice(0, 100) + "..."
                : "No description."}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              📅 {new Date(event.start.local).toLocaleString()}
            </p>
            <a
              href={event.url}
              target="_blank"
              className="inline-block mt-3 text-blue-500 hover:underline"
            >
              View on Eventbrite →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
