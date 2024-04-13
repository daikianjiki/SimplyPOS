import { Component } from '@angular/core';
import { AccessLevel, Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  
  employee : Employee = {
    id: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    accessLevel: AccessLevel.ASSOCIATE
  }
  
  onSubmit() {
    console.log("Submit Button Clicked!")
    console.log("Username: ", this.employee.username)
    console.log("Password: ", this.employee.password)
    
    //clear the form fields
    this.employee.username = ''
    this.employee.password = ''
  }
  
  onCancel() {
    console.log("Cancel Button Clicked!")
    this.employee.username = ''
    this.employee.password = ''
  }
}
