import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxSplideModule } from '../../../ngx-splide/src/lib/ngx-splide.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSplideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
