import React, { Component } from 'react';
import Map from '../../components/Map/Map';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';

export default class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInPrice: ' La Familia - Цены на десерты',
    };
  }
  render() {
    return (
      <>
        <HeaderMain name={this.state.nameInPrice} />
        <Container>
          <Tab.Container id="left tabs-example" defaultActiveKey="nails">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="desert" className="tabs__caption-link">
                      Десерты
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="cake" className="tabs__caption-link">
                      Торты
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9} className='cols'>
                <Tab.Content>
                  <Tab.Pane eventKey="desert" className="tabs__content">
                    <div className="price-list">
                      <h3 className="gallery__title title">Десерты</h3>
                      <div className="price-list__block">
                        <div className="price__service">
                          <p className="price__name">Банановый торт</p>
                          <p className="price__sum">7000 руб.</p>
                        </div>
                        <div className="price__service">
                          <p className="price__name">
                          Сметанник
                          </p>
                          <p className="price__sum">1850 руб.</p>
                        </div>
                        <div className="price__service">
                          <p className="price__name">Творожные кольца
                          </p>
                          <p className="price__sum">1650 руб.</p>
                        </div>
                        <div className="price__service">
                          <p className="price__name">Наполеон пропитанный</p>
                          <p className="price__sum">1200 руб.</p>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="cake" className="tabs__content">
                    <h3 className="gallery__title title">Торты</h3>
                    <div className="price-list__block">
                      <div className="price__service">
                        <p className="price__name">Торт «Птичье молоко»</p>
                        <p className="price__sum">1900 руб.</p>
                      </div>
                      <div className="price__service">
                        <p className="price__name">
                        Торт «Медовик»
                        </p>
                        <p className="price__sum">2800 руб.</p>
                      </div>
                      <div className="price__service">
                        <p className="price__name">
                        Торт «Маковый»
                        </p>
                        <p className="price__sum">2000 руб.</p>
                      </div>
                      
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
        <Map />
      </>
    );
  }
}
