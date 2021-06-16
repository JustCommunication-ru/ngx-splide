# ngx-splide

![npm](https://img.shields.io/npm/v/ngx-splide)
![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-splide)

[Splide.js](https://splidejs.com/) integration to angular

## Demo

https://justcommunication-ru.github.io/ngx-splide/

## Installation

Using `npm`

`npm i --save ngx-splide`

Or if you prefer `yarn`

`yarn add ngx-splide`

Also this module doesnt have Splide.js as dependency so you need to import it yourself

### With CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js"></script>
```

## Or as dependency:

Define splidejs dependency in your `package.json`
```json
"dependencies": {
    "@splidejs/splide": "^2.4.14",
}
```

And add splide.js into your build scripts in `angular.json`:

```json
"scripts": [
    "node_modules/@splidejs/splide/dist/js/splide.js",
]
```


## Setup

Add `NgxSplideModule` into `app.module.ts`

```typescript
import { NgxSplideModule } from 'ngx-splide';

@NgModule({
    //...
    imports: [
        //...
        NgxSplideModule
    ],
    //...
})
export class AppModule {}
```

## Usage

You can use `<splide />` root component with `<splide-slide />` components inside.

### Basic example

```angular2html
<splide>
    <splide-slide>
        <img src="image1.jpg" alt="" />
    </splide-slide>
    <splide-slide>
        <img src="image2.jpg" alt="" />
    </splide-slide>
</splide>
```

### With options

```angular2html
<splide [options]="{ type: 'loop', perPage: 1, keyboard: false }">
    <splide-slide *ngFor="let image of images">
        <img [src]="image.src" alt="" />
    </splide-slide>
</splide>
```

Please refer to official documentation for supported options https://splidejs.com/options/

### Get splide instance

```angular2html
<splide (onInit)="onSplideInit($event)">
    <splide-slide>
        <img src="image1.jpg" alt="" />
    </splide-slide>
    <splide-slide>
        <img src="image2.jpg" alt="" />
    </splide-slide>
</splide>
```

```typescript
onSplideInit(splide)
{
    console.log(splide);
}
```

### Select slide

You can programatically change selected splide slide with `selectedSlideIndex` option

```angular2html
<button type="button" 
    *ngFor="let image of images; let index = index" 
    (click)="selectedImageIndex = index">Select image {{ index + 1 }}</button>

<splide [options]="{ type: 'loop', perPage: 1, keyboard: false }">
    <splide-slide *ngFor="image in images" [selectedSlideIndex]="selectedImageIndex">
        <img [src]="image.src" alt="" />
    </splide-slide>
</splide>
```

### Other

You can also pass `containerClass` to append custom class for root `div.splide` node

```angular2html
<splide containerClass="customSplideClass">
```

Will produce:

```html
<div class="splide customSplideClass">
    ...
</div>
```

