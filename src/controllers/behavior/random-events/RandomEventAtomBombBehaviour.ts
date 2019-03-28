import { IGame } from "../../../interfaces/IGame";
import { RandomEventMain } from "./RandomEventMain";
import { RandomEventEffect } from "../../../enums/RandomEventEffect";
import { IPlayer } from "../../../interfaces/IPlayer";
import { Helper } from "../../../helper/helper";

// random event atom bomb - kill all soldiers for affected player/s
export class RandomEventAtomBombBehavior extends RandomEventMain {
    game: IGame;    

    constructor(game: IGame) {
        super(game);
        this.game = game;
    }

    execute(player1: IPlayer, player2: IPlayer): void {
        debugger;
        const affected: RandomEventEffect = this.decideWhoIsAffected(player1.id, player2.id);

        if(affected == RandomEventEffect.All) {
            this.executePlayer(0);
            this.executePlayer(1);
        } else {
            this.executePlayer(affected);
        }

        if(Helper.checkIsGameDone(this.game)) {
            this.game.setState(this.game.gameFinishedState);
        }

        this.game.displayAdapter.randomEvent(`${player1.name} drops the Atom bomb on ${affected == RandomEventEffect.All ? 'everyone' : player1.id == affected ? player2.name : 'himself'} !! Everyones dead :/`);
    }

    executePlayer(player: number): void {
        this.game.players[player].soliders = [];
    }
    
}