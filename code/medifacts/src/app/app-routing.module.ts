import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PostView } from './posts/post-view.component';
import { PostsPage } from './posts/posts.component';
import { RegisterLoginPage } from './registerlogin/registerlogin.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  },

  {
    path: 'posts',
    component: PostsPage,
    loadChildren: () => 
      import('./posts/posts.module').then((m)=> m.PostsPageModule)
  },
  {
    path: 'post-view',
    component: PostView,
  },
  {
    path: 'registerlogin',
    component: RegisterLoginPage,
    loadChildren: () =>
      import('./registerlogin/registerlogin.module').then((m)=> m.RegisterLoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
