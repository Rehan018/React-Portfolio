import React from "react";
import "./footer.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { LiaHackerrank } from "react-icons/lia";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiStopstalk } from "react-icons/si";
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__grid">
            <div className="footer__col">
              <h2 className="footer__title">About Us</h2>
              <p className="footer__text">
                As a passionate Full Stack MERN Developer, I am dedicated to
                crafting innovative and user-centric web solutions. My goal is
                to leverage my skills and expertise to create impactful digital
                experiences that solve real-world problems.
              </p>
            </div>
            <div className="footer__col">
              <h2 className="footer__title">Quick Links</h2>
              <ul className="footer__list">
                <li>
                  <a href="#" className="footer__link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <h2 className="footer__title">Connect with Us</h2>
              <div className="footer__social">
                <a
                  href="https://github.com/Rehan018"
                  className="home__social-icon"
                  target="_blank"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/rehan018/"
                  className="home__social-icon"
                  target="_blank"
                >
                  <FiLinkedin />
                </a>
                <a
                  href="https://www.hackerrank.com/profile/rehanalam5090"
                  className="home__social-icon"
                  target="_blank"
                >
                  <LiaHackerrank />
                </a>
                <a
                  href="https://auth.geeksforgeeks.org/user/rehanalam5090"
                  className="home__social-icon"
                  target="_blank"
                >
                  <SiGeeksforgeeks />
                </a>
                <a href="https://www.stopstalk.com/user/profile/reha018"  className="home__social-icon"
                  target="_blank">
                  <SiStopstalk />
                </a>
              </div>
            </div>
            <div className="footer__col">
              <h2 className="footer__title">Newsletter</h2>
              <form className="footer__form">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="footer__input"
                />
                <button type="submit" className="footer__button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <hr className="footer__separator" />
          <p className="footer__copy">
            &copy; 2024 Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
