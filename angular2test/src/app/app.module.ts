import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { TestComponent } from './test/test.component';
import { TestDataBindingComponent } from './test-data-binding/test-data-binding.component';
import { DataBinding2Component } from './data-binding2/data-binding2.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    TestComponent,
    TestDataBindingComponent,
    DataBinding2Component
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
