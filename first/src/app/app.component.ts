import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { MyDataService } from "./my-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Main App";
  position = "Developer";

  intern = {
    ngWhat: "This is using a object to spit info out",
    name: "Victor Osuyak",
    position:"Developer",
    focus:"Front-End",
    hometowncity:"Chicago",
  }

  array = ["one","two","three"];
  isTrue =  true;
  myName = "Victor";

// this is for the list area below
// contains array, variables, remove and push functions
    items = ["html","css","javascript"];
    // take in input
    newItem = "";
    removeItem = (index) => this.items.splice(index,1); 
    pushItem = () =>{
      if (this.newItem !== "") {
        this.items.push(this.newItem);
        this.newItem = " ";
      }
    }
  
// This is where the custom day pipe is made
    name = "Victor";
    day = new Date(1994, 0, 16);
    // pipping an array
    arr = [3,7,8,2,1];

// template driven form
  user = {
    firstName: "",
    lastName: "",
    languages:""
  }
  constructor (private fb: FormBuilder){}
    onSubmit = (user) => console.log(user);

//modle form default validators
    form;
    ngOnInit(){
    this.form = this.fb.group({
        'firstName':[this.user.firstName,[
            Validators.required,
            Validators.minLength(3)
            // Validators.pattern('[\\w\\-\\s\\/]')
          ]
        ],
        'lastName':[this.user.lastName,[
            Validators.required,
            Validators.minLength(3)
            // Validators.pattern('[\\w\\-\\s\\/]')
          ]
        ],
        'languages':[this.user.languages,[
            Validators.required     ]   
        ]
      });
// Checking to see if changes occured in the form
      this.form.valueChanges.subscribe(data => console.log(this.form.valid));
    }
    textValidator(control){
      if (control.value.length < 3) {
        console.log('the length is less than 3');
        return {'lastname':true};
      }
    }
  //   converter formTwo;
  //   ngOnInit(){
  //   this.form = new FormGroup({
  //     decimal: new FormControl(""),
  //     binary: new FormControl(""),
  //     cotal: new FormControl(""),
  //     hexa: new FormControl("")  
  //   });
  // }
  // decimalChanged = function(oldValue, newValue){
  //   console.log(newValue);
  //   this.formTwo.patchValue({binary: parseInt(newValue, 10).toString(2)});
  // }


}
