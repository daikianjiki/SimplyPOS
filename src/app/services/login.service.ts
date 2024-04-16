import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessLevel, Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  loggedInEmployee : Employee = {
    id: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    accessLevel: AccessLevel.ASSOCIATE
  }
  private isLoggedInValue: boolean = false

  isLoggedIn(): boolean {
    return this.isLoggedInValue
  }

  login(employee: Employee): void {
    this.loggedInEmployee = employee
    this.isLoggedInValue = true
  }

  logout() : void {
    this.loggedInEmployee = {
      id: 0,
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      accessLevel: AccessLevel.ASSOCIATE
    }
    this.isLoggedInValue = false
  }

  getLoggedInEmployee(): Employee | null {
    return this.loggedInEmployee
  }
}
