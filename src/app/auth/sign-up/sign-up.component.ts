import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { first } from 'rxjs';
import { AuthForm } from '../auth.interfaces';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  Form: FormGroup;

  isRegister: boolean = false;
  errorMessage: string = '';
  hide = true;

  constructor(private router: Router,  private authService: AuthService) {
    this.Form = new FormGroup<AuthForm>({
      userName: new FormControl<string | null>('', [Validators.required]),
      email: new FormControl<string | null>('',[ Validators.required, Validators.email]),
      password: new FormControl<string | null>('', [Validators.required]),
    });
  }

  toggleAuthMode() {
    this.isRegister = !this.isRegister;
    this.errorMessage = '';
  }

  register() {
    this.authService.register(this.Form.value).pipe(
      first(),
    ).subscribe({
      next: (result) => {
        if (result) {
            this.router.navigate(['/posts']);
          } else {
            this.errorMessage = 'Email уже занят.';
          }
      }
    })
  }
}
