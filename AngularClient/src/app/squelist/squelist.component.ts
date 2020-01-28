import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-squelist',
  templateUrl: './squelist.component.html',
  styleUrls: ['./squelist.component.css']
})
export class SquelistComponent implements OnInit {

  data;
  status: boolean = false;
  questions:any=[];
  answerSet=[];
  id;
  qans;
  score;
  y;
  ansset=[];
  
  constructor(private service: QuestionService, private router: Router, private route: ActivatedRoute) {
   
  }


  ngOnInit() 
  {

    this.service.getQuestionList(this.route.snapshot.paramMap.get('id')).subscribe((res) => {
      this.questions = res;
      console.log(this.questions);
      for (let i = 0; i < this.questions.length; i++)
    {
      console.log(this.questions[i].answerkey)
    }
    })
  }

  setAnswer1(question)
  {
   
    console.log(question.option1);
    console.log(question.answerkey);
    
    if(question.answerkey === this.questions.option1)
    {
      console.log("ans is 1 right");
      alert("answer 1 is right !!!!!!");
    }
    else
    {
      console.log("ans : "+question.answerkey+"is right");
      alert("ans : "+question.answerkey+"is right");
    }
    

  }
    setAnswer2(question)
  {
  
    console.log(question.option2);
    console.log(question.answerkey);
    
    if(question.answerkey === this.questions.option2)
    {
      console.log("ans is 2 right");
      alert("answer 2 is right !!!!!!");
    }
    else
    {
      console.log("ans : "+question.answerkey+"is right");
      alert("ans : "+question.answerkey+"is right");
    }
    
  }

    setAnswer3(question)
  {
    
    console.log(question.option3);
    console.log(question.answerkey);
    
    if(question.answerkey === this.questions.option3)
    {
      console.log("ans is 3 right");
      alert("answer 3 is right !!!!!!");
    }
    else
    {
      console.log("ans : "+question.answerkey+"is right");
      alert("ans : "+question.answerkey+"is right");
    }
    
  }

    setAnswer4(question)
  {
    
    console.log(question.option4);
    console.log(question.answerkey);
    
    if(question.answerkey === this.questions.option4)
    {
      console.log("ans is 4 right");
      alert("answer 4 is right !!!!!!");
    }
    else
    {
      console.log("ans : "+question.answerkey+"is right");
      alert("ans : "+question.answerkey+"is right");
    }
    
   
} 
back()
{
  this.router.navigate(['stopiclist']);
}  

 }




