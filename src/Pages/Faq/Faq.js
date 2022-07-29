import React from "react";
import "./Faq.css";
import { Container, Row, Col } from "react-bootstrap";
import faqImg from "../Images/faq.jpg";
import Accordion from "react-bootstrap/Accordion";
const Faq = () => {
  return (
    <div className="faq-section">
      <Container>
        <Row className="faq-column">
          {" "}
          <Col xs={12} md={6}>
            <div className="faq-img">
              <img src={faqImg} alt="" />
            </div>
          </Col>
          <Col xs={6} md={6}>
            <div className="faq-description">
              <hr />
              <h3>Faq</h3>
              <h1>
                Frequently Asked <br /> Qusetion
              </h1>
            </div>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How To create Mobile App In Expo!
                </Accordion.Header>
                <Accordion.Body>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Smashing Product in ?</Accordion.Header>
                <Accordion.Body>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Enterproneour in Process!</Accordion.Header>
                <Accordion.Body>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Business Policy away!!</Accordion.Header>
                <Accordion.Body>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
