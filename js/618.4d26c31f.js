"use strict";(self["webpackChunkword_press"]=self["webpackChunkword_press"]||[]).push([[618],{8053:function(t,r,n){n.d(r,{l:function(){return c}});var e=n(3396),o=n(8149),u=n(4620);const i=["class","style"],a=/^on[A-Z]/,c=(t={})=>{const{excludeListeners:r=!1,excludeKeys:n}=t,c=(0,e.Fl)((()=>((null==n?void 0:n.value)||[]).concat(i))),l=(0,e.FN)();return l?(0,e.Fl)((()=>{var t;return(0,o.Z)(Object.entries(null==(t=l.proxy)?void 0:t.$attrs).filter((([t])=>!c.value.includes(t)&&!(r&&a.test(t)))))})):((0,u.N)("use-attrs","getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"),(0,e.Fl)((()=>({}))))}},18:function(t,r,n){n.d(r,{WJ:function(){return h},uc:function(){return p}});var e=n(968),o=n(7788),u=n(9431),i=n(9016),a=n(6049),c=n(3430);function l(t,r,n,e){if(!(0,a.Z)(t))return t;r=(0,u.Z)(r,t);var l=-1,s=r.length,f=s-1,v=t;while(null!=v&&++l<s){var p=(0,c.Z)(r[l]),h=n;if("__proto__"===p||"constructor"===p||"prototype"===p)return t;if(l!=f){var _=v[p];h=e?e(_,p,v):void 0,void 0===h&&(h=(0,a.Z)(_)?_:(0,i.Z)(r[l+1])?[]:{})}(0,o.Z)(v,p,h),v=v[p]}return t}var s=l;function f(t,r,n){return null==t?t:s(t,r,n)}var v=f;const p=t=>Object.keys(t),h=(t,r,n)=>({get value(){return(0,e.Z)(t,r,n)},set value(n){v(t,r,n)}})},3058:function(t,r,n){function e(){this.__data__=[],this.size=0}n.d(r,{Z:function(){return b}});var o=e,u=n(202);function i(t,r){var n=t.length;while(n--)if((0,u.Z)(t[n][0],r))return n;return-1}var a=i,c=Array.prototype,l=c.splice;function s(t){var r=this.__data__,n=a(r,t);if(n<0)return!1;var e=r.length-1;return n==e?r.pop():l.call(r,n,1),--this.size,!0}var f=s;function v(t){var r=this.__data__,n=a(r,t);return n<0?void 0:r[n][1]}var p=v;function h(t){return a(this.__data__,t)>-1}var _=h;n(7658);function y(t,r){var n=this.__data__,e=a(n,t);return e<0?(++this.size,n.push([t,r])):n[e][1]=r,this}var d=y;function Z(t){var r=-1,n=null==t?0:t.length;this.clear();while(++r<n){var e=t[r];this.set(e[0],e[1])}}Z.prototype.clear=o,Z.prototype["delete"]=f,Z.prototype.get=p,Z.prototype.has=_,Z.prototype.set=d;var b=Z},9795:function(t,r,n){var e=n(6823),o=n(8345),u=(0,e.Z)(o.Z,"Map");r["Z"]=u},9350:function(t,r,n){n.d(r,{Z:function(){return K}});var e=n(6823),o=(0,e.Z)(Object,"create"),u=o;function i(){this.__data__=u?u(null):{},this.size=0}var a=i;function c(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}var l=c,s="__lodash_hash_undefined__",f=Object.prototype,v=f.hasOwnProperty;function p(t){var r=this.__data__;if(u){var n=r[t];return n===s?void 0:n}return v.call(r,t)?r[t]:void 0}var h=p,_=Object.prototype,y=_.hasOwnProperty;function d(t){var r=this.__data__;return u?void 0!==r[t]:y.call(r,t)}var Z=d,b="__lodash_hash_undefined__";function g(t,r){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=u&&void 0===r?b:r,this}var j=g;function w(t){var r=-1,n=null==t?0:t.length;this.clear();while(++r<n){var e=t[r];this.set(e[0],e[1])}}w.prototype.clear=a,w.prototype["delete"]=l,w.prototype.get=h,w.prototype.has=Z,w.prototype.set=j;var O=w,m=n(3058),z=n(9795);function $(){this.size=0,this.__data__={hash:new O,map:new(z.Z||m.Z),string:new O}}var F=$;function S(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}var P=S;function A(t,r){var n=t.__data__;return P(r)?n["string"==typeof r?"string":"hash"]:n.map}var k=A;function x(t){var r=k(this,t)["delete"](t);return this.size-=r?1:0,r}var C=x;function E(t){return k(this,t).get(t)}var T=E;function N(t){return k(this,t).has(t)}var I=N;function R(t,r){var n=k(this,t),e=n.size;return n.set(t,r),this.size+=n.size==e?0:1,this}var G=R;function J(t){var r=-1,n=null==t?0:t.length;this.clear();while(++r<n){var e=t[r];this.set(e[0],e[1])}}J.prototype.clear=F,J.prototype["delete"]=C,J.prototype.get=T,J.prototype.has=I,J.prototype.set=G;var K=J},7401:function(t,r,n){var e=n(8345),o=e.Z.Symbol;r["Z"]=o},7788:function(t,r,n){var e=n(7043),o=n(202),u=Object.prototype,i=u.hasOwnProperty;function a(t,r,n){var u=t[r];i.call(t,r)&&(0,o.Z)(u,n)&&(void 0!==n||r in t)||(0,e.Z)(t,r,n)}r["Z"]=a},7043:function(t,r,n){n.d(r,{Z:function(){return a}});var e=n(6823),o=function(){try{var t=(0,e.Z)(Object,"defineProperty");return t({},"",{}),t}catch(r){}}(),u=o;function i(t,r,n){"__proto__"==r&&u?u(t,r,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[r]=n}var a=i},681:function(t,r,n){n.d(r,{Z:function(){return Z}});var e=n(7401),o=Object.prototype,u=o.hasOwnProperty,i=o.toString,a=e.Z?e.Z.toStringTag:void 0;function c(t){var r=u.call(t,a),n=t[a];try{t[a]=void 0;var e=!0}catch(c){}var o=i.call(t);return e&&(r?t[a]=n:delete t[a]),o}var l=c,s=Object.prototype,f=s.toString;function v(t){return f.call(t)}var p=v,h="[object Null]",_="[object Undefined]",y=e.Z?e.Z.toStringTag:void 0;function d(t){return null==t?void 0===t?_:h:y&&y in Object(t)?l(t):p(t)}var Z=d},9431:function(t,r,n){n.d(r,{Z:function(){return k}});var e=n(7933),o=n(8590),u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;function a(t,r){if((0,e.Z)(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!(0,o.Z)(t))||(i.test(t)||!u.test(t)||null!=r&&t in Object(r))}var c=a,l=(n(7658),n(1703),n(9350)),s="Expected a function";function f(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError(s);var n=function(){var e=arguments,o=r?r.apply(this,e):e[0],u=n.cache;if(u.has(o))return u.get(o);var i=t.apply(this,e);return n.cache=u.set(o,i)||u,i};return n.cache=new(f.Cache||l.Z),n}f.Cache=l.Z;var v=f,p=500;function h(t){var r=v(t,(function(t){return n.size===p&&n.clear(),t})),n=r.cache;return r}var _=h,y=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,d=/\\(\\)?/g,Z=_((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(y,(function(t,n,e,o){r.push(e?o.replace(d,"$1"):n||t)})),r})),b=Z,g=n(7401);function j(t,r){var n=-1,e=null==t?0:t.length,o=Array(e);while(++n<e)o[n]=r(t[n],n,t);return o}var w=j,O=1/0,m=g.Z?g.Z.prototype:void 0,z=m?m.toString:void 0;function $(t){if("string"==typeof t)return t;if((0,e.Z)(t))return w(t,$)+"";if((0,o.Z)(t))return z?z.call(t):"";var r=t+"";return"0"==r&&1/t==-O?"-0":r}var F=$;function S(t){return null==t?"":F(t)}var P=S;function A(t,r){return(0,e.Z)(t)?t:c(t,r)?[t]:b(P(t))}var k=A},2701:function(t,r){var n="object"==typeof global&&global&&global.Object===Object&&global;r["Z"]=n},6823:function(t,r,n){n.d(r,{Z:function(){return m}});var e=n(9138),o=n(8345),u=o.Z["__core-js_shared__"],i=u,a=function(){var t=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function c(t){return!!a&&a in t}var l=c,s=n(6049),f=n(8481),v=/[\\^$.*+?()[\]{}|]/g,p=/^\[object .+?Constructor\]$/,h=Function.prototype,_=Object.prototype,y=h.toString,d=_.hasOwnProperty,Z=RegExp("^"+y.call(d).replace(v,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function b(t){if(!(0,s.Z)(t)||l(t))return!1;var r=(0,e.Z)(t)?Z:p;return r.test((0,f.Z)(t))}var g=b;function j(t,r){return null==t?void 0:t[r]}var w=j;function O(t,r){var n=w(t,r);return g(n)?n:void 0}var m=O},9016:function(t,r){var n=9007199254740991,e=/^(?:0|[1-9]\d*)$/;function o(t,r){var o=typeof t;return r=null==r?n:r,!!r&&("number"==o||"symbol"!=o&&e.test(t))&&t>-1&&t%1==0&&t<r}r["Z"]=o},8345:function(t,r,n){var e=n(2701),o="object"==typeof self&&self&&self.Object===Object&&self,u=e.Z||o||Function("return this")();r["Z"]=u},3430:function(t,r,n){var e=n(8590),o=1/0;function u(t){if("string"==typeof t||(0,e.Z)(t))return t;var r=t+"";return"0"==r&&1/t==-o?"-0":r}r["Z"]=u},8481:function(t,r){var n=Function.prototype,e=n.toString;function o(t){if(null!=t){try{return e.call(t)}catch(r){}try{return t+""}catch(r){}}return""}r["Z"]=o},202:function(t,r){function n(t,r){return t===r||t!==t&&r!==r}r["Z"]=n},968:function(t,r,n){n.d(r,{Z:function(){return c}});var e=n(9431),o=n(3430);function u(t,r){r=(0,e.Z)(r,t);var n=0,u=r.length;while(null!=t&&n<u)t=t[(0,o.Z)(r[n++])];return n&&n==u?t:void 0}var i=u;function a(t,r,n){var e=null==t?void 0:i(t,r);return void 0===e?n:e}var c=a},7933:function(t,r){var n=Array.isArray;r["Z"]=n},9138:function(t,r,n){var e=n(681),o=n(6049),u="[object AsyncFunction]",i="[object Function]",a="[object GeneratorFunction]",c="[object Proxy]";function l(t){if(!(0,o.Z)(t))return!1;var r=(0,e.Z)(t);return r==i||r==a||r==u||r==c}r["Z"]=l},6049:function(t,r){function n(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}r["Z"]=n},3835:function(t,r){function n(t){return null!=t&&"object"==typeof t}r["Z"]=n},8590:function(t,r,n){var e=n(681),o=n(3835),u="[object Symbol]";function i(t){return"symbol"==typeof t||(0,o.Z)(t)&&(0,e.Z)(t)==u}r["Z"]=i}}]);
//# sourceMappingURL=618.4d26c31f.js.map