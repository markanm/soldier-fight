import { ISoldier } from "./ISoldier";

export interface IPlayer {
    id: number;
    name: string;
    soldiers: ISoldier[];
    isReady: boolean;
    soldierCnt: number;

    addSoldiers(soldierCount: number): void;
    generateSoldiers(soldierNames: string[]): void;
}
