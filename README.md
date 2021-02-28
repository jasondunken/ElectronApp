# ElectronAngularApp

This project is constructed with [Angular](https://angular.io),
and uses some [Angular Material](https://material.angular.io) ui components.

It uses a [Leaflet](https://leafletjs.com) map.

It is intended to be compiled into an [Electron](https://www.electronjs.org) executable application.

[Node](https://nodejs.org) is required.

### to set up a development environment:
- clone the project
- cd into project
- npm install
- serve commands:
  - npx ng serve
  - npx ng serve -o / --open
  - npx ng serve --port xxxx

### to build the Angular app:
- cd to project directory
- build command:
  - ng build --prod=true

### to build the Electron app:

- Import Electron Forge to your app folder:

```
npx @electron-forge/cli import

✔ Checking your system`
✔ Initializing Git Repository
✔ Writing modified package.json file
✔ Installing dependencies
✔ Writing modified package.json file
✔ Fixing .gitignore

We have ATTEMPTED to convert your app to be in a format that electron-forge understands.

Thanks for using "electron-forge"!!!
```

- Create a distributable:

```
npm run make

> my-gsod-electron-app@1.0.0 make /my-electron-app
> electron-forge make

✔ Checking your system
✔ Resolving Forge Config
We need to package your application before we can make it
✔ Preparing to Package Application for arch: x64
✔ Preparing native dependencies
✔ Packaging Application
Making for the following targets: zip
✔ Making for target: zip - On platform: darwin - For arch: x64
...
```
