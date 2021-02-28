# ElectronApp

This project is constructed with [Angular](https://angular.io),
and uses some [Angular Material](https://material.angular.io) ui components.

It uses a [Leaflet](https://leafletjs.com) map.

It can be compiled into an [Electron](https://www.electronjs.org) executable application.

[Git](https://git-scm.com) and [Node](https://nodejs.org) are required.

### to set up a development environment:
```
  >git clone https://github.com/jasondunken/ElectronApp.git
  >cd ElectronApp
  >npm install
```
- development serve command:
```
  // the npx command prefix tells node to use only local packages
  // this method avoids a global Angular installation
  
  >npx ng serve // Serves the app via Angular's dev server bound to port 4200
```
- some serve options:
```
  --open // Open's the app in your default browser
  --port xxxx // Binds the dev server to a port you specify
  --host xxx.xxx.xxx.xxx // serves the app on your local network instead of 127.0.0.1
```
### to build the Angular app:
```
  >cd ElectronApp
```
- build command:
```
  >npx ng build // builds dev version of the app and saves it in the dist directory by default
```
-  some build options:
```
  --prod // instructs the compiler to build a production version of the app
  --output-path %SOME_PATH% // instructs the compiler where to save the build results
  --output-hashing none // instructs the compiler not to append the file names with the file's hash
```
### to build the Electron app:
- Import Electron Forge to your app folder:

```
  >npx @electron-forge/cli import

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
  >npm run make

  my-gsod-electron-app@1.0.0 make /my-electron-app
  electron-forge make

  ✔ Checking your system
  ✔ Resolving Forge Config
  We need to package your application before we can make it
  ✔ Preparing to Package Application for arch: x64
  ✔ Preparing native dependencies
  ✔ Packaging Application
  Making for the following targets: zip
  ✔ Making for target: zip - On platform: darwin - For arch: x64
```
- The executable will be located in the `ElectronApp/out` directory
