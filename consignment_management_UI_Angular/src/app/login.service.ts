import { Injectable } from '@angular/core';
import { LoginPayload } from './loginpayload';
import { HttpClient } from '@angular/common/http';
import { AuthToken } from './AuthToken';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(payload:LoginPayload):Observable<AuthToken>{
    return this.http.post<AuthToken>("http://localhost:8080/login",payload);
    
  }
}
