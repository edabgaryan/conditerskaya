import React from 'react';


export default function Team() {
  return (
    <section className="team ">
      <div className="team__block ">
        <div className="team__body">
          <h2 className="title team__title">НАША КОМАНДА</h2>
          <p className="paragraph team__paragraph">
            Команда салона - это профессионалы высочайшего уровня. Каждый
            специалист проходил обучение у выдающихся мастеров своего дела.
          </p>
          <a href="/contacts" className="dgreen__btn team__btn">
            Контакты
          </a>
        </div>
        <div className="team__photo">
          <img src="https://img.freepik.com/free-photo/cheerful-loving-couple-bakers-drinking-coffee-looking-aside_171337-14163.jpg?t=st=1733414276~exp=1733417876~hmac=deaa8605feae86a216367895bc39a134530ed3e9a00a116113fcfc0d0d1b1f91&w=1380" className="tema__photo-img" alt="iamges-team" />
        </div>
      </div>
    </section>
  );
}
