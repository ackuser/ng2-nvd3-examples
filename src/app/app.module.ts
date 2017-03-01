import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';

import "d3";
import "nvd3";
import { nvD3 } from "ng2-nvd3";

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    nvD3
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
      nvD3
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
