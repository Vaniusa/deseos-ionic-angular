import {Component, Input, OnInit} from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {Lista} from '../../models/lista.models';
import {Router} from '@angular/router';

@Component({
    selector: 'app-listas',
    templateUrl: './listas.component.html',
    styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
    @Input() terminada = true;

    constructor(public deseosService: DeseosService,
                private  router: Router) {
    }

    ngOnInit() {
    }

    listaSeleccionada(lista: Lista) {
        if (this.terminada) {
            this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
        } else {
            this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
        }
    }


    borrarLista(lista: Lista) {
        this.deseosService.borrarLista(lista);
    }

}
