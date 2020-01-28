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

  constructor(private userService:UserService,
              private router:Router,private emService:EmtrService) { }
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
    let data=loginForm.form.value
    this.userService.login(data).subscribe((res)=>{
     sessionStorage['email']=res['email'];
     this.emService.logInBtnSwitch(true);
     if(res['role']=='ADMIN')
     {
      console.log(res['role']);
      this.router.navigate(['asublist']);
     }
     else
     {
      console.log(res['role']);
      this.router.navigate(['ssublist']);
     }
    // alert(['Login successfull']);
    }
    ),
    error=>{
      alert("Something went wrong");
    }
  }

  ngOnInit() {
  }

}
