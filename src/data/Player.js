import get from "lodash/get";
import { getHashTable, nfl } from "./Team";
import { slugifyTitle } from "./dynasty";

export class Player {
  constructor(node) {
    //console.log(node);
    const name = get(node, `name`);
    const pos = get(node, `pos`);
    const short = get(node, `short`);
    const posRank = get(node, `posRank`);
    const draftYear = get(node, `draftYear`);
    const age = get(node, `age`);
    const slug = slugifyTitle(name + " " + pos);
    const depth = get(node, `depthPos`, get(node, `depth`));
    const isWr = pos.match(/^WR$/);
    const nameSplit = typeof name === "string" && name.split(" ");
    const shortName = `${nameSplit[0].slice(0, 1)}. ${
      nameSplit[1]
    }`;
    this.name = name;
    this.posRank = posRank;
    this.pos = pos;
    this.value = get(node, `value`);
    this.team = short ? get(nfl, `hash[${short}]`) : get(nfl, `slugs[${slug}]`);
    this.id = slugifyTitle(`${name}, ${short}`);
    this.draftYear = draftYear;
    this.draftRound = get(node, `draftRound`);
    this.age = age;
    this.icons = {
      star:
        typeof pos === "string" &&
        ((pos.match(/^WR|RB$/) && posRank <= 10) ||
          (pos.match(/^QB|TE$/) && posRank <= 3)),
      rookie: draftYear === 2021,
      goldenAge: Math.floor(age) === 24,
      starter: depth === 1 || (isWr && depth === 2),
      backup: (!isWr && depth >= 2) || isWr >= 3,
      veteran: 2021 - draftYear >= 6,
      youngin: age < 24
    };
    this.isKeeper = get(node, `isKeeper`, false);
    this.slug = slug;
    this.depth = depth;
    this.shortName = shortName;
  }
}

export class Players {
  constructor(top300) {
    const players = Array.isArray(top300)
      ? top300.map((player) => new Player(player))
      : [];
    const hash = getHashTable(players, `slug`);
    const sorted = players.sort((a, b) => b.value - a.value);
    this.list = sorted;
    this.length = sorted.length;
    this.hash = hash;
  }
}
