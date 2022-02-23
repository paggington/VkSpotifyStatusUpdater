import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {SecurityService} from "../../services/security.service";

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  constructor(private securityService:SecurityService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request=req.clone({
      setHeaders:{
        'Content-Type':'application/json',
        Accept:'application/json',
        Authorization:'Bearer '+this.securityService.getToken()
      }
    })
    return next.handle(request);
  }
}
