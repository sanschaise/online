## Build

Install NPM dependencies

`yarn`

Make sure Gulp is installed

`npm install --global gulp`

Watch for file changes

`gulp`

Remember to bust the asset cache when deploying new changes to production by finding and replacing
all `?v=9` and increasing the number. The new query string will force the user's browser to re-download
the new assets.

`<link rel="stylesheet" href="style.css?v=9" type="text/css">`

`<script src="assets/javascripts/dist/application.min.js?v=9"></script>`
