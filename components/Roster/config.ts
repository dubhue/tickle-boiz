import { Player } from "../../data/Player";
import { RosterSlot } from "./classes";
import { ROSTER_LIMITS } from "./logic";

let emptyPlayers: Player[] = [];
export const slotConfiguration = {
  QB: new RosterSlot({
    slot: "QB",
    max: 1,
    allowed: ["QB"],
    starters: 1,
    players: [...emptyPlayers]
  }),

  RB: new RosterSlot({
    slot: "RB",
    max: 2,
    allowed: ["RB"],
    starters: 2,
    players: [...emptyPlayers]
  }),
  WR: new RosterSlot({
    slot: "WR",
    max: 2,
    allowed: ["WR"],
    starters: 2,
    players: [...emptyPlayers]
  }),
  TE: new RosterSlot({
    slot: "TE",
    max: 1,
    allowed: ["TE"],
    starters: 1,
    players: [...emptyPlayers]
  }),
  FLEX: new RosterSlot({
    slot: "FLEX",
    max: 1,
    allowed: ["RB", "WR", "TE"],
    starters: 1,
    players: [...emptyPlayers]
  }),
  "D/ST": new RosterSlot({
    slot: "D/ST",
    max: 1,
    allowed: ["D/ST"],
    starters: 1,
    players: [...emptyPlayers]
  }),
  K: new RosterSlot({
    slot: "K",
    max: 1,
    allowed: ["K"],
    starters: 1,
    players: [...emptyPlayers]
  }),
  BENCH: new RosterSlot({
    slot: "BENCH",
    max: ROSTER_LIMITS.TOTAL,
    allowed: ["QB", "RB", "WR", "TE", "D/ST", "K"],
    starters: 5,
    players: [...emptyPlayers]
  })
};
