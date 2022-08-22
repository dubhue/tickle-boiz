import slugify from "slugify";
import { rawByes } from "./data";

export const slugifyTitle = (str: string) =>
  slugify(str, { lower: true, strict: true });

export const byeHash = rawByes.split(/\n/).map((week) => week.split(/\t/));

export const getByeWeek = (team: string) => {
  let week = 0;
  byeHash.forEach((bye) => {
    const regex = new RegExp(team, "i");
    if (Array.isArray(bye[1].match(regex))) {
      week = parseInt(bye[0].split(" ")[1]);
    }
  });
  return week;
};

export const getHashTable = (arr: any[], param: string) => {
  return Array.isArray(arr) && arr.length
    ? arr.reduce((hash, p) => {
        const slug = p[param];
        if (typeof slug !== "undefined") {
          hash[slug] = p;
        }
        return hash;
      }, {})
    : {};
};
