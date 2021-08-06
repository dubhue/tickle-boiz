import get from "lodash/get";
import { getHashTable, nfl } from "./Team";


export class Player {
  constructor(node) {
    const name = get(node, `name`);
    const pos = get(node, `pos`);
    const short = get(node, `short`);
    this.name = name;
    this.posRank = get(node, `posRank`);
    this.pos = pos;
    this.value = get(node, `value`);
    this.team = get(nfl, `hash[${short}]`);
    this.id = name + pos + short;
  }
}

export class Players {
  constructor(top300) {
    const players = Array.isArray(top300)
      ? top300.map((player) => new Player(player))
      : [];
    this.list = players;
    this.length = players.length;
    this.hash = getHashTable(players, `id`);
  }
  mergeData(data) {
    const mergeHash = getHashTable(data, "id");
    const merged = this.list.map((player) => {
      const merge = mergeHash[player.id];
      return { ...merge, ...player };
    });
    this.list = merged;
    this.length = merged.length;
    this.hash = getHashTable(merged, `id`);
  }
}
