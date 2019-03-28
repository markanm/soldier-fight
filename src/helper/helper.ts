import { IGame } from "../interfaces/IGame";

// helper class
export class Helper {
    static generateRandomInteger(min: number, max: number): number {
        return Math.floor(min + Math.random()*(max + 1 - min))
    }

    static generateChance(chance: number): boolean {
        return Math.floor(Math.random()*(101)) <= chance;
    }

    static checkIsGameDone(game: IGame): boolean {
        return !game.players[0].soliders.length || !game.players[1].soliders.length;
    }
}