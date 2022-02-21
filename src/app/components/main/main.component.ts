import { Component, OnInit } from '@angular/core';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { ApiService } from "../../service/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isUserAuthenticatedToVk:boolean=false;
  faPlay=faPlay;
  constructor(private service:ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  loginVkEvent(){
    this.service.loginViaVk().subscribe(par=>{
      let accessToken=this.route.snapshot.paramMap.get('access_token');
    })
  }
}
