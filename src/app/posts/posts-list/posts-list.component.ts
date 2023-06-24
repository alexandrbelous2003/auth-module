import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent {
  posts: any;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getData().subscribe(data => {
      this.posts = data;
    });
  }
}
