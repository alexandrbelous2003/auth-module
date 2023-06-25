import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsItemComponent } from './posts-item/posts-item.component';
import { PostsListComponent } from './posts-list/posts-list.component';





const routes: Routes = [
  {
    path: '',
    component: PostsListComponent
  },
  {
    path: ':id',
    component: PostsItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }