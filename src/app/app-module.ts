import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './home-component/home-component';
import { FooterComponent } from './footer-component/footer-component';
import { NavBarComponent } from './nav-bar-component/nav-bar-component';
import { MyTasksComponent } from './my-tasks-component/my-tasks-component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ConcludedTasksComponent } from './concluded-tasks-component/concluded-tasks-component';
import { AboutComponent } from './about-component/about-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    FooterComponent,
    NavBarComponent,
    MyTasksComponent,
    ConcludedTasksComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
