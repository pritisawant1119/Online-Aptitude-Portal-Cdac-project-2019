import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-atopiclist',
  templateUrl: './atopiclist.component.html',
  styleUrls: ['./atopiclist.component.css']
})
export class AtopiclistComponent implements OnInit {
  id="";
  id1;
  tname="";
  description="";
  subid=this.route.snapshot.paramMap.get('id');
topics;
  constructor(private adminservice:AdminService,private router:Router,private route:ActivatedRoute) { 
    this.adminservice=adminservice;
    route.paramMap.subscribe((params)=>{
      this.subid=params.get("id");
      
    });
   
   
  }

  getTopicList()
  {
    
    let result=this.adminservice.getTopicList(sessionStorage['id']);
    //let data=sessionStorage['id'];
    result.subscribe((data)=>{
    this.topics=data;
    });
  }

  subject()
  {
    this.router.navigate(['asublist']);
  }
  question(id)
  {
    this.router.navigate(['aquelist',{'id':id}]);
  }
  
  addTopic()
    {
      alert("in add topic")

      this.router.navigate(['addtopic',{'id1':this.subid}]);
    }
    
  ngOnInit() {
     this.getTopicList();
  }

}
