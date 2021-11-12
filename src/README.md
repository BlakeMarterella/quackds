# src project layout
All of the site direction is managed by router/main.js

## Vue Project Files
* **App.vue** Starts the application and redirects users to be controlled by the router
* **Main.js** Configures the world components

## Folders
### assets folder
* holds images, logos, and icons referenced by components
* holds stylesheets, icon packs, and web font references
* **Plugins folder**
    * the quackDependences.js file is used in the main.js file of the project to define components, outlines, and stylesheets
    * globalComponents.js defines the components
    * globalInteractions.js defined the interactions to use throughout the site

### components folder
* The individual cards and aspects that are used within the views. 
    * These are usually smallest building blocks of the website

### interactions folder
* Basic interactions and funtions that are used frequently within the site
    * Ex: clicking outside of a component will close it is useful

### layout folder
* The most broad overview of the sit. Only really used by the router to determine if the user
is authenticated and display the main dashboard or to display the login page

### router folder
* holds the router.js file which tells the site to display certain views when

### views folder
* at its core, these are the different views and pages the user will see as they navigate through the site
    * for example: these can be thought of as individual HTML sites 
* views heavily utilize components to break them into managable chunks