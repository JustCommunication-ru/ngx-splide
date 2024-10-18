import {Component, ViewChild} from '@angular/core';
import {NgxSplideComponent} from 'ngx-splide';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent
{
    images = [
        { src: 'assets/daffodil-1378489.jpg' },
        { src: 'assets/sun-burst-1478549.jpg' },
        { src: 'assets/sunset-jungle-1383333.jpg' }
    ];

    runtime_images = [
        { src: 'assets/daffodil-1378489.jpg' },
        { src: 'assets/sun-burst-1478549.jpg' },
        { src: 'assets/sunset-jungle-1383333.jpg' }
    ];

    currentImageIndex = 0;

    autoplayInterval = 500;

    @ViewChild('mainSplide') mainSplide: NgxSplideComponent;
    @ViewChild('secondarySplide') secondarySplide: NgxSplideComponent;

    addNewSlide()
    {
        this.runtime_images.push({
            src: 'assets/tractor-2-1386664.jpg'
        });
    }

    options_code = '<splide [options]="{ type: \'loop\', perPage: 1, keyboard: false, fixedHeight: 400 }">\n' +
        '   <splide-slide *ngFor="let image of images">\n' +
        '       <img [src]="image.src" alt="" />\n' +
        '   </splide-slide>\n' +
        '</splide>';

    sync_code = '<splide #mainSplide [options]="{ type: \'slide\', pagination: false, arrows: false,drag: true, lazyLoad: \'nearby\', preloadPages: 3, fixedHeight: 400 }">\n' +
        '    <splide-slide *ngFor="let image of images">\n' +
        '        <img [src]="image.src" alt="" />\n' +
        '    </splide-slide>\n' +
        '</splide>\n' +
        '\n' +
        '<splide [syncWith]="mainSplide" [options]="{ rewind: true, isNavigation: true, gap: 5, focus: \'center\', pagination: false, cover: true, lazyLoad: \'nearby\', preloadPages: 20, fixedWidth: 60, fixedHeight: 60 }">\n' +
        '    <splide-slide *ngFor="let image of images">\n' +
        '        <img [src]="image.src" alt="" />\n' +
        '    </splide-slide>\n' +
        '</splide>';

    autoheight_code = '<splide [options]="{\n' +
        '   type      : \'loop\',\n' +
        '   direction : \'ttb\',\n' +
        '   height    : \'20rem\',\n' +
        '   focus     : \'center\',\n' +
        '   autoHeight: true\n' +
        '}">\n' +
        '   <splide-slide *ngFor="let image of images">\n' +
        '       <div style="height: 20rem;">\n' +
        '           <img [src]="image.src" alt="" />\n' +
        '       </div>\n' +
        '   </splide-slide>\n' +
        '</splide>';

    runtimeOptions = {
        type: 'loop',
        perPage: 1,
        keyboard: false,
        fixedHeight: 400,
        speed: 400
    };

    updateRuntimeOptions()
    {
        this.runtimeOptions = JSON.parse(JSON.stringify(this.runtimeOptions));;
    }

    onSplideEvent(event)
    {
        console.log('Splide event', event.name, 'with arguments', event.args);
    }

    onSplideMoved(args)
    {
        const newIndex = args[0];
        const oldIndex = args[1];
        const destIndex = args[2];
    }
}
