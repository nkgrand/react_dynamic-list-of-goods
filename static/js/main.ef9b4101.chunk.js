(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{42:function(t,n,e){},44:function(t,n,e){},46:function(t,n,e){},49:function(t,n,e){"use strict";e.r(n);var r=e(17),o=e.n(r),a=e(16),c=e(6),s=e(7),i=e(14),u=e(13),d=e(9),l=e.n(d),f=e(0),b=e.n(f),p=e(51),j=(e(42),e(43),e(44),e(11)),h=function(t){var n=t.goods;return Object(j.jsx)("ol",{className:"goods__list",children:n.map((function(t){return Object(j.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})},m=(e(46),function(){return Object(j.jsx)("div",{className:"loadContainer",children:Object(j.jsx)("h3",{className:"loadContainer__text",children:"Please, take a while..."})})});function x(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var g=function(){var t=Object(a.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return n=t.sent,t.abrupt("return",n.sort((function(t,n){return t.name.localeCompare(n.name)})).splice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(a.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return n=t.sent,t.abrupt("return",n.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(t){Object(i.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(c.a)(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(t=n.call.apply(n,[this].concat(o))).state={goods:[],loading:!1},t.loadGoods=function(){var n=Object(a.a)(l.a.mark((function n(e){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.setState({loading:!0}),n.next=4,e();case 4:r=n.sent,t.setState({goods:r,loading:!1}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),p.b.error({content:"An error occured when loading goods! Check internet connection",style:{fontSize:"18px",padding:"15px 10px"}});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),t}return Object(s.a)(e,[{key:"render",value:function(){var t=this,n=this.state,e=n.goods,r=n.loading;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Dynamic list of Goods"}),Object(j.jsxs)("div",{className:"btnContainer",children:[Object(j.jsx)("button",{className:"button",type:"button",onClick:function(){return t.loadGoods(x)},disabled:r,children:"Load All goods"}),Object(j.jsx)("button",{className:"button",type:"button",onClick:function(){return t.loadGoods(g)},disabled:r,children:"Load 5 first goods"}),Object(j.jsx)("button",{className:"button",type:"button",onClick:function(){return t.loadGoods(v)},disabled:r,children:"Load red goods"})]}),r?Object(j.jsx)(m,{}):Object(j.jsx)(h,{goods:e})]})}}]),e}(b.a.Component);o.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.ef9b4101.chunk.js.map