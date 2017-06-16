import { Component, OnInit } from '@angular/core';
import { MyDataService } from "../my-data.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
// service with made obj and function from MyDataService
constructor(private newService:MyDataService){}

  ngOnInit(){
// this is changing the already set id to a new string
    this.newService.obj.id = "this is id inproduct: 24345324";
    console.log(this.newService.obj.id);
// this is where the http service will spit out its data 
//from the data/json folder
                                                      // Question
    this.newService.fetchData();
  }
}
