import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MyDataService {

// constructor to add the newly imported Http
  constructor(private http:Http){}

// Fetch the data from the data/students.json file
// map takes the data and makes it readable json
                                                      // Question
  fetchData(){
    this.http.get('../data/students.json').map(
      (response) => response.json()
    )
    .subscribe(
      (data) => console.log(data)
    )
  }
  
// Service object and function
  obj = {
    id:'15845993',
    name:'vic',
    rollno:'21'      
  }
  success (){
    return 'succesful';
  }
}
