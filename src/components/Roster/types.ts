import { Player } from "../../data/players/classes";
import { RosterSlot } from "./classes";

export type RosterPosition = "RB" | "WR" | "QB" | "D/ST" | "TE" | "K";
export type RosterSlotTypes = RosterPosition | "FLEX" | "BENCH";

export interface RosterSlotSettings {
  slot: RosterSlotTypes;
  starters: number;
  max: number;
  allowed: RosterPosition[];
  players: Player[];
}

export interface FullFantasyRoster {
  QB: RosterSlot;
  RB: RosterSlot;
  WR: RosterSlot;
  TE: RosterSlot;
  FLEX: RosterSlot;
  "D/ST": RosterSlot;
  K: RosterSlot;
  BENCH: RosterSlot;
}
