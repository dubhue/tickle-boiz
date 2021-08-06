import * as React from "react";
import { Link } from "gatsby";
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout";
import Seo from "../components/seo";
import { top300 } from "../data/top300";
import { rawTeams, Teams, byes } from "../data/Team";
import { Players } from "../data/Player";
import { dynasty } from "../data/dynasty";

export const nfl = new Teams(rawTeams, byes);

const IndexPage = () => {
  const players = new Players(top300);
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {console.log(players.mergeData(dynasty))}

      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
