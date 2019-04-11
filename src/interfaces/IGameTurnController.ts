import { IGame } from "./IGame";
import { ITurnState } from "./ITurnState";

export interface IGameTurnController {
    game: IGame;

    turn: number;
    step: number;

    turnFinishedState: ITurnState;
    turnRunningState: ITurnState;

    setState(state: ITurnState): void;
    getState(): ITurnState;

    initialize(): boolean;

    execute(): boolean;
}
