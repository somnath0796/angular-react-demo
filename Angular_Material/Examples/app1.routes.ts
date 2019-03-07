import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirdsComponent } from './birds.component';
import { AnimalsComponent } from './animals.component';
import { HomeComponent } from './home.component';
import { AnimalDetailsComponent } from './animalDetails.component';

export const routes: Routes = [
    { path: 'birds', component: BirdsComponent },
    { path: 'animals/:id', component: AnimalDetailsComponent },
    { path: 'animals', component: AnimalsComponent},
    { path: '', component: HomeComponent }, 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes); 