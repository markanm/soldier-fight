export class PerformanceMeasurement {
    private readonly start: number;

    constructor(private readonly _name: string, private readonly message?: string) {
        this.start = Date.now();
        console.log(`==Performance start: ${this._name}`);
    }

    end(): number {
        const span: number = Date.now() - this.start;

        console.log(`--Performance: ${this._name} executed in ${span}ms`);
        return span;
    }
}
