import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiservicesService } from '../apiservices.service'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit
{

  constructor(private service: ApiservicesService) { }

  readData: any;
  successmsg: any;

  ngOnInit(): void {
    this.getAllData();
  }

  deleteID(id: any) {
    console.log(id, 'deletes==>');
    this.service.deleteData(id).subscribe((res) => 
    {
      console.log(res, 'deleted==>')
      this.successmsg = res.message;
    })
  }
  getAllData() {
    this.service.getAllData().subscribe((res) => 
    {
      console.log(res, "res==>");
      this.readData = res.data
      console.log(this.readData);
    })
  }

}
