import { IGame } from "./IGame";

export interface IGameController {
    game: IGame;

    run(firstPlayer: number, secondPlayer: number): void;
}
