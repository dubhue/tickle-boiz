import React from "react";
import { FantasyTeam } from "../../classes/fantasyTeam";
import { Player } from "../../data/players/classes";
import { RosterSlot } from "../Roster/classes";

const ShowRosterSlot = ({ slot }: { slot: RosterSlot }) => {
  let row: JSX.Element[] = [];
  for (let i = 0; i < slot.starters; i++) {
    row[i] = (
      <li key={slot.slot + i}>
        {slot.slot}
        <span>{slot.players[i]?.name}</span>
      </li>
    );
  }
  return <>{row.map((r) => r)}</>;
};

const MyTeam = ({ team }: { team: FantasyTeam }) => {
  return (
    <>
      <h1>{team.name}</h1>
      <div>
        <ul>
          <ShowRosterSlot slot={team.roster.roster.QB} />
          <ShowRosterSlot slot={team.roster.roster.RB} />
          <ShowRosterSlot slot={team.roster.roster.WR} />
          <ShowRosterSlot slot={team.roster.roster.TE} />
          <ShowRosterSlot slot={team.roster.roster.FLEX} />
          <ShowRosterSlot slot={team.roster.roster["D/ST"]} />
          <ShowRosterSlot slot={team.roster.roster.K} />
          <ShowRosterSlot slot={team.roster.roster.BENCH} />
        </ul>
      </div>
    </>
  );
};

export default MyTeam;
