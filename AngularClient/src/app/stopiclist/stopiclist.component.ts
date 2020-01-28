import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stopiclist',
  templateUrl: './stopiclist.component.html',
  styleUrls: ['./stopiclist.component.css']
})
export class StopiclistComponent implements OnInit {
  id="";
  id1;
  tname="";
  description="";
topics;
  constructor(private service:TopicService,private router:Router,private route:ActivatedRoute) { 
    this.service=service;
    this.getTopicList();
  }

  getTopicList()
  {
    let result=this.service.getTopicList(sessionStorage['id']);
    result.subscribe((data)=>{
    this.topics=data;
    })
  }

  subject()
  {
    this.router.navigate(['ssublist']);
  }

  question(id)
   {
     this.router.navigate(['squelist',{'id':id}]);
   }

   back()
   {
     this.router.navigate(['ssublist']);
   }
  ngOnInit() {
  }

}
