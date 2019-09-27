import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import {
    MatCardModule, 
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule
  } from '@angular/material';
import { ScollRepeatComponent } from './scoll-repeat/scoll-repeat.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileExceedComponent } from './file-exceed/file-exceed.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ScollRepeatComponent, FileUploadComponent, FileExceedComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDialogModule,
    MatSortModule,
    FormsModule,
    MatSnackBarModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  exports:[
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ScollRepeatComponent,
    FileUploadComponent,
    FileExceedComponent,
    MatSnackBarModule,
    HttpClientModule
  ]
})
export class MaterialModuleModule { }
