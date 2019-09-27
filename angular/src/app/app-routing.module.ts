import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { DetailsMainComponent } from './details/details-main/details-main.component';

const routes: Routes = [
  { path:'signIn', component: SignInComponent},
  { path: 'details', component: DetailsMainComponent},
  { path:'', redirectTo:'/signIn', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
