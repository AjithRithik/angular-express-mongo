// import { FileExceedComponent } from './file-exceed/file-exceed.component';
// import { CommonService } from './../common/common.service';
// import { MakeReportSerive } from './../make-report/makeReport.service';
import { Component, OnInit, EventEmitter, Output, Inject, ElementRef } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  uploadedFile = [];
  filesize:number = 0;
  uploading:boolean;
  watchResponse:any;
  isNotUploadFiles:any;
  tempArrList;
  notValidFile=[];
  failedFile = [];
  validfileExtention = [
  ".jpg", ".jpeg", ".bmp", ".gif", ".png", //image files extension
  ".aac",".mp4",".mpeg",".ogg",".wav",".webm",".mp3","3gpp", // audio files extensions
  ".mkv",".flv",".vob",".ogv",".ogg",".drc",".gifv",".mng",".avi",".mov",".qt",".wmv",".yuv",".rm",".rmvb",".asf",".amv",".m4p",".m4v",".mpg",".mp2",//video files extensions
  ".mpeg",".mpe",".mpv",".mpg",".mpeg",".m2v",".m4v",".svi",".3gp",".3g2",".mxf",".nsv",".f4a",".f4a",".f4b",//video files extensions
  ".pdf",".css",".html",".plain",".tab",//document file format
  ".doc",".dot",".wbk",".docm",".dotx",".dotm",".docb",".xls",".xlt",".xlm",".xlsx",".xlsm",".xltx",".xltm",".xlsb",".xla",".xlam",".xll",".xlw",//office file formats
  ".ppt",".pot",".pps",".pptx",".pptm",".potx",".potm",".ppam",".ppsx",".ppsm",".sldx",".sldm",".pub",".xps",".mdb",".ppa",".xla",".xlam",//office file formats
  ".ods",".ots",".odt",".ott",".oth",".odm",".odp",".odg",".otp",".odg",".otg"//open office file formats
];

  constructor(public snackBar: MatSnackBar,private el:ElementRef) {
   
  }

  onUploadOutput(event){ 
     this.uploadFile(event.target.files);
     let input = this.el.nativeElement.querySelectorAll('#fileUploder');
     input[0].value = '';
  }

  ngOnInit() {

  }

  // Funtion is used to valid the file format
  validateFileExtention(file):boolean{
    let fileName = file.name;
    if(fileName.length > 0){
      for (var i = 0; i < this.validfileExtention.length; i++) {
        let extension = this.validfileExtention[i];
          if (fileName.substr(fileName.length - extension.length, extension.length).toLowerCase() == extension.toLowerCase()) {
              return true;
          }
      }
      return false;
    }
    return true;
  }


  // upload the file when size is less the 8MB
  checkSizeAndUpload(file){
    // if(file.size < 8000000){
    //   this.uploading = true;
    //   this.tempArrList.push(file);
    //   let count = 0;
    //   this.makeReportSerive.uploadFile(file)
    //   .subscribe(
    //     res => {
    //       this.uploading = false;
    //       this.uploadedFile.push(res);
    //       count--;
    //     },
    //     (err) => {
    //       this.failedFile.push(file);
    //       if(count == 0){
    //         this.uploading = false;
    //       }
    //       count--;
    //     },)
    // }else{
    //   this.isNotUploadFiles.push(file);
    // }
  }

  //Function triggered when file change event is triggered.
  uploadFile(files:FileList){
    let validFile;
    this.tempArrList =this.tempArrList ? this.tempArrList : [];
    this.isNotUploadFiles = [];
    this.notValidFile = [];
    this.failedFile = [];
    for(let i=0;i<files.length;i++){
      validFile = this.validateFileExtention(files[i]);
      if(validFile){
        this.checkSizeAndUpload(files[i]);
      }else{
        this.notValidFile.push(files[i])
      }
    }

    this.checkUploadFinish();
  }

  //function to check the upload finish and then show the toast message
  checkUploadFinish(){
    this.watchResponse = setInterval(()=>{
      if(!this.uploading){
        clearInterval(this.watchResponse);
        if(this.isNotUploadFiles.length > 0 || this.notValidFile.length > 0 ||  this.failedFile.length > 0){
          // this.uploading = false;
          // this.snackBar.openFromComponent(FileExceedComponent, {
          //   duration: 5000,
          //   horizontalPosition: 'right',
          //   verticalPosition : 'top',
          //   data:{
          //     type:"fILE_EXCEED",
          //     files:this.isNotUploadFiles,
          //     invalidFiles:this.notValidFile,
          //     failed: this.failedFile
          //   }
          // }); 
        }
      }
    },50);
  }

  // function is used to remove the file  
   removeFile(id: string,index): void {
  //   var deleteAttach =  this.makeReportSerive.removeAttachMent(id)
  //   .subscribe(
  //     result => {
  //       this.uploadedFile.splice(index,1);
  //       this.tempArrList.splice(index,1);
  //     });
  }

}

