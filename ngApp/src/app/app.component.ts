import { Component } from '@angular/core';
import { EmtrService } from './emtr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 isLogin:false;
 constructor(private emtrService:EmtrService){

 }
 ngOnInit()
 {
   this.emtrService.getEmittedValueForLogbtnSwitch().subscribe(item=>
    this.isLogin=item);
 }

 logout()
 {
   alert("In Logout");
   this.isLogin=false;
   delete sessionStorage['email'];
 }
}
