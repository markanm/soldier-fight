import { IGame } from "../interfaces/IGame";
import { StateGameTurnController } from "../controllers/StateGameTurnController";

// create new turn controller
export class TurnControllerFactory {
    static create(game: IGame) {
        return new StateGameTurnController(game);
    }
}