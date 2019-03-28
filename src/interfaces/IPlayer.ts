import { ISolider } from "./ISolider";
import { IDisplayAdapter } from "./IDisplayAdapter";

export interface IPlayer {
    id: number;
    name?: string;

    displayAdapter: IDisplayAdapter;
    
    soliders: ISolider[];
}
