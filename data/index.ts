import { dynasty, DynastyAttributes } from "./cheatSheets/dynasty/logic";
import { depth, DepthAttributes } from "./cheatSheets/depthChart/logic";
import { top300, Top300Attributes } from "./cheatSheets/top300/logic";
import { Player } from "./players/classes";

const allHash = [...dynasty, ...depth, ...top300].reduce((unq, info) => {
  if (!unq[info.slug]) {
    unq[info.slug] = info;
  } else {
    const old = unq[info.slug];
    unq[info.slug] = { ...old, ...info };
  }
  return unq;
}, {});
const combined = Object.keys(allHash).map((k) => allHash[k]);
const allPlayers = combined.map((p) => {
  return new Player(p);
});
const sorted = allPlayers.sort((a, b) => {
  const aScore = a.score ? a.score : Infinity;
  const bScore = b.score ? b.score : Infinity;
  return aScore > bScore ? 1 : aScore < bScore ? -1 : 0;
});
const sortedAndRanked = sorted.map((p, i) => {
  p["rank"] = i + 1;
  p["round"] = Math.ceil((i + 1) / 12);
  return p;
});

export const draftees = sortedAndRanked;
export type { DepthAttributes, Top300Attributes, DynastyAttributes };
