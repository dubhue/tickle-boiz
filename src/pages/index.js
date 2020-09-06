import React, { useState, useEffect } from "react";
import Layout from "../components/layout/MainLayout";
import { graphql, useStaticQuery } from "gatsby";
import { Table, Button, Form, Container, Row, Col } from "react-bootstrap";
import PlayerRow from "../components/fantasy/PlayerRow";
import { IoIosStar } from "react-icons/io";

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
  const byes = graph.allByesJson.edges.map((e) => e.node);
  const players = {};
  const getByeWeek = (name) => {
    let byeWeek = null;
    byes.forEach((b) => {
      const { team, bye } = b;
      if (name.indexOf(team) > -1) {
        byeWeek = bye;
      }
    });
    return byeWeek;
  };
  depth.forEach((player) => {
    const { playerId, depthId, pos, team, status, cost } = player;
    if (playerId !== "") {
      players[slugify(playerId)] = {
        depth: depthId,
        pos,
        team,
        name: playerId,
        status: status === "" ? "available" : status,
        cost,
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
        auction: Math.ceil(parseInt(auction.slice(1, auction.length)) * 1.655),
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
    const {
      rank,
      espnRankPos,
      depth,
      pos,
      auction,
      bye,
      name,
      dynasty,
      age,
    } = players[key];
    players[key] = rank ? players[key] : { ...players[key], rank: 999 };
    players[key] = espnRankPos
      ? players[key]
      : { ...players[key], espnRankPos: 999 };
    players[key] = depth
      ? players[key]
      : { ...players[key], depth: pos === "D/ST" ? pos : "BENCH" };
    players[key] = auction ? players[key] : { ...players[key], auction: 0 };
    players[key] = bye
      ? players[key]
      : { ...players[key], bye: getByeWeek(name) };
    players[key] = dynasty ? players[key] : { ...players[key], dynasty: "N/A" };
    players[key] = pos
      ? players[key]
      : { ...players[key], pos: getPosFromDynasty(dynasty) };
    players[key] = age
      ? { ...players[key], age: ageToDecimal(age) }
      : { ...players[key], age: "N/A" };
    return { ...players[key], slug: key };
  });
};

const ageToDecimal = (str) => {
  const split = str.split("-");
  return Number(parseInt(split[0]) + parseInt(split[1]) / 12).toPrecision(3);
};

const getPosFromDynasty = (dynasty) => {
  const _dyn = dynasty ? dynasty : "0. (NA)";
  const index = _dyn.indexOf("(") + 1;
  return _dyn.slice(index, index + 2);
};

const compare = (a, b) => {
  //console.log(a, b);
  const playerA = a.rank;
  const playerB = b.rank;

  let comparison = 0;
  if (playerA > playerB) {
    comparison = 1;
  } else if (playerA < playerB) {
    comparison = -1;
  }
  return comparison;
};

const IndexPage = ({ pageContext }) => {
  const [hideKeepers, setHideKeepers] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [allP, setAll] = useState([]);
  const graph = useStaticQuery(query);
  useEffect(() => {
    const all = getPlayers(graph);
    all.sort(compare);
    setSearchResults(all);
    setAll(all);
  }, [graph]);
  const toggleKeepers = () => {
    setHideKeepers((h) => !h);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchKey(e.target.querySelector(".form-control").value);
    let search = searchResults.filter((item) => {
      const lower = item.name.toLowerCase();
      return lower.includes(searchKey);
    });
    setSearchResults(searchKey !== "" ? search : allP);
  };
  const draftPlayer = (index) => {
    //console.log("drafting");
    const all = [...searchResults];
    const status = all[index]["status"];
    if (status === "drafted") {
      all[index]["status"] = "available";
    } else {
      all[index]["status"] = "drafted";
    }
    setSearchResults(all);
  };
  const handleInput = (e) => {
    setSearchKey(e.target.value);
  };
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSearch}>
              <Form.Group controlId="formSearch">
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  value={searchKey}
                  onChange={handleInput}
                />
              </Form.Group>
              {/* <Button variant="info" onSubmit={handleSearch}>
                Search
              </Button> */}
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Button onClick={toggleKeepers}>Toggle Drafted</Button>
            </Form.Group>
          </Col>
        </Row>
      </Container>

      <Table>
        <thead>
          <tr>
            <th>
              <IoIosStar />
            </th>
            <th>Player</th>
            <th>Rank</th>
            <th>Pos. Rank</th>
            <th>Depth</th>
            <th>Auction</th>
            <th>Bye</th>
            <th>Dynasty</th>
            <th>Position</th>
            <th>Age</th>
            <th>X</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((player, index) => {
            const { slug } = player;
            return (
              <PlayerRow
                key={slug}
                hide={hideKeepers}
                player={player}
                index={index}
                draftAction={draftPlayer}
              />
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
    allByesJson {
      edges {
        node {
          ...NodeByeFields
        }
      }
    }
  }
`;
