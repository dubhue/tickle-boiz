import get from "lodash/get";
import { slugifyTitle } from "../../teams/logic";
import { rawDepth } from "./data";

export interface DepthAttributes {
  depth: string;
  depthRank: number;
  name: string;
  depthPos: number;
  pos: string;
  slug: string;
  depthAttributes?: true;
}

let arr: DepthAttributes[] = [];
export const depth: DepthAttributes[] = rawDepth
  .replace(/\n/g, "")
  .replace(
    /QB1 -|QB2 -|RB1 -|RB2 -|RB3 -|RB4 -|WR1 -|WR2 -|WR3 -|WR4 -|TE1 -|TE2 -|K -/g,
    ""
  )
  .split(")")
  .reduce((valid, str) => {
    const split = str.split("(");
    const depthRank = parseInt(split[1]);
    const split2 = split[0].trim().split(" ");
    const depth = split2[0];
    const name = split2.slice(1, split2.length).join(" ");
    const depthPos =
      depth === "K" ? 1 : parseInt(get(depth.match(/[0-9]$/), `[0]`));
    const pos = depth === "K" ? "K" : depth.slice(0, depth.length - 1);
    if (name !== "") {
      valid.push({
        depth,
        depthRank,
        name: name.replace(/TE1|RB1/, "").trim(),
        depthPos,
        pos,
        slug: slugifyTitle(`${name} ${pos}`),
        depthAttributes: true
      });
    }

    return valid;
  }, arr)
  .map((player) => {
    return {
      ...player
    };
  });
