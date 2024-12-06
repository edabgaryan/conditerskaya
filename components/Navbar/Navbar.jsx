import React, { useState } from 'react';

import Home from '../../pages/Home/Home';
import Gallery from '../../pages/Gallery/Gallery';
import Price from '../../pages/Price/Price';
import Contacts from '../../pages/Contacts/Contacts';
import Notefondpage from '../../pages/Notfoundpage/Notefondpage';
import { Routes, Route, Link } from 'react-router-dom';

import HeaderSocials from '../HeaderSocials/HeaderSocials';

export default function Navbar() {
  const [menuOpenend, setMenuOpenend] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__wrap container">
          <Link to="/" className="header__logo"></Link>
          <nav
            className={menuOpenend ? 'header__menu active' : 'header__menu'}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="h-menu__wrap">
              <li className="h-menu__item">
                <Link
                  onClick={() => setMenuOpenend(!menuOpenend)}
                  to="/"
                  className="h-menu__link"
                >
                  О нас
                </Link>
              </li>
              <li className="h-menu__item">
                <Link
                  onClick={() => setMenuOpenend(!menuOpenend)}
                  to="/price"
                  className="h-menu__link"
                >
                  Меню
                </Link>
              </li>
              <li className="h-menu__item">
                <Link
                  onClick={() => setMenuOpenend(!menuOpenend)}
                  to="/gallery"
                  className="h-menu__link"
                >
                  Наши работы
                </Link>
              </li>
              <li className="h-menu__item last">
                <Link
                  onClick={() => setMenuOpenend(!menuOpenend)}
                  to="/contacts"
                  className="h-menu__link"
                >
                  Контакты
                </Link>
              </li>
              <li className="h-menu__item h-menu__item-whapp">
                  <a 
                    className="whapp__btn" 
                    href="https://api.whatsapp.com/send/?phone=79622535796"             
                    rel="noreferrer"
                    target="_blank"
                    alt="Wtatsapp">
                      WhatsApp
                  </a>
              </li>
            </ul>
          </nav>
          <HeaderSocials
            onClickMenu={menuOpenend}
            onCloseMenu={setMenuOpenend}
          />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Notefondpage />} />
      </Routes>
    </>
  );
}
