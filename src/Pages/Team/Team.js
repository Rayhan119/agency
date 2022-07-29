import React from "react";
import "./Team.css";
import { Card, CardGroup, Container } from "react-bootstrap";
import teamImg1 from "../Images/team1.jpg";
import teamImg2 from "../Images/team2.jpg";
import teamImg3 from "../Images/team3.jpg";
import teamImg4 from "../Images/team4.jpg";
import teamImg5 from "../Images/team5.jpg";
const Team = () => {
  return (
    <div>
      <Container>
        <div className="team-section">
          <div className="team-header">
            <div className="team-header">
              <div className="hr-1">
                <hr />
              </div>
              <h5>Team Member</h5>
              <div className="hr-2">
                <hr />
              </div>
              <h1>
                meet our professional <br />
                Expertise
              </h1>
            </div>
          </div>
          <div className="team-main-section">
            <CardGroup>
              <Card className="team-cart">
                <img src={teamImg1} alt="" />
              </Card>
              <Card className="team-cart">
                <img src={teamImg2} alt="" />
              </Card>
              <Card className="team-cart">
                <img src={teamImg3} alt="" />
              </Card>
              <Card className="team-cart">
                <img src={teamImg4} alt="" />
              </Card>
              <Card className="team-cart">
                <img src={teamImg5} alt="" />
              </Card>
            </CardGroup>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
