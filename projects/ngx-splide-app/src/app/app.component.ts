import { Component } from '@angular/core';

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

    selected_index_code = '<splide [(selectedSlideIndex)]="currentImageIndex" [options]="{ type: \'loop\', perPage: 1, keyboard: false, fixedHeight: 400 }">\n' +
        '    <splide-slide *ngFor="let image of images">\n' +
        '        <img [src]="image.src" alt="" />\n' +
        '    </splide-slide>\n' +
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
