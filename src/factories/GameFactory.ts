import { IGame } from "../interfaces/IGame";
import { Game } from "../models/Game";

 // create new game
export class GameFactory {
    static create(p1SoldierCnt: number, p2SoldierCnt: number): IGame {
        return new Game([p1SoldierCnt, p2SoldierCnt]);
    }
}
