import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddprofessorComponent } from './addprofessor/addprofessor.component';
import { RemovecourseComponent } from './removecourse/removecourse.component';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';



@NgModule({
  declarations: [AddcourseComponent, AddprofessorComponent, RemovecourseComponent, ViewstudentsComponent, AdminmenuComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
