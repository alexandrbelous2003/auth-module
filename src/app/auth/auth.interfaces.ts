import { FormControl } from "@angular/forms"

export interface User {
  email: string 
  password: string
}

export interface LoginForm {
  email: FormControl<string | null>
  password: FormControl<string | null>
}

export interface AuthForm {
  userName: FormControl<string | null>
  email: FormControl<string | null>
  password: FormControl<string | null>
}
