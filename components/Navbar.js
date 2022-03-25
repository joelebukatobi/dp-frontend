import { useContext } from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    // Navigation
    <div className="container container-navbar">
      <div className="navbar">
        <div className="navbar__mobile">
          {/* <!-- Navbar Logo --> */}
          <div className="navbar__mobile__logo">
            <Link href={'/'}>
              <a className="navbar__mobile__logo__link" title="navbar">
                <img className="navbar__mobile__logo__link__image" src="/images/nav-logo.svg" alt="" />
              </a>
            </Link>
          </div>

          {/* <!-- Navbar Menu --> */}
          <div className="navbar__mobile__menu">
            <div className="navbar__mobile__menu__bar"></div>
            <div className="navbar__mobile__menu__bar"></div>
            <div className="navbar__mobile__menu__bar"></div>
          </div>
        </div>

        {/* <!-- Navbar --> */}
        <nav className="navbar__nav">
          <ul className="navbar__nav__list">
            <li className="navbar__nav__list__item">
              <a href={'/'} className="navbar__nav__list__item__link active">
                Home
              </a>
            </li>
            <li className="navbar__nav__list__item">
              <a href={'/about'} className="navbar__nav__list__item__link">
                About
              </a>
            </li>
            <li className="navbar__nav__list__item">
              <a href={'/events'} className="navbar__nav__list__item__link">
                Events
              </a>
            </li>
            <li className="navbar__nav__list__item">
              <a href={'/blog'} className="navbar__nav__list__item__link">
                Blog
              </a>
            </li>
            {/* <li className="navbar__nav__list__item">
              <a href={'/gallery'} className="navbar__nav__list__item__link">
                Gallery
              </a>
            </li> */}
            <li className="navbar__nav__list__item">
              <a href={'/donate'} className="navbar__nav__list__item__link">
                Donate
              </a>
            </li>
          </ul>
        </nav>
        <a href={'/contact'} className="navbar__btn">
          <button className="btn">Contact Us</button>
        </a>
      </div>
    </div>
  );
}
