import * as React from "react";
import get from "lodash/get";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { top300 } from "../data/top300";
import { Player, Players } from "../data/Player";
import { dynasty, slugifyTitle } from "../data/dynasty";
import { keepers } from "../data/keepers";
import { depth } from "../data/depth";
import PlayerList from "../components/Players";
import { FantasyTeam } from "../classes/fantasyTeam";
import Roster from "../components/Roster/Roster";
import { useState, useEffect } from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import { Col, Container, Row } from "react-bootstrap";

export type PlayerList = Player[] | null;

const IndexPage = () => {
  const [team, setTeam] = useState<FantasyTeam>();
  const [budget, setBudget] = useState(200);
  const [toggleDrafted, setToggleDrafted] = useState(true);
  const edges = [...top300, ...dynasty, ...keepers, ...depth];
  //console.log(edges);
  const filtered = edges.reduce((hash, data) => {
    const slug = get(
      data,
      `slug`,
      slugifyTitle(`${get(data, `name`)}, ${get(data, `pos`)}`)
    );
    if (!hash[slug]) {
      hash[slug] = data;
    } else {
      const old = hash[slug];
      const updated = { ...old, ...data };
      hash[slug] = updated;
    }
    return hash;
  }, {});
  const players = new Players(
    Object.keys(filtered).map((key) => filtered[key])
  );
  const list = get(players, `list`, []);
  //players.mergeData(dynasty);
  //console.log(players);
  const myTeam = new FantasyTeam(
    { teamName: "Monkies" },
    roster,
    setRoster,
    budget,
    setBudget
  );

  const handleToggle = () => setToggleDrafted(!toggleDrafted);

  useEffect(() => {
    myTeam.draft(players.hash["jonathan-taylor-rb"]);
  }, []);
  return (
    <Layout>
      <Seo title="Home" />
      <Container fluid>
        <Row>
          <Col xs={12} sm={2} md={4}>
            {/* <Roster team={myTeam} /> */}
          </Col>
          <Col xs={12} sm={10} md={8}>
            {/* <PlayerList
              list={list}
              myTeam={myTeam}
              budget={myTeam.budget}
              toggle={toggleDrafted}
            /> */}
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
