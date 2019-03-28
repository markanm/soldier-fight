import { ISolider } from "../interfaces/ISolider";
import { IPlayer } from "../interfaces/IPlayer";
import { SoldierFactoy } from "../factories/SoldierFactory";
import { IDisplayAdapter } from "../interfaces/IDisplayAdapter";
import { DisplayControllerFactory } from "../factories/DisplayControllerFactory";

export class Player implements IPlayer {
    displayAdapter: IDisplayAdapter;
    id: number;    
    name: string;
    soliders: ISolider[] = [];

    constructor(id: number, soliderCount: number, name?: string) {
        this.displayAdapter = DisplayControllerFactory.create();
        this.id = id;
        this.name = name ? name : this.generateName(id);
        this.displayAdapter.playerCreated(this.name);
        
        this.generateSoliders(soliderCount);
    }

    generateName(id: number) {
        return `P${id}`;
    }

    generateSoliders(soliderCount: number) {
        this.soliders = new Array<ISolider>();

        for(let i = 1; i <= soliderCount; i++) {
            this.soliders.push(SoldierFactoy.create(i, this.id));
        }

        this.displayAdapter.solidersCreated(this.name, this.soliders.length);
    }
}