(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1774],{57838:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(97685),i=n(67294);function u(){var e=i.useReducer(function(e){return e+1},0);return(0,r.Z)(e,2)[1]}},24308:function(e,t,n){"use strict";n.d(t,{c4:function(){return u}});var r=n(4942),i=n(87462),u=["xxl","xl","lg","md","sm","xs"],c={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},s=new Map,o=-1,a={};t.ZP={matchHandlers:{},dispatch:function(e){return a=e,s.forEach(function(e){return e(a)}),s.size>=1},subscribe:function(e){return s.size||this.register(),o+=1,s.set(o,e),e(a),o},unsubscribe:function(e){s.delete(e),s.size||this.unregister()},unregister:function(){var e=this;Object.keys(c).forEach(function(t){var n=c[t],r=e.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)}),s.clear()},register:function(){var e=this;Object.keys(c).forEach(function(t){var n=c[t],u=function(n){var u=n.matches;e.dispatch((0,i.Z)((0,i.Z)({},a),(0,r.Z)({},t,u)))},s=window.matchMedia(n);s.addListener(u),e.matchHandlers[n]={mql:s,listener:u},u(s)})}}},25378:function(e,t,n){"use strict";var r=n(67294),i=n(57838),u=n(24308);t.Z=function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,r.useRef)({}),n=(0,i.Z)();return(0,r.useEffect)(function(){var r=u.ZP.subscribe(function(r){t.current=r,e&&n()});return function(){return u.ZP.unsubscribe(r)}},[]),t.current}},97183:function(e,t,n){"use strict";var r=n(2897),i=n(7293),u=r.ZP;u.Header=r.h4,u.Footer=r.$_,u.Content=r.VY,u.Sider=i.Z,t.Z=u},93645:function(e,t,n){"use strict";n.d(t,{u:function(){return i}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function i(e){return e?r[e]:r.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(19013),i=n(13882);function u(e,t){return(0,i.Z)(2,arguments),(0,r.Z)(e).getTime()-(0,r.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(59910),i=n(13882),u=n(93645);function c(e,t,n){(0,i.Z)(2,arguments);var c=(0,r.Z)(e,t)/1e3;return(0,u.u)(null==n?void 0:n.roundingMethod)(c)}},23426:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/logs",function(){return n(87905)}])},82536:function(e,t,n){"use strict";n.d(t,{o:function(){return f}});var r=n(85893);n(67294);var i=n(85818),u=n(20550),c=n(54398),s=n(53731),o=n(58091);let{Title:a}=i.Z;function l(e,t){let n="black";return"warning"===t.level?n="orange":"error"===t.level&&(n="red"),(0,r.jsx)(u.Z,{color:n,children:e})}function d(e){return(0,r.jsx)(s.Z,{children:e})}let f=e=>{let{logs:t,pageSize:n}=e;return(null==t?void 0:t.length)?(0,r.jsxs)("div",{className:"logs-section",children:[(0,r.jsx)(a,{children:"Logs"}),(0,r.jsx)(c.Z,{size:"middle",dataSource:t,columns:[{title:"Level",dataIndex:"level",key:"level",filters:[{text:"Info",value:"info"},{text:"Warning",value:"warning"},{text:"Error",value:"Error"}],onFilter:(e,t)=>0===t.level.indexOf(e),render:l},{title:"Timestamp",dataIndex:"time",key:"time",render:e=>{let t=new Date(e);return(0,o.Z)(t,"pp P")},sorter:(e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Message",dataIndex:"message",key:"message",render:d}],rowKey:e=>e.time,pagination:{pageSize:n||20}})]}):null}},87905:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(85893),i=n(67294),u=n(82536),c=n(64777),s=n(6960);function o(){let[e,t]=(0,i.useState)([]),n=async()=>{try{let e=await (0,c.rQ)(c.sG);t(e)}catch(e){console.log("==== error",e)}};return(0,i.useEffect)(()=>{let e=null;return setInterval(n,5e3),n(),e=setInterval(n,5e3),()=>{clearInterval(e)}},[]),(0,r.jsx)(u.o,{logs:e,pageSize:20})}o.getLayout=function(e){return(0,r.jsx)(s.l,{page:e})}},9008:function(e,t,n){e.exports=n(83121)},11163:function(e,t,n){e.exports=n(80880)}},function(e){e.O(0,[173,164,2744,9680,4931,5402,2231,5818,492,7524,9915,4041,3698,3013,4398,8091,9863,180,6960,9774,2888,179],function(){return e(e.s=23426)}),_N_E=e.O()}]);