import { IGame } from "../../../interfaces/IGame";
import { RandomEventMain } from "./RandomEventMain";

// random event - none
export class RandomEventNoneBehavior extends RandomEventMain {
    game: IGame;

    constructor(game: IGame) {
        super(game);
        this.game = game;
    }

    execute(): void {
        this.game.displayAdapter.randomEvent(this);
    }
}
