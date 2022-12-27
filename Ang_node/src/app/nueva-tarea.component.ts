import { Component } from '@angular/core';
import { WebService } from './web.server';

@Component({
  selector: 'nueva-tarea',
  template: `

    <mat-card >
    <mat-card-title>añadir tarea</mat-card-title>
    <form class="example-form">
  <mat-form-field class="example-full-width">
    <mat-label>nombre usuario:</mat-label>
    <input matInput placeholder="nombre usuario" >
  </mat-form-field>

  <mat-form-field class="example-full-width">
    <mat-label>escribe tu tarea:</mat-label>
    <textarea matInput placeholder="introduzca su tarea"></textarea>
  </mat-form-field>
  <button mat-raised-button color="primary">enviar</button>
    </form>

    </mat-card>
    `,
  
})
export class NuevaTareasComponent {
 

    constructor(private webservice:WebService){
        
    }
 
}