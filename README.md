# osbComponentBase

Angular JS (2.0) Component Library Base is an extension of [jhades awesome library example] (https://github.com/jhades/angular2-library-example) and just adds a few bells and whistles, such as SASS workflow and some new NPM scripts. I will be adding to this further by adding Jasmine/Karma tests as well as better documentation.

# Development
Clone the repository and run the following commands on the project root:
1. `npm install`
2. `npm link`

Build the component via:
1. `npm run build`

To test component locally:
1. `cd sandbox`
2. `npm install`
3. `npm link osb-component-test (or name of your component)`
4. `npm run build`
5. `npm start`

#Customisation
To customise this project to your own Component just ensure you update the following files:
- `package.json`
- `components.js`
- `components.d.ts`
As well as the following files within the sandbox folder: