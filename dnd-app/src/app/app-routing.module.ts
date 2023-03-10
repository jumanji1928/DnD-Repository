import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { CreateComponent } from './create/create.component';
import { LandingComponent } from './landing/landing.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'info/o/backgrounds',
    redirectTo: '/info/o/backgrounds/backgrounds',
  },
  {
    path: 'info/o/spells',
    redirectTo: '/info/o/spells/spells',
  },
  {
    path: 'info/o/feats',
    redirectTo: '/info/o/feats/feats',
  },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: LandingComponent, pathMatch: 'full' },
  { path: 'info/:content', component: LandingComponent },
  { path: 'info/:content/:type', component: LandingComponent },
  { path: 'info/:content/:type/:id', component: InfoComponent },
  { path: 'create', component: CreateComponent },
  { path: 'test', component: TestComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
