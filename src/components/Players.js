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
import { FaTimesCircle } from "react-icons/fa";
import { Row, Col, Table } from "react-bootstrap";
import get from "lodash/get";
import { FantasyTeam } from "../classes/fantasyTeam";
import { useState } from "react";

const PlayerList = ({ list, myTeam, budget, toggle }) => {
  const handleDraft = (player) => {
    if (myTeam instanceof FantasyTeam) {
      myTeam.draft(player);
    } else {
      console.log("error drafting to:", myTeam);
    }
  };

  const DraftButton = ({ player, keeper }) => {
    const [isReadyToDraft, setIsReadyToDraft] = useState(false);
    const [draftCost, setDraftCost] = useState(get(player, `value`, 0));

    const handleInput = (e) => {
      setDraftCost(e.target.value);
    };

    return (
      <div style={{ position: "relative" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (isReadyToDraft) {
              const cost = draftCost ? draftCost : player.value;
              console.log(`trying to draft ${player.name} for $${cost}`);
              const newPlayer = {
                ...player,
                draftCost: cost
              };
              handleDraft(newPlayer);
            }
            setIsReadyToDraft(false);
          }}>
          <button
            style={
              isReadyToDraft
                ? {
                    transition: "all .3s ease",
                    position: "absolute",
                    top: 0,
                    right: "100%",
                    opacity: 1
                  }
                : {
                    transition: "all .3s ease",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    opacity: 0
                  }
            }
            onClick={() => {
              console.log(`canceled drafting ${player.name}`);
              setIsReadyToDraft(false);
            }}>
            <FaTimesCircle />
          </button>
          {!isReadyToDraft ? (
            <button
              onClick={() => {
                console.log(`Draft ${player.name}?`);
                setIsReadyToDraft(true);
              }}
              disabled={keeper ? true : undefined}>
              Draft
            </button>
          ) : (
            <input
              type="text"
              value={draftCost}
              style={{ width: "58px" }}
              onChange={handleInput}
            />
          )}
          <input
            type="submit"
            style={
              isReadyToDraft
                ? {
                    transition: "all .3s ease",
                    position: "absolute",
                    top: 0,
                    left: "98%",
                    opacity: 1
                  }
                : {
                    transition: "all .3s ease",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    opacity: 0
                  }
            }
            value={"✓"}
          />
        </form>
      </div>
    );
  };
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
          <th>Draft</th>
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
              const _round = Math.ceil(rank / 12);
              const round = _round <= 14 ? _round : "FA";
              return budget >= value ? (
                <tr
                  key={id + i}
                  style={{
                    color: isKeeper ? "silver" : "black"
                    //display: value <= budget ? "table" : "none"
                  }}>
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
                  <td>
                    <DraftButton player={player} keeper={isKeeper} />
                  </td>
                </tr>
              ) : null;
            })
          : null}
      </tbody>
    </Table>
  );
};

export default PlayerList;
