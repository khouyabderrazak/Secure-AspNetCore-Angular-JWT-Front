import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { User } from '../models/user';
import { environment } from '../../environments/environment.development';
import { Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServcieService {

  authErrorSubject = new Subject();

  constructor(private api:ApiServiceService<User>) {
    
  }

  authenticate(user:User){
      this.api.Post(environment.users.authenticate,user).subscribe({
        next:(res)=>{
            console.log(res);
        },
        error:(err:HttpErrorResponse)=>{
              this.authErrorSubject.next(err.error?.message);
              setTimeout(()=>{
                   this.authErrorSubject.next(null);
              },2000)
        }
      })
  }

}
