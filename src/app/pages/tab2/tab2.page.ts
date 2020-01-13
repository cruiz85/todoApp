import {Component, OnInit} from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {Lista} from '../../models/lista-model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
    listaDeTareasTerminadas: Lista[] = [];

    constructor(private router: Router, private deseosService: DeseosService) {
        this.listaDeTareasTerminadas = [];
        const listas: Lista[] = this.deseosService.getListas();
        for (const lista of listas) {
            if (lista.isTerminada === true) {
                this.listaDeTareasTerminadas.push(lista);
            }
        }
        console.log('listas terminadas', this.listaDeTareasTerminadas);
    }

    ngOnInit() {

    }


    seeDetail(tareaId: number) {
        this.router.navigateByUrl(`tabs/tab2/agregar/${tareaId}`);
    }
}
