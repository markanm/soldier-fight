import { IDisplayAdapter } from "../interfaces/IDisplayAdapter";
import { ConsoleDisplayController } from "../controllers/ConsoleDisplayController";

//createe new display adapter - console adapter
export class DisplayControllerFactory {
    static create(): IDisplayAdapter {
        return new ConsoleDisplayController;
    }
}