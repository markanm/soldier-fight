import { IGameState } from "./IGameState";
import { IPlayer } from "./IPlayer";
import { IDisplayAdapter } from "./IDisplayAdapter";
import { IGameTurnController } from "./IGameTurnController";

export interface IGame {
    displayAdapter: IDisplayAdapter;

    gameTurn: IGameTurnController;
    players: IPlayer[];

    gameInitializedState: IGameState;
    turnExecutingState: IGameState;
    gameFinishedState: IGameState;

    gameState: IGameState;
    isGameDone: boolean;

    getScore(): string;
    getWinner(): string;

    setState(state: IGameState): void;
    getState(): IGameState;
}
