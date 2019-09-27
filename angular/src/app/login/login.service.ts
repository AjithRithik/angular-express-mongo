import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private restService: RestService) { }

  authentication(user){
    let url = "/api/users/authenticate";
    return this.restService.save(url,user)
            .pipe(map((res)=>{return res})
          );
  }
}
