

import eventDetails from "../api/eventData.json";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-20">
      <h1 className="container-title">
        Get ready for a thrilling ride <br />
        Explore high-voltage events crafted just for your vibe!{" "}
      </h1>
      <div className="gradient-cards">
        {eventDetails.slice(0, 9).map((country) => {
          const { image, id, EventName, City, AboutEvent, date, TicketPrice } =
            country;

          return (
            <div className="card " key={id}>
              <div className="container-card bg-blue-box">
                <div className="card-image-container">
                  <img className="card-image" src={image} alt={EventName} />
                  {/* <div className="card-price-badge">Rs-{TicketPrice}</div> */}
                </div>
                <div className="card-content">
                  <p className="card-title">{EventName}</p>
                  <div className="card-meta">
                    {/* <span className="meta-item">
                      <svg className="meta-icon" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {City}
                    </span> */}
                    {/* <span className="meta-item">
                      <svg className="meta-icon" viewBox="0 0 24 24">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                      </svg>
                      {date}
                    </span> */}
                  </div>
                  {/* <p className="card-description">{AboutEvent}</p> */}
                </div>
     <NavLink to='events'>
       <button className="book-now-btn">
        <span>Explore More</span>
        <FaArrowRightLong className="arrow-icon" />
      </button>
     </NavLink>
              </div>
            </div>
          );
        })}
      </div>
      

     
    </div>
  );
};

export default About;
