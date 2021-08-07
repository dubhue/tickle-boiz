import get from "lodash/get";
import { getHashTable, nfl } from "./Team";
import { slugifyTitle } from "./dynasty";

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
    this.id = slugifyTitle(`${name}, ${short}`);
  }
}

export class Players {
  constructor(top300) {
    const players = Array.isArray(top300)
      ? top300.map((player) => new Player(player))
      : [];
    const hash = getHashTable(players, `id`);
    this.list = players;
    this.length = players.length;
    this.hash = hash;
    console.log("hash:", hash);
  }
  mergeData(data) {
    console.log("data:", data);
    //const mergeHash = getHashTable(data, `id`);
    const mergeHash = data.reduce((all, plyr) => {
      //onsole.log(player);
      const { id } = plyr;
      const draftYear = get(plyr, `draftYear`);
      //console.log(id, draftYear);
      const old = get(this, `hash[${id}]`);

      // console.log(id, old, player);
      if (old) {
        console.log(old)
        all[id] = { ...old, ...plyr, draftYear };
      } else {
        all[id] = { ...plyr, draftYear };
      }
      //console.log('all:',all)
      return all;
    }, {});
    const hash = this.hash;
    console.log("mergehash:", mergeHash);
    const merged = Object.assign(mergeHash, hash);
    console.log("merge:", mergeHash, "listHash:", hash);
    const list = Object.keys(merged).map((key) => merged[key]);
    this.list = list;
    this.length = list.length;
    this.hash = merged;
  }
}
