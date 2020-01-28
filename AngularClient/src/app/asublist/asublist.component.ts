import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-asublist',
  templateUrl: './asublist.component.html',
  styleUrls: ['./asublist.component.css']
})
export class AsublistComponent implements OnInit {
subjects;
  constructor(private router:Router,private adminservice:AdminService) { 
    this.getSubList();
  }


  getSubList()
               {
                 let resultstat=this.adminservice.getSubList();
                 resultstat.subscribe((data)=>{
                   this.subjects=data;
                   console.log(this.subjects);
                 });
               }

    
    toplist(id)
    {
      console.log("select"+id);
      sessionStorage['id']=id;
      this.router.navigate(['atopiclist',{'id':id}]);
    }
    
    addSubject()
    {
      alert("in add sub")
      this.router.navigate(['addsub']);
    }
  ngOnInit() {
  }

}
