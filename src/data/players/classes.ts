import { DepthAttributes } from "../cheatSheets/depthChart/logic";
import { DynastyAttributes } from "../cheatSheets/dynasty/logic";
import { Top300Attributes } from "../cheatSheets/top300/logic";
import { nfl, Team } from "../teams/classes";
import { getHashTable, slugifyTitle } from "../teams/logic";

const CURRENT_YEAR = 2022

export interface PlayerAttributes
  extends DynastyAttributes,
    Top300Attributes,
    DepthAttributes {}

export class Player {
  name: string;
  pos: string;
  short: string;
  posRank: number;
  draftYear: number;
  age: number;
  slug: string;
  id: string;
  value: number;
  team: Team;
  draftRound: number;
  icons: { [key: string]: boolean };

  isKeeper: boolean;
  depth: number;
  shortName: string;
  draftCost: number;
  isDraftable: boolean;
  top300: boolean;
  dynasty: boolean;
  depthRank: number;
  dynRank?: number;
  score?: number
  constructor(node: PlayerAttributes) {
    //console.log(node)
    const name = node.name;
    const pos = node.pos;
    const short = node.short;
    const posRank = node.posRank;
    const draftYear = node.draftYear;
    const age = node.age;
    const slug = slugifyTitle(name + " " + pos);
    const depth = node.depthPos;
    const isWr =
      typeof pos === "string" ? Array.isArray(pos.match(/^WR$/)) : false;
    const nameSplit = typeof name === "string" && name.split(" ");
    const shortName =
      typeof name === "string"
        ? `${nameSplit[0].slice(0, 1)}. ${nameSplit[1]}`
        : "";
    const value = node.value;
    const draftCost = node.draftCost;
    const isKeeper = node.isKeeper;
    this.name = name;
    this.posRank = posRank;
    this.pos = pos;
    this.value = value;
    this.team = short ? nfl.hash[short] : nfl.slugs[slug];
    this.id = slugifyTitle(`${name}, ${short}`);
    this.draftYear = draftYear;
    this.draftRound = node.draftRound;
    this.age = age;
    this.icons = {
      star:
        typeof pos === "string"
          ? Array.isArray(pos.match(/^WR|RB$/) && posRank <= 10) ||
            (Array.isArray(pos.match(/^QB|TE$/)) && posRank <= 3)
          : false,
      rookie: draftYear === CURRENT_YEAR,
      goldenAge: Math.floor(age) === 24,
      starter: depth === 1 || (isWr && depth === 2) ? true : false,
      backup: !isWr && depth >= 2,
      veteran: CURRENT_YEAR - draftYear >= 6,
      youngin: age < 24
    };
    this.isKeeper = isKeeper;
    this.slug = slug;
    this.depth = depth;
    this.shortName = shortName;
    this.draftCost = draftCost;
    this.isDraftable = !isKeeper;
    this.dynasty = node.dynastyAttributes ? true : false;
    this.top300 = node.top300Attributes ? true : false;
    this.depthRank = node.depthRank;
    this.dynRank = node.dynastyRank;
    this.score =
      node.dynastyRank && node.depthRank && node.posRank
        ? (node.dynastyRank + node.depthRank + node.posRank) / 3
        : undefined;
  }
  changeDraftState() {
    const draftStatus = this.isDraftable;
    this.isDraftable = !draftStatus;
  }
}
