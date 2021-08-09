import get from "lodash/get";

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
      RB1: JONATHAN_TAYLOR,
      RB2: null,
      WR1: null,
      WR2: null,
      TE: null,
      FLEX: null,
      "D/ST": null,
      K: null,
      BENCH: [null, null, null, null, null]
    });
  }
}

export const myTeam = new FantasyTeam({teamName: ""})