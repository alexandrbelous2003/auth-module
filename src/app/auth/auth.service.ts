import { Injectable } from '@angular/core';
import { User } from './auth.interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageKey = 'ACCESS_TOKEN';

  constructor(private router: Router) { }

  register(email: string, password: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      return false;
    }

    const newUser: User = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    const token = this.generateToken();
    localStorage.setItem(this.localStorageKey, token);

    return true; 
  }

  login(email: string, password: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      return false;
    }

    const token = this.generateToken();
    localStorage.setItem(this.localStorageKey, token);

    return true;
  }

  private generateToken(): string {
    const tokenLength = 16;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';

    for (let i = 0; i < tokenLength; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return token;
  }

  logout(): void {
    localStorage.removeItem(this.localStorageKey);
    this.router.navigate(['/auth/sign-in']);
  }
}
