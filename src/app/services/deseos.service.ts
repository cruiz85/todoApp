import {Injectable} from '@angular/core';
import {Lista} from '../models/lista-model';
import {forEach} from '@angular-devkit/schematics';

@Injectable({
    providedIn: 'root'
})
export class DeseosService {

    listas: Lista[] = [];

    constructor() {
        this.getListas();
    }

    getListas() {
        if (localStorage.getItem('data')) {
            this.listas = JSON.parse(localStorage.getItem('data'));
        }
        return this.listas;
    }

    // TODO aqui se almacena en el local storage del browser, es como una sesion pero mejor
    addLista(lista: Lista) {
        this.listas.push(lista);
        this.guardarStorage();
    }

    guardarStorage() {
        localStorage.setItem('data', JSON.stringify(this.listas));
    }

    loadListaById(id: number): Lista {
        id = Number(id);
        return this.listas.find(lista => lista.id === id);

    }

}
