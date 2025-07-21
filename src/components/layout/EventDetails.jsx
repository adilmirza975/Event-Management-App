import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect, useTransition } from "react";
import { getEventDetails } from "../../api/AxiosInstance.jsx";

export const EventDetails = () => {
  const params = useParams(); // get :id from URL
  const [isPending, startTransition] = useTransition();
  const [event, setEvent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getEventDetails(params.id);
        startTransition(() => {
          if (res.status === 200) {
            setEvent(res.data);
          }
        });
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="card event-details-card container">
      <div className="container-card bg-white-box">
        {event && (
          <div className="event-content grid grid-two-cols">
            {/* Image if available */}
            {event.logo && (
              <img
                src={event.logo.original.url}
                alt={event.name.text}
                className="event-image"
              />
            )}

            {/* Info */}
            <div className="event-text">
              <p className="card-title">{event.name.text}</p>

              <div className="infoContainer">
                <p>
                  <span className="card-description">Start: </span>
                  {new Date(event.start.local).toLocaleString()}
                </p>
                <p>
                  <span className="card-description">End: </span>
                  {new Date(event.end.local).toLocaleString()}
                </p>
                <p>
                  <span className="card-description">Status: </span>
                  {event.status}
                </p>
                <p>
                  <span className="card-description">Online Event: </span>
                  {event.online_event ? "Yes" : "No"}
                </p>
                <p>
                  <span className="card-description">Summary: </span>
                  {event.summary || "N/A"}
                </p>
                <p>
                  <span className="card-description">Description: </span>
                  {event.description.text?.slice(0, 300)}...
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="event-card-backbtn">
          <NavLink to="/events">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
