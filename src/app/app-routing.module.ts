import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemSelectedComponent } from './pages/item-selected/item-selected.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'item-selected', component: ItemSelectedComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
