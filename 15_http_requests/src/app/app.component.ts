import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-a1e66-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = true;
    this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-a1e66-default-rtdb.firebaseio.com/posts.json'
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
        })
      )
      .subscribe((posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      });
  }
}
