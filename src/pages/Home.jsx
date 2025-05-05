import "./Home.css";

import React from "react";

const Home = () => {
  return (
    <div id="home-main">
      <div id="home-left">
        <img src="/img1.jpg" alt="" />
      </div>

      <div id="home-right">
        <h4>Momentiah <span>2025</span></h4>
        <h1>From <span id="concept">concept</span>, <br />to celebration</h1>
        <p>
          From exhibitions to private gatherings, create unforgettable <br /> moments
          and endless memories
        </p>

        <div id="home-card">
          <p>Unleash your Imagintion ,we are here to make it happen</p>
          <button id="home-card-button ">Explore Events</button></div>
      </div>

      <div id="last-line">
        <p>Trusted by <span>15.000+</span> Organisation</p>
      </div>
    </div>
  );
};

export default Home;
