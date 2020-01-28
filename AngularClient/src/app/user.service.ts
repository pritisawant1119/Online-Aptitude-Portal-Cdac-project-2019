import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(user)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/register",user);
  }

  login(user)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/login",user);
  }

  generateOTP(data){
    console.log(data)
    return this.http.get("http://localhost:8080/DacAug19/user/forgot?email="+data);
   }

   setpassword(data)
   {
     console.log(data);
     return this.http.post("http://localhost:8080/DacAug19/user/confirmOtp/",data);
   }


}
