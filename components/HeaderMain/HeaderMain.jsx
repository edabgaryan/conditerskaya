import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropLeftLine } from 'react-icons/ri';

export default class HeaderMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="gallery">
        <div className="contact__body">
          <div className="contact-text">
            <Link className="go-to__home" to="/">
              <RiArrowDropLeftLine style={{ fontSize: '25px' }} /> Вернуться на
              главную
            </Link>
            <div>
              <h3 className="title contact__title">{this.props.name}</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
