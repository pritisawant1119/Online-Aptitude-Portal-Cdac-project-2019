import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-aquelist',
  templateUrl: './aquelist.component.html',
  styleUrls: ['./aquelist.component.css']
})
export class AquelistComponent implements OnInit {
questions;
topid=this.route.snapshot.paramMap.get('id');
  constructor(private router:Router,private adminservice:AdminService,private route:ActivatedRoute) {
    this.adminservice=adminservice;
    route.paramMap.subscribe((params)=>{
      this.topid=params.get("id");
    })
   }

   addQuestion()
    {
      alert("in add question")
      this.router.navigate(['addque',{'id2':this.topid}]);
    }
    
  back()
  {
    this.router.navigate(['atopiclist']);
  }
  ngOnInit() {
    this.adminservice.getQuestionList(this.route.snapshot.paramMap.get('id')).subscribe((res)=>{
      this.questions=res;
      console.log(this.questions);
    })
  }

}
