import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SublistService {
baseurl='http://localhost:8080/DacAug19/subject';
  constructor(private http:HttpClient) { }

  getSubList()
  {
    return this.http.get(this.baseurl+"/list");
  }
}
