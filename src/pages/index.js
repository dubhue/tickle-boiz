import * as React from "react";
import get from "lodash/get";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { top300 } from "../data/top300";
import { Players } from "../data/Player";
import { dynasty, slugifyTitle } from "../data/dynasty";
import { keepers } from "../data/keepers";
import { depth } from "../data/depth";
import PlayerList from "../components/Players";
import { FantasyTeam } from "../data/fantasyTeam";
import Roster from "../components/Roster";
import { useState, useEffect } from "react";

const IndexPage = () => {
  const [roster, setRoster] = useState({
    QB: null,
    RB: [],
    WR: [],
    TE: null,
    FLEX: null,
    "D/ST": null,
    K: null,
    BENCH: []
  });
  const [budget, setBudget] = useState(200);
  const edges = [
    ...top300,
    ...dynasty,
    //...keepers,
    ...depth
  ];
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
  // useEffect(() => {
  //   myTeam.draft(players.hash["jonathan-taylor-rb"]);
  // }, []);
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        My team ${myTeam.budget}
        <Roster team={myTeam} />
      </div>
      <PlayerList list={list} myTeam={myTeam} budget={myTeam.budget} />
    </Layout>
  );
};

export default IndexPage;
