# ThreejsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Seeting up the Scene

To Create a Three.js project, we'll need at least the following:
* A scene: consider this as the stage where every object needs to be added in order to be rendered;
* A camara: in this case we will use a perspective camera, but it could also be an orthographic camera.
* A renderer that will display all the scene using webgl.
* One or more objects to render, in our case, we will create a plane, a sea and a sky.
* One or more lights: there is also different types of lights available.In this project we will mainly use a hemisphere light for the atomsphere and a directional light for the shadows.

Let's summarize what we need in order to create an object. We need to
* create a geometry
* create a material
* pass them to a mesh
* add the mesh to our scene

with these basic steps, we can create many different kinds of primitive objects
Now,if we combine them, we can create much more complex shapes

