webpackJsonp([0],{375:function(e,n,t){"use strict";function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:a,payload:e}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=arguments[1],t=f[n.type];return t?t(e,n):e}Object.defineProperty(n,"__esModule",{value:!0}),n.actions=n.doubleAsync=n.COUNTER_DOUBLE_ASYNC=n.COUNTER_INCREMENT=void 0;var o,c=t(378),l=function(e){return e&&e.__esModule?e:{default:e}}(c);n.increment=u,n.default=r;var a=n.COUNTER_INCREMENT="COUNTER_INCREMENT",i=n.COUNTER_DOUBLE_ASYNC="COUNTER_DOUBLE_ASYNC",d=n.doubleAsync=function(){return function(e,n){return new Promise(function(t){setTimeout(function(){e({type:i,payload:n().counter}),t()},200)})}},f=(n.actions={increment:u,doubleAsync:d},o={},(0,l.default)(o,a,function(e,n){return e+n.payload}),(0,l.default)(o,i,function(e,n){return 2*e}),o),s=0},376:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=t(97),r=t(375),o=t(377),c=function(e){return e&&e.__esModule?e:{default:e}}(o),l={increment:function(){return(0,r.increment)(1)},doubleAsync:r.doubleAsync},a=function(e){return{counter:e.counter}};n.default=(0,u.connect)(a,l)(c.default)},377:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.Counter=void 0;var r=t(5),o=u(r),c=t(7),l=u(c),a=n.Counter=function(e){var n=e.counter,t=e.increment,u=e.doubleAsync;return o.default.createElement("div",{style:{margin:"0 auto"}},o.default.createElement("h2",null,"Counter: ",n),o.default.createElement("button",{className:"btn btn-primary",onClick:t},"Increment")," ",o.default.createElement("button",{className:"btn btn-secondary",onClick:u},"Double (Async)"))};a.propTypes={counter:l.default.number.isRequired,increment:l.default.func.isRequired,doubleAsync:l.default.func.isRequired},n.default=a},378:function(e,n,t){"use strict";n.__esModule=!0;var u=t(174),r=function(e){return e&&e.__esModule?e:{default:e}}(u);n.default=function(e,n,t){return n in e?(0,r.default)(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}}});
//# sourceMappingURL=0.14eaaea13e8768e1a788.js.map