(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(537)}])},6691:function(e,t){"use strict";var r,n,o,l;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return i},ACTION_PREFETCH:function(){return f},ACTION_REFRESH:function(){return u},ACTION_RESTORE:function(){return a},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return c},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return p}});let u="refresh",i="navigate",a="restore",c="server-patch",f="prefetch",s="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=r||(r={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(l=n||(n={})).fresh="fresh",l.reusable="reusable",l.expired="expired",l.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return O}});let n=r(8754),o=r(5893),l=n._(r(7294)),u=r(1401),i=r(2045),a=r(7420),c=r(7201),f=r(1443),s=r(9953),d=r(5320),p=r(2905),h=r(4318),v=r(953),b=r(6691),y=new Set;function g(e,t,r,n,o,l){if(l||(0,i.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(y.has(o))return;y.add(o)}Promise.resolve(l?e.prefetch(t,o):e.prefetch(t,r,n)).catch(e=>{})}}function m(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let O=l.default.forwardRef(function(e,t){let r,n;let{href:a,as:y,children:O,prefetch:j=null,passHref:_,replace:x,shallow:w,scroll:P,locale:E,onClick:C,onMouseEnter:N,onTouchStart:M,legacyBehavior:k=!1,...T}=e;r=O,k&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let R=l.default.useContext(s.RouterContext),S=l.default.useContext(d.AppRouterContext),A=null!=R?R:S,I=!R,L=!1!==j,H=null===j?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:z,as:K}=l.default.useMemo(()=>{if(!R){let e=m(a);return{href:e,as:y?m(y):e}}let[e,t]=(0,u.resolveHref)(R,a,!0);return{href:e,as:y?(0,u.resolveHref)(R,y):t||e}},[R,a,y]),U=l.default.useRef(z),D=l.default.useRef(K);k&&(n=l.default.Children.only(r));let F=k?n&&"object"==typeof n&&n.ref:t,[B,q,V]=(0,p.useIntersection)({rootMargin:"200px"}),G=l.default.useCallback(e=>{(D.current!==K||U.current!==z)&&(V(),D.current=K,U.current=z),B(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[K,F,z,V,B]);l.default.useEffect(()=>{A&&q&&L&&g(A,z,K,{locale:E},{kind:H},I)},[K,z,q,E,L,null==R?void 0:R.locale,A,I,H]);let X={ref:G,onClick(e){k||"function"!=typeof C||C(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,n,o,u,a,c,f){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:u,locale:c,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};f?l.default.startTransition(d):d()}(e,A,z,K,x,w,P,E,I)},onMouseEnter(e){k||"function"!=typeof N||N(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&(L||!I)&&g(A,z,K,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:H},I)},onTouchStart:function(e){k||"function"!=typeof M||M(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&(L||!I)&&g(A,z,K,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:H},I)}};if((0,c.isAbsoluteUrl)(K))X.href=K;else if(!k||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,h.getDomainLocale)(K,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);X.href=t||(0,v.addBasePath)((0,f.addLocale)(K,e,null==R?void 0:R.defaultLocale))}return k?l.default.cloneElement(n,X):(0,o.jsx)("a",{...T,...X,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(7294),o=r(3815),l="function"==typeof IntersectionObserver,u=new Map,i=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,c=a||!l,[f,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(l){if(c||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},i.push(r),u.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!f){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,r,t,f,d.current]),[p,f,(0,n.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},537:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893);r(1784);var o=r(9008),l=r.n(o),u=r(1664),i=r.n(u),a=r(7294),c=r(5955);function f(e){return(0,c.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"},child:[]}]})(e)}var s=r(2088);function d(e){let{Component:t,pageProps:r}=e,[o,u]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{u(window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches)},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l(),{children:(0,n.jsx)("link",{rel:"icon",href:o?"/svg/github_w.svg":"/svg/github.svg"})}),(0,n.jsxs)("div",{className:"drawer",children:[(0,n.jsx)("input",{id:"my-drawer",type:"checkbox",className:"drawer-toggle"}),(0,n.jsxs)("div",{className:"drawer-content flex flex-col min-h-screen h-max",children:[(0,n.jsx)("header",{className:"fixed left-0 top-0 w-full py-2",children:(0,n.jsxs)("div",{className:"max-w-5xl mx-auto flex gap-1",children:[(0,n.jsx)(i(),{href:"/",className:"btn btn-sm btn-square",children:(0,n.jsx)(s.bH4,{size:"20px"})}),(0,n.jsx)(i(),{href:"https://github.com/GrangbelrLurain",target:"_blank",className:"btn btn-sm btn-square",children:(0,n.jsx)(f,{size:"20px"})})]})}),(0,n.jsx)("main",{className:"grow",children:(0,n.jsx)(t,{...r})}),(0,n.jsx)("footer",{className:"footer shrink-0"})]})]})]})}},1784:function(){},9008:function(e,t,r){e.exports=r(7828)},1664:function(e,t,r){e.exports=r(9577)},5955:function(e,t,r){"use strict";r.d(t,{w_:function(){return f}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),u=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function f(e){return t=>n.createElement(s,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function s(e){var t=t=>{var r,{attr:o,size:l,title:a}=e,f=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,u),s=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,f,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==l?n.createElement(l.Consumer,null,e=>t(e)):t(o)}},2088:function(e,t,r){"use strict";r.d(t,{KYK:function(){return l},bH4:function(){return o}});var n=r(5955);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"},child:[]}]})(e)}function l(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"},child:[]}]})(e)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(9090)}),_N_E=e.O()}]);