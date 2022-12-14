import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule }from '@angular/common/http';

import { AppComponent } from './app.component';
import { TareasComponent } from "./tareas.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { WebService } from './web.server';



@NgModule({
    declarations: [
        AppComponent,TareasComponent
    ],
    providers: [WebService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        HttpClientModule 
        
    ]
})
export class AppModule { }
