import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  setUser(userData: any) {
    localStorage.setItem('currentUser', JSON.stringify(userData));
  }


  getUser() {
    const data = localStorage.getItem('currentUser');
    return data ? JSON.parse(data) : null;
  }


  clearUser() {
    localStorage.removeItem('currentUser');
  }
}
