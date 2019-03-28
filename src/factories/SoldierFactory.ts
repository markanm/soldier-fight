import { Solider } from "../models/Soldier";

// create new soldier
export class SoldierFactoy {
    static create(id: number, playerId: number) {
        return new Solider(id, playerId);
    }
}