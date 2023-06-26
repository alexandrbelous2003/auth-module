import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter, map, switchMap } from 'rxjs';
import { Post } from '../posts.interfaces';
import { PostsService } from '../posts.service';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-posts-id',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsItemComponent {
  /** Поток выбранных постовы */
  public post$!: Observable<Post>;

  constructor(private route: ActivatedRoute,private postIdService: PostsService, private authService: AuthService) {}

  ngOnInit() {
    this.post$ = this.route.paramMap.pipe(
      map((paramMap) => paramMap.get('id')),
      map((idAsString) => {
        if(!Number.isNaN(idAsString)){
          return Number(idAsString)
        } else {
          return null
        }
      }),
      filter((id): id is number => !!id && typeof id === 'number'),
      switchMap((id) => this.postIdService.getPostById(id))
    );
  }

  logout(): void {
    this.authService.logout();
  }
}
