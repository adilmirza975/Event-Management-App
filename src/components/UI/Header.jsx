import { NavLink } from "react-router-dom"
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from "react";



export const Header = () => {

  // navbar responsive ui- 
  // show true to mobile menu dikhega warna web-menu hi dikhega 
  const [show, setShow] = useState(false)
  const handleButtonToggle = () => {
    return setShow(!show)
  }

  return( 
  <header>
    <div className="container">
      
      <div className="grid navbar-grid">
        <div>
          <NavLink to='/'>
          <img src="/mehfil.png" alt="" className="mehfil"/>
          </NavLink>
        </div>

        <nav className={show ? "menu-mobile": "menu-web"}>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/events'>Events</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </nav>
         <div className="ham-menu">
           
            <button onClick={handleButtonToggle}><TiThMenuOutline /></button>
          </div>

      </div>
    </div>
  </header>
  )
}