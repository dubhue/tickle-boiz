import * as React from "react";
import {
  FcLock,
  FcAlarmClock,
  FcGraduationCap,
  FcCloseUpMode,
  FcVlc,
  FcPlus,
  FcRating,
  FcExternal
} from "react-icons/fc";
import { FaTimesCircle } from "react-icons/fa";
import { Row, Col, Table, Form } from "react-bootstrap";
//import { FantasyTeam } from "../../classes/fantasyTeam";
import { useState } from "react";
import { Player, PlayerDatabase } from "../../data/players/classes";
import { depth } from "../../data/cheatSheets/depthChart/logic";

const PlayerList = ({
  players,
  budget = 200
}: // budget, toggle
{
  players: PlayerDatabase;
  budget?: number;
}) => {
  const [filteredPlayers, setFilteredPlayers] = useState([...players]);
  const [filter, setFilter] = useState("");

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value.split(" ");
    if (val[0] === "") {
      if (filter !== "") {
        setFilteredPlayers([...players]);
        setFilter("");
      }
    } else {
      setFilteredPlayers(
        players.filter((p) => {
          const searchString = `${p.name} ${p.team?.full ? p.team.full : ""} ${
            p.team?.short ? p.team.short : ""
          } ${p.pos + p.depth}${
            p.team?.bye ? `bye${p.team.bye}` : ""
          }`;

          const regex = new RegExp(val.map((v) => `(?=.*${v})`).join(""), "i");
          return Array.isArray(searchString.match(regex));
        })
      );
      setFilter(val.join(" "));
    }
  };

  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Control
          placeholder="Filter Players"
          value={filter}
          onChange={handleFilter}
        />
      </Form>
      <Table>
        <thead>
          <tr style={{ background: "black", color: "white" }}>
            <th>Player</th>
            <th>Team</th>
            <th>Rank</th>
            <th>Score</th>
            <th>Round</th>
            <td>Projection</td>
            <th>Icons</th>
            <th>Bye</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(players)
            ? filteredPlayers.map((player, i) => {
                const isStar = player.icons.star;
                const isKeeper = player.isKeeper;
                const isRookie = player.icons.rookie;
                const isStarter = player.icons.starter;
                const isSecond = player.icons.backup;
                const isVeteran = player.icons.veteran;
                const isYoungin = player.icons.youngin;
                const isGolden = player.icons.goldenAge;
                const age = player.age;
                const id = player.id;
                const name = player.name;
                const pos = player.pos;
                const value = player.value;
                const depth = player.depth;
                const team = player?.team?.short;
                const rank = i + 1;
                const bye = player.team?.bye ? player.team.bye : 0;
                const round = Math.ceil(rank / 12);
                return budget >= value ? (
                  <tr
                    key={id + i}
                    style={{
                      color: isKeeper
                        ? "silver"
                        : isStarter
                        ? "black"
                        : "#ff6600",
                      background: isRookie ? "yellow" : undefined,
                      fontStyle:
                        isRookie && player.draftRound < 3 ? "italic" : undefined
                      //display: value <= budget ? "table" : "none"
                    }}>
                    <td
                      style={{
                        fontWeight: isStar ? "bold" : "normal"
                      }}>{`${name}, ${pos}`}</td>
                    <td>{team}</td>
                    <td>{rank}</td>
                    <td>{player.score}</td>
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
                            <FcRating title={"Top Player"} />
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
                            <FcGraduationCap title={"Rookie"} />
                          </Col>
                        ) : null}
                        {isVeteran ? (
                          <Col xs="auto">
                            <FcAlarmClock
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
                        {isGolden ? (
                          <Col xs="auto">
                            <FcExternal title="Golden Age" />
                          </Col>
                        ) : null}
                      </Row>
                    </td>
                    <td>{bye}</td>
                    {/* <td>
                    <DraftButton player={player} keeper={isKeeper} />
                  </td> */}
                  </tr>
                ) : null;
              })
            : null}
        </tbody>
      </Table>
    </>
  );
};

export default PlayerList;
