import { Component } from '@angular/core';
import { AuthServcieService } from '../../services/auth-servcie.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  form:FormGroup
  isSubmited:boolean = false;
  errorMessage :string
  constructor(private auth_servie:AuthServcieService){
          this.form = new FormGroup({
             username:new FormControl(null,[Validators.required]),
             password:new FormControl(null,[Validators.required]),
          })
   }

   ngOnInit(){
      this.auth_servie.authErrorSubject.subscribe({
        next:(res:string) =>{
           this.errorMessage = res;
        }
      })
   }

   OnSubmit(){
        this.isSubmited = true;
        console.log(this.form.value);

        if(this.form.valid){
            this.isSubmited = false;
            this.auth_servie.authenticate(this.form.value);
        }
   }
}
