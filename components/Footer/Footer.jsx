import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__block">
        <a href="/#" className="footer__logo">
          <img src="./images/asset-2-1.svg" alt="" />
        </a>
      </div>
      <div className="footer__info">
        <div className="f-info__item">г. Калининград, улица 9 апреля</div>
        <div>
          <a
            className="f-info__item"
            href="mailto:narinebeautystudio@gmail.com"
          >
            123@gmail.com
          </a>
          <br />
          <a className="f-info__item" href="tel:+79099999999">
            +7 (909) 999-99-99
          </a>
        </div>
      </div>
      <div className="footer__copyrights">
        <span>2024 © Все права защищены. Разработка сайта by Edy</span>
      </div>
    </footer>
  );
}
