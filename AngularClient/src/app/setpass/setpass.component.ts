import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-setpass',
  templateUrl: './setpass.component.html',
  styleUrls: ['./setpass.component.css']
})
export class SetpassComponent implements OnInit {

  constructor(private router:Router,private userservice:UserService) { }
msg:String;
flag:boolean;

 ngOnInit() {
  }

  updatePass(data)
  {
    this.userservice.setpassword(data).subscribe((res)=>{
      console.log(res);

      if(res)
      {
        this.msg="Successfully changed password";
        this.flag=true;
      }
      else
      {
        this.msg="Enter valid Otp";
        this.flag=false;
      }
    })
    console.log(data);
  }
  navigate()
  {
    this.router.navigate(['login']);
  }
}
