import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { UserPost } from '../user-post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postTitle = 'My Post Title';
  postBody = 'My Post Body';
  @Output() addedPost = new EventEmitter<UserPost>();
  wantsAddPost = false;

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
  }

  /**
   * Set wantsAddPost to true to show add-post form
   */
  onAddPostClick() {
    this.wantsAddPost = true;
  }

  /**
   * Create new user post then make POST request using service
   * Reset post title and post body
   * Reset wantsAddPost to hide add-post form
   */
  onAddPostSubmit() {
    const userPost: UserPost = {
      userId: this.userDataService.currentUser.id,
      title: this.postTitle,
      body: this.postBody
    };
    this.addedPost.emit(userPost);
    this.userDataService.addUserPost(userPost).subscribe(res => console.log(res));
    this.postTitle = this.postBody = '';
    this.wantsAddPost = false;
  }
}
