import "isomorphic-fetch";
import { IPlayer } from "../interfaces/IPlayer";
import { PerformanceMeasurement } from "../helper/PerformanceMeasurement";
import { GameConfig } from "../config";

// get soldier names
export class SoldierNamesService {
    private static async getSoldierNamesFromAPI(player: IPlayer, soldierCnt: number): Promise<string[]> {
        const perf: PerformanceMeasurement = new PerformanceMeasurement(`Get names - ${player.name}`);

        try {
            const response = await fetch(`https://uinames.com/api/?amount=${soldierCnt}&region=croatia&gender=male`);
            const data = await response.json();
            const result = data.map((res: { name: string, surname: string }) => `${res.name} ${res.surname}`);

            perf.end();
            return result;
        }
        catch (err) {
            return [];
        }
    }

    private static async generateSoldierNames(player: IPlayer, startFrom: number, soldierCount: number): Promise<string[]> {
        const soldierNames: string[] = [];
        for (let i = startFrom; i < (startFrom + soldierCount); i++) {
            soldierNames.push(`P${player.id}-S${i}`);
        }

        const result = await soldierNames;
        return result;
    }

    static async getSoldierNames(player: IPlayer, soldierCnt: number): Promise<string[]> {
        if (GameConfig.personalize) {
            return this.getSoldierNamesFromAPI(player, soldierCnt);
        } else {
            return this.generateSoldierNames(player, this.findStartingIndex(player), soldierCnt);
        }
    }

    private static findStartingIndex(player: IPlayer): number {
        return (player.soldiers && player.soldiers.length) ? player.soldiers.length - 1 : 0;
    }
}
