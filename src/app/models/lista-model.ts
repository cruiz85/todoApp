import {Item} from './item.model';

export class Lista {
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    isTerminada: boolean;
    items: Item[];

    constructor(titulo: string) {
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.isTerminada = false;
        this.id = new Date().getTime();
        this.items = [];
    }
}
