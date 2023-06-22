import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthMaterialModule } from './auth-material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { PostsComponent } from './posts/posts.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignInComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthMaterialModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
