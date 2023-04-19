import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentDemoComponent } from './components/parent-demo/parent-demo.component';
import { ChildDemoComponent } from './components/child-demo/child-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveDemoComponent } from './components/reactive-demo/reactive-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentDemoComponent,
    ChildDemoComponent,
    ReactiveDemoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
