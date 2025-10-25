import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { MyTasksComponent } from './my-tasks-component/my-tasks-component';
import { ConcludedTasksComponent } from './concluded-tasks-component/concluded-tasks-component';
import { AboutComponent } from './about-component/about-component';

const routes: Routes = 
[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'my-tasks', component: MyTasksComponent},
  {path: 'concluded-tasks', component: ConcludedTasksComponent},
  {path: 'about-component', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
