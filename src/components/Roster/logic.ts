import { RosterPosition } from "./types";

export const isPosPlayer = (pos: RosterPosition) =>
  typeof pos === "string" && pos.match(/^RB$|^WR$/);

export enum ROSTER_LIMITS {
  "TOTAL" = 14
}
