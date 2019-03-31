import { NgModule } from '@angular/core';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/collection', pathMatch: 'full'},
  {path: 'collection', component: CollectionComponent},
  {path: 'market', component: MarketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
