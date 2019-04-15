import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path:'signIn', component: SignInComponent},
  // { path: 'details', component: DetailsMainComponent},
  // { path:'', redirectTo:'/signIn', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
