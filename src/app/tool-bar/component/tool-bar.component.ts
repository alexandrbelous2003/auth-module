import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {

  constructor(private authService: AuthService) {}

  /** Метод вызывает в AuthService метод очистки токена */
  logout(): void {
    this.authService.logout();
  }
}
