import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpwd',
  templateUrl: './forgetpwd.component.html',
  styleUrls: ['./forgetpwd.component.css']
})
export class ForgetpwdComponent implements OnInit {
msg;
name:string;
  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit() {
  }

generateOtp()
{
  
  this.userservice.generateOTP(this.name).subscribe((res:String)=>{
    this.msg="Change password";
    console.log(this.msg);
    this.router.navigate(['setpass']);
  },
  error=>{
    if(error.status==200){
    this.router.navigate(['setpass']);
    }
    else
    {
      this.msg="Enter valid email";
    }
  
  })
}
}
  


