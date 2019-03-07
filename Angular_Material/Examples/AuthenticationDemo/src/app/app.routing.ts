import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { AuthGuard } from './auth.guard';
import { QuitGuard } from './quit.guard';
 
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard], canDeactivate: [QuitGuard] },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
