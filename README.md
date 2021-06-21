# ElectronApp

This project is constructed with [Angular](https://angular.io) v11.2.3,
and uses some [Angular Material](https://material.angular.io) v11.2.2 ui components.

It uses a [Leaflet](https://leafletjs.com) v1.7.1 map.

It can be compiled into an [Electron](https://www.electronjs.org) v11.3.0 executable application.

[Git](https://git-scm.com) v2.30.1 and [Node](https://nodejs.org) v14.16.0 are required.

### to set up a development environment:
```
  >git clone https://github.com/jasondunken/ElectronApp.git
  >cd ElectronApp
  >npm install
```
- angular development serve command:
```
  // the npx command prefix tells node to use only local packages
  // this method avoids a global angular installation
  
  // this command launches the angular app as a web page
  >npx ng serve // serves the app via angular's dev server bound to 127.0.0.1:4200
  
  // some serve options 
  --open // open's the app in your default browser
  --port xxxx // binds the dev server to a port you specify
  --host xxx.xxx.xxx.xxx // serves the app on your local network instead of 127.0.0.1
```
### to build the Angular app:
```
  >cd ElectronApp
```
- angular build command:
```
  >npx ng build // this command buids the angular files saves them in the "outputPath" specified 
                // in angular.json
  
  // this command builds the angular production files for electron deployment
  >npx ng build --prod --base-href ./ --output-hashing none

  // some build options descriptions:
  --prod // instructs the compiler to build a production version of the app
  --base-href ./ // this argument is critical to ensure electron knows where to find the angular 
                // files as angular defaults to '/'
  --output-path %SOME_PATH% // instructs the compiler where to save the build results
  --output-hashing none // instructs the compiler not to append the file names with the file's hash
```
 - electron development build command:
```
  // this command launches the electron app in a new system window without building angular files
  >npx electron .
  
  // this command builds angular production files and launches the electron app in a new system window
  >npm run start:electron
```
### to build the Electron executable:
- Import Electron Forge to your app folder:

```
  >cd ElectronApp
  >npx @electron-forge/cli import

  ✔ Checking your system
  ✔ Initializing Git Repository
  ✔ Writing modified package.json file
  ✔ Installing dependencies
  ✔ Writing modified package.json file
  ✔ Fixing .gitignore

  We have ATTEMPTED to convert your app to be in a format that electron-forge understands.

  Thanks for using "electron-forge"!!!
```
- Create an executable:

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
- The executable will be located in `ElectronApp/out/make/squirrel.windows/x64/`
