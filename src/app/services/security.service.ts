import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private authorizeEndpointGitHub='/oauth2/authorization/github';
  private tokenEndpointGitHub='/login/oauth2/code/github';
  private baseUrl=environment.baseUrl;
  private tokenKey='token';
  constructor(private http:HttpClient) { }
  loginVk(){
    window.open(this.baseUrl+this.authorizeEndpointGitHub,'_self');
  }
  updateToken(token:string){
    console.log(token);
    localStorage.setItem(this.tokenKey,token);
  }
  fetchToken(code:any,state:any):Observable<any>{
    return this.http.get(this.baseUrl+this.tokenEndpointGitHub+"?code="+code+"&state="+state);
  }
  getToken(){
    return localStorage.getItem(this.tokenKey);
  }
  isLoggedIn(){
    const token=this.getToken();
    return token!=null;
  }
}
