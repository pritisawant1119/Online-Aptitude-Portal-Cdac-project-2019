import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css']
})
export class AddtopicComponent implements OnInit {
sid=this.route.snapshot.paramMap.get('id1');
  constructor(private router:Router,private adminservice:AdminService,private route:ActivatedRoute) { 
    
  }

  addTopic(myForm)
  {
    let data=myForm.form.value;
    let resultstate=this.adminservice.getTopicList(this.route.snapshot.paramMap.get('id'));
    let temp={
      "id": data.id,
      "tname": data.tname,
      "description":data.description,
      "modifiedOn":data.modifiedOn,
      "subject":{"id":this.sid}

    }
    alert(data['tname']);
    console.log(temp);
    //console.log(data);
    this.adminservice.addTopic(temp).subscribe((res)=>{
    this.router.navigate(['asublist']);
    },
    error=>
    {

    }
    )
  }
  
  ngOnInit() {
  }

}
