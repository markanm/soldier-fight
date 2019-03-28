import { IGame } from "../interfaces/IGame";
import { IGameState } from "../interfaces/IGameState";
import { IPlayer } from "../interfaces/IPlayer";
import { PlayerFactory } from "../factories/PlayerFactory";
import { IDisplayAdapter } from "../interfaces/IDisplayAdapter";
import { GameStateFactory } from "../factories/GameStateFactory";
import { DisplayControllerFactory } from "../factories/DisplayControllerFactory";
import { IGameTurnController } from "../interfaces/IGameTurnController";

export class Game implements IGame {
    displayAdapter: IDisplayAdapter;
    public gameInitializedState: IGameState;
    public turnExecutingState: IGameState;
    public gameFinishedState: IGameState;

    public gameState!: IGameState;

    public players: IPlayer[] = [];

    constructor(solidersCount: number[]) {
        // create display controller
        this.displayAdapter = DisplayControllerFactory.create();
        
        // crete game states
        this.gameInitializedState = GameStateFactory.createGameInitializedState(this);
        this.turnExecutingState = GameStateFactory.createTurnExecutingState(this);
        this.gameFinishedState = GameStateFactory.createGameFinishedState(this);

        // generate players
        this.generatePlayers(solidersCount);

        // game initialized - set init state
        this.setState(this.gameInitializedState);
        this.displayAdapter.gameInitialized();
    }

    generatePlayers(solidersCount: number[]) {
        this.players = [];
        let i = 1;
        solidersCount.forEach(x => {
            this.players.push(PlayerFactory.create(i++, x));
        })
    }

    public setState(state: IGameState): void {
        this.gameState = state;
    }

    public getState(): IGameState {
        return this.gameState;
    }

    getWinner(): string {
        if(this.players[0].soliders.length === this.players[1].soliders.length) {
            return `Everyone's dead...but at least it's a draw!! `
        }
        return this.players[0].soliders.length > this.players[1].soliders.length ? 
        this.players[0].name ? `${this.players[0].name} is the winner!!` : "" : 
        this.players[1].name ? `${this.players[1].name} is the winner!!` : "";
    }

    getScore(): string {
        return `Score: ${this.players[0].soliders.length} - ${this.players[1].soliders.length}`;
    }
}