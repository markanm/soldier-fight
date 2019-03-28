import { IGameState } from "../../interfaces/IGameState";
import { IGame } from "../../interfaces/IGame";
import { IGameTurnController } from "../../interfaces/IGameTurnController";
import { TurnControllerFactory } from "../../factories/TurnControllerFactory";
import { Helper } from "../../helper/helper";

// game state - turn executing
export class TurnExecutingState implements IGameState {
    public game: IGame;
    gameTurn: IGameTurnController;
    
    constructor(game: IGame) {
        this.game = game;
        this.gameTurn = TurnControllerFactory.create(this.game);
    }
    
    public next(): void {
        if(Helper.checkIsGameDone(this.game)) {
            this.game.setState(this.game.gameFinishedState);
        } else {
            this.gameTurn.execute();
        }
    }
}
