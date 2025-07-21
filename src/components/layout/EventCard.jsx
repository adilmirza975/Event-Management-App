import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export const EventCard = ({ event }) => {
  const { id, name, logo, start } = event;

  return (
    <li className="event-card card">
      <div className="container-card bg-white-box">
        {logo && <img src={logo.url} alt={name.text} />}
        <div className="eventInfo">
          <p className="card-title">
            {name.text.length > 20 ? name.text.slice(0, 20) + "..." : name.text}
          </p>
          <p>
            <span className="card-description">Start:</span>{" "}
            {new Date(start.local).toLocaleString()}
          </p>
          <NavLink to={`/events/${id}`}>
            <button>
              Read More <FaArrowRightLong />
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
