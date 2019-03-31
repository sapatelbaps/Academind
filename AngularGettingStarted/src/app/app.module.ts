import { CollectableService } from './collectable.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CollectionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CollectableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
