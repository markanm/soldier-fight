import { IGameState } from "./IGameState";
import { IPlayer } from "./IPlayer";
import { IDisplayAdapter } from "./IDisplayAdapter";

export interface IGame {
    displayAdapter: IDisplayAdapter;
    players: IPlayer[];
    
    gameInitializedState: IGameState;
    turnExecutingState: IGameState;
    gameFinishedState: IGameState;

    gameState: IGameState;

    getScore(): string;
    getWinner(): string;
    
    setState(state: IGameState): void;
    getState(): IGameState;
}