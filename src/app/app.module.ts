import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UsersComponent } from './users/users.component';

import { UserDataService } from './services/user-data.service';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { AddPostComponent } from './user-posts/add-post/add-post.component';
import { EditPostComponent } from './user-posts/edit-post/edit-post.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersComponent,
    UserPostsComponent,
    AddPostComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
