import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule } from './details-routing';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { DetailsEditComponent } from './details-edit/details-edit.component';
import { DetailsMainComponent } from './details-main/details-main.component';
import { HeaderComponent } from '../header/header.component';
import { UserAccessComponent } from './user-access/user-access.component';
import { CommonPopupComponent } from './common-popup/common-popup.component';

@NgModule({
  declarations: [DetailsEditComponent, DetailsMainComponent,HeaderComponent, UserAccessComponent, CommonPopupComponent],
  imports: [
    CommonModule,
    MaterialModuleModule,
    DetailsRoutingModule
  ],
  entryComponents:[CommonPopupComponent]
})
export class DetailsModule { }
