import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ConnectComponent } from './pages/connect/connect.component';
import { HomeComponent } from './pages/home/home.component';
import { LeadershipComponent } from './pages/leadership/leadership.component';
import { MediaComponent } from './pages/media/media.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ResourcesComponent } from './pages/resources/resources.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'leadership', component: LeadershipComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'media', component: MediaComponent },
  { path: 'resources', component: ResourcesComponent },

  { path: '**', component: PageNotFoundComponent }, // make 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  AboutUsComponent,
  LeadershipComponent,
  ConnectComponent,
  MediaComponent,
  ResourcesComponent,
  AppComponent,
  PageNotFoundComponent,
];
