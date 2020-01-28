import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { EmtrService } from '../emtr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string;
  constructor(private userService:UserService,private router:Router,private emtrService:EmtrService) { }

  ngOnInit() {
  }
register()
{
  this.router.navigate(['register']);
}
cancel()
{
  this.router.navigate(['home']);
}
  login(loginForm)
  {
    let data = loginForm.form.value;
    this.userService.login(data).subscribe((res)=>{
      sessionStorage['email']=res['email'];
      this.emtrService.logInBtnSwitch(true);
      this.router.navigate(['dash']);
     // alert(data['email']);
     alert("login successfully");


    },(err)=>
    {
      alert("something went wrong");
    })
   

  }

}
