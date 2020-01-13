export class Item {
    description: string;
    completado: boolean;

    constructor(descriptor: string) {
        this.description = descriptor;
        this.completado = false;
    }
}
