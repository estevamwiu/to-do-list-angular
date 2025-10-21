import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { MyTasksComponent } from './my-tasks-component/my-tasks-component';

const routes: Routes = 
[
  {path: 'home', component: HomeComponent},
  {path: 'my-tasks', component: MyTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
