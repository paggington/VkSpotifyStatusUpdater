import {Injectable} from '@angular/core';
import {HttpClient, HttpClientJsonpModule, HttpHeaders, HttpParams} from "@angular/common/http";
import {VKAPI} from "vkontakte-api";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";


const api = new VKAPI({accessToken: 'b6b3a707b6b3a707b6b3a7071db6c8faf0bb6b3b6b3a707d4a1d52e71155ede7b44bf3b'})

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient,private route:ActivatedRoute) {
  }

  loginViaVk(): Observable<any> {
    let options={
      headers:new HttpHeaders()
        .set('Content-Type','application/json'),
      params:new HttpParams()
        .set('client_id','8084983')
        .set('redirect_uri','http://localhost:4200/')
        .set('scope','12')
        .set('display','page')
        .set('response_type','token')
    }
    return this.http.options("https://oauth.vk.com/authorize",options);
  }
}
