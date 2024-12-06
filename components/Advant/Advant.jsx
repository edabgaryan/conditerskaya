import React from 'react';


export default function Advant() {
  return (
    <section className="advant">
      <div className="advant__block">
        <div className="advant__photo">
          <img
            className="advant__photo-img"
            src="https://img.freepik.com/free-photo/female-confectioner-making-meringue-pastry-shop_23-2150360246.jpg?t=st=1733414305~exp=1733417905~hmac=c42095ce17ed807378fb3f2c902f0602d35475ea444b002eae017a687d15e338&w=740"
            alt="фото advant"
          />
        </div>
        <div className="advant__body">
          <h2 className="advant__title">Наши ценности</h2>
          <div className="advant__list line-advant">
            <h4 className="advant__list-title">Качество</h4>
            <p className="advant__list-subtitle">
              Мы работаем на лучшем профессиональном оборудовании и
              косметических средствах. Наши специалисты регулярно повышают свою
              квалификацию. Мы никогда не стоим на месте и всегда развиваемся.
            </p>
          </div>
          <div className="advant__list">
            <h4 className="advant__list-title">Сервис и комфорт</h4>
            <p className="advant__list-subtitle">
              Комфорт гостей с первых секунд в студии - наша главная ценность.
              Мы стремимся, чтобы каждая девушка ушла от нас довольной
              полученной услугой и проведенным у нас временем.
            </p>
          </div>
          <div className="advant__list">
            <h4 className="advant__list-title">Индивидуальный подход</h4>
            <p className="advant__list-subtitle">
              Для каждого клиента мы проводим бесплатную консультацию по любому
              направлению, оказываемых в студии услуг. Подскажем, что подойдёт
              именно для вас и расскажем почему.
            </p>
          </div>
          <div className="advant__list">
            <h4 className="advant__list-title">Безопасность</h4>
            <p className="advant__list-subtitle">
              Инструменты и оборудование в нашем салоне проходят все
              обязательные этапы обработки, а все лаки и средства проходят
              ежемесячную проверку срока годности.
            </p>
          </div>
          <div className="advant__list">
            <h4 className="advant__list-title">ПЕРФЕКЦИОНИЗМ</h4>
            <p className="advant__list-subtitle">
              Профессионал своего дела - это в первую очередь перфекционист,
              стремящийся всегда превзойти самого себя.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
