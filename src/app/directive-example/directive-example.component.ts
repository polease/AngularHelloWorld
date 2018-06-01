import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {

  status = false;
  clicks = [];

  constructor() { }

  ngOnInit() {
  }

  getBackgroundColor(item){
    return (item > 4)?'blue':'white';
  }

  getColor(item){
    return (item > 4)?'blue':'white'
  }

}
