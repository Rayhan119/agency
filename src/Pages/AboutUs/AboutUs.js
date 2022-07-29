import React from "react";
import "./AboutUs.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../Images/project-2-560x690.jpg";
import img2 from "../Images/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const AboutUs = () => {
  return (
    <div className="about-section">
      <Container>
        <Row>
          <Col xs={6} md={8} className="img-about ">
            <div className="img-left-about">
              <img src={img1} alt="" />
            </div>
            <div className="img-right-about">
              <img src={img2} alt="" />
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="about-right-section ">
              <hr />
              <h3>About Us</h3>
              <div className="about-description">
                <ul>
                  <li className="about-check">
                    <span>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <p>
                      laceholder text commonly used to demonstrate the visual
                      form of a document or a typeface{" "}
                    </p>
                  </li>
                  <li className="about-check">
                    <span>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <p>
                      laceholder text commonly used to demonstrate the visual
                      form of a document or a typeface{" "}
                    </p>
                  </li>
                  <li className="about-check">
                    <span>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <p>
                      laceholder text commonly used to demonstrate the visual
                      form of a document or a typeface{" "}
                    </p>
                  </li>
                  <li className="about-check">
                    <span>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <p>
                      laceholder text commonly used to demonstrate the visual
                      form of a document or a typeface{" "}
                    </p>
                  </li>
                </ul>
                <div className="about-button">
                  <a href="">Learn more</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
