import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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

  constructor(private formBuilder: FormBuilder, private router: Router,  private authService: AuthService) {
    this.Form = this.formBuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    });
  }

  toggleAuthMode() {
    this.isRegister = !this.isRegister;
    this.errorMessage = '';
  }

  register() {
    const email = this.Form.value.email;
    const password = this.Form.value.password;

    const registrationSuccessful = this.authService.register(email, password);

    if (registrationSuccessful) {
      this.router.navigate(['/posts']);
    } else {
      this.errorMessage = 'Email уже занят.';
    }
  }
}
