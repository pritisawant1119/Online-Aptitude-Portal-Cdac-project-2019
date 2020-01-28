import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  getQuestionList(id)
  {
    return this.http.get("http://localhost:8080/DacAug19/question/list?id="+id);
  }
}
