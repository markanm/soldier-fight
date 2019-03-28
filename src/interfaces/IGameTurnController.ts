import { IGame } from "./IGame";
import { IDisplayAdapter } from "./IDisplayAdapter";

export interface IGameTurnController {
    displayAdapter: IDisplayAdapter;
    game: IGame;
    execute(): boolean;
}