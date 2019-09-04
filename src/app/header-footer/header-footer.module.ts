import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';

@NgModule({
  declarations: [HomeComponent, Home2Component],
  imports: [
    CommonModule
  ]
})
export class HeaderFooterModule { }
