import {Component, ViewChild} from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {Lista} from '../../models/lista-model';
import {Router} from '@angular/router';
import {AlertController, IonList} from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    // TODO esto es para tomar el elemnto html de ion-list y poder cerrar el slide
    // @ts-ignore
    @ViewChild(IonList) elementoIonList: IonList;
    listaDeTareas: Lista[];

    constructor(private alertController: AlertController, private router: Router, private deseosService: DeseosService) {
        this.listaDeTareas = deseosService.getListas();
    }

    async agregarLista() {

        // this.router.navigateByUrl('tabs/tab1/agregar');
        // TODO sacado de la documentacion de ionic 'ionic alert'
        const alert = await this.alertController.create({
            inputs: [
                {
                    name: 'titulo',
                    type: 'text',
                    placeholder: 'Nombre de la lista'
                }
            ],
            buttons: [
                {
                    text: 'CANCELAR',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'CREAR',
                    handler: (data) => {
                        if (data.titulo.length === 0) {
                            return;
                        }
                        const newLista: Lista = new Lista(data.titulo);
                        this.deseosService.addLista(newLista);
                        this.router.navigate(['tabs', 'tab1', 'agregar', newLista.id]);

                    }
                }
            ]
        });

        alert.present();
    }

    seeDetail(tareaId: number) {
        // TODO otra forma de moverse por rutas
        this.router.navigateByUrl(`tabs/tab1/agregar/${tareaId}`);
    }

    removeItem(index: number) {
        this.listaDeTareas.splice(index, 1);
        this.deseosService.guardarStorage();
    }

    async editItem(listaEditada: Lista) {
        // this.router.navigateByUrl('tabs/tab1/agregar');
        // TODO sacado de la documentacion de ionic 'ionic alert'
        const alert = await this.alertController.create({
            inputs: [
                {
                    name: 'titulo',
                    value: listaEditada.titulo,
                    type: 'text'
                }
            ],
            buttons: [
                {
                    text: 'CANCELAR',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        return;
                    }
                }, {
                    text: 'EDITAR',
                    handler: (data) => {
                        if (data.titulo.length === 0) {
                            return;
                        }
                        listaEditada.titulo = data.titulo;
                        this.deseosService.guardarStorage();
                        this.elementoIonList.closeSlidingItems();

                    }
                }
            ]
        });

        alert.present();

    }
}
