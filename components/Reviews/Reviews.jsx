export default function Reviews() {
    return (
      <section className="reviews">
        <div className="reviews__text">
          <h3 className="reviews__title">Отзывы наших гостей</h3>
          <p className="reviews__paragraph">Ежедневно администраторы и мастера стараются создавать комфортную обстановку для гостей и качественно оказывать услуги. Именно поэтому 99% наших клиентов оценивают наш салон на 5 баллов из 5.</p>
        </div>
        <div className="reviews__block" >
          <iframe className="reviews__iframe"  src="https://yandex.ru/maps-reviews-widget/32615640008?comments"  title="#"></iframe>
          <a className="reviews__link" href="https://yandex.ru/maps/org/narine_beauty/32615640008/" target="_blank">Narine Beauty на карте Калининграда — Яндекс Карты</a>
        </div>
      </section>
    );
    }
