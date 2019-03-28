import { IGame } from "../interfaces/IGame";
import { GameInitializedState } from "../controllers/state/GameInitializedState";
import { TurnExecutingState } from "../controllers/state/TurnExecutingState";
import { GameFinishedState } from "../controllers/state/GameFinishedState";

// create new game states
export class GameStateFactory {
    static createGameInitializedState(game: IGame) {
        return new GameInitializedState(game);
    }

    static createTurnExecutingState(game: IGame) {
        return new TurnExecutingState(game);
    }

    static createGameFinishedState(game: IGame) {
        return new GameFinishedState(game);
    }
}