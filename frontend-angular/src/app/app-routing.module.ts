import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { EditTeamComponent } from './components/pages/edit-team/edit-team.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TeamComponent } from './components/pages/team/team.component';
import { NewTeamComponent } from './components/pages/new-team/new-team.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teams/new', component: NewTeamComponent },
  { path: 'teams/edit/:id', component: EditTeamComponent },
  { path: 'teams/:id', component: TeamComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
