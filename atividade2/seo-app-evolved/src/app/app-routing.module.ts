import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ReferenceComponent } from './pages/reference/reference.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'blog',
    component: BlogComponent
  },
  {
    path:'reference',
    component: ReferenceComponent
  },
  {
    path:'**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
