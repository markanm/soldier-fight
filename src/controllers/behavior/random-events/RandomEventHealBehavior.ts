import { RandomEventEffect } from "../../../enums/RandomEventEffect";
import { IGame } from "../../../interfaces/IGame";
import { IPlayer } from "../../../interfaces/IPlayer";
import { RandomEventMain } from "./RandomEventMain";
import { RandomEventType } from "../../../enums/RandomEventType";

// random event - heal all affected players soldiers for 30 health
export class RandomEventHealBehavior extends RandomEventMain {
    constructor(game: IGame) {
        super(game);
        this.type = RandomEventType.Heal;
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
        this.game.players[player].soldiers.forEach((item) => {
            item.health += 30;
        });
    }
}
