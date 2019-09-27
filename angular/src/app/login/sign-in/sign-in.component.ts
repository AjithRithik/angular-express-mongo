import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  //Declaration
  userForm: any;
  constructor(private loginService: LoginService, private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    })
  }

  //Variable declaration;
  user:any = {};

  //function to trigger the login  
  login():void{
    if(this.userForm.valid){
      this.isLogin(this.userForm.value);
    }else{
      console.log('Errror');
    }
  }


  //Function to trigger the login function where the user is login or not
  isLogin(userObj):void{
    this.loginService.authentication(userObj).subscribe(
      res=>{
        console.log(res);
        if(res){
          console.log(res);
          // console.log('login');
        }
      });
  }

}
