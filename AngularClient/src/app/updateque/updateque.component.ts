import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-updateque',
  templateUrl: './updateque.component.html',
  styleUrls: ['./updateque.component.css']
})
export class UpdatequeComponent implements OnInit {
id;
questions;
  constructor(private router:Router,private route:ActivatedRoute,private adminservice:AdminService) {
    route.paramMap.subscribe((params)=>{
      
      this.id=this.route.snapshot.paramMap.get("id");
      console.log(this.id);
      this.adminservice.getSingleQuestionDetail(this.id).subscribe((res)=>{
        console.log(res);
        this.questions=res;
        console.log(this.questions);
      })
    })
    }
  
  ngOnInit() {
    
  }
  
  update()
  {
    console.log(this.questions);
    console.log("updated question");
    this.questions.id=this.id;
    this.adminservice.updateQuestion(this.questions).subscribe((res:any)=>{
      console.log("result"+res);
      console.log("update successfully");
      //this.router.navigate(['updateque']);
     //this.router.navigate(["aquelist"],{queryParams:{id:res.question.id}});
     alert(['Updated successfully!']);
     //this.router.navigate(["aquelist"]),{queryParams:{id:res.question.id}};
     this.router.navigate(["atopiclist"]);
    
    })
  }
   }


 
