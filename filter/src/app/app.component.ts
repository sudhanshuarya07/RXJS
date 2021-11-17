import { Component } from '@angular/core'
import { from, fromEvent } from 'rxjs';
import { isConstructorDeclaration } from 'typescript';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filter';
  name = 'Angular';
  data: any[] = [];
  searchText:any;
  
  ngOnInit() {
   
    
    this.data=[
      { 
      "Name":"Sudhanshu",
      "LastName":"Arya",
      "EmployeeID":"121",
      "Age":"33",
      "PhoneNO":"99319193"
     },
     { 
      "Name":"Ravi",
      "LastName":"Yadav",
      "EmployeeID":"130",
      "Age":"52",
      "PhoneNO":"99319193"
     },{ 
      "Name":"Sidharth",
      "LastName":"jain",
      "EmployeeID":"129",
      "Age":"44",
      "PhoneNO":"99319193"
     },{ 
      "Name":"Sudhir",
      "LastName":"Kamal",
      "EmployeeID":"128",
      "Age":"29",
      "PhoneNO":"99319193"
     },{ 
      "Name":"Priyanshu",
      "LastName":"Bhatta",
      "EmployeeID":"127",
      "Age":"54",
      "PhoneNO":"99319193"
     },{ 
      "Name":"Suman",
      "LastName":"Bharat",
      "EmployeeID":"126",
      "Age":"25",
      "PhoneNO":"99319193"
     },{ 
      "Name":"Satish",
      "LastName":"Kumar",
      "EmployeeID":"125",
      "Age":"32",
      "PhoneNO":"99319193"
     },{ 
      "Name":"Anshu",
      "LastName":"Kumar",
      "EmployeeID":"124",
      "Age":"34",
      "PhoneNO":"99319193"
     },{ 
      "Name":"Sudhakar",
      "LastName":"Jain",
      "EmployeeID":"122",
      "Age":"30",
      "PhoneNO":"99319193"
     },{ 
      "Name":"Kush",
      "LastName":"Seth",
      "EmployeeID":"123",
      "Age":"24",
      "PhoneNO":"99313"
     },
    ]

  }

   sort(event: any) {
     switch (event.target.value) {
            case "Low":
      {
            this.data = this.data.sort((low, high) => low.Age - high.Age);
          
            break;
          }
      case "High":
          {
            this.data = this.data.sort((low, high) => high.Age - low.Age);
            break;
          }
       

       default: {
       this.data = this.data.sort((low, high) => low.Age - high.Age);
        break;
      }
     }
      return this.data;

    }
  
   
   
}


