import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { CallbackComponent } from './components/callback/callback.component';
import {AuthHeaderInterceptor} from "./service/interceptor/auth-header.interceptor";
import {AuthGuard} from "./guards/auth.guard";
const routes:Routes=[
  {path:'home',component:MainComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'callback',component:CallbackComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthHeaderInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
