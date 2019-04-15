import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsEditComponent } from './details-edit/details-edit.component';
import { DetailsMainComponent } from './details-main/details-main.component';
import { UserAccessComponent } from './user-access/user-access.component';

const routes: Routes = [
  { path: 'details', component: DetailsMainComponent,
    children:
    [
      { path:'details-edit', component: DetailsEditComponent},
      { path:'userAccess', component: UserAccessComponent},
      { path:'', redirectTo: '/details-edit', pathMatch:'full'}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
