!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://assets.every.org/dist/donate-button/0.3/",t(t.s="riXW")}({"/hs+":function(e,t,n){"use strict";function r(...e){console.info("Every.org Donate Button:",...e)}function o(e){try{const t=new URL(e);if(!["www.every.org","every.org"].includes(t.host))return{errorType:h.BAD_DOMAIN};const n=t.pathname.split("/").filter(Boolean);if(n.length<2||"donate"!==n[1])return{errorType:h.NOT_DONATE_ROUTE};return{nonprofitSlug:n[0],crypto:"crypto"===n[2]}}catch(e){return{errorType:h.OTHER,error:e}}}n.r(t);var l=n("NMMh"),i=n("5zHJ"),u=n.n(i);var _=function({nonprofitSlug:e,crypto:t}){return`${`https://www.every.org/${e}/donate${t?"/crypto":""}`}?${Object.entries({utm_campaign:"donate-button",utm_source:e,utm_medium:"donate-button-0.3",no_exit:1}).filter(([e,t])=>Boolean(t)).map(e=>e.map(e=>encodeURIComponent(e)).join("=")).join("&")}`};u.a.prefix("edoBtn-");const s=u()({display:"flex",alignItems:"center",width:"max-content",border:"none",outline:"none",fontFamily:"'Basis Grotesque Pro', -apple-system, BlinkMacSystemFont,\n\t\t'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Roboto,\n\t\tsans-serif",fontWeight:500,lineHeight:1,cursor:"pointer",textDecoration:"none",backfaceVisibility:"hidden",transition:"background-color 0.25s",padding:"0.75rem 1.25rem",color:"#fff",backgroundColor:"#00a380",borderRadius:"100px",fontSize:"1rem","&:hover":{backgroundColor:"#2F806D"}}),c=u()({width:"1rem",height:"1rem",fill:"#fff",marginRight:"0.5rem"}),f=u()({transform:"translateY(0.08em)"});var a=Object(l.h)("path",{d:"M48.3746 20.9558C48.3746 9.03877 38.4374 0 25.6754 0C11.4001 0 0 12.0685 0 27.0153C0 43.1235 12.8125 56 30.0639 56C47.3153 56 62.7508 42.3156 63.9614 24.3895H56.0924C54.6295 37.8215 43.2799 48.1226 30.0639 48.1226C17.3523 48.1226 7.91952 38.7809 7.91952 27.0153C7.91952 16.4112 15.7886 7.87737 25.6754 7.87737C33.948 7.87737 40.4551 13.5329 40.4551 20.9558C40.4551 27.1163 36.0161 32.2669 30.1143 32.2669V40.1443C40.556 40.1443 48.3746 31.4085 48.3746 20.9558Z"});var d=e=>{let{label:t,withLogo:n=!0,textColor:r,bgColor:o,borderRadius:i,fontSize:u,padding:d,className:p,onClick:h,target:y="_blank"}=e,m=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(n=l[r])>=0||(o[n]=e[n]);return o}(e,["label","withLogo","textColor","bgColor","borderRadius","fontSize","padding","className","onClick","target"]);const v=_(m);return Object(l.h)("a",{href:v,style:{background:o,color:r,borderRadius:i,fontSize:u,padding:d},className:[s,p].filter(Boolean).join(" "),target:y,onClick:h?e=>{e.preventDefault(),h()}:void 0},n&&Object(l.h)("svg",{className:c,style:{color:r,height:u,width:u},width:"64",height:"56",viewBox:"0 0 64 56",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a),Object(l.h)("span",{className:f},t||"Donate"+(m.crypto?" Crypto":"")))};const p=e=>{let{element:t,selector:n}=e,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(n=l[r])>=0||(o[n]=e[n]);return o}(e,["element","selector"]);t||n||r("createButton():","must provide element or selector");const i=t||n&&document.querySelector(n);if(!i)return;const u=Object(l.h)(d,o);Object(l.render)(u,i)};var h;t.default=p;(()=>{const e=document.createElement("style");e.innerHTML='\n    @font-face {\n      font-family: "Basis Grotesque Pro";\n      src: local("Basis Grotesque Pro"), local("Basis Grotesque Pro"),\n        url(https://assets.every.org/every-month/BasisGrotesque-Regular-Pro.woff2) format("woff2");\n      font-weight: 400;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: "Basis Grotesque Pro";\n      src: local("Basis Grotesque Pro"), local("Basis Grotesque Pro"),\n        url(https://assets.every.org/every-month/BasisGrotesque-Bold-Pro.woff2) format("woff2");\n      font-weight: bold;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: "Basis Grotesque Pro";\n      src: local("Basis Grotesque Pro"), local("Basis Grotesque Pro"),\n        url(https://assets.every.org/every-month/BasisGrotesque-Medium-Pro.woff2) format("woff2");\n      font-weight: 500;\n      font-style: normal;\n      font-display: swap;\n    }\n    ',document.head.append(e)})(),function(e){e.BAD_DOMAIN="BAD_DOMAIN",e.NOT_DONATE_ROUTE="NOT_DONATE_ROUTE",e.OTHER="OTHER"}(h||(h={}));window.everyDotOrgDonateButton={createButton:p,initButtons:function(){for(const e of document.querySelectorAll(".edo-donate-btn:not([data-edo-init])")){const t=e.querySelector("a");if(!t){r("no link in container",e);continue}const n=t.getAttribute("href");if(!n){r("link lacks href",t);continue}const i=o(n);if("errorType"in i){r("could not extract options from link",{buttonLink:t,errorData:i});continue}const u=Object(l.h)(d,i);Object(l.render)(u,e,t),e.setAttribute("data-edo-init","")}}}},"5zHJ":function(e){"use strict";var t={},n="x",r=[],o=function(e){return r.push(e)},l=function(e,t){return t?t+"{"+e+"}":e},i=function(e,t,n){return"."+e+"{"+(t.replace(/[A-Z]|^ms/g,"-$&").toLowerCase()+":")+n+"}"},u=function(e){return e.replace(/&/g,"")},_=function e(_){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments[2];return Object.keys(_).map((function(f){var a=_[f];if(null===a)return"";if("object"==typeof a){var d=/^@/.test(f)?f:null;return e(a,d?s:s+f,d||c)}var p=f+a+s+c;if(t[p])return t[p];var h=n+r.length.toString(36);return o(l(i(h+u(s),f,a),c)),t[p]=h,h})).join(" ")};if(e.exports=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return _(e)})).join(" ").trim()},e.exports.css=function(){return r.sort().join("")},e.exports.reset=function(){for(t={};r.length;)r.pop()},e.exports.prefix=function(e){return n=e},"undefined"!=typeof document){var s=document.head.appendChild(document.createElement("style")).sheet;o=function(e){r.push(e),s.insertRule(e,s.cssRules.length)}}},NMMh:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function l(e,t,n){var r,o,l,u=arguments,_={};for(l in t)"key"==l?r=t[l]:"ref"==l?o=t[l]:_[l]=t[l];if(arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(u[l]);if(null!=n&&(_.children=n),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===_[l]&&(_[l]=e.defaultProps[l]);return i(e,_,r,o,null)}function i(e,t,n,r,o){var l={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++E.__v:o};return null!=E.vnode&&E.vnode(l),l}function u(){return{current:null}}function _(e){return e.children}function s(e,t){this.props=e,this.context=t}function c(e,t){if(null==t)return e.__?c(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?c(e):null}function f(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return f(e)}}function a(e){(!e.__d&&(e.__d=!0)&&j.push(e)&&!d.__r++||R!==E.debounceRendering)&&((R=E.debounceRendering)||M)(d)}function d(){for(var e;d.__r=j.length;)e=j.sort((function(e,t){return e.__v.__b-t.__v.__b})),j=[],e.some((function(e){var t,n,o,l,i,u;e.__d&&(i=(l=(t=e).__v).__e,(u=t.__P)&&(n=[],(o=r({},l)).__v=l.__v+1,C(u,l,o,t.__n,void 0!==u.ownerSVGElement,null!=l.__h?[i]:null,n,null==i?c(l):i,l.__h),w(n,l),l.__e!=i&&f(l)))}))}function p(e,t,n,r,o,l,u,s,f,a){var d,p,y,v,g,b,k,w=r&&r.__k||q,x=w.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(v=n.__k[d]=null==(v=t[d])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v?i(null,v,null,null,v):Array.isArray(v)?i(_,{children:v},null,null,null):v.__b>0?i(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(y=w[d])||y&&v.key==y.key&&v.type===y.type)w[d]=void 0;else for(p=0;p<x;p++){if((y=w[p])&&v.key==y.key&&v.type===y.type){w[p]=void 0;break}y=null}C(e,v,y=y||L,o,l,u,s,f,a),g=v.__e,(p=v.ref)&&y.ref!=p&&(k||(k=[]),y.ref&&k.push(y.ref,null,v),k.push(p,v.__c||g,v)),null!=g?(null==b&&(b=g),"function"==typeof v.type&&null!=v.__k&&v.__k===y.__k?v.__d=f=h(v,f,e):f=m(e,v,y,w,g,f),a||"option"!==n.type?"function"==typeof n.type&&(n.__d=f):e.value=""):f&&y.__e==f&&f.parentNode!=e&&(f=c(y))}for(n.__e=b,d=x;d--;)null!=w[d]&&("function"==typeof n.type&&null!=w[d].__e&&w[d].__e==n.__d&&(n.__d=c(r,d+1)),S(w[d],w[d]));if(k)for(d=0;d<k.length;d++)O(k[d],k[++d],k[++d])}function h(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,t="function"==typeof o.type?h(o,t,n):m(n,o,o,e.__k,o.__e,t));return t}function y(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){y(e,t)})):t.push(e)),t}function m(e,t,n,r,o,l){var i,u,_;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(null==n||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),i=null;else{for(u=l,_=0;(u=u.nextSibling)&&_<r.length;_+=2)if(u==o)break e;e.insertBefore(o,l),i=l}return void 0!==i?i:o.nextSibling}function v(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||H.test(t)?n:n+"px"}function g(e,t,n,r,o){var l;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||v(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||v(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])l=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=n,n?r||e.addEventListener(t,l?k:b,l):e.removeEventListener(t,l?k:b,l);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function b(e){this.l[e.type+!1](E.event?E.event(e):e)}function k(e){this.l[e.type+!0](E.event?E.event(e):e)}function C(e,t,n,o,l,i,u,c,f){var a,d,h,y,m,v,g,b,k,C,w,O=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(f=n.__h,c=t.__e=n.__e,t.__h=null,i=[c]),(a=E.__b)&&a(t);try{e:if("function"==typeof O){if(b=t.props,k=(a=O.contextType)&&o[a.__c],C=a?k?k.props.value:a.__:o,n.__c?g=(d=t.__c=n.__c).__=d.__E:("prototype"in O&&O.prototype.render?t.__c=d=new O(b,C):(t.__c=d=new s(b,C),d.constructor=O,d.render=P),k&&k.sub(d),d.props=b,d.state||(d.state={}),d.context=C,d.__n=o,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=O.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=r({},d.__s)),r(d.__s,O.getDerivedStateFromProps(b,d.__s))),y=d.props,m=d.state,h)null==O.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==O.getDerivedStateFromProps&&b!==y&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(b,C),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(b,d.__s,C)||t.__v===n.__v){d.props=b,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,d.__h.length&&u.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(b,d.__s,C),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(y,m,v)}))}d.context=C,d.props=b,d.state=d.__s,(a=E.__r)&&a(t),d.__d=!1,d.__v=t,d.__P=e,a=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(o=r(r({},o),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(y,m)),w=null!=a&&a.type===_&&null==a.key?a.props.children:a,p(e,Array.isArray(w)?w:[w],t,n,o,l,i,u,c,f),d.base=t.__e,t.__h=null,d.__h.length&&u.push(d),g&&(d.__E=d.__=null),d.__e=!1}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=x(n.__e,t,n,o,l,i,u,f);(a=E.diffed)&&a(t)}catch(e){t.__v=null,(f||null!=i)&&(t.__e=c,t.__h=!!f,i[i.indexOf(c)]=null),E.__e(e,t,n)}}function w(e,t){E.__c&&E.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){E.__e(e,t.__v)}}))}function x(e,t,n,r,l,i,u,_){var s,c,f,a,d=n.props,h=t.props,y=t.type,m=0;if("svg"===y&&(l=!0),null!=i)for(;m<i.length;m++)if((s=i[m])&&(s===e||(y?s.localName==y:3==s.nodeType))){e=s,i[m]=null;break}if(null==e){if(null===y)return document.createTextNode(h);e=l?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),i=null,_=!1}if(null===y)d===h||_&&e.data===h||(e.data=h);else{if(i=i&&q.slice.call(e.childNodes),c=(d=n.props||L).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!_){if(null!=i)for(d={},a=0;a<e.attributes.length;a++)d[e.attributes[a].name]=e.attributes[a].value;(f||c)&&(f&&(c&&f.__html==c.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var l;for(l in n)"children"===l||"key"===l||l in t||g(e,l,null,n[l],r);for(l in t)o&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||g(e,l,t[l],n[l],r)}(e,h,d,l,_),f)t.__k=[];else if(m=t.props.children,p(e,Array.isArray(m)?m:[m],t,n,r,l&&"foreignObject"!==y,i,u,e.firstChild,_),null!=i)for(m=i.length;m--;)null!=i[m]&&o(i[m]);_||("value"in h&&void 0!==(m=h.value)&&(m!==e.value||"progress"===y&&!m)&&g(e,"value",m,d.value,!1),"checked"in h&&void 0!==(m=h.checked)&&m!==e.checked&&g(e,"checked",m,d.checked,!1))}return e}function O(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){E.__e(e,n)}}function S(e,t,n){var r,l,i;if(E.unmount&&E.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||O(r,null,t)),n||"function"==typeof e.type||(n=null!=(l=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){E.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&S(r[i],t,n);null!=l&&o(l)}function P(e,t,n){return this.constructor(e,n)}function T(e,t,n){var r,o,i;E.__&&E.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,i=[],C(t,e=(!r&&n||t).__k=l(_,null,[e]),o||L,L,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?q.slice.call(t.childNodes):null,i,!r&&n?n:o?o.__e:t.firstChild,r),w(i,e)}function D(e,t){T(e,t,D)}function B(e,t,n){var o,l,u,_=arguments,s=r({},e.props);for(u in t)"key"==u?o=t[u]:"ref"==u?l=t[u]:s[u]=t[u];if(arguments.length>3)for(n=[n],u=3;u<arguments.length;u++)n.push(_[u]);return null!=n&&(s.children=n),i(e.type,s,o||e.key,l||e.ref,null)}function A(e,t){var n={__c:t="__cC"+U++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(a)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return T})),n.d(t,"hydrate",(function(){return D})),n.d(t,"createElement",(function(){return l})),n.d(t,"h",(function(){return l})),n.d(t,"Fragment",(function(){return _})),n.d(t,"createRef",(function(){return u})),n.d(t,"isValidElement",(function(){return N})),n.d(t,"Component",(function(){return s})),n.d(t,"cloneElement",(function(){return B})),n.d(t,"createContext",(function(){return A})),n.d(t,"toChildArray",(function(){return y})),n.d(t,"options",(function(){return E}));var E,N,j,M,R,U,L={},q=[],H=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;E={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e},__v:0},N=function(e){return null!=e&&void 0===e.constructor},s.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),a(this))},s.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),a(this))},s.prototype.render=_,j=[],M="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,d.__r=0,U=0},riXW:function(e,t,n){"use strict";n.r(t);var r=n("NMMh");const{h:o,render:l,hydrate:i}=r,u=e=>e&&e.default?e.default:e;if("function"==typeof u(n("/hs+"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let t=u(n("/hs+")),r={};const i=document.querySelector('[type="__PREACT_CLI_DATA__"]');i&&(r=JSON.parse(decodeURI(i.innerHTML)).preRenderData||r);r.url&&(_=r.url);var _;e=l(o(t,{CLI_DATA:{preRenderData:r}}),document.body,e)})()}}});
//# sourceMappingURL=bundle.46e7e.esm.js.map