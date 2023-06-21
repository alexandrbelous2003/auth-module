import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'module/auth/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'module',
    children: [
      {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
