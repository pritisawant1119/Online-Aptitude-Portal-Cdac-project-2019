import { Component } from '@angular/core';
import { EmtrService } from './emtr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';

  isLogin:false;

  constructor(private emService:EmtrService,private router:Router){}

  ngOnInit(){
    this.emService.getEmittedValueForlogBtnSwitch().
    subscribe(item=>this.isLogin=item);
  }

  logout()
  {
    alert("in logout");
    this.isLogin=false;
    delete sessionStorage['email'];
    this.router.navigate(['login']);
  }
}
