import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'posts/:id', component: UserPostsComponent},
  {path: '**', redirectTo: '/users', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
