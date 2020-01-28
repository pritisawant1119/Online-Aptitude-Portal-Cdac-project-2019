import { Component, OnInit } from '@angular/core';
import { SfeedbackService } from '../sfeedback.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  AddFeedback;
  user :any;
  constructor(private router:Router,private service:SfeedbackService,private route:ActivatedRoute) { 
    this.service.getubyemail(sessionStorage['email']).subscribe((res)=>{
      console.log(res);
      this.user=res;
    })
  }

  ngOnInit() {
  }

  addFeedback(Feedbackform){
    let data=Feedbackform.form.value;
   // let resultstate=this.userService.addFeedback(this.router)
    let x=
     {
      "rating":data.rating,
     "suggestion":data.suggestion,
     "user":{"id":this.user.id}
    }
    console.log(x);
    this.service.addFeedback(this.user.id,x).subscribe((res)=>{
    console.log(res);
    this.AddFeedback=res;
    this.router.navigate(['login']);
    })
  }


}
