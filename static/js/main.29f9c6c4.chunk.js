(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(63)},46:function(e,t,n){},47:function(e,t,n){},52:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),i=(n(46),n(47),n(19)),s=n(27),u=n(17),l=n(38),m=n(28),d=n(8),h=n(37),b=n(81),f=Object(b.a)(function(e){return{button:{margin:e.spacing(1,2)},h3:{margin:e.spacing(3)}}}),v=n(84),C=n(82),p=n(83),j=(n(52),function(e){var t=f();return r.a.createElement(v.a,Object.assign({style:{padding:50},variant:"contained",color:"default",className:t.button},e),e.text)}),O=function(e){var t=f();return r.a.createElement(C.a,{fixed:!0},r.a.createElement(p.a,{component:"h1",variant:"h3",className:t.h3},e.value),r.a.createElement(j,{id:"increment",onClick:e.increment,text:"Increment"}),e.ableToDec?r.a.createElement(j,{id:"decrement",onClick:e.decrement,text:"Decrement"}):r.a.createElement(j,{id:"decrement",text:"Decrement",disabled:!0}),r.a.createElement(j,{id:"reset",onClick:e.reset,text:"Reset"}))},k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).incrementCounter=n.incrementCounter.bind(Object(d.a)(n)),n.decrementCounter=n.decrementCounter.bind(Object(d.a)(n)),n.resetCounter=n.resetCounter.bind(Object(d.a)(n)),n.state={counter:0,ableToDecrement:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(O,{value:this.state.counter,increment:this.incrementCounter,decrement:this.decrementCounter,reset:this.resetCounter,ableToDec:this.state.ableToDecrement})}},{key:"componentDidUpdate",value:function(e,t,n){0===this.state.counter&&this.state.ableToDecrement&&this.setState(Object(i.a)({},this.state,{ableToDecrement:!1}))}},{key:"incrementCounter",value:function(){this.setState(Object(i.a)({},this.state,{counter:this.state.counter+1,ableToDecrement:!0}))}},{key:"decrementCounter",value:function(){this.state.ableToDecrement&&this.setState(Object(i.a)({},this.state,{counter:this.state.counter-1}))}},{key:"resetCounter",value:function(){this.setState(Object(i.a)({},this.state,{counter:0,ableToDecrement:!1}))}}]),t}(r.a.Component);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.29f9c6c4.chunk.js.map