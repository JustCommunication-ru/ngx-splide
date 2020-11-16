import {
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    Input, OnDestroy,
    QueryList,
    ViewChild
} from '@angular/core';
import { NgxSplideSlideComponent } from './ngx-splide-slide.component';

declare var Splide: any;

@Component({
  selector: 'splide',
  templateUrl: './ngx-splide.component.html'
})
export class NgxSplideComponent implements AfterViewInit, OnDestroy
{
    @Input() options: any = {};
    @Input() containerClass: string = '';
    @Input remountTimeout: number = 300;

    @ContentChildren(NgxSplideSlideComponent) public slides: QueryList<NgxSplideSlideComponent>;

    @ViewChild('splideElement') splideElement: ElementRef;
    protected splide;

    ngAfterViewInit()
    {
        this.splide = new Splide(this.splideElement.nativeElement, this.options);
        this.splide.mount();

        const slidesSubscription = this.slides.changes
            .subscribe((list: QueryList<NgxSplideSlideComponent>) => {
                this.splide.destroy(true);

                setTimeout(() => {
                    this.splide.mount();
                }, this.remountTimeout);
            })
        ;
    }

    ngOnDestroy()
    {
        if (this.splide) {
            this.splide.destroy(true);
        }
    }
}
