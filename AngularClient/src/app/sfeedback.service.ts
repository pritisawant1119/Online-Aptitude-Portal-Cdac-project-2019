import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SfeedbackService {

  constructor(private http:HttpClient) { }

   addFeedback(u_id,data)
   {
     return this.http.post("http://localhost:8080/DacAug19/feedback/addFeedback?u_id="+u_id,data);
   }

   getubyemail(email)
   {
    return this.http.get("http://localhost:8080/DacAug19/user/getubyemail?email="+email);
   }
}
