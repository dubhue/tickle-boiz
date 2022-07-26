import { rawTop300 } from "./data";
import { numero, parens } from "../logic";
import { slugifyTitle } from "../../teams/logic";

export interface Top300Attributes {
  name: string;
  posRank: number;
  pos: string;
  short: string;
  value: number;
  slug: string;
  top300Attributes?: true;
}

const _top300 = rawTop300.replace(/\n/g, "").split(numero);

export const top300: Top300Attributes[] = _top300
  .slice(1, _top300.length)
  .map((str) => {
    const _posRank = str.match(parens);
    const posRank = Array.isArray(_posRank)
      ? parseInt(_posRank[0].replace(/\D/g, ""))
      : 999;
    const pos = Array.isArray(_posRank)
      ? _posRank[0].replace(/[^a-z]/gi, "")
      : "SCRUB";
    const split = str.replace(parens, "").split(",");
    const name = split[0].trim();
    const details = split[1].trim().split(" ");
    const short = details[0];
    const value = details[1] ? parseInt(details[1].replace("$", "")) : 0;
    //console.log(name, posRank, pos, short, value);
    return {
      name,
      posRank,
      pos,
      short,
      value,
      slug: slugifyTitle(name + " " + pos),
      top300Attributes: true
    };
  });
