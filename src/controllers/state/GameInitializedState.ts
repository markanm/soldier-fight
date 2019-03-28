import { IGameState } from "../../interfaces/IGameState";
import { IGame } from "../../interfaces/IGame";
import { IGameTurnController } from "../../interfaces/IGameTurnController";
import { TurnControllerFactory } from "../../factories/TurnControllerFactory";

// game state - initialized
export class GameInitializedState implements IGameState {
    public game: IGame;
    gameTurn: IGameTurnController;
    
    constructor(game: IGame) {
        this.gameTurn = TurnControllerFactory.create(game);
        this.game = game;
    }
    
    public next(): void {
        this.game.setState(this.game.turnExecutingState);
        this.game.displayAdapter.gameStarted();
        this.gameTurn.execute();
    }
}