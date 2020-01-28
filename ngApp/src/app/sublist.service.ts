import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class SublistService {
  http:Http;
  baseUrl = 'http://localhost:8080/DacAug19/user';

  constructor(http:Http) { }

  public getSubjectList()
  {
  return  this.http.get(this.baseUrl+"/list");
  }
}
