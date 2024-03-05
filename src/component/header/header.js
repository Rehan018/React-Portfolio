import React, { useState } from "react";
import "./header.css";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBadgeCheck,
  HiOutlineClipboardList,
  HiOutlinePhotograph,
  HiOutlineMail,
  HiX,
  HiOutlineMenu,
} from "react-icons/hi";
import { RiAccountCircleLine } from "react-icons/ri";
import UserAuth from "../SingUp/UserAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu, setToggleState] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [toggleState]=useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const handleUserAccount = () => {
    showMenu(!Toggle);
  };

  return (
    <Router>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Rehan Portfolio
          </a>
          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <HiOutlineHome className="nav__icon" />
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={
                    activeNav === "#about"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <HiOutlineUser className="nav__icon" />
                  About
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={
                    activeNav === "#skills"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <HiOutlineBadgeCheck className="nav__icon" />
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#services"
                  onClick={() => setActiveNav("#services")}
                  className={
                    activeNav === "#services"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <HiOutlineClipboardList className="nav__icon" />
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#portfolio"
                  onClick={() => setActiveNav("#portfolio")}
                  className={
                    activeNav === "#portfolio"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <HiOutlinePhotograph className="nav__icon" />
                  Projects
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={
                    activeNav === "#contact"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <HiOutlineMail className="nav__icon" />
                  Contact
                </a>
              </li>
              {/* Signup and Login Buttons */}
              <li className="nav__item">
                <span className="services__button" onClick={toggleTab}>
                  Account
                  <RiAccountCircleLine className="services__button-icon" />
                </span>
                <div className={Toggle ? "services__modal active-modal" : "services__modal"}>
                  <UserAuth />
                </div>
              </li>
            </ul>
            <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <HiOutlineMenu />
          </div>
        </nav>
      </header>
    </Router>
  );
};

export default Header;
