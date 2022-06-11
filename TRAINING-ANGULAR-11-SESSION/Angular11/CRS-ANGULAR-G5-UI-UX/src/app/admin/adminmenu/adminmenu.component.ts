import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.css']
})
export class AdminmenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addcourse(){
    this.router.navigateByUrl('/addcourse');
  }
  addprofessor(){
    this.router.navigateByUrl('/addprofessor')
  }
  removecourse(){
    this.router.navigateByUrl('/removecourse')
  }
  viewstudent(){
    this.router.navigateByUrl('/viewstudent')
  }

}
