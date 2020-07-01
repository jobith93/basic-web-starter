## Introduction

Basic Web Starter Template | 
Developed by team at [www.three38inc.com](http://www.three38inc.com)


[![Netlify Status](https://api.netlify.com/api/v1/badges/b2ec2087-d730-4ed5-9b3e-a201a22af316/deploy-status)](https://app.netlify.com/sites/du-fintech/deploys)

## Installation

Basic Web Starter requires the following dependencies:

- Bulma
- Nunjuks
- jQuery
- Sass
- gulp



### Development

In development you can quickly get an environment running using Gulp by following these steps:

1. Clone this repo and install dependencies with `npm install` or `yarn install`

    > Requires [npm](https://nodejs.org/) or [yarn](https://yarnpkg.com) installed

1. Configure the `data/config.json`
1. Run `npm run start` or `yarn run start`. This will download dependencies, build and launch a development version of the Pixy Payment Page.
1. Files are served from `dist` folder



### Production

For a self-hosted production installation there is more flexibility, but these are the suggested steps:

1. Clone this repo and install dependencies with `npm install` or `yarn install`

    > Requires [npm](https://nodejs.org/) or [yarn](https://yarnpkg.com) installed
    
1. Configure the `data/config.json`
1. Run `npm run build` or `yarn run build`. This will download dependencies, build and launch a production version of the Pixy Payment Page.
1. Production ready files will be available in `dist` folder


### Project Structure

Following is a description of the project structure. Use `dist` as the output folder, it is created by running the `build` script in `package.json`. The project uses sass compiler for compiled css styles. scss files can be found in the `src` directory. There are 3 `config` files for the project, which are self explanatory. UI manipulation scripts are found in the `src\js\main.js` file.
 
```
|-- starter-templates
    |-- .DS_Store
    |-- README.md
    |-- Todo.md
    |-- gulpfile.js
    |-- package.json
    |-- assets
    |   |-- .DS_Store
    |-- src
        |-- .DS_Store
        |-- data
        |   |-- countries.json
        |   |-- states.json
        |-- fonts
        |   |-- .DS_Store
        |   |-- slick
        |       |-- slick.eot
        |       |-- slick.svg
        |       |-- slick.ttf
        |       |-- slick.woff
        |-- images
        |   |-- .DS_Store
        |   |-- favicon.png
        |   |-- icons
        |   |   |-- .DS_Store
        |   |   |-- email.svg
        |   |-- logo
        |   |-- slick
        |       |-- ajax-loader.gif
        |-- js
        |   |-- main.js
        |-- pages
        |   |-- .DS_Store
        |   |-- index.njk
        |-- scss
        |   |-- .DS_Store
        |   |-- main.scss
        |   |-- components
        |   |-- pages
        |   |-- utils
        |       |-- _icons.scss
        |       |-- _mixins.scss
        |       |-- _variables.scss
        |-- templates
            |-- macros.njk
            |-- includes
            |   |-- footer.njk
            |   |-- modals.njk
            |   |-- navbar.njk
            |-- layouts
            |   |-- default.njk
            |-- partials

```