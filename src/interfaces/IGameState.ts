import { IGame } from "./IGame";
import { IGameTurnController } from "./IGameTurnController";

export interface IGameState {
    game: IGame;

    next(): void;
}
