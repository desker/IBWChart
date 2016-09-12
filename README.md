# IBWChart

Get the AMD module located at `ibwchart.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'Ibwchart': 'ibwchart'
  }
});

require(['react', 'Ibwchart'], function(React, Ibwchart) {

  React.render(React.createElement(Ibwchart), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
