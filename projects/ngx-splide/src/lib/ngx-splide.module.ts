import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSplideComponent } from './ngx-splide.component';
import { NgxSplideSlideComponent } from './ngx-splide-slide.component';

@NgModule({
    declarations: [ NgxSplideComponent, NgxSplideSlideComponent ],
    imports: [ CommonModule ],
    exports: [ NgxSplideComponent, NgxSplideSlideComponent ]
})
export class NgxSplideModule {}
