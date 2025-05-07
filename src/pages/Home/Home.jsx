import "./Home.css";

const Home = () => {
  return (
    <div id="home-main">
      <div id="home-left" className="z-10">
        <img src="/img1.jpg" alt="" />
      </div>

      <div id="home-right" className="z-10 ">
        <h4 >
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
      items-center relative left-[50%] text-[1.2vw] text-[#a303a3] font-[550] z-10 bottom-[-10%]"
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

      <div id='logo' className="flex  relative left-[50%] top-[-20%] justify-center items-center gap-[2vw] m-[2vw]">
   
    <div className="bg-white shadow-md p-4 rounded-xl">
      <img src="/logos/logo1.svg" alt="logo 1" className="h-10 object-contain" />
    </div>
    <div className="bg-white shadow-md p-4 rounded-xl">
      <img src="/logos/logo2.svg" alt="logo 2" className="h-10 object-contain" />
    </div>
    <div className="bg-white shadow-md p-4 rounded-xl">
      <img src="/logos/logo3.svg" alt="logo 3" className="h-10 object-contain" />
    </div>
    <div className="bg-white shadow-md p-4 rounded-xl">
      <img src="/logos/logo4.svg" alt="logo 4" className="h-10 object-contain" />
    </div>
    <div className="bg-white shadow-md p-4 rounded-xl">
      <img src="/logos/logo5.svg" alt="logo 5" className="h-10 object-contain" />
    </div>
    <div className="bg-white shadow-md p-4 rounded-xl">
      <img src="/logos/logo6.svg" alt="logo 6" className="h-10 object-contain" />
    </div>
  </div>

        
    </div>
  );
};

export default Home;
