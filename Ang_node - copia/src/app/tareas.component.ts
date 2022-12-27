import { Component } from '@angular/core';
import { WebService } from './web.server';

@Component({
  selector: 'tareas',
  template: `
    <h1>Listado de tareas</h1>
    <mat-card *ngFor="let tarea of tareas" style="margin:8px">
    <mat-card-title>{{tarea.usuario}}</mat-card-title>
    <mat-card-content>
    <p>
    {{tarea.trabajo}}
    </p>
    </mat-card-content>
    </mat-card>
    `,
  
})
export class TareasComponent {
    tareas:any;

    constructor(private webservice:WebService){//llamamos al servicio
        
    }
    //ejecutamos la respuesta, salga a la vista sera asincrono
    //para mostrarlo en consola

    async ngOnInit(){
        let respuesta= await this.webservice.obtenerTareas();
        this.tareas =respuesta;
    }
    
   

 
}