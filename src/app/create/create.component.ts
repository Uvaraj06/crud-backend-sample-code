import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup, Validators}from '@angular/forms';
import {ApiservicesService} from '../apiservices.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiservicesService , private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid :any;

  ngOnInit(): void {
    // console.log(this.router.snapshot.paramMap.get('id'),'getid');
    this.getparamid = this.router.snapshot.paramMap.get('id');

    if(this.getparamid){
      this.service.getSingleData(this.getparamid).subscribe((res)=>{
        console.log(res,'res==>')
        this.userform.patchValue({
          Username:res.data[0].Username ,
          password : res.data[0].password ,
          DOB : res.data[0].DOB,
        });
        this.successmsg = res.msg
      });

    }
    
  }

  userform = new FormGroup({
    'Username': new FormControl('',Validators.required),
    'password': new FormControl('',Validators.required),
    'DOB': new FormControl('',Validators.required)

  });
  userSumbit(){ 
    if (this.userform.valid)
    {
      console.log(this.userform.value);
      this.service.createData(this.userform.value).subscribe((res)=>{
        console.log(res,'res==>')
        this.userform.reset();
        this.successmsg = res.message;
      })
    }
    else{
      this.errormsg ='all filed is required !'
    }
}
// updatedata
userUpdate(){
  console.log(this.userform.value,'updated form ')
  if (this.userform.valid){
    this.service.updateData(this.userform.value,this.getparamid).subscribe((res)=>{
      console.log(res,'reupdated==>')
      this.successmsg = res.msg
    });

  }else{
    this.errormsg = 'all filed is required';
  }

}


}
