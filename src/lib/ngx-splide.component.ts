import {
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    Input, OnChanges, OnDestroy, Output,
    QueryList, SimpleChanges,
    ViewChild, EventEmitter
} from '@angular/core';
import { NgxSplideSlideComponent } from './ngx-splide-slide.component';

declare var Splide: any;

@Component({
    selector: 'splide',
    templateUrl: './ngx-splide.component.html'
})
export class NgxSplideComponent implements AfterViewInit, OnChanges, OnDestroy
{
    @Input() selectedSlideIndex: number;
    @Input() options: any = {};
    @Input() containerClass: string = '';
    @Input() remountTimeout: number = 300;
    @Output() onInit = new EventEmitter<any>();

    @ContentChildren(NgxSplideSlideComponent) public slides: QueryList<NgxSplideSlideComponent>;

    @ViewChild('splideElement') splideElement: ElementRef;
    protected splide;

    ngAfterViewInit()
    {
        this.splide = new Splide(this.splideElement.nativeElement, this.options);
        this.onInit.emit(this.splide);

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

    ngOnChanges(changes: SimpleChanges)
    {
        if (!this.splide) {
            return;
        }

        if (changes['selectedSlideIndex']) {
            this.splide.go(changes['selectedSlideIndex'].currentValue);
        }
    }

    ngOnDestroy()
    {
        if (this.splide) {
            this.splide.destroy(true);
        }
    }
}
