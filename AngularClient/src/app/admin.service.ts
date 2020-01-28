import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getSubList()
  {
    return this.http.get("http://localhost:8080/DacAug19/subject/list");
  }

  getTopicList(id)
  {
    return this.http.get("http://localhost:8080/DacAug19/topic/list?id="+id);
  }

  getQuestionList(id)
  {
    return this.http.get("http://localhost:8080/DacAug19/question/list?id="+id);
  }

  addSubject(subject)
  {
    return this.http.post("http://localhost:8080/DacAug19/subject/insert",subject);
  }

  addTopic(topic)
  {
    return this.http.post("http://localhost:8080/DacAug19/topic/insert",topic);
  }

  addQuestion(question)
  {
    return this.http.post("http://localhost:8080/DacAug19/question/insert",question);
  }

  getSingleTopicDetail(id)
  {
    return this.http.get("http://localhost:8080/DacAug19/topic/"+id);
  }
  updateTopic(topic)
  {
     console.log("topic updated"+topic);
     console.log(topic.id);
     return this.http.put("http://localhost:8080/DacAug19/topic/update?topicid="+topic.id,topic);
  }

  getSingleQuestionDetail(id)
  {
    return this.http.get("http://localhost:8080/DacAug19/question/"+id);
  }

  updateQuestion(question)
  {
    return this.http.put("http://localhost:8080/DacAug19/question/update?queid="+question.id,question);
  }

 
  // deleteSub(id)
  // {
  //   return this.http.delete(""+id);
  // }
}
