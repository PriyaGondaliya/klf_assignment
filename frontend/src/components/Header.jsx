import React, { useState } from "react";
import "../styles/header.scss";
import "boxicons";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
const Header = ({ currentUser }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="large-header">
      <nav className="nav bd-grid">
        <div>
          <Link to="/" className="nav__logo">
            JEWELS
          </Link>
        </div>
        <div className={click ? "nav__menu" : "remove__menu"} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to="/"
                className="nav__link active"
                onClick={closeMobileMenu}
              >
                HOME
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/contact"
                className="nav__link"
                onClick={closeMobileMenu}
              >
                { currentUser && currentUser.username ? "CONTACT" : "" }
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to={currentUser && currentUser.username ? "/account" : "/login"}
                className="nav__link"
                onClick={closeMobileMenu}
              >
                { currentUser && currentUser.username ? <FaUser /> : <FiLogIn />}
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={handleClick}>
          {click ? (
            <box-icon name="x" color="black"></box-icon>
          ) : (
            <box-icon name="menu" color="black"></box-icon>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
