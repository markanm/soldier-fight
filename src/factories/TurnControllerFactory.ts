import { GameTurnController } from "../controllers/GameTurnController";
import { IGame } from "../interfaces/IGame";

// create new turn controller
export class TurnControllerFactory {
    static create(game: IGame)  {
        return new GameTurnController(game);
    }
}