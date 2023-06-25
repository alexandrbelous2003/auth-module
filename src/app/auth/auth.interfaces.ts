import { FormControl } from "@angular/forms"

export interface User {
  email: string 
  password: string
}

export interface LoginForm {
  email: FormControl<string | null>
  password: FormControl<string | null>
}
