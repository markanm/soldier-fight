import { IGameTurnController } from "./IGameTurnController";

export interface ITurnState {
    gameTurn: IGameTurnController;

    next(): void;
}