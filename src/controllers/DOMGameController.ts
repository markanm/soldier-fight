import { GameConfig } from "../config";
import { GameFactory } from "../factories/GameFactory";
import { PerformanceMeasurement } from "../helper/PerformanceMeasurement";
import { IGame } from "../interfaces/IGame";
import { IGameController } from "../interfaces/IGameController";

// DOM game controller - executes turns from DOM events
export class DOMGameController implements IGameController {
    game!: IGame;
    timer: number = 0;

    init() {
        const start = document.querySelector("#btn_start");
        const next = document.querySelector("#btn_next");
        const skip = document.querySelector("#btn_skip_turn");
        const auto = document.querySelector("#btn_auto");

        const me = this;

        if (start) {
            start.addEventListener("click", e => {
                const p1 = Number((<HTMLInputElement>document.querySelector("#p1_sold")).value);
                const p2 = Number((<HTMLInputElement>document.querySelector("#p2_sold")).value);

                me.run(p1, p2);

                start.classList.add('hidden');
                if (next) {
                    next.classList.remove('hidden');
                }
                if(skip) {
                    skip.classList.remove('disabled');
                }
            }, false);
        }

        if (next) {
            next.addEventListener("click", e => {
                me.next();
            }, false);
        }

        if (skip) {
            skip.addEventListener("click", e => {
                this.timer = setInterval(() => {
                    if ((me.game.gameTurn.getState() as any).constructor.name !== "TurnStateFinished") {
                        // loop turns until game finishes
                        me.game.getState().next();
                    } else {
                        // execute last state to print results
                        clearInterval(me.timer);
                        return;
                    }
                }, GameConfig.turnDelay);
            }, false);
        }

        if (auto) {
            auto.addEventListener("click", e => {
                console.log('auto');
            }, false);
        }
    }

    run(firstPlayer: number, secondPlayer: number): void {
        this.game = GameFactory.create(firstPlayer, secondPlayer);
    }

    next(): void {
        this.game.getState().next();
    }
}
