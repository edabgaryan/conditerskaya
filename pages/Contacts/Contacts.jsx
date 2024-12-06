import React, { Component } from 'react';
import HeaderMain from '../../components/HeaderMain/HeaderMain';

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInContacts: 'La Familia - СВЯЖИТЕСЬ С НАМИ',
    };
  }
  render() {
    return (
      <>
        <HeaderMain name={this.state.nameInContacts} />
        <section className="contact ">
          <div className="contact-page container">
            <div className="contact-page__body">
              <p className="paragraph contact-page__paragraph">
              La Familia отличается своим уникальным стилем, качественными услугами и заботой о каждом госте.
              </p>
              <p className="paragraph contact-page__paragraph">
                Действует наличный и безналичный расчет
              </p>
              <div className="contact-item-list">
                <div className="contact-item">
                  <span className="contact__span">Звоните нам</span>
                  <a className="value" href="tel:+79099999999">
                    +7 (909) 999-99-99
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact__span">Пишите нам</span>
                  <a
                    className="value"
                    href="mailto:n123@gmail.com"
                  >
                    123@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact__span">Ждем вас по адресу</span>
                  <div className="value">
                    г. Калининград, Улица 9 апреля
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-page__map">
              <iframe
                className="contact-page__iframe"
                src="https://yandex.ru/map-widget/v1/-/CCUbnBVQO"
                title="#"
              ></iframe>
            </div>
          </div>
        </section>
      </>
    );
  }
}
