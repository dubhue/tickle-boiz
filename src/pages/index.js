import React from "react";
import Layout from "../components/layout/MainLayout";
import { graphql, useStaticQuery } from "gatsby";
import { Table } from "react-bootstrap";

const slugify = (string) => {
  const a =
    "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
  const b =
    "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w-]+/g, "") // Remove all non-word characters
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

const getPlayers = (graph) => {
  const depth = graph.allDepthJson.edges.map((e) => e.node);
  const espn = graph.allEspnJson.edges.map((e) => e.node);
  const dynasty = graph.allDynastyJson.edges.map((e) => e.node);
  const rookies = graph.allRookiesJson.edges.map((e) => e.node);
  const players = {};
  depth.forEach((player) => {
    const { playerId, depthId, pos, team } = player;
    if (playerId !== "") {
      players[slugify(playerId)] = {
        depth: depthId,
        pos,
        team,
        name: playerId,
      };
    }
  });
  espn.forEach((player) => {
    const {
      playerId,
      pos,
      team,
      espnRankPos,
      espnRankOverall,
      bye,
      auction,
    } = player;
    if (players[slugify(playerId)]) {
      const copy = {
        ...players[slugify(playerId)],
        bye,
        auction: parseInt(auction.slice(1, auction.length)),
        espnRankPos,
        rank: parseInt(espnRankOverall.slice(1, espnRankOverall.length - 1)),
      };
      players[slugify(playerId)] = copy;
    } else {
      players[slugify(playerId)] = {
        pos,
        team,
        bye,
        auction: parseInt(auction.slice(1, auction.length)),
        rank: parseInt(espnRankOverall.slice(1, espnRankOverall.length - 1)),
        espnRankPos,
        name: playerId,
      };
    }
  });
  dynasty.forEach((player) => {
    const { playerId, age, draftId, dynastyRank } = player;
    const copy = {
      ...players[slugify(playerId)],
      age,
      draftId,
      name: playerId,
      dynasty: dynastyRank,
    };
    players[slugify(playerId)] = copy;
  });
  rookies.forEach((player) => {
    const { playerId, age, draftId, rookieRank } = player;
    const copy = {
      ...players[slugify(playerId)],
      age,
      draftId,
      name: playerId,
      isRookie: true,
      dynasty: rookieRank,
    };
    players[slugify(playerId)] = copy;
  });
  return Object.keys(players).map((key) => {
    return { ...players[key], slug: key };
  });
};

const compare = (a, b) => {
  const playerA = a.auction;
  const playerB = b.auction;

  let comparison = 0;
  if (playerA > playerB) {
    comparison = -1;
  } else if (playerA < playerB) {
    comparison = 1;
  }
  return comparison;
};

const IndexPage = ({ pageContext }) => {
  const graph = useStaticQuery(query);
  const all = getPlayers(graph);
  all.sort(compare);
  console.log(all);
  return (
    <Layout>
      <Table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Rank</th>
            <th>Pos. Rank</th>
            <th>Depth</th>
            <th>Auction</th>
            <th>Bye</th>
            <th>Dynasty</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {all.map((player) => {
            const {
              name,
              slug,
              depth,
              pos,
              espnRankPos,
              rank,
              isRookie,
              dynasty,
              auction,
              bye,
            } = player;
            return (
              <tr key={slug}>
                <td
                  style={
                    isRookie
                      ? { color: "green", fontWeight: "bold" }
                      : undefined
                  }
                >
                  {name}
                </td>
                <td>{rank}</td>
                <td>{espnRankPos}</td>
                <td>{depth}</td>
                <td>{auction}</td>
                <td>{bye}</td>
                <td
                  style={
                    isRookie
                      ? { color: "green", fontWeight: "bold" }
                      : undefined
                  }
                >
                  {dynasty}
                </td>
                <td>{pos}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Layout>
  );
};

export default IndexPage;

const query = graphql`
  {
    allDepthJson {
      edges {
        node {
          ...NodeDepthFields
        }
      }
    }
    allEspnJson {
      edges {
        node {
          ...NodeEspnFields
        }
      }
    }
    allDynastyJson {
      edges {
        node {
          ...NodeDynastyFields
        }
      }
    }
    allRookiesJson {
      edges {
        node {
          ...NodeRookiesFields
        }
      }
    }
  }
`;
