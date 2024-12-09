import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { PostListComponent } from '@components/post-list/post-list.component';
import { PostItemComponent } from '@components/post-item/post-item.component';
import { AuthentificationComponent } from '@components/authentification/authentification.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostItemComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Ajout des routes ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
