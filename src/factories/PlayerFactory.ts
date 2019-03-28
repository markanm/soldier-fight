import { Player } from "../models/Player";

// create new player
export class PlayerFactory {
    
    static create(id: number, soldierCount: number, name?: string) {
        return new Player(id, soldierCount, name);
    }
}