import { IDisplayAdapter } from "../interfaces/IDisplayAdapter";
import { Player } from "../models/Player";

// create new player
export class PlayerFactory {

    static create(id: number, soldierCount: number, displayAdapter: IDisplayAdapter) {
        return new Player(id, soldierCount, displayAdapter);
    }
}
