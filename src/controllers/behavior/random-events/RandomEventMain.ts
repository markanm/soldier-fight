import { RandomEventEffect } from "../../../enums/RandomEventEffect";
import { Helper } from "../../../helper/helper";
import { IGame } from "../../../interfaces/IGame";
import { IPlayer } from "../../../interfaces/IPlayer";
import { IRandomEventBehavior } from "../../../interfaces/IRandomEventBehavior";
import { RandomEventType } from "../../../enums/RandomEventType";

// random event abstract class - logic to decide who is affected
export abstract class RandomEventMain implements IRandomEventBehavior {
    game: IGame;
    type: RandomEventType;
    _affected: RandomEventEffect;

    constructor(game: IGame) {
        this.game = game;
        this._affected = RandomEventEffect.All;
        this.type = RandomEventType.None;
    }

    execute(player1: IPlayer, player2: IPlayer): void {

    }

    getAffected(): RandomEventEffect {
        return this._affected;
    }

    decideWhoIsAffected(player1: number, player2: number) {
        if (Helper.generateChance(30)) {
            return player1;
        } else if (Helper.generateChance(20)) {
            return RandomEventEffect.All;
        } else {
            return player2;
        }
    }
}
