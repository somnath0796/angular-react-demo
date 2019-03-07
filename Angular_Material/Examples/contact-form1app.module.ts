import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { QuoteHeader } from './quoteheader.component';
import { RandomQuoteComponent } from './randomquote.component';
import { CounterComponent } from './counter.component';
import { MyFirstDirective } from './demo1.directive';
import {roundedBorderComponent} from './rounded-border1.component';

import {PreviewPipe} from './pipeDemo6app.component';
import {HooksDemo} from './lifecycleHooksDemo.component';
import { StatsService } from './stats.service';
import { CallbackComponent } from './callbackDemo.component';
import { PromiseComponent } from './promisesDemo.component';
import { PostsService } from './posts5.service';


// This is for the router
import { HttpModule } from '@angular/http';
//import { routing } from './app.routes';
import { BirdsComponent } from './birds.component';
import { AnimalsComponent } from './animals.component';
import { HomeComponent } from './home.component';
import { AnimalDetailsComponent } from './animalDetails.component';

//This is for Template Driven Form
import { ContactFormComponent } from './contact-form1.component';

//This is for Model drive form
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [ BrowserModule, FormsModule , HttpModule, ReactiveFormsModule, /*routing*/],
  declarations: [ AppComponent , RandomQuoteComponent, QuoteHeader, CounterComponent, PreviewPipe, 
  MyFirstDirective, roundedBorderComponent, HooksDemo, CallbackComponent, PromiseComponent,
  BirdsComponent, AnimalsComponent, HomeComponent, AnimalDetailsComponent, ContactFormComponent],
  bootstrap: [ AppComponent ],
  providers: [StatsService, PostsService]
})
export class AppModule { }
