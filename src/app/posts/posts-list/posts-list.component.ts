import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Post } from '../posts.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsListComponent {
  
  /** Список постов */
  posts$: Observable<Array<Post>> = this.postsService.getData();

  constructor(private postsService: PostsService) {}
}
