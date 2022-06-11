import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/login';
import { MyserviceService } from 'src/app/myservice.service';
import { LoginModule } from '../login.module';



@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  loginobj: LoginModule = {
    id: '',
    userName: '',
    role: '',
    password:''
    
  };
  
  login = new Login(0,'','','');
  log=new Array<any>();
  getData:any[];
  constructor(private myService :MyserviceService, private route: Router) { }

  ngOnInit(): void {
  }
  clickMessage:String="";
  onClickMe(){
    const data = {
      id: this.login.id,
      userName: this.login.username,
      role:this.login.role,
      password:this.login.password
    };

    console.log('data values-->'+data.id +'role '+data.role);
    this.clickMessage='Loggin succesfull'
    this.myService.loginUser(data).subscribe ((res:any[])=>{console.log(res);
      this.getData=res;});
         
      this.route.navigateByUrl('/adminmenu')
  }
 

}
