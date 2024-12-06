import React from 'react';

export default function Map() {
  return (
    <section className="map">
      <div className="map__block container">
        <div className="map__caption">
          <h3 className="map__title title">Наш адрес</h3>
          <p className="map__paragraph paragraph">
            Калининград, улица 9 апреля
          </p>
        </div>
      </div>
      <iframe
        className="map__iframe"
        src="https://yandex.ru/map-widget/v1/-/CCUbnBQOC"
        title="#"
      />
    </section>
  );
}
