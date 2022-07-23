import { numero, parens } from "../logic";
import { rawDynasty } from "./data";
import { nfl, Team } from "../../teams/classes";
import { slugifyTitle } from "../../teams/logic";

export interface DynastyAttributes {
  pos: string;
  name: string;
  short: string;
  id: string;
  draftYear: number;
  draftRound: number;
  age: number;
  team: Team;
  slug: string;
}

const _dynasty = rawDynasty.split(numero); //.split(/\n/); //(numero);
export const dynasty: DynastyAttributes[] = _dynasty
  .slice(1, _dynasty.length)
  .map((str) => {
    const _posRank = str.match(parens);
    //const posRank = Array.isArray(_posRank) ? parseInt(_posRank[0].replace(/\D/g,"")) : 999
    const pos = Array.isArray(_posRank)
      ? _posRank[0].replace(/[^a-z]/gi, "")
      : "SCRUB";
    const split = str.replace(parens, "").split(",");
    const name = split[0].trim();
    //console.log(split[1])
    const details = split[1].trim().split(" ");
    const short = details[0];
    const exp = details.length > 1 ? details[1].split("-") : 0;
    const age = details.length > 2 ? details[2].split("-") : 0;
    const draftRound = exp[1] === "U" ? 8 : parseInt(exp[1]);
    const team = nfl.hash[short];

    return {
      pos,
      name,
      short,
      id: slugifyTitle(name.trim() + ", " + short.trim()),
      draftYear: parseInt(exp[0]),
      draftRound,
      age: parseInt(age[0]) + parseInt(age[1]) / 12,
      team,
      slug: slugifyTitle(name + " " + pos),
    };
  });
