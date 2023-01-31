import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<{ text: string; status: number; err: string }>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-a1e66-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          this.error.next({
            text: error.statusText,
            status: error.status,
            err: error.error.error,
          });
        }
      );
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-a1e66-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({
            FAKE_TOKEN: 'FXAI_1B6X',
          }),
        }
      )
      .pipe(
        map((res) => {
          const posts: Post[] = [];
          for (let key in res) {
            if (res.hasOwnProperty(key)) {
              posts.push({ ...res[key], id: key });
            }
          }
          return posts;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://ng-complete-guide-a1e66-default-rtdb.firebaseio.com/posts.json'
    );
  }
}
