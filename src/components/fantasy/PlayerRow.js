import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { IoIosClose } from "react-icons/io";

const Styled = {};

Styled.Row = styled.tr`
  background: ${({ status }) =>
    status === "keeper"
      ? "rgba(0,0,0,.6)"
      : status === "drafted"
      ? "rgba(0,12,222,.3)"
      : "none"};
  border: ${({ rank }) => (rank < 11 ? "2px dashed cyan" : "none")};
`;

Styled.Player = styled.td`
  position: relative;
  font-style: ${({ isRookie }) => (isRookie ? "italic" : "normal")};
  color: ${({ isRookie }) => (isRookie ? "green" : "black")};
  font-weight: ${({ isRookie, rank }) =>
    isRookie || rank < 11 ? "bold" : "normal"};
`;

Styled.Stat = styled.td`
  color: ${({ isRookie }) => (isRookie ? "green" : "black")};
  font-weight: ${({ isRookie, rank }) =>
    isRookie || rank < 11 ? "bold" : "normal"};
`;

Styled.RowColor = styled.div`
  position: absolute;
  background: ${({ rank }) =>
    rank < 6
      ? "rgba(62,238,46,.25)"
      : rank < 11
      ? "rgba(0,201,176,.25)"
      : rank < 21
      ? "rgba(255,193,0,.25)"
      : rank < 31
      ? "rgba(255,123,0,.25)"
      : rank > 60
      ? "rgba(231,231,204,.25)"
      : "none"};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const PlayerRow = ({ player, hide, index, draftAction }) => {
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
    age,
    status,
  } = player;
  return status === "keeper" && hide ? null : status === "drafted" &&
    hide ? null : (
    <Styled.Row status={status} rank={espnRankPos}>
      <Styled.Player isRookie={isRookie} rank={espnRankPos}>
        <Styled.RowColor rank={espnRankPos} />
        {name}
      </Styled.Player>
      <td>{rank}</td>
      <Styled.Stat isRookie={isRookie} rank={espnRankPos}>
        {espnRankPos}
      </Styled.Stat>
      <td>{depth}</td>
      <Styled.Stat isRookie={isRookie} rank={espnRankPos}>
        {auction}
      </Styled.Stat>
      <td>{bye}</td>
      <td>{dynasty}</td>
      <td>{pos}</td>
      <td>{age}</td>
      <td>
        <Button variant="danger" onClick={() => draftAction(index)}>
          <IoIosClose />
        </Button>
      </td>
    </Styled.Row>
  );
};

export default PlayerRow;
