import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRS PROJECT';
  today=new Date();
  clickMessage:String="What is Status";
  onClickMe(){
    console.log("event clikcked");
    this.clickMessage='Training is active'
  }

}
