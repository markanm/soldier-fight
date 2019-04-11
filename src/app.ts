import { DOMGameController } from "./controllers/DOMGameController";

setTimeout(function () {
    const game = new DOMGameController();
    game.init();

    const log = document.querySelector("#log");

    if(log) {
        const el = document.createElement('div');
        el.innerHTML = "Loaded";
        log.appendChild(el);
    }
}, 1000);

