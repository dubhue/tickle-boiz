import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import get from "lodash/get";
import styled from "styled-components";

const Wrap = styled(Container)`
  font-family: "Overpass Mono", sans-serif;
  text-transform: uppercase;
`;

const RosterSlot = ({ name, short, bye, pos }) => {
  //console.log(name, short, bye, pos);
  return pos ? (
    <Row>
      <Col xs="auto" style={{ fontWeight: "bold" }}>
        {pos}
      </Col>
      <Col style={{ fontSize: ".8rem" }}>
        {name && short ? `${name}, ${short}` : "_________"}
      </Col>
      {bye ? <Col xs="auto">{bye}</Col> : null}
    </Row>
  ) : null;
};

const Roster = ({ team }) => {
  const { roster } = team;
  const QB = `QB`;
  const RB1 = `RB[0]`;
  const RB2 = `RB[1]`;
  const WR1 = `WR[0]`;
  const WR2 = `WR[1]`;
  const TE = `TE`;
  const D_ST = "D/ST";
  const K = `K`;
  const FLEX = `FLEX`;
  const BENCH = `BENCH`;
  return (
    <Wrap>
      <Row>
        <Col>
          <Row className="flex-column">
            <Col>
              <RosterSlot
                pos={QB}
                bye={get(roster, `${QB}.team.bye`)}
                name={get(roster, `${QB}.shortName`)}
                short={get(roster, `${QB}.team.short`)}
              />
            </Col>
            <Col>
              <RosterSlot
                pos={"RB1"}
                bye={get(roster, `${RB1}.team.bye`)}
                name={get(roster, `${RB1}.shortName`)}
                short={get(roster, `${RB1}.team.short`)}
              />
            </Col>
            <Col>
              <RosterSlot
                pos={"RB2"}
                bye={get(roster, `${RB2}.team.bye`)}
                name={get(roster, `${RB2}.shortName`)}
                short={get(roster, `${RB2}.team.short`)}
              />
            </Col>
            <Col>
              <RosterSlot
                pos={"WR1"}
                bye={get(roster, `${WR1}.team.bye`)}
                name={get(roster, `${WR1}.shortName`)}
                short={get(roster, `${WR1}.team.short`)}
              />
            </Col>
            <Col>
              <RosterSlot
                pos={"WR2"}
                bye={get(roster, `${WR2}.team.bye`)}
                name={get(roster, `${WR2}.shortName`)}
                short={get(roster, `${WR2}.team.short`)}
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="flex-column">
            <Col>
              <RosterSlot
                pos={"TE"}
                bye={get(roster, `${TE}.team.bye`)}
                name={get(roster, `${TE}.shortName`)}
                short={get(roster, `${TE}.team.short`)}
              />
            </Col>
            <Col>
              <RosterSlot
                pos={"FLEX"}
                bye={get(roster, `${FLEX}.team.bye`)}
                name={get(roster, `${FLEX}.shortName`)}
                short={get(roster, `${FLEX}.team.short`)}
              />
            </Col>
            <Col>
              <RosterSlot
                pos={"D/ST"}
                bye={get(roster, `${D_ST}.team.bye`)}
                name={get(roster, `${D_ST}.shortName`)}
                short={get(roster, `${D_ST}.team.short`)}
              />
            </Col>
            <Col>
              <RosterSlot
                pos={"K"}
                bye={get(roster, `${K}.team.bye`)}
                name={get(roster, `${K}.shortName`)}
                short={get(roster, `${K}.team.short`)}
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="flex-column">
            <Col>
              <Row>
                <RosterSlot
                  pos={"BENCH"}
                  bye={get(roster, `${BENCH}[0].team.bye`)}
                  name={get(roster, `${BENCH}[0].shortName`)}
                  short={get(roster, `${BENCH}[0].team.short`)}
                />
              </Row>
            </Col>
            <Col>
              <RosterSlot
                pos={"BENCH"}
                bye={get(roster, `${BENCH}[1].team.bye`)}
                name={get(roster, `${BENCH}[1].shortName`)}
                short={get(roster, `${BENCH}[1].team.short`)}
              />
            </Col>
            <Col>
              <RosterSlot
                pos={"BENCH"}
                bye={get(roster, `${BENCH}[2].team.bye`)}
                name={get(roster, `${BENCH}[2].shortName`)}
                short={get(roster, `${BENCH}[2].team.short`)}
              />
            </Col>
            <Col>
              <RosterSlot
                pos={"BENCH"}
                bye={get(roster, `${BENCH}[3].team.bye`)}
                name={get(roster, `${BENCH}[3].shortName`)}
                short={get(roster, `${BENCH}[3].team.short`)}
              />
            </Col>
            <Col>
              <RosterSlot
                pos={"BENCH"}
                bye={get(roster, `${BENCH}[4].team.bye`)}
                name={get(roster, `${BENCH}[4].shortName`)}
                short={get(roster, `${BENCH}[4].team.short`)}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrap>
  );
};

export default Roster;
