import { IGame } from "../../../interfaces/IGame";
import { RandomEventMain } from "./RandomEventMain";
import { RandomEventEffect } from "../../../enums/RandomEventEffect";
import { IPlayer } from "../../../interfaces/IPlayer";
import { Helper } from "../../../helper/helper";
import { SoldierFactoy } from "../../../factories/SoldierFactory";

// random event - add 10%/soldier count soldiers to affected players
export class RandomEventReinforcementBehavior extends RandomEventMain {
    game: IGame;    

    constructor(game: IGame) {
        super(game);
        this.game = game;
    }

    execute(player1: IPlayer, player2: IPlayer): void {        
        const affected: RandomEventEffect = this.decideWhoIsAffected(player1.id, player2.id);
        this.game.displayAdapter.randomEvent(`${affected == RandomEventEffect.All ? 'All players ' : player1.id == affected + 1 ? player1.name : player2.name} gets reinforcement!!`);

        if(affected == RandomEventEffect.All) {
            this.executePlayer(0);
            this.executePlayer(1);
        } else {
            this.executePlayer(affected);
        }

    }

    executePlayer(player: number): void {
        const numOfSoldiers = Math.ceil(this.game.players[player].soliders.length * 0.1) == 0 ? 1 : Math.ceil(this.game.players[player].soliders.length * 0.1);

        const lastId = this.game.players[player].soliders.length ? this.game.players[player].soliders.length - 1 : 0
        const last = lastId ? this.game.players[player].soliders[lastId].id : 0;
        const m = last + numOfSoldiers;

        for(let i = last; i < m; i++) {
            this.game.players[player].soliders.push(SoldierFactoy.create(i, player + 1));
        }

        this.game.displayAdapter.randomEvent(`${this.game.players[player].name} got ${numOfSoldiers} new soldiers!!`);
    }
    
}