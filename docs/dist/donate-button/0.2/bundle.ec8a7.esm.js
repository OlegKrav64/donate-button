!function(e){function n(n){for(var t,o,_=n[0],u=n[1],l=0,c=[];l<_.length;l++)o=_[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&c.push(r[o][0]),r[o]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);for(i&&i(n);c.length;)c.shift()()}function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={},r={0:0};t.e=function(e){var n=[],o=r[e];if(0!==o)if(o)n.push(o[2]);else{var _=new Promise((function(n,t){o=r[e]=[n,t]}));n.push(o[2]=_);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.src=function(e){return t.p+""+({}[e]||e)+".chunk."+{1:"1b409"}[e]+".esm.js"}(e);var i=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(c);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),_=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+_+")",i.name="ChunkLoadError",i.type=o,i.request=_,t[1](i)}r[e]=void 0}};var c=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},t.m=e,t.c=o,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="https://assets.every.org/dist/donate-button/0.2/",t.oe=function(e){throw console.error(e),e};var _=window.webpackJsonp=window.webpackJsonp||[],u=_.push.bind(_);_.push=n,_=_.slice();for(var l=0;l<_.length;l++)n(_[l]);var i=u;t(t.s="riXW")}({"/hs+":function(e,n,t){"use strict";function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}t.r(n);var _=t("NMMh"),u=t("uOFG"),l=t("QLgr");var i=()=>{const e=localStorage.getItem("every-month-widget-mode"),n=e&&Object.values(l.a).includes(e)?e:Math.random()>.5?l.a.SINGLE:l.a.SPLIT;return e||localStorage.setItem("every-month-widget-mode",n),{mode:n}};let c;const s=()=>{const e=document.querySelector("body"),n=(()=>{const e=document.querySelector("body");return c||(c=null!=e&&e.style.overflow?e.style.overflow:"unset"),c})();e&&(e.style.overflow=n)};var a=({options:e={},hide:n})=>{const[r,c]=Object(u.e)(void 0);if(Object(u.b)(()=>{e.show&&!r&&t.e(1).then(t.bind(null,"fBbg")).then(e=>{c(()=>e.default)}).catch(e=>{console.log("Could not lazy load Every Month component",e)})},[e.show,r]),!r)return null;if(s(),!e.show)return null;if((()=>{const e=document.querySelector("body");e&&(e.style.overflow="hidden")})(),e.show&&!r)return Object(_.h)(React.Fragment,null,"Loading...");const a=(f=o({},l.b,e)).monthly.levels.every(e=>Boolean(e.img))&&f.oneTime.img?o({},l.b,i(),e):o({},l.b,e,{mode:l.a.SINGLE});var f;return Object(_.h)(r,{options:a,hide:n})};const f={currency:"USD"},p={};let d,h={};const m=e=>{r(p,e),g()},v=()=>{m({show:!0})},y=()=>{m({show:!1})},g=()=>{d||(()=>{const e=document.createElement("div");document.body.append(e),d=document.createElement("div"),e.attachShadow({mode:"open"}).append(d)})();const e=r({},f,p,h);Object(_.render)(Object(_.h)(a,{options:e,hide:y}),d)};(()=>{const e=document.createElement("style");e.innerHTML='\n    @font-face {\n      font-family: "Basis Grotesque Pro";\n      src: local("Basis Grotesque Pro"), local("Basis Grotesque Pro"),\n        url(https://assets.every.org/every-month/BasisGrotesque-Regular-Pro.woff2) format("woff2");\n      font-weight: 400;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: "Basis Grotesque Pro";\n      src: local("Basis Grotesque Pro"), local("Basis Grotesque Pro"),\n        url(https://assets.every.org/every-month/BasisGrotesque-Bold-Pro.woff2) format("woff2");\n      font-weight: bold;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: "Basis Grotesque Pro";\n      src: local("Basis Grotesque Pro"), local("Basis Grotesque Pro"),\n        url(https://assets.every.org/every-month/BasisGrotesque-Medium-Pro.woff2) format("woff2");\n      font-weight: 500;\n      font-style: normal;\n    }\n    ',document.head.append(e)})(),window.everyMonthWidget={setOptions:m,show:v,showOnClick:(e,n)=>{const t=document.querySelector(e);t&&t.addEventListener("click",()=>{h=r({},n),v()})}}},NMMh:function(e,n,t){"use strict";function o(e,n){for(var t in n)e[t]=n[t];return e}function r(e){var n=e.parentNode;n&&n.removeChild(e)}function _(e,n,t){var o,r,_,l=arguments,i={};for(_ in n)"key"==_?o=n[_]:"ref"==_?r=n[_]:i[_]=n[_];if(arguments.length>3)for(t=[t],_=3;_<arguments.length;_++)t.push(l[_]);if(null!=t&&(i.children=t),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===i[_]&&(i[_]=e.defaultProps[_]);return u(e,i,o,r,null)}function u(e,n,t,o,r){var _={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++H.__v:r};return null!=H.vnode&&H.vnode(_),_}function l(){return{current:null}}function i(e){return e.children}function c(e,n){this.props=e,this.context=n}function s(e,n){if(null==n)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?s(e):null}function a(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return a(e)}}function f(e){(!e.__d&&(e.__d=!0)&&j.push(e)&&!p.__r++||A!==H.debounceRendering)&&((A=H.debounceRendering)||q)(p)}function p(){for(var e;p.__r=j.length;)e=j.sort((function(e,n){return e.__v.__b-n.__v.__b})),j=[],e.some((function(e){var n,t,r,_,u,l;e.__d&&(u=(_=(n=e).__v).__e,(l=n.__P)&&(t=[],(r=o({},_)).__v=_.__v+1,w(l,_,r,n.__n,void 0!==l.ownerSVGElement,null!=_.__h?[u]:null,t,null==u?s(_):u,_.__h),P(t,_),_.__e!=u&&a(_)))}))}function d(e,n,t,o,r,_,l,c,a,f){var p,d,m,y,g,b,k,P=o&&o.__k||N,S=P.length;for(t.__k=[],p=0;p<n.length;p++)if(null!=(y=t.__k[p]=null==(y=n[p])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y?u(null,y,null,null,y):Array.isArray(y)?u(i,{children:y},null,null,null):y.__b>0?u(y.type,y.props,y.key,null,y.__v):y)){if(y.__=t,y.__b=t.__b+1,null===(m=P[p])||m&&y.key==m.key&&y.type===m.type)P[p]=void 0;else for(d=0;d<S;d++){if((m=P[d])&&y.key==m.key&&y.type===m.type){P[d]=void 0;break}m=null}w(e,y,m=m||G,r,_,l,c,a,f),g=y.__e,(d=y.ref)&&m.ref!=d&&(k||(k=[]),m.ref&&k.push(m.ref,null,y),k.push(d,y.__c||g,y)),null!=g?(null==b&&(b=g),"function"==typeof y.type&&null!=y.__k&&y.__k===m.__k?y.__d=a=h(y,a,e):a=v(e,y,m,P,g,a),f||"option"!==t.type?"function"==typeof t.type&&(t.__d=a):e.value=""):a&&m.__e==a&&a.parentNode!=e&&(a=s(m))}for(t.__e=b,p=S;p--;)null!=P[p]&&("function"==typeof t.type&&null!=P[p].__e&&P[p].__e==t.__d&&(t.__d=s(o,p+1)),C(P[p],P[p]));if(k)for(p=0;p<k.length;p++)E(k[p],k[++p],k[++p])}function h(e,n,t){var o,r;for(o=0;o<e.__k.length;o++)(r=e.__k[o])&&(r.__=e,n="function"==typeof r.type?h(r,n,t):v(t,r,r,e.__k,r.__e,n));return n}function m(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){m(e,n)})):n.push(e)),n}function v(e,n,t,o,r,_){var u,l,i;if(void 0!==n.__d)u=n.__d,n.__d=void 0;else if(null==t||r!=_||null==r.parentNode)e:if(null==_||_.parentNode!==e)e.appendChild(r),u=null;else{for(l=_,i=0;(l=l.nextSibling)&&i<o.length;i+=2)if(l==r)break e;e.insertBefore(r,_),u=_}return void 0!==u?u:r.nextSibling}function y(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||F.test(n)?t:t+"px"}function g(e,n,t,o,r){var _;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||y(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||y(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])_=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+_]=t,t?o||e.addEventListener(n,_?k:b,_):e.removeEventListener(n,_?k:b,_);else if("dangerouslySetInnerHTML"!==n){if(r)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function b(e){this.l[e.type+!1](H.event?H.event(e):e)}function k(e){this.l[e.type+!0](H.event?H.event(e):e)}function w(e,n,t,r,_,u,l,s,a){var f,p,h,m,v,y,g,b,k,w,P,E=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(a=t.__h,s=n.__e=t.__e,n.__h=null,u=[s]),(f=H.__b)&&f(n);try{e:if("function"==typeof E){if(b=n.props,k=(f=E.contextType)&&r[f.__c],w=f?k?k.props.value:f.__:r,t.__c?g=(p=n.__c=t.__c).__=p.__E:("prototype"in E&&E.prototype.render?n.__c=p=new E(b,w):(n.__c=p=new c(b,w),p.constructor=E,p.render=O),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=w,p.__n=r,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=E.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=o({},p.__s)),o(p.__s,E.getDerivedStateFromProps(b,p.__s))),m=p.props,v=p.state,h)null==E.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==E.getDerivedStateFromProps&&b!==m&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,w),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,w)||n.__v===t.__v){p.props=b,p.state=p.__s,n.__v!==t.__v&&(p.__d=!1),p.__v=n,n.__e=t.__e,n.__k=t.__k,p.__h.length&&l.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,w),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(m,v,y)}))}p.context=w,p.props=b,p.state=p.__s,(f=H.__r)&&f(n),p.__d=!1,p.__v=n,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(r=o(o({},r),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(m,v)),P=null!=f&&f.type===i&&null==f.key?f.props.children:f,d(e,Array.isArray(P)?P:[P],n,t,r,_,u,l,s,a),p.base=n.__e,n.__h=null,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=S(t.__e,n,t,r,_,u,l,a);(f=H.diffed)&&f(n)}catch(e){n.__v=null,(a||null!=u)&&(n.__e=s,n.__h=!!a,u[u.indexOf(s)]=null),H.__e(e,n,t)}}function P(e,n){H.__c&&H.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){H.__e(e,n.__v)}}))}function S(e,n,t,o,_,u,l,i){var c,s,a,f,p=t.props,h=n.props,m=n.type,v=0;if("svg"===m&&(_=!0),null!=u)for(;v<u.length;v++)if((c=u[v])&&(c===e||(m?c.localName==m:3==c.nodeType))){e=c,u[v]=null;break}if(null==e){if(null===m)return document.createTextNode(h);e=_?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,h.is&&h),u=null,i=!1}if(null===m)p===h||i&&e.data===h||(e.data=h);else{if(u=u&&N.slice.call(e.childNodes),s=(p=t.props||G).dangerouslySetInnerHTML,a=h.dangerouslySetInnerHTML,!i){if(null!=u)for(p={},f=0;f<e.attributes.length;f++)p[e.attributes[f].name]=e.attributes[f].value;(a||s)&&(a&&(s&&a.__html==s.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(function(e,n,t,o,r){var _;for(_ in t)"children"===_||"key"===_||_ in n||g(e,_,null,t[_],o);for(_ in n)r&&"function"!=typeof n[_]||"children"===_||"key"===_||"value"===_||"checked"===_||t[_]===n[_]||g(e,_,n[_],t[_],o)}(e,h,p,_,i),a)n.__k=[];else if(v=n.props.children,d(e,Array.isArray(v)?v:[v],n,t,o,_&&"foreignObject"!==m,u,l,e.firstChild,i),null!=u)for(v=u.length;v--;)null!=u[v]&&r(u[v]);i||("value"in h&&void 0!==(v=h.value)&&(v!==e.value||"progress"===m&&!v)&&g(e,"value",v,p.value,!1),"checked"in h&&void 0!==(v=h.checked)&&v!==e.checked&&g(e,"checked",v,p.checked,!1))}return e}function E(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){H.__e(e,t)}}function C(e,n,t){var o,_,u;if(H.unmount&&H.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||E(o,null,n)),t||"function"==typeof e.type||(t=null!=(_=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){H.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(u=0;u<o.length;u++)o[u]&&C(o[u],n,t);null!=_&&r(_)}function O(e,n,t){return this.constructor(e,t)}function T(e,n,t){var o,r,u;H.__&&H.__(e,n),r=(o="function"==typeof t)?null:t&&t.__k||n.__k,u=[],w(n,e=(!o&&t||n).__k=_(i,null,[e]),r||G,G,void 0!==n.ownerSVGElement,!o&&t?[t]:r?null:n.firstChild?N.slice.call(n.childNodes):null,u,!o&&t?t:r?r.__e:n.firstChild,o),P(u,e)}function x(e,n){T(e,n,x)}function M(e,n,t){var r,_,l,i=arguments,c=o({},e.props);for(l in n)"key"==l?r=n[l]:"ref"==l?_=n[l]:c[l]=n[l];if(arguments.length>3)for(t=[t],l=3;l<arguments.length;l++)t.push(i[l]);return null!=t&&(c.children=t),u(e.type,c,r||e.key,_||e.ref,null)}function L(e,n){var t={__c:n="__cC"+B++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,o;return this.getChildContext||(t=[],(o={})[n]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(f)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}t.r(n),t.d(n,"render",(function(){return T})),t.d(n,"hydrate",(function(){return x})),t.d(n,"createElement",(function(){return _})),t.d(n,"h",(function(){return _})),t.d(n,"Fragment",(function(){return i})),t.d(n,"createRef",(function(){return l})),t.d(n,"isValidElement",(function(){return D})),t.d(n,"Component",(function(){return c})),t.d(n,"cloneElement",(function(){return M})),t.d(n,"createContext",(function(){return L})),t.d(n,"toChildArray",(function(){return m})),t.d(n,"options",(function(){return H}));var H,D,j,q,A,B,G={},N=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;H={__e:function(e,n){for(var t,o,r;n=n.__;)if((t=n.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(e)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),r=t.__d),r)return t.__E=t}catch(n){e=n}throw e},__v:0},D=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof e&&(e=e(o({},t),this.props)),e&&o(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),f(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},c.prototype.render=i,j=[],q="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,B=0},QLgr:function(e,n,t){"use strict";let o;t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return r})),function(e){e.SINGLE="SINGLE",e.SPLIT="SPLIT"}(o||(o={}));const r={show:!1,language:"en",mode:o.SPLIT,onSubmit:{charity:"your-foundation",params:{share_info:1,no_exit:1}},currency:"USD",monthly:{levels:[{amount:"25"},{amount:"50",default:!0},{amount:"100"},{amount:"200"},{amount:"custom"}]},oneTime:{levels:[10,20,30,50,100,200],allowCustom:!0,bgColor:"#BCD9DD"},i18n:{en:{company:{logo:"https://assets.every.org/every-month/assets/logo.svg",name:"Your Foundation",location:"Your Foundation's Location"},monthly:{logo:{header:"Monthly donation",text:"on <link>every.org</link>",link:"https://every.org"},header:"Become a regular supporter",info:"Monthly gifts help us focus on our mission and long-term impact",levels:[{amount:"5"},{amount:"10"},{amount:"20"},{amount:"50"},{amount:"100"},{amount:"200"}],custom:{label:"Custom",placeholder:"Enter amount"},button:"Donate {{amount}} Every Month",switch:"Or make a <action>One Time Donation</action>"},oneTime:{logo:{header:"One time donation",text:"on <link>every.org</link>",link:"https://every.org"},name:"One time donation",header:"Help us make a difference",info:"Thank you for your support!",custom:{placeholder:"Enter custom amount"},button:"Donate {{amount}}",switch:"Or make a <action>Monthly donation</action>"},footer:"You will be redirected to a secure page on Every.org to complete your donation."}}}},riXW:function(e,n,t){"use strict";t.r(n);var o=t("NMMh");const{h:r,render:_,hydrate:u}=o,l=e=>e&&e.default?e.default:e;if("function"==typeof l(t("/hs+"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let n=l(t("/hs+")),o={};const u=document.querySelector('[type="__PREACT_CLI_DATA__"]');u&&(o=JSON.parse(decodeURI(u.innerHTML)).preRenderData||o);o.url&&(i=o.url);var i;e=_(r(n,{CLI_DATA:{preRenderData:o}}),document.body,e)})()}},uOFG:function(e,n,t){"use strict";function o(e,n){y.options.__h&&y.options.__h(m,e,g||n),g=0;var t=m.__H||(m.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function r(e){return g=1,function(e,n,t){var r=o(h++,2);return r.t=e,r.__c||(r.__=[t?t(n):d(void 0,n),function(e){var n=r.t(r.__[0],e);r.__[0]!==n&&(r.__=[n,r.__[1]],r.__c.setState({}))}],r.__c=m),r.__}(d,e)}function _(e,n){var t=o(h++,3);!y.options.__s&&p(t.__H,n)&&(t.__=e,t.__H=n,m.__H.__h.push(t))}function u(e,n){var t=o(h++,4);!y.options.__s&&p(t.__H,n)&&(t.__=e,t.__H=n,m.__h.push(t))}function l(e){return g=5,i((function(){return{current:e}}),[])}function i(e,n){var t=o(h++,7);return p(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function c(e){var n=m.context[e.__c],t=o(h++,9);return t.__c=e,n?(null==t.__&&(t.__=!0,n.sub(m)),n.props.value):e.__}function s(){b.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(a),e.__H.__h.forEach(f),e.__H.__h=[]}catch(n){e.__H.__h=[],y.options.__e(n,e.__v)}})),b=[]}function a(e){var n=m;"function"==typeof e.__c&&e.__c(),m=n}function f(e){var n=m;e.__c=e.__(),m=n}function p(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function d(e,n){return"function"==typeof n?n(e):n}t.d(n,"e",(function(){return r})),t.d(n,"b",(function(){return _})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return l})),t.d(n,"a",(function(){return c}));var h,m,v,y=t("NMMh"),g=0,b=[],k=y.options.__b,w=y.options.__r,P=y.options.diffed,S=y.options.__c,E=y.options.unmount;y.options.__b=function(e){m=null,k&&k(e)},y.options.__r=function(e){w&&w(e),h=0;var n=(m=e.__c).__H;n&&(n.__h.forEach(a),n.__h.forEach(f),n.__h=[])},y.options.diffed=function(e){P&&P(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==b.push(n)&&v===y.options.requestAnimationFrame||((v=y.options.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(o),C&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,100);C&&(n=requestAnimationFrame(t))})(s)),m=void 0},y.options.__c=function(e,n){n.some((function(e){try{e.__h.forEach(a),e.__h=e.__h.filter((function(e){return!e.__||f(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],y.options.__e(t,e.__v)}})),S&&S(e,n)},y.options.unmount=function(e){E&&E(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(a)}catch(e){y.options.__e(e,n.__v)}};var C="function"==typeof requestAnimationFrame}});
//# sourceMappingURL=bundle.ec8a7.esm.js.map