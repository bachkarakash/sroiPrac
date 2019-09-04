import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './header-footer/home/home.component';
import { HeaderFooterModule } from './header-footer/header-footer.module';
import { Home2Component } from './header-footer/home2/home2.component';
import { SignupComponent } from './signup/signup.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'header/home', component: Home2Component},
  {path: 'signup', component:SignupComponent},
  {path: 'project', component:ProjectListComponent},
  {path : 'project/home', redirectTo : 'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
