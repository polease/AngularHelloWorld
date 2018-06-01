import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  server = "192.168.1.133";

  getStatus(){
    return "Down";
  }

  constructor() { }

  ngOnInit() {
  }

}
