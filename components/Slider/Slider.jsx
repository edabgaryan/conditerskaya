import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
  return (
    <Carousel>

      <Carousel.Item>
        <img
          className="slider__photo "
          src="https://img.freepik.com/free-photo/close-up-hands-holding-dessert_23-2148972033.jpg?t=st=1733414111~exp=1733417711~hmac=04a3e5d7915417fb16fc8487981fb72ab7d7638a91911578b39887ce4dba4cfe&w=740"
          alt="SliderImages2"
        />
        <Carousel.Caption>
          <h1 className="title slider__title">Специальные предложения</h1>
          <p className="paragraph slider__paragraph">
          Бесплатный круассан
            <b className="slider__p-p"> 0₽</b>, действует только на первое посещение.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="slider__photo"
          src="https://img.freepik.com/free-photo/front-view-chef-plating-dessert_23-2148794101.jpg?t=st=1733414089~exp=1733417689~hmac=08cc2aecb962e7e290a7a1f93062f09ce3ccbaea96d975fbac077230deef251c&w=1380"
          alt="SliderImages1"
        />
        <Carousel.Caption>
          <h1 className="title slider__title">Специальные предложения</h1>
          <p className="paragraph slider__paragraph">
          Бесплатный круассан <b className="slider__p-p"> 0₽</b>  действует только на первое посещение.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
