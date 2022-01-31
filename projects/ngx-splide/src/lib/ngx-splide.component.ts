import { isPlatformBrowser } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    Input, OnChanges, OnDestroy, Output,
    QueryList, SimpleChanges,
    ViewChild, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, Inject, PLATFORM_ID
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
    @Input() syncWith: NgxSplideComponent;

    @Output() onInit = new EventEmitter<any>();
    @Output() onSplideEvent = new EventEmitter<any>();

    @Output() onMounted = new EventEmitter();
    @Output() onUpdated = new EventEmitter();
    @Output() onMove = new EventEmitter();
    @Output() onMoved = new EventEmitter();
    @Output() onDrag = new EventEmitter();
    @Output() onDragged = new EventEmitter();
    @Output() onVisible = new EventEmitter();
    @Output() onHidden = new EventEmitter();
    @Output() onActive = new EventEmitter();
    @Output() onInactive = new EventEmitter();
    @Output() onClick = new EventEmitter();
    @Output() onArrowsMounted = new EventEmitter();
    @Output() onArrowsUpdated = new EventEmitter();
    @Output() onPaginationMounted = new EventEmitter();
    @Output() onPaginationUpdated = new EventEmitter();
    @Output() onNavigationMounted = new EventEmitter();
    @Output() onAutoplayPlay = new EventEmitter();
    @Output() onAutoplayPause = new EventEmitter();
    @Output() onAutoplayPlaying = new EventEmitter();
    @Output() onLazyloadLoaded = new EventEmitter();

    @ContentChildren(NgxSplideSlideComponent) public slides: QueryList<NgxSplideSlideComponent>;

    @ViewChild('splideElement') splideElement: ElementRef;
    protected splide;

    constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: any) { }

    ngAfterViewInit()
    {
        if (!isPlatformBrowser(this.platformId))
            return;
            
        this.splide = new Splide(this.splideElement.nativeElement, this.options);
        if (this.syncWith) {
            this.splide.sync(this.syncWith.getSplideInstance());
        }

        this.onInit.emit(this.splide);
        this.addEventListeners();
        this.splide.mount();

        const slidesSubscription = this.slides.changes
            .subscribe((list: QueryList<NgxSplideSlideComponent>) => {
                this.cdr.detectChanges();

                setTimeout(() => {
                    this.splide.destroy();
                    this.splide.mount();

                    this.addEventListeners();
                });
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

        if (changes['options']) {
            this.splide.options = changes['options'].currentValue;
        }
    }

    addEventListeners()
    {
        this.splide
            .on('mounted', ( ...args ) => {
                this.onMounted.emit(args);
                this.onSplideEvent.emit({
                    name: 'mounted',
                    args
                });
            })
            .on('updated', ( ...args ) => {
                this.onUpdated.emit(args);
                this.onSplideEvent.emit({
                    name: 'updated',
                    args
                });
            })
            .on('move', (newIndex, oldIndex, destIndex) => {
                this.selectedSlideIndexChange.emit(newIndex);
                this.onMove.emit([ newIndex, oldIndex, destIndex ]);

                this.onSplideEvent.emit({
                    name: 'move',
                    args: [ newIndex, oldIndex, destIndex ]
                });
            })
            .on('moved', ( ...args ) => {
                this.onMoved.emit(args);

                this.onSplideEvent.emit({
                    name: 'moved',
                    args
                });
            })
            .on('drag', ( ...args ) => {
                this.onDrag.emit(args);

                this.onSplideEvent.emit({
                    name: 'drag',
                    args
                });
            })
            .on('dragged', ( ...args ) => {
                this.onDragged.emit(args);

                this.onSplideEvent.emit({
                    name: 'dragged',
                    args
                });
            })
            .on('visible', ( ...args ) => {
                this.onVisible.emit(args);

                this.onSplideEvent.emit({
                    name: 'visible',
                    args
                });
            })
            .on('hidden', ( ...args ) => {
                this.onHidden.emit(args);

                this.onSplideEvent.emit({
                    name: 'hidden',
                    args
                });
            })
            .on('active', ( ...args ) => {
                this.onActive.emit(args);

                this.onSplideEvent.emit({
                    name: 'active',
                    args
                });
            })
            .on('inactive', ( ...args ) => {
                this.onInactive.emit(args);

                this.onSplideEvent.emit({
                    name: 'inactive',
                    args
                });
            })
            .on('click', ( ...args ) => {
                this.onClick.emit(args);

                this.onSplideEvent.emit({
                    name: 'click',
                    args
                });
            })
            .on('arrows:mounted', ( ...args ) => {
                this.onArrowsMounted.emit(args);

                this.onSplideEvent.emit({
                    name: 'arrows:mounted',
                    args
                });
            })
            .on('arrows:updated', ( ...args ) => {
                this.onArrowsUpdated.emit(args);

                this.onSplideEvent.emit({
                    name: 'arrows:updated',
                    args
                });
            })
            .on('pagination:mounted', ( ...args ) => {
                this.onPaginationMounted.emit(args);

                this.onSplideEvent.emit({
                    name: 'pagination:mounted',
                    args
                });
            })
            .on('pagination:updated', ( ...args ) => {
                this.onPaginationUpdated.emit(args);

                this.onSplideEvent.emit({
                    name: 'pagination:updated',
                    args
                });
            })
            .on('navigation:mounted', ( ...args ) => {
                this.onNavigationMounted.emit(args);

                this.onSplideEvent.emit({
                    name: 'navigation:mounted',
                    args
                });
            })
            .on('autoplay:play', ( ...args ) => {
                this.onAutoplayPlay.emit(args);

                this.onSplideEvent.emit({
                    name: 'autoplay:play',
                    args
                });
            })
            .on('autoplay:pause', ( ...args ) => {
                this.onAutoplayPause.emit(args);

                this.onSplideEvent.emit({
                    name: 'autoplay:pause',
                    args
                });
            })
            .on('autoplay:playing', ( ...args ) => {
                this.onAutoplayPlaying.emit(args);

                this.onSplideEvent.emit({
                    name: 'autoplay:playing',
                    args
                });
            })
            .on('lazyload:loaded', ( ...args ) => {
                this.onLazyloadLoaded.emit(args);

                this.onSplideEvent.emit({
                    name: 'lazyload:loaded',
                    args
                });
            })
        ;
    }

    getSplideInstance()
    {
        return this.splide;
    }

    ngOnDestroy()
    {
        if (this.splide) {
            this.splide.destroy(true);
        }
    }
}
