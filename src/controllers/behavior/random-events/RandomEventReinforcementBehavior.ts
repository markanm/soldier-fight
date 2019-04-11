import { RandomEventEffect } from "../../../enums/RandomEventEffect";
import { IGame } from "../../../interfaces/IGame";
import { IPlayer } from "../../../interfaces/IPlayer";
import { RandomEventMain } from "./RandomEventMain";
import { RandomEventType } from "../../../enums/RandomEventType";

// random event - add 20%/soldier count soldiers to affected players
export class RandomEventReinforcementBehavior extends RandomEventMain {
    constructor(public game: IGame) {
        super(game);
        this.type = RandomEventType.Reinforcement;
    }

    execute(player1: IPlayer, player2: IPlayer): void {
        const affected: RandomEventEffect = this.decideWhoIsAffected(player1.id, player2.id);
        
        if (affected === RandomEventEffect.All) {
            this.executePlayer(0);
            this.executePlayer(1);
        } else {
            this.executePlayer(affected);
        }

        this.game.displayAdapter.randomEvent(this);
    }

    executePlayer(player: number): void {
        const numOfSoldiers = Math.ceil(this.game.players[player].soldiers.length * 0.2) === 0 ?
            1 : Math.ceil(this.game.players[player].soldiers.length * 0.2);

        this.game.players[player].addSoldiers(numOfSoldiers);

        this.game.displayAdapter.randomEvent(this);
    }
}
