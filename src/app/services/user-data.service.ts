import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/user.model';
import { UserPost } from '../user-posts/user-post.model';

@Injectable()
export class UserDataService {
  currentUser: User;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }

  getUserPosts(id) {
    return this.http.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }

  addUserPost(userPost: UserPost) {
    return this.http.post<UserPost>('http://jsonplaceholder.typicode.com/posts', userPost);
  }

  deleteUserPost(postId: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  updateUserPost(post) {
    return this.http.put<UserPost>(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

}
