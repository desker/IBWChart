import React from 'react';
import './ibwchart.scss';


export default React.createClass({
  propTypes: {
    axex: React.PropTypes.array.isRequired,
    axey: React.PropTypes.array,
    items: React.PropTypes.array,
    onHover: React.PropTypes.func,
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      width: 23,
      height: 21,
      axey: [14, 42],
      items: [],
      onHover: function() {}
    };
  },

  handleHover: function(id) {
    var onHover = this.props.onHover;

    return function(event) {
      onHover(id);
    }
  },

  renderAxes: function() {
    var x = this.props.axex;
    var y = this.props.axey;
    var diffX = x[1] - x[0];
    var stepX = this.stepX = (diffX - (diffX % 28)) / 28;
    var valueX = x[0] + stepX;
    var valuesX = [];
    var stepY = this.stepY = 2;
    var valueY = y[1];
    var valuesY = [];

    while (valueX <= x[1]) {
      valuesX.push(valueX);
      valueX += stepX;
    }

    while (valueY > y[0]) {
      valuesY.push(valueY);
      valueY -= stepY;
    }

    return <div className="mzr-ibm-axes">
      <div className="mzr-ibm-axe-y">
        {valuesY.map(function(value, i) {
          return <div key={i} className="mzr-ibm-item-y">
            <div className="mzr-ibm-digit-y">
              {value}
            </div>
          </div>
        })}
      </div>
      <div className="mzr-ibm-axe-x">
        {valuesX.map(function(value, i) {
          return <div key={i} className="mzr-ibm-item-x">
            <div className="mzr-ibm-digit-x">
              {value}
            </div>
          </div>
        })}
      </div>
    </div>;
  },

  renderItem(item) {
    var x = this.props.axex;
    var y = this.props.axey;
    var width = this.props.width;
    var height = this.props.height;

    var itemWidth = Math.floor((item.x - x[0]) / this.stepX) * width;
    var itemHeight = Math.floor((item.y - y[0]) / this.stepY) * height;

    return <div
      onMouseOver={this.handleHover(item.id)}
      key={item.id}
      className="mzr-ibm-item" style={{
        width: itemWidth,
        height: itemHeight,
        background: item.color
      }}
    />;
  },

  renderGraphs() {
    var items = this.props.items;
    var x = this.props.axex;
    var y = this.props.axey;
    var width = this.props.width;
    var height = this.props.height;

    var fullWidth = Math.floor((x[1] - x[0]) / this.stepX) * width;
    var fullHeight = Math.floor((y[1] - y[0]) / this.stepY) * height;

    return <div className="mzr-ibm-graphs">
      {items.reverse().map(function(item) {
        return this.renderItem(item);
      }, this)}
      {this.renderLine(fullWidth, fullHeight)}
      {this.renderDot()}
    </div>
  },

  renderLine(width, height) {
    return <svg xmlns="http://www.w3.org/2000/svg" className="mzr-ibm-line">
      <path d={`M 0,${height} ${width},0`} style={{
        'fill': 'none',
        'stroke': '#fff',
        'stroke-width': 2
      }} />
    </svg>
  },

  renderDot() {
    var x = this.props.axex;
    var y = this.props.axey;
    var dotx = this.props.x;
    var doty = this.props.y;
    if (!dotx || !doty) {
      return null;
    }

    var left = Math.floor((dotx - x[0]) / this.stepX) * this.props.width;
    var bottom = Math.floor((doty - y[0]) / this.stepY) * this.props.height;

    return <div
      className="mzr-ibm-dot"
      style={{
        left: left,
        bottom: bottom
      }}
    />
  },

  render: function() {
    return <div className="mzr-ibm">
      {this.renderAxes()}
      {this.renderGraphs()}
    </div>;
  }
});
