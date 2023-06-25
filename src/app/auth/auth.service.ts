import { Injectable } from '@angular/core';
import { LoginForm, User } from './auth.interfaces';
import { Router } from '@angular/router';
import { EMPTY, Observable, delay, filter, first, from, iif, map, mergeMap, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageKey = 'ACCESS_TOKEN';

  constructor(private router: Router) { }

  register(email: string, password: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem('users') || JSON.stringify([]));
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

  login({email, password}: {email: string | null,password: string | null }): Observable<boolean>{
    return of(JSON.parse(localStorage.getItem('users') || JSON.stringify([]))).pipe(
      first(), 
      filter((users): users is Array<User> => !!users && Array.isArray(users)),
      mergeMap((users) => 
        iif(
          () => !!email && !!password,
          of(users.find((user: User) => user.email === (email as string) && user.password === password)),
          EMPTY 
        )
      ),
      map((user: User | undefined) => !!user), 
      delay(250)
    );
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
