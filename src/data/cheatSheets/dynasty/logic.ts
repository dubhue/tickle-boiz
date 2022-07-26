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
  dynastyAttributes?: true;
  dynastyRank?: number;
  rookieRank?: number
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
    const year = parseInt(exp[0]);
    const posRank = _posRank ? _posRank[0] : "";
    const rank = parseInt(posRank.replace(/[^0-9.]/g,""));
    //const rank = Array.isArray(_rank) ? _rank[0] : undefined
    //console.log(posRank.match(/[^0-9.]/));
    return {
      dynastyRank:
        year !== new Date().getFullYear()
          ? rank
          : undefined,
      pos,
      name,
      short,
      id: slugifyTitle(name.trim() + ", " + short.trim()),
      draftYear: year,
      draftRound,
      age: parseInt(age[0]) + parseInt(age[1]) / 12,
      team,
      slug: slugifyTitle(name + " " + pos),
      dynastyAttributes: true,
      rookieRank: year === new Date().getFullYear() ? rank : undefined
    };
  });
