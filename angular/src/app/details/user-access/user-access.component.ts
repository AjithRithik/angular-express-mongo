import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CommonPopupComponent } from '../common-popup/common-popup.component';

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.scss']
})
export class UserAccessComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  columns: any = [
    {
       displayedNames:"Name",
       width:"mwidth300",
       mobwidth:"wm35p"
    },
    {
       displayedNames:"Email",
       width:"mwidth300",
       mobwidth:"wm35p"
    },
    {
       displayedNames:"Role",
       width:"mwidth150",
       mobwidth:"wm10p"
    }
   ];
 
   displayedColumns = this.columns.map(c => c.displayedNames);


   openPopUp():void{
      this.dialog.open(CommonPopupComponent,{
         data:{},
         disableClose: true
      });
   }

}
