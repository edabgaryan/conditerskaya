import React, { Component } from 'react';

export default class PopupPicture extends Component {
  componentDidMount() {
    //открытие фото
    document.querySelectorAll('.work__image').forEach((image) => {
      image.onclick = () => {
        document.querySelector('.popup__picture').style.display = 'block';
        document.querySelector('.popup__picture-photo').src =
          image.getAttribute('src');
      };
    });

    document.querySelector('.popup__close').onclick = () => {
      document.querySelector('.popup__picture').style.display = 'none';
    };
    // закрытие попапов кнопкой ecs
    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        //ваша функция закрытия окна
        document.querySelector('.popup__picture').style.display = 'none';
      }
    });
    // закрытие попапов по оверлей
    document.querySelector('.popup__picture').onclick = () => {
      document.querySelector('.popup__picture').style.display = 'none';
    };
  }

  render() {
    return (
      <div className="popup popup__picture">
        <span className="popup__close">&times;</span>
        <img
          className="popup__picture-photo"
          src="./images/inter1 (2).jpg"
          alt=""
        />
      </div>
    );
  }
}
