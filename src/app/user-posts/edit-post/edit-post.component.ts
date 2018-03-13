import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserPost } from '../user-post.model';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  @Input() post: UserPost;
  @Output() updateSubmitted = new EventEmitter<any>();
  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
  }

  /**
   * Create updated post then make a PUT request through the service
   * Emits updated post to hide EditPostComponent
   * @param updatedTitle - the new post title
   * @param updatedBody - the new post body
   */
  onEditPostSubmit(updatedTitle, updatedBody) {
    const updatedPost = {
      id: this.post.id,
      title: updatedTitle.value,
      body: updatedBody.value,
      usedId: this.post.userId
    };
    this.userDataService.updateUserPost(updatedPost).subscribe(res => console.log(res));
    this.updateSubmitted.emit(updatedPost);
  }

  /**
   * Emit null to parent component to hide EditPostComponent
   */
  onCancelEdit() {
    this.updateSubmitted.emit(null);
  }
}
