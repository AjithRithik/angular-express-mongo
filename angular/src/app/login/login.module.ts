import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginRoutingModule } from './login-routing-module';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { SharedModule } from 'src/shared/shared/shared.module';

@NgModule({
  declarations: [SignInComponent, ForgotComponent, ResetPwdComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModuleModule,
    SharedModule
  ]
})
export class LoginModule { }
