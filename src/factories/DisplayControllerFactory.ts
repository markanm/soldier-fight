import { IDisplayAdapter } from "../interfaces/IDisplayAdapter";
import { ConsoleDisplayController } from "../controllers/ConsoleDisplayController";
import { DOMDisplayController } from "../controllers/DOMDisplayController";

// createe new display adapter - console adapter
export class DisplayControllerFactory {
    static create(): IDisplayAdapter {
        return new DOMDisplayController();
    }
}
