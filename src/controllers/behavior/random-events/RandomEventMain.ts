import { IRandomEventBehavior } from "../../../interfaces/IRandomEventBehavior";
import { IGame } from "../../../interfaces/IGame";
import { Helper } from "../../../helper/helper";
import { RandomEventEffect } from "../../../enums/RandomEventEffect";
import { IPlayer } from "../../../interfaces/IPlayer";

// random event abstract class - logic to decide who is affected
export abstract class RandomEventMain implements IRandomEventBehavior {
    game: IGame;
    
    constructor(game: IGame) {
        this.game = game;
    }

    execute(player1: IPlayer, player2: IPlayer): void {
        
    }

    decideWhoIsAffected(player1: number, player2: number) {
        if(Helper.generateChance(30)) {
            return player1;
        } else if (Helper.generateChance(20)) {
            return RandomEventEffect.All;
        } else {
            return player2;
        }
    }
}