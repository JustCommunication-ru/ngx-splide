import {
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    Input, OnChanges, OnDestroy, Output,
    QueryList, SimpleChanges,
    ViewChild, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { NgxSplideSlideComponent } from './ngx-splide-slide.component';

declare var Splide: any;

@Component({
    selector: 'splide',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './ngx-splide.component.html'
})
export class NgxSplideComponent implements AfterViewInit, OnChanges, OnDestroy
{
    @Input() selectedSlideIndex: number;
    @Output() selectedSlideIndexChange = new EventEmitter<number>();
    @Input() options: any = {};
    @Input() containerClass: string = '';
    @Input() remountTimeout: number = 300;
    @Output() onInit = new EventEmitter<any>();

    @ContentChildren(NgxSplideSlideComponent) public slides: QueryList<NgxSplideSlideComponent>;

    @ViewChild('splideElement') splideElement: ElementRef;
    protected splide;

    constructor(private cdr: ChangeDetectorRef) { }

    ngAfterViewInit()
    {
        this.splide = new Splide(this.splideElement.nativeElement, this.options);
        this.onInit.emit(this.splide);

        this.splide.on('move', (newIndex, oldIndex, destIndex) => {
            this.selectedSlideIndexChange.emit(newIndex);
        });

        this.splide.mount();

        const slidesSubscription = this.slides.changes
            .subscribe((list: QueryList<NgxSplideSlideComponent>) => {
                this.cdr.detectChanges();
                this.splide.destroy(true);

                setTimeout(() => {
                    this.splide.mount();
                }, this.remountTimeout);
            })
        ;

        this.cdr.detectChanges();
    }

    ngOnChanges(changes: SimpleChanges)
    {
        if (!this.splide) {
            return;
        }

        if (changes['selectedSlideIndex']) {
            const currentIndex = changes['selectedSlideIndex'].currentValue;
            if (currentIndex !== this.splide.index) {
                this.splide.go(currentIndex);
            }
        }
    }

    ngOnDestroy()
    {
        if (this.splide) {
            this.splide.destroy(true);
        }
    }
}
