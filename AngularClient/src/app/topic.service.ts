import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http:HttpClient) { }

public getTopicList(id)
{
  return this.http.get("http://localhost:8080/DacAug19/topic/list?id="+id);
}
}