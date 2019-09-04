import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFooterModule } from './header-footer/header-footer.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 
  
 }
