import { SoldierFactoy } from "../factories/SoldierFactory";
import { SoldierNamesService } from "../services/SoldierNamesService";
import { IDisplayAdapter } from "../interfaces/IDisplayAdapter";
import { IPlayer } from "../interfaces/IPlayer";
import { ISoldier } from "../interfaces/ISoldier";

export class Player implements IPlayer {

    public name: string;
    public isReady: boolean;
    public soldiers: ISoldier[];
    
    public get soldierCnt(): number {
        return this.soldiers.length;
    }

    constructor(
        public id: number,
        soldierCount: number,
        private _displayAdapter: IDisplayAdapter
    ) {
        this.isReady = false;
        this.soldiers = new Array<ISoldier>();

        this.name = name ? name : this.generateName(id);
        this._displayAdapter.playerCreated(this.name);
        this.addSoldiers(soldierCount);
    }

    private generateName(id: number) {
        return `P${id}`;
    }

    // generate new soldier names and add soldiers
    addSoldiers(soldierCount: number): void {
        this.isReady = false;
        SoldierNamesService.getSoldierNames(this, soldierCount)
            .then(res => {
                this.generateSoldiers(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    // names generated - generate new soldiers
    generateSoldiers(soldierNames: string[]): void {
        if (!this.soldiers) {
            this.soldiers = new Array<ISoldier>();
        }

        soldierNames.forEach((name, index) => this.soldiers.push(SoldierFactoy.create(index, this.id, name)));
        this._displayAdapter.soldiersCreated(this.name, this.soldiers.length);
        this.isReady = true;
    }
}
