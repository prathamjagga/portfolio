(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{6690:function(e,t,r){"use strict";r.d(t,{S:function(){return n}});const n=(e,t)=>{let r,n,o=0;const a=(e,t)=>{o===r&&t.loop&&(o=0),setTimeout((()=>{l(e[o],t)}),t.startDelay)},l=(t,r)=>{let n=0,o=t.length,a=setInterval((()=>{if(r.placeholder?e.placeholder+=t[n]:e.textContent+=t[n],++n===o)return c(a,r)}),r.typeSpeed)},c=(e,t)=>(clearInterval(e),t.disableBackTyping&&o===r-1?t.onFinished():t.loop||o!==r-1?void setTimeout((()=>s(t)),t.backDelay):t.onFinished()),s=t=>{let r=t.placeholder?e.placeholder:e.textContent,n=r.length,o=setInterval((()=>{if(t.placeholder?e.placeholder=e.placeholder.substr(0,--n):e.textContent=r.substr(0,--n),0===n)return i(o,t)}),t.backSpeed)},i=(e,t)=>{clearInterval(e),++o,a(n,t)};return(t=>{let o=(({strings:e=["Put your strings here...","and Enjoy!"],typeSpeed:t=100,backSpeed:r=50,backDelay:n=500,startDelay:o=500,cursorChar:a="|",placeholder:l=!1,showCursor:c=!0,disableBackTyping:s=!1,onFinished:i=function(){},loop:u=!0})=>({strings:e,typeSpeed:t,backSpeed:r,cursorChar:a,backDelay:n,placeholder:l,startDelay:o,showCursor:c,loop:u,disableBackTyping:s,onFinished:i}))(t||{}),l=o.strings;n=l,r=l.length,"string"===typeof e&&(e=document.querySelector(e)),o.showCursor&&((e,t)=>{let r=document.createElement("span");r.classList.add("ityped-cursor"),r.textContent="|",r.textContent=t.cursorChar,e.insertAdjacentElement("afterend",r)})(e,o),a(l,o)})(t)}},6071:function(e,t,r){"use strict";var n=r(3038),o=r(862);t.default=void 0;var a=o(r(7294)),l=r(1689),c=r(2441),s=r(5749),i={};function u(e,t,r,n){if(e&&(0,l.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,c.useRouter)(),o=r&&r.asPath||"/",f=a.default.useMemo((function(){var t=(0,l.resolveHref)(o,e.href,!0),r=n(t,2),a=r[0],c=r[1];return{href:a,as:e.as?(0,l.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),p=f.href,d=f.as,h=e.children,v=e.replace,y=e.shallow,b=e.scroll,g=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var m=a.Children.only(h),C=m&&"object"===typeof m&&m.ref,k=(0,s.useIntersection)({rootMargin:"200px"}),w=n(k,2),E=w[0],O=w[1],L=a.default.useCallback((function(e){E(e),C&&("function"===typeof C?C(e):"object"===typeof C&&(C.current=e))}),[C,E]);(0,a.useEffect)((function(){var e=O&&t&&(0,l.isLocalURL)(p),n="undefined"!==typeof g?g:r&&r.locale,o=i[p+"%"+d+(n?"%"+n:"")];e&&!o&&u(r,p,d,{locale:n})}),[d,p,O,g,t,r]);var x={ref:L,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:a,locale:s,scroll:c}))}(e,r,p,d,v,y,b,g)},onMouseEnter:function(e){(0,l.isLocalURL)(p)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),u(r,p,d,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var I="undefined"!==typeof g?g:r&&r.locale,M=r&&r.isLocaleDomain&&(0,l.getDomainLocale)(d,I,r&&r.locales,r&&r.domainLocales);x.href=M||(0,l.addBasePath)((0,l.addLocale)(d,I,r&&r.defaultLocale))}return a.default.cloneElement(m,x)};t.default=f},5749:function(e,t,r){"use strict";var n=r(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,s=(0,o.useRef)(),i=(0,o.useState)(!1),u=n(i,2),f=u[0],p=u[1],d=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[r,t,f]);return(0,o.useEffect)((function(){if(!l&&!f){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=r(7294),a=r(8391),l="undefined"!==typeof IntersectionObserver;var c=new Map},1664:function(e,t,r){e.exports=r(6071)},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),s(e.child))}))}function i(e){return function(t){return n.createElement(u,l({attr:l({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var r,o=e.attr,a=e.size,s=e.title,i=c(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,i,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}}}]);