import { IGameTurnController } from "../interfaces/IGameTurnController";
import { IGame } from "../interfaces/IGame";
import { ITurnState } from "../interfaces/ITurnState";
import { TurnStateExecuting } from "./state/turn/TurnStateExecuting";
import { TurnStateFinished } from "./state/turn/TurnStateFinished";
import { RandomEventFactory } from "../factories/RandomEventFactory";
import { ISoldier } from "../interfaces/ISoldier";

export class StateGameTurnController implements IGameTurnController {

    turn: number;
    step: number;

    turnFinishedState: ITurnState;
    turnRunningState: ITurnState;

    currentState!: ITurnState;

    initialize(): boolean {
        this.step = 0;
        this.turn++;
        this.game.displayAdapter.turnStarted(this.turn);
        this.execute();
        return true;
    }

    constructor(public game: IGame) {
        this.turn = 0;
        this.step = 0;

        this.turnRunningState = new TurnStateExecuting(this);
        this.turnFinishedState = new TurnStateFinished(this);

        this.setState(this.turnFinishedState);
    }

    getState(): ITurnState {
        return this.currentState;
    }

    setState(state: ITurnState): void {
        this.currentState = state;
    }

    execute(): boolean {
        this.game.displayAdapter.updateScore(this.game.players[0].soldierCnt, this.game.players[1].soldierCnt);
        console.log(this.turn, this.step);
        this.executeAttack(0, 1);
        this.executeAttack(1, 0);

        this.step++;

        if (this.isTurnDone) {
            this.finishTurn();
        }

        return true;
    }

    get isTurnDone(): boolean {
        return this.step >= this.game.players[0].soldierCnt && this.step >= this.game.players[1].soldierCnt;
    }

    finishTurn() {
        RandomEventFactory.create(this.game).execute(this.game.players[0], this.game.players[1]);
        this.game.displayAdapter.turnFinished(this.turn, this.game.getScore());
        this.game.displayAdapter.updateScore(this.game.players[0].soldierCnt, this.game.players[1].soldierCnt);
        this.setState(this.turnFinishedState);
    }

    executeAttack(p1: 0 | 1, p2: 0 | 1): void {
        if (this.step <= this.game.players[p1].soldiers.length - 1) {
            const attacker = this.game.players[p1].soldiers[this.step];
            const defender = this.game.players[p2].soldiers[Math.floor(Math.random()
                * this.game.players[p2].soldiers.length)];

            defender.executeDefend(attacker.executeAttack(defender));

            if (this.checkIsSoldierDead(defender)) {
                this.game.players[p2].soldiers = this.game.players[p2].soldiers.filter(x => x.id !== defender.id);
                this.game.displayAdapter.soldierDead(defender);
                this.game.displayAdapter.updateScore(this.game.players[0].soldierCnt, this.game.players[1].soldierCnt);
            }
        }
    }

    checkIsSoldierDead(soldier: ISoldier): boolean {
        return soldier.health <= 0;
    }
}