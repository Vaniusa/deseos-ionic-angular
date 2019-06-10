import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListasComponent} from './listas/listas.component';
import {Lista} from '../models/lista.models';

@NgModule({
  declarations: [
      ListasComponent
  ],
  exports: [
      ListasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }

