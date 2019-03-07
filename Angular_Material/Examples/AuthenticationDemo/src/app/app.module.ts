import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { fakeBackendProvider } from './fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
 
import { routing }        from './app.routing';
 
import { AuthGuard } from './auth.guard';
import { QuitGuard } from './quit.guard';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, routing
  ],
  providers: [AuthGuard, AuthenticationService, UserService, QuitGuard,
  fakeBackendProvider, MockBackend, MockConnection, BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
