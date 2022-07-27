import { Col, Row } from "react-bootstrap";
import { FullRoster, RosterSlot } from "../components/Roster/classes";
import { slotConfiguration } from "../components/Roster/config";
import { Player } from "../data/players/classes";
import * as React from "react";
import { RosterSlotTypes } from "../components/Roster/types";

export interface FantsyTeamConfig {
  name: string;
  roster: typeof slotConfiguration;
  database: PlayerDatabase;
}

const PositionGroup = ({ slot }: { slot: RosterSlot }) => {
  let Jsx: JSX.Element[] = [];
  for (let num = 0; num < slot.starters; num++) {
    Jsx.push(
      <div
        key={slot.slot + num}
        style={{ padding: `.5rem .25rem`, borderBottom: `1px solid gray` }}>
        {slot?.slot}{" "}
        {num < slot.max && slot.players[num] ? `${slot.players[num].name}` : ``}
      </div>
    );
  }
  return <>{Jsx}</>;
};

export class FantasyTeam {
  name: string;
  roster: FullRoster;
  database: PlayerDatabase;
  constructor(config: FantsyTeamConfig) {
    this.name = config.name;
    this.roster = new FullRoster(config.roster);
    this.database = config.database;
  }
  render() {
    const keys = Object.keys(this.roster.roster) as RosterSlotTypes[];
    return keys.map((k, i) => {
      return k ? (
        <PositionGroup key={k + i} slot={this.roster.roster[k]} />
      ) : null;
    });
  }
  draftPlayer(id: string, setter: (t: FantasyTeam) => void) {

    const player = this.database.filter((p) => p.id === id || p.slug === id)[0];

    const rosterSlot: RosterSlot = this.roster.roster[player.pos];
    if (rosterSlot.length < rosterSlot.max) {
      if (rosterSlot.players.find((p) => p.id === id || p.slug === id)) {
      } else {
        player.isDraftable = false;
        rosterSlot.addPlayer(player);
        setter(this.self());
      }
    }
  }
  self() {
    return this;
  }
}
/