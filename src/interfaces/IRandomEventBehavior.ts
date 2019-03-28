import { IGame } from "./IGame";
import { IDisplayAdapter } from "./IDisplayAdapter";
import { IPlayer } from "./IPlayer";

export interface IRandomEventBehavior {
    game: IGame;

    execute(player1: IPlayer, player2: IPlayer): void;
}