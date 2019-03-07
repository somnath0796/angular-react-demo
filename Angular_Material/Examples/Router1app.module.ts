import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';


// This is for the router
import { HttpModule } from '@angular/http';
import { routing } from './app1.routes';
import { BirdsComponent } from './birds.component';
import { AnimalsComponent } from './animals.component';
import { HomeComponent } from './home.component';
import { AnimalDetailsComponent } from './animalDetails.component';




@NgModule({
  imports: [ BrowserModule, FormsModule , HttpModule, routing],
  declarations: [ AppComponent,
  BirdsComponent, AnimalsComponent, HomeComponent, AnimalDetailsComponent],
  bootstrap: [ AppComponent ],
  providers: []
})
export class AppModule { }
