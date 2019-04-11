"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-fetch");
const PerformanceMeasurement_1 = require("./PerformanceMeasurement");
class SoldierNamesHelper {
    static getNames(player) {
        const perf = new PerformanceMeasurement_1.PerformanceMeasurement(`Get names - ${player.name}`);
        fetch(`https://uinames.com/api/?amount=${player.soldiers.length}`)
            .then((res) => res.json())
            .then((response) => {
            const names = response.map((contact) => {
                return `${contact.name} ${contact.surname}`;
            });
            // player.;
            perf.end();
        })
            .catch((rej) => {
            console.log(rej);
        });
    }
}
exports.SoldierNamesHelper = SoldierNamesHelper;
