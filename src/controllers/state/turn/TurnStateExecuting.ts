import { ITurnState } from "../../../interfaces/ITurnState";
import { IGameTurnController } from "../../../interfaces/IGameTurnController";

export class TurnStateExecuting implements ITurnState {

    constructor(public gameTurn: IGameTurnController) {}
    
    next(): void {
        this.gameTurn.execute();
    }
}