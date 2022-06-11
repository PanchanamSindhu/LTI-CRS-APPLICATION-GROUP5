import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcourseComponent } from './admin/addcourse/addcourse.component';
import { AddprofessorComponent } from './admin/addprofessor/addprofessor.component';
import { AdminmenuComponent } from './admin/adminmenu/adminmenu.component';
import { RemovecourseComponent } from './admin/removecourse/removecourse.component';
import { ViewstudentsComponent } from './admin/viewstudents/viewstudents.component';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './login/userlogin/userlogin.component';



const routes: Routes = [
  {path: '', component :HomeComponent},
  {path: 'login', component :UserloginComponent},
{path: 'adminmenu', component: AdminmenuComponent },
{ path: 'addcourse', component: AddcourseComponent },
{ path: 'addprofessor', component: AddprofessorComponent },
{path: 'removecourse', component: RemovecourseComponent },
{path: 'viewstudent', component: ViewstudentsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
