import { FormControl } from "@angular/forms"

export interface User {
  /** 
   * Уникальный  email
   * @example a@gmail.com
  */
  email: string 
  /** 
   * Пароль
   * @example 123456
  */
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
