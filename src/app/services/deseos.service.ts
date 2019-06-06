import {Injectable} from '@angular/core';
import {Lista} from '../models/lista.models';

@Injectable({
    providedIn: 'root'
})
export class DeseosService {

    listas: Lista[] = [];

    constructor() {
        const lista1 = new Lista('Primera lista');
        const lista2 = new Lista('Segunda lista');
        this.listas.push(lista1, lista2);
    }
}
