# Actian

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.
This project is for getting Longitude and Latitude of the cities.
On submission,it hits the API and shows the city coordinate details if it is a valid city otherwise it will throw an error message.
To avoid multiple API hit for the same city,used RxJS caching method. It will cache the API result data for the new request, and return the same if same request happens without server call.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
