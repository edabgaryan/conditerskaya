import React, { useState, useEffect } from 'react';
import { Col, Nav, Container, Row, Tab } from 'react-bootstrap';
import GalleryImages from '../GalleryImages/GalleryImages';

export default function GalleryItem() {
  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);
  const [items3, setItems3] = useState([]);
  const [items4, setItems4] = useState([]);
  const [items5, setItems5] = useState([]);
  const [items6, setItems6] = useState([]);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/603a5a19-346e-4786-93b9-38ec154016f5')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems2(json);
      });
  }, []);
  useEffect(() => {
    fetch('https://run.mocky.io/v3/f0e6e09c-96a8-42de-8c8f-8ceeb77d65c5')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems5(json);
      });
  }, []);


  return (
    <>
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="inter">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column ">
                <Nav.Item>
                  <Nav.Link eventKey="nails" className="tabs__caption-link" >
                  Десерты
                  </Nav.Link>
                  <Nav.Link eventKey="cut" className="tabs__caption-link">
                    Торты
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="nails" className="tabs__content">
                  <h3 className="gallery__title title">Десерты</h3>
                  <div className="work-list">
                    {items2.map((obj) => (
                      <GalleryImages key={obj.id} image={obj.image} />
                    ))}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="cut" className="tabs__content">
                  <h3 className="gallery__title title">
                    Торты
                  </h3>
                  <div className="work-list">
                    {items5.map((obj) => (
                      <GalleryImages key={obj.id} image={obj.image} />
                    ))}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
}
