import { MutableRefObject, useRef } from "react";
import myFaceImg from "../images/fd-avatar.png";

export default function Navbar() {
  const navbarBtn = useRef() as MutableRefObject<HTMLAnchorElement>;
  const navbarListItems = useRef() as MutableRefObject<HTMLDivElement>;

  function handleNavBtnClick(): void {
    navbarListItems.current.classList.toggle("active");
    navbarBtn.current.classList.toggle("active");
  }

  return (
    <section
      className="fd-navbar__wrapper fd-section"
      id="about">
      <nav
        className="fd-navbar"
        id="navbar">
        <div className="fd-navbar__logo">
          <img
            src={myFaceImg}
            alt="site logo"
          />
        </div>
        <div
          ref={navbarListItems}
          className="fd-navbar__links">
          <ul>
            <li>
              <a
                onClick={handleNavBtnClick}
                className="fd-navbar__links__el"
                href="#about">
                O mně
              </a>
            </li>
            <li>
              <a
                onClick={handleNavBtnClick}
                className="fd-navbar__links__el"
                href="#skills">
                Dovednosti
              </a>
            </li>
            <li>
              <a
                onClick={handleNavBtnClick}
                className="fd-navbar__links__el"
                href="#projects">
                Projekty
              </a>
            </li>
            <li>
              <a
                onClick={handleNavBtnClick}
                className="fd-navbar__links__el"
                href="#contact">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
        <span
          ref={navbarBtn}
          onClick={handleNavBtnClick}
          className="fd-navbar__btn">
          <span className="fd-navbar__btn__bar"></span>
          <span className="fd-navbar__btn__bar"></span>
          <span className="fd-navbar__btn__bar"></span>
        </span>
        <div className="fd-navbar__social-media"></div>
      </nav>
    </section>
  );
}
