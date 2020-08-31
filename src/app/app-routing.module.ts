import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GithubComponent } from './components/github/github.component';
import { UsersComponent } from './components/users/users.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'github', component: GithubComponent },
  { path: 'userProfile', component: UsersComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
