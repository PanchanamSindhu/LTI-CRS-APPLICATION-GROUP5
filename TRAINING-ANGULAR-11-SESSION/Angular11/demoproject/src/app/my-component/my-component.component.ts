import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { MyserviceService } from './myservice.service';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  custArray:Array<Customer> = new Array();

model = new Customer('', 0);
getData:any[];

  constructor(private myService :MyserviceService) { }

  ngOnInit(): void {
  }

  createCustomer(){
    try{
      console.log("customer creation here-->");
    
      // Add customer in Customer Array using push event.
      console.log(this.model.age);
      this.custArray.push(new Customer(this.model.name, this.model.age));
      console.log(JSON.stringify(this.custArray));
      
    } catch(err){
       
      console.log("Customer not created-->" +err);
      
    }
       
    }
    updateCustomer(){
      try{
        console.log("customer updation here-->");
        
        for (let i = 0; i < this.custArray.length; i++) {
          if((this.custArray[i].name == this.model.name)){
            this.custArray[i].age=this.model.age;
         }
         if(this.custArray[i].age == this.model.age){
            this.custArray[i].name=this.model.name;
          }
        }
       console.log("updated--->");
       
      }
      catch(err){
       
        console.log("Customer not updated-->" +err);
        
      }
      
    }
    deleteCustomer(){
      try{
        console.log("customer deletion here-->");
       for (let i = 0; i < this.custArray.length; i++) {
          if((this.custArray[i].name == this.model.name) && (this.custArray[i].age == this.model.age)){
            this.custArray.splice(i);
          }
         
        }
        console.log("deleted--->")

      }
      catch(err){
       
        console.log("Customer not deleted-->" +err);
        
      }

    }
    getCourses(){
      this.myService.getCourses().subscribe
      ((res:any[])=>{console.log(res);
      this.getData=res;
     });
    
    }

}
