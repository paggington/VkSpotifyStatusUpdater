import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "../../components/main/main.component";
import {AuthGuard} from "../../guards/auth.guard";
import {LoginComponent} from "../../components/login/login.component";
import {CallbackComponent} from "../../components/callback/callback.component";


const routes:Routes=[
  {path:'home',component:MainComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'callback',component:CallbackComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
