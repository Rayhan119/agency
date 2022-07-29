import React from "react";
import "./Service.css";
import { Card, CardGroup, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowsSpin,
  faBullseye,
  faPeopleGroup,
  faUsersRays,
} from "@fortawesome/free-solid-svg-icons";
const Service = () => {
  return (
    <div>
      <Container>
        <div className="service-section">
          <div className="service-header">
            <div className="hr-1">
              <hr />
            </div>
            <h5>Most features</h5>
            <div className="hr-2">
              <hr />
            </div>
            <h1>
              we provide most exclusive <br /> service for business
            </h1>
          </div>
          <div className="service-footer">
            <CardGroup>
              <Card className="cart-area">
                <div className="cart-header ">
                  <FontAwesomeIcon
                    className="service-icon-header"
                    icon={faPeopleGroup}
                  />
                </div>
                <Card.Body>
                  <h5>creative idea</h5>
                  <p>sed pro ande somins</p>
                </Card.Body>

                <div className="cart-button">
                  <FontAwesomeIcon
                    className="service-icon-footer"
                    icon={faArrowRight}
                  />
                </div>
              </Card>
              <Card className="cart-area">
                <div className="cart-header">
                  <FontAwesomeIcon
                    className="service-icon-header"
                    icon={faBullseye}
                  />
                </div>
                <Card.Body>
                  <h5>Buisiness stetegy</h5>
                  <p>sed pro ande somins</p>
                </Card.Body>

                <div className="cart-button">
                  <FontAwesomeIcon
                    className="service-icon-footer"
                    icon={faArrowRight}
                  />
                </div>
              </Card>
              <Card className="cart-area">
                <div className="cart-header">
                  <FontAwesomeIcon
                    className="service-icon-header"
                    icon={faUsersRays}
                  />
                </div>
                <Card.Body>
                  <h5>Relationship</h5>
                  <p>sed pro ande somins</p>
                </Card.Body>

                <div className="cart-button">
                  <FontAwesomeIcon
                    className="service-icon-footer"
                    icon={faArrowRight}
                  />
                </div>
              </Card>
              <Card className="cart-area">
                <div className="cart-header">
                  <FontAwesomeIcon
                    className="service-icon-header"
                    icon={faArrowsSpin}
                  />
                </div>
                <Card.Body>
                  <h5>Productivity</h5>
                  <p>sed pro ande somins</p>
                </Card.Body>

                <div className="cart-button">
                  <FontAwesomeIcon
                    className="service-icon-footer"
                    icon={faArrowRight}
                  />
                </div>
              </Card>
            </CardGroup>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Service;
