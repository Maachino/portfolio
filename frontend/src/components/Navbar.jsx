import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { menu } from "../services/menu";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function handleClick() {
    setOpen(!isOpen);
  }

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isOpen ? "show__nav" : "hide__Nav"}`}>
          {menu.map((option) => (
            <li key={option.id}>
              <NavLink
                to={option.path}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
                onClick={() => setOpen(!isOpen)}
              >
                {option.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button type="button" className="nav__toggle-btn" onClick={handleClick}>
          {isOpen ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
