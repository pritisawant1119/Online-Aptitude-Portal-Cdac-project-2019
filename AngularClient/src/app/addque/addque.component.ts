import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addque',
  templateUrl: './addque.component.html',
  styleUrls: ['./addque.component.css']
})
export class AddqueComponent implements OnInit {
  
  tid=this.route.snapshot.paramMap.get('id2');
  
  constructor(private router:Router,private adminservice:AdminService,private route:ActivatedRoute) { }


  addQuestion(myForm)
  {
    let data=myForm.form.value;
    let resultstate=this.adminservice.getQuestionList(this.route.snapshot.paramMap.get('id'));
    let temp={
      "id": data.id,
      "question":data.question,
      "option1":data.option1,
      "option2":data.option2,
      "option3":data.option3,
      "option4":data.option4,
      "answerkey":data.answerkey,
      "topic":{"id":this.tid}
    }
    alert(this.tid);
    console.log(temp);
    //console.log(data);
    this.adminservice.addQuestion(temp).subscribe((res)=>{

    this.router.navigate(['atopiclist']);
    },
    error=>
    {

    }
    )
  }
  ngOnInit() {
  }

}
