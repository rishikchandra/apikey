import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DefaultComponent } from './default/default.component';
import { SearchmovieComponent } from './searchmovie/searchmovie.component';
import { ErrorComponent } from './error/error.component';




const routes: Routes = [
  {path:'',redirectTo:'/default',pathMatch:'full'},
  {path:'default',component:DefaultComponent},
  {path:'overview/:id',component:OverviewComponent},
  {path:'searchmovie/:search',component:SearchmovieComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
