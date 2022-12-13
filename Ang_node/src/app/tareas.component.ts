import { Component } from '@angular/core';

@Component({
  selector: 'tareas',
  template: 'Listado tareas:<div *ngFor="let tarea of tareas">Tarea: {{tarea.trabajo}}, Usuario:{{tarea.usuario}}</div>',
  
})
export class TareasComponent {
    tarea:any;
    
    tareas=
    [
        {trabajo:'primera tarea', usuario:'david'},
        {trabajo:'segunda tarea', usuario:'Daniel'}
    ]

 
}