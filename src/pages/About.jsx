// import eventDetails from "../api/eventData.json";

// export const About = () => {
//   return (
//     <section>
//       <h1 className="container-title">
//         Events You'll Love <br /> "Concerts, expos, meetups & more — explore
//         what's next."
//       </h1>

//       <div className="gradient-cards">
//         {eventDetails.slice(0, 9).map((country) => {
//           {
//             /* this is the redundant part of code */
//           }
//           const { id, EventName, City, AboutEvent, date, TicketPrice } =
//             country;

//           return (
//             <div className="card" key={id}>
//               <div className="container-card bg-blue-box">
//                 <p className="card-title">{EventName}</p>
//                 <p>
//                   <span className="card-description">Date:</span>
//                   {date}
//                 </p>
//                 <p>
//                   <span className="card-description">City:</span>
//                   {City}
//                 </p>
//                 <p>
//                   <span className="card-description">About Event:</span>
//                   {AboutEvent}
//                 </p>
//                 <p>
//                   <span className="card-description">Ticket Price: Rs-</span>
//                   {TicketPrice}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

import React from "react";
import eventDetails from "../api/eventData.json";


const About = () => {
  return (
    <div className="pt-20">
      <div className="gradient-cards">
        {eventDetails.slice(0, 9).map((country) => {
          const { image, id, EventName, City, AboutEvent, date, TicketPrice } =
            country;

          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <div className="card-image-container">
                  <img className="card-image" src={image} alt={EventName} />
                  <div className="card-price-badge">Rs-{TicketPrice}</div>
                </div>
                <div className="card-content">
                  <p className="card-title">{EventName}</p>
                  <div className="card-meta">
                    <span className="meta-item">
                      <svg className="meta-icon" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {City}
                    </span>
                    <span className="meta-item">
                      <svg className="meta-icon" viewBox="0 0 24 24">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                      </svg>
                      {date}
                    </span>
                  </div>
                  <p className="card-description">{AboutEvent}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
