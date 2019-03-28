import { IGameController } from "../interfaces/IGameController";
import { IGame } from "../interfaces/IGame";
import { GameFactory } from "../factories/GameFactory";
import { GameConfig } from "../config";

// main game controller - executes turns with delay
export class GameController implements IGameController {
    game!: IGame; 
    
    run(firstPlayer: number, secondPlayer: number): void {
        // create game
        this.game = GameFactory.create(firstPlayer, secondPlayer);

        let loop = setInterval(() => { 
            if((<any>this.game.getState()).constructor.name != "GameFinishedState") {
                // loop turns until game finishes
                this.game.getState().next();
            } else {
                // execute last state to print results
                this.game.getState().next();
                clearInterval(loop);
            }
         }, GameConfig.turnDelay);
    }
}