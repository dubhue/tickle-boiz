import * as React from "react";
import {
  FcApproval,
  FcLock,
  FcClock,
  FcChargeBattery,
  FcCloseUpMode,
  FcVlc,
  FcPlus
} from "react-icons/fc";
import { Row, Col, Table } from "react-bootstrap";
import get from "lodash/get";

const PlayerList = ({ list }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Player</th>
          <th>Team</th>
          <th>Rank</th>
          <th>Round</th>
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
              const team = get(player, `team.short`);
              const rank = i + 1;
              const round = Math.ceil(rank / 12);
              return (
                <tr key={id + i}>
                  <td>{`${name}, ${pos}`}</td>
                  <td>{team}</td>
                  <td>{rank}</td>
                  <td>{round}</td>
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
  );
};

export default PlayerList;
