"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PerformanceMeasurement {
    constructor(_name, message) {
        this._name = _name;
        this.message = message;
        this.start = Date.now();
        console.log(`==Performance start: ${this._name}`);
    }
    end() {
        const span = Date.now() - this.start;
        console.log(`--Performance: ${this._name} executed in ${span}ms`);
        return span;
    }
}
exports.PerformanceMeasurement = PerformanceMeasurement;
