import get from "lodash/get";
import { Player } from "./Player";

const JONATHAN_TAYLOR = {
  name: "Jonathan Taylor",
  posRank: 8,
  pos: "RB",
  value: 45,
  team: {
    short: "IND",
    full: "Indianapolis Colts",
    bye: 14
  },
  id: "jonathan-taylor-ind",
  draftYear: 2020,
  draftRound: 2,
  age: 22.583333333333332,
  icons: {
    star: true,
    rookie: false,
    goldenAge: false,
    starter: true,
    backup: false,
    veteran: false,
    youngin: true
  },
  isKeeper: true,
  slug: "jonathan-taylor-rb",
  depth: 1
};

export class FantasyTeam {
  constructor(team) {
    this.teamName = get(team, `teamName`);
    this.roster = get(team, `roster`, {
      QB: null,
      RB: [],
      WR: [],
      TE: null,
      FLEX: null,
      "D/ST": null,
      K: null,
      BENCH: []
    });
    this.length = 0;
  }

  draft(player) {
    const pos = get(player, `pos`);
    const isPosPlayer = pos.match(/^RB$|^WR$/);
    const curPos = this.roster[pos];
    if (this.length) {
    } else {
      curPos.push(player);
      this.length = this.length + 1;
    }
  }
  render() {
    const players = Object.keys(this.roster).reduce((all, data) => {
      if (this.data instanceof Player) {
        all.push(data);
      }
      if (Array.isArray(data)) {
        data.forEach((p) => {
          if (p instanceof Player) {
            all.push(p);
          } else {
            console.log(p);
          }
        });
      }
      return all;
    }, []);
  }
}

export const myTeam = new FantasyTeam({ teamName: "" });
