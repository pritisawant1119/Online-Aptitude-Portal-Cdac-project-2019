import { Component, OnInit } from '@angular/core';
import { SublistService } from '../sublist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  subject:any[];
  service:SublistService;

  constructor( service:SublistService) {
    this.service = service;
    this.getList();
   }

  getList()
   {
    const observable = this.service.getSubjectList();
  
   observable.subscribe((response) => {
        const result = response.json();
        this.subject = result;
        console.log(result);
    });
   }
  ngOnInit() {
  }

}
