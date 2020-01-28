import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SublistService } from '../sublist.service';

@Component({
  selector: 'app-ssublist',
  templateUrl: './ssublist.component.html',
  styleUrls: ['./ssublist.component.css']
})
export class SsublistComponent implements OnInit {
subjects;
  constructor(private router:Router,
               private sublistservice:SublistService) { 

                this.getSubList();
               }

               getSubList()
               {
                 let resultstat=this.sublistservice.getSubList();
                 resultstat.subscribe((data)=>{
                   this.subjects=data;
                 })
               }
      
    toplist(id)
    {
      console.log("select"+id);
      sessionStorage['id']=id;
      this.router.navigate(['stopiclist',{'id':id}]);
    }
    

  ngOnInit() {
  }

}
