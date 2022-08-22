import { allTeams, TeamData } from "./data";
import { getByeWeek, getHashTable, slugifyTitle } from "./logic";

export class Team {
  short: string;
  full: string;
  nickname: string;
  bye: number;
  slug: string;
  constructor(node: TeamData) {
    const split = node.full.split(" ");
    const nick = split[split.length - 1];
    this.short = node.short;
    this.full = node.full;
    this.nickname = nick;
    this.bye = getByeWeek(nick);
    this.slug = slugifyTitle(node.full);
  }
}

export class Teams {
  list: Team[];
  length: number;
  hash: { [key: string]: Team };
  slugs: { [key: string]: Team };
  constructor(teams: TeamData[]) {
    const list = Array.isArray(teams) ? teams.map((t) => new Team(t)) : [];
    this.list = list;
    this.length = list.length;
    this.hash = getHashTable(list, `short`);
    this.slugs = getHashTable(list, `slug`);
  }
}

export const nfl = new Teams(allTeams);
