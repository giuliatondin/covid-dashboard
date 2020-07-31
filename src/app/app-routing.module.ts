import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrazilDataComponent } from './brazil-data/brazil-data.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'estados', component: BrazilDataComponent},
  { path: 'detalhes/:uf', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
