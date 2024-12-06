import React from 'react';
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <section className="about">
      <div className="about__block">
        <div className="about__photo">
          <img
            className="about__photo-img"
            src={"https://img.freepik.com/free-photo/front-view-delicious-donuts-concept_23-2148761709.jpg?t=st=1733414073~exp=1733417673~hmac=a272a6d8ad399f8b0b07b87c46735baf8357e6594680dda2624f385c0c296a95&w=740"}
            alt="images about"
          />
        </div>
        <div className="about__body">
          <h2 className="about__title">o нас</h2>
          <p className="about__paragraph">
            
Всем привет! Меня зовут Элеонора. Я создатель семейного кондитерского дома La Familia, который уходит корнями глубоко в историю, где рецепты передавались из одного поколения нашей семьи в другое, каждое из которых привносило в них свои техники и ингредиенты, из раза в раз совершенствуя и превосходя первоисточник.
          </p>
          <Link to="/gallery" className="dgreen__btn about__btn">
            Галерея
          </Link>
        </div>
      </div>
    </section>
  );
}
