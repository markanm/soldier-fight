import { ITurnState } from "../../../interfaces/ITurnState";
import { IGameTurnController } from "../../../interfaces/IGameTurnController";

export class TurnStateFinished implements ITurnState {
    constructor(public gameTurn: IGameTurnController) { }
    
    next(): void { 
        this.gameTurn.initialize();
        this.gameTurn.setState(this.gameTurn.turnRunningState);
    }
}