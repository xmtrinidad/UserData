import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { UserPost } from './user-post.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  username: string;
  posts: UserPost[];
  editPostIndex: number;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private userDataService: UserDataService) { }

  ngOnInit() {
    // Go back if there is no current user
    if (!this.userDataService.currentUser) {
      this.location.back();
      return;
    }
    this.getUserPosts();
    this.username = this.userDataService.currentUser.username;
  }

  /**
   * Get id from route param
   * Make get request based on user id
   */
  getUserPosts() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userDataService.getUserPosts(id).subscribe((posts: UserPost[]) => this.posts = posts);
  }

  /**
   * Add to beginning of user posts
   * @param {UserPost} post - the user's new post
   */
  onPostAdded(post: UserPost) {
    this.posts.unshift(post);
  }

  /**
   * Get deleted post id to use to make a DELETE request
   * @param post
   */
  onDeleteClick(post) {
    const postId = post.id;
    this.userDataService.deleteUserPost(postId).subscribe(res => console.log(res));
    this.posts = this.posts.filter((p: any) => p.id !== postId);
  }

  /**
   * Sort posts by title alphabetically
   */
  onSortByTitleClick() {
    this.posts.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) { return -1; }
      if (titleA > titleB) { return 1; }
      return 0;
    });
  }

  /**
   * set index of the post being edited
   * @param i - the index
   */
  onEditPostClick(i) {
    this.editPostIndex = i;
  }

  /**
   * When a post is updated, reset edit index and update the post
   * @param post
   */
  onUpdatedPostEvent(post) {
    this.editPostIndex = null;
    if (post) {
      const postIndex = this.posts.findIndex(p => p.id === post.id);
      this.posts[postIndex] = post;
    }
  }
}
