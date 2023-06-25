import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent {
  posts: any;


  constructor(private postsService: PostsService, private authService: AuthService) {}

  ngOnInit() {
    this.postsService.getData().subscribe(data => {
      this.posts = data;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
