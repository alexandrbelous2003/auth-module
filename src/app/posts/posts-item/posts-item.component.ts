import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, switchMap } from 'rxjs';
import { Post } from '../posts.interfaces';
import { PostsService } from '../posts.service';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-posts-id',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.scss']
})
export class PostsItemComponent {
  post?: Post;

  constructor(private route: ActivatedRoute,private postIdService: PostsService, private authService: AuthService) {}

  ngOnInit() {
    this.route.paramMap.pipe(switchMap((paramMap) => {
      const id = paramMap.get('id');
      return !Number.isNaN(id) ? this.postIdService.getPostById(Number(id)) : EMPTY;
    })).subscribe((data: Post | never)  => {
      if (data) {
        this.post = data;
      }
    })
  }

  logout(): void {
    this.authService.logout();
  }
}
