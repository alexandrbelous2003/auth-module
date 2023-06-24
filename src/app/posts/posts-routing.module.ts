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
  },
  // {
  //   path: 'posts',
  //   loadChildren: () => import('./posts-list/posts-list-routing.module').then(m => m.PostsListRoutingModule)
  // },
  // {
  //   path: 'posts-id',
  //   loadChildren: () => import('./posts-item/posts-ltem-routing.module').then(m => m.PostsItemRoutingModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }