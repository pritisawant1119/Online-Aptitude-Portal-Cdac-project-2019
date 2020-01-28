import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
  }
  register(myForm){
    let data = myForm.form.value;

    this.userService.register(data).subscribe((res)=>{

    this.router.navigate(['login']);

 

  alert(data['name']);


    
    },(error)=>{

    }
)
  }}