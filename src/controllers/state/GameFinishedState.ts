import { IGameState } from "../../interfaces/IGameState";
import { IGame } from "../../interfaces/IGame";

// game state - finished
export class GameFinishedState implements IGameState {
    public game: IGame;
    
    constructor(game: IGame) {
        this.game = game;
    }
    
    public next(): void {
        this.game.displayAdapter.gameFinished(this.game.getWinner(), this.game.getScore());
    }

    
}