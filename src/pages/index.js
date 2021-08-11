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
import { myTeam } from "../data/fantasyTeam";
import Roster from "../components/Roster";

const IndexPage = () => {
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
  //console.log(depth);
  myTeam.draft({
    name: "Jonathan Taylor",
    posRank: 8,
    pos: "RB",
    value: 45,
    team: {
      short: "IND",
      full: "Indianapolis Colts",
      bye: 14
    },
    id: "jonathan-taylor-ind",
    draftYear: 2020,
    draftRound: 2,
    age: 22.583333333333332,
    icons: {
      star: true,
      rookie: false,
      goldenAge: false,
      starter: true,
      backup: false,
      veteran: false,
      youngin: true
    },
    isKeeper: true,
    slug: "jonathan-taylor-rb",
    depth: 1
  });
  return (
    <Layout>
      <Seo title="Home" />
      {console.log(players)}
      <div>
        My team
        <Roster team={myTeam} />
      </div>
      <PlayerList list={list} />
    </Layout>
  );
};

export default IndexPage;
