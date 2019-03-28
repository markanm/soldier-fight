import { IGame } from "../../../interfaces/IGame";
import { RandomEventMain } from "./RandomEventMain";
import { RandomEventEffect } from "../../../enums/RandomEventEffect";
import { IPlayer } from "../../../interfaces/IPlayer";

// random event - heal all affected players soldiers for 30 health
export class RandomEventHealBehavior extends RandomEventMain {
    game: IGame;    

    constructor(game: IGame) {
        super(game);
        this.game = game;
    }

    execute(player1: IPlayer, player2: IPlayer): void {
        const affected: RandomEventEffect = this.decideWhoIsAffected(player1.id, player2.id);

        if(affected == RandomEventEffect.All) {
            this.executePlayer(0);
            this.executePlayer(1);
        } else {
            this.executePlayer(affected);
        }

        this.game.displayAdapter.randomEvent(`${affected == RandomEventEffect.All ? 'Both teams' : player1.id == affected ? player1.name : player2.name} units are healed for 30 damage!!`);
    }

    executePlayer(player: number): void {
        this.game.players[player].soliders.forEach(item => {
            item.health += 5;
        });
    }
    
}