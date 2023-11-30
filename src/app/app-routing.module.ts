import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'movie/:id',component:MovieDetailComponent},
  {path: '',
  component: HomeComponent,
  // children: [
  //   { path: 'callbackAuth', component: AppAuthCallbackComponent },
  //   { path: '', redirectTo: '/home', pathMatch: 'full' },
  //   {
  //     path: 'home',
  //     loadChildren: () =>
  //       import('./pages/home/home.module').then((m) => m.HomeModule),
  //   }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
