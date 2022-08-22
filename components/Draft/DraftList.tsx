import * as React from "react";
import { Player } from "../../data/players/classes";

const DraftRow = ({ player }: { player: Player }) => {
  return (
    <tr>
      <td>{player.name}</td>
      <td>{player.pos}</td>
      <td>{player.team?.short}</td>
    </tr>
  );
};

const DraftList = ({ players }: { players: Player[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Pos</td>
          <td>Team</td>
        </tr>
      </thead>
      <tbody>
        {players.map((p, i) => {
          return <DraftRow player={p} key={p.id} />;
        })}
      </tbody>
    </table>
  );
};

export default DraftList;
