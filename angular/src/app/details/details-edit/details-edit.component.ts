import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-details-edit',
  templateUrl: './details-edit.component.html',
  styleUrls: ['./details-edit.component.scss']
})
export class DetailsEditComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  
  tableData:any= {};
  options:any = ["one","two","three"];
  ngOnInit() {
    this.getData();
  }

  tableDataList: any[] = [
    // {name: 'Hydrogen', code: 1.0079, mode: 'H', source: 'IOB', des:'IND', voucherNumber:'1', amt:'123',attachement:'no'}
  ];

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['Date', 'Customer Name', 'Customer Code', 'Transaction Mode','Bank (Source)','Bank (Desitionation)','voucher','Amount','Attachement'];

  getData(){
    const data: Element[] = this.dataSource
      ? [...this.dataSource.data, ...this.tableDataList]
      : this.tableDataList;
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
  }

  addToTable(data){
    this.tableDataList.push(data);
    this.dataSource._updateChangeSubscription();
    this.tableData = {};
  }
  

}
