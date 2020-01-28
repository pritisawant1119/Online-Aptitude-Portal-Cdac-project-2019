import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addsub',
  templateUrl: './addsub.component.html',
  styleUrls: ['./addsub.component.css']
})
export class AddsubComponent implements OnInit {

  constructor(private router:Router,private adminservice:AdminService) { }

  addSubject(myForm)
  {
    let data=myForm.form.value;
    alert(data['subject']);
    console.log(data);
    this.adminservice.addSubject(data).subscribe((res)=>{
      this.router.navigate(['asublist']);
    },
    error=>
    {

    }
    )
  }
  
  
  // add()
  // {
  //   this.router.navigate(['asublist']);

  // }

  ngOnInit() {
  }

}
