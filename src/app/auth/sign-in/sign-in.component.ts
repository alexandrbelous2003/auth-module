import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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

  constructor(private formBuilder: FormBuilder, private router: Router,  private authService: AuthService){
      this.Form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
  }

  toggleAuthMode() {
    this.isRegister = !this.isRegister;
    this.errorMessage = '';
  }

  login() {
    const email = this.Form.value.email;
    const password = this.Form.value.password;

    const loginSuccessful = this.authService.login(email, password);

    if (loginSuccessful) {
      this.router.navigate(['/posts']);
    } else {
      this.errorMessage = 'Неверный email или password.';
    }
  }
}
