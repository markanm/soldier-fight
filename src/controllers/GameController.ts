import { GameConfig } from "../config";
import { GameFactory } from "../factories/GameFactory";
import { PerformanceMeasurement } from "../helper/PerformanceMeasurement";
import { IGame } from "../interfaces/IGame";
import { IGameController } from "../interfaces/IGameController";

// main game controller - executes turns with delay
export class GameController implements IGameController {
    game!: IGame;

    run(firstPlayer: number, secondPlayer: number): void {
        // create game
        const fPerf = new PerformanceMeasurement("Game with init");

        this.game = GameFactory.create(firstPlayer, secondPlayer);
        const gPerf = new PerformanceMeasurement("Game w/o init");

        const loop = setInterval(() => {
            if ((this.game.getState() as any).constructor.name !== "GameFinishedState") {
                // loop turns until game finishes
                this.game.getState().next();
            } else {
                // execute last state to print results
                this.game.getState().next();
                fPerf.end();
                gPerf.end();
                clearInterval(loop);
            }
        }, GameConfig.turnDelay);
    }
}
