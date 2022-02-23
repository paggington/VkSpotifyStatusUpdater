import { Component, OnInit } from '@angular/core';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { ApiService } from "../../service/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isUserAuthenticatedToVk: boolean = false;
  faPlay = faPlay;
  name:string="";
  constructor(private service: ApiService,
              private route: ActivatedRoute,
              private router: Router,
              private http:HttpClient) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.http.get(environment.baseUrl+"/vk/auth/username").subscribe(p=>this.name=p.name);
  }

  loginVkEvent() {
   this.service.loginViaVk();
  }
}
