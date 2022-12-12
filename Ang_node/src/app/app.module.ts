import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TareasComponent } from "./tareas.component";



@NgModule({
    declarations: [
        AppComponent,TareasComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        
    ]
})
export class AppModule { }
