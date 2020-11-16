import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSplideComponent } from './ngx-splide.component';
import { NgxSplideSlideComponent } from './ngx-splide-slide.component';

@NgModule({
    declarations: [ NgxSplideComponent, NgxSplideSlideComponent ],
    imports: [ BrowserModule ],
    exports: [ NgxSplideComponent, NgxSplideSlideComponent ]
})
export class NgxSplideModule {}
