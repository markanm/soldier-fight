import { DisplayControllerFactory } from "../factories/DisplayControllerFactory";
import { GameStateFactory } from "../factories/GameStateFactory";
import { PlayerFactory } from "../factories/PlayerFactory";
import { IDisplayAdapter } from "../interfaces/IDisplayAdapter";
import { IGame } from "../interfaces/IGame";
import { IGameState } from "../interfaces/IGameState";
import { IPlayer } from "../interfaces/IPlayer";
import { IGameTurnController } from "../interfaces/IGameTurnController";
import { StateGameTurnController } from "../controllers/StateGameTurnController";

export class Game implements IGame {
    displayAdapter: IDisplayAdapter;
    public gameInitializedState: IGameState;
    public turnExecutingState: IGameState;
    public gameFinishedState: IGameState;

    public gameState!: IGameState;

    public players: IPlayer[] = [];

    gameTurn: IGameTurnController;

    constructor(soldiersCount: number[]) {
        // create display controller
        this.displayAdapter = DisplayControllerFactory.create();
        this.gameTurn = new StateGameTurnController(this);

        // crete game states
        this.gameInitializedState = GameStateFactory.createGameInitializedState(this);
        this.turnExecutingState = GameStateFactory.createTurnExecutingState(this);
        this.gameFinishedState = GameStateFactory.createGameFinishedState(this);

        // generate players
        this.generatePlayers(soldiersCount);

        // game initialized - set init state
        this.setState(this.gameInitializedState);
        this.displayAdapter.gameInitialized();
    }

    generatePlayers(soldiersCount: number[]): void {
        this.players = [];
        let i = 1;
        soldiersCount.forEach((x) => {
            this.players.push(PlayerFactory.create(i++, x, this.displayAdapter));
        });
    }

    public setState(state: IGameState): void {
        this.gameState = state;
    }

    public getState(): IGameState {
        return this.gameState;
    }

    get isGameDone(): boolean {
        return this.players.find((x) => x.soldiers.length === 0) != null;
    }

    getWinner(): string {
        if (this.players[0].soldiers.length === this.players[1].soldiers.length) {
            return `Everyone's dead...but at least it's a draw!! `;
        }
        return this.players[0].soldiers.length > this.players[1].soldiers.length ?
        this.players[0].name ? `${this.players[0].name} is the winner!!` : "" :
        this.players[1].name ? `${this.players[1].name} is the winner!!` : "";
    }

    getScore(): string {
        return `Score: ${this.players[0].soldiers.length} - ${this.players[1].soldiers.length}`;
    }
}
