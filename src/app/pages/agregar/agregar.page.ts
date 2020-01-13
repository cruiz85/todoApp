import {Component, OnInit} from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {ActivatedRoute} from '@angular/router';
import {Lista} from '../../models/lista-model';
import {Item} from '../../models/item.model';
import {isBoolean} from 'util';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.page.html',
    styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
    lista: Lista = new Lista('');
    itemDecription: string;


    constructor(private activatedRoute: ActivatedRoute, private deseosService: DeseosService) {
        // TODO cuando se pasan url no es necesario tener un Observable, con el snapshot se pasa de forma sincrona
        const listaId: string = activatedRoute.snapshot.paramMap.get('listaId');
        const listaIdNumber = Number(listaId);
        this.lista = deseosService.loadListaById(listaIdNumber);

        // TODO esta es la otra forma de pasar un id por url
        // activatedRoute.params.subscribe(params => {
        //     const listaId = params.listaId;
        //     this.lista = deseosService.loadListaById(listaId);
        // });
    }

    ngOnInit() {
    }

    addItem() {
        if (this.itemDecription.length !== 0) {
            this.lista.items.push(new Item(this.itemDecription));
            this.itemDecription = '';
        }
    }

    save() {
        for (const item of this.lista.items) {
            let isTerminada = true;
            if (item.completado === false) {
                isTerminada = false;
            }
            this.lista.isTerminada = isTerminada;
        }
        this.deseosService.guardarStorage();
    }
}
