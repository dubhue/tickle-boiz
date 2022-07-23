// source: https://www.footballdiehards.com/nfl-bye-weeks.cfm
export const rawByes = `Week 6	Detroit Lions, Las Vegas Raiders, Tennessee Titans, Houston Texans
Week 7	Buffalo Bills, Minnesota Vikings, Philadelphia Eagles, Los Angeles Rams
Week 8	Kansas City Chiefs, Los Angeles Chargers
Week 9	Cleveland Browns, Dallas Cowboys, Denver Broncos, New York Giants Giants, Pittsburgh Steelers, San Francisco 49ers
Week 10	Baltimore Ravens, Cincinnati Bengals, New England Patriots, New York Jets Jets
Week 11	Jacksonville Jaguars, Miami Dolphins, Seattle Seahawks, Tampa Bay Buccaneers
Week 13	Arizona Cardinals, Carolina Panthers
Week 14	Atlanta Falcons, Chicago Bears, Green Bay Packers, Indianapolis Colts, New Orleans Saints, Washington Commanders`;

export interface TeamData {
  short: string;
  full: string;
}

export const allTeams = [
  {
    short: "ARI",
    full: "Arizona Cardinals"
  },
  {
    short: "ATL",
    full: "Atlanta Falcons"
  },
  {
    short: "BAL",
    full: "Baltimore Ravens"
  },
  {
    short: "BUF",
    full: "Buffalo Bills"
  },
  {
    short: "CAR",
    full: "Carolina Panthers"
  },
  {
    short: "CHI",
    full: "Chicago Bears"
  },
  {
    short: "CIN",
    full: "Cincinnati Bengals"
  },
  {
    short: "CLE",
    full: "Cleveland Browns"
  },
  {
    short: "DAL",
    full: "Dallas Cowboys"
  },
  {
    short: "DEN",
    full: "Denver Broncos"
  },
  {
    short: "DET",
    full: "Detroit Lions"
  },
  {
    short: "GB",
    full: "Green Bay Packers"
  },
  {
    short: "HOU",
    full: "Houston Texans"
  },
  {
    short: "IND",
    full: "Indianapolis Colts"
  },
  {
    short: "JAC",
    full: "Jacksonville Jaguars"
  },
  {
    short: "KC",
    full: "Kansas City Chiefs"
  },
  {
    short: "LAC",
    full: "Los Angeles Chargers"
  },
  {
    short: "LAR",
    full: "Los Angeles Rams"
  },
  {
    short: "MIA",
    full: "Miami Dolphins"
  },
  {
    short: "MIN",
    full: "Minnesota Vikings"
  },
  {
    short: "NE",
    full: "New England Patriots"
  },
  {
    short: "NO",
    full: "New Orleans Saints"
  },
  {
    short: "NYG",
    full: "New York Giants"
  },
  {
    short: "NYJ",
    full: "New York Jets"
  },
  {
    short: "LV",
    full: "Las Vegas Raiders"
  },
  {
    short: "PHI",
    full: "Philadelphia Eagles"
  },
  {
    short: "PIT",
    full: "Pittsburgh Steelers"
  },
  {
    short: "SF",
    full: "San Francisco 49ers"
  },
  {
    short: "SEA",
    full: "Seattle Seahawks"
  },
  {
    short: "TB",
    full: "Tampa Bay Buccaneers"
  },
  {
    short: "TEN",
    full: "Tennessee Titans"
  },
  {
    short: "WAS",
    full: "Washington Commanders"
  },
  {
    short: "FA",
    full: "Free Agent"
  }
];
