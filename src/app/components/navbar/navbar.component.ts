import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private loginService: LoginService) {}

  onLogout() {
    this.loginService.logout()
    console.log("Employee logged in? ", this.loginService.isLoggedIn())
    console.log("Logged in employee: ",this.loginService.getLoggedInEmployee())
  }
}
