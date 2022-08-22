import { Player } from "../../data/players/classes";
import { slotConfiguration } from "./config";
import {
  FullFantasyRoster,
  RosterPosition,
  RosterSlotSettings,
  RosterSlotTypes
} from "./types";

export class RosterSlot {
  slot: RosterSlotTypes;
  starters: number;
  max: number;
  allowed: RosterPosition[];
  players: Player[];
  hash: { [key: string]: Player };
  length: number;
  error: false | string;
  constructor(settings: RosterSlotSettings) {
    const hash: { [key: string]: Player } = {};
    this.slot = settings.slot;
    this.max = settings.max;
    this.allowed = settings.allowed;
    this.players = settings.players;
    this.length = settings.players.length;
    this.starters = settings.starters;
    this.hash = settings.players.reduce((h, p) => {
      h[p.id] = p;
      return h;
    }, hash);
    this.error = false;
  }
  addPlayer(player: Player) {
    if (this.length < this.max) {
      this.players.push(player);
      this.length = this.players.length;
    } else {
      this.error = `${this.slot} is full. Max is ${this.max} player${
        this.max !== 1 ? "s" : ""
      }.`;
    }
  }
  //removePlayer(id) {}
  popPlayer() {
    this.players.pop();
    this.length = this.players.length;
  }
  shiftPlayer() {
    this.players.shift();
    this.length = this.players.length;
  }
  clearError() {
    this.error = false;
  }
}

export class FullRoster {
  roster: FullFantasyRoster;
  constructor(config: typeof slotConfiguration) {
    this.roster = { ...config };
  }
}
