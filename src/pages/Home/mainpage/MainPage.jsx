import "../Home.css";

const Home = () => {
  return (
    <div id="home-main" className="max-h-screen ">
      
      <div id="home-left" className="z-10">
        <img src="/img1.jpg" alt="" />
      </div>

      <div id="home-right" className="z-10 ">
        <h4 className="text-[3vw]">
          Momentiah <span>2025</span>
        </h4>
        <h1>
          From <span id="concept">concept</span>, <br />
          to celebration
        </h1>
        <p style={{ wordSpacing: "0.2em" }}>
          From exhibitions to private gatherings, create unforgettable <br />{" "}
          moments and endless memories
        </p>

        <div className="flex  justify-center items-center z-10" id="home-card">
          <p>
            Unleash your Imagintion ,we are here <br />
            to make it happen
          </p>

          <button className="">Explore Events</button>
        </div>
      </div>

      <div
        id="last-line"
        className="flex justify-center
      items-center relative left-[50%] text-[1.2vw] text-[#a303a3] font-[550] z-10 bottom-[15%]"
      >
        <p>
          Trusted by <span className="text-[black]">15.000+</span> Organisation
        </p>
      </div>

      <div id="hero absolute" className="z-0">
        <div id="gooye1" className="absolute"></div>
        <div id="gooye2" className="absolute"></div>
        <div id="gooye3" className="absolute"></div>
      </div>

     
    </div>
  );
};

export default Home;
