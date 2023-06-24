import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsMaterialModule } from './posts-material.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsItemComponent } from './posts-item/posts-item.component';
import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    PostsListComponent,
    PostsItemComponent
  ],
  imports: [
    CommonModule,
    PostsMaterialModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }
