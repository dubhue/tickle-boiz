import get from "lodash/get";

export const rawTeams = [
  {
    Team: "ARI",
    FullTeam: "Arizona Cardinals"
  },
  {
    Team: "ATL",
    FullTeam: "Atlanta Falcons"
  },
  {
    Team: "BAL",
    FullTeam: "Baltimore Ravens"
  },
  {
    Team: "BUF",
    FullTeam: "Buffalo Bills"
  },
  {
    Team: "CAR",
    FullTeam: "Carolina Panthers"
  },
  {
    Team: "CHI",
    FullTeam: "Chicago Bears"
  },
  {
    Team: "CIN",
    FullTeam: "Cincinnati Bengals"
  },
  {
    Team: "CLE",
    FullTeam: "Cleveland Browns"
  },
  {
    Team: "DAL",
    FullTeam: "Dallas Cowboys"
  },
  {
    Team: "DEN",
    FullTeam: "Denver Broncos"
  },
  {
    Team: "DET",
    FullTeam: "Detroit Lions"
  },
  {
    Team: "GB",
    FullTeam: "Green Bay Packers"
  },
  {
    Team: "HOU",
    FullTeam: "Houston Texans"
  },
  {
    Team: "IND",
    FullTeam: "Indianapolis Colts"
  },
  {
    Team: "JAC",
    FullTeam: "Jacksonville Jaguars"
  },
  {
    Team: "KC",
    FullTeam: "Kansas City Chiefs"
  },
  {
    Team: "LAC",
    FullTeam: "Los Angeles Chargers"
  },
  {
    Team: "LAR",
    FullTeam: "Los Angeles Rams"
  },
  {
    Team: "MIA",
    FullTeam: "Miami Dolphins"
  },
  {
    Team: "MIN",
    FullTeam: "Minnesota Vikings"
  },
  {
    Team: "NE",
    FullTeam: "New England Patriots"
  },
  {
    Team: "NO",
    FullTeam: "New Orleans Saints"
  },
  {
    Team: "NYG",
    FullTeam: "New York Giants"
  },
  {
    Team: "NYJ",
    FullTeam: "New York Jets"
  },
  {
    Team: "LV",
    FullTeam: "Las Vegas Raiders"
  },
  {
    Team: "PHI",
    FullTeam: "Philadelphia Eagles"
  },
  {
    Team: "PIT",
    FullTeam: "Pittsburgh Steelers"
  },
  {
    Team: "SF",
    FullTeam: "San Francisco 49ers"
  },
  {
    Team: "SEA",
    FullTeam: "Seattle Seahawks"
  },
  {
    Team: "TB",
    FullTeam: "Tampa Bay Buccaneers"
  },
  {
    Team: "TEN",
    FullTeam: "Tennessee Titans"
  },
  {
    Team: "WAS",
    FullTeam: "Washington Football Team"
  },
  {
    Team: "FA",
    FullTeam: "Free Agent"
  }
];

export const byes = `
Week 0: Free Agent

  Week 6: Atlanta Falcons, New Orleans Saints, San Francisco 49ers, New York Jets

  Week 7: Dallas Cowboys, Minnesota Vikings, Buffalo Bills, Jacksonville Jaguars, Los Angeles Chargers, Pittsburgh Steelers
  
  Week 8: Baltimore Ravens, Las Vegas Raiders
  
  Week 9: Detroit Lions, Seattle Seahawks, Tampa Bay Buccaneers, Washington Football Team
  
  Week 10: Chicago Bears, New York Giants, Cincinnati Bengals, Houston Texans
  
  Week 11: Los Angeles Rams, Denver Broncos
  
  Week 12: Arizona Cardinals, Kansas City Chiefs
  
  Week 13: Carolina Panthers, Green Bay Packers, Cleveland Browns, Tennessee Titans
  
  Week 14: Philadelphia Eagles, Indianapolis Colts, Miami Dolphins, New England Patriots`
  .split(/\n/)
  .map((week) => week.split(": "))
  .reduce((teams, info) => {
    //console.log(info)
    if (Array.isArray(info) && info.length === 2) {
      const bye = info[0];
      const teamStr = info[1];
      const _teams = typeof teamStr === "string" ? teamStr.split(",") : [];
      const __teams = _teams.reduce((all, team) => {
        all[team.trim()] = parseInt(bye.replace("Week ", "").trim());
        return all;
      }, {});
      return { ...teams, ...__teams };
    }
    return teams;
  }, {});

export class Team {
  constructor(node) {
    const full = get(node, `full`);
    this.short = get(node, `short`);
    this.full = full;
    this.bye = get(byes, `[${full}]`);
  }
}

export class Teams {
  constructor(teams) {
    //console.log(byes)
    const list = Array.isArray(teams)
      ? teams.map((t) => new Team({ short: t.Team, full: t.FullTeam }))
      : null;
    this.list = list;
    this.length = list.length;
    this.hash = getHashTable(list, `short`);
  }
}

export const getHashTable = (arr, param) => {
  return arr && arr.length
    ? arr.reduce((hash, p) => {
        const slug = get(p, param);
        if (typeof slug !== "undefined") {
          hash[slug] = p;
        }
        return hash;
      }, {})
    : {};
};

export const nfl = new Teams(rawTeams, byes);
