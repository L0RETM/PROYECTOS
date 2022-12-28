import{HttpClient} from '@angular/common/http';
import{Injectable} from '@angular/core';

@Injectable()

export class WebService{
    constructor(private http:HttpClient) {}

    obtenerTareas(){
        return this.http.get('http://localhost:7070/api/tareas').toPromise();
    }
    enviarTarea(_tarea:any){
        return this.http.post('http://localhost:7070/api/tarea', _tarea).toPromise();
    }

}