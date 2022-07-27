import { Col, Row } from "react-bootstrap";
import { FullRoster, RosterSlot } from "../components/Roster/classes";
import { slotConfiguration } from "../components/Roster/config";
import { Player, PlayerDatabase } from "../data/players/classes";
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
    //console.log(this.database)
    const player = this.database.filter((p) => p.id === id || p.slug === id)[0];
    //console.log(player);
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
/*
import { TeamRoster } from "../pages";

export class FantasyTeamRoster {
  roster: ;
  constructor(config: typeof slotConfiguration) {}
}

export class FantasyTeam {
  teamName: string;
  roster: TeamRoster;
  constructor(team, roster, setRoster, budget, setBudget) {
    this.teamName = get(team, `teamName`);
    this.roster = roster;
    this.setRoster = setRoster;
    this.length = 0;
    this.budget = budget;
    this.setBudget = setBudget;
  }
  incrementLength(increment = 1) {
    this.length = this.length + increment;
  }
  draft(player) {
    const curBudget = this.budget;
    const draftCost = get(player, `draftCost`);
    const validBudget = curBudget >= draftCost;
    const pos = get(player, `pos`);
    this.setRoster((prev) => {
      const curPos = get(prev, `[${pos}]`);
      if (isPosPlayer(pos) && Array.isArray(curPos)) {
        let noMatch = true;
        curPos.forEach((p) => {
          if (p.slug === player.slug) {
            noMatch = false;
          }
        });
        if (curPos.length <= 1 && noMatch) {
          curPos.push(player);
          this.setBudget((prev) => prev - get(player, `draftCost`, 0));
          this.incrementLength();
          player.changeDraftStatus();
          console.log(
            `successfully drafted ${player.name}`,
            player.isDraftable
          );
          return { ...prev, [pos]: curPos };
        } else {
          this.flex(player, noMatch);
          return prev;
        }
      } else {
        //console.log(curPos);
        if (curPos instanceof Player) {
          this.flex(player);
          return prev;
        } else {
          prev[pos] = player;
          this.setBudget((prev) => prev - get(player, `draftCost`, 0));
          this.incrementLength();
          player.changeDraftStatus();
          console.log(
            `successfully drafted ${player.name}`,
            player.isDraftable
          );
          return { ...prev, [pos]: player };
        }
      }
    });

    // if (this.length) {
    //   console.log(curPos);
    //   if (isPosPlayer && curPos.length === 1) {
    //     curPos.push(player);
    //     this.length = this.length + 1;
    //   }
    //   if (curPos instanceof Player) {
    //     this.bench(player);
    //   }
    //   if (isPosPlayer && curPos.length === 2) {
    //     this.bench(player);
    //   }
    // } else {
    //   curPos.push(player);
    //   this.length = this.length + 1;
    // }
    // console.log(this.roster);
  }
  flex(player, noMatch) {
    const rosterFlex = get(this, `roster.FLEX`);
    if (rosterFlex instanceof Player) {
      this.bench(player);
    } else {
      if (noMatch) {
        this.roster.FLEX = player;
        this.setBudget((prev) => prev - get(player, `draftCost`, 0));
        this.length = this.length + 1;
      }
    }
  }
  bench(player) {
    const rosterBench = get(this, `roster.BENCH`);
    const pos = get(player, `pos`);
    let noMatch = true;
    rosterBench.forEach((b) => {
      if (b.slug === player.slug) {
        noMatch = false;
      }
    });
    const flex = get(this, `roster.FLEX`);
    if (flex.slug === player.slug) {
      noMatch = false;
    }
    const starters = isPosPlayer(pos) ? get(this, `roster.${pos}`) : [];
    starters.forEach((b) => {
      if (b.slug === player.slug) {
        noMatch = false;
      }
    });
    if (rosterBench.length < 5 && noMatch) {
      rosterBench.push(player);
      this.incrementLength();
    } else {
      console.log("position and bench full");
    }
  }

  // render() {
  //   const players = Object.keys(this.roster).reduce((all, data) => {
  //     if (this.data instanceof Player) {
  //       all.push(data);
  //     }
  //     if (Array.isArray(data)) {
  //       data.forEach((p) => {
  //         if (p instanceof Player) {
  //           all.push(p);
  //         } else {
  //           console.log(p);
  //         }
  //       });
  //     }
  //     return all;
  //   }, []);
  // }
}

*/
