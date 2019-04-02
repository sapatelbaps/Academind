import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { TestComponent } from './test/test.component';
import { TestDataBindingComponent } from './test-data-binding/test-data-binding.component';
import { DataBinding2Component } from './data-binding2/data-binding2.component';
import { DataBinding3Component } from './data-binding3/data-binding3.component';
import { DataBinding3listComponent } from './data-binding3list/data-binding3list.component';
import { DataBinding3contactComponent } from './data-binding3contact/data-binding3contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    TestComponent,
    TestDataBindingComponent,
    DataBinding2Component,
    DataBinding3Component,
    DataBinding3listComponent,
    DataBinding3contactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
