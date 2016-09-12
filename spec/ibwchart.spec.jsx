import React from 'react/addons';
import Ibwchart from '../lib/ibwchart.jsx';

describe('Ibwchart', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <Ibwchart/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('ibwchart');
  });
});
