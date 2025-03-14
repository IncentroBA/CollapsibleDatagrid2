## Collapsible Data grid 2
Add-on for Data grid 2 rows to generate a chevron with more data. This widget
focuses on collapsible content but does not adjust column responsiveness.

Aside from this add-on, there is also a [Responsive Data grid 2](https://marketplace.mendix.com/link/component/222130) add-on widget. This widget focuses on responsiveness by hiding Data grid 2 columns when the screen is smaller. However, both widgets can be used together. Please note that currently, this setup would display two different chevrons.

## Typical usage scenario

When you have a Data grid 2 that should display additional information underneath each row. This could be any (pluggable) widget.

## Features

-   Open by Boolean `Attribute` to open / close based on attribute.
-   Close on click outside `boolean`.

## Usage

- Place the widget **inside** a custom content column of the Data grid 2. 
- Insert any pluggable widget you want that contains more wanted information. This can be for example a button, input field or a List view widget.
- When using the Open by Boolean attribute it is best to nog commit the value when setting it.


## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.