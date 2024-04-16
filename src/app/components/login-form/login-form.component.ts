import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccessLevel, Employee } from 'src/app/models/employee';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private loginService : LoginService,
    private router: Router
    ) {}
  
  employee : Employee = {
    id: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    accessLevel: AccessLevel.ASSOCIATE
  }
  
  onSubmit() {
    //logs in employee
    this.loginService.login(this.employee)
    console.log("Employee logged in? ", this.loginService.isLoggedIn())
    console.log("Logged in employee: ", this.loginService.getLoggedInEmployee())
    
    //clear the form fields
    this.employee.username = ''
    this.employee.password = ''

    //navigate to the dashboard
    this.router.navigate(['dashboard'])
  }
  
  onCancel() {
    console.log("Cancel Button Clicked!")
    console.log("Logged in employee: ", this.loginService.getLoggedInEmployee())
    this.employee.username = ''
    this.employee.password = ''
  }
}
