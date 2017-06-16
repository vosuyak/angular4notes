import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor() { }
    person = {
    ngWhat: "This is using a object to spit info out",
    name: "Victor Osuyak",
    position:"Developer",
    focus:"Front-End",
    hometowncity:"Chicago"
  }
  ngOnInit() {
  }

}
