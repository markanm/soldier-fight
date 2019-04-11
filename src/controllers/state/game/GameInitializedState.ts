import { TurnControllerFactory } from "../../../factories/TurnControllerFactory";
import { IGame } from "../../../interfaces/IGame";
import { IGameState } from "../../../interfaces/IGameState";
import { IGameTurnController } from "../../../interfaces/IGameTurnController";

// game state - initialized
export class GameInitializedState implements IGameState {
    constructor(public game: IGame) {
    }

    public next(): void {
        this.game.setState(this.game.turnExecutingState);
        this.game.displayAdapter.gameStarted();
        this.game.gameTurn.getState().next();
    }
}
