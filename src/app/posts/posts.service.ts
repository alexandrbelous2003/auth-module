
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './posts.interfaces';


@Injectable()
export class PostsService {

  constructor(private http: HttpClient) {}

  getData(): Observable<Array<Post>> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
