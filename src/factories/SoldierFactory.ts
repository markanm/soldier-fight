import { Soldier } from "../models/Soldier";

// create new soldier
export class SoldierFactoy {
    static create(id: number, playerId: number, name: string) {
        return new Soldier(id, playerId, name);
    }
}
