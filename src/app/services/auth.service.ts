import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginPath: string = 'login';
  tokenPath: string = 'token';

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post(`${environment.backendUrl}/${this.loginPath}`, { 'email': email, 'password': password });
  }

  refreshToken(email: string) {
    
  }
 
}
