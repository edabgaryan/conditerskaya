import React from 'react';
import Slider from '../../components/Slider/Slider';
import About from '../../components/About/About';
import Service from '../../components/Serivce/Service';
import Team from '../../components/Team/Team';
import Advant from '../../components/Advant/Advant';
import Map from '../../components/Map/Map';
import Reviews from '../../components/Reviews/Reviews';

export default function Home() {
  return (
    <>
      <Slider />
      <About />
      <Service />
      <Team />
      <Advant />
      <Reviews/>
      <Map />
    </>
  );
}
