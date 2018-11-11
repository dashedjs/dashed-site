import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'getting-started', component: GettingStartedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
