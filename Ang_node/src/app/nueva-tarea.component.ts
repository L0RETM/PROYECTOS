import { Component } from '@angular/core';
import { WebService } from './web.server';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'nueva-tarea',
  template: `

    <mat-card >
    <mat-card-title>añadir tarea</mat-card-title>
    <form class="example-form">
  <mat-form-field class="example-full-width">
    <mat-label>nombre usuario:</mat-label>
    <input type="text" name="usuario" [(ngModel)]="tarea.usuario" matInput placeholder="nombre usuario" >
  </mat-form-field>

  <mat-form-field class="example-full-width">
    <mat-label>escribe tu tarea:</mat-label>
    <textarea  type="text" name="trabajo" [(ngModel)]="tarea.trabajo"  matInput placeholder="introduzca su tarea"></textarea>
  </mat-form-field>
  <button (click)="post()" mat-raised-button color="primary">enviar</button>
    </form>

    </mat-card>
    `,
  
})
export class NuevaTareasComponent {
 

    constructor(private webservice:WebService){}
        
    tarea={trabajo:'', usuario:'' }
    post(){
      this.webservice.enviarTarea(this.tarea)
    }
 
}