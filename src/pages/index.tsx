import * as React from "react";
import get from "lodash/get";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Players } from "../data/Player";
import { Player } from "../data/players/classes";
import { keepers } from "../data/keepers";
import PlayerList from "../components/Player/Players";
//import { FantasyTeam } from "../classes/fantasyTeam";
import Roster from "../components/Roster/Roster";
import { useState, useEffect } from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import { Col, Container, Row } from "react-bootstrap";
import { byeHash, getByeWeek } from "../data/teams/logic";
import { allTeams } from "../data/teams/data";
import { nfl, Team } from "../data/teams/classes";
import { dynasty, DynastyAttributes } from "../data/cheatSheets/dynasty/logic";
import { depth, DepthAttributes } from "../data/cheatSheets/depthChart/logic";
import { top300, Top300Attributes } from "../data/cheatSheets/top300/logic";

export type PlayerList = Player[] | null;

const allHash = [...dynasty, ...depth, ...top300].reduce((unq, info) => {
  if (!unq[info.slug]) {
    unq[info.slug] = info;
  } else {
    const old = unq[info.slug];
    unq[info.slug] = { ...old, ...info };
  }
  return unq;
}, {});
const combined = Object.keys(allHash).map((k) => allHash[k]);
const allPlayers = combined.map((p) => {
  return new Player(p);
});
const sorted = allPlayers.sort((a, b) => {
  const aScore = a.value ? a.value : 0;
  const bScore = b.value ? b.value : 0;
  return aScore < bScore ? 1 : aScore > bScore ? -1 : 0;
});
//console.log(allPlayers);

const IndexPage = () => {
  //const [team, setTeam] = useState<FantasyTeam>();
  
  return (
    <Layout>
      <Seo title="Home" />
      <Container fluid>
        <Row>
          <Col xs={12} sm={2} md={4}>
            {/* <Roster team={myTeam} /> */}
          </Col>
          <Col xs={12} sm={10} md={8}>
            {/* {sorted.map((p,i) => (
              <Row key={p.slug} style={{ borderBottom: `1px solid gray` }}>
                <Col xs="auto">{i+1}</Col>
                <Col>{p.name}</Col>
                <Col>{p.pos}</Col>
                <Col>{p.score}</Col>
              </Row>
            ))} */}
            {/* <PlayerList
              list={list}
              myTeam={myTeam}
              budget={myTeam.budget}
              toggle={toggleDrafted}
            /> */}
            <PlayerList players={sorted} />
          </Col>
        </Row>
      </Container>
      {/* <div>
        My team ${myTeam.budget}
        <Roster team={myTeam} />
      </div>
      <ToggleSwitch
        label={"Show Unavailable"}
        toggle={toggleDrafted}
        setter={handleToggle}
      />
      <PlayerList
        list={list}
        myTeam={myTeam}
        budget={myTeam.budget}
        toggle={toggleDrafted}
      /> */}
    </Layout>
  );
};

export default IndexPage;
