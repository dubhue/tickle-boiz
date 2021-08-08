import * as React from "react";
//import { Link } from "gatsby";
//import { StaticImage } from "gatsby-plugin-image"
import get from "lodash/get";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { top300 } from "../data/top300";
import { Players } from "../data/Player";
import { dynasty, slugifyTitle } from "../data/dynasty";
import { keepers } from "../data/keepers";
import { Row, Col, Table } from "react-bootstrap";
import { depth } from "../data/depth";
import {
  FcApproval,
  FcLock,
  FcClock,
  FcChargeBattery,
  FcCloseUpMode,
  FcVlc,
  FcPlus
} from "react-icons/fc";

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
  console.log(depth);
  return (
    <Layout>
      <Seo title="Home" />
      {console.log(players)}
      <Table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Rank</th>
            <td>Projection</td>
            <th>Icons</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(list)
            ? list.map((player, i) => {
                const isStar = get(player, `icons.star`);
                const isKeeper = get(player, `isKeeper`);
                const isRookie = get(player, `icons.rookie`);
                const isStarter = get(player, `icons.starter`);
                const isSecond = get(player, `icons.backup`);
                const isVeteran = get(player, `icons.veteran`);
                const isYoungin = get(player, `icons.youngin`);
                const age = get(player, `age`);
                const id = get(player, `id`);
                const name = get(player, `name`);
                const pos = get(player, `pos`);
                const value = get(player, `value`);
                const depth = get(player, `depth`);
                return (
                  <tr key={id + i}>
                    <td>{`${name}, ${pos}`}</td>
                    <td>{i + 1}</td>
                    <td>${value}</td>
                    <td>
                      <Row>
                        {isKeeper ? (
                          <Col xs="auto">
                            <FcLock title={"Keeper"} />
                          </Col>
                        ) : null}
                        {isStar ? (
                          <Col xs="auto">
                            <FcApproval title={"Top Player"} />
                          </Col>
                        ) : null}
                        {isStarter ? (
                          <Col xs="auto">
                            <FcPlus title={"Starter: " + pos + depth} />
                          </Col>
                        ) : null}
                        {isSecond ? (
                          <Col xs="auto">
                            <FcVlc title={"Backup"} />
                          </Col>
                        ) : null}
                        {isRookie ? (
                          <Col xs="auto">
                            <FcChargeBattery title={"Rookie"} />
                          </Col>
                        ) : null}
                        {isVeteran ? (
                          <Col xs="auto">
                            <FcClock
                              title={`Veteran: ${Math.floor(age)} Years Old`}
                            />
                          </Col>
                        ) : null}
                        {isYoungin ? (
                          <Col xs="auto">
                            <FcCloseUpMode
                              title={`${Math.floor(age)} Years Old`}
                            />
                          </Col>
                        ) : null}
                      </Row>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </Layout>
  );
};

export default IndexPage;
