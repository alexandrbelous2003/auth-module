import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsMaterialModule } from './posts-material.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsItemComponent } from './posts-item/posts-item.component';
import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http';
import { ToolBarModule } from '../tool-bar/tool-bar.module';




@NgModule({
  declarations: [
    PostsListComponent,
    PostsItemComponent
  ],
  imports: [
    CommonModule,
    PostsMaterialModule,
    PostsRoutingModule,
    HttpClientModule,
    ToolBarModule
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }
