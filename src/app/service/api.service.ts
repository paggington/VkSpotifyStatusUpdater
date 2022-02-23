import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient,private route:ActivatedRoute ) {}
  loginViaVk(){
    // let options={
    //   headers:new HttpHeaders()
    //     .set('Access-Control-Allow-Origin','*')
    //     .set('content-type','application/json'),
    //   params:new HttpParams()
    //     .set('client_id','8084983')
    //     .set('redirect_uri','http://localhost:4200/')
    //     .set('scope','12')
    //     .set('display','page')
    //     .set('response_type','token')
    //     .set('v','5.131')
    // }
    // return this.http.options("https://oauth.vk.com/authorize",options);

  }
  logout(){
  }
}
