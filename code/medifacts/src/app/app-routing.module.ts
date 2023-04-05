import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PostsPage } from './posts/posts.component';
import { RegisterLoginPage } from './registerlogin/registerlogin.component';
import { ProfilePageModule } from './profile/profile-routing.module';
import { ProfilePage } from './profile/profile.component';
import { RegisterPage } from './registerlogin/register.component';
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
    path: 'registerlogin',
    component: RegisterLoginPage,
    loadChildren: () =>
      import('./registerlogin/registerlogin.module').then((m)=> m.RegisterLoginPageModule)
  },
  {
    path: 'profile',
    component: ProfilePage,
    loadChildren:() =>
      import('./profile/profile.module').then((m)=> m.ProfilePageModule)
  },
  {
    path: 'register',
    component: RegisterPage
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
