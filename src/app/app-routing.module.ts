import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import our pages
import { HistoryComponent } from './pages/history/history.component';
import { LaunchesComponent } from './pages/launches/launches.component';
import { LaunchDetailsComponent } from './pages/launch-details/launch-details.component';
import { RocketsComponent } from './pages/rockets/rockets.component';
import { RocketDetailsComponent } from './pages/rocket-details/rocket-details.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'launches',
    component: LaunchesComponent,
  },
  {
    path: 'launches/:id', // :id is a variable that is used for passing information through the url.
    component: LaunchDetailsComponent,
  },
  {
    path: 'rockets',
    component: RocketsComponent,
  },
  {
    path: 'rockets/:id',
    component: RocketDetailsComponent,
  },
  {
    path: '',
    component: HistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
