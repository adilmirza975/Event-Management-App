import { NavLink } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";
export const HeroSection = () => {

  return (
    <main className="hero-section">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">Explore the Celebrations,<br />Dive into the pool of joy and happiness.</h1>

          <p className="paragraph" >Mehfil transforms your events into unforgettable experiences. From intimate gatherings to grand celebrations, we handle every detail with elegance and care. Discover seamless planning, creative styling, and premium service that make every occasion truly remarkable.</p>
          <NavLink to='/events'>

            <button>Start Exploring <FaArrowRightLong /></button>
          </NavLink>
        </div>

        <div className="hero-image">
          <img 
          src="/party.jpg" 
          alt="party image"
          className="banner-image" />
        </div>
      </div>
    </main>
  )
  
}