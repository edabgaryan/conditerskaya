import React, { Component } from 'react';
import Map from '../../components/Map/Map';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import GalleryItem from './GalleryItem/GalleryItem';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInGallery: 'La Familia - ФОТОГАЛЕРЕЯ',
    };
  }
  render() {
    return (
      <>
        <HeaderMain name={this.state.nameInGallery} />
        <GalleryItem />

        <Map />
      </>
    );
  }
}
