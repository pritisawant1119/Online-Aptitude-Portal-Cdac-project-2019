import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-updatetopic',
  templateUrl: './updatetopic.component.html',
  styleUrls: ['./updatetopic.component.css']
})
export class UpdatetopicComponent implements OnInit {
topics;
id;
  constructor(private router:Router,private adminservice:AdminService,private route:ActivatedRoute) { 
    route.paramMap.subscribe((params)=>{
      
    this.id=this.route.snapshot.paramMap.get("id");
console.log(this.id);
    this.adminservice.getSingleTopicDetail(this.id).subscribe((res)=>{
      console.log(res);
      this.topics=res;
      console.log(this.topics);
    })
  })
  }

ngOnInit() {
  
}

update()
{
  console.log(this.topics);
  console.log("updated topic");
  this.topics.id=this.id;
  this.adminservice.updateTopic(this.topics).subscribe((res:any)=>{
    console.log("result"+res);
    console.log("update topic successfully");
   this.router.navigate(["atopiclist"],{queryParams:{id:res.subject.id}});
   alert(['Updated successfully!']);
  })
}
 }

  