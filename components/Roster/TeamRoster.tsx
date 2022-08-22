import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FantasyTeam } from "../../classes/fantasyTeam";

const TeamRoster = ({
  team,
}: {
  team: FantasyTeam;
}) => {
  return (
    <Container>
      <Row>
        <Col>{team.name}</Col>
      </Row>
      <Row className="flex-column">
        <>{team.render()}</>
      </Row>
    </Container>
  );
};

export default TeamRoster;
