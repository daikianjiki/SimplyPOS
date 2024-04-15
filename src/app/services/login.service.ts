import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessLevel, Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  loggedinEmployee : Employee = {
    id: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    accessLevel: AccessLevel.ASSOCIATE
  }
}
