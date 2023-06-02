function GI(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function cb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fa={},KI={get exports(){return Fa},set exports(e){Fa=e}},Sd={},w={},YI={get exports(){return w},set exports(e){w=e}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tl=Symbol.for("react.element"),QI=Symbol.for("react.portal"),XI=Symbol.for("react.fragment"),JI=Symbol.for("react.strict_mode"),ZI=Symbol.for("react.profiler"),e2=Symbol.for("react.provider"),t2=Symbol.for("react.context"),n2=Symbol.for("react.forward_ref"),r2=Symbol.for("react.suspense"),i2=Symbol.for("react.memo"),o2=Symbol.for("react.lazy"),Ky=Symbol.iterator;function s2(e){return e===null||typeof e!="object"?null:(e=Ky&&e[Ky]||e["@@iterator"],typeof e=="function"?e:null)}var ub={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},db=Object.assign,fb={};function ks(e,t,n){this.props=e,this.context=t,this.refs=fb,this.updater=n||ub}ks.prototype.isReactComponent={};ks.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ks.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hb(){}hb.prototype=ks.prototype;function ng(e,t,n){this.props=e,this.context=t,this.refs=fb,this.updater=n||ub}var rg=ng.prototype=new hb;rg.constructor=ng;db(rg,ks.prototype);rg.isPureReactComponent=!0;var Yy=Array.isArray,pb=Object.prototype.hasOwnProperty,ig={current:null},mb={key:!0,ref:!0,__self:!0,__source:!0};function gb(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)pb.call(t,r)&&!mb.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Tl,type:e,key:o,ref:s,props:i,_owner:ig.current}}function a2(e,t){return{$$typeof:Tl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function og(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tl}function l2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Qy=/\/+/g;function Gf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?l2(""+e.key):t.toString(36)}function Uc(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Tl:case QI:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Gf(s,0):r,Yy(i)?(n="",e!=null&&(n=e.replace(Qy,"$&/")+"/"),Uc(i,t,n,"",function(c){return c})):i!=null&&(og(i)&&(i=a2(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Qy,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Yy(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Gf(o,a);s+=Uc(o,t,n,l,i)}else if(l=s2(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Gf(o,a++),s+=Uc(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function oc(e,t,n){if(e==null)return e;var r=[],i=0;return Uc(e,r,"","",function(o){return t.call(n,o,i++)}),r}function c2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Bt={current:null},Bc={transition:null},u2={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:Bc,ReactCurrentOwner:ig};we.Children={map:oc,forEach:function(e,t,n){oc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oc(e,function(){t++}),t},toArray:function(e){return oc(e,function(t){return t})||[]},only:function(e){if(!og(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};we.Component=ks;we.Fragment=XI;we.Profiler=ZI;we.PureComponent=ng;we.StrictMode=JI;we.Suspense=r2;we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u2;we.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=db({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ig.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)pb.call(t,l)&&!mb.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Tl,type:e.type,key:i,ref:o,props:r,_owner:s}};we.createContext=function(e){return e={$$typeof:t2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:e2,_context:e},e.Consumer=e};we.createElement=gb;we.createFactory=function(e){var t=gb.bind(null,e);return t.type=e,t};we.createRef=function(){return{current:null}};we.forwardRef=function(e){return{$$typeof:n2,render:e}};we.isValidElement=og;we.lazy=function(e){return{$$typeof:o2,_payload:{_status:-1,_result:e},_init:c2}};we.memo=function(e,t){return{$$typeof:i2,type:e,compare:t===void 0?null:t}};we.startTransition=function(e){var t=Bc.transition;Bc.transition={};try{e()}finally{Bc.transition=t}};we.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};we.useCallback=function(e,t){return Bt.current.useCallback(e,t)};we.useContext=function(e){return Bt.current.useContext(e)};we.useDebugValue=function(){};we.useDeferredValue=function(e){return Bt.current.useDeferredValue(e)};we.useEffect=function(e,t){return Bt.current.useEffect(e,t)};we.useId=function(){return Bt.current.useId()};we.useImperativeHandle=function(e,t,n){return Bt.current.useImperativeHandle(e,t,n)};we.useInsertionEffect=function(e,t){return Bt.current.useInsertionEffect(e,t)};we.useLayoutEffect=function(e,t){return Bt.current.useLayoutEffect(e,t)};we.useMemo=function(e,t){return Bt.current.useMemo(e,t)};we.useReducer=function(e,t,n){return Bt.current.useReducer(e,t,n)};we.useRef=function(e){return Bt.current.useRef(e)};we.useState=function(e){return Bt.current.useState(e)};we.useSyncExternalStore=function(e,t,n){return Bt.current.useSyncExternalStore(e,t,n)};we.useTransition=function(){return Bt.current.useTransition()};we.version="18.2.0";(function(e){e.exports=we})(YI);const je=cb(w),rp=GI({__proto__:null,default:je},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d2=w,f2=Symbol.for("react.element"),h2=Symbol.for("react.fragment"),p2=Object.prototype.hasOwnProperty,m2=d2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g2={key:!0,ref:!0,__self:!0,__source:!0};function vb(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)p2.call(t,r)&&!g2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:f2,type:e,key:o,ref:s,props:i,_owner:m2.current}}Sd.Fragment=h2;Sd.jsx=vb;Sd.jsxs=vb;(function(e){e.exports=Sd})(KI);const $i=Fa.Fragment,b=Fa.jsx,z=Fa.jsxs;var ip={},ss={},v2={get exports(){return ss},set exports(e){ss=e}},fn={},op={},y2={get exports(){return op},set exports(e){op=e}},yb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,W){var M=R.length;R.push(W);e:for(;0<M;){var J=M-1>>>1,P=R[J];if(0<i(P,W))R[J]=W,R[M]=P,M=J;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var W=R[0],M=R.pop();if(M!==W){R[0]=M;e:for(var J=0,P=R.length,$=P>>>1;J<$;){var O=2*(J+1)-1,H=R[O],x=O+1,ie=R[x];if(0>i(H,M))x<P&&0>i(ie,H)?(R[J]=ie,R[x]=M,J=x):(R[J]=H,R[O]=M,J=O);else if(x<P&&0>i(ie,M))R[J]=ie,R[x]=M,J=x;else break e}}return W}function i(R,W){var M=R.sortIndex-W.sortIndex;return M!==0?M:R.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,f=3,h=!1,p=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=R)r(c),W.sortIndex=W.expirationTime,t(l,W);else break;W=n(c)}}function _(R){if(y=!1,g(R),!p)if(n(l)!==null)p=!0,X(C);else{var W=n(c);W!==null&&se(_,W.startTime-R)}}function C(R,W){p=!1,y&&(y=!1,v(T),T=-1),h=!0;var M=f;try{for(g(W),d=n(l);d!==null&&(!(d.expirationTime>W)||R&&!L());){var J=d.callback;if(typeof J=="function"){d.callback=null,f=d.priorityLevel;var P=J(d.expirationTime<=W);W=e.unstable_now(),typeof P=="function"?d.callback=P:d===n(l)&&r(l),g(W)}else r(l);d=n(l)}if(d!==null)var $=!0;else{var O=n(c);O!==null&&se(_,O.startTime-W),$=!1}return $}finally{d=null,f=M,h=!1}}var k=!1,E=null,T=-1,A=5,I=-1;function L(){return!(e.unstable_now()-I<A)}function q(){if(E!==null){var R=e.unstable_now();I=R;var W=!0;try{W=E(!0,R)}finally{W?V():(k=!1,E=null)}}else k=!1}var V;if(typeof m=="function")V=function(){m(q)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,N=D.port2;D.port1.onmessage=q,V=function(){N.postMessage(null)}}else V=function(){S(q,0)};function X(R){E=R,k||(k=!0,V())}function se(R,W){T=S(function(){R(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){p||h||(p=!0,X(C))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var M=f;f=W;try{return R()}finally{f=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,W){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var M=f;f=R;try{return W()}finally{f=M}},e.unstable_scheduleCallback=function(R,W,M){var J=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?J+M:J):M=J,R){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=M+P,R={id:u++,callback:W,priorityLevel:R,startTime:M,expirationTime:P,sortIndex:-1},M>J?(R.sortIndex=M,t(c,R),n(l)===null&&R===n(c)&&(y?(v(T),T=-1):y=!0,se(_,M-J))):(R.sortIndex=P,t(l,R),p||h||(p=!0,X(C))),R},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(R){var W=f;return function(){var M=f;f=W;try{return R.apply(this,arguments)}finally{f=M}}}})(yb);(function(e){e.exports=yb})(y2);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _b=w,dn=op;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wb=new Set,za={};function so(e,t){as(e,t),as(e+"Capture",t)}function as(e,t){for(za[e]=t,e=0;e<t.length;e++)wb.add(t[e])}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sp=Object.prototype.hasOwnProperty,_2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xy={},Jy={};function w2(e){return sp.call(Jy,e)?!0:sp.call(Xy,e)?!1:_2.test(e)?Jy[e]=!0:(Xy[e]=!0,!1)}function b2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function S2(e,t,n,r){if(t===null||typeof t>"u"||b2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function jt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){At[e]=new jt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];At[t]=new jt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){At[e]=new jt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){At[e]=new jt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){At[e]=new jt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){At[e]=new jt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){At[e]=new jt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){At[e]=new jt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){At[e]=new jt(e,5,!1,e.toLowerCase(),null,!1,!1)});var sg=/[\-:]([a-z])/g;function ag(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sg,ag);At[t]=new jt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sg,ag);At[t]=new jt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sg,ag);At[t]=new jt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){At[e]=new jt(e,1,!1,e.toLowerCase(),null,!1,!1)});At.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){At[e]=new jt(e,1,!1,e.toLowerCase(),null,!0,!0)});function lg(e,t,n,r){var i=At.hasOwnProperty(t)?At[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(S2(t,n,i,r)&&(n=null),r||i===null?w2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ir=_b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sc=Symbol.for("react.element"),ko=Symbol.for("react.portal"),xo=Symbol.for("react.fragment"),cg=Symbol.for("react.strict_mode"),ap=Symbol.for("react.profiler"),bb=Symbol.for("react.provider"),Sb=Symbol.for("react.context"),ug=Symbol.for("react.forward_ref"),lp=Symbol.for("react.suspense"),cp=Symbol.for("react.suspense_list"),dg=Symbol.for("react.memo"),Lr=Symbol.for("react.lazy"),Cb=Symbol.for("react.offscreen"),Zy=Symbol.iterator;function Ws(e){return e===null||typeof e!="object"?null:(e=Zy&&e[Zy]||e["@@iterator"],typeof e=="function"?e:null)}var Je=Object.assign,Kf;function aa(e){if(Kf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Kf=t&&t[1]||""}return`
`+Kf+e}var Yf=!1;function Qf(e,t){if(!e||Yf)return"";Yf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Yf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?aa(e):""}function C2(e){switch(e.tag){case 5:return aa(e.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 2:case 15:return e=Qf(e.type,!1),e;case 11:return e=Qf(e.type.render,!1),e;case 1:return e=Qf(e.type,!0),e;default:return""}}function up(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xo:return"Fragment";case ko:return"Portal";case ap:return"Profiler";case cg:return"StrictMode";case lp:return"Suspense";case cp:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sb:return(e.displayName||"Context")+".Consumer";case bb:return(e._context.displayName||"Context")+".Provider";case ug:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dg:return t=e.displayName||null,t!==null?t:up(e.type)||"Memo";case Lr:t=e._payload,e=e._init;try{return up(e(t))}catch{}}return null}function E2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return up(t);case 8:return t===cg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function si(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Eb(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function k2(e){var t=Eb(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ac(e){e._valueTracker||(e._valueTracker=k2(e))}function kb(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Eb(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function cu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dp(e,t){var n=t.checked;return Je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function e0(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=si(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xb(e,t){t=t.checked,t!=null&&lg(e,"checked",t,!1)}function fp(e,t){xb(e,t);var n=si(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hp(e,t.type,n):t.hasOwnProperty("defaultValue")&&hp(e,t.type,si(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function t0(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hp(e,t,n){(t!=="number"||cu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var la=Array.isArray;function Ho(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+si(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pp(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return Je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function n0(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(la(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:si(n)}}function Ib(e,t){var n=si(t.value),r=si(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function r0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mp(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tb(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lc,Rb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lc=lc||document.createElement("div"),lc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ua(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},x2=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(e){x2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ma[t]=ma[e]})});function Pb(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ma.hasOwnProperty(e)&&ma[e]?(""+t).trim():t+"px"}function Ab(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pb(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var I2=Je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gp(e,t){if(t){if(I2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function vp(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yp=null;function fg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _p=null,Vo=null,qo=null;function i0(e){if(e=Al(e)){if(typeof _p!="function")throw Error(U(280));var t=e.stateNode;t&&(t=Id(t),_p(e.stateNode,e.type,t))}}function Nb(e){Vo?qo?qo.push(e):qo=[e]:Vo=e}function Ob(){if(Vo){var e=Vo,t=qo;if(qo=Vo=null,i0(e),t)for(e=0;e<t.length;e++)i0(t[e])}}function Mb(e,t){return e(t)}function Lb(){}var Xf=!1;function Db(e,t,n){if(Xf)return e(t,n);Xf=!0;try{return Mb(e,t,n)}finally{Xf=!1,(Vo!==null||qo!==null)&&(Lb(),Ob())}}function Ba(e,t){var n=e.stateNode;if(n===null)return null;var r=Id(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var wp=!1;if(gr)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){wp=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{wp=!1}function T2(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var ga=!1,uu=null,du=!1,bp=null,R2={onError:function(e){ga=!0,uu=e}};function P2(e,t,n,r,i,o,s,a,l){ga=!1,uu=null,T2.apply(R2,arguments)}function A2(e,t,n,r,i,o,s,a,l){if(P2.apply(this,arguments),ga){if(ga){var c=uu;ga=!1,uu=null}else throw Error(U(198));du||(du=!0,bp=c)}}function ao(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function o0(e){if(ao(e)!==e)throw Error(U(188))}function N2(e){var t=e.alternate;if(!t){if(t=ao(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return o0(i),e;if(o===r)return o0(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function Fb(e){return e=N2(e),e!==null?zb(e):null}function zb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zb(e);if(t!==null)return t;e=e.sibling}return null}var Ub=dn.unstable_scheduleCallback,s0=dn.unstable_cancelCallback,O2=dn.unstable_shouldYield,M2=dn.unstable_requestPaint,ct=dn.unstable_now,L2=dn.unstable_getCurrentPriorityLevel,hg=dn.unstable_ImmediatePriority,Bb=dn.unstable_UserBlockingPriority,fu=dn.unstable_NormalPriority,D2=dn.unstable_LowPriority,jb=dn.unstable_IdlePriority,Cd=null,Qn=null;function $2(e){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(Cd,e,void 0,(e.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:U2,F2=Math.log,z2=Math.LN2;function U2(e){return e>>>=0,e===0?32:31-(F2(e)/z2|0)|0}var cc=64,uc=4194304;function ca(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ca(a):(o&=s,o!==0&&(r=ca(o)))}else s=n&~i,s!==0?r=ca(s):o!==0&&(r=ca(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ln(t),i=1<<n,r|=e[n],t&=~i;return r}function B2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ln(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=B2(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Sp(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wb(){var e=cc;return cc<<=1,!(cc&4194240)&&(cc=64),e}function Jf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ln(t),e[t]=n}function W2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ln(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function pg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ln(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Te=0;function Hb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vb,mg,qb,Gb,Kb,Cp=!1,dc=[],qr=null,Gr=null,Kr=null,ja=new Map,Wa=new Map,$r=[],H2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function a0(e,t){switch(e){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":ja.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(t.pointerId)}}function Vs(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Al(t),t!==null&&mg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function V2(e,t,n,r,i){switch(t){case"focusin":return qr=Vs(qr,e,t,n,r,i),!0;case"dragenter":return Gr=Vs(Gr,e,t,n,r,i),!0;case"mouseover":return Kr=Vs(Kr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ja.set(o,Vs(ja.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wa.set(o,Vs(Wa.get(o)||null,e,t,n,r,i)),!0}return!1}function Yb(e){var t=Ti(e.target);if(t!==null){var n=ao(t);if(n!==null){if(t=n.tag,t===13){if(t=$b(n),t!==null){e.blockedOn=t,Kb(e.priority,function(){qb(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ep(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yp=r,n.target.dispatchEvent(r),yp=null}else return t=Al(n),t!==null&&mg(t),e.blockedOn=n,!1;t.shift()}return!0}function l0(e,t,n){jc(e)&&n.delete(t)}function q2(){Cp=!1,qr!==null&&jc(qr)&&(qr=null),Gr!==null&&jc(Gr)&&(Gr=null),Kr!==null&&jc(Kr)&&(Kr=null),ja.forEach(l0),Wa.forEach(l0)}function qs(e,t){e.blockedOn===t&&(e.blockedOn=null,Cp||(Cp=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,q2)))}function Ha(e){function t(i){return qs(i,e)}if(0<dc.length){qs(dc[0],e);for(var n=1;n<dc.length;n++){var r=dc[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qr!==null&&qs(qr,e),Gr!==null&&qs(Gr,e),Kr!==null&&qs(Kr,e),ja.forEach(t),Wa.forEach(t),n=0;n<$r.length;n++)r=$r[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$r.length&&(n=$r[0],n.blockedOn===null);)Yb(n),n.blockedOn===null&&$r.shift()}var Go=Ir.ReactCurrentBatchConfig,pu=!0;function G2(e,t,n,r){var i=Te,o=Go.transition;Go.transition=null;try{Te=1,gg(e,t,n,r)}finally{Te=i,Go.transition=o}}function K2(e,t,n,r){var i=Te,o=Go.transition;Go.transition=null;try{Te=4,gg(e,t,n,r)}finally{Te=i,Go.transition=o}}function gg(e,t,n,r){if(pu){var i=Ep(e,t,n,r);if(i===null)lh(e,t,r,mu,n),a0(e,r);else if(V2(i,e,t,n,r))r.stopPropagation();else if(a0(e,r),t&4&&-1<H2.indexOf(e)){for(;i!==null;){var o=Al(i);if(o!==null&&Vb(o),o=Ep(e,t,n,r),o===null&&lh(e,t,r,mu,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else lh(e,t,r,null,n)}}var mu=null;function Ep(e,t,n,r){if(mu=null,e=fg(r),e=Ti(e),e!==null)if(t=ao(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mu=e,null}function Qb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L2()){case hg:return 1;case Bb:return 4;case fu:case D2:return 16;case jb:return 536870912;default:return 16}default:return 16}}var Wr=null,vg=null,Wc=null;function Xb(){if(Wc)return Wc;var e,t=vg,n=t.length,r,i="value"in Wr?Wr.value:Wr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Wc=i.slice(e,1<r?1-r:void 0)}function Hc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fc(){return!0}function c0(){return!1}function hn(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fc:c0,this.isPropagationStopped=c0,this}return Je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fc)},persist:function(){},isPersistent:fc}),t}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yg=hn(xs),Pl=Je({},xs,{view:0,detail:0}),Y2=hn(Pl),Zf,eh,Gs,Ed=Je({},Pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_g,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gs&&(Gs&&e.type==="mousemove"?(Zf=e.screenX-Gs.screenX,eh=e.screenY-Gs.screenY):eh=Zf=0,Gs=e),Zf)},movementY:function(e){return"movementY"in e?e.movementY:eh}}),u0=hn(Ed),Q2=Je({},Ed,{dataTransfer:0}),X2=hn(Q2),J2=Je({},Pl,{relatedTarget:0}),th=hn(J2),Z2=Je({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),eT=hn(Z2),tT=Je({},xs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nT=hn(tT),rT=Je({},xs,{data:0}),d0=hn(rT),iT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sT[e])?!!t[e]:!1}function _g(){return aT}var lT=Je({},Pl,{key:function(e){if(e.key){var t=iT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_g,charCode:function(e){return e.type==="keypress"?Hc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cT=hn(lT),uT=Je({},Ed,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),f0=hn(uT),dT=Je({},Pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_g}),fT=hn(dT),hT=Je({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),pT=hn(hT),mT=Je({},Ed,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gT=hn(mT),vT=[9,13,27,32],wg=gr&&"CompositionEvent"in window,va=null;gr&&"documentMode"in document&&(va=document.documentMode);var yT=gr&&"TextEvent"in window&&!va,Jb=gr&&(!wg||va&&8<va&&11>=va),h0=String.fromCharCode(32),p0=!1;function Zb(e,t){switch(e){case"keyup":return vT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Io=!1;function _T(e,t){switch(e){case"compositionend":return eS(t);case"keypress":return t.which!==32?null:(p0=!0,h0);case"textInput":return e=t.data,e===h0&&p0?null:e;default:return null}}function wT(e,t){if(Io)return e==="compositionend"||!wg&&Zb(e,t)?(e=Xb(),Wc=vg=Wr=null,Io=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jb&&t.locale!=="ko"?null:t.data;default:return null}}var bT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function m0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bT[e.type]:t==="textarea"}function tS(e,t,n,r){Nb(r),t=gu(t,"onChange"),0<t.length&&(n=new yg("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ya=null,Va=null;function ST(e){fS(e,0)}function kd(e){var t=Po(e);if(kb(t))return e}function CT(e,t){if(e==="change")return t}var nS=!1;if(gr){var nh;if(gr){var rh="oninput"in document;if(!rh){var g0=document.createElement("div");g0.setAttribute("oninput","return;"),rh=typeof g0.oninput=="function"}nh=rh}else nh=!1;nS=nh&&(!document.documentMode||9<document.documentMode)}function v0(){ya&&(ya.detachEvent("onpropertychange",rS),Va=ya=null)}function rS(e){if(e.propertyName==="value"&&kd(Va)){var t=[];tS(t,Va,e,fg(e)),Db(ST,t)}}function ET(e,t,n){e==="focusin"?(v0(),ya=t,Va=n,ya.attachEvent("onpropertychange",rS)):e==="focusout"&&v0()}function kT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kd(Va)}function xT(e,t){if(e==="click")return kd(t)}function IT(e,t){if(e==="input"||e==="change")return kd(t)}function TT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fn=typeof Object.is=="function"?Object.is:TT;function qa(e,t){if(Fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sp.call(t,i)||!Fn(e[i],t[i]))return!1}return!0}function y0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _0(e,t){var n=y0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=y0(n)}}function iS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?iS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function oS(){for(var e=window,t=cu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=cu(e.document)}return t}function bg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function RT(e){var t=oS(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&iS(n.ownerDocument.documentElement,n)){if(r!==null&&bg(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=_0(n,o);var s=_0(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var PT=gr&&"documentMode"in document&&11>=document.documentMode,To=null,kp=null,_a=null,xp=!1;function w0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xp||To==null||To!==cu(r)||(r=To,"selectionStart"in r&&bg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_a&&qa(_a,r)||(_a=r,r=gu(kp,"onSelect"),0<r.length&&(t=new yg("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=To)))}function hc(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ro={animationend:hc("Animation","AnimationEnd"),animationiteration:hc("Animation","AnimationIteration"),animationstart:hc("Animation","AnimationStart"),transitionend:hc("Transition","TransitionEnd")},ih={},sS={};gr&&(sS=document.createElement("div").style,"AnimationEvent"in window||(delete Ro.animationend.animation,delete Ro.animationiteration.animation,delete Ro.animationstart.animation),"TransitionEvent"in window||delete Ro.transitionend.transition);function xd(e){if(ih[e])return ih[e];if(!Ro[e])return e;var t=Ro[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sS)return ih[e]=t[n];return e}var aS=xd("animationend"),lS=xd("animationiteration"),cS=xd("animationstart"),uS=xd("transitionend"),dS=new Map,b0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mi(e,t){dS.set(e,t),so(t,[e])}for(var oh=0;oh<b0.length;oh++){var sh=b0[oh],AT=sh.toLowerCase(),NT=sh[0].toUpperCase()+sh.slice(1);mi(AT,"on"+NT)}mi(aS,"onAnimationEnd");mi(lS,"onAnimationIteration");mi(cS,"onAnimationStart");mi("dblclick","onDoubleClick");mi("focusin","onFocus");mi("focusout","onBlur");mi(uS,"onTransitionEnd");as("onMouseEnter",["mouseout","mouseover"]);as("onMouseLeave",["mouseout","mouseover"]);as("onPointerEnter",["pointerout","pointerover"]);as("onPointerLeave",["pointerout","pointerover"]);so("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));so("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));so("onBeforeInput",["compositionend","keypress","textInput","paste"]);so("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));so("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));so("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function S0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,A2(r,t,void 0,e),e.currentTarget=null}function fS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;S0(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;S0(i,a,c),o=l}}}if(du)throw e=bp,du=!1,bp=null,e}function Ue(e,t){var n=t[Ap];n===void 0&&(n=t[Ap]=new Set);var r=e+"__bubble";n.has(r)||(hS(t,e,2,!1),n.add(r))}function ah(e,t,n){var r=0;t&&(r|=4),hS(n,e,r,t)}var pc="_reactListening"+Math.random().toString(36).slice(2);function Ga(e){if(!e[pc]){e[pc]=!0,wb.forEach(function(n){n!=="selectionchange"&&(OT.has(n)||ah(n,!1,e),ah(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pc]||(t[pc]=!0,ah("selectionchange",!1,t))}}function hS(e,t,n,r){switch(Qb(t)){case 1:var i=G2;break;case 4:i=K2;break;default:i=gg}n=i.bind(null,t,n,e),i=void 0,!wp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function lh(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Ti(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Db(function(){var c=o,u=fg(n),d=[];e:{var f=dS.get(e);if(f!==void 0){var h=yg,p=e;switch(e){case"keypress":if(Hc(n)===0)break e;case"keydown":case"keyup":h=cT;break;case"focusin":p="focus",h=th;break;case"focusout":p="blur",h=th;break;case"beforeblur":case"afterblur":h=th;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=u0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=X2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=fT;break;case aS:case lS:case cS:h=eT;break;case uS:h=pT;break;case"scroll":h=Y2;break;case"wheel":h=gT;break;case"copy":case"cut":case"paste":h=nT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=f0}var y=(t&4)!==0,S=!y&&e==="scroll",v=y?f!==null?f+"Capture":null:f;y=[];for(var m=c,g;m!==null;){g=m;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,v!==null&&(_=Ba(m,v),_!=null&&y.push(Ka(m,_,g)))),S)break;m=m.return}0<y.length&&(f=new h(f,p,null,n,u),d.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==yp&&(p=n.relatedTarget||n.fromElement)&&(Ti(p)||p[vr]))break e;if((h||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=c,p=p?Ti(p):null,p!==null&&(S=ao(p),p!==S||p.tag!==5&&p.tag!==6)&&(p=null)):(h=null,p=c),h!==p)){if(y=u0,_="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=f0,_="onPointerLeave",v="onPointerEnter",m="pointer"),S=h==null?f:Po(h),g=p==null?f:Po(p),f=new y(_,m+"leave",h,n,u),f.target=S,f.relatedTarget=g,_=null,Ti(u)===c&&(y=new y(v,m+"enter",p,n,u),y.target=g,y.relatedTarget=S,_=y),S=_,h&&p)t:{for(y=h,v=p,m=0,g=y;g;g=go(g))m++;for(g=0,_=v;_;_=go(_))g++;for(;0<m-g;)y=go(y),m--;for(;0<g-m;)v=go(v),g--;for(;m--;){if(y===v||v!==null&&y===v.alternate)break t;y=go(y),v=go(v)}y=null}else y=null;h!==null&&C0(d,f,h,y,!1),p!==null&&S!==null&&C0(d,S,p,y,!0)}}e:{if(f=c?Po(c):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var C=CT;else if(m0(f))if(nS)C=IT;else{C=kT;var k=ET}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=xT);if(C&&(C=C(e,c))){tS(d,C,n,u);break e}k&&k(e,f,c),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&hp(f,"number",f.value)}switch(k=c?Po(c):window,e){case"focusin":(m0(k)||k.contentEditable==="true")&&(To=k,kp=c,_a=null);break;case"focusout":_a=kp=To=null;break;case"mousedown":xp=!0;break;case"contextmenu":case"mouseup":case"dragend":xp=!1,w0(d,n,u);break;case"selectionchange":if(PT)break;case"keydown":case"keyup":w0(d,n,u)}var E;if(wg)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Io?Zb(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Jb&&n.locale!=="ko"&&(Io||T!=="onCompositionStart"?T==="onCompositionEnd"&&Io&&(E=Xb()):(Wr=u,vg="value"in Wr?Wr.value:Wr.textContent,Io=!0)),k=gu(c,T),0<k.length&&(T=new d0(T,e,null,n,u),d.push({event:T,listeners:k}),E?T.data=E:(E=eS(n),E!==null&&(T.data=E)))),(E=yT?_T(e,n):wT(e,n))&&(c=gu(c,"onBeforeInput"),0<c.length&&(u=new d0("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=E))}fS(d,t)})}function Ka(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gu(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ba(e,n),o!=null&&r.unshift(Ka(e,o,i)),o=Ba(e,t),o!=null&&r.push(Ka(e,o,i))),e=e.return}return r}function go(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function C0(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ba(n,o),l!=null&&s.unshift(Ka(n,l,a))):i||(l=Ba(n,o),l!=null&&s.push(Ka(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var MT=/\r\n?/g,LT=/\u0000|\uFFFD/g;function E0(e){return(typeof e=="string"?e:""+e).replace(MT,`
`).replace(LT,"")}function mc(e,t,n){if(t=E0(t),E0(e)!==t&&n)throw Error(U(425))}function vu(){}var Ip=null,Tp=null;function Rp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pp=typeof setTimeout=="function"?setTimeout:void 0,DT=typeof clearTimeout=="function"?clearTimeout:void 0,k0=typeof Promise=="function"?Promise:void 0,$T=typeof queueMicrotask=="function"?queueMicrotask:typeof k0<"u"?function(e){return k0.resolve(null).then(e).catch(FT)}:Pp;function FT(e){setTimeout(function(){throw e})}function ch(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ha(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ha(t)}function Yr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function x0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Is,Ya="__reactProps$"+Is,vr="__reactContainer$"+Is,Ap="__reactEvents$"+Is,zT="__reactListeners$"+Is,UT="__reactHandles$"+Is;function Ti(e){var t=e[Gn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vr]||n[Gn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=x0(e);e!==null;){if(n=e[Gn])return n;e=x0(e)}return t}e=n,n=e.parentNode}return null}function Al(e){return e=e[Gn]||e[vr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Po(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function Id(e){return e[Ya]||null}var Np=[],Ao=-1;function gi(e){return{current:e}}function We(e){0>Ao||(e.current=Np[Ao],Np[Ao]=null,Ao--)}function $e(e,t){Ao++,Np[Ao]=e.current,e.current=t}var ai={},$t=gi(ai),Qt=gi(!1),ji=ai;function ls(e,t){var n=e.type.contextTypes;if(!n)return ai;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xt(e){return e=e.childContextTypes,e!=null}function yu(){We(Qt),We($t)}function I0(e,t,n){if($t.current!==ai)throw Error(U(168));$e($t,t),$e(Qt,n)}function pS(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,E2(e)||"Unknown",i));return Je({},n,r)}function _u(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ai,ji=$t.current,$e($t,e),$e(Qt,Qt.current),!0}function T0(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=pS(e,t,ji),r.__reactInternalMemoizedMergedChildContext=e,We(Qt),We($t),$e($t,e)):We(Qt),$e(Qt,n)}var sr=null,Td=!1,uh=!1;function mS(e){sr===null?sr=[e]:sr.push(e)}function BT(e){Td=!0,mS(e)}function vi(){if(!uh&&sr!==null){uh=!0;var e=0,t=Te;try{var n=sr;for(Te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}sr=null,Td=!1}catch(i){throw sr!==null&&(sr=sr.slice(e+1)),Ub(hg,vi),i}finally{Te=t,uh=!1}}return null}var No=[],Oo=0,wu=null,bu=0,yn=[],_n=0,Wi=null,ar=1,lr="";function bi(e,t){No[Oo++]=bu,No[Oo++]=wu,wu=e,bu=t}function gS(e,t,n){yn[_n++]=ar,yn[_n++]=lr,yn[_n++]=Wi,Wi=e;var r=ar;e=lr;var i=32-Ln(r)-1;r&=~(1<<i),n+=1;var o=32-Ln(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ar=1<<32-Ln(t)+i|n<<i|r,lr=o+e}else ar=1<<o|n<<i|r,lr=e}function Sg(e){e.return!==null&&(bi(e,1),gS(e,1,0))}function Cg(e){for(;e===wu;)wu=No[--Oo],No[Oo]=null,bu=No[--Oo],No[Oo]=null;for(;e===Wi;)Wi=yn[--_n],yn[_n]=null,lr=yn[--_n],yn[_n]=null,ar=yn[--_n],yn[_n]=null}var an=null,sn=null,Ge=!1,An=null;function vS(e,t){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function R0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,an=e,sn=Yr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,an=e,sn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wi!==null?{id:ar,overflow:lr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,an=e,sn=null,!0):!1;default:return!1}}function Op(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mp(e){if(Ge){var t=sn;if(t){var n=t;if(!R0(e,t)){if(Op(e))throw Error(U(418));t=Yr(n.nextSibling);var r=an;t&&R0(e,t)?vS(r,n):(e.flags=e.flags&-4097|2,Ge=!1,an=e)}}else{if(Op(e))throw Error(U(418));e.flags=e.flags&-4097|2,Ge=!1,an=e}}}function P0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;an=e}function gc(e){if(e!==an)return!1;if(!Ge)return P0(e),Ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Rp(e.type,e.memoizedProps)),t&&(t=sn)){if(Op(e))throw yS(),Error(U(418));for(;t;)vS(e,t),t=Yr(t.nextSibling)}if(P0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){sn=Yr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}sn=null}}else sn=an?Yr(e.stateNode.nextSibling):null;return!0}function yS(){for(var e=sn;e;)e=Yr(e.nextSibling)}function cs(){sn=an=null,Ge=!1}function Eg(e){An===null?An=[e]:An.push(e)}var jT=Ir.ReactCurrentBatchConfig;function Rn(e,t){if(e&&e.defaultProps){t=Je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Su=gi(null),Cu=null,Mo=null,kg=null;function xg(){kg=Mo=Cu=null}function Ig(e){var t=Su.current;We(Su),e._currentValue=t}function Lp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ko(e,t){Cu=e,kg=Mo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Gt=!0),e.firstContext=null)}function kn(e){var t=e._currentValue;if(kg!==e)if(e={context:e,memoizedValue:t,next:null},Mo===null){if(Cu===null)throw Error(U(308));Mo=e,Cu.dependencies={lanes:0,firstContext:e}}else Mo=Mo.next=e;return t}var Ri=null;function Tg(e){Ri===null?Ri=[e]:Ri.push(e)}function _S(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Tg(t)):(n.next=i.next,i.next=n),t.interleaved=n,yr(e,r)}function yr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dr=!1;function Rg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wS(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,yr(e,n)}return i=r.interleaved,i===null?(t.next=t,Tg(r)):(t.next=i.next,i.next=t),r.interleaved=t,yr(e,n)}function Vc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pg(e,n)}}function A0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Eu(e,t,n,r){var i=e.updateQueue;Dr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,u=c=l=null,a=o;do{var f=a.lane,h=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,y=a;switch(f=t,h=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,f=typeof p=="function"?p.call(h,d,f):p,f==null)break e;d=Je({},d,f);break e;case 2:Dr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=h,l=d):u=u.next=h,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Vi|=s,e.lanes=s,e.memoizedState=d}}function N0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var bS=new _b.Component().refs;function Dp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rd={isMounted:function(e){return(e=e._reactInternals)?ao(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ut(),i=Jr(e),o=hr(r,i);o.payload=t,n!=null&&(o.callback=n),t=Qr(e,o,i),t!==null&&(Dn(t,e,i,r),Vc(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ut(),i=Jr(e),o=hr(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Qr(e,o,i),t!==null&&(Dn(t,e,i,r),Vc(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ut(),r=Jr(e),i=hr(n,r);i.tag=2,t!=null&&(i.callback=t),t=Qr(e,i,r),t!==null&&(Dn(t,e,r,n),Vc(t,e,r))}};function O0(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!qa(n,r)||!qa(i,o):!0}function SS(e,t,n){var r=!1,i=ai,o=t.contextType;return typeof o=="object"&&o!==null?o=kn(o):(i=Xt(t)?ji:$t.current,r=t.contextTypes,o=(r=r!=null)?ls(e,i):ai),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rd,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function M0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rd.enqueueReplaceState(t,t.state,null)}function $p(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=bS,Rg(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=kn(o):(o=Xt(t)?ji:$t.current,i.context=ls(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Dp(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Rd.enqueueReplaceState(i,i.state,null),Eu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ks(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===bS&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function vc(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function L0(e){var t=e._init;return t(e._payload)}function CS(e){function t(v,m){if(e){var g=v.deletions;g===null?(v.deletions=[m],v.flags|=16):g.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=Zr(v,m),v.index=0,v.sibling=null,v}function o(v,m,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<m?(v.flags|=2,m):g):(v.flags|=2,m)):(v.flags|=1048576,m)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,m,g,_){return m===null||m.tag!==6?(m=vh(g,v.mode,_),m.return=v,m):(m=i(m,g),m.return=v,m)}function l(v,m,g,_){var C=g.type;return C===xo?u(v,m,g.props.children,_,g.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Lr&&L0(C)===m.type)?(_=i(m,g.props),_.ref=Ks(v,m,g),_.return=v,_):(_=Xc(g.type,g.key,g.props,null,v.mode,_),_.ref=Ks(v,m,g),_.return=v,_)}function c(v,m,g,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=yh(g,v.mode,_),m.return=v,m):(m=i(m,g.children||[]),m.return=v,m)}function u(v,m,g,_,C){return m===null||m.tag!==7?(m=zi(g,v.mode,_,C),m.return=v,m):(m=i(m,g),m.return=v,m)}function d(v,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=vh(""+m,v.mode,g),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case sc:return g=Xc(m.type,m.key,m.props,null,v.mode,g),g.ref=Ks(v,null,m),g.return=v,g;case ko:return m=yh(m,v.mode,g),m.return=v,m;case Lr:var _=m._init;return d(v,_(m._payload),g)}if(la(m)||Ws(m))return m=zi(m,v.mode,g,null),m.return=v,m;vc(v,m)}return null}function f(v,m,g,_){var C=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(v,m,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case sc:return g.key===C?l(v,m,g,_):null;case ko:return g.key===C?c(v,m,g,_):null;case Lr:return C=g._init,f(v,m,C(g._payload),_)}if(la(g)||Ws(g))return C!==null?null:u(v,m,g,_,null);vc(v,g)}return null}function h(v,m,g,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return v=v.get(g)||null,a(m,v,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case sc:return v=v.get(_.key===null?g:_.key)||null,l(m,v,_,C);case ko:return v=v.get(_.key===null?g:_.key)||null,c(m,v,_,C);case Lr:var k=_._init;return h(v,m,g,k(_._payload),C)}if(la(_)||Ws(_))return v=v.get(g)||null,u(m,v,_,C,null);vc(m,_)}return null}function p(v,m,g,_){for(var C=null,k=null,E=m,T=m=0,A=null;E!==null&&T<g.length;T++){E.index>T?(A=E,E=null):A=E.sibling;var I=f(v,E,g[T],_);if(I===null){E===null&&(E=A);break}e&&E&&I.alternate===null&&t(v,E),m=o(I,m,T),k===null?C=I:k.sibling=I,k=I,E=A}if(T===g.length)return n(v,E),Ge&&bi(v,T),C;if(E===null){for(;T<g.length;T++)E=d(v,g[T],_),E!==null&&(m=o(E,m,T),k===null?C=E:k.sibling=E,k=E);return Ge&&bi(v,T),C}for(E=r(v,E);T<g.length;T++)A=h(E,v,T,g[T],_),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?T:A.key),m=o(A,m,T),k===null?C=A:k.sibling=A,k=A);return e&&E.forEach(function(L){return t(v,L)}),Ge&&bi(v,T),C}function y(v,m,g,_){var C=Ws(g);if(typeof C!="function")throw Error(U(150));if(g=C.call(g),g==null)throw Error(U(151));for(var k=C=null,E=m,T=m=0,A=null,I=g.next();E!==null&&!I.done;T++,I=g.next()){E.index>T?(A=E,E=null):A=E.sibling;var L=f(v,E,I.value,_);if(L===null){E===null&&(E=A);break}e&&E&&L.alternate===null&&t(v,E),m=o(L,m,T),k===null?C=L:k.sibling=L,k=L,E=A}if(I.done)return n(v,E),Ge&&bi(v,T),C;if(E===null){for(;!I.done;T++,I=g.next())I=d(v,I.value,_),I!==null&&(m=o(I,m,T),k===null?C=I:k.sibling=I,k=I);return Ge&&bi(v,T),C}for(E=r(v,E);!I.done;T++,I=g.next())I=h(E,v,T,I.value,_),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?T:I.key),m=o(I,m,T),k===null?C=I:k.sibling=I,k=I);return e&&E.forEach(function(q){return t(v,q)}),Ge&&bi(v,T),C}function S(v,m,g,_){if(typeof g=="object"&&g!==null&&g.type===xo&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case sc:e:{for(var C=g.key,k=m;k!==null;){if(k.key===C){if(C=g.type,C===xo){if(k.tag===7){n(v,k.sibling),m=i(k,g.props.children),m.return=v,v=m;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Lr&&L0(C)===k.type){n(v,k.sibling),m=i(k,g.props),m.ref=Ks(v,k,g),m.return=v,v=m;break e}n(v,k);break}else t(v,k);k=k.sibling}g.type===xo?(m=zi(g.props.children,v.mode,_,g.key),m.return=v,v=m):(_=Xc(g.type,g.key,g.props,null,v.mode,_),_.ref=Ks(v,m,g),_.return=v,v=_)}return s(v);case ko:e:{for(k=g.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(v,m.sibling),m=i(m,g.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=yh(g,v.mode,_),m.return=v,v=m}return s(v);case Lr:return k=g._init,S(v,m,k(g._payload),_)}if(la(g))return p(v,m,g,_);if(Ws(g))return y(v,m,g,_);vc(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(v,m.sibling),m=i(m,g),m.return=v,v=m):(n(v,m),m=vh(g,v.mode,_),m.return=v,v=m),s(v)):n(v,m)}return S}var us=CS(!0),ES=CS(!1),Nl={},Xn=gi(Nl),Qa=gi(Nl),Xa=gi(Nl);function Pi(e){if(e===Nl)throw Error(U(174));return e}function Pg(e,t){switch($e(Xa,t),$e(Qa,e),$e(Xn,Nl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mp(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=mp(t,e)}We(Xn),$e(Xn,t)}function ds(){We(Xn),We(Qa),We(Xa)}function kS(e){Pi(Xa.current);var t=Pi(Xn.current),n=mp(t,e.type);t!==n&&($e(Qa,e),$e(Xn,n))}function Ag(e){Qa.current===e&&(We(Xn),We(Qa))}var Qe=gi(0);function ku(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dh=[];function Ng(){for(var e=0;e<dh.length;e++)dh[e]._workInProgressVersionPrimary=null;dh.length=0}var qc=Ir.ReactCurrentDispatcher,fh=Ir.ReactCurrentBatchConfig,Hi=0,Xe=null,ht=null,yt=null,xu=!1,wa=!1,Ja=0,WT=0;function Ot(){throw Error(U(321))}function Og(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fn(e[n],t[n]))return!1;return!0}function Mg(e,t,n,r,i,o){if(Hi=o,Xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qc.current=e===null||e.memoizedState===null?GT:KT,e=n(r,i),wa){o=0;do{if(wa=!1,Ja=0,25<=o)throw Error(U(301));o+=1,yt=ht=null,t.updateQueue=null,qc.current=YT,e=n(r,i)}while(wa)}if(qc.current=Iu,t=ht!==null&&ht.next!==null,Hi=0,yt=ht=Xe=null,xu=!1,t)throw Error(U(300));return e}function Lg(){var e=Ja!==0;return Ja=0,e}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Xe.memoizedState=yt=e:yt=yt.next=e,yt}function xn(){if(ht===null){var e=Xe.alternate;e=e!==null?e.memoizedState:null}else e=ht.next;var t=yt===null?Xe.memoizedState:yt.next;if(t!==null)yt=t,ht=e;else{if(e===null)throw Error(U(310));ht=e,e={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},yt===null?Xe.memoizedState=yt=e:yt=yt.next=e}return yt}function Za(e,t){return typeof t=="function"?t(e):t}function hh(e){var t=xn(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=ht,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((Hi&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,Xe.lanes|=u,Vi|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,Fn(r,t.memoizedState)||(Gt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Xe.lanes|=o,Vi|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ph(e){var t=xn(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Fn(o,t.memoizedState)||(Gt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function xS(){}function IS(e,t){var n=Xe,r=xn(),i=t(),o=!Fn(r.memoizedState,i);if(o&&(r.memoizedState=i,Gt=!0),r=r.queue,Dg(PS.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,el(9,RS.bind(null,n,r,i,t),void 0,null),bt===null)throw Error(U(349));Hi&30||TS(n,t,i)}return i}function TS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Xe.updateQueue,t===null?(t={lastEffect:null,stores:null},Xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function RS(e,t,n,r){t.value=n,t.getSnapshot=r,AS(t)&&NS(e)}function PS(e,t,n){return n(function(){AS(t)&&NS(e)})}function AS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fn(e,n)}catch{return!0}}function NS(e){var t=yr(e,1);t!==null&&Dn(t,e,1,-1)}function D0(e){var t=Hn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:e},t.queue=e,e=e.dispatch=qT.bind(null,Xe,e),[t.memoizedState,e]}function el(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Xe.updateQueue,t===null?(t={lastEffect:null,stores:null},Xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function OS(){return xn().memoizedState}function Gc(e,t,n,r){var i=Hn();Xe.flags|=e,i.memoizedState=el(1|t,n,void 0,r===void 0?null:r)}function Pd(e,t,n,r){var i=xn();r=r===void 0?null:r;var o=void 0;if(ht!==null){var s=ht.memoizedState;if(o=s.destroy,r!==null&&Og(r,s.deps)){i.memoizedState=el(t,n,o,r);return}}Xe.flags|=e,i.memoizedState=el(1|t,n,o,r)}function $0(e,t){return Gc(8390656,8,e,t)}function Dg(e,t){return Pd(2048,8,e,t)}function MS(e,t){return Pd(4,2,e,t)}function LS(e,t){return Pd(4,4,e,t)}function DS(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $S(e,t,n){return n=n!=null?n.concat([e]):null,Pd(4,4,DS.bind(null,t,e),n)}function $g(){}function FS(e,t){var n=xn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Og(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zS(e,t){var n=xn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Og(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function US(e,t,n){return Hi&21?(Fn(n,t)||(n=Wb(),Xe.lanes|=n,Vi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Gt=!0),e.memoizedState=n)}function HT(e,t){var n=Te;Te=n!==0&&4>n?n:4,e(!0);var r=fh.transition;fh.transition={};try{e(!1),t()}finally{Te=n,fh.transition=r}}function BS(){return xn().memoizedState}function VT(e,t,n){var r=Jr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jS(e))WS(t,n);else if(n=_S(e,t,n,r),n!==null){var i=Ut();Dn(n,e,r,i),HS(n,t,r)}}function qT(e,t,n){var r=Jr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jS(e))WS(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Fn(a,s)){var l=t.interleaved;l===null?(i.next=i,Tg(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=_S(e,t,i,r),n!==null&&(i=Ut(),Dn(n,e,r,i),HS(n,t,r))}}function jS(e){var t=e.alternate;return e===Xe||t!==null&&t===Xe}function WS(e,t){wa=xu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function HS(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pg(e,n)}}var Iu={readContext:kn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},GT={readContext:kn,useCallback:function(e,t){return Hn().memoizedState=[e,t===void 0?null:t],e},useContext:kn,useEffect:$0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Gc(4194308,4,DS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gc(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gc(4,2,e,t)},useMemo:function(e,t){var n=Hn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Hn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=VT.bind(null,Xe,e),[r.memoizedState,e]},useRef:function(e){var t=Hn();return e={current:e},t.memoizedState=e},useState:D0,useDebugValue:$g,useDeferredValue:function(e){return Hn().memoizedState=e},useTransition:function(){var e=D0(!1),t=e[0];return e=HT.bind(null,e[1]),Hn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Xe,i=Hn();if(Ge){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),bt===null)throw Error(U(349));Hi&30||TS(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,$0(PS.bind(null,r,o,e),[e]),r.flags|=2048,el(9,RS.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Hn(),t=bt.identifierPrefix;if(Ge){var n=lr,r=ar;n=(r&~(1<<32-Ln(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ja++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=WT++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},KT={readContext:kn,useCallback:FS,useContext:kn,useEffect:Dg,useImperativeHandle:$S,useInsertionEffect:MS,useLayoutEffect:LS,useMemo:zS,useReducer:hh,useRef:OS,useState:function(){return hh(Za)},useDebugValue:$g,useDeferredValue:function(e){var t=xn();return US(t,ht.memoizedState,e)},useTransition:function(){var e=hh(Za)[0],t=xn().memoizedState;return[e,t]},useMutableSource:xS,useSyncExternalStore:IS,useId:BS,unstable_isNewReconciler:!1},YT={readContext:kn,useCallback:FS,useContext:kn,useEffect:Dg,useImperativeHandle:$S,useInsertionEffect:MS,useLayoutEffect:LS,useMemo:zS,useReducer:ph,useRef:OS,useState:function(){return ph(Za)},useDebugValue:$g,useDeferredValue:function(e){var t=xn();return ht===null?t.memoizedState=e:US(t,ht.memoizedState,e)},useTransition:function(){var e=ph(Za)[0],t=xn().memoizedState;return[e,t]},useMutableSource:xS,useSyncExternalStore:IS,useId:BS,unstable_isNewReconciler:!1};function fs(e,t){try{var n="",r=t;do n+=C2(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function mh(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var QT=typeof WeakMap=="function"?WeakMap:Map;function VS(e,t,n){n=hr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ru||(Ru=!0,Kp=r),Fp(e,t)},n}function qS(e,t,n){n=hr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Fp(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fp(e,t),typeof r!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function F0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new QT;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=uR.bind(null,e,t,n),t.then(e,e))}function z0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function U0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=hr(-1,1),t.tag=2,Qr(n,t,1))),n.lanes|=1),e)}var XT=Ir.ReactCurrentOwner,Gt=!1;function zt(e,t,n,r){t.child=e===null?ES(t,null,n,r):us(t,e.child,n,r)}function B0(e,t,n,r,i){n=n.render;var o=t.ref;return Ko(t,i),r=Mg(e,t,n,r,o,i),n=Lg(),e!==null&&!Gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,_r(e,t,i)):(Ge&&n&&Sg(t),t.flags|=1,zt(e,t,r,i),t.child)}function j0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Vg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,GS(e,t,o,r,i)):(e=Xc(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(s,r)&&e.ref===t.ref)return _r(e,t,i)}return t.flags|=1,e=Zr(o,r),e.ref=t.ref,e.return=t,t.child=e}function GS(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(qa(o,r)&&e.ref===t.ref)if(Gt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Gt=!0);else return t.lanes=e.lanes,_r(e,t,i)}return zp(e,t,n,r,i)}function KS(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Do,rn),rn|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$e(Do,rn),rn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,$e(Do,rn),rn|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,$e(Do,rn),rn|=r;return zt(e,t,i,n),t.child}function YS(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zp(e,t,n,r,i){var o=Xt(n)?ji:$t.current;return o=ls(t,o),Ko(t,i),n=Mg(e,t,n,r,o,i),r=Lg(),e!==null&&!Gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,_r(e,t,i)):(Ge&&r&&Sg(t),t.flags|=1,zt(e,t,n,i),t.child)}function W0(e,t,n,r,i){if(Xt(n)){var o=!0;_u(t)}else o=!1;if(Ko(t,i),t.stateNode===null)Kc(e,t),SS(t,n,r),$p(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=Xt(n)?ji:$t.current,c=ls(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&M0(t,s,r,c),Dr=!1;var f=t.memoizedState;s.state=f,Eu(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Qt.current||Dr?(typeof u=="function"&&(Dp(t,n,u,r),l=t.memoizedState),(a=Dr||O0(t,n,a,r,f,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,wS(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Rn(t.type,a),s.props=c,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=Xt(n)?ji:$t.current,l=ls(t,l));var h=n.getDerivedStateFromProps;(u=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&M0(t,s,r,l),Dr=!1,f=t.memoizedState,s.state=f,Eu(t,r,s,i);var p=t.memoizedState;a!==d||f!==p||Qt.current||Dr?(typeof h=="function"&&(Dp(t,n,h,r),p=t.memoizedState),(c=Dr||O0(t,n,c,r,f,p,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),s.props=r,s.state=p,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Up(e,t,n,r,o,i)}function Up(e,t,n,r,i,o){YS(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&T0(t,n,!1),_r(e,t,o);r=t.stateNode,XT.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=us(t,e.child,null,o),t.child=us(t,null,a,o)):zt(e,t,a,o),t.memoizedState=r.state,i&&T0(t,n,!0),t.child}function QS(e){var t=e.stateNode;t.pendingContext?I0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&I0(e,t.context,!1),Pg(e,t.containerInfo)}function H0(e,t,n,r,i){return cs(),Eg(i),t.flags|=256,zt(e,t,n,r),t.child}var Bp={dehydrated:null,treeContext:null,retryLane:0};function jp(e){return{baseLanes:e,cachePool:null,transitions:null}}function XS(e,t,n){var r=t.pendingProps,i=Qe.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$e(Qe,i&1),e===null)return Mp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Od(s,r,0,null),e=zi(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=jp(n),t.memoizedState=Bp,e):Fg(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return JT(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Zr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Zr(a,o):(o=zi(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?jp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Bp,r}return o=e.child,e=o.sibling,r=Zr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fg(e,t){return t=Od({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yc(e,t,n,r){return r!==null&&Eg(r),us(t,e.child,null,n),e=Fg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function JT(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=mh(Error(U(422))),yc(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Od({mode:"visible",children:r.children},i,0,null),o=zi(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&us(t,e.child,null,s),t.child.memoizedState=jp(s),t.memoizedState=Bp,o);if(!(t.mode&1))return yc(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(U(419)),r=mh(o,r,void 0),yc(e,t,s,r)}if(a=(s&e.childLanes)!==0,Gt||a){if(r=bt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,yr(e,i),Dn(r,e,i,-1))}return Hg(),r=mh(Error(U(421))),yc(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=dR.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,sn=Yr(i.nextSibling),an=t,Ge=!0,An=null,e!==null&&(yn[_n++]=ar,yn[_n++]=lr,yn[_n++]=Wi,ar=e.id,lr=e.overflow,Wi=t),t=Fg(t,r.children),t.flags|=4096,t)}function V0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Lp(e.return,t,n)}function gh(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function JS(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(zt(e,t,r.children,n),r=Qe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&V0(e,n,t);else if(e.tag===19)V0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($e(Qe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ku(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),gh(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ku(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}gh(t,!0,n,null,o);break;case"together":gh(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _r(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=Zr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ZT(e,t,n){switch(t.tag){case 3:QS(t),cs();break;case 5:kS(t);break;case 1:Xt(t.type)&&_u(t);break;case 4:Pg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;$e(Su,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($e(Qe,Qe.current&1),t.flags|=128,null):n&t.child.childLanes?XS(e,t,n):($e(Qe,Qe.current&1),e=_r(e,t,n),e!==null?e.sibling:null);$e(Qe,Qe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return JS(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$e(Qe,Qe.current),r)break;return null;case 22:case 23:return t.lanes=0,KS(e,t,n)}return _r(e,t,n)}var ZS,Wp,eC,tC;ZS=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wp=function(){};eC=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pi(Xn.current);var o=null;switch(n){case"input":i=dp(e,i),r=dp(e,r),o=[];break;case"select":i=Je({},i,{value:void 0}),r=Je({},r,{value:void 0}),o=[];break;case"textarea":i=pp(e,i),r=pp(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vu)}gp(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(za.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(za.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ue("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};tC=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ys(e,t){if(!Ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Mt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function eR(e,t,n){var r=t.pendingProps;switch(Cg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(t),null;case 1:return Xt(t.type)&&yu(),Mt(t),null;case 3:return r=t.stateNode,ds(),We(Qt),We($t),Ng(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gc(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,An!==null&&(Xp(An),An=null))),Wp(e,t),Mt(t),null;case 5:Ag(t);var i=Pi(Xa.current);if(n=t.type,e!==null&&t.stateNode!=null)eC(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return Mt(t),null}if(e=Pi(Xn.current),gc(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Gn]=t,r[Ya]=o,e=(t.mode&1)!==0,n){case"dialog":Ue("cancel",r),Ue("close",r);break;case"iframe":case"object":case"embed":Ue("load",r);break;case"video":case"audio":for(i=0;i<ua.length;i++)Ue(ua[i],r);break;case"source":Ue("error",r);break;case"img":case"image":case"link":Ue("error",r),Ue("load",r);break;case"details":Ue("toggle",r);break;case"input":e0(r,o),Ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ue("invalid",r);break;case"textarea":n0(r,o),Ue("invalid",r)}gp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&mc(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&mc(r.textContent,a,e),i=["children",""+a]):za.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Ue("scroll",r)}switch(n){case"input":ac(r),t0(r,o,!0);break;case"textarea":ac(r),r0(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vu)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tb(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Gn]=t,e[Ya]=r,ZS(e,t,!1,!1),t.stateNode=e;e:{switch(s=vp(n,r),n){case"dialog":Ue("cancel",e),Ue("close",e),i=r;break;case"iframe":case"object":case"embed":Ue("load",e),i=r;break;case"video":case"audio":for(i=0;i<ua.length;i++)Ue(ua[i],e);i=r;break;case"source":Ue("error",e),i=r;break;case"img":case"image":case"link":Ue("error",e),Ue("load",e),i=r;break;case"details":Ue("toggle",e),i=r;break;case"input":e0(e,r),i=dp(e,r),Ue("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Je({},r,{value:void 0}),Ue("invalid",e);break;case"textarea":n0(e,r),i=pp(e,r),Ue("invalid",e);break;default:i=r}gp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Ab(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rb(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ua(e,l):typeof l=="number"&&Ua(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(za.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Ue("scroll",e):l!=null&&lg(e,o,l,s))}switch(n){case"input":ac(e),t0(e,r,!1);break;case"textarea":ac(e),r0(e);break;case"option":r.value!=null&&e.setAttribute("value",""+si(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ho(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ho(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Mt(t),null;case 6:if(e&&t.stateNode!=null)tC(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=Pi(Xa.current),Pi(Xn.current),gc(t)){if(r=t.stateNode,n=t.memoizedProps,r[Gn]=t,(o=r.nodeValue!==n)&&(e=an,e!==null))switch(e.tag){case 3:mc(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mc(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gn]=t,t.stateNode=r}return Mt(t),null;case 13:if(We(Qe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ge&&sn!==null&&t.mode&1&&!(t.flags&128))yS(),cs(),t.flags|=98560,o=!1;else if(o=gc(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[Gn]=t}else cs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mt(t),o=!1}else An!==null&&(Xp(An),An=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Qe.current&1?pt===0&&(pt=3):Hg())),t.updateQueue!==null&&(t.flags|=4),Mt(t),null);case 4:return ds(),Wp(e,t),e===null&&Ga(t.stateNode.containerInfo),Mt(t),null;case 10:return Ig(t.type._context),Mt(t),null;case 17:return Xt(t.type)&&yu(),Mt(t),null;case 19:if(We(Qe),o=t.memoizedState,o===null)return Mt(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ys(o,!1);else{if(pt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ku(e),s!==null){for(t.flags|=128,Ys(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $e(Qe,Qe.current&1|2),t.child}e=e.sibling}o.tail!==null&&ct()>hs&&(t.flags|=128,r=!0,Ys(o,!1),t.lanes=4194304)}else{if(!r)if(e=ku(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ys(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ge)return Mt(t),null}else 2*ct()-o.renderingStartTime>hs&&n!==1073741824&&(t.flags|=128,r=!0,Ys(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ct(),t.sibling=null,n=Qe.current,$e(Qe,r?n&1|2:n&1),t):(Mt(t),null);case 22:case 23:return Wg(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?rn&1073741824&&(Mt(t),t.subtreeFlags&6&&(t.flags|=8192)):Mt(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function tR(e,t){switch(Cg(t),t.tag){case 1:return Xt(t.type)&&yu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ds(),We(Qt),We($t),Ng(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ag(t),null;case 13:if(We(Qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));cs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return We(Qe),null;case 4:return ds(),null;case 10:return Ig(t.type._context),null;case 22:case 23:return Wg(),null;case 24:return null;default:return null}}var _c=!1,Dt=!1,nR=typeof WeakSet=="function"?WeakSet:Set,K=null;function Lo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){rt(e,t,r)}else n.current=null}function Hp(e,t,n){try{n()}catch(r){rt(e,t,r)}}var q0=!1;function rR(e,t){if(Ip=pu,e=oS(),bg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=e,f=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++c===i&&(a=s),f===o&&++u===r&&(l=s),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tp={focusedElem:e,selectionRange:n},pu=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,S=p.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?y:Rn(t.type,y),S);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(_){rt(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return p=q0,q0=!1,p}function ba(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Hp(t,n,o)}i=i.next}while(i!==r)}}function Ad(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nC(e){var t=e.alternate;t!==null&&(e.alternate=null,nC(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gn],delete t[Ya],delete t[Ap],delete t[zT],delete t[UT])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rC(e){return e.tag===5||e.tag===3||e.tag===4}function G0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rC(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vu));else if(r!==4&&(e=e.child,e!==null))for(qp(e,t,n),e=e.sibling;e!==null;)qp(e,t,n),e=e.sibling}function Gp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gp(e,t,n),e=e.sibling;e!==null;)Gp(e,t,n),e=e.sibling}var xt=null,Pn=!1;function Ar(e,t,n){for(n=n.child;n!==null;)iC(e,t,n),n=n.sibling}function iC(e,t,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(Cd,n)}catch{}switch(n.tag){case 5:Dt||Lo(n,t);case 6:var r=xt,i=Pn;xt=null,Ar(e,t,n),xt=r,Pn=i,xt!==null&&(Pn?(e=xt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xt.removeChild(n.stateNode));break;case 18:xt!==null&&(Pn?(e=xt,n=n.stateNode,e.nodeType===8?ch(e.parentNode,n):e.nodeType===1&&ch(e,n),Ha(e)):ch(xt,n.stateNode));break;case 4:r=xt,i=Pn,xt=n.stateNode.containerInfo,Pn=!0,Ar(e,t,n),xt=r,Pn=i;break;case 0:case 11:case 14:case 15:if(!Dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Hp(n,t,s),i=i.next}while(i!==r)}Ar(e,t,n);break;case 1:if(!Dt&&(Lo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){rt(n,t,a)}Ar(e,t,n);break;case 21:Ar(e,t,n);break;case 22:n.mode&1?(Dt=(r=Dt)||n.memoizedState!==null,Ar(e,t,n),Dt=r):Ar(e,t,n);break;default:Ar(e,t,n)}}function K0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nR),t.forEach(function(r){var i=fR.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:xt=a.stateNode,Pn=!1;break e;case 3:xt=a.stateNode.containerInfo,Pn=!0;break e;case 4:xt=a.stateNode.containerInfo,Pn=!0;break e}a=a.return}if(xt===null)throw Error(U(160));iC(o,s,i),xt=null,Pn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){rt(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)oC(t,e),t=t.sibling}function oC(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tn(t,e),Wn(e),r&4){try{ba(3,e,e.return),Ad(3,e)}catch(y){rt(e,e.return,y)}try{ba(5,e,e.return)}catch(y){rt(e,e.return,y)}}break;case 1:Tn(t,e),Wn(e),r&512&&n!==null&&Lo(n,n.return);break;case 5:if(Tn(t,e),Wn(e),r&512&&n!==null&&Lo(n,n.return),e.flags&32){var i=e.stateNode;try{Ua(i,"")}catch(y){rt(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&xb(i,o),vp(a,s);var c=vp(a,o);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?Ab(i,d):u==="dangerouslySetInnerHTML"?Rb(i,d):u==="children"?Ua(i,d):lg(i,u,d,c)}switch(a){case"input":fp(i,o);break;case"textarea":Ib(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Ho(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?Ho(i,!!o.multiple,o.defaultValue,!0):Ho(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ya]=o}catch(y){rt(e,e.return,y)}}break;case 6:if(Tn(t,e),Wn(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){rt(e,e.return,y)}}break;case 3:if(Tn(t,e),Wn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ha(t.containerInfo)}catch(y){rt(e,e.return,y)}break;case 4:Tn(t,e),Wn(e);break;case 13:Tn(t,e),Wn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Bg=ct())),r&4&&K0(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Dt=(c=Dt)||u,Tn(t,e),Dt=c):Tn(t,e),Wn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(K=e,u=e.child;u!==null;){for(d=K=u;K!==null;){switch(f=K,h=f.child,f.tag){case 0:case 11:case 14:case 15:ba(4,f,f.return);break;case 1:Lo(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(y){rt(r,n,y)}}break;case 5:Lo(f,f.return);break;case 22:if(f.memoizedState!==null){Q0(d);continue}}h!==null?(h.return=f,K=h):Q0(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Pb("display",s))}catch(y){rt(e,e.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){rt(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Tn(t,e),Wn(e),r&4&&K0(e);break;case 21:break;default:Tn(t,e),Wn(e)}}function Wn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rC(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ua(i,""),r.flags&=-33);var o=G0(e);Gp(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=G0(e);qp(e,a,s);break;default:throw Error(U(161))}}catch(l){rt(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function iR(e,t,n){K=e,sC(e)}function sC(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||_c;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Dt;a=_c;var c=Dt;if(_c=s,(Dt=l)&&!c)for(K=i;K!==null;)s=K,l=s.child,s.tag===22&&s.memoizedState!==null?X0(i):l!==null?(l.return=s,K=l):X0(i);for(;o!==null;)K=o,sC(o),o=o.sibling;K=i,_c=a,Dt=c}Y0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,K=o):Y0(e)}}function Y0(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Dt||Ad(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Dt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Rn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&N0(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}N0(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ha(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Dt||t.flags&512&&Vp(t)}catch(f){rt(t,t.return,f)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function Q0(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function X0(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ad(4,t)}catch(l){rt(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){rt(t,i,l)}}var o=t.return;try{Vp(t)}catch(l){rt(t,o,l)}break;case 5:var s=t.return;try{Vp(t)}catch(l){rt(t,s,l)}}}catch(l){rt(t,t.return,l)}if(t===e){K=null;break}var a=t.sibling;if(a!==null){a.return=t.return,K=a;break}K=t.return}}var oR=Math.ceil,Tu=Ir.ReactCurrentDispatcher,zg=Ir.ReactCurrentOwner,Sn=Ir.ReactCurrentBatchConfig,Se=0,bt=null,ft=null,Pt=0,rn=0,Do=gi(0),pt=0,tl=null,Vi=0,Nd=0,Ug=0,Sa=null,qt=null,Bg=0,hs=1/0,or=null,Ru=!1,Kp=null,Xr=null,wc=!1,Hr=null,Pu=0,Ca=0,Yp=null,Yc=-1,Qc=0;function Ut(){return Se&6?ct():Yc!==-1?Yc:Yc=ct()}function Jr(e){return e.mode&1?Se&2&&Pt!==0?Pt&-Pt:jT.transition!==null?(Qc===0&&(Qc=Wb()),Qc):(e=Te,e!==0||(e=window.event,e=e===void 0?16:Qb(e.type)),e):1}function Dn(e,t,n,r){if(50<Ca)throw Ca=0,Yp=null,Error(U(185));Rl(e,n,r),(!(Se&2)||e!==bt)&&(e===bt&&(!(Se&2)&&(Nd|=n),pt===4&&Fr(e,Pt)),Jt(e,r),n===1&&Se===0&&!(t.mode&1)&&(hs=ct()+500,Td&&vi()))}function Jt(e,t){var n=e.callbackNode;j2(e,t);var r=hu(e,e===bt?Pt:0);if(r===0)n!==null&&s0(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&s0(n),t===1)e.tag===0?BT(J0.bind(null,e)):mS(J0.bind(null,e)),$T(function(){!(Se&6)&&vi()}),n=null;else{switch(Hb(r)){case 1:n=hg;break;case 4:n=Bb;break;case 16:n=fu;break;case 536870912:n=jb;break;default:n=fu}n=pC(n,aC.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function aC(e,t){if(Yc=-1,Qc=0,Se&6)throw Error(U(327));var n=e.callbackNode;if(Yo()&&e.callbackNode!==n)return null;var r=hu(e,e===bt?Pt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Au(e,r);else{t=r;var i=Se;Se|=2;var o=cC();(bt!==e||Pt!==t)&&(or=null,hs=ct()+500,Fi(e,t));do try{lR();break}catch(a){lC(e,a)}while(1);xg(),Tu.current=o,Se=i,ft!==null?t=0:(bt=null,Pt=0,t=pt)}if(t!==0){if(t===2&&(i=Sp(e),i!==0&&(r=i,t=Qp(e,i))),t===1)throw n=tl,Fi(e,0),Fr(e,r),Jt(e,ct()),n;if(t===6)Fr(e,r);else{if(i=e.current.alternate,!(r&30)&&!sR(i)&&(t=Au(e,r),t===2&&(o=Sp(e),o!==0&&(r=o,t=Qp(e,o))),t===1))throw n=tl,Fi(e,0),Fr(e,r),Jt(e,ct()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:Si(e,qt,or);break;case 3:if(Fr(e,r),(r&130023424)===r&&(t=Bg+500-ct(),10<t)){if(hu(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ut(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Pp(Si.bind(null,e,qt,or),t);break}Si(e,qt,or);break;case 4:if(Fr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ln(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ct()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oR(r/1960))-r,10<r){e.timeoutHandle=Pp(Si.bind(null,e,qt,or),r);break}Si(e,qt,or);break;case 5:Si(e,qt,or);break;default:throw Error(U(329))}}}return Jt(e,ct()),e.callbackNode===n?aC.bind(null,e):null}function Qp(e,t){var n=Sa;return e.current.memoizedState.isDehydrated&&(Fi(e,t).flags|=256),e=Au(e,t),e!==2&&(t=qt,qt=n,t!==null&&Xp(t)),e}function Xp(e){qt===null?qt=e:qt.push.apply(qt,e)}function sR(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Fn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fr(e,t){for(t&=~Ug,t&=~Nd,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ln(t),r=1<<n;e[n]=-1,t&=~r}}function J0(e){if(Se&6)throw Error(U(327));Yo();var t=hu(e,0);if(!(t&1))return Jt(e,ct()),null;var n=Au(e,t);if(e.tag!==0&&n===2){var r=Sp(e);r!==0&&(t=r,n=Qp(e,r))}if(n===1)throw n=tl,Fi(e,0),Fr(e,t),Jt(e,ct()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Si(e,qt,or),Jt(e,ct()),null}function jg(e,t){var n=Se;Se|=1;try{return e(t)}finally{Se=n,Se===0&&(hs=ct()+500,Td&&vi())}}function qi(e){Hr!==null&&Hr.tag===0&&!(Se&6)&&Yo();var t=Se;Se|=1;var n=Sn.transition,r=Te;try{if(Sn.transition=null,Te=1,e)return e()}finally{Te=r,Sn.transition=n,Se=t,!(Se&6)&&vi()}}function Wg(){rn=Do.current,We(Do)}function Fi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,DT(n)),ft!==null)for(n=ft.return;n!==null;){var r=n;switch(Cg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yu();break;case 3:ds(),We(Qt),We($t),Ng();break;case 5:Ag(r);break;case 4:ds();break;case 13:We(Qe);break;case 19:We(Qe);break;case 10:Ig(r.type._context);break;case 22:case 23:Wg()}n=n.return}if(bt=e,ft=e=Zr(e.current,null),Pt=rn=t,pt=0,tl=null,Ug=Nd=Vi=0,qt=Sa=null,Ri!==null){for(t=0;t<Ri.length;t++)if(n=Ri[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Ri=null}return e}function lC(e,t){do{var n=ft;try{if(xg(),qc.current=Iu,xu){for(var r=Xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xu=!1}if(Hi=0,yt=ht=Xe=null,wa=!1,Ja=0,zg.current=null,n===null||n.return===null){pt=1,tl=t,ft=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=z0(s);if(h!==null){h.flags&=-257,U0(h,s,a,o,t),h.mode&1&&F0(o,c,t),t=h,l=c;var p=t.updateQueue;if(p===null){var y=new Set;y.add(l),t.updateQueue=y}else p.add(l);break e}else{if(!(t&1)){F0(o,c,t),Hg();break e}l=Error(U(426))}}else if(Ge&&a.mode&1){var S=z0(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),U0(S,s,a,o,t),Eg(fs(l,a));break e}}o=l=fs(l,a),pt!==4&&(pt=2),Sa===null?Sa=[o]:Sa.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=VS(o,l,t);A0(o,v);break e;case 1:a=l;var m=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Xr===null||!Xr.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=qS(o,a,t);A0(o,_);break e}}o=o.return}while(o!==null)}dC(n)}catch(C){t=C,ft===n&&n!==null&&(ft=n=n.return);continue}break}while(1)}function cC(){var e=Tu.current;return Tu.current=Iu,e===null?Iu:e}function Hg(){(pt===0||pt===3||pt===2)&&(pt=4),bt===null||!(Vi&268435455)&&!(Nd&268435455)||Fr(bt,Pt)}function Au(e,t){var n=Se;Se|=2;var r=cC();(bt!==e||Pt!==t)&&(or=null,Fi(e,t));do try{aR();break}catch(i){lC(e,i)}while(1);if(xg(),Se=n,Tu.current=r,ft!==null)throw Error(U(261));return bt=null,Pt=0,pt}function aR(){for(;ft!==null;)uC(ft)}function lR(){for(;ft!==null&&!O2();)uC(ft)}function uC(e){var t=hC(e.alternate,e,rn);e.memoizedProps=e.pendingProps,t===null?dC(e):ft=t,zg.current=null}function dC(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=tR(n,t),n!==null){n.flags&=32767,ft=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pt=6,ft=null;return}}else if(n=eR(n,t,rn),n!==null){ft=n;return}if(t=t.sibling,t!==null){ft=t;return}ft=t=e}while(t!==null);pt===0&&(pt=5)}function Si(e,t,n){var r=Te,i=Sn.transition;try{Sn.transition=null,Te=1,cR(e,t,n,r)}finally{Sn.transition=i,Te=r}return null}function cR(e,t,n,r){do Yo();while(Hr!==null);if(Se&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(W2(e,o),e===bt&&(ft=bt=null,Pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wc||(wc=!0,pC(fu,function(){return Yo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Sn.transition,Sn.transition=null;var s=Te;Te=1;var a=Se;Se|=4,zg.current=null,rR(e,n),oC(n,e),RT(Tp),pu=!!Ip,Tp=Ip=null,e.current=n,iR(n),M2(),Se=a,Te=s,Sn.transition=o}else e.current=n;if(wc&&(wc=!1,Hr=e,Pu=i),o=e.pendingLanes,o===0&&(Xr=null),$2(n.stateNode),Jt(e,ct()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ru)throw Ru=!1,e=Kp,Kp=null,e;return Pu&1&&e.tag!==0&&Yo(),o=e.pendingLanes,o&1?e===Yp?Ca++:(Ca=0,Yp=e):Ca=0,vi(),null}function Yo(){if(Hr!==null){var e=Hb(Pu),t=Sn.transition,n=Te;try{if(Sn.transition=null,Te=16>e?16:e,Hr===null)var r=!1;else{if(e=Hr,Hr=null,Pu=0,Se&6)throw Error(U(331));var i=Se;for(Se|=4,K=e.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(K=c;K!==null;){var u=K;switch(u.tag){case 0:case 11:case 15:ba(8,u,o)}var d=u.child;if(d!==null)d.return=u,K=d;else for(;K!==null;){u=K;var f=u.sibling,h=u.return;if(nC(u),u===c){K=null;break}if(f!==null){f.return=h,K=f;break}K=h}}}var p=o.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else e:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ba(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,K=v;break e}K=o.return}}var m=e.current;for(K=m;K!==null;){s=K;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,K=g;else e:for(s=m;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ad(9,a)}}catch(C){rt(a,a.return,C)}if(a===s){K=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,K=_;break e}K=a.return}}if(Se=i,vi(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(Cd,e)}catch{}r=!0}return r}finally{Te=n,Sn.transition=t}}return!1}function Z0(e,t,n){t=fs(n,t),t=VS(e,t,1),e=Qr(e,t,1),t=Ut(),e!==null&&(Rl(e,1,t),Jt(e,t))}function rt(e,t,n){if(e.tag===3)Z0(e,e,n);else for(;t!==null;){if(t.tag===3){Z0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xr===null||!Xr.has(r))){e=fs(n,e),e=qS(t,e,1),t=Qr(t,e,1),e=Ut(),t!==null&&(Rl(t,1,e),Jt(t,e));break}}t=t.return}}function uR(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ut(),e.pingedLanes|=e.suspendedLanes&n,bt===e&&(Pt&n)===n&&(pt===4||pt===3&&(Pt&130023424)===Pt&&500>ct()-Bg?Fi(e,0):Ug|=n),Jt(e,t)}function fC(e,t){t===0&&(e.mode&1?(t=uc,uc<<=1,!(uc&130023424)&&(uc=4194304)):t=1);var n=Ut();e=yr(e,t),e!==null&&(Rl(e,t,n),Jt(e,n))}function dR(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fC(e,n)}function fR(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),fC(e,n)}var hC;hC=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qt.current)Gt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Gt=!1,ZT(e,t,n);Gt=!!(e.flags&131072)}else Gt=!1,Ge&&t.flags&1048576&&gS(t,bu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Kc(e,t),e=t.pendingProps;var i=ls(t,$t.current);Ko(t,n),i=Mg(null,t,r,e,i,n);var o=Lg();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xt(r)?(o=!0,_u(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rg(t),i.updater=Rd,t.stateNode=i,i._reactInternals=t,$p(t,r,e,n),t=Up(null,t,r,!0,o,n)):(t.tag=0,Ge&&o&&Sg(t),zt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Kc(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=pR(r),e=Rn(r,e),i){case 0:t=zp(null,t,r,e,n);break e;case 1:t=W0(null,t,r,e,n);break e;case 11:t=B0(null,t,r,e,n);break e;case 14:t=j0(null,t,r,Rn(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rn(r,i),zp(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rn(r,i),W0(e,t,r,i,n);case 3:e:{if(QS(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,wS(e,t),Eu(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=fs(Error(U(423)),t),t=H0(e,t,r,n,i);break e}else if(r!==i){i=fs(Error(U(424)),t),t=H0(e,t,r,n,i);break e}else for(sn=Yr(t.stateNode.containerInfo.firstChild),an=t,Ge=!0,An=null,n=ES(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cs(),r===i){t=_r(e,t,n);break e}zt(e,t,r,n)}t=t.child}return t;case 5:return kS(t),e===null&&Mp(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Rp(r,i)?s=null:o!==null&&Rp(r,o)&&(t.flags|=32),YS(e,t),zt(e,t,s,n),t.child;case 6:return e===null&&Mp(t),null;case 13:return XS(e,t,n);case 4:return Pg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=us(t,null,r,n):zt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rn(r,i),B0(e,t,r,i,n);case 7:return zt(e,t,t.pendingProps,n),t.child;case 8:return zt(e,t,t.pendingProps.children,n),t.child;case 12:return zt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,$e(Su,r._currentValue),r._currentValue=s,o!==null)if(Fn(o.value,s)){if(o.children===i.children&&!Qt.current){t=_r(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=hr(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Lp(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(U(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Lp(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}zt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ko(t,n),i=kn(i),r=r(i),t.flags|=1,zt(e,t,r,n),t.child;case 14:return r=t.type,i=Rn(r,t.pendingProps),i=Rn(r.type,i),j0(e,t,r,i,n);case 15:return GS(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rn(r,i),Kc(e,t),t.tag=1,Xt(r)?(e=!0,_u(t)):e=!1,Ko(t,n),SS(t,r,i),$p(t,r,i,n),Up(null,t,r,!0,e,n);case 19:return JS(e,t,n);case 22:return KS(e,t,n)}throw Error(U(156,t.tag))};function pC(e,t){return Ub(e,t)}function hR(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(e,t,n,r){return new hR(e,t,n,r)}function Vg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pR(e){if(typeof e=="function")return Vg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ug)return 11;if(e===dg)return 14}return 2}function Zr(e,t){var n=e.alternate;return n===null?(n=wn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xc(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Vg(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case xo:return zi(n.children,i,o,t);case cg:s=8,i|=8;break;case ap:return e=wn(12,n,t,i|2),e.elementType=ap,e.lanes=o,e;case lp:return e=wn(13,n,t,i),e.elementType=lp,e.lanes=o,e;case cp:return e=wn(19,n,t,i),e.elementType=cp,e.lanes=o,e;case Cb:return Od(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bb:s=10;break e;case Sb:s=9;break e;case ug:s=11;break e;case dg:s=14;break e;case Lr:s=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=wn(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function zi(e,t,n,r){return e=wn(7,e,r,t),e.lanes=n,e}function Od(e,t,n,r){return e=wn(22,e,r,t),e.elementType=Cb,e.lanes=n,e.stateNode={isHidden:!1},e}function vh(e,t,n){return e=wn(6,e,null,t),e.lanes=n,e}function yh(e,t,n){return t=wn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mR(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jf(0),this.expirationTimes=Jf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qg(e,t,n,r,i,o,s,a,l){return e=new mR(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=wn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rg(o),e}function gR(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ko,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mC(e){if(!e)return ai;e=e._reactInternals;e:{if(ao(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(Xt(n))return pS(e,n,t)}return t}function gC(e,t,n,r,i,o,s,a,l){return e=qg(n,r,!0,e,i,o,s,a,l),e.context=mC(null),n=e.current,r=Ut(),i=Jr(n),o=hr(r,i),o.callback=t??null,Qr(n,o,i),e.current.lanes=i,Rl(e,i,r),Jt(e,r),e}function Md(e,t,n,r){var i=t.current,o=Ut(),s=Jr(i);return n=mC(n),t.context===null?t.context=n:t.pendingContext=n,t=hr(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qr(i,t,s),e!==null&&(Dn(e,i,s,o),Vc(e,i,s)),s}function Nu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function e1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gg(e,t){e1(e,t),(e=e.alternate)&&e1(e,t)}function vR(){return null}var vC=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kg(e){this._internalRoot=e}Ld.prototype.render=Kg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Md(e,t,null,null)};Ld.prototype.unmount=Kg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qi(function(){Md(null,e,null,null)}),t[vr]=null}};function Ld(e){this._internalRoot=e}Ld.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gb();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$r.length&&t!==0&&t<$r[n].priority;n++);$r.splice(n,0,e),n===0&&Yb(e)}};function Yg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function t1(){}function yR(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Nu(s);o.call(c)}}var s=gC(t,r,e,0,null,!1,!1,"",t1);return e._reactRootContainer=s,e[vr]=s.current,Ga(e.nodeType===8?e.parentNode:e),qi(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Nu(l);a.call(c)}}var l=qg(e,0,!1,null,null,!1,!1,"",t1);return e._reactRootContainer=l,e[vr]=l.current,Ga(e.nodeType===8?e.parentNode:e),qi(function(){Md(t,l,n,r)}),l}function $d(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Nu(s);a.call(l)}}Md(t,s,e,i)}else s=yR(n,t,e,i,r);return Nu(s)}Vb=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ca(t.pendingLanes);n!==0&&(pg(t,n|1),Jt(t,ct()),!(Se&6)&&(hs=ct()+500,vi()))}break;case 13:qi(function(){var r=yr(e,1);if(r!==null){var i=Ut();Dn(r,e,1,i)}}),Gg(e,1)}};mg=function(e){if(e.tag===13){var t=yr(e,134217728);if(t!==null){var n=Ut();Dn(t,e,134217728,n)}Gg(e,134217728)}};qb=function(e){if(e.tag===13){var t=Jr(e),n=yr(e,t);if(n!==null){var r=Ut();Dn(n,e,t,r)}Gg(e,t)}};Gb=function(){return Te};Kb=function(e,t){var n=Te;try{return Te=e,t()}finally{Te=n}};_p=function(e,t,n){switch(t){case"input":if(fp(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Id(r);if(!i)throw Error(U(90));kb(r),fp(r,i)}}}break;case"textarea":Ib(e,n);break;case"select":t=n.value,t!=null&&Ho(e,!!n.multiple,t,!1)}};Mb=jg;Lb=qi;var _R={usingClientEntryPoint:!1,Events:[Al,Po,Id,Nb,Ob,jg]},Qs={findFiberByHostInstance:Ti,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},wR={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fb(e),e===null?null:e.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||vR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{Cd=bc.inject(wR),Qn=bc}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_R;fn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yg(t))throw Error(U(200));return gR(e,t,null,n)};fn.createRoot=function(e,t){if(!Yg(e))throw Error(U(299));var n=!1,r="",i=vC;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=qg(e,1,!1,null,null,n,!1,r,i),e[vr]=t.current,Ga(e.nodeType===8?e.parentNode:e),new Kg(t)};fn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=Fb(t),e=e===null?null:e.stateNode,e};fn.flushSync=function(e){return qi(e)};fn.hydrate=function(e,t,n){if(!Dd(t))throw Error(U(200));return $d(null,e,t,!0,n)};fn.hydrateRoot=function(e,t,n){if(!Yg(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=vC;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=gC(t,null,e,1,n??null,i,!1,o,s),e[vr]=t.current,Ga(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ld(t)};fn.render=function(e,t,n){if(!Dd(t))throw Error(U(200));return $d(null,e,t,!1,n)};fn.unmountComponentAtNode=function(e){if(!Dd(e))throw Error(U(40));return e._reactRootContainer?(qi(function(){$d(null,null,e,!1,function(){e._reactRootContainer=null,e[vr]=null})}),!0):!1};fn.unstable_batchedUpdates=jg;fn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Dd(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return $d(e,t,n,!1,r)};fn.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=fn})(v2);const Sc=cb(ss);var n1=ss;ip.createRoot=n1.createRoot,ip.hydrateRoot=n1.hydrateRoot;const Fe=w.createContext();var Ou={},bR={get exports(){return Ou},set exports(e){Ou=e}},Me={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd=60103,zd=60106,Ol=60107,Ml=60108,Ll=60114,Dl=60109,$l=60110,Fl=60112,zl=60113,Qg=60120,Ul=60115,Bl=60116,yC=60121,_C=60122,wC=60117,bC=60129,SC=60131;if(typeof Symbol=="function"&&Symbol.for){var kt=Symbol.for;Fd=kt("react.element"),zd=kt("react.portal"),Ol=kt("react.fragment"),Ml=kt("react.strict_mode"),Ll=kt("react.profiler"),Dl=kt("react.provider"),$l=kt("react.context"),Fl=kt("react.forward_ref"),zl=kt("react.suspense"),Qg=kt("react.suspense_list"),Ul=kt("react.memo"),Bl=kt("react.lazy"),yC=kt("react.block"),_C=kt("react.server.block"),wC=kt("react.fundamental"),bC=kt("react.debug_trace_mode"),SC=kt("react.legacy_hidden")}function Bn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fd:switch(e=e.type,e){case Ol:case Ll:case Ml:case zl:case Qg:return e;default:switch(e=e&&e.$$typeof,e){case $l:case Fl:case Bl:case Ul:case Dl:return e;default:return t}}case zd:return t}}}var SR=Dl,CR=Fd,ER=Fl,kR=Ol,xR=Bl,IR=Ul,TR=zd,RR=Ll,PR=Ml,AR=zl;Me.ContextConsumer=$l;Me.ContextProvider=SR;Me.Element=CR;Me.ForwardRef=ER;Me.Fragment=kR;Me.Lazy=xR;Me.Memo=IR;Me.Portal=TR;Me.Profiler=RR;Me.StrictMode=PR;Me.Suspense=AR;Me.isAsyncMode=function(){return!1};Me.isConcurrentMode=function(){return!1};Me.isContextConsumer=function(e){return Bn(e)===$l};Me.isContextProvider=function(e){return Bn(e)===Dl};Me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fd};Me.isForwardRef=function(e){return Bn(e)===Fl};Me.isFragment=function(e){return Bn(e)===Ol};Me.isLazy=function(e){return Bn(e)===Bl};Me.isMemo=function(e){return Bn(e)===Ul};Me.isPortal=function(e){return Bn(e)===zd};Me.isProfiler=function(e){return Bn(e)===Ll};Me.isStrictMode=function(e){return Bn(e)===Ml};Me.isSuspense=function(e){return Bn(e)===zl};Me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ol||e===Ll||e===bC||e===Ml||e===zl||e===Qg||e===SC||typeof e=="object"&&e!==null&&(e.$$typeof===Bl||e.$$typeof===Ul||e.$$typeof===Dl||e.$$typeof===$l||e.$$typeof===Fl||e.$$typeof===wC||e.$$typeof===yC||e[0]===_C)};Me.typeOf=Bn;(function(e){e.exports=Me})(bR);function NR(e){function t(P,$,O,H,x){for(var ie=0,F=0,pe=0,te=0,oe,Z,Ae=0,Ve=0,Y,_e=Y=oe=0,re=0,ze=0,gt=0,Ke=0,Ct=O.length,Wt=Ct-1,ut,ee="",me="",Ht="",Vt="",Et;re<Ct;){if(Z=O.charCodeAt(re),re===Wt&&F+te+pe+ie!==0&&(F!==0&&(Z=F===47?10:47),te=pe=ie=0,Ct++,Wt++),F+te+pe+ie===0){if(re===Wt&&(0<ze&&(ee=ee.replace(f,"")),0<ee.trim().length)){switch(Z){case 32:case 9:case 59:case 13:case 10:break;default:ee+=O.charAt(re)}Z=59}switch(Z){case 123:for(ee=ee.trim(),oe=ee.charCodeAt(0),Y=1,Ke=++re;re<Ct;){switch(Z=O.charCodeAt(re)){case 123:Y++;break;case 125:Y--;break;case 47:switch(Z=O.charCodeAt(re+1)){case 42:case 47:e:{for(_e=re+1;_e<Wt;++_e)switch(O.charCodeAt(_e)){case 47:if(Z===42&&O.charCodeAt(_e-1)===42&&re+2!==_e){re=_e+1;break e}break;case 10:if(Z===47){re=_e+1;break e}}re=_e}}break;case 91:Z++;case 40:Z++;case 34:case 39:for(;re++<Wt&&O.charCodeAt(re)!==Z;);}if(Y===0)break;re++}switch(Y=O.substring(Ke,re),oe===0&&(oe=(ee=ee.replace(d,"").trim()).charCodeAt(0)),oe){case 64:switch(0<ze&&(ee=ee.replace(f,"")),Z=ee.charCodeAt(1),Z){case 100:case 109:case 115:case 45:ze=$;break;default:ze=X}if(Y=t($,ze,Y,Z,x+1),Ke=Y.length,0<R&&(ze=n(X,ee,gt),Et=a(3,Y,ze,$,V,q,Ke,Z,x,H),ee=ze.join(""),Et!==void 0&&(Ke=(Y=Et.trim()).length)===0&&(Z=0,Y="")),0<Ke)switch(Z){case 115:ee=ee.replace(k,s);case 100:case 109:case 45:Y=ee+"{"+Y+"}";break;case 107:ee=ee.replace(m,"$1 $2"),Y=ee+"{"+Y+"}",Y=N===1||N===2&&o("@"+Y,3)?"@-webkit-"+Y+"@"+Y:"@"+Y;break;default:Y=ee+Y,H===112&&(Y=(me+=Y,""))}else Y="";break;default:Y=t($,n($,ee,gt),Y,H,x+1)}Ht+=Y,Y=gt=ze=_e=oe=0,ee="",Z=O.charCodeAt(++re);break;case 125:case 59:if(ee=(0<ze?ee.replace(f,""):ee).trim(),1<(Ke=ee.length))switch(_e===0&&(oe=ee.charCodeAt(0),oe===45||96<oe&&123>oe)&&(Ke=(ee=ee.replace(" ",":")).length),0<R&&(Et=a(1,ee,$,P,V,q,me.length,H,x,H))!==void 0&&(Ke=(ee=Et.trim()).length)===0&&(ee="\0\0"),oe=ee.charCodeAt(0),Z=ee.charCodeAt(1),oe){case 0:break;case 64:if(Z===105||Z===99){Vt+=ee+O.charAt(re);break}default:ee.charCodeAt(Ke-1)!==58&&(me+=i(ee,oe,Z,ee.charCodeAt(2)))}gt=ze=_e=oe=0,ee="",Z=O.charCodeAt(++re)}}switch(Z){case 13:case 10:F===47?F=0:1+oe===0&&H!==107&&0<ee.length&&(ze=1,ee+="\0"),0<R*M&&a(0,ee,$,P,V,q,me.length,H,x,H),q=1,V++;break;case 59:case 125:if(F+te+pe+ie===0){q++;break}default:switch(q++,ut=O.charAt(re),Z){case 9:case 32:if(te+ie+F===0)switch(Ae){case 44:case 58:case 9:case 32:ut="";break;default:Z!==32&&(ut=" ")}break;case 0:ut="\\0";break;case 12:ut="\\f";break;case 11:ut="\\v";break;case 38:te+F+ie===0&&(ze=gt=1,ut="\f"+ut);break;case 108:if(te+F+ie+D===0&&0<_e)switch(re-_e){case 2:Ae===112&&O.charCodeAt(re-3)===58&&(D=Ae);case 8:Ve===111&&(D=Ve)}break;case 58:te+F+ie===0&&(_e=re);break;case 44:F+pe+te+ie===0&&(ze=1,ut+="\r");break;case 34:case 39:F===0&&(te=te===Z?0:te===0?Z:te);break;case 91:te+F+pe===0&&ie++;break;case 93:te+F+pe===0&&ie--;break;case 41:te+F+ie===0&&pe--;break;case 40:if(te+F+ie===0){if(oe===0)switch(2*Ae+3*Ve){case 533:break;default:oe=1}pe++}break;case 64:F+pe+te+ie+_e+Y===0&&(Y=1);break;case 42:case 47:if(!(0<te+ie+pe))switch(F){case 0:switch(2*Z+3*O.charCodeAt(re+1)){case 235:F=47;break;case 220:Ke=re,F=42}break;case 42:Z===47&&Ae===42&&Ke+2!==re&&(O.charCodeAt(Ke+2)===33&&(me+=O.substring(Ke,re+1)),ut="",F=0)}}F===0&&(ee+=ut)}Ve=Ae,Ae=Z,re++}if(Ke=me.length,0<Ke){if(ze=$,0<R&&(Et=a(2,me,ze,P,V,q,Ke,H,x,H),Et!==void 0&&(me=Et).length===0))return Vt+me+Ht;if(me=ze.join(",")+"{"+me+"}",N*D!==0){switch(N!==2||o(me,2)||(D=0),D){case 111:me=me.replace(_,":-moz-$1")+me;break;case 112:me=me.replace(g,"::-webkit-input-$1")+me.replace(g,"::-moz-$1")+me.replace(g,":-ms-input-$1")+me}D=0}}return Vt+me+Ht}function n(P,$,O){var H=$.trim().split(S);$=H;var x=H.length,ie=P.length;switch(ie){case 0:case 1:var F=0;for(P=ie===0?"":P[0]+" ";F<x;++F)$[F]=r(P,$[F],O).trim();break;default:var pe=F=0;for($=[];F<x;++F)for(var te=0;te<ie;++te)$[pe++]=r(P[te]+" ",H[F],O).trim()}return $}function r(P,$,O){var H=$.charCodeAt(0);switch(33>H&&(H=($=$.trim()).charCodeAt(0)),H){case 38:return $.replace(v,"$1"+P.trim());case 58:return P.trim()+$.replace(v,"$1"+P.trim());default:if(0<1*O&&0<$.indexOf("\f"))return $.replace(v,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+$}function i(P,$,O,H){var x=P+";",ie=2*$+3*O+4*H;if(ie===944){P=x.indexOf(":",9)+1;var F=x.substring(P,x.length-1).trim();return F=x.substring(0,P).trim()+F+";",N===1||N===2&&o(F,1)?"-webkit-"+F+F:F}if(N===0||N===2&&!o(x,1))return x;switch(ie){case 1015:return x.charCodeAt(10)===97?"-webkit-"+x+x:x;case 951:return x.charCodeAt(3)===116?"-webkit-"+x+x:x;case 963:return x.charCodeAt(5)===110?"-webkit-"+x+x:x;case 1009:if(x.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+x+x;case 978:return"-webkit-"+x+"-moz-"+x+x;case 1019:case 983:return"-webkit-"+x+"-moz-"+x+"-ms-"+x+x;case 883:if(x.charCodeAt(8)===45)return"-webkit-"+x+x;if(0<x.indexOf("image-set(",11))return x.replace(L,"$1-webkit-$2")+x;break;case 932:if(x.charCodeAt(4)===45)switch(x.charCodeAt(5)){case 103:return"-webkit-box-"+x.replace("-grow","")+"-webkit-"+x+"-ms-"+x.replace("grow","positive")+x;case 115:return"-webkit-"+x+"-ms-"+x.replace("shrink","negative")+x;case 98:return"-webkit-"+x+"-ms-"+x.replace("basis","preferred-size")+x}return"-webkit-"+x+"-ms-"+x+x;case 964:return"-webkit-"+x+"-ms-flex-"+x+x;case 1023:if(x.charCodeAt(8)!==99)break;return F=x.substring(x.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+F+"-webkit-"+x+"-ms-flex-pack"+F+x;case 1005:return p.test(x)?x.replace(h,":-webkit-")+x.replace(h,":-moz-")+x:x;case 1e3:switch(F=x.substring(13).trim(),$=F.indexOf("-")+1,F.charCodeAt(0)+F.charCodeAt($)){case 226:F=x.replace(C,"tb");break;case 232:F=x.replace(C,"tb-rl");break;case 220:F=x.replace(C,"lr");break;default:return x}return"-webkit-"+x+"-ms-"+F+x;case 1017:if(x.indexOf("sticky",9)===-1)break;case 975:switch($=(x=P).length-10,F=(x.charCodeAt($)===33?x.substring(0,$):x).substring(P.indexOf(":",7)+1).trim(),ie=F.charCodeAt(0)+(F.charCodeAt(7)|0)){case 203:if(111>F.charCodeAt(8))break;case 115:x=x.replace(F,"-webkit-"+F)+";"+x;break;case 207:case 102:x=x.replace(F,"-webkit-"+(102<ie?"inline-":"")+"box")+";"+x.replace(F,"-webkit-"+F)+";"+x.replace(F,"-ms-"+F+"box")+";"+x}return x+";";case 938:if(x.charCodeAt(5)===45)switch(x.charCodeAt(6)){case 105:return F=x.replace("-items",""),"-webkit-"+x+"-webkit-box-"+F+"-ms-flex-"+F+x;case 115:return"-webkit-"+x+"-ms-flex-item-"+x.replace(T,"")+x;default:return"-webkit-"+x+"-ms-flex-line-pack"+x.replace("align-content","").replace(T,"")+x}break;case 973:case 989:if(x.charCodeAt(3)!==45||x.charCodeAt(4)===122)break;case 931:case 953:if(I.test(P)===!0)return(F=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?i(P.replace("stretch","fill-available"),$,O,H).replace(":fill-available",":stretch"):x.replace(F,"-webkit-"+F)+x.replace(F,"-moz-"+F.replace("fill-",""))+x;break;case 962:if(x="-webkit-"+x+(x.charCodeAt(5)===102?"-ms-"+x:"")+x,O+H===211&&x.charCodeAt(13)===105&&0<x.indexOf("transform",10))return x.substring(0,x.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+x}return x}function o(P,$){var O=P.indexOf($===1?":":"{"),H=P.substring(0,$!==3?O:10);return O=P.substring(O+1,P.length-1),W($!==2?H:H.replace(A,"$1"),O,$)}function s(P,$){var O=i($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return O!==$+";"?O.replace(E," or ($1)").substring(4):"("+$+")"}function a(P,$,O,H,x,ie,F,pe,te,oe){for(var Z=0,Ae=$,Ve;Z<R;++Z)switch(Ve=se[Z].call(u,P,Ae,O,H,x,ie,F,pe,te,oe)){case void 0:case!1:case!0:case null:break;default:Ae=Ve}if(Ae!==$)return Ae}function l(P){switch(P){case void 0:case null:R=se.length=0;break;default:if(typeof P=="function")se[R++]=P;else if(typeof P=="object")for(var $=0,O=P.length;$<O;++$)l(P[$]);else M=!!P|0}return l}function c(P){return P=P.prefix,P!==void 0&&(W=null,P?typeof P!="function"?N=1:(N=2,W=P):N=0),c}function u(P,$){var O=P;if(33>O.charCodeAt(0)&&(O=O.trim()),J=O,O=[J],0<R){var H=a(-1,$,O,O,V,q,0,0,0,0);H!==void 0&&typeof H=="string"&&($=H)}var x=t(X,O,$,0,0);return 0<R&&(H=a(-2,x,O,O,V,q,x.length,0,0,0),H!==void 0&&(x=H)),J="",D=0,q=V=1,x}var d=/^\0+/g,f=/[\0\r\f]/g,h=/: */g,p=/zoo|gra/,y=/([,: ])(transform)/g,S=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,_=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,T=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,I=/stretch|:\s*\w+\-(?:conte|avail)/,L=/([^-])(image-set\()/,q=1,V=1,D=0,N=1,X=[],se=[],R=0,W=null,M=0,J="";return u.use=l,u.set=c,e!==void 0&&c(e),u}var OR={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function CC(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var MR=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Jp=CC(function(e){return MR.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Zp={},LR={get exports(){return Zp},set exports(e){Zp=e}},Re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var St=typeof Symbol=="function"&&Symbol.for,Xg=St?Symbol.for("react.element"):60103,Jg=St?Symbol.for("react.portal"):60106,Ud=St?Symbol.for("react.fragment"):60107,Bd=St?Symbol.for("react.strict_mode"):60108,jd=St?Symbol.for("react.profiler"):60114,Wd=St?Symbol.for("react.provider"):60109,Hd=St?Symbol.for("react.context"):60110,Zg=St?Symbol.for("react.async_mode"):60111,Vd=St?Symbol.for("react.concurrent_mode"):60111,qd=St?Symbol.for("react.forward_ref"):60112,Gd=St?Symbol.for("react.suspense"):60113,DR=St?Symbol.for("react.suspense_list"):60120,Kd=St?Symbol.for("react.memo"):60115,Yd=St?Symbol.for("react.lazy"):60116,$R=St?Symbol.for("react.block"):60121,FR=St?Symbol.for("react.fundamental"):60117,zR=St?Symbol.for("react.responder"):60118,UR=St?Symbol.for("react.scope"):60119;function pn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xg:switch(e=e.type,e){case Zg:case Vd:case Ud:case jd:case Bd:case Gd:return e;default:switch(e=e&&e.$$typeof,e){case Hd:case qd:case Yd:case Kd:case Wd:return e;default:return t}}case Jg:return t}}}function EC(e){return pn(e)===Vd}Re.AsyncMode=Zg;Re.ConcurrentMode=Vd;Re.ContextConsumer=Hd;Re.ContextProvider=Wd;Re.Element=Xg;Re.ForwardRef=qd;Re.Fragment=Ud;Re.Lazy=Yd;Re.Memo=Kd;Re.Portal=Jg;Re.Profiler=jd;Re.StrictMode=Bd;Re.Suspense=Gd;Re.isAsyncMode=function(e){return EC(e)||pn(e)===Zg};Re.isConcurrentMode=EC;Re.isContextConsumer=function(e){return pn(e)===Hd};Re.isContextProvider=function(e){return pn(e)===Wd};Re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xg};Re.isForwardRef=function(e){return pn(e)===qd};Re.isFragment=function(e){return pn(e)===Ud};Re.isLazy=function(e){return pn(e)===Yd};Re.isMemo=function(e){return pn(e)===Kd};Re.isPortal=function(e){return pn(e)===Jg};Re.isProfiler=function(e){return pn(e)===jd};Re.isStrictMode=function(e){return pn(e)===Bd};Re.isSuspense=function(e){return pn(e)===Gd};Re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ud||e===Vd||e===jd||e===Bd||e===Gd||e===DR||typeof e=="object"&&e!==null&&(e.$$typeof===Yd||e.$$typeof===Kd||e.$$typeof===Wd||e.$$typeof===Hd||e.$$typeof===qd||e.$$typeof===FR||e.$$typeof===zR||e.$$typeof===UR||e.$$typeof===$R)};Re.typeOf=pn;(function(e){e.exports=Re})(LR);var ev=Zp,BR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},WR={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tv={};tv[ev.ForwardRef]=WR;tv[ev.Memo]=kC;function r1(e){return ev.isMemo(e)?kC:tv[e.$$typeof]||BR}var HR=Object.defineProperty,VR=Object.getOwnPropertyNames,i1=Object.getOwnPropertySymbols,qR=Object.getOwnPropertyDescriptor,GR=Object.getPrototypeOf,o1=Object.prototype;function xC(e,t,n){if(typeof t!="string"){if(o1){var r=GR(t);r&&r!==o1&&xC(e,r,n)}var i=VR(t);i1&&(i=i.concat(i1(t)));for(var o=r1(e),s=r1(t),a=0;a<i.length;++a){var l=i[a];if(!jR[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var c=qR(t,l);try{HR(e,l,c)}catch{}}}}return e}var KR=xC;function cr(){return(cr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s1=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},em=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ou.typeOf(e)},Mu=Object.freeze([]),ei=Object.freeze({});function nl(e){return typeof e=="function"}function a1(e){return e.displayName||e.name||"Component"}function nv(e){return e&&typeof e.styledComponentId=="string"}var ps=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",rv=typeof window<"u"&&"HTMLElement"in window,YR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function jl(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var QR=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&jl(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),c=0,u=r.length;c<u;c++)this.tag.insertRule(l,r[c])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Jc=new Map,Lu=new Map,Ea=1,Cc=function(e){if(Jc.has(e))return Jc.get(e);for(;Lu.has(Ea);)Ea++;var t=Ea++;return Jc.set(e,t),Lu.set(t,e),t},XR=function(e){return Lu.get(e)},JR=function(e,t){t>=Ea&&(Ea=t+1),Jc.set(e,t),Lu.set(t,e)},ZR="style["+ps+'][data-styled-version="5.3.10"]',eP=new RegExp("^"+ps+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),tP=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},nP=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(eP);if(a){var l=0|parseInt(a[1],10),c=a[2];l!==0&&(JR(c,l),tP(e,c,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},rP=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},IC=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,c=l.length;c>=0;c--){var u=l[c];if(u&&u.nodeType===1&&u.hasAttribute(ps))return u}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ps,"active"),r.setAttribute("data-styled-version","5.3.10");var s=rP();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},iP=function(){function e(n){var r=this.element=IC(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}jl(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),oP=function(){function e(n){var r=this.element=IC(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),sP=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),l1=rv,aP={isServer:!rv,useCSSOMInjection:!YR},TC=function(){function e(n,r,i){n===void 0&&(n=ei),r===void 0&&(r={}),this.options=cr({},aP,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&rv&&l1&&(l1=!1,function(o){for(var s=document.querySelectorAll(ZR),a=0,l=s.length;a<l;a++){var c=s[a];c&&c.getAttribute(ps)!=="active"&&(nP(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Cc(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(cr({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new sP(s):o?new iP(s):new oP(s),new QR(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Cc(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Cc(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Cc(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=XR(s);if(a!==void 0){var l=n.names.get(a),c=r.getGroup(s);if(l&&c&&l.size){var u=ps+".g"+s+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(f){f.length>0&&(d+=f+",")}),o+=""+c+u+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),lP=/(a)(d)/gi,c1=function(e){return String.fromCharCode(e+(e>25?39:97))};function tm(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=c1(t%52)+n;return(c1(t%52)+n).replace(lP,"$1-$2")}var $o=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},RC=function(e){return $o(5381,e)};function cP(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(nl(n)&&!nv(n))return!1}return!0}var uP=RC("5.3.10"),dP=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&cP(t),this.componentId=n,this.baseHash=$o(uP,n),this.baseStyle=r,TC.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=ms(this.rules,t,n,r).join(""),a=tm($o(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,u=$o(this.baseHash,r.hash),d="",f=0;f<c;f++){var h=this.rules[f];if(typeof h=="string")d+=h;else if(h){var p=ms(h,t,n,r),y=Array.isArray(p)?p.join(""):p;u=$o(u,y+f),d+=y}}if(d){var S=tm(u>>>0);if(!n.hasNameForId(i,S)){var v=r(d,"."+S,void 0,i);n.insertRules(i,S,v)}o.push(S)}}return o.join(" ")},e}(),fP=/^\s*\/\/.*$/gm,hP=[":","[",".","#"];function pP(e){var t,n,r,i,o=e===void 0?ei:e,s=o.options,a=s===void 0?ei:s,l=o.plugins,c=l===void 0?Mu:l,u=new NR(a),d=[],f=function(y){function S(v){if(v)try{y(v+"}")}catch{}}return function(v,m,g,_,C,k,E,T,A,I){switch(v){case 1:if(A===0&&m.charCodeAt(0)===64)return y(m+";"),"";break;case 2:if(T===0)return m+"/*|*/";break;case 3:switch(T){case 102:case 112:return y(g[0]+m),"";default:return m+(I===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(S)}}}(function(y){d.push(y)}),h=function(y,S,v){return S===0&&hP.indexOf(v[n.length])!==-1||v.match(i)?y:"."+t};function p(y,S,v,m){m===void 0&&(m="&");var g=y.replace(fP,""),_=S&&v?v+" "+S+" { "+g+" }":g;return t=m,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),u(v||!S?"":S,_)}return u.use([].concat(c,[function(y,S,v){y===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(r,h))},f,function(y){if(y===-2){var S=d;return d=[],S}}])),p.hash=c.length?c.reduce(function(y,S){return S.name||jl(15),$o(y,S.name)},5381).toString():"",p}var PC=je.createContext();PC.Consumer;var AC=je.createContext(),mP=(AC.Consumer,new TC),nm=pP();function gP(){return w.useContext(PC)||mP}function vP(){return w.useContext(AC)||nm}var yP=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=nm);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return jl(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=nm),this.name+t.hash},e}(),_P=/([A-Z])/,wP=/([A-Z])/g,bP=/^ms-/,SP=function(e){return"-"+e.toLowerCase()};function u1(e){return _P.test(e)?e.replace(wP,SP).replace(bP,"-ms-"):e}var d1=function(e){return e==null||e===!1||e===""};function ms(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=ms(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(d1(e))return"";if(nv(e))return"."+e.styledComponentId;if(nl(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var l=e(t);return ms(l,t,n,r)}var c;return e instanceof yP?n?(e.inject(n,r),e.getName(r)):e:em(e)?function u(d,f){var h,p,y=[];for(var S in d)d.hasOwnProperty(S)&&!d1(d[S])&&(Array.isArray(d[S])&&d[S].isCss||nl(d[S])?y.push(u1(S)+":",d[S],";"):em(d[S])?y.push.apply(y,u(d[S],S)):y.push(u1(S)+": "+(h=S,(p=d[S])==null||typeof p=="boolean"||p===""?"":typeof p!="number"||p===0||h in OR||h.startsWith("--")?String(p).trim():p+"px")+";"));return f?[f+" {"].concat(y,["}"]):y}(e):e.toString()}var f1=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function CP(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return nl(e)||em(e)?f1(ms(s1(Mu,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:f1(ms(s1(e,n)))}var EP=function(e,t,n){return n===void 0&&(n=ei),e.theme!==n.theme&&e.theme||t||n.theme},kP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xP=/(^-|-$)/g;function _h(e){return e.replace(kP,"-").replace(xP,"")}var IP=function(e){return tm(RC(e)>>>0)};function Ec(e){return typeof e=="string"&&!0}var rm=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},TP=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function RP(e,t,n){var r=e[n];rm(t)&&rm(r)?NC(r,t):e[n]=t}function NC(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(rm(s))for(var a in s)TP(a)&&RP(e,s[a],a)}return e}var OC=je.createContext();OC.Consumer;var wh={};function MC(e,t,n){var r=nv(e),i=!Ec(e),o=t.attrs,s=o===void 0?Mu:o,a=t.componentId,l=a===void 0?function(m,g){var _=typeof m!="string"?"sc":_h(m);wh[_]=(wh[_]||0)+1;var C=_+"-"+IP("5.3.10"+_+wh[_]);return g?g+"-"+C:C}(t.displayName,t.parentComponentId):a,c=t.displayName,u=c===void 0?function(m){return Ec(m)?"styled."+m:"Styled("+a1(m)+")"}(e):c,d=t.displayName&&t.componentId?_h(t.displayName)+"-"+t.componentId:t.componentId||l,f=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(m,g,_){return e.shouldForwardProp(m,g,_)&&t.shouldForwardProp(m,g,_)}:e.shouldForwardProp);var p,y=new dP(n,d,r?e.componentStyle:void 0),S=y.isStatic&&s.length===0,v=function(m,g){return function(_,C,k,E){var T=_.attrs,A=_.componentStyle,I=_.defaultProps,L=_.foldedComponentIds,q=_.shouldForwardProp,V=_.styledComponentId,D=_.target,N=function(H,x,ie){H===void 0&&(H=ei);var F=cr({},x,{theme:H}),pe={};return ie.forEach(function(te){var oe,Z,Ae,Ve=te;for(oe in nl(Ve)&&(Ve=Ve(F)),Ve)F[oe]=pe[oe]=oe==="className"?(Z=pe[oe],Ae=Ve[oe],Z&&Ae?Z+" "+Ae:Z||Ae):Ve[oe]}),[F,pe]}(EP(C,w.useContext(OC),I)||ei,C,T),X=N[0],se=N[1],R=function(H,x,ie,F){var pe=gP(),te=vP(),oe=x?H.generateAndInjectStyles(ei,pe,te):H.generateAndInjectStyles(ie,pe,te);return oe}(A,E,X),W=k,M=se.$as||C.$as||se.as||C.as||D,J=Ec(M),P=se!==C?cr({},C,{},se):C,$={};for(var O in P)O[0]!=="$"&&O!=="as"&&(O==="forwardedAs"?$.as=P[O]:(q?q(O,Jp,M):!J||Jp(O))&&($[O]=P[O]));return C.style&&se.style!==C.style&&($.style=cr({},C.style,{},se.style)),$.className=Array.prototype.concat(L,V,R!==V?R:null,C.className,se.className).filter(Boolean).join(" "),$.ref=W,w.createElement(M,$)}(p,m,g,S)};return v.displayName=u,(p=je.forwardRef(v)).attrs=f,p.componentStyle=y,p.displayName=u,p.shouldForwardProp=h,p.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Mu,p.styledComponentId=d,p.target=r?e.target:e,p.withComponent=function(m){var g=t.componentId,_=function(k,E){if(k==null)return{};var T,A,I={},L=Object.keys(k);for(A=0;A<L.length;A++)T=L[A],E.indexOf(T)>=0||(I[T]=k[T]);return I}(t,["componentId"]),C=g&&g+"-"+(Ec(m)?m:_h(a1(m)));return MC(m,cr({},_,{attrs:f,componentId:C}),n)},Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?NC({},e.defaultProps,m):m}}),Object.defineProperty(p,"toString",{value:function(){return"."+p.styledComponentId}}),i&&KR(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),p}var im=function(e){return function t(n,r,i){if(i===void 0&&(i=ei),!Ou.isValidElementType(r))return jl(1,String(r));var o=function(){return n(r,i,CP.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,cr({},i,{},s))},o.attrs=function(s){return t(n,r,cr({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(MC,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){im[e]=im(e)});const j=im,Qo=j.span`
  font-weight: 400;
`,LC="#ccc6c4",DC="rgba(255, 255, 255, 0.61)",PP="0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px -1px rgba(0, 0, 0, 0.2);",AP="#8992cd",NP="#665e5b",yi=j.div`
  background-image: ${e=>`url(${e.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,lo=j.span`
  margin-top: 10vh;
  margin-left: 5vw;
  height: 80%;
`,$C=j.span`
  display: flex;
  justify-content: space-between;
`,FC=j.span`
  width: 53%;
`,zC=j.span`
  width: 47%;
`,UC=j.span`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
`,BC=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -60px auto;
  padding: 30px;
  width: 50%;
  height: 80%;
  border-radius: 10px;
  background-color: ${DC};

  ${e=>e.login&&`
    margin: -50px auto;
    width: 30%;
    height: 75%;
    border-radius: 15px;
  `}
`,iv=j.a`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  color: ${NP};
  cursor: pointer;
`,Zc=j.p`
  color: red;
  font-size: 10px;
  padding: 2px 10px;
`,OP=j.div`
  max-width: 600px;
  margin: 0 auto;
`,MP=j.h1`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 0px;
  padding-bottom: 10px;
  text-align: center;
`,LP=j.h2`
  font-style: normal;
  font-weight: 100;
  font-size: 30px;
  width: 535px;
`,DP=()=>{const[e,t]=w.useState(".");return w.useEffect(()=>{const n=setInterval(()=>{t(r=>r.length<3?r+".":".")},600);return()=>{clearInterval(n)}},[]),z(LP,{children:["Connecting you to the care you need",e]})},$P=()=>b(yi,{image:"../../results.jpg",children:z(OP,{children:[b(MP,{children:"ConnectedSpine"}),b(DP,{})]})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(e,t){if(!e)throw Ts(t)},Ts=function(e){return new Error("Firebase Database ("+jC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},FP=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},ov={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=o>>2,d=(o&3)<<4|a>>4;let f=(a&15)<<2|c>>6,h=c&63;l||(h=64,s||(f=64)),r.push(n[u],n[d],n[f],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(WC(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):FP(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||c==null||d==null)throw new zP;const f=o<<2|a>>4;if(r.push(f),c!==64){const h=a<<4&240|c>>2;if(r.push(h),d!==64){const p=c<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class zP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HC=function(e){const t=WC(e);return ov.encodeByteArray(t,!0)},Du=function(e){return HC(e).replace(/\./g,"")},$u=function(e){try{return ov.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(e){return VC(void 0,e)}function VC(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!BP(n)||(e[n]=VC(e[n],t[n]));return e}function BP(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=()=>jP().__FIREBASE_DEFAULTS__,HP=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},VP=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$u(e[1]);return t&&JSON.parse(t)},sv=()=>{try{return WP()||HP()||VP()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},qC=e=>{var t,n;return(n=(t=sv())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},qP=e=>{const t=qC(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},GP=()=>{var e;return(e=sv())===null||e===void 0?void 0:e.config},GC=e=>{var t;return(t=sv())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KP(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Du(JSON.stringify(n)),Du(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function av(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function KC(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function YC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YP(){const e=Ft();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function QC(){return jC.NODE_ADMIN===!0}function XC(){try{return typeof indexedDB=="object"}catch{return!1}}function JC(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function QP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP="FirebaseError";class nr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=XP,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,co.prototype.create)}}class co{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?JP(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new nr(i,a,r)}}function JP(e,t){return e.replace(ZP,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const ZP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(e){return JSON.parse(e)}function wt(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=rl($u(o[0])||""),n=rl($u(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},eA=function(e){const t=ZC(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},tA=function(e){const t=ZC(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function gs(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function om(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Fu(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function il(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(h1(o)&&h1(s)){if(!il(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function h1(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function da(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function fa(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)r[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],o=this.chain_[1],s=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^o&(s^a),u=1518500249):(c=o^s^a,u=1859775393):d<60?(c=o&s|a&(o|s),u=2400959708):(c=o^s^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=s,s=(o<<30|o>>>2)&4294967295,o=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const o=this.buf_;let s=this.inbuf_;for(;i<n;){if(s===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(o[s]=t.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}else for(;i<n;)if(o[s]=t[i],++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}this.inbuf_=s,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let o=24;o>=0;o-=8)t[r]=this.chain_[i]>>o&255,++r;return t}}function rA(e,t){const n=new iA(e,t);return n.subscribe.bind(n)}class iA{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oA(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=bh),i.error===void 0&&(i.error=bh),i.complete===void 0&&(i.complete=bh);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oA(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function bh(){}function lv(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const o=i-55296;r++,B(r<e.length,"Surrogate pair missing trail surrogate.");const s=e.charCodeAt(r)-56320;i=65536+(o<<10)+s}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Xd=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=1e3,lA=2,cA=4*60*60*1e3,uA=.5;function p1(e,t=aA,n=lA){const r=t*Math.pow(n,e),i=Math.round(uA*r*(Math.random()-.5)*2);return Math.min(cA,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e){return e&&e._delegate?e._delegate:e}class zn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dA=class{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Qd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(hA(t))try{this.getOrInitializeService({instanceIdentifier:Ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Ci){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ci){return this.instances.has(t)}getOptions(t=Ci){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fA(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ci){return this.component?this.component.multipleInstances?t:Ci:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function fA(e){return e===Ci?void 0:e}function hA(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new dA(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Ne||(Ne={}));const mA={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},gA=Ne.INFO,vA={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},yA=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=vA[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Jd{constructor(t){this.name=t,this._logLevel=gA,this._logHandler=yA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ne))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?mA[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...t),this._logHandler(this,Ne.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...t),this._logHandler(this,Ne.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...t),this._logHandler(this,Ne.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...t),this._logHandler(this,Ne.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...t),this._logHandler(this,Ne.ERROR,...t)}}const _A=(e,t)=>t.some(n=>e instanceof n);let m1,g1;function wA(){return m1||(m1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bA(){return g1||(g1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eE=new WeakMap,sm=new WeakMap,tE=new WeakMap,Sh=new WeakMap,cv=new WeakMap;function SA(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(ti(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&eE.set(n,e)}).catch(()=>{}),cv.set(t,e),t}function CA(e){if(sm.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});sm.set(e,t)}let am={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return sm.get(e);if(t==="objectStoreNames")return e.objectStoreNames||tE.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ti(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function EA(e){am=e(am)}function kA(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ch(this),t,...n);return tE.set(r,t.sort?t.sort():[t]),ti(r)}:bA().includes(e)?function(...t){return e.apply(Ch(this),t),ti(eE.get(this))}:function(...t){return ti(e.apply(Ch(this),t))}}function xA(e){return typeof e=="function"?kA(e):(e instanceof IDBTransaction&&CA(e),_A(e,wA())?new Proxy(e,am):e)}function ti(e){if(e instanceof IDBRequest)return SA(e);if(Sh.has(e))return Sh.get(e);const t=xA(e);return t!==e&&(Sh.set(e,t),cv.set(t,e)),t}const Ch=e=>cv.get(e);function IA(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=ti(s);return r&&s.addEventListener("upgradeneeded",l=>{r(ti(s.result),l.oldVersion,l.newVersion,ti(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const TA=["get","getKey","getAll","getAllKeys","count"],RA=["put","add","delete","clear"],Eh=new Map;function v1(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Eh.get(t))return Eh.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=RA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||TA.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Eh.set(t,o),o}EA(e=>({...e,get:(t,n,r)=>v1(t,n)||e.get(t,n,r),has:(t,n)=>!!v1(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AA(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const lm="@firebase/app",y1="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Jd("@firebase/app"),NA="@firebase/app-compat",OA="@firebase/analytics-compat",MA="@firebase/analytics",LA="@firebase/app-check-compat",DA="@firebase/app-check",$A="@firebase/auth",FA="@firebase/auth-compat",zA="@firebase/database",UA="@firebase/database-compat",BA="@firebase/functions",jA="@firebase/functions-compat",WA="@firebase/installations",HA="@firebase/installations-compat",VA="@firebase/messaging",qA="@firebase/messaging-compat",GA="@firebase/performance",KA="@firebase/performance-compat",YA="@firebase/remote-config",QA="@firebase/remote-config-compat",XA="@firebase/storage",JA="@firebase/storage-compat",ZA="@firebase/firestore",eN="@firebase/firestore-compat",tN="firebase",nN="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="[DEFAULT]",rN={[lm]:"fire-core",[NA]:"fire-core-compat",[MA]:"fire-analytics",[OA]:"fire-analytics-compat",[DA]:"fire-app-check",[LA]:"fire-app-check-compat",[$A]:"fire-auth",[FA]:"fire-auth-compat",[zA]:"fire-rtdb",[UA]:"fire-rtdb-compat",[BA]:"fire-fn",[jA]:"fire-fn-compat",[WA]:"fire-iid",[HA]:"fire-iid-compat",[VA]:"fire-fcm",[qA]:"fire-fcm-compat",[GA]:"fire-perf",[KA]:"fire-perf-compat",[YA]:"fire-rc",[QA]:"fire-rc-compat",[XA]:"fire-gcs",[JA]:"fire-gcs-compat",[ZA]:"fire-fst",[eN]:"fire-fst-compat","fire-js":"fire-js",[tN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new Map,um=new Map;function iN(e,t){try{e.container.addComponent(t)}catch(n){Gi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function tr(e){const t=e.name;if(um.has(t))return Gi.debug(`There were multiple attempts to register component ${t}.`),!1;um.set(t,e);for(const n of zu.values())iN(n,e);return!0}function uo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ni=new co("app","Firebase",oN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ni.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=nN;function nE(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:cm,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw ni.create("bad-app-name",{appName:String(i)});if(n||(n=GP()),!n)throw ni.create("no-options");const o=zu.get(i);if(o){if(il(n,o.options)&&il(r,o.config))return o;throw ni.create("duplicate-app",{appName:i})}const s=new pA(i);for(const l of um.values())s.addComponent(l);const a=new sN(n,r,s);return zu.set(i,a),a}function uv(e=cm){const t=zu.get(e);if(!t&&e===cm)return nE();if(!t)throw ni.create("no-app",{appName:e});return t}function Cn(e,t,n){var r;let i=(r=rN[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Gi.warn(a.join(" "));return}tr(new zn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN="firebase-heartbeat-database",lN=1,ol="firebase-heartbeat-store";let kh=null;function rE(){return kh||(kh=IA(aN,lN,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ol)}}}).catch(e=>{throw ni.create("idb-open",{originalErrorMessage:e.message})})),kh}async function cN(e){try{return(await rE()).transaction(ol).objectStore(ol).get(iE(e))}catch(t){if(t instanceof nr)Gi.warn(t.message);else{const n=ni.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Gi.warn(n.message)}}}async function _1(e,t){try{const r=(await rE()).transaction(ol,"readwrite");return await r.objectStore(ol).put(t,iE(e)),r.done}catch(n){if(n instanceof nr)Gi.warn(n.message);else{const r=ni.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gi.warn(r.message)}}}function iE(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=1024,dN=30*24*60*60*1e3;class fN{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=w1();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=dN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=w1(),{heartbeatsToSend:n,unsentEntries:r}=hN(this._heartbeatsCache.heartbeats),i=Du(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function w1(){return new Date().toISOString().substring(0,10)}function hN(e,t=uN){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),b1(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),b1(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pN{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XC()?JC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _1(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _1(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function b1(e){return Du(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(e){tr(new zn("platform-logger",t=>new PA(t),"PRIVATE")),tr(new zn("heartbeat",t=>new fN(t),"PRIVATE")),Cn(lm,y1,e),Cn(lm,y1,"esm2017"),Cn("fire-js","")}mN("");var gN="firebase",vN="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn(gN,vN,"app");const S1="@firebase/database",C1="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oE="";function yN(e){oE=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),wt(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:rl(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return rr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new _N(t)}}catch{}return new wN},Ai=sE("localStorage"),dm=sE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Jd("@firebase/database"),bN=function(){let e=1;return function(){return e++}}(),aE=function(e){const t=sA(e),n=new nA;n.update(t);const r=n.digest();return ov.encodeByteArray(r)},Wl=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Wl.apply(null,r):typeof r=="object"?t+=wt(r):t+=r,t+=" "}return t};let Ui=null,E1=!0;const SN=function(e,t){B(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Xo.logLevel=Ne.VERBOSE,Ui=Xo.log.bind(Xo),t&&dm.set("logging_enabled",!0)):typeof e=="function"?Ui=e:(Ui=null,dm.remove("logging_enabled"))},Tt=function(...e){if(E1===!0&&(E1=!1,Ui===null&&dm.get("logging_enabled")===!0&&SN(!0)),Ui){const t=Wl.apply(null,e);Ui(t)}},Hl=function(e){return function(...t){Tt(e,...t)}},fm=function(...e){const t="FIREBASE INTERNAL ERROR: "+Wl(...e);Xo.error(t)},wr=function(...e){const t=`FIREBASE FATAL ERROR: ${Wl(...e)}`;throw Xo.error(t),new Error(t)},Zt=function(...e){const t="FIREBASE WARNING: "+Wl(...e);Xo.warn(t)},CN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Zt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},dv=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},EN=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vs="[MIN_NAME]",Ki="[MAX_NAME]",fo=function(e,t){if(e===t)return 0;if(e===vs||t===Ki)return-1;if(t===vs||e===Ki)return 1;{const n=k1(e),r=k1(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},kN=function(e,t){return e===t?0:e<t?-1:1},Xs=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+wt(t))},fv=function(e){if(typeof e!="object"||e===null)return wt(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=wt(t[r]),n+=":",n+=fv(e[t[r]]);return n+="}",n},lE=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Nt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const cE=function(e){B(!dv(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,o,s,a,l;e===0?(o=0,s=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=a+r,s=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(e/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},xN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},IN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function TN(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const RN=new RegExp("^-?(0*)\\d{1,10}$"),PN=-2147483648,AN=2147483647,k1=function(e){if(RN.test(e)){const t=Number(e);if(t>=PN&&t<=AN)return t}return null},As=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw Zt("Exception was thrown by user callback.",n),t},Math.floor(0))}},NN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ka=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){Zt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Tt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Zt(t)}}class Jo{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Jo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="5",uE="v",dE="s",fE="r",hE="f",pE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,mE="ls",gE="p",hm="ac",vE="websocket",yE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(t,n,r,i,o=!1,s="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ai.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Ai.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function LN(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function wE(e,t,n){B(typeof t=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(t===vE)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===yE)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);LN(e)&&(n.ns=e.namespace);const i=[];return Nt(n,(o,s)=>{i.push(o+"="+s)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.counters_={}}incrementCounter(t,n=1){rr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return UP(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh={},Ih={};function pv(e){const t=e.toString();return xh[t]||(xh[t]=new DN),xh[t]}function $N(e,t){const n=e.toString();return Ih[n]||(Ih[n]=t()),Ih[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&As(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1="start",zN="close",UN="pLPCommand",BN="pRTLPCB",bE="id",SE="pw",CE="ser",jN="cb",WN="seg",HN="ts",VN="d",qN="dframe",EE=1870,kE=30,GN=EE-kE,KN=25e3,YN=3e4;class Fo{constructor(t,n,r,i,o,s,a){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Hl(t),this.stats_=pv(n),this.urlFn=l=>(this.appCheckToken&&(l[hm]=this.appCheckToken),wE(n,yE,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new FN(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(YN)),EN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mv((...o)=>{const[s,a,l,c,u]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===x1)this.id=a,this.password=l;else if(s===zN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...o)=>{const[s,a]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(s,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[x1]="t",r[CE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[jN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[uE]=hv,this.transportSessionId&&(r[dE]=this.transportSessionId),this.lastSessionId&&(r[mE]=this.lastSessionId),this.applicationId&&(r[gE]=this.applicationId),this.appCheckToken&&(r[hm]=this.appCheckToken),typeof location<"u"&&location.hostname&&pE.test(location.hostname)&&(r[fE]=hE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fo.forceAllow_=!0}static forceDisallow(){Fo.forceDisallow_=!0}static isAvailable(){return Fo.forceAllow_?!0:!Fo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!xN()&&!IN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=wt(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=HC(n),i=lE(r,GN);for(let o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[qN]="t",r[bE]=t,r[SE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=wt(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class mv{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bN(),window[UN+this.uniqueCallbackIdentifier]=t,window[BN+this.uniqueCallbackIdentifier]=n,this.myIFrame=mv.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(a){Tt("frame writing exception"),a.stack&&Tt(a.stack),Tt(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Tt("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[bE]=this.myID,t[SE]=this.myPW,t[CE]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+kE+r.length<=EE;){const s=this.pendingSegs.shift();r=r+"&"+WN+i+"="+s.seg+"&"+HN+i+"="+s.ts+"&"+VN+i+"="+s.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(KN)),o=()=>{clearTimeout(i),r()};this.addTag(t,o)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Tt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=16384,XN=45e3;let Uu=null;typeof MozWebSocket<"u"?Uu=MozWebSocket:typeof WebSocket<"u"&&(Uu=WebSocket);class Nn{constructor(t,n,r,i,o,s,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Hl(this.connId),this.stats_=pv(n),this.connURL=Nn.connectionURL_(n,s,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,o){const s={};return s[uE]=hv,typeof location<"u"&&location.hostname&&pE.test(location.hostname)&&(s[fE]=hE),n&&(s[dE]=n),r&&(s[mE]=r),i&&(s[hm]=i),o&&(s[gE]=o),wE(t,vE,s)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ai.set("previous_websocket_failure",!0);try{let r;QC(),this.mySock=new Uu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Nn.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&Uu!==null&&!Nn.forceDisallow_}static previouslyFailed(){return Ai.isInMemoryStorage||Ai.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ai.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=rl(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(B(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=wt(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=lE(n,QN);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(XN))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Nn.responsesRequiredToBeHealthy=2;Nn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Fo,Nn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=Nn&&Nn.isAvailable();let r=n&&!Nn.previouslyFailed();if(t.webSocketOnly&&(n||Zt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Nn];else{const i=this.transports_=[];for(const o of sl.ALL_TRANSPORTS)o&&o.isAvailable()&&i.push(o);sl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}sl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=6e4,ZN=5e3,eO=10*1024,tO=100*1024,Th="t",I1="d",nO="s",T1="r",rO="e",R1="o",P1="a",A1="n",N1="p",iO="h";class oO{constructor(t,n,r,i,o,s,a,l,c,u){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Hl("c:"+this.id+":"),this.transportManager_=new sl(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=ka(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>tO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>eO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Th in t){const n=t[Th];n===P1?this.upgradeIfSecondaryHealthy_():n===T1?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===R1&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=Xs("t",t),r=Xs("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:N1,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:P1,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:A1,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=Xs("t",t),r=Xs("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=Xs(Th,t);if(I1 in t){const r=t[I1];if(n===iO){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===A1){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===nO?this.onConnectionShutdown_(r):n===T1?this.onReset_(r):n===rO?fm("Server Error: "+r):n===R1?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fm("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),hv!==r&&Zt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ka(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(JN))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ka(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ZN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:N1,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ai.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(t){this.allowedEvents_=t,this.listeners_={},B(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}}validateEventType_(t){B(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends IE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!av()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Bu}getInitialEvent(t){return B(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=32,M1=768;class Oe{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function ke(){return new Oe("")}function ve(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function li(e){return e.pieces_.length-e.pieceNum_}function De(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Oe(e.pieces_,t)}function gv(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function sO(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function al(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function TE(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Oe(t,0)}function ot(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Oe)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Oe(n,0)}function ye(e){return e.pieceNum_>=e.pieces_.length}function Kt(e,t){const n=ve(e),r=ve(t);if(n===null)return t;if(n===r)return Kt(De(e),De(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function aO(e,t){const n=al(e,0),r=al(t,0);for(let i=0;i<n.length&&i<r.length;i++){const o=fo(n[i],r[i]);if(o!==0)return o}return n.length===r.length?0:n.length<r.length?-1:1}function vv(e,t){if(li(e)!==li(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function bn(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(li(e)>li(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class lO{constructor(t,n){this.errorPrefix_=n,this.parts_=al(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Xd(this.parts_[r]);RE(this)}}function cO(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Xd(t),RE(e)}function uO(e){const t=e.parts_.pop();e.byteLength_-=Xd(t),e.parts_.length>0&&(e.byteLength_-=1)}function RE(e){if(e.byteLength_>M1)throw new Error(e.errorPrefix_+"has a key path longer than "+M1+" bytes ("+e.byteLength_+").");if(e.parts_.length>O1)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+O1+") or object contains a cycle "+Ei(e))}function Ei(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv extends IE{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new yv}getInitialEvent(t){return B(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=1e3,dO=60*5*1e3,L1=30*1e3,fO=1.3,hO=3e4,pO="server_kill",D1=3;class pr extends xE{constructor(t,n,r,i,o,s,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=pr.nextPersistentConnectionId_++,this.log_=Hl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Js,this.maxReconnectDelay_=dO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!QC())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yv.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Bu.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,o={r:i,a:t,b:n};this.log_(wt(o)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new Qd,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:s=>{const a=s.d;s.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(t,n,r,i){this.initConnection_();const o=t._queryIdentifier,s=t._path.toString();this.log_("Listen called for "+s+" "+o),this.listens.has(s)||this.listens.set(s,new Map),B(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(s).has(o),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(s).set(o,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const o={p:r},s="q";t.tag&&(o.q=n._queryObject,o.t=t.tag),o.h=t.hashFn(),this.sendRequest(s,o,a=>{const l=a.d,c=a.s;pr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(c,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&rr(t,"w")){const r=gs(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();Zt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||tA(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=L1)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=eA(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const o=i.s,s=i.d||"error";this.authToken_===t&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),B(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const o={p:t},s="n";i&&(o.q=r,o.t=i),this.sendRequest(s,o)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const o={p:n,d:r};this.log_("onDisconnect "+t,o),this.sendRequest(t,o,s=>{i&&setTimeout(()=>{i(s.s,s.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,o){this.initConnection_();const s={p:n,d:r};o!==void 0&&(s.h=o),this.outstandingPuts_.push({action:t,request:s,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(o.s,o.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const o=r.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+wt(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):fm("Unrecognized action received from server: "+wt(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hO&&(this.reconnectDelay_=Js),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+pr.nextConnectionId_++,o=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,r())},c=function(d){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?Tt("getToken() completed but was canceled"):(Tt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new oO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,h=>{Zt(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(pO)},o))}catch(d){this.log_("Failed to get token: "+d),s||(this.repoInfo_.nodeAdmin&&Zt(d),l())}}}interrupt(t){Tt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Tt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],om(this.interruptReasons_)&&(this.reconnectDelay_=Js,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(o=>fv(o)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new Oe(t).toString();let i;if(this.listens.has(r)){const o=this.listens.get(r);i=o.get(n),o.delete(n),o.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){Tt("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=D1&&(this.reconnectDelay_=L1,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Tt("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=D1&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+oE.replace(/\./g,"-")]=1,av()?t["framework.cordova"]=1:YC()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Bu.getInstance().currentlyOnline();return om(this.interruptReasons_)&&t}}pr.nextPersistentConnectionId_=0;pr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new ge(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new ge(vs,t),i=new ge(vs,n);return this.compare(r,i)!==0}minPost(){return ge.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kc;class PE extends Zd{static get __EMPTY_NODE(){return kc}static set __EMPTY_NODE(t){kc=t}compare(t,n){return fo(t.name,n.name)}isDefinedOn(t){throw Ts("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return ge.MIN}maxPost(){return new ge(Ki,kc)}makePost(t,n){return B(typeof t=="string","KeyIndex indexValue must always be a string."),new ge(t,kc)}toString(){return".key"}}const Zo=new PE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,n,r,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let s=1;for(;!t.isEmpty();)if(t=t,s=n?r(t.key,n):1,i&&(s*=-1),s<0)this.isReverse_?t=t.left:t=t.right;else if(s===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class _t{constructor(t,n,r,i,o){this.key=t,this.value=n,this.color=r??_t.RED,this.left=i??Yt.EMPTY_NODE,this.right=o??Yt.EMPTY_NODE}copy(t,n,r,i,o){return new _t(t??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const o=r(t,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Yt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return Yt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}_t.RED=!0;_t.BLACK=!1;class mO{copy(t,n,r,i,o){return this}insert(t,n,r){return new _t(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Yt{constructor(t,n=Yt.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Yt(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,_t.BLACK,null,null))}remove(t){return new Yt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,_t.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new xc(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new xc(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new xc(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new xc(this.root_,null,this.comparator_,!0,t)}}Yt.EMPTY_NODE=new mO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(e,t){return fo(e.name,t.name)}function _v(e,t){return fo(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pm;function vO(e){pm=e}const AE=function(e){return typeof e=="number"?"number:"+cE(e):"string:"+e},NE=function(e){if(e.isLeafNode()){const t=e.val();B(typeof t=="string"||typeof t=="number"||typeof t=="object"&&rr(t,".sv"),"Priority must be a string or number.")}else B(e===pm||e.isEmpty(),"priority of unexpected type.");B(e===pm||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $1;class vt{constructor(t,n=vt.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),NE(this.priorityNode_)}static set __childrenNodeConstructor(t){$1=t}static get __childrenNodeConstructor(){return $1}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new vt(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:vt.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return ye(t)?this:ve(t)===".priority"?this.priorityNode_:vt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:vt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=ve(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||li(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,vt.__childrenNodeConstructor.EMPTY_NODE.updateChild(De(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+AE(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=cE(this.value_):t+=this.value_,this.lazyHash_=aE(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===vt.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof vt.__childrenNodeConstructor?-1:(B(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=vt.VALUE_TYPE_ORDER.indexOf(n),o=vt.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,"Unknown leaf type: "+n),B(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}vt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OE,ME;function yO(e){OE=e}function _O(e){ME=e}class wO extends Zd{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),o=r.compareTo(i);return o===0?fo(t.name,n.name):o}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return ge.MIN}maxPost(){return new ge(Ki,new vt("[PRIORITY-POST]",ME))}makePost(t,n){const r=OE(t);return new ge(n,new vt("[PRIORITY-POST]",r))}toString(){return".priority"}}const st=new wO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=Math.log(2);class SO{constructor(t){const n=o=>parseInt(Math.log(o)/bO,10),r=o=>parseInt(Array(o+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const ju=function(e,t,n,r){e.sort(t);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=e[l],f=n?n(d):d,new _t(f,d.node,_t.BLACK,null,null);{const h=parseInt(u/2,10)+l,p=i(l,h),y=i(h+1,c);return d=e[h],f=n?n(d):d,new _t(f,d.node,_t.BLACK,p,y)}},o=function(l){let c=null,u=null,d=e.length;const f=function(p,y){const S=d-p,v=d;d-=p;const m=i(S+1,v),g=e[S],_=n?n(g):g;h(new _t(_,g.node,y,null,m))},h=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const y=l.nextBitIsOne(),S=Math.pow(2,l.count-(p+1));y?f(S,_t.BLACK):(f(S,_t.BLACK),f(S,_t.RED))}return u},s=new SO(e.length),a=o(s);return new Yt(r||t,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rh;const vo={};class ur{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return B(vo&&st,"ChildrenNode.ts has not been loaded"),Rh=Rh||new ur({".priority":vo},{".priority":st}),Rh}get(t){const n=gs(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Yt?n:null}hasIndex(t){return rr(this.indexSet_,t.toString())}addIndex(t,n){B(t!==Zo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const o=n.getIterator(ge.Wrap);let s=o.getNext();for(;s;)i=i||t.isDefinedOn(s.node),r.push(s),s=o.getNext();let a;i?a=ju(r,t.getCompare()):a=vo;const l=t.toString(),c=Object.assign({},this.indexSet_);c[l]=t;const u=Object.assign({},this.indexes_);return u[l]=a,new ur(u,c)}addToIndexes(t,n){const r=Fu(this.indexes_,(i,o)=>{const s=gs(this.indexSet_,o);if(B(s,"Missing index implementation for "+o),i===vo)if(s.isDefinedOn(t.node)){const a=[],l=n.getIterator(ge.Wrap);let c=l.getNext();for(;c;)c.name!==t.name&&a.push(c),c=l.getNext();return a.push(t),ju(a,s.getCompare())}else return vo;else{const a=n.get(t.name);let l=i;return a&&(l=l.remove(new ge(t.name,a))),l.insert(t,t.node)}});return new ur(r,this.indexSet_)}removeFromIndexes(t,n){const r=Fu(this.indexes_,i=>{if(i===vo)return i;{const o=n.get(t.name);return o?i.remove(new ge(t.name,o)):i}});return new ur(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs;class ue{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&NE(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zs||(Zs=new ue(new Yt(_v),null,ur.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zs}updatePriority(t){return this.children_.isEmpty()?this:new ue(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?Zs:n}}getChild(t){const n=ve(t);return n===null?this:this.getImmediateChild(n).getChild(De(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(B(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new ge(t,n);let i,o;n.isEmpty()?(i=this.children_.remove(t),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),o=this.indexMap_.addToIndexes(r,this.children_));const s=i.isEmpty()?Zs:this.priorityNode_;return new ue(i,s,o)}}updateChild(t,n){const r=ve(t);if(r===null)return n;{B(ve(t)!==".priority"||li(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(De(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,o=!0;if(this.forEachChild(st,(s,a)=>{n[s]=a.val(t),r++,o&&ue.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):o=!1}),!t&&o&&i<2*r){const s=[];for(const a in n)s[a]=n[a];return s}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+AE(this.getPriority().val())+":"),this.forEachChild(st,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":aE(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const o=i.getPredecessorKey(new ge(t,n));return o?o.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new ge(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new ge(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,ge.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,t)<0;)i.getNext(),o=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,ge.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,t)>0;)i.getNext(),o=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Vl?-1:0}withIndex(t){if(t===Zo||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new ue(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Zo||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(st),i=n.getIterator(st);let o=r.getNext(),s=i.getNext();for(;o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1}}resolveIndex_(t){return t===Zo?null:this.indexMap_.get(t.toString())}}ue.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class CO extends ue{constructor(){super(new Yt(_v),ue.EMPTY_NODE,ur.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return ue.EMPTY_NODE}isEmpty(){return!1}}const Vl=new CO;Object.defineProperties(ge,{MIN:{value:new ge(vs,ue.EMPTY_NODE)},MAX:{value:new ge(Ki,Vl)}});PE.__EMPTY_NODE=ue.EMPTY_NODE;vt.__childrenNodeConstructor=ue;vO(Vl);_O(Vl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO=!0;function Rt(e,t=null){if(e===null)return ue.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),B(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new vt(n,Rt(t))}if(!(e instanceof Array)&&EO){const n=[];let r=!1;if(Nt(e,(s,a)=>{if(s.substring(0,1)!=="."){const l=Rt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ge(s,l)))}}),n.length===0)return ue.EMPTY_NODE;const o=ju(n,gO,s=>s.name,_v);if(r){const s=ju(n,st.getCompare());return new ue(o,Rt(t),new ur({".priority":s},{".priority":st}))}else return new ue(o,Rt(t),ur.Default)}else{let n=ue.EMPTY_NODE;return Nt(e,(r,i)=>{if(rr(e,r)&&r.substring(0,1)!=="."){const o=Rt(i);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(r,o))}}),n.updatePriority(Rt(t))}}yO(Rt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO extends Zd{constructor(t){super(),this.indexPath_=t,B(!ye(t)&&ve(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),o=r.compareTo(i);return o===0?fo(t.name,n.name):o}makePost(t,n){const r=Rt(t),i=ue.EMPTY_NODE.updateChild(this.indexPath_,r);return new ge(n,i)}maxPost(){const t=ue.EMPTY_NODE.updateChild(this.indexPath_,Vl);return new ge(Ki,t)}toString(){return al(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO extends Zd{compare(t,n){const r=t.node.compareTo(n.node);return r===0?fo(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return ge.MIN}maxPost(){return ge.MAX}makePost(t,n){const r=Rt(t);return new ge(n,r)}toString(){return".value"}}const IO=new xO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(e){return{type:"value",snapshotNode:e}}function ys(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ll(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function cl(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function TO(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(t){this.index_=t}updateChild(t,n,r,i,o,s){B(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(s!=null&&(r.isEmpty()?t.hasChild(n)?s.trackChildChange(ll(n,a)):B(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(ys(n,r)):s.trackChildChange(cl(n,r,a))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(st,(i,o)=>{n.hasChild(i)||r.trackChildChange(ll(i,o))}),n.isLeafNode()||n.forEachChild(st,(i,o)=>{if(t.hasChild(i)){const s=t.getImmediateChild(i);s.equals(o)||r.trackChildChange(cl(i,o,s))}else r.trackChildChange(ys(i,o))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?ue.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(t){this.indexedFilter_=new wv(t.getIndex()),this.index_=t.getIndex(),this.startPost_=ul.getStartPost_(t),this.endPost_=ul.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,o,s){return this.matches(new ge(n,r))||(r=ue.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,o,s)}updateFullNode(t,n,r){n.isLeafNode()&&(n=ue.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ue.EMPTY_NODE);const o=this;return n.forEachChild(st,(s,a)=>{o.matches(new ge(s,a))||(i=i.updateImmediateChild(s,ue.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ul(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,o,s){return this.rangedFilter_.matches(new ge(n,r))||(r=ue.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,o,s):this.fullLimitUpdateChild_(t,n,r,o,s)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=ue.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ue.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let s=0;for(;o.hasNext()&&s<this.limit_;){const a=o.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),s++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ue.EMPTY_NODE);let o;this.reverse_?o=i.getReverseIterator(this.index_):o=i.getIterator(this.index_);let s=0;for(;o.hasNext();){const a=o.getNext();s<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?s++:i=i.updateImmediateChild(a.name,ue.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,o){let s;if(this.reverse_){const d=this.index_.getCompare();s=(f,h)=>d(h,f)}else s=this.index_.getCompare();const a=t;B(a.numChildren()===this.limit_,"");const l=new ge(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:s(f,l);if(u&&!r.isEmpty()&&h>=0)return o!=null&&o.trackChildChange(cl(n,r,d)),a.updateImmediateChild(n,r);{o!=null&&o.trackChildChange(ll(n,d));const y=a.updateImmediateChild(n,ue.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(o!=null&&o.trackChildChange(ys(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?t:u&&s(c,l)>=0?(o!=null&&(o.trackChildChange(ll(c.name,c.node)),o.trackChildChange(ys(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,ue.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=st}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vs}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ki}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===st}copy(){const t=new bv;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function PO(e){return e.loadsAllData()?new wv(e.getIndex()):e.hasLimit()?new RO(e):new ul(e)}function F1(e){const t={};if(e.isDefault())return t;let n;if(e.index_===st?n="$priority":e.index_===IO?n="$value":e.index_===Zo?n="$key":(B(e.index_ instanceof kO,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=wt(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=wt(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+wt(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=wt(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+wt(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function z1(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==st&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu extends xE{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Hl("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(B(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const o=t._path.toString();this.log_("Listen called for "+o+" "+t._queryIdentifier);const s=Wu.getListenId_(t,r),a={};this.listens_[s]=a;const l=F1(t._queryParams);this.restRequest_(o+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(o,d,!1,r),gs(this.listens_,s)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(t,n){const r=Wu.getListenId_(t,n);delete this.listens_[r]}get(t){const n=F1(t._queryParams),r=t._path.toString(),i=new Qd;return this.restRequest_(r+".json",n,(o,s)=>{let a=s;o===404&&(a=null,o=null),o===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,o])=>{i&&i.accessToken&&(n.auth=i.accessToken),o&&o.token&&(n.ac=o.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Rs(n);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=rl(a.responseText)}catch{Zt("Failed to parse JSON response for "+s+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Zt("Got unsuccessful REST response for "+s+" Status: "+a.status),r(a.status);r=null}},a.open("GET",s,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(){this.rootNode_=ue.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(){return{value:null,children:new Map}}function DE(e,t,n){if(ye(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=ve(t);e.children.has(r)||e.children.set(r,Hu());const i=e.children.get(r);t=De(t),DE(i,t,n)}}function mm(e,t,n){e.value!==null?n(t,e.value):NO(e,(r,i)=>{const o=new Oe(t.toString()+"/"+r);mm(i,o,n)})}function NO(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&Nt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1=10*1e3,MO=30*1e3,LO=5*60*1e3;class DO{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new OO(t);const r=U1+(MO-U1)*Math.random();ka(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;Nt(t,(i,o)=>{o>0&&rr(this.statsToReport_,i)&&(n[i]=o,r=!0)}),r&&this.server_.reportStats(n),ka(this.reportStats_.bind(this),Math.floor(Math.random()*2*LO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var On;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(On||(On={}));function Sv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Cv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ev(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=On.ACK_USER_WRITE,this.source=Sv()}operationForChild(t){if(ye(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Oe(t));return new Vu(ke(),n,this.revert)}}else return B(ve(this.path)===t,"operationForChild called for unrelated child."),new Vu(De(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,n){this.source=t,this.path=n,this.type=On.LISTEN_COMPLETE}operationForChild(t){return ye(this.path)?new dl(this.source,ke()):new dl(this.source,De(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=On.OVERWRITE}operationForChild(t){return ye(this.path)?new Yi(this.source,ke(),this.snap.getImmediateChild(t)):new Yi(this.source,De(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=On.MERGE}operationForChild(t){if(ye(this.path)){const n=this.children.subtree(new Oe(t));return n.isEmpty()?null:n.value?new Yi(this.source,ke(),n.value):new _s(this.source,ke(),n)}else return B(ve(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new _s(this.source,De(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(ye(t))return this.isFullyInitialized()&&!this.filtered_;const n=ve(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function FO(e,t,n,r){const i=[],o=[];return t.forEach(s=>{s.type==="child_changed"&&e.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(TO(s.childName,s.snapshotNode))}),ea(e,i,"child_removed",t,r,n),ea(e,i,"child_added",t,r,n),ea(e,i,"child_moved",o,r,n),ea(e,i,"child_changed",t,r,n),ea(e,i,"value",t,r,n),i}function ea(e,t,n,r,i,o){const s=r.filter(a=>a.type===n);s.sort((a,l)=>UO(e,a,l)),s.forEach(a=>{const l=zO(e,a,o);i.forEach(c=>{c.respondsTo(a.type)&&t.push(c.createEvent(l,e.query_))})})}function zO(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function UO(e,t,n){if(t.childName==null||n.childName==null)throw Ts("Should only compare child_ events.");const r=new ge(t.childName,t.snapshotNode),i=new ge(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(e,t){return{eventCache:e,serverCache:t}}function xa(e,t,n,r){return ef(new Qi(t,n,r),e.serverCache)}function $E(e,t,n,r){return ef(e.eventCache,new Qi(t,n,r))}function gm(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Xi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ph;const BO=()=>(Ph||(Ph=new Yt(kN)),Ph);class Le{constructor(t,n=BO()){this.value=t,this.children=n}static fromObject(t){let n=new Le(null);return Nt(t,(r,i)=>{n=n.set(new Oe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:ke(),value:this.value};if(ye(t))return null;{const r=ve(t),i=this.children.get(r);if(i!==null){const o=i.findRootMostMatchingPathAndValue(De(t),n);return o!=null?{path:ot(new Oe(r),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(ye(t))return this;{const n=ve(t),r=this.children.get(n);return r!==null?r.subtree(De(t)):new Le(null)}}set(t,n){if(ye(t))return new Le(n,this.children);{const r=ve(t),o=(this.children.get(r)||new Le(null)).set(De(t),n),s=this.children.insert(r,o);return new Le(this.value,s)}}remove(t){if(ye(t))return this.children.isEmpty()?new Le(null):new Le(null,this.children);{const n=ve(t),r=this.children.get(n);if(r){const i=r.remove(De(t));let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new Le(null):new Le(this.value,o)}else return this}}get(t){if(ye(t))return this.value;{const n=ve(t),r=this.children.get(n);return r?r.get(De(t)):null}}setTree(t,n){if(ye(t))return n;{const r=ve(t),o=(this.children.get(r)||new Le(null)).setTree(De(t),n);let s;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new Le(this.value,s)}}fold(t){return this.fold_(ke(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,o)=>{r[i]=o.fold_(ot(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,ke(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ye(t))return null;{const o=ve(t),s=this.children.get(o);return s?s.findOnPath_(De(t),ot(n,o),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,ke(),n)}foreachOnPath_(t,n,r){if(ye(t))return this;{this.value&&r(n,this.value);const i=ve(t),o=this.children.get(i);return o?o.foreachOnPath_(De(t),ot(n,i),r):new Le(null)}}foreach(t){this.foreach_(ke(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ot(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t){this.writeTree_=t}static empty(){return new $n(new Le(null))}}function Ia(e,t,n){if(ye(t))return new $n(new Le(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let o=r.value;const s=Kt(i,t);return o=o.updateChild(s,n),new $n(e.writeTree_.set(i,o))}else{const i=new Le(n),o=e.writeTree_.setTree(t,i);return new $n(o)}}}function vm(e,t,n){let r=e;return Nt(n,(i,o)=>{r=Ia(r,ot(t,i),o)}),r}function B1(e,t){if(ye(t))return $n.empty();{const n=e.writeTree_.setTree(t,new Le(null));return new $n(n)}}function ym(e,t){return ho(e,t)!=null}function ho(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(Kt(n.path,t)):null}function j1(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(st,(r,i)=>{t.push(new ge(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new ge(r,i.value))}),t}function ri(e,t){if(ye(t))return e;{const n=ho(e,t);return n!=null?new $n(new Le(n)):new $n(e.writeTree_.subtree(t))}}function _m(e){return e.writeTree_.isEmpty()}function ws(e,t){return FE(ke(),e.writeTree_,t)}function FE(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,o)=>{i===".priority"?(B(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=FE(ot(e,i),o,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(ot(e,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(e,t){return jE(t,e)}function jO(e,t,n,r,i){B(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Ia(e.visibleWrites,t,n)),e.lastWriteId=r}function WO(e,t,n,r){B(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=vm(e.visibleWrites,t,n),e.lastWriteId=r}function HO(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function VO(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);B(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,s=e.allWrites.length-1;for(;i&&s>=0;){const a=e.allWrites[s];a.visible&&(s>=n&&qO(a,r.path)?i=!1:bn(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return GO(e),!0;if(r.snap)e.visibleWrites=B1(e.visibleWrites,r.path);else{const a=r.children;Nt(a,l=>{e.visibleWrites=B1(e.visibleWrites,ot(r.path,l))})}return!0}else return!1}function qO(e,t){if(e.snap)return bn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&bn(ot(e.path,n),t))return!0;return!1}function GO(e){e.visibleWrites=zE(e.allWrites,KO,ke()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function KO(e){return e.visible}function zE(e,t,n){let r=$n.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const s=o.path;let a;if(o.snap)bn(n,s)?(a=Kt(n,s),r=Ia(r,a,o.snap)):bn(s,n)&&(a=Kt(s,n),r=Ia(r,ke(),o.snap.getChild(a)));else if(o.children){if(bn(n,s))a=Kt(n,s),r=vm(r,a,o.children);else if(bn(s,n))if(a=Kt(s,n),ye(a))r=vm(r,ke(),o.children);else{const l=gs(o.children,ve(a));if(l){const c=l.getChild(De(a));r=Ia(r,ke(),c)}}}else throw Ts("WriteRecord should have .snap or .children")}}return r}function UE(e,t,n,r,i){if(!r&&!i){const o=ho(e.visibleWrites,t);if(o!=null)return o;{const s=ri(e.visibleWrites,t);if(_m(s))return n;if(n==null&&!ym(s,ke()))return null;{const a=n||ue.EMPTY_NODE;return ws(s,a)}}}else{const o=ri(e.visibleWrites,t);if(!i&&_m(o))return n;if(!i&&n==null&&!ym(o,ke()))return null;{const s=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(bn(c.path,t)||bn(t,c.path))},a=zE(e.allWrites,s,t),l=n||ue.EMPTY_NODE;return ws(a,l)}}}function YO(e,t,n){let r=ue.EMPTY_NODE;const i=ho(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(st,(o,s)=>{r=r.updateImmediateChild(o,s)}),r;if(n){const o=ri(e.visibleWrites,t);return n.forEachChild(st,(s,a)=>{const l=ws(ri(o,new Oe(s)),a);r=r.updateImmediateChild(s,l)}),j1(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}else{const o=ri(e.visibleWrites,t);return j1(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}}function QO(e,t,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=ot(t,n);if(ym(e.visibleWrites,o))return null;{const s=ri(e.visibleWrites,o);return _m(s)?i.getChild(n):ws(s,i.getChild(n))}}function XO(e,t,n,r){const i=ot(t,n),o=ho(e.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){const s=ri(e.visibleWrites,i);return ws(s,r.getNode().getImmediateChild(n))}else return null}function JO(e,t){return ho(e.visibleWrites,t)}function ZO(e,t,n,r,i,o,s){let a;const l=ri(e.visibleWrites,t),c=ho(l,ke());if(c!=null)a=c;else if(n!=null)a=ws(l,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=s.getCompare(),f=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let h=f.getNext();for(;h&&u.length<i;)d(h,r)!==0&&u.push(h),h=f.getNext();return u}else return[]}function e3(){return{visibleWrites:$n.empty(),allWrites:[],lastWriteId:-1}}function qu(e,t,n,r){return UE(e.writeTree,e.treePath,t,n,r)}function xv(e,t){return YO(e.writeTree,e.treePath,t)}function W1(e,t,n,r){return QO(e.writeTree,e.treePath,t,n,r)}function Gu(e,t){return JO(e.writeTree,ot(e.treePath,t))}function t3(e,t,n,r,i,o){return ZO(e.writeTree,e.treePath,t,n,r,i,o)}function Iv(e,t,n){return XO(e.writeTree,e.treePath,t,n)}function BE(e,t){return jE(ot(e.treePath,t),e.writeTree)}function jE(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,cl(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,ll(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,ys(r,t.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,cl(r,t.snapshotNode,i.oldSnap));else throw Ts("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const WE=new r3;class Tv{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new Qi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Iv(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xi(this.viewCache_),o=t3(this.writes_,i,n,1,r,t);return o.length===0?null:o[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i3(e){return{filter:e}}function o3(e,t){B(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),B(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function s3(e,t,n,r,i){const o=new n3;let s,a;if(n.type===On.OVERWRITE){const c=n;c.source.fromUser?s=wm(e,t,c.path,c.snap,r,i,o):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!ye(c.path),s=Ku(e,t,c.path,c.snap,r,i,a,o))}else if(n.type===On.MERGE){const c=n;c.source.fromUser?s=l3(e,t,c.path,c.children,r,i,o):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),s=bm(e,t,c.path,c.children,r,i,a,o))}else if(n.type===On.ACK_USER_WRITE){const c=n;c.revert?s=d3(e,t,c.path,r,i,o):s=c3(e,t,c.path,c.affectedTree,r,i,o)}else if(n.type===On.LISTEN_COMPLETE)s=u3(e,t,n.path,r,o);else throw Ts("Unknown operation type: "+n.type);const l=o.getChanges();return a3(t,s,l),{viewCache:s,changes:l}}function a3(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=gm(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(LE(gm(t)))}}function HE(e,t,n,r,i,o){const s=t.eventCache;if(Gu(r,n)!=null)return t;{let a,l;if(ye(n))if(B(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const c=Xi(t),u=c instanceof ue?c:ue.EMPTY_NODE,d=xv(r,u);a=e.filter.updateFullNode(t.eventCache.getNode(),d,o)}else{const c=qu(r,Xi(t));a=e.filter.updateFullNode(t.eventCache.getNode(),c,o)}else{const c=ve(n);if(c===".priority"){B(li(n)===1,"Can't have a priority with additional path components");const u=s.getNode();l=t.serverCache.getNode();const d=W1(r,n,u,l);d!=null?a=e.filter.updatePriority(u,d):a=s.getNode()}else{const u=De(n);let d;if(s.isCompleteForChild(c)){l=t.serverCache.getNode();const f=W1(r,n,s.getNode(),l);f!=null?d=s.getNode().getImmediateChild(c).updateChild(u,f):d=s.getNode().getImmediateChild(c)}else d=Iv(r,c,t.serverCache);d!=null?a=e.filter.updateChild(s.getNode(),c,d,u,i,o):a=s.getNode()}}return xa(t,a,s.isFullyInitialized()||ye(n),e.filter.filtersNodes())}}function Ku(e,t,n,r,i,o,s,a){const l=t.serverCache;let c;const u=s?e.filter:e.filter.getIndexedFilter();if(ye(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),h,null)}else{const h=ve(n);if(!l.isCompleteForPath(n)&&li(n)>1)return t;const p=De(n),S=l.getNode().getImmediateChild(h).updateChild(p,r);h===".priority"?c=u.updatePriority(l.getNode(),S):c=u.updateChild(l.getNode(),h,S,p,WE,null)}const d=$E(t,c,l.isFullyInitialized()||ye(n),u.filtersNodes()),f=new Tv(i,d,o);return HE(e,d,n,i,f,a)}function wm(e,t,n,r,i,o,s){const a=t.eventCache;let l,c;const u=new Tv(i,t,o);if(ye(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,s),l=xa(t,c,!0,e.filter.filtersNodes());else{const d=ve(n);if(d===".priority")c=e.filter.updatePriority(t.eventCache.getNode(),r),l=xa(t,c,a.isFullyInitialized(),a.isFiltered());else{const f=De(n),h=a.getNode().getImmediateChild(d);let p;if(ye(f))p=r;else{const y=u.getCompleteChild(d);y!=null?gv(f)===".priority"&&y.getChild(TE(f)).isEmpty()?p=y:p=y.updateChild(f,r):p=ue.EMPTY_NODE}if(h.equals(p))l=t;else{const y=e.filter.updateChild(a.getNode(),d,p,f,u,s);l=xa(t,y,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function H1(e,t){return e.eventCache.isCompleteForChild(t)}function l3(e,t,n,r,i,o,s){let a=t;return r.foreach((l,c)=>{const u=ot(n,l);H1(t,ve(u))&&(a=wm(e,a,u,c,i,o,s))}),r.foreach((l,c)=>{const u=ot(n,l);H1(t,ve(u))||(a=wm(e,a,u,c,i,o,s))}),a}function V1(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function bm(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,c;ye(n)?c=r:c=new Le(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const h=t.serverCache.getNode().getImmediateChild(d),p=V1(e,h,f);l=Ku(e,l,new Oe(d),p,i,o,s,a)}}),c.children.inorderTraversal((d,f)=>{const h=!t.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!h){const p=t.serverCache.getNode().getImmediateChild(d),y=V1(e,p,f);l=Ku(e,l,new Oe(d),y,i,o,s,a)}}),l}function c3(e,t,n,r,i,o,s){if(Gu(i,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(ye(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ku(e,t,n,l.getNode().getChild(n),i,o,a,s);if(ye(n)){let c=new Le(null);return l.getNode().forEachChild(Zo,(u,d)=>{c=c.set(new Oe(u),d)}),bm(e,t,n,c,i,o,a,s)}else return t}else{let c=new Le(null);return r.foreach((u,d)=>{const f=ot(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),bm(e,t,n,c,i,o,a,s)}}function u3(e,t,n,r,i){const o=t.serverCache,s=$E(t,o.getNode(),o.isFullyInitialized()||ye(n),o.isFiltered());return HE(e,s,n,r,WE,i)}function d3(e,t,n,r,i,o){let s;if(Gu(r,n)!=null)return t;{const a=new Tv(r,t,i),l=t.eventCache.getNode();let c;if(ye(n)||ve(n)===".priority"){let u;if(t.serverCache.isFullyInitialized())u=qu(r,Xi(t));else{const d=t.serverCache.getNode();B(d instanceof ue,"serverChildren would be complete if leaf node"),u=xv(r,d)}u=u,c=e.filter.updateFullNode(l,u,o)}else{const u=ve(n);let d=Iv(r,u,t.serverCache);d==null&&t.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=e.filter.updateChild(l,u,d,De(n),a,o):t.eventCache.getNode().hasChild(u)?c=e.filter.updateChild(l,u,ue.EMPTY_NODE,De(n),a,o):c=l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=qu(r,Xi(t)),s.isLeafNode()&&(c=e.filter.updateFullNode(c,s,o)))}return s=t.serverCache.isFullyInitialized()||Gu(r,ke())!=null,xa(t,c,s,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f3{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new wv(r.getIndex()),o=PO(r);this.processor_=i3(o);const s=n.serverCache,a=n.eventCache,l=i.updateFullNode(ue.EMPTY_NODE,s.getNode(),null),c=o.updateFullNode(ue.EMPTY_NODE,a.getNode(),null),u=new Qi(l,s.isFullyInitialized(),i.filtersNodes()),d=new Qi(c,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=ef(d,u),this.eventGenerator_=new $O(this.query_)}get query(){return this.query_}}function h3(e){return e.viewCache_.serverCache.getNode()}function p3(e,t){const n=Xi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ye(t)&&!n.getImmediateChild(ve(t)).isEmpty())?n.getChild(t):null}function q1(e){return e.eventRegistrations_.length===0}function m3(e,t){e.eventRegistrations_.push(t)}function G1(e,t,n){const r=[];if(n){B(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(o=>{const s=o.createCancelEvent(n,i);s&&r.push(s)})}if(t){let i=[];for(let o=0;o<e.eventRegistrations_.length;++o){const s=e.eventRegistrations_[o];if(!s.matches(t))i.push(s);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(o+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function K1(e,t,n,r){t.type===On.MERGE&&t.source.queryId!==null&&(B(Xi(e.viewCache_),"We should always have a full cache before handling merges"),B(gm(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=s3(e.processor_,i,t,n,r);return o3(e.processor_,o.viewCache),B(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,VE(e,o.changes,o.viewCache.eventCache.getNode(),null)}function g3(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(st,(o,s)=>{r.push(ys(o,s))}),n.isFullyInitialized()&&r.push(LE(n.getNode())),VE(e,r,n.getNode(),t)}function VE(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return FO(e.eventGenerator_,t,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yu;class v3{constructor(){this.views=new Map}}function y3(e){B(!Yu,"__referenceConstructor has already been defined"),Yu=e}function _3(){return B(Yu,"Reference.ts has not been loaded"),Yu}function w3(e){return e.views.size===0}function Rv(e,t,n,r){const i=t.source.queryId;if(i!==null){const o=e.views.get(i);return B(o!=null,"SyncTree gave us an op for an invalid query."),K1(o,t,n,r)}else{let o=[];for(const s of e.views.values())o=o.concat(K1(s,t,n,r));return o}}function b3(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let a=qu(n,i?r:null),l=!1;a?l=!0:r instanceof ue?(a=xv(n,r),l=!1):(a=ue.EMPTY_NODE,l=!1);const c=ef(new Qi(a,l,!1),new Qi(r,i,!1));return new f3(t,c)}return s}function S3(e,t,n,r,i,o){const s=b3(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),m3(s,n),g3(s,n)}function C3(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=ci(e);if(i==="default")for(const[l,c]of e.views.entries())s=s.concat(G1(c,n,r)),q1(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||o.push(c.query));else{const l=e.views.get(i);l&&(s=s.concat(G1(l,n,r)),q1(l)&&(e.views.delete(i),l.query._queryParams.loadsAllData()||o.push(l.query)))}return a&&!ci(e)&&o.push(new(_3())(t._repo,t._path)),{removed:o,events:s}}function qE(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function es(e,t){let n=null;for(const r of e.views.values())n=n||p3(r,t);return n}function GE(e,t){if(t._queryParams.loadsAllData())return tf(e);{const r=t._queryIdentifier;return e.views.get(r)}}function KE(e,t){return GE(e,t)!=null}function ci(e){return tf(e)!=null}function tf(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qu;function E3(e){B(!Qu,"__referenceConstructor has already been defined"),Qu=e}function k3(){return B(Qu,"Reference.ts has not been loaded"),Qu}let x3=1;class Y1{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Le(null),this.pendingWriteTree_=e3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function I3(e,t,n,r,i){return jO(e.pendingWriteTree_,t,n,r,i),i?Ns(e,new Yi(Sv(),t,n)):[]}function T3(e,t,n,r){WO(e.pendingWriteTree_,t,n,r);const i=Le.fromObject(n);return Ns(e,new _s(Sv(),t,i))}function Ni(e,t,n=!1){const r=HO(e.pendingWriteTree_,t);if(VO(e.pendingWriteTree_,t)){let o=new Le(null);return r.snap!=null?o=o.set(ke(),!0):Nt(r.children,s=>{o=o.set(new Oe(s),!0)}),Ns(e,new Vu(r.path,o,n))}else return[]}function nf(e,t,n){return Ns(e,new Yi(Cv(),t,n))}function R3(e,t,n){const r=Le.fromObject(n);return Ns(e,new _s(Cv(),t,r))}function P3(e,t){return Ns(e,new dl(Cv(),t))}function A3(e,t,n){const r=Pv(e,n);if(r){const i=Av(r),o=i.path,s=i.queryId,a=Kt(o,t),l=new dl(Ev(s),a);return Nv(e,o,l)}else return[]}function Sm(e,t,n,r,i=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&(t._queryIdentifier==="default"||KE(s,t))){const l=C3(s,t,n,r);w3(s)&&(e.syncPointTree_=e.syncPointTree_.remove(o));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=e.syncPointTree_.findOnPath(o,(f,h)=>ci(h));if(u&&!d){const f=e.syncPointTree_.subtree(o);if(!f.isEmpty()){const h=M3(f);for(let p=0;p<h.length;++p){const y=h[p],S=y.query,v=JE(e,y);e.listenProvider_.startListening(Ta(S),Xu(e,S),v.hashFn,v.onComplete)}}}!d&&c.length>0&&!r&&(u?e.listenProvider_.stopListening(Ta(t),null):c.forEach(f=>{const h=e.queryToTagMap.get(rf(f));e.listenProvider_.stopListening(Ta(f),h)}))}L3(e,c)}return a}function N3(e,t,n,r){const i=Pv(e,r);if(i!=null){const o=Av(i),s=o.path,a=o.queryId,l=Kt(s,t),c=new Yi(Ev(a),l,n);return Nv(e,s,c)}else return[]}function O3(e,t,n,r){const i=Pv(e,r);if(i){const o=Av(i),s=o.path,a=o.queryId,l=Kt(s,t),c=Le.fromObject(n),u=new _s(Ev(a),l,c);return Nv(e,s,u)}else return[]}function Q1(e,t,n,r=!1){const i=t._path;let o=null,s=!1;e.syncPointTree_.foreachOnPath(i,(f,h)=>{const p=Kt(f,i);o=o||es(h,p),s=s||ci(h)});let a=e.syncPointTree_.get(i);a?(s=s||ci(a),o=o||es(a,ke())):(a=new v3,e.syncPointTree_=e.syncPointTree_.set(i,a));let l;o!=null?l=!0:(l=!1,o=ue.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((h,p)=>{const y=es(p,ke());y&&(o=o.updateImmediateChild(h,y))}));const c=KE(a,t);if(!c&&!t._queryParams.loadsAllData()){const f=rf(t);B(!e.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=D3();e.queryToTagMap.set(f,h),e.tagToQueryMap.set(h,f)}const u=kv(e.pendingWriteTree_,i);let d=S3(a,t,n,u,o,l);if(!c&&!s&&!r){const f=GE(a,t);d=d.concat($3(e,t,f))}return d}function YE(e,t,n){const i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,(s,a)=>{const l=Kt(s,t),c=es(a,l);if(c)return c});return UE(i,t,o,n,!0)}function Ns(e,t){return QE(t,e.syncPointTree_,null,kv(e.pendingWriteTree_,ke()))}function QE(e,t,n,r){if(ye(e.path))return XE(e,t,n,r);{const i=t.get(ke());n==null&&i!=null&&(n=es(i,ke()));let o=[];const s=ve(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const c=n?n.getImmediateChild(s):null,u=BE(r,s);o=o.concat(QE(a,l,c,u))}return i&&(o=o.concat(Rv(i,e,r,n))),o}}function XE(e,t,n,r){const i=t.get(ke());n==null&&i!=null&&(n=es(i,ke()));let o=[];return t.children.inorderTraversal((s,a)=>{const l=n?n.getImmediateChild(s):null,c=BE(r,s),u=e.operationForChild(s);u&&(o=o.concat(XE(u,a,l,c)))}),i&&(o=o.concat(Rv(i,e,r,n))),o}function JE(e,t){const n=t.query,r=Xu(e,n);return{hashFn:()=>(h3(t)||ue.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?A3(e,n._path,r):P3(e,n._path);{const o=TN(i,n);return Sm(e,n,null,o)}}}}function Xu(e,t){const n=rf(t);return e.queryToTagMap.get(n)}function rf(e){return e._path.toString()+"$"+e._queryIdentifier}function Pv(e,t){return e.tagToQueryMap.get(t)}function Av(e){const t=e.indexOf("$");return B(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Oe(e.substr(0,t))}}function Nv(e,t,n){const r=e.syncPointTree_.get(t);B(r,"Missing sync point for query tag that we're tracking");const i=kv(e.pendingWriteTree_,t);return Rv(r,n,i,null)}function M3(e){return e.fold((t,n,r)=>{if(n&&ci(n))return[tf(n)];{let i=[];return n&&(i=qE(n)),Nt(r,(o,s)=>{i=i.concat(s)}),i}})}function Ta(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(k3())(e._repo,e._path):e}function L3(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=rf(r),o=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(o)}}}function D3(){return x3++}function $3(e,t,n){const r=t._path,i=Xu(e,t),o=JE(e,n),s=e.listenProvider_.startListening(Ta(t),i,o.hashFn,o.onComplete),a=e.syncPointTree_.subtree(r);if(i)B(!ci(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!ye(c)&&u&&ci(u))return[tf(u).query];{let f=[];return u&&(f=f.concat(qE(u).map(h=>h.query))),Nt(d,(h,p)=>{f=f.concat(p)}),f}});for(let c=0;c<l.length;++c){const u=l[c];e.listenProvider_.stopListening(Ta(u),Xu(e,u))}}return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Ov(n)}node(){return this.node_}}class Mv{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=ot(this.path_,t);return new Mv(this.syncTree_,n)}node(){return YE(this.syncTree_,this.path_)}}const F3=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},X1=function(e,t,n){if(!e||typeof e!="object")return e;if(B(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return z3(e[".sv"],t,n);if(typeof e[".sv"]=="object")return U3(e[".sv"],t);B(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},z3=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+e)}},U3=function(e,t,n){e.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const i=t.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return typeof s!="number"?r:s+r},ZE=function(e,t,n,r){return Lv(t,new Mv(n,e),r)},B3=function(e,t,n){return Lv(e,new Ov(t),n)};function Lv(e,t,n){const r=e.getPriority().val(),i=X1(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const s=e,a=X1(s.getValue(),t,n);return a!==s.getValue()||i!==s.getPriority().val()?new vt(a,Rt(i)):e}else{const s=e;return o=s,i!==s.getPriority().val()&&(o=o.updatePriority(new vt(i))),s.forEachChild(st,(a,l)=>{const c=Lv(l,t.getImmediateChild(a),n);c!==l&&(o=o.updateImmediateChild(a,c))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function $v(e,t){let n=t instanceof Oe?t:new Oe(t),r=e,i=ve(n);for(;i!==null;){const o=gs(r.node.children,i)||{children:{},childCount:0};r=new Dv(i,r,o),n=De(n),i=ve(n)}return r}function Os(e){return e.node.value}function ek(e,t){e.node.value=t,Cm(e)}function tk(e){return e.node.childCount>0}function j3(e){return Os(e)===void 0&&!tk(e)}function of(e,t){Nt(e.node.children,(n,r)=>{t(new Dv(n,e,r))})}function nk(e,t,n,r){n&&!r&&t(e),of(e,i=>{nk(i,t,!0,r)}),n&&r&&t(e)}function W3(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function ql(e){return new Oe(e.parent===null?e.name:ql(e.parent)+"/"+e.name)}function Cm(e){e.parent!==null&&H3(e.parent,e.name,e)}function H3(e,t,n){const r=j3(n),i=rr(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Cm(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,Cm(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V3=/[\[\].#$\/\u0000-\u001F\u007F]/,q3=/[\[\].#$\u0000-\u001F\u007F]/,Ah=10*1024*1024,Fv=function(e){return typeof e=="string"&&e.length!==0&&!V3.test(e)},rk=function(e){return typeof e=="string"&&e.length!==0&&!q3.test(e)},G3=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),rk(e)},K3=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!dv(e)||e&&typeof e=="object"&&rr(e,".sv")},zv=function(e,t,n){const r=n instanceof Oe?new lO(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Ei(r));if(typeof t=="function")throw new Error(e+"contains a function "+Ei(r)+" with contents = "+t.toString());if(dv(t))throw new Error(e+"contains "+t.toString()+" "+Ei(r));if(typeof t=="string"&&t.length>Ah/3&&Xd(t)>Ah)throw new Error(e+"contains a string greater than "+Ah+" utf8 bytes "+Ei(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,o=!1;if(Nt(t,(s,a)=>{if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!Fv(s)))throw new Error(e+" contains an invalid key ("+s+") "+Ei(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);cO(r,s),zv(e,a,r),uO(r)}),i&&o)throw new Error(e+' contains ".value" child '+Ei(r)+" in addition to actual children.")}},Y3=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const o=al(r);for(let s=0;s<o.length;s++)if(!(o[s]===".priority"&&s===o.length-1)){if(!Fv(o[s]))throw new Error(e+"contains an invalid key ("+o[s]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(aO);let i=null;for(n=0;n<t.length;n++){if(r=t[n],i!==null&&bn(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Q3=function(e,t,n,r){if(r&&t===void 0)return;const i=lv(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const o=[];Nt(t,(s,a)=>{const l=new Oe(s);if(zv(i,a,ot(n,l)),gv(l)===".priority"&&!K3(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(l)}),Y3(i,o)},ik=function(e,t,n,r){if(!(r&&n===void 0)&&!rk(n))throw new Error(lv(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},X3=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ik(e,t,n,r)},J3=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Fv(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!G3(n))throw new Error(lv(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Uv(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();n!==null&&!vv(o,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function ok(e,t,n){Uv(e,n),sk(e,r=>vv(r,t))}function br(e,t,n){Uv(e,n),sk(e,r=>bn(r,t)||bn(t,r))}function sk(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(e4(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function e4(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();Ui&&Tt("event: "+n.toString()),As(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4="repo_interrupt",n4=25;class r4{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Z3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Hu(),this.transactionQueueTree_=new Dv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function i4(e,t,n){if(e.stats_=pv(e.repoInfo_),e.forceRestClient_||NN())e.server_=new Wu(e.repoInfo_,(r,i,o,s)=>{J1(e,r,i,o,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Z1(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{wt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new pr(e.repoInfo_,t,(r,i,o,s)=>{J1(e,r,i,o,s)},r=>{Z1(e,r)},r=>{s4(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=$N(e.repoInfo_,()=>new DO(e.stats_,e.server_)),e.infoData_=new AO,e.infoSyncTree_=new Y1({startListening:(r,i,o,s)=>{let a=[];const l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=nf(e.infoSyncTree_,r._path,l),setTimeout(()=>{s("ok")},0)),a},stopListening:()=>{}}),jv(e,"connected",!1),e.serverSyncTree_=new Y1({startListening:(r,i,o,s)=>(e.server_.listen(r,o,i,(a,l)=>{const c=s(a,l);br(e.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function o4(e){const n=e.infoData_.getNode(new Oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Bv(e){return F3({timestamp:o4(e)})}function J1(e,t,n,r,i){e.dataUpdateCount++;const o=new Oe(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(i)if(r){const l=Fu(n,c=>Rt(c));s=O3(e.serverSyncTree_,o,l,i)}else{const l=Rt(n);s=N3(e.serverSyncTree_,o,l,i)}else if(r){const l=Fu(n,c=>Rt(c));s=R3(e.serverSyncTree_,o,l)}else{const l=Rt(n);s=nf(e.serverSyncTree_,o,l)}let a=o;s.length>0&&(a=fl(e,o)),br(e.eventQueue_,a,s)}function Z1(e,t){jv(e,"connected",t),t===!1&&l4(e)}function s4(e,t){Nt(t,(n,r)=>{jv(e,n,r)})}function jv(e,t,n){const r=new Oe("/.info/"+t),i=Rt(n);e.infoData_.updateSnapshot(r,i);const o=nf(e.infoSyncTree_,r,i);br(e.eventQueue_,r,o)}function ak(e){return e.nextWriteId_++}function a4(e,t,n,r){Wv(e,"update",{path:t.toString(),value:n});let i=!0;const o=Bv(e),s={};if(Nt(n,(a,l)=>{i=!1,s[a]=ZE(ot(t,a),Rt(l),e.serverSyncTree_,o)}),i)Tt("update() called with empty data.  Don't do anything."),t_(e,r,"ok",void 0);else{const a=ak(e),l=T3(e.serverSyncTree_,t,s,a);Uv(e.eventQueue_,l),e.server_.merge(t.toString(),n,(c,u)=>{const d=c==="ok";d||Zt("update at "+t+" failed: "+c);const f=Ni(e.serverSyncTree_,a,!d),h=f.length>0?fl(e,t):t;br(e.eventQueue_,h,f),t_(e,r,c,u)}),Nt(n,c=>{const u=fk(e,ot(t,c));fl(e,u)}),br(e.eventQueue_,t,[])}}function l4(e){Wv(e,"onDisconnectEvents");const t=Bv(e),n=Hu();mm(e.onDisconnect_,ke(),(i,o)=>{const s=ZE(i,o,e.serverSyncTree_,t);DE(n,i,s)});let r=[];mm(n,ke(),(i,o)=>{r=r.concat(nf(e.serverSyncTree_,i,o));const s=fk(e,i);fl(e,s)}),e.onDisconnect_=Hu(),br(e.eventQueue_,ke(),r)}function c4(e,t,n){let r;ve(t._path)===".info"?r=Q1(e.infoSyncTree_,t,n):r=Q1(e.serverSyncTree_,t,n),ok(e.eventQueue_,t._path,r)}function e_(e,t,n){let r;ve(t._path)===".info"?r=Sm(e.infoSyncTree_,t,n):r=Sm(e.serverSyncTree_,t,n),ok(e.eventQueue_,t._path,r)}function u4(e){e.persistentConnection_&&e.persistentConnection_.interrupt(t4)}function Wv(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Tt(n,...t)}function t_(e,t,n,r){t&&As(()=>{if(n==="ok")t(null);else{const i=(n||"error").toUpperCase();let o=i;r&&(o+=": "+r);const s=new Error(o);s.code=i,t(s)}})}function lk(e,t,n){return YE(e.serverSyncTree_,t,n)||ue.EMPTY_NODE}function Hv(e,t=e.transactionQueueTree_){if(t||sf(e,t),Os(t)){const n=uk(e,t);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&d4(e,ql(t),n)}else tk(t)&&of(t,n=>{Hv(e,n)})}function d4(e,t,n){const r=n.map(c=>c.currentWriteId),i=lk(e,t,r);let o=i;const s=i.hash();for(let c=0;c<n.length;c++){const u=n[c];B(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Kt(t,u.path);o=o.updateChild(d,u.currentOutputSnapshotRaw)}const a=o.val(!0),l=t;e.server_.put(l.toString(),a,c=>{Wv(e,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Ni(e.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();sf(e,$v(e.transactionQueueTree_,t)),Hv(e,e.transactionQueueTree_),br(e.eventQueue_,t,u);for(let f=0;f<d.length;f++)As(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Zt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}fl(e,t)}},s)}function fl(e,t){const n=ck(e,t),r=ql(n),i=uk(e,n);return f4(e,i,r),r}function f4(e,t,n){if(t.length===0)return;const r=[];let i=[];const s=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],c=Kt(n,l.path);let u=!1,d;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Ni(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=n4)u=!0,d="maxretry",i=i.concat(Ni(e.serverSyncTree_,l.currentWriteId,!0));else{const f=lk(e,l.path,s);l.currentInputSnapshot=f;const h=t[a].update(f.val());if(h!==void 0){zv("transaction failed: Data returned ",h,l.path);let p=Rt(h);typeof h=="object"&&h!=null&&rr(h,".priority")||(p=p.updatePriority(f.getPriority()));const S=l.currentWriteId,v=Bv(e),m=B3(p,f,v);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=m,l.currentWriteId=ak(e),s.splice(s.indexOf(S),1),i=i.concat(I3(e.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(Ni(e.serverSyncTree_,S,!0))}else u=!0,d="nodata",i=i.concat(Ni(e.serverSyncTree_,l.currentWriteId,!0))}br(e.eventQueue_,n,i),i=[],u&&(t[a].status=2,function(f){setTimeout(f,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(d==="nodata"?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(new Error(d),!1,null))))}sf(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)As(r[a]);Hv(e,e.transactionQueueTree_)}function ck(e,t){let n,r=e.transactionQueueTree_;for(n=ve(t);n!==null&&Os(r)===void 0;)r=$v(r,n),t=De(t),n=ve(t);return r}function uk(e,t){const n=[];return dk(e,t,n),n.sort((r,i)=>r.order-i.order),n}function dk(e,t,n){const r=Os(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);of(t,i=>{dk(e,i,n)})}function sf(e,t){const n=Os(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ek(t,n.length>0?n:void 0)}of(t,r=>{sf(e,r)})}function fk(e,t){const n=ql(ck(e,t)),r=$v(e.transactionQueueTree_,t);return W3(r,i=>{Nh(e,i)}),Nh(e,r),nk(r,i=>{Nh(e,i)}),n}function Nh(e,t){const n=Os(t);if(n){const r=[];let i=[],o=-1;for(let s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(B(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(B(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(Ni(e.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?ek(t,void 0):n.length=o+1,br(e.eventQueue_,ql(t),i);for(let s=0;s<r.length;s++)As(r[s])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h4(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function p4(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Zt(`Invalid query segment '${n}' in query '${e}'`)}return t}const n_=function(e,t){const n=m4(e),r=n.namespace;n.domain==="firebase.com"&&wr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&wr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||CN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _E(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Oe(n.pathString)}},m4=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",l=443;if(typeof e=="string"){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");u===-1&&(u=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(u,d)),u<d&&(i=h4(e.substring(u,d)));const f=p4(e.substring(Math.min(e.length,d)));c=t.indexOf(":"),c>=0?(s=a==="https"||a==="wss",l=parseInt(t.substring(c+1),10)):c=t.length;const h=t.slice(0,c);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const p=t.indexOf(".");r=t.substring(0,p).toLowerCase(),n=t.substring(p+1),o=r}"ns"in f&&(o=f.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+wt(this.snapshot.exportVal())}}class pk{constructor(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ye(this._path)?null:gv(this._path)}get ref(){return new Tr(this._repo,this._path)}get _queryIdentifier(){const t=z1(this._queryParams),n=fv(t);return n==="{}"?"default":n}get _queryObject(){return z1(this._queryParams)}isEqual(t){if(t=mn(t),!(t instanceof Vv))return!1;const n=this._repo===t._repo,r=vv(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+sO(this._path)}}class Tr extends Vv{constructor(t,n){super(t,n,new bv,!1)}get parent(){const t=TE(this._path);return t===null?null:new Tr(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class hl{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new Oe(t),r=Ju(this.ref,t);return new hl(this._node.getChild(n),r,st)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new hl(i,Ju(this.ref,r),st)))}hasChild(t){const n=new Oe(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function mk(e,t){return e=mn(e),e._checkNotDeleted("ref"),t!==void 0?Ju(e._root,t):e._root}function Ju(e,t){return e=mn(e),ve(e._path)===null?X3("child","path",t,!1):ik("child","path",t,!1),new Tr(e._repo,ot(e._path,t))}function v4(e,t){Q3("update",t,e._path,!1);const n=new Qd;return a4(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}class qv{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new hk("value",this,new hl(t.snapshotNode,new Tr(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new pk(this,t,n):null}matches(t){return t instanceof qv?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Gv{constructor(t,n){this.eventType=t,this.callbackContext=n}respondsTo(t){let n=t==="children_added"?"child_added":t;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new pk(this,t,n):null}createEvent(t,n){B(t.childName!=null,"Child events should have a childName.");const r=Ju(new Tr(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new hk(t.type,this,new hl(t.snapshotNode,r,i),t.prevName)}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof Gv?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function y4(e,t,n,r,i){let o;if(typeof r=="object"&&(o=void 0,i=r),typeof r=="function"&&(o=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{e_(e._repo,e,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const s=new g4(n,o||void 0),a=t==="value"?new qv(s):new Gv(t,s);return c4(e._repo,e,a),()=>e_(e._repo,e,a)}function _4(e,t,n,r){return y4(e,"value",t,n,r)}y3(Tr);E3(Tr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w4="FIREBASE_DATABASE_EMULATOR_HOST",Em={};let b4=!1;function S4(e,t,n,r){e.repoInfo_=new _E(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function C4(e,t,n,r,i){let o=r||e.options.databaseURL;o===void 0&&(e.options.projectId||wr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Tt("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s=n_(o,i),a=s.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[w4]),c?(l=!0,o=`http://${c}?ns=${a.namespace}`,s=n_(o,i),a=s.repoInfo):l=!s.repoInfo.secure;const u=i&&l?new Jo(Jo.OWNER):new MN(e.name,e.options,t);J3("Invalid Firebase Database URL",s),ye(s.path)||wr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=k4(a,e,u,new ON(e.name,n));return new x4(d,e)}function E4(e,t){const n=Em[t];(!n||n[e.key]!==e)&&wr(`Database ${t}(${e.repoInfo_}) has already been deleted.`),u4(e),delete n[e.key]}function k4(e,t,n,r){let i=Em[t.name];i||(i={},Em[t.name]=i);let o=i[e.toURLString()];return o&&wr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new r4(e,b4,n,r),i[e.toURLString()]=o,o}class x4{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(i4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tr(this._repo,ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(E4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&wr("Cannot call "+t+" on a deleted database.")}}function I4(e=uv(),t){const n=uo(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=qP("database");r&&T4(n,...r)}return n}function T4(e,t,n,r={}){e=mn(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&wr("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&wr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Jo(Jo.OWNER);else if(r.mockUserToken){const s=typeof r.mockUserToken=="string"?r.mockUserToken:KP(r.mockUserToken,e.app.options.projectId);o=new Jo(s)}S4(i,t,n,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R4(e){yN(Ps),tr(new zn("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return C4(r,i,o,n)},"PUBLIC").setMultipleInstances(!0)),Cn(S1,C1,e),Cn(S1,C1,"esm2017")}pr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};pr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};R4();function Kv(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function gk(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const P4=gk,vk=new co("auth","Firebase",gk());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Jd("@firebase/auth");function A4(e,...t){Zu.logLevel<=Ne.WARN&&Zu.warn(`Auth (${Ps}): ${e}`,...t)}function eu(e,...t){Zu.logLevel<=Ne.ERROR&&Zu.error(`Auth (${Ps}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(e,...t){throw Yv(e,...t)}function Jn(e,...t){return Yv(e,...t)}function N4(e,t,n){const r=Object.assign(Object.assign({},P4()),{[t]:n});return new co("auth","Firebase",r).create(t,{appName:e.name})}function Yv(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return vk.create(e,...t)}function de(e,t,...n){if(!e)throw Yv(t,...n)}function dr(e){const t="INTERNAL ASSERTION FAILED: "+e;throw eu(t),new Error(t)}function Sr(e,t){e||dr(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function O4(){return r_()==="http:"||r_()==="https:"}function r_(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(O4()||KC()||"connection"in navigator)?navigator.onLine:!0}function L4(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t,n){this.shortDelay=t,this.longDelay=n,Sr(n>t,"Short delay should be less than long delay!"),this.isMobile=av()||YC()}get(){return M4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(e,t){Sr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $4=new Gl(3e4,6e4);function Ms(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ls(e,t,n,r,i={}){return _k(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Rs(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),yk.fetch()(wk(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function _k(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},D4),t);try{const i=new F4(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ic(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ic(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ic(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ic(e,"user-disabled",s);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw N4(e,u,c);Un(e,u)}}catch(i){if(i instanceof nr)throw i;Un(e,"network-request-failed",{message:String(i)})}}async function Kl(e,t,n,r,i={}){const o=await Ls(e,t,n,r,i);return"mfaPendingCredential"in o&&Un(e,"multi-factor-auth-required",{_serverResponse:o}),o}function wk(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Qv(e.config,i):`${e.config.apiScheme}://${i}`}class F4{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jn(this.auth,"network-request-failed")),$4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ic(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Jn(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z4(e,t){return Ls(e,"POST","/v1/accounts:delete",t)}async function U4(e,t){return Ls(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function B4(e,t=!1){const n=mn(e),r=await n.getIdToken(t),i=Xv(r);de(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ra(Oh(i.auth_time)),issuedAtTime:Ra(Oh(i.iat)),expirationTime:Ra(Oh(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Oh(e){return Number(e)*1e3}function Xv(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return eu("JWT malformed, contained fewer than 3 sections"),null;try{const i=$u(n);return i?JSON.parse(i):(eu("Failed to decode base64 JWT payload"),null)}catch(i){return eu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function j4(e){const t=Xv(e);return de(t,"internal-error"),de(typeof t.exp<"u","internal-error"),de(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof nr&&W4(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function W4({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ra(this.lastLoginAt),this.creationTime=Ra(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ed(e){var t;const n=e.auth,r=await e.getIdToken(),i=await pl(e,U4(n,{idToken:r}));de(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?G4(o.providerUserInfo):[],a=q4(e.providerData,s),l=e.isAnonymous,c=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new bk(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function V4(e){const t=mn(e);await ed(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function q4(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function G4(e){return e.map(t=>{var{providerId:n}=t,r=Kv(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K4(e,t){const n=await _k(e,{},async()=>{const r=Rs({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=wk(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yk.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){de(t.idToken,"internal-error"),de(typeof t.idToken<"u","internal-error"),de(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):j4(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return de(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await K4(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new ml;return r&&(de(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(de(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(de(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ml,this.toJSON())}_performRefresh(){return dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(e,t){de(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Bi{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Kv(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new H4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new bk(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await pl(this,this.stsTokenManager.getToken(this.auth,t));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return B4(this,t)}reload(){return V4(this)}_assign(t){this!==t&&(de(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Bi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ed(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await pl(this,z4(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,h=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,p=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,m=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:g,emailVerified:_,isAnonymous:C,providerData:k,stsTokenManager:E}=n;de(g&&E,t,"internal-error");const T=ml.fromJSON(this.name,E);de(typeof g=="string",t,"internal-error"),Nr(d,t.name),Nr(f,t.name),de(typeof _=="boolean",t,"internal-error"),de(typeof C=="boolean",t,"internal-error"),Nr(h,t.name),Nr(p,t.name),Nr(y,t.name),Nr(S,t.name),Nr(v,t.name),Nr(m,t.name);const A=new Bi({uid:g,auth:t,email:f,emailVerified:_,displayName:d,isAnonymous:C,photoURL:p,phoneNumber:h,tenantId:y,stsTokenManager:T,createdAt:v,lastLoginAt:m});return k&&Array.isArray(k)&&(A.providerData=k.map(I=>Object.assign({},I))),S&&(A._redirectEventId=S),A}static async _fromIdTokenResponse(t,n,r=!1){const i=new ml;i.updateFromServerResponse(n);const o=new Bi({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ed(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new Map;function fr(e){Sr(e instanceof Function,"Expected a class definition");let t=i_.get(e);return t?(Sr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,i_.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Sk.type="NONE";const o_=Sk;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(e,t,n){return`firebase:${e}:${t}:${n}`}class ts{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=tu(this.userKey,i.apiKey,o),this.fullPersistenceKey=tu("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Bi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ts(fr(o_),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||fr(o_);const s=tu(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const u=await c._get(s);if(u){const d=Bi._fromJSON(t,u);c!==o&&(a=d),o=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new ts(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new ts(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(kk(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ck(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ik(t))return"Blackberry";if(Tk(t))return"Webos";if(Jv(t))return"Safari";if((t.includes("chrome/")||Ek(t))&&!t.includes("edge/"))return"Chrome";if(xk(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ck(e=Ft()){return/firefox\//i.test(e)}function Jv(e=Ft()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ek(e=Ft()){return/crios\//i.test(e)}function kk(e=Ft()){return/iemobile/i.test(e)}function xk(e=Ft()){return/android/i.test(e)}function Ik(e=Ft()){return/blackberry/i.test(e)}function Tk(e=Ft()){return/webos/i.test(e)}function af(e=Ft()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Y4(e=Ft()){var t;return af(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Q4(){return YP()&&document.documentMode===10}function Rk(e=Ft()){return af(e)||xk(e)||Tk(e)||Ik(e)||/windows phone/i.test(e)||kk(e)}function X4(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(e,t=[]){let n;switch(e){case"Browser":n=s_(Ft());break;case"Worker":n=`${s_(Ft())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${r}`}async function Ak(e,t){return Ls(e,"GET","/v2/recaptchaConfig",Ms(e,t))}function a_(e){return e!==void 0&&e.enterprise!==void 0}class Nk{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J4(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Ok(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Jn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",J4().appendChild(r)})}function Z4(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const eM="https://www.google.com/recaptcha/enterprise.js?render=",tM="recaptcha-enterprise",nM="NO_RECAPTCHA";class Mk{constructor(t){this.type=tM,this.auth=Ds(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{Ak(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Nk(l);return o.tenantId==null?o._agentRecaptchaConfig=c:o._tenantRecaptchaConfigs[o.tenantId]=c,s(c.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;a_(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(c=>{s(c)}).catch(()=>{s(nM)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&a_(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}Ok(eM+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function td(e,t,n,r=!1){const i=new Mk(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new l_(this),this.idTokenSubscription=new l_(this),this.beforeStateQueue=new rM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vk,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=fr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ts.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ed(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=L4()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?mn(t):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&de(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fr(t))})}async initializeRecaptchaConfig(){const t=await Ak(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Nk(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Mk(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new co("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&fr(t)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[fr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return de(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Pk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&A4(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ds(e){return mn(e)}class l_{constructor(t){this.auth=t,this.observer=null,this.addObserver=rA(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(e,t){const n=uo(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(il(o,t??{}))return i;Un(i,"already-initialized")}return n.initialize({options:t})}function sM(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fr);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function aM(e,t,n){const r=Ds(e);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Lk(t),{host:s,port:a}=lM(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||cM()}function Lk(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function lM(e){const t=Lk(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:c_(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:c_(s)}}}function c_(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function cM(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return dr("not implemented")}_getIdTokenResponse(t){return dr("not implemented")}_linkToIdToken(t,n){return dr("not implemented")}_getReauthenticationResolver(t){return dr("not implemented")}}async function uM(e,t){return Ls(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mh(e,t){return Kl(e,"POST","/v1/accounts:signInWithPassword",Ms(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dM(e,t){return Kl(e,"POST","/v1/accounts:signInWithEmailLink",Ms(e,t))}async function fM(e,t){return Kl(e,"POST","/v1/accounts:signInWithEmailLink",Ms(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Zv{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new gl(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new gl(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await td(t,r,"signInWithPassword");return Mh(t,i)}else return Mh(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await td(t,r,"signInWithPassword");return Mh(t,o)}else return Promise.reject(i)});case"emailLink":return dM(t,{email:this._email,oobCode:this._password});default:Un(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return uM(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fM(t,{idToken:n,email:this._email,oobCode:this._password});default:Un(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(e,t){return Kl(e,"POST","/v1/accounts:signInWithIdp",Ms(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM="http://localhost";class Ji extends Zv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ji(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Kv(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Ji(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return ns(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,ns(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ns(t,n)}buildRequest(){const t={requestUri:hM,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Rs(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mM(e){const t=da(fa(e)).link,n=t?da(fa(t)).deep_link_id:null,r=da(fa(e)).deep_link_id;return(r?da(fa(r)).link:null)||r||n||t||e}class ey{constructor(t){var n,r,i,o,s,a;const l=da(fa(t)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=pM((i=l.mode)!==null&&i!==void 0?i:null);de(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=mM(t);try{return new ey(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.providerId=$s.PROVIDER_ID}static credential(t,n){return gl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=ey.parseLink(n);return de(r,"argument-error"),gl._fromEmailAndCode(t,r.code,r.tenantId)}}$s.PROVIDER_ID="password";$s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends Dk{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends Yl{constructor(){super("facebook.com")}static credential(t){return Ji._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return zr.credentialFromTaggedObject(t)}static credentialFromError(t){return zr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return zr.credential(t.oauthAccessToken)}catch{return null}}}zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Yl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ji._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ur.credentialFromTaggedObject(t)}static credentialFromError(t){return Ur.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ur.credential(n,r)}catch{return null}}}Ur.GOOGLE_SIGN_IN_METHOD="google.com";Ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends Yl{constructor(){super("github.com")}static credential(t){return Ji._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Br.credentialFromTaggedObject(t)}static credentialFromError(t){return Br.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Br.credential(t.oauthAccessToken)}catch{return null}}}Br.GITHUB_SIGN_IN_METHOD="github.com";Br.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Yl{constructor(){super("twitter.com")}static credential(t,n){return Ji._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return jr.credentialFromTaggedObject(t)}static credentialFromError(t){return jr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return jr.credential(n,r)}catch{return null}}}jr.TWITTER_SIGN_IN_METHOD="twitter.com";jr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lh(e,t){return Kl(e,"POST","/v1/accounts:signUp",Ms(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Bi._fromIdTokenResponse(t,r,i),s=u_(r);return new Zi({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=u_(r);return new Zi({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function u_(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends nr{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,nd.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new nd(t,n,r,i)}}function $k(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?nd._fromErrorAndOperation(e,o,t,r):o})}async function gM(e,t,n=!1){const r=await pl(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Zi._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vM(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await pl(e,$k(r,i,t,e),n);de(o.idToken,r,"internal-error");const s=Xv(o.idToken);de(s,r,"internal-error");const{sub:a}=s;return de(e.uid===a,r,"user-mismatch"),Zi._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Un(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(e,t,n=!1){const r="signIn",i=await $k(e,r,t),o=await Zi._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function yM(e,t){return Fk(Ds(e),t)}async function _M(e,t,n){var r;const i=Ds(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await td(i,o,"signUpPassword");s=Lh(i,c)}else s=Lh(i,o).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await td(i,o,"signUpPassword");return Lh(i,u)}else return Promise.reject(c)});const a=await s.catch(c=>Promise.reject(c)),l=await Zi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function wM(e,t,n){return yM(mn(e),$s.credential(t,n))}function bM(e,t,n,r){return mn(e).onIdTokenChanged(t,n,r)}function SM(e,t,n){return mn(e).beforeAuthStateChanged(t,n)}const rd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rd,"1"),this.storage.removeItem(rd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(){const e=Ft();return Jv(e)||af(e)}const EM=1e3,kM=10;class Uk extends zk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CM()&&X4(),this.fallbackToPolling=Rk(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Q4()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,kM):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},EM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Uk.type="LOCAL";const xM=Uk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk extends zk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Bk.type="SESSION";const jk=Bk;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IM(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new lf(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async c=>c(n.origin,o)),l=await IM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const c=ty("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(f.data.response);break;default:clearTimeout(u),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){return window}function RM(e){Zn().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function PM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AM(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function NM(){return Wk()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="firebaseLocalStorageDb",OM=1,id="firebaseLocalStorage",Vk="fbase_key";class Ql{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cf(e,t){return e.transaction([id],t?"readwrite":"readonly").objectStore(id)}function MM(){const e=indexedDB.deleteDatabase(Hk);return new Ql(e).toPromise()}function xm(){const e=indexedDB.open(Hk,OM);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(id,{keyPath:Vk})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(id)?t(r):(r.close(),await MM(),t(await xm()))})})}async function d_(e,t,n){const r=cf(e,!0).put({[Vk]:t,value:n});return new Ql(r).toPromise()}async function LM(e,t){const n=cf(e,!1).get(t),r=await new Ql(n).toPromise();return r===void 0?null:r.value}function f_(e,t){const n=cf(e,!0).delete(t);return new Ql(n).toPromise()}const DM=800,$M=3;class qk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>$M)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lf._getInstance(NM()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await PM(),!this.activeServiceWorker)return;this.sender=new TM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||AM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await xm();return await d_(t,rd,"1"),await f_(t,rd),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>d_(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>LM(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>f_(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=cf(i,!1).getAll();return new Ql(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qk.type="LOCAL";const FM=qk;new Gl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zM(e,t){return t?fr(t):(de(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny extends Zv{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ns(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ns(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ns(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function UM(e){return Fk(e.auth,new ny(e),e.bypassAuthState)}function BM(e){const{auth:t,user:n}=e;return de(n,t,"internal-error"),vM(n,new ny(e),e.bypassAuthState)}async function jM(e){const{auth:t,user:n}=e;return de(n,t,"internal-error"),gM(n,new ny(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return UM;case"linkViaPopup":case"linkViaRedirect":return jM;case"reauthViaPopup":case"reauthViaRedirect":return BM;default:Un(this.auth,"internal-error")}}resolve(t){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM=new Gl(2e3,1e4);class zo extends Gk{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,zo.currentPopupAction&&zo.currentPopupAction.cancel(),zo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return de(t,this.auth,"internal-error"),t}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const t=ty();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zo.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,WM.get())};t()}}zo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HM="pendingRedirect",nu=new Map;class VM extends Gk{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=nu.get(this.auth._key());if(!t){try{const r=await qM(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}nu.set(this.auth._key(),t)}return this.bypassAuthState||nu.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qM(e,t){const n=YM(t),r=KM(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function GM(e,t){nu.set(e._key(),t)}function KM(e){return fr(e._redirectPersistence)}function YM(e){return tu(HM,e.config.apiKey,e.name)}async function QM(e,t,n=!1){const r=Ds(e),i=zM(r,t),s=await new VM(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=10*60*1e3;class JM{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!ZM(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Kk(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=XM&&this.cachedEventUids.clear(),this.cachedEventUids.has(h_(t))}saveEventToCache(t){this.cachedEventUids.add(h_(t)),this.lastProcessedEventTime=Date.now()}}function h_(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Kk({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function ZM(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kk(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e5(e,t={}){return Ls(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n5=/^https?/;async function r5(e){if(e.config.emulator)return;const{authorizedDomains:t}=await e5(e);for(const n of t)try{if(i5(n))return}catch{}Un(e,"unauthorized-domain")}function i5(e){const t=km(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!n5.test(n))return!1;if(t5.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o5=new Gl(3e4,6e4);function p_(){const e=Zn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function s5(e){return new Promise((t,n)=>{var r,i,o;function s(){p_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{p_(),n(Jn(e,"network-request-failed"))},timeout:o5.get()})}if(!((i=(r=Zn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Zn().gapi)===null||o===void 0)&&o.load)s();else{const a=Z4("iframefcb");return Zn()[a]=()=>{gapi.load?s():n(Jn(e,"network-request-failed"))},Ok(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw ru=null,t})}let ru=null;function a5(e){return ru=ru||s5(e),ru}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l5=new Gl(5e3,15e3),c5="__/auth/iframe",u5="emulator/auth/iframe",d5={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},f5=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function h5(e){const t=e.config;de(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Qv(t,u5):`https://${e.config.authDomain}/${c5}`,r={apiKey:t.apiKey,appName:e.name,v:Ps},i=f5.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Rs(r).slice(1)}`}async function p5(e){const t=await a5(e),n=Zn().gapi;return de(n,e,"internal-error"),t.open({where:document.body,url:h5(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:d5,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Jn(e,"network-request-failed"),a=Zn().setTimeout(()=>{o(s)},l5.get());function l(){Zn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m5={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},g5=500,v5=600,y5="_blank",_5="http://localhost";class m_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function w5(e,t,n,r=g5,i=v5){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},m5),{width:r.toString(),height:i.toString(),top:o,left:s}),c=Ft().toLowerCase();n&&(a=Ek(c)?y5:n),Ck(c)&&(t=t||_5,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[h,p])=>`${f}${h}=${p},`,"");if(Y4(c)&&a!=="_self")return b5(t||"",a),new m_(null);const d=window.open(t||"",a,u);de(d,e,"popup-blocked");try{d.focus()}catch{}return new m_(d)}function b5(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S5="__/auth/handler",C5="emulator/auth/handler",E5=encodeURIComponent("fac");async function g_(e,t,n,r,i,o){de(e.config.authDomain,e,"auth-domain-config-required"),de(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ps,eventId:i};if(t instanceof Dk){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",om(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,d]of Object.entries(o||{}))s[u]=d}if(t instanceof Yl){const u=t.getScopes().filter(d=>d!=="");u.length>0&&(s.scopes=u.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await e._getAppCheckToken(),c=l?`#${E5}=${encodeURIComponent(l)}`:"";return`${k5(e)}?${Rs(a).slice(1)}${c}`}function k5({config:e}){return e.emulator?Qv(e,C5):`https://${e.authDomain}/${S5}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="webStorageSupport";class x5{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jk,this._completeRedirectFn=QM,this._overrideRedirectResult=GM}async _openPopup(t,n,r,i){var o;Sr((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await g_(t,n,r,km(),i);return w5(t,s,ty())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await g_(t,n,r,km(),i);return RM(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Sr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await p5(t),r=new JM(t);return n.register("authEvent",i=>(de(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Dh,{type:Dh},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Dh];s!==void 0&&n(!!s),Un(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=r5(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rk()||Jv()||af()}}const I5=x5;var v_="@firebase/auth",y_="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T5{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R5(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function P5(e){tr(new zn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;de(s&&!s.includes(":"),"invalid-api-key",{appName:r.name}),de(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pk(e)},c=new iM(r,i,o,l);return sM(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),tr(new zn("auth-internal",t=>{const n=Ds(t.getProvider("auth").getImmediate());return(r=>new T5(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(v_,y_,R5(e)),Cn(v_,y_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A5=5*60,N5=GC("authIdTokenMaxAge")||A5;let __=null;const O5=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>N5)return;const i=n==null?void 0:n.token;__!==i&&(__=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Fs(e=uv()){const t=uo(e,"auth");if(t.isInitialized())return t.getImmediate();const n=oM(e,{popupRedirectResolver:I5,persistence:[FM,xM,jk]}),r=GC("authTokenSyncURL");if(r){const o=O5(r);SM(n,o,()=>o(n.currentUser)),bM(n,s=>o(s))}const i=qC("auth");return i&&aM(n,`http://${i}`),n}P5("Browser");const M5=(e,t)=>t.some(n=>e instanceof n);let w_,b_;function L5(){return w_||(w_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function D5(){return b_||(b_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yk=new WeakMap,Im=new WeakMap,Qk=new WeakMap,$h=new WeakMap,ry=new WeakMap;function $5(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(ii(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Yk.set(n,e)}).catch(()=>{}),ry.set(t,e),t}function F5(e){if(Im.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Im.set(e,t)}let Tm={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Im.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Qk.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ii(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function z5(e){Tm=e(Tm)}function U5(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Fh(this),t,...n);return Qk.set(r,t.sort?t.sort():[t]),ii(r)}:D5().includes(e)?function(...t){return e.apply(Fh(this),t),ii(Yk.get(this))}:function(...t){return ii(e.apply(Fh(this),t))}}function B5(e){return typeof e=="function"?U5(e):(e instanceof IDBTransaction&&F5(e),M5(e,L5())?new Proxy(e,Tm):e)}function ii(e){if(e instanceof IDBRequest)return $5(e);if($h.has(e))return $h.get(e);const t=B5(e);return t!==e&&($h.set(e,t),ry.set(t,e)),t}const Fh=e=>ry.get(e);function j5(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=ii(s);return r&&s.addEventListener("upgradeneeded",l=>{r(ii(s.result),l.oldVersion,l.newVersion,ii(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const W5=["get","getKey","getAll","getAllKeys","count"],H5=["put","add","delete","clear"],zh=new Map;function S_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(zh.get(t))return zh.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=H5.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||W5.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return zh.set(t,o),o}z5(e=>({...e,get:(t,n,r)=>S_(t,n)||e.get(t,n,r),has:(t,n)=>!!S_(t,n)||e.has(t,n)}));const Xk="@firebase/installations",iy="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=1e4,Zk=`w:${iy}`,ex="FIS_v2",V5="https://firebaseinstallations.googleapis.com/v1",q5=60*60*1e3,G5="installations",K5="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y5={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},eo=new co(G5,K5,Y5);function tx(e){return e instanceof nr&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx({projectId:e}){return`${V5}/projects/${e}/installations`}function rx(e){return{token:e.token,requestStatus:2,expiresIn:X5(e.expiresIn),creationTime:Date.now()}}async function ix(e,t){const r=(await t.json()).error;return eo.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ox({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Q5(e,{refreshToken:t}){const n=ox(e);return n.append("Authorization",J5(t)),n}async function sx(e){const t=await e();return t.status>=500&&t.status<600?e():t}function X5(e){return Number(e.replace("s","000"))}function J5(e){return`${ex} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z5({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=nx(e),i=ox(e),o=t.getImmediate({optional:!0});if(o){const c=await o.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const s={fid:n,authVersion:ex,appId:e.appId,sdkVersion:Zk},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await sx(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:rx(c.authToken)}}else throw await ix("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tL=/^[cdef][\w-]{21}$/,Rm="";function nL(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=rL(e);return tL.test(n)?n:Rm}catch{return Rm}}function rL(e){return eL(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=new Map;function cx(e,t){const n=uf(e);ux(n,t),iL(n,t)}function ux(e,t){const n=lx.get(e);if(n)for(const r of n)r(t)}function iL(e,t){const n=oL();n&&n.postMessage({key:e,fid:t}),sL()}let Oi=null;function oL(){return!Oi&&"BroadcastChannel"in self&&(Oi=new BroadcastChannel("[Firebase] FID Change"),Oi.onmessage=e=>{ux(e.data.key,e.data.fid)}),Oi}function sL(){lx.size===0&&Oi&&(Oi.close(),Oi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL="firebase-installations-database",lL=1,to="firebase-installations-store";let Uh=null;function oy(){return Uh||(Uh=j5(aL,lL,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(to)}}})),Uh}async function od(e,t){const n=uf(e),i=(await oy()).transaction(to,"readwrite"),o=i.objectStore(to),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&cx(e,t.fid),t}async function dx(e){const t=uf(e),r=(await oy()).transaction(to,"readwrite");await r.objectStore(to).delete(t),await r.done}async function df(e,t){const n=uf(e),i=(await oy()).transaction(to,"readwrite"),o=i.objectStore(to),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&cx(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sy(e){let t;const n=await df(e.appConfig,r=>{const i=cL(r),o=uL(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Rm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function cL(e){const t=e||{fid:nL(),registrationStatus:0};return fx(t)}function uL(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(eo.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=dL(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:fL(e)}:{installationEntry:t}}async function dL(e,t){try{const n=await Z5(e,t);return od(e.appConfig,n)}catch(n){throw tx(n)&&n.customData.serverCode===409?await dx(e.appConfig):await od(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function fL(e){let t=await C_(e.appConfig);for(;t.registrationStatus===1;)await ax(100),t=await C_(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await sy(e);return r||n}return t}function C_(e){return df(e,t=>{if(!t)throw eo.create("installation-not-found");return fx(t)})}function fx(e){return hL(e)?{fid:e.fid,registrationStatus:0}:e}function hL(e){return e.registrationStatus===1&&e.registrationTime+Jk<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pL({appConfig:e,heartbeatServiceProvider:t},n){const r=mL(e,n),i=Q5(e,n),o=t.getImmediate({optional:!0});if(o){const c=await o.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const s={installation:{sdkVersion:Zk,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await sx(()=>fetch(r,a));if(l.ok){const c=await l.json();return rx(c)}else throw await ix("Generate Auth Token",l)}function mL(e,{fid:t}){return`${nx(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ay(e,t=!1){let n;const r=await df(e.appConfig,o=>{if(!hx(o))throw eo.create("not-registered");const s=o.authToken;if(!t&&yL(s))return o;if(s.requestStatus===1)return n=gL(e,t),o;{if(!navigator.onLine)throw eo.create("app-offline");const a=wL(o);return n=vL(e,a),a}});return n?await n:r.authToken}async function gL(e,t){let n=await E_(e.appConfig);for(;n.authToken.requestStatus===1;)await ax(100),n=await E_(e.appConfig);const r=n.authToken;return r.requestStatus===0?ay(e,t):r}function E_(e){return df(e,t=>{if(!hx(t))throw eo.create("not-registered");const n=t.authToken;return bL(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function vL(e,t){try{const n=await pL(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await od(e.appConfig,r),n}catch(n){if(tx(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await dx(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await od(e.appConfig,r)}throw n}}function hx(e){return e!==void 0&&e.registrationStatus===2}function yL(e){return e.requestStatus===2&&!_L(e)}function _L(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+q5}function wL(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function bL(e){return e.requestStatus===1&&e.requestTime+Jk<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SL(e){const t=e,{installationEntry:n,registrationPromise:r}=await sy(t);return r?r.catch(console.error):ay(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CL(e,t=!1){const n=e;return await EL(n),(await ay(n,t)).token}async function EL(e){const{registrationPromise:t}=await sy(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kL(e){if(!e||!e.options)throw Bh("App Configuration");if(!e.name)throw Bh("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Bh(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Bh(e){return eo.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px="installations",xL="installations-internal",IL=e=>{const t=e.getProvider("app").getImmediate(),n=kL(t),r=uo(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},TL=e=>{const t=e.getProvider("app").getImmediate(),n=uo(t,px).getImmediate();return{getId:()=>SL(n),getToken:i=>CL(n,i)}};function RL(){tr(new zn(px,IL,"PUBLIC")),tr(new zn(xL,TL,"PRIVATE"))}RL();Cn(Xk,iy);Cn(Xk,iy,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="analytics",PL="firebase_id",AL="origin",NL=60*1e3,OL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ly="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Jd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ln=new co("analytics","Analytics",ML);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LL(e){if(!e.startsWith(ly)){const t=ln.create("invalid-gtag-resource",{gtagURL:e});return en.warn(t.message),""}return e}function mx(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function DL(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function $L(e,t){const n=DL("firebase-js-sdk-policy",{createScriptURL:LL}),r=document.createElement("script"),i=`${ly}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function FL(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function zL(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await mx(n)).find(c=>c.measurementId===i);l&&await t[l.appId]}}catch(a){en.error(a)}e("config",i,o)}async function UL(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await mx(n);for(const l of s){const c=a.find(d=>d.measurementId===l),u=c&&t[c.appId];if(u)o.push(u);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){en.error(o)}}function BL(e,t,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await UL(e,t,n,a,l)}else if(o==="config"){const[a,l]=s;await zL(e,t,n,r,a,l)}else if(o==="consent"){const[a]=s;e("consent","update",a)}else if(o==="get"){const[a,l,c]=s;e("get",a,l,c)}else if(o==="set"){const[a]=s;e("set",a)}else e(o,...s)}catch(a){en.error(a)}}return i}function jL(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=BL(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function WL(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ly)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HL=30,VL=1e3;class qL{constructor(t={},n=VL){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const gx=new qL;function GL(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function KL(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:GL(r)},o=OL.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw ln.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function YL(e,t=gx,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw ln.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw ln.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new JL;return setTimeout(async()=>{a.abort()},n!==void 0?n:NL),vx({appId:r,apiKey:i,measurementId:o},s,a,t)}async function vx(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=gx){var o;const{appId:s,measurementId:a}=e;try{await QL(r,t)}catch(l){if(a)return en.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await KL(e);return i.deleteThrottleMetadata(s),l}catch(l){const c=l;if(!XL(c)){if(i.deleteThrottleMetadata(s),a)return en.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:a};throw l}const u=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?p1(n,i.intervalMillis,HL):p1(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(s,d),en.debug(`Calling attemptFetch again in ${u} millis`),vx(e,d,r,i)}}function QL(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(ln.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function XL(e){if(!(e instanceof nr)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class JL{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function ZL(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(){if(XC())try{await JC()}catch(e){return en.warn(ln.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return en.warn(ln.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tD(e,t,n,r,i,o,s){var a;const l=YL(e);l.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&en.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>en.error(h)),t.push(l);const c=eD().then(h=>{if(h)return r.getId()}),[u,d]=await Promise.all([l,c]);WL(o)||$L(o,u.measurementId),i("js",new Date);const f=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return f[AL]="firebase",f.update=!0,d!=null&&(f[PL]=d),i("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(t){this.app=t}_delete(){return delete Pa[this.app.options.appId],Promise.resolve()}}let Pa={},k_=[];const x_={};let jh="dataLayer",rD="gtag",I_,yx,T_=!1;function iD(){const e=[];if(KC()&&e.push("This is a browser extension environment."),QP()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ln.create("invalid-analytics-context",{errorInfo:t});en.warn(n.message)}}function oD(e,t,n){iD();const r=e.options.appId;if(!r)throw ln.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)en.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ln.create("no-api-key");if(Pa[r]!=null)throw ln.create("already-exists",{id:r});if(!T_){FL(jh);const{wrappedGtag:o,gtagCore:s}=jL(Pa,k_,x_,jh,rD);yx=o,I_=s,T_=!0}return Pa[r]=tD(e,k_,x_,t,I_,jh,n),new nD(e)}function sD(e=uv()){e=mn(e);const t=uo(e,sd);return t.isInitialized()?t.getImmediate():aD(e)}function aD(e,t={}){const n=uo(e,sd);if(n.isInitialized()){const i=n.getImmediate();if(il(t,n.getOptions()))return i;throw ln.create("already-initialized")}return n.initialize({options:t})}function lD(e,t,n,r){e=mn(e),ZL(yx,Pa[e.app.options.appId],t,n,r).catch(i=>en.error(i))}const R_="@firebase/analytics",P_="0.10.0";function cD(){tr(new zn(sd,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return oD(r,i,n)},"PUBLIC")),tr(new zn("analytics-internal",e,"PRIVATE")),Cn(R_,P_),Cn(R_,P_,"esm2017");function e(t){try{const n=t.getProvider(sd).getImmediate();return{logEvent:(r,i,o)=>lD(n,r,i,o)}}catch(n){throw ln.create("interop-component-reg-failed",{reason:n})}}}cD();const uD={apiKey:"AIzaSyDPOkyUz5CWBVtnnEbCiXHigIbsRggAVxQ",authDomain:"connectedspine-6185c.firebaseapp.com",projectId:"connectedspine-6185c",storageBucket:"connectedspine-6185c.appspot.com",messagingSenderId:"1007989386438",appId:"1:1007989386438:web:ae244de67f858f182efbc7",measurementId:"G-HWSQ69B24Y"},cy=nE(uD),Pm=I4(cy),_x=Fs(cy);sD(cy);const dD=e=>{const[t,n]=w.useState(),[r,i]=w.useState(null);return w.useEffect(()=>_4(mk(Pm,e),o=>{n(o.val())},o=>{i(o)}),[e]),[t,r]},A_=e=>{const t=Date.now(),n=(e==null?void 0:e.message)||`Updated: ${new Date(t).toLocaleString()}`;return{timestamp:t,error:e,message:n}},vl=e=>{const[t,n]=w.useState();return[w.useCallback(i=>{v4(mk(Pm,e),i).then(()=>n(A_())).catch(o=>n(A_(o)))},[Pm,e]),t]};function N_(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N_(Object(n),!0).forEach(function(r){mt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N_(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ad(e){return ad=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ad(e)}function fD(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O_(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hD(e,t,n){return t&&O_(e.prototype,t),n&&O_(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function mt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uy(e,t){return mD(e)||vD(e,t)||wx(e,t)||_D()}function Xl(e){return pD(e)||gD(e)||wx(e)||yD()}function pD(e){if(Array.isArray(e))return Am(e)}function mD(e){if(Array.isArray(e))return e}function gD(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vD(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function wx(e,t){if(e){if(typeof e=="string")return Am(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Am(e,t)}}function Am(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var M_=function(){},dy={},bx={},Sx=null,Cx={mark:M_,measure:M_};try{typeof window<"u"&&(dy=window),typeof document<"u"&&(bx=document),typeof MutationObserver<"u"&&(Sx=MutationObserver),typeof performance<"u"&&(Cx=performance)}catch{}var wD=dy.navigator||{},L_=wD.userAgent,D_=L_===void 0?"":L_,ui=dy,He=bx,$_=Sx,Tc=Cx;ui.document;var Rr=!!He.documentElement&&!!He.head&&typeof He.addEventListener=="function"&&typeof He.createElement=="function",Ex=~D_.indexOf("MSIE")||~D_.indexOf("Trident/"),Rc,Pc,Ac,Nc,Oc,Cr="___FONT_AWESOME___",Nm=16,kx="fa",xx="svg-inline--fa",no="data-fa-i2svg",Om="data-fa-pseudo-element",bD="data-fa-pseudo-element-pending",fy="data-prefix",hy="data-icon",F_="fontawesome-i2svg",SD="async",CD=["HTML","HEAD","STYLE","SCRIPT"],Ix=function(){try{return!0}catch{return!1}}(),Be="classic",it="sharp",py=[Be,it];function Jl(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Be]}})}var yl=Jl((Rc={},mt(Rc,Be,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),mt(Rc,it,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Rc)),_l=Jl((Pc={},mt(Pc,Be,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),mt(Pc,it,{solid:"fass",regular:"fasr",light:"fasl"}),Pc)),wl=Jl((Ac={},mt(Ac,Be,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),mt(Ac,it,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ac)),ED=Jl((Nc={},mt(Nc,Be,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),mt(Nc,it,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Nc)),kD=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Tx="fa-layers-text",xD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ID=Jl((Oc={},mt(Oc,Be,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),mt(Oc,it,{900:"fass",400:"fasr",300:"fasl"}),Oc)),Rx=[1,2,3,4,5,6,7,8,9,10],TD=Rx.concat([11,12,13,14,15,16,17,18,19,20]),RD=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},bl=new Set;Object.keys(_l[Be]).map(bl.add.bind(bl));Object.keys(_l[it]).map(bl.add.bind(bl));var PD=[].concat(py,Xl(bl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Mi.GROUP,Mi.SWAP_OPACITY,Mi.PRIMARY,Mi.SECONDARY]).concat(Rx.map(function(e){return"".concat(e,"x")})).concat(TD.map(function(e){return"w-".concat(e)})),Aa=ui.FontAwesomeConfig||{};function AD(e){var t=He.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ND(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(He&&typeof He.querySelector=="function"){var OD=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];OD.forEach(function(e){var t=uy(e,2),n=t[0],r=t[1],i=ND(AD(n));i!=null&&(Aa[r]=i)})}var Px={styleDefault:"solid",familyDefault:"classic",cssPrefix:kx,replacementClass:xx,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Aa.familyPrefix&&(Aa.cssPrefix=Aa.familyPrefix);var bs=G(G({},Px),Aa);bs.autoReplaceSvg||(bs.observeMutations=!1);var Q={};Object.keys(Px).forEach(function(e){Object.defineProperty(Q,e,{enumerable:!0,set:function(n){bs[e]=n,Na.forEach(function(r){return r(Q)})},get:function(){return bs[e]}})});Object.defineProperty(Q,"familyPrefix",{enumerable:!0,set:function(t){bs.cssPrefix=t,Na.forEach(function(n){return n(Q)})},get:function(){return bs.cssPrefix}});ui.FontAwesomeConfig=Q;var Na=[];function MD(e){return Na.push(e),function(){Na.splice(Na.indexOf(e),1)}}var Or=Nm,Yn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function LD(e){if(!(!e||!Rr)){var t=He.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=He.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return He.head.insertBefore(t,r),e}}var DD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Sl(){for(var e=12,t="";e-- >0;)t+=DD[Math.random()*62|0];return t}function zs(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function my(e){return e.classList?zs(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ax(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $D(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ax(e[n]),'" ')},"").trim()}function ff(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function gy(e){return e.size!==Yn.size||e.x!==Yn.x||e.y!==Yn.y||e.rotate!==Yn.rotate||e.flipX||e.flipY}function FD(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function zD(e){var t=e.transform,n=e.width,r=n===void 0?Nm:n,i=e.height,o=i===void 0?Nm:i,s=e.startCentered,a=s===void 0?!1:s,l="";return a&&Ex?l+="translate(".concat(t.x/Or-r/2,"em, ").concat(t.y/Or-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/Or,"em), calc(-50% + ").concat(t.y/Or,"em)) "):l+="translate(".concat(t.x/Or,"em, ").concat(t.y/Or,"em) "),l+="scale(".concat(t.size/Or*(t.flipX?-1:1),", ").concat(t.size/Or*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var UD=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Nx(){var e=kx,t=xx,n=Q.cssPrefix,r=Q.replacementClass,i=UD;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var z_=!1;function Wh(){Q.autoAddCss&&!z_&&(LD(Nx()),z_=!0)}var BD={mixout:function(){return{dom:{css:Nx,insertCss:Wh}}},hooks:function(){return{beforeDOMElementCreation:function(){Wh()},beforeI2svg:function(){Wh()}}}},Er=ui||{};Er[Cr]||(Er[Cr]={});Er[Cr].styles||(Er[Cr].styles={});Er[Cr].hooks||(Er[Cr].hooks={});Er[Cr].shims||(Er[Cr].shims=[]);var Mn=Er[Cr],Ox=[],jD=function e(){He.removeEventListener("DOMContentLoaded",e),ld=1,Ox.map(function(t){return t()})},ld=!1;Rr&&(ld=(He.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(He.readyState),ld||He.addEventListener("DOMContentLoaded",jD));function WD(e){Rr&&(ld?setTimeout(e,0):Ox.push(e))}function Zl(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?Ax(e):"<".concat(t," ").concat($D(r),">").concat(o.map(Zl).join(""),"</").concat(t,">")}function U_(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var HD=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},Hh=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?HD(n,i):n,l,c,u;for(r===void 0?(l=1,u=t[o[0]]):(l=0,u=r);l<s;l++)c=o[l],u=a(u,t[c],c,t);return u};function VD(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Mm(e){var t=VD(e);return t.length===1?t[0].toString(16):null}function qD(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function B_(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Lm(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=B_(t);typeof Mn.hooks.addPack=="function"&&!i?Mn.hooks.addPack(e,B_(t)):Mn.styles[e]=G(G({},Mn.styles[e]||{}),o),e==="fas"&&Lm("fa",t)}var Mc,Lc,Dc,Uo=Mn.styles,GD=Mn.shims,KD=(Mc={},mt(Mc,Be,Object.values(wl[Be])),mt(Mc,it,Object.values(wl[it])),Mc),vy=null,Mx={},Lx={},Dx={},$x={},Fx={},YD=(Lc={},mt(Lc,Be,Object.keys(yl[Be])),mt(Lc,it,Object.keys(yl[it])),Lc);function QD(e){return~PD.indexOf(e)}function XD(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!QD(i)?i:null}var zx=function(){var t=function(o){return Hh(Uo,function(s,a,l){return s[l]=Hh(a,o,{}),s},{})};Mx=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),Lx=t(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),Fx=t(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in Uo||Q.autoFetchSvg,r=Hh(GD,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Dx=r.names,$x=r.unicodes,vy=hf(Q.styleDefault,{family:Q.familyDefault})};MD(function(e){vy=hf(e.styleDefault,{family:Q.familyDefault})});zx();function yy(e,t){return(Mx[e]||{})[t]}function JD(e,t){return(Lx[e]||{})[t]}function Li(e,t){return(Fx[e]||{})[t]}function Ux(e){return Dx[e]||{prefix:null,iconName:null}}function ZD(e){var t=$x[e],n=yy("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function di(){return vy}var _y=function(){return{prefix:null,iconName:null,rest:[]}};function hf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Be:n,i=yl[r][e],o=_l[r][e]||_l[r][i],s=e in Mn.styles?e:null;return o||s||null}var j_=(Dc={},mt(Dc,Be,Object.keys(wl[Be])),mt(Dc,it,Object.keys(wl[it])),Dc);function pf(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},mt(t,Be,"".concat(Q.cssPrefix,"-").concat(Be)),mt(t,it,"".concat(Q.cssPrefix,"-").concat(it)),t),s=null,a=Be;(e.includes(o[Be])||e.some(function(c){return j_[Be].includes(c)}))&&(a=Be),(e.includes(o[it])||e.some(function(c){return j_[it].includes(c)}))&&(a=it);var l=e.reduce(function(c,u){var d=XD(Q.cssPrefix,u);if(Uo[u]?(u=KD[a].includes(u)?ED[a][u]:u,s=u,c.prefix=u):YD[a].indexOf(u)>-1?(s=u,c.prefix=hf(u,{family:a})):d?c.iconName=d:u!==Q.replacementClass&&u!==o[Be]&&u!==o[it]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var f=s==="fa"?Ux(c.iconName):{},h=Li(c.prefix,c.iconName);f.prefix&&(s=null),c.iconName=f.iconName||h||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!Uo.far&&Uo.fas&&!Q.autoFetchSvg&&(c.prefix="fas")}return c},_y());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===it&&(Uo.fass||Q.autoFetchSvg)&&(l.prefix="fass",l.iconName=Li(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=di()||"fas"),l}var e$=function(){function e(){fD(this,e),this.definitions={}}return hD(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=G(G({},n.definitions[a]||{}),s[a]),Lm(a,s[a]);var l=wl[Be][a];l&&Lm(l,s[a]),zx()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,c=s.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(n[a][d]=c)}),n[a][l]=c}),n}}]),e}(),W_=[],Bo={},rs={},t$=Object.keys(rs);function n$(e,t){var n=t.mixoutsTo;return W_=e,Bo={},Object.keys(rs).forEach(function(r){t$.indexOf(r)===-1&&delete rs[r]}),W_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),ad(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){Bo[s]||(Bo[s]=[]),Bo[s].push(o[s])})}r.provides&&r.provides(rs)}),n}function Dm(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Bo[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function ro(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Bo[e]||[];i.forEach(function(o){o.apply(null,n)})}function kr(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return rs[e]?rs[e].apply(null,t):void 0}function $m(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||di();if(t)return t=Li(n,t)||t,U_(Bx.definitions,n,t)||U_(Mn.styles,n,t)}var Bx=new e$,r$=function(){Q.autoReplaceSvg=!1,Q.observeMutations=!1,ro("noAuto")},i$={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Rr?(ro("beforeI2svg",t),kr("pseudoElements2svg",t),kr("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;Q.autoReplaceSvg===!1&&(Q.autoReplaceSvg=!0),Q.observeMutations=!0,WD(function(){s$({autoReplaceSvgRoot:n}),ro("watch",t)})}},o$={icon:function(t){if(t===null)return null;if(ad(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Li(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=hf(t[0]);return{prefix:r,iconName:Li(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(Q.cssPrefix,"-"))>-1||t.match(kD))){var i=pf(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||di(),iconName:Li(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=di();return{prefix:o,iconName:Li(o,t)||t}}}},gn={noAuto:r$,config:Q,dom:i$,parse:o$,library:Bx,findIconDefinition:$m,toHtml:Zl},s$=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?He:n;(Object.keys(Mn.styles).length>0||Q.autoFetchSvg)&&Rr&&Q.autoReplaceSvg&&gn.dom.i2svg({node:r})};function mf(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Zl(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Rr){var r=He.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function a$(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(gy(s)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=ff(G(G({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function l$(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(Q.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:G(G({},i),{},{id:s}),children:r}]}]}function wy(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,s=e.transform,a=e.symbol,l=e.title,c=e.maskId,u=e.titleId,d=e.extra,f=e.watchable,h=f===void 0?!1:f,p=r.found?r:n,y=p.width,S=p.height,v=i==="fak",m=[Q.replacementClass,o?"".concat(Q.cssPrefix,"-").concat(o):""].filter(function(A){return d.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(d.classes).join(" "),g={children:[],attributes:G(G({},d.attributes),{},{"data-prefix":i,"data-icon":o,class:m,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(S)})},_=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(y/S*16*.0625,"em")}:{};h&&(g.attributes[no]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(u||Sl())},children:[l]}),delete g.attributes.title);var C=G(G({},g),{},{prefix:i,iconName:o,main:n,mask:r,maskId:c,transform:s,symbol:a,styles:G(G({},_),d.styles)}),k=r.found&&n.found?kr("generateAbstractMask",C)||{children:[],attributes:{}}:kr("generateAbstractIcon",C)||{children:[],attributes:{}},E=k.children,T=k.attributes;return C.children=E,C.attributes=T,a?l$(C):a$(C)}function H_(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,s=e.extra,a=e.watchable,l=a===void 0?!1:a,c=G(G(G({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(c[no]="");var u=G({},s.styles);gy(i)&&(u.transform=zD({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var d=ff(u);d.length>0&&(c.style=d);var f=[];return f.push({tag:"span",attributes:c,children:[t]}),o&&f.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),f}function c$(e){var t=e.content,n=e.title,r=e.extra,i=G(G(G({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=ff(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Vh=Mn.styles;function Fm(e){var t=e[0],n=e[1],r=e.slice(4),i=uy(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Mi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Mi.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Mi.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var u$={found:!1,width:512,height:512};function d$(e,t){!Ix&&!Q.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zm(e,t){var n=t;return t==="fa"&&Q.styleDefault!==null&&(t=di()),new Promise(function(r,i){if(kr("missingIconAbstract"),n==="fa"){var o=Ux(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Vh[t]&&Vh[t][e]){var s=Vh[t][e];return r(Fm(s))}d$(e,t),r(G(G({},u$),{},{icon:Q.showMissingIcons&&e?kr("missingIconAbstract")||{}:{}}))})}var V_=function(){},Um=Q.measurePerformance&&Tc&&Tc.mark&&Tc.measure?Tc:{mark:V_,measure:V_},ha='FA "6.4.0"',f$=function(t){return Um.mark("".concat(ha," ").concat(t," begins")),function(){return jx(t)}},jx=function(t){Um.mark("".concat(ha," ").concat(t," ends")),Um.measure("".concat(ha," ").concat(t),"".concat(ha," ").concat(t," begins"),"".concat(ha," ").concat(t," ends"))},by={begin:f$,end:jx},iu=function(){};function q_(e){var t=e.getAttribute?e.getAttribute(no):null;return typeof t=="string"}function h$(e){var t=e.getAttribute?e.getAttribute(fy):null,n=e.getAttribute?e.getAttribute(hy):null;return t&&n}function p$(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(Q.replacementClass)}function m$(){if(Q.autoReplaceSvg===!0)return ou.replace;var e=ou[Q.autoReplaceSvg];return e||ou.replace}function g$(e){return He.createElementNS("http://www.w3.org/2000/svg",e)}function v$(e){return He.createElement(e)}function Wx(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?g$:v$:n;if(typeof e=="string")return He.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(Wx(s,{ceFn:r}))}),i}function y$(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ou={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Wx(i),n)}),n.getAttribute(no)===null&&Q.keepOriginalSource){var r=He.createComment(y$(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~my(n).indexOf(Q.replacementClass))return ou.replace(t);var i=new RegExp("".concat(Q.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===Q.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return Zl(a)}).join(`
`);n.setAttribute(no,""),n.innerHTML=s}};function G_(e){e()}function Hx(e,t){var n=typeof t=="function"?t:iu;if(e.length===0)n();else{var r=G_;Q.mutateApproach===SD&&(r=ui.requestAnimationFrame||G_),r(function(){var i=m$(),o=by.begin("mutate");e.map(i),o(),n()})}}var Sy=!1;function Vx(){Sy=!0}function Bm(){Sy=!1}var cd=null;function K_(e){if($_&&Q.observeMutations){var t=e.treeCallback,n=t===void 0?iu:t,r=e.nodeCallback,i=r===void 0?iu:r,o=e.pseudoElementsCallback,s=o===void 0?iu:o,a=e.observeMutationsRoot,l=a===void 0?He:a;cd=new $_(function(c){if(!Sy){var u=di();zs(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!q_(d.addedNodes[0])&&(Q.searchPseudoElements&&s(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&Q.searchPseudoElements&&s(d.target.parentNode),d.type==="attributes"&&q_(d.target)&&~RD.indexOf(d.attributeName))if(d.attributeName==="class"&&h$(d.target)){var f=pf(my(d.target)),h=f.prefix,p=f.iconName;d.target.setAttribute(fy,h||u),p&&d.target.setAttribute(hy,p)}else p$(d.target)&&i(d.target)})}}),Rr&&cd.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _$(){cd&&cd.disconnect()}function w$(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function b$(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=pf(my(e));return i.prefix||(i.prefix=di()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=JD(i.prefix,e.innerText)||yy(i.prefix,Mm(e.innerText))),!i.iconName&&Q.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function S$(e){var t=zs(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return Q.autoA11y&&(n?t["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(r||Sl()):(t["aria-hidden"]="true",t.focusable="false")),t}function C$(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Yn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Y_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=b$(e),r=n.iconName,i=n.prefix,o=n.rest,s=S$(e),a=Dm("parseNodeAttributes",{},e),l=t.styleParser?w$(e):[];return G({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Yn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var E$=Mn.styles;function qx(e){var t=Q.autoReplaceSvg==="nest"?Y_(e,{styleParser:!1}):Y_(e);return~t.extra.classes.indexOf(Tx)?kr("generateLayersText",e,t):kr("generateSvgReplacementMutation",e,t)}var fi=new Set;py.map(function(e){fi.add("fa-".concat(e))});Object.keys(yl[Be]).map(fi.add.bind(fi));Object.keys(yl[it]).map(fi.add.bind(fi));fi=Xl(fi);function Q_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Rr)return Promise.resolve();var n=He.documentElement.classList,r=function(d){return n.add("".concat(F_,"-").concat(d))},i=function(d){return n.remove("".concat(F_,"-").concat(d))},o=Q.autoFetchSvg?fi:py.map(function(u){return"fa-".concat(u)}).concat(Object.keys(E$));o.includes("fa")||o.push("fa");var s=[".".concat(Tx,":not([").concat(no,"])")].concat(o.map(function(u){return".".concat(u,":not([").concat(no,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=zs(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=by.begin("onTree"),c=a.reduce(function(u,d){try{var f=qx(d);f&&u.push(f)}catch(h){Ix||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise(function(u,d){Promise.all(c).then(function(f){Hx(f,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(f){l(),d(f)})})}function k$(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qx(e).then(function(n){n&&Hx([n],t)})}function x$(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:$m(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:$m(i||{})),e(r,G(G({},n),{},{mask:i}))}}var I$=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Yn:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,d=n.title,f=d===void 0?null:d,h=n.titleId,p=h===void 0?null:h,y=n.classes,S=y===void 0?[]:y,v=n.attributes,m=v===void 0?{}:v,g=n.styles,_=g===void 0?{}:g;if(t){var C=t.prefix,k=t.iconName,E=t.icon;return mf(G({type:"icon"},t),function(){return ro("beforeDOMElementCreation",{iconDefinition:t,params:n}),Q.autoA11y&&(f?m["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(p||Sl()):(m["aria-hidden"]="true",m.focusable="false")),wy({icons:{main:Fm(E),mask:l?Fm(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:k,transform:G(G({},Yn),i),symbol:s,title:f,maskId:u,titleId:p,extra:{attributes:m,styles:_,classes:S}})})}},T$={mixout:function(){return{icon:x$(I$)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Q_,n.nodeCallback=k$,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?He:r,o=n.callback,s=o===void 0?function(){}:o;return Q_(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,d=r.maskId,f=r.extra;return new Promise(function(h,p){Promise.all([zm(i,a),u.iconName?zm(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var S=uy(y,2),v=S[0],m=S[1];h([n,wy({icons:{main:v,mask:m},prefix:a,iconName:i,transform:l,symbol:c,maskId:d,title:o,titleId:s,extra:f,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=ff(a);l.length>0&&(i.style=l);var c;return gy(s)&&(c=kr("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(c||o.icon),{children:r,attributes:i}}}},R$={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return mf({type:"layer"},function(){ro("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(Q.cssPrefix,"-layers")].concat(Xl(o)).join(" ")},children:s}]})}}}},P$={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,u=r.styles,d=u===void 0?{}:u;return mf({type:"counter",content:n},function(){return ro("beforeDOMElementCreation",{content:n,params:r}),c$({content:n.toString(),title:o,extra:{attributes:c,styles:d,classes:["".concat(Q.cssPrefix,"-layers-counter")].concat(Xl(a))}})})}}}},A$={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Yn:i,s=r.title,a=s===void 0?null:s,l=r.classes,c=l===void 0?[]:l,u=r.attributes,d=u===void 0?{}:u,f=r.styles,h=f===void 0?{}:f;return mf({type:"text",content:n},function(){return ro("beforeDOMElementCreation",{content:n,params:r}),H_({content:n,transform:G(G({},Yn),o),title:a,extra:{attributes:d,styles:h,classes:["".concat(Q.cssPrefix,"-layers-text")].concat(Xl(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(Ex){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return Q.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,H_({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},N$=new RegExp('"',"ug"),X_=[1105920,1112319];function O$(e){var t=e.replace(N$,""),n=qD(t,0),r=n>=X_[0]&&n<=X_[1],i=t.length===2?t[0]===t[1]:!1;return{value:Mm(i?t[0]:t),isSecondary:r||i}}function J_(e,t){var n="".concat(bD).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=zs(e.children),s=o.filter(function(E){return E.getAttribute(Om)===t})[0],a=ui.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(xD),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&u!=="none"&&u!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?it:Be,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?_l[f][l[2].toLowerCase()]:ID[f][c],p=O$(d),y=p.value,S=p.isSecondary,v=l[0].startsWith("FontAwesome"),m=yy(h,y),g=m;if(v){var _=ZD(y);_.iconName&&_.prefix&&(m=_.iconName,h=_.prefix)}if(m&&!S&&(!s||s.getAttribute(fy)!==h||s.getAttribute(hy)!==g)){e.setAttribute(n,g),s&&e.removeChild(s);var C=C$(),k=C.extra;k.attributes[Om]=t,zm(m,h).then(function(E){var T=wy(G(G({},C),{},{icons:{main:E,mask:_y()},prefix:h,iconName:g,extra:k,watchable:!0})),A=He.createElement("svg");t==="::before"?e.insertBefore(A,e.firstChild):e.appendChild(A),A.outerHTML=T.map(function(I){return Zl(I)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function M$(e){return Promise.all([J_(e,"::before"),J_(e,"::after")])}function L$(e){return e.parentNode!==document.head&&!~CD.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Om)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Z_(e){if(Rr)return new Promise(function(t,n){var r=zs(e.querySelectorAll("*")).filter(L$).map(M$),i=by.begin("searchPseudoElements");Vx(),Promise.all(r).then(function(){i(),Bm(),t()}).catch(function(){i(),Bm(),n()})})}var D$={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Z_,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?He:r;Q.searchPseudoElements&&Z_(i)}}},ew=!1,$$={mixout:function(){return{dom:{unwatch:function(){Vx(),ew=!0}}}},hooks:function(){return{bootstrap:function(){K_(Dm("mutationObserverCallbacks",{}))},noAuto:function(){_$()},watch:function(n){var r=n.observeMutationsRoot;ew?Bm():K_(Dm("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},tw=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},F$={mixout:function(){return{parse:{transform:function(n){return tw(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=tw(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(s/2*-1," -256)")},h={outer:a,inner:d,path:f};return{tag:"g",attributes:G({},h.outer),children:[{tag:"g",attributes:G({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:G(G({},r.icon.attributes),h.path)}]}]}}}},qh={x:0,y:0,width:"100%",height:"100%"};function nw(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function z$(e){return e.tag==="g"?e.children:[e]}var U$={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?pf(i.split(" ").map(function(s){return s.trim()})):_y();return o.prefix||(o.prefix=di()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,c=o.width,u=o.icon,d=s.width,f=s.icon,h=FD({transform:l,containerWidth:d,iconWidth:c}),p={tag:"rect",attributes:G(G({},qh),{},{fill:"white"})},y=u.children?{children:u.children.map(nw)}:{},S={tag:"g",attributes:G({},h.inner),children:[nw(G({tag:u.tag,attributes:G(G({},u.attributes),h.path)},y))]},v={tag:"g",attributes:G({},h.outer),children:[S]},m="mask-".concat(a||Sl()),g="clip-".concat(a||Sl()),_={tag:"mask",attributes:G(G({},qh),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:z$(f)},_]};return r.push(C,{tag:"rect",attributes:G({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(m,")")},qh)}),{children:r,attributes:i}}}},B$={provides:function(t){var n=!1;ui.matchMedia&&(n=ui.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:G(G({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=G(G({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:G(G({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:G(G({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:G(G({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:G(G({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:G(G({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:G(G({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:G(G({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},j$={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},W$=[BD,T$,R$,P$,A$,D$,$$,F$,U$,B$,j$];n$(W$,{mixoutsTo:gn});gn.noAuto;gn.config;gn.library;gn.dom;var jm=gn.parse;gn.findIconDefinition;gn.toHtml;var H$=gn.icon;gn.layer;gn.text;gn.counter;var he={},V$={get exports(){return he},set exports(e){he=e}},q$="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",G$=q$,K$=G$;function Gx(){}function Kx(){}Kx.resetWarningCache=Gx;var Y$=function(){function e(r,i,o,s,a,l){if(l!==K$){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Kx,resetWarningCache:Gx};return n.PropTypes=n,n};V$.exports=Y$();function rw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Vr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rw(Object(n),!0).forEach(function(r){jo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ud(e){return ud=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ud(e)}function jo(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q$(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function X$(e,t){if(e==null)return{};var n=Q$(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Wm(e){return J$(e)||Z$(e)||e6(e)||t6()}function J$(e){if(Array.isArray(e))return Hm(e)}function Z$(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function e6(e,t){if(e){if(typeof e=="string")return Hm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hm(e,t)}}function Hm(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n6(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,c=e.spinPulse,u=e.spinReverse,d=e.pulse,f=e.fixedWidth,h=e.inverse,p=e.border,y=e.listItem,S=e.flip,v=e.size,m=e.rotation,g=e.pull,_=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":f,"fa-inverse":h,"fa-border":p,"fa-li":y,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},jo(t,"fa-".concat(v),typeof v<"u"&&v!==null),jo(t,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),jo(t,"fa-pull-".concat(g),typeof g<"u"&&g!==null),jo(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(C){return _[C]?C:null}).filter(function(C){return C})}function r6(e){return e=e-0,e===e}function Yx(e){return r6(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var i6=["style"];function o6(e){return e.charAt(0).toUpperCase()+e.slice(1)}function s6(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Yx(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[o6(i)]=o:t[i]=o,t},{})}function Qx(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Qx(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.attrs.className=u,delete t.attributes.class;break;case"style":l.attrs.style=s6(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[Yx(c)]=u}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=X$(n,i6);return i.attrs.style=Vr(Vr({},i.attrs.style),s),e.apply(void 0,[t.tag,Vr(Vr({},i.attrs),a)].concat(Wm(r)))}var Xx=!1;try{Xx=!0}catch{}function a6(){if(!Xx&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function iw(e){if(e&&ud(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(jm.icon)return jm.icon(e);if(e===null)return null;if(e&&ud(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Gh(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?jo({},e,t):{}}var mr=je.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,s=e.title,a=e.titleId,l=e.maskId,c=iw(n),u=Gh("classes",[].concat(Wm(n6(e)),Wm(o.split(" ")))),d=Gh("transform",typeof e.transform=="string"?jm.transform(e.transform):e.transform),f=Gh("mask",iw(r)),h=H$(c,Vr(Vr(Vr(Vr({},u),d),f),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!h)return a6("Could not find icon",c),null;var p=h.abstract,y={ref:t};return Object.keys(e).forEach(function(S){mr.defaultProps.hasOwnProperty(S)||(y[S]=e[S])}),l6(p[0],y)});mr.displayName="FontAwesomeIcon";mr.propTypes={beat:he.bool,border:he.bool,beatFade:he.bool,bounce:he.bool,className:he.string,fade:he.bool,flash:he.bool,mask:he.oneOfType([he.object,he.array,he.string]),maskId:he.string,fixedWidth:he.bool,inverse:he.bool,flip:he.oneOf([!0,!1,"horizontal","vertical","both"]),icon:he.oneOfType([he.object,he.array,he.string]),listItem:he.bool,pull:he.oneOf(["right","left"]),pulse:he.bool,rotation:he.oneOf([0,90,180,270]),shake:he.bool,size:he.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:he.bool,spinPulse:he.bool,spinReverse:he.bool,symbol:he.oneOfType([he.bool,he.string]),title:he.string,titleId:he.string,transform:he.oneOfType([he.string,he.object]),swapOpacity:he.bool};mr.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var l6=Qx.bind(null,je.createElement),ow={prefix:"fas",iconName:"stethoscope",icon:[576,512,[129658],"f0f1","M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},sw={prefix:"fas",iconName:"person",icon:[320,512,[129485,"male"],"f183","M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"]},c6={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},u6={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,["exclamation-circle"],"f06a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},d6={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},f6=d6,h6={prefix:"fas",iconName:"user-doctor",icon:[448,512,["user-md"],"f0f0","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},p6={prefix:"fas",iconName:"hospital",icon:[640,512,[127973,62589,"hospital-alt","hospital-wide"],"f0f8","M192 48c0-26.5 21.5-48 48-48H400c26.5 0 48 21.5 48 48V512H368V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H192V48zM48 96H160V512H48c-26.5 0-48-21.5-48-48V320H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H0V224H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H0V144c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v48H560c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H560c-8.8 0-16 7.2-16 16s7.2 16 16 16h80V464c0 26.5-21.5 48-48 48H480V96H592zM312 64c-8.8 0-16 7.2-16 16v24H272c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V152h24c8.8 0 16-7.2 16-16V120c0-8.8-7.2-16-16-16H344V80c0-8.8-7.2-16-16-16H312z"]},m6={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};const g6=j.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 65px;
  font-size: 20px;
  height: 20%;
`,v6=j.span`
  display: flex;
  align-items: center;
  p {
    padding-left: 10px;
    margin-bottom: 0;
  }
`,aw=j.button`
  border: none;
  background: none;
  font-size: 20px;
  letter-spacing: 1px;
`,y6=j.div`
  height: 100%;
  width: ${e=>e.isOpen?"250px":"0"};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  color: black;

  button {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 20px;
    margin-left: 50px;
    background: none;
    border: none;
  }

  a {
    cursor: pointer;
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    color: black;
    display: block;
    transition: 0.3s;
  }
`,po=()=>{const{setAssessmentState:e}=w.useContext(Fe),{isLogedIn:t}=w.useContext(Fe),{prevPage:n,setPrevPage:r}=w.useContext(Fe),[i,o]=w.useState(!1);function s(){o(!i)}function a(c){i&&s(),e(c)}function l(c){i&&s(),t?e(c):(e("login"),r("profile"))}return z(g6,{children:[z(v6,{children:[b(aw,{onClick:s,children:b(mr,{icon:c6})}),b("p",{children:"ConnectedSpine"})]}),b(aw,{onClick:()=>{e("home")},children:b(mr,{icon:f6})}),z(y6,{isOpen:i,children:[b("button",{onClick:s,children:b(mr,{icon:m6})}),b("a",{onClick:l.bind(null,"profile"),children:"Profile"}),b("a",{onClick:a.bind(null,"home"),children:"Assessment"})]})]})},_6="#fefefe",w6="#888",b6=j.div`
  display: ${e=>e.showModal?"block":"none"};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  div {
    background-color: ${_6};
    margin: 15% auto;
    padding: 0 20px 20px 20px;
    border: 1px solid ${w6};
    width: 80%;
  }
`,S6=j.span`
  top: 0;
  margin-left: 98%;
  font-size: 25px;
  cursor: pointer;
`,hi=({showModal:e,setShowModal:t,text:n})=>b(b6,{showModal:e,children:z("div",{children:[b(S6,{onClick:()=>t(!1),children:"×"}),n]})}),ec="0px 2px 4px rgba(0, 0, 0, 0.2)",tc="rgba(255, 255, 255, 0.8)",Cy="1px solid rgba(0, 0, 0, 0.12)",Us="#3a49ac",C6="#f2f2f2",E6="#b3b3b3",k6="#b3acaa",gf="rgba(179, 172, 170, 0.5)",Cl="#1d2556",Jx="#3a49ac",dd="rgba(58, 73, 172, 0.2)",Vm=j.button`
  width: 80px;
  height: 40px;
  background-color: ${e=>e.isValid?Us:C6};
  color: ${e=>e.isValid?"white":E6};
  border: ${e=>e.isValid?"none":`1px solid ${k6}`};
  border-radius: 4px;
  cursor: ${e=>e.isValid?"pointer":"default"};
  text-transform: uppercase;
`,Oa=j.button`
  min-width: 80px;
  height: 40px;
  padding: 2px;
  background-color: ${gf};
  color: ${Cl};
  border: 1px solid ${Cl};
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  margin-right: 10px;

  :hover {
    background-color: ${Us};
    color: white;
  }
`,fd=j.button`
  cursor: pointer;
  background: ${tc};
  font-size: 20px;
  font-weight: 300;
  text-transform: uppercase;
  color: ${Cl};
  height: ${e=>e.height||"60px"};
  width: 200px;
  padding: 10px 30px;
  margin: 0 auto;
  margin-right: 10px;
  border: ${Cy};
  box-shadow: ${ec};
  border-radius: 8px;
  transition: all 0.3s ease;
  ${e=>e.selected&&`
      border: 1px solid ${Jx};
    `}
  background-color: ${e=>e.selected?dd:"white"};

  &:hover {
    background-color: ${dd};
    outline: none;
  }
`,Zx=j.button`
  width: 90%;
  height: 45px;
  border: none;
  border-radius: 10px;
  background-color: ${tc};
  box-shadow: ${ec};
  font-weight: 300;
  text-transform: uppercase;
  font-size: 15px;

  :hover {
    background-color: ${gf};
  }

  ${e=>e.login&&`
      min-height: 40px;
      height: 40px;
      margin-top: 40px;
      margin-bottom: 10px;
      border-radius: 20px;
  `}
`,Kh=j.input`
  cursor: pointer;
  background: ${tc};
  font-size: 20px;
  font-weight: 300;
  color: black;
  width: 140px;
  height: 50px;
  padding: 10px 30px;
  margin-right: 10px;
  border: ${Cy};
  box-shadow: ${ec};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover,
  :focus {
    background-color: ${dd};
    outline: none;
  }
`,x6="#fefefe",I6="#888",T6="#d0342c",R6=j.div`
  display: ${e=>e.showAlert?"block":"none"};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`,P6=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${x6};
  border-radius: 10px;
  margin: 15% auto;
  border: 1px solid ${I6};
  width: 40%;
  height: 30%;
`,A6=j.div`
  color: ${T6};
  font-size: 50px;
  height: 25%;
  padding-bottom: 20px;
`,N6=j.p`
  font-weight: 400;
  font-size: large;
  padding-bottom: 5px;
`,O6=j.p`
  height: 30%;
  width: 70%;
  text-align: center;
`,M6=j.button`
  height: 15%;
  width: 20%;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  background-color: ${gf};
  border: none;
  border-radius: 5px;

  :hover {
    background-color: ${Us};
  }
`,eI=({showAlert:e,setShowAlert:t,title:n,alert:r})=>b(R6,{showAlert:e,children:z(P6,{children:[b(A6,{children:b(mr,{icon:u6})}),b(N6,{children:n}),b(O6,{children:r}),b(M6,{onClick:()=>t(!1),children:"OK"})]})}),L6={black:"#000",white:"#fff"},El=L6,D6={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},yo=D6,$6={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},_o=$6,F6={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},wo=F6,z6={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},bo=z6,U6={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},So=U6,B6={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},ta=B6,j6={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},W6=j6;function Ii(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function tI(e){if(!Ii(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=tI(e[n])}),t}function En(e,t,n={clone:!0}){const r=n.clone?{...e}:e;return Ii(e)&&Ii(t)&&Object.keys(t).forEach(i=>{i!=="__proto__"&&(Ii(t[i])&&i in e&&Ii(e[i])?r[i]=En(e[i],t[i],n):n.clone?r[i]=Ii(t[i])?tI(t[i]):t[i]:r[i]=t[i])}),r}function pi(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function xe(e){if(typeof e!="string")throw new Error(pi(7));return e.charAt(0).toUpperCase()+e.slice(1)}function lw(...e){return e.reduce((t,n)=>n==null?t:function(...i){t.apply(this,i),n.apply(this,i)},()=>{})}function nI(e,t=166){let n;function r(...i){const o=()=>{e.apply(this,i)};clearTimeout(n),n=setTimeout(o,t)}return r.clear=()=>{clearTimeout(n)},r}function Yh(e,t){return w.isValidElement(e)&&t.indexOf(e.type.muiName)!==-1}function cn(e){return e&&e.ownerDocument||document}function io(e){return cn(e).defaultView||window}function qm(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const H6=typeof window<"u"?w.useLayoutEffect:w.useEffect,Ss=H6;let cw=0;function V6(e){const[t,n]=w.useState(e),r=e||t;return w.useEffect(()=>{t==null&&(cw+=1,n(`mui-${cw}`))},[t]),r}const uw=rp["useId".toString()];function q6(e){if(uw!==void 0){const t=uw();return e??t}return V6(e)}function dw({controlled:e,default:t,name:n,state:r="value"}){const{current:i}=w.useRef(e!==void 0),[o,s]=w.useState(t),a=i?e:o,l=w.useCallback(c=>{i||s(c)},[]);return[a,l]}function Wo(e){const t=w.useRef(e);return Ss(()=>{t.current=e}),w.useCallback((...n)=>(0,t.current)(...n),[])}function tn(...e){return w.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{qm(n,t)})},e)}let vf=!0,Gm=!1,fw;const G6={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function K6(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&G6[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Y6(e){e.metaKey||e.altKey||e.ctrlKey||(vf=!0)}function Qh(){vf=!1}function Q6(){this.visibilityState==="hidden"&&Gm&&(vf=!0)}function X6(e){e.addEventListener("keydown",Y6,!0),e.addEventListener("mousedown",Qh,!0),e.addEventListener("pointerdown",Qh,!0),e.addEventListener("touchstart",Qh,!0),e.addEventListener("visibilitychange",Q6,!0)}function J6(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return vf||K6(t)}function Z6(){const e=w.useCallback(i=>{i!=null&&X6(i.ownerDocument)},[]),t=w.useRef(!1);function n(){return t.current?(Gm=!0,window.clearTimeout(fw),fw=window.setTimeout(()=>{Gm=!1},100),t.current=!1,!0):!1}function r(i){return J6(i)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function rI(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function iI(e,t){const n={...t};return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]={...e[r],...n[r]};else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=e[r]||{},o=t[r];n[r]={},!o||!Object.keys(o)?n[r]=i:!i||!Object.keys(i)?n[r]=o:(n[r]={...o},Object.keys(i).forEach(s=>{n[r][s]=iI(i[s],o[s])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function at(e,t,n=void 0){const r={};return Object.keys(e).forEach(i=>{r[i]=e[i].reduce((o,s)=>{if(s){const a=t(s);a!==""&&o.push(a),n&&n[s]&&o.push(n[s])}return o},[]).join(" ")}),r}const hw=e=>e,eF=()=>{let e=hw;return{configure(t){e=t},generate(t){return e(t)},reset(){e=hw}}},tF=eF(),nF=tF,rF={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function Ze(e,t,n="Mui"){const r=rF[t];return r?`${n}-${r}`:`${nF.generate(e)}-${t}`}function et(e,t,n="Mui"){const r={};return t.forEach(i=>{r[i]=Ze(e,i,n)}),r}const yf="$$material";function hd(){return hd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hd.apply(this,arguments)}function iF(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function oF(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var sF=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(oF(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=iF(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Lt="-ms-",pd="-moz-",Ce="-webkit-",oI="comm",Ey="rule",ky="decl",aF="@import",sI="@keyframes",lF="@layer",cF=Math.abs,_f=String.fromCharCode,uF=Object.assign;function dF(e,t){return It(e,0)^45?(((t<<2^It(e,0))<<2^It(e,1))<<2^It(e,2))<<2^It(e,3):0}function aI(e){return e.trim()}function fF(e,t){return(e=t.exec(e))?e[0]:e}function Ee(e,t,n){return e.replace(t,n)}function Km(e,t){return e.indexOf(t)}function It(e,t){return e.charCodeAt(t)|0}function kl(e,t,n){return e.slice(t,n)}function Vn(e){return e.length}function xy(e){return e.length}function $c(e,t){return t.push(e),e}function hF(e,t){return e.map(t).join("")}var wf=1,Cs=1,lI=0,nn=0,dt=0,Bs="";function bf(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:wf,column:Cs,length:s,return:""}}function na(e,t){return uF(bf("",null,null,"",null,null,0),e,{length:-e.length},t)}function pF(){return dt}function mF(){return dt=nn>0?It(Bs,--nn):0,Cs--,dt===10&&(Cs=1,wf--),dt}function un(){return dt=nn<lI?It(Bs,nn++):0,Cs++,dt===10&&(Cs=1,wf++),dt}function er(){return It(Bs,nn)}function su(){return nn}function nc(e,t){return kl(Bs,e,t)}function xl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cI(e){return wf=Cs=1,lI=Vn(Bs=e),nn=0,[]}function uI(e){return Bs="",e}function au(e){return aI(nc(nn-1,Ym(e===91?e+2:e===40?e+1:e)))}function gF(e){for(;(dt=er())&&dt<33;)un();return xl(e)>2||xl(dt)>3?"":" "}function vF(e,t){for(;--t&&un()&&!(dt<48||dt>102||dt>57&&dt<65||dt>70&&dt<97););return nc(e,su()+(t<6&&er()==32&&un()==32))}function Ym(e){for(;un();)switch(dt){case e:return nn;case 34:case 39:e!==34&&e!==39&&Ym(dt);break;case 40:e===41&&Ym(e);break;case 92:un();break}return nn}function yF(e,t){for(;un()&&e+dt!==47+10;)if(e+dt===42+42&&er()===47)break;return"/*"+nc(t,nn-1)+"*"+_f(e===47?e:un())}function _F(e){for(;!xl(er());)un();return nc(e,nn)}function wF(e){return uI(lu("",null,null,null,[""],e=cI(e),0,[0],e))}function lu(e,t,n,r,i,o,s,a,l){for(var c=0,u=0,d=s,f=0,h=0,p=0,y=1,S=1,v=1,m=0,g="",_=i,C=o,k=r,E=g;S;)switch(p=m,m=un()){case 40:if(p!=108&&It(E,d-1)==58){Km(E+=Ee(au(m),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:E+=au(m);break;case 9:case 10:case 13:case 32:E+=gF(p);break;case 92:E+=vF(su()-1,7);continue;case 47:switch(er()){case 42:case 47:$c(bF(yF(un(),su()),t,n),l);break;default:E+="/"}break;case 123*y:a[c++]=Vn(E)*v;case 125*y:case 59:case 0:switch(m){case 0:case 125:S=0;case 59+u:v==-1&&(E=Ee(E,/\f/g,"")),h>0&&Vn(E)-d&&$c(h>32?mw(E+";",r,n,d-1):mw(Ee(E," ","")+";",r,n,d-2),l);break;case 59:E+=";";default:if($c(k=pw(E,t,n,c,u,i,a,g,_=[],C=[],d),o),m===123)if(u===0)lu(E,t,k,k,_,o,d,a,C);else switch(f===99&&It(E,3)===110?100:f){case 100:case 108:case 109:case 115:lu(e,k,k,r&&$c(pw(e,k,k,0,0,i,a,g,i,_=[],d),C),i,C,d,a,r?_:C);break;default:lu(E,k,k,k,[""],C,0,a,C)}}c=u=h=0,y=v=1,g=E="",d=s;break;case 58:d=1+Vn(E),h=p;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&mF()==125)continue}switch(E+=_f(m),m*y){case 38:v=u>0?1:(E+="\f",-1);break;case 44:a[c++]=(Vn(E)-1)*v,v=1;break;case 64:er()===45&&(E+=au(un())),f=er(),u=d=Vn(g=E+=_F(su())),m++;break;case 45:p===45&&Vn(E)==2&&(y=0)}}return o}function pw(e,t,n,r,i,o,s,a,l,c,u){for(var d=i-1,f=i===0?o:[""],h=xy(f),p=0,y=0,S=0;p<r;++p)for(var v=0,m=kl(e,d+1,d=cF(y=s[p])),g=e;v<h;++v)(g=aI(y>0?f[v]+" "+m:Ee(m,/&\f/g,f[v])))&&(l[S++]=g);return bf(e,t,n,i===0?Ey:a,l,c,u)}function bF(e,t,n){return bf(e,t,n,oI,_f(pF()),kl(e,2,-2),0)}function mw(e,t,n,r){return bf(e,t,n,ky,kl(e,0,r),kl(e,r+1,-1),r)}function is(e,t){for(var n="",r=xy(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function SF(e,t,n,r){switch(e.type){case lF:if(e.children.length)break;case aF:case ky:return e.return=e.return||e.value;case oI:return"";case sI:return e.return=e.value+"{"+is(e.children,r)+"}";case Ey:e.value=e.props.join(",")}return Vn(n=is(e.children,r))?e.return=e.value+"{"+n+"}":""}function CF(e){var t=xy(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function EF(e){return function(t){t.root||(t=t.return)&&e(t)}}var kF=function(t,n,r){for(var i=0,o=0;i=o,o=er(),i===38&&o===12&&(n[r]=1),!xl(o);)un();return nc(t,nn)},xF=function(t,n){var r=-1,i=44;do switch(xl(i)){case 0:i===38&&er()===12&&(n[r]=1),t[r]+=kF(nn-1,n,r);break;case 2:t[r]+=au(i);break;case 4:if(i===44){t[++r]=er()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=_f(i)}while(i=un());return t},IF=function(t,n){return uI(xF(cI(t),n))},gw=new WeakMap,TF=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!gw.get(r))&&!i){gw.set(t,!0);for(var o=[],s=IF(n,o),a=r.props,l=0,c=0;l<s.length;l++)for(var u=0;u<a.length;u++,c++)t.props[c]=o[l]?s[l].replace(/&\f/g,a[u]):a[u]+" "+s[l]}}},RF=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function dI(e,t){switch(dF(e,t)){case 5103:return Ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ce+e+pd+e+Lt+e+e;case 6828:case 4268:return Ce+e+Lt+e+e;case 6165:return Ce+e+Lt+"flex-"+e+e;case 5187:return Ce+e+Ee(e,/(\w+).+(:[^]+)/,Ce+"box-$1$2"+Lt+"flex-$1$2")+e;case 5443:return Ce+e+Lt+"flex-item-"+Ee(e,/flex-|-self/,"")+e;case 4675:return Ce+e+Lt+"flex-line-pack"+Ee(e,/align-content|flex-|-self/,"")+e;case 5548:return Ce+e+Lt+Ee(e,"shrink","negative")+e;case 5292:return Ce+e+Lt+Ee(e,"basis","preferred-size")+e;case 6060:return Ce+"box-"+Ee(e,"-grow","")+Ce+e+Lt+Ee(e,"grow","positive")+e;case 4554:return Ce+Ee(e,/([^-])(transform)/g,"$1"+Ce+"$2")+e;case 6187:return Ee(Ee(Ee(e,/(zoom-|grab)/,Ce+"$1"),/(image-set)/,Ce+"$1"),e,"")+e;case 5495:case 3959:return Ee(e,/(image-set\([^]*)/,Ce+"$1$`$1");case 4968:return Ee(Ee(e,/(.+:)(flex-)?(.*)/,Ce+"box-pack:$3"+Lt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ce+e+e;case 4095:case 3583:case 4068:case 2532:return Ee(e,/(.+)-inline(.+)/,Ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Vn(e)-1-t>6)switch(It(e,t+1)){case 109:if(It(e,t+4)!==45)break;case 102:return Ee(e,/(.+:)(.+)-([^]+)/,"$1"+Ce+"$2-$3$1"+pd+(It(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Km(e,"stretch")?dI(Ee(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(It(e,t+1)!==115)break;case 6444:switch(It(e,Vn(e)-3-(~Km(e,"!important")&&10))){case 107:return Ee(e,":",":"+Ce)+e;case 101:return Ee(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ce+(It(e,14)===45?"inline-":"")+"box$3$1"+Ce+"$2$3$1"+Lt+"$2box$3")+e}break;case 5936:switch(It(e,t+11)){case 114:return Ce+e+Lt+Ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ce+e+Lt+Ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ce+e+Lt+Ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Ce+e+Lt+e+e}return e}var PF=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case ky:t.return=dI(t.value,t.length);break;case sI:return is([na(t,{value:Ee(t.value,"@","@"+Ce)})],i);case Ey:if(t.length)return hF(t.props,function(o){switch(fF(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return is([na(t,{props:[Ee(o,/:(read-\w+)/,":"+pd+"$1")]})],i);case"::placeholder":return is([na(t,{props:[Ee(o,/:(plac\w+)/,":"+Ce+"input-$1")]}),na(t,{props:[Ee(o,/:(plac\w+)/,":"+pd+"$1")]}),na(t,{props:[Ee(o,/:(plac\w+)/,Lt+"input-$1")]})],i)}return""})}},AF=[PF],NF=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var S=y.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||AF,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var S=y.getAttribute("data-emotion").split(" "),v=1;v<S.length;v++)o[S[v]]=!0;a.push(y)});var l,c=[TF,RF];{var u,d=[SF,EF(function(y){u.insert(y)})],f=CF(c.concat(i,d)),h=function(S){return is(wF(S),f)};l=function(S,v,m,g){u=m,h(S?S+"{"+v.styles+"}":v.styles),g&&(p.inserted[v.name]=!0)}}var p={key:n,sheet:new sF({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return p.sheet.hydrate(a),p},OF=!0;function MF(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var fI=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||OF===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},hI=function(t,n,r){fI(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function LF(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var DF={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$F=/[A-Z]|^ms/g,FF=/_EMO_([^_]+?)_([^]*?)_EMO_/g,pI=function(t){return t.charCodeAt(1)===45},vw=function(t){return t!=null&&typeof t!="boolean"},Xh=CC(function(e){return pI(e)?e:e.replace($F,"-$&").toLowerCase()}),yw=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(FF,function(r,i,o){return qn={name:i,styles:o,next:qn},i})}return DF[t]!==1&&!pI(t)&&typeof n=="number"&&n!==0?n+"px":n};function Il(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return qn={name:n.name,styles:n.styles,next:qn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)qn={name:r.name,styles:r.styles,next:qn},r=r.next;var i=n.styles+";";return i}return zF(e,t,n)}case"function":{if(e!==void 0){var o=qn,s=n(e);return qn=o,Il(e,t,s)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function zF(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Il(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":vw(s)&&(r+=Xh(o)+":"+yw(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var a=0;a<s.length;a++)vw(s[a])&&(r+=Xh(o)+":"+yw(o,s[a])+";");else{var l=Il(e,t,s);switch(o){case"animation":case"animationName":{r+=Xh(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var _w=/label:\s*([^\s;\n{]+)\s*(;|$)/g,qn,Iy=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";qn=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=Il(r,n,s)):o+=s[0];for(var a=1;a<t.length;a++)o+=Il(r,n,t[a]),i&&(o+=s[a]);_w.lastIndex=0;for(var l="",c;(c=_w.exec(o))!==null;)l+="-"+c[1];var u=LF(o)+l;return{name:u,styles:o,next:qn}},UF=function(t){return t()},mI=rp["useInsertionEffect"]?rp["useInsertionEffect"]:!1,BF=mI||UF,ww=mI||w.useLayoutEffect,gI=w.createContext(typeof HTMLElement<"u"?NF({key:"css"}):null);gI.Provider;var vI=function(t){return w.forwardRef(function(n,r){var i=w.useContext(gI);return t(n,i,r)})},Ty=w.createContext({}),jF=vI(function(e,t){var n=e.styles,r=Iy([n],void 0,w.useContext(Ty)),i=w.useRef();return ww(function(){var o=t.key+"-global",s=new t.sheet.constructor({key:o,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+o+" "+r.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",o),s.hydrate([l])),i.current=[s,a],function(){s.flush()}},[t]),ww(function(){var o=i.current,s=o[0],a=o[1];if(a){o[1]=!1;return}if(r.next!==void 0&&hI(t,r.next,!0),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}t.insert("",r,s,!1)},[t,r.name]),null});function WF(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Iy(t)}var Ry=function(){var t=WF.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},HF=Jp,VF=function(t){return t!=="theme"},bw=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?HF:VF},Sw=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},qF=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return fI(n,r,i),BF(function(){return hI(n,r,i)}),null},GF=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var a=Sw(t,n,r),l=a||bw(i),c=!l("as");return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{d.push(u[0][0]);for(var f=u.length,h=1;h<f;h++)d.push(u[h],u[0][h])}var p=vI(function(y,S,v){var m=c&&y.as||i,g="",_=[],C=y;if(y.theme==null){C={};for(var k in y)C[k]=y[k];C.theme=w.useContext(Ty)}typeof y.className=="string"?g=MF(S.registered,_,y.className):y.className!=null&&(g=y.className+" ");var E=Iy(d.concat(_),S.registered,C);g+=S.key+"-"+E.name,s!==void 0&&(g+=" "+s);var T=c&&a===void 0?bw(m):l,A={};for(var I in y)c&&I==="as"||T(I)&&(A[I]=y[I]);return A.className=g,A.ref=v,w.createElement(w.Fragment,null,w.createElement(qF,{cache:S,serialized:E,isStringTag:typeof m=="string"}),w.createElement(m,A))});return p.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",p.defaultProps=t.defaultProps,p.__emotion_real=p,p.__emotion_base=i,p.__emotion_styles=d,p.__emotion_forwardProp=a,Object.defineProperty(p,"toString",{value:function(){return"."+s}}),p.withComponent=function(y,S){return e(y,hd({},n,S,{shouldForwardProp:Sw(p,S,!0)})).apply(void 0,d)},p}},KF=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Qm=GF.bind();KF.forEach(function(e){Qm[e]=Qm(e)});function YF(e){return e==null||Object.keys(e).length===0}function QF(e){const{styles:t,defaultTheme:n={}}=e;return b(jF,{styles:typeof t=="function"?i=>t(YF(i)?n:i):t})}/**
 * @mui/styled-engine v5.12.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function XF(e,t){return Qm(e,t)}const JF=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},ZF=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>({...n,[r.key]:r.val}),{})};function e8(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5,...i}=e,o=ZF(t),s=Object.keys(o);function a(f){return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n})`}function l(f){return`@media (max-width:${(typeof t[f]=="number"?t[f]:f)-r/100}${n})`}function c(f,h){const p=s.indexOf(h);return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n}) and (max-width:${(p!==-1&&typeof t[s[p]]=="number"?t[s[p]]:h)-r/100}${n})`}function u(f){return s.indexOf(f)+1<s.length?c(f,s[s.indexOf(f)+1]):a(f)}function d(f){const h=s.indexOf(f);return h===0?a(s[1]):h===s.length-1?l(s[h]):c(f,s[s.indexOf(f)+1]).replace("@media","@media not all and")}return{keys:s,values:o,up:a,down:l,between:c,only:u,not:d,unit:n,...i}}const t8={borderRadius:4},n8=t8;function Ma(e,t){return t?En(e,t,{clone:!1}):e}const Py={xs:0,sm:600,md:900,lg:1200,xl:1536},Cw={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Py[e]}px)`};function xr(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const o=r.breakpoints||Cw;return t.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(t[l]),s),{})}if(typeof t=="object"){const o=r.breakpoints||Cw;return Object.keys(t).reduce((s,a)=>{if(Object.keys(o.values||Py).indexOf(a)!==-1){const l=o.up(a);s[l]=n(t[a],a)}else{const l=a;s[l]=t[l]}return s},{})}return n(t)}function r8(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,i)=>{const o=e.up(i);return r[o]={},r},{}))||{}}function i8(e,t){return e.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},t)}function Sf(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,e);if(r!=null)return r}return t.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,e)}function md(e,t,n,r=n){let i;return typeof e=="function"?i=e(n):Array.isArray(e)?i=e[n]||r:i=Sf(e,n)||r,t&&(i=t(i,r,e)),i}function Ie(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:i}=e,o=s=>{if(s[t]==null)return null;const a=s[t],l=s.theme,c=Sf(l,r)||{};return xr(s,a,d=>{let f=md(c,i,d);return d===f&&typeof d=="string"&&(f=md(c,i,`${t}${d==="default"?"":xe(d)}`,d)),n===!1?f:{[n]:f}})};return o.propTypes={},o.filterProps=[t],o}function o8(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const s8={m:"margin",p:"padding"},a8={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Ew={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},l8=o8(e=>{if(e.length>2)if(Ew[e])e=Ew[e];else return[e];const[t,n]=e.split(""),r=s8[t],i=a8[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),Ay=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Ny=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Ay,...Ny];function rc(e,t,n,r){var i;const o=(i=Sf(e,t,!1))!=null?i:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function yI(e){return rc(e,"spacing",8)}function ic(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function c8(e,t){return n=>e.reduce((r,i)=>(r[i]=ic(t,n),r),{})}function u8(e,t,n,r){if(t.indexOf(n)===-1)return null;const i=l8(n),o=c8(i,r),s=e[n];return xr(e,s,o)}function _I(e,t){const n=yI(e.theme);return Object.keys(e).map(r=>u8(e,t,r,n)).reduce(Ma,{})}function tt(e){return _I(e,Ay)}tt.propTypes={};tt.filterProps=Ay;function nt(e){return _I(e,Ny)}nt.propTypes={};nt.filterProps=Ny;function d8(e=8){if(e.mui)return e;const t=yI({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=t(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function Cf(...e){const t=e.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>t[o]?Ma(i,t[o](r)):i,{});return n.propTypes={},n.filterProps=e.reduce((r,i)=>r.concat(i.filterProps),[]),n}function Kn(e){return typeof e!="number"?e:`${e}px solid`}const f8=Ie({prop:"border",themeKey:"borders",transform:Kn}),h8=Ie({prop:"borderTop",themeKey:"borders",transform:Kn}),p8=Ie({prop:"borderRight",themeKey:"borders",transform:Kn}),m8=Ie({prop:"borderBottom",themeKey:"borders",transform:Kn}),g8=Ie({prop:"borderLeft",themeKey:"borders",transform:Kn}),v8=Ie({prop:"borderColor",themeKey:"palette"}),y8=Ie({prop:"borderTopColor",themeKey:"palette"}),_8=Ie({prop:"borderRightColor",themeKey:"palette"}),w8=Ie({prop:"borderBottomColor",themeKey:"palette"}),b8=Ie({prop:"borderLeftColor",themeKey:"palette"}),Ef=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=rc(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:ic(t,r)});return xr(e,e.borderRadius,n)}return null};Ef.propTypes={};Ef.filterProps=["borderRadius"];Cf(f8,h8,p8,m8,g8,v8,y8,_8,w8,b8,Ef);const kf=e=>{if(e.gap!==void 0&&e.gap!==null){const t=rc(e.theme,"spacing",8),n=r=>({gap:ic(t,r)});return xr(e,e.gap,n)}return null};kf.propTypes={};kf.filterProps=["gap"];const xf=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=rc(e.theme,"spacing",8),n=r=>({columnGap:ic(t,r)});return xr(e,e.columnGap,n)}return null};xf.propTypes={};xf.filterProps=["columnGap"];const If=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=rc(e.theme,"spacing",8),n=r=>({rowGap:ic(t,r)});return xr(e,e.rowGap,n)}return null};If.propTypes={};If.filterProps=["rowGap"];const S8=Ie({prop:"gridColumn"}),C8=Ie({prop:"gridRow"}),E8=Ie({prop:"gridAutoFlow"}),k8=Ie({prop:"gridAutoColumns"}),x8=Ie({prop:"gridAutoRows"}),I8=Ie({prop:"gridTemplateColumns"}),T8=Ie({prop:"gridTemplateRows"}),R8=Ie({prop:"gridTemplateAreas"}),P8=Ie({prop:"gridArea"});Cf(kf,xf,If,S8,C8,E8,k8,x8,I8,T8,R8,P8);function os(e,t){return t==="grey"?t:e}const A8=Ie({prop:"color",themeKey:"palette",transform:os}),N8=Ie({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:os}),O8=Ie({prop:"backgroundColor",themeKey:"palette",transform:os});Cf(A8,N8,O8);function on(e){return e<=1&&e!==0?`${e*100}%`:e}const M8=Ie({prop:"width",transform:on}),Oy=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,i,o;return{maxWidth:((r=e.theme)==null||(i=r.breakpoints)==null||(o=i.values)==null?void 0:o[n])||Py[n]||on(n)}};return xr(e,e.maxWidth,t)}return null};Oy.filterProps=["maxWidth"];const L8=Ie({prop:"minWidth",transform:on}),D8=Ie({prop:"height",transform:on}),$8=Ie({prop:"maxHeight",transform:on}),F8=Ie({prop:"minHeight",transform:on});Ie({prop:"size",cssProperty:"width",transform:on});Ie({prop:"size",cssProperty:"height",transform:on});const z8=Ie({prop:"boxSizing"});Cf(M8,Oy,L8,D8,$8,F8,z8);const U8={border:{themeKey:"borders",transform:Kn},borderTop:{themeKey:"borders",transform:Kn},borderRight:{themeKey:"borders",transform:Kn},borderBottom:{themeKey:"borders",transform:Kn},borderLeft:{themeKey:"borders",transform:Kn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Ef},color:{themeKey:"palette",transform:os},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:os},backgroundColor:{themeKey:"palette",transform:os},p:{style:nt},pt:{style:nt},pr:{style:nt},pb:{style:nt},pl:{style:nt},px:{style:nt},py:{style:nt},padding:{style:nt},paddingTop:{style:nt},paddingRight:{style:nt},paddingBottom:{style:nt},paddingLeft:{style:nt},paddingX:{style:nt},paddingY:{style:nt},paddingInline:{style:nt},paddingInlineStart:{style:nt},paddingInlineEnd:{style:nt},paddingBlock:{style:nt},paddingBlockStart:{style:nt},paddingBlockEnd:{style:nt},m:{style:tt},mt:{style:tt},mr:{style:tt},mb:{style:tt},ml:{style:tt},mx:{style:tt},my:{style:tt},margin:{style:tt},marginTop:{style:tt},marginRight:{style:tt},marginBottom:{style:tt},marginLeft:{style:tt},marginX:{style:tt},marginY:{style:tt},marginInline:{style:tt},marginInlineStart:{style:tt},marginInlineEnd:{style:tt},marginBlock:{style:tt},marginBlockStart:{style:tt},marginBlockEnd:{style:tt},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:kf},rowGap:{style:If},columnGap:{style:xf},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:on},maxWidth:{style:Oy},minWidth:{transform:on},height:{transform:on},maxHeight:{transform:on},minHeight:{transform:on},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},Tf=U8;function B8(...e){const t=e.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function j8(e,t){return typeof e=="function"?e(t):e}function W8(){function e(n,r,i,o){const s={[n]:r,theme:i},a=o[n];if(!a)return{[n]:r};const{cssProperty:l=n,themeKey:c,transform:u,style:d}=a;if(r==null)return null;if(c==="typography"&&r==="inherit")return{[n]:r};const f=Sf(i,c)||{};return d?d(s):xr(s,r,p=>{let y=md(f,u,p);return p===y&&typeof p=="string"&&(y=md(f,u,`${n}${p==="default"?"":xe(p)}`,p)),l===!1?y:{[l]:y}})}function t(n){var r;const{sx:i,theme:o={}}=n||{};if(!i)return null;const s=(r=o.unstable_sxConfig)!=null?r:Tf;function a(l){let c=l;if(typeof l=="function")c=l(o);else if(typeof l!="object")return l;if(!c)return null;const u=r8(o.breakpoints),d=Object.keys(u);let f=u;return Object.keys(c).forEach(h=>{const p=j8(c[h],o);if(p!=null)if(typeof p=="object")if(s[h])f=Ma(f,e(h,p,o,s));else{const y=xr({theme:o},p,S=>({[h]:S}));B8(y,p)?f[h]=t({sx:p,theme:o}):f=Ma(f,y)}else f=Ma(f,e(h,p,o,s))}),i8(d,f)}return Array.isArray(i)?i.map(a):a(i)}return t}const wI=W8();wI.filterProps=["sx"];const My=wI;function Ly(e={},...t){const{breakpoints:n={},palette:r={},spacing:i,shape:o={},...s}=e,a=e8(n),l=d8(i);let c=En({breakpoints:a,direction:"ltr",components:{},palette:{mode:"light",...r},spacing:l,shape:{...n8,...o}},s);return c=t.reduce((u,d)=>En(u,d),c),c.unstable_sxConfig={...Tf,...s==null?void 0:s.unstable_sxConfig},c.unstable_sx=function(d){return My({sx:d,theme:this})},c}function H8(e){return Object.keys(e).length===0}function V8(e=null){const t=w.useContext(Ty);return!t||H8(t)?e:t}const q8=Ly();function Dy(e=q8){return V8(e)}function G8({styles:e,themeId:t,defaultTheme:n={}}){const r=Dy(n),i=typeof e=="function"?e(t&&r[t]||r):e;return b(QF,{styles:i})}const K8=e=>{var t,n;const r={systemProps:{},otherProps:{}},i=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:Tf;return Object.keys(e).forEach(o=>{i[o]?r.systemProps[o]=e[o]:r.otherProps[o]=e[o]}),r};function Y8(e){const{sx:t,...n}=e,{systemProps:r,otherProps:i}=K8(n);let o;return Array.isArray(t)?o=[r,...t]:typeof t=="function"?o=(...s)=>{const a=t(...s);return Ii(a)?{...r,...a}:r}:o={...r,...t},{...i,sx:o}}function bI(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=bI(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function be(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=bI(e))&&(r&&(r+=" "),r+=t);return r}function kw(e){return e.length===0}function SI(e){const{variant:t,...n}=e;let r=t||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=kw(r)?e[i]:xe(e[i]):r+=`${kw(r)?i:xe(i)}${xe(e[i].toString())}`}),r}function Q8(e){return Object.keys(e).length===0}function X8(e){return typeof e=="string"&&e.charCodeAt(0)>96}const J8=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,Z8=(e,t)=>{let n=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants);const r={};return n.forEach(i=>{const o=SI(i.props);r[o]=i.style}),r},ez=(e,t,n,r)=>{var i,o;const{ownerState:s={}}=e,a=[],l=n==null||(i=n.components)==null||(o=i[r])==null?void 0:o.variants;return l&&l.forEach(c=>{let u=!0;Object.keys(c.props).forEach(d=>{s[d]!==c.props[d]&&e[d]!==c.props[d]&&(u=!1)}),u&&a.push(t[SI(c.props)])}),a};function La(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const tz=Ly();function ra({defaultTheme:e,theme:t,themeId:n}){return Q8(t)?e:t[n]||t}function nz(e={}){const{themeId:t,defaultTheme:n=tz,rootShouldForwardProp:r=La,slotShouldForwardProp:i=La}=e,o=s=>My({...s,theme:ra({...s,defaultTheme:n,themeId:t})});return o.__mui_systemSx=!0,(s,a={})=>{JF(s,_=>_.filter(C=>!(C!=null&&C.__mui_systemSx)));const{name:l,slot:c,skipVariantsResolver:u,skipSx:d,overridesResolver:f,...h}=a,p=u!==void 0?u:c&&c!=="Root"||!1,y=d||!1;let S,v=La;c==="Root"?v=r:c?v=i:X8(s)&&(v=void 0);const m=XF(s,{shouldForwardProp:v,label:S,...h}),g=(_,...C)=>{const k=C?C.map(I=>typeof I=="function"&&I.__emotion_real!==I?L=>I({...L,theme:ra({...L,defaultTheme:n,themeId:t})}):I):[];let E=_;l&&f&&k.push(I=>{const L=ra({...I,defaultTheme:n,themeId:t}),q=J8(l,L);if(q){const V={};return Object.entries(q).forEach(([D,N])=>{V[D]=typeof N=="function"?N({...I,theme:L}):N}),f(I,V)}return null}),l&&!p&&k.push(I=>{const L=ra({...I,defaultTheme:n,themeId:t});return ez(I,Z8(l,L),L,l)}),y||k.push(o);const T=k.length-C.length;if(Array.isArray(_)&&T>0){const I=new Array(T).fill("");E=[..._,...I],E.raw=[..._.raw,...I]}else typeof _=="function"&&_.__emotion_real!==_&&(E=I=>_({...I,theme:ra({...I,defaultTheme:n,themeId:t})}));const A=m(E,...k);return s.muiName&&(A.muiName=s.muiName),A};return m.withConfig&&(g.withConfig=m.withConfig),g}}function rz(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:iI(t.components[n].defaultProps,r)}function iz({props:e,name:t,defaultTheme:n,themeId:r}){let i=Dy(n);return r&&(i=i[r]||i),rz({theme:i,name:t,props:e})}function $y(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function oz(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function oo(e){if(e.type)return e;if(e.charAt(0)==="#")return oo(oz(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(pi(9,e));let r=e.substring(t+1,e.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(pi(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}function Rf(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function sz(e){e=oo(e);const{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,o=r*Math.min(i,1-i),s=(c,u=(c+n/30)%12)=>i-o*Math.max(Math.min(u-3,9-u,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(a+="a",l.push(t[3])),Rf({type:a,values:l})}function xw(e){e=oo(e);let t=e.type==="hsl"||e.type==="hsla"?oo(sz(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function az(e,t){const n=xw(e),r=xw(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function gd(e,t){return e=oo(e),t=$y(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Rf(e)}function lz(e,t){if(e=oo(e),t=$y(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Rf(e)}function cz(e,t){if(e=oo(e),t=$y(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Rf(e)}function uz(e,t){return{toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}},...t}}const Iw={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:El.white,default:El.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Jh={text:{primary:El.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:El.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Tw(e,t,n,r){const i=r.light||r,o=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=cz(e.main,i):t==="dark"&&(e.dark=lz(e.main,o)))}function dz(e="light"){return e==="dark"?{main:wo[200],light:wo[50],dark:wo[400]}:{main:wo[700],light:wo[400],dark:wo[800]}}function fz(e="light"){return e==="dark"?{main:_o[200],light:_o[50],dark:_o[400]}:{main:_o[500],light:_o[300],dark:_o[700]}}function hz(e="light"){return e==="dark"?{main:yo[500],light:yo[300],dark:yo[700]}:{main:yo[700],light:yo[400],dark:yo[800]}}function pz(e="light"){return e==="dark"?{main:bo[400],light:bo[300],dark:bo[700]}:{main:bo[700],light:bo[500],dark:bo[900]}}function mz(e="light"){return e==="dark"?{main:So[400],light:So[300],dark:So[700]}:{main:So[800],light:So[500],dark:So[900]}}function gz(e="light"){return e==="dark"?{main:ta[400],light:ta[300],dark:ta[700]}:{main:"#ed6c02",light:ta[500],dark:ta[900]}}function vz(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2,...i}=e,o=e.primary||dz(t),s=e.secondary||fz(t),a=e.error||hz(t),l=e.info||pz(t),c=e.success||mz(t),u=e.warning||gz(t);function d(y){return az(y,Jh.text.primary)>=n?Jh.text.primary:Iw.text.primary}const f=({color:y,name:S,mainShade:v=500,lightShade:m=300,darkShade:g=700})=>{if(y={...y},!y.main&&y[v]&&(y.main=y[v]),!y.hasOwnProperty("main"))throw new Error(pi(11,S?` (${S})`:"",v));if(typeof y.main!="string")throw new Error(pi(12,S?` (${S})`:"",JSON.stringify(y.main)));return Tw(y,"light",m,r),Tw(y,"dark",g,r),y.contrastText||(y.contrastText=d(y.main)),y},h={dark:Jh,light:Iw};return En({common:{...El},mode:t,primary:f({color:o,name:"primary"}),secondary:f({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:f({color:a,name:"error"}),warning:f({color:u,name:"warning"}),info:f({color:l,name:"info"}),success:f({color:c,name:"success"}),grey:W6,contrastThreshold:n,getContrastText:d,augmentColor:f,tonalOffset:r,...h[t]},i)}function yz(e){return Math.round(e*1e5)/1e5}const Rw={textTransform:"uppercase"},Pw='"Roboto", "Helvetica", "Arial", sans-serif';function _z(e,t){const{fontFamily:n=Pw,fontSize:r=14,fontWeightLight:i=300,fontWeightRegular:o=400,fontWeightMedium:s=500,fontWeightBold:a=700,htmlFontSize:l=16,allVariants:c,pxToRem:u,...d}=typeof t=="function"?t(e):t,f=r/14,h=u||(S=>`${S/l*f}rem`),p=(S,v,m,g,_)=>({fontFamily:n,fontWeight:S,fontSize:h(v),lineHeight:m,...n===Pw?{letterSpacing:`${yz(g/v)}em`}:{},..._,...c}),y={h1:p(i,96,1.167,-1.5),h2:p(i,60,1.2,-.5),h3:p(o,48,1.167,0),h4:p(o,34,1.235,.25),h5:p(o,24,1.334,0),h6:p(s,20,1.6,.15),subtitle1:p(o,16,1.75,.15),subtitle2:p(s,14,1.57,.1),body1:p(o,16,1.5,.15),body2:p(o,14,1.43,.15),button:p(s,14,1.75,.4,Rw),caption:p(o,12,1.66,.4),overline:p(o,12,2.66,1,Rw),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return En({htmlFontSize:l,pxToRem:h,fontFamily:n,fontSize:r,fontWeightLight:i,fontWeightRegular:o,fontWeightMedium:s,fontWeightBold:a,...y},d,{clone:!1})}const wz=.2,bz=.14,Sz=.12;function qe(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${wz})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${bz})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Sz})`].join(",")}const Cz=["none",qe(0,2,1,-1,0,1,1,0,0,1,3,0),qe(0,3,1,-2,0,2,2,0,0,1,5,0),qe(0,3,3,-2,0,3,4,0,0,1,8,0),qe(0,2,4,-1,0,4,5,0,0,1,10,0),qe(0,3,5,-1,0,5,8,0,0,1,14,0),qe(0,3,5,-1,0,6,10,0,0,1,18,0),qe(0,4,5,-2,0,7,10,1,0,2,16,1),qe(0,5,5,-3,0,8,10,1,0,3,14,2),qe(0,5,6,-3,0,9,12,1,0,3,16,2),qe(0,6,6,-3,0,10,14,1,0,4,18,3),qe(0,6,7,-4,0,11,15,1,0,4,20,3),qe(0,7,8,-4,0,12,17,2,0,5,22,4),qe(0,7,8,-4,0,13,19,2,0,5,24,4),qe(0,7,9,-4,0,14,21,2,0,5,26,4),qe(0,8,9,-5,0,15,22,2,0,6,28,5),qe(0,8,10,-5,0,16,24,2,0,6,30,5),qe(0,8,11,-5,0,17,26,2,0,6,32,5),qe(0,9,11,-5,0,18,28,2,0,7,34,6),qe(0,9,12,-6,0,19,29,2,0,7,36,6),qe(0,10,13,-6,0,20,31,3,0,8,38,7),qe(0,10,13,-6,0,21,33,3,0,8,40,7),qe(0,10,14,-6,0,22,35,3,0,8,42,7),qe(0,11,14,-7,0,23,36,3,0,9,44,8),qe(0,11,15,-7,0,24,38,3,0,9,46,8)],Ez=Cz,kz={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},xz={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Aw(e){return`${Math.round(e)}ms`}function Iz(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function Tz(e){const t={...kz,...e.easing},n={...xz,...e.duration};return{getAutoHeightDuration:Iz,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:a=t.easeInOut,delay:l=0,...c}=o;return(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof s=="string"?s:Aw(s)} ${a} ${typeof l=="string"?l:Aw(l)}`).join(",")},...e,easing:t,duration:n}}const Rz={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Pz=Rz;function Az(e={},...t){const{breakpoints:n,mixins:r={},spacing:i,palette:o={},transitions:s={},typography:a={},shape:l,...c}=e;if(e.vars)throw new Error(pi(18));const u=vz(o),d=Ly(e);let f=En(d,{mixins:uz(d.breakpoints,r),palette:u,shadows:Ez.slice(),typography:_z(u,a),transitions:Tz(s),zIndex:{...Pz}});return f=En(f,c),f=t.reduce((h,p)=>En(h,p),f),f.unstable_sxConfig={...Tf,...c==null?void 0:c.unstable_sxConfig},f.unstable_sx=function(p){return My({sx:p,theme:this})},f}const Nz=Az(),Pf=Nz;function Fy(){const e=Dy(Pf);return e[yf]||e}function lt({props:e,name:t}){return iz({props:e,name:t,defaultTheme:Pf,themeId:yf})}const _i=e=>La(e)&&e!=="classes",Oz=La,Mz=nz({themeId:yf,defaultTheme:Pf,rootShouldForwardProp:_i}),fe=Mz,Lz=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Nw=Lz;function vd(e){return typeof e=="string"}function Dz(e,t,n){return e===void 0||vd(e)?t:{...t,ownerState:{...t.ownerState,...n}}}const $z={disableDefaultClasses:!1},Fz=w.createContext($z);function zz(e){const{disableDefaultClasses:t}=w.useContext(Fz);return n=>t?"":e(n)}function Uz(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function Xm(e,t){return typeof e=="function"?e(t):e}function Ow(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function Bz(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:o}=e;if(!t){const h=be(i==null?void 0:i.className,r==null?void 0:r.className,o,n==null?void 0:n.className),p={...n==null?void 0:n.style,...i==null?void 0:i.style,...r==null?void 0:r.style},y={...n,...i,...r};return h.length>0&&(y.className=h),Object.keys(p).length>0&&(y.style=p),{props:y,internalRef:void 0}}const s=Uz({...i,...r}),a=Ow(r),l=Ow(i),c=t(s),u=be(c==null?void 0:c.className,n==null?void 0:n.className,o,i==null?void 0:i.className,r==null?void 0:r.className),d={...c==null?void 0:c.style,...n==null?void 0:n.style,...i==null?void 0:i.style,...r==null?void 0:r.style},f={...c,...n,...l,...a};return u.length>0&&(f.className=u),Object.keys(d).length>0&&(f.style=d),{props:f,internalRef:c.ref}}function Mw(e){var t;const{elementType:n,externalSlotProps:r,ownerState:i,...o}=e,s=Xm(r,i),{props:a,internalRef:l}=Bz({...o,externalSlotProps:s}),c=tn(l,s==null?void 0:s.ref,(t=e.additionalProps)==null?void 0:t.ref);return Dz(n,{...a,ref:c},i)}const jz=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Wz(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Hz(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Vz(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Hz(e))}function qz(e){const t=[],n=[];return Array.from(e.querySelectorAll(jz)).forEach((r,i)=>{const o=Wz(r);o===-1||!Vz(r)||(o===0?t.push(r):n.push({documentOrder:i,tabIndex:o,node:r}))}),n.sort((r,i)=>r.tabIndex===i.tabIndex?r.documentOrder-i.documentOrder:r.tabIndex-i.tabIndex).map(r=>r.node).concat(t)}function Gz(){return!0}function Kz(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:i=!1,getTabbable:o=qz,isEnabled:s=Gz,open:a}=e,l=w.useRef(!1),c=w.useRef(null),u=w.useRef(null),d=w.useRef(null),f=w.useRef(null),h=w.useRef(!1),p=w.useRef(null),y=tn(t.ref,p),S=w.useRef(null);w.useEffect(()=>{!a||!p.current||(h.current=!n)},[n,a]),w.useEffect(()=>{if(!a||!p.current)return;const g=cn(p.current);return p.current.contains(g.activeElement)||(p.current.hasAttribute("tabIndex")||p.current.setAttribute("tabIndex","-1"),h.current&&p.current.focus()),()=>{i||(d.current&&d.current.focus&&(l.current=!0,d.current.focus()),d.current=null)}},[a]),w.useEffect(()=>{if(!a||!p.current)return;const g=cn(p.current),_=E=>{const{current:T}=p;if(T!==null){if(!g.hasFocus()||r||!s()||l.current){l.current=!1;return}if(!T.contains(g.activeElement)){if(E&&f.current!==E.target||g.activeElement!==f.current)f.current=null;else if(f.current!==null)return;if(!h.current)return;let L=[];if((g.activeElement===c.current||g.activeElement===u.current)&&(L=o(p.current)),L.length>0){var A,I;const q=!!((A=S.current)!=null&&A.shiftKey&&((I=S.current)==null?void 0:I.key)==="Tab"),V=L[0],D=L[L.length-1];typeof V!="string"&&typeof D!="string"&&(q?D.focus():V.focus())}else T.focus()}}},C=E=>{S.current=E,!(r||!s()||E.key!=="Tab")&&g.activeElement===p.current&&E.shiftKey&&(l.current=!0,u.current&&u.current.focus())};g.addEventListener("focusin",_),g.addEventListener("keydown",C,!0);const k=setInterval(()=>{g.activeElement&&g.activeElement.tagName==="BODY"&&_(null)},50);return()=>{clearInterval(k),g.removeEventListener("focusin",_),g.removeEventListener("keydown",C,!0)}},[n,r,i,s,a,o]);const v=g=>{d.current===null&&(d.current=g.relatedTarget),h.current=!0,f.current=g.target;const _=t.props.onFocus;_&&_(g)},m=g=>{d.current===null&&(d.current=g.relatedTarget),h.current=!0};return z(w.Fragment,{children:[b("div",{tabIndex:a?0:-1,onFocus:m,ref:c,"data-testid":"sentinelStart"}),w.cloneElement(t,{ref:y,onFocus:v}),b("div",{tabIndex:a?0:-1,onFocus:m,ref:u,"data-testid":"sentinelEnd"})]})}function Yz(e){return typeof e=="function"?e():e}const Qz=w.forwardRef(function(t,n){const{children:r,container:i,disablePortal:o=!1}=t,[s,a]=w.useState(null),l=tn(w.isValidElement(r)?r.ref:null,n);if(Ss(()=>{o||a(Yz(i)||document.body)},[i,o]),Ss(()=>{if(s&&!o)return qm(n,s),()=>{qm(n,null)}},[n,s,o]),o){if(w.isValidElement(r)){const c={ref:l};return w.cloneElement(r,c)}return b(w.Fragment,{children:r})}return b(w.Fragment,{children:s&&ss.createPortal(r,s)})}),Xz=Qz;function Jz(e){const t=cn(e);return t.body===e?io(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Da(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Lw(e){return parseInt(io(e).getComputedStyle(e).paddingRight,10)||0}function Zz(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function Dw(e,t,n,r,i){const o=[t,n,...r];[].forEach.call(e.children,s=>{const a=o.indexOf(s)===-1,l=!Zz(s);a&&l&&Da(s,i)})}function Zh(e,t){let n=-1;return e.some((r,i)=>t(r)?(n=i,!0):!1),n}function eU(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(Jz(r)){const s=rI(cn(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Lw(r)+s}px`;const a=cn(r).querySelectorAll(".mui-fixed");[].forEach.call(a,l=>{n.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${Lw(l)+s}px`})}let o;if(r.parentNode instanceof DocumentFragment)o=cn(r).body;else{const s=r.parentElement,a=io(r);o=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:r}n.push({value:o.style.overflow,property:"overflow",el:o},{value:o.style.overflowX,property:"overflow-x",el:o},{value:o.style.overflowY,property:"overflow-y",el:o}),o.style.overflow="hidden"}return()=>{n.forEach(({value:o,el:s,property:a})=>{o?s.style.setProperty(a,o):s.style.removeProperty(a)})}}function tU(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class nU{constructor(){this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&Da(t.modalRef,!1);const i=tU(n);Dw(n,t.mount,t.modalRef,i,!0);const o=Zh(this.containers,s=>s.container===n);return o!==-1?(this.containers[o].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:i}),r)}mount(t,n){const r=Zh(this.containers,o=>o.modals.indexOf(t)!==-1),i=this.containers[r];i.restore||(i.restore=eU(i,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const i=Zh(this.containers,s=>s.modals.indexOf(t)!==-1),o=this.containers[i];if(o.modals.splice(o.modals.indexOf(t),1),this.modals.splice(r,1),o.modals.length===0)o.restore&&o.restore(),t.modalRef&&Da(t.modalRef,n),Dw(o.container,t.mount,t.modalRef,o.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=o.modals[o.modals.length-1];s.modalRef&&Da(s.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function rU(e){return Ze("MuiModal",e)}et("MuiModal",["root","hidden","backdrop"]);const iU=e=>{const{open:t,exited:n}=e;return at({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},zz(rU))};function oU(e){return typeof e=="function"?e():e}function sU(e){return e?e.props.hasOwnProperty("in"):!1}const aU=new nU,lU=w.forwardRef(function(t,n){var r,i;const{children:o,closeAfterTransition:s=!1,container:a,disableAutoFocus:l=!1,disableEnforceFocus:c=!1,disableEscapeKeyDown:u=!1,disablePortal:d=!1,disableRestoreFocus:f=!1,disableScrollLock:h=!1,hideBackdrop:p=!1,keepMounted:y=!1,manager:S=aU,onBackdropClick:v,onClose:m,onKeyDown:g,open:_,onTransitionEnter:C,onTransitionExited:k,slotProps:E={},slots:T={},...A}=t,I=S,[L,q]=w.useState(!_),V=w.useRef({}),D=w.useRef(null),N=w.useRef(null),X=tn(N,n),se=sU(o),R=(r=t["aria-hidden"])!=null?r:!0,W=()=>cn(D.current),M=()=>(V.current.modalRef=N.current,V.current.mountNode=D.current,V.current),J=()=>{I.mount(M(),{disableScrollLock:h}),N.current&&(N.current.scrollTop=0)},P=Wo(()=>{const re=oU(a)||W().body;I.add(M(),re),N.current&&J()}),$=w.useCallback(()=>I.isTopModal(M()),[I]),O=Wo(re=>{D.current=re,!(!re||!N.current)&&(_&&$()?J():Da(N.current,R))}),H=w.useCallback(()=>{I.remove(M(),R)},[I,R]);w.useEffect(()=>()=>{H()},[H]),w.useEffect(()=>{_?P():(!se||!s)&&H()},[_,H,se,s,P]);const x={...t,closeAfterTransition:s,disableAutoFocus:l,disableEnforceFocus:c,disableEscapeKeyDown:u,disablePortal:d,disableRestoreFocus:f,disableScrollLock:h,exited:L,hideBackdrop:p,keepMounted:y},ie=iU(x),F=()=>{q(!1),C&&C()},pe=()=>{q(!0),k&&k(),s&&H()},te=re=>{re.target===re.currentTarget&&(v&&v(re),m&&m(re,"backdropClick"))},oe=re=>{g&&g(re),!(re.key!=="Escape"||!$())&&(u||(re.stopPropagation(),m&&m(re,"escapeKeyDown")))},Z={};o.props.tabIndex===void 0&&(Z.tabIndex="-1"),se&&(Z.onEnter=lw(F,o.props.onEnter),Z.onExited=lw(pe,o.props.onExited));const Ae=(i=T.root)!=null?i:"div",Ve=Mw({elementType:Ae,externalSlotProps:E.root,externalForwardedProps:A,additionalProps:{ref:X,role:"presentation",onKeyDown:oe},className:ie.root,ownerState:x}),Y=T.backdrop,_e=Mw({elementType:Y,externalSlotProps:E.backdrop,additionalProps:{"aria-hidden":!0,onClick:te,open:_},className:ie.backdrop,ownerState:x});return!y&&!_&&(!se||L)?null:b(Xz,{ref:O,container:a,disablePortal:d,children:z(Ae,{...Ve,children:[!p&&Y?b(Y,{..._e}):null,b(Kz,{disableEnforceFocus:c,disableAutoFocus:l,disableRestoreFocus:f,isEnabled:$,open:_,children:w.cloneElement(o,Z)})]})})}),cU=lU;function Fc(e){return parseInt(e,10)||0}const uU={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function $w(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const dU=w.forwardRef(function(t,n){const{onChange:r,maxRows:i,minRows:o=1,style:s,value:a,...l}=t,{current:c}=w.useRef(a!=null),u=w.useRef(null),d=tn(n,u),f=w.useRef(null),h=w.useRef(0),[p,y]=w.useState({outerHeightStyle:0}),S=w.useCallback(()=>{const C=u.current,E=io(C).getComputedStyle(C);if(E.width==="0px")return{outerHeightStyle:0};const T=f.current;T.style.width=E.width,T.value=C.value||t.placeholder||"x",T.value.slice(-1)===`
`&&(T.value+=" ");const A=E.boxSizing,I=Fc(E.paddingBottom)+Fc(E.paddingTop),L=Fc(E.borderBottomWidth)+Fc(E.borderTopWidth),q=T.scrollHeight;T.value="x";const V=T.scrollHeight;let D=q;o&&(D=Math.max(Number(o)*V,D)),i&&(D=Math.min(Number(i)*V,D)),D=Math.max(D,V);const N=D+(A==="border-box"?I+L:0),X=Math.abs(D-q)<=1;return{outerHeightStyle:N,overflow:X}},[i,o,t.placeholder]),v=(C,k)=>{const{outerHeightStyle:E,overflow:T}=k;return h.current<20&&(E>0&&Math.abs((C.outerHeightStyle||0)-E)>1||C.overflow!==T)?(h.current+=1,{overflow:T,outerHeightStyle:E}):C},m=w.useCallback(()=>{const C=S();$w(C)||y(k=>v(k,C))},[S]),g=()=>{const C=S();$w(C)||ss.flushSync(()=>{y(k=>v(k,C))})};w.useEffect(()=>{const C=nI(()=>{h.current=0,u.current&&g()});let k;const E=u.current,T=io(E);return T.addEventListener("resize",C),typeof ResizeObserver<"u"&&(k=new ResizeObserver(C),k.observe(E)),()=>{C.clear(),T.removeEventListener("resize",C),k&&k.disconnect()}}),Ss(()=>{m()}),w.useEffect(()=>{h.current=0},[a]);const _=C=>{h.current=0,c||m(),r&&r(C)};return z(w.Fragment,{children:[b("textarea",{value:a,onChange:_,ref:d,rows:o,style:{height:p.outerHeightStyle,overflow:p.overflow?"hidden":void 0,...s},...l}),b("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:f,tabIndex:-1,style:{...uU.shadow,...s,padding:0}})]})}),fU=dU;function hU(e){return Ze("MuiSvgIcon",e)}et("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const pU=e=>{const{color:t,fontSize:n,classes:r}=e,i={root:["root",t!=="inherit"&&`color${xe(t)}`,`fontSize${xe(n)}`]};return at(i,hU,r)},mU=fe("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${xe(n.color)}`],t[`fontSize${xe(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,i,o,s,a,l,c,u,d,f,h,p,y,S,v,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=e.transitions)==null||(o=i.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((s=e.typography)==null||(a=s.pxToRem)==null?void 0:a.call(s,20))||"1.25rem",medium:((l=e.typography)==null||(c=l.pxToRem)==null?void 0:c.call(l,24))||"1.5rem",large:((u=e.typography)==null||(d=u.pxToRem)==null?void 0:d.call(u,35))||"2.1875rem"}[t.fontSize],color:(f=(h=(e.vars||e).palette)==null||(p=h[t.color])==null?void 0:p.main)!=null?f:{action:(y=(e.vars||e).palette)==null||(S=y.action)==null?void 0:S.active,disabled:(v=(e.vars||e).palette)==null||(m=v.action)==null?void 0:m.disabled,inherit:void 0}[t.color]}}),CI=w.forwardRef(function(t,n){const r=lt({props:t,name:"MuiSvgIcon"}),{children:i,className:o,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:c,inheritViewBox:u=!1,titleAccess:d,viewBox:f="0 0 24 24",...h}=r,p={...r,color:s,component:a,fontSize:l,instanceFontSize:t.fontSize,inheritViewBox:u,viewBox:f},y={};u||(y.viewBox=f);const S=pU(p);return z(mU,{as:a,className:be(S.root,o),focusable:"false",color:c,"aria-hidden":d?void 0:!0,role:d?"img":void 0,ref:n,...y,...h,ownerState:p,children:[i,d?b("title",{children:d}):null]})});CI.muiName="SvgIcon";const Fw=CI;function zy(e,t){function n(r,i){return b(Fw,{"data-testid":`${t}Icon`,ref:i,...r,children:e})}return n.muiName=Fw.muiName,w.memo(w.forwardRef(n))}var zw={},gU={get exports(){return zw},set exports(e){zw=e}},Pe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uy=Symbol.for("react.element"),By=Symbol.for("react.portal"),Af=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),Of=Symbol.for("react.profiler"),Mf=Symbol.for("react.provider"),Lf=Symbol.for("react.context"),vU=Symbol.for("react.server_context"),Df=Symbol.for("react.forward_ref"),$f=Symbol.for("react.suspense"),Ff=Symbol.for("react.suspense_list"),zf=Symbol.for("react.memo"),Uf=Symbol.for("react.lazy"),yU=Symbol.for("react.offscreen"),EI;EI=Symbol.for("react.module.reference");function In(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Uy:switch(e=e.type,e){case Af:case Of:case Nf:case $f:case Ff:return e;default:switch(e=e&&e.$$typeof,e){case vU:case Lf:case Df:case Uf:case zf:case Mf:return e;default:return t}}case By:return t}}}Pe.ContextConsumer=Lf;Pe.ContextProvider=Mf;Pe.Element=Uy;Pe.ForwardRef=Df;Pe.Fragment=Af;Pe.Lazy=Uf;Pe.Memo=zf;Pe.Portal=By;Pe.Profiler=Of;Pe.StrictMode=Nf;Pe.Suspense=$f;Pe.SuspenseList=Ff;Pe.isAsyncMode=function(){return!1};Pe.isConcurrentMode=function(){return!1};Pe.isContextConsumer=function(e){return In(e)===Lf};Pe.isContextProvider=function(e){return In(e)===Mf};Pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Uy};Pe.isForwardRef=function(e){return In(e)===Df};Pe.isFragment=function(e){return In(e)===Af};Pe.isLazy=function(e){return In(e)===Uf};Pe.isMemo=function(e){return In(e)===zf};Pe.isPortal=function(e){return In(e)===By};Pe.isProfiler=function(e){return In(e)===Of};Pe.isStrictMode=function(e){return In(e)===Nf};Pe.isSuspense=function(e){return In(e)===$f};Pe.isSuspenseList=function(e){return In(e)===Ff};Pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Af||e===Of||e===Nf||e===$f||e===Ff||e===yU||typeof e=="object"&&e!==null&&(e.$$typeof===Uf||e.$$typeof===zf||e.$$typeof===Mf||e.$$typeof===Lf||e.$$typeof===Df||e.$$typeof===EI||e.getModuleId!==void 0)};Pe.typeOf=In;(function(e){e.exports=Pe})(gU);function kI(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jm(e,t){return Jm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Jm(e,t)}function xI(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Jm(e,t)}const Uw={disabled:!1},yd=je.createContext(null);var _U=function(t){return t.scrollTop},pa="unmounted",ki="exited",xi="entering",Eo="entered",Zm="exiting",Pr=function(e){xI(t,e);function t(r,i){var o;o=e.call(this,r,i)||this;var s=i,a=s&&!s.isMounting?r.enter:r.appear,l;return o.appearStatus=null,r.in?a?(l=ki,o.appearStatus=xi):l=Eo:r.unmountOnExit||r.mountOnEnter?l=pa:l=ki,o.state={status:l},o.nextCallback=null,o}t.getDerivedStateFromProps=function(i,o){var s=i.in;return s&&o.status===pa?{status:ki}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var o=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==xi&&s!==Eo&&(o=xi):(s===xi||s===Eo)&&(o=Zm)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,o,s,a;return o=s=a=i,i!=null&&typeof i!="number"&&(o=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:o,enter:s,appear:a}},n.updateStatus=function(i,o){if(i===void 0&&(i=!1),o!==null)if(this.cancelNextCallback(),o===xi){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:Sc.findDOMNode(this);s&&_U(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ki&&this.setState({status:pa})},n.performEnter=function(i){var o=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[Sc.findDOMNode(this),a],c=l[0],u=l[1],d=this.getTimeouts(),f=a?d.appear:d.enter;if(!i&&!s||Uw.disabled){this.safeSetState({status:Eo},function(){o.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:xi},function(){o.props.onEntering(c,u),o.onTransitionEnd(f,function(){o.safeSetState({status:Eo},function(){o.props.onEntered(c,u)})})})},n.performExit=function(){var i=this,o=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:Sc.findDOMNode(this);if(!o||Uw.disabled){this.safeSetState({status:ki},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Zm},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:ki},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},n.setNextCallback=function(i){var o=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,o.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(i,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:Sc.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],c=l[0],u=l[1];this.props.addEndListener(c,u)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===pa)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=kI(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return je.createElement(yd.Provider,{value:null},typeof s=="function"?s(i,a):je.cloneElement(je.Children.only(s),a))},t}(je.Component);Pr.contextType=yd;Pr.propTypes={};function Co(){}Pr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Co,onEntering:Co,onEntered:Co,onExit:Co,onExiting:Co,onExited:Co};Pr.UNMOUNTED=pa;Pr.EXITED=ki;Pr.ENTERING=xi;Pr.ENTERED=Eo;Pr.EXITING=Zm;const II=Pr;function wU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function jy(e,t){var n=function(o){return t&&w.isValidElement(o)?t(o):o},r=Object.create(null);return e&&w.Children.map(e,function(i){return i}).forEach(function(i){r[i.key]=n(i)}),r}function bU(e,t){e=e||{},t=t||{};function n(u){return u in t?t[u]:e[u]}var r=Object.create(null),i=[];for(var o in e)o in t?i.length&&(r[o]=i,i=[]):i.push(o);var s,a={};for(var l in t){if(r[l])for(s=0;s<r[l].length;s++){var c=r[l][s];a[r[l][s]]=n(c)}a[l]=n(l)}for(s=0;s<i.length;s++)a[i[s]]=n(i[s]);return a}function Di(e,t,n){return n[t]!=null?n[t]:e.props[t]}function SU(e,t){return jy(e.children,function(n){return w.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:Di(n,"appear",e),enter:Di(n,"enter",e),exit:Di(n,"exit",e)})})}function CU(e,t,n){var r=jy(e.children),i=bU(t,r);return Object.keys(i).forEach(function(o){var s=i[o];if(w.isValidElement(s)){var a=o in t,l=o in r,c=t[o],u=w.isValidElement(c)&&!c.props.in;l&&(!a||u)?i[o]=w.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:Di(s,"exit",e),enter:Di(s,"enter",e)}):!l&&a&&!u?i[o]=w.cloneElement(s,{in:!1}):l&&a&&w.isValidElement(c)&&(i[o]=w.cloneElement(s,{onExited:n.bind(null,s),in:c.props.in,exit:Di(s,"exit",e),enter:Di(s,"enter",e)}))}}),i}var EU=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},kU={component:"div",childFactory:function(t){return t}},Wy=function(e){xI(t,e);function t(r,i){var o;o=e.call(this,r,i)||this;var s=o.handleExited.bind(wU(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,o){var s=o.children,a=o.handleExited,l=o.firstRender;return{children:l?SU(i,a):CU(i,s,a),firstRender:!1}},n.handleExited=function(i,o){var s=jy(this.props.children);i.key in s||(i.props.onExited&&i.props.onExited(o),this.mounted&&this.setState(function(a){var l=hd({},a.children);return delete l[i.key],{children:l}}))},n.render=function(){var i=this.props,o=i.component,s=i.childFactory,a=kI(i,["component","childFactory"]),l=this.state.contextValue,c=EU(this.state.children).map(s);return delete a.appear,delete a.enter,delete a.exit,o===null?je.createElement(yd.Provider,{value:l},c):je.createElement(yd.Provider,{value:l},je.createElement(o,a,c))},t}(je.Component);Wy.propTypes={};Wy.defaultProps=kU;const xU=Wy,TI=e=>e.scrollTop;function _d(e,t){var n,r;const{timeout:i,easing:o,style:s={}}=e;return{duration:(n=s.transitionDuration)!=null?n:typeof i=="number"?i:i[t.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof o=="object"?o[t.mode]:o,delay:s.transitionDelay}}function IU(e){return Ze("MuiPaper",e)}et("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const TU=e=>{const{square:t,elevation:n,variant:r,classes:i}=e,o={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return at(o,IU,i)},RU=fe("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return{backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),...!t.square&&{borderRadius:e.shape.borderRadius},...t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},...t.variant==="elevation"&&{boxShadow:(e.vars||e).shadows[t.elevation],...!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${gd("#fff",Nw(t.elevation))}, ${gd("#fff",Nw(t.elevation))})`},...e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}}}}),PU=w.forwardRef(function(t,n){const r=lt({props:t,name:"MuiPaper"}),{className:i,component:o="div",elevation:s=1,square:a=!1,variant:l="elevation",...c}=r,u={...r,component:o,elevation:s,square:a,variant:l},d=TU(u);return b(RU,{as:o,ownerState:u,className:be(d.root,i),ref:n,...c})}),RI=PU;function AU(e){const{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:o,rippleSize:s,in:a,onExited:l,timeout:c}=e,[u,d]=w.useState(!1),f=be(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),h={width:s,height:s,top:-(s/2)+o,left:-(s/2)+i},p=be(n.child,u&&n.childLeaving,r&&n.childPulsate);return!a&&!u&&d(!0),w.useEffect(()=>{if(!a&&l!=null){const y=setTimeout(l,c);return()=>{clearTimeout(y)}}},[l,a,c]),b("span",{className:f,style:h,children:b("span",{className:p})})}const NU=et("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),vn=NU;let Bf=e=>e,Bw,jw,Ww,Hw;const eg=550,OU=80,MU=Ry(Bw||(Bw=Bf`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),LU=Ry(jw||(jw=Bf`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),DU=Ry(Ww||(Ww=Bf`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),$U=fe("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),FU=fe(AU,{name:"MuiTouchRipple",slot:"Ripple"})(Hw||(Hw=Bf`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),vn.rippleVisible,MU,eg,({theme:e})=>e.transitions.easing.easeInOut,vn.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,vn.child,vn.childLeaving,LU,eg,({theme:e})=>e.transitions.easing.easeInOut,vn.childPulsate,DU,({theme:e})=>e.transitions.easing.easeInOut),zU=w.forwardRef(function(t,n){const r=lt({props:t,name:"MuiTouchRipple"}),{center:i=!1,classes:o={},className:s,...a}=r,[l,c]=w.useState([]),u=w.useRef(0),d=w.useRef(null);w.useEffect(()=>{d.current&&(d.current(),d.current=null)},[l]);const f=w.useRef(!1),h=w.useRef(null),p=w.useRef(null),y=w.useRef(null);w.useEffect(()=>()=>{clearTimeout(h.current)},[]);const S=w.useCallback(_=>{const{pulsate:C,rippleX:k,rippleY:E,rippleSize:T,cb:A}=_;c(I=>[...I,b(FU,{classes:{ripple:be(o.ripple,vn.ripple),rippleVisible:be(o.rippleVisible,vn.rippleVisible),ripplePulsate:be(o.ripplePulsate,vn.ripplePulsate),child:be(o.child,vn.child),childLeaving:be(o.childLeaving,vn.childLeaving),childPulsate:be(o.childPulsate,vn.childPulsate)},timeout:eg,pulsate:C,rippleX:k,rippleY:E,rippleSize:T},u.current)]),u.current+=1,d.current=A},[o]),v=w.useCallback((_={},C={},k=()=>{})=>{const{pulsate:E=!1,center:T=i||C.pulsate,fakeElement:A=!1}=C;if((_==null?void 0:_.type)==="mousedown"&&f.current){f.current=!1;return}(_==null?void 0:_.type)==="touchstart"&&(f.current=!0);const I=A?null:y.current,L=I?I.getBoundingClientRect():{width:0,height:0,left:0,top:0};let q,V,D;if(T||_===void 0||_.clientX===0&&_.clientY===0||!_.clientX&&!_.touches)q=Math.round(L.width/2),V=Math.round(L.height/2);else{const{clientX:N,clientY:X}=_.touches&&_.touches.length>0?_.touches[0]:_;q=Math.round(N-L.left),V=Math.round(X-L.top)}if(T)D=Math.sqrt((2*L.width**2+L.height**2)/3),D%2===0&&(D+=1);else{const N=Math.max(Math.abs((I?I.clientWidth:0)-q),q)*2+2,X=Math.max(Math.abs((I?I.clientHeight:0)-V),V)*2+2;D=Math.sqrt(N**2+X**2)}_!=null&&_.touches?p.current===null&&(p.current=()=>{S({pulsate:E,rippleX:q,rippleY:V,rippleSize:D,cb:k})},h.current=setTimeout(()=>{p.current&&(p.current(),p.current=null)},OU)):S({pulsate:E,rippleX:q,rippleY:V,rippleSize:D,cb:k})},[i,S]),m=w.useCallback(()=>{v({},{pulsate:!0})},[v]),g=w.useCallback((_,C)=>{if(clearTimeout(h.current),(_==null?void 0:_.type)==="touchend"&&p.current){p.current(),p.current=null,h.current=setTimeout(()=>{g(_,C)});return}p.current=null,c(k=>k.length>0?k.slice(1):k),d.current=C},[]);return w.useImperativeHandle(n,()=>({pulsate:m,start:v,stop:g}),[m,v,g]),b($U,{className:be(vn.root,o.root,s),ref:y,...a,children:b(xU,{component:null,exit:!0,children:l})})}),UU=zU;function BU(e){return Ze("MuiButtonBase",e)}const jU=et("MuiButtonBase",["root","disabled","focusVisible"]),WU=jU,HU=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,s=at({root:["root",t&&"disabled",n&&"focusVisible"]},BU,i);return n&&r&&(s.root+=` ${r}`),s},VU=fe("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${WU.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),qU=w.forwardRef(function(t,n){const r=lt({props:t,name:"MuiButtonBase"}),{action:i,centerRipple:o=!1,children:s,className:a,component:l="button",disabled:c=!1,disableRipple:u=!1,disableTouchRipple:d=!1,focusRipple:f=!1,focusVisibleClassName:h,LinkComponent:p="a",onBlur:y,onClick:S,onContextMenu:v,onDragLeave:m,onFocus:g,onFocusVisible:_,onKeyDown:C,onKeyUp:k,onMouseDown:E,onMouseLeave:T,onMouseUp:A,onTouchEnd:I,onTouchMove:L,onTouchStart:q,tabIndex:V=0,TouchRippleProps:D,touchRippleRef:N,type:X,...se}=r,R=w.useRef(null),W=w.useRef(null),M=tn(W,N),{isFocusVisibleRef:J,onFocus:P,onBlur:$,ref:O}=Z6(),[H,x]=w.useState(!1);c&&H&&x(!1),w.useImperativeHandle(i,()=>({focusVisible:()=>{x(!0),R.current.focus()}}),[]);const[ie,F]=w.useState(!1);w.useEffect(()=>{F(!0)},[]);const pe=ie&&!u&&!c;w.useEffect(()=>{H&&f&&!u&&ie&&W.current.pulsate()},[u,f,H,ie]);function te(ce,ne,ae=d){return Wo(Ye=>(ne&&ne(Ye),!ae&&W.current&&W.current[ce](Ye),!0))}const oe=te("start",E),Z=te("stop",v),Ae=te("stop",m),Ve=te("stop",A),Y=te("stop",ce=>{H&&ce.preventDefault(),T&&T(ce)}),_e=te("start",q),re=te("stop",I),ze=te("stop",L),gt=te("stop",ce=>{$(ce),J.current===!1&&x(!1),y&&y(ce)},!1),Ke=Wo(ce=>{R.current||(R.current=ce.currentTarget),P(ce),J.current===!0&&(x(!0),_&&_(ce)),g&&g(ce)}),Ct=()=>{const ce=R.current;return l&&l!=="button"&&!(ce.tagName==="A"&&ce.href)},Wt=w.useRef(!1),ut=Wo(ce=>{f&&!Wt.current&&H&&W.current&&ce.key===" "&&(Wt.current=!0,W.current.stop(ce,()=>{W.current.start(ce)})),ce.target===ce.currentTarget&&Ct()&&ce.key===" "&&ce.preventDefault(),C&&C(ce),ce.target===ce.currentTarget&&Ct()&&ce.key==="Enter"&&!c&&(ce.preventDefault(),S&&S(ce))}),ee=Wo(ce=>{f&&ce.key===" "&&W.current&&H&&!ce.defaultPrevented&&(Wt.current=!1,W.current.stop(ce,()=>{W.current.pulsate(ce)})),k&&k(ce),S&&ce.target===ce.currentTarget&&Ct()&&ce.key===" "&&!ce.defaultPrevented&&S(ce)});let me=l;me==="button"&&(se.href||se.to)&&(me=p);const Ht={};me==="button"?(Ht.type=X===void 0?"button":X,Ht.disabled=c):(!se.href&&!se.to&&(Ht.role="button"),c&&(Ht["aria-disabled"]=c));const Vt=tn(n,O,R),Et={...r,centerRipple:o,component:l,disabled:c,disableRipple:u,disableTouchRipple:d,focusRipple:f,tabIndex:V,focusVisible:H},ir=HU(Et);return z(VU,{as:me,className:be(ir.root,a),ownerState:Et,onBlur:gt,onClick:S,onContextMenu:Z,onFocus:Ke,onKeyDown:ut,onKeyUp:ee,onMouseDown:oe,onMouseLeave:Y,onMouseUp:Ve,onDragLeave:Ae,onTouchEnd:re,onTouchMove:ze,onTouchStart:_e,ref:Vt,tabIndex:c?-1:V,type:X,...Ht,...se,children:[s,pe?b(UU,{ref:M,center:o,...D}):null]})}),GU=qU;function KU(e){return Ze("MuiIconButton",e)}const YU=et("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),QU=YU,XU=e=>{const{classes:t,disabled:n,color:r,edge:i,size:o}=e,s={root:["root",n&&"disabled",r!=="default"&&`color${xe(r)}`,i&&`edge${xe(i)}`,`size${xe(o)}`]};return at(s,KU,t)},JU=fe(GU,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="default"&&t[`color${xe(n.color)}`],n.edge&&t[`edge${xe(n.edge)}`],t[`size${xe(n.size)}`]]}})(({theme:e,ownerState:t})=>({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),...!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:gd(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},...t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},...t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}}),({theme:e,ownerState:t})=>{var n;const r=(n=(e.vars||e).palette)==null?void 0:n[t.color];return{...t.color==="inherit"&&{color:"inherit"},...t.color!=="inherit"&&t.color!=="default"&&{color:r==null?void 0:r.main,...!t.disableRipple&&{"&:hover":{...r&&{backgroundColor:e.vars?`rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:gd(r.main,e.palette.action.hoverOpacity)},"@media (hover: none)":{backgroundColor:"transparent"}}}},...t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},...t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},[`&.${QU.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}}}),ZU=w.forwardRef(function(t,n){const r=lt({props:t,name:"MuiIconButton"}),{edge:i=!1,children:o,className:s,color:a="default",disabled:l=!1,disableFocusRipple:c=!1,size:u="medium",...d}=r,f={...r,edge:i,color:a,disabled:l,disableFocusRipple:c,size:u},h=XU(f);return b(JU,{className:be(h.root,s),centerRipple:!0,focusRipple:!c,disabled:l,ref:n,ownerState:f,...d,children:o})}),e7=ZU;function t7(e){return Ze("MuiTypography",e)}et("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const n7=e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:i,variant:o,classes:s}=e,a={root:["root",o,e.align!=="inherit"&&`align${xe(t)}`,n&&"gutterBottom",r&&"noWrap",i&&"paragraph"]};return at(a,t7,s)},r7=fe("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${xe(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>({margin:0,...t.variant&&e.typography[t.variant],...t.align!=="inherit"&&{textAlign:t.align},...t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},...t.gutterBottom&&{marginBottom:"0.35em"},...t.paragraph&&{marginBottom:16}})),Vw={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},i7={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},o7=e=>i7[e]||e,s7=w.forwardRef(function(t,n){const r=lt({props:t,name:"MuiTypography"}),i=o7(r.color),o=Y8({...r,color:i}),{align:s="inherit",className:a,component:l,gutterBottom:c=!1,noWrap:u=!1,paragraph:d=!1,variant:f="body1",variantMapping:h=Vw,...p}=o,y={...o,align:s,color:i,className:a,component:l,gutterBottom:c,noWrap:u,paragraph:d,variant:f,variantMapping:h},S=l||(d?"p":h[f]||Vw[f])||"span",v=n7(y);return b(r7,{as:S,ref:n,ownerState:y,className:be(v.root,a),...p})}),a7=s7;function js({props:e,states:t,muiFormControl:n}){return t.reduce((r,i)=>(r[i]=e[i],n&&typeof e[i]>"u"&&(r[i]=n[i]),r),{})}const l7=w.createContext(void 0),jf=l7;function mo(){return w.useContext(jf)}function c7(e){return b(G8,{...e,defaultTheme:Pf,themeId:yf})}function qw(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function wd(e,t=!1){return e&&(qw(e.value)&&e.value!==""||t&&qw(e.defaultValue)&&e.defaultValue!=="")}function u7(e){return e.startAdornment}function d7(e){return Ze("MuiInputBase",e)}const f7=et("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),Es=f7,Wf=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,n.size==="small"&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${xe(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},Hf=(e,t)=>{const{ownerState:n}=e;return[t.input,n.size==="small"&&t.inputSizeSmall,n.multiline&&t.inputMultiline,n.type==="search"&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},h7=e=>{const{classes:t,color:n,disabled:r,error:i,endAdornment:o,focused:s,formControl:a,fullWidth:l,hiddenLabel:c,multiline:u,readOnly:d,size:f,startAdornment:h,type:p}=e,y={root:["root",`color${xe(n)}`,r&&"disabled",i&&"error",l&&"fullWidth",s&&"focused",a&&"formControl",f==="small"&&"sizeSmall",u&&"multiline",h&&"adornedStart",o&&"adornedEnd",c&&"hiddenLabel",d&&"readOnly"],input:["input",r&&"disabled",p==="search"&&"inputTypeSearch",u&&"inputMultiline",f==="small"&&"inputSizeSmall",c&&"inputHiddenLabel",h&&"inputAdornedStart",o&&"inputAdornedEnd",d&&"readOnly"]};return at(y,d7,t)},Vf=fe("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Wf})(({theme:e,ownerState:t})=>({...e.typography.body1,color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${Es.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"},...t.multiline&&{padding:"4px 0 5px",...t.size==="small"&&{paddingTop:1}},...t.fullWidth&&{width:"100%"}})),qf=fe("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Hf})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light",r={color:"currentColor",...e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},i={opacity:"0 !important"},o=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${Es.formControl} &`]:{"&::-webkit-input-placeholder":i,"&::-moz-placeholder":i,"&:-ms-input-placeholder":i,"&::-ms-input-placeholder":i,"&:focus::-webkit-input-placeholder":o,"&:focus::-moz-placeholder":o,"&:focus:-ms-input-placeholder":o,"&:focus::-ms-input-placeholder":o},[`&.${Es.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"},...t.size==="small"&&{paddingTop:1},...t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},...t.type==="search"&&{MozAppearance:"textfield"}}}),p7=b(c7,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),m7=w.forwardRef(function(t,n){var r;const i=lt({props:t,name:"MuiInputBase"}),{"aria-describedby":o,autoComplete:s,autoFocus:a,className:l,color:c,components:u={},componentsProps:d={},defaultValue:f,disabled:h,disableInjectingGlobalStyles:p,endAdornment:y,error:S,fullWidth:v=!1,id:m,inputComponent:g="input",inputProps:_={},inputRef:C,margin:k,maxRows:E,minRows:T,multiline:A=!1,name:I,onBlur:L,onChange:q,onClick:V,onFocus:D,onKeyDown:N,onKeyUp:X,placeholder:se,readOnly:R,renderSuffix:W,rows:M,size:J,slotProps:P={},slots:$={},startAdornment:O,type:H="text",value:x,...ie}=i,F=_.value!=null?_.value:x,{current:pe}=w.useRef(F!=null),te=w.useRef(),oe=w.useCallback(ae=>{},[]),Z=tn(te,C,_.ref,oe),[Ae,Ve]=w.useState(!1),Y=mo(),_e=js({props:i,muiFormControl:Y,states:["color","disabled","error","hiddenLabel","size","required","filled"]});_e.focused=Y?Y.focused:Ae,w.useEffect(()=>{!Y&&h&&Ae&&(Ve(!1),L&&L())},[Y,h,Ae,L]);const re=Y&&Y.onFilled,ze=Y&&Y.onEmpty,gt=w.useCallback(ae=>{wd(ae)?re&&re():ze&&ze()},[re,ze]);Ss(()=>{pe&&gt({value:F})},[F,gt,pe]);const Ke=ae=>{if(_e.disabled){ae.stopPropagation();return}D&&D(ae),_.onFocus&&_.onFocus(ae),Y&&Y.onFocus?Y.onFocus(ae):Ve(!0)},Ct=ae=>{L&&L(ae),_.onBlur&&_.onBlur(ae),Y&&Y.onBlur?Y.onBlur(ae):Ve(!1)},Wt=(ae,...Ye)=>{if(!pe){const jn=ae.target||te.current;if(jn==null)throw new Error(pi(1));gt({value:jn.value})}_.onChange&&_.onChange(ae,...Ye),q&&q(ae,...Ye)};w.useEffect(()=>{gt(te.current)},[]);const ut=ae=>{te.current&&ae.currentTarget===ae.target&&te.current.focus(),V&&!_e.disabled&&V(ae)};let ee=g,me=_;A&&ee==="input"&&(M?me={type:void 0,minRows:M,maxRows:M,...me}:me={type:void 0,maxRows:E,minRows:T,...me},ee=fU);const Ht=ae=>{gt(ae.animationName==="mui-auto-fill-cancel"?te.current:{value:"x"})};w.useEffect(()=>{Y&&Y.setAdornedStart(!!O)},[Y,O]);const Vt={...i,color:_e.color||"primary",disabled:_e.disabled,endAdornment:y,error:_e.error,focused:_e.focused,formControl:Y,fullWidth:v,hiddenLabel:_e.hiddenLabel,multiline:A,size:_e.size,startAdornment:O,type:H},Et=h7(Vt),ir=$.root||u.Root||Vf,ce=P.root||d.root||{},ne=$.input||u.Input||qf;return me={...me,...(r=P.input)!=null?r:d.input},z(w.Fragment,{children:[!p&&p7,z(ir,{...ce,...!vd(ir)&&{ownerState:{...Vt,...ce.ownerState}},ref:n,onClick:ut,...ie,className:be(Et.root,ce.className,l,R&&"MuiInputBase-readOnly"),children:[O,b(jf.Provider,{value:null,children:b(ne,{ownerState:Vt,"aria-invalid":_e.error,"aria-describedby":o,autoComplete:s,autoFocus:a,defaultValue:f,disabled:_e.disabled,id:m,onAnimationStart:Ht,name:I,placeholder:se,readOnly:R,required:_e.required,rows:M,value:F,onKeyDown:N,onKeyUp:X,type:H,...me,...!vd(ne)&&{as:ee,ownerState:{...Vt,...me.ownerState}},ref:Z,className:be(Et.input,me.className,R&&"MuiInputBase-readOnly"),onBlur:Ct,onChange:Wt,onFocus:Ke})}),y,W?W({..._e,startAdornment:O}):null]})]})}),Hy=m7;function g7(e){return Ze("MuiInput",e)}const v7={...Es,...et("MuiInput",["root","underline","input"])},ia=v7;function y7(e){return Ze("MuiOutlinedInput",e)}const _7={...Es,...et("MuiOutlinedInput",["root","notchedOutline","input"])},Mr=_7;function w7(e){return Ze("MuiFilledInput",e)}const b7={...Es,...et("MuiFilledInput",["root","underline","input"])},wi=b7,S7=zy(b("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),C7={entering:{opacity:1},entered:{opacity:1}},E7=w.forwardRef(function(t,n){const r=Fy(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:o,appear:s=!0,children:a,easing:l,in:c,onEnter:u,onEntered:d,onEntering:f,onExit:h,onExited:p,onExiting:y,style:S,timeout:v=i,TransitionComponent:m=II,...g}=t,_=w.useRef(null),C=tn(_,a.ref,n),k=D=>N=>{if(D){const X=_.current;N===void 0?D(X):D(X,N)}},E=k(f),T=k((D,N)=>{TI(D);const X=_d({style:S,timeout:v,easing:l},{mode:"enter"});D.style.webkitTransition=r.transitions.create("opacity",X),D.style.transition=r.transitions.create("opacity",X),u&&u(D,N)}),A=k(d),I=k(y),L=k(D=>{const N=_d({style:S,timeout:v,easing:l},{mode:"exit"});D.style.webkitTransition=r.transitions.create("opacity",N),D.style.transition=r.transitions.create("opacity",N),h&&h(D)}),q=k(p);return b(m,{appear:s,in:c,nodeRef:_,onEnter:T,onEntered:A,onEntering:E,onExit:L,onExited:q,onExiting:I,addEndListener:D=>{o&&o(_.current,D)},timeout:v,...g,children:(D,N)=>w.cloneElement(a,{style:{opacity:0,visibility:D==="exited"&&!c?"hidden":void 0,...C7[D],...S,...a.props.style},ref:C,...N})})}),k7=E7;function x7(e){return Ze("MuiBackdrop",e)}et("MuiBackdrop",["root","invisible"]);const I7=e=>{const{classes:t,invisible:n}=e;return at({root:["root",n&&"invisible"]},x7,t)},T7=fe("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",...e.invisible&&{backgroundColor:"transparent"}})),R7=w.forwardRef(function(t,n){var r,i,o;const s=lt({props:t,name:"MuiBackdrop"}),{children:a,className:l,component:c="div",components:u={},componentsProps:d={},invisible:f=!1,open:h,slotProps:p={},slots:y={},TransitionComponent:S=k7,transitionDuration:v,...m}=s,g={...s,component:c,invisible:f},_=I7(g),C=(r=p.root)!=null?r:d.root;return b(S,{in:h,timeout:v,...m,children:b(T7,{"aria-hidden":!0,...C,as:(i=(o=y.root)!=null?o:u.Root)!=null?i:c,className:be(_.root,l,C==null?void 0:C.className),ownerState:{...g,...C==null?void 0:C.ownerState},classes:_,ref:n,children:a})})}),P7=R7,A7=fe("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,...!t.open&&t.exited&&{visibility:"hidden"}})),N7=fe(P7,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),O7=w.forwardRef(function(t,n){var r,i,o,s,a,l;const c=lt({name:"MuiModal",props:t}),{BackdropComponent:u=N7,BackdropProps:d,classes:f,className:h,closeAfterTransition:p=!1,children:y,container:S,component:v,components:m={},componentsProps:g={},disableAutoFocus:_=!1,disableEnforceFocus:C=!1,disableEscapeKeyDown:k=!1,disablePortal:E=!1,disableRestoreFocus:T=!1,disableScrollLock:A=!1,hideBackdrop:I=!1,keepMounted:L=!1,onBackdropClick:q,onClose:V,open:D,slotProps:N,slots:X,theme:se,...R}=c,[W,M]=w.useState(!0),J={container:S,closeAfterTransition:p,disableAutoFocus:_,disableEnforceFocus:C,disableEscapeKeyDown:k,disablePortal:E,disableRestoreFocus:T,disableScrollLock:A,hideBackdrop:I,keepMounted:L,onBackdropClick:q,onClose:V,open:D},P={...c,...J,exited:W},$=(r=(i=X==null?void 0:X.root)!=null?i:m.Root)!=null?r:A7,O=(o=(s=X==null?void 0:X.backdrop)!=null?s:m.Backdrop)!=null?o:u,H=(a=N==null?void 0:N.root)!=null?a:g.root,x=(l=N==null?void 0:N.backdrop)!=null?l:g.backdrop;return b(cU,{slots:{root:$,backdrop:O},slotProps:{root:()=>({...Xm(H,P),...!vd($)&&{as:v,theme:se},className:be(h,H==null?void 0:H.className,f==null?void 0:f.root,!P.open&&P.exited&&(f==null?void 0:f.hidden))}),backdrop:()=>({...d,...Xm(x,P),className:be(x==null?void 0:x.className,f==null?void 0:f.backdrop)})},onTransitionEnter:()=>M(!1),onTransitionExited:()=>M(!0),ref:n,...R,...J,children:y})}),M7=O7,L7=e=>{const{classes:t,disableUnderline:n}=e,i=at({root:["root",!n&&"underline"],input:["input"]},w7,t);return{...t,...i}},D7=fe(Vf,{shouldForwardProp:e=>_i(e)||e==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...Wf(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{var n;const r=e.palette.mode==="light",i=r?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",o=r?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",s=r?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",a=r?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return{position:"relative",backgroundColor:e.vars?e.vars.palette.FilledInput.bg:o,borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:e.vars?e.vars.palette.FilledInput.hoverBg:s,"@media (hover: none)":{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:o}},[`&.${wi.focused}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:o},[`&.${wi.disabled}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.disabledBg:a},...!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(n=(e.vars||e).palette[t.color||"primary"])==null?void 0:n.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${wi.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${wi.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}},"&:before":{borderBottom:`1px solid ${e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`:i}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${wi.disabled}, .${wi.error}):before`]:{borderBottom:`1px solid ${(e.vars||e).palette.text.primary}`},[`&.${wi.disabled}:before`]:{borderBottomStyle:"dotted"}},...t.startAdornment&&{paddingLeft:12},...t.endAdornment&&{paddingRight:12},...t.multiline&&{padding:"25px 12px 8px",...t.size==="small"&&{paddingTop:21,paddingBottom:4},...t.hiddenLabel&&{paddingTop:16,paddingBottom:17}}}}),$7=fe(qf,{name:"MuiFilledInput",slot:"Input",overridesResolver:Hf})(({theme:e,ownerState:t})=>({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12,...!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},...e.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},...t.size==="small"&&{paddingTop:21,paddingBottom:4},...t.hiddenLabel&&{paddingTop:16,paddingBottom:17},...t.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},...t.startAdornment&&{paddingLeft:0},...t.endAdornment&&{paddingRight:0},...t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9}})),PI=w.forwardRef(function(t,n){var r,i,o,s;const a=lt({props:t,name:"MuiFilledInput"}),{disableUnderline:l,components:c={},componentsProps:u,fullWidth:d=!1,hiddenLabel:f,inputComponent:h="input",multiline:p=!1,slotProps:y,slots:S={},type:v="text",...m}=a,g={...a,fullWidth:d,inputComponent:h,multiline:p,type:v},_=L7(a),C={root:{ownerState:g},input:{ownerState:g}},k=y??u?En(y??u,C):C,E=(r=(i=S.root)!=null?i:c.Root)!=null?r:D7,T=(o=(s=S.input)!=null?s:c.Input)!=null?o:$7;return b(Hy,{slots:{root:E,input:T},componentsProps:k,fullWidth:d,inputComponent:h,multiline:p,ref:n,type:v,...m,classes:_})});PI.muiName="Input";const AI=PI;function F7(e){return Ze("MuiFormControl",e)}et("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const z7=e=>{const{classes:t,margin:n,fullWidth:r}=e,i={root:["root",n!=="none"&&`margin${xe(n)}`,r&&"fullWidth"]};return at(i,F7,t)},U7=fe("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>({...t.root,...t[`margin${xe(e.margin)}`],...e.fullWidth&&t.fullWidth})})(({ownerState:e})=>({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top",...e.margin==="normal"&&{marginTop:16,marginBottom:8},...e.margin==="dense"&&{marginTop:8,marginBottom:4},...e.fullWidth&&{width:"100%"}})),B7=w.forwardRef(function(t,n){const r=lt({props:t,name:"MuiFormControl"}),{children:i,className:o,color:s="primary",component:a="div",disabled:l=!1,error:c=!1,focused:u,fullWidth:d=!1,hiddenLabel:f=!1,margin:h="none",required:p=!1,size:y="medium",variant:S="outlined",...v}=r,m={...r,color:s,component:a,disabled:l,error:c,fullWidth:d,hiddenLabel:f,margin:h,required:p,size:y,variant:S},g=z7(m),[_,C]=w.useState(()=>{let V=!1;return i&&w.Children.forEach(i,D=>{if(!Yh(D,["Input","Select"]))return;const N=Yh(D,["Select"])?D.props.input:D;N&&u7(N.props)&&(V=!0)}),V}),[k,E]=w.useState(()=>{let V=!1;return i&&w.Children.forEach(i,D=>{Yh(D,["Input","Select"])&&(wd(D.props,!0)||wd(D.props.inputProps,!0))&&(V=!0)}),V}),[T,A]=w.useState(!1);l&&T&&A(!1);const I=u!==void 0&&!l?u:T;let L;const q=w.useMemo(()=>({adornedStart:_,setAdornedStart:C,color:s,disabled:l,error:c,filled:k,focused:I,fullWidth:d,hiddenLabel:f,size:y,onBlur:()=>{A(!1)},onEmpty:()=>{E(!1)},onFilled:()=>{E(!0)},onFocus:()=>{A(!0)},registerEffect:L,required:p,variant:S}),[_,s,l,c,k,I,d,f,L,p,y,S]);return b(jf.Provider,{value:q,children:b(U7,{as:a,ownerState:m,className:be(g.root,o),ref:n,...v,children:i})})}),j7=B7;function W7(e){return Ze("MuiFormHelperText",e)}const H7=et("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),Gw=H7;var Kw;const V7=e=>{const{classes:t,contained:n,size:r,disabled:i,error:o,filled:s,focused:a,required:l}=e,c={root:["root",i&&"disabled",o&&"error",r&&`size${xe(r)}`,n&&"contained",a&&"focused",s&&"filled",l&&"required"]};return at(c,W7,t)},q7=fe("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.size&&t[`size${xe(n.size)}`],n.contained&&t.contained,n.filled&&t.filled]}})(({theme:e,ownerState:t})=>({color:(e.vars||e).palette.text.secondary,...e.typography.caption,textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${Gw.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${Gw.error}`]:{color:(e.vars||e).palette.error.main},...t.size==="small"&&{marginTop:4},...t.contained&&{marginLeft:14,marginRight:14}})),G7=w.forwardRef(function(t,n){const r=lt({props:t,name:"MuiFormHelperText"}),{children:i,className:o,component:s="p",disabled:a,error:l,filled:c,focused:u,margin:d,required:f,variant:h,...p}=r,y=mo(),S=js({props:r,muiFormControl:y,states:["variant","size","disabled","error","filled","focused","required"]}),v={...r,component:s,contained:S.variant==="filled"||S.variant==="outlined",variant:S.variant,size:S.size,disabled:S.disabled,error:S.error,filled:S.filled,focused:S.focused,required:S.required},m=V7(v);return b(q7,{as:s,ownerState:v,className:be(m.root,o),ref:n,...p,children:i===" "?Kw||(Kw=b("span",{className:"notranslate",children:"​"})):i})}),K7=G7;function Y7(e){return Ze("MuiFormLabel",e)}const Q7=et("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),$a=Q7,X7=e=>{const{classes:t,color:n,focused:r,disabled:i,error:o,filled:s,required:a}=e,l={root:["root",`color${xe(n)}`,i&&"disabled",o&&"error",s&&"filled",r&&"focused",a&&"required"],asterisk:["asterisk",o&&"error"]};return at(l,Y7,t)},J7=fe("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},t)=>({...t.root,...e.color==="secondary"&&t.colorSecondary,...e.filled&&t.filled})})(({theme:e,ownerState:t})=>({color:(e.vars||e).palette.text.secondary,...e.typography.body1,lineHeight:"1.4375em",padding:0,position:"relative",[`&.${$a.focused}`]:{color:(e.vars||e).palette[t.color].main},[`&.${$a.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${$a.error}`]:{color:(e.vars||e).palette.error.main}})),Z7=fe("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${$a.error}`]:{color:(e.vars||e).palette.error.main}})),eB=w.forwardRef(function(t,n){const r=lt({props:t,name:"MuiFormLabel"}),{children:i,className:o,color:s,component:a="label",disabled:l,error:c,filled:u,focused:d,required:f,...h}=r,p=mo(),y=js({props:r,muiFormControl:p,states:["color","required","focused","disabled","error","filled"]}),S={...r,color:y.color||"primary",component:a,disabled:y.disabled,error:y.error,filled:y.filled,focused:y.focused,required:y.required},v=X7(S);return z(J7,{as:a,ownerState:S,className:be(v.root,o),ref:n,...h,children:[i,y.required&&z(Z7,{ownerState:S,"aria-hidden":!0,className:v.asterisk,children:[" ","*"]})]})}),tB=eB;function tg(e){return`scale(${e}, ${e**2})`}const nB={entering:{opacity:1,transform:tg(1)},entered:{opacity:1,transform:"none"}},ep=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),NI=w.forwardRef(function(t,n){const{addEndListener:r,appear:i=!0,children:o,easing:s,in:a,onEnter:l,onEntered:c,onEntering:u,onExit:d,onExited:f,onExiting:h,style:p,timeout:y="auto",TransitionComponent:S=II,...v}=t,m=w.useRef(),g=w.useRef(),_=Fy(),C=w.useRef(null),k=tn(C,o.ref,n),E=N=>X=>{if(N){const se=C.current;X===void 0?N(se):N(se,X)}},T=E(u),A=E((N,X)=>{TI(N);const{duration:se,delay:R,easing:W}=_d({style:p,timeout:y,easing:s},{mode:"enter"});let M;y==="auto"?(M=_.transitions.getAutoHeightDuration(N.clientHeight),g.current=M):M=se,N.style.transition=[_.transitions.create("opacity",{duration:M,delay:R}),_.transitions.create("transform",{duration:ep?M:M*.666,delay:R,easing:W})].join(","),l&&l(N,X)}),I=E(c),L=E(h),q=E(N=>{const{duration:X,delay:se,easing:R}=_d({style:p,timeout:y,easing:s},{mode:"exit"});let W;y==="auto"?(W=_.transitions.getAutoHeightDuration(N.clientHeight),g.current=W):W=X,N.style.transition=[_.transitions.create("opacity",{duration:W,delay:se}),_.transitions.create("transform",{duration:ep?W:W*.666,delay:ep?se:se||W*.333,easing:R})].join(","),N.style.opacity=0,N.style.transform=tg(.75),d&&d(N)}),V=E(f),D=N=>{y==="auto"&&(m.current=setTimeout(N,g.current||0)),r&&r(C.current,N)};return w.useEffect(()=>()=>{clearTimeout(m.current)},[]),b(S,{appear:i,in:a,nodeRef:C,onEnter:A,onEntered:I,onEntering:T,onExit:q,onExited:V,onExiting:L,addEndListener:D,timeout:y==="auto"?null:y,...v,children:(N,X)=>w.cloneElement(o,{style:{opacity:0,transform:tg(.75),visibility:N==="exited"&&!a?"hidden":void 0,...nB[N],...p,...o.props.style},ref:k,...X})})});NI.muiSupportAuto=!0;const rB=NI,iB=e=>{const{classes:t,disableUnderline:n}=e,i=at({root:["root",!n&&"underline"],input:["input"]},g7,t);return{...t,...i}},oB=fe(Vf,{shouldForwardProp:e=>_i(e)||e==="classes",name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...Wf(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{let r=e.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return e.vars&&(r=`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),{position:"relative",...t.formControl&&{"label + &":{marginTop:16}},...!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(e.vars||e).palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${ia.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${ia.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}},"&:before":{borderBottom:`1px solid ${r}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${ia.disabled}, .${ia.error}):before`]:{borderBottom:`2px solid ${(e.vars||e).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${r}`}},[`&.${ia.disabled}:before`]:{borderBottomStyle:"dotted"}}}}),sB=fe(qf,{name:"MuiInput",slot:"Input",overridesResolver:Hf})({}),OI=w.forwardRef(function(t,n){var r,i,o,s;const a=lt({props:t,name:"MuiInput"}),{disableUnderline:l,components:c={},componentsProps:u,fullWidth:d=!1,inputComponent:f="input",multiline:h=!1,slotProps:p,slots:y={},type:S="text",...v}=a,m=iB(a),_={root:{ownerState:{disableUnderline:l}}},C=p??u?En(p??u,_):_,k=(r=(i=y.root)!=null?i:c.Root)!=null?r:oB,E=(o=(s=y.input)!=null?s:c.Input)!=null?o:sB;return b(Hy,{slots:{root:k,input:E},slotProps:C,fullWidth:d,inputComponent:f,multiline:h,ref:n,type:S,...v,classes:m})});OI.muiName="Input";const MI=OI;function aB(e){return Ze("MuiInputAdornment",e)}const lB=et("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),Yw=lB;var Qw;const cB=(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${xe(n.position)}`],n.disablePointerEvents===!0&&t.disablePointerEvents,t[n.variant]]},uB=e=>{const{classes:t,disablePointerEvents:n,hiddenLabel:r,position:i,size:o,variant:s}=e,a={root:["root",n&&"disablePointerEvents",i&&`position${xe(i)}`,s,r&&"hiddenLabel",o&&`size${xe(o)}`]};return at(a,aB,t)},dB=fe("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:cB})(({theme:e,ownerState:t})=>({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active,...t.variant==="filled"&&{[`&.${Yw.positionStart}&:not(.${Yw.hiddenLabel})`]:{marginTop:16}},...t.position==="start"&&{marginRight:8},...t.position==="end"&&{marginLeft:8},...t.disablePointerEvents===!0&&{pointerEvents:"none"}})),fB=w.forwardRef(function(t,n){const r=lt({props:t,name:"MuiInputAdornment"}),{children:i,className:o,component:s="div",disablePointerEvents:a=!1,disableTypography:l=!1,position:c,variant:u,...d}=r,f=mo()||{};let h=u;u&&f.variant,f&&!h&&(h=f.variant);const p={...r,hiddenLabel:f.hiddenLabel,size:f.size,disablePointerEvents:a,position:c,variant:h},y=uB(p);return b(jf.Provider,{value:null,children:b(dB,{as:s,ownerState:p,className:be(y.root,o),ref:n,...d,children:typeof i=="string"&&!l?b(a7,{color:"text.secondary",children:i}):z(w.Fragment,{children:[c==="start"?Qw||(Qw=b("span",{className:"notranslate",children:"​"})):null,i]})})})}),hB=fB;function pB(e){return Ze("MuiInputLabel",e)}et("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const mB=e=>{const{classes:t,formControl:n,size:r,shrink:i,disableAnimation:o,variant:s,required:a}=e,c=at({root:["root",n&&"formControl",!o&&"animated",i&&"shrink",r==="small"&&"sizeSmall",s],asterisk:[a&&"asterisk"]},pB,t);return{...t,...c}},gB=fe(tB,{shouldForwardProp:e=>_i(e)||e==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${$a.asterisk}`]:t.asterisk},t.root,n.formControl&&t.formControl,n.size==="small"&&t.sizeSmall,n.shrink&&t.shrink,!n.disableAnimation&&t.animated,t[n.variant]]}})(({theme:e,ownerState:t})=>({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",...t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},...t.size==="small"&&{transform:"translate(0, 17px) scale(1)"},...t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},...!t.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},...t.variant==="filled"&&{zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)",...t.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},...t.shrink&&{userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)",...t.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"}}},...t.variant==="outlined"&&{zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)",...t.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},...t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}}})),vB=w.forwardRef(function(t,n){const r=lt({name:"MuiInputLabel",props:t}),{disableAnimation:i=!1,margin:o,shrink:s,variant:a,className:l,...c}=r,u=mo();let d=s;typeof d>"u"&&u&&(d=u.filled||u.focused||u.adornedStart);const f=js({props:r,muiFormControl:u,states:["size","variant","required"]}),h={...r,disableAnimation:i,formControl:u,shrink:d,size:f.size,variant:f.variant,required:f.required},p=mB(h);return b(gB,{"data-shrink":d,ownerState:h,ref:n,className:be(p.root,l),...c,classes:p})}),yB=vB,_B=w.createContext({}),wB=_B;function bB(e){return Ze("MuiList",e)}et("MuiList",["root","padding","dense","subheader"]);const SB=e=>{const{classes:t,disablePadding:n,dense:r,subheader:i}=e;return at({root:["root",!n&&"padding",r&&"dense",i&&"subheader"]},bB,t)},CB=fe("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>({listStyle:"none",margin:0,padding:0,position:"relative",...!e.disablePadding&&{paddingTop:8,paddingBottom:8},...e.subheader&&{paddingTop:0}})),EB=w.forwardRef(function(t,n){const r=lt({props:t,name:"MuiList"}),{children:i,className:o,component:s="ul",dense:a=!1,disablePadding:l=!1,subheader:c,...u}=r,d=w.useMemo(()=>({dense:a}),[a]),f={...r,component:s,dense:a,disablePadding:l},h=SB(f);return b(wB.Provider,{value:d,children:z(CB,{as:s,className:be(h.root,o),ref:n,ownerState:f,...u,children:[c,i]})})}),kB=EB;function tp(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function Xw(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function LI(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function oa(e,t,n,r,i,o){let s=!1,a=i(e,t,t?n:!1);for(;a;){if(a===e.firstChild){if(s)return!1;s=!0}const l=r?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!LI(a,o)||l)a=i(e,a,n);else return a.focus(),!0}return!1}const xB=w.forwardRef(function(t,n){const{actions:r,autoFocus:i=!1,autoFocusItem:o=!1,children:s,className:a,disabledItemsFocusable:l=!1,disableListWrap:c=!1,onKeyDown:u,variant:d="selectedMenu",...f}=t,h=w.useRef(null),p=w.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Ss(()=>{i&&h.current.focus()},[i]),w.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(g,_)=>{const C=!h.current.style.width;if(g.clientHeight<h.current.clientHeight&&C){const k=`${rI(cn(g))}px`;h.current.style[_.direction==="rtl"?"paddingLeft":"paddingRight"]=k,h.current.style.width=`calc(100% + ${k})`}return h.current}}),[]);const y=g=>{const _=h.current,C=g.key,k=cn(_).activeElement;if(C==="ArrowDown")g.preventDefault(),oa(_,k,c,l,tp);else if(C==="ArrowUp")g.preventDefault(),oa(_,k,c,l,Xw);else if(C==="Home")g.preventDefault(),oa(_,null,c,l,tp);else if(C==="End")g.preventDefault(),oa(_,null,c,l,Xw);else if(C.length===1){const E=p.current,T=C.toLowerCase(),A=performance.now();E.keys.length>0&&(A-E.lastTime>500?(E.keys=[],E.repeating=!0,E.previousKeyMatched=!0):E.repeating&&T!==E.keys[0]&&(E.repeating=!1)),E.lastTime=A,E.keys.push(T);const I=k&&!E.repeating&&LI(k,E);E.previousKeyMatched&&(I||oa(_,k,!1,l,tp,E))?g.preventDefault():E.previousKeyMatched=!1}u&&u(g)},S=tn(h,n);let v=-1;w.Children.forEach(s,(g,_)=>{w.isValidElement(g)&&(g.props.disabled||(d==="selectedMenu"&&g.props.selected||v===-1)&&(v=_),v===_&&(g.props.disabled||g.props.muiSkipListHighlight||g.type.muiSkipListHighlight)&&(v+=1,v>=s.length&&(v=-1)))});const m=w.Children.map(s,(g,_)=>{if(_===v){const C={};return o&&(C.autoFocus=!0),g.props.tabIndex===void 0&&d==="selectedMenu"&&(C.tabIndex=0),w.cloneElement(g,C)}return g});return b(kB,{role:"menu",ref:S,className:a,onKeyDown:y,tabIndex:i?0:-1,...f,children:m})}),IB=xB;function TB(e){return Ze("MuiPopover",e)}et("MuiPopover",["root","paper"]);function Jw(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Zw(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function eb(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function np(e){return typeof e=="function"?e():e}const RB=e=>{const{classes:t}=e;return at({root:["root"],paper:["paper"]},TB,t)},PB=fe(M7,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),AB=fe(RI,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),NB=w.forwardRef(function(t,n){const r=lt({props:t,name:"MuiPopover"}),{action:i,anchorEl:o,anchorOrigin:s={vertical:"top",horizontal:"left"},anchorPosition:a,anchorReference:l="anchorEl",children:c,className:u,container:d,elevation:f=8,marginThreshold:h=16,open:p,PaperProps:y={},transformOrigin:S={vertical:"top",horizontal:"left"},TransitionComponent:v=rB,transitionDuration:m="auto",TransitionProps:{onEntering:g,..._}={},...C}=r,k=w.useRef(),E=tn(k,y.ref),T={...r,anchorOrigin:s,anchorReference:l,elevation:f,marginThreshold:h,PaperProps:y,transformOrigin:S,TransitionComponent:v,transitionDuration:m,TransitionProps:_},A=RB(T),I=w.useCallback(()=>{if(l==="anchorPosition")return a;const M=np(o),P=(M&&M.nodeType===1?M:cn(k.current).body).getBoundingClientRect();return{top:P.top+Jw(P,s.vertical),left:P.left+Zw(P,s.horizontal)}},[o,s.horizontal,s.vertical,a,l]),L=w.useCallback(M=>({vertical:Jw(M,S.vertical),horizontal:Zw(M,S.horizontal)}),[S.horizontal,S.vertical]),q=w.useCallback(M=>{const J={width:M.offsetWidth,height:M.offsetHeight},P=L(J);if(l==="none")return{top:null,left:null,transformOrigin:eb(P)};const $=I();let O=$.top-P.vertical,H=$.left-P.horizontal;const x=O+J.height,ie=H+J.width,F=io(np(o)),pe=F.innerHeight-h,te=F.innerWidth-h;if(O<h){const oe=O-h;O-=oe,P.vertical+=oe}else if(x>pe){const oe=x-pe;O-=oe,P.vertical+=oe}if(H<h){const oe=H-h;H-=oe,P.horizontal+=oe}else if(ie>te){const oe=ie-te;H-=oe,P.horizontal+=oe}return{top:`${Math.round(O)}px`,left:`${Math.round(H)}px`,transformOrigin:eb(P)}},[o,l,I,L,h]),[V,D]=w.useState(p),N=w.useCallback(()=>{const M=k.current;if(!M)return;const J=q(M);J.top!==null&&(M.style.top=J.top),J.left!==null&&(M.style.left=J.left),M.style.transformOrigin=J.transformOrigin,D(!0)},[q]),X=(M,J)=>{g&&g(M,J),N()},se=()=>{D(!1)};w.useEffect(()=>{p&&N()}),w.useImperativeHandle(i,()=>p?{updatePosition:()=>{N()}}:null,[p,N]),w.useEffect(()=>{if(!p)return;const M=nI(()=>{N()}),J=io(o);return J.addEventListener("resize",M),()=>{M.clear(),J.removeEventListener("resize",M)}},[o,p,N]);let R=m;m==="auto"&&!v.muiSupportAuto&&(R=void 0);const W=d||(o?cn(np(o)).body:void 0);return b(PB,{BackdropProps:{invisible:!0},className:be(A.root,u),container:W,open:p,ref:n,ownerState:T,...C,children:b(v,{appear:!0,in:p,onEntering:X,onExited:se,timeout:R,..._,children:b(AB,{elevation:f,...y,ref:E,className:be(A.paper,y.className),...V?void 0:{style:{...y.style,opacity:0}},ownerState:T,children:c})})})}),OB=NB;function MB(e){return Ze("MuiMenu",e)}et("MuiMenu",["root","paper","list"]);const LB={vertical:"top",horizontal:"right"},DB={vertical:"top",horizontal:"left"},$B=e=>{const{classes:t}=e;return at({root:["root"],paper:["paper"],list:["list"]},MB,t)},FB=fe(OB,{shouldForwardProp:e=>_i(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),zB=fe(RI,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),UB=fe(IB,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),BB=w.forwardRef(function(t,n){const r=lt({props:t,name:"MuiMenu"}),{autoFocus:i=!0,children:o,disableAutoFocusItem:s=!1,MenuListProps:a={},onClose:l,open:c,PaperProps:u={},PopoverClasses:d,transitionDuration:f="auto",TransitionProps:{onEntering:h,...p}={},variant:y="selectedMenu",...S}=r,v=Fy(),m=v.direction==="rtl",g={...r,autoFocus:i,disableAutoFocusItem:s,MenuListProps:a,onEntering:h,PaperProps:u,transitionDuration:f,TransitionProps:p,variant:y},_=$B(g),C=i&&!s&&c,k=w.useRef(null),E=(I,L)=>{k.current&&k.current.adjustStyleForScrollbar(I,v),h&&h(I,L)},T=I=>{I.key==="Tab"&&(I.preventDefault(),l&&l(I,"tabKeyDown"))};let A=-1;return w.Children.map(o,(I,L)=>{w.isValidElement(I)&&(I.props.disabled||(y==="selectedMenu"&&I.props.selected||A===-1)&&(A=L))}),b(FB,{onClose:l,anchorOrigin:{vertical:"bottom",horizontal:m?"right":"left"},transformOrigin:m?LB:DB,PaperProps:{as:zB,...u,classes:{...u.classes,root:_.paper}},className:_.root,open:c,ref:n,transitionDuration:f,TransitionProps:{onEntering:E,...p},ownerState:g,...S,classes:d,children:b(UB,{onKeyDown:T,actions:k,autoFocus:i&&(A===-1||s),autoFocusItem:C,variant:y,...a,className:be(_.list,a.className),children:o})})}),jB=BB;function WB(e){return Ze("MuiNativeSelect",e)}const HB=et("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),Vy=HB,VB=e=>{const{classes:t,variant:n,disabled:r,multiple:i,open:o,error:s}=e,a={select:["select",n,r&&"disabled",i&&"multiple",s&&"error"],icon:["icon",`icon${xe(n)}`,o&&"iconOpen",r&&"disabled"]};return at(a,WB,t)},DI=({ownerState:e,theme:t})=>({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":{...t.vars?{backgroundColor:`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:t.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},borderRadius:0},"&::-ms-expand":{display:"none"},[`&.${Vy.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(t.vars||t).palette.background.paper},"&&&":{paddingRight:24,minWidth:16},...e.variant==="filled"&&{"&&&":{paddingRight:32}},...e.variant==="outlined"&&{borderRadius:(t.vars||t).shape.borderRadius,"&:focus":{borderRadius:(t.vars||t).shape.borderRadius},"&&&":{paddingRight:32}}}),qB=fe("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:_i,overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.select,t[n.variant],n.error&&t.error,{[`&.${Vy.multiple}`]:t.multiple}]}})(DI),$I=({ownerState:e,theme:t})=>({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(t.vars||t).palette.action.active,[`&.${Vy.disabled}`]:{color:(t.vars||t).palette.action.disabled},...e.open&&{transform:"rotate(180deg)"},...e.variant==="filled"&&{right:7},...e.variant==="outlined"&&{right:7}}),GB=fe("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${xe(n.variant)}`],n.open&&t.iconOpen]}})($I),KB=w.forwardRef(function(t,n){const{className:r,disabled:i,error:o,IconComponent:s,inputRef:a,variant:l="standard",...c}=t,u={...t,disabled:i,variant:l,error:o},d=VB(u);return z(w.Fragment,{children:[b(qB,{ownerState:u,className:be(d.select,r),disabled:i,ref:a||n,...c}),t.multiple?null:b(GB,{as:s,ownerState:u,className:d.icon})]})}),YB=KB;var tb;const QB=fe("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),XB=fe("legend")(({ownerState:e,theme:t})=>({float:"unset",width:"auto",overflow:"hidden",...!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},...e.withLabel&&{display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"},...e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})}}}));function JB(e){const{children:t,classes:n,className:r,label:i,notched:o,...s}=e,a=i!=null&&i!=="",l={...e,notched:o,withLabel:a};return b(QB,{"aria-hidden":!0,className:r,ownerState:l,...s,children:b(XB,{ownerState:l,children:a?b("span",{children:i}):tb||(tb=b("span",{className:"notranslate",children:"​"}))})})}const ZB=e=>{const{classes:t}=e,r=at({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},y7,t);return{...t,...r}},e9=fe(Vf,{shouldForwardProp:e=>_i(e)||e==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:Wf})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{position:"relative",borderRadius:(e.vars||e).shape.borderRadius,[`&:hover .${Mr.notchedOutline}`]:{borderColor:(e.vars||e).palette.text.primary},"@media (hover: none)":{[`&:hover .${Mr.notchedOutline}`]:{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:n}},[`&.${Mr.focused} .${Mr.notchedOutline}`]:{borderColor:(e.vars||e).palette[t.color].main,borderWidth:2},[`&.${Mr.error} .${Mr.notchedOutline}`]:{borderColor:(e.vars||e).palette.error.main},[`&.${Mr.disabled} .${Mr.notchedOutline}`]:{borderColor:(e.vars||e).palette.action.disabled},...t.startAdornment&&{paddingLeft:14},...t.endAdornment&&{paddingRight:14},...t.multiline&&{padding:"16.5px 14px",...t.size==="small"&&{padding:"8.5px 14px"}}}}),t9=fe(JB,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(({theme:e})=>{const t=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}}),n9=fe(qf,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:Hf})(({theme:e,ownerState:t})=>({padding:"16.5px 14px",...!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},...e.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},...t.size==="small"&&{padding:"8.5px 14px"},...t.multiline&&{padding:0},...t.startAdornment&&{paddingLeft:0},...t.endAdornment&&{paddingRight:0}})),FI=w.forwardRef(function(t,n){var r,i,o,s,a;const l=lt({props:t,name:"MuiOutlinedInput"}),{components:c={},fullWidth:u=!1,inputComponent:d="input",label:f,multiline:h=!1,notched:p,slots:y={},type:S="text",...v}=l,m=ZB(l),g=mo(),_=js({props:l,muiFormControl:g,states:["required"]}),C={...l,color:_.color||"primary",disabled:_.disabled,error:_.error,focused:_.focused,formControl:g,fullWidth:u,hiddenLabel:_.hiddenLabel,multiline:h,size:_.size,type:S},k=(r=(i=y.root)!=null?i:c.Root)!=null?r:e9,E=(o=(s=y.input)!=null?s:c.Input)!=null?o:n9;return b(Hy,{slots:{root:k,input:E},renderSuffix:T=>b(t9,{ownerState:C,className:m.notchedOutline,label:f!=null&&f!==""&&_.required?a||(a=z(w.Fragment,{children:[f," ","*"]})):f,notched:typeof p<"u"?p:!!(T.startAdornment||T.filled||T.focused)}),fullWidth:u,inputComponent:d,multiline:h,ref:n,type:S,...v,classes:{...m,notchedOutline:null}})});FI.muiName="Input";const zI=FI;function r9(e){return Ze("MuiSelect",e)}const i9=et("MuiSelect",["select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),sa=i9;var nb;const o9=fe("div",{name:"MuiSelect",slot:"Select",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`&.${sa.select}`]:t.select},{[`&.${sa.select}`]:t[n.variant]},{[`&.${sa.error}`]:t.error},{[`&.${sa.multiple}`]:t.multiple}]}})(DI,{[`&.${sa.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),s9=fe("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${xe(n.variant)}`],n.open&&t.iconOpen]}})($I),a9=fe("input",{shouldForwardProp:e=>Oz(e)&&e!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(e,t)=>t.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function rb(e,t){return typeof t=="object"&&t!==null?e===t:String(e)===String(t)}function l9(e){return e==null||typeof e=="string"&&!e.trim()}const c9=e=>{const{classes:t,variant:n,disabled:r,multiple:i,open:o,error:s}=e,a={select:["select",n,r&&"disabled",i&&"multiple",s&&"error"],icon:["icon",`icon${xe(n)}`,o&&"iconOpen",r&&"disabled"],nativeInput:["nativeInput"]};return at(a,r9,t)},u9=w.forwardRef(function(t,n){const{"aria-describedby":r,"aria-label":i,autoFocus:o,autoWidth:s,children:a,className:l,defaultOpen:c,defaultValue:u,disabled:d,displayEmpty:f,error:h=!1,IconComponent:p,inputRef:y,labelId:S,MenuProps:v={},multiple:m,name:g,onBlur:_,onChange:C,onClose:k,onFocus:E,onOpen:T,open:A,readOnly:I,renderValue:L,SelectDisplayProps:q={},tabIndex:V,type:D,value:N,variant:X="standard",...se}=t,[R,W]=dw({controlled:N,default:u,name:"Select"}),[M,J]=dw({controlled:A,default:c,name:"Select"}),P=w.useRef(null),$=w.useRef(null),[O,H]=w.useState(null),{current:x}=w.useRef(A!=null),[ie,F]=w.useState(),pe=tn(n,y),te=w.useCallback(ne=>{$.current=ne,ne&&H(ne)},[]),oe=O==null?void 0:O.parentNode;w.useImperativeHandle(pe,()=>({focus:()=>{$.current.focus()},node:P.current,value:R}),[R]),w.useEffect(()=>{c&&M&&O&&!x&&(F(s?null:oe.clientWidth),$.current.focus())},[O,s]),w.useEffect(()=>{o&&$.current.focus()},[o]),w.useEffect(()=>{if(!S)return;const ne=cn($.current).getElementById(S);if(ne){const ae=()=>{getSelection().isCollapsed&&$.current.focus()};return ne.addEventListener("click",ae),()=>{ne.removeEventListener("click",ae)}}},[S]);const Z=(ne,ae)=>{ne?T&&T(ae):k&&k(ae),x||(F(s?null:oe.clientWidth),J(ne))},Ae=ne=>{ne.button===0&&(ne.preventDefault(),$.current.focus(),Z(!0,ne))},Ve=ne=>{Z(!1,ne)},Y=w.Children.toArray(a),_e=ne=>{const ae=Y.find(Ye=>Ye.props.value===ne.target.value);ae!==void 0&&(W(ae.props.value),C&&C(ne,ae))},re=ne=>ae=>{let Ye;if(ae.currentTarget.hasAttribute("tabindex")){if(m){Ye=Array.isArray(R)?R.slice():[];const jn=R.indexOf(ne.props.value);jn===-1?Ye.push(ne.props.value):Ye.splice(jn,1)}else Ye=ne.props.value;if(ne.props.onClick&&ne.props.onClick(ae),R!==Ye&&(W(Ye),C)){const jn=ae.nativeEvent||ae,Gy=new jn.constructor(jn.type,jn);Object.defineProperty(Gy,"target",{writable:!0,value:{value:Ye,name:g}}),C(Gy,ne)}m||Z(!1,ae)}},ze=ne=>{I||[" ","ArrowUp","ArrowDown","Enter"].indexOf(ne.key)!==-1&&(ne.preventDefault(),Z(!0,ne))},gt=O!==null&&M,Ke=ne=>{!gt&&_&&(Object.defineProperty(ne,"target",{writable:!0,value:{value:R,name:g}}),_(ne))};delete se["aria-invalid"];let Ct,Wt;const ut=[];let ee=!1;(wd({value:R})||f)&&(L?Ct=L(R):ee=!0);const me=Y.map(ne=>{if(!w.isValidElement(ne))return null;let ae;if(m){if(!Array.isArray(R))throw new Error(pi(2));ae=R.some(Ye=>rb(Ye,ne.props.value)),ae&&ee&&ut.push(ne.props.children)}else ae=rb(R,ne.props.value),ae&&ee&&(Wt=ne.props.children);return w.cloneElement(ne,{"aria-selected":ae?"true":"false",onClick:re(ne),onKeyUp:Ye=>{Ye.key===" "&&Ye.preventDefault(),ne.props.onKeyUp&&ne.props.onKeyUp(Ye)},role:"option",selected:ae,value:void 0,"data-value":ne.props.value})});ee&&(m?ut.length===0?Ct=null:Ct=ut.reduce((ne,ae,Ye)=>(ne.push(ae),Ye<ut.length-1&&ne.push(", "),ne),[]):Ct=Wt);let Ht=ie;!s&&x&&O&&(Ht=oe.clientWidth);let Vt;typeof V<"u"?Vt=V:Vt=d?null:0;const Et=q.id||(g?`mui-component-select-${g}`:void 0),ir={...t,variant:X,value:R,open:gt,error:h},ce=c9(ir);return z(w.Fragment,{children:[b(o9,{ref:te,tabIndex:Vt,role:"button","aria-disabled":d?"true":void 0,"aria-expanded":gt?"true":"false","aria-haspopup":"listbox","aria-label":i,"aria-labelledby":[S,Et].filter(Boolean).join(" ")||void 0,"aria-describedby":r,onKeyDown:ze,onMouseDown:d||I?null:Ae,onBlur:Ke,onFocus:E,...q,ownerState:ir,className:be(q.className,ce.select,l),id:Et,children:l9(Ct)?nb||(nb=b("span",{className:"notranslate",children:"​"})):Ct}),b(a9,{"aria-invalid":h,value:Array.isArray(R)?R.join(","):R,name:g,ref:P,"aria-hidden":!0,onChange:_e,tabIndex:-1,disabled:d,className:ce.nativeInput,autoFocus:o,ownerState:ir,...se}),b(s9,{as:p,className:ce.icon,ownerState:ir}),b(jB,{id:`menu-${g||""}`,anchorEl:oe,open:gt,onClose:Ve,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},...v,MenuListProps:{"aria-labelledby":S,role:"listbox",disableListWrap:!0,...v.MenuListProps},PaperProps:{...v.PaperProps,style:{minWidth:Ht,...v.PaperProps!=null?v.PaperProps.style:null}},children:me})]})}),d9=u9,f9=e=>{const{classes:t}=e;return t},qy={name:"MuiSelect",overridesResolver:(e,t)=>t.root,shouldForwardProp:e=>_i(e)&&e!=="variant",slot:"Root"},h9=fe(MI,qy)(""),p9=fe(zI,qy)(""),m9=fe(AI,qy)(""),UI=w.forwardRef(function(t,n){const r=lt({name:"MuiSelect",props:t}),{autoWidth:i=!1,children:o,classes:s={},className:a,defaultOpen:l=!1,displayEmpty:c=!1,IconComponent:u=S7,id:d,input:f,inputProps:h,label:p,labelId:y,MenuProps:S,multiple:v=!1,native:m=!1,onClose:g,onOpen:_,open:C,renderValue:k,SelectDisplayProps:E,variant:T="outlined",...A}=r,I=m?YB:d9,L=mo(),q=js({props:r,muiFormControl:L,states:["variant","error"]}),V=q.variant||T,D={...r,variant:V,classes:s},N=f9(D),X=f||{standard:b(h9,{ownerState:D}),outlined:b(p9,{label:p,ownerState:D}),filled:b(m9,{ownerState:D})}[V],se=tn(n,X.ref);return b(w.Fragment,{children:w.cloneElement(X,{inputComponent:I,inputProps:{children:o,error:q.error,IconComponent:u,variant:V,type:void 0,multiple:v,...m?{id:d}:{autoWidth:i,defaultOpen:l,displayEmpty:c,labelId:y,MenuProps:S,onClose:g,onOpen:_,open:C,renderValue:k,SelectDisplayProps:{id:d,...E}},...h,classes:h?En(N,h.classes):N,...f?f.props.inputProps:{}},...v&&m&&V==="outlined"?{notched:!0}:{},ref:se,className:be(X.props.className,a),...!f&&{variant:V},...A})})});UI.muiName="Select";const g9=UI;function v9(e){return Ze("MuiTextField",e)}et("MuiTextField",["root"]);const y9={standard:MI,filled:AI,outlined:zI},_9=e=>{const{classes:t}=e;return at({root:["root"]},v9,t)},w9=fe(j7,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),b9=w.forwardRef(function(t,n){const r=lt({props:t,name:"MuiTextField"}),{autoComplete:i,autoFocus:o=!1,children:s,className:a,color:l="primary",defaultValue:c,disabled:u=!1,error:d=!1,FormHelperTextProps:f,fullWidth:h=!1,helperText:p,id:y,InputLabelProps:S,inputProps:v,InputProps:m,inputRef:g,label:_,maxRows:C,minRows:k,multiline:E=!1,name:T,onBlur:A,onChange:I,onClick:L,onFocus:q,placeholder:V,required:D=!1,rows:N,select:X=!1,SelectProps:se,type:R,value:W,variant:M="outlined",...J}=r,P={...r,autoFocus:o,color:l,disabled:u,error:d,fullWidth:h,multiline:E,required:D,select:X,variant:M},$=_9(P),O={};M==="outlined"&&(S&&typeof S.shrink<"u"&&(O.notched=S.shrink),O.label=_),X&&((!se||!se.native)&&(O.id=void 0),O["aria-describedby"]=void 0);const H=q6(y),x=p&&H?`${H}-helper-text`:void 0,ie=_&&H?`${H}-label`:void 0,F=y9[M],pe=b(F,{"aria-describedby":x,autoComplete:i,autoFocus:o,defaultValue:c,fullWidth:h,multiline:E,name:T,rows:N,maxRows:C,minRows:k,type:R,value:W,id:H,inputRef:g,onBlur:A,onChange:I,onFocus:q,onClick:L,placeholder:V,inputProps:v,...O,...m});return z(w9,{className:be($.root,a),disabled:u,error:d,fullWidth:h,ref:n,required:D,color:l,variant:M,ownerState:P,...J,children:[_!=null&&_!==""&&b(yB,{htmlFor:H,id:ie,...S,children:_}),X?b(g9,{"aria-describedby":x,id:H,labelId:ie,value:W,input:pe,...se,children:s}):pe,p&&b(K7,{id:x,...f,children:p})]})}),S9=b9,C9=zy(b("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility"),E9=zy(b("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff"),ib=j(S9)`
  && {
    ${e=>e.login?"margin-bottom: 20px; width: 80%;":"width: 80%; padding-bottom: 20px; padding-top: 10px;"}
  }
`,BI=({login:e,email:t,changeEmail:n,password:r,changePassword:i,showPassword:o,changeShowPassword:s})=>z($i,{children:[b(ib,{login:e,required:!0,id:e?"standard-basic":"outlined-basic",label:"Email",variant:e?"standard":"outlined",value:t,onChange:n}),b(ib,{login:e,required:!0,id:e?"standard-basic":"outlined-basic",label:"Password",variant:e?"standard":"outlined",value:r,onChange:i,type:o?"text":"password",InputProps:{endAdornment:b(hB,{position:"end",children:b(e7,{"aria-label":"toggle password visibility",onClick:s,children:o?b(C9,{}):b(E9,{})})})}})]}),k9=b("p",{children:"This is why we require sign in."}),jI=b("p",{children:"Terms of Service"}),WI=b("p",{children:"Privacy Policy"}),x9=b("p",{children:"This is why we require zip code."}),I9=b("p",{children:"This is why we ask for your birth sex."}),T9=j.p`
  text-align: center;
  font-size: 30px;
  font-weight: 300;
  padding-bottom: 10px;
`,R9=j.div`
  width: 50%;
  margin-top: 50px;
  text-align: center;

  p {
    margin-bottom: 5px;
    font-size: smaller;
  }

  a {
    text-transform: uppercase;
    font-weight: 300;
    cursor: pointer;
    :hover {
      font-weight: 400;
    }
  }
`,P9=()=>{const{setAssessmentState:e}=w.useContext(Fe),{setIsLogedIn:t}=w.useContext(Fe),{prevPage:n,setPrevPage:r}=w.useContext(Fe),[i,o]=w.useState(""),[s,a]=w.useState(""),[l,c]=w.useState(!1),[u,d]=w.useState(!1),[f,h]=w.useState(""),[p,y]=w.useState(""),[S,v]=w.useState(!1);return z(yi,{image:"../../results.jpg",children:[b(po,{}),z(lo,{children:[z(BC,{login:1,children:[b(eI,{showAlert:S,setShowAlert:v,title:p,alert:f}),b(T9,{children:"Login"}),b(BI,{login:1,email:i,changeEmail:g=>o(g.target.value),password:s,changePassword:g=>a(g.target.value),showPassword:l,changeShowPassword:()=>c(!l)}),b(Zx,{login:1,onClick:async g=>{g.preventDefault();try{const _=await wM(_x,i,s);t(!0),n==="profile"?(e("profile"),r("")):e("zipcode")}catch{v(!0),h("Please enter a correct email and password."),y("Error");return}},children:"Login"}),b(iv,{onClick:()=>d(!0),children:"Why do we require this?"}),b(hi,{showModal:u,setShowModal:d,text:k9}),z(R9,{children:[b("p",{children:"Or Sign Up Using"}),b("a",{onClick:()=>{e("signup")},children:"Sign up"})]})]}),b(UC,{children:b(Oa,{onClick:()=>{e("home")},children:"Back"})})]})]})},A9=j.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: 300;
  color: black;

  :hover {
    color: black;
    font-weight: 400;
  }
`,N9=j.p`
  text-align: center;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 0;
`,O9=j.p`
  padding-bottom: 20px;
`,M9=j.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  font-size: 12px;

  input[type='checkbox'] {
    margin-right: 10px;
    margin-left: 5px;
    transform: scale(1.2);
  }
`,L9=j.p`
  width: 80%;
  padding-top: 20px;
  padding-bottom: 15px;
`,ob=j.a`
  color: black;
  text-decoration: underline;

  :hover {
    cursor: pointer;
    color: black;
  }
`,D9=()=>{const{setAssessmentState:e}=w.useContext(Fe),[t,n]=w.useState(""),[r,i]=w.useState(""),[o,s]=w.useState(!1),[a,l]=w.useState(!1),[c,u]=w.useState(!1),[d,f]=w.useState(""),[h,p]=w.useState(""),[y,S]=w.useState(!1);return z(yi,{image:"../../results.jpg",children:[b(po,{}),b(lo,{children:z(BC,{login:0,children:[b(N9,{children:"Sign Up For ConnectedSpine"}),z(O9,{children:["Create a free account or"," ",b(A9,{onClick:()=>{e("login")},children:"Log In"})]}),b(BI,{login:0,email:t,changeEmail:m=>n(m.target.value),password:r,changePassword:m=>i(m.target.value),showPassword:o,changeShowPassword:()=>s(!o)}),z(M9,{children:[b("input",{type:"checkbox"}),b("span",{children:"I don't want to recieve emails about ConnectedSpine and related product and feature updates, and promotions from ConnectedSpine."})]}),z(L9,{children:["By creating an account, you agree to our"," ",b(ob,{onClick:()=>l(!0),children:"Terms"})," and have read and acknowledged the"," ",b(ob,{onClick:()=>u(!0),children:"Privacy Statement"}),"."]}),b(hi,{showModal:a,setShowModal:l,text:jI}),b(hi,{showModal:c,setShowModal:u,text:WI}),b(Zx,{login:0,onClick:async m=>{m.preventDefault();try{const g=await _M(_x,t,r);e("zipcode")}catch(g){switch(g.code){case"auth/email-already-in-use":S(!0),f("Email is registered to another user. If this is your email, please log in."),p("Invalid Email");break;case"auth/invalid-email":S(!0),f("Email is invalid. Please sign up with a valid email."),p("Invalid Email");break;case"auth/operation-not-allowed":S(!0),f("Please try again."),p("Error");break;case"auth/weak-password":S(!0),f("Password is not strong enough. Add additional characters."),p("Invalid Password");break;default:S(!0),f("Please enter a valid email and password."),p("Error");break}}},children:"Sign Up"}),b(eI,{showAlert:y,setShowAlert:S,title:h,alert:d})]})})]})},$9=j.div`
  max-width: 600px;

  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 55px;
    line-height: 49px;
    letter-spacing: 0px;
    padding-bottom: 10px;
  }

  p {
    font-weight: 200;
    line-height: 22px;
    max-width: 500px;
  }
`,F9=j.div`
  margin-top: 13vh;

  button {
    margin-top: 15px;
    text-align: center;
    text-transform: uppercase;
    width: 235px;
    height: 48px;
    background: ${tc};
    border: ${Cy};
    box-shadow: ${ec};
    border-radius: 4px;
    color: ${Cl};
  }

  p {
    margin-bottom: 0;
  }
`,z9=j.p`
  font-weight: 100;
`,U9=()=>{const{setAssessmentState:e}=w.useContext(Fe),{isLogedIn:t}=w.useContext(Fe);return z(yi,{image:"../../homepage.jpg",children:[b(po,{}),z(lo,{children:[z($9,{children:[b("h1",{children:"We connect you to the care you need."}),b("p",{children:"ConnectedSpine uses the knowledge of spine care specialists to guide you to the right providers."})]}),z(F9,{children:[b(z9,{children:"Experiencing pain or discomfort in your back or neck?"}),b("p",{children:b(Qo,{children:"Take our 5 min assessment."})}),b("button",{onClick:()=>{e(t?"zipcode":"login")},children:"Start Assessment"})]})]})]})},B9=({user:e})=>{const[t,n]=w.useState({question1:"",question2:"",question3:0,question4:"",question5:0}),[r,i]=w.useState(!1),[o,s]=vl(`/users/${e.uid}`),a=u=>{u.preventDefault(),o({feedback:t}),i(!0)},l=()=>{n({question1:"",question2:"",question3:0,question4:"",question5:0}),i(!1)},c=u=>{const{name:d,value:f,type:h}=u.target,p=h==="number"?parseInt(f):f;n(y=>({...y,[d]:p}))};return b("div",{style:{maxWidth:"400px",margin:"0 auto"},children:r?z("div",{children:[b("h2",{children:"Thank you for your feedback!"}),b("p",{children:"We appreciate your input."}),b("button",{style:{display:"block",margin:"0 auto"},onClick:l,children:"Submit Another Feedback"})]}):z("form",{onSubmit:a,style:{backgroundColor:"#f7f7f7",padding:"20px",borderRadius:"5px"},children:[b("h2",{style:{textAlign:"center"},children:"Feedback Form"}),z("label",{style:{display:"block",marginBottom:"10px"},children:["Did you use the advice of the app? Please answer yes or no.",z("select",{name:"question1",value:t.question1,onChange:c,required:!0,style:{width:"100%",padding:"5px",marginTop:"5px"},children:[b("option",{value:"",children:"Select an option"}),b("option",{value:"Yes",children:"Yes"}),b("option",{value:"No",children:"No"})]})]}),z("label",{style:{display:"block",marginBottom:"10px"},children:["What provider did you see?",z("select",{name:"question2",value:t.question2,onChange:c,required:!0,style:{width:"100%",padding:"5px",marginTop:"5px"},children:[b("option",{value:"",children:"Select an option"}),b("option",{value:"Primary care physician",children:"Primary care physician"}),b("option",{value:"Neurosurgeon",children:"Neurosurgeon"}),b("option",{value:"ER/Urgent Care",children:"ER/Urgent Care"}),b("option",{value:"Neurologist",children:"Neurologist"}),b("option",{value:"Interventional pain physician",children:"Interventional pain physician"})]})]}),z("label",{style:{display:"block",marginBottom:"10px"},children:["How useful was this provider on a scale from 0-10?",z("div",{style:{display:"flex",alignItems:"center"},children:[b("span",{style:{marginRight:"10px"},children:"0"}),b("input",{type:"range",name:"question3",min:"0",max:"10",value:t.question3,onChange:c,required:!0,style:{flex:"1",marginTop:"5px"}}),b("span",{style:{marginLeft:"10px"},children:"10"})]})]}),z("label",{style:{display:"block",marginBottom:"10px"},children:["Would you recommend this app to a colleague? Please answer yes or no.",z("select",{name:"question4",value:t.question4,onChange:c,required:!0,style:{width:"100%",padding:"5px",marginTop:"5px"},children:[b("option",{value:"",children:"Select an option"}),b("option",{value:"Yes",children:"Yes"}),b("option",{value:"No",children:"No"})]})]}),z("label",{style:{display:"block",marginBottom:"10px"},children:["How much relief have you gotten on a scale from 0 - 100%?",z("div",{style:{display:"flex",alignItems:"center"},children:[b("span",{style:{marginRight:"10px"},children:"0%"}),b("input",{type:"range",name:"question5",min:"0",max:"100",value:t.question5,onChange:c,required:!0,style:{flex:"1",marginTop:"5px"}}),b("span",{style:{marginLeft:"10px"},children:"100%"})]})]}),b("button",{style:{display:"block",margin:"0 auto",padding:"10px 20px",backgroundColor:"#4caf50",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer"},type:"submit",children:"Submit Feedback"})]})})},j9=j.h3`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-transform: uppercase;
`,W9=j.h2`
  font-size: 20px;
  font-weight: 100;
  line-height: 24px;
  text-transform: uppercase;
`,H9=j.h1`
  margin-top: 20px;
  max-width: 80%;
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 0px;
`,V9=()=>{w.useContext(Fe);const e=Fs().currentUser;return z(yi,{image:"../../results.jpg",children:[b(po,{}),b(lo,{children:z($C,{children:[z(zC,{children:[b(j9,{children:"Profile Page"}),b(W9,{children:e.email}),b(H9,{children:"Provide feedback on ConnectedSpine's process"}),b("br",{})]}),b(FC,{children:b(B9,{user:e})})]})})]})},q9="#979797",G9=j.h1`
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  max-width: 50%;
`,K9=j.form`
  margin-top: 30px;
  label {
    font-weight: 400;
  }
`,Y9=j.div`
  margin: 10px 0;
  input {
    width: 227px;
    height: 45px;
    margin-right: 20px;
    padding-left: 10px;
    border: 1px solid ${q9};
    border-radius: 4px;

    ::placeholder {
      font-style: italic;
    }
  }
`;function Q9(e){return/^\d{5}(-\d{4})?$/.test(e)}const X9=()=>{const{setAssessmentState:e}=w.useContext(Fe),{answers:t,setAnswers:n}=w.useContext(Fe),{isValid:r,setIsValid:i}=w.useContext(Fe),[o,s]=w.useState(""),[a,l]=w.useState(!1);if(!Fs().currentUser)return b("div",{children:"Error"});const u=f=>{const h=f.target.value;s(h),i(Q9(h))},d=()=>{if(r){const f={...t,zipcode:o};n(f),e("questions"),i(!1)}};return w.useEffect(()=>{if(t.zipcode){const f=t.zipcode;s(f),i(!0)}},[]),z(yi,{image:"../../questions.png",children:[b(po,{}),z(lo,{children:[b(G9,{children:"Hi there! Before we begin, please enter your zipcode."}),z(K9,{children:[b("label",{children:"Zipcode"}),z(Y9,{children:[b("input",{type:"text",placeholder:"Must be 5 digits",value:o,onChange:u}),b(Vm,{onClick:d,isValid:r,disabled:!r,title:r?void 0:"Please enter a valid zip code",children:"Next"}),r?b($i,{}):b(Zc,{children:"* Please enter a valid zip code"})]})]}),b(iv,{onClick:()=>l(!0),children:"Why do we ask this?"}),b(hi,{showModal:a,setShowModal:l,text:x9})]})]})},J9=j.div`
  padding: 0 30px;
`,Z9=j.div`
  padding: 25px 0;
  line-height: 1.1em;

  p {
    margin-bottom: 20px;
  }
`,ej=j.span`
  display: flex;
  align-items: center;

  input[type='checkbox'] {
    margin-right: 10px;
    transform: scale(1.5);
  }
`,sb=j.a`
  text-decoration-line: underline;
  cursor: pointer;
  color: black;
`,tj=()=>{const{isValid:e,setIsValid:t}=w.useContext(Fe),[n,r]=w.useState(!1),[i,o]=w.useState(!1),[s,a]=w.useState(!1);function l(){t(!e),r(!0)}return z(J9,{children:[z("p",{children:["Before answering our questionnaire, please read the"," ",b(Qo,{children:"Terms of Service"}),"."]}),z(Z9,{children:[b("p",{children:"Remember that: "}),b("p",{children:"The results of this assessmenet are not a diagnosis. The assessment is for informational purposes and is not a qualified medical opinion."}),b("p",{children:"Do not use in emergencies. In case of health emergency, call your local emergency number immediately."}),b("p",{children:"Your data is safe. Information that you provide is anonymous and not shared with anyone."})]}),z(ej,{children:[b("label",{children:b("input",{type:"checkbox",checked:e,onChange:l})}),z("span",{children:["I have read and accept the"," ",b(sb,{onClick:d=>{d.preventDefault(),o(!0)},children:b(Qo,{children:"Terms of Service"})}),b(hi,{showModal:i,setShowModal:o,text:jI})," and ",b(sb,{onClick:d=>{d.preventDefault(),a(!0)},children:b(Qo,{children:"Privacy Policy"})}),b(hi,{showModal:s,setShowModal:a,text:WI}),"."]})]}),b("br",{})]})};var HI={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bd=je.createContext&&je.createContext(HI),oi=globalThis&&globalThis.__assign||function(){return oi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},oi.apply(this,arguments)},nj=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function VI(e){return e&&e.map(function(t,n){return je.createElement(t.tag,oi({key:n},t.attr),VI(t.child))})}function qI(e){return function(t){return je.createElement(rj,oi({attr:oi({},e.attr)},t),VI(e.child))}}function rj(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=nj(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),je.createElement("svg",oi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:oi(oi({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&je.createElement("title",null,o),e.children)};return bd!==void 0?je.createElement(bd.Consumer,null,function(n){return t(n)}):t(HI)}function ij(e){return qI({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function oj(e){return qI({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(e)}const sj="#1d2556",ab="#8992CD",aj=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,lb=j.button`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 60%;
    font-weight: 300;
  }
  margin: 0 10px;
  width: 167px;
  height: 184px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1.25px;
  font-size: 16px;
  line-height: 16px;
  color: ${sj};
  border: none;
  ${e=>e.selected&&`
      border: 1px solid ${Jx};
    `}
  background-color: ${e=>e.selected?dd:tc};
`,lj=()=>{const{isValid:e,setIsValid:t}=w.useContext(Fe),{selectedOptions:n,setSelectedOptions:r}=w.useContext(Fe),{answers:i,setAnswers:o}=w.useContext(Fe),[s,a]=w.useState(""),l=c=>{a(c),r(c)};return w.useEffect(()=>{i.identity&&(s&&s!=i.identity?r(s):r(i.identity)),t(!!(s||n))},[s,t]),z(aj,{children:[b(bd.Provider,{value:{color:`${ab}`,size:"50px"},children:b(lb,{selected:n==="myself",onClick:()=>l("myself"),children:z("div",{children:[b(ij,{}),"Myself"]})})}),b(bd.Provider,{value:{color:`${ab}`,size:"70px"},children:b(lb,{selected:n==="others",onClick:()=>l("others"),children:z("div",{children:[b(oj,{}),"Someone Else"]})})})]})},cj=j.div`
  width: 70%;
  margin: -50px auto 0;
`,uj=j.div`
  margin-bottom: 15px;
`,dj=j.div`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
  margin-bottom: 20px;
`,zc=j.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 500;
`,fj=()=>{const{isValid:e,setIsValid:t}=w.useContext(Fe),{selectedOptions:n,setSelectedOptions:r}=w.useContext(Fe),{answers:i,setAnswers:o}=w.useContext(Fe),[s,a]=w.useState(!1),[l,c]=w.useState(""),[u,d]=w.useState(""),[f,h]=w.useState(""),[p,y]=w.useState(""),S=_=>{c(_)},v=_=>{d(_.target.value)},m=_=>{h(_.target.value)},g=_=>{y(_.target.value)};return w.useEffect(()=>{if(l&&u&&f&&p?(r({sex:l,height:u,weight:f,age:p}),t(!0)):t(!1),i["basic-info"]){const _=i["basic-info"];l&&l!=_.sex?c(l):c(_.sex),u&&u!=_.height?d(u):d(_.height),f&&f!=_.weight?h(f):h(_.weight),p&p!=_.age?y(p):y(_.age)}},[l,u,f,p,t]),z(cj,{children:[z(uj,{children:[b(zc,{children:"Sex (Assigned at birth)"}),z("div",{children:[b(fd,{selected:l==="male",onClick:()=>S("male"),children:"Male"}),b(fd,{selected:l==="female",onClick:()=>S("female"),children:"Female"})]})]}),b(iv,{onClick:()=>a(!0),children:"Why do we ask this?"}),b(hi,{showModal:s,setShowModal:a,text:I9}),z(dj,{children:[z("div",{children:[b(zc,{children:"Height"}),b(Kh,{type:"text",placeholder:"ft in",value:u,onChange:v}),e?b($i,{}):b(Zc,{children:"* Please enter a valid height"})]}),z("div",{children:[b(zc,{children:"Weight"}),b(Kh,{type:"text",placeholder:"lbs",value:f,onChange:m}),Number.isInteger(parseInt(f))&&parseInt(f)>0?b($i,{}):b(Zc,{children:"* Please enter a valid weight"})]})]}),z("div",{children:[b(zc,{children:"Age"}),z("div",{children:[b(Kh,{type:"text",placeholder:"years",value:p,onChange:g}),Number.isInteger(parseInt(p))&&parseInt(p)>0?b($i,{}):b(Zc,{children:"* Please enter a valid age"})]})]})]})},le=[{section:1,section_name:"Basic Info",prompt:"Terms of Service",type:null,qId:"terms",index:0},{section:1,section_name:"Basic Info",prompt:"Who are you answering this questionaire for?",type:null,qId:"identity",index:1},{section:1,section_name:"Basic Info",prompt:"Let's get some basic info about you first.",type:null,qId:"basic-info",index:2},{section:1,section_name:"Basic Info",prompt:"What brings you here today?",options:["A new pain or sensation in the back and/or neck","Back and/or neck pain that has been chronic or occuring for some time","A potential emergency or urgent care visit"],type:"Multiselect",qId:"00",index:3},{section:1,section_name:"Basic Info",prompt:"Do any of the following apply?",options:["I have fallen recently","I lifted something heavy (moving, picking up children, weightligting, etc.","I was injured or hurt myself (in a sports-related activity or otherwise)","I was involved in motor vehicle accident","None of the above"],type:"Select",qId:"01",index:4},{section:1,section_name:"Basic Info",prompt:"Did your symptoms start after the incident?",options:["Yes","No","Not sure"],type:"Select",qId:"02",index:5},{section:2,section_name:"Symptoms",prompt:"How long have you been experiencing these symptoms?",options:["A few minutes","A few hours","A few days","Weeks","Month +"],type:"Select",qId:"03",index:6},{section:2,section_name:"Symptoms",prompt:"Choose the area(s) where you are feeling pain and/or discomfort.",options:["Neck","Upper Back","Middle Back","Lower Back"],type:"Multibutton",qId:"04",index:7},{section:2,section_name:"Symptoms",prompt:"Where are you feeling pain/discomfort in your lower back?",options:["ON THE LEFT","IN THE MIDDLE","ON THE RIGHT"],type:"Multibutton",qId:"05",index:8},{section:2,section_name:"Symptoms",prompt:"How would you describe the sensation you are feeling?",options:["SHARP PAIN","SHOOTING PAIN","NUMBNESS AND/OR TINGLING","DULL, ACHING PAIN","TIGHTNESS AND LIMITED MOVEMENT"],type:"Multibutton",qId:"06",index:9},{section:2,section_name:"Symptoms",prompt:"How do the symptoms change?",sub_questions:["Choose all that apply. The symptoms gets worse when I...","Choose all that apply. I get some relief from the symptoms when I..."],options:["STAND UP","SIT DOWN","LEAN FORWARD","LEAN BACK","AM MOVING","AM AT REST","NONE OF THE ABOVE"],type:"Multibutton",qId:"07",index:10},{section:2,section_name:"Symptoms",prompt:"How difficult have the symptoms made your day-to-day activites?",options:["Not at all difficult","Somewhat difficult","Very difficult","Extremely difficult"],type:"Select",qId:"08",index:11},{section:2,section_name:"Symptoms",prompt:"Regarding the shooting pain",sub_questions:["In which leg(s) do you feel it?"],options:["RIGHT","LEFT","BOTH"],type:"Selectbutton",qId:"06-SHOOTING-01",index:12},{section:2,section_name:"Symptoms",prompt:"Regarding the shooting pain",sub_questions:["Does it travel to your feet?","Is the pain there even when you are resting?"],options:["YES","NO"],type:"Selectbutton",qId:"06-SHOOTING-02",index:13},{section:2,section_name:"Symptoms",prompt:"Regarding the numbness and/or tingling",sub_questions:["In which leg(s) do you feel it?"],options:["RIGHT","LEFT","BOTH"],type:"Selectbutton",qId:"06-NUMBNESS-01",index:14},{section:2,section_name:"Symptoms",prompt:"Regarding the numbness and/or tingling",sub_questions:["Does it involve your feet?","If the numbness and/or tingling involves your feet, does it travel up from your feet?","If the numbness and/or tingling involves your feet, does it radiate down from your back?","Do you have similar symptoms in your hands?","Do you feel you have problems with your balance?","Have you ever been diagnosed with Diabetes?","Have you ever been diagnosed with a Vitamin B12 deficiency?"],options:["YES","NO"],type:"Selectbutton",qId:"06-NUMBNESS-02",index:15},{section:2,section_name:"Symptoms",prompt:"Regarding the tightness",sub_questions:["Are the symptoms worse in the morning when you first wake up?","If symptoms are worse in the morning, do the symptoms get better over the course of the day?"],options:["YES","NO"],type:"Selectbutton",qId:"06-TIGHTNESS-01",index:16},{section:2,section_name:"Symptoms",prompt:"Have you taken medication for your symptoms?",options:["Yes, I have taken over-the-counter relievers or anti-inflammatory medication(Advil, Tylenol, Aspirin,etc.)","Yes, I have taken prescription pain relievers","Yes, I have taken muscle relaxers","No","Not sure"],type:"Select",qId:"09",index:17},{section:2,section_name:"Symptoms",prompt:"Have you had similar pain before?",options:["YES","NO","NOT SURE"],type:"Selectbutton",qId:"10",index:18},{section:2,section_name:"Symptoms",prompt:"Are you experiencing weakness in your arms and legs?",options:["Yes, I am experiencing weakness on one sife of my body","Yes, I am experiencing weakness on both sides of my body","No","Not sure"],type:"Select",qId:"11",index:19},{section:3,section_name:"Safety Check",prompt:"Are you experiencing any of the following?",options:["Fever (temperatures higher than 101.5)","Chills","Shortness of breath","Abdominal pain"],type:"Multibutton",qId:"12",index:20},{section:3,section_name:"Safety Check",prompt:"Are you experiencing any of the following?",options:["Cannot control when I go to the bathroom","Groin/scrotum pain","Chest pain","Nausea"],type:"Multibutton",qId:"13",index:21},{section:3,section_name:"Safety Check",prompt:"Are you experiencing any pain near your kidneys (deep within one or both sides, just under ribs)?",options:["Yes","No","Not Sure"],type:"Selectbutton",qId:"14",index:22},{section:3,section_name:"Safety Check",prompt:"Regarding your symptoms...",sub_questions:["Are you feeling light headed?","Did you pass out?","Have you noticed any blood in your urine?"],options:["Yes","No","Not Sure"],type:"Selectbutton",qId:"15",index:23},{section:3,section_name:"Safety Check",prompt:"Regarding your history...",sub_questions:["Have you ever been diagnosed with cancer?","Has any direct family member of your family been diagnosed with cancer","Have you had your bone health checked recently?","Are you currently sexually active?","Do you currently smoke?","Have you smoked in the past?"],options:["Yes","No","Not Sure"],type:"Selectbutton",qId:"16",index:24}],hj=j.div`
  width: 80%;
`,pj=j.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${LC};
  cursor: pointer;
`,mj=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 50%;
  border: 2px solid black;
  ${e=>e.selected&&`
      border: 2px solid ${Us};
    `}
`,gj=j.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${Us};
`,vj=({options:e,selectedOptions:t,HandleOnclick:n})=>z(hj,{children:[e.map((r,i)=>z(pj,{value:r,onClick:n,children:[b(mj,{id:i,selected:t.includes(r),value:r,children:t.includes(r)&&b(gj,{})}),b("div",{children:r})]},`select-${i}`))," "]}),yj=j.div`
  width: 80%;
`,_j=j.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${LC};

  input[type='checkbox'] {
    transform: scale(1.5);
  }
`,wj=j.div`
  margin-left: 15px;
`,bj=({options:e,selectedOptions:t,HandleOnclick:n})=>b(yj,{role:"group","aria-label":"Button group",children:e.map((r,i)=>z(_j,{children:[b("input",{type:"checkbox",id:i,value:r,checked:t.includes(r),onChange:n}),b(wj,{children:r})]},`select-${i}`))}),Sj=({options:e,selectedOptions:t,HandleOnclick:n})=>b("div",{children:e.map((r,i)=>b(fd,{value:r,id:i,onClick:n,selected:t.includes(r),children:r},`button-${i}`))}),Cj=j.div`
  display: flex;
  flex-direction: column;
  ${e=>e.options.length>3&&"margin-top: -20px;"};
  ${e=>e.options.length>5&&`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    `};

  div {
    margin: 1em 0;
  }
  align-items: center;
`,Ej=j.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  white-space: ${e=>e.length?"pre-line":"nowrap"};
`,kj=({options:e,HandleOnclick:t,selectedOptions:n})=>b(Cj,{role:"group","aria-label":"Button group",options:e,children:e.map((r,i)=>b("div",{children:b(fd,{value:r,id:i,onClick:t,selected:n.includes(r),height:"auto",children:b(Ej,{length:r.length>16,children:r})},`button-${i}`)}))}),xj=({currQuestion:e,currSubQuestion:t,subQuestion:n,options:r,currQuestionType:i})=>{const{isValid:o,setIsValid:s}=w.useContext(Fe),{selectedOptions:a,setSelectedOptions:l}=w.useContext(Fe),{answers:c,setAnswers:u}=w.useContext(Fe),d=f=>{const h=f.currentTarget.getAttribute("value");a.includes(h)?l(a.filter(p=>p!==h)):(i=="Select"||i=="Selectbutton"?l([h]):l(a.concat(h)),s(!0))};if(a.length===0&&e>2&&s(!1),w.useEffect(()=>{if(le[e].sub_questions)var f=`${le[e].qId}-subq-${t}`;if(e>2&&(c[le[e].qId]||c[f])){let h;le[e].sub_questions?h=c[f]:h=c[le[e].qId],l(a.concat(h)),s(!0)}},[e,t]),r)switch(i){case"Select":return b(vj,{options:r,selectedOptions:a,HandleOnclick:d});case"Multiselect":return b(bj,{options:r,selectedOptions:a,HandleOnclick:d});case"Multibutton":return b(kj,{options:r,selectedOptions:a,HandleOnclick:d});case"Selectbutton":return b(Sj,{options:r,selectedOptions:a,HandleOnclick:d});default:return b($i,{})}else return b($i,{})},Ij=({currentStep:e})=>{const t=[".",".","."];return b("div",{style:{position:"fixed",bottom:"10px",left:"30px",display:"flex",alignItems:"center"},children:(()=>t.map((r,i)=>b("span",{style:{margin:"0 0.1 px",fontSize:"100px",color:i===e?"blue":"gray"},children:r},i)))()})},Tj=j.h3`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-transform: uppercase;
`,Rj=j.h2`
  font-size: 20px;
  font-weight: 100;
  line-height: 24px;
  text-transform: uppercase;
`,Pj=j.h1`
  margin-top: 20px;
  max-width: 80%;
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 0px;
`,Aj=j.p`
  margin-top: -40px;
  margin-bottom: 40px;
  max-width: 80%;
`,Nj=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Oj=({data:e})=>{const[t,n]=w.useState(0),[r,i]=w.useState(0),[o,s]=w.useState([]),[a]=w.useState(Date.now()),l=Fs().currentUser,[c,u]=vl(`/users/${l.uid}`),[d,f]=vl(`/answers/${a}`);let h=t===le.length-1&&le[t].sub_questions&&r===le[t].sub_questions.length-1||t===le.length-1&&!le[t].sub_questions;const{AssessmentState:p,setAssessmentState:y,isValid:S,setIsValid:v,selectedOptions:m,setSelectedOptions:g,answers:_,setAnswers:C}=w.useContext(Fe),k=I=>{let L=I+1;for(let V=I+1;V<le.length;V++)if(I+1>11&&le[I+1].qId.includes("06")){let D;I==9?D=m:D=_["06"];var q=le[V].qId;q=q.split("-");const N=q[1];for(let X=0;X<D.length;X++){if(D[X].includes(N))return L=V,L;L=17}}return L},E=()=>{if(t===0)y("zipcode");else{let I,L=[];const q=le[t].qId;if(L=o.concat(q),le[t].sub_questions&&r!=0){i(r-1);return}for(let V=0;V<L.length;V++)if(L[V+1]===q){const D=L[V];for(let N=0;N<le.length;N++)if(D===le[N].qId){I=le[N].index,n(I),le[I].sub_questions&&i(le[I].sub_questions.length-1);return}}}},T=()=>{if(t===le.length-1&&le[t].sub_questions&&r===le[t].sub_questions.length-1||t===le.length-1&&!le[t].sub_questions){if(le[t].sub_questions)var I=`${le[t].qId}-subq-${r}`;else var I=le[t].qId;const L={..._,[I]:m};C(L),o.includes(le[t].qId)||s([...o,le[t].qId]),A(),y("result")}else if(S)if(v(!1),!le[t].sub_questions||r===le[t].sub_questions.length-1){if(le[t].sub_questions)var I=`${le[t].qId}-subq-${r}`;else var I=le[t].qId;const L={..._,[I]:m};C(L),o.includes(le[t].qId)||s([...o,le[t].qId]);const q=k(t);n(q),i(0),g([])}else{var I=`${le[t].qId}-subq-${r}`;const q={..._,[I]:m};C(q),o.includes(le[t].qId)||s([...o,le[t].qId]),i(r+1),g([])}};window.addEventListener("keydown",I=>{switch(I.key){case"Enter":T();break;default:return}I.preventDefault()},!0);const A=()=>{let I=[];if(e[l.uid]&&e[l.uid].results){if(!Array.isArray(e[l.uid].results))I.push(e[l.uid].results);else for(let L of e[l.uid].results)I.push(L);I.push(a)}else I=a;d({date:a,answers:_}),c({email:l.email,results:I})};return z(yi,{image:"../../pages.jpg",children:[b(po,{}),z(lo,{children:[z($C,{children:[z(zC,{children:[z(Tj,{children:["Section ",le[t].section]}),b(Rj,{children:le[t].section_name}),b(Pj,{children:le[t].prompt})]}),z(FC,{children:[t===0&&b(tj,{}),t===1&&b(lj,{}),t===2&&b(fj,{}),z(Nj,{children:[le[t].sub_questions&&b(Aj,{children:b(Qo,{children:le[t].sub_questions[r]})}),b(xj,{currQuestion:t,currSubQuestion:r,subQuestion:le[t].sub_questions,options:le[t].options,currQuestionType:le[t].type})]}),z(UC,{children:[b(Oa,{onClick:E,children:"Back"}),h?b(Vm,{isValid:S,onClick:T,children:"Submit"}):b(Vm,{isValid:S,onClick:T,children:"Next"})]})]})]}),b(Ij,{currentStep:le[t].section-1})]})]})},Mj=["Lumbar Radiculopathy","Lumbar Stenosis","Facet Arthropathy","Myelopathy","Metastatic disease","Infection","Cauda Equina","Myocardial Ischemia"],Lj=j.div`
  display: flex;
  width: 352px;
  height: 232px;
  background: ${DC};
  box-shadow: ${PP};
  border-radius: 10px;
`,Dj=j.div`
  display: flex;
  justify-content: center;
  width: 20%;
  font-size: 40px;
  margin-top: 10%;
  color: ${AP};
`,$j=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding-top: 10%;
  background-color: ${gf};
  max-height: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`,Fj=j.a`
  margin-left: -30%;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;

  color: ${Cl};
  margin-top: 3px;
  margin-bottom: 20px;
  cursor: pointer;
`,zj=j.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.18px;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.87);
`,Uj=j.p`
  font-size: 13px;
  margin-left: 10%;
  margin-bottom: 0;
  margin-right: 10%;
`,Bj=j.button`
  background: ${Us};
  box-shadow: ${ec};
  border: none;
  border-radius: 4px;
  width: 80%;
  height: 20%;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: white;
`,jj=({icon:e,provider:t,bold:n,text:r})=>{const[i,o]=w.useState(!1);return z(Lj,{children:[b(Dj,{children:b(mr,{icon:e})}),z($j,{children:[b(zj,{children:t}),z(Uj,{children:[b(Qo,{children:n}),r]}),b(Fj,{onClick:()=>o(!0),children:"+ More details"}),b(hi,{showModal:i,setShowModal:o,text:"hey"}),b(Bj,{children:"Search Providers"})]})]})},Wj=j.div`
  margin: 0 auto;
  width: 60%;
  margin-top: -90px;
`,Hj=j.h2`
  font-weight: 200;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.12px;
  color: rgba(0, 0, 0, 0.87);
`,Vj=j.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 36px;
`,qj=j.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`,Gj=j.h3`
  float: left;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.12px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
  margin-top: 40px;
  margin-bottom: 15px;
`,Kj=j.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,Yj=j.div`
  width: 100%;
  height: 89px;
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p {
    width: 40%;
    margin: 0;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
  }
`,Qj=({resultIndex:e,data:t})=>{const n=Fs().currentUser,r=t[n.uid].results.length;t[n.uid].results[r-1];const[i,o]=vl(`/users/${n.uid}`),s=[];e.map(l=>{s.push(Mj[l])});const a=[];return(s.includes("Metastatic disease")||s.includes("Infection")||s.includes("Cauda Equina")||s.includes("Myocardial Ischemia"))&&a.push("ER/Urgent Care"),s.includes("Facet Arthropathy")&&a.push("Primary Care Physician"),(s.includes("Myelopathy")||s.includes("Lumbar Stenosis"))&&a.push("Neurosurgeon"),s.includes("Myelopathy")&&a.push("Neurologist"),(s.includes("Lumbar Radiculopathy")||s.includes("Facet Arthropathy"))&&a.push("Interventional Pain Physician"),i({diagnosis:s,providers:a}),z(Wj,{children:[b(Hj,{children:"Results"}),z(Vj,{children:["Your answers suggest that your symptoms are related to"," ",s.map((l,c)=>z(je.Fragment,{children:[b("span",{children:l}),c!==s.length-1&&b("span",{children:", "})]},l))]}),z(qj,{children:[b(Gj,{children:"Recommended providers"}),b(Kj,{children:a.map(l=>{let c;switch(l){case"ER/Urgent Care":c=p6;break;case"Primary Care Physician":c=sw;break;case"Neurosurgeon":c=h6;break;case"Neurologist":c=ow;break;case"Interventional Pain Physician":c=sw;break;default:c=ow}return b(jj,{icon:c,provider:l,bold:"90% of people",text:` with your answers seek care from ${l} `})})})]}),z(Yj,{children:[b("p",{children:"Save your answers to reference with your provider."}),b(Oa,{children:"Download"}),b(Oa,{children:"Email"}),b(Oa,{children:"Text"})]})]})},Xj=({data:e})=>{const t=Fs().currentUser;vl(`/users/${t.uid}`);const{answers:n}=w.useContext(Fe),[r,i]=w.useState([]);return n["06"].includes("SHOOTING PAIN")&&(r.includes(0)||i(r.concat(0))),n["07-subq-0"].includes("LEAN FORWARD")&&(!n["07-subq-0"].includes("AM AT REST")||!n["07-subq-0"].includes("LEAN BACK"))&&(r.includes(1)||i(r.concat(1))),n["05"].includes("ON THE LEFT")&&n["05"].includes("ON THE RIGHT")&&(r.includes(2)||i(r.concat(2))),n["06-NUMBNESS-02-subq-3"]&&(n["06-NUMBNESS-02-subq-3"].includes("YES")||n["06-NUMBNESS-02-subq-4"].includes("YES"))&&(r.includes(3)||i(r.concat(3))),n["16-subq-0"].includes("Yes")&&(r.includes(4)||i(r.concat(4))),(n[12].includes("Fever (temperatures higher than 101.5)")||n[12].includes("Chills"))&&(r.includes(5)||i(r.concat(5))),n[13].includes("Cannot control when I go to the bathroom")&&(r.includes(6)||i(r.concat(6))),n[13].includes("Chest pain")&&n[12].includes("Shortness of breath")&&(r.includes(7)||i(r.concat(7))),r.map(o=>{}),z(yi,{image:"../../results.jpg",children:[b(po,{}),b(lo,{children:b(Qj,{resultIndex:r,data:e})})]})},Jj=()=>{const[e,t]=w.useState("home"),[n,r]=w.useState(!1),[i,o]=w.useState([]),[s,a]=w.useState({}),[l,c]=w.useState(!1),[u,d]=w.useState(""),[f,h]=dD("/");return h?z("h1",{children:["Error loading data: ",h.toString()]}):f===void 0?b($P,{}):f?z(Fe.Provider,{value:{AssessmentState:e,setAssessmentState:t,isValid:n,setIsValid:r,selectedOptions:i,setSelectedOptions:o,answers:s,setAnswers:a,isLogedIn:l,setIsLogedIn:c,prevPage:u,setPrevPage:d},children:[e==="home"&&b(U9,{}),e==="profile"&&b(V9,{}),e==="login"&&b(P9,{}),e==="signup"&&b(D9,{}),e==="zipcode"&&b(X9,{}),e==="questions"&&b(Oj,{data:f.users}),e==="result"&&b(Xj,{data:f.users})]}):b("h1",{children:"No data found"})},Zj=ip.createRoot(document.getElementById("root"));Zj.render(b(je.StrictMode,{children:b(Jj,{})}));
