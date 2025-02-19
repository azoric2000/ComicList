import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png"
const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const HOMETEXT = "Home"
  const ALLTEXT = "All Comics"
  const NEWTEXT = "New List"

  const linkClass = ({ isActive }) => (isActive ? "active" : "");
  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="grid">
          <NavLink className="home" to="/">
          <img className='h-10 w-auto' src={logo} alt='My Comic List' />
          </NavLink>
          <NavLink to="/" className={`textLink ${linkClass}`}>
            {HOMETEXT}
          </NavLink>
          <NavLink to="/allcomics" className={`textLink ${linkClass}`}>
            {ALLTEXT}
          </NavLink>
          <NavLink to="/addpage" className={`textLink ${linkClass}`}>
           {NEWTEXT}
          </NavLink>
        </div>
        <FaBars className="mobileMenu" onClick={()=>setMenuOpen(!menuOpen)} />
          <div className={   menuOpen? 'mobileNav open': 'mobileNav'}>
          <NavLink to="/" className=""  onClick={()=>setMenuOpen(false)}>
            {HOMETEXT}
          </NavLink>
          <NavLink to="/allcomics" className="" onClick={()=>setMenuOpen(false)}>
            {ALLTEXT}
          </NavLink>
          <NavLink to="/addpage" className="" onClick={()=>setMenuOpen(false)}>
           {NEWTEXT}
          </NavLink>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
