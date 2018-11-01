import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SessionsService } from './sessions-list/sessions.service';
import { HomeComponent } from './home/home.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SessionsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [SessionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
