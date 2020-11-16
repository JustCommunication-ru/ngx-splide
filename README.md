# ngx-splide

![npm](https://img.shields.io/npm/v/ngx-splide)
![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-splide)

[Splide.js](https://splidejs.com/) integration to angular

## Installation

Using `npm`

`npm i --save ngx-splide`

Or if you prefer `yarn`

`yarn add ngx-splide`

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

You can use `<splide />` component with `<splide-slide />` components inside.

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

### Splide options

```angular2html
<splide [options]="{ type: 'loop', perPage: 1, keyboard: false }">
    <splide-slide *ngFor="image in images">
        <img [src]="image.src" alt="" />
    </splide-slide>
</splide>
```

Please refer to official documentation for supported options https://splidejs.com/options/

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

