import { IGame } from "../../../interfaces/IGame";
import { RandomEventMain } from "./RandomEventMain";
import { RandomEventEffect } from "../../../enums/RandomEventEffect";

// random event - none
export class RandomEventNoneBehavior extends RandomEventMain {
    game: IGame;    

    constructor(game: IGame) {
        super(game);
        this.game = game;
    }

    execute(): void {
        this.game.displayAdapter.randomEvent("No random event...");
    }
}