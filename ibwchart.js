!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports.Ibwchart=t(require("React")):e.Ibwchart=t(e.React)}(this,function(e){return function(e){function t(i){if(r[i])return r[i].exports;var o=r[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";e.exports=r(1)},function(e,t,r){"use strict";var i=r(2)["default"];Object.defineProperty(t,"__esModule",{value:!0});var o=r(7),n=i(o);r(6),t["default"]=n["default"].createClass({displayName:"ibwchart",propTypes:{axex:n["default"].PropTypes.array.isRequired,axey:n["default"].PropTypes.array,items:n["default"].PropTypes.array,onHover:n["default"].PropTypes.func,x:n["default"].PropTypes.number,y:n["default"].PropTypes.number,width:n["default"].PropTypes.number,height:n["default"].PropTypes.number},getDefaultProps:function(){return{width:23,height:21,axey:[14,42],items:[],onHover:function(){}}},handleHover:function(e){var t=this.props.onHover;return function(r){t(e)}},renderAxes:function(){for(var e=this.props.axex,t=this.props.axey,r=this.stepY=2,i=t[1],o=[],a=(t[1]-t[0])/r,s=e[1]-e[0],p=this.stepX=(s-s%a)/a,l=e[0]+p,u=[];l<=e[1];)u.push(l),l+=p;for(;i>t[0];)o.push(i),i-=r;return n["default"].createElement("div",{className:"mzr-ibm-axes"},n["default"].createElement("div",{className:"mzr-ibm-axe-y","data-text":"ИМТ"},o.map(function(e,t){return n["default"].createElement("div",{key:t,className:"mzr-ibm-item-y"},n["default"].createElement("div",{className:"mzr-ibm-digit-y"},e))})),n["default"].createElement("div",{className:"mzr-ibm-axe-x","data-text":"Вес"},u.map(function(e,t){return n["default"].createElement("div",{key:t,className:"mzr-ibm-item-x"},n["default"].createElement("div",{className:"mzr-ibm-digit-x"},e))})))},renderItem:function(e){var t=this.props.axex,r=this.props.axey,i=this.props.width,o=this.props.height,a=(e.x-t[0])/this.stepX*i,s=(e.y-r[0])/this.stepY*o;return n["default"].createElement("div",{onMouseOver:this.handleHover(e.id),key:e.id,className:"mzr-ibm-item",style:{width:a,height:s,background:e.color}})},renderGraphs:function(){var e=this.props.items,t=this.props.axex,r=this.props.axey,i=this.props.width,o=this.props.height,a=Math.floor((t[1]-t[0])/this.stepX)*i,s=Math.floor((r[1]-r[0])/this.stepY)*o;return n["default"].createElement("div",{className:"mzr-ibm-graphs"},e.reverse().map(function(e){return this.renderItem(e)},this),this.renderLine(a,s),this.renderDot())},renderLine:function(e,t){return n["default"].createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mzr-ibm-line"},n["default"].createElement("path",{d:"M 0,"+t+" "+e+",0",style:{fill:"none",stroke:"#fff","stroke-width":2}}))},renderDot:function(){var e=this.props.axex,t=this.props.axey,r=this.props.x,i=this.props.y;if(!r||!i)return null;var o=Math.floor((r-e[0])/this.stepX)*this.props.width,a=Math.floor((i-t[0])/this.stepY)*this.props.height;return n["default"].createElement("div",{className:"mzr-ibm-dot",style:{left:o,bottom:a}})},render:function(){return n["default"].createElement("div",{className:"mzr-ibm"},this.renderAxes(),this.renderGraphs())}}),e.exports=t["default"]},function(e,t){"use strict";t["default"]=function(e){return e&&e.__esModule?e:{"default":e}},t.__esModule=!0},function(e,t,r){t=e.exports=r(4)(),t.push([e.id,".mzr-ibm{display:inline-block;font-family:Arial;position:relative;margin-top:20px;margin-right:20px;margin-left:10px}.mzr-ibm-axe-x{font-size:0;margin-left:17px}.mzr-ibm-axe-x:before{font-size:11px;position:absolute;right:-15px;bottom:7px;width:15px;height:1px;background:#000;text-indent:15px;content:attr(data-text);line-height:26px}.mzr-ibm-axe-x:after{position:absolute;right:-15px;bottom:4px;transform:rotate(45deg);width:6px;height:6px;content:''}.mzr-ibm-axe-x:after,.mzr-ibm-item-x{border-right:1px solid #000;border-top:1px solid #000}.mzr-ibm-item-x{display:inline-block;position:relative;width:22px;font-size:10px;height:7px}.mzr-ibm-item-x:before{position:absolute;left:50%;top:0;bottom:0;width:1px;background:#000;content:''}.mzr-ibm-digit-x{position:absolute;right:0;transform:translateX(50%);top:100%}.mzr-ibm-axe-y{font-size:0;width:20px}.mzr-ibm-axe-y:before{font-size:11px;position:absolute;top:-15px;left:17px;height:15px;width:1px;background:#000;text-indent:-28px;content:attr(data-text);line-height:5px}.mzr-ibm-axe-y:after{position:absolute;top:-15px;left:14px;transform:rotate(-45deg);width:6px;height:6px;content:''}.mzr-ibm-axe-y:after,.mzr-ibm-item-y{border-right:1px solid #000;border-top:1px solid #000}.mzr-ibm-item-y{display:block;position:relative;width:7px;margin-left:10px;height:20px;font-size:10px}.mzr-ibm-item-y:before{position:absolute;top:50%;right:0;left:0;height:1px;background:#000;content:''}.mzr-ibm-digit-y{position:absolute;top:0;transform:translateY(-50%);right:100%}.mzr-ibm-graphs{position:absolute;left:18px;top:0;right:0;bottom:8px;overflow:hidden}.mzr-ibm-item{position:absolute;left:0;bottom:0}.mzr-ibm-line{position:absolute;left:0;top:0;width:100%;height:100%}.mzr-ibm-dot{position:absolute;left:-100%;bottom:-100%;width:4px;height:4px;background:#000;transform:translate(-50%, 50%)}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var n=this[o][0];"number"==typeof n&&(i[n]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&i[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(e,t,r){function i(e,t){for(var r=0;r<e.length;r++){var i=e[r],o=f[i.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](i.parts[n]);for(;n<i.parts.length;n++)o.parts.push(s(i.parts[n],t))}else{for(var a=[],n=0;n<i.parts.length;n++)a.push(s(i.parts[n],t));f[i.id]={id:i.id,refs:1,parts:a}}}}function o(e){for(var t=[],r={},i=0;i<e.length;i++){var o=e[i],n=o[0],a=o[1],s=o[2],p=o[3],l={css:a,media:s,sourceMap:p};r[n]?r[n].parts.push(l):t.push(r[n]={id:n,parts:[l]})}return t}function n(){var e=document.createElement("style"),t=h();return e.type="text/css",t.appendChild(e),e}function a(){var e=document.createElement("link"),t=h();return e.rel="stylesheet",t.appendChild(e),e}function s(e,t){var r,i,o;if(t.singleton){var s=x++;r=c||(c=n()),i=p.bind(null,r,s,!1),o=p.bind(null,r,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=a(),i=u.bind(null,r),o=function(){r.parentNode.removeChild(r),r.href&&URL.revokeObjectURL(r.href)}):(r=n(),i=l.bind(null,r),o=function(){r.parentNode.removeChild(r)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function p(e,t,r,i){var o=r?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var n=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(n,a[t]):e.appendChild(n)}}function l(e,t){var r=t.css,i=t.media;t.sourceMap;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function u(e,t){var r=t.css,i=(t.media,t.sourceMap);i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),n=e.href;e.href=URL.createObjectURL(o),n&&URL.revokeObjectURL(n)}var f={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),c=null,x=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m());var r=o(e);return i(r,t),function(e){for(var n=[],a=0;a<r.length;a++){var s=r[a],p=f[s.id];p.refs--,n.push(p)}if(e){var l=o(e);i(l,t)}for(var a=0;a<n.length;a++){var p=n[a];if(0===p.refs){for(var u=0;u<p.parts.length;u++)p.parts[u]();delete f[p.id]}}}};var b=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var i=r(3);"string"==typeof i&&(i=[[e.id,i,""]]);r(5)(i,{});i.locals&&(e.exports=i.locals)},function(e,t){e.exports=React}])});