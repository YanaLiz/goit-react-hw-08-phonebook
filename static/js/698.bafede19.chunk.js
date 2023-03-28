/*! For license information please see 698.bafede19.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[698],{8096:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(9439),o=r(3366),i=r(7462),a=r(2791),u=r(8182),c=r(4419),s=r(1402),f=r(6934),l=r(5470),p=r(4036),d=r(9103),y=r(3840),h=r(5878),m=r(1217);function b(e){return(0,m.Z)("MuiFormControl",e)}(0,h.Z)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);var v=r(184),g=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],T=(0,f.ZP)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return(0,i.Z)({},t.root,t["margin".concat((0,p.Z)(r.margin))],r.fullWidth&&t.fullWidth)}})((function(e){var t=e.ownerState;return(0,i.Z)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===t.margin&&{marginTop:16,marginBottom:8},"dense"===t.margin&&{marginTop:8,marginBottom:4},t.fullWidth&&{width:"100%"})})),w=a.forwardRef((function(e,t){var r=(0,s.Z)({props:e,name:"MuiFormControl"}),f=r.children,h=r.className,m=r.color,w=void 0===m?"primary":m,O=r.component,C=void 0===O?"div":O,S=r.disabled,A=void 0!==S&&S,E=r.error,j=void 0!==E&&E,P=r.focused,k=r.fullWidth,x=void 0!==k&&k,L=r.hiddenLabel,I=void 0!==L&&L,M=r.margin,N=void 0===M?"none":M,_=r.required,R=void 0!==_&&_,Z=r.size,q=void 0===Z?"medium":Z,B=r.variant,D=void 0===B?"outlined":B,F=(0,o.Z)(r,g),W=(0,i.Z)({},r,{color:w,component:C,disabled:A,error:j,fullWidth:x,hiddenLabel:I,margin:N,required:R,size:q,variant:D}),H=function(e){var t=e.classes,r=e.margin,n=e.fullWidth,o={root:["root","none"!==r&&"margin".concat((0,p.Z)(r)),n&&"fullWidth"]};return(0,c.Z)(o,b,t)}(W),Y=a.useState((function(){var e=!1;return f&&a.Children.forEach(f,(function(t){if((0,d.Z)(t,["Input","Select"])){var r=(0,d.Z)(t,["Select"])?t.props.input:t;r&&(0,l.B7)(r.props)&&(e=!0)}})),e})),U=(0,n.Z)(Y,2),z=U[0],K=U[1],V=a.useState((function(){var e=!1;return f&&a.Children.forEach(f,(function(t){(0,d.Z)(t,["Input","Select"])&&(0,l.vd)(t.props,!0)&&(e=!0)})),e})),$=(0,n.Z)(V,2),G=$[0],J=$[1],Q=a.useState(!1),X=(0,n.Z)(Q,2),ee=X[0],te=X[1];A&&ee&&te(!1);var re,ne=void 0===P||A?ee:P,oe=a.useMemo((function(){return{adornedStart:z,setAdornedStart:K,color:w,disabled:A,error:j,filled:G,focused:ne,fullWidth:x,hiddenLabel:I,size:q,onBlur:function(){te(!1)},onEmpty:function(){J(!1)},onFilled:function(){J(!0)},onFocus:function(){te(!0)},registerEffect:re,required:R,variant:D}}),[z,w,A,j,G,ne,x,I,re,R,q,D]);return(0,v.jsx)(y.Z.Provider,{value:oe,children:(0,v.jsx)(T,(0,i.Z)({as:C,ownerState:W,className:(0,u.Z)(H.root,h),ref:t},F,{children:f}))})}))},1725:function(e){"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,u,c=o(e),s=1;s<arguments.length;s++){for(var f in a=Object(arguments[s]))r.call(a,f)&&(c[f]=a[f]);if(t){u=t(a);for(var l=0;l<u.length;l++)n.call(a,u[l])&&(c[u[l]]=a[u[l]])}}return c}},888:function(e,t,r){"use strict";var n=r(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},77:function(e){var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var u,c,s,f;if(Array.isArray(e)){if((u=e.length)!=a.length)return!1;for(c=u;0!==c--;)if(!i(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(f=e.entries();!(c=f.next()).done;)if(!a.has(c.value[0]))return!1;for(f=e.entries();!(c=f.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(f=e.entries();!(c=f.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((u=e.length)!=a.length)return!1;for(c=u;0!==c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof a.toString)return e.toString()===a.toString();if((u=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=u;0!==c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!==c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],a[s[c]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4270:function(e,t,r){"use strict";r.d(t,{q:function(){return fe}});var n=r(2007),o=r.n(n),i=r(9475),a=r.n(i),u=r(77),c=r.n(u),s=r(2791),f=r(1725),l=r.n(f),p="bodyAttributes",d="htmlAttributes",y="titleAttributes",h={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},m=(Object.keys(h).map((function(e){return h[e]})),"charset"),b="cssText",v="href",g="http-equiv",T="innerHTML",w="itemprop",O="name",C="property",S="rel",A="src",E="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",k="defer",x="encodeSpecialCharacters",L="onChangeClientState",I="titleTemplate",M=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),N=[h.NOSCRIPT,h.SCRIPT,h.STYLE],_="data-react-helmet",R="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},D=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},H=function(e){var t=V(e,h.TITLE),r=V(e,I);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=V(e,P);return t||n||void 0},Y=function(e){return V(e,L)||function(){}},U=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},z=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[h.BASE]})).map((function(e){return e[h.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},K=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&X("Helmet: "+e+' should be of type "Array". Instead found type "'+R(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||r===S&&"canonical"===e[r].toLowerCase()||c===S&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(u)||u!==T&&u!==b&&u!==w||(r=u)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=l()({},n[u],o[u]);n[u]=c}return e}),[]).reverse()},V=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout((function(){$(t)}),0)}}(),G=function(e){return clearTimeout(e)},J="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:r.g.requestAnimationFrame||$,Q="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||G:r.g.cancelAnimationFrame||G,X=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},ee=null,te=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,l=e.title,p=e.titleAttributes;oe(h.BODY,n),oe(h.HTML,o),ne(l,p);var d={baseTag:ie(h.BASE,r),linkTags:ie(h.LINK,i),metaTags:ie(h.META,a),noscriptTags:ie(h.NOSCRIPT,u),scriptTags:ie(h.SCRIPT,s),styleTags:ie(h.STYLE,f)},y={},m={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(y[e]=r),n.length&&(m[e]=d[e].oldTags)})),t&&t(),c(e,y,m)},re=function(e){return Array.isArray(e)?e.join(""):e},ne=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=re(e)),oe(h.TITLE,t)},oe=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(_),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],s=t[c]||"";r.getAttribute(c)!==s&&r.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var f=i.indexOf(c);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)r.removeAttribute(i[l]);o.length===i.length?r.removeAttribute(_):r.getAttribute(_)!==a.join(",")&&r.setAttribute(_,a.join(","))}},ie=function(e,t){var r=document.head||document.querySelector(h.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===T)r.innerHTML=t.innerHTML;else if(n===b)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u="undefined"===typeof t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(_,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ae=function(e){return Object.keys(e).reduce((function(t,r){var n="undefined"!==typeof e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[j[r]||r]=e[r],t}),t)},ce=function(e,t,r){switch(e){case h.TITLE:return{toComponent:function(){return function(e,t,r){var n,o=((n={key:t})[_]=!0,n),i=ue(r,o);return[s.createElement(h.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,r,n){var o=ae(r),i=re(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case p:case d:return{toComponent:function(){return ue(t)},toString:function(){return ae(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[_]=!0,n);return Object.keys(t).forEach((function(e){var r=j[e]||e;if(r===T||r===b){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),s.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===T||e===b)})).reduce((function(e,t){var o="undefined"===typeof n[t]?t:t+'="'+W(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===N.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},se=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,f=e.title,l=void 0===f?"":f,y=e.titleAttributes;return{base:ce(h.BASE,t,n),bodyAttributes:ce(p,r,n),htmlAttributes:ce(d,o,n),link:ce(h.LINK,i,n),meta:ce(h.META,a,n),noscript:ce(h.NOSCRIPT,u,n),script:ce(h.SCRIPT,c,n),style:ce(h.STYLE,s,n),title:ce(h.TITLE,{title:l,titleAttributes:y},n)}},fe=function(e){var t,r;return r=t=function(t){function r(){return Z(this,r),F(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),r.prototype.shouldComponentUpdate=function(e){return!c()(this.props,e)},r.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.SCRIPT:case h.NOSCRIPT:return{innerHTML:t};case h.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},r.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return B({},n,((t={})[r.type]=[].concat(n[r.type]||[],[B({},o,this.mapNestedChildrenToProps(r,i))]),t))},r.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case h.TITLE:return B({},o,((t={})[n.type]=a,t.titleAttributes=B({},i),t));case h.BODY:return B({},o,{bodyAttributes:B({},i)});case h.HTML:return B({},o,{htmlAttributes:B({},i)})}return B({},o,((r={})[n.type]=B({},i),r))},r.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=B({},t);return Object.keys(e).forEach((function(t){var n;r=B({},r,((n={})[t]=e[t],n))})),r},r.prototype.warnOnInvalidChildren=function(e,t){return!0},r.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[M[r]||r]=e[r],t}),t)}(D(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case h.LINK:case h.META:case h.NOSCRIPT:case h.SCRIPT:case h.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},r.prototype.render=function(){var t=this.props,r=t.children,n=D(t,["children"]),o=B({},n);return r&&(o=this.mapChildrenToProps(r,o)),s.createElement(e,o)},q(r,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),r}(s.Component),t.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=se({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},r}(a()((function(e){return{baseTag:z([v,E],e),bodyAttributes:U(p,e),defer:V(e,k),encode:V(e,x),htmlAttributes:U(d,e),linkTags:K(h.LINK,[S,v],e),metaTags:K(h.META,[O,m,g,C,w],e),noscriptTags:K(h.NOSCRIPT,[T],e),onChangeClientState:Y(e),scriptTags:K(h.SCRIPT,[A,T],e),styleTags:K(h.STYLE,[b],e),title:H(e),titleAttributes:U(y,e)}}),(function(e){ee&&Q(ee),e.defer?ee=J((function(){te(e,(function(){ee=null}))})):(te(e),ee=null)}),se)((function(){return null})));fe.renderStatic=fe.rewind},9475:function(e,t,r){"use strict";var n,o=r(2791),i=(n=o)&&"object"===typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof r&&"function"!==typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!==typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function f(){c=e(s.map((function(e){return e.props}))),l.canUseDOM?t(c):r&&(c=r(c))}var l=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(l,"canUseDOM",u),l}}}}]);
//# sourceMappingURL=698.bafede19.chunk.js.map