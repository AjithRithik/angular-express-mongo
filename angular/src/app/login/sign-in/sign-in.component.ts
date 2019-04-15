import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Variable declaration;
  user:any = {};

  //function to trigger the login 
  login(form):void{
    if(form.valid){
      console.log('login Sucess');
    }else{
      console.log('passWord Required')
    }
  }

}
