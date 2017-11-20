import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  //Input Property used o pass data from child to parent
  @Input() title:string;
  constructor() { }

  ngOnInit() {
  }

}
