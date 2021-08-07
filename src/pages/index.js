import * as React from "react";
import { Link } from "gatsby";
//import { StaticImage } from "gatsby-plugin-image"
import get from "lodash/get";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { top300 } from "../data/top300";
import { Players } from "../data/Player";
import { dynasty } from "../data/dynasty";
import { depth } from "../data/depth";

const IndexPage = () => {
  const players = new Players(top300);
  const list = get(players, `list`, []);
  //players.mergeData(dynasty);
  //console.log(depth);
  return (
    <Layout>
      <Seo title="Home" />
      {Array.isArray(list)
        ? list.map((player, i) => {
            return (
              <div
                key={
                  player.id + i
                }>{`${player.name}, ${player.team.short}`}</div>
            );
          })
        : null}
    </Layout>
  );
};

export default IndexPage;
