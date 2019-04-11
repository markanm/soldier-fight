import { TurnControllerFactory } from "../../../factories/TurnControllerFactory";
import { IGame } from "../../../interfaces/IGame";
import { IGameState } from "../../../interfaces/IGameState";
import { IGameTurnController } from "../../../interfaces/IGameTurnController";

// game state - turn executing
export class TurnExecutingState implements IGameState {
    constructor(public game: IGame) {
    }

    public next(): void {
        if (this.game.isGameDone) {
            this.game.setState(this.game.gameFinishedState);
        } else {
            this.game.gameTurn.getState().next();
        }
    }
}
