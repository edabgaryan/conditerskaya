import React from 'react';
import { FaWhatsapp  } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';

export default function HeaderSocials({ onClickMenu, onCloseMenu }) {
  return (
    <div>
      <ul className="header__socials">
        <div
          onClick={() => onCloseMenu(!onClickMenu)}
          className={
            onClickMenu ? 'header__open-menu active' : 'header__open-menu'
          }
        >
          <span></span>
        </div>
        <li className="h-socials__item vk">
          <a
            href="https://vk.com/narine.beauty.studio"
            rel="noreferrer"
            target="_blank"
            alt="vk"
          >
            <SlSocialVkontakte color="#333" className="h-socials__link" />
          </a>
        </li>
        <li className="h-socials__item">
        <a href="https://api.whatsapp.com/send/?phone=79622535796"             
            rel="noreferrer"
            target="_blank"
            alt="Wtatsapp">
            <FaWhatsapp color="#333" className="h-socials__link" />
          </a>
        </li>

      </ul>
    </div>
  );
}
