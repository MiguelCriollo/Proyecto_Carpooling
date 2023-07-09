import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataUserService } from './core/services/data-user.service';
import { DatabaseUserService } from './core/services/database-users.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataUserService, DatabaseUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
