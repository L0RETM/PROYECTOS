import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule }from '@angular/common/http';

import { AppComponent } from './app.component';
import { TareasComponent } from "./tareas.component";
import { NuevaTareasComponent } from "./nueva-tarea.component";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { WebService } from './web.server';
import {FormsModule} from '@angular/forms';



@NgModule({
    declarations: [
        AppComponent,TareasComponent, NuevaTareasComponent
    ],
    providers: [WebService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        HttpClientModule ,
        MatInputModule,
        MatButtonModule,
        FormsModule
        
    ]
})
export class AppModule { }
