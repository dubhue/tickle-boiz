import get from "lodash/get";
import { Player } from "./Player";

const isPosPlayer = (pos) => typeof pos === "string" && pos.match(/^RB$|^WR$/);

export class FantasyTeam {
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
          console.log(`successfully drafted ${player.name}`);
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
          console.log(`successfully drafted ${player.name}`);
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
