import { useContext } from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    // <!-- Footer -->
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          <img className="footer__logo__image" src="/images/nav-logo.svg" alt="" />
        </div>
        <ul className="footer__text">
          <li className="footer__text__item">
            <p>
              <span>©</span> 2020 Dear Potential All Rights Reserved
            </p>
          </li>
          <li className="footer__text__item">
            <img className="footer__text__item__image" src="/images/mail.svg" alt="" />
            <p>info@dearpotential.com</p>
          </li>
          <li className="footer__text__item">
            <img className="footer__text__item__image" src="/images/phone.svg" alt="" />
            <p>+234-817-988-3178</p>
          </li>
          <li className="footer__text__item">
            <img className="footer__text__item__image" src="/images/phone.svg" alt="" />
            <p>+234-817-988-3178</p>
          </li>
        </ul>
        <hr />
        <div className="footer__dev">
          <p>Designed and Developed by JetDev</p>
          <div className="footer__dev__sm">
            <Link href={'https://web.facebook.com/dearpotential/'}>
              <img className="header__text__sm__icon" src="/images/facebook.svg" alt="" />
            </Link>
            <Link href={'https://www.instagram.com/dearpotential/'}>
              <img className="header__text__sm__icon" src="/images/instagram.svg" alt="" />
            </Link>
            <Link href={'https://twitter.com/dearpotential/'}>
              <img className="header__text__sm__icon" src="/images/twitter.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
