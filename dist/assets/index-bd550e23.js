function DI(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Gw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var La={},$I={get exports(){return La},set exports(e){La=e}},wd={},w={},FI={get exports(){return w},set exports(e){w=e}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cl=Symbol.for("react.element"),zI=Symbol.for("react.portal"),UI=Symbol.for("react.fragment"),BI=Symbol.for("react.strict_mode"),jI=Symbol.for("react.profiler"),WI=Symbol.for("react.provider"),HI=Symbol.for("react.context"),VI=Symbol.for("react.forward_ref"),qI=Symbol.for("react.suspense"),GI=Symbol.for("react.memo"),KI=Symbol.for("react.lazy"),Ly=Symbol.iterator;function YI(e){return e===null||typeof e!="object"?null:(e=Ly&&e[Ly]||e["@@iterator"],typeof e=="function"?e:null)}var Kw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yw=Object.assign,Qw={};function bs(e,t,n){this.props=e,this.context=t,this.refs=Qw,this.updater=n||Kw}bs.prototype.isReactComponent={};bs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xw(){}Xw.prototype=bs.prototype;function Ym(e,t,n){this.props=e,this.context=t,this.refs=Qw,this.updater=n||Kw}var Qm=Ym.prototype=new Xw;Qm.constructor=Ym;Yw(Qm,bs.prototype);Qm.isPureReactComponent=!0;var Dy=Array.isArray,Jw=Object.prototype.hasOwnProperty,Xm={current:null},Zw={key:!0,ref:!0,__self:!0,__source:!0};function eb(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Jw.call(t,r)&&!Zw.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Cl,type:e,key:o,ref:s,props:i,_owner:Xm.current}}function QI(e,t){return{$$typeof:Cl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Jm(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cl}function XI(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $y=/\/+/g;function Wf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?XI(""+e.key):t.toString(36)}function Fc(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Cl:case zI:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Wf(s,0):r,Dy(i)?(n="",e!=null&&(n=e.replace($y,"$&/")+"/"),Fc(i,t,n,"",function(c){return c})):i!=null&&(Jm(i)&&(i=QI(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace($y,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Dy(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Wf(o,a);s+=Fc(o,t,n,l,i)}else if(l=YI(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Wf(o,a++),s+=Fc(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function rc(e,t,n){if(e==null)return e;var r=[],i=0;return Fc(e,r,"","",function(o){return t.call(n,o,i++)}),r}function JI(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ut={current:null},zc={transition:null},ZI={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:zc,ReactCurrentOwner:Xm};we.Children={map:rc,forEach:function(e,t,n){rc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rc(e,function(){t++}),t},toArray:function(e){return rc(e,function(t){return t})||[]},only:function(e){if(!Jm(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};we.Component=bs;we.Fragment=UI;we.Profiler=jI;we.PureComponent=Ym;we.StrictMode=BI;we.Suspense=qI;we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZI;we.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yw({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Xm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Jw.call(t,l)&&!Zw.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Cl,type:e.type,key:i,ref:o,props:r,_owner:s}};we.createContext=function(e){return e={$$typeof:HI,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:WI,_context:e},e.Consumer=e};we.createElement=eb;we.createFactory=function(e){var t=eb.bind(null,e);return t.type=e,t};we.createRef=function(){return{current:null}};we.forwardRef=function(e){return{$$typeof:VI,render:e}};we.isValidElement=Jm;we.lazy=function(e){return{$$typeof:KI,_payload:{_status:-1,_result:e},_init:JI}};we.memo=function(e,t){return{$$typeof:GI,type:e,compare:t===void 0?null:t}};we.startTransition=function(e){var t=zc.transition;zc.transition={};try{e()}finally{zc.transition=t}};we.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};we.useCallback=function(e,t){return Ut.current.useCallback(e,t)};we.useContext=function(e){return Ut.current.useContext(e)};we.useDebugValue=function(){};we.useDeferredValue=function(e){return Ut.current.useDeferredValue(e)};we.useEffect=function(e,t){return Ut.current.useEffect(e,t)};we.useId=function(){return Ut.current.useId()};we.useImperativeHandle=function(e,t,n){return Ut.current.useImperativeHandle(e,t,n)};we.useInsertionEffect=function(e,t){return Ut.current.useInsertionEffect(e,t)};we.useLayoutEffect=function(e,t){return Ut.current.useLayoutEffect(e,t)};we.useMemo=function(e,t){return Ut.current.useMemo(e,t)};we.useReducer=function(e,t,n){return Ut.current.useReducer(e,t,n)};we.useRef=function(e){return Ut.current.useRef(e)};we.useState=function(e){return Ut.current.useState(e)};we.useSyncExternalStore=function(e,t,n){return Ut.current.useSyncExternalStore(e,t,n)};we.useTransition=function(){return Ut.current.useTransition()};we.version="18.2.0";(function(e){e.exports=we})(FI);const qe=Gw(w),Zh=DI({__proto__:null,default:qe},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eT=w,tT=Symbol.for("react.element"),nT=Symbol.for("react.fragment"),rT=Object.prototype.hasOwnProperty,iT=eT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oT={key:!0,ref:!0,__self:!0,__source:!0};function tb(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)rT.call(t,r)&&!oT.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:tT,type:e,key:o,ref:s,props:i,_owner:iT.current}}wd.Fragment=nT;wd.jsx=tb;wd.jsxs=tb;(function(e){e.exports=wd})($I);const Mi=La.Fragment,b=La.jsx,j=La.jsxs;var ep={},rs={},sT={get exports(){return rs},set exports(e){rs=e}},fn={},tp={},aT={get exports(){return tp},set exports(e){tp=e}},nb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,U){var O=R.length;R.push(U);e:for(;0<O;){var X=O-1>>>1,P=R[X];if(0<i(P,U))R[X]=U,R[O]=P,O=X;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var U=R[0],O=R.pop();if(O!==U){R[0]=O;e:for(var X=0,P=R.length,M=P>>>1;X<M;){var A=2*(X+1)-1,B=R[A],x=A+1,ie=R[x];if(0>i(B,O))x<P&&0>i(ie,B)?(R[X]=ie,R[x]=O,X=x):(R[X]=B,R[A]=O,X=A);else if(x<P&&0>i(ie,O))R[X]=ie,R[x]=O,X=x;else break e}}return U}function i(R,U){var O=R.sortIndex-U.sortIndex;return O!==0?O:R.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,f=3,h=!1,m=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var U=n(c);U!==null;){if(U.callback===null)r(c);else if(U.startTime<=R)r(c),U.sortIndex=U.expirationTime,t(l,U);else break;U=n(c)}}function _(R){if(y=!1,v(R),!m)if(n(l)!==null)m=!0,J(C);else{var U=n(c);U!==null&&se(_,U.startTime-R)}}function C(R,U){m=!1,y&&(y=!1,g(I),I=-1),h=!0;var O=f;try{for(v(U),d=n(l);d!==null&&(!(d.expirationTime>U)||R&&!W());){var X=d.callback;if(typeof X=="function"){d.callback=null,f=d.priorityLevel;var P=X(d.expirationTime<=U);U=e.unstable_now(),typeof P=="function"?d.callback=P:d===n(l)&&r(l),v(U)}else r(l);d=n(l)}if(d!==null)var M=!0;else{var A=n(c);A!==null&&se(_,A.startTime-U),M=!1}return M}finally{d=null,f=O,h=!1}}var k=!1,E=null,I=-1,N=5,T=-1;function W(){return!(e.unstable_now()-T<N)}function K(){if(E!==null){var R=e.unstable_now();T=R;var U=!0;try{U=E(!0,R)}finally{U?V():(k=!1,E=null)}}else k=!1}var V;if(typeof p=="function")V=function(){p(K)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,$=F.port2;F.port1.onmessage=K,V=function(){$.postMessage(null)}}else V=function(){S(K,0)};function J(R){E=R,k||(k=!0,V())}function se(R,U){I=S(function(){R(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,J(C))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var O=f;f=U;try{return R()}finally{f=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,U){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var O=f;f=R;try{return U()}finally{f=O}},e.unstable_scheduleCallback=function(R,U,O){var X=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?X+O:X):O=X,R){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=O+P,R={id:u++,callback:U,priorityLevel:R,startTime:O,expirationTime:P,sortIndex:-1},O>X?(R.sortIndex=O,t(c,R),n(l)===null&&R===n(c)&&(y?(g(I),I=-1):y=!0,se(_,O-X))):(R.sortIndex=P,t(l,R),m||h||(m=!0,J(C))),R},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(R){var U=f;return function(){var O=f;f=U;try{return R.apply(this,arguments)}finally{f=O}}}})(nb);(function(e){e.exports=nb})(aT);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rb=w,dn=tp;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ib=new Set,Da={};function ro(e,t){is(e,t),is(e+"Capture",t)}function is(e,t){for(Da[e]=t,e=0;e<t.length;e++)ib.add(t[e])}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),np=Object.prototype.hasOwnProperty,lT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fy={},zy={};function cT(e){return np.call(zy,e)?!0:np.call(Fy,e)?!1:lT.test(e)?zy[e]=!0:(Fy[e]=!0,!1)}function uT(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dT(e,t,n,r){if(t===null||typeof t>"u"||uT(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Bt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Rt[e]=new Bt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Rt[t]=new Bt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Rt[e]=new Bt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Rt[e]=new Bt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Rt[e]=new Bt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Rt[e]=new Bt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Rt[e]=new Bt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Rt[e]=new Bt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Rt[e]=new Bt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zm=/[\-:]([a-z])/g;function eg(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zm,eg);Rt[t]=new Bt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zm,eg);Rt[t]=new Bt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zm,eg);Rt[t]=new Bt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Rt[e]=new Bt(e,1,!1,e.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new Bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Rt[e]=new Bt(e,1,!1,e.toLowerCase(),null,!0,!0)});function tg(e,t,n,r){var i=Rt.hasOwnProperty(t)?Rt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dT(t,n,i,r)&&(n=null),r||i===null?cT(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Er=rb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ic=Symbol.for("react.element"),bo=Symbol.for("react.portal"),So=Symbol.for("react.fragment"),ng=Symbol.for("react.strict_mode"),rp=Symbol.for("react.profiler"),ob=Symbol.for("react.provider"),sb=Symbol.for("react.context"),rg=Symbol.for("react.forward_ref"),ip=Symbol.for("react.suspense"),op=Symbol.for("react.suspense_list"),ig=Symbol.for("react.memo"),Or=Symbol.for("react.lazy"),ab=Symbol.for("react.offscreen"),Uy=Symbol.iterator;function Fs(e){return e===null||typeof e!="object"?null:(e=Uy&&e[Uy]||e["@@iterator"],typeof e=="function"?e:null)}var Xe=Object.assign,Hf;function ia(e){if(Hf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hf=t&&t[1]||""}return`
`+Hf+e}var Vf=!1;function qf(e,t){if(!e||Vf)return"";Vf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Vf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ia(e):""}function fT(e){switch(e.tag){case 5:return ia(e.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return e=qf(e.type,!1),e;case 11:return e=qf(e.type.render,!1),e;case 1:return e=qf(e.type,!0),e;default:return""}}function sp(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case So:return"Fragment";case bo:return"Portal";case rp:return"Profiler";case ng:return"StrictMode";case ip:return"Suspense";case op:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sb:return(e.displayName||"Context")+".Consumer";case ob:return(e._context.displayName||"Context")+".Provider";case rg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ig:return t=e.displayName||null,t!==null?t:sp(e.type)||"Memo";case Or:t=e._payload,e=e._init;try{return sp(e(t))}catch{}}return null}function hT(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sp(t);case 8:return t===ng?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function oi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lb(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pT(e){var t=lb(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oc(e){e._valueTracker||(e._valueTracker=pT(e))}function cb(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lb(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function au(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ap(e,t){var n=t.checked;return Xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function By(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=oi(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ub(e,t){t=t.checked,t!=null&&tg(e,"checked",t,!1)}function lp(e,t){ub(e,t);var n=oi(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cp(e,t.type,n):t.hasOwnProperty("defaultValue")&&cp(e,t.type,oi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jy(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cp(e,t,n){(t!=="number"||au(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oa=Array.isArray;function Bo(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+oi(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function up(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wy(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(oa(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:oi(n)}}function db(e,t){var n=oi(t.value),r=oi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Hy(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dp(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fb(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sc,hb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sc=sc||document.createElement("div"),sc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $a(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mT=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(e){mT.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fa[t]=fa[e]})});function pb(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fa.hasOwnProperty(e)&&fa[e]?(""+t).trim():t+"px"}function mb(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pb(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var gT=Xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fp(e,t){if(t){if(gT[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function hp(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pp=null;function og(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mp=null,jo=null,Wo=null;function Vy(e){if(e=xl(e)){if(typeof mp!="function")throw Error(D(280));var t=e.stateNode;t&&(t=kd(t),mp(e.stateNode,e.type,t))}}function gb(e){jo?Wo?Wo.push(e):Wo=[e]:jo=e}function vb(){if(jo){var e=jo,t=Wo;if(Wo=jo=null,Vy(e),t)for(e=0;e<t.length;e++)Vy(t[e])}}function yb(e,t){return e(t)}function _b(){}var Gf=!1;function wb(e,t,n){if(Gf)return e(t,n);Gf=!0;try{return yb(e,t,n)}finally{Gf=!1,(jo!==null||Wo!==null)&&(_b(),vb())}}function Fa(e,t){var n=e.stateNode;if(n===null)return null;var r=kd(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var gp=!1;if(pr)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){gp=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{gp=!1}function vT(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var ha=!1,lu=null,cu=!1,vp=null,yT={onError:function(e){ha=!0,lu=e}};function _T(e,t,n,r,i,o,s,a,l){ha=!1,lu=null,vT.apply(yT,arguments)}function wT(e,t,n,r,i,o,s,a,l){if(_T.apply(this,arguments),ha){if(ha){var c=lu;ha=!1,lu=null}else throw Error(D(198));cu||(cu=!0,vp=c)}}function io(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qy(e){if(io(e)!==e)throw Error(D(188))}function bT(e){var t=e.alternate;if(!t){if(t=io(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return qy(i),e;if(o===r)return qy(i),t;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Sb(e){return e=bT(e),e!==null?Cb(e):null}function Cb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cb(e);if(t!==null)return t;e=e.sibling}return null}var Eb=dn.unstable_scheduleCallback,Gy=dn.unstable_cancelCallback,ST=dn.unstable_shouldYield,CT=dn.unstable_requestPaint,at=dn.unstable_now,ET=dn.unstable_getCurrentPriorityLevel,sg=dn.unstable_ImmediatePriority,kb=dn.unstable_UserBlockingPriority,uu=dn.unstable_NormalPriority,kT=dn.unstable_LowPriority,xb=dn.unstable_IdlePriority,bd=null,Qn=null;function xT(e){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(bd,e,void 0,(e.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:RT,IT=Math.log,TT=Math.LN2;function RT(e){return e>>>=0,e===0?32:31-(IT(e)/TT|0)|0}var ac=64,lc=4194304;function sa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function du(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=sa(a):(o&=s,o!==0&&(r=sa(o)))}else s=n&~i,s!==0?r=sa(s):o!==0&&(r=sa(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ln(t),i=1<<n,r|=e[n],t&=~i;return r}function PT(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AT(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ln(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=PT(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function yp(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ib(){var e=ac;return ac<<=1,!(ac&4194240)&&(ac=64),e}function Kf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function El(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ln(t),e[t]=n}function NT(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ln(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ag(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ln(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Te=0;function Tb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rb,lg,Pb,Ab,Nb,_p=!1,cc=[],Hr=null,Vr=null,qr=null,za=new Map,Ua=new Map,Lr=[],OT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ky(e,t){switch(e){case"focusin":case"focusout":Hr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":qr=null;break;case"pointerover":case"pointerout":za.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ua.delete(t.pointerId)}}function Us(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=xl(t),t!==null&&lg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function MT(e,t,n,r,i){switch(t){case"focusin":return Hr=Us(Hr,e,t,n,r,i),!0;case"dragenter":return Vr=Us(Vr,e,t,n,r,i),!0;case"mouseover":return qr=Us(qr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return za.set(o,Us(za.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ua.set(o,Us(Ua.get(o)||null,e,t,n,r,i)),!0}return!1}function Ob(e){var t=xi(e.target);if(t!==null){var n=io(t);if(n!==null){if(t=n.tag,t===13){if(t=bb(n),t!==null){e.blockedOn=t,Nb(e.priority,function(){Pb(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pp=r,n.target.dispatchEvent(r),pp=null}else return t=xl(n),t!==null&&lg(t),e.blockedOn=n,!1;t.shift()}return!0}function Yy(e,t,n){Uc(e)&&n.delete(t)}function LT(){_p=!1,Hr!==null&&Uc(Hr)&&(Hr=null),Vr!==null&&Uc(Vr)&&(Vr=null),qr!==null&&Uc(qr)&&(qr=null),za.forEach(Yy),Ua.forEach(Yy)}function Bs(e,t){e.blockedOn===t&&(e.blockedOn=null,_p||(_p=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,LT)))}function Ba(e){function t(i){return Bs(i,e)}if(0<cc.length){Bs(cc[0],e);for(var n=1;n<cc.length;n++){var r=cc[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Hr!==null&&Bs(Hr,e),Vr!==null&&Bs(Vr,e),qr!==null&&Bs(qr,e),za.forEach(t),Ua.forEach(t),n=0;n<Lr.length;n++)r=Lr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lr.length&&(n=Lr[0],n.blockedOn===null);)Ob(n),n.blockedOn===null&&Lr.shift()}var Ho=Er.ReactCurrentBatchConfig,fu=!0;function DT(e,t,n,r){var i=Te,o=Ho.transition;Ho.transition=null;try{Te=1,cg(e,t,n,r)}finally{Te=i,Ho.transition=o}}function $T(e,t,n,r){var i=Te,o=Ho.transition;Ho.transition=null;try{Te=4,cg(e,t,n,r)}finally{Te=i,Ho.transition=o}}function cg(e,t,n,r){if(fu){var i=wp(e,t,n,r);if(i===null)ih(e,t,r,hu,n),Ky(e,r);else if(MT(i,e,t,n,r))r.stopPropagation();else if(Ky(e,r),t&4&&-1<OT.indexOf(e)){for(;i!==null;){var o=xl(i);if(o!==null&&Rb(o),o=wp(e,t,n,r),o===null&&ih(e,t,r,hu,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ih(e,t,r,null,n)}}var hu=null;function wp(e,t,n,r){if(hu=null,e=og(r),e=xi(e),e!==null)if(t=io(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bb(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hu=e,null}function Mb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ET()){case sg:return 1;case kb:return 4;case uu:case kT:return 16;case xb:return 536870912;default:return 16}default:return 16}}var Br=null,ug=null,Bc=null;function Lb(){if(Bc)return Bc;var e,t=ug,n=t.length,r,i="value"in Br?Br.value:Br.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Bc=i.slice(e,1<r?1-r:void 0)}function jc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function uc(){return!0}function Qy(){return!1}function hn(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?uc:Qy,this.isPropagationStopped=Qy,this}return Xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uc)},persist:function(){},isPersistent:uc}),t}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dg=hn(Ss),kl=Xe({},Ss,{view:0,detail:0}),FT=hn(kl),Yf,Qf,js,Sd=Xe({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==js&&(js&&e.type==="mousemove"?(Yf=e.screenX-js.screenX,Qf=e.screenY-js.screenY):Qf=Yf=0,js=e),Yf)},movementY:function(e){return"movementY"in e?e.movementY:Qf}}),Xy=hn(Sd),zT=Xe({},Sd,{dataTransfer:0}),UT=hn(zT),BT=Xe({},kl,{relatedTarget:0}),Xf=hn(BT),jT=Xe({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),WT=hn(jT),HT=Xe({},Ss,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),VT=hn(HT),qT=Xe({},Ss,{data:0}),Jy=hn(qT),GT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=YT[e])?!!t[e]:!1}function fg(){return QT}var XT=Xe({},kl,{key:function(e){if(e.key){var t=GT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?KT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fg,charCode:function(e){return e.type==="keypress"?jc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),JT=hn(XT),ZT=Xe({},Sd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zy=hn(ZT),e2=Xe({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fg}),t2=hn(e2),n2=Xe({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),r2=hn(n2),i2=Xe({},Sd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),o2=hn(i2),s2=[9,13,27,32],hg=pr&&"CompositionEvent"in window,pa=null;pr&&"documentMode"in document&&(pa=document.documentMode);var a2=pr&&"TextEvent"in window&&!pa,Db=pr&&(!hg||pa&&8<pa&&11>=pa),e0=String.fromCharCode(32),t0=!1;function $b(e,t){switch(e){case"keyup":return s2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Co=!1;function l2(e,t){switch(e){case"compositionend":return Fb(t);case"keypress":return t.which!==32?null:(t0=!0,e0);case"textInput":return e=t.data,e===e0&&t0?null:e;default:return null}}function c2(e,t){if(Co)return e==="compositionend"||!hg&&$b(e,t)?(e=Lb(),Bc=ug=Br=null,Co=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Db&&t.locale!=="ko"?null:t.data;default:return null}}var u2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function n0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!u2[e.type]:t==="textarea"}function zb(e,t,n,r){gb(r),t=pu(t,"onChange"),0<t.length&&(n=new dg("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ma=null,ja=null;function d2(e){Qb(e,0)}function Cd(e){var t=xo(e);if(cb(t))return e}function f2(e,t){if(e==="change")return t}var Ub=!1;if(pr){var Jf;if(pr){var Zf="oninput"in document;if(!Zf){var r0=document.createElement("div");r0.setAttribute("oninput","return;"),Zf=typeof r0.oninput=="function"}Jf=Zf}else Jf=!1;Ub=Jf&&(!document.documentMode||9<document.documentMode)}function i0(){ma&&(ma.detachEvent("onpropertychange",Bb),ja=ma=null)}function Bb(e){if(e.propertyName==="value"&&Cd(ja)){var t=[];zb(t,ja,e,og(e)),wb(d2,t)}}function h2(e,t,n){e==="focusin"?(i0(),ma=t,ja=n,ma.attachEvent("onpropertychange",Bb)):e==="focusout"&&i0()}function p2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cd(ja)}function m2(e,t){if(e==="click")return Cd(t)}function g2(e,t){if(e==="input"||e==="change")return Cd(t)}function v2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fn=typeof Object.is=="function"?Object.is:v2;function Wa(e,t){if(Fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!np.call(t,i)||!Fn(e[i],t[i]))return!1}return!0}function o0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function s0(e,t){var n=o0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=o0(n)}}function jb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wb(){for(var e=window,t=au();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=au(e.document)}return t}function pg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function y2(e){var t=Wb(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jb(n.ownerDocument.documentElement,n)){if(r!==null&&pg(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=s0(n,o);var s=s0(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _2=pr&&"documentMode"in document&&11>=document.documentMode,Eo=null,bp=null,ga=null,Sp=!1;function a0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sp||Eo==null||Eo!==au(r)||(r=Eo,"selectionStart"in r&&pg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ga&&Wa(ga,r)||(ga=r,r=pu(bp,"onSelect"),0<r.length&&(t=new dg("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Eo)))}function dc(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ko={animationend:dc("Animation","AnimationEnd"),animationiteration:dc("Animation","AnimationIteration"),animationstart:dc("Animation","AnimationStart"),transitionend:dc("Transition","TransitionEnd")},eh={},Hb={};pr&&(Hb=document.createElement("div").style,"AnimationEvent"in window||(delete ko.animationend.animation,delete ko.animationiteration.animation,delete ko.animationstart.animation),"TransitionEvent"in window||delete ko.transitionend.transition);function Ed(e){if(eh[e])return eh[e];if(!ko[e])return e;var t=ko[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hb)return eh[e]=t[n];return e}var Vb=Ed("animationend"),qb=Ed("animationiteration"),Gb=Ed("animationstart"),Kb=Ed("transitionend"),Yb=new Map,l0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pi(e,t){Yb.set(e,t),ro(t,[e])}for(var th=0;th<l0.length;th++){var nh=l0[th],w2=nh.toLowerCase(),b2=nh[0].toUpperCase()+nh.slice(1);pi(w2,"on"+b2)}pi(Vb,"onAnimationEnd");pi(qb,"onAnimationIteration");pi(Gb,"onAnimationStart");pi("dblclick","onDoubleClick");pi("focusin","onFocus");pi("focusout","onBlur");pi(Kb,"onTransitionEnd");is("onMouseEnter",["mouseout","mouseover"]);is("onMouseLeave",["mouseout","mouseover"]);is("onPointerEnter",["pointerout","pointerover"]);is("onPointerLeave",["pointerout","pointerover"]);ro("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ro("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ro("onBeforeInput",["compositionend","keypress","textInput","paste"]);ro("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ro("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ro("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S2=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function c0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wT(r,t,void 0,e),e.currentTarget=null}function Qb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;c0(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;c0(i,a,c),o=l}}}if(cu)throw e=vp,cu=!1,vp=null,e}function Fe(e,t){var n=t[Ip];n===void 0&&(n=t[Ip]=new Set);var r=e+"__bubble";n.has(r)||(Xb(t,e,2,!1),n.add(r))}function rh(e,t,n){var r=0;t&&(r|=4),Xb(n,e,r,t)}var fc="_reactListening"+Math.random().toString(36).slice(2);function Ha(e){if(!e[fc]){e[fc]=!0,ib.forEach(function(n){n!=="selectionchange"&&(S2.has(n)||rh(n,!1,e),rh(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fc]||(t[fc]=!0,rh("selectionchange",!1,t))}}function Xb(e,t,n,r){switch(Mb(t)){case 1:var i=DT;break;case 4:i=$T;break;default:i=cg}n=i.bind(null,t,n,e),i=void 0,!gp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ih(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=xi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}wb(function(){var c=o,u=og(n),d=[];e:{var f=Yb.get(e);if(f!==void 0){var h=dg,m=e;switch(e){case"keypress":if(jc(n)===0)break e;case"keydown":case"keyup":h=JT;break;case"focusin":m="focus",h=Xf;break;case"focusout":m="blur",h=Xf;break;case"beforeblur":case"afterblur":h=Xf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Xy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=UT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=t2;break;case Vb:case qb:case Gb:h=WT;break;case Kb:h=r2;break;case"scroll":h=FT;break;case"wheel":h=o2;break;case"copy":case"cut":case"paste":h=VT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Zy}var y=(t&4)!==0,S=!y&&e==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var p=c,v;p!==null;){v=p;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,g!==null&&(_=Fa(p,g),_!=null&&y.push(Va(p,_,v)))),S)break;p=p.return}0<y.length&&(f=new h(f,m,null,n,u),d.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==pp&&(m=n.relatedTarget||n.fromElement)&&(xi(m)||m[mr]))break e;if((h||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=c,m=m?xi(m):null,m!==null&&(S=io(m),m!==S||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=c),h!==m)){if(y=Xy,_="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Zy,_="onPointerLeave",g="onPointerEnter",p="pointer"),S=h==null?f:xo(h),v=m==null?f:xo(m),f=new y(_,p+"leave",h,n,u),f.target=S,f.relatedTarget=v,_=null,xi(u)===c&&(y=new y(g,p+"enter",m,n,u),y.target=v,y.relatedTarget=S,_=y),S=_,h&&m)t:{for(y=h,g=m,p=0,v=y;v;v=fo(v))p++;for(v=0,_=g;_;_=fo(_))v++;for(;0<p-v;)y=fo(y),p--;for(;0<v-p;)g=fo(g),v--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=fo(y),g=fo(g)}y=null}else y=null;h!==null&&u0(d,f,h,y,!1),m!==null&&S!==null&&u0(d,S,m,y,!0)}}e:{if(f=c?xo(c):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var C=f2;else if(n0(f))if(Ub)C=g2;else{C=p2;var k=h2}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=m2);if(C&&(C=C(e,c))){zb(d,C,n,u);break e}k&&k(e,f,c),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&cp(f,"number",f.value)}switch(k=c?xo(c):window,e){case"focusin":(n0(k)||k.contentEditable==="true")&&(Eo=k,bp=c,ga=null);break;case"focusout":ga=bp=Eo=null;break;case"mousedown":Sp=!0;break;case"contextmenu":case"mouseup":case"dragend":Sp=!1,a0(d,n,u);break;case"selectionchange":if(_2)break;case"keydown":case"keyup":a0(d,n,u)}var E;if(hg)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Co?$b(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Db&&n.locale!=="ko"&&(Co||I!=="onCompositionStart"?I==="onCompositionEnd"&&Co&&(E=Lb()):(Br=u,ug="value"in Br?Br.value:Br.textContent,Co=!0)),k=pu(c,I),0<k.length&&(I=new Jy(I,e,null,n,u),d.push({event:I,listeners:k}),E?I.data=E:(E=Fb(n),E!==null&&(I.data=E)))),(E=a2?l2(e,n):c2(e,n))&&(c=pu(c,"onBeforeInput"),0<c.length&&(u=new Jy("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=E))}Qb(d,t)})}function Va(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pu(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Fa(e,n),o!=null&&r.unshift(Va(e,o,i)),o=Fa(e,t),o!=null&&r.push(Va(e,o,i))),e=e.return}return r}function fo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function u0(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Fa(n,o),l!=null&&s.unshift(Va(n,l,a))):i||(l=Fa(n,o),l!=null&&s.push(Va(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var C2=/\r\n?/g,E2=/\u0000|\uFFFD/g;function d0(e){return(typeof e=="string"?e:""+e).replace(C2,`
`).replace(E2,"")}function hc(e,t,n){if(t=d0(t),d0(e)!==t&&n)throw Error(D(425))}function mu(){}var Cp=null,Ep=null;function kp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xp=typeof setTimeout=="function"?setTimeout:void 0,k2=typeof clearTimeout=="function"?clearTimeout:void 0,f0=typeof Promise=="function"?Promise:void 0,x2=typeof queueMicrotask=="function"?queueMicrotask:typeof f0<"u"?function(e){return f0.resolve(null).then(e).catch(I2)}:xp;function I2(e){setTimeout(function(){throw e})}function oh(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ba(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ba(t)}function Gr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function h0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Cs,qa="__reactProps$"+Cs,mr="__reactContainer$"+Cs,Ip="__reactEvents$"+Cs,T2="__reactListeners$"+Cs,R2="__reactHandles$"+Cs;function xi(e){var t=e[Gn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mr]||n[Gn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=h0(e);e!==null;){if(n=e[Gn])return n;e=h0(e)}return t}e=n,n=e.parentNode}return null}function xl(e){return e=e[Gn]||e[mr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function kd(e){return e[qa]||null}var Tp=[],Io=-1;function mi(e){return{current:e}}function Be(e){0>Io||(e.current=Tp[Io],Tp[Io]=null,Io--)}function De(e,t){Io++,Tp[Io]=e.current,e.current=t}var si={},Dt=mi(si),Yt=mi(!1),zi=si;function os(e,t){var n=e.type.contextTypes;if(!n)return si;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qt(e){return e=e.childContextTypes,e!=null}function gu(){Be(Yt),Be(Dt)}function p0(e,t,n){if(Dt.current!==si)throw Error(D(168));De(Dt,t),De(Yt,n)}function Jb(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,hT(e)||"Unknown",i));return Xe({},n,r)}function vu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||si,zi=Dt.current,De(Dt,e),De(Yt,Yt.current),!0}function m0(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=Jb(e,t,zi),r.__reactInternalMemoizedMergedChildContext=e,Be(Yt),Be(Dt),De(Dt,e)):Be(Yt),De(Yt,n)}var or=null,xd=!1,sh=!1;function Zb(e){or===null?or=[e]:or.push(e)}function P2(e){xd=!0,Zb(e)}function gi(){if(!sh&&or!==null){sh=!0;var e=0,t=Te;try{var n=or;for(Te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}or=null,xd=!1}catch(i){throw or!==null&&(or=or.slice(e+1)),Eb(sg,gi),i}finally{Te=t,sh=!1}}return null}var To=[],Ro=0,yu=null,_u=0,yn=[],_n=0,Ui=null,sr=1,ar="";function _i(e,t){To[Ro++]=_u,To[Ro++]=yu,yu=e,_u=t}function eS(e,t,n){yn[_n++]=sr,yn[_n++]=ar,yn[_n++]=Ui,Ui=e;var r=sr;e=ar;var i=32-Ln(r)-1;r&=~(1<<i),n+=1;var o=32-Ln(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,sr=1<<32-Ln(t)+i|n<<i|r,ar=o+e}else sr=1<<o|n<<i|r,ar=e}function mg(e){e.return!==null&&(_i(e,1),eS(e,1,0))}function gg(e){for(;e===yu;)yu=To[--Ro],To[Ro]=null,_u=To[--Ro],To[Ro]=null;for(;e===Ui;)Ui=yn[--_n],yn[_n]=null,ar=yn[--_n],yn[_n]=null,sr=yn[--_n],yn[_n]=null}var sn=null,on=null,Ve=!1,Pn=null;function tS(e,t){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function g0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,sn=e,on=Gr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,sn=e,on=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ui!==null?{id:sr,overflow:ar}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,sn=e,on=null,!0):!1;default:return!1}}function Rp(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pp(e){if(Ve){var t=on;if(t){var n=t;if(!g0(e,t)){if(Rp(e))throw Error(D(418));t=Gr(n.nextSibling);var r=sn;t&&g0(e,t)?tS(r,n):(e.flags=e.flags&-4097|2,Ve=!1,sn=e)}}else{if(Rp(e))throw Error(D(418));e.flags=e.flags&-4097|2,Ve=!1,sn=e}}}function v0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;sn=e}function pc(e){if(e!==sn)return!1;if(!Ve)return v0(e),Ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kp(e.type,e.memoizedProps)),t&&(t=on)){if(Rp(e))throw nS(),Error(D(418));for(;t;)tS(e,t),t=Gr(t.nextSibling)}if(v0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){on=Gr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}on=null}}else on=sn?Gr(e.stateNode.nextSibling):null;return!0}function nS(){for(var e=on;e;)e=Gr(e.nextSibling)}function ss(){on=sn=null,Ve=!1}function vg(e){Pn===null?Pn=[e]:Pn.push(e)}var A2=Er.ReactCurrentBatchConfig;function Tn(e,t){if(e&&e.defaultProps){t=Xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var wu=mi(null),bu=null,Po=null,yg=null;function _g(){yg=Po=bu=null}function wg(e){var t=wu.current;Be(wu),e._currentValue=t}function Ap(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Vo(e,t){bu=e,yg=Po=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(qt=!0),e.firstContext=null)}function En(e){var t=e._currentValue;if(yg!==e)if(e={context:e,memoizedValue:t,next:null},Po===null){if(bu===null)throw Error(D(308));Po=e,bu.dependencies={lanes:0,firstContext:e}}else Po=Po.next=e;return t}var Ii=null;function bg(e){Ii===null?Ii=[e]:Ii.push(e)}function rS(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,bg(t)):(n.next=i.next,i.next=n),t.interleaved=n,gr(e,r)}function gr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mr=!1;function Sg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iS(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gr(e,n)}return i=r.interleaved,i===null?(t.next=t,bg(r)):(t.next=i.next,i.next=t),r.interleaved=t,gr(e,n)}function Wc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ag(e,n)}}function y0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Su(e,t,n,r){var i=e.updateQueue;Mr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,u=c=l=null,a=o;do{var f=a.lane,h=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,y=a;switch(f=t,h=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){d=m.call(h,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(h,d,f):m,f==null)break e;d=Xe({},d,f);break e;case 2:Mr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=h,l=d):u=u.next=h,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ji|=s,e.lanes=s,e.memoizedState=d}}function _0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var oS=new rb.Component().refs;function Np(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Id={isMounted:function(e){return(e=e._reactInternals)?io(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=zt(),i=Qr(e),o=fr(r,i);o.payload=t,n!=null&&(o.callback=n),t=Kr(e,o,i),t!==null&&(Dn(t,e,i,r),Wc(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=zt(),i=Qr(e),o=fr(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Kr(e,o,i),t!==null&&(Dn(t,e,i,r),Wc(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zt(),r=Qr(e),i=fr(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kr(e,i,r),t!==null&&(Dn(t,e,r,n),Wc(t,e,r))}};function w0(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Wa(n,r)||!Wa(i,o):!0}function sS(e,t,n){var r=!1,i=si,o=t.contextType;return typeof o=="object"&&o!==null?o=En(o):(i=Qt(t)?zi:Dt.current,r=t.contextTypes,o=(r=r!=null)?os(e,i):si),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Id,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function b0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Id.enqueueReplaceState(t,t.state,null)}function Op(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=oS,Sg(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=En(o):(o=Qt(t)?zi:Dt.current,i.context=os(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Np(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Id.enqueueReplaceState(i,i.state,null),Su(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ws(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===oS&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function mc(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function S0(e){var t=e._init;return t(e._payload)}function aS(e){function t(g,p){if(e){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Xr(g,p),g.index=0,g.sibling=null,g}function o(g,p,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,_){return p===null||p.tag!==6?(p=hh(v,g.mode,_),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,_){var C=v.type;return C===So?u(g,p,v.props.children,_,v.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Or&&S0(C)===p.type)?(_=i(p,v.props),_.ref=Ws(g,p,v),_.return=g,_):(_=Yc(v.type,v.key,v.props,null,g.mode,_),_.ref=Ws(g,p,v),_.return=g,_)}function c(g,p,v,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=ph(v,g.mode,_),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function u(g,p,v,_,C){return p===null||p.tag!==7?(p=Di(v,g.mode,_,C),p.return=g,p):(p=i(p,v),p.return=g,p)}function d(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=hh(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ic:return v=Yc(p.type,p.key,p.props,null,g.mode,v),v.ref=Ws(g,null,p),v.return=g,v;case bo:return p=ph(p,g.mode,v),p.return=g,p;case Or:var _=p._init;return d(g,_(p._payload),v)}if(oa(p)||Fs(p))return p=Di(p,g.mode,v,null),p.return=g,p;mc(g,p)}return null}function f(g,p,v,_){var C=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(g,p,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ic:return v.key===C?l(g,p,v,_):null;case bo:return v.key===C?c(g,p,v,_):null;case Or:return C=v._init,f(g,p,C(v._payload),_)}if(oa(v)||Fs(v))return C!==null?null:u(g,p,v,_,null);mc(g,v)}return null}function h(g,p,v,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(v)||null,a(p,g,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ic:return g=g.get(_.key===null?v:_.key)||null,l(p,g,_,C);case bo:return g=g.get(_.key===null?v:_.key)||null,c(p,g,_,C);case Or:var k=_._init;return h(g,p,v,k(_._payload),C)}if(oa(_)||Fs(_))return g=g.get(v)||null,u(p,g,_,C,null);mc(p,_)}return null}function m(g,p,v,_){for(var C=null,k=null,E=p,I=p=0,N=null;E!==null&&I<v.length;I++){E.index>I?(N=E,E=null):N=E.sibling;var T=f(g,E,v[I],_);if(T===null){E===null&&(E=N);break}e&&E&&T.alternate===null&&t(g,E),p=o(T,p,I),k===null?C=T:k.sibling=T,k=T,E=N}if(I===v.length)return n(g,E),Ve&&_i(g,I),C;if(E===null){for(;I<v.length;I++)E=d(g,v[I],_),E!==null&&(p=o(E,p,I),k===null?C=E:k.sibling=E,k=E);return Ve&&_i(g,I),C}for(E=r(g,E);I<v.length;I++)N=h(E,g,I,v[I],_),N!==null&&(e&&N.alternate!==null&&E.delete(N.key===null?I:N.key),p=o(N,p,I),k===null?C=N:k.sibling=N,k=N);return e&&E.forEach(function(W){return t(g,W)}),Ve&&_i(g,I),C}function y(g,p,v,_){var C=Fs(v);if(typeof C!="function")throw Error(D(150));if(v=C.call(v),v==null)throw Error(D(151));for(var k=C=null,E=p,I=p=0,N=null,T=v.next();E!==null&&!T.done;I++,T=v.next()){E.index>I?(N=E,E=null):N=E.sibling;var W=f(g,E,T.value,_);if(W===null){E===null&&(E=N);break}e&&E&&W.alternate===null&&t(g,E),p=o(W,p,I),k===null?C=W:k.sibling=W,k=W,E=N}if(T.done)return n(g,E),Ve&&_i(g,I),C;if(E===null){for(;!T.done;I++,T=v.next())T=d(g,T.value,_),T!==null&&(p=o(T,p,I),k===null?C=T:k.sibling=T,k=T);return Ve&&_i(g,I),C}for(E=r(g,E);!T.done;I++,T=v.next())T=h(E,g,I,T.value,_),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?I:T.key),p=o(T,p,I),k===null?C=T:k.sibling=T,k=T);return e&&E.forEach(function(K){return t(g,K)}),Ve&&_i(g,I),C}function S(g,p,v,_){if(typeof v=="object"&&v!==null&&v.type===So&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ic:e:{for(var C=v.key,k=p;k!==null;){if(k.key===C){if(C=v.type,C===So){if(k.tag===7){n(g,k.sibling),p=i(k,v.props.children),p.return=g,g=p;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Or&&S0(C)===k.type){n(g,k.sibling),p=i(k,v.props),p.ref=Ws(g,k,v),p.return=g,g=p;break e}n(g,k);break}else t(g,k);k=k.sibling}v.type===So?(p=Di(v.props.children,g.mode,_,v.key),p.return=g,g=p):(_=Yc(v.type,v.key,v.props,null,g.mode,_),_.ref=Ws(g,p,v),_.return=g,g=_)}return s(g);case bo:e:{for(k=v.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=ph(v,g.mode,_),p.return=g,g=p}return s(g);case Or:return k=v._init,S(g,p,k(v._payload),_)}if(oa(v))return m(g,p,v,_);if(Fs(v))return y(g,p,v,_);mc(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=hh(v,g.mode,_),p.return=g,g=p),s(g)):n(g,p)}return S}var as=aS(!0),lS=aS(!1),Il={},Xn=mi(Il),Ga=mi(Il),Ka=mi(Il);function Ti(e){if(e===Il)throw Error(D(174));return e}function Cg(e,t){switch(De(Ka,t),De(Ga,e),De(Xn,Il),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dp(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dp(t,e)}Be(Xn),De(Xn,t)}function ls(){Be(Xn),Be(Ga),Be(Ka)}function cS(e){Ti(Ka.current);var t=Ti(Xn.current),n=dp(t,e.type);t!==n&&(De(Ga,e),De(Xn,n))}function Eg(e){Ga.current===e&&(Be(Xn),Be(Ga))}var Ye=mi(0);function Cu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ah=[];function kg(){for(var e=0;e<ah.length;e++)ah[e]._workInProgressVersionPrimary=null;ah.length=0}var Hc=Er.ReactCurrentDispatcher,lh=Er.ReactCurrentBatchConfig,Bi=0,Qe=null,ft=null,yt=null,Eu=!1,va=!1,Ya=0,N2=0;function Pt(){throw Error(D(321))}function xg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fn(e[n],t[n]))return!1;return!0}function Ig(e,t,n,r,i,o){if(Bi=o,Qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hc.current=e===null||e.memoizedState===null?D2:$2,e=n(r,i),va){o=0;do{if(va=!1,Ya=0,25<=o)throw Error(D(301));o+=1,yt=ft=null,t.updateQueue=null,Hc.current=F2,e=n(r,i)}while(va)}if(Hc.current=ku,t=ft!==null&&ft.next!==null,Bi=0,yt=ft=Qe=null,Eu=!1,t)throw Error(D(300));return e}function Tg(){var e=Ya!==0;return Ya=0,e}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Qe.memoizedState=yt=e:yt=yt.next=e,yt}function kn(){if(ft===null){var e=Qe.alternate;e=e!==null?e.memoizedState:null}else e=ft.next;var t=yt===null?Qe.memoizedState:yt.next;if(t!==null)yt=t,ft=e;else{if(e===null)throw Error(D(310));ft=e,e={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},yt===null?Qe.memoizedState=yt=e:yt=yt.next=e}return yt}function Qa(e,t){return typeof t=="function"?t(e):t}function ch(e){var t=kn(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=ft,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((Bi&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,Qe.lanes|=u,ji|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,Fn(r,t.memoizedState)||(qt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Qe.lanes|=o,ji|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function uh(e){var t=kn(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Fn(o,t.memoizedState)||(qt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function uS(){}function dS(e,t){var n=Qe,r=kn(),i=t(),o=!Fn(r.memoizedState,i);if(o&&(r.memoizedState=i,qt=!0),r=r.queue,Rg(pS.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,Xa(9,hS.bind(null,n,r,i,t),void 0,null),bt===null)throw Error(D(349));Bi&30||fS(n,t,i)}return i}function fS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hS(e,t,n,r){t.value=n,t.getSnapshot=r,mS(t)&&gS(e)}function pS(e,t,n){return n(function(){mS(t)&&gS(e)})}function mS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fn(e,n)}catch{return!0}}function gS(e){var t=gr(e,1);t!==null&&Dn(t,e,1,-1)}function C0(e){var t=Hn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:e},t.queue=e,e=e.dispatch=L2.bind(null,Qe,e),[t.memoizedState,e]}function Xa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vS(){return kn().memoizedState}function Vc(e,t,n,r){var i=Hn();Qe.flags|=e,i.memoizedState=Xa(1|t,n,void 0,r===void 0?null:r)}function Td(e,t,n,r){var i=kn();r=r===void 0?null:r;var o=void 0;if(ft!==null){var s=ft.memoizedState;if(o=s.destroy,r!==null&&xg(r,s.deps)){i.memoizedState=Xa(t,n,o,r);return}}Qe.flags|=e,i.memoizedState=Xa(1|t,n,o,r)}function E0(e,t){return Vc(8390656,8,e,t)}function Rg(e,t){return Td(2048,8,e,t)}function yS(e,t){return Td(4,2,e,t)}function _S(e,t){return Td(4,4,e,t)}function wS(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bS(e,t,n){return n=n!=null?n.concat([e]):null,Td(4,4,wS.bind(null,t,e),n)}function Pg(){}function SS(e,t){var n=kn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xg(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function CS(e,t){var n=kn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xg(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ES(e,t,n){return Bi&21?(Fn(n,t)||(n=Ib(),Qe.lanes|=n,ji|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,qt=!0),e.memoizedState=n)}function O2(e,t){var n=Te;Te=n!==0&&4>n?n:4,e(!0);var r=lh.transition;lh.transition={};try{e(!1),t()}finally{Te=n,lh.transition=r}}function kS(){return kn().memoizedState}function M2(e,t,n){var r=Qr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xS(e))IS(t,n);else if(n=rS(e,t,n,r),n!==null){var i=zt();Dn(n,e,r,i),TS(n,t,r)}}function L2(e,t,n){var r=Qr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xS(e))IS(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Fn(a,s)){var l=t.interleaved;l===null?(i.next=i,bg(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=rS(e,t,i,r),n!==null&&(i=zt(),Dn(n,e,r,i),TS(n,t,r))}}function xS(e){var t=e.alternate;return e===Qe||t!==null&&t===Qe}function IS(e,t){va=Eu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function TS(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ag(e,n)}}var ku={readContext:En,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},D2={readContext:En,useCallback:function(e,t){return Hn().memoizedState=[e,t===void 0?null:t],e},useContext:En,useEffect:E0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vc(4194308,4,wS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vc(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vc(4,2,e,t)},useMemo:function(e,t){var n=Hn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Hn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=M2.bind(null,Qe,e),[r.memoizedState,e]},useRef:function(e){var t=Hn();return e={current:e},t.memoizedState=e},useState:C0,useDebugValue:Pg,useDeferredValue:function(e){return Hn().memoizedState=e},useTransition:function(){var e=C0(!1),t=e[0];return e=O2.bind(null,e[1]),Hn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Qe,i=Hn();if(Ve){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),bt===null)throw Error(D(349));Bi&30||fS(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,E0(pS.bind(null,r,o,e),[e]),r.flags|=2048,Xa(9,hS.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Hn(),t=bt.identifierPrefix;if(Ve){var n=ar,r=sr;n=(r&~(1<<32-Ln(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ya++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=N2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$2={readContext:En,useCallback:SS,useContext:En,useEffect:Rg,useImperativeHandle:bS,useInsertionEffect:yS,useLayoutEffect:_S,useMemo:CS,useReducer:ch,useRef:vS,useState:function(){return ch(Qa)},useDebugValue:Pg,useDeferredValue:function(e){var t=kn();return ES(t,ft.memoizedState,e)},useTransition:function(){var e=ch(Qa)[0],t=kn().memoizedState;return[e,t]},useMutableSource:uS,useSyncExternalStore:dS,useId:kS,unstable_isNewReconciler:!1},F2={readContext:En,useCallback:SS,useContext:En,useEffect:Rg,useImperativeHandle:bS,useInsertionEffect:yS,useLayoutEffect:_S,useMemo:CS,useReducer:uh,useRef:vS,useState:function(){return uh(Qa)},useDebugValue:Pg,useDeferredValue:function(e){var t=kn();return ft===null?t.memoizedState=e:ES(t,ft.memoizedState,e)},useTransition:function(){var e=uh(Qa)[0],t=kn().memoizedState;return[e,t]},useMutableSource:uS,useSyncExternalStore:dS,useId:kS,unstable_isNewReconciler:!1};function cs(e,t){try{var n="",r=t;do n+=fT(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function dh(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Mp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var z2=typeof WeakMap=="function"?WeakMap:Map;function RS(e,t,n){n=fr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Iu||(Iu=!0,Hp=r),Mp(e,t)},n}function PS(e,t,n){n=fr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Mp(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Mp(e,t),typeof r!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function k0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new z2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Z2.bind(null,e,t,n),t.then(e,e))}function x0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function I0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=fr(-1,1),t.tag=2,Kr(n,t,1))),n.lanes|=1),e)}var U2=Er.ReactCurrentOwner,qt=!1;function Ft(e,t,n,r){t.child=e===null?lS(t,null,n,r):as(t,e.child,n,r)}function T0(e,t,n,r,i){n=n.render;var o=t.ref;return Vo(t,i),r=Ig(e,t,n,r,o,i),n=Tg(),e!==null&&!qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vr(e,t,i)):(Ve&&n&&mg(t),t.flags|=1,Ft(e,t,r,i),t.child)}function R0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Fg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,AS(e,t,o,r,i)):(e=Yc(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(s,r)&&e.ref===t.ref)return vr(e,t,i)}return t.flags|=1,e=Xr(o,r),e.ref=t.ref,e.return=t,t.child=e}function AS(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Wa(o,r)&&e.ref===t.ref)if(qt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(qt=!0);else return t.lanes=e.lanes,vr(e,t,i)}return Lp(e,t,n,r,i)}function NS(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(No,nn),nn|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,De(No,nn),nn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,De(No,nn),nn|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,De(No,nn),nn|=r;return Ft(e,t,i,n),t.child}function OS(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Lp(e,t,n,r,i){var o=Qt(n)?zi:Dt.current;return o=os(t,o),Vo(t,i),n=Ig(e,t,n,r,o,i),r=Tg(),e!==null&&!qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vr(e,t,i)):(Ve&&r&&mg(t),t.flags|=1,Ft(e,t,n,i),t.child)}function P0(e,t,n,r,i){if(Qt(n)){var o=!0;vu(t)}else o=!1;if(Vo(t,i),t.stateNode===null)qc(e,t),sS(t,n,r),Op(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=En(c):(c=Qt(n)?zi:Dt.current,c=os(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&b0(t,s,r,c),Mr=!1;var f=t.memoizedState;s.state=f,Su(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Yt.current||Mr?(typeof u=="function"&&(Np(t,n,u,r),l=t.memoizedState),(a=Mr||w0(t,n,a,r,f,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,iS(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Tn(t.type,a),s.props=c,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=Qt(n)?zi:Dt.current,l=os(t,l));var h=n.getDerivedStateFromProps;(u=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&b0(t,s,r,l),Mr=!1,f=t.memoizedState,s.state=f,Su(t,r,s,i);var m=t.memoizedState;a!==d||f!==m||Yt.current||Mr?(typeof h=="function"&&(Np(t,n,h,r),m=t.memoizedState),(c=Mr||w0(t,n,c,r,f,m,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),s.props=r,s.state=m,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Dp(e,t,n,r,o,i)}function Dp(e,t,n,r,i,o){OS(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&m0(t,n,!1),vr(e,t,o);r=t.stateNode,U2.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=as(t,e.child,null,o),t.child=as(t,null,a,o)):Ft(e,t,a,o),t.memoizedState=r.state,i&&m0(t,n,!0),t.child}function MS(e){var t=e.stateNode;t.pendingContext?p0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&p0(e,t.context,!1),Cg(e,t.containerInfo)}function A0(e,t,n,r,i){return ss(),vg(i),t.flags|=256,Ft(e,t,n,r),t.child}var $p={dehydrated:null,treeContext:null,retryLane:0};function Fp(e){return{baseLanes:e,cachePool:null,transitions:null}}function LS(e,t,n){var r=t.pendingProps,i=Ye.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),De(Ye,i&1),e===null)return Pp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ad(s,r,0,null),e=Di(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fp(n),t.memoizedState=$p,e):Ag(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return B2(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Xr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Xr(a,o):(o=Di(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Fp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=$p,r}return o=e.child,e=o.sibling,r=Xr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ag(e,t){return t=Ad({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gc(e,t,n,r){return r!==null&&vg(r),as(t,e.child,null,n),e=Ag(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function B2(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=dh(Error(D(422))),gc(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ad({mode:"visible",children:r.children},i,0,null),o=Di(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&as(t,e.child,null,s),t.child.memoizedState=Fp(s),t.memoizedState=$p,o);if(!(t.mode&1))return gc(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(D(419)),r=dh(o,r,void 0),gc(e,t,s,r)}if(a=(s&e.childLanes)!==0,qt||a){if(r=bt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,gr(e,i),Dn(r,e,i,-1))}return $g(),r=dh(Error(D(421))),gc(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=eR.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,on=Gr(i.nextSibling),sn=t,Ve=!0,Pn=null,e!==null&&(yn[_n++]=sr,yn[_n++]=ar,yn[_n++]=Ui,sr=e.id,ar=e.overflow,Ui=t),t=Ag(t,r.children),t.flags|=4096,t)}function N0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ap(e.return,t,n)}function fh(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function DS(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ft(e,t,r.children,n),r=Ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&N0(e,n,t);else if(e.tag===19)N0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(De(Ye,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Cu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fh(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Cu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fh(t,!0,n,null,o);break;case"together":fh(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ji|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Xr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function j2(e,t,n){switch(t.tag){case 3:MS(t),ss();break;case 5:cS(t);break;case 1:Qt(t.type)&&vu(t);break;case 4:Cg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;De(wu,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(De(Ye,Ye.current&1),t.flags|=128,null):n&t.child.childLanes?LS(e,t,n):(De(Ye,Ye.current&1),e=vr(e,t,n),e!==null?e.sibling:null);De(Ye,Ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return DS(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),De(Ye,Ye.current),r)break;return null;case 22:case 23:return t.lanes=0,NS(e,t,n)}return vr(e,t,n)}var $S,zp,FS,zS;$S=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zp=function(){};FS=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ti(Xn.current);var o=null;switch(n){case"input":i=ap(e,i),r=ap(e,r),o=[];break;case"select":i=Xe({},i,{value:void 0}),r=Xe({},r,{value:void 0}),o=[];break;case"textarea":i=up(e,i),r=up(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mu)}fp(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Da.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Da.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Fe("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};zS=function(e,t,n,r){n!==r&&(t.flags|=4)};function Hs(e,t){if(!Ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function At(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function W2(e,t,n){var r=t.pendingProps;switch(gg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(t),null;case 1:return Qt(t.type)&&gu(),At(t),null;case 3:return r=t.stateNode,ls(),Be(Yt),Be(Dt),kg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pc(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pn!==null&&(Gp(Pn),Pn=null))),zp(e,t),At(t),null;case 5:Eg(t);var i=Ti(Ka.current);if(n=t.type,e!==null&&t.stateNode!=null)FS(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return At(t),null}if(e=Ti(Xn.current),pc(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Gn]=t,r[qa]=o,e=(t.mode&1)!==0,n){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(i=0;i<aa.length;i++)Fe(aa[i],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":By(r,o),Fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Fe("invalid",r);break;case"textarea":Wy(r,o),Fe("invalid",r)}fp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&hc(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&hc(r.textContent,a,e),i=["children",""+a]):Da.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Fe("scroll",r)}switch(n){case"input":oc(r),jy(r,o,!0);break;case"textarea":oc(r),Hy(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=mu)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fb(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Gn]=t,e[qa]=r,$S(e,t,!1,!1),t.stateNode=e;e:{switch(s=hp(n,r),n){case"dialog":Fe("cancel",e),Fe("close",e),i=r;break;case"iframe":case"object":case"embed":Fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<aa.length;i++)Fe(aa[i],e);i=r;break;case"source":Fe("error",e),i=r;break;case"img":case"image":case"link":Fe("error",e),Fe("load",e),i=r;break;case"details":Fe("toggle",e),i=r;break;case"input":By(e,r),i=ap(e,r),Fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Xe({},r,{value:void 0}),Fe("invalid",e);break;case"textarea":Wy(e,r),i=up(e,r),Fe("invalid",e);break;default:i=r}fp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?mb(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hb(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$a(e,l):typeof l=="number"&&$a(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Da.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Fe("scroll",e):l!=null&&tg(e,o,l,s))}switch(n){case"input":oc(e),jy(e,r,!1);break;case"textarea":oc(e),Hy(e);break;case"option":r.value!=null&&e.setAttribute("value",""+oi(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Bo(e,!!r.multiple,o,!1):r.defaultValue!=null&&Bo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=mu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return At(t),null;case 6:if(e&&t.stateNode!=null)zS(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=Ti(Ka.current),Ti(Xn.current),pc(t)){if(r=t.stateNode,n=t.memoizedProps,r[Gn]=t,(o=r.nodeValue!==n)&&(e=sn,e!==null))switch(e.tag){case 3:hc(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hc(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gn]=t,t.stateNode=r}return At(t),null;case 13:if(Be(Ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ve&&on!==null&&t.mode&1&&!(t.flags&128))nS(),ss(),t.flags|=98560,o=!1;else if(o=pc(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[Gn]=t}else ss(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;At(t),o=!1}else Pn!==null&&(Gp(Pn),Pn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ye.current&1?pt===0&&(pt=3):$g())),t.updateQueue!==null&&(t.flags|=4),At(t),null);case 4:return ls(),zp(e,t),e===null&&Ha(t.stateNode.containerInfo),At(t),null;case 10:return wg(t.type._context),At(t),null;case 17:return Qt(t.type)&&gu(),At(t),null;case 19:if(Be(Ye),o=t.memoizedState,o===null)return At(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Hs(o,!1);else{if(pt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Cu(e),s!==null){for(t.flags|=128,Hs(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return De(Ye,Ye.current&1|2),t.child}e=e.sibling}o.tail!==null&&at()>us&&(t.flags|=128,r=!0,Hs(o,!1),t.lanes=4194304)}else{if(!r)if(e=Cu(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Hs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ve)return At(t),null}else 2*at()-o.renderingStartTime>us&&n!==1073741824&&(t.flags|=128,r=!0,Hs(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=at(),t.sibling=null,n=Ye.current,De(Ye,r?n&1|2:n&1),t):(At(t),null);case 22:case 23:return Dg(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?nn&1073741824&&(At(t),t.subtreeFlags&6&&(t.flags|=8192)):At(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function H2(e,t){switch(gg(t),t.tag){case 1:return Qt(t.type)&&gu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ls(),Be(Yt),Be(Dt),kg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Eg(t),null;case 13:if(Be(Ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));ss()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Be(Ye),null;case 4:return ls(),null;case 10:return wg(t.type._context),null;case 22:case 23:return Dg(),null;case 24:return null;default:return null}}var vc=!1,Ot=!1,V2=typeof WeakSet=="function"?WeakSet:Set,G=null;function Ao(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){nt(e,t,r)}else n.current=null}function Up(e,t,n){try{n()}catch(r){nt(e,t,r)}}var O0=!1;function q2(e,t){if(Cp=fu,e=Wb(),pg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=e,f=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++c===i&&(a=s),f===o&&++u===r&&(l=s),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ep={focusedElem:e,selectionRange:n},fu=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,S=m.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:Tn(t.type,y),S);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(_){nt(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return m=O0,O0=!1,m}function ya(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Up(t,n,o)}i=i.next}while(i!==r)}}function Rd(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function US(e){var t=e.alternate;t!==null&&(e.alternate=null,US(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gn],delete t[qa],delete t[Ip],delete t[T2],delete t[R2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function BS(e){return e.tag===5||e.tag===3||e.tag===4}function M0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||BS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mu));else if(r!==4&&(e=e.child,e!==null))for(jp(e,t,n),e=e.sibling;e!==null;)jp(e,t,n),e=e.sibling}function Wp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wp(e,t,n),e=e.sibling;e!==null;)Wp(e,t,n),e=e.sibling}var xt=null,Rn=!1;function Rr(e,t,n){for(n=n.child;n!==null;)jS(e,t,n),n=n.sibling}function jS(e,t,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(bd,n)}catch{}switch(n.tag){case 5:Ot||Ao(n,t);case 6:var r=xt,i=Rn;xt=null,Rr(e,t,n),xt=r,Rn=i,xt!==null&&(Rn?(e=xt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xt.removeChild(n.stateNode));break;case 18:xt!==null&&(Rn?(e=xt,n=n.stateNode,e.nodeType===8?oh(e.parentNode,n):e.nodeType===1&&oh(e,n),Ba(e)):oh(xt,n.stateNode));break;case 4:r=xt,i=Rn,xt=n.stateNode.containerInfo,Rn=!0,Rr(e,t,n),xt=r,Rn=i;break;case 0:case 11:case 14:case 15:if(!Ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Up(n,t,s),i=i.next}while(i!==r)}Rr(e,t,n);break;case 1:if(!Ot&&(Ao(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){nt(n,t,a)}Rr(e,t,n);break;case 21:Rr(e,t,n);break;case 22:n.mode&1?(Ot=(r=Ot)||n.memoizedState!==null,Rr(e,t,n),Ot=r):Rr(e,t,n);break;default:Rr(e,t,n)}}function L0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new V2),t.forEach(function(r){var i=tR.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function In(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:xt=a.stateNode,Rn=!1;break e;case 3:xt=a.stateNode.containerInfo,Rn=!0;break e;case 4:xt=a.stateNode.containerInfo,Rn=!0;break e}a=a.return}if(xt===null)throw Error(D(160));jS(o,s,i),xt=null,Rn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){nt(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)WS(t,e),t=t.sibling}function WS(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(In(t,e),Wn(e),r&4){try{ya(3,e,e.return),Rd(3,e)}catch(y){nt(e,e.return,y)}try{ya(5,e,e.return)}catch(y){nt(e,e.return,y)}}break;case 1:In(t,e),Wn(e),r&512&&n!==null&&Ao(n,n.return);break;case 5:if(In(t,e),Wn(e),r&512&&n!==null&&Ao(n,n.return),e.flags&32){var i=e.stateNode;try{$a(i,"")}catch(y){nt(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ub(i,o),hp(a,s);var c=hp(a,o);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?mb(i,d):u==="dangerouslySetInnerHTML"?hb(i,d):u==="children"?$a(i,d):tg(i,u,d,c)}switch(a){case"input":lp(i,o);break;case"textarea":db(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Bo(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?Bo(i,!!o.multiple,o.defaultValue,!0):Bo(i,!!o.multiple,o.multiple?[]:"",!1))}i[qa]=o}catch(y){nt(e,e.return,y)}}break;case 6:if(In(t,e),Wn(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){nt(e,e.return,y)}}break;case 3:if(In(t,e),Wn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ba(t.containerInfo)}catch(y){nt(e,e.return,y)}break;case 4:In(t,e),Wn(e);break;case 13:In(t,e),Wn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Mg=at())),r&4&&L0(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ot=(c=Ot)||u,In(t,e),Ot=c):In(t,e),Wn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(G=e,u=e.child;u!==null;){for(d=G=u;G!==null;){switch(f=G,h=f.child,f.tag){case 0:case 11:case 14:case 15:ya(4,f,f.return);break;case 1:Ao(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){nt(r,n,y)}}break;case 5:Ao(f,f.return);break;case 22:if(f.memoizedState!==null){$0(d);continue}}h!==null?(h.return=f,G=h):$0(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=pb("display",s))}catch(y){nt(e,e.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){nt(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:In(t,e),Wn(e),r&4&&L0(e);break;case 21:break;default:In(t,e),Wn(e)}}function Wn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(BS(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($a(i,""),r.flags&=-33);var o=M0(e);Wp(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=M0(e);jp(e,a,s);break;default:throw Error(D(161))}}catch(l){nt(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function G2(e,t,n){G=e,HS(e)}function HS(e,t,n){for(var r=(e.mode&1)!==0;G!==null;){var i=G,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||vc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ot;a=vc;var c=Ot;if(vc=s,(Ot=l)&&!c)for(G=i;G!==null;)s=G,l=s.child,s.tag===22&&s.memoizedState!==null?F0(i):l!==null?(l.return=s,G=l):F0(i);for(;o!==null;)G=o,HS(o),o=o.sibling;G=i,vc=a,Ot=c}D0(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,G=o):D0(e)}}function D0(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ot||Rd(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ot)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Tn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&_0(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_0(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ba(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Ot||t.flags&512&&Bp(t)}catch(f){nt(t,t.return,f)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function $0(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function F0(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Rd(4,t)}catch(l){nt(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){nt(t,i,l)}}var o=t.return;try{Bp(t)}catch(l){nt(t,o,l)}break;case 5:var s=t.return;try{Bp(t)}catch(l){nt(t,s,l)}}}catch(l){nt(t,t.return,l)}if(t===e){G=null;break}var a=t.sibling;if(a!==null){a.return=t.return,G=a;break}G=t.return}}var K2=Math.ceil,xu=Er.ReactCurrentDispatcher,Ng=Er.ReactCurrentOwner,bn=Er.ReactCurrentBatchConfig,Se=0,bt=null,ut=null,Tt=0,nn=0,No=mi(0),pt=0,Ja=null,ji=0,Pd=0,Og=0,_a=null,Vt=null,Mg=0,us=1/0,ir=null,Iu=!1,Hp=null,Yr=null,yc=!1,jr=null,Tu=0,wa=0,Vp=null,Gc=-1,Kc=0;function zt(){return Se&6?at():Gc!==-1?Gc:Gc=at()}function Qr(e){return e.mode&1?Se&2&&Tt!==0?Tt&-Tt:A2.transition!==null?(Kc===0&&(Kc=Ib()),Kc):(e=Te,e!==0||(e=window.event,e=e===void 0?16:Mb(e.type)),e):1}function Dn(e,t,n,r){if(50<wa)throw wa=0,Vp=null,Error(D(185));El(e,n,r),(!(Se&2)||e!==bt)&&(e===bt&&(!(Se&2)&&(Pd|=n),pt===4&&Dr(e,Tt)),Xt(e,r),n===1&&Se===0&&!(t.mode&1)&&(us=at()+500,xd&&gi()))}function Xt(e,t){var n=e.callbackNode;AT(e,t);var r=du(e,e===bt?Tt:0);if(r===0)n!==null&&Gy(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gy(n),t===1)e.tag===0?P2(z0.bind(null,e)):Zb(z0.bind(null,e)),x2(function(){!(Se&6)&&gi()}),n=null;else{switch(Tb(r)){case 1:n=sg;break;case 4:n=kb;break;case 16:n=uu;break;case 536870912:n=xb;break;default:n=uu}n=JS(n,VS.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function VS(e,t){if(Gc=-1,Kc=0,Se&6)throw Error(D(327));var n=e.callbackNode;if(qo()&&e.callbackNode!==n)return null;var r=du(e,e===bt?Tt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ru(e,r);else{t=r;var i=Se;Se|=2;var o=GS();(bt!==e||Tt!==t)&&(ir=null,us=at()+500,Li(e,t));do try{X2();break}catch(a){qS(e,a)}while(1);_g(),xu.current=o,Se=i,ut!==null?t=0:(bt=null,Tt=0,t=pt)}if(t!==0){if(t===2&&(i=yp(e),i!==0&&(r=i,t=qp(e,i))),t===1)throw n=Ja,Li(e,0),Dr(e,r),Xt(e,at()),n;if(t===6)Dr(e,r);else{if(i=e.current.alternate,!(r&30)&&!Y2(i)&&(t=Ru(e,r),t===2&&(o=yp(e),o!==0&&(r=o,t=qp(e,o))),t===1))throw n=Ja,Li(e,0),Dr(e,r),Xt(e,at()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:wi(e,Vt,ir);break;case 3:if(Dr(e,r),(r&130023424)===r&&(t=Mg+500-at(),10<t)){if(du(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){zt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xp(wi.bind(null,e,Vt,ir),t);break}wi(e,Vt,ir);break;case 4:if(Dr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ln(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=at()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*K2(r/1960))-r,10<r){e.timeoutHandle=xp(wi.bind(null,e,Vt,ir),r);break}wi(e,Vt,ir);break;case 5:wi(e,Vt,ir);break;default:throw Error(D(329))}}}return Xt(e,at()),e.callbackNode===n?VS.bind(null,e):null}function qp(e,t){var n=_a;return e.current.memoizedState.isDehydrated&&(Li(e,t).flags|=256),e=Ru(e,t),e!==2&&(t=Vt,Vt=n,t!==null&&Gp(t)),e}function Gp(e){Vt===null?Vt=e:Vt.push.apply(Vt,e)}function Y2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Fn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dr(e,t){for(t&=~Og,t&=~Pd,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ln(t),r=1<<n;e[n]=-1,t&=~r}}function z0(e){if(Se&6)throw Error(D(327));qo();var t=du(e,0);if(!(t&1))return Xt(e,at()),null;var n=Ru(e,t);if(e.tag!==0&&n===2){var r=yp(e);r!==0&&(t=r,n=qp(e,r))}if(n===1)throw n=Ja,Li(e,0),Dr(e,t),Xt(e,at()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wi(e,Vt,ir),Xt(e,at()),null}function Lg(e,t){var n=Se;Se|=1;try{return e(t)}finally{Se=n,Se===0&&(us=at()+500,xd&&gi())}}function Wi(e){jr!==null&&jr.tag===0&&!(Se&6)&&qo();var t=Se;Se|=1;var n=bn.transition,r=Te;try{if(bn.transition=null,Te=1,e)return e()}finally{Te=r,bn.transition=n,Se=t,!(Se&6)&&gi()}}function Dg(){nn=No.current,Be(No)}function Li(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,k2(n)),ut!==null)for(n=ut.return;n!==null;){var r=n;switch(gg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gu();break;case 3:ls(),Be(Yt),Be(Dt),kg();break;case 5:Eg(r);break;case 4:ls();break;case 13:Be(Ye);break;case 19:Be(Ye);break;case 10:wg(r.type._context);break;case 22:case 23:Dg()}n=n.return}if(bt=e,ut=e=Xr(e.current,null),Tt=nn=t,pt=0,Ja=null,Og=Pd=ji=0,Vt=_a=null,Ii!==null){for(t=0;t<Ii.length;t++)if(n=Ii[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Ii=null}return e}function qS(e,t){do{var n=ut;try{if(_g(),Hc.current=ku,Eu){for(var r=Qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eu=!1}if(Bi=0,yt=ft=Qe=null,va=!1,Ya=0,Ng.current=null,n===null||n.return===null){pt=1,Ja=t,ut=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=x0(s);if(h!==null){h.flags&=-257,I0(h,s,a,o,t),h.mode&1&&k0(o,c,t),t=h,l=c;var m=t.updateQueue;if(m===null){var y=new Set;y.add(l),t.updateQueue=y}else m.add(l);break e}else{if(!(t&1)){k0(o,c,t),$g();break e}l=Error(D(426))}}else if(Ve&&a.mode&1){var S=x0(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),I0(S,s,a,o,t),vg(cs(l,a));break e}}o=l=cs(l,a),pt!==4&&(pt=2),_a===null?_a=[o]:_a.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=RS(o,l,t);y0(o,g);break e;case 1:a=l;var p=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Yr===null||!Yr.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=PS(o,a,t);y0(o,_);break e}}o=o.return}while(o!==null)}YS(n)}catch(C){t=C,ut===n&&n!==null&&(ut=n=n.return);continue}break}while(1)}function GS(){var e=xu.current;return xu.current=ku,e===null?ku:e}function $g(){(pt===0||pt===3||pt===2)&&(pt=4),bt===null||!(ji&268435455)&&!(Pd&268435455)||Dr(bt,Tt)}function Ru(e,t){var n=Se;Se|=2;var r=GS();(bt!==e||Tt!==t)&&(ir=null,Li(e,t));do try{Q2();break}catch(i){qS(e,i)}while(1);if(_g(),Se=n,xu.current=r,ut!==null)throw Error(D(261));return bt=null,Tt=0,pt}function Q2(){for(;ut!==null;)KS(ut)}function X2(){for(;ut!==null&&!ST();)KS(ut)}function KS(e){var t=XS(e.alternate,e,nn);e.memoizedProps=e.pendingProps,t===null?YS(e):ut=t,Ng.current=null}function YS(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=H2(n,t),n!==null){n.flags&=32767,ut=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pt=6,ut=null;return}}else if(n=W2(n,t,nn),n!==null){ut=n;return}if(t=t.sibling,t!==null){ut=t;return}ut=t=e}while(t!==null);pt===0&&(pt=5)}function wi(e,t,n){var r=Te,i=bn.transition;try{bn.transition=null,Te=1,J2(e,t,n,r)}finally{bn.transition=i,Te=r}return null}function J2(e,t,n,r){do qo();while(jr!==null);if(Se&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(NT(e,o),e===bt&&(ut=bt=null,Tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yc||(yc=!0,JS(uu,function(){return qo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=bn.transition,bn.transition=null;var s=Te;Te=1;var a=Se;Se|=4,Ng.current=null,q2(e,n),WS(n,e),y2(Ep),fu=!!Cp,Ep=Cp=null,e.current=n,G2(n),CT(),Se=a,Te=s,bn.transition=o}else e.current=n;if(yc&&(yc=!1,jr=e,Tu=i),o=e.pendingLanes,o===0&&(Yr=null),xT(n.stateNode),Xt(e,at()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Iu)throw Iu=!1,e=Hp,Hp=null,e;return Tu&1&&e.tag!==0&&qo(),o=e.pendingLanes,o&1?e===Vp?wa++:(wa=0,Vp=e):wa=0,gi(),null}function qo(){if(jr!==null){var e=Tb(Tu),t=bn.transition,n=Te;try{if(bn.transition=null,Te=16>e?16:e,jr===null)var r=!1;else{if(e=jr,jr=null,Tu=0,Se&6)throw Error(D(331));var i=Se;for(Se|=4,G=e.current;G!==null;){var o=G,s=o.child;if(G.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(G=c;G!==null;){var u=G;switch(u.tag){case 0:case 11:case 15:ya(8,u,o)}var d=u.child;if(d!==null)d.return=u,G=d;else for(;G!==null;){u=G;var f=u.sibling,h=u.return;if(US(u),u===c){G=null;break}if(f!==null){f.return=h,G=f;break}G=h}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}G=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,G=s;else e:for(;G!==null;){if(o=G,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ya(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,G=g;break e}G=o.return}}var p=e.current;for(G=p;G!==null;){s=G;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,G=v;else e:for(s=p;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rd(9,a)}}catch(C){nt(a,a.return,C)}if(a===s){G=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,G=_;break e}G=a.return}}if(Se=i,gi(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(bd,e)}catch{}r=!0}return r}finally{Te=n,bn.transition=t}}return!1}function U0(e,t,n){t=cs(n,t),t=RS(e,t,1),e=Kr(e,t,1),t=zt(),e!==null&&(El(e,1,t),Xt(e,t))}function nt(e,t,n){if(e.tag===3)U0(e,e,n);else for(;t!==null;){if(t.tag===3){U0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yr===null||!Yr.has(r))){e=cs(n,e),e=PS(t,e,1),t=Kr(t,e,1),e=zt(),t!==null&&(El(t,1,e),Xt(t,e));break}}t=t.return}}function Z2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=zt(),e.pingedLanes|=e.suspendedLanes&n,bt===e&&(Tt&n)===n&&(pt===4||pt===3&&(Tt&130023424)===Tt&&500>at()-Mg?Li(e,0):Og|=n),Xt(e,t)}function QS(e,t){t===0&&(e.mode&1?(t=lc,lc<<=1,!(lc&130023424)&&(lc=4194304)):t=1);var n=zt();e=gr(e,t),e!==null&&(El(e,t,n),Xt(e,n))}function eR(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),QS(e,n)}function tR(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),QS(e,n)}var XS;XS=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Yt.current)qt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return qt=!1,j2(e,t,n);qt=!!(e.flags&131072)}else qt=!1,Ve&&t.flags&1048576&&eS(t,_u,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qc(e,t),e=t.pendingProps;var i=os(t,Dt.current);Vo(t,n),i=Ig(null,t,r,e,i,n);var o=Tg();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qt(r)?(o=!0,vu(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sg(t),i.updater=Id,t.stateNode=i,i._reactInternals=t,Op(t,r,e,n),t=Dp(null,t,r,!0,o,n)):(t.tag=0,Ve&&o&&mg(t),Ft(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qc(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=rR(r),e=Tn(r,e),i){case 0:t=Lp(null,t,r,e,n);break e;case 1:t=P0(null,t,r,e,n);break e;case 11:t=T0(null,t,r,e,n);break e;case 14:t=R0(null,t,r,Tn(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tn(r,i),Lp(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tn(r,i),P0(e,t,r,i,n);case 3:e:{if(MS(t),e===null)throw Error(D(387));r=t.pendingProps,o=t.memoizedState,i=o.element,iS(e,t),Su(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=cs(Error(D(423)),t),t=A0(e,t,r,n,i);break e}else if(r!==i){i=cs(Error(D(424)),t),t=A0(e,t,r,n,i);break e}else for(on=Gr(t.stateNode.containerInfo.firstChild),sn=t,Ve=!0,Pn=null,n=lS(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ss(),r===i){t=vr(e,t,n);break e}Ft(e,t,r,n)}t=t.child}return t;case 5:return cS(t),e===null&&Pp(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,kp(r,i)?s=null:o!==null&&kp(r,o)&&(t.flags|=32),OS(e,t),Ft(e,t,s,n),t.child;case 6:return e===null&&Pp(t),null;case 13:return LS(e,t,n);case 4:return Cg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=as(t,null,r,n):Ft(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tn(r,i),T0(e,t,r,i,n);case 7:return Ft(e,t,t.pendingProps,n),t.child;case 8:return Ft(e,t,t.pendingProps.children,n),t.child;case 12:return Ft(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,De(wu,r._currentValue),r._currentValue=s,o!==null)if(Fn(o.value,s)){if(o.children===i.children&&!Yt.current){t=vr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=fr(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ap(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(D(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ap(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ft(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Vo(t,n),i=En(i),r=r(i),t.flags|=1,Ft(e,t,r,n),t.child;case 14:return r=t.type,i=Tn(r,t.pendingProps),i=Tn(r.type,i),R0(e,t,r,i,n);case 15:return AS(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tn(r,i),qc(e,t),t.tag=1,Qt(r)?(e=!0,vu(t)):e=!1,Vo(t,n),sS(t,r,i),Op(t,r,i,n),Dp(null,t,r,!0,e,n);case 19:return DS(e,t,n);case 22:return NS(e,t,n)}throw Error(D(156,t.tag))};function JS(e,t){return Eb(e,t)}function nR(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(e,t,n,r){return new nR(e,t,n,r)}function Fg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rR(e){if(typeof e=="function")return Fg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rg)return 11;if(e===ig)return 14}return 2}function Xr(e,t){var n=e.alternate;return n===null?(n=wn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yc(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Fg(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case So:return Di(n.children,i,o,t);case ng:s=8,i|=8;break;case rp:return e=wn(12,n,t,i|2),e.elementType=rp,e.lanes=o,e;case ip:return e=wn(13,n,t,i),e.elementType=ip,e.lanes=o,e;case op:return e=wn(19,n,t,i),e.elementType=op,e.lanes=o,e;case ab:return Ad(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ob:s=10;break e;case sb:s=9;break e;case rg:s=11;break e;case ig:s=14;break e;case Or:s=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=wn(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Di(e,t,n,r){return e=wn(7,e,r,t),e.lanes=n,e}function Ad(e,t,n,r){return e=wn(22,e,r,t),e.elementType=ab,e.lanes=n,e.stateNode={isHidden:!1},e}function hh(e,t,n){return e=wn(6,e,null,t),e.lanes=n,e}function ph(e,t,n){return t=wn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function iR(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kf(0),this.expirationTimes=Kf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zg(e,t,n,r,i,o,s,a,l){return e=new iR(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=wn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sg(o),e}function oR(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ZS(e){if(!e)return si;e=e._reactInternals;e:{if(io(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(Qt(n))return Jb(e,n,t)}return t}function eC(e,t,n,r,i,o,s,a,l){return e=zg(n,r,!0,e,i,o,s,a,l),e.context=ZS(null),n=e.current,r=zt(),i=Qr(n),o=fr(r,i),o.callback=t??null,Kr(n,o,i),e.current.lanes=i,El(e,i,r),Xt(e,r),e}function Nd(e,t,n,r){var i=t.current,o=zt(),s=Qr(i);return n=ZS(n),t.context===null?t.context=n:t.pendingContext=n,t=fr(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kr(i,t,s),e!==null&&(Dn(e,i,s,o),Wc(e,i,s)),s}function Pu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function B0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ug(e,t){B0(e,t),(e=e.alternate)&&B0(e,t)}function sR(){return null}var tC=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bg(e){this._internalRoot=e}Od.prototype.render=Bg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Nd(e,t,null,null)};Od.prototype.unmount=Bg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wi(function(){Nd(null,e,null,null)}),t[mr]=null}};function Od(e){this._internalRoot=e}Od.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ab();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lr.length&&t!==0&&t<Lr[n].priority;n++);Lr.splice(n,0,e),n===0&&Ob(e)}};function jg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Md(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function j0(){}function aR(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Pu(s);o.call(c)}}var s=eC(t,r,e,0,null,!1,!1,"",j0);return e._reactRootContainer=s,e[mr]=s.current,Ha(e.nodeType===8?e.parentNode:e),Wi(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Pu(l);a.call(c)}}var l=zg(e,0,!1,null,null,!1,!1,"",j0);return e._reactRootContainer=l,e[mr]=l.current,Ha(e.nodeType===8?e.parentNode:e),Wi(function(){Nd(t,l,n,r)}),l}function Ld(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Pu(s);a.call(l)}}Nd(t,s,e,i)}else s=aR(n,t,e,i,r);return Pu(s)}Rb=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sa(t.pendingLanes);n!==0&&(ag(t,n|1),Xt(t,at()),!(Se&6)&&(us=at()+500,gi()))}break;case 13:Wi(function(){var r=gr(e,1);if(r!==null){var i=zt();Dn(r,e,1,i)}}),Ug(e,1)}};lg=function(e){if(e.tag===13){var t=gr(e,134217728);if(t!==null){var n=zt();Dn(t,e,134217728,n)}Ug(e,134217728)}};Pb=function(e){if(e.tag===13){var t=Qr(e),n=gr(e,t);if(n!==null){var r=zt();Dn(n,e,t,r)}Ug(e,t)}};Ab=function(){return Te};Nb=function(e,t){var n=Te;try{return Te=e,t()}finally{Te=n}};mp=function(e,t,n){switch(t){case"input":if(lp(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=kd(r);if(!i)throw Error(D(90));cb(r),lp(r,i)}}}break;case"textarea":db(e,n);break;case"select":t=n.value,t!=null&&Bo(e,!!n.multiple,t,!1)}};yb=Lg;_b=Wi;var lR={usingClientEntryPoint:!1,Events:[xl,xo,kd,gb,vb,Lg]},Vs={findFiberByHostInstance:xi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},cR={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sb(e),e===null?null:e.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||sR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{bd=_c.inject(cR),Qn=_c}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lR;fn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jg(t))throw Error(D(200));return oR(e,t,null,n)};fn.createRoot=function(e,t){if(!jg(e))throw Error(D(299));var n=!1,r="",i=tC;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zg(e,1,!1,null,null,n,!1,r,i),e[mr]=t.current,Ha(e.nodeType===8?e.parentNode:e),new Bg(t)};fn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=Sb(t),e=e===null?null:e.stateNode,e};fn.flushSync=function(e){return Wi(e)};fn.hydrate=function(e,t,n){if(!Md(t))throw Error(D(200));return Ld(null,e,t,!0,n)};fn.hydrateRoot=function(e,t,n){if(!jg(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=tC;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=eC(t,null,e,1,n??null,i,!1,o,s),e[mr]=t.current,Ha(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Od(t)};fn.render=function(e,t,n){if(!Md(t))throw Error(D(200));return Ld(null,e,t,!1,n)};fn.unmountComponentAtNode=function(e){if(!Md(e))throw Error(D(40));return e._reactRootContainer?(Wi(function(){Ld(null,null,e,!1,function(){e._reactRootContainer=null,e[mr]=null})}),!0):!1};fn.unstable_batchedUpdates=Lg;fn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Md(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return Ld(e,t,n,!1,r)};fn.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=fn})(sT);const wc=Gw(rs);var W0=rs;ep.createRoot=W0.createRoot,ep.hydrateRoot=W0.hydrateRoot;const dt=w.createContext();var Au={},uR={get exports(){return Au},set exports(e){Au=e}},Me={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd=60103,$d=60106,Tl=60107,Rl=60108,Pl=60114,Al=60109,Nl=60110,Ol=60112,Ml=60113,Wg=60120,Ll=60115,Dl=60116,nC=60121,rC=60122,iC=60117,oC=60129,sC=60131;if(typeof Symbol=="function"&&Symbol.for){var kt=Symbol.for;Dd=kt("react.element"),$d=kt("react.portal"),Tl=kt("react.fragment"),Rl=kt("react.strict_mode"),Pl=kt("react.profiler"),Al=kt("react.provider"),Nl=kt("react.context"),Ol=kt("react.forward_ref"),Ml=kt("react.suspense"),Wg=kt("react.suspense_list"),Ll=kt("react.memo"),Dl=kt("react.lazy"),nC=kt("react.block"),rC=kt("react.server.block"),iC=kt("react.fundamental"),oC=kt("react.debug_trace_mode"),sC=kt("react.legacy_hidden")}function Bn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Dd:switch(e=e.type,e){case Tl:case Pl:case Rl:case Ml:case Wg:return e;default:switch(e=e&&e.$$typeof,e){case Nl:case Ol:case Dl:case Ll:case Al:return e;default:return t}}case $d:return t}}}var dR=Al,fR=Dd,hR=Ol,pR=Tl,mR=Dl,gR=Ll,vR=$d,yR=Pl,_R=Rl,wR=Ml;Me.ContextConsumer=Nl;Me.ContextProvider=dR;Me.Element=fR;Me.ForwardRef=hR;Me.Fragment=pR;Me.Lazy=mR;Me.Memo=gR;Me.Portal=vR;Me.Profiler=yR;Me.StrictMode=_R;Me.Suspense=wR;Me.isAsyncMode=function(){return!1};Me.isConcurrentMode=function(){return!1};Me.isContextConsumer=function(e){return Bn(e)===Nl};Me.isContextProvider=function(e){return Bn(e)===Al};Me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dd};Me.isForwardRef=function(e){return Bn(e)===Ol};Me.isFragment=function(e){return Bn(e)===Tl};Me.isLazy=function(e){return Bn(e)===Dl};Me.isMemo=function(e){return Bn(e)===Ll};Me.isPortal=function(e){return Bn(e)===$d};Me.isProfiler=function(e){return Bn(e)===Pl};Me.isStrictMode=function(e){return Bn(e)===Rl};Me.isSuspense=function(e){return Bn(e)===Ml};Me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Tl||e===Pl||e===oC||e===Rl||e===Ml||e===Wg||e===sC||typeof e=="object"&&e!==null&&(e.$$typeof===Dl||e.$$typeof===Ll||e.$$typeof===Al||e.$$typeof===Nl||e.$$typeof===Ol||e.$$typeof===iC||e.$$typeof===nC||e[0]===rC)};Me.typeOf=Bn;(function(e){e.exports=Me})(uR);function bR(e){function t(P,M,A,B,x){for(var ie=0,L=0,pe=0,te=0,oe,Z,Ae=0,We=0,Y,_e=Y=oe=0,re=0,$e=0,gt=0,Ge=0,Ct=A.length,jt=Ct-1,lt,ee="",me="",Wt="",Ht="",Et;re<Ct;){if(Z=A.charCodeAt(re),re===jt&&L+te+pe+ie!==0&&(L!==0&&(Z=L===47?10:47),te=pe=ie=0,Ct++,jt++),L+te+pe+ie===0){if(re===jt&&(0<$e&&(ee=ee.replace(f,"")),0<ee.trim().length)){switch(Z){case 32:case 9:case 59:case 13:case 10:break;default:ee+=A.charAt(re)}Z=59}switch(Z){case 123:for(ee=ee.trim(),oe=ee.charCodeAt(0),Y=1,Ge=++re;re<Ct;){switch(Z=A.charCodeAt(re)){case 123:Y++;break;case 125:Y--;break;case 47:switch(Z=A.charCodeAt(re+1)){case 42:case 47:e:{for(_e=re+1;_e<jt;++_e)switch(A.charCodeAt(_e)){case 47:if(Z===42&&A.charCodeAt(_e-1)===42&&re+2!==_e){re=_e+1;break e}break;case 10:if(Z===47){re=_e+1;break e}}re=_e}}break;case 91:Z++;case 40:Z++;case 34:case 39:for(;re++<jt&&A.charCodeAt(re)!==Z;);}if(Y===0)break;re++}switch(Y=A.substring(Ge,re),oe===0&&(oe=(ee=ee.replace(d,"").trim()).charCodeAt(0)),oe){case 64:switch(0<$e&&(ee=ee.replace(f,"")),Z=ee.charCodeAt(1),Z){case 100:case 109:case 115:case 45:$e=M;break;default:$e=J}if(Y=t(M,$e,Y,Z,x+1),Ge=Y.length,0<R&&($e=n(J,ee,gt),Et=a(3,Y,$e,M,V,K,Ge,Z,x,B),ee=$e.join(""),Et!==void 0&&(Ge=(Y=Et.trim()).length)===0&&(Z=0,Y="")),0<Ge)switch(Z){case 115:ee=ee.replace(k,s);case 100:case 109:case 45:Y=ee+"{"+Y+"}";break;case 107:ee=ee.replace(p,"$1 $2"),Y=ee+"{"+Y+"}",Y=$===1||$===2&&o("@"+Y,3)?"@-webkit-"+Y+"@"+Y:"@"+Y;break;default:Y=ee+Y,B===112&&(Y=(me+=Y,""))}else Y="";break;default:Y=t(M,n(M,ee,gt),Y,B,x+1)}Wt+=Y,Y=gt=$e=_e=oe=0,ee="",Z=A.charCodeAt(++re);break;case 125:case 59:if(ee=(0<$e?ee.replace(f,""):ee).trim(),1<(Ge=ee.length))switch(_e===0&&(oe=ee.charCodeAt(0),oe===45||96<oe&&123>oe)&&(Ge=(ee=ee.replace(" ",":")).length),0<R&&(Et=a(1,ee,M,P,V,K,me.length,B,x,B))!==void 0&&(Ge=(ee=Et.trim()).length)===0&&(ee="\0\0"),oe=ee.charCodeAt(0),Z=ee.charCodeAt(1),oe){case 0:break;case 64:if(Z===105||Z===99){Ht+=ee+A.charAt(re);break}default:ee.charCodeAt(Ge-1)!==58&&(me+=i(ee,oe,Z,ee.charCodeAt(2)))}gt=$e=_e=oe=0,ee="",Z=A.charCodeAt(++re)}}switch(Z){case 13:case 10:L===47?L=0:1+oe===0&&B!==107&&0<ee.length&&($e=1,ee+="\0"),0<R*O&&a(0,ee,M,P,V,K,me.length,B,x,B),K=1,V++;break;case 59:case 125:if(L+te+pe+ie===0){K++;break}default:switch(K++,lt=A.charAt(re),Z){case 9:case 32:if(te+ie+L===0)switch(Ae){case 44:case 58:case 9:case 32:lt="";break;default:Z!==32&&(lt=" ")}break;case 0:lt="\\0";break;case 12:lt="\\f";break;case 11:lt="\\v";break;case 38:te+L+ie===0&&($e=gt=1,lt="\f"+lt);break;case 108:if(te+L+ie+F===0&&0<_e)switch(re-_e){case 2:Ae===112&&A.charCodeAt(re-3)===58&&(F=Ae);case 8:We===111&&(F=We)}break;case 58:te+L+ie===0&&(_e=re);break;case 44:L+pe+te+ie===0&&($e=1,lt+="\r");break;case 34:case 39:L===0&&(te=te===Z?0:te===0?Z:te);break;case 91:te+L+pe===0&&ie++;break;case 93:te+L+pe===0&&ie--;break;case 41:te+L+ie===0&&pe--;break;case 40:if(te+L+ie===0){if(oe===0)switch(2*Ae+3*We){case 533:break;default:oe=1}pe++}break;case 64:L+pe+te+ie+_e+Y===0&&(Y=1);break;case 42:case 47:if(!(0<te+ie+pe))switch(L){case 0:switch(2*Z+3*A.charCodeAt(re+1)){case 235:L=47;break;case 220:Ge=re,L=42}break;case 42:Z===47&&Ae===42&&Ge+2!==re&&(A.charCodeAt(Ge+2)===33&&(me+=A.substring(Ge,re+1)),lt="",L=0)}}L===0&&(ee+=lt)}We=Ae,Ae=Z,re++}if(Ge=me.length,0<Ge){if($e=M,0<R&&(Et=a(2,me,$e,P,V,K,Ge,B,x,B),Et!==void 0&&(me=Et).length===0))return Ht+me+Wt;if(me=$e.join(",")+"{"+me+"}",$*F!==0){switch($!==2||o(me,2)||(F=0),F){case 111:me=me.replace(_,":-moz-$1")+me;break;case 112:me=me.replace(v,"::-webkit-input-$1")+me.replace(v,"::-moz-$1")+me.replace(v,":-ms-input-$1")+me}F=0}}return Ht+me+Wt}function n(P,M,A){var B=M.trim().split(S);M=B;var x=B.length,ie=P.length;switch(ie){case 0:case 1:var L=0;for(P=ie===0?"":P[0]+" ";L<x;++L)M[L]=r(P,M[L],A).trim();break;default:var pe=L=0;for(M=[];L<x;++L)for(var te=0;te<ie;++te)M[pe++]=r(P[te]+" ",B[L],A).trim()}return M}function r(P,M,A){var B=M.charCodeAt(0);switch(33>B&&(B=(M=M.trim()).charCodeAt(0)),B){case 38:return M.replace(g,"$1"+P.trim());case 58:return P.trim()+M.replace(g,"$1"+P.trim());default:if(0<1*A&&0<M.indexOf("\f"))return M.replace(g,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+M}function i(P,M,A,B){var x=P+";",ie=2*M+3*A+4*B;if(ie===944){P=x.indexOf(":",9)+1;var L=x.substring(P,x.length-1).trim();return L=x.substring(0,P).trim()+L+";",$===1||$===2&&o(L,1)?"-webkit-"+L+L:L}if($===0||$===2&&!o(x,1))return x;switch(ie){case 1015:return x.charCodeAt(10)===97?"-webkit-"+x+x:x;case 951:return x.charCodeAt(3)===116?"-webkit-"+x+x:x;case 963:return x.charCodeAt(5)===110?"-webkit-"+x+x:x;case 1009:if(x.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+x+x;case 978:return"-webkit-"+x+"-moz-"+x+x;case 1019:case 983:return"-webkit-"+x+"-moz-"+x+"-ms-"+x+x;case 883:if(x.charCodeAt(8)===45)return"-webkit-"+x+x;if(0<x.indexOf("image-set(",11))return x.replace(W,"$1-webkit-$2")+x;break;case 932:if(x.charCodeAt(4)===45)switch(x.charCodeAt(5)){case 103:return"-webkit-box-"+x.replace("-grow","")+"-webkit-"+x+"-ms-"+x.replace("grow","positive")+x;case 115:return"-webkit-"+x+"-ms-"+x.replace("shrink","negative")+x;case 98:return"-webkit-"+x+"-ms-"+x.replace("basis","preferred-size")+x}return"-webkit-"+x+"-ms-"+x+x;case 964:return"-webkit-"+x+"-ms-flex-"+x+x;case 1023:if(x.charCodeAt(8)!==99)break;return L=x.substring(x.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+L+"-webkit-"+x+"-ms-flex-pack"+L+x;case 1005:return m.test(x)?x.replace(h,":-webkit-")+x.replace(h,":-moz-")+x:x;case 1e3:switch(L=x.substring(13).trim(),M=L.indexOf("-")+1,L.charCodeAt(0)+L.charCodeAt(M)){case 226:L=x.replace(C,"tb");break;case 232:L=x.replace(C,"tb-rl");break;case 220:L=x.replace(C,"lr");break;default:return x}return"-webkit-"+x+"-ms-"+L+x;case 1017:if(x.indexOf("sticky",9)===-1)break;case 975:switch(M=(x=P).length-10,L=(x.charCodeAt(M)===33?x.substring(0,M):x).substring(P.indexOf(":",7)+1).trim(),ie=L.charCodeAt(0)+(L.charCodeAt(7)|0)){case 203:if(111>L.charCodeAt(8))break;case 115:x=x.replace(L,"-webkit-"+L)+";"+x;break;case 207:case 102:x=x.replace(L,"-webkit-"+(102<ie?"inline-":"")+"box")+";"+x.replace(L,"-webkit-"+L)+";"+x.replace(L,"-ms-"+L+"box")+";"+x}return x+";";case 938:if(x.charCodeAt(5)===45)switch(x.charCodeAt(6)){case 105:return L=x.replace("-items",""),"-webkit-"+x+"-webkit-box-"+L+"-ms-flex-"+L+x;case 115:return"-webkit-"+x+"-ms-flex-item-"+x.replace(I,"")+x;default:return"-webkit-"+x+"-ms-flex-line-pack"+x.replace("align-content","").replace(I,"")+x}break;case 973:case 989:if(x.charCodeAt(3)!==45||x.charCodeAt(4)===122)break;case 931:case 953:if(T.test(P)===!0)return(L=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?i(P.replace("stretch","fill-available"),M,A,B).replace(":fill-available",":stretch"):x.replace(L,"-webkit-"+L)+x.replace(L,"-moz-"+L.replace("fill-",""))+x;break;case 962:if(x="-webkit-"+x+(x.charCodeAt(5)===102?"-ms-"+x:"")+x,A+B===211&&x.charCodeAt(13)===105&&0<x.indexOf("transform",10))return x.substring(0,x.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+x}return x}function o(P,M){var A=P.indexOf(M===1?":":"{"),B=P.substring(0,M!==3?A:10);return A=P.substring(A+1,P.length-1),U(M!==2?B:B.replace(N,"$1"),A,M)}function s(P,M){var A=i(M,M.charCodeAt(0),M.charCodeAt(1),M.charCodeAt(2));return A!==M+";"?A.replace(E," or ($1)").substring(4):"("+M+")"}function a(P,M,A,B,x,ie,L,pe,te,oe){for(var Z=0,Ae=M,We;Z<R;++Z)switch(We=se[Z].call(u,P,Ae,A,B,x,ie,L,pe,te,oe)){case void 0:case!1:case!0:case null:break;default:Ae=We}if(Ae!==M)return Ae}function l(P){switch(P){case void 0:case null:R=se.length=0;break;default:if(typeof P=="function")se[R++]=P;else if(typeof P=="object")for(var M=0,A=P.length;M<A;++M)l(P[M]);else O=!!P|0}return l}function c(P){return P=P.prefix,P!==void 0&&(U=null,P?typeof P!="function"?$=1:($=2,U=P):$=0),c}function u(P,M){var A=P;if(33>A.charCodeAt(0)&&(A=A.trim()),X=A,A=[X],0<R){var B=a(-1,M,A,A,V,K,0,0,0,0);B!==void 0&&typeof B=="string"&&(M=B)}var x=t(J,A,M,0,0);return 0<R&&(B=a(-2,x,A,A,V,K,x.length,0,0,0),B!==void 0&&(x=B)),X="",F=0,K=V=1,x}var d=/^\0+/g,f=/[\0\r\f]/g,h=/: */g,m=/zoo|gra/,y=/([,: ])(transform)/g,S=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,_=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,I=/-self|flex-/g,N=/[^]*?(:[rp][el]a[\w-]+)[^]*/,T=/stretch|:\s*\w+\-(?:conte|avail)/,W=/([^-])(image-set\()/,K=1,V=1,F=0,$=1,J=[],se=[],R=0,U=null,O=0,X="";return u.use=l,u.set=c,e!==void 0&&c(e),u}var SR={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function aC(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var CR=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Kp=aC(function(e){return CR.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Yp={},ER={get exports(){return Yp},set exports(e){Yp=e}},Re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var St=typeof Symbol=="function"&&Symbol.for,Hg=St?Symbol.for("react.element"):60103,Vg=St?Symbol.for("react.portal"):60106,Fd=St?Symbol.for("react.fragment"):60107,zd=St?Symbol.for("react.strict_mode"):60108,Ud=St?Symbol.for("react.profiler"):60114,Bd=St?Symbol.for("react.provider"):60109,jd=St?Symbol.for("react.context"):60110,qg=St?Symbol.for("react.async_mode"):60111,Wd=St?Symbol.for("react.concurrent_mode"):60111,Hd=St?Symbol.for("react.forward_ref"):60112,Vd=St?Symbol.for("react.suspense"):60113,kR=St?Symbol.for("react.suspense_list"):60120,qd=St?Symbol.for("react.memo"):60115,Gd=St?Symbol.for("react.lazy"):60116,xR=St?Symbol.for("react.block"):60121,IR=St?Symbol.for("react.fundamental"):60117,TR=St?Symbol.for("react.responder"):60118,RR=St?Symbol.for("react.scope"):60119;function pn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Hg:switch(e=e.type,e){case qg:case Wd:case Fd:case Ud:case zd:case Vd:return e;default:switch(e=e&&e.$$typeof,e){case jd:case Hd:case Gd:case qd:case Bd:return e;default:return t}}case Vg:return t}}}function lC(e){return pn(e)===Wd}Re.AsyncMode=qg;Re.ConcurrentMode=Wd;Re.ContextConsumer=jd;Re.ContextProvider=Bd;Re.Element=Hg;Re.ForwardRef=Hd;Re.Fragment=Fd;Re.Lazy=Gd;Re.Memo=qd;Re.Portal=Vg;Re.Profiler=Ud;Re.StrictMode=zd;Re.Suspense=Vd;Re.isAsyncMode=function(e){return lC(e)||pn(e)===qg};Re.isConcurrentMode=lC;Re.isContextConsumer=function(e){return pn(e)===jd};Re.isContextProvider=function(e){return pn(e)===Bd};Re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hg};Re.isForwardRef=function(e){return pn(e)===Hd};Re.isFragment=function(e){return pn(e)===Fd};Re.isLazy=function(e){return pn(e)===Gd};Re.isMemo=function(e){return pn(e)===qd};Re.isPortal=function(e){return pn(e)===Vg};Re.isProfiler=function(e){return pn(e)===Ud};Re.isStrictMode=function(e){return pn(e)===zd};Re.isSuspense=function(e){return pn(e)===Vd};Re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fd||e===Wd||e===Ud||e===zd||e===Vd||e===kR||typeof e=="object"&&e!==null&&(e.$$typeof===Gd||e.$$typeof===qd||e.$$typeof===Bd||e.$$typeof===jd||e.$$typeof===Hd||e.$$typeof===IR||e.$$typeof===TR||e.$$typeof===RR||e.$$typeof===xR)};Re.typeOf=pn;(function(e){e.exports=Re})(ER);var Gg=Yp,PR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},AR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},NR={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kg={};Kg[Gg.ForwardRef]=NR;Kg[Gg.Memo]=cC;function H0(e){return Gg.isMemo(e)?cC:Kg[e.$$typeof]||PR}var OR=Object.defineProperty,MR=Object.getOwnPropertyNames,V0=Object.getOwnPropertySymbols,LR=Object.getOwnPropertyDescriptor,DR=Object.getPrototypeOf,q0=Object.prototype;function uC(e,t,n){if(typeof t!="string"){if(q0){var r=DR(t);r&&r!==q0&&uC(e,r,n)}var i=MR(t);V0&&(i=i.concat(V0(t)));for(var o=H0(e),s=H0(t),a=0;a<i.length;++a){var l=i[a];if(!AR[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var c=LR(t,l);try{OR(e,l,c)}catch{}}}}return e}var $R=uC;function lr(){return(lr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var G0=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Qp=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Au.typeOf(e)},Nu=Object.freeze([]),Jr=Object.freeze({});function Za(e){return typeof e=="function"}function K0(e){return e.displayName||e.name||"Component"}function Yg(e){return e&&typeof e.styledComponentId=="string"}var ds=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Qg=typeof window<"u"&&"HTMLElement"in window,FR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function $l(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var zR=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&$l(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),c=0,u=r.length;c<u;c++)this.tag.insertRule(l,r[c])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Qc=new Map,Ou=new Map,ba=1,bc=function(e){if(Qc.has(e))return Qc.get(e);for(;Ou.has(ba);)ba++;var t=ba++;return Qc.set(e,t),Ou.set(t,e),t},UR=function(e){return Ou.get(e)},BR=function(e,t){t>=ba&&(ba=t+1),Qc.set(e,t),Ou.set(t,e)},jR="style["+ds+'][data-styled-version="5.3.10"]',WR=new RegExp("^"+ds+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),HR=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},VR=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(WR);if(a){var l=0|parseInt(a[1],10),c=a[2];l!==0&&(BR(c,l),HR(e,c,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},qR=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},dC=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,c=l.length;c>=0;c--){var u=l[c];if(u&&u.nodeType===1&&u.hasAttribute(ds))return u}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ds,"active"),r.setAttribute("data-styled-version","5.3.10");var s=qR();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},GR=function(){function e(n){var r=this.element=dC(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}$l(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),KR=function(){function e(n){var r=this.element=dC(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),YR=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Y0=Qg,QR={isServer:!Qg,useCSSOMInjection:!FR},fC=function(){function e(n,r,i){n===void 0&&(n=Jr),r===void 0&&(r={}),this.options=lr({},QR,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Qg&&Y0&&(Y0=!1,function(o){for(var s=document.querySelectorAll(jR),a=0,l=s.length;a<l;a++){var c=s[a];c&&c.getAttribute(ds)!=="active"&&(VR(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return bc(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(lr({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new YR(s):o?new GR(s):new KR(s),new zR(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(bc(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(bc(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(bc(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=UR(s);if(a!==void 0){var l=n.names.get(a),c=r.getGroup(s);if(l&&c&&l.size){var u=ds+".g"+s+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(f){f.length>0&&(d+=f+",")}),o+=""+c+u+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),XR=/(a)(d)/gi,Q0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Xp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q0(t%52)+n;return(Q0(t%52)+n).replace(XR,"$1-$2")}var Oo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hC=function(e){return Oo(5381,e)};function JR(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Za(n)&&!Yg(n))return!1}return!0}var ZR=hC("5.3.10"),eP=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&JR(t),this.componentId=n,this.baseHash=Oo(ZR,n),this.baseStyle=r,fC.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=fs(this.rules,t,n,r).join(""),a=Xp(Oo(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,u=Oo(this.baseHash,r.hash),d="",f=0;f<c;f++){var h=this.rules[f];if(typeof h=="string")d+=h;else if(h){var m=fs(h,t,n,r),y=Array.isArray(m)?m.join(""):m;u=Oo(u,y+f),d+=y}}if(d){var S=Xp(u>>>0);if(!n.hasNameForId(i,S)){var g=r(d,"."+S,void 0,i);n.insertRules(i,S,g)}o.push(S)}}return o.join(" ")},e}(),tP=/^\s*\/\/.*$/gm,nP=[":","[",".","#"];function rP(e){var t,n,r,i,o=e===void 0?Jr:e,s=o.options,a=s===void 0?Jr:s,l=o.plugins,c=l===void 0?Nu:l,u=new bR(a),d=[],f=function(y){function S(g){if(g)try{y(g+"}")}catch{}}return function(g,p,v,_,C,k,E,I,N,T){switch(g){case 1:if(N===0&&p.charCodeAt(0)===64)return y(p+";"),"";break;case 2:if(I===0)return p+"/*|*/";break;case 3:switch(I){case 102:case 112:return y(v[0]+p),"";default:return p+(T===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(S)}}}(function(y){d.push(y)}),h=function(y,S,g){return S===0&&nP.indexOf(g[n.length])!==-1||g.match(i)?y:"."+t};function m(y,S,g,p){p===void 0&&(p="&");var v=y.replace(tP,""),_=S&&g?g+" "+S+" { "+v+" }":v;return t=p,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),u(g||!S?"":S,_)}return u.use([].concat(c,[function(y,S,g){y===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,h))},f,function(y){if(y===-2){var S=d;return d=[],S}}])),m.hash=c.length?c.reduce(function(y,S){return S.name||$l(15),Oo(y,S.name)},5381).toString():"",m}var pC=qe.createContext();pC.Consumer;var mC=qe.createContext(),iP=(mC.Consumer,new fC),Jp=rP();function oP(){return w.useContext(pC)||iP}function sP(){return w.useContext(mC)||Jp}var aP=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Jp);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return $l(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Jp),this.name+t.hash},e}(),lP=/([A-Z])/,cP=/([A-Z])/g,uP=/^ms-/,dP=function(e){return"-"+e.toLowerCase()};function X0(e){return lP.test(e)?e.replace(cP,dP).replace(uP,"-ms-"):e}var J0=function(e){return e==null||e===!1||e===""};function fs(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=fs(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(J0(e))return"";if(Yg(e))return"."+e.styledComponentId;if(Za(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var l=e(t);return fs(l,t,n,r)}var c;return e instanceof aP?n?(e.inject(n,r),e.getName(r)):e:Qp(e)?function u(d,f){var h,m,y=[];for(var S in d)d.hasOwnProperty(S)&&!J0(d[S])&&(Array.isArray(d[S])&&d[S].isCss||Za(d[S])?y.push(X0(S)+":",d[S],";"):Qp(d[S])?y.push.apply(y,u(d[S],S)):y.push(X0(S)+": "+(h=S,(m=d[S])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||h in SR||h.startsWith("--")?String(m).trim():m+"px")+";"));return f?[f+" {"].concat(y,["}"]):y}(e):e.toString()}var Z0=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function fP(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Za(e)||Qp(e)?Z0(fs(G0(Nu,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Z0(fs(G0(e,n)))}var hP=function(e,t,n){return n===void 0&&(n=Jr),e.theme!==n.theme&&e.theme||t||n.theme},pP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mP=/(^-|-$)/g;function mh(e){return e.replace(pP,"-").replace(mP,"")}var gP=function(e){return Xp(hC(e)>>>0)};function Sc(e){return typeof e=="string"&&!0}var Zp=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},vP=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function yP(e,t,n){var r=e[n];Zp(t)&&Zp(r)?gC(r,t):e[n]=t}function gC(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(Zp(s))for(var a in s)vP(a)&&yP(e,s[a],a)}return e}var vC=qe.createContext();vC.Consumer;var gh={};function yC(e,t,n){var r=Yg(e),i=!Sc(e),o=t.attrs,s=o===void 0?Nu:o,a=t.componentId,l=a===void 0?function(p,v){var _=typeof p!="string"?"sc":mh(p);gh[_]=(gh[_]||0)+1;var C=_+"-"+gP("5.3.10"+_+gh[_]);return v?v+"-"+C:C}(t.displayName,t.parentComponentId):a,c=t.displayName,u=c===void 0?function(p){return Sc(p)?"styled."+p:"Styled("+K0(p)+")"}(e):c,d=t.displayName&&t.componentId?mh(t.displayName)+"-"+t.componentId:t.componentId||l,f=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(p,v,_){return e.shouldForwardProp(p,v,_)&&t.shouldForwardProp(p,v,_)}:e.shouldForwardProp);var m,y=new eP(n,d,r?e.componentStyle:void 0),S=y.isStatic&&s.length===0,g=function(p,v){return function(_,C,k,E){var I=_.attrs,N=_.componentStyle,T=_.defaultProps,W=_.foldedComponentIds,K=_.shouldForwardProp,V=_.styledComponentId,F=_.target,$=function(B,x,ie){B===void 0&&(B=Jr);var L=lr({},x,{theme:B}),pe={};return ie.forEach(function(te){var oe,Z,Ae,We=te;for(oe in Za(We)&&(We=We(L)),We)L[oe]=pe[oe]=oe==="className"?(Z=pe[oe],Ae=We[oe],Z&&Ae?Z+" "+Ae:Z||Ae):We[oe]}),[L,pe]}(hP(C,w.useContext(vC),T)||Jr,C,I),J=$[0],se=$[1],R=function(B,x,ie,L){var pe=oP(),te=sP(),oe=x?B.generateAndInjectStyles(Jr,pe,te):B.generateAndInjectStyles(ie,pe,te);return oe}(N,E,J),U=k,O=se.$as||C.$as||se.as||C.as||F,X=Sc(O),P=se!==C?lr({},C,{},se):C,M={};for(var A in P)A[0]!=="$"&&A!=="as"&&(A==="forwardedAs"?M.as=P[A]:(K?K(A,Kp,O):!X||Kp(A))&&(M[A]=P[A]));return C.style&&se.style!==C.style&&(M.style=lr({},C.style,{},se.style)),M.className=Array.prototype.concat(W,V,R!==V?R:null,C.className,se.className).filter(Boolean).join(" "),M.ref=U,w.createElement(O,M)}(m,p,v,S)};return g.displayName=u,(m=qe.forwardRef(g)).attrs=f,m.componentStyle=y,m.displayName=u,m.shouldForwardProp=h,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Nu,m.styledComponentId=d,m.target=r?e.target:e,m.withComponent=function(p){var v=t.componentId,_=function(k,E){if(k==null)return{};var I,N,T={},W=Object.keys(k);for(N=0;N<W.length;N++)I=W[N],E.indexOf(I)>=0||(T[I]=k[I]);return T}(t,["componentId"]),C=v&&v+"-"+(Sc(p)?p:mh(K0(p)));return yC(p,lr({},_,{attrs:f,componentId:C}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?gC({},e.defaultProps,p):p}}),Object.defineProperty(m,"toString",{value:function(){return"."+m.styledComponentId}}),i&&$R(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var em=function(e){return function t(n,r,i){if(i===void 0&&(i=Jr),!Au.isValidElementType(r))return $l(1,String(r));var o=function(){return n(r,i,fP.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,lr({},i,{},s))},o.attrs=function(s){return t(n,r,lr({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(yC,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){em[e]=em(e)});const H=em,Go=H.span`
  font-weight: 400;
`,_C="#ccc6c4",wC="rgba(255, 255, 255, 0.61)",_P="0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px -1px rgba(0, 0, 0, 0.2);",wP="#8992cd",bP="#665e5b",oo=H.div`
  background-image: ${e=>`url(${e.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Es=H.span`
  margin-top: 10vh;
  margin-left: 5vw;
  height: 80%;
`,SP=H.span`
  display: flex;
  justify-content: space-between;
`,CP=H.span`
  width: 53%;
`,EP=H.span`
  width: 47%;
`,bC=H.span`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
`,SC=H.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -60px auto;
  padding: 30px;
  width: 50%;
  height: 80%;
  border-radius: 10px;
  background-color: ${wC};

  ${e=>e.login&&`
    margin: -50px auto;
    width: 30%;
    height: 75%;
    border-radius: 15px;
  `}
`,Xg=H.a`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  color: ${bP};
  cursor: pointer;
`,Xc=H.p`
  color: red;
  font-size: 10px;
  padding: 2px 10px;
`,kP=H.div`
  max-width: 600px;
  margin: 0 auto;
`,xP=H.h1`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 0px;
  padding-bottom: 10px;
  text-align: center;
`,IP=H.h2`
  font-style: normal;
  font-weight: 100;
  font-size: 30px;
  width: 535px;
`,TP=()=>{const[e,t]=w.useState(".");return w.useEffect(()=>{const n=setInterval(()=>{t(r=>r.length<3?r+".":".")},600);return()=>{clearInterval(n)}},[]),j(IP,{children:["Connecting you to the care you need",e]})},RP=()=>b(oo,{image:"../../results.jpg",children:j(kP,{children:[b(xP,{children:"ConnectedSpine"}),b(TP,{})]})});/**
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
 */const CC={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const z=function(e,t){if(!e)throw ks(t)},ks=function(e){return new Error("Firebase Database ("+CC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const EC=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},PP=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Jg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=o>>2,d=(o&3)<<4|a>>4;let f=(a&15)<<2|c>>6,h=c&63;l||(h=64,s||(f=64)),r.push(n[u],n[d],n[f],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(EC(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):PP(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||c==null||d==null)throw new AP;const f=o<<2|a>>4;if(r.push(f),c!==64){const h=a<<4&240|c>>2;if(r.push(h),d!==64){const m=c<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class AP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kC=function(e){const t=EC(e);return Jg.encodeByteArray(t,!0)},Mu=function(e){return kC(e).replace(/\./g,"")},Lu=function(e){try{return Jg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function NP(e){return xC(void 0,e)}function xC(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!OP(n)||(e[n]=xC(e[n],t[n]));return e}function OP(e){return e!=="__proto__"}/**
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
 */function MP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const LP=()=>MP().__FIREBASE_DEFAULTS__,DP=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},$P=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Lu(e[1]);return t&&JSON.parse(t)},Zg=()=>{try{return LP()||DP()||$P()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},IC=e=>{var t,n;return(n=(t=Zg())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},FP=e=>{const t=IC(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},zP=()=>{var e;return(e=Zg())===null||e===void 0?void 0:e.config},TC=e=>{var t;return(t=Zg())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class ev{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function UP(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Mu(JSON.stringify(n)),Mu(JSON.stringify(s)),a].join(".")}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function RC(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function PC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BP(){const e=$t();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function AC(){return CC.NODE_ADMIN===!0}function NC(){try{return typeof indexedDB=="object"}catch{return!1}}function OC(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function jP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const WP="FirebaseError";class nr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=WP,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?HP(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new nr(i,a,r)}}function HP(e,t){return e.replace(VP,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const VP=/\{\$([^}]+)}/g;/**
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
 */function el(e){return JSON.parse(e)}function wt(e){return JSON.stringify(e)}/**
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
 */const MC=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=el(Lu(o[0])||""),n=el(Lu(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},qP=function(e){const t=MC(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},GP=function(e){const t=MC(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function kr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function hs(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function tm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Du(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function tl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(e1(o)&&e1(s)){if(!tl(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function e1(e){return e!==null&&typeof e=="object"}/**
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
 */function xs(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function la(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function ca(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
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
 */class KP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)r[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],o=this.chain_[1],s=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^o&(s^a),u=1518500249):(c=o^s^a,u=1859775393):d<60?(c=o&s|a&(o|s),u=2400959708):(c=o^s^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=s,s=(o<<30|o>>>2)&4294967295,o=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const o=this.buf_;let s=this.inbuf_;for(;i<n;){if(s===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(o[s]=t.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}else for(;i<n;)if(o[s]=t[i],++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}this.inbuf_=s,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let o=24;o>=0;o-=8)t[r]=this.chain_[i]>>o&255,++r;return t}}function YP(e,t){const n=new QP(e,t);return n.subscribe.bind(n)}class QP{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XP(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=vh),i.error===void 0&&(i.error=vh),i.complete===void 0&&(i.complete=vh);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XP(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function vh(){}function LC(e,t){return`${e} failed: ${t} argument `}/**
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
 */const JP=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const o=i-55296;r++,z(r<e.length,"Surrogate pair missing trail surrogate.");const s=e.charCodeAt(r)-56320;i=65536+(o<<10)+s}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Kd=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
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
 */const ZP=1e3,eA=2,tA=4*60*60*1e3,nA=.5;function t1(e,t=ZP,n=eA){const r=t*Math.pow(n,e),i=Math.round(nA*r*(Math.random()-.5)*2);return Math.min(tA,r+i)}/**
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
 */const bi="[DEFAULT]";/**
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
 */let rA=class{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new ev;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(oA(t))try{this.getOrInitializeService({instanceIdentifier:bi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=bi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=bi){return this.instances.has(t)}getOptions(t=bi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iA(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=bi){return this.component?this.component.multipleInstances?t:bi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function iA(e){return e===bi?void 0:e}function oA(e){return e.instantiationMode==="EAGER"}/**
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
 */class sA{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new rA(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Ne||(Ne={}));const aA={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},lA=Ne.INFO,cA={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},uA=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=cA[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Yd{constructor(t){this.name=t,this._logLevel=lA,this._logHandler=uA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ne))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?aA[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...t),this._logHandler(this,Ne.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...t),this._logHandler(this,Ne.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...t),this._logHandler(this,Ne.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...t),this._logHandler(this,Ne.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...t),this._logHandler(this,Ne.ERROR,...t)}}const dA=(e,t)=>t.some(n=>e instanceof n);let n1,r1;function fA(){return n1||(n1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hA(){return r1||(r1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const DC=new WeakMap,nm=new WeakMap,$C=new WeakMap,yh=new WeakMap,nv=new WeakMap;function pA(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Zr(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&DC.set(n,e)}).catch(()=>{}),nv.set(t,e),t}function mA(e){if(nm.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});nm.set(e,t)}let rm={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return nm.get(e);if(t==="objectStoreNames")return e.objectStoreNames||$C.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function gA(e){rm=e(rm)}function vA(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(_h(this),t,...n);return $C.set(r,t.sort?t.sort():[t]),Zr(r)}:hA().includes(e)?function(...t){return e.apply(_h(this),t),Zr(DC.get(this))}:function(...t){return Zr(e.apply(_h(this),t))}}function yA(e){return typeof e=="function"?vA(e):(e instanceof IDBTransaction&&mA(e),dA(e,fA())?new Proxy(e,rm):e)}function Zr(e){if(e instanceof IDBRequest)return pA(e);if(yh.has(e))return yh.get(e);const t=yA(e);return t!==e&&(yh.set(e,t),nv.set(t,e)),t}const _h=e=>nv.get(e);function _A(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Zr(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Zr(s.result),l.oldVersion,l.newVersion,Zr(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const wA=["get","getKey","getAll","getAllKeys","count"],bA=["put","add","delete","clear"],wh=new Map;function i1(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(wh.get(t))return wh.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=bA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wA.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return wh.set(t,o),o}gA(e=>({...e,get:(t,n,r)=>i1(t,n)||e.get(t,n,r),has:(t,n)=>!!i1(t,n)||e.has(t,n)}));/**
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
 */class SA{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CA(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const im="@firebase/app",o1="0.9.9";/**
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
 */const Hi=new Yd("@firebase/app"),EA="@firebase/app-compat",kA="@firebase/analytics-compat",xA="@firebase/analytics",IA="@firebase/app-check-compat",TA="@firebase/app-check",RA="@firebase/auth",PA="@firebase/auth-compat",AA="@firebase/database",NA="@firebase/database-compat",OA="@firebase/functions",MA="@firebase/functions-compat",LA="@firebase/installations",DA="@firebase/installations-compat",$A="@firebase/messaging",FA="@firebase/messaging-compat",zA="@firebase/performance",UA="@firebase/performance-compat",BA="@firebase/remote-config",jA="@firebase/remote-config-compat",WA="@firebase/storage",HA="@firebase/storage-compat",VA="@firebase/firestore",qA="@firebase/firestore-compat",GA="firebase",KA="9.21.0";/**
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
 */const om="[DEFAULT]",YA={[im]:"fire-core",[EA]:"fire-core-compat",[xA]:"fire-analytics",[kA]:"fire-analytics-compat",[TA]:"fire-app-check",[IA]:"fire-app-check-compat",[RA]:"fire-auth",[PA]:"fire-auth-compat",[AA]:"fire-rtdb",[NA]:"fire-rtdb-compat",[OA]:"fire-fn",[MA]:"fire-fn-compat",[LA]:"fire-iid",[DA]:"fire-iid-compat",[$A]:"fire-fcm",[FA]:"fire-fcm-compat",[zA]:"fire-perf",[UA]:"fire-perf-compat",[BA]:"fire-rc",[jA]:"fire-rc-compat",[WA]:"fire-gcs",[HA]:"fire-gcs-compat",[VA]:"fire-fst",[qA]:"fire-fst-compat","fire-js":"fire-js",[GA]:"fire-js-all"};/**
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
 */const $u=new Map,sm=new Map;function QA(e,t){try{e.container.addComponent(t)}catch(n){Hi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function tr(e){const t=e.name;if(sm.has(t))return Hi.debug(`There were multiple attempts to register component ${t}.`),!1;sm.set(t,e);for(const n of $u.values())QA(n,e);return!0}function ao(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const XA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ei=new so("app","Firebase",XA);/**
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
 */class JA{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ei.create("app-deleted",{appName:this._name})}}/**
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
 */const Is=KA;function FC(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:om,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw ei.create("bad-app-name",{appName:String(i)});if(n||(n=zP()),!n)throw ei.create("no-options");const o=$u.get(i);if(o){if(tl(n,o.options)&&tl(r,o.config))return o;throw ei.create("duplicate-app",{appName:i})}const s=new sA(i);for(const l of sm.values())s.addComponent(l);const a=new JA(n,r,s);return $u.set(i,a),a}function rv(e=om){const t=$u.get(e);if(!t&&e===om)return FC();if(!t)throw ei.create("no-app",{appName:e});return t}function Sn(e,t,n){var r;let i=(r=YA[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Hi.warn(a.join(" "));return}tr(new zn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const ZA="firebase-heartbeat-database",eN=1,nl="firebase-heartbeat-store";let bh=null;function zC(){return bh||(bh=_A(ZA,eN,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(nl)}}}).catch(e=>{throw ei.create("idb-open",{originalErrorMessage:e.message})})),bh}async function tN(e){try{return(await zC()).transaction(nl).objectStore(nl).get(UC(e))}catch(t){if(t instanceof nr)Hi.warn(t.message);else{const n=ei.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Hi.warn(n.message)}}}async function s1(e,t){try{const r=(await zC()).transaction(nl,"readwrite");return await r.objectStore(nl).put(t,UC(e)),r.done}catch(n){if(n instanceof nr)Hi.warn(n.message);else{const r=ei.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hi.warn(r.message)}}}function UC(e){return`${e.name}!${e.options.appId}`}/**
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
 */const nN=1024,rN=30*24*60*60*1e3;class iN{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=a1();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=rN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=a1(),{heartbeatsToSend:n,unsentEntries:r}=oN(this._heartbeatsCache.heartbeats),i=Mu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function a1(){return new Date().toISOString().substring(0,10)}function oN(e,t=nN){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),l1(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),l1(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sN{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NC()?OC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return s1(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return s1(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function l1(e){return Mu(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function aN(e){tr(new zn("platform-logger",t=>new SA(t),"PRIVATE")),tr(new zn("heartbeat",t=>new iN(t),"PRIVATE")),Sn(im,o1,e),Sn(im,o1,"esm2017"),Sn("fire-js","")}aN("");var lN="firebase",cN="9.21.0";/**
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
 */Sn(lN,cN,"app");const c1="@firebase/database",u1="0.14.4";/**
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
 */let BC="";function uN(e){BC=e}/**
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
 */class dN{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),wt(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:el(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class fN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return kr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const jC=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new dN(t)}}catch{}return new fN},Ri=jC("localStorage"),am=jC("sessionStorage");/**
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
 */const Ko=new Yd("@firebase/database"),hN=function(){let e=1;return function(){return e++}}(),WC=function(e){const t=JP(e),n=new KP;n.update(t);const r=n.digest();return Jg.encodeByteArray(r)},Fl=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Fl.apply(null,r):typeof r=="object"?t+=wt(r):t+=r,t+=" "}return t};let $i=null,d1=!0;const pN=function(e,t){z(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Ko.logLevel=Ne.VERBOSE,$i=Ko.log.bind(Ko),t&&am.set("logging_enabled",!0)):typeof e=="function"?$i=e:($i=null,am.remove("logging_enabled"))},Mt=function(...e){if(d1===!0&&(d1=!1,$i===null&&am.get("logging_enabled")===!0&&pN(!0)),$i){const t=Fl.apply(null,e);$i(t)}},zl=function(e){return function(...t){Mt(e,...t)}},lm=function(...e){const t="FIREBASE INTERNAL ERROR: "+Fl(...e);Ko.error(t)},yr=function(...e){const t=`FIREBASE FATAL ERROR: ${Fl(...e)}`;throw Ko.error(t),new Error(t)},an=function(...e){const t="FIREBASE WARNING: "+Fl(...e);Ko.warn(t)},mN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&an("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},HC=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},gN=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ps="[MIN_NAME]",Vi="[MAX_NAME]",Ts=function(e,t){if(e===t)return 0;if(e===ps||t===Vi)return-1;if(t===ps||e===Vi)return 1;{const n=f1(e),r=f1(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},vN=function(e,t){return e===t?0:e<t?-1:1},qs=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+wt(t))},iv=function(e){if(typeof e!="object"||e===null)return wt(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=wt(t[r]),n+=":",n+=iv(e[t[r]]);return n+="}",n},VC=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Zt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const qC=function(e){z(!HC(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,o,s,a,l;e===0?(o=0,s=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=a+r,s=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(e/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},yN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_N=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wN(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const bN=new RegExp("^-?(0*)\\d{1,10}$"),SN=-2147483648,CN=2147483647,f1=function(e){if(bN.test(e)){const t=Number(e);if(t>=SN&&t<=CN)return t}return null},Ul=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw an("Exception was thrown by user callback.",n),t},Math.floor(0))}},EN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Sa=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class kN{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){an(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class xN{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',an(t)}}class Yo{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Yo.OWNER="owner";/**
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
 */const ov="5",GC="v",KC="s",YC="r",QC="f",XC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,JC="ls",ZC="p",cm="ac",eE="websocket",tE="long_polling";/**
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
 */class nE{constructor(t,n,r,i,o=!1,s="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ri.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Ri.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function IN(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function rE(e,t,n){z(typeof t=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let r;if(t===eE)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===tE)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);IN(e)&&(n.ns=e.namespace);const i=[];return Zt(n,(o,s)=>{i.push(o+"="+s)}),r+i.join("&")}/**
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
 */class TN{constructor(){this.counters_={}}incrementCounter(t,n=1){kr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return NP(this.counters_)}}/**
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
 */const Sh={},Ch={};function sv(e){const t=e.toString();return Sh[t]||(Sh[t]=new TN),Sh[t]}function RN(e,t){const n=e.toString();return Ch[n]||(Ch[n]=t()),Ch[n]}/**
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
 */class PN{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ul(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const h1="start",AN="close",NN="pLPCommand",ON="pRTLPCB",iE="id",oE="pw",sE="ser",MN="cb",LN="seg",DN="ts",$N="d",FN="dframe",aE=1870,lE=30,zN=aE-lE,UN=25e3,BN=3e4;class Mo{constructor(t,n,r,i,o,s,a){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zl(t),this.stats_=sv(n),this.urlFn=l=>(this.appCheckToken&&(l[cm]=this.appCheckToken),rE(n,tE,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new PN(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(BN)),gN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new av((...o)=>{const[s,a,l,c,u]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===h1)this.id=a,this.password=l;else if(s===AN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...o)=>{const[s,a]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(s,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[h1]="t",r[sE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[MN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[GC]=ov,this.transportSessionId&&(r[KC]=this.transportSessionId),this.lastSessionId&&(r[JC]=this.lastSessionId),this.applicationId&&(r[ZC]=this.applicationId),this.appCheckToken&&(r[cm]=this.appCheckToken),typeof location<"u"&&location.hostname&&XC.test(location.hostname)&&(r[YC]=QC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mo.forceAllow_=!0}static forceDisallow(){Mo.forceDisallow_=!0}static isAvailable(){return Mo.forceAllow_?!0:!Mo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yN()&&!_N()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=wt(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=kC(n),i=VC(r,zN);for(let o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[FN]="t",r[iE]=t,r[oE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=wt(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class av{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hN(),window[NN+this.uniqueCallbackIdentifier]=t,window[ON+this.uniqueCallbackIdentifier]=n,this.myIFrame=av.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(a){Mt("frame writing exception"),a.stack&&Mt(a.stack),Mt(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Mt("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[iE]=this.myID,t[oE]=this.myPW,t[sE]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lE+r.length<=aE;){const s=this.pendingSegs.shift();r=r+"&"+LN+i+"="+s.seg+"&"+DN+i+"="+s.ts+"&"+$N+i+"="+s.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(UN)),o=()=>{clearTimeout(i),r()};this.addTag(t,o)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Mt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const jN=16384,WN=45e3;let Fu=null;typeof MozWebSocket<"u"?Fu=MozWebSocket:typeof WebSocket<"u"&&(Fu=WebSocket);class An{constructor(t,n,r,i,o,s,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zl(this.connId),this.stats_=sv(n),this.connURL=An.connectionURL_(n,s,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,o){const s={};return s[GC]=ov,typeof location<"u"&&location.hostname&&XC.test(location.hostname)&&(s[YC]=QC),n&&(s[KC]=n),r&&(s[JC]=r),i&&(s[cm]=i),o&&(s[ZC]=o),rE(t,eE,s)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ri.set("previous_websocket_failure",!0);try{let r;AC(),this.mySock=new Fu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){An.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&Fu!==null&&!An.forceDisallow_}static previouslyFailed(){return Ri.isInMemoryStorage||Ri.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ri.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=el(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(z(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=wt(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=VC(n,jN);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(WN))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}An.responsesRequiredToBeHealthy=2;An.healthyTimeout=3e4;/**
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
 */class rl{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Mo,An]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=An&&An.isAvailable();let r=n&&!An.previouslyFailed();if(t.webSocketOnly&&(n||an("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[An];else{const i=this.transports_=[];for(const o of rl.ALL_TRANSPORTS)o&&o.isAvailable()&&i.push(o);rl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}rl.globalTransportInitialized_=!1;/**
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
 */const HN=6e4,VN=5e3,qN=10*1024,GN=100*1024,Eh="t",p1="d",KN="s",m1="r",YN="e",g1="o",v1="a",y1="n",_1="p",QN="h";class XN{constructor(t,n,r,i,o,s,a,l,c,u){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zl("c:"+this.id+":"),this.transportManager_=new rl(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Sa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>GN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Eh in t){const n=t[Eh];n===v1?this.upgradeIfSecondaryHealthy_():n===m1?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===g1&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=qs("t",t),r=qs("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_1,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:v1,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:y1,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=qs("t",t),r=qs("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=qs(Eh,t);if(p1 in t){const r=t[p1];if(n===QN){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===y1){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===KN?this.onConnectionShutdown_(r):n===m1?this.onReset_(r):n===YN?lm("Server Error: "+r):n===g1?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lm("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ov!==r&&an("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Sa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(HN))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Sa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(VN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_1,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ri.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class cE{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
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
 */class uE{constructor(t){this.allowedEvents_=t,this.listeners_={},z(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}}validateEventType_(t){z(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
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
 */class zu extends uE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!tv()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new zu}getInitialEvent(t){return z(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const w1=32,b1=768;class Oe{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function ke(){return new Oe("")}function ve(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ai(e){return e.pieces_.length-e.pieceNum_}function Le(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Oe(e.pieces_,t)}function dE(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function JN(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function fE(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function hE(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Oe(t,0)}function ht(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Oe)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Oe(n,0)}function ye(e){return e.pieceNum_>=e.pieces_.length}function Gt(e,t){const n=ve(e),r=ve(t);if(n===null)return t;if(n===r)return Gt(Le(e),Le(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function lv(e,t){if(ai(e)!==ai(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Nn(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(ai(e)>ai(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class ZN{constructor(t,n){this.errorPrefix_=n,this.parts_=fE(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Kd(this.parts_[r]);pE(this)}}function eO(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Kd(t),pE(e)}function tO(e){const t=e.parts_.pop();e.byteLength_-=Kd(t),e.parts_.length>0&&(e.byteLength_-=1)}function pE(e){if(e.byteLength_>b1)throw new Error(e.errorPrefix_+"has a key path longer than "+b1+" bytes ("+e.byteLength_+").");if(e.parts_.length>w1)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+w1+") or object contains a cycle "+Si(e))}function Si(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class cv extends uE{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new cv}getInitialEvent(t){return z(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const Gs=1e3,nO=60*5*1e3,S1=30*1e3,rO=1.3,iO=3e4,oO="server_kill",C1=3;class hr extends cE{constructor(t,n,r,i,o,s,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=hr.nextPersistentConnectionId_++,this.log_=zl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gs,this.maxReconnectDelay_=nO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!AC())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cv.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&zu.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,o={r:i,a:t,b:n};this.log_(wt(o)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new ev,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:s=>{const a=s.d;s.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(t,n,r,i){this.initConnection_();const o=t._queryIdentifier,s=t._path.toString();this.log_("Listen called for "+s+" "+o),this.listens.has(s)||this.listens.set(s,new Map),z(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(s).has(o),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(s).set(o,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const o={p:r},s="q";t.tag&&(o.q=n._queryObject,o.t=t.tag),o.h=t.hashFn(),this.sendRequest(s,o,a=>{const l=a.d,c=a.s;hr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(c,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&kr(t,"w")){const r=hs(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();an(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||GP(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=S1)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=qP(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const o=i.s,s=i.d||"error";this.authToken_===t&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),z(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const o={p:t},s="n";i&&(o.q=r,o.t=i),this.sendRequest(s,o)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const o={p:n,d:r};this.log_("onDisconnect "+t,o),this.sendRequest(t,o,s=>{i&&setTimeout(()=>{i(s.s,s.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,o){this.initConnection_();const s={p:n,d:r};o!==void 0&&(s.h=o),this.outstandingPuts_.push({action:t,request:s,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(o.s,o.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const o=r.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+wt(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):lm("Unrecognized action received from server: "+wt(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>iO&&(this.reconnectDelay_=Gs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+hr.nextConnectionId_++,o=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,r())},c=function(d){z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?Mt("getToken() completed but was canceled"):(Mt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new XN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,h=>{an(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(oO)},o))}catch(d){this.log_("Failed to get token: "+d),s||(this.repoInfo_.nodeAdmin&&an(d),l())}}}interrupt(t){Mt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Mt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],tm(this.interruptReasons_)&&(this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(o=>iv(o)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new Oe(t).toString();let i;if(this.listens.has(r)){const o=this.listens.get(r);i=o.get(n),o.delete(n),o.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){Mt("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=C1&&(this.reconnectDelay_=S1,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Mt("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=C1&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+BC.replace(/\./g,"-")]=1,tv()?t["framework.cordova"]=1:PC()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=zu.getInstance().currentlyOnline();return tm(this.interruptReasons_)&&t}}hr.nextPersistentConnectionId_=0;hr.nextConnectionId_=0;/**
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
 */class Qd{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new ge(ps,t),i=new ge(ps,n);return this.compare(r,i)!==0}minPost(){return ge.MIN}}/**
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
 */let Cc;class mE extends Qd{static get __EMPTY_NODE(){return Cc}static set __EMPTY_NODE(t){Cc=t}compare(t,n){return Ts(t.name,n.name)}isDefinedOn(t){throw ks("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return ge.MIN}maxPost(){return new ge(Vi,Cc)}makePost(t,n){return z(typeof t=="string","KeyIndex indexValue must always be a string."),new ge(t,Cc)}toString(){return".key"}}const Qo=new mE;/**
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
 */class Ec{constructor(t,n,r,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let s=1;for(;!t.isEmpty();)if(t=t,s=n?r(t.key,n):1,i&&(s*=-1),s<0)this.isReverse_?t=t.left:t=t.right;else if(s===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class _t{constructor(t,n,r,i,o){this.key=t,this.value=n,this.color=r??_t.RED,this.left=i??Kt.EMPTY_NODE,this.right=o??Kt.EMPTY_NODE}copy(t,n,r,i,o){return new _t(t??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const o=r(t,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Kt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return Kt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}_t.RED=!0;_t.BLACK=!1;class sO{copy(t,n,r,i,o){return this}insert(t,n,r){return new _t(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Kt{constructor(t,n=Kt.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Kt(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,_t.BLACK,null,null))}remove(t){return new Kt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,_t.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Ec(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new Ec(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new Ec(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new Ec(this.root_,null,this.comparator_,!0,t)}}Kt.EMPTY_NODE=new sO;/**
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
 */function aO(e,t){return Ts(e.name,t.name)}function uv(e,t){return Ts(e,t)}/**
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
 */let um;function lO(e){um=e}const gE=function(e){return typeof e=="number"?"number:"+qC(e):"string:"+e},vE=function(e){if(e.isLeafNode()){const t=e.val();z(typeof t=="string"||typeof t=="number"||typeof t=="object"&&kr(t,".sv"),"Priority must be a string or number.")}else z(e===um||e.isEmpty(),"priority of unexpected type.");z(e===um||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let E1;class vt{constructor(t,n=vt.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vE(this.priorityNode_)}static set __childrenNodeConstructor(t){E1=t}static get __childrenNodeConstructor(){return E1}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new vt(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:vt.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return ye(t)?this:ve(t)===".priority"?this.priorityNode_:vt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:vt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=ve(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(z(r!==".priority"||ai(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,vt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Le(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+gE(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=qC(this.value_):t+=this.value_,this.lazyHash_=WC(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===vt.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof vt.__childrenNodeConstructor?-1:(z(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=vt.VALUE_TYPE_ORDER.indexOf(n),o=vt.VALUE_TYPE_ORDER.indexOf(r);return z(i>=0,"Unknown leaf type: "+n),z(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}vt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let yE,_E;function cO(e){yE=e}function uO(e){_E=e}class dO extends Qd{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),o=r.compareTo(i);return o===0?Ts(t.name,n.name):o}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return ge.MIN}maxPost(){return new ge(Vi,new vt("[PRIORITY-POST]",_E))}makePost(t,n){const r=yE(t);return new ge(n,new vt("[PRIORITY-POST]",r))}toString(){return".priority"}}const it=new dO;/**
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
 */const fO=Math.log(2);class hO{constructor(t){const n=o=>parseInt(Math.log(o)/fO,10),r=o=>parseInt(Array(o+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Uu=function(e,t,n,r){e.sort(t);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=e[l],f=n?n(d):d,new _t(f,d.node,_t.BLACK,null,null);{const h=parseInt(u/2,10)+l,m=i(l,h),y=i(h+1,c);return d=e[h],f=n?n(d):d,new _t(f,d.node,_t.BLACK,m,y)}},o=function(l){let c=null,u=null,d=e.length;const f=function(m,y){const S=d-m,g=d;d-=m;const p=i(S+1,g),v=e[S],_=n?n(v):v;h(new _t(_,v.node,y,null,p))},h=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),S=Math.pow(2,l.count-(m+1));y?f(S,_t.BLACK):(f(S,_t.BLACK),f(S,_t.RED))}return u},s=new hO(e.length),a=o(s);return new Kt(r||t,a)};/**
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
 */let kh;const ho={};class cr{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return z(ho&&it,"ChildrenNode.ts has not been loaded"),kh=kh||new cr({".priority":ho},{".priority":it}),kh}get(t){const n=hs(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Kt?n:null}hasIndex(t){return kr(this.indexSet_,t.toString())}addIndex(t,n){z(t!==Qo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const o=n.getIterator(ge.Wrap);let s=o.getNext();for(;s;)i=i||t.isDefinedOn(s.node),r.push(s),s=o.getNext();let a;i?a=Uu(r,t.getCompare()):a=ho;const l=t.toString(),c=Object.assign({},this.indexSet_);c[l]=t;const u=Object.assign({},this.indexes_);return u[l]=a,new cr(u,c)}addToIndexes(t,n){const r=Du(this.indexes_,(i,o)=>{const s=hs(this.indexSet_,o);if(z(s,"Missing index implementation for "+o),i===ho)if(s.isDefinedOn(t.node)){const a=[],l=n.getIterator(ge.Wrap);let c=l.getNext();for(;c;)c.name!==t.name&&a.push(c),c=l.getNext();return a.push(t),Uu(a,s.getCompare())}else return ho;else{const a=n.get(t.name);let l=i;return a&&(l=l.remove(new ge(t.name,a))),l.insert(t,t.node)}});return new cr(r,this.indexSet_)}removeFromIndexes(t,n){const r=Du(this.indexes_,i=>{if(i===ho)return i;{const o=n.get(t.name);return o?i.remove(new ge(t.name,o)):i}});return new cr(r,this.indexSet_)}}/**
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
 */let Ks;class ce{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&vE(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ks||(Ks=new ce(new Kt(uv),null,cr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ks}updatePriority(t){return this.children_.isEmpty()?this:new ce(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?Ks:n}}getChild(t){const n=ve(t);return n===null?this:this.getImmediateChild(n).getChild(Le(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(z(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new ge(t,n);let i,o;n.isEmpty()?(i=this.children_.remove(t),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),o=this.indexMap_.addToIndexes(r,this.children_));const s=i.isEmpty()?Ks:this.priorityNode_;return new ce(i,s,o)}}updateChild(t,n){const r=ve(t);if(r===null)return n;{z(ve(t)!==".priority"||ai(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Le(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,o=!0;if(this.forEachChild(it,(s,a)=>{n[s]=a.val(t),r++,o&&ce.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):o=!1}),!t&&o&&i<2*r){const s=[];for(const a in n)s[a]=n[a];return s}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+gE(this.getPriority().val())+":"),this.forEachChild(it,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":WC(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const o=i.getPredecessorKey(new ge(t,n));return o?o.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new ge(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new ge(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,ge.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,t)<0;)i.getNext(),o=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,ge.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,t)>0;)i.getNext(),o=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Bl?-1:0}withIndex(t){if(t===Qo||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new ce(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Qo||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(it),i=n.getIterator(it);let o=r.getNext(),s=i.getNext();for(;o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1}}resolveIndex_(t){return t===Qo?null:this.indexMap_.get(t.toString())}}ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pO extends ce{constructor(){super(new Kt(uv),ce.EMPTY_NODE,cr.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return ce.EMPTY_NODE}isEmpty(){return!1}}const Bl=new pO;Object.defineProperties(ge,{MIN:{value:new ge(ps,ce.EMPTY_NODE)},MAX:{value:new ge(Vi,Bl)}});mE.__EMPTY_NODE=ce.EMPTY_NODE;vt.__childrenNodeConstructor=ce;lO(Bl);uO(Bl);/**
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
 */const mO=!0;function Lt(e,t=null){if(e===null)return ce.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),z(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new vt(n,Lt(t))}if(!(e instanceof Array)&&mO){const n=[];let r=!1;if(Zt(e,(s,a)=>{if(s.substring(0,1)!=="."){const l=Lt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ge(s,l)))}}),n.length===0)return ce.EMPTY_NODE;const o=Uu(n,aO,s=>s.name,uv);if(r){const s=Uu(n,it.getCompare());return new ce(o,Lt(t),new cr({".priority":s},{".priority":it}))}else return new ce(o,Lt(t),cr.Default)}else{let n=ce.EMPTY_NODE;return Zt(e,(r,i)=>{if(kr(e,r)&&r.substring(0,1)!=="."){const o=Lt(i);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(r,o))}}),n.updatePriority(Lt(t))}}cO(Lt);/**
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
 */class gO extends Qd{constructor(t){super(),this.indexPath_=t,z(!ye(t)&&ve(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),o=r.compareTo(i);return o===0?Ts(t.name,n.name):o}makePost(t,n){const r=Lt(t),i=ce.EMPTY_NODE.updateChild(this.indexPath_,r);return new ge(n,i)}maxPost(){const t=ce.EMPTY_NODE.updateChild(this.indexPath_,Bl);return new ge(Vi,t)}toString(){return fE(this.indexPath_,0).join("/")}}/**
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
 */class vO extends Qd{compare(t,n){const r=t.node.compareTo(n.node);return r===0?Ts(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return ge.MIN}maxPost(){return ge.MAX}makePost(t,n){const r=Lt(t);return new ge(n,r)}toString(){return".value"}}const yO=new vO;/**
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
 */function wE(e){return{type:"value",snapshotNode:e}}function ms(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function il(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ol(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function _O(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */class dv{constructor(t){this.index_=t}updateChild(t,n,r,i,o,s){z(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(s!=null&&(r.isEmpty()?t.hasChild(n)?s.trackChildChange(il(n,a)):z(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(ms(n,r)):s.trackChildChange(ol(n,r,a))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(it,(i,o)=>{n.hasChild(i)||r.trackChildChange(il(i,o))}),n.isLeafNode()||n.forEachChild(it,(i,o)=>{if(t.hasChild(i)){const s=t.getImmediateChild(i);s.equals(o)||r.trackChildChange(ol(i,o,s))}else r.trackChildChange(ms(i,o))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?ce.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class sl{constructor(t){this.indexedFilter_=new dv(t.getIndex()),this.index_=t.getIndex(),this.startPost_=sl.getStartPost_(t),this.endPost_=sl.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,o,s){return this.matches(new ge(n,r))||(r=ce.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,o,s)}updateFullNode(t,n,r){n.isLeafNode()&&(n=ce.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ce.EMPTY_NODE);const o=this;return n.forEachChild(it,(s,a)=>{o.matches(new ge(s,a))||(i=i.updateImmediateChild(s,ce.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
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
 */class wO{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new sl(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,o,s){return this.rangedFilter_.matches(new ge(n,r))||(r=ce.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,o,s):this.fullLimitUpdateChild_(t,n,r,o,s)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=ce.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ce.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let s=0;for(;o.hasNext()&&s<this.limit_;){const a=o.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),s++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ce.EMPTY_NODE);let o;this.reverse_?o=i.getReverseIterator(this.index_):o=i.getIterator(this.index_);let s=0;for(;o.hasNext();){const a=o.getNext();s<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?s++:i=i.updateImmediateChild(a.name,ce.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,o){let s;if(this.reverse_){const d=this.index_.getCompare();s=(f,h)=>d(h,f)}else s=this.index_.getCompare();const a=t;z(a.numChildren()===this.limit_,"");const l=new ge(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:s(f,l);if(u&&!r.isEmpty()&&h>=0)return o!=null&&o.trackChildChange(ol(n,r,d)),a.updateImmediateChild(n,r);{o!=null&&o.trackChildChange(il(n,d));const y=a.updateImmediateChild(n,ce.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(o!=null&&o.trackChildChange(ms(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?t:u&&s(c,l)>=0?(o!=null&&(o.trackChildChange(il(c.name,c.node)),o.trackChildChange(ms(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,ce.EMPTY_NODE)):t}}/**
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
 */class fv{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=it}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ps}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===it}copy(){const t=new fv;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function bO(e){return e.loadsAllData()?new dv(e.getIndex()):e.hasLimit()?new wO(e):new sl(e)}function k1(e){const t={};if(e.isDefault())return t;let n;if(e.index_===it?n="$priority":e.index_===yO?n="$value":e.index_===Qo?n="$key":(z(e.index_ instanceof gO,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=wt(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=wt(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+wt(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=wt(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+wt(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function x1(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==it&&(t.i=e.index_.toString()),t}/**
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
 */class Bu extends cE{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=zl("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(z(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const o=t._path.toString();this.log_("Listen called for "+o+" "+t._queryIdentifier);const s=Bu.getListenId_(t,r),a={};this.listens_[s]=a;const l=k1(t._queryParams);this.restRequest_(o+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(o,d,!1,r),hs(this.listens_,s)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(t,n){const r=Bu.getListenId_(t,n);delete this.listens_[r]}get(t){const n=k1(t._queryParams),r=t._path.toString(),i=new ev;return this.restRequest_(r+".json",n,(o,s)=>{let a=s;o===404&&(a=null,o=null),o===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,o])=>{i&&i.accessToken&&(n.auth=i.accessToken),o&&o.token&&(n.ac=o.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+xs(n);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=el(a.responseText)}catch{an("Failed to parse JSON response for "+s+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&an("Got unsuccessful REST response for "+s+" Status: "+a.status),r(a.status);r=null}},a.open("GET",s,!0),a.send()})}}/**
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
 */class SO{constructor(){this.rootNode_=ce.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
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
 */function ju(){return{value:null,children:new Map}}function bE(e,t,n){if(ye(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=ve(t);e.children.has(r)||e.children.set(r,ju());const i=e.children.get(r);t=Le(t),bE(i,t,n)}}function dm(e,t,n){e.value!==null?n(t,e.value):CO(e,(r,i)=>{const o=new Oe(t.toString()+"/"+r);dm(i,o,n)})}function CO(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
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
 */class EO{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&Zt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
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
 */const I1=10*1e3,kO=30*1e3,xO=5*60*1e3;class IO{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new EO(t);const r=I1+(kO-I1)*Math.random();Sa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;Zt(t,(i,o)=>{o>0&&kr(this.statsToReport_,i)&&(n[i]=o,r=!0)}),r&&this.server_.reportStats(n),Sa(this.reportStats_.bind(this),Math.floor(Math.random()*2*xO))}}/**
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
 */var On;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(On||(On={}));function SE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function pv(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class Wu{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=On.ACK_USER_WRITE,this.source=SE()}operationForChild(t){if(ye(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Oe(t));return new Wu(ke(),n,this.revert)}}else return z(ve(this.path)===t,"operationForChild called for unrelated child."),new Wu(Le(this.path),this.affectedTree,this.revert)}}/**
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
 */class al{constructor(t,n){this.source=t,this.path=n,this.type=On.LISTEN_COMPLETE}operationForChild(t){return ye(this.path)?new al(this.source,ke()):new al(this.source,Le(this.path))}}/**
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
 */class qi{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=On.OVERWRITE}operationForChild(t){return ye(this.path)?new qi(this.source,ke(),this.snap.getImmediateChild(t)):new qi(this.source,Le(this.path),this.snap)}}/**
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
 */class ll{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=On.MERGE}operationForChild(t){if(ye(this.path)){const n=this.children.subtree(new Oe(t));return n.isEmpty()?null:n.value?new qi(this.source,ke(),n.value):new ll(this.source,ke(),n)}else return z(ve(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new ll(this.source,Le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Gi{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(ye(t))return this.isFullyInitialized()&&!this.filtered_;const n=ve(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
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
 */class TO{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function RO(e,t,n,r){const i=[],o=[];return t.forEach(s=>{s.type==="child_changed"&&e.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(_O(s.childName,s.snapshotNode))}),Ys(e,i,"child_removed",t,r,n),Ys(e,i,"child_added",t,r,n),Ys(e,i,"child_moved",o,r,n),Ys(e,i,"child_changed",t,r,n),Ys(e,i,"value",t,r,n),i}function Ys(e,t,n,r,i,o){const s=r.filter(a=>a.type===n);s.sort((a,l)=>AO(e,a,l)),s.forEach(a=>{const l=PO(e,a,o);i.forEach(c=>{c.respondsTo(a.type)&&t.push(c.createEvent(l,e.query_))})})}function PO(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function AO(e,t,n){if(t.childName==null||n.childName==null)throw ks("Should only compare child_ events.");const r=new ge(t.childName,t.snapshotNode),i=new ge(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
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
 */function Xd(e,t){return{eventCache:e,serverCache:t}}function Ca(e,t,n,r){return Xd(new Gi(t,n,r),e.serverCache)}function CE(e,t,n,r){return Xd(e.eventCache,new Gi(t,n,r))}function fm(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ki(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let xh;const NO=()=>(xh||(xh=new Kt(vN)),xh);class ze{constructor(t,n=NO()){this.value=t,this.children=n}static fromObject(t){let n=new ze(null);return Zt(t,(r,i)=>{n=n.set(new Oe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:ke(),value:this.value};if(ye(t))return null;{const r=ve(t),i=this.children.get(r);if(i!==null){const o=i.findRootMostMatchingPathAndValue(Le(t),n);return o!=null?{path:ht(new Oe(r),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(ye(t))return this;{const n=ve(t),r=this.children.get(n);return r!==null?r.subtree(Le(t)):new ze(null)}}set(t,n){if(ye(t))return new ze(n,this.children);{const r=ve(t),o=(this.children.get(r)||new ze(null)).set(Le(t),n),s=this.children.insert(r,o);return new ze(this.value,s)}}remove(t){if(ye(t))return this.children.isEmpty()?new ze(null):new ze(null,this.children);{const n=ve(t),r=this.children.get(n);if(r){const i=r.remove(Le(t));let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new ze(null):new ze(this.value,o)}else return this}}get(t){if(ye(t))return this.value;{const n=ve(t),r=this.children.get(n);return r?r.get(Le(t)):null}}setTree(t,n){if(ye(t))return n;{const r=ve(t),o=(this.children.get(r)||new ze(null)).setTree(Le(t),n);let s;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new ze(this.value,s)}}fold(t){return this.fold_(ke(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,o)=>{r[i]=o.fold_(ht(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,ke(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ye(t))return null;{const o=ve(t),s=this.children.get(o);return s?s.findOnPath_(Le(t),ht(n,o),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,ke(),n)}foreachOnPath_(t,n,r){if(ye(t))return this;{this.value&&r(n,this.value);const i=ve(t),o=this.children.get(i);return o?o.foreachOnPath_(Le(t),ht(n,i),r):new ze(null)}}foreach(t){this.foreach_(ke(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ht(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
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
 */class $n{constructor(t){this.writeTree_=t}static empty(){return new $n(new ze(null))}}function Ea(e,t,n){if(ye(t))return new $n(new ze(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let o=r.value;const s=Gt(i,t);return o=o.updateChild(s,n),new $n(e.writeTree_.set(i,o))}else{const i=new ze(n),o=e.writeTree_.setTree(t,i);return new $n(o)}}}function T1(e,t,n){let r=e;return Zt(n,(i,o)=>{r=Ea(r,ht(t,i),o)}),r}function R1(e,t){if(ye(t))return $n.empty();{const n=e.writeTree_.setTree(t,new ze(null));return new $n(n)}}function hm(e,t){return lo(e,t)!=null}function lo(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(Gt(n.path,t)):null}function P1(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(it,(r,i)=>{t.push(new ge(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new ge(r,i.value))}),t}function ti(e,t){if(ye(t))return e;{const n=lo(e,t);return n!=null?new $n(new ze(n)):new $n(e.writeTree_.subtree(t))}}function pm(e){return e.writeTree_.isEmpty()}function gs(e,t){return EE(ke(),e.writeTree_,t)}function EE(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,o)=>{i===".priority"?(z(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=EE(ht(e,i),o,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(ht(e,".priority"),r)),n}}/**
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
 */function mv(e,t){return TE(t,e)}function OO(e,t,n,r,i){z(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Ea(e.visibleWrites,t,n)),e.lastWriteId=r}function MO(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function LO(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);z(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,s=e.allWrites.length-1;for(;i&&s>=0;){const a=e.allWrites[s];a.visible&&(s>=n&&DO(a,r.path)?i=!1:Nn(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return $O(e),!0;if(r.snap)e.visibleWrites=R1(e.visibleWrites,r.path);else{const a=r.children;Zt(a,l=>{e.visibleWrites=R1(e.visibleWrites,ht(r.path,l))})}return!0}else return!1}function DO(e,t){if(e.snap)return Nn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Nn(ht(e.path,n),t))return!0;return!1}function $O(e){e.visibleWrites=kE(e.allWrites,FO,ke()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function FO(e){return e.visible}function kE(e,t,n){let r=$n.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const s=o.path;let a;if(o.snap)Nn(n,s)?(a=Gt(n,s),r=Ea(r,a,o.snap)):Nn(s,n)&&(a=Gt(s,n),r=Ea(r,ke(),o.snap.getChild(a)));else if(o.children){if(Nn(n,s))a=Gt(n,s),r=T1(r,a,o.children);else if(Nn(s,n))if(a=Gt(s,n),ye(a))r=T1(r,ke(),o.children);else{const l=hs(o.children,ve(a));if(l){const c=l.getChild(Le(a));r=Ea(r,ke(),c)}}}else throw ks("WriteRecord should have .snap or .children")}}return r}function xE(e,t,n,r,i){if(!r&&!i){const o=lo(e.visibleWrites,t);if(o!=null)return o;{const s=ti(e.visibleWrites,t);if(pm(s))return n;if(n==null&&!hm(s,ke()))return null;{const a=n||ce.EMPTY_NODE;return gs(s,a)}}}else{const o=ti(e.visibleWrites,t);if(!i&&pm(o))return n;if(!i&&n==null&&!hm(o,ke()))return null;{const s=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Nn(c.path,t)||Nn(t,c.path))},a=kE(e.allWrites,s,t),l=n||ce.EMPTY_NODE;return gs(a,l)}}}function zO(e,t,n){let r=ce.EMPTY_NODE;const i=lo(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(it,(o,s)=>{r=r.updateImmediateChild(o,s)}),r;if(n){const o=ti(e.visibleWrites,t);return n.forEachChild(it,(s,a)=>{const l=gs(ti(o,new Oe(s)),a);r=r.updateImmediateChild(s,l)}),P1(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}else{const o=ti(e.visibleWrites,t);return P1(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}}function UO(e,t,n,r,i){z(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=ht(t,n);if(hm(e.visibleWrites,o))return null;{const s=ti(e.visibleWrites,o);return pm(s)?i.getChild(n):gs(s,i.getChild(n))}}function BO(e,t,n,r){const i=ht(t,n),o=lo(e.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){const s=ti(e.visibleWrites,i);return gs(s,r.getNode().getImmediateChild(n))}else return null}function jO(e,t){return lo(e.visibleWrites,t)}function WO(e,t,n,r,i,o,s){let a;const l=ti(e.visibleWrites,t),c=lo(l,ke());if(c!=null)a=c;else if(n!=null)a=gs(l,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=s.getCompare(),f=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let h=f.getNext();for(;h&&u.length<i;)d(h,r)!==0&&u.push(h),h=f.getNext();return u}else return[]}function HO(){return{visibleWrites:$n.empty(),allWrites:[],lastWriteId:-1}}function Hu(e,t,n,r){return xE(e.writeTree,e.treePath,t,n,r)}function gv(e,t){return zO(e.writeTree,e.treePath,t)}function A1(e,t,n,r){return UO(e.writeTree,e.treePath,t,n,r)}function Vu(e,t){return jO(e.writeTree,ht(e.treePath,t))}function VO(e,t,n,r,i,o){return WO(e.writeTree,e.treePath,t,n,r,i,o)}function vv(e,t,n){return BO(e.writeTree,e.treePath,t,n)}function IE(e,t){return TE(ht(e.treePath,t),e.writeTree)}function TE(e,t){return{treePath:e,writeTree:t}}/**
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
 */class qO{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,ol(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,il(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,ms(r,t.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,ol(r,t.snapshotNode,i.oldSnap));else throw ks("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class GO{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const RE=new GO;class yv{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new Gi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vv(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ki(this.viewCache_),o=VO(this.writes_,i,n,1,r,t);return o.length===0?null:o[0]}}/**
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
 */function KO(e){return{filter:e}}function YO(e,t){z(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),z(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function QO(e,t,n,r,i){const o=new qO;let s,a;if(n.type===On.OVERWRITE){const c=n;c.source.fromUser?s=mm(e,t,c.path,c.snap,r,i,o):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!ye(c.path),s=qu(e,t,c.path,c.snap,r,i,a,o))}else if(n.type===On.MERGE){const c=n;c.source.fromUser?s=JO(e,t,c.path,c.children,r,i,o):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),s=gm(e,t,c.path,c.children,r,i,a,o))}else if(n.type===On.ACK_USER_WRITE){const c=n;c.revert?s=tM(e,t,c.path,r,i,o):s=ZO(e,t,c.path,c.affectedTree,r,i,o)}else if(n.type===On.LISTEN_COMPLETE)s=eM(e,t,n.path,r,o);else throw ks("Unknown operation type: "+n.type);const l=o.getChanges();return XO(t,s,l),{viewCache:s,changes:l}}function XO(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=fm(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(wE(fm(t)))}}function PE(e,t,n,r,i,o){const s=t.eventCache;if(Vu(r,n)!=null)return t;{let a,l;if(ye(n))if(z(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const c=Ki(t),u=c instanceof ce?c:ce.EMPTY_NODE,d=gv(r,u);a=e.filter.updateFullNode(t.eventCache.getNode(),d,o)}else{const c=Hu(r,Ki(t));a=e.filter.updateFullNode(t.eventCache.getNode(),c,o)}else{const c=ve(n);if(c===".priority"){z(ai(n)===1,"Can't have a priority with additional path components");const u=s.getNode();l=t.serverCache.getNode();const d=A1(r,n,u,l);d!=null?a=e.filter.updatePriority(u,d):a=s.getNode()}else{const u=Le(n);let d;if(s.isCompleteForChild(c)){l=t.serverCache.getNode();const f=A1(r,n,s.getNode(),l);f!=null?d=s.getNode().getImmediateChild(c).updateChild(u,f):d=s.getNode().getImmediateChild(c)}else d=vv(r,c,t.serverCache);d!=null?a=e.filter.updateChild(s.getNode(),c,d,u,i,o):a=s.getNode()}}return Ca(t,a,s.isFullyInitialized()||ye(n),e.filter.filtersNodes())}}function qu(e,t,n,r,i,o,s,a){const l=t.serverCache;let c;const u=s?e.filter:e.filter.getIndexedFilter();if(ye(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),h,null)}else{const h=ve(n);if(!l.isCompleteForPath(n)&&ai(n)>1)return t;const m=Le(n),S=l.getNode().getImmediateChild(h).updateChild(m,r);h===".priority"?c=u.updatePriority(l.getNode(),S):c=u.updateChild(l.getNode(),h,S,m,RE,null)}const d=CE(t,c,l.isFullyInitialized()||ye(n),u.filtersNodes()),f=new yv(i,d,o);return PE(e,d,n,i,f,a)}function mm(e,t,n,r,i,o,s){const a=t.eventCache;let l,c;const u=new yv(i,t,o);if(ye(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,s),l=Ca(t,c,!0,e.filter.filtersNodes());else{const d=ve(n);if(d===".priority")c=e.filter.updatePriority(t.eventCache.getNode(),r),l=Ca(t,c,a.isFullyInitialized(),a.isFiltered());else{const f=Le(n),h=a.getNode().getImmediateChild(d);let m;if(ye(f))m=r;else{const y=u.getCompleteChild(d);y!=null?dE(f)===".priority"&&y.getChild(hE(f)).isEmpty()?m=y:m=y.updateChild(f,r):m=ce.EMPTY_NODE}if(h.equals(m))l=t;else{const y=e.filter.updateChild(a.getNode(),d,m,f,u,s);l=Ca(t,y,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function N1(e,t){return e.eventCache.isCompleteForChild(t)}function JO(e,t,n,r,i,o,s){let a=t;return r.foreach((l,c)=>{const u=ht(n,l);N1(t,ve(u))&&(a=mm(e,a,u,c,i,o,s))}),r.foreach((l,c)=>{const u=ht(n,l);N1(t,ve(u))||(a=mm(e,a,u,c,i,o,s))}),a}function O1(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function gm(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,c;ye(n)?c=r:c=new ze(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const h=t.serverCache.getNode().getImmediateChild(d),m=O1(e,h,f);l=qu(e,l,new Oe(d),m,i,o,s,a)}}),c.children.inorderTraversal((d,f)=>{const h=!t.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!h){const m=t.serverCache.getNode().getImmediateChild(d),y=O1(e,m,f);l=qu(e,l,new Oe(d),y,i,o,s,a)}}),l}function ZO(e,t,n,r,i,o,s){if(Vu(i,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(ye(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return qu(e,t,n,l.getNode().getChild(n),i,o,a,s);if(ye(n)){let c=new ze(null);return l.getNode().forEachChild(Qo,(u,d)=>{c=c.set(new Oe(u),d)}),gm(e,t,n,c,i,o,a,s)}else return t}else{let c=new ze(null);return r.foreach((u,d)=>{const f=ht(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),gm(e,t,n,c,i,o,a,s)}}function eM(e,t,n,r,i){const o=t.serverCache,s=CE(t,o.getNode(),o.isFullyInitialized()||ye(n),o.isFiltered());return PE(e,s,n,r,RE,i)}function tM(e,t,n,r,i,o){let s;if(Vu(r,n)!=null)return t;{const a=new yv(r,t,i),l=t.eventCache.getNode();let c;if(ye(n)||ve(n)===".priority"){let u;if(t.serverCache.isFullyInitialized())u=Hu(r,Ki(t));else{const d=t.serverCache.getNode();z(d instanceof ce,"serverChildren would be complete if leaf node"),u=gv(r,d)}u=u,c=e.filter.updateFullNode(l,u,o)}else{const u=ve(n);let d=vv(r,u,t.serverCache);d==null&&t.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=e.filter.updateChild(l,u,d,Le(n),a,o):t.eventCache.getNode().hasChild(u)?c=e.filter.updateChild(l,u,ce.EMPTY_NODE,Le(n),a,o):c=l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=Hu(r,Ki(t)),s.isLeafNode()&&(c=e.filter.updateFullNode(c,s,o)))}return s=t.serverCache.isFullyInitialized()||Vu(r,ke())!=null,Ca(t,c,s,e.filter.filtersNodes())}}/**
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
 */class nM{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new dv(r.getIndex()),o=bO(r);this.processor_=KO(o);const s=n.serverCache,a=n.eventCache,l=i.updateFullNode(ce.EMPTY_NODE,s.getNode(),null),c=o.updateFullNode(ce.EMPTY_NODE,a.getNode(),null),u=new Gi(l,s.isFullyInitialized(),i.filtersNodes()),d=new Gi(c,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=Xd(d,u),this.eventGenerator_=new TO(this.query_)}get query(){return this.query_}}function rM(e){return e.viewCache_.serverCache.getNode()}function iM(e,t){const n=Ki(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ye(t)&&!n.getImmediateChild(ve(t)).isEmpty())?n.getChild(t):null}function M1(e){return e.eventRegistrations_.length===0}function oM(e,t){e.eventRegistrations_.push(t)}function L1(e,t,n){const r=[];if(n){z(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(o=>{const s=o.createCancelEvent(n,i);s&&r.push(s)})}if(t){let i=[];for(let o=0;o<e.eventRegistrations_.length;++o){const s=e.eventRegistrations_[o];if(!s.matches(t))i.push(s);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(o+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function D1(e,t,n,r){t.type===On.MERGE&&t.source.queryId!==null&&(z(Ki(e.viewCache_),"We should always have a full cache before handling merges"),z(fm(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=QO(e.processor_,i,t,n,r);return YO(e.processor_,o.viewCache),z(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,AE(e,o.changes,o.viewCache.eventCache.getNode(),null)}function sM(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(it,(o,s)=>{r.push(ms(o,s))}),n.isFullyInitialized()&&r.push(wE(n.getNode())),AE(e,r,n.getNode(),t)}function AE(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return RO(e.eventGenerator_,t,n,i)}/**
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
 */let Gu;class aM{constructor(){this.views=new Map}}function lM(e){z(!Gu,"__referenceConstructor has already been defined"),Gu=e}function cM(){return z(Gu,"Reference.ts has not been loaded"),Gu}function uM(e){return e.views.size===0}function _v(e,t,n,r){const i=t.source.queryId;if(i!==null){const o=e.views.get(i);return z(o!=null,"SyncTree gave us an op for an invalid query."),D1(o,t,n,r)}else{let o=[];for(const s of e.views.values())o=o.concat(D1(s,t,n,r));return o}}function dM(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let a=Hu(n,i?r:null),l=!1;a?l=!0:r instanceof ce?(a=gv(n,r),l=!1):(a=ce.EMPTY_NODE,l=!1);const c=Xd(new Gi(a,l,!1),new Gi(r,i,!1));return new nM(t,c)}return s}function fM(e,t,n,r,i,o){const s=dM(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),oM(s,n),sM(s,n)}function hM(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=li(e);if(i==="default")for(const[l,c]of e.views.entries())s=s.concat(L1(c,n,r)),M1(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||o.push(c.query));else{const l=e.views.get(i);l&&(s=s.concat(L1(l,n,r)),M1(l)&&(e.views.delete(i),l.query._queryParams.loadsAllData()||o.push(l.query)))}return a&&!li(e)&&o.push(new(cM())(t._repo,t._path)),{removed:o,events:s}}function NE(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Xo(e,t){let n=null;for(const r of e.views.values())n=n||iM(r,t);return n}function OE(e,t){if(t._queryParams.loadsAllData())return Jd(e);{const r=t._queryIdentifier;return e.views.get(r)}}function ME(e,t){return OE(e,t)!=null}function li(e){return Jd(e)!=null}function Jd(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
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
 */let Ku;function pM(e){z(!Ku,"__referenceConstructor has already been defined"),Ku=e}function mM(){return z(Ku,"Reference.ts has not been loaded"),Ku}let gM=1;class $1{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ze(null),this.pendingWriteTree_=HO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vM(e,t,n,r,i){return OO(e.pendingWriteTree_,t,n,r,i),i?jl(e,new qi(SE(),t,n)):[]}function Lo(e,t,n=!1){const r=MO(e.pendingWriteTree_,t);if(LO(e.pendingWriteTree_,t)){let o=new ze(null);return r.snap!=null?o=o.set(ke(),!0):Zt(r.children,s=>{o=o.set(new Oe(s),!0)}),jl(e,new Wu(r.path,o,n))}else return[]}function Zd(e,t,n){return jl(e,new qi(hv(),t,n))}function yM(e,t,n){const r=ze.fromObject(n);return jl(e,new ll(hv(),t,r))}function _M(e,t){return jl(e,new al(hv(),t))}function wM(e,t,n){const r=wv(e,n);if(r){const i=bv(r),o=i.path,s=i.queryId,a=Gt(o,t),l=new al(pv(s),a);return Sv(e,o,l)}else return[]}function vm(e,t,n,r,i=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&(t._queryIdentifier==="default"||ME(s,t))){const l=hM(s,t,n,r);uM(s)&&(e.syncPointTree_=e.syncPointTree_.remove(o));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=e.syncPointTree_.findOnPath(o,(f,h)=>li(h));if(u&&!d){const f=e.syncPointTree_.subtree(o);if(!f.isEmpty()){const h=CM(f);for(let m=0;m<h.length;++m){const y=h[m],S=y.query,g=FE(e,y);e.listenProvider_.startListening(ka(S),Yu(e,S),g.hashFn,g.onComplete)}}}!d&&c.length>0&&!r&&(u?e.listenProvider_.stopListening(ka(t),null):c.forEach(f=>{const h=e.queryToTagMap.get(ef(f));e.listenProvider_.stopListening(ka(f),h)}))}EM(e,c)}return a}function bM(e,t,n,r){const i=wv(e,r);if(i!=null){const o=bv(i),s=o.path,a=o.queryId,l=Gt(s,t),c=new qi(pv(a),l,n);return Sv(e,s,c)}else return[]}function SM(e,t,n,r){const i=wv(e,r);if(i){const o=bv(i),s=o.path,a=o.queryId,l=Gt(s,t),c=ze.fromObject(n),u=new ll(pv(a),l,c);return Sv(e,s,u)}else return[]}function F1(e,t,n,r=!1){const i=t._path;let o=null,s=!1;e.syncPointTree_.foreachOnPath(i,(f,h)=>{const m=Gt(f,i);o=o||Xo(h,m),s=s||li(h)});let a=e.syncPointTree_.get(i);a?(s=s||li(a),o=o||Xo(a,ke())):(a=new aM,e.syncPointTree_=e.syncPointTree_.set(i,a));let l;o!=null?l=!0:(l=!1,o=ce.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((h,m)=>{const y=Xo(m,ke());y&&(o=o.updateImmediateChild(h,y))}));const c=ME(a,t);if(!c&&!t._queryParams.loadsAllData()){const f=ef(t);z(!e.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=kM();e.queryToTagMap.set(f,h),e.tagToQueryMap.set(h,f)}const u=mv(e.pendingWriteTree_,i);let d=fM(a,t,n,u,o,l);if(!c&&!s&&!r){const f=OE(a,t);d=d.concat(xM(e,t,f))}return d}function LE(e,t,n){const i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,(s,a)=>{const l=Gt(s,t),c=Xo(a,l);if(c)return c});return xE(i,t,o,n,!0)}function jl(e,t){return DE(t,e.syncPointTree_,null,mv(e.pendingWriteTree_,ke()))}function DE(e,t,n,r){if(ye(e.path))return $E(e,t,n,r);{const i=t.get(ke());n==null&&i!=null&&(n=Xo(i,ke()));let o=[];const s=ve(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const c=n?n.getImmediateChild(s):null,u=IE(r,s);o=o.concat(DE(a,l,c,u))}return i&&(o=o.concat(_v(i,e,r,n))),o}}function $E(e,t,n,r){const i=t.get(ke());n==null&&i!=null&&(n=Xo(i,ke()));let o=[];return t.children.inorderTraversal((s,a)=>{const l=n?n.getImmediateChild(s):null,c=IE(r,s),u=e.operationForChild(s);u&&(o=o.concat($E(u,a,l,c)))}),i&&(o=o.concat(_v(i,e,r,n))),o}function FE(e,t){const n=t.query,r=Yu(e,n);return{hashFn:()=>(rM(t)||ce.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?wM(e,n._path,r):_M(e,n._path);{const o=wN(i,n);return vm(e,n,null,o)}}}}function Yu(e,t){const n=ef(t);return e.queryToTagMap.get(n)}function ef(e){return e._path.toString()+"$"+e._queryIdentifier}function wv(e,t){return e.tagToQueryMap.get(t)}function bv(e){const t=e.indexOf("$");return z(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Oe(e.substr(0,t))}}function Sv(e,t,n){const r=e.syncPointTree_.get(t);z(r,"Missing sync point for query tag that we're tracking");const i=mv(e.pendingWriteTree_,t);return _v(r,n,i,null)}function CM(e){return e.fold((t,n,r)=>{if(n&&li(n))return[Jd(n)];{let i=[];return n&&(i=NE(n)),Zt(r,(o,s)=>{i=i.concat(s)}),i}})}function ka(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(mM())(e._repo,e._path):e}function EM(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=ef(r),o=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(o)}}}function kM(){return gM++}function xM(e,t,n){const r=t._path,i=Yu(e,t),o=FE(e,n),s=e.listenProvider_.startListening(ka(t),i,o.hashFn,o.onComplete),a=e.syncPointTree_.subtree(r);if(i)z(!li(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!ye(c)&&u&&li(u))return[Jd(u).query];{let f=[];return u&&(f=f.concat(NE(u).map(h=>h.query))),Zt(d,(h,m)=>{f=f.concat(m)}),f}});for(let c=0;c<l.length;++c){const u=l[c];e.listenProvider_.stopListening(ka(u),Yu(e,u))}}return s}/**
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
 */class Cv{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Cv(n)}node(){return this.node_}}class Ev{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=ht(this.path_,t);return new Ev(this.syncTree_,n)}node(){return LE(this.syncTree_,this.path_)}}const IM=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},z1=function(e,t,n){if(!e||typeof e!="object")return e;if(z(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return TM(e[".sv"],t,n);if(typeof e[".sv"]=="object")return RM(e[".sv"],t);z(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},TM=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+e)}},RM=function(e,t,n){e.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&z(!1,"Unexpected increment value: "+r);const i=t.node();if(z(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return typeof s!="number"?r:s+r},PM=function(e,t,n,r){return kv(t,new Ev(n,e),r)},AM=function(e,t,n){return kv(e,new Cv(t),n)};function kv(e,t,n){const r=e.getPriority().val(),i=z1(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const s=e,a=z1(s.getValue(),t,n);return a!==s.getValue()||i!==s.getPriority().val()?new vt(a,Lt(i)):e}else{const s=e;return o=s,i!==s.getPriority().val()&&(o=o.updatePriority(new vt(i))),s.forEachChild(it,(a,l)=>{const c=kv(l,t.getImmediateChild(a),n);c!==l&&(o=o.updateImmediateChild(a,c))}),o}}/**
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
 */class xv{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function Iv(e,t){let n=t instanceof Oe?t:new Oe(t),r=e,i=ve(n);for(;i!==null;){const o=hs(r.node.children,i)||{children:{},childCount:0};r=new xv(i,r,o),n=Le(n),i=ve(n)}return r}function Rs(e){return e.node.value}function zE(e,t){e.node.value=t,ym(e)}function UE(e){return e.node.childCount>0}function NM(e){return Rs(e)===void 0&&!UE(e)}function tf(e,t){Zt(e.node.children,(n,r)=>{t(new xv(n,e,r))})}function BE(e,t,n,r){n&&!r&&t(e),tf(e,i=>{BE(i,t,!0,r)}),n&&r&&t(e)}function OM(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Wl(e){return new Oe(e.parent===null?e.name:Wl(e.parent)+"/"+e.name)}function ym(e){e.parent!==null&&MM(e.parent,e.name,e)}function MM(e,t,n){const r=NM(n),i=kr(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,ym(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,ym(e))}/**
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
 */const LM=/[\[\].#$\/\u0000-\u001F\u007F]/,DM=/[\[\].#$\u0000-\u001F\u007F]/,Ih=10*1024*1024,jE=function(e){return typeof e=="string"&&e.length!==0&&!LM.test(e)},WE=function(e){return typeof e=="string"&&e.length!==0&&!DM.test(e)},$M=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),WE(e)},HE=function(e,t,n){const r=n instanceof Oe?new ZN(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Si(r));if(typeof t=="function")throw new Error(e+"contains a function "+Si(r)+" with contents = "+t.toString());if(HC(t))throw new Error(e+"contains "+t.toString()+" "+Si(r));if(typeof t=="string"&&t.length>Ih/3&&Kd(t)>Ih)throw new Error(e+"contains a string greater than "+Ih+" utf8 bytes "+Si(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,o=!1;if(Zt(t,(s,a)=>{if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!jE(s)))throw new Error(e+" contains an invalid key ("+s+") "+Si(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);eO(r,s),HE(e,a,r),tO(r)}),i&&o)throw new Error(e+' contains ".value" child '+Si(r)+" in addition to actual children.")}},VE=function(e,t,n,r){if(!(r&&n===void 0)&&!WE(n))throw new Error(LC(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},FM=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),VE(e,t,n,r)},zM=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!jE(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$M(n))throw new Error(LC(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class UM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qE(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();n!==null&&!lv(o,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function GE(e,t,n){qE(e,n),KE(e,r=>lv(r,t))}function co(e,t,n){qE(e,n),KE(e,r=>Nn(r,t)||Nn(t,r))}function KE(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(BM(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function BM(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();$i&&Mt("event: "+n.toString()),Ul(r)}}}/**
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
 */const jM="repo_interrupt",WM=25;class HM{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ju(),this.transactionQueueTree_=new xv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VM(e,t,n){if(e.stats_=sv(e.repoInfo_),e.forceRestClient_||EN())e.server_=new Bu(e.repoInfo_,(r,i,o,s)=>{U1(e,r,i,o,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>B1(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{wt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new hr(e.repoInfo_,t,(r,i,o,s)=>{U1(e,r,i,o,s)},r=>{B1(e,r)},r=>{GM(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=RN(e.repoInfo_,()=>new IO(e.stats_,e.server_)),e.infoData_=new SO,e.infoSyncTree_=new $1({startListening:(r,i,o,s)=>{let a=[];const l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=Zd(e.infoSyncTree_,r._path,l),setTimeout(()=>{s("ok")},0)),a},stopListening:()=>{}}),Tv(e,"connected",!1),e.serverSyncTree_=new $1({startListening:(r,i,o,s)=>(e.server_.listen(r,o,i,(a,l)=>{const c=s(a,l);co(e.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function qM(e){const n=e.infoData_.getNode(new Oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function YE(e){return IM({timestamp:qM(e)})}function U1(e,t,n,r,i){e.dataUpdateCount++;const o=new Oe(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(i)if(r){const l=Du(n,c=>Lt(c));s=SM(e.serverSyncTree_,o,l,i)}else{const l=Lt(n);s=bM(e.serverSyncTree_,o,l,i)}else if(r){const l=Du(n,c=>Lt(c));s=yM(e.serverSyncTree_,o,l)}else{const l=Lt(n);s=Zd(e.serverSyncTree_,o,l)}let a=o;s.length>0&&(a=Pv(e,o)),co(e.eventQueue_,a,s)}function B1(e,t){Tv(e,"connected",t),t===!1&&YM(e)}function GM(e,t){Zt(t,(n,r)=>{Tv(e,n,r)})}function Tv(e,t,n){const r=new Oe("/.info/"+t),i=Lt(n);e.infoData_.updateSnapshot(r,i);const o=Zd(e.infoSyncTree_,r,i);co(e.eventQueue_,r,o)}function KM(e){return e.nextWriteId_++}function YM(e){QE(e,"onDisconnectEvents");const t=YE(e),n=ju();dm(e.onDisconnect_,ke(),(i,o)=>{const s=PM(i,o,e.serverSyncTree_,t);bE(n,i,s)});let r=[];dm(n,ke(),(i,o)=>{r=r.concat(Zd(e.serverSyncTree_,i,o));const s=e3(e,i);Pv(e,s)}),e.onDisconnect_=ju(),co(e.eventQueue_,ke(),r)}function QM(e,t,n){let r;ve(t._path)===".info"?r=F1(e.infoSyncTree_,t,n):r=F1(e.serverSyncTree_,t,n),GE(e.eventQueue_,t._path,r)}function j1(e,t,n){let r;ve(t._path)===".info"?r=vm(e.infoSyncTree_,t,n):r=vm(e.serverSyncTree_,t,n),GE(e.eventQueue_,t._path,r)}function XM(e){e.persistentConnection_&&e.persistentConnection_.interrupt(jM)}function QE(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Mt(n,...t)}function XE(e,t,n){return LE(e.serverSyncTree_,t,n)||ce.EMPTY_NODE}function Rv(e,t=e.transactionQueueTree_){if(t||nf(e,t),Rs(t)){const n=ZE(e,t);z(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&JM(e,Wl(t),n)}else UE(t)&&tf(t,n=>{Rv(e,n)})}function JM(e,t,n){const r=n.map(c=>c.currentWriteId),i=XE(e,t,r);let o=i;const s=i.hash();for(let c=0;c<n.length;c++){const u=n[c];z(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Gt(t,u.path);o=o.updateChild(d,u.currentOutputSnapshotRaw)}const a=o.val(!0),l=t;e.server_.put(l.toString(),a,c=>{QE(e,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Lo(e.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();nf(e,Iv(e.transactionQueueTree_,t)),Rv(e,e.transactionQueueTree_),co(e.eventQueue_,t,u);for(let f=0;f<d.length;f++)Ul(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{an("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Pv(e,t)}},s)}function Pv(e,t){const n=JE(e,t),r=Wl(n),i=ZE(e,n);return ZM(e,i,r),r}function ZM(e,t,n){if(t.length===0)return;const r=[];let i=[];const s=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],c=Gt(n,l.path);let u=!1,d;if(z(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Lo(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=WM)u=!0,d="maxretry",i=i.concat(Lo(e.serverSyncTree_,l.currentWriteId,!0));else{const f=XE(e,l.path,s);l.currentInputSnapshot=f;const h=t[a].update(f.val());if(h!==void 0){HE("transaction failed: Data returned ",h,l.path);let m=Lt(h);typeof h=="object"&&h!=null&&kr(h,".priority")||(m=m.updatePriority(f.getPriority()));const S=l.currentWriteId,g=YE(e),p=AM(m,f,g);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=p,l.currentWriteId=KM(e),s.splice(s.indexOf(S),1),i=i.concat(vM(e.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Lo(e.serverSyncTree_,S,!0))}else u=!0,d="nodata",i=i.concat(Lo(e.serverSyncTree_,l.currentWriteId,!0))}co(e.eventQueue_,n,i),i=[],u&&(t[a].status=2,function(f){setTimeout(f,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(d==="nodata"?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(new Error(d),!1,null))))}nf(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)Ul(r[a]);Rv(e,e.transactionQueueTree_)}function JE(e,t){let n,r=e.transactionQueueTree_;for(n=ve(t);n!==null&&Rs(r)===void 0;)r=Iv(r,n),t=Le(t),n=ve(t);return r}function ZE(e,t){const n=[];return ek(e,t,n),n.sort((r,i)=>r.order-i.order),n}function ek(e,t,n){const r=Rs(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);tf(t,i=>{ek(e,i,n)})}function nf(e,t){const n=Rs(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,zE(t,n.length>0?n:void 0)}tf(t,r=>{nf(e,r)})}function e3(e,t){const n=Wl(JE(e,t)),r=Iv(e.transactionQueueTree_,t);return OM(r,i=>{Th(e,i)}),Th(e,r),BE(r,i=>{Th(e,i)}),n}function Th(e,t){const n=Rs(t);if(n){const r=[];let i=[],o=-1;for(let s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(z(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(z(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(Lo(e.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?zE(t,void 0):n.length=o+1,co(e.eventQueue_,Wl(t),i);for(let s=0;s<r.length;s++)Ul(r[s])}}/**
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
 */function t3(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function n3(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):an(`Invalid query segment '${n}' in query '${e}'`)}return t}const W1=function(e,t){const n=r3(e),r=n.namespace;n.domain==="firebase.com"&&yr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&yr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||mN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new nE(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Oe(n.pathString)}},r3=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",l=443;if(typeof e=="string"){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");u===-1&&(u=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(u,d)),u<d&&(i=t3(e.substring(u,d)));const f=n3(e.substring(Math.min(e.length,d)));c=t.indexOf(":"),c>=0?(s=a==="https"||a==="wss",l=parseInt(t.substring(c+1),10)):c=t.length;const h=t.slice(0,c);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const m=t.indexOf(".");r=t.substring(0,m).toLowerCase(),n=t.substring(m+1),o=r}"ns"in f&&(o=f.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
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
 */class tk{constructor(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+wt(this.snapshot.exportVal())}}class nk{constructor(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class i3{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class Av{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ye(this._path)?null:dE(this._path)}get ref(){return new xr(this._repo,this._path)}get _queryIdentifier(){const t=x1(this._queryParams),n=iv(t);return n==="{}"?"default":n}get _queryObject(){return x1(this._queryParams)}isEqual(t){if(t=mn(t),!(t instanceof Av))return!1;const n=this._repo===t._repo,r=lv(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+JN(this._path)}}class xr extends Av{constructor(t,n){super(t,n,new fv,!1)}get parent(){const t=hE(this._path);return t===null?null:new xr(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class cl{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new Oe(t),r=Qu(this.ref,t);return new cl(this._node.getChild(n),r,it)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new cl(i,Qu(this.ref,r),it)))}hasChild(t){const n=new Oe(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function o3(e,t){return e=mn(e),e._checkNotDeleted("ref"),t!==void 0?Qu(e._root,t):e._root}function Qu(e,t){return e=mn(e),ve(e._path)===null?FM("child","path",t,!1):VE("child","path",t,!1),new xr(e._repo,ht(e._path,t))}class Nv{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new tk("value",this,new cl(t.snapshotNode,new xr(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new nk(this,t,n):null}matches(t){return t instanceof Nv?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ov{constructor(t,n){this.eventType=t,this.callbackContext=n}respondsTo(t){let n=t==="children_added"?"child_added":t;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new nk(this,t,n):null}createEvent(t,n){z(t.childName!=null,"Child events should have a childName.");const r=Qu(new xr(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new tk(t.type,this,new cl(t.snapshotNode,r,i),t.prevName)}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof Ov?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function s3(e,t,n,r,i){let o;if(typeof r=="object"&&(o=void 0,i=r),typeof r=="function"&&(o=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{j1(e._repo,e,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const s=new i3(n,o||void 0),a=t==="value"?new Nv(s):new Ov(t,s);return QM(e._repo,e,a),()=>j1(e._repo,e,a)}function a3(e,t,n,r){return s3(e,"value",t,n,r)}lM(xr);pM(xr);/**
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
 */const l3="FIREBASE_DATABASE_EMULATOR_HOST",_m={};let c3=!1;function u3(e,t,n,r){e.repoInfo_=new nE(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function d3(e,t,n,r,i){let o=r||e.options.databaseURL;o===void 0&&(e.options.projectId||yr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Mt("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s=W1(o,i),a=s.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[l3]),c?(l=!0,o=`http://${c}?ns=${a.namespace}`,s=W1(o,i),a=s.repoInfo):l=!s.repoInfo.secure;const u=i&&l?new Yo(Yo.OWNER):new xN(e.name,e.options,t);zM("Invalid Firebase Database URL",s),ye(s.path)||yr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=h3(a,e,u,new kN(e.name,n));return new p3(d,e)}function f3(e,t){const n=_m[t];(!n||n[e.key]!==e)&&yr(`Database ${t}(${e.repoInfo_}) has already been deleted.`),XM(e),delete n[e.key]}function h3(e,t,n,r){let i=_m[t.name];i||(i={},_m[t.name]=i);let o=i[e.toURLString()];return o&&yr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new HM(e,c3,n,r),i[e.toURLString()]=o,o}class p3{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xr(this._repo,ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(f3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&yr("Cannot call "+t+" on a deleted database.")}}function m3(e=rv(),t){const n=ao(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=FP("database");r&&g3(n,...r)}return n}function g3(e,t,n,r={}){e=mn(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&yr("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&yr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Yo(Yo.OWNER);else if(r.mockUserToken){const s=typeof r.mockUserToken=="string"?r.mockUserToken:UP(r.mockUserToken,e.app.options.projectId);o=new Yo(s)}u3(i,t,n,o)}/**
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
 */function v3(e){uN(Is),tr(new zn("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return d3(r,i,o,n)},"PUBLIC").setMultipleInstances(!0)),Sn(c1,u1,e),Sn(c1,u1,"esm2017")}hr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};hr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};v3();function Mv(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function rk(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const y3=rk,ik=new so("auth","Firebase",rk());/**
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
 */const Xu=new Yd("@firebase/auth");function _3(e,...t){Xu.logLevel<=Ne.WARN&&Xu.warn(`Auth (${Is}): ${e}`,...t)}function Jc(e,...t){Xu.logLevel<=Ne.ERROR&&Xu.error(`Auth (${Is}): ${e}`,...t)}/**
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
 */function Un(e,...t){throw Lv(e,...t)}function Jn(e,...t){return Lv(e,...t)}function w3(e,t,n){const r=Object.assign(Object.assign({},y3()),{[t]:n});return new so("auth","Firebase",r).create(t,{appName:e.name})}function Lv(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ik.create(e,...t)}function ue(e,t,...n){if(!e)throw Lv(t,...n)}function ur(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Jc(t),new Error(t)}function _r(e,t){e||ur(t)}/**
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
 */function wm(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function b3(){return H1()==="http:"||H1()==="https:"}function H1(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function S3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(b3()||RC()||"connection"in navigator)?navigator.onLine:!0}function C3(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Hl{constructor(t,n){this.shortDelay=t,this.longDelay=n,_r(n>t,"Short delay should be less than long delay!"),this.isMobile=tv()||PC()}get(){return S3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dv(e,t){_r(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class ok{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const E3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const k3=new Hl(3e4,6e4);function Ps(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function As(e,t,n,r,i={}){return sk(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=xs(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),ok.fetch()(ak(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function sk(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},E3),t);try{const i=new x3(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw kc(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw kc(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw kc(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw kc(e,"user-disabled",s);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw w3(e,u,c);Un(e,u)}}catch(i){if(i instanceof nr)throw i;Un(e,"network-request-failed",{message:String(i)})}}async function Vl(e,t,n,r,i={}){const o=await As(e,t,n,r,i);return"mfaPendingCredential"in o&&Un(e,"multi-factor-auth-required",{_serverResponse:o}),o}function ak(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Dv(e.config,i):`${e.config.apiScheme}://${i}`}class x3{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jn(this.auth,"network-request-failed")),k3.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function kc(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Jn(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function I3(e,t){return As(e,"POST","/v1/accounts:delete",t)}async function T3(e,t){return As(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function xa(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function R3(e,t=!1){const n=mn(e),r=await n.getIdToken(t),i=$v(r);ue(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:xa(Rh(i.auth_time)),issuedAtTime:xa(Rh(i.iat)),expirationTime:xa(Rh(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Rh(e){return Number(e)*1e3}function $v(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Jc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Lu(n);return i?JSON.parse(i):(Jc("Failed to decode base64 JWT payload"),null)}catch(i){return Jc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function P3(e){const t=$v(e);return ue(t,"internal-error"),ue(typeof t.exp<"u","internal-error"),ue(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function ul(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof nr&&A3(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function A3({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class N3{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lk{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xa(this.lastLoginAt),this.creationTime=xa(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ju(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ul(e,T3(n,{idToken:r}));ue(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?L3(o.providerUserInfo):[],a=M3(e.providerData,s),l=e.isAnonymous,c=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new lk(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function O3(e){const t=mn(e);await Ju(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function M3(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function L3(e){return e.map(t=>{var{providerId:n}=t,r=Mv(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function D3(e,t){const n=await sk(e,{},async()=>{const r=xs({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=ak(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ok.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class dl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ue(t.idToken,"internal-error"),ue(typeof t.idToken<"u","internal-error"),ue(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):P3(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return ue(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await D3(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new dl;return r&&(ue(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(ue(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(ue(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new dl,this.toJSON())}_performRefresh(){return ur("not implemented")}}/**
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
 */function Pr(e,t){ue(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Fi{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Mv(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new N3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new lk(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await ul(this,this.stsTokenManager.getToken(this.auth,t));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return R3(this,t)}reload(){return O3(this)}_assign(t){this!==t&&(ue(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Fi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ju(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ul(this,I3(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,h=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,m=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:_,isAnonymous:C,providerData:k,stsTokenManager:E}=n;ue(v&&E,t,"internal-error");const I=dl.fromJSON(this.name,E);ue(typeof v=="string",t,"internal-error"),Pr(d,t.name),Pr(f,t.name),ue(typeof _=="boolean",t,"internal-error"),ue(typeof C=="boolean",t,"internal-error"),Pr(h,t.name),Pr(m,t.name),Pr(y,t.name),Pr(S,t.name),Pr(g,t.name),Pr(p,t.name);const N=new Fi({uid:v,auth:t,email:f,emailVerified:_,displayName:d,isAnonymous:C,photoURL:m,phoneNumber:h,tenantId:y,stsTokenManager:I,createdAt:g,lastLoginAt:p});return k&&Array.isArray(k)&&(N.providerData=k.map(T=>Object.assign({},T))),S&&(N._redirectEventId=S),N}static async _fromIdTokenResponse(t,n,r=!1){const i=new dl;i.updateFromServerResponse(n);const o=new Fi({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ju(o),o}}/**
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
 */const V1=new Map;function dr(e){_r(e instanceof Function,"Expected a class definition");let t=V1.get(e);return t?(_r(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,V1.set(e,t),t)}/**
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
 */class ck{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ck.type="NONE";const q1=ck;/**
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
 */function Zc(e,t,n){return`firebase:${e}:${t}:${n}`}class Jo{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Zc(this.userKey,i.apiKey,o),this.fullPersistenceKey=Zc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Fi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Jo(dr(q1),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||dr(q1);const s=Zc(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const u=await c._get(s);if(u){const d=Fi._fromJSON(t,u);c!==o&&(a=d),o=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Jo(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new Jo(o,t,r))}}/**
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
 */function G1(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fk(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(uk(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pk(t))return"Blackberry";if(mk(t))return"Webos";if(Fv(t))return"Safari";if((t.includes("chrome/")||dk(t))&&!t.includes("edge/"))return"Chrome";if(hk(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uk(e=$t()){return/firefox\//i.test(e)}function Fv(e=$t()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function dk(e=$t()){return/crios\//i.test(e)}function fk(e=$t()){return/iemobile/i.test(e)}function hk(e=$t()){return/android/i.test(e)}function pk(e=$t()){return/blackberry/i.test(e)}function mk(e=$t()){return/webos/i.test(e)}function rf(e=$t()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function $3(e=$t()){var t;return rf(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function F3(){return BP()&&document.documentMode===10}function gk(e=$t()){return rf(e)||hk(e)||mk(e)||pk(e)||/windows phone/i.test(e)||fk(e)}function z3(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function vk(e,t=[]){let n;switch(e){case"Browser":n=G1($t());break;case"Worker":n=`${G1($t())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}async function yk(e,t){return As(e,"GET","/v2/recaptchaConfig",Ps(e,t))}function K1(e){return e!==void 0&&e.enterprise!==void 0}class _k{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function U3(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function wk(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Jn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",U3().appendChild(r)})}function B3(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const j3="https://www.google.com/recaptcha/enterprise.js?render=",W3="recaptcha-enterprise",H3="NO_RECAPTCHA";class bk{constructor(t){this.type=W3,this.auth=Ns(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{yk(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new _k(l);return o.tenantId==null?o._agentRecaptchaConfig=c:o._tenantRecaptchaConfigs[o.tenantId]=c,s(c.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;K1(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(c=>{s(c)}).catch(()=>{s(H3)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&K1(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}wk(j3+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function Zu(e,t,n,r=!1){const i=new bk(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
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
 */class V3{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class q3{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Y1(this),this.idTokenSubscription=new Y1(this),this.beforeStateQueue=new V3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ik,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=dr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Jo.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ju(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=C3()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?mn(t):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ue(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dr(t))})}async initializeRecaptchaConfig(){const t=await yk(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new _k(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new bk(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new so("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&dr(t)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await Jo.create(this,[dr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return ue(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=vk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&_3(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ns(e){return mn(e)}class Y1{constructor(t){this.auth=t,this.observer=null,this.addObserver=YP(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function G3(e,t){const n=ao(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(tl(o,t??{}))return i;Un(i,"already-initialized")}return n.initialize({options:t})}function K3(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dr);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Y3(e,t,n){const r=Ns(e);ue(r._canInitEmulator,r,"emulator-config-failed"),ue(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Sk(t),{host:s,port:a}=Q3(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||X3()}function Sk(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Q3(e){const t=Sk(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Q1(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Q1(s)}}}function Q1(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function X3(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class zv{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ur("not implemented")}_getIdTokenResponse(t){return ur("not implemented")}_linkToIdToken(t,n){return ur("not implemented")}_getReauthenticationResolver(t){return ur("not implemented")}}async function J3(e,t){return As(e,"POST","/v1/accounts:update",t)}/**
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
 */async function Ph(e,t){return Vl(e,"POST","/v1/accounts:signInWithPassword",Ps(e,t))}/**
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
 */async function Z3(e,t){return Vl(e,"POST","/v1/accounts:signInWithEmailLink",Ps(e,t))}async function eL(e,t){return Vl(e,"POST","/v1/accounts:signInWithEmailLink",Ps(e,t))}/**
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
 */class fl extends zv{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new fl(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new fl(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Zu(t,r,"signInWithPassword");return Ph(t,i)}else return Ph(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await Zu(t,r,"signInWithPassword");return Ph(t,o)}else return Promise.reject(i)});case"emailLink":return Z3(t,{email:this._email,oobCode:this._password});default:Un(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return J3(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eL(t,{idToken:n,email:this._email,oobCode:this._password});default:Un(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Zo(e,t){return Vl(e,"POST","/v1/accounts:signInWithIdp",Ps(e,t))}/**
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
 */const tL="http://localhost";class Yi extends zv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Yi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Mv(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Yi(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Zo(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Zo(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Zo(t,n)}buildRequest(){const t={requestUri:tL,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=xs(n)}return t}}/**
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
 */function nL(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rL(e){const t=la(ca(e)).link,n=t?la(ca(t)).deep_link_id:null,r=la(ca(e)).deep_link_id;return(r?la(ca(r)).link:null)||r||n||t||e}class Uv{constructor(t){var n,r,i,o,s,a;const l=la(ca(t)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=nL((i=l.mode)!==null&&i!==void 0?i:null);ue(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=rL(t);try{return new Uv(n)}catch{return null}}}/**
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
 */class Os{constructor(){this.providerId=Os.PROVIDER_ID}static credential(t,n){return fl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Uv.parseLink(n);return ue(r,"argument-error"),fl._fromEmailAndCode(t,r.code,r.tenantId)}}Os.PROVIDER_ID="password";Os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ck{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ql extends Ck{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class $r extends ql{constructor(){super("facebook.com")}static credential(t){return Yi._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $r.credentialFromTaggedObject(t)}static credentialFromError(t){return $r.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $r.credential(t.oauthAccessToken)}catch{return null}}}$r.FACEBOOK_SIGN_IN_METHOD="facebook.com";$r.PROVIDER_ID="facebook.com";/**
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
 */class Fr extends ql{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Yi._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Fr.credentialFromTaggedObject(t)}static credentialFromError(t){return Fr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Fr.credential(n,r)}catch{return null}}}Fr.GOOGLE_SIGN_IN_METHOD="google.com";Fr.PROVIDER_ID="google.com";/**
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
 */class zr extends ql{constructor(){super("github.com")}static credential(t){return Yi._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return zr.credentialFromTaggedObject(t)}static credentialFromError(t){return zr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return zr.credential(t.oauthAccessToken)}catch{return null}}}zr.GITHUB_SIGN_IN_METHOD="github.com";zr.PROVIDER_ID="github.com";/**
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
 */class Ur extends ql{constructor(){super("twitter.com")}static credential(t,n){return Yi._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ur.credentialFromTaggedObject(t)}static credentialFromError(t){return Ur.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ur.credential(n,r)}catch{return null}}}Ur.TWITTER_SIGN_IN_METHOD="twitter.com";Ur.PROVIDER_ID="twitter.com";/**
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
 */async function Ah(e,t){return Vl(e,"POST","/v1/accounts:signUp",Ps(e,t))}/**
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
 */class Qi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Fi._fromIdTokenResponse(t,r,i),s=X1(r);return new Qi({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=X1(r);return new Qi({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function X1(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ed extends nr{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ed.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ed(t,n,r,i)}}function Ek(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ed._fromErrorAndOperation(e,o,t,r):o})}async function iL(e,t,n=!1){const r=await ul(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Qi._forOperation(e,"link",r)}/**
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
 */async function oL(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await ul(e,Ek(r,i,t,e),n);ue(o.idToken,r,"internal-error");const s=$v(o.idToken);ue(s,r,"internal-error");const{sub:a}=s;return ue(e.uid===a,r,"user-mismatch"),Qi._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Un(r,"user-mismatch"),o}}/**
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
 */async function kk(e,t,n=!1){const r="signIn",i=await Ek(e,r,t),o=await Qi._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function sL(e,t){return kk(Ns(e),t)}async function aL(e,t,n){var r;const i=Ns(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await Zu(i,o,"signUpPassword");s=Ah(i,c)}else s=Ah(i,o).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Zu(i,o,"signUpPassword");return Ah(i,u)}else return Promise.reject(c)});const a=await s.catch(c=>Promise.reject(c)),l=await Qi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function lL(e,t,n){return sL(mn(e),Os.credential(t,n))}function cL(e,t,n,r){return mn(e).onIdTokenChanged(t,n,r)}function uL(e,t,n){return mn(e).beforeAuthStateChanged(t,n)}const td="__sak";/**
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
 */class xk{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(td,"1"),this.storage.removeItem(td),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function dL(){const e=$t();return Fv(e)||rf(e)}const fL=1e3,hL=10;class Ik extends xk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dL()&&z3(),this.fallbackToPolling=gk(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);F3()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,hL):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},fL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ik.type="LOCAL";const pL=Ik;/**
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
 */class Tk extends xk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Tk.type="SESSION";const Rk=Tk;/**
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
 */function mL(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class of{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new of(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async c=>c(n.origin,o)),l=await mL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}of.receivers=[];/**
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
 */function Bv(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class gL{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const c=Bv("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(f.data.response);break;default:clearTimeout(u),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Zn(){return window}function vL(e){Zn().location.href=e}/**
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
 */function Pk(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function yL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _L(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function wL(){return Pk()?self:null}/**
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
 */const Ak="firebaseLocalStorageDb",bL=1,nd="firebaseLocalStorage",Nk="fbase_key";class Gl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sf(e,t){return e.transaction([nd],t?"readwrite":"readonly").objectStore(nd)}function SL(){const e=indexedDB.deleteDatabase(Ak);return new Gl(e).toPromise()}function bm(){const e=indexedDB.open(Ak,bL);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(nd,{keyPath:Nk})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(nd)?t(r):(r.close(),await SL(),t(await bm()))})})}async function J1(e,t,n){const r=sf(e,!0).put({[Nk]:t,value:n});return new Gl(r).toPromise()}async function CL(e,t){const n=sf(e,!1).get(t),r=await new Gl(n).toPromise();return r===void 0?null:r.value}function Z1(e,t){const n=sf(e,!0).delete(t);return new Gl(n).toPromise()}const EL=800,kL=3;class Ok{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>kL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=of._getInstance(wL()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await yL(),!this.activeServiceWorker)return;this.sender=new gL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||_L()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await bm();return await J1(t,td,"1"),await Z1(t,td),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>J1(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>CL(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Z1(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=sf(i,!1).getAll();return new Gl(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ok.type="LOCAL";const xL=Ok;new Hl(3e4,6e4);/**
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
 */function IL(e,t){return t?dr(t):(ue(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class jv extends zv{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Zo(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Zo(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Zo(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function TL(e){return kk(e.auth,new jv(e),e.bypassAuthState)}function RL(e){const{auth:t,user:n}=e;return ue(n,t,"internal-error"),oL(n,new jv(e),e.bypassAuthState)}async function PL(e){const{auth:t,user:n}=e;return ue(n,t,"internal-error"),iL(n,new jv(e),e.bypassAuthState)}/**
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
 */class Mk{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return TL;case"linkViaPopup":case"linkViaRedirect":return PL;case"reauthViaPopup":case"reauthViaRedirect":return RL;default:Un(this.auth,"internal-error")}}resolve(t){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const AL=new Hl(2e3,1e4);class Do extends Mk{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Do.currentPopupAction&&Do.currentPopupAction.cancel(),Do.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ue(t,this.auth,"internal-error"),t}async onExecution(){_r(this.filter.length===1,"Popup operations only handle one event");const t=Bv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Do.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,AL.get())};t()}}Do.currentPopupAction=null;/**
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
 */const NL="pendingRedirect",eu=new Map;class OL extends Mk{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=eu.get(this.auth._key());if(!t){try{const r=await ML(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}eu.set(this.auth._key(),t)}return this.bypassAuthState||eu.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ML(e,t){const n=$L(t),r=DL(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function LL(e,t){eu.set(e._key(),t)}function DL(e){return dr(e._redirectPersistence)}function $L(e){return Zc(NL,e.config.apiKey,e.name)}async function FL(e,t,n=!1){const r=Ns(e),i=IL(r,t),s=await new OL(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const zL=10*60*1e3;class UL{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!BL(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Lk(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=zL&&this.cachedEventUids.clear(),this.cachedEventUids.has(e_(t))}saveEventToCache(t){this.cachedEventUids.add(e_(t)),this.lastProcessedEventTime=Date.now()}}function e_(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Lk({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function BL(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lk(e);default:return!1}}/**
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
 */async function jL(e,t={}){return As(e,"GET","/v1/projects",t)}/**
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
 */const WL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HL=/^https?/;async function VL(e){if(e.config.emulator)return;const{authorizedDomains:t}=await jL(e);for(const n of t)try{if(qL(n))return}catch{}Un(e,"unauthorized-domain")}function qL(e){const t=wm(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!HL.test(n))return!1;if(WL.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const GL=new Hl(3e4,6e4);function t_(){const e=Zn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function KL(e){return new Promise((t,n)=>{var r,i,o;function s(){t_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{t_(),n(Jn(e,"network-request-failed"))},timeout:GL.get()})}if(!((i=(r=Zn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Zn().gapi)===null||o===void 0)&&o.load)s();else{const a=B3("iframefcb");return Zn()[a]=()=>{gapi.load?s():n(Jn(e,"network-request-failed"))},wk(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw tu=null,t})}let tu=null;function YL(e){return tu=tu||KL(e),tu}/**
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
 */const QL=new Hl(5e3,15e3),XL="__/auth/iframe",JL="emulator/auth/iframe",ZL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},e4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function t4(e){const t=e.config;ue(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Dv(t,JL):`https://${e.config.authDomain}/${XL}`,r={apiKey:t.apiKey,appName:e.name,v:Is},i=e4.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${xs(r).slice(1)}`}async function n4(e){const t=await YL(e),n=Zn().gapi;return ue(n,e,"internal-error"),t.open({where:document.body,url:t4(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZL,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Jn(e,"network-request-failed"),a=Zn().setTimeout(()=>{o(s)},QL.get());function l(){Zn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const r4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i4=500,o4=600,s4="_blank",a4="http://localhost";class n_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function l4(e,t,n,r=i4,i=o4){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},r4),{width:r.toString(),height:i.toString(),top:o,left:s}),c=$t().toLowerCase();n&&(a=dk(c)?s4:n),uk(c)&&(t=t||a4,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[h,m])=>`${f}${h}=${m},`,"");if($3(c)&&a!=="_self")return c4(t||"",a),new n_(null);const d=window.open(t||"",a,u);ue(d,e,"popup-blocked");try{d.focus()}catch{}return new n_(d)}function c4(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const u4="__/auth/handler",d4="emulator/auth/handler",f4=encodeURIComponent("fac");async function r_(e,t,n,r,i,o){ue(e.config.authDomain,e,"auth-domain-config-required"),ue(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Is,eventId:i};if(t instanceof Ck){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",tm(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,d]of Object.entries(o||{}))s[u]=d}if(t instanceof ql){const u=t.getScopes().filter(d=>d!=="");u.length>0&&(s.scopes=u.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await e._getAppCheckToken(),c=l?`#${f4}=${encodeURIComponent(l)}`:"";return`${h4(e)}?${xs(a).slice(1)}${c}`}function h4({config:e}){return e.emulator?Dv(e,d4):`https://${e.authDomain}/${u4}`}/**
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
 */const Nh="webStorageSupport";class p4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rk,this._completeRedirectFn=FL,this._overrideRedirectResult=LL}async _openPopup(t,n,r,i){var o;_r((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await r_(t,n,r,wm(),i);return l4(t,s,Bv())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await r_(t,n,r,wm(),i);return vL(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(_r(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await n4(t),r=new UL(t);return n.register("authEvent",i=>(ue(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Nh,{type:Nh},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Nh];s!==void 0&&n(!!s),Un(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VL(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return gk()||Fv()||rf()}}const m4=p4;var i_="@firebase/auth",o_="0.23.1";/**
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
 */class g4{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function v4(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function y4(e){tr(new zn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;ue(s&&!s.includes(":"),"invalid-api-key",{appName:r.name}),ue(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vk(e)},c=new q3(r,i,o,l);return K3(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),tr(new zn("auth-internal",t=>{const n=Ns(t.getProvider("auth").getImmediate());return(r=>new g4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(i_,o_,v4(e)),Sn(i_,o_,"esm2017")}/**
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
 */const _4=5*60,w4=TC("authIdTokenMaxAge")||_4;let s_=null;const b4=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>w4)return;const i=n==null?void 0:n.token;s_!==i&&(s_=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Dk(e=rv()){const t=ao(e,"auth");if(t.isInitialized())return t.getImmediate();const n=G3(e,{popupRedirectResolver:m4,persistence:[xL,pL,Rk]}),r=TC("authTokenSyncURL");if(r){const o=b4(r);uL(n,o,()=>o(n.currentUser)),cL(n,s=>o(s))}const i=IC("auth");return i&&Y3(n,`http://${i}`),n}y4("Browser");const S4=(e,t)=>t.some(n=>e instanceof n);let a_,l_;function C4(){return a_||(a_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function E4(){return l_||(l_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $k=new WeakMap,Sm=new WeakMap,Fk=new WeakMap,Oh=new WeakMap,Wv=new WeakMap;function k4(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(ni(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&$k.set(n,e)}).catch(()=>{}),Wv.set(t,e),t}function x4(e){if(Sm.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Sm.set(e,t)}let Cm={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Sm.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Fk.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ni(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function I4(e){Cm=e(Cm)}function T4(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Mh(this),t,...n);return Fk.set(r,t.sort?t.sort():[t]),ni(r)}:E4().includes(e)?function(...t){return e.apply(Mh(this),t),ni($k.get(this))}:function(...t){return ni(e.apply(Mh(this),t))}}function R4(e){return typeof e=="function"?T4(e):(e instanceof IDBTransaction&&x4(e),S4(e,C4())?new Proxy(e,Cm):e)}function ni(e){if(e instanceof IDBRequest)return k4(e);if(Oh.has(e))return Oh.get(e);const t=R4(e);return t!==e&&(Oh.set(e,t),Wv.set(t,e)),t}const Mh=e=>Wv.get(e);function P4(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=ni(s);return r&&s.addEventListener("upgradeneeded",l=>{r(ni(s.result),l.oldVersion,l.newVersion,ni(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const A4=["get","getKey","getAll","getAllKeys","count"],N4=["put","add","delete","clear"],Lh=new Map;function c_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Lh.get(t))return Lh.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=N4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||A4.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Lh.set(t,o),o}I4(e=>({...e,get:(t,n,r)=>c_(t,n)||e.get(t,n,r),has:(t,n)=>!!c_(t,n)||e.has(t,n)}));const zk="@firebase/installations",Hv="0.6.4";/**
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
 */const Uk=1e4,Bk=`w:${Hv}`,jk="FIS_v2",O4="https://firebaseinstallations.googleapis.com/v1",M4=60*60*1e3,L4="installations",D4="Installations";/**
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
 */const $4={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Xi=new so(L4,D4,$4);function Wk(e){return e instanceof nr&&e.code.includes("request-failed")}/**
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
 */function Hk({projectId:e}){return`${O4}/projects/${e}/installations`}function Vk(e){return{token:e.token,requestStatus:2,expiresIn:z4(e.expiresIn),creationTime:Date.now()}}async function qk(e,t){const r=(await t.json()).error;return Xi.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Gk({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function F4(e,{refreshToken:t}){const n=Gk(e);return n.append("Authorization",U4(t)),n}async function Kk(e){const t=await e();return t.status>=500&&t.status<600?e():t}function z4(e){return Number(e.replace("s","000"))}function U4(e){return`${jk} ${e}`}/**
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
 */async function B4({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Hk(e),i=Gk(e),o=t.getImmediate({optional:!0});if(o){const c=await o.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const s={fid:n,authVersion:jk,appId:e.appId,sdkVersion:Bk},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Kk(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Vk(c.authToken)}}else throw await qk("Create Installation",l)}/**
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
 */function Yk(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function j4(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const W4=/^[cdef][\w-]{21}$/,Em="";function H4(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=V4(e);return W4.test(n)?n:Em}catch{return Em}}function V4(e){return j4(e).substr(0,22)}/**
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
 */function af(e){return`${e.appName}!${e.appId}`}/**
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
 */const Qk=new Map;function Xk(e,t){const n=af(e);Jk(n,t),q4(n,t)}function Jk(e,t){const n=Qk.get(e);if(n)for(const r of n)r(t)}function q4(e,t){const n=G4();n&&n.postMessage({key:e,fid:t}),K4()}let Pi=null;function G4(){return!Pi&&"BroadcastChannel"in self&&(Pi=new BroadcastChannel("[Firebase] FID Change"),Pi.onmessage=e=>{Jk(e.data.key,e.data.fid)}),Pi}function K4(){Qk.size===0&&Pi&&(Pi.close(),Pi=null)}/**
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
 */const Y4="firebase-installations-database",Q4=1,Ji="firebase-installations-store";let Dh=null;function Vv(){return Dh||(Dh=P4(Y4,Q4,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ji)}}})),Dh}async function rd(e,t){const n=af(e),i=(await Vv()).transaction(Ji,"readwrite"),o=i.objectStore(Ji),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&Xk(e,t.fid),t}async function Zk(e){const t=af(e),r=(await Vv()).transaction(Ji,"readwrite");await r.objectStore(Ji).delete(t),await r.done}async function lf(e,t){const n=af(e),i=(await Vv()).transaction(Ji,"readwrite"),o=i.objectStore(Ji),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&Xk(e,a.fid),a}/**
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
 */async function qv(e){let t;const n=await lf(e.appConfig,r=>{const i=X4(r),o=J4(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Em?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function X4(e){const t=e||{fid:H4(),registrationStatus:0};return ex(t)}function J4(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Xi.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Z4(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:eD(e)}:{installationEntry:t}}async function Z4(e,t){try{const n=await B4(e,t);return rd(e.appConfig,n)}catch(n){throw Wk(n)&&n.customData.serverCode===409?await Zk(e.appConfig):await rd(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function eD(e){let t=await u_(e.appConfig);for(;t.registrationStatus===1;)await Yk(100),t=await u_(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await qv(e);return r||n}return t}function u_(e){return lf(e,t=>{if(!t)throw Xi.create("installation-not-found");return ex(t)})}function ex(e){return tD(e)?{fid:e.fid,registrationStatus:0}:e}function tD(e){return e.registrationStatus===1&&e.registrationTime+Uk<Date.now()}/**
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
 */async function nD({appConfig:e,heartbeatServiceProvider:t},n){const r=rD(e,n),i=F4(e,n),o=t.getImmediate({optional:!0});if(o){const c=await o.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const s={installation:{sdkVersion:Bk,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Kk(()=>fetch(r,a));if(l.ok){const c=await l.json();return Vk(c)}else throw await qk("Generate Auth Token",l)}function rD(e,{fid:t}){return`${Hk(e)}/${t}/authTokens:generate`}/**
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
 */async function Gv(e,t=!1){let n;const r=await lf(e.appConfig,o=>{if(!tx(o))throw Xi.create("not-registered");const s=o.authToken;if(!t&&sD(s))return o;if(s.requestStatus===1)return n=iD(e,t),o;{if(!navigator.onLine)throw Xi.create("app-offline");const a=lD(o);return n=oD(e,a),a}});return n?await n:r.authToken}async function iD(e,t){let n=await d_(e.appConfig);for(;n.authToken.requestStatus===1;)await Yk(100),n=await d_(e.appConfig);const r=n.authToken;return r.requestStatus===0?Gv(e,t):r}function d_(e){return lf(e,t=>{if(!tx(t))throw Xi.create("not-registered");const n=t.authToken;return cD(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function oD(e,t){try{const n=await nD(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await rd(e.appConfig,r),n}catch(n){if(Wk(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Zk(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await rd(e.appConfig,r)}throw n}}function tx(e){return e!==void 0&&e.registrationStatus===2}function sD(e){return e.requestStatus===2&&!aD(e)}function aD(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+M4}function lD(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function cD(e){return e.requestStatus===1&&e.requestTime+Uk<Date.now()}/**
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
 */async function uD(e){const t=e,{installationEntry:n,registrationPromise:r}=await qv(t);return r?r.catch(console.error):Gv(t).catch(console.error),n.fid}/**
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
 */async function dD(e,t=!1){const n=e;return await fD(n),(await Gv(n,t)).token}async function fD(e){const{registrationPromise:t}=await qv(e);t&&await t}/**
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
 */function hD(e){if(!e||!e.options)throw $h("App Configuration");if(!e.name)throw $h("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw $h(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function $h(e){return Xi.create("missing-app-config-values",{valueName:e})}/**
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
 */const nx="installations",pD="installations-internal",mD=e=>{const t=e.getProvider("app").getImmediate(),n=hD(t),r=ao(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},gD=e=>{const t=e.getProvider("app").getImmediate(),n=ao(t,nx).getImmediate();return{getId:()=>uD(n),getToken:i=>dD(n,i)}};function vD(){tr(new zn(nx,mD,"PUBLIC")),tr(new zn(pD,gD,"PRIVATE"))}vD();Sn(zk,Hv);Sn(zk,Hv,"esm2017");/**
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
 */const id="analytics",yD="firebase_id",_D="origin",wD=60*1e3,bD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Kv="https://www.googletagmanager.com/gtag/js";/**
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
 */const Jt=new Yd("@firebase/analytics");/**
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
 */const SD={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ln=new so("analytics","Analytics",SD);/**
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
 */function CD(e){if(!e.startsWith(Kv)){const t=ln.create("invalid-gtag-resource",{gtagURL:e});return Jt.warn(t.message),""}return e}function rx(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function ED(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function kD(e,t){const n=ED("firebase-js-sdk-policy",{createScriptURL:CD}),r=document.createElement("script"),i=`${Kv}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function xD(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ID(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await rx(n)).find(c=>c.measurementId===i);l&&await t[l.appId]}}catch(a){Jt.error(a)}e("config",i,o)}async function TD(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await rx(n);for(const l of s){const c=a.find(d=>d.measurementId===l),u=c&&t[c.appId];if(u)o.push(u);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Jt.error(o)}}function RD(e,t,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await TD(e,t,n,a,l)}else if(o==="config"){const[a,l]=s;await ID(e,t,n,r,a,l)}else if(o==="consent"){const[a]=s;e("consent","update",a)}else if(o==="get"){const[a,l,c]=s;e("get",a,l,c)}else if(o==="set"){const[a]=s;e("set",a)}else e(o,...s)}catch(a){Jt.error(a)}}return i}function PD(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=RD(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function AD(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Kv)&&n.src.includes(e))return n;return null}/**
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
 */const ND=30,OD=1e3;class MD{constructor(t={},n=OD){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ix=new MD;function LD(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function DD(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:LD(r)},o=bD.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw ln.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function $D(e,t=ix,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw ln.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw ln.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new UD;return setTimeout(async()=>{a.abort()},n!==void 0?n:wD),ox({appId:r,apiKey:i,measurementId:o},s,a,t)}async function ox(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=ix){var o;const{appId:s,measurementId:a}=e;try{await FD(r,t)}catch(l){if(a)return Jt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await DD(e);return i.deleteThrottleMetadata(s),l}catch(l){const c=l;if(!zD(c)){if(i.deleteThrottleMetadata(s),a)return Jt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:a};throw l}const u=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?t1(n,i.intervalMillis,ND):t1(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(s,d),Jt.debug(`Calling attemptFetch again in ${u} millis`),ox(e,d,r,i)}}function FD(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(ln.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function zD(e){if(!(e instanceof nr)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class UD{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function BD(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
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
 */async function jD(){if(NC())try{await OC()}catch(e){return Jt.warn(ln.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Jt.warn(ln.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function WD(e,t,n,r,i,o,s){var a;const l=$D(e);l.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&Jt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>Jt.error(h)),t.push(l);const c=jD().then(h=>{if(h)return r.getId()}),[u,d]=await Promise.all([l,c]);AD(o)||kD(o,u.measurementId),i("js",new Date);const f=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return f[_D]="firebase",f.update=!0,d!=null&&(f[yD]=d),i("config",u.measurementId,f),u.measurementId}/**
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
 */class HD{constructor(t){this.app=t}_delete(){return delete Ia[this.app.options.appId],Promise.resolve()}}let Ia={},f_=[];const h_={};let Fh="dataLayer",VD="gtag",p_,sx,m_=!1;function qD(){const e=[];if(RC()&&e.push("This is a browser extension environment."),jP()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ln.create("invalid-analytics-context",{errorInfo:t});Jt.warn(n.message)}}function GD(e,t,n){qD();const r=e.options.appId;if(!r)throw ln.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Jt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ln.create("no-api-key");if(Ia[r]!=null)throw ln.create("already-exists",{id:r});if(!m_){xD(Fh);const{wrappedGtag:o,gtagCore:s}=PD(Ia,f_,h_,Fh,VD);sx=o,p_=s,m_=!0}return Ia[r]=WD(e,f_,h_,t,p_,Fh,n),new HD(e)}function KD(e=rv()){e=mn(e);const t=ao(e,id);return t.isInitialized()?t.getImmediate():YD(e)}function YD(e,t={}){const n=ao(e,id);if(n.isInitialized()){const i=n.getImmediate();if(tl(t,n.getOptions()))return i;throw ln.create("already-initialized")}return n.initialize({options:t})}function QD(e,t,n,r){e=mn(e),BD(sx,Ia[e.app.options.appId],t,n,r).catch(i=>Jt.error(i))}const g_="@firebase/analytics",v_="0.10.0";function XD(){tr(new zn(id,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return GD(r,i,n)},"PUBLIC")),tr(new zn("analytics-internal",e,"PRIVATE")),Sn(g_,v_),Sn(g_,v_,"esm2017");function e(t){try{const n=t.getProvider(id).getImmediate();return{logEvent:(r,i,o)=>QD(n,r,i,o)}}catch(n){throw ln.create("interop-component-reg-failed",{reason:n})}}}XD();const JD={apiKey:"AIzaSyDPOkyUz5CWBVtnnEbCiXHigIbsRggAVxQ",authDomain:"connectedspine-6185c.firebaseapp.com",projectId:"connectedspine-6185c",storageBucket:"connectedspine-6185c.appspot.com",messagingSenderId:"1007989386438",appId:"1:1007989386438:web:ae244de67f858f182efbc7",measurementId:"G-HWSQ69B24Y"},Yv=FC(JD),ZD=m3(Yv),ax=Dk(Yv);KD(Yv);const e5=e=>{const[t,n]=w.useState(),[r,i]=w.useState(null);return w.useEffect(()=>a3(o3(ZD,e),o=>{n(o.val())},o=>{i(o)}),[e]),[t,r]};function y_(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?y_(Object(n),!0).forEach(function(r){mt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y_(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function od(e){return od=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},od(e)}function t5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function __(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n5(e,t,n){return t&&__(e.prototype,t),n&&__(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function mt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qv(e,t){return i5(e)||s5(e,t)||lx(e,t)||l5()}function Kl(e){return r5(e)||o5(e)||lx(e)||a5()}function r5(e){if(Array.isArray(e))return km(e)}function i5(e){if(Array.isArray(e))return e}function o5(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function s5(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function lx(e,t){if(e){if(typeof e=="string")return km(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return km(e,t)}}function km(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var w_=function(){},Xv={},cx={},ux=null,dx={mark:w_,measure:w_};try{typeof window<"u"&&(Xv=window),typeof document<"u"&&(cx=document),typeof MutationObserver<"u"&&(ux=MutationObserver),typeof performance<"u"&&(dx=performance)}catch{}var c5=Xv.navigator||{},b_=c5.userAgent,S_=b_===void 0?"":b_,ci=Xv,je=cx,C_=ux,xc=dx;ci.document;var Ir=!!je.documentElement&&!!je.head&&typeof je.addEventListener=="function"&&typeof je.createElement=="function",fx=~S_.indexOf("MSIE")||~S_.indexOf("Trident/"),Ic,Tc,Rc,Pc,Ac,wr="___FONT_AWESOME___",xm=16,hx="fa",px="svg-inline--fa",Zi="data-fa-i2svg",Im="data-fa-pseudo-element",u5="data-fa-pseudo-element-pending",Jv="data-prefix",Zv="data-icon",E_="fontawesome-i2svg",d5="async",f5=["HTML","HEAD","STYLE","SCRIPT"],mx=function(){try{return!0}catch{return!1}}(),Ue="classic",rt="sharp",ey=[Ue,rt];function Yl(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Ue]}})}var hl=Yl((Ic={},mt(Ic,Ue,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),mt(Ic,rt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ic)),pl=Yl((Tc={},mt(Tc,Ue,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),mt(Tc,rt,{solid:"fass",regular:"fasr",light:"fasl"}),Tc)),ml=Yl((Rc={},mt(Rc,Ue,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),mt(Rc,rt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Rc)),h5=Yl((Pc={},mt(Pc,Ue,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),mt(Pc,rt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Pc)),p5=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,gx="fa-layers-text",m5=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,g5=Yl((Ac={},mt(Ac,Ue,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),mt(Ac,rt,{900:"fass",400:"fasr",300:"fasl"}),Ac)),vx=[1,2,3,4,5,6,7,8,9,10],v5=vx.concat([11,12,13,14,15,16,17,18,19,20]),y5=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ai={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gl=new Set;Object.keys(pl[Ue]).map(gl.add.bind(gl));Object.keys(pl[rt]).map(gl.add.bind(gl));var _5=[].concat(ey,Kl(gl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ai.GROUP,Ai.SWAP_OPACITY,Ai.PRIMARY,Ai.SECONDARY]).concat(vx.map(function(e){return"".concat(e,"x")})).concat(v5.map(function(e){return"w-".concat(e)})),Ta=ci.FontAwesomeConfig||{};function w5(e){var t=je.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function b5(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(je&&typeof je.querySelector=="function"){var S5=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];S5.forEach(function(e){var t=Qv(e,2),n=t[0],r=t[1],i=b5(w5(n));i!=null&&(Ta[r]=i)})}var yx={styleDefault:"solid",familyDefault:"classic",cssPrefix:hx,replacementClass:px,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ta.familyPrefix&&(Ta.cssPrefix=Ta.familyPrefix);var vs=q(q({},yx),Ta);vs.autoReplaceSvg||(vs.observeMutations=!1);var Q={};Object.keys(yx).forEach(function(e){Object.defineProperty(Q,e,{enumerable:!0,set:function(n){vs[e]=n,Ra.forEach(function(r){return r(Q)})},get:function(){return vs[e]}})});Object.defineProperty(Q,"familyPrefix",{enumerable:!0,set:function(t){vs.cssPrefix=t,Ra.forEach(function(n){return n(Q)})},get:function(){return vs.cssPrefix}});ci.FontAwesomeConfig=Q;var Ra=[];function C5(e){return Ra.push(e),function(){Ra.splice(Ra.indexOf(e),1)}}var Ar=xm,Yn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function E5(e){if(!(!e||!Ir)){var t=je.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=je.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return je.head.insertBefore(t,r),e}}var k5="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vl(){for(var e=12,t="";e-- >0;)t+=k5[Math.random()*62|0];return t}function Ms(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ty(e){return e.classList?Ms(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function _x(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function x5(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(_x(e[n]),'" ')},"").trim()}function cf(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ny(e){return e.size!==Yn.size||e.x!==Yn.x||e.y!==Yn.y||e.rotate!==Yn.rotate||e.flipX||e.flipY}function I5(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function T5(e){var t=e.transform,n=e.width,r=n===void 0?xm:n,i=e.height,o=i===void 0?xm:i,s=e.startCentered,a=s===void 0?!1:s,l="";return a&&fx?l+="translate(".concat(t.x/Ar-r/2,"em, ").concat(t.y/Ar-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/Ar,"em), calc(-50% + ").concat(t.y/Ar,"em)) "):l+="translate(".concat(t.x/Ar,"em, ").concat(t.y/Ar,"em) "),l+="scale(".concat(t.size/Ar*(t.flipX?-1:1),", ").concat(t.size/Ar*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var R5=`:root, :host {
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
}`;function wx(){var e=hx,t=px,n=Q.cssPrefix,r=Q.replacementClass,i=R5;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var k_=!1;function zh(){Q.autoAddCss&&!k_&&(E5(wx()),k_=!0)}var P5={mixout:function(){return{dom:{css:wx,insertCss:zh}}},hooks:function(){return{beforeDOMElementCreation:function(){zh()},beforeI2svg:function(){zh()}}}},br=ci||{};br[wr]||(br[wr]={});br[wr].styles||(br[wr].styles={});br[wr].hooks||(br[wr].hooks={});br[wr].shims||(br[wr].shims=[]);var Mn=br[wr],bx=[],A5=function e(){je.removeEventListener("DOMContentLoaded",e),sd=1,bx.map(function(t){return t()})},sd=!1;Ir&&(sd=(je.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(je.readyState),sd||je.addEventListener("DOMContentLoaded",A5));function N5(e){Ir&&(sd?setTimeout(e,0):bx.push(e))}function Ql(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?_x(e):"<".concat(t," ").concat(x5(r),">").concat(o.map(Ql).join(""),"</").concat(t,">")}function x_(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var O5=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},Uh=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?O5(n,i):n,l,c,u;for(r===void 0?(l=1,u=t[o[0]]):(l=0,u=r);l<s;l++)c=o[l],u=a(u,t[c],c,t);return u};function M5(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Tm(e){var t=M5(e);return t.length===1?t[0].toString(16):null}function L5(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function I_(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Rm(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=I_(t);typeof Mn.hooks.addPack=="function"&&!i?Mn.hooks.addPack(e,I_(t)):Mn.styles[e]=q(q({},Mn.styles[e]||{}),o),e==="fas"&&Rm("fa",t)}var Nc,Oc,Mc,$o=Mn.styles,D5=Mn.shims,$5=(Nc={},mt(Nc,Ue,Object.values(ml[Ue])),mt(Nc,rt,Object.values(ml[rt])),Nc),ry=null,Sx={},Cx={},Ex={},kx={},xx={},F5=(Oc={},mt(Oc,Ue,Object.keys(hl[Ue])),mt(Oc,rt,Object.keys(hl[rt])),Oc);function z5(e){return~_5.indexOf(e)}function U5(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!z5(i)?i:null}var Ix=function(){var t=function(o){return Uh($o,function(s,a,l){return s[l]=Uh(a,o,{}),s},{})};Sx=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),Cx=t(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),xx=t(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in $o||Q.autoFetchSvg,r=Uh(D5,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Ex=r.names,kx=r.unicodes,ry=uf(Q.styleDefault,{family:Q.familyDefault})};C5(function(e){ry=uf(e.styleDefault,{family:Q.familyDefault})});Ix();function iy(e,t){return(Sx[e]||{})[t]}function B5(e,t){return(Cx[e]||{})[t]}function Ni(e,t){return(xx[e]||{})[t]}function Tx(e){return Ex[e]||{prefix:null,iconName:null}}function j5(e){var t=kx[e],n=iy("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ui(){return ry}var oy=function(){return{prefix:null,iconName:null,rest:[]}};function uf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Ue:n,i=hl[r][e],o=pl[r][e]||pl[r][i],s=e in Mn.styles?e:null;return o||s||null}var T_=(Mc={},mt(Mc,Ue,Object.keys(ml[Ue])),mt(Mc,rt,Object.keys(ml[rt])),Mc);function df(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},mt(t,Ue,"".concat(Q.cssPrefix,"-").concat(Ue)),mt(t,rt,"".concat(Q.cssPrefix,"-").concat(rt)),t),s=null,a=Ue;(e.includes(o[Ue])||e.some(function(c){return T_[Ue].includes(c)}))&&(a=Ue),(e.includes(o[rt])||e.some(function(c){return T_[rt].includes(c)}))&&(a=rt);var l=e.reduce(function(c,u){var d=U5(Q.cssPrefix,u);if($o[u]?(u=$5[a].includes(u)?h5[a][u]:u,s=u,c.prefix=u):F5[a].indexOf(u)>-1?(s=u,c.prefix=uf(u,{family:a})):d?c.iconName=d:u!==Q.replacementClass&&u!==o[Ue]&&u!==o[rt]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var f=s==="fa"?Tx(c.iconName):{},h=Ni(c.prefix,c.iconName);f.prefix&&(s=null),c.iconName=f.iconName||h||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!$o.far&&$o.fas&&!Q.autoFetchSvg&&(c.prefix="fas")}return c},oy());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===rt&&($o.fass||Q.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ni(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=ui()||"fas"),l}var W5=function(){function e(){t5(this,e),this.definitions={}}return n5(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=q(q({},n.definitions[a]||{}),s[a]),Rm(a,s[a]);var l=ml[Ue][a];l&&Rm(l,s[a]),Ix()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,c=s.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(n[a][d]=c)}),n[a][l]=c}),n}}]),e}(),R_=[],Fo={},es={},H5=Object.keys(es);function V5(e,t){var n=t.mixoutsTo;return R_=e,Fo={},Object.keys(es).forEach(function(r){H5.indexOf(r)===-1&&delete es[r]}),R_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),od(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){Fo[s]||(Fo[s]=[]),Fo[s].push(o[s])})}r.provides&&r.provides(es)}),n}function Pm(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Fo[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function eo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Fo[e]||[];i.forEach(function(o){o.apply(null,n)})}function Sr(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return es[e]?es[e].apply(null,t):void 0}function Am(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ui();if(t)return t=Ni(n,t)||t,x_(Rx.definitions,n,t)||x_(Mn.styles,n,t)}var Rx=new W5,q5=function(){Q.autoReplaceSvg=!1,Q.observeMutations=!1,eo("noAuto")},G5={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ir?(eo("beforeI2svg",t),Sr("pseudoElements2svg",t),Sr("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;Q.autoReplaceSvg===!1&&(Q.autoReplaceSvg=!0),Q.observeMutations=!0,N5(function(){Y5({autoReplaceSvgRoot:n}),eo("watch",t)})}},K5={icon:function(t){if(t===null)return null;if(od(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ni(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=uf(t[0]);return{prefix:r,iconName:Ni(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(Q.cssPrefix,"-"))>-1||t.match(p5))){var i=df(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||ui(),iconName:Ni(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=ui();return{prefix:o,iconName:Ni(o,t)||t}}}},gn={noAuto:q5,config:Q,dom:G5,parse:K5,library:Rx,findIconDefinition:Am,toHtml:Ql},Y5=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?je:n;(Object.keys(Mn.styles).length>0||Q.autoFetchSvg)&&Ir&&Q.autoReplaceSvg&&gn.dom.i2svg({node:r})};function ff(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ql(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ir){var r=je.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Q5(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(ny(s)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=cf(q(q({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function X5(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(Q.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:q(q({},i),{},{id:s}),children:r}]}]}function sy(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,s=e.transform,a=e.symbol,l=e.title,c=e.maskId,u=e.titleId,d=e.extra,f=e.watchable,h=f===void 0?!1:f,m=r.found?r:n,y=m.width,S=m.height,g=i==="fak",p=[Q.replacementClass,o?"".concat(Q.cssPrefix,"-").concat(o):""].filter(function(N){return d.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(d.classes).join(" "),v={children:[],attributes:q(q({},d.attributes),{},{"data-prefix":i,"data-icon":o,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(S)})},_=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(y/S*16*.0625,"em")}:{};h&&(v.attributes[Zi]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(u||vl())},children:[l]}),delete v.attributes.title);var C=q(q({},v),{},{prefix:i,iconName:o,main:n,mask:r,maskId:c,transform:s,symbol:a,styles:q(q({},_),d.styles)}),k=r.found&&n.found?Sr("generateAbstractMask",C)||{children:[],attributes:{}}:Sr("generateAbstractIcon",C)||{children:[],attributes:{}},E=k.children,I=k.attributes;return C.children=E,C.attributes=I,a?X5(C):Q5(C)}function P_(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,s=e.extra,a=e.watchable,l=a===void 0?!1:a,c=q(q(q({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(c[Zi]="");var u=q({},s.styles);ny(i)&&(u.transform=T5({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var d=cf(u);d.length>0&&(c.style=d);var f=[];return f.push({tag:"span",attributes:c,children:[t]}),o&&f.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),f}function J5(e){var t=e.content,n=e.title,r=e.extra,i=q(q(q({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=cf(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Bh=Mn.styles;function Nm(e){var t=e[0],n=e[1],r=e.slice(4),i=Qv(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Ai.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Ai.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Ai.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var Z5={found:!1,width:512,height:512};function e$(e,t){!mx&&!Q.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Om(e,t){var n=t;return t==="fa"&&Q.styleDefault!==null&&(t=ui()),new Promise(function(r,i){if(Sr("missingIconAbstract"),n==="fa"){var o=Tx(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Bh[t]&&Bh[t][e]){var s=Bh[t][e];return r(Nm(s))}e$(e,t),r(q(q({},Z5),{},{icon:Q.showMissingIcons&&e?Sr("missingIconAbstract")||{}:{}}))})}var A_=function(){},Mm=Q.measurePerformance&&xc&&xc.mark&&xc.measure?xc:{mark:A_,measure:A_},ua='FA "6.4.0"',t$=function(t){return Mm.mark("".concat(ua," ").concat(t," begins")),function(){return Px(t)}},Px=function(t){Mm.mark("".concat(ua," ").concat(t," ends")),Mm.measure("".concat(ua," ").concat(t),"".concat(ua," ").concat(t," begins"),"".concat(ua," ").concat(t," ends"))},ay={begin:t$,end:Px},nu=function(){};function N_(e){var t=e.getAttribute?e.getAttribute(Zi):null;return typeof t=="string"}function n$(e){var t=e.getAttribute?e.getAttribute(Jv):null,n=e.getAttribute?e.getAttribute(Zv):null;return t&&n}function r$(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(Q.replacementClass)}function i$(){if(Q.autoReplaceSvg===!0)return ru.replace;var e=ru[Q.autoReplaceSvg];return e||ru.replace}function o$(e){return je.createElementNS("http://www.w3.org/2000/svg",e)}function s$(e){return je.createElement(e)}function Ax(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?o$:s$:n;if(typeof e=="string")return je.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(Ax(s,{ceFn:r}))}),i}function a$(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ru={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Ax(i),n)}),n.getAttribute(Zi)===null&&Q.keepOriginalSource){var r=je.createComment(a$(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ty(n).indexOf(Q.replacementClass))return ru.replace(t);var i=new RegExp("".concat(Q.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===Q.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return Ql(a)}).join(`
`);n.setAttribute(Zi,""),n.innerHTML=s}};function O_(e){e()}function Nx(e,t){var n=typeof t=="function"?t:nu;if(e.length===0)n();else{var r=O_;Q.mutateApproach===d5&&(r=ci.requestAnimationFrame||O_),r(function(){var i=i$(),o=ay.begin("mutate");e.map(i),o(),n()})}}var ly=!1;function Ox(){ly=!0}function Lm(){ly=!1}var ad=null;function M_(e){if(C_&&Q.observeMutations){var t=e.treeCallback,n=t===void 0?nu:t,r=e.nodeCallback,i=r===void 0?nu:r,o=e.pseudoElementsCallback,s=o===void 0?nu:o,a=e.observeMutationsRoot,l=a===void 0?je:a;ad=new C_(function(c){if(!ly){var u=ui();Ms(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!N_(d.addedNodes[0])&&(Q.searchPseudoElements&&s(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&Q.searchPseudoElements&&s(d.target.parentNode),d.type==="attributes"&&N_(d.target)&&~y5.indexOf(d.attributeName))if(d.attributeName==="class"&&n$(d.target)){var f=df(ty(d.target)),h=f.prefix,m=f.iconName;d.target.setAttribute(Jv,h||u),m&&d.target.setAttribute(Zv,m)}else r$(d.target)&&i(d.target)})}}),Ir&&ad.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function l$(){ad&&ad.disconnect()}function c$(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function u$(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=df(ty(e));return i.prefix||(i.prefix=ui()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=B5(i.prefix,e.innerText)||iy(i.prefix,Tm(e.innerText))),!i.iconName&&Q.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function d$(e){var t=Ms(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return Q.autoA11y&&(n?t["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(r||vl()):(t["aria-hidden"]="true",t.focusable="false")),t}function f$(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Yn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function L_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=u$(e),r=n.iconName,i=n.prefix,o=n.rest,s=d$(e),a=Pm("parseNodeAttributes",{},e),l=t.styleParser?c$(e):[];return q({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Yn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var h$=Mn.styles;function Mx(e){var t=Q.autoReplaceSvg==="nest"?L_(e,{styleParser:!1}):L_(e);return~t.extra.classes.indexOf(gx)?Sr("generateLayersText",e,t):Sr("generateSvgReplacementMutation",e,t)}var di=new Set;ey.map(function(e){di.add("fa-".concat(e))});Object.keys(hl[Ue]).map(di.add.bind(di));Object.keys(hl[rt]).map(di.add.bind(di));di=Kl(di);function D_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ir)return Promise.resolve();var n=je.documentElement.classList,r=function(d){return n.add("".concat(E_,"-").concat(d))},i=function(d){return n.remove("".concat(E_,"-").concat(d))},o=Q.autoFetchSvg?di:ey.map(function(u){return"fa-".concat(u)}).concat(Object.keys(h$));o.includes("fa")||o.push("fa");var s=[".".concat(gx,":not([").concat(Zi,"])")].concat(o.map(function(u){return".".concat(u,":not([").concat(Zi,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=Ms(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=ay.begin("onTree"),c=a.reduce(function(u,d){try{var f=Mx(d);f&&u.push(f)}catch(h){mx||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise(function(u,d){Promise.all(c).then(function(f){Nx(f,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(f){l(),d(f)})})}function p$(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mx(e).then(function(n){n&&Nx([n],t)})}function m$(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Am(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Am(i||{})),e(r,q(q({},n),{},{mask:i}))}}var g$=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Yn:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,d=n.title,f=d===void 0?null:d,h=n.titleId,m=h===void 0?null:h,y=n.classes,S=y===void 0?[]:y,g=n.attributes,p=g===void 0?{}:g,v=n.styles,_=v===void 0?{}:v;if(t){var C=t.prefix,k=t.iconName,E=t.icon;return ff(q({type:"icon"},t),function(){return eo("beforeDOMElementCreation",{iconDefinition:t,params:n}),Q.autoA11y&&(f?p["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(m||vl()):(p["aria-hidden"]="true",p.focusable="false")),sy({icons:{main:Nm(E),mask:l?Nm(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:k,transform:q(q({},Yn),i),symbol:s,title:f,maskId:u,titleId:m,extra:{attributes:p,styles:_,classes:S}})})}},v$={mixout:function(){return{icon:m$(g$)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=D_,n.nodeCallback=p$,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?je:r,o=n.callback,s=o===void 0?function(){}:o;return D_(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,d=r.maskId,f=r.extra;return new Promise(function(h,m){Promise.all([Om(i,a),u.iconName?Om(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var S=Qv(y,2),g=S[0],p=S[1];h([n,sy({icons:{main:g,mask:p},prefix:a,iconName:i,transform:l,symbol:c,maskId:d,title:o,titleId:s,extra:f,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=cf(a);l.length>0&&(i.style=l);var c;return ny(s)&&(c=Sr("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(c||o.icon),{children:r,attributes:i}}}},y$={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return ff({type:"layer"},function(){eo("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(Q.cssPrefix,"-layers")].concat(Kl(o)).join(" ")},children:s}]})}}}},_$={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,u=r.styles,d=u===void 0?{}:u;return ff({type:"counter",content:n},function(){return eo("beforeDOMElementCreation",{content:n,params:r}),J5({content:n.toString(),title:o,extra:{attributes:c,styles:d,classes:["".concat(Q.cssPrefix,"-layers-counter")].concat(Kl(a))}})})}}}},w$={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Yn:i,s=r.title,a=s===void 0?null:s,l=r.classes,c=l===void 0?[]:l,u=r.attributes,d=u===void 0?{}:u,f=r.styles,h=f===void 0?{}:f;return ff({type:"text",content:n},function(){return eo("beforeDOMElementCreation",{content:n,params:r}),P_({content:n,transform:q(q({},Yn),o),title:a,extra:{attributes:d,styles:h,classes:["".concat(Q.cssPrefix,"-layers-text")].concat(Kl(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(fx){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return Q.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,P_({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},b$=new RegExp('"',"ug"),$_=[1105920,1112319];function S$(e){var t=e.replace(b$,""),n=L5(t,0),r=n>=$_[0]&&n<=$_[1],i=t.length===2?t[0]===t[1]:!1;return{value:Tm(i?t[0]:t),isSecondary:r||i}}function F_(e,t){var n="".concat(u5).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=Ms(e.children),s=o.filter(function(E){return E.getAttribute(Im)===t})[0],a=ci.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(m5),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&u!=="none"&&u!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?rt:Ue,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?pl[f][l[2].toLowerCase()]:g5[f][c],m=S$(d),y=m.value,S=m.isSecondary,g=l[0].startsWith("FontAwesome"),p=iy(h,y),v=p;if(g){var _=j5(y);_.iconName&&_.prefix&&(p=_.iconName,h=_.prefix)}if(p&&!S&&(!s||s.getAttribute(Jv)!==h||s.getAttribute(Zv)!==v)){e.setAttribute(n,v),s&&e.removeChild(s);var C=f$(),k=C.extra;k.attributes[Im]=t,Om(p,h).then(function(E){var I=sy(q(q({},C),{},{icons:{main:E,mask:oy()},prefix:h,iconName:v,extra:k,watchable:!0})),N=je.createElement("svg");t==="::before"?e.insertBefore(N,e.firstChild):e.appendChild(N),N.outerHTML=I.map(function(T){return Ql(T)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function C$(e){return Promise.all([F_(e,"::before"),F_(e,"::after")])}function E$(e){return e.parentNode!==document.head&&!~f5.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Im)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function z_(e){if(Ir)return new Promise(function(t,n){var r=Ms(e.querySelectorAll("*")).filter(E$).map(C$),i=ay.begin("searchPseudoElements");Ox(),Promise.all(r).then(function(){i(),Lm(),t()}).catch(function(){i(),Lm(),n()})})}var k$={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=z_,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?je:r;Q.searchPseudoElements&&z_(i)}}},U_=!1,x$={mixout:function(){return{dom:{unwatch:function(){Ox(),U_=!0}}}},hooks:function(){return{bootstrap:function(){M_(Pm("mutationObserverCallbacks",{}))},noAuto:function(){l$()},watch:function(n){var r=n.observeMutationsRoot;U_?Lm():M_(Pm("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},B_=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},I$={mixout:function(){return{parse:{transform:function(n){return B_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=B_(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(s/2*-1," -256)")},h={outer:a,inner:d,path:f};return{tag:"g",attributes:q({},h.outer),children:[{tag:"g",attributes:q({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:q(q({},r.icon.attributes),h.path)}]}]}}}},jh={x:0,y:0,width:"100%",height:"100%"};function j_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function T$(e){return e.tag==="g"?e.children:[e]}var R$={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?df(i.split(" ").map(function(s){return s.trim()})):oy();return o.prefix||(o.prefix=ui()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,c=o.width,u=o.icon,d=s.width,f=s.icon,h=I5({transform:l,containerWidth:d,iconWidth:c}),m={tag:"rect",attributes:q(q({},jh),{},{fill:"white"})},y=u.children?{children:u.children.map(j_)}:{},S={tag:"g",attributes:q({},h.inner),children:[j_(q({tag:u.tag,attributes:q(q({},u.attributes),h.path)},y))]},g={tag:"g",attributes:q({},h.outer),children:[S]},p="mask-".concat(a||vl()),v="clip-".concat(a||vl()),_={tag:"mask",attributes:q(q({},jh),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,g]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:T$(f)},_]};return r.push(C,{tag:"rect",attributes:q({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(p,")")},jh)}),{children:r,attributes:i}}}},P$={provides:function(t){var n=!1;ci.matchMedia&&(n=ci.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:q(q({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=q(q({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:q(q({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:q(q({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:q(q({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:q(q({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:q(q({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:q(q({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:q(q({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},A$={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},N$=[P5,v$,y$,_$,w$,k$,x$,I$,R$,P$,A$];V5(N$,{mixoutsTo:gn});gn.noAuto;gn.config;gn.library;gn.dom;var Dm=gn.parse;gn.findIconDefinition;gn.toHtml;var O$=gn.icon;gn.layer;gn.text;gn.counter;var he={},M$={get exports(){return he},set exports(e){he=e}},L$="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",D$=L$,$$=D$;function Lx(){}function Dx(){}Dx.resetWarningCache=Lx;var F$=function(){function e(r,i,o,s,a,l){if(l!==$$){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Dx,resetWarningCache:Lx};return n.PropTypes=n,n};M$.exports=F$();function W_(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Wr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?W_(Object(n),!0).forEach(function(r){zo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W_(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ld(e){return ld=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ld(e)}function zo(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z$(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function U$(e,t){if(e==null)return{};var n=z$(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $m(e){return B$(e)||j$(e)||W$(e)||H$()}function B$(e){if(Array.isArray(e))return Fm(e)}function j$(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function W$(e,t){if(e){if(typeof e=="string")return Fm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fm(e,t)}}function Fm(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V$(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,c=e.spinPulse,u=e.spinReverse,d=e.pulse,f=e.fixedWidth,h=e.inverse,m=e.border,y=e.listItem,S=e.flip,g=e.size,p=e.rotation,v=e.pull,_=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":f,"fa-inverse":h,"fa-border":m,"fa-li":y,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},zo(t,"fa-".concat(g),typeof g<"u"&&g!==null),zo(t,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),zo(t,"fa-pull-".concat(v),typeof v<"u"&&v!==null),zo(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(C){return _[C]?C:null}).filter(function(C){return C})}function q$(e){return e=e-0,e===e}function $x(e){return q$(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var G$=["style"];function K$(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Y$(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=$x(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[K$(i)]=o:t[i]=o,t},{})}function Fx(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Fx(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.attrs.className=u,delete t.attributes.class;break;case"style":l.attrs.style=Y$(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[$x(c)]=u}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=U$(n,G$);return i.attrs.style=Wr(Wr({},i.attrs.style),s),e.apply(void 0,[t.tag,Wr(Wr({},i.attrs),a)].concat($m(r)))}var zx=!1;try{zx=!0}catch{}function Q$(){if(!zx&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function H_(e){if(e&&ld(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Dm.icon)return Dm.icon(e);if(e===null)return null;if(e&&ld(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Wh(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?zo({},e,t):{}}var ri=qe.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,s=e.title,a=e.titleId,l=e.maskId,c=H_(n),u=Wh("classes",[].concat($m(V$(e)),$m(o.split(" ")))),d=Wh("transform",typeof e.transform=="string"?Dm.transform(e.transform):e.transform),f=Wh("mask",H_(r)),h=O$(c,Wr(Wr(Wr(Wr({},u),d),f),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!h)return Q$("Could not find icon",c),null;var m=h.abstract,y={ref:t};return Object.keys(e).forEach(function(S){ri.defaultProps.hasOwnProperty(S)||(y[S]=e[S])}),X$(m[0],y)});ri.displayName="FontAwesomeIcon";ri.propTypes={beat:he.bool,border:he.bool,beatFade:he.bool,bounce:he.bool,className:he.string,fade:he.bool,flash:he.bool,mask:he.oneOfType([he.object,he.array,he.string]),maskId:he.string,fixedWidth:he.bool,inverse:he.bool,flip:he.oneOf([!0,!1,"horizontal","vertical","both"]),icon:he.oneOfType([he.object,he.array,he.string]),listItem:he.bool,pull:he.oneOf(["right","left"]),pulse:he.bool,rotation:he.oneOf([0,90,180,270]),shake:he.bool,size:he.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:he.bool,spinPulse:he.bool,spinReverse:he.bool,symbol:he.oneOfType([he.bool,he.string]),title:he.string,titleId:he.string,transform:he.oneOfType([he.string,he.object]),swapOpacity:he.bool};ri.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var X$=Fx.bind(null,qe.createElement),Qs={prefix:"fas",iconName:"person",icon:[320,512,[129485,"male"],"f183","M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"]},J$={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Z$={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},eF=Z$,tF={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};const nF=H.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 65px;
  font-size: 20px;
  height: 20%;
`,rF=H.span`
  display: flex;
  align-items: center;
  p {
    padding-left: 10px;
    margin-bottom: 0;
  }
`,V_=H.button`
  border: none;
  background: none;
  font-size: 20px;
  letter-spacing: 1px;
`,iF=H.div`
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
`,Ls=()=>{const{setAssessmentState:e}=w.useContext(dt),[t,n]=w.useState(!1);function r(){n(!t)}function i(o){t&&r(),e(o)}return j(nF,{children:[j(rF,{children:[b(V_,{onClick:r,children:b(ri,{icon:J$})}),b("p",{children:"ConnectedSpine"})]}),b(V_,{onClick:()=>{e("home")},children:b(ri,{icon:eF})}),j(iF,{isOpen:t,children:[b("button",{onClick:r,children:b(ri,{icon:tF})}),b("a",{onClick:i.bind(null,"home"),children:"Profile"}),b("a",{onClick:i.bind(null,"home"),children:"Assessment"})]})]})},oF="#fefefe",sF="#888",aF=H.div`
  display: ${e=>e.showModal?"block":"none"};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  .show {
    display: block;
  }

  div {
    background-color: ${oF};
    margin: 15% auto;
    padding: 0 20px 20px 20px;
    border: 1px solid ${sF};
    width: 80%;
  }
`,lF=H.span`
  top: 0;
  margin-left: 98%;
  font-size: 25px;
  cursor: pointer;
`,fi=({showModal:e,setShowModal:t,text:n})=>b(aF,{showModal:e,children:j("div",{children:[b(lF,{onClick:()=>t(!1),children:"×"}),n]})}),cF={black:"#000",white:"#fff"},yl=cF,uF={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},po=uF,dF={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},mo=dF,fF={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},go=fF,hF={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},vo=hF,pF={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},yo=pF,mF={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Xs=mF,gF={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},vF=gF;function ki(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function Ux(e){if(!ki(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=Ux(e[n])}),t}function Cn(e,t,n={clone:!0}){const r=n.clone?{...e}:e;return ki(e)&&ki(t)&&Object.keys(t).forEach(i=>{i!=="__proto__"&&(ki(t[i])&&i in e&&ki(e[i])?r[i]=Cn(e[i],t[i],n):n.clone?r[i]=ki(t[i])?Ux(t[i]):t[i]:r[i]=t[i])}),r}function hi(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function xe(e){if(typeof e!="string")throw new Error(hi(7));return e.charAt(0).toUpperCase()+e.slice(1)}function q_(...e){return e.reduce((t,n)=>n==null?t:function(...i){t.apply(this,i),n.apply(this,i)},()=>{})}function Bx(e,t=166){let n;function r(...i){const o=()=>{e.apply(this,i)};clearTimeout(n),n=setTimeout(o,t)}return r.clear=()=>{clearTimeout(n)},r}function Hh(e,t){return w.isValidElement(e)&&t.indexOf(e.type.muiName)!==-1}function cn(e){return e&&e.ownerDocument||document}function to(e){return cn(e).defaultView||window}function zm(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const yF=typeof window<"u"?w.useLayoutEffect:w.useEffect,ys=yF;let G_=0;function _F(e){const[t,n]=w.useState(e),r=e||t;return w.useEffect(()=>{t==null&&(G_+=1,n(`mui-${G_}`))},[t]),r}const K_=Zh["useId".toString()];function wF(e){if(K_!==void 0){const t=K_();return e??t}return _F(e)}function Y_({controlled:e,default:t,name:n,state:r="value"}){const{current:i}=w.useRef(e!==void 0),[o,s]=w.useState(t),a=i?e:o,l=w.useCallback(c=>{i||s(c)},[]);return[a,l]}function Uo(e){const t=w.useRef(e);return ys(()=>{t.current=e}),w.useCallback((...n)=>(0,t.current)(...n),[])}function en(...e){return w.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{zm(n,t)})},e)}let hf=!0,Um=!1,Q_;const bF={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function SF(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&bF[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function CF(e){e.metaKey||e.altKey||e.ctrlKey||(hf=!0)}function Vh(){hf=!1}function EF(){this.visibilityState==="hidden"&&Um&&(hf=!0)}function kF(e){e.addEventListener("keydown",CF,!0),e.addEventListener("mousedown",Vh,!0),e.addEventListener("pointerdown",Vh,!0),e.addEventListener("touchstart",Vh,!0),e.addEventListener("visibilitychange",EF,!0)}function xF(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return hf||SF(t)}function IF(){const e=w.useCallback(i=>{i!=null&&kF(i.ownerDocument)},[]),t=w.useRef(!1);function n(){return t.current?(Um=!0,window.clearTimeout(Q_),Q_=window.setTimeout(()=>{Um=!1},100),t.current=!1,!0):!1}function r(i){return xF(i)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function jx(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Wx(e,t){const n={...t};return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]={...e[r],...n[r]};else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=e[r]||{},o=t[r];n[r]={},!o||!Object.keys(o)?n[r]=i:!i||!Object.keys(i)?n[r]=o:(n[r]={...o},Object.keys(i).forEach(s=>{n[r][s]=Wx(i[s],o[s])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function ot(e,t,n=void 0){const r={};return Object.keys(e).forEach(i=>{r[i]=e[i].reduce((o,s)=>{if(s){const a=t(s);a!==""&&o.push(a),n&&n[s]&&o.push(n[s])}return o},[]).join(" ")}),r}const X_=e=>e,TF=()=>{let e=X_;return{configure(t){e=t},generate(t){return e(t)},reset(){e=X_}}},RF=TF(),PF=RF,AF={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function Je(e,t,n="Mui"){const r=AF[t];return r?`${n}-${r}`:`${PF.generate(e)}-${t}`}function Ze(e,t,n="Mui"){const r={};return t.forEach(i=>{r[i]=Je(e,i,n)}),r}const pf="$$material";function cd(){return cd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cd.apply(this,arguments)}function NF(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function OF(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var MF=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(OF(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=NF(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Nt="-ms-",ud="-moz-",Ce="-webkit-",Hx="comm",cy="rule",uy="decl",LF="@import",Vx="@keyframes",DF="@layer",$F=Math.abs,mf=String.fromCharCode,FF=Object.assign;function zF(e,t){return It(e,0)^45?(((t<<2^It(e,0))<<2^It(e,1))<<2^It(e,2))<<2^It(e,3):0}function qx(e){return e.trim()}function UF(e,t){return(e=t.exec(e))?e[0]:e}function Ee(e,t,n){return e.replace(t,n)}function Bm(e,t){return e.indexOf(t)}function It(e,t){return e.charCodeAt(t)|0}function _l(e,t,n){return e.slice(t,n)}function Vn(e){return e.length}function dy(e){return e.length}function Lc(e,t){return t.push(e),e}function BF(e,t){return e.map(t).join("")}var gf=1,_s=1,Gx=0,tn=0,ct=0,Ds="";function vf(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:gf,column:_s,length:s,return:""}}function Js(e,t){return FF(vf("",null,null,"",null,null,0),e,{length:-e.length},t)}function jF(){return ct}function WF(){return ct=tn>0?It(Ds,--tn):0,_s--,ct===10&&(_s=1,gf--),ct}function un(){return ct=tn<Gx?It(Ds,tn++):0,_s++,ct===10&&(_s=1,gf++),ct}function er(){return It(Ds,tn)}function iu(){return tn}function Xl(e,t){return _l(Ds,e,t)}function wl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kx(e){return gf=_s=1,Gx=Vn(Ds=e),tn=0,[]}function Yx(e){return Ds="",e}function ou(e){return qx(Xl(tn-1,jm(e===91?e+2:e===40?e+1:e)))}function HF(e){for(;(ct=er())&&ct<33;)un();return wl(e)>2||wl(ct)>3?"":" "}function VF(e,t){for(;--t&&un()&&!(ct<48||ct>102||ct>57&&ct<65||ct>70&&ct<97););return Xl(e,iu()+(t<6&&er()==32&&un()==32))}function jm(e){for(;un();)switch(ct){case e:return tn;case 34:case 39:e!==34&&e!==39&&jm(ct);break;case 40:e===41&&jm(e);break;case 92:un();break}return tn}function qF(e,t){for(;un()&&e+ct!==47+10;)if(e+ct===42+42&&er()===47)break;return"/*"+Xl(t,tn-1)+"*"+mf(e===47?e:un())}function GF(e){for(;!wl(er());)un();return Xl(e,tn)}function KF(e){return Yx(su("",null,null,null,[""],e=Kx(e),0,[0],e))}function su(e,t,n,r,i,o,s,a,l){for(var c=0,u=0,d=s,f=0,h=0,m=0,y=1,S=1,g=1,p=0,v="",_=i,C=o,k=r,E=v;S;)switch(m=p,p=un()){case 40:if(m!=108&&It(E,d-1)==58){Bm(E+=Ee(ou(p),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:E+=ou(p);break;case 9:case 10:case 13:case 32:E+=HF(m);break;case 92:E+=VF(iu()-1,7);continue;case 47:switch(er()){case 42:case 47:Lc(YF(qF(un(),iu()),t,n),l);break;default:E+="/"}break;case 123*y:a[c++]=Vn(E)*g;case 125*y:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+u:g==-1&&(E=Ee(E,/\f/g,"")),h>0&&Vn(E)-d&&Lc(h>32?Z_(E+";",r,n,d-1):Z_(Ee(E," ","")+";",r,n,d-2),l);break;case 59:E+=";";default:if(Lc(k=J_(E,t,n,c,u,i,a,v,_=[],C=[],d),o),p===123)if(u===0)su(E,t,k,k,_,o,d,a,C);else switch(f===99&&It(E,3)===110?100:f){case 100:case 108:case 109:case 115:su(e,k,k,r&&Lc(J_(e,k,k,0,0,i,a,v,i,_=[],d),C),i,C,d,a,r?_:C);break;default:su(E,k,k,k,[""],C,0,a,C)}}c=u=h=0,y=g=1,v=E="",d=s;break;case 58:d=1+Vn(E),h=m;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&WF()==125)continue}switch(E+=mf(p),p*y){case 38:g=u>0?1:(E+="\f",-1);break;case 44:a[c++]=(Vn(E)-1)*g,g=1;break;case 64:er()===45&&(E+=ou(un())),f=er(),u=d=Vn(v=E+=GF(iu())),p++;break;case 45:m===45&&Vn(E)==2&&(y=0)}}return o}function J_(e,t,n,r,i,o,s,a,l,c,u){for(var d=i-1,f=i===0?o:[""],h=dy(f),m=0,y=0,S=0;m<r;++m)for(var g=0,p=_l(e,d+1,d=$F(y=s[m])),v=e;g<h;++g)(v=qx(y>0?f[g]+" "+p:Ee(p,/&\f/g,f[g])))&&(l[S++]=v);return vf(e,t,n,i===0?cy:a,l,c,u)}function YF(e,t,n){return vf(e,t,n,Hx,mf(jF()),_l(e,2,-2),0)}function Z_(e,t,n,r){return vf(e,t,n,uy,_l(e,0,r),_l(e,r+1,-1),r)}function ts(e,t){for(var n="",r=dy(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function QF(e,t,n,r){switch(e.type){case DF:if(e.children.length)break;case LF:case uy:return e.return=e.return||e.value;case Hx:return"";case Vx:return e.return=e.value+"{"+ts(e.children,r)+"}";case cy:e.value=e.props.join(",")}return Vn(n=ts(e.children,r))?e.return=e.value+"{"+n+"}":""}function XF(e){var t=dy(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function JF(e){return function(t){t.root||(t=t.return)&&e(t)}}var ZF=function(t,n,r){for(var i=0,o=0;i=o,o=er(),i===38&&o===12&&(n[r]=1),!wl(o);)un();return Xl(t,tn)},e6=function(t,n){var r=-1,i=44;do switch(wl(i)){case 0:i===38&&er()===12&&(n[r]=1),t[r]+=ZF(tn-1,n,r);break;case 2:t[r]+=ou(i);break;case 4:if(i===44){t[++r]=er()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=mf(i)}while(i=un());return t},t6=function(t,n){return Yx(e6(Kx(t),n))},ew=new WeakMap,n6=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!ew.get(r))&&!i){ew.set(t,!0);for(var o=[],s=t6(n,o),a=r.props,l=0,c=0;l<s.length;l++)for(var u=0;u<a.length;u++,c++)t.props[c]=o[l]?s[l].replace(/&\f/g,a[u]):a[u]+" "+s[l]}}},r6=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Qx(e,t){switch(zF(e,t)){case 5103:return Ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ce+e+ud+e+Nt+e+e;case 6828:case 4268:return Ce+e+Nt+e+e;case 6165:return Ce+e+Nt+"flex-"+e+e;case 5187:return Ce+e+Ee(e,/(\w+).+(:[^]+)/,Ce+"box-$1$2"+Nt+"flex-$1$2")+e;case 5443:return Ce+e+Nt+"flex-item-"+Ee(e,/flex-|-self/,"")+e;case 4675:return Ce+e+Nt+"flex-line-pack"+Ee(e,/align-content|flex-|-self/,"")+e;case 5548:return Ce+e+Nt+Ee(e,"shrink","negative")+e;case 5292:return Ce+e+Nt+Ee(e,"basis","preferred-size")+e;case 6060:return Ce+"box-"+Ee(e,"-grow","")+Ce+e+Nt+Ee(e,"grow","positive")+e;case 4554:return Ce+Ee(e,/([^-])(transform)/g,"$1"+Ce+"$2")+e;case 6187:return Ee(Ee(Ee(e,/(zoom-|grab)/,Ce+"$1"),/(image-set)/,Ce+"$1"),e,"")+e;case 5495:case 3959:return Ee(e,/(image-set\([^]*)/,Ce+"$1$`$1");case 4968:return Ee(Ee(e,/(.+:)(flex-)?(.*)/,Ce+"box-pack:$3"+Nt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ce+e+e;case 4095:case 3583:case 4068:case 2532:return Ee(e,/(.+)-inline(.+)/,Ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Vn(e)-1-t>6)switch(It(e,t+1)){case 109:if(It(e,t+4)!==45)break;case 102:return Ee(e,/(.+:)(.+)-([^]+)/,"$1"+Ce+"$2-$3$1"+ud+(It(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Bm(e,"stretch")?Qx(Ee(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(It(e,t+1)!==115)break;case 6444:switch(It(e,Vn(e)-3-(~Bm(e,"!important")&&10))){case 107:return Ee(e,":",":"+Ce)+e;case 101:return Ee(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ce+(It(e,14)===45?"inline-":"")+"box$3$1"+Ce+"$2$3$1"+Nt+"$2box$3")+e}break;case 5936:switch(It(e,t+11)){case 114:return Ce+e+Nt+Ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ce+e+Nt+Ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ce+e+Nt+Ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Ce+e+Nt+e+e}return e}var i6=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case uy:t.return=Qx(t.value,t.length);break;case Vx:return ts([Js(t,{value:Ee(t.value,"@","@"+Ce)})],i);case cy:if(t.length)return BF(t.props,function(o){switch(UF(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ts([Js(t,{props:[Ee(o,/:(read-\w+)/,":"+ud+"$1")]})],i);case"::placeholder":return ts([Js(t,{props:[Ee(o,/:(plac\w+)/,":"+Ce+"input-$1")]}),Js(t,{props:[Ee(o,/:(plac\w+)/,":"+ud+"$1")]}),Js(t,{props:[Ee(o,/:(plac\w+)/,Nt+"input-$1")]})],i)}return""})}},o6=[i6],s6=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var S=y.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||o6,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var S=y.getAttribute("data-emotion").split(" "),g=1;g<S.length;g++)o[S[g]]=!0;a.push(y)});var l,c=[n6,r6];{var u,d=[QF,JF(function(y){u.insert(y)})],f=XF(c.concat(i,d)),h=function(S){return ts(KF(S),f)};l=function(S,g,p,v){u=p,h(S?S+"{"+g.styles+"}":g.styles),v&&(m.inserted[g.name]=!0)}}var m={key:n,sheet:new MF({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return m.sheet.hydrate(a),m},a6=!0;function l6(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Xx=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||a6===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Jx=function(t,n,r){Xx(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function c6(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var u6={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},d6=/[A-Z]|^ms/g,f6=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Zx=function(t){return t.charCodeAt(1)===45},tw=function(t){return t!=null&&typeof t!="boolean"},qh=aC(function(e){return Zx(e)?e:e.replace(d6,"-$&").toLowerCase()}),nw=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(f6,function(r,i,o){return qn={name:i,styles:o,next:qn},i})}return u6[t]!==1&&!Zx(t)&&typeof n=="number"&&n!==0?n+"px":n};function bl(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return qn={name:n.name,styles:n.styles,next:qn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)qn={name:r.name,styles:r.styles,next:qn},r=r.next;var i=n.styles+";";return i}return h6(e,t,n)}case"function":{if(e!==void 0){var o=qn,s=n(e);return qn=o,bl(e,t,s)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function h6(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=bl(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":tw(s)&&(r+=qh(o)+":"+nw(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var a=0;a<s.length;a++)tw(s[a])&&(r+=qh(o)+":"+nw(o,s[a])+";");else{var l=bl(e,t,s);switch(o){case"animation":case"animationName":{r+=qh(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var rw=/label:\s*([^\s;\n{]+)\s*(;|$)/g,qn,fy=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";qn=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=bl(r,n,s)):o+=s[0];for(var a=1;a<t.length;a++)o+=bl(r,n,t[a]),i&&(o+=s[a]);rw.lastIndex=0;for(var l="",c;(c=rw.exec(o))!==null;)l+="-"+c[1];var u=c6(o)+l;return{name:u,styles:o,next:qn}},p6=function(t){return t()},eI=Zh["useInsertionEffect"]?Zh["useInsertionEffect"]:!1,m6=eI||p6,iw=eI||w.useLayoutEffect,tI=w.createContext(typeof HTMLElement<"u"?s6({key:"css"}):null);tI.Provider;var nI=function(t){return w.forwardRef(function(n,r){var i=w.useContext(tI);return t(n,i,r)})},hy=w.createContext({}),g6=nI(function(e,t){var n=e.styles,r=fy([n],void 0,w.useContext(hy)),i=w.useRef();return iw(function(){var o=t.key+"-global",s=new t.sheet.constructor({key:o,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+o+" "+r.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",o),s.hydrate([l])),i.current=[s,a],function(){s.flush()}},[t]),iw(function(){var o=i.current,s=o[0],a=o[1];if(a){o[1]=!1;return}if(r.next!==void 0&&Jx(t,r.next,!0),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}t.insert("",r,s,!1)},[t,r.name]),null});function v6(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return fy(t)}var py=function(){var t=v6.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},y6=Kp,_6=function(t){return t!=="theme"},ow=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?y6:_6},sw=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},w6=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Xx(n,r,i),m6(function(){return Jx(n,r,i)}),null},b6=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var a=sw(t,n,r),l=a||ow(i),c=!l("as");return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{d.push(u[0][0]);for(var f=u.length,h=1;h<f;h++)d.push(u[h],u[0][h])}var m=nI(function(y,S,g){var p=c&&y.as||i,v="",_=[],C=y;if(y.theme==null){C={};for(var k in y)C[k]=y[k];C.theme=w.useContext(hy)}typeof y.className=="string"?v=l6(S.registered,_,y.className):y.className!=null&&(v=y.className+" ");var E=fy(d.concat(_),S.registered,C);v+=S.key+"-"+E.name,s!==void 0&&(v+=" "+s);var I=c&&a===void 0?ow(p):l,N={};for(var T in y)c&&T==="as"||I(T)&&(N[T]=y[T]);return N.className=v,N.ref=g,w.createElement(w.Fragment,null,w.createElement(w6,{cache:S,serialized:E,isStringTag:typeof p=="string"}),w.createElement(p,N))});return m.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=i,m.__emotion_styles=d,m.__emotion_forwardProp=a,Object.defineProperty(m,"toString",{value:function(){return"."+s}}),m.withComponent=function(y,S){return e(y,cd({},n,S,{shouldForwardProp:sw(m,S,!0)})).apply(void 0,d)},m}},S6=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Wm=b6.bind();S6.forEach(function(e){Wm[e]=Wm(e)});function C6(e){return e==null||Object.keys(e).length===0}function E6(e){const{styles:t,defaultTheme:n={}}=e;return b(g6,{styles:typeof t=="function"?i=>t(C6(i)?n:i):t})}/**
 * @mui/styled-engine v5.12.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function k6(e,t){return Wm(e,t)}const x6=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},I6=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>({...n,[r.key]:r.val}),{})};function T6(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5,...i}=e,o=I6(t),s=Object.keys(o);function a(f){return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n})`}function l(f){return`@media (max-width:${(typeof t[f]=="number"?t[f]:f)-r/100}${n})`}function c(f,h){const m=s.indexOf(h);return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${n}) and (max-width:${(m!==-1&&typeof t[s[m]]=="number"?t[s[m]]:h)-r/100}${n})`}function u(f){return s.indexOf(f)+1<s.length?c(f,s[s.indexOf(f)+1]):a(f)}function d(f){const h=s.indexOf(f);return h===0?a(s[1]):h===s.length-1?l(s[h]):c(f,s[s.indexOf(f)+1]).replace("@media","@media not all and")}return{keys:s,values:o,up:a,down:l,between:c,only:u,not:d,unit:n,...i}}const R6={borderRadius:4},P6=R6;function Pa(e,t){return t?Cn(e,t,{clone:!1}):e}const my={xs:0,sm:600,md:900,lg:1200,xl:1536},aw={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${my[e]}px)`};function Cr(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const o=r.breakpoints||aw;return t.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(t[l]),s),{})}if(typeof t=="object"){const o=r.breakpoints||aw;return Object.keys(t).reduce((s,a)=>{if(Object.keys(o.values||my).indexOf(a)!==-1){const l=o.up(a);s[l]=n(t[a],a)}else{const l=a;s[l]=t[l]}return s},{})}return n(t)}function A6(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,i)=>{const o=e.up(i);return r[o]={},r},{}))||{}}function N6(e,t){return e.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},t)}function yf(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,e);if(r!=null)return r}return t.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,e)}function dd(e,t,n,r=n){let i;return typeof e=="function"?i=e(n):Array.isArray(e)?i=e[n]||r:i=yf(e,n)||r,t&&(i=t(i,r,e)),i}function Ie(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:i}=e,o=s=>{if(s[t]==null)return null;const a=s[t],l=s.theme,c=yf(l,r)||{};return Cr(s,a,d=>{let f=dd(c,i,d);return d===f&&typeof d=="string"&&(f=dd(c,i,`${t}${d==="default"?"":xe(d)}`,d)),n===!1?f:{[n]:f}})};return o.propTypes={},o.filterProps=[t],o}function O6(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const M6={m:"margin",p:"padding"},L6={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},lw={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},D6=O6(e=>{if(e.length>2)if(lw[e])e=lw[e];else return[e];const[t,n]=e.split(""),r=M6[t],i=L6[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),gy=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],vy=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...gy,...vy];function Jl(e,t,n,r){var i;const o=(i=yf(e,t,!1))!=null?i:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function rI(e){return Jl(e,"spacing",8)}function Zl(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function $6(e,t){return n=>e.reduce((r,i)=>(r[i]=Zl(t,n),r),{})}function F6(e,t,n,r){if(t.indexOf(n)===-1)return null;const i=D6(n),o=$6(i,r),s=e[n];return Cr(e,s,o)}function iI(e,t){const n=rI(e.theme);return Object.keys(e).map(r=>F6(e,t,r,n)).reduce(Pa,{})}function et(e){return iI(e,gy)}et.propTypes={};et.filterProps=gy;function tt(e){return iI(e,vy)}tt.propTypes={};tt.filterProps=vy;function z6(e=8){if(e.mui)return e;const t=rI({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=t(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function _f(...e){const t=e.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>t[o]?Pa(i,t[o](r)):i,{});return n.propTypes={},n.filterProps=e.reduce((r,i)=>r.concat(i.filterProps),[]),n}function Kn(e){return typeof e!="number"?e:`${e}px solid`}const U6=Ie({prop:"border",themeKey:"borders",transform:Kn}),B6=Ie({prop:"borderTop",themeKey:"borders",transform:Kn}),j6=Ie({prop:"borderRight",themeKey:"borders",transform:Kn}),W6=Ie({prop:"borderBottom",themeKey:"borders",transform:Kn}),H6=Ie({prop:"borderLeft",themeKey:"borders",transform:Kn}),V6=Ie({prop:"borderColor",themeKey:"palette"}),q6=Ie({prop:"borderTopColor",themeKey:"palette"}),G6=Ie({prop:"borderRightColor",themeKey:"palette"}),K6=Ie({prop:"borderBottomColor",themeKey:"palette"}),Y6=Ie({prop:"borderLeftColor",themeKey:"palette"}),wf=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=Jl(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:Zl(t,r)});return Cr(e,e.borderRadius,n)}return null};wf.propTypes={};wf.filterProps=["borderRadius"];_f(U6,B6,j6,W6,H6,V6,q6,G6,K6,Y6,wf);const bf=e=>{if(e.gap!==void 0&&e.gap!==null){const t=Jl(e.theme,"spacing",8),n=r=>({gap:Zl(t,r)});return Cr(e,e.gap,n)}return null};bf.propTypes={};bf.filterProps=["gap"];const Sf=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=Jl(e.theme,"spacing",8),n=r=>({columnGap:Zl(t,r)});return Cr(e,e.columnGap,n)}return null};Sf.propTypes={};Sf.filterProps=["columnGap"];const Cf=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=Jl(e.theme,"spacing",8),n=r=>({rowGap:Zl(t,r)});return Cr(e,e.rowGap,n)}return null};Cf.propTypes={};Cf.filterProps=["rowGap"];const Q6=Ie({prop:"gridColumn"}),X6=Ie({prop:"gridRow"}),J6=Ie({prop:"gridAutoFlow"}),Z6=Ie({prop:"gridAutoColumns"}),ez=Ie({prop:"gridAutoRows"}),tz=Ie({prop:"gridTemplateColumns"}),nz=Ie({prop:"gridTemplateRows"}),rz=Ie({prop:"gridTemplateAreas"}),iz=Ie({prop:"gridArea"});_f(bf,Sf,Cf,Q6,X6,J6,Z6,ez,tz,nz,rz,iz);function ns(e,t){return t==="grey"?t:e}const oz=Ie({prop:"color",themeKey:"palette",transform:ns}),sz=Ie({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:ns}),az=Ie({prop:"backgroundColor",themeKey:"palette",transform:ns});_f(oz,sz,az);function rn(e){return e<=1&&e!==0?`${e*100}%`:e}const lz=Ie({prop:"width",transform:rn}),yy=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,i,o;return{maxWidth:((r=e.theme)==null||(i=r.breakpoints)==null||(o=i.values)==null?void 0:o[n])||my[n]||rn(n)}};return Cr(e,e.maxWidth,t)}return null};yy.filterProps=["maxWidth"];const cz=Ie({prop:"minWidth",transform:rn}),uz=Ie({prop:"height",transform:rn}),dz=Ie({prop:"maxHeight",transform:rn}),fz=Ie({prop:"minHeight",transform:rn});Ie({prop:"size",cssProperty:"width",transform:rn});Ie({prop:"size",cssProperty:"height",transform:rn});const hz=Ie({prop:"boxSizing"});_f(lz,yy,cz,uz,dz,fz,hz);const pz={border:{themeKey:"borders",transform:Kn},borderTop:{themeKey:"borders",transform:Kn},borderRight:{themeKey:"borders",transform:Kn},borderBottom:{themeKey:"borders",transform:Kn},borderLeft:{themeKey:"borders",transform:Kn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:wf},color:{themeKey:"palette",transform:ns},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:ns},backgroundColor:{themeKey:"palette",transform:ns},p:{style:tt},pt:{style:tt},pr:{style:tt},pb:{style:tt},pl:{style:tt},px:{style:tt},py:{style:tt},padding:{style:tt},paddingTop:{style:tt},paddingRight:{style:tt},paddingBottom:{style:tt},paddingLeft:{style:tt},paddingX:{style:tt},paddingY:{style:tt},paddingInline:{style:tt},paddingInlineStart:{style:tt},paddingInlineEnd:{style:tt},paddingBlock:{style:tt},paddingBlockStart:{style:tt},paddingBlockEnd:{style:tt},m:{style:et},mt:{style:et},mr:{style:et},mb:{style:et},ml:{style:et},mx:{style:et},my:{style:et},margin:{style:et},marginTop:{style:et},marginRight:{style:et},marginBottom:{style:et},marginLeft:{style:et},marginX:{style:et},marginY:{style:et},marginInline:{style:et},marginInlineStart:{style:et},marginInlineEnd:{style:et},marginBlock:{style:et},marginBlockStart:{style:et},marginBlockEnd:{style:et},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:bf},rowGap:{style:Cf},columnGap:{style:Sf},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:rn},maxWidth:{style:yy},minWidth:{transform:rn},height:{transform:rn},maxHeight:{transform:rn},minHeight:{transform:rn},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},Ef=pz;function mz(...e){const t=e.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function gz(e,t){return typeof e=="function"?e(t):e}function vz(){function e(n,r,i,o){const s={[n]:r,theme:i},a=o[n];if(!a)return{[n]:r};const{cssProperty:l=n,themeKey:c,transform:u,style:d}=a;if(r==null)return null;if(c==="typography"&&r==="inherit")return{[n]:r};const f=yf(i,c)||{};return d?d(s):Cr(s,r,m=>{let y=dd(f,u,m);return m===y&&typeof m=="string"&&(y=dd(f,u,`${n}${m==="default"?"":xe(m)}`,m)),l===!1?y:{[l]:y}})}function t(n){var r;const{sx:i,theme:o={}}=n||{};if(!i)return null;const s=(r=o.unstable_sxConfig)!=null?r:Ef;function a(l){let c=l;if(typeof l=="function")c=l(o);else if(typeof l!="object")return l;if(!c)return null;const u=A6(o.breakpoints),d=Object.keys(u);let f=u;return Object.keys(c).forEach(h=>{const m=gz(c[h],o);if(m!=null)if(typeof m=="object")if(s[h])f=Pa(f,e(h,m,o,s));else{const y=Cr({theme:o},m,S=>({[h]:S}));mz(y,m)?f[h]=t({sx:m,theme:o}):f=Pa(f,y)}else f=Pa(f,e(h,m,o,s))}),N6(d,f)}return Array.isArray(i)?i.map(a):a(i)}return t}const oI=vz();oI.filterProps=["sx"];const _y=oI;function wy(e={},...t){const{breakpoints:n={},palette:r={},spacing:i,shape:o={},...s}=e,a=T6(n),l=z6(i);let c=Cn({breakpoints:a,direction:"ltr",components:{},palette:{mode:"light",...r},spacing:l,shape:{...P6,...o}},s);return c=t.reduce((u,d)=>Cn(u,d),c),c.unstable_sxConfig={...Ef,...s==null?void 0:s.unstable_sxConfig},c.unstable_sx=function(d){return _y({sx:d,theme:this})},c}function yz(e){return Object.keys(e).length===0}function _z(e=null){const t=w.useContext(hy);return!t||yz(t)?e:t}const wz=wy();function by(e=wz){return _z(e)}function bz({styles:e,themeId:t,defaultTheme:n={}}){const r=by(n),i=typeof e=="function"?e(t&&r[t]||r):e;return b(E6,{styles:i})}const Sz=e=>{var t,n;const r={systemProps:{},otherProps:{}},i=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:Ef;return Object.keys(e).forEach(o=>{i[o]?r.systemProps[o]=e[o]:r.otherProps[o]=e[o]}),r};function Cz(e){const{sx:t,...n}=e,{systemProps:r,otherProps:i}=Sz(n);let o;return Array.isArray(t)?o=[r,...t]:typeof t=="function"?o=(...s)=>{const a=t(...s);return ki(a)?{...r,...a}:r}:o={...r,...t},{...i,sx:o}}function sI(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=sI(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function be(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=sI(e))&&(r&&(r+=" "),r+=t);return r}function cw(e){return e.length===0}function aI(e){const{variant:t,...n}=e;let r=t||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=cw(r)?e[i]:xe(e[i]):r+=`${cw(r)?i:xe(i)}${xe(e[i].toString())}`}),r}function Ez(e){return Object.keys(e).length===0}function kz(e){return typeof e=="string"&&e.charCodeAt(0)>96}const xz=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,Iz=(e,t)=>{let n=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants);const r={};return n.forEach(i=>{const o=aI(i.props);r[o]=i.style}),r},Tz=(e,t,n,r)=>{var i,o;const{ownerState:s={}}=e,a=[],l=n==null||(i=n.components)==null||(o=i[r])==null?void 0:o.variants;return l&&l.forEach(c=>{let u=!0;Object.keys(c.props).forEach(d=>{s[d]!==c.props[d]&&e[d]!==c.props[d]&&(u=!1)}),u&&a.push(t[aI(c.props)])}),a};function Aa(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Rz=wy();function Zs({defaultTheme:e,theme:t,themeId:n}){return Ez(t)?e:t[n]||t}function Pz(e={}){const{themeId:t,defaultTheme:n=Rz,rootShouldForwardProp:r=Aa,slotShouldForwardProp:i=Aa}=e,o=s=>_y({...s,theme:Zs({...s,defaultTheme:n,themeId:t})});return o.__mui_systemSx=!0,(s,a={})=>{x6(s,_=>_.filter(C=>!(C!=null&&C.__mui_systemSx)));const{name:l,slot:c,skipVariantsResolver:u,skipSx:d,overridesResolver:f,...h}=a,m=u!==void 0?u:c&&c!=="Root"||!1,y=d||!1;let S,g=Aa;c==="Root"?g=r:c?g=i:kz(s)&&(g=void 0);const p=k6(s,{shouldForwardProp:g,label:S,...h}),v=(_,...C)=>{const k=C?C.map(T=>typeof T=="function"&&T.__emotion_real!==T?W=>T({...W,theme:Zs({...W,defaultTheme:n,themeId:t})}):T):[];let E=_;l&&f&&k.push(T=>{const W=Zs({...T,defaultTheme:n,themeId:t}),K=xz(l,W);if(K){const V={};return Object.entries(K).forEach(([F,$])=>{V[F]=typeof $=="function"?$({...T,theme:W}):$}),f(T,V)}return null}),l&&!m&&k.push(T=>{const W=Zs({...T,defaultTheme:n,themeId:t});return Tz(T,Iz(l,W),W,l)}),y||k.push(o);const I=k.length-C.length;if(Array.isArray(_)&&I>0){const T=new Array(I).fill("");E=[..._,...T],E.raw=[..._.raw,...T]}else typeof _=="function"&&_.__emotion_real!==_&&(E=T=>_({...T,theme:Zs({...T,defaultTheme:n,themeId:t})}));const N=p(E,...k);return s.muiName&&(N.muiName=s.muiName),N};return p.withConfig&&(v.withConfig=p.withConfig),v}}function Az(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:Wx(t.components[n].defaultProps,r)}function Nz({props:e,name:t,defaultTheme:n,themeId:r}){let i=by(n);return r&&(i=i[r]||i),Az({theme:i,name:t,props:e})}function Sy(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function Oz(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function no(e){if(e.type)return e;if(e.charAt(0)==="#")return no(Oz(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(hi(9,e));let r=e.substring(t+1,e.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(hi(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}function kf(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function Mz(e){e=no(e);const{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,o=r*Math.min(i,1-i),s=(c,u=(c+n/30)%12)=>i-o*Math.max(Math.min(u-3,9-u,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(a+="a",l.push(t[3])),kf({type:a,values:l})}function uw(e){e=no(e);let t=e.type==="hsl"||e.type==="hsla"?no(Mz(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Lz(e,t){const n=uw(e),r=uw(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function fd(e,t){return e=no(e),t=Sy(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,kf(e)}function Dz(e,t){if(e=no(e),t=Sy(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return kf(e)}function $z(e,t){if(e=no(e),t=Sy(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return kf(e)}function Fz(e,t){return{toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}},...t}}const dw={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:yl.white,default:yl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Gh={text:{primary:yl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:yl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function fw(e,t,n,r){const i=r.light||r,o=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=$z(e.main,i):t==="dark"&&(e.dark=Dz(e.main,o)))}function zz(e="light"){return e==="dark"?{main:go[200],light:go[50],dark:go[400]}:{main:go[700],light:go[400],dark:go[800]}}function Uz(e="light"){return e==="dark"?{main:mo[200],light:mo[50],dark:mo[400]}:{main:mo[500],light:mo[300],dark:mo[700]}}function Bz(e="light"){return e==="dark"?{main:po[500],light:po[300],dark:po[700]}:{main:po[700],light:po[400],dark:po[800]}}function jz(e="light"){return e==="dark"?{main:vo[400],light:vo[300],dark:vo[700]}:{main:vo[700],light:vo[500],dark:vo[900]}}function Wz(e="light"){return e==="dark"?{main:yo[400],light:yo[300],dark:yo[700]}:{main:yo[800],light:yo[500],dark:yo[900]}}function Hz(e="light"){return e==="dark"?{main:Xs[400],light:Xs[300],dark:Xs[700]}:{main:"#ed6c02",light:Xs[500],dark:Xs[900]}}function Vz(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2,...i}=e,o=e.primary||zz(t),s=e.secondary||Uz(t),a=e.error||Bz(t),l=e.info||jz(t),c=e.success||Wz(t),u=e.warning||Hz(t);function d(y){return Lz(y,Gh.text.primary)>=n?Gh.text.primary:dw.text.primary}const f=({color:y,name:S,mainShade:g=500,lightShade:p=300,darkShade:v=700})=>{if(y={...y},!y.main&&y[g]&&(y.main=y[g]),!y.hasOwnProperty("main"))throw new Error(hi(11,S?` (${S})`:"",g));if(typeof y.main!="string")throw new Error(hi(12,S?` (${S})`:"",JSON.stringify(y.main)));return fw(y,"light",p,r),fw(y,"dark",v,r),y.contrastText||(y.contrastText=d(y.main)),y},h={dark:Gh,light:dw};return Cn({common:{...yl},mode:t,primary:f({color:o,name:"primary"}),secondary:f({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:f({color:a,name:"error"}),warning:f({color:u,name:"warning"}),info:f({color:l,name:"info"}),success:f({color:c,name:"success"}),grey:vF,contrastThreshold:n,getContrastText:d,augmentColor:f,tonalOffset:r,...h[t]},i)}function qz(e){return Math.round(e*1e5)/1e5}const hw={textTransform:"uppercase"},pw='"Roboto", "Helvetica", "Arial", sans-serif';function Gz(e,t){const{fontFamily:n=pw,fontSize:r=14,fontWeightLight:i=300,fontWeightRegular:o=400,fontWeightMedium:s=500,fontWeightBold:a=700,htmlFontSize:l=16,allVariants:c,pxToRem:u,...d}=typeof t=="function"?t(e):t,f=r/14,h=u||(S=>`${S/l*f}rem`),m=(S,g,p,v,_)=>({fontFamily:n,fontWeight:S,fontSize:h(g),lineHeight:p,...n===pw?{letterSpacing:`${qz(v/g)}em`}:{},..._,...c}),y={h1:m(i,96,1.167,-1.5),h2:m(i,60,1.2,-.5),h3:m(o,48,1.167,0),h4:m(o,34,1.235,.25),h5:m(o,24,1.334,0),h6:m(s,20,1.6,.15),subtitle1:m(o,16,1.75,.15),subtitle2:m(s,14,1.57,.1),body1:m(o,16,1.5,.15),body2:m(o,14,1.43,.15),button:m(s,14,1.75,.4,hw),caption:m(o,12,1.66,.4),overline:m(o,12,2.66,1,hw),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Cn({htmlFontSize:l,pxToRem:h,fontFamily:n,fontSize:r,fontWeightLight:i,fontWeightRegular:o,fontWeightMedium:s,fontWeightBold:a,...y},d,{clone:!1})}const Kz=.2,Yz=.14,Qz=.12;function He(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Kz})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Yz})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Qz})`].join(",")}const Xz=["none",He(0,2,1,-1,0,1,1,0,0,1,3,0),He(0,3,1,-2,0,2,2,0,0,1,5,0),He(0,3,3,-2,0,3,4,0,0,1,8,0),He(0,2,4,-1,0,4,5,0,0,1,10,0),He(0,3,5,-1,0,5,8,0,0,1,14,0),He(0,3,5,-1,0,6,10,0,0,1,18,0),He(0,4,5,-2,0,7,10,1,0,2,16,1),He(0,5,5,-3,0,8,10,1,0,3,14,2),He(0,5,6,-3,0,9,12,1,0,3,16,2),He(0,6,6,-3,0,10,14,1,0,4,18,3),He(0,6,7,-4,0,11,15,1,0,4,20,3),He(0,7,8,-4,0,12,17,2,0,5,22,4),He(0,7,8,-4,0,13,19,2,0,5,24,4),He(0,7,9,-4,0,14,21,2,0,5,26,4),He(0,8,9,-5,0,15,22,2,0,6,28,5),He(0,8,10,-5,0,16,24,2,0,6,30,5),He(0,8,11,-5,0,17,26,2,0,6,32,5),He(0,9,11,-5,0,18,28,2,0,7,34,6),He(0,9,12,-6,0,19,29,2,0,7,36,6),He(0,10,13,-6,0,20,31,3,0,8,38,7),He(0,10,13,-6,0,21,33,3,0,8,40,7),He(0,10,14,-6,0,22,35,3,0,8,42,7),He(0,11,14,-7,0,23,36,3,0,9,44,8),He(0,11,15,-7,0,24,38,3,0,9,46,8)],Jz=Xz,Zz={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},e8={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function mw(e){return`${Math.round(e)}ms`}function t8(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function n8(e){const t={...Zz,...e.easing},n={...e8,...e.duration};return{getAutoHeightDuration:t8,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:a=t.easeInOut,delay:l=0,...c}=o;return(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof s=="string"?s:mw(s)} ${a} ${typeof l=="string"?l:mw(l)}`).join(",")},...e,easing:t,duration:n}}const r8={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},i8=r8;function o8(e={},...t){const{breakpoints:n,mixins:r={},spacing:i,palette:o={},transitions:s={},typography:a={},shape:l,...c}=e;if(e.vars)throw new Error(hi(18));const u=Vz(o),d=wy(e);let f=Cn(d,{mixins:Fz(d.breakpoints,r),palette:u,shadows:Jz.slice(),typography:Gz(u,a),transitions:n8(s),zIndex:{...i8}});return f=Cn(f,c),f=t.reduce((h,m)=>Cn(h,m),f),f.unstable_sxConfig={...Ef,...c==null?void 0:c.unstable_sxConfig},f.unstable_sx=function(m){return _y({sx:m,theme:this})},f}const s8=o8(),xf=s8;function Cy(){const e=by(xf);return e[pf]||e}function st({props:e,name:t}){return Nz({props:e,name:t,defaultTheme:xf,themeId:pf})}const vi=e=>Aa(e)&&e!=="classes",a8=Aa,l8=Pz({themeId:pf,defaultTheme:xf,rootShouldForwardProp:vi}),fe=l8,c8=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},gw=c8;function hd(e){return typeof e=="string"}function u8(e,t,n){return e===void 0||hd(e)?t:{...t,ownerState:{...t.ownerState,...n}}}const d8={disableDefaultClasses:!1},f8=w.createContext(d8);function h8(e){const{disableDefaultClasses:t}=w.useContext(f8);return n=>t?"":e(n)}function p8(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function Hm(e,t){return typeof e=="function"?e(t):e}function vw(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function m8(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:o}=e;if(!t){const h=be(i==null?void 0:i.className,r==null?void 0:r.className,o,n==null?void 0:n.className),m={...n==null?void 0:n.style,...i==null?void 0:i.style,...r==null?void 0:r.style},y={...n,...i,...r};return h.length>0&&(y.className=h),Object.keys(m).length>0&&(y.style=m),{props:y,internalRef:void 0}}const s=p8({...i,...r}),a=vw(r),l=vw(i),c=t(s),u=be(c==null?void 0:c.className,n==null?void 0:n.className,o,i==null?void 0:i.className,r==null?void 0:r.className),d={...c==null?void 0:c.style,...n==null?void 0:n.style,...i==null?void 0:i.style,...r==null?void 0:r.style},f={...c,...n,...l,...a};return u.length>0&&(f.className=u),Object.keys(d).length>0&&(f.style=d),{props:f,internalRef:c.ref}}function yw(e){var t;const{elementType:n,externalSlotProps:r,ownerState:i,...o}=e,s=Hm(r,i),{props:a,internalRef:l}=m8({...o,externalSlotProps:s}),c=en(l,s==null?void 0:s.ref,(t=e.additionalProps)==null?void 0:t.ref);return u8(n,{...a,ref:c},i)}const g8=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function v8(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function y8(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function _8(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||y8(e))}function w8(e){const t=[],n=[];return Array.from(e.querySelectorAll(g8)).forEach((r,i)=>{const o=v8(r);o===-1||!_8(r)||(o===0?t.push(r):n.push({documentOrder:i,tabIndex:o,node:r}))}),n.sort((r,i)=>r.tabIndex===i.tabIndex?r.documentOrder-i.documentOrder:r.tabIndex-i.tabIndex).map(r=>r.node).concat(t)}function b8(){return!0}function S8(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:i=!1,getTabbable:o=w8,isEnabled:s=b8,open:a}=e,l=w.useRef(!1),c=w.useRef(null),u=w.useRef(null),d=w.useRef(null),f=w.useRef(null),h=w.useRef(!1),m=w.useRef(null),y=en(t.ref,m),S=w.useRef(null);w.useEffect(()=>{!a||!m.current||(h.current=!n)},[n,a]),w.useEffect(()=>{if(!a||!m.current)return;const v=cn(m.current);return m.current.contains(v.activeElement)||(m.current.hasAttribute("tabIndex")||m.current.setAttribute("tabIndex","-1"),h.current&&m.current.focus()),()=>{i||(d.current&&d.current.focus&&(l.current=!0,d.current.focus()),d.current=null)}},[a]),w.useEffect(()=>{if(!a||!m.current)return;const v=cn(m.current),_=E=>{const{current:I}=m;if(I!==null){if(!v.hasFocus()||r||!s()||l.current){l.current=!1;return}if(!I.contains(v.activeElement)){if(E&&f.current!==E.target||v.activeElement!==f.current)f.current=null;else if(f.current!==null)return;if(!h.current)return;let W=[];if((v.activeElement===c.current||v.activeElement===u.current)&&(W=o(m.current)),W.length>0){var N,T;const K=!!((N=S.current)!=null&&N.shiftKey&&((T=S.current)==null?void 0:T.key)==="Tab"),V=W[0],F=W[W.length-1];typeof V!="string"&&typeof F!="string"&&(K?F.focus():V.focus())}else I.focus()}}},C=E=>{S.current=E,!(r||!s()||E.key!=="Tab")&&v.activeElement===m.current&&E.shiftKey&&(l.current=!0,u.current&&u.current.focus())};v.addEventListener("focusin",_),v.addEventListener("keydown",C,!0);const k=setInterval(()=>{v.activeElement&&v.activeElement.tagName==="BODY"&&_(null)},50);return()=>{clearInterval(k),v.removeEventListener("focusin",_),v.removeEventListener("keydown",C,!0)}},[n,r,i,s,a,o]);const g=v=>{d.current===null&&(d.current=v.relatedTarget),h.current=!0,f.current=v.target;const _=t.props.onFocus;_&&_(v)},p=v=>{d.current===null&&(d.current=v.relatedTarget),h.current=!0};return j(w.Fragment,{children:[b("div",{tabIndex:a?0:-1,onFocus:p,ref:c,"data-testid":"sentinelStart"}),w.cloneElement(t,{ref:y,onFocus:g}),b("div",{tabIndex:a?0:-1,onFocus:p,ref:u,"data-testid":"sentinelEnd"})]})}function C8(e){return typeof e=="function"?e():e}const E8=w.forwardRef(function(t,n){const{children:r,container:i,disablePortal:o=!1}=t,[s,a]=w.useState(null),l=en(w.isValidElement(r)?r.ref:null,n);if(ys(()=>{o||a(C8(i)||document.body)},[i,o]),ys(()=>{if(s&&!o)return zm(n,s),()=>{zm(n,null)}},[n,s,o]),o){if(w.isValidElement(r)){const c={ref:l};return w.cloneElement(r,c)}return b(w.Fragment,{children:r})}return b(w.Fragment,{children:s&&rs.createPortal(r,s)})}),k8=E8;function x8(e){const t=cn(e);return t.body===e?to(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Na(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function _w(e){return parseInt(to(e).getComputedStyle(e).paddingRight,10)||0}function I8(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function ww(e,t,n,r,i){const o=[t,n,...r];[].forEach.call(e.children,s=>{const a=o.indexOf(s)===-1,l=!I8(s);a&&l&&Na(s,i)})}function Kh(e,t){let n=-1;return e.some((r,i)=>t(r)?(n=i,!0):!1),n}function T8(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(x8(r)){const s=jx(cn(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${_w(r)+s}px`;const a=cn(r).querySelectorAll(".mui-fixed");[].forEach.call(a,l=>{n.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${_w(l)+s}px`})}let o;if(r.parentNode instanceof DocumentFragment)o=cn(r).body;else{const s=r.parentElement,a=to(r);o=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:r}n.push({value:o.style.overflow,property:"overflow",el:o},{value:o.style.overflowX,property:"overflow-x",el:o},{value:o.style.overflowY,property:"overflow-y",el:o}),o.style.overflow="hidden"}return()=>{n.forEach(({value:o,el:s,property:a})=>{o?s.style.setProperty(a,o):s.style.removeProperty(a)})}}function R8(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class P8{constructor(){this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&Na(t.modalRef,!1);const i=R8(n);ww(n,t.mount,t.modalRef,i,!0);const o=Kh(this.containers,s=>s.container===n);return o!==-1?(this.containers[o].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:i}),r)}mount(t,n){const r=Kh(this.containers,o=>o.modals.indexOf(t)!==-1),i=this.containers[r];i.restore||(i.restore=T8(i,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const i=Kh(this.containers,s=>s.modals.indexOf(t)!==-1),o=this.containers[i];if(o.modals.splice(o.modals.indexOf(t),1),this.modals.splice(r,1),o.modals.length===0)o.restore&&o.restore(),t.modalRef&&Na(t.modalRef,n),ww(o.container,t.mount,t.modalRef,o.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=o.modals[o.modals.length-1];s.modalRef&&Na(s.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function A8(e){return Je("MuiModal",e)}Ze("MuiModal",["root","hidden","backdrop"]);const N8=e=>{const{open:t,exited:n}=e;return ot({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},h8(A8))};function O8(e){return typeof e=="function"?e():e}function M8(e){return e?e.props.hasOwnProperty("in"):!1}const L8=new P8,D8=w.forwardRef(function(t,n){var r,i;const{children:o,closeAfterTransition:s=!1,container:a,disableAutoFocus:l=!1,disableEnforceFocus:c=!1,disableEscapeKeyDown:u=!1,disablePortal:d=!1,disableRestoreFocus:f=!1,disableScrollLock:h=!1,hideBackdrop:m=!1,keepMounted:y=!1,manager:S=L8,onBackdropClick:g,onClose:p,onKeyDown:v,open:_,onTransitionEnter:C,onTransitionExited:k,slotProps:E={},slots:I={},...N}=t,T=S,[W,K]=w.useState(!_),V=w.useRef({}),F=w.useRef(null),$=w.useRef(null),J=en($,n),se=M8(o),R=(r=t["aria-hidden"])!=null?r:!0,U=()=>cn(F.current),O=()=>(V.current.modalRef=$.current,V.current.mountNode=F.current,V.current),X=()=>{T.mount(O(),{disableScrollLock:h}),$.current&&($.current.scrollTop=0)},P=Uo(()=>{const re=O8(a)||U().body;T.add(O(),re),$.current&&X()}),M=w.useCallback(()=>T.isTopModal(O()),[T]),A=Uo(re=>{F.current=re,!(!re||!$.current)&&(_&&M()?X():Na($.current,R))}),B=w.useCallback(()=>{T.remove(O(),R)},[T,R]);w.useEffect(()=>()=>{B()},[B]),w.useEffect(()=>{_?P():(!se||!s)&&B()},[_,B,se,s,P]);const x={...t,closeAfterTransition:s,disableAutoFocus:l,disableEnforceFocus:c,disableEscapeKeyDown:u,disablePortal:d,disableRestoreFocus:f,disableScrollLock:h,exited:W,hideBackdrop:m,keepMounted:y},ie=N8(x),L=()=>{K(!1),C&&C()},pe=()=>{K(!0),k&&k(),s&&B()},te=re=>{re.target===re.currentTarget&&(g&&g(re),p&&p(re,"backdropClick"))},oe=re=>{v&&v(re),!(re.key!=="Escape"||!M())&&(u||(re.stopPropagation(),p&&p(re,"escapeKeyDown")))},Z={};o.props.tabIndex===void 0&&(Z.tabIndex="-1"),se&&(Z.onEnter=q_(L,o.props.onEnter),Z.onExited=q_(pe,o.props.onExited));const Ae=(i=I.root)!=null?i:"div",We=yw({elementType:Ae,externalSlotProps:E.root,externalForwardedProps:N,additionalProps:{ref:J,role:"presentation",onKeyDown:oe},className:ie.root,ownerState:x}),Y=I.backdrop,_e=yw({elementType:Y,externalSlotProps:E.backdrop,additionalProps:{"aria-hidden":!0,onClick:te,open:_},className:ie.backdrop,ownerState:x});return!y&&!_&&(!se||W)?null:b(k8,{ref:A,container:a,disablePortal:d,children:j(Ae,{...We,children:[!m&&Y?b(Y,{..._e}):null,b(S8,{disableEnforceFocus:c,disableAutoFocus:l,disableRestoreFocus:f,isEnabled:M,open:_,children:w.cloneElement(o,Z)})]})})}),$8=D8;function Dc(e){return parseInt(e,10)||0}const F8={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function bw(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const z8=w.forwardRef(function(t,n){const{onChange:r,maxRows:i,minRows:o=1,style:s,value:a,...l}=t,{current:c}=w.useRef(a!=null),u=w.useRef(null),d=en(n,u),f=w.useRef(null),h=w.useRef(0),[m,y]=w.useState({outerHeightStyle:0}),S=w.useCallback(()=>{const C=u.current,E=to(C).getComputedStyle(C);if(E.width==="0px")return{outerHeightStyle:0};const I=f.current;I.style.width=E.width,I.value=C.value||t.placeholder||"x",I.value.slice(-1)===`
`&&(I.value+=" ");const N=E.boxSizing,T=Dc(E.paddingBottom)+Dc(E.paddingTop),W=Dc(E.borderBottomWidth)+Dc(E.borderTopWidth),K=I.scrollHeight;I.value="x";const V=I.scrollHeight;let F=K;o&&(F=Math.max(Number(o)*V,F)),i&&(F=Math.min(Number(i)*V,F)),F=Math.max(F,V);const $=F+(N==="border-box"?T+W:0),J=Math.abs(F-K)<=1;return{outerHeightStyle:$,overflow:J}},[i,o,t.placeholder]),g=(C,k)=>{const{outerHeightStyle:E,overflow:I}=k;return h.current<20&&(E>0&&Math.abs((C.outerHeightStyle||0)-E)>1||C.overflow!==I)?(h.current+=1,{overflow:I,outerHeightStyle:E}):C},p=w.useCallback(()=>{const C=S();bw(C)||y(k=>g(k,C))},[S]),v=()=>{const C=S();bw(C)||rs.flushSync(()=>{y(k=>g(k,C))})};w.useEffect(()=>{const C=Bx(()=>{h.current=0,u.current&&v()});let k;const E=u.current,I=to(E);return I.addEventListener("resize",C),typeof ResizeObserver<"u"&&(k=new ResizeObserver(C),k.observe(E)),()=>{C.clear(),I.removeEventListener("resize",C),k&&k.disconnect()}}),ys(()=>{p()}),w.useEffect(()=>{h.current=0},[a]);const _=C=>{h.current=0,c||p(),r&&r(C)};return j(w.Fragment,{children:[b("textarea",{value:a,onChange:_,ref:d,rows:o,style:{height:m.outerHeightStyle,overflow:m.overflow?"hidden":void 0,...s},...l}),b("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:f,tabIndex:-1,style:{...F8.shadow,...s,padding:0}})]})}),U8=z8;function B8(e){return Je("MuiSvgIcon",e)}Ze("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const j8=e=>{const{color:t,fontSize:n,classes:r}=e,i={root:["root",t!=="inherit"&&`color${xe(t)}`,`fontSize${xe(n)}`]};return ot(i,B8,r)},W8=fe("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${xe(n.color)}`],t[`fontSize${xe(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,i,o,s,a,l,c,u,d,f,h,m,y,S,g,p;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=e.transitions)==null||(o=i.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((s=e.typography)==null||(a=s.pxToRem)==null?void 0:a.call(s,20))||"1.25rem",medium:((l=e.typography)==null||(c=l.pxToRem)==null?void 0:c.call(l,24))||"1.5rem",large:((u=e.typography)==null||(d=u.pxToRem)==null?void 0:d.call(u,35))||"2.1875rem"}[t.fontSize],color:(f=(h=(e.vars||e).palette)==null||(m=h[t.color])==null?void 0:m.main)!=null?f:{action:(y=(e.vars||e).palette)==null||(S=y.action)==null?void 0:S.active,disabled:(g=(e.vars||e).palette)==null||(p=g.action)==null?void 0:p.disabled,inherit:void 0}[t.color]}}),lI=w.forwardRef(function(t,n){const r=st({props:t,name:"MuiSvgIcon"}),{children:i,className:o,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:c,inheritViewBox:u=!1,titleAccess:d,viewBox:f="0 0 24 24",...h}=r,m={...r,color:s,component:a,fontSize:l,instanceFontSize:t.fontSize,inheritViewBox:u,viewBox:f},y={};u||(y.viewBox=f);const S=j8(m);return j(W8,{as:a,className:be(S.root,o),focusable:"false",color:c,"aria-hidden":d?void 0:!0,role:d?"img":void 0,ref:n,...y,...h,ownerState:m,children:[i,d?b("title",{children:d}):null]})});lI.muiName="SvgIcon";const Sw=lI;function Ey(e,t){function n(r,i){return b(Sw,{"data-testid":`${t}Icon`,ref:i,...r,children:e})}return n.muiName=Sw.muiName,w.memo(w.forwardRef(n))}var Cw={},H8={get exports(){return Cw},set exports(e){Cw=e}},Pe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky=Symbol.for("react.element"),xy=Symbol.for("react.portal"),If=Symbol.for("react.fragment"),Tf=Symbol.for("react.strict_mode"),Rf=Symbol.for("react.profiler"),Pf=Symbol.for("react.provider"),Af=Symbol.for("react.context"),V8=Symbol.for("react.server_context"),Nf=Symbol.for("react.forward_ref"),Of=Symbol.for("react.suspense"),Mf=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),Df=Symbol.for("react.lazy"),q8=Symbol.for("react.offscreen"),cI;cI=Symbol.for("react.module.reference");function xn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ky:switch(e=e.type,e){case If:case Rf:case Tf:case Of:case Mf:return e;default:switch(e=e&&e.$$typeof,e){case V8:case Af:case Nf:case Df:case Lf:case Pf:return e;default:return t}}case xy:return t}}}Pe.ContextConsumer=Af;Pe.ContextProvider=Pf;Pe.Element=ky;Pe.ForwardRef=Nf;Pe.Fragment=If;Pe.Lazy=Df;Pe.Memo=Lf;Pe.Portal=xy;Pe.Profiler=Rf;Pe.StrictMode=Tf;Pe.Suspense=Of;Pe.SuspenseList=Mf;Pe.isAsyncMode=function(){return!1};Pe.isConcurrentMode=function(){return!1};Pe.isContextConsumer=function(e){return xn(e)===Af};Pe.isContextProvider=function(e){return xn(e)===Pf};Pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ky};Pe.isForwardRef=function(e){return xn(e)===Nf};Pe.isFragment=function(e){return xn(e)===If};Pe.isLazy=function(e){return xn(e)===Df};Pe.isMemo=function(e){return xn(e)===Lf};Pe.isPortal=function(e){return xn(e)===xy};Pe.isProfiler=function(e){return xn(e)===Rf};Pe.isStrictMode=function(e){return xn(e)===Tf};Pe.isSuspense=function(e){return xn(e)===Of};Pe.isSuspenseList=function(e){return xn(e)===Mf};Pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===If||e===Rf||e===Tf||e===Of||e===Mf||e===q8||typeof e=="object"&&e!==null&&(e.$$typeof===Df||e.$$typeof===Lf||e.$$typeof===Pf||e.$$typeof===Af||e.$$typeof===Nf||e.$$typeof===cI||e.getModuleId!==void 0)};Pe.typeOf=xn;(function(e){e.exports=Pe})(H8);function uI(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Vm(e,t){return Vm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Vm(e,t)}function dI(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Vm(e,t)}const Ew={disabled:!1},pd=qe.createContext(null);var G8=function(t){return t.scrollTop},da="unmounted",Ci="exited",Ei="entering",wo="entered",qm="exiting",Tr=function(e){dI(t,e);function t(r,i){var o;o=e.call(this,r,i)||this;var s=i,a=s&&!s.isMounting?r.enter:r.appear,l;return o.appearStatus=null,r.in?a?(l=Ci,o.appearStatus=Ei):l=wo:r.unmountOnExit||r.mountOnEnter?l=da:l=Ci,o.state={status:l},o.nextCallback=null,o}t.getDerivedStateFromProps=function(i,o){var s=i.in;return s&&o.status===da?{status:Ci}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var o=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==Ei&&s!==wo&&(o=Ei):(s===Ei||s===wo)&&(o=qm)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,o,s,a;return o=s=a=i,i!=null&&typeof i!="number"&&(o=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:o,enter:s,appear:a}},n.updateStatus=function(i,o){if(i===void 0&&(i=!1),o!==null)if(this.cancelNextCallback(),o===Ei){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:wc.findDOMNode(this);s&&G8(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ci&&this.setState({status:da})},n.performEnter=function(i){var o=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[wc.findDOMNode(this),a],c=l[0],u=l[1],d=this.getTimeouts(),f=a?d.appear:d.enter;if(!i&&!s||Ew.disabled){this.safeSetState({status:wo},function(){o.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:Ei},function(){o.props.onEntering(c,u),o.onTransitionEnd(f,function(){o.safeSetState({status:wo},function(){o.props.onEntered(c,u)})})})},n.performExit=function(){var i=this,o=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:wc.findDOMNode(this);if(!o||Ew.disabled){this.safeSetState({status:Ci},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:qm},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:Ci},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},n.setNextCallback=function(i){var o=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,o.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(i,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:wc.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],c=l[0],u=l[1];this.props.addEndListener(c,u)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===da)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=uI(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return qe.createElement(pd.Provider,{value:null},typeof s=="function"?s(i,a):qe.cloneElement(qe.Children.only(s),a))},t}(qe.Component);Tr.contextType=pd;Tr.propTypes={};function _o(){}Tr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:_o,onEntering:_o,onEntered:_o,onExit:_o,onExiting:_o,onExited:_o};Tr.UNMOUNTED=da;Tr.EXITED=Ci;Tr.ENTERING=Ei;Tr.ENTERED=wo;Tr.EXITING=qm;const fI=Tr;function K8(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Iy(e,t){var n=function(o){return t&&w.isValidElement(o)?t(o):o},r=Object.create(null);return e&&w.Children.map(e,function(i){return i}).forEach(function(i){r[i.key]=n(i)}),r}function Y8(e,t){e=e||{},t=t||{};function n(u){return u in t?t[u]:e[u]}var r=Object.create(null),i=[];for(var o in e)o in t?i.length&&(r[o]=i,i=[]):i.push(o);var s,a={};for(var l in t){if(r[l])for(s=0;s<r[l].length;s++){var c=r[l][s];a[r[l][s]]=n(c)}a[l]=n(l)}for(s=0;s<i.length;s++)a[i[s]]=n(i[s]);return a}function Oi(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Q8(e,t){return Iy(e.children,function(n){return w.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:Oi(n,"appear",e),enter:Oi(n,"enter",e),exit:Oi(n,"exit",e)})})}function X8(e,t,n){var r=Iy(e.children),i=Y8(t,r);return Object.keys(i).forEach(function(o){var s=i[o];if(w.isValidElement(s)){var a=o in t,l=o in r,c=t[o],u=w.isValidElement(c)&&!c.props.in;l&&(!a||u)?i[o]=w.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:Oi(s,"exit",e),enter:Oi(s,"enter",e)}):!l&&a&&!u?i[o]=w.cloneElement(s,{in:!1}):l&&a&&w.isValidElement(c)&&(i[o]=w.cloneElement(s,{onExited:n.bind(null,s),in:c.props.in,exit:Oi(s,"exit",e),enter:Oi(s,"enter",e)}))}}),i}var J8=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Z8={component:"div",childFactory:function(t){return t}},Ty=function(e){dI(t,e);function t(r,i){var o;o=e.call(this,r,i)||this;var s=o.handleExited.bind(K8(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,o){var s=o.children,a=o.handleExited,l=o.firstRender;return{children:l?Q8(i,a):X8(i,s,a),firstRender:!1}},n.handleExited=function(i,o){var s=Iy(this.props.children);i.key in s||(i.props.onExited&&i.props.onExited(o),this.mounted&&this.setState(function(a){var l=cd({},a.children);return delete l[i.key],{children:l}}))},n.render=function(){var i=this.props,o=i.component,s=i.childFactory,a=uI(i,["component","childFactory"]),l=this.state.contextValue,c=J8(this.state.children).map(s);return delete a.appear,delete a.enter,delete a.exit,o===null?qe.createElement(pd.Provider,{value:l},c):qe.createElement(pd.Provider,{value:l},qe.createElement(o,a,c))},t}(qe.Component);Ty.propTypes={};Ty.defaultProps=Z8;const eU=Ty,hI=e=>e.scrollTop;function md(e,t){var n,r;const{timeout:i,easing:o,style:s={}}=e;return{duration:(n=s.transitionDuration)!=null?n:typeof i=="number"?i:i[t.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof o=="object"?o[t.mode]:o,delay:s.transitionDelay}}function tU(e){return Je("MuiPaper",e)}Ze("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const nU=e=>{const{square:t,elevation:n,variant:r,classes:i}=e,o={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return ot(o,tU,i)},rU=fe("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return{backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),...!t.square&&{borderRadius:e.shape.borderRadius},...t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},...t.variant==="elevation"&&{boxShadow:(e.vars||e).shadows[t.elevation],...!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${fd("#fff",gw(t.elevation))}, ${fd("#fff",gw(t.elevation))})`},...e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}}}}),iU=w.forwardRef(function(t,n){const r=st({props:t,name:"MuiPaper"}),{className:i,component:o="div",elevation:s=1,square:a=!1,variant:l="elevation",...c}=r,u={...r,component:o,elevation:s,square:a,variant:l},d=nU(u);return b(rU,{as:o,ownerState:u,className:be(d.root,i),ref:n,...c})}),pI=iU;function oU(e){const{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:o,rippleSize:s,in:a,onExited:l,timeout:c}=e,[u,d]=w.useState(!1),f=be(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),h={width:s,height:s,top:-(s/2)+o,left:-(s/2)+i},m=be(n.child,u&&n.childLeaving,r&&n.childPulsate);return!a&&!u&&d(!0),w.useEffect(()=>{if(!a&&l!=null){const y=setTimeout(l,c);return()=>{clearTimeout(y)}}},[l,a,c]),b("span",{className:f,style:h,children:b("span",{className:m})})}const sU=Ze("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),vn=sU;let $f=e=>e,kw,xw,Iw,Tw;const Gm=550,aU=80,lU=py(kw||(kw=$f`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),cU=py(xw||(xw=$f`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),uU=py(Iw||(Iw=$f`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),dU=fe("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),fU=fe(oU,{name:"MuiTouchRipple",slot:"Ripple"})(Tw||(Tw=$f`
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
`),vn.rippleVisible,lU,Gm,({theme:e})=>e.transitions.easing.easeInOut,vn.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,vn.child,vn.childLeaving,cU,Gm,({theme:e})=>e.transitions.easing.easeInOut,vn.childPulsate,uU,({theme:e})=>e.transitions.easing.easeInOut),hU=w.forwardRef(function(t,n){const r=st({props:t,name:"MuiTouchRipple"}),{center:i=!1,classes:o={},className:s,...a}=r,[l,c]=w.useState([]),u=w.useRef(0),d=w.useRef(null);w.useEffect(()=>{d.current&&(d.current(),d.current=null)},[l]);const f=w.useRef(!1),h=w.useRef(null),m=w.useRef(null),y=w.useRef(null);w.useEffect(()=>()=>{clearTimeout(h.current)},[]);const S=w.useCallback(_=>{const{pulsate:C,rippleX:k,rippleY:E,rippleSize:I,cb:N}=_;c(T=>[...T,b(fU,{classes:{ripple:be(o.ripple,vn.ripple),rippleVisible:be(o.rippleVisible,vn.rippleVisible),ripplePulsate:be(o.ripplePulsate,vn.ripplePulsate),child:be(o.child,vn.child),childLeaving:be(o.childLeaving,vn.childLeaving),childPulsate:be(o.childPulsate,vn.childPulsate)},timeout:Gm,pulsate:C,rippleX:k,rippleY:E,rippleSize:I},u.current)]),u.current+=1,d.current=N},[o]),g=w.useCallback((_={},C={},k=()=>{})=>{const{pulsate:E=!1,center:I=i||C.pulsate,fakeElement:N=!1}=C;if((_==null?void 0:_.type)==="mousedown"&&f.current){f.current=!1;return}(_==null?void 0:_.type)==="touchstart"&&(f.current=!0);const T=N?null:y.current,W=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let K,V,F;if(I||_===void 0||_.clientX===0&&_.clientY===0||!_.clientX&&!_.touches)K=Math.round(W.width/2),V=Math.round(W.height/2);else{const{clientX:$,clientY:J}=_.touches&&_.touches.length>0?_.touches[0]:_;K=Math.round($-W.left),V=Math.round(J-W.top)}if(I)F=Math.sqrt((2*W.width**2+W.height**2)/3),F%2===0&&(F+=1);else{const $=Math.max(Math.abs((T?T.clientWidth:0)-K),K)*2+2,J=Math.max(Math.abs((T?T.clientHeight:0)-V),V)*2+2;F=Math.sqrt($**2+J**2)}_!=null&&_.touches?m.current===null&&(m.current=()=>{S({pulsate:E,rippleX:K,rippleY:V,rippleSize:F,cb:k})},h.current=setTimeout(()=>{m.current&&(m.current(),m.current=null)},aU)):S({pulsate:E,rippleX:K,rippleY:V,rippleSize:F,cb:k})},[i,S]),p=w.useCallback(()=>{g({},{pulsate:!0})},[g]),v=w.useCallback((_,C)=>{if(clearTimeout(h.current),(_==null?void 0:_.type)==="touchend"&&m.current){m.current(),m.current=null,h.current=setTimeout(()=>{v(_,C)});return}m.current=null,c(k=>k.length>0?k.slice(1):k),d.current=C},[]);return w.useImperativeHandle(n,()=>({pulsate:p,start:g,stop:v}),[p,g,v]),b(dU,{className:be(vn.root,o.root,s),ref:y,...a,children:b(eU,{component:null,exit:!0,children:l})})}),pU=hU;function mU(e){return Je("MuiButtonBase",e)}const gU=Ze("MuiButtonBase",["root","disabled","focusVisible"]),vU=gU,yU=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,s=ot({root:["root",t&&"disabled",n&&"focusVisible"]},mU,i);return n&&r&&(s.root+=` ${r}`),s},_U=fe("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${vU.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),wU=w.forwardRef(function(t,n){const r=st({props:t,name:"MuiButtonBase"}),{action:i,centerRipple:o=!1,children:s,className:a,component:l="button",disabled:c=!1,disableRipple:u=!1,disableTouchRipple:d=!1,focusRipple:f=!1,focusVisibleClassName:h,LinkComponent:m="a",onBlur:y,onClick:S,onContextMenu:g,onDragLeave:p,onFocus:v,onFocusVisible:_,onKeyDown:C,onKeyUp:k,onMouseDown:E,onMouseLeave:I,onMouseUp:N,onTouchEnd:T,onTouchMove:W,onTouchStart:K,tabIndex:V=0,TouchRippleProps:F,touchRippleRef:$,type:J,...se}=r,R=w.useRef(null),U=w.useRef(null),O=en(U,$),{isFocusVisibleRef:X,onFocus:P,onBlur:M,ref:A}=IF(),[B,x]=w.useState(!1);c&&B&&x(!1),w.useImperativeHandle(i,()=>({focusVisible:()=>{x(!0),R.current.focus()}}),[]);const[ie,L]=w.useState(!1);w.useEffect(()=>{L(!0)},[]);const pe=ie&&!u&&!c;w.useEffect(()=>{B&&f&&!u&&ie&&U.current.pulsate()},[u,f,B,ie]);function te(le,ne,ae=d){return Uo(Ke=>(ne&&ne(Ke),!ae&&U.current&&U.current[le](Ke),!0))}const oe=te("start",E),Z=te("stop",g),Ae=te("stop",p),We=te("stop",N),Y=te("stop",le=>{B&&le.preventDefault(),I&&I(le)}),_e=te("start",K),re=te("stop",T),$e=te("stop",W),gt=te("stop",le=>{M(le),X.current===!1&&x(!1),y&&y(le)},!1),Ge=Uo(le=>{R.current||(R.current=le.currentTarget),P(le),X.current===!0&&(x(!0),_&&_(le)),v&&v(le)}),Ct=()=>{const le=R.current;return l&&l!=="button"&&!(le.tagName==="A"&&le.href)},jt=w.useRef(!1),lt=Uo(le=>{f&&!jt.current&&B&&U.current&&le.key===" "&&(jt.current=!0,U.current.stop(le,()=>{U.current.start(le)})),le.target===le.currentTarget&&Ct()&&le.key===" "&&le.preventDefault(),C&&C(le),le.target===le.currentTarget&&Ct()&&le.key==="Enter"&&!c&&(le.preventDefault(),S&&S(le))}),ee=Uo(le=>{f&&le.key===" "&&U.current&&B&&!le.defaultPrevented&&(jt.current=!1,U.current.stop(le,()=>{U.current.pulsate(le)})),k&&k(le),S&&le.target===le.currentTarget&&Ct()&&le.key===" "&&!le.defaultPrevented&&S(le)});let me=l;me==="button"&&(se.href||se.to)&&(me=m);const Wt={};me==="button"?(Wt.type=J===void 0?"button":J,Wt.disabled=c):(!se.href&&!se.to&&(Wt.role="button"),c&&(Wt["aria-disabled"]=c));const Ht=en(n,A,R),Et={...r,centerRipple:o,component:l,disabled:c,disableRipple:u,disableTouchRipple:d,focusRipple:f,tabIndex:V,focusVisible:B},rr=yU(Et);return j(_U,{as:me,className:be(rr.root,a),ownerState:Et,onBlur:gt,onClick:S,onContextMenu:Z,onFocus:Ge,onKeyDown:lt,onKeyUp:ee,onMouseDown:oe,onMouseLeave:Y,onMouseUp:We,onDragLeave:Ae,onTouchEnd:re,onTouchMove:$e,onTouchStart:_e,ref:Ht,tabIndex:c?-1:V,type:J,...Wt,...se,children:[s,pe?b(pU,{ref:O,center:o,...F}):null]})}),bU=wU;function SU(e){return Je("MuiIconButton",e)}const CU=Ze("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),EU=CU,kU=e=>{const{classes:t,disabled:n,color:r,edge:i,size:o}=e,s={root:["root",n&&"disabled",r!=="default"&&`color${xe(r)}`,i&&`edge${xe(i)}`,`size${xe(o)}`]};return ot(s,SU,t)},xU=fe(bU,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="default"&&t[`color${xe(n.color)}`],n.edge&&t[`edge${xe(n.edge)}`],t[`size${xe(n.size)}`]]}})(({theme:e,ownerState:t})=>({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),...!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:fd(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},...t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},...t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}}),({theme:e,ownerState:t})=>{var n;const r=(n=(e.vars||e).palette)==null?void 0:n[t.color];return{...t.color==="inherit"&&{color:"inherit"},...t.color!=="inherit"&&t.color!=="default"&&{color:r==null?void 0:r.main,...!t.disableRipple&&{"&:hover":{...r&&{backgroundColor:e.vars?`rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:fd(r.main,e.palette.action.hoverOpacity)},"@media (hover: none)":{backgroundColor:"transparent"}}}},...t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},...t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},[`&.${EU.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}}}),IU=w.forwardRef(function(t,n){const r=st({props:t,name:"MuiIconButton"}),{edge:i=!1,children:o,className:s,color:a="default",disabled:l=!1,disableFocusRipple:c=!1,size:u="medium",...d}=r,f={...r,edge:i,color:a,disabled:l,disableFocusRipple:c,size:u},h=kU(f);return b(xU,{className:be(h.root,s),centerRipple:!0,focusRipple:!c,disabled:l,ref:n,ownerState:f,...d,children:o})}),TU=IU;function RU(e){return Je("MuiTypography",e)}Ze("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const PU=e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:i,variant:o,classes:s}=e,a={root:["root",o,e.align!=="inherit"&&`align${xe(t)}`,n&&"gutterBottom",r&&"noWrap",i&&"paragraph"]};return ot(a,RU,s)},AU=fe("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${xe(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>({margin:0,...t.variant&&e.typography[t.variant],...t.align!=="inherit"&&{textAlign:t.align},...t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},...t.gutterBottom&&{marginBottom:"0.35em"},...t.paragraph&&{marginBottom:16}})),Rw={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},NU={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},OU=e=>NU[e]||e,MU=w.forwardRef(function(t,n){const r=st({props:t,name:"MuiTypography"}),i=OU(r.color),o=Cz({...r,color:i}),{align:s="inherit",className:a,component:l,gutterBottom:c=!1,noWrap:u=!1,paragraph:d=!1,variant:f="body1",variantMapping:h=Rw,...m}=o,y={...o,align:s,color:i,className:a,component:l,gutterBottom:c,noWrap:u,paragraph:d,variant:f,variantMapping:h},S=l||(d?"p":h[f]||Rw[f])||"span",g=PU(y);return b(AU,{as:S,ref:n,ownerState:y,className:be(g.root,a),...m})}),LU=MU;function $s({props:e,states:t,muiFormControl:n}){return t.reduce((r,i)=>(r[i]=e[i],n&&typeof e[i]>"u"&&(r[i]=n[i]),r),{})}const DU=w.createContext(void 0),Ff=DU;function uo(){return w.useContext(Ff)}function $U(e){return b(bz,{...e,defaultTheme:xf,themeId:pf})}function Pw(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function gd(e,t=!1){return e&&(Pw(e.value)&&e.value!==""||t&&Pw(e.defaultValue)&&e.defaultValue!=="")}function FU(e){return e.startAdornment}function zU(e){return Je("MuiInputBase",e)}const UU=Ze("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),ws=UU,zf=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,n.size==="small"&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${xe(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},Uf=(e,t)=>{const{ownerState:n}=e;return[t.input,n.size==="small"&&t.inputSizeSmall,n.multiline&&t.inputMultiline,n.type==="search"&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},BU=e=>{const{classes:t,color:n,disabled:r,error:i,endAdornment:o,focused:s,formControl:a,fullWidth:l,hiddenLabel:c,multiline:u,readOnly:d,size:f,startAdornment:h,type:m}=e,y={root:["root",`color${xe(n)}`,r&&"disabled",i&&"error",l&&"fullWidth",s&&"focused",a&&"formControl",f==="small"&&"sizeSmall",u&&"multiline",h&&"adornedStart",o&&"adornedEnd",c&&"hiddenLabel",d&&"readOnly"],input:["input",r&&"disabled",m==="search"&&"inputTypeSearch",u&&"inputMultiline",f==="small"&&"inputSizeSmall",c&&"inputHiddenLabel",h&&"inputAdornedStart",o&&"inputAdornedEnd",d&&"readOnly"]};return ot(y,zU,t)},Bf=fe("div",{name:"MuiInputBase",slot:"Root",overridesResolver:zf})(({theme:e,ownerState:t})=>({...e.typography.body1,color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${ws.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"},...t.multiline&&{padding:"4px 0 5px",...t.size==="small"&&{paddingTop:1}},...t.fullWidth&&{width:"100%"}})),jf=fe("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Uf})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light",r={color:"currentColor",...e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},i={opacity:"0 !important"},o=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${ws.formControl} &`]:{"&::-webkit-input-placeholder":i,"&::-moz-placeholder":i,"&:-ms-input-placeholder":i,"&::-ms-input-placeholder":i,"&:focus::-webkit-input-placeholder":o,"&:focus::-moz-placeholder":o,"&:focus:-ms-input-placeholder":o,"&:focus::-ms-input-placeholder":o},[`&.${ws.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"},...t.size==="small"&&{paddingTop:1},...t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},...t.type==="search"&&{MozAppearance:"textfield"}}}),jU=b($U,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),WU=w.forwardRef(function(t,n){var r;const i=st({props:t,name:"MuiInputBase"}),{"aria-describedby":o,autoComplete:s,autoFocus:a,className:l,color:c,components:u={},componentsProps:d={},defaultValue:f,disabled:h,disableInjectingGlobalStyles:m,endAdornment:y,error:S,fullWidth:g=!1,id:p,inputComponent:v="input",inputProps:_={},inputRef:C,margin:k,maxRows:E,minRows:I,multiline:N=!1,name:T,onBlur:W,onChange:K,onClick:V,onFocus:F,onKeyDown:$,onKeyUp:J,placeholder:se,readOnly:R,renderSuffix:U,rows:O,size:X,slotProps:P={},slots:M={},startAdornment:A,type:B="text",value:x,...ie}=i,L=_.value!=null?_.value:x,{current:pe}=w.useRef(L!=null),te=w.useRef(),oe=w.useCallback(ae=>{},[]),Z=en(te,C,_.ref,oe),[Ae,We]=w.useState(!1),Y=uo(),_e=$s({props:i,muiFormControl:Y,states:["color","disabled","error","hiddenLabel","size","required","filled"]});_e.focused=Y?Y.focused:Ae,w.useEffect(()=>{!Y&&h&&Ae&&(We(!1),W&&W())},[Y,h,Ae,W]);const re=Y&&Y.onFilled,$e=Y&&Y.onEmpty,gt=w.useCallback(ae=>{gd(ae)?re&&re():$e&&$e()},[re,$e]);ys(()=>{pe&&gt({value:L})},[L,gt,pe]);const Ge=ae=>{if(_e.disabled){ae.stopPropagation();return}F&&F(ae),_.onFocus&&_.onFocus(ae),Y&&Y.onFocus?Y.onFocus(ae):We(!0)},Ct=ae=>{W&&W(ae),_.onBlur&&_.onBlur(ae),Y&&Y.onBlur?Y.onBlur(ae):We(!1)},jt=(ae,...Ke)=>{if(!pe){const jn=ae.target||te.current;if(jn==null)throw new Error(hi(1));gt({value:jn.value})}_.onChange&&_.onChange(ae,...Ke),K&&K(ae,...Ke)};w.useEffect(()=>{gt(te.current)},[]);const lt=ae=>{te.current&&ae.currentTarget===ae.target&&te.current.focus(),V&&!_e.disabled&&V(ae)};let ee=v,me=_;N&&ee==="input"&&(O?me={type:void 0,minRows:O,maxRows:O,...me}:me={type:void 0,maxRows:E,minRows:I,...me},ee=U8);const Wt=ae=>{gt(ae.animationName==="mui-auto-fill-cancel"?te.current:{value:"x"})};w.useEffect(()=>{Y&&Y.setAdornedStart(!!A)},[Y,A]);const Ht={...i,color:_e.color||"primary",disabled:_e.disabled,endAdornment:y,error:_e.error,focused:_e.focused,formControl:Y,fullWidth:g,hiddenLabel:_e.hiddenLabel,multiline:N,size:_e.size,startAdornment:A,type:B},Et=BU(Ht),rr=M.root||u.Root||Bf,le=P.root||d.root||{},ne=M.input||u.Input||jf;return me={...me,...(r=P.input)!=null?r:d.input},j(w.Fragment,{children:[!m&&jU,j(rr,{...le,...!hd(rr)&&{ownerState:{...Ht,...le.ownerState}},ref:n,onClick:lt,...ie,className:be(Et.root,le.className,l,R&&"MuiInputBase-readOnly"),children:[A,b(Ff.Provider,{value:null,children:b(ne,{ownerState:Ht,"aria-invalid":_e.error,"aria-describedby":o,autoComplete:s,autoFocus:a,defaultValue:f,disabled:_e.disabled,id:p,onAnimationStart:Wt,name:T,placeholder:se,readOnly:R,required:_e.required,rows:O,value:L,onKeyDown:$,onKeyUp:J,type:B,...me,...!hd(ne)&&{as:ee,ownerState:{...Ht,...me.ownerState}},ref:Z,className:be(Et.input,me.className,R&&"MuiInputBase-readOnly"),onBlur:Ct,onChange:jt,onFocus:Ge})}),y,U?U({..._e,startAdornment:A}):null]})]})}),Ry=WU;function HU(e){return Je("MuiInput",e)}const VU={...ws,...Ze("MuiInput",["root","underline","input"])},ea=VU;function qU(e){return Je("MuiOutlinedInput",e)}const GU={...ws,...Ze("MuiOutlinedInput",["root","notchedOutline","input"])},Nr=GU;function KU(e){return Je("MuiFilledInput",e)}const YU={...ws,...Ze("MuiFilledInput",["root","underline","input"])},yi=YU,QU=Ey(b("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),XU={entering:{opacity:1},entered:{opacity:1}},JU=w.forwardRef(function(t,n){const r=Cy(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:o,appear:s=!0,children:a,easing:l,in:c,onEnter:u,onEntered:d,onEntering:f,onExit:h,onExited:m,onExiting:y,style:S,timeout:g=i,TransitionComponent:p=fI,...v}=t,_=w.useRef(null),C=en(_,a.ref,n),k=F=>$=>{if(F){const J=_.current;$===void 0?F(J):F(J,$)}},E=k(f),I=k((F,$)=>{hI(F);const J=md({style:S,timeout:g,easing:l},{mode:"enter"});F.style.webkitTransition=r.transitions.create("opacity",J),F.style.transition=r.transitions.create("opacity",J),u&&u(F,$)}),N=k(d),T=k(y),W=k(F=>{const $=md({style:S,timeout:g,easing:l},{mode:"exit"});F.style.webkitTransition=r.transitions.create("opacity",$),F.style.transition=r.transitions.create("opacity",$),h&&h(F)}),K=k(m);return b(p,{appear:s,in:c,nodeRef:_,onEnter:I,onEntered:N,onEntering:E,onExit:W,onExited:K,onExiting:T,addEndListener:F=>{o&&o(_.current,F)},timeout:g,...v,children:(F,$)=>w.cloneElement(a,{style:{opacity:0,visibility:F==="exited"&&!c?"hidden":void 0,...XU[F],...S,...a.props.style},ref:C,...$})})}),ZU=JU;function eB(e){return Je("MuiBackdrop",e)}Ze("MuiBackdrop",["root","invisible"]);const tB=e=>{const{classes:t,invisible:n}=e;return ot({root:["root",n&&"invisible"]},eB,t)},nB=fe("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",...e.invisible&&{backgroundColor:"transparent"}})),rB=w.forwardRef(function(t,n){var r,i,o;const s=st({props:t,name:"MuiBackdrop"}),{children:a,className:l,component:c="div",components:u={},componentsProps:d={},invisible:f=!1,open:h,slotProps:m={},slots:y={},TransitionComponent:S=ZU,transitionDuration:g,...p}=s,v={...s,component:c,invisible:f},_=tB(v),C=(r=m.root)!=null?r:d.root;return b(S,{in:h,timeout:g,...p,children:b(nB,{"aria-hidden":!0,...C,as:(i=(o=y.root)!=null?o:u.Root)!=null?i:c,className:be(_.root,l,C==null?void 0:C.className),ownerState:{...v,...C==null?void 0:C.ownerState},classes:_,ref:n,children:a})})}),iB=rB,oB=fe("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,...!t.open&&t.exited&&{visibility:"hidden"}})),sB=fe(iB,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),aB=w.forwardRef(function(t,n){var r,i,o,s,a,l;const c=st({name:"MuiModal",props:t}),{BackdropComponent:u=sB,BackdropProps:d,classes:f,className:h,closeAfterTransition:m=!1,children:y,container:S,component:g,components:p={},componentsProps:v={},disableAutoFocus:_=!1,disableEnforceFocus:C=!1,disableEscapeKeyDown:k=!1,disablePortal:E=!1,disableRestoreFocus:I=!1,disableScrollLock:N=!1,hideBackdrop:T=!1,keepMounted:W=!1,onBackdropClick:K,onClose:V,open:F,slotProps:$,slots:J,theme:se,...R}=c,[U,O]=w.useState(!0),X={container:S,closeAfterTransition:m,disableAutoFocus:_,disableEnforceFocus:C,disableEscapeKeyDown:k,disablePortal:E,disableRestoreFocus:I,disableScrollLock:N,hideBackdrop:T,keepMounted:W,onBackdropClick:K,onClose:V,open:F},P={...c,...X,exited:U},M=(r=(i=J==null?void 0:J.root)!=null?i:p.Root)!=null?r:oB,A=(o=(s=J==null?void 0:J.backdrop)!=null?s:p.Backdrop)!=null?o:u,B=(a=$==null?void 0:$.root)!=null?a:v.root,x=(l=$==null?void 0:$.backdrop)!=null?l:v.backdrop;return b($8,{slots:{root:M,backdrop:A},slotProps:{root:()=>({...Hm(B,P),...!hd(M)&&{as:g,theme:se},className:be(h,B==null?void 0:B.className,f==null?void 0:f.root,!P.open&&P.exited&&(f==null?void 0:f.hidden))}),backdrop:()=>({...d,...Hm(x,P),className:be(x==null?void 0:x.className,f==null?void 0:f.backdrop)})},onTransitionEnter:()=>O(!1),onTransitionExited:()=>O(!0),ref:n,...R,...X,children:y})}),lB=aB,cB=e=>{const{classes:t,disableUnderline:n}=e,i=ot({root:["root",!n&&"underline"],input:["input"]},KU,t);return{...t,...i}},uB=fe(Bf,{shouldForwardProp:e=>vi(e)||e==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...zf(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{var n;const r=e.palette.mode==="light",i=r?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",o=r?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",s=r?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",a=r?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return{position:"relative",backgroundColor:e.vars?e.vars.palette.FilledInput.bg:o,borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:e.vars?e.vars.palette.FilledInput.hoverBg:s,"@media (hover: none)":{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:o}},[`&.${yi.focused}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:o},[`&.${yi.disabled}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.disabledBg:a},...!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(n=(e.vars||e).palette[t.color||"primary"])==null?void 0:n.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${yi.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${yi.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}},"&:before":{borderBottom:`1px solid ${e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`:i}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${yi.disabled}, .${yi.error}):before`]:{borderBottom:`1px solid ${(e.vars||e).palette.text.primary}`},[`&.${yi.disabled}:before`]:{borderBottomStyle:"dotted"}},...t.startAdornment&&{paddingLeft:12},...t.endAdornment&&{paddingRight:12},...t.multiline&&{padding:"25px 12px 8px",...t.size==="small"&&{paddingTop:21,paddingBottom:4},...t.hiddenLabel&&{paddingTop:16,paddingBottom:17}}}}),dB=fe(jf,{name:"MuiFilledInput",slot:"Input",overridesResolver:Uf})(({theme:e,ownerState:t})=>({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12,...!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},...e.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},...t.size==="small"&&{paddingTop:21,paddingBottom:4},...t.hiddenLabel&&{paddingTop:16,paddingBottom:17},...t.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},...t.startAdornment&&{paddingLeft:0},...t.endAdornment&&{paddingRight:0},...t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9}})),mI=w.forwardRef(function(t,n){var r,i,o,s;const a=st({props:t,name:"MuiFilledInput"}),{disableUnderline:l,components:c={},componentsProps:u,fullWidth:d=!1,hiddenLabel:f,inputComponent:h="input",multiline:m=!1,slotProps:y,slots:S={},type:g="text",...p}=a,v={...a,fullWidth:d,inputComponent:h,multiline:m,type:g},_=cB(a),C={root:{ownerState:v},input:{ownerState:v}},k=y??u?Cn(y??u,C):C,E=(r=(i=S.root)!=null?i:c.Root)!=null?r:uB,I=(o=(s=S.input)!=null?s:c.Input)!=null?o:dB;return b(Ry,{slots:{root:E,input:I},componentsProps:k,fullWidth:d,inputComponent:h,multiline:m,ref:n,type:g,...p,classes:_})});mI.muiName="Input";const gI=mI;function fB(e){return Je("MuiFormControl",e)}Ze("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const hB=e=>{const{classes:t,margin:n,fullWidth:r}=e,i={root:["root",n!=="none"&&`margin${xe(n)}`,r&&"fullWidth"]};return ot(i,fB,t)},pB=fe("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>({...t.root,...t[`margin${xe(e.margin)}`],...e.fullWidth&&t.fullWidth})})(({ownerState:e})=>({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top",...e.margin==="normal"&&{marginTop:16,marginBottom:8},...e.margin==="dense"&&{marginTop:8,marginBottom:4},...e.fullWidth&&{width:"100%"}})),mB=w.forwardRef(function(t,n){const r=st({props:t,name:"MuiFormControl"}),{children:i,className:o,color:s="primary",component:a="div",disabled:l=!1,error:c=!1,focused:u,fullWidth:d=!1,hiddenLabel:f=!1,margin:h="none",required:m=!1,size:y="medium",variant:S="outlined",...g}=r,p={...r,color:s,component:a,disabled:l,error:c,fullWidth:d,hiddenLabel:f,margin:h,required:m,size:y,variant:S},v=hB(p),[_,C]=w.useState(()=>{let V=!1;return i&&w.Children.forEach(i,F=>{if(!Hh(F,["Input","Select"]))return;const $=Hh(F,["Select"])?F.props.input:F;$&&FU($.props)&&(V=!0)}),V}),[k,E]=w.useState(()=>{let V=!1;return i&&w.Children.forEach(i,F=>{Hh(F,["Input","Select"])&&(gd(F.props,!0)||gd(F.props.inputProps,!0))&&(V=!0)}),V}),[I,N]=w.useState(!1);l&&I&&N(!1);const T=u!==void 0&&!l?u:I;let W;const K=w.useMemo(()=>({adornedStart:_,setAdornedStart:C,color:s,disabled:l,error:c,filled:k,focused:T,fullWidth:d,hiddenLabel:f,size:y,onBlur:()=>{N(!1)},onEmpty:()=>{E(!1)},onFilled:()=>{E(!0)},onFocus:()=>{N(!0)},registerEffect:W,required:m,variant:S}),[_,s,l,c,k,T,d,f,W,m,y,S]);return b(Ff.Provider,{value:K,children:b(pB,{as:a,ownerState:p,className:be(v.root,o),ref:n,...g,children:i})})}),gB=mB;function vB(e){return Je("MuiFormHelperText",e)}const yB=Ze("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),Aw=yB;var Nw;const _B=e=>{const{classes:t,contained:n,size:r,disabled:i,error:o,filled:s,focused:a,required:l}=e,c={root:["root",i&&"disabled",o&&"error",r&&`size${xe(r)}`,n&&"contained",a&&"focused",s&&"filled",l&&"required"]};return ot(c,vB,t)},wB=fe("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.size&&t[`size${xe(n.size)}`],n.contained&&t.contained,n.filled&&t.filled]}})(({theme:e,ownerState:t})=>({color:(e.vars||e).palette.text.secondary,...e.typography.caption,textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${Aw.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${Aw.error}`]:{color:(e.vars||e).palette.error.main},...t.size==="small"&&{marginTop:4},...t.contained&&{marginLeft:14,marginRight:14}})),bB=w.forwardRef(function(t,n){const r=st({props:t,name:"MuiFormHelperText"}),{children:i,className:o,component:s="p",disabled:a,error:l,filled:c,focused:u,margin:d,required:f,variant:h,...m}=r,y=uo(),S=$s({props:r,muiFormControl:y,states:["variant","size","disabled","error","filled","focused","required"]}),g={...r,component:s,contained:S.variant==="filled"||S.variant==="outlined",variant:S.variant,size:S.size,disabled:S.disabled,error:S.error,filled:S.filled,focused:S.focused,required:S.required},p=_B(g);return b(wB,{as:s,ownerState:g,className:be(p.root,o),ref:n,...m,children:i===" "?Nw||(Nw=b("span",{className:"notranslate",children:"​"})):i})}),SB=bB;function CB(e){return Je("MuiFormLabel",e)}const EB=Ze("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),Oa=EB,kB=e=>{const{classes:t,color:n,focused:r,disabled:i,error:o,filled:s,required:a}=e,l={root:["root",`color${xe(n)}`,i&&"disabled",o&&"error",s&&"filled",r&&"focused",a&&"required"],asterisk:["asterisk",o&&"error"]};return ot(l,CB,t)},xB=fe("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},t)=>({...t.root,...e.color==="secondary"&&t.colorSecondary,...e.filled&&t.filled})})(({theme:e,ownerState:t})=>({color:(e.vars||e).palette.text.secondary,...e.typography.body1,lineHeight:"1.4375em",padding:0,position:"relative",[`&.${Oa.focused}`]:{color:(e.vars||e).palette[t.color].main},[`&.${Oa.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${Oa.error}`]:{color:(e.vars||e).palette.error.main}})),IB=fe("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${Oa.error}`]:{color:(e.vars||e).palette.error.main}})),TB=w.forwardRef(function(t,n){const r=st({props:t,name:"MuiFormLabel"}),{children:i,className:o,color:s,component:a="label",disabled:l,error:c,filled:u,focused:d,required:f,...h}=r,m=uo(),y=$s({props:r,muiFormControl:m,states:["color","required","focused","disabled","error","filled"]}),S={...r,color:y.color||"primary",component:a,disabled:y.disabled,error:y.error,filled:y.filled,focused:y.focused,required:y.required},g=kB(S);return j(xB,{as:a,ownerState:S,className:be(g.root,o),ref:n,...h,children:[i,y.required&&j(IB,{ownerState:S,"aria-hidden":!0,className:g.asterisk,children:[" ","*"]})]})}),RB=TB;function Km(e){return`scale(${e}, ${e**2})`}const PB={entering:{opacity:1,transform:Km(1)},entered:{opacity:1,transform:"none"}},Yh=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),vI=w.forwardRef(function(t,n){const{addEndListener:r,appear:i=!0,children:o,easing:s,in:a,onEnter:l,onEntered:c,onEntering:u,onExit:d,onExited:f,onExiting:h,style:m,timeout:y="auto",TransitionComponent:S=fI,...g}=t,p=w.useRef(),v=w.useRef(),_=Cy(),C=w.useRef(null),k=en(C,o.ref,n),E=$=>J=>{if($){const se=C.current;J===void 0?$(se):$(se,J)}},I=E(u),N=E(($,J)=>{hI($);const{duration:se,delay:R,easing:U}=md({style:m,timeout:y,easing:s},{mode:"enter"});let O;y==="auto"?(O=_.transitions.getAutoHeightDuration($.clientHeight),v.current=O):O=se,$.style.transition=[_.transitions.create("opacity",{duration:O,delay:R}),_.transitions.create("transform",{duration:Yh?O:O*.666,delay:R,easing:U})].join(","),l&&l($,J)}),T=E(c),W=E(h),K=E($=>{const{duration:J,delay:se,easing:R}=md({style:m,timeout:y,easing:s},{mode:"exit"});let U;y==="auto"?(U=_.transitions.getAutoHeightDuration($.clientHeight),v.current=U):U=J,$.style.transition=[_.transitions.create("opacity",{duration:U,delay:se}),_.transitions.create("transform",{duration:Yh?U:U*.666,delay:Yh?se:se||U*.333,easing:R})].join(","),$.style.opacity=0,$.style.transform=Km(.75),d&&d($)}),V=E(f),F=$=>{y==="auto"&&(p.current=setTimeout($,v.current||0)),r&&r(C.current,$)};return w.useEffect(()=>()=>{clearTimeout(p.current)},[]),b(S,{appear:i,in:a,nodeRef:C,onEnter:N,onEntered:T,onEntering:I,onExit:K,onExited:V,onExiting:W,addEndListener:F,timeout:y==="auto"?null:y,...g,children:($,J)=>w.cloneElement(o,{style:{opacity:0,transform:Km(.75),visibility:$==="exited"&&!a?"hidden":void 0,...PB[$],...m,...o.props.style},ref:k,...J})})});vI.muiSupportAuto=!0;const AB=vI,NB=e=>{const{classes:t,disableUnderline:n}=e,i=ot({root:["root",!n&&"underline"],input:["input"]},HU,t);return{...t,...i}},OB=fe(Bf,{shouldForwardProp:e=>vi(e)||e==="classes",name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...zf(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{let r=e.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return e.vars&&(r=`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),{position:"relative",...t.formControl&&{"label + &":{marginTop:16}},...!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(e.vars||e).palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${ea.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${ea.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}},"&:before":{borderBottom:`1px solid ${r}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${ea.disabled}, .${ea.error}):before`]:{borderBottom:`2px solid ${(e.vars||e).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${r}`}},[`&.${ea.disabled}:before`]:{borderBottomStyle:"dotted"}}}}),MB=fe(jf,{name:"MuiInput",slot:"Input",overridesResolver:Uf})({}),yI=w.forwardRef(function(t,n){var r,i,o,s;const a=st({props:t,name:"MuiInput"}),{disableUnderline:l,components:c={},componentsProps:u,fullWidth:d=!1,inputComponent:f="input",multiline:h=!1,slotProps:m,slots:y={},type:S="text",...g}=a,p=NB(a),_={root:{ownerState:{disableUnderline:l}}},C=m??u?Cn(m??u,_):_,k=(r=(i=y.root)!=null?i:c.Root)!=null?r:OB,E=(o=(s=y.input)!=null?s:c.Input)!=null?o:MB;return b(Ry,{slots:{root:k,input:E},slotProps:C,fullWidth:d,inputComponent:f,multiline:h,ref:n,type:S,...g,classes:p})});yI.muiName="Input";const _I=yI;function LB(e){return Je("MuiInputAdornment",e)}const DB=Ze("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),Ow=DB;var Mw;const $B=(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${xe(n.position)}`],n.disablePointerEvents===!0&&t.disablePointerEvents,t[n.variant]]},FB=e=>{const{classes:t,disablePointerEvents:n,hiddenLabel:r,position:i,size:o,variant:s}=e,a={root:["root",n&&"disablePointerEvents",i&&`position${xe(i)}`,s,r&&"hiddenLabel",o&&`size${xe(o)}`]};return ot(a,LB,t)},zB=fe("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:$B})(({theme:e,ownerState:t})=>({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active,...t.variant==="filled"&&{[`&.${Ow.positionStart}&:not(.${Ow.hiddenLabel})`]:{marginTop:16}},...t.position==="start"&&{marginRight:8},...t.position==="end"&&{marginLeft:8},...t.disablePointerEvents===!0&&{pointerEvents:"none"}})),UB=w.forwardRef(function(t,n){const r=st({props:t,name:"MuiInputAdornment"}),{children:i,className:o,component:s="div",disablePointerEvents:a=!1,disableTypography:l=!1,position:c,variant:u,...d}=r,f=uo()||{};let h=u;u&&f.variant,f&&!h&&(h=f.variant);const m={...r,hiddenLabel:f.hiddenLabel,size:f.size,disablePointerEvents:a,position:c,variant:h},y=FB(m);return b(Ff.Provider,{value:null,children:b(zB,{as:s,ownerState:m,className:be(y.root,o),ref:n,...d,children:typeof i=="string"&&!l?b(LU,{color:"text.secondary",children:i}):j(w.Fragment,{children:[c==="start"?Mw||(Mw=b("span",{className:"notranslate",children:"​"})):null,i]})})})}),BB=UB;function jB(e){return Je("MuiInputLabel",e)}Ze("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const WB=e=>{const{classes:t,formControl:n,size:r,shrink:i,disableAnimation:o,variant:s,required:a}=e,c=ot({root:["root",n&&"formControl",!o&&"animated",i&&"shrink",r==="small"&&"sizeSmall",s],asterisk:[a&&"asterisk"]},jB,t);return{...t,...c}},HB=fe(RB,{shouldForwardProp:e=>vi(e)||e==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${Oa.asterisk}`]:t.asterisk},t.root,n.formControl&&t.formControl,n.size==="small"&&t.sizeSmall,n.shrink&&t.shrink,!n.disableAnimation&&t.animated,t[n.variant]]}})(({theme:e,ownerState:t})=>({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",...t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},...t.size==="small"&&{transform:"translate(0, 17px) scale(1)"},...t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},...!t.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},...t.variant==="filled"&&{zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)",...t.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},...t.shrink&&{userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)",...t.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"}}},...t.variant==="outlined"&&{zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)",...t.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},...t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}}})),VB=w.forwardRef(function(t,n){const r=st({name:"MuiInputLabel",props:t}),{disableAnimation:i=!1,margin:o,shrink:s,variant:a,className:l,...c}=r,u=uo();let d=s;typeof d>"u"&&u&&(d=u.filled||u.focused||u.adornedStart);const f=$s({props:r,muiFormControl:u,states:["size","variant","required"]}),h={...r,disableAnimation:i,formControl:u,shrink:d,size:f.size,variant:f.variant,required:f.required},m=WB(h);return b(HB,{"data-shrink":d,ownerState:h,ref:n,className:be(m.root,l),...c,classes:m})}),qB=VB,GB=w.createContext({}),KB=GB;function YB(e){return Je("MuiList",e)}Ze("MuiList",["root","padding","dense","subheader"]);const QB=e=>{const{classes:t,disablePadding:n,dense:r,subheader:i}=e;return ot({root:["root",!n&&"padding",r&&"dense",i&&"subheader"]},YB,t)},XB=fe("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>({listStyle:"none",margin:0,padding:0,position:"relative",...!e.disablePadding&&{paddingTop:8,paddingBottom:8},...e.subheader&&{paddingTop:0}})),JB=w.forwardRef(function(t,n){const r=st({props:t,name:"MuiList"}),{children:i,className:o,component:s="ul",dense:a=!1,disablePadding:l=!1,subheader:c,...u}=r,d=w.useMemo(()=>({dense:a}),[a]),f={...r,component:s,dense:a,disablePadding:l},h=QB(f);return b(KB.Provider,{value:d,children:j(XB,{as:s,className:be(h.root,o),ref:n,ownerState:f,...u,children:[c,i]})})}),ZB=JB;function Qh(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function Lw(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function wI(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function ta(e,t,n,r,i,o){let s=!1,a=i(e,t,t?n:!1);for(;a;){if(a===e.firstChild){if(s)return!1;s=!0}const l=r?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!wI(a,o)||l)a=i(e,a,n);else return a.focus(),!0}return!1}const e7=w.forwardRef(function(t,n){const{actions:r,autoFocus:i=!1,autoFocusItem:o=!1,children:s,className:a,disabledItemsFocusable:l=!1,disableListWrap:c=!1,onKeyDown:u,variant:d="selectedMenu",...f}=t,h=w.useRef(null),m=w.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});ys(()=>{i&&h.current.focus()},[i]),w.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(v,_)=>{const C=!h.current.style.width;if(v.clientHeight<h.current.clientHeight&&C){const k=`${jx(cn(v))}px`;h.current.style[_.direction==="rtl"?"paddingLeft":"paddingRight"]=k,h.current.style.width=`calc(100% + ${k})`}return h.current}}),[]);const y=v=>{const _=h.current,C=v.key,k=cn(_).activeElement;if(C==="ArrowDown")v.preventDefault(),ta(_,k,c,l,Qh);else if(C==="ArrowUp")v.preventDefault(),ta(_,k,c,l,Lw);else if(C==="Home")v.preventDefault(),ta(_,null,c,l,Qh);else if(C==="End")v.preventDefault(),ta(_,null,c,l,Lw);else if(C.length===1){const E=m.current,I=C.toLowerCase(),N=performance.now();E.keys.length>0&&(N-E.lastTime>500?(E.keys=[],E.repeating=!0,E.previousKeyMatched=!0):E.repeating&&I!==E.keys[0]&&(E.repeating=!1)),E.lastTime=N,E.keys.push(I);const T=k&&!E.repeating&&wI(k,E);E.previousKeyMatched&&(T||ta(_,k,!1,l,Qh,E))?v.preventDefault():E.previousKeyMatched=!1}u&&u(v)},S=en(h,n);let g=-1;w.Children.forEach(s,(v,_)=>{w.isValidElement(v)&&(v.props.disabled||(d==="selectedMenu"&&v.props.selected||g===-1)&&(g=_),g===_&&(v.props.disabled||v.props.muiSkipListHighlight||v.type.muiSkipListHighlight)&&(g+=1,g>=s.length&&(g=-1)))});const p=w.Children.map(s,(v,_)=>{if(_===g){const C={};return o&&(C.autoFocus=!0),v.props.tabIndex===void 0&&d==="selectedMenu"&&(C.tabIndex=0),w.cloneElement(v,C)}return v});return b(ZB,{role:"menu",ref:S,className:a,onKeyDown:y,tabIndex:i?0:-1,...f,children:p})}),t7=e7;function n7(e){return Je("MuiPopover",e)}Ze("MuiPopover",["root","paper"]);function Dw(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function $w(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Fw(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Xh(e){return typeof e=="function"?e():e}const r7=e=>{const{classes:t}=e;return ot({root:["root"],paper:["paper"]},n7,t)},i7=fe(lB,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),o7=fe(pI,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),s7=w.forwardRef(function(t,n){const r=st({props:t,name:"MuiPopover"}),{action:i,anchorEl:o,anchorOrigin:s={vertical:"top",horizontal:"left"},anchorPosition:a,anchorReference:l="anchorEl",children:c,className:u,container:d,elevation:f=8,marginThreshold:h=16,open:m,PaperProps:y={},transformOrigin:S={vertical:"top",horizontal:"left"},TransitionComponent:g=AB,transitionDuration:p="auto",TransitionProps:{onEntering:v,..._}={},...C}=r,k=w.useRef(),E=en(k,y.ref),I={...r,anchorOrigin:s,anchorReference:l,elevation:f,marginThreshold:h,PaperProps:y,transformOrigin:S,TransitionComponent:g,transitionDuration:p,TransitionProps:_},N=r7(I),T=w.useCallback(()=>{if(l==="anchorPosition")return a;const O=Xh(o),P=(O&&O.nodeType===1?O:cn(k.current).body).getBoundingClientRect();return{top:P.top+Dw(P,s.vertical),left:P.left+$w(P,s.horizontal)}},[o,s.horizontal,s.vertical,a,l]),W=w.useCallback(O=>({vertical:Dw(O,S.vertical),horizontal:$w(O,S.horizontal)}),[S.horizontal,S.vertical]),K=w.useCallback(O=>{const X={width:O.offsetWidth,height:O.offsetHeight},P=W(X);if(l==="none")return{top:null,left:null,transformOrigin:Fw(P)};const M=T();let A=M.top-P.vertical,B=M.left-P.horizontal;const x=A+X.height,ie=B+X.width,L=to(Xh(o)),pe=L.innerHeight-h,te=L.innerWidth-h;if(A<h){const oe=A-h;A-=oe,P.vertical+=oe}else if(x>pe){const oe=x-pe;A-=oe,P.vertical+=oe}if(B<h){const oe=B-h;B-=oe,P.horizontal+=oe}else if(ie>te){const oe=ie-te;B-=oe,P.horizontal+=oe}return{top:`${Math.round(A)}px`,left:`${Math.round(B)}px`,transformOrigin:Fw(P)}},[o,l,T,W,h]),[V,F]=w.useState(m),$=w.useCallback(()=>{const O=k.current;if(!O)return;const X=K(O);X.top!==null&&(O.style.top=X.top),X.left!==null&&(O.style.left=X.left),O.style.transformOrigin=X.transformOrigin,F(!0)},[K]),J=(O,X)=>{v&&v(O,X),$()},se=()=>{F(!1)};w.useEffect(()=>{m&&$()}),w.useImperativeHandle(i,()=>m?{updatePosition:()=>{$()}}:null,[m,$]),w.useEffect(()=>{if(!m)return;const O=Bx(()=>{$()}),X=to(o);return X.addEventListener("resize",O),()=>{O.clear(),X.removeEventListener("resize",O)}},[o,m,$]);let R=p;p==="auto"&&!g.muiSupportAuto&&(R=void 0);const U=d||(o?cn(Xh(o)).body:void 0);return b(i7,{BackdropProps:{invisible:!0},className:be(N.root,u),container:U,open:m,ref:n,ownerState:I,...C,children:b(g,{appear:!0,in:m,onEntering:J,onExited:se,timeout:R,..._,children:b(o7,{elevation:f,...y,ref:E,className:be(N.paper,y.className),...V?void 0:{style:{...y.style,opacity:0}},ownerState:I,children:c})})})}),a7=s7;function l7(e){return Je("MuiMenu",e)}Ze("MuiMenu",["root","paper","list"]);const c7={vertical:"top",horizontal:"right"},u7={vertical:"top",horizontal:"left"},d7=e=>{const{classes:t}=e;return ot({root:["root"],paper:["paper"],list:["list"]},l7,t)},f7=fe(a7,{shouldForwardProp:e=>vi(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),h7=fe(pI,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),p7=fe(t7,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),m7=w.forwardRef(function(t,n){const r=st({props:t,name:"MuiMenu"}),{autoFocus:i=!0,children:o,disableAutoFocusItem:s=!1,MenuListProps:a={},onClose:l,open:c,PaperProps:u={},PopoverClasses:d,transitionDuration:f="auto",TransitionProps:{onEntering:h,...m}={},variant:y="selectedMenu",...S}=r,g=Cy(),p=g.direction==="rtl",v={...r,autoFocus:i,disableAutoFocusItem:s,MenuListProps:a,onEntering:h,PaperProps:u,transitionDuration:f,TransitionProps:m,variant:y},_=d7(v),C=i&&!s&&c,k=w.useRef(null),E=(T,W)=>{k.current&&k.current.adjustStyleForScrollbar(T,g),h&&h(T,W)},I=T=>{T.key==="Tab"&&(T.preventDefault(),l&&l(T,"tabKeyDown"))};let N=-1;return w.Children.map(o,(T,W)=>{w.isValidElement(T)&&(T.props.disabled||(y==="selectedMenu"&&T.props.selected||N===-1)&&(N=W))}),b(f7,{onClose:l,anchorOrigin:{vertical:"bottom",horizontal:p?"right":"left"},transformOrigin:p?c7:u7,PaperProps:{as:h7,...u,classes:{...u.classes,root:_.paper}},className:_.root,open:c,ref:n,transitionDuration:f,TransitionProps:{onEntering:E,...m},ownerState:v,...S,classes:d,children:b(p7,{onKeyDown:I,actions:k,autoFocus:i&&(N===-1||s),autoFocusItem:C,variant:y,...a,className:be(_.list,a.className),children:o})})}),g7=m7;function v7(e){return Je("MuiNativeSelect",e)}const y7=Ze("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),Py=y7,_7=e=>{const{classes:t,variant:n,disabled:r,multiple:i,open:o,error:s}=e,a={select:["select",n,r&&"disabled",i&&"multiple",s&&"error"],icon:["icon",`icon${xe(n)}`,o&&"iconOpen",r&&"disabled"]};return ot(a,v7,t)},bI=({ownerState:e,theme:t})=>({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":{...t.vars?{backgroundColor:`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:t.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},borderRadius:0},"&::-ms-expand":{display:"none"},[`&.${Py.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(t.vars||t).palette.background.paper},"&&&":{paddingRight:24,minWidth:16},...e.variant==="filled"&&{"&&&":{paddingRight:32}},...e.variant==="outlined"&&{borderRadius:(t.vars||t).shape.borderRadius,"&:focus":{borderRadius:(t.vars||t).shape.borderRadius},"&&&":{paddingRight:32}}}),w7=fe("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:vi,overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.select,t[n.variant],n.error&&t.error,{[`&.${Py.multiple}`]:t.multiple}]}})(bI),SI=({ownerState:e,theme:t})=>({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(t.vars||t).palette.action.active,[`&.${Py.disabled}`]:{color:(t.vars||t).palette.action.disabled},...e.open&&{transform:"rotate(180deg)"},...e.variant==="filled"&&{right:7},...e.variant==="outlined"&&{right:7}}),b7=fe("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${xe(n.variant)}`],n.open&&t.iconOpen]}})(SI),S7=w.forwardRef(function(t,n){const{className:r,disabled:i,error:o,IconComponent:s,inputRef:a,variant:l="standard",...c}=t,u={...t,disabled:i,variant:l,error:o},d=_7(u);return j(w.Fragment,{children:[b(w7,{ownerState:u,className:be(d.select,r),disabled:i,ref:a||n,...c}),t.multiple?null:b(b7,{as:s,ownerState:u,className:d.icon})]})}),C7=S7;var zw;const E7=fe("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),k7=fe("legend")(({ownerState:e,theme:t})=>({float:"unset",width:"auto",overflow:"hidden",...!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},...e.withLabel&&{display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"},...e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})}}}));function x7(e){const{children:t,classes:n,className:r,label:i,notched:o,...s}=e,a=i!=null&&i!=="",l={...e,notched:o,withLabel:a};return b(E7,{"aria-hidden":!0,className:r,ownerState:l,...s,children:b(k7,{ownerState:l,children:a?b("span",{children:i}):zw||(zw=b("span",{className:"notranslate",children:"​"}))})})}const I7=e=>{const{classes:t}=e,r=ot({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},qU,t);return{...t,...r}},T7=fe(Bf,{shouldForwardProp:e=>vi(e)||e==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:zf})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{position:"relative",borderRadius:(e.vars||e).shape.borderRadius,[`&:hover .${Nr.notchedOutline}`]:{borderColor:(e.vars||e).palette.text.primary},"@media (hover: none)":{[`&:hover .${Nr.notchedOutline}`]:{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:n}},[`&.${Nr.focused} .${Nr.notchedOutline}`]:{borderColor:(e.vars||e).palette[t.color].main,borderWidth:2},[`&.${Nr.error} .${Nr.notchedOutline}`]:{borderColor:(e.vars||e).palette.error.main},[`&.${Nr.disabled} .${Nr.notchedOutline}`]:{borderColor:(e.vars||e).palette.action.disabled},...t.startAdornment&&{paddingLeft:14},...t.endAdornment&&{paddingRight:14},...t.multiline&&{padding:"16.5px 14px",...t.size==="small"&&{padding:"8.5px 14px"}}}}),R7=fe(x7,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(({theme:e})=>{const t=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}}),P7=fe(jf,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:Uf})(({theme:e,ownerState:t})=>({padding:"16.5px 14px",...!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},...e.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},...t.size==="small"&&{padding:"8.5px 14px"},...t.multiline&&{padding:0},...t.startAdornment&&{paddingLeft:0},...t.endAdornment&&{paddingRight:0}})),CI=w.forwardRef(function(t,n){var r,i,o,s,a;const l=st({props:t,name:"MuiOutlinedInput"}),{components:c={},fullWidth:u=!1,inputComponent:d="input",label:f,multiline:h=!1,notched:m,slots:y={},type:S="text",...g}=l,p=I7(l),v=uo(),_=$s({props:l,muiFormControl:v,states:["required"]}),C={...l,color:_.color||"primary",disabled:_.disabled,error:_.error,focused:_.focused,formControl:v,fullWidth:u,hiddenLabel:_.hiddenLabel,multiline:h,size:_.size,type:S},k=(r=(i=y.root)!=null?i:c.Root)!=null?r:T7,E=(o=(s=y.input)!=null?s:c.Input)!=null?o:P7;return b(Ry,{slots:{root:k,input:E},renderSuffix:I=>b(R7,{ownerState:C,className:p.notchedOutline,label:f!=null&&f!==""&&_.required?a||(a=j(w.Fragment,{children:[f," ","*"]})):f,notched:typeof m<"u"?m:!!(I.startAdornment||I.filled||I.focused)}),fullWidth:u,inputComponent:d,multiline:h,ref:n,type:S,...g,classes:{...p,notchedOutline:null}})});CI.muiName="Input";const EI=CI;function A7(e){return Je("MuiSelect",e)}const N7=Ze("MuiSelect",["select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),na=N7;var Uw;const O7=fe("div",{name:"MuiSelect",slot:"Select",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`&.${na.select}`]:t.select},{[`&.${na.select}`]:t[n.variant]},{[`&.${na.error}`]:t.error},{[`&.${na.multiple}`]:t.multiple}]}})(bI,{[`&.${na.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),M7=fe("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${xe(n.variant)}`],n.open&&t.iconOpen]}})(SI),L7=fe("input",{shouldForwardProp:e=>a8(e)&&e!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(e,t)=>t.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function Bw(e,t){return typeof t=="object"&&t!==null?e===t:String(e)===String(t)}function D7(e){return e==null||typeof e=="string"&&!e.trim()}const $7=e=>{const{classes:t,variant:n,disabled:r,multiple:i,open:o,error:s}=e,a={select:["select",n,r&&"disabled",i&&"multiple",s&&"error"],icon:["icon",`icon${xe(n)}`,o&&"iconOpen",r&&"disabled"],nativeInput:["nativeInput"]};return ot(a,A7,t)},F7=w.forwardRef(function(t,n){const{"aria-describedby":r,"aria-label":i,autoFocus:o,autoWidth:s,children:a,className:l,defaultOpen:c,defaultValue:u,disabled:d,displayEmpty:f,error:h=!1,IconComponent:m,inputRef:y,labelId:S,MenuProps:g={},multiple:p,name:v,onBlur:_,onChange:C,onClose:k,onFocus:E,onOpen:I,open:N,readOnly:T,renderValue:W,SelectDisplayProps:K={},tabIndex:V,type:F,value:$,variant:J="standard",...se}=t,[R,U]=Y_({controlled:$,default:u,name:"Select"}),[O,X]=Y_({controlled:N,default:c,name:"Select"}),P=w.useRef(null),M=w.useRef(null),[A,B]=w.useState(null),{current:x}=w.useRef(N!=null),[ie,L]=w.useState(),pe=en(n,y),te=w.useCallback(ne=>{M.current=ne,ne&&B(ne)},[]),oe=A==null?void 0:A.parentNode;w.useImperativeHandle(pe,()=>({focus:()=>{M.current.focus()},node:P.current,value:R}),[R]),w.useEffect(()=>{c&&O&&A&&!x&&(L(s?null:oe.clientWidth),M.current.focus())},[A,s]),w.useEffect(()=>{o&&M.current.focus()},[o]),w.useEffect(()=>{if(!S)return;const ne=cn(M.current).getElementById(S);if(ne){const ae=()=>{getSelection().isCollapsed&&M.current.focus()};return ne.addEventListener("click",ae),()=>{ne.removeEventListener("click",ae)}}},[S]);const Z=(ne,ae)=>{ne?I&&I(ae):k&&k(ae),x||(L(s?null:oe.clientWidth),X(ne))},Ae=ne=>{ne.button===0&&(ne.preventDefault(),M.current.focus(),Z(!0,ne))},We=ne=>{Z(!1,ne)},Y=w.Children.toArray(a),_e=ne=>{const ae=Y.find(Ke=>Ke.props.value===ne.target.value);ae!==void 0&&(U(ae.props.value),C&&C(ne,ae))},re=ne=>ae=>{let Ke;if(ae.currentTarget.hasAttribute("tabindex")){if(p){Ke=Array.isArray(R)?R.slice():[];const jn=R.indexOf(ne.props.value);jn===-1?Ke.push(ne.props.value):Ke.splice(jn,1)}else Ke=ne.props.value;if(ne.props.onClick&&ne.props.onClick(ae),R!==Ke&&(U(Ke),C)){const jn=ae.nativeEvent||ae,My=new jn.constructor(jn.type,jn);Object.defineProperty(My,"target",{writable:!0,value:{value:Ke,name:v}}),C(My,ne)}p||Z(!1,ae)}},$e=ne=>{T||[" ","ArrowUp","ArrowDown","Enter"].indexOf(ne.key)!==-1&&(ne.preventDefault(),Z(!0,ne))},gt=A!==null&&O,Ge=ne=>{!gt&&_&&(Object.defineProperty(ne,"target",{writable:!0,value:{value:R,name:v}}),_(ne))};delete se["aria-invalid"];let Ct,jt;const lt=[];let ee=!1;(gd({value:R})||f)&&(W?Ct=W(R):ee=!0);const me=Y.map(ne=>{if(!w.isValidElement(ne))return null;let ae;if(p){if(!Array.isArray(R))throw new Error(hi(2));ae=R.some(Ke=>Bw(Ke,ne.props.value)),ae&&ee&&lt.push(ne.props.children)}else ae=Bw(R,ne.props.value),ae&&ee&&(jt=ne.props.children);return w.cloneElement(ne,{"aria-selected":ae?"true":"false",onClick:re(ne),onKeyUp:Ke=>{Ke.key===" "&&Ke.preventDefault(),ne.props.onKeyUp&&ne.props.onKeyUp(Ke)},role:"option",selected:ae,value:void 0,"data-value":ne.props.value})});ee&&(p?lt.length===0?Ct=null:Ct=lt.reduce((ne,ae,Ke)=>(ne.push(ae),Ke<lt.length-1&&ne.push(", "),ne),[]):Ct=jt);let Wt=ie;!s&&x&&A&&(Wt=oe.clientWidth);let Ht;typeof V<"u"?Ht=V:Ht=d?null:0;const Et=K.id||(v?`mui-component-select-${v}`:void 0),rr={...t,variant:J,value:R,open:gt,error:h},le=$7(rr);return j(w.Fragment,{children:[b(O7,{ref:te,tabIndex:Ht,role:"button","aria-disabled":d?"true":void 0,"aria-expanded":gt?"true":"false","aria-haspopup":"listbox","aria-label":i,"aria-labelledby":[S,Et].filter(Boolean).join(" ")||void 0,"aria-describedby":r,onKeyDown:$e,onMouseDown:d||T?null:Ae,onBlur:Ge,onFocus:E,...K,ownerState:rr,className:be(K.className,le.select,l),id:Et,children:D7(Ct)?Uw||(Uw=b("span",{className:"notranslate",children:"​"})):Ct}),b(L7,{"aria-invalid":h,value:Array.isArray(R)?R.join(","):R,name:v,ref:P,"aria-hidden":!0,onChange:_e,tabIndex:-1,disabled:d,className:le.nativeInput,autoFocus:o,ownerState:rr,...se}),b(M7,{as:m,className:le.icon,ownerState:rr}),b(g7,{id:`menu-${v||""}`,anchorEl:oe,open:gt,onClose:We,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},...g,MenuListProps:{"aria-labelledby":S,role:"listbox",disableListWrap:!0,...g.MenuListProps},PaperProps:{...g.PaperProps,style:{minWidth:Wt,...g.PaperProps!=null?g.PaperProps.style:null}},children:me})]})}),z7=F7,U7=e=>{const{classes:t}=e;return t},Ay={name:"MuiSelect",overridesResolver:(e,t)=>t.root,shouldForwardProp:e=>vi(e)&&e!=="variant",slot:"Root"},B7=fe(_I,Ay)(""),j7=fe(EI,Ay)(""),W7=fe(gI,Ay)(""),kI=w.forwardRef(function(t,n){const r=st({name:"MuiSelect",props:t}),{autoWidth:i=!1,children:o,classes:s={},className:a,defaultOpen:l=!1,displayEmpty:c=!1,IconComponent:u=QU,id:d,input:f,inputProps:h,label:m,labelId:y,MenuProps:S,multiple:g=!1,native:p=!1,onClose:v,onOpen:_,open:C,renderValue:k,SelectDisplayProps:E,variant:I="outlined",...N}=r,T=p?C7:z7,W=uo(),K=$s({props:r,muiFormControl:W,states:["variant","error"]}),V=K.variant||I,F={...r,variant:V,classes:s},$=U7(F),J=f||{standard:b(B7,{ownerState:F}),outlined:b(j7,{label:m,ownerState:F}),filled:b(W7,{ownerState:F})}[V],se=en(n,J.ref);return b(w.Fragment,{children:w.cloneElement(J,{inputComponent:T,inputProps:{children:o,error:K.error,IconComponent:u,variant:V,type:void 0,multiple:g,...p?{id:d}:{autoWidth:i,defaultOpen:l,displayEmpty:c,labelId:y,MenuProps:S,onClose:v,onOpen:_,open:C,renderValue:k,SelectDisplayProps:{id:d,...E}},...h,classes:h?Cn($,h.classes):$,...f?f.props.inputProps:{}},...g&&p&&V==="outlined"?{notched:!0}:{},ref:se,className:be(J.props.className,a),...!f&&{variant:V},...N})})});kI.muiName="Select";const H7=kI;function V7(e){return Je("MuiTextField",e)}Ze("MuiTextField",["root"]);const q7={standard:_I,filled:gI,outlined:EI},G7=e=>{const{classes:t}=e;return ot({root:["root"]},V7,t)},K7=fe(gB,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Y7=w.forwardRef(function(t,n){const r=st({props:t,name:"MuiTextField"}),{autoComplete:i,autoFocus:o=!1,children:s,className:a,color:l="primary",defaultValue:c,disabled:u=!1,error:d=!1,FormHelperTextProps:f,fullWidth:h=!1,helperText:m,id:y,InputLabelProps:S,inputProps:g,InputProps:p,inputRef:v,label:_,maxRows:C,minRows:k,multiline:E=!1,name:I,onBlur:N,onChange:T,onClick:W,onFocus:K,placeholder:V,required:F=!1,rows:$,select:J=!1,SelectProps:se,type:R,value:U,variant:O="outlined",...X}=r,P={...r,autoFocus:o,color:l,disabled:u,error:d,fullWidth:h,multiline:E,required:F,select:J,variant:O},M=G7(P),A={};O==="outlined"&&(S&&typeof S.shrink<"u"&&(A.notched=S.shrink),A.label=_),J&&((!se||!se.native)&&(A.id=void 0),A["aria-describedby"]=void 0);const B=wF(y),x=m&&B?`${B}-helper-text`:void 0,ie=_&&B?`${B}-label`:void 0,L=q7[O],pe=b(L,{"aria-describedby":x,autoComplete:i,autoFocus:o,defaultValue:c,fullWidth:h,multiline:E,name:I,rows:$,maxRows:C,minRows:k,type:R,value:U,id:B,inputRef:v,onBlur:N,onChange:T,onFocus:K,onClick:W,placeholder:V,inputProps:g,...A,...p});return j(K7,{className:be(M.root,a),disabled:u,error:d,fullWidth:h,ref:n,required:F,color:l,variant:O,ownerState:P,...X,children:[_!=null&&_!==""&&b(qB,{htmlFor:B,id:ie,...S,children:_}),J?b(H7,{"aria-describedby":x,id:B,labelId:ie,value:U,input:pe,...se,children:s}):pe,m&&b(SB,{id:x,...f,children:m})]})}),Q7=Y7,X7=Ey(b("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility"),J7=Ey(b("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff"),jw=H(Q7)`
  && {
    ${e=>e.login?"margin-bottom: 20px; width: 80%;":"width: 80%; padding-bottom: 20px; padding-top: 10px;"}
  }
`,xI=({login:e,email:t,changeEmail:n,password:r,changePassword:i,showPassword:o,changeShowPassword:s})=>j(Mi,{children:[b(jw,{login:e,required:!0,id:e?"standard-basic":"outlined-basic",label:"Email",variant:e?"standard":"outlined",value:t,onChange:n}),b(jw,{login:e,required:!0,id:e?"standard-basic":"outlined-basic",label:"Password",variant:e?"standard":"outlined",value:r,onChange:i,type:o?"text":"password",InputProps:{endAdornment:b(BB,{position:"end",children:b(TU,{"aria-label":"toggle password visibility",onClick:s,children:o?b(X7,{}):b(J7,{})})})}})]}),Z7=b("p",{children:"This is why we require sign in."}),II=b("p",{children:"Terms of Service"}),TI=b("p",{children:"Privacy Policy"}),e9=b("p",{children:"This is why we require zip code."}),t9=b("p",{children:"This is why we ask for your birth sex."}),ec="0px 2px 4px rgba(0, 0, 0, 0.2)",tc="rgba(255, 255, 255, 0.8)",Ny="1px solid rgba(0, 0, 0, 0.12)",nc="#3a49ac",n9="#f2f2f2",r9="#b3b3b3",i9="#b3acaa",Oy="rgba(179, 172, 170, 0.5)",Sl="#1d2556",RI="#3a49ac",vd="rgba(58, 73, 172, 0.2)",PI=H.button`
  width: 80px;
  height: 40px;
  background-color: ${e=>e.isValid?nc:n9};
  color: ${e=>e.isValid?"white":r9};
  border: ${e=>e.isValid?"none":`1px solid ${i9}`};
  border-radius: 4px;
  cursor: ${e=>e.isValid?"pointer":"default"};
  text-transform: uppercase;
`,Ma=H.button`
  min-width: 80px;
  height: 40px;
  padding: 2px;
  background-color: ${Oy};
  color: ${Sl};
  border: 1px solid ${Sl};
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  margin-right: 10px;

  :hover {
    background-color: ${nc};
    color: white;
  }
`,yd=H.button`
  cursor: pointer;
  background: ${tc};
  font-size: 20px;
  font-weight: 300;
  text-transform: uppercase;
  color: ${Sl};
  height: ${e=>e.height||"60px"};
  width: 200px;
  padding: 10px 30px;
  margin: 0 auto;
  margin-right: 10px;
  border: ${Ny};
  box-shadow: ${ec};
  border-radius: 8px;
  transition: all 0.3s ease;
  ${e=>e.selected&&`
      border: 1px solid ${RI};
    `}
  background-color: ${e=>e.selected?vd:"white"};

  &:hover {
    background-color: ${vd};
    outline: none;
  }
`,AI=H.button`
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
    background-color: ${Oy};
  }

  ${e=>e.login&&`
      min-height: 40px;
      height: 40px;
      margin-top: 40px;
      margin-bottom: 10px;
      border-radius: 20px;
  `}
`,Jh=H.input`
  cursor: pointer;
  background: ${tc};
  font-size: 20px;
  font-weight: 300;
  color: black;
  width: 200px;
  height: 60px;
  padding: 10px 30px;
  margin-right: 10px;
  border: ${Ny};
  box-shadow: ${ec};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover,
  :focus {
    background-color: ${vd};
    outline: none;
  }
`,o9=H.p`
  text-align: center;
  font-size: 30px;
  font-weight: 300;
  padding-bottom: 10px;
`,s9=H.div`
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
`,a9=()=>{const{setAssessmentState:e}=w.useContext(dt),[t,n]=w.useState(""),[r,i]=w.useState(""),[o,s]=w.useState(!1),[a,l]=w.useState(!1);return j(oo,{image:"../../results.jpg",children:[b(Ls,{}),j(Es,{children:[j(SC,{login:!0,children:[b(o9,{children:"Login"}),b(xI,{login:!0,email:t,changeEmail:u=>n(u.target.value),password:r,changePassword:u=>i(u.target.value),showPassword:o,changeShowPassword:()=>s(!o)}),b(AI,{login:!0,onClick:async u=>{u.preventDefault();try{const f=(await lL(ax,t,r)).user}catch{alert("Username or password is incorrect");return}e("zipcode")},children:"Login"}),b(Xg,{onClick:()=>l(!0),children:"Why do we require this?"}),b(fi,{showModal:a,setShowModal:l,text:Z7}),j(s9,{children:[b("p",{children:"Or Sign Up Using"}),b("a",{onClick:()=>{e("signup")},children:"Sign up"})]})]}),b(bC,{children:b(Ma,{onClick:()=>{e("home")},children:"Back"})})]})]})},l9=H.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: 300;
  color: black;

  :hover {
    color: black;
    font-weight: 400;
  }
`,c9=H.p`
  text-align: center;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 0;
`,u9=H.p`
  padding-bottom: 20px;
`,d9=H.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  font-size: 12px;

  input[type='checkbox'] {
    margin-right: 10px;
    margin-left: 5px;
    transform: scale(1.2);
  }
`,f9=H.p`
  width: 80%;
  padding-top: 20px;
  padding-bottom: 15px;
`,Ww=H.a`
  color: black;
  text-decoration: underline;

  :hover {
    cursor: pointer;
    color: black;
  }
`,h9=()=>{const{setAssessmentState:e}=w.useContext(dt),[t,n]=w.useState(""),[r,i]=w.useState(""),[o,s]=w.useState(!1),[a,l]=w.useState(!1),[c,u]=w.useState(!1);return j(oo,{image:"../../results.jpg",children:[b(Ls,{}),b(Es,{children:j(SC,{login:!1,children:[b(c9,{children:"Sign Up For ConnectedSpine"}),j(u9,{children:["Create a free account or"," ",b(l9,{onClick:()=>{e("login")},children:"Log In"})]}),b(xI,{login:!1,email:t,changeEmail:f=>n(f.target.value),password:r,changePassword:f=>i(f.target.value),showPassword:o,changeShowPassword:()=>s(!o)}),j(d9,{children:[b("input",{type:"checkbox"}),b("span",{children:"I don't want to recieve emails about ConnectedSpine and related product and feature updates, and promotions from ConnectedSpine."})]}),j(f9,{children:["By creating an account, you agree to our"," ",b(Ww,{onClick:()=>l(!0),children:"Terms"})," and have read and acknowledged the"," ",b(Ww,{onClick:()=>u(!0),children:"Privacy Statement"}),"."]}),b(fi,{showModal:a,setShowModal:l,text:II}),b(fi,{showModal:c,setShowModal:u,text:TI}),b(AI,{login:!1,onClick:async f=>{f.preventDefault();try{const m=(await aL(ax,t,r)).user;console.log("New user created:",m)}catch(h){console.error(h)}e("zipcode")},children:"Sign Up"})]})})]})},p9=H.div`
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
`,m9=H.div`
  margin-top: 13vh;

  button {
    margin-top: 15px;
    text-align: center;
    text-transform: uppercase;
    width: 235px;
    height: 48px;
    background: ${tc};
    border: ${Ny};
    box-shadow: ${ec};
    border-radius: 4px;
    color: ${Sl};
  }

  p {
    margin-bottom: 0;
  }
`,g9=H.p`
  font-weight: 100;
`,v9=()=>{const{setAssessmentState:e}=w.useContext(dt);return j(oo,{image:"../../homepage.jpg",children:[b(Ls,{}),j(Es,{children:[j(p9,{children:[b("h1",{children:"We connect you to the care you need."}),b("p",{children:"ConnectedSpine uses the knowledge of spine care specialists to guide you to the right providers."})]}),j(m9,{children:[b(g9,{children:"Experiencing pain or discomfort in your back or neck?"}),b("p",{children:b(Go,{children:"Take our 5 min assessment."})}),b("button",{onClick:()=>{e("login")},children:"Start Assessment"})]})]})]})},y9="#979797",_9=H.h1`
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  max-width: 50%;
`,w9=H.form`
  margin-top: 30px;
  label {
    font-weight: 400;
  }
`,b9=H.div`
  margin: 10px 0;
  input {
    width: 227px;
    height: 45px;
    margin-right: 20px;
    padding-left: 10px;
    border: 1px solid ${y9};
    border-radius: 4px;

    ::placeholder {
      font-style: italic;
    }
  }
`;function S9(e){return/^\d{5}(-\d{4})?$/.test(e)}const C9=()=>{const{setAssessmentState:e}=w.useContext(dt),{answers:t,setAnswers:n}=w.useContext(dt),{isValid:r,setIsValid:i}=w.useContext(dt),[o,s]=w.useState(""),[a,l]=w.useState(!1),c=Dk().currentUser;if(!c)return b("div",{children:"Error"});console.log("USER",c);const u=f=>{const h=f.target.value;s(h),i(S9(h))},d=()=>{if(r){const f={...t,zipcode:o};n(f),e("questions"),i(!1)}};return w.useEffect(()=>{if(t.zipcode){const f=t.zipcode;s(f),i(!0)}},[]),j(oo,{image:"../../questions.png",children:[b(Ls,{}),j(Es,{children:[b(_9,{children:"Hi there! Before we begin, please enter your zipcode."}),j(w9,{children:[b("label",{children:"Zipcode"}),j(b9,{children:[b("input",{type:"text",placeholder:"Must be 5 digits",value:o,onChange:u}),b(PI,{onClick:d,isValid:r,disabled:!r,title:r?void 0:"Please enter a valid zip code",children:"Next"}),r?b(Mi,{}):b(Xc,{children:"* Please enter a valid zip code"})]})]}),b(Xg,{onClick:()=>l(!0),children:"Why do we ask this?"}),b(fi,{showModal:a,setShowModal:l,text:e9})]})]})},E9=H.div`
  padding: 0 30px;
`,k9=H.div`
  padding: 25px 0;
  line-height: 1.1em;

  p {
    margin-bottom: 20px;
  }
`,x9=H.span`
  display: flex;
  align-items: center;

  input[type='checkbox'] {
    margin-right: 10px;
    transform: scale(1.5);
  }
`,Hw=H.a`
  text-decoration-line: underline;
  cursor: pointer;
  color: black;
`,I9=()=>{const{isValid:e,setIsValid:t}=w.useContext(dt),[n,r]=w.useState(!1),[i,o]=w.useState(!1),[s,a]=w.useState(!1);function l(){t(!e),r(!0)}return j(E9,{children:[j("p",{children:["Before answering our questionnaire, please read the"," ",b(Go,{children:"Terms of Service"}),"."]}),j(k9,{children:[b("p",{children:"Remember that: "}),b("p",{children:"The results of this assessmenet are not a diagnosis. The assessment is for informational purposes and is not a qualified medical opinion."}),b("p",{children:"Do not use in emergencies. In case of health emergency, call your local emergency number immediately."}),b("p",{children:"Your data is safe. Information that you provide is anonymous and not shared with anyone."})]}),j(x9,{children:[b("label",{children:b("input",{type:"checkbox",checked:e,onChange:l})}),j("span",{children:["I have read and accept the"," ",b(Hw,{onClick:d=>{d.preventDefault(),o(!0)},children:b(Go,{children:"Terms of Service"})}),b(fi,{showModal:i,setShowModal:o,text:II})," and ",b(Hw,{onClick:d=>{d.preventDefault(),a(!0)},children:b(Go,{children:"Privacy Policy"})}),b(fi,{showModal:s,setShowModal:a,text:TI}),"."]})]}),b("br",{})]})};var NI={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_d=qe.createContext&&qe.createContext(NI),ii=globalThis&&globalThis.__assign||function(){return ii=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ii.apply(this,arguments)},T9=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function OI(e){return e&&e.map(function(t,n){return qe.createElement(t.tag,ii({key:n},t.attr),OI(t.child))})}function MI(e){return function(t){return qe.createElement(R9,ii({attr:ii({},e.attr)},t),OI(e.child))}}function R9(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=T9(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),qe.createElement("svg",ii({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:ii(ii({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&qe.createElement("title",null,o),e.children)};return _d!==void 0?qe.createElement(_d.Consumer,null,function(n){return t(n)}):t(NI)}function P9(e){return MI({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function A9(e){return MI({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(e)}const N9="#1d2556",Vw="#8992CD",O9=H.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,qw=H.button`
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
  color: ${N9};
  border: none;
  ${e=>e.selected&&`
      border: 1px solid ${RI};
    `}
  background-color: ${e=>e.selected?vd:tc};
`,M9=()=>{const{isValid:e,setIsValid:t}=w.useContext(dt),{selectedOptions:n,setSelectedOptions:r}=w.useContext(dt),{answers:i,setAnswers:o}=w.useContext(dt),[s,a]=w.useState(""),l=c=>{a(c),r(c)};return w.useEffect(()=>{console.log(`answers['identity']: ${i.identity}`),i.identity&&(s&&s!=i.identity?r(s):r(i.identity)),t(!!(s||n))},[s,t]),j(O9,{children:[b(_d.Provider,{value:{color:`${Vw}`,size:"50px"},children:b(qw,{selected:n==="myself",onClick:()=>l("myself"),children:j("div",{children:[b(P9,{}),"Myself"]})})}),b(_d.Provider,{value:{color:`${Vw}`,size:"70px"},children:b(qw,{selected:n==="others",onClick:()=>l("others"),children:j("div",{children:[b(A9,{}),"Someone Else"]})})})]})},L9=H.div`
  width: 70%;
  margin: -50px auto 0;
`,D9=H.div`
  margin-bottom: 15px;
`,$9=H.div`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
  margin-bottom: 20px;
`,$c=H.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 500;
`,F9=()=>{const{isValid:e,setIsValid:t}=w.useContext(dt),{selectedOptions:n,setSelectedOptions:r}=w.useContext(dt),{answers:i,setAnswers:o}=w.useContext(dt),[s,a]=w.useState(!1),[l,c]=w.useState(""),[u,d]=w.useState(""),[f,h]=w.useState(""),[m,y]=w.useState(""),S=_=>{c(_)},g=_=>{d(_.target.value)},p=_=>{h(_.target.value)},v=_=>{y(_.target.value)};return w.useEffect(()=>{if(l&&u&&f&&m?(r({sex:l,height:u,weight:f,age:m}),t(!0)):t(!1),i["basic-info"]){const _=i["basic-info"];l&&l!=_.sex?c(l):c(_.sex),u&&u!=_.height?d(u):d(_.height),f&&f!=_.weight?h(f):h(_.weight),m&m!=_.age?y(m):y(_.age)}},[l,u,f,m,t]),j(L9,{children:[j(D9,{children:[b($c,{children:"Sex (Assigned at birth)"}),j("div",{children:[b(yd,{selected:l==="male",onClick:()=>S("male"),children:"Male"}),b(yd,{selected:l==="female",onClick:()=>S("female"),children:"Female"})]})]}),b(Xg,{onClick:()=>a(!0),children:"Why do we ask this?"}),b(fi,{showModal:s,setShowModal:a,text:t9}),j($9,{children:[j("div",{children:[b($c,{children:"Height"}),b(Jh,{type:"text",placeholder:"ft in",value:u,onChange:g}),e?b(Mi,{}):b(Xc,{children:"* Please enter a valid height"})]}),j("div",{children:[b($c,{children:"Weight"}),b(Jh,{type:"text",placeholder:"lbs",value:f,onChange:p}),Number.isInteger(parseInt(f))&&parseInt(f)>0?b(Mi,{}):b(Xc,{children:"* Please enter a valid weight"})]})]}),j("div",{children:[b($c,{children:"Age"}),j("div",{children:[b(Jh,{type:"text",placeholder:"years",value:m,onChange:v}),Number.isInteger(parseInt(m))&&parseInt(m)>0?b(Mi,{}):b(Xc,{children:"* Please enter a valid age"})]})]})]})},de=[{section:1,section_name:"Basic Info",prompt:"Terms of Service",type:null,qId:"terms",index:0},{section:1,section_name:"Basic Info",prompt:"Who are you answering this questionaire for?",type:null,qId:"identity",index:1},{section:1,section_name:"Basic Info",prompt:"Let's get some basic info about you first.",type:null,qId:"basic-info",index:2},{section:1,section_name:"Basic Info",prompt:"What brings you here today?",options:["A new pain or sensation in the back and/or neck","Back and/or neck pain that has been chronic or occuring for some time","A potential emergency or urgent care visit"],type:"Multiselect",qId:"00",index:3},{section:1,section_name:"Basic Info",prompt:"Do any of the following apply?",options:["I have fallen recently","I lifted something heavy (moving, picking up children, weightligting, etc.","I was injured or hurt myself (in a sports-related activity or otherwise)","I was involved in motor vehicle accident","None of the above"],type:"Select",qId:"01",index:4},{section:1,section_name:"Basic Info",prompt:"Did your symptoms start after the incident?",options:["Yes","No","Not sure"],type:"Select",qId:"02",index:5},{section:2,section_name:"Symptoms",prompt:"How long have you been experiencing these symptoms?",options:["A few minutes","A few hours","A few days","Weeks","Month +"],type:"Select",qId:"03",index:6},{section:2,section_name:"Symptoms",prompt:"Choose the area(s) where you are feeling pain and/or discomfort.",options:["Neck","Upper Back","Middle Back","Lower Back"],type:"Multibutton",qId:"04",index:7},{section:2,section_name:"Symptoms",prompt:"Where are you feeling pain/discomfort in your lower back?",options:["ON THE LEFT","IN THE MIDDLE","ON THE RIGHT"],type:"Multibutton",qId:"05",index:8},{section:2,section_name:"Symptoms",prompt:"How would you describe the sensation you are feeling?",options:["SHARP PAIN","SHOOTING PAIN","NUMBNESS AND/OR TINGLING","DULL, ACHING PAIN","TIGHTNESS AND LIMITED MOVEMENT"],type:"Multibutton",qId:"06",index:9},{section:2,section_name:"Symptoms",prompt:"How do the symptoms change?",sub_questions:["Choose all that apply. The symptoms gets worse when I...","Choose all that apply. I get some relief from the symptoms when I..."],options:["STAND UP","SIT DOWN","LEAN FORWARD","LEAN BACK","AM MOVING","AM AT REST","NONE OF THE ABOVE"],type:"Multibutton",qId:"07",index:10},{section:2,section_name:"Symptoms",prompt:"How difficult have the symptoms made your day-to-day activites?",options:["Not at all difficult","Somewhat difficult","Very difficult","Extremely difficult"],type:"Select",qId:"08",index:11},{section:2,section_name:"Symptoms",prompt:"Regarding the shooting pain",sub_questions:["In which leg(s) do you feel it?"],options:["RIGHT","LEFT","BOTH"],type:"Selectbutton",qId:"06-SHOOTING-01",index:12},{section:2,section_name:"Symptoms",prompt:"Regarding the shooting pain",sub_questions:["Does it travel to your feet?","Is the pain there even when you are resting?"],options:["YES","NO"],type:"Selectbutton",qId:"06-SHOOTING-02",index:13},{section:2,section_name:"Symptoms",prompt:"Regarding the numbness and/or tingling",sub_questions:["In which leg(s) do you feel it?"],options:["RIGHT","LEFT","BOTH"],type:"Selectbutton",qId:"06-NUMBNESS-01",index:14},{section:2,section_name:"Symptoms",prompt:"Regarding the numbness and/or tingling",sub_questions:["Does it involve your feet?","If the numbness and/or tingling involves your feet (select Not Applicable if it does not), does it travel up from your feet?","If the numbness and/or tingling involves your feet (select Not Applicable if it does not), does it radiate down from your back?","Do you have similar symptoms in your hands?","Do you feel you have problems with your balance?","Have you ever been diagnosed with Diabetes?","Have you ever been diagnosed with a Vitamin B12 deficiency?"],options:["YES","NO","NOT APPLICABLE"],type:"Selectbutton",qId:"06-NUMBNESS-02",index:15},{section:2,section_name:"Symptoms",prompt:"Regarding the tightness",sub_questions:["Are the symptoms worse in the morning when you first wake up?","If symptoms are worse in the morning (select Not Applicable if not), do the symptoms get better over the course of the day?"],options:["YES","NO","NOT APPLICABLE"],type:"Selectbutton",qId:"06-TIGHTNESS-01",index:16},{section:2,section_name:"Symptoms",prompt:"Have you taken medication for your symptoms?",options:["Yes, I have taken over-the-counter relievers or anti-inflammatory medication(Advil, Tylenol, Aspirin,etc.)","Yes, I have taken prescription pain relievers","Yes, I have taken muscle relaxers","No","Not sure"],type:"Select",qId:"09",index:17},{section:2,section_name:"Symptoms",prompt:"Have you had similar pain before?",options:["YES","NO","NOT SURE"],type:"Selectbutton",qId:"10",index:18},{section:2,section_name:"Symptoms",prompt:"Are you experiencing weakness in your arms and legs?",options:["Yes, I am experiencing weakness on one sife of my body","Yes, I am experiencing weakness on both sides of my body","No","Not sure"],type:"Select",qId:"11",index:19},{section:3,section_name:"Safety Check",prompt:"Are you experiencing any of the following?",options:["Fever (temperatures higher than 101.5)","Chills","Shortness of breath","Abdominal pain"],type:"Multibutton",qId:"12",index:20},{section:3,section_name:"Safety Check",prompt:"Are you experiencing any of the following?",options:["Cannot control when I go to the bathroom","Groin/scrotum pain","Chest pain","Nausea"],type:"Multibutton",qId:"13",index:21},{section:3,section_name:"Safety Check",prompt:"Are you experiencing any pain near your kidneys (deep within one or both sides, just under ribs)?",options:["Yes","No","Not Sure"],type:"Selectbutton",qId:"14",index:22},{section:3,section_name:"Safety Check",prompt:"Regarding your symptoms...",sub_questions:["Are you feeling light headed?","Did you pass out?","Have you noticed any blood in your urine?"],options:["Yes","No","Not Sure"],type:"Selectbutton",qId:"15",index:23},{section:3,section_name:"Safety Check",prompt:"Regarding your history...",sub_questions:["Have you ever been diagnosed with cancer?","Has any direct family member of your family been diagnosed with cancer","Have you had your bone health checked recently?","Are you currently sexually active?","Do you currently smoke?","Have you smoked in the past?"],options:["Yes","No","Not Sure"],type:"Selectbutton",qId:"16",index:24}],z9=H.div`
  width: 80%;
`,U9=H.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${_C};
  cursor: pointer;
`,B9=H.div`
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
      border: 2px solid ${nc};
    `}
`,j9=H.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${nc};
`,W9=({options:e,selectedOptions:t,HandleOnclick:n})=>j(z9,{children:[e.map((r,i)=>j(U9,{value:r,onClick:n,children:[b(B9,{id:i,selected:t.includes(r),value:r,children:t.includes(r)&&b(j9,{})}),b("div",{children:r})]},`select-${i}`))," "]}),H9=H.div`
  width: 80%;
`,V9=H.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${_C};

  input[type='checkbox'] {
    transform: scale(1.5);
  }
`,q9=H.div`
  margin-left: 15px;
`,G9=({options:e,selectedOptions:t,HandleOnclick:n})=>b(H9,{role:"group","aria-label":"Button group",children:e.map((r,i)=>j(V9,{children:[b("input",{type:"checkbox",id:i,value:r,checked:t.includes(r),onChange:n}),b(q9,{children:r})]},`select-${i}`))}),K9=({options:e,selectedOptions:t,HandleOnclick:n})=>b("div",{children:e.map((r,i)=>b(yd,{value:r,id:i,onClick:n,selected:t.includes(r),children:r},`button-${i}`))}),Y9=H.div`
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
`,Q9=H.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  white-space: ${e=>e.length?"pre-line":"nowrap"};
`,X9=({options:e,HandleOnclick:t,selectedOptions:n})=>b(Y9,{role:"group","aria-label":"Button group",options:e,children:e.map((r,i)=>b("div",{children:b(yd,{value:r,id:i,onClick:t,selected:n.includes(r),height:"auto",children:b(Q9,{length:r.length>16,children:r})},`button-${i}`)}))}),J9=({currQuestion:e,currSubQuestion:t,subQuestion:n,options:r,currQuestionType:i})=>{const{isValid:o,setIsValid:s}=w.useContext(dt),{selectedOptions:a,setSelectedOptions:l}=w.useContext(dt),{answers:c,setAnswers:u}=w.useContext(dt),d=f=>{const h=f.currentTarget.getAttribute("value");console.log("Selected_Value",h),a.includes(h)?l(a.filter(m=>m!==h)):(i=="Select"||i=="Selectbutton"?l([h]):l(a.concat(h)),s(!0)),console.log("Selected_Options",a)};if(a.length===0&&e>2&&s(!1),w.useEffect(()=>{if(e>2&&c[de[e].qId]){let h;if(console.log("question subquestion",de[e].sub_questions),de[e].sub_questions){console.log("ANSWERS"),console.log("Answers",c);var f=`${de[e].qId}-subq-${t}`;console.log("Answers[qid]",c[f]),h=c[f]}else h=c[de[e].qId];console.log(`CurrentQuestion2: ${e}`),console.log(`useEffect: ${c[de[e].qId]}`),l(a.concat(h)),s(!0)}},[e,t]),r)switch(i){case"Select":return b(W9,{options:r,selectedOptions:a,HandleOnclick:d});case"Multiselect":return b(G9,{options:r,selectedOptions:a,HandleOnclick:d});case"Multibutton":return b(X9,{options:r,selectedOptions:a,HandleOnclick:d});case"Selectbutton":return b(K9,{options:r,selectedOptions:a,HandleOnclick:d});default:return b(Mi,{})}else return b(Mi,{})},Z9=({currentStep:e})=>{const t=[".",".","."];return b("div",{style:{position:"fixed",bottom:"10px",left:"30px",display:"flex",alignItems:"center"},children:(()=>t.map((r,i)=>b("span",{style:{margin:"0 0.1 px",fontSize:"100px",color:i===e?"blue":"gray"},children:r},i)))()})},ej=H.h3`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-transform: uppercase;
`,tj=H.h2`
  font-size: 20px;
  font-weight: 100;
  line-height: 24px;
  text-transform: uppercase;
`,nj=H.h1`
  margin-top: 20px;
  max-width: 80%;
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 0px;
`,rj=H.p`
  /* margin-top: -40px;
  margin-bottom: 40px; */
  max-width: 80%;
`,ij=H.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,oj=()=>{const[e,t]=w.useState(0),[n,r]=w.useState(0),[i,o]=w.useState([]),{AssessmentState:s,setAssessmentState:a,isValid:l,setIsValid:c,selectedOptions:u,setSelectedOptions:d,answers:f,setAnswers:h}=w.useContext(dt),m=g=>{let p=g+1;console.log("answers new",f);for(let _=g+1;_<de.length;_++)if(g+1>11&&de[g+1].qId.includes("06")){let C;g==9?C=u:C=f["06"];var v=de[_].qId;console.log("qid",v),v=v.split("-");const k=v[1];for(let E=0;E<C.length;E++){if(C[E].includes(k))return p=_,p;p=17}}return p},y=()=>{if(e===0)a("zipcode");else{let g,p=[];const v=de[e].qId;if(p=i.concat(v),de[e].sub_questions&&n!=0){r(n-1);return}for(let _=0;_<p.length;_++)if(p[_+1]===v){const C=p[_];for(let k=0;k<de.length;k++)if(C===de[k].qId){g=de[k].index,t(g),de[g].sub_questions&&r(de[g].sub_questions.length-1);return}}}},S=()=>{if(e===de.length-1&&de[e].sub_questions&&n===de[e].sub_questions.length-1||e===de.length-1&&!de[e].sub_questions){if(de[e].sub_questions)var g=`${de[e].qId}-subq-${n}`;else var g=de[e].qId;const p={...f,[g]:u};h(p),i.includes(de[e].qId)||o([...i,de[e].qId]),a("result")}else if(l)if(c(!1),!de[e].sub_questions||n===de[e].sub_questions.length-1){if(de[e].sub_questions)var g=`${de[e].qId}-subq-${n}`;else var g=de[e].qId;const p={...f,[g]:u};h(p),i.includes(de[e].qId)||o([...i,de[e].qId]);const v=m(e);t(v),r(0),d([])}else{var g=`${de[e].qId}-subq-${n}`;const v={...f,[g]:u};console.log("selected options",u),console.log("qid",g),h(v),i.includes(de[e].qId)||o([...i,de[e].qId]),r(n+1),d([])}};return w.useEffect(()=>{console.log("answers:",f),console.log("idTrail",i)},[f]),j(oo,{image:"../../pages.jpg",children:[b(Ls,{}),j(Es,{children:[j(SP,{children:[j(EP,{children:[j(ej,{children:["Section ",de[e].section]}),b(tj,{children:de[e].section_name}),b(nj,{children:de[e].prompt})]}),j(CP,{children:[e===0&&b(I9,{}),e===1&&b(M9,{}),e===2&&b(F9,{}),j(ij,{children:[de[e].sub_questions&&b(rj,{children:b(Go,{children:de[e].sub_questions[n]})}),b(J9,{currQuestion:e,currSubQuestion:n,subQuestion:de[e].sub_questions,options:de[e].options,currQuestionType:de[e].type})]}),j(bC,{children:[b(Ma,{onClick:y,children:"Back"}),b(PI,{isValid:l,onClick:S,children:"Next"})]})]})]}),b(Z9,{currentStep:de[e].section-1})]})]})},LI=["Lumbar Radiculopathy","Lumbar Stenosis","Facet Arthropathy","Myelopathy","Metastatic disease","Infection","Cauda Equina","Myocardial Ischemia"],sj=H.div`
  display: flex;
  width: 352px;
  height: 232px;
  background: ${wC};
  box-shadow: ${_P};
  border-radius: 10px;
`,aj=H.div`
  display: flex;
  justify-content: center;
  width: 20%;
  font-size: 40px;
  margin-top: 10%;
  color: ${wP};
`,lj=H.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding-top: 10%;
  background-color: ${Oy};
  height: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`,cj=H.a`
  margin-left: -30%;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;

  color: ${Sl};
  margin-top: 3px;
  margin-bottom: 20px;
  cursor: pointer;
`,uj=H.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.18px;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.87);
`,dj=H.p`
  font-size: 13px;
  margin-left: 10%;
  margin-bottom: 0;
  margin-right: 10%;
`,fj=H.button`
  background: ${nc};
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
`,ra=({icon:e,provider:t,bold:n,text:r})=>{const[i,o]=w.useState(!1);return j(sj,{children:[b(aj,{children:b(ri,{icon:e})}),j(lj,{children:[b(uj,{children:t}),j(dj,{children:[b(Go,{children:n}),r]}),b(cj,{onClick:()=>o(!0),children:"+ More details"}),b(fi,{showModal:i,setShowModal:o,text:"hey"}),b(fj,{children:"Search Providers"})]})]})},hj=H.div`
  margin: 0 auto;
  width: 60%;
  margin-top: -90px;
`,pj=H.h2`
  font-weight: 200;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.12px;
  color: rgba(0, 0, 0, 0.87);
`,mj=H.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 36px;
`,gj=H.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`,vj=H.h3`
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
`,yj=H.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,_j=H.div`
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
`,wj=({resultIndex:e})=>{const t=[];return e.map(n=>{t.push(LI[n])}),console.log("PROVIDER DIAGNOSIS",t),j(hj,{children:[b(pj,{children:"Results"}),j(mj,{children:["Your answers suggests that your symptoms are related to"," ",t.map(n=>j("p",{children:[n,", "]}))]}),j(gj,{children:[b(vj,{children:"Recommended providers"}),j(yj,{children:[t.includes("Metastatic disease")||t.includes("Infection")||t.includes("Cauda Equina")||t.includes("Myocardial Ischemia")?b(ra,{icon:Qs,provider:"ER/Urgent Care",bold:"90% of people",text:" with your answers seek care from the ER or urgent care"}):null,t.includes("Facet Arthropathy")?b(ra,{icon:Qs,provider:"Primary Care Physician",bold:"90% of people",text:" with your answers seek care from a primary care physician"}):null,t.includes("Myelopathy")||t.includes("Lumbar Stenosis")?b(ra,{icon:Qs,provider:"Neurosurgeon",bold:"90% of people",text:" with your answers seek care from a neurosurgeon"}):null,t.includes("Myelopathy")?b(ra,{icon:Qs,provider:"Neurologist",bold:"90% of people",text:" with your answers seek care from a neurologist"}):null,t.includes("Lumbar Radiculopathy")||t.includes("Facet Arthropathy")?b(ra,{icon:Qs,provider:"Interventional Pain Physician",bold:"90% of people",text:" with your answers seek care from an interventional pain physician"}):null]})]}),j(_j,{children:[b("p",{children:"Save your answers to reference with your provider."}),b(Ma,{children:"Download"}),b(Ma,{children:"Email"}),b(Ma,{children:"Text"})]})]})},bj=()=>{const{answers:e}=w.useContext(dt),[t,n]=w.useState([]);return e["06"].includes("SHOOTING PAIN")&&(t.includes(0)||n(t.concat(0))),e["07-subq-0"].includes("LEAN FORWARD")&&(!e["07-subq-0"].includes("AM AT REST")||!e["07-subq-0"].includes("LEAN BACK"))&&(t.includes(1)||n(t.concat(1))),e["05"].includes("ON THE LEFT")&&e["05"].includes("ON THE RIGHT")&&(t.includes(2)||n(t.concat(2))),e["06-NUMBNESS-02-subq-3"]&&(e["06-NUMBNESS-02-subq-3"].includes("YES")||e["06-NUMBNESS-02-subq-4"].includes("YES"))&&(t.includes(3)||n(t.concat(3))),e["16-subq-0"].includes("Yes")&&(t.includes(4)||n(t.concat(4))),(e[12].includes("Fever (temperatures higher than 101.5)")||e[12].includes("Chills"))&&(t.includes(5)||n(t.concat(5))),e[13].includes("Cannot control when I go to the bathroom")&&(t.includes(6)||n(t.concat(6))),e[13].includes("Chest pain")&&e[12].includes("Shortness of breath")&&(t.includes(7)||n(t.concat(7))),console.log("resultIndex",t),t.map(r=>{console.log("diagnosis",LI[r])}),w.useEffect(()=>{console.log("answers first",e)},[e]),console.log("answers:",e),j(oo,{image:"../../results.jpg",children:[b(Ls,{}),b(Es,{children:b(wj,{resultIndex:t})})]})},Sj=()=>{const[e,t]=w.useState("home"),[n,r]=w.useState(!1),[i,o]=w.useState([]),[s,a]=w.useState({}),[l,c]=e5("/");return c?j("h1",{children:["Error loading data: ",c.toString()]}):l===void 0?b(RP,{}):l?j(dt.Provider,{value:{AssessmentState:e,setAssessmentState:t,isValid:n,setIsValid:r,selectedOptions:i,setSelectedOptions:o,answers:s,setAnswers:a},children:[e==="home"&&b(v9,{}),e==="login"&&b(a9,{}),e==="signup"&&b(h9,{}),e==="zipcode"&&b(C9,{}),e==="questions"&&b(oj,{}),e==="result"&&b(bj,{})]}):b("h1",{children:"No data found"})},Cj=ep.createRoot(document.getElementById("root"));Cj.render(b(qe.StrictMode,{children:b(Sj,{})}));
