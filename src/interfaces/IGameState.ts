import { IGame } from "./IGame";
import { IGameTurnController } from "./IGameTurnController";
import { IDisplayAdapter } from "./IDisplayAdapter";

export interface IGameState {
    game: IGame;
    gameTurn?: IGameTurnController;

    next(): void;
}