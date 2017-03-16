import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule  } from '@angular/http';
import { routing,  appRoutingProviders } from './app.routes';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { IndexService } from './services/index.service';
import { UsersComponent } from './users/users.component';
import { CardComponent } from './card/card.component';
import { DatesPipe } from './date.pipe';
import { LoginComponent } from './login/login.component';
import { HttpClient }          from './services/http.client';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CardComponent,
    DatesPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    routing,
    HttpModule,
    JsonpModule
  ],
  providers: [IndexService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
