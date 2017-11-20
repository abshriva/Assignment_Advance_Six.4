import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  firstName:string;
  lastName:string;
  title:string;

  constructor() { }
 
  //Initialise the variable in ngOninIt() Method
  ngOnInit() {
    this.firstName='Abhishek';
    this.lastName='Shrivastava'
  }

  //Binding with Local Template variable
  display(fName, lName) {
    this.title = `${fName.value} ${lName.value}`;
}
}
