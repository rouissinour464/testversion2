import { Routes } from '@angular/router';
import { PostListComponent } from '@components/post-list/post-list.component';
import { PostItemComponent } from '@components/post-item/post-item.component';
import { AuthentificationComponent } from '@components/authentification/authentification.component';

export const routes: Routes = [
  { path: 'posts-liste', component: PostListComponent },
  { path: 'post-item', component: PostItemComponent },
  { path: 'login', component: AuthentificationComponent },
  { path: '', redirectTo: '/posts-liste', pathMatch: 'full' }  
]
