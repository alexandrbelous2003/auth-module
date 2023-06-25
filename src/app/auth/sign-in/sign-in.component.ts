import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginForm } from '../auth.interfaces';
import { first } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  Form: FormGroup;
  
  isRegister: boolean = false;
  errorMessage: string = '';
  hide = true;

  constructor(private router: Router,  private authService: AuthService){
      this.Form = new FormGroup<LoginForm>({
        email: new FormControl<string | null>('a@gmail.com',[ Validators.required, Validators.email]),
        password: new FormControl<string | null>('123456', [Validators.required]),
    });
  }

  toggleAuthMode() {
    this.isRegister = !this.isRegister;
    this.errorMessage = '';
  }

  login() {
    this.authService.login(this.Form.value).pipe(
      first(),
    ).subscribe({
      next: (result) => {
        if (result) {
            this.router.navigate(['/posts']);
          } else {
            this.errorMessage = 'Неверный email или password.';
          }
      }
    })
  }
}
