import { RandomEventType } from "../enums/RandomEventType";
import { IGame } from "./IGame";
import { IPlayer } from "./IPlayer";
import { RandomEventEffect } from "../enums/RandomEventEffect";

export interface IRandomEventBehavior {
    game: IGame;
    type: RandomEventType;

    getAffected(): RandomEventEffect;
    execute(player1: IPlayer, player2: IPlayer): void;
}
