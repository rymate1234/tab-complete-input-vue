parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"tuDi":[function(require,module,exports) {

},{}],"MpYs":[function(require,module,exports) {
var o=Math.ceil,r=Math.floor;module.exports=function(t){return isNaN(t=+t)?0:(t>0?r:o)(t)};
},{}],"U72i":[function(require,module,exports) {
module.exports=function(o){if(null==o)throw TypeError("Can't call method on  "+o);return o};
},{}],"lytE":[function(require,module,exports) {
var e=require("./_to-integer"),r=require("./_defined");module.exports=function(t){return function(n,i){var o,u,c=String(r(n)),d=e(i),a=c.length;return d<0||d>=a?t?"":void 0:(o=c.charCodeAt(d))<55296||o>56319||d+1===a||(u=c.charCodeAt(d+1))<56320||u>57343?t?c.charAt(d):o:t?c.slice(d,d+2):u-56320+(o-55296<<10)+65536}};
},{"./_to-integer":"MpYs","./_defined":"U72i"}],"1kq3":[function(require,module,exports) {
module.exports=!0;
},{}],"i1Q6":[function(require,module,exports) {

var e=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e);
},{}],"zKeE":[function(require,module,exports) {
var e=module.exports={version:"2.5.3"};"number"==typeof __e&&(__e=e);
},{}],"g31e":[function(require,module,exports) {
module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};
},{}],"3zRh":[function(require,module,exports) {
var r=require("./_a-function");module.exports=function(n,t,u){if(r(n),void 0===t)return n;switch(u){case 1:return function(r){return n.call(t,r)};case 2:return function(r,u){return n.call(t,r,u)};case 3:return function(r,u,e){return n.call(t,r,u,e)}}return function(){return n.apply(t,arguments)}};
},{"./_a-function":"g31e"}],"BxvP":[function(require,module,exports) {
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};
},{}],"zotD":[function(require,module,exports) {
var r=require("./_is-object");module.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e};
},{"./_is-object":"BxvP"}],"wLcK":[function(require,module,exports) {
module.exports=function(r){try{return!!r()}catch(r){return!0}};
},{}],"6MLN":[function(require,module,exports) {
module.exports=!require("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});
},{"./_fails":"wLcK"}],"9kxq":[function(require,module,exports) {
var e=require("./_is-object"),r=require("./_global").document,t=e(r)&&e(r.createElement);module.exports=function(e){return t?r.createElement(e):{}};
},{"./_is-object":"BxvP","./_global":"i1Q6"}],"R6c1":[function(require,module,exports) {
module.exports=!require("./_descriptors")&&!require("./_fails")(function(){return 7!=Object.defineProperty(require("./_dom-create")("div"),"a",{get:function(){return 7}}).a});
},{"./_descriptors":"6MLN","./_fails":"wLcK","./_dom-create":"9kxq"}],"EKwp":[function(require,module,exports) {
var t=require("./_is-object");module.exports=function(r,e){if(!t(r))return r;var o,n;if(e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;if("function"==typeof(o=r.valueOf)&&!t(n=o.call(r)))return n;if(!e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;throw TypeError("Can't convert object to primitive value")};
},{"./_is-object":"BxvP"}],"Gfzd":[function(require,module,exports) {
var e=require("./_an-object"),r=require("./_ie8-dom-define"),t=require("./_to-primitive"),i=Object.defineProperty;exports.f=require("./_descriptors")?Object.defineProperty:function(o,n,u){if(e(o),n=t(n,!0),e(u),r)try{return i(o,n,u)}catch(e){}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");return"value"in u&&(o[n]=u.value),o};
},{"./_an-object":"zotD","./_ie8-dom-define":"R6c1","./_to-primitive":"EKwp","./_descriptors":"6MLN"}],"0WCH":[function(require,module,exports) {
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};
},{}],"akPY":[function(require,module,exports) {
var r=require("./_object-dp"),e=require("./_property-desc");module.exports=require("./_descriptors")?function(t,u,o){return r.f(t,u,e(1,o))}:function(r,e,t){return r[e]=t,r};
},{"./_object-dp":"Gfzd","./_property-desc":"0WCH","./_descriptors":"6MLN"}],"vSO4":[function(require,module,exports) {

var e=require("./_global"),r=require("./_core"),n=require("./_ctx"),t=require("./_hide"),i="prototype",u=function(o,c,a){var f,l,s,p=o&u.F,v=o&u.G,h=o&u.S,w=o&u.P,q=o&u.B,y=o&u.W,_=v?r:r[c]||(r[c]={}),d=_[i],F=v?e:h?e[c]:(e[c]||{})[i];for(f in v&&(a=c),a)(l=!p&&F&&void 0!==F[f])&&f in _||(s=l?F[f]:a[f],_[f]=v&&"function"!=typeof F[f]?a[f]:q&&l?n(s,e):y&&F[f]==s?function(e){var r=function(r,n,t){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,t)}return e.apply(this,arguments)};return r[i]=e[i],r}(s):w&&"function"==typeof s?n(Function.call,s):s,w&&((_.virtual||(_.virtual={}))[f]=s,o&u.R&&d&&!d[f]&&t(d,f,s)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,module.exports=u;
},{"./_global":"i1Q6","./_core":"zKeE","./_ctx":"3zRh","./_hide":"akPY"}],"gojl":[function(require,module,exports) {
module.exports=require("./_hide");
},{"./_hide":"akPY"}],"yS17":[function(require,module,exports) {
var r={}.hasOwnProperty;module.exports=function(e,n){return r.call(e,n)};
},{}],"dhak":[function(require,module,exports) {
module.exports={};
},{}],"ShN9":[function(require,module,exports) {
var r={}.toString;module.exports=function(t){return r.call(t).slice(8,-1)};
},{}],"E5Ce":[function(require,module,exports) {
var e=require("./_cof");module.exports=Object("z").propertyIsEnumerable(0)?Object:function(r){return"String"==e(r)?r.split(""):Object(r)};
},{"./_cof":"ShN9"}],"Wyka":[function(require,module,exports) {
var e=require("./_iobject"),r=require("./_defined");module.exports=function(i){return e(r(i))};
},{"./_iobject":"E5Ce","./_defined":"U72i"}],"S7IM":[function(require,module,exports) {
var e=require("./_to-integer"),r=Math.min;module.exports=function(t){return t>0?r(e(t),9007199254740991):0};
},{"./_to-integer":"MpYs"}],"Zwq5":[function(require,module,exports) {
var e=require("./_to-integer"),r=Math.max,t=Math.min;module.exports=function(n,a){return(n=e(n))<0?r(n+a,0):t(n,a)};
},{"./_to-integer":"MpYs"}],"LNnS":[function(require,module,exports) {
var e=require("./_to-iobject"),r=require("./_to-length"),t=require("./_to-absolute-index");module.exports=function(n){return function(i,o,u){var f,l=e(i),a=r(l.length),c=t(u,a);if(n&&o!=o){for(;a>c;)if((f=l[c++])!=f)return!0}else for(;a>c;c++)if((n||c in l)&&l[c]===o)return n||c||0;return!n&&-1}};
},{"./_to-iobject":"Wyka","./_to-length":"S7IM","./_to-absolute-index":"Zwq5"}],"NB7d":[function(require,module,exports) {

var r=require("./_global"),e="__core-js_shared__",_=r[e]||(r[e]={});module.exports=function(r){return _[r]||(_[r]={})};
},{"./_global":"i1Q6"}],"X6va":[function(require,module,exports) {
var o=0,t=Math.random();module.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++o+t).toString(36))};
},{}],"/wuY":[function(require,module,exports) {
var e=require("./_shared")("keys"),r=require("./_uid");module.exports=function(u){return e[u]||(e[u]=r(u))};
},{"./_shared":"NB7d","./_uid":"X6va"}],"B9Lq":[function(require,module,exports) {
var r=require("./_has"),e=require("./_to-iobject"),u=require("./_array-includes")(!1),i=require("./_shared-key")("IE_PROTO");module.exports=function(o,a){var n,s=e(o),t=0,h=[];for(n in s)n!=i&&r(s,n)&&h.push(n);for(;a.length>t;)r(s,n=a[t++])&&(~u(h,n)||h.push(n));return h};
},{"./_has":"yS17","./_to-iobject":"Wyka","./_array-includes":"LNnS","./_shared-key":"/wuY"}],"KxjL":[function(require,module,exports) {
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
},{}],"knrM":[function(require,module,exports) {
var e=require("./_object-keys-internal"),r=require("./_enum-bug-keys");module.exports=Object.keys||function(u){return e(u,r)};
},{"./_object-keys-internal":"B9Lq","./_enum-bug-keys":"KxjL"}],"gjjs":[function(require,module,exports) {
var e=require("./_object-dp"),r=require("./_an-object"),t=require("./_object-keys");module.exports=require("./_descriptors")?Object.defineProperties:function(o,i){r(o);for(var u,c=t(i),n=c.length,s=0;n>s;)e.f(o,u=c[s++],i[u]);return o};
},{"./_object-dp":"Gfzd","./_an-object":"zotD","./_object-keys":"knrM","./_descriptors":"6MLN"}],"ebIA":[function(require,module,exports) {
var e=require("./_global").document;module.exports=e&&e.documentElement;
},{"./_global":"i1Q6"}],"TNJq":[function(require,module,exports) {
var e=require("./_an-object"),r=require("./_object-dps"),t=require("./_enum-bug-keys"),n=require("./_shared-key")("IE_PROTO"),o=function(){},i="prototype",u=function(){var e,r=require("./_dom-create")("iframe"),n=t.length;for(r.style.display="none",require("./_html").appendChild(r),r.src="javascript:",(e=r.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;n--;)delete u[i][t[n]];return u()};module.exports=Object.create||function(t,c){var a;return null!==t?(o[i]=e(t),a=new o,o[i]=null,a[n]=t):a=u(),void 0===c?a:r(a,c)};
},{"./_an-object":"zotD","./_object-dps":"gjjs","./_enum-bug-keys":"KxjL","./_shared-key":"/wuY","./_dom-create":"9kxq","./_html":"ebIA"}],"Ug9I":[function(require,module,exports) {
var e=require("./_shared")("wks"),r=require("./_uid"),o=require("./_global").Symbol,u="function"==typeof o,i=module.exports=function(i){return e[i]||(e[i]=u&&o[i]||(u?o:r)("Symbol."+i))};i.store=e;
},{"./_shared":"NB7d","./_uid":"X6va","./_global":"i1Q6"}],"11Ut":[function(require,module,exports) {
var e=require("./_object-dp").f,r=require("./_has"),o=require("./_wks")("toStringTag");module.exports=function(t,u,i){t&&!r(t=i?t:t.prototype,o)&&e(t,o,{configurable:!0,value:u})};
},{"./_object-dp":"Gfzd","./_has":"yS17","./_wks":"Ug9I"}],"b7Q2":[function(require,module,exports) {
"use strict";var e=require("./_object-create"),r=require("./_property-desc"),t=require("./_set-to-string-tag"),i={};require("./_hide")(i,require("./_wks")("iterator"),function(){return this}),module.exports=function(o,u,s){o.prototype=e(i,{next:r(1,s)}),t(o,u+" Iterator")};
},{"./_object-create":"TNJq","./_property-desc":"0WCH","./_set-to-string-tag":"11Ut","./_hide":"akPY","./_wks":"Ug9I"}],"mbLO":[function(require,module,exports) {
var e=require("./_defined");module.exports=function(r){return Object(e(r))};
},{"./_defined":"U72i"}],"HHE0":[function(require,module,exports) {
var t=require("./_has"),e=require("./_to-object"),o=require("./_shared-key")("IE_PROTO"),r=Object.prototype;module.exports=Object.getPrototypeOf||function(c){return c=e(c),t(c,o)?c[o]:"function"==typeof c.constructor&&c instanceof c.constructor?c.constructor.prototype:c instanceof Object?r:null};
},{"./_has":"yS17","./_to-object":"mbLO","./_shared-key":"/wuY"}],"uRfg":[function(require,module,exports) {
"use strict";var e=require("./_library"),r=require("./_export"),t=require("./_redefine"),i=require("./_hide"),n=require("./_has"),u=require("./_iterators"),s=require("./_iter-create"),o=require("./_set-to-string-tag"),a=require("./_object-gpo"),c=require("./_wks")("iterator"),f=!([].keys&&"next"in[].keys()),q="@@iterator",_="keys",l="values",y=function(){return this};module.exports=function(h,p,k,v,w,d,x){s(k,p,v);var b,g,j,m=function(e){if(!f&&e in O)return O[e];switch(e){case _:case l:return function(){return new k(this,e)}}return function(){return new k(this,e)}},A=p+" Iterator",F=w==l,I=!1,O=h.prototype,P=O[c]||O[q]||w&&O[w],z=!f&&P||m(w),B=w?F?m("entries"):z:void 0,C="Array"==p&&O.entries||P;if(C&&(j=a(C.call(new h)))!==Object.prototype&&j.next&&(o(j,A,!0),e||n(j,c)||i(j,c,y)),F&&P&&P.name!==l&&(I=!0,z=function(){return P.call(this)}),e&&!x||!f&&!I&&O[c]||i(O,c,z),u[p]=z,u[A]=y,w)if(b={values:F?z:m(l),keys:d?z:m(_),entries:B},x)for(g in b)g in O||t(O,g,b[g]);else r(r.P+r.F*(f||I),p,b);return b};
},{"./_library":"1kq3","./_export":"vSO4","./_redefine":"gojl","./_hide":"akPY","./_has":"yS17","./_iterators":"dhak","./_iter-create":"b7Q2","./_set-to-string-tag":"11Ut","./_object-gpo":"HHE0","./_wks":"Ug9I"}],"i+u+":[function(require,module,exports) {
"use strict";var i=require("./_string-at")(!0);require("./_iter-define")(String,"String",function(i){this._t=String(i),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})});
},{"./_string-at":"lytE","./_iter-define":"uRfg"}],"ID6i":[function(require,module,exports) {
module.exports=function(){};
},{}],"xwD+":[function(require,module,exports) {
module.exports=function(e,n){return{value:n,done:!!e}};
},{}],"OYXR":[function(require,module,exports) {
"use strict";var e=require("./_add-to-unscopables"),r=require("./_iter-step"),t=require("./_iterators"),i=require("./_to-iobject");module.exports=require("./_iter-define")(Array,"Array",function(e,r){this._t=i(e),this._i=0,this._k=r},function(){var e=this._t,t=this._k,i=this._i++;return!e||i>=e.length?(this._t=void 0,r(1)):r(0,"keys"==t?i:"values"==t?e[i]:[i,e[i]])},"values"),t.Arguments=t.Array,e("keys"),e("values"),e("entries");
},{"./_add-to-unscopables":"ID6i","./_iter-step":"xwD+","./_iterators":"dhak","./_to-iobject":"Wyka","./_iter-define":"uRfg"}],"COf8":[function(require,module,exports) {

require("./es6.array.iterator");for(var t=require("./_global"),e=require("./_hide"),i=require("./_iterators"),r=require("./_wks")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),L=0;L<s.length;L++){var a=s[L],l=t[a],S=l&&l.prototype;S&&!S[r]&&e(S,r,a),i[a]=i.Array}
},{"./es6.array.iterator":"OYXR","./_global":"i1Q6","./_hide":"akPY","./_iterators":"dhak","./_wks":"Ug9I"}],"ZHvQ":[function(require,module,exports) {
var e=require("./_cof"),t=require("./_wks")("toStringTag"),n="Arguments"==e(function(){return arguments}()),r=function(e,t){try{return e[t]}catch(e){}};module.exports=function(u){var o,c,i;return void 0===u?"Undefined":null===u?"Null":"string"==typeof(c=r(o=Object(u),t))?c:n?e(o):"Object"==(i=e(o))&&"function"==typeof o.callee?"Arguments":i};
},{"./_cof":"ShN9","./_wks":"Ug9I"}],"KUik":[function(require,module,exports) {
module.exports=function(o,n,r,i){if(!(o instanceof n)||void 0!==i&&i in o)throw TypeError(r+": incorrect invocation!");return o};
},{}],"hEIm":[function(require,module,exports) {
var r=require("./_an-object");module.exports=function(t,e,o,a){try{return a?e(r(o)[0],o[1]):e(o)}catch(e){var c=t.return;throw void 0!==c&&r(c.call(t)),e}};
},{"./_an-object":"zotD"}],"af0K":[function(require,module,exports) {
var r=require("./_iterators"),e=require("./_wks")("iterator"),t=Array.prototype;module.exports=function(o){return void 0!==o&&(r.Array===o||t[e]===o)};
},{"./_iterators":"dhak","./_wks":"Ug9I"}],"7AqT":[function(require,module,exports) {
var r=require("./_classof"),e=require("./_wks")("iterator"),t=require("./_iterators");module.exports=require("./_core").getIteratorMethod=function(o){if(null!=o)return o[e]||o["@@iterator"]||t[r(o)]};
},{"./_classof":"ZHvQ","./_wks":"Ug9I","./_iterators":"dhak","./_core":"zKeE"}],"ozpD":[function(require,module,exports) {
var e=require("./_ctx"),r=require("./_iter-call"),t=require("./_is-array-iter"),i=require("./_an-object"),o=require("./_to-length"),n=require("./core.get-iterator-method"),u={},a={},f=module.exports=function(f,l,c,q,_){var h,s,d,g,p=_?function(){return f}:n(f),v=e(c,q,l?2:1),x=0;if("function"!=typeof p)throw TypeError(f+" is not iterable!");if(t(p)){for(h=o(f.length);h>x;x++)if((g=l?v(i(s=f[x])[0],s[1]):v(f[x]))===u||g===a)return g}else for(d=p.call(f);!(s=d.next()).done;)if((g=r(d,v,s.value,l))===u||g===a)return g};f.BREAK=u,f.RETURN=a;
},{"./_ctx":"3zRh","./_iter-call":"hEIm","./_is-array-iter":"af0K","./_an-object":"zotD","./_to-length":"S7IM","./core.get-iterator-method":"7AqT"}],"B1ls":[function(require,module,exports) {
var r=require("./_an-object"),e=require("./_a-function"),u=require("./_wks")("species");module.exports=function(n,o){var i,t=r(n).constructor;return void 0===t||null==(i=r(t)[u])?o:e(i)};
},{"./_an-object":"zotD","./_a-function":"g31e","./_wks":"Ug9I"}],"o4G5":[function(require,module,exports) {
module.exports=function(e,r,l){var a=void 0===l;switch(r.length){case 0:return a?e():e.call(l);case 1:return a?e(r[0]):e.call(l,r[0]);case 2:return a?e(r[0],r[1]):e.call(l,r[0],r[1]);case 3:return a?e(r[0],r[1],r[2]):e.call(l,r[0],r[1],r[2]);case 4:return a?e(r[0],r[1],r[2],r[3]):e.call(l,r[0],r[1],r[2],r[3])}return e.apply(l,r)};
},{}],"uzcO":[function(require,module,exports) {


var e,t,n,i=require("./_ctx"),o=require("./_invoke"),r=require("./_html"),s=require("./_dom-create"),a=require("./_global"),c=a.process,u=a.setImmediate,p=a.clearImmediate,f=a.MessageChannel,l=a.Dispatch,d=0,m={},h="onreadystatechange",g=function(){var e=+this;if(m.hasOwnProperty(e)){var t=m[e];delete m[e],t()}},v=function(e){g.call(e.data)};u&&p||(u=function(t){for(var n=[],i=1;arguments.length>i;)n.push(arguments[i++]);return m[++d]=function(){o("function"==typeof t?t:Function(t),n)},e(d),d},p=function(e){delete m[e]},"process"==require("./_cof")(c)?e=function(e){c.nextTick(i(g,e,1))}:l&&l.now?e=function(e){l.now(i(g,e,1))}:f?(n=(t=new f).port2,t.port1.onmessage=v,e=i(n.postMessage,n,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts?(e=function(e){a.postMessage(e+"","*")},a.addEventListener("message",v,!1)):e=h in s("script")?function(e){r.appendChild(s("script"))[h]=function(){r.removeChild(this),g.call(e)}}:function(e){setTimeout(i(g,e,1),0)}),module.exports={set:u,clear:p};
},{"./_ctx":"3zRh","./_invoke":"o4G5","./_html":"ebIA","./_dom-create":"9kxq","./_global":"i1Q6","./_cof":"ShN9"}],"H109":[function(require,module,exports) {


var e=require("./_global"),t=require("./_task").set,r=e.MutationObserver||e.WebKitMutationObserver,n=e.process,o=e.Promise,a="process"==require("./_cof")(n);module.exports=function(){var i,c,s,v=function(){var e,t;for(a&&(e=n.domain)&&e.exit();i;){t=i.fn,i=i.next;try{t()}catch(e){throw i?s():c=void 0,e}}c=void 0,e&&e.enter()};if(a)s=function(){n.nextTick(v)};else if(!r||e.navigator&&e.navigator.standalone)if(o&&o.resolve){var u=o.resolve();s=function(){u.then(v)}}else s=function(){t.call(e,v)};else{var f=!0,l=document.createTextNode("");new r(v).observe(l,{characterData:!0}),s=function(){l.data=f=!f}}return function(e){var t={fn:e,next:void 0};c&&(c.next=t),i||(i=t,s()),c=t}};
},{"./_global":"i1Q6","./_task":"uzcO","./_cof":"ShN9"}],"AIlg":[function(require,module,exports) {
"use strict";var r=require("./_a-function");function e(e){var o,t;this.promise=new e(function(r,e){if(void 0!==o||void 0!==t)throw TypeError("Bad Promise constructor");o=r,t=e}),this.resolve=r(o),this.reject=r(t)}module.exports.f=function(r){return new e(r)};
},{"./_a-function":"g31e"}],"kX4D":[function(require,module,exports) {
module.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}};
},{}],"5Czc":[function(require,module,exports) {
var r=require("./_an-object"),e=require("./_is-object"),i=require("./_new-promise-capability");module.exports=function(o,t){if(r(o),e(t)&&t.constructor===o)return t;var u=i.f(o);return(0,u.resolve)(t),u.promise};
},{"./_an-object":"zotD","./_is-object":"BxvP","./_new-promise-capability":"AIlg"}],"O6kh":[function(require,module,exports) {
var r=require("./_hide");module.exports=function(e,i,n){for(var o in i)n&&e[o]?e[o]=i[o]:r(e,o,i[o]);return e};
},{"./_hide":"akPY"}],"FGzK":[function(require,module,exports) {

"use strict";var e=require("./_global"),r=require("./_core"),i=require("./_object-dp"),t=require("./_descriptors"),u=require("./_wks")("species");module.exports=function(o){var c="function"==typeof r[o]?r[o]:e[o];t&&c&&!c[u]&&i.f(c,u,{configurable:!0,get:function(){return this}})};
},{"./_global":"i1Q6","./_core":"zKeE","./_object-dp":"Gfzd","./_descriptors":"6MLN","./_wks":"Ug9I"}],"Lli7":[function(require,module,exports) {
var r=require("./_wks")("iterator"),t=!1;try{var n=[7][r]();n.return=function(){t=!0},Array.from(n,function(){throw 2})}catch(r){}module.exports=function(n,e){if(!e&&!t)return!1;var u=!1;try{var o=[7],c=o[r]();c.next=function(){return{done:u=!0}},o[r]=function(){return c},n(o)}catch(r){}return u};
},{"./_wks":"Ug9I"}],"9kJF":[function(require,module,exports) {


"use strict";var e,r,t,i,n=require("./_library"),o=require("./_global"),c=require("./_ctx"),s=require("./_classof"),u=require("./_export"),a=require("./_is-object"),_=require("./_a-function"),h=require("./_an-instance"),f=require("./_for-of"),l=require("./_species-constructor"),v=require("./_task").set,p=require("./_microtask")(),d=require("./_new-promise-capability"),m=require("./_perform"),q=require("./_promise-resolve"),y="Promise",j=o.TypeError,w=o.process,b=o[y],g="process"==s(w),k=function(){},P=r=d.f,F=!!function(){try{var e=b.resolve(1),r=(e.constructor={})[require("./_wks")("species")]=function(e){e(k,k)};return(g||"function"==typeof PromiseRejectionEvent)&&e.then(k)instanceof r}catch(e){}}(),x=function(e){var r;return!(!a(e)||"function"!=typeof(r=e.then))&&r},S=function(e,r){if(!e._n){e._n=!0;var t=e._c;p(function(){for(var i=e._v,n=1==e._s,o=0,c=function(r){var t,o,c=n?r.ok:r.fail,s=r.resolve,u=r.reject,a=r.domain;try{c?(n||(2==e._h&&G(e),e._h=1),!0===c?t=i:(a&&a.enter(),t=c(i),a&&a.exit()),t===r.promise?u(j("Promise-chain cycle")):(o=x(t))?o.call(t,s,u):s(t)):u(i)}catch(e){u(e)}};t.length>o;)c(t[o++]);e._c=[],e._n=!1,r&&!e._h&&E(e)})}},E=function(e){v.call(o,function(){var r,t,i,n=e._v,c=R(e);if(c&&(r=m(function(){g?w.emit("unhandledRejection",n,e):(t=o.onunhandledrejection)?t({promise:e,reason:n}):(i=o.console)&&i.error&&i.error("Unhandled promise rejection",n)}),e._h=g||R(e)?2:1),e._a=void 0,c&&r.e)throw r.v})},R=function(e){return 1!==e._h&&0===(e._a||e._c).length},G=function(e){v.call(o,function(){var r;g?w.emit("rejectionHandled",e):(r=o.onrejectionhandled)&&r({promise:e,reason:e._v})})},H=function(e){var r=this;r._d||(r._d=!0,(r=r._w||r)._v=e,r._s=2,r._a||(r._a=r._c.slice()),S(r,!0))},T=function(e){var r,t=this;if(!t._d){t._d=!0,t=t._w||t;try{if(t===e)throw j("Promise can't be resolved itself");(r=x(e))?p(function(){var i={_w:t,_d:!1};try{r.call(e,c(T,i,1),c(H,i,1))}catch(e){H.call(i,e)}}):(t._v=e,t._s=1,S(t,!1))}catch(e){H.call({_w:t,_d:!1},e)}}};F||(b=function(r){h(this,b,y,"_h"),_(r),e.call(this);try{r(c(T,this,1),c(H,this,1))}catch(e){H.call(this,e)}},(e=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=require("./_redefine-all")(b.prototype,{then:function(e,r){var t=P(l(this,b));return t.ok="function"!=typeof e||e,t.fail="function"==typeof r&&r,t.domain=g?w.domain:void 0,this._c.push(t),this._a&&this._a.push(t),this._s&&S(this,!1),t.promise},catch:function(e){return this.then(void 0,e)}}),t=function(){var r=new e;this.promise=r,this.resolve=c(T,r,1),this.reject=c(H,r,1)},d.f=P=function(e){return e===b||e===i?new t(e):r(e)}),u(u.G+u.W+u.F*!F,{Promise:b}),require("./_set-to-string-tag")(b,y),require("./_set-species")(y),i=require("./_core")[y],u(u.S+u.F*!F,y,{reject:function(e){var r=P(this);return(0,r.reject)(e),r.promise}}),u(u.S+u.F*(n||!F),y,{resolve:function(e){return q(n&&this===i?b:this,e)}}),u(u.S+u.F*!(F&&require("./_iter-detect")(function(e){b.all(e).catch(k)})),y,{all:function(e){var r=this,t=P(r),i=t.resolve,n=t.reject,o=m(function(){var t=[],o=0,c=1;f(e,!1,function(e){var s=o++,u=!1;t.push(void 0),c++,r.resolve(e).then(function(e){u||(u=!0,t[s]=e,--c||i(t))},n)}),--c||i(t)});return o.e&&n(o.v),t.promise},race:function(e){var r=this,t=P(r),i=t.reject,n=m(function(){f(e,!1,function(e){r.resolve(e).then(t.resolve,i)})});return n.e&&i(n.v),t.promise}});
},{"./_library":"1kq3","./_global":"i1Q6","./_ctx":"3zRh","./_classof":"ZHvQ","./_export":"vSO4","./_is-object":"BxvP","./_a-function":"g31e","./_an-instance":"KUik","./_for-of":"ozpD","./_species-constructor":"B1ls","./_task":"uzcO","./_microtask":"H109","./_new-promise-capability":"AIlg","./_perform":"kX4D","./_promise-resolve":"5Czc","./_wks":"Ug9I","./_redefine-all":"O6kh","./_set-to-string-tag":"11Ut","./_set-species":"FGzK","./_core":"zKeE","./_iter-detect":"Lli7"}],"zaru":[function(require,module,exports) {

"use strict";var r=require("./_export"),e=require("./_core"),t=require("./_global"),n=require("./_species-constructor"),i=require("./_promise-resolve");r(r.P+r.R,"Promise",{finally:function(r){var o=n(this,e.Promise||t.Promise),u="function"==typeof r;return this.then(u?function(e){return i(o,r()).then(function(){return e})}:r,u?function(e){return i(o,r()).then(function(){throw e})}:r)}});
},{"./_export":"vSO4","./_core":"zKeE","./_global":"i1Q6","./_species-constructor":"B1ls","./_promise-resolve":"5Czc"}],"+CEt":[function(require,module,exports) {
"use strict";var r=require("./_export"),e=require("./_new-promise-capability"),i=require("./_perform");r(r.S,"Promise",{try:function(r){var t=e.f(this),o=i(r);return(o.e?t.reject:t.resolve)(o.v),t.promise}});
},{"./_export":"vSO4","./_new-promise-capability":"AIlg","./_perform":"kX4D"}],"9u1Q":[function(require,module,exports) {
require("../modules/es6.object.to-string"),require("../modules/es6.string.iterator"),require("../modules/web.dom.iterable"),require("../modules/es6.promise"),require("../modules/es7.promise.finally"),require("../modules/es7.promise.try"),module.exports=require("../modules/_core").Promise;
},{"../modules/es6.object.to-string":"tuDi","../modules/es6.string.iterator":"i+u+","../modules/web.dom.iterable":"COf8","../modules/es6.promise":"9kJF","../modules/es7.promise.finally":"zaru","../modules/es7.promise.try":"+CEt","../modules/_core":"zKeE"}],"L3Vt":[function(require,module,exports) {
module.exports={default:require("core-js/library/fn/promise"),__esModule:!0};
},{"core-js/library/fn/promise":"9u1Q"}],"kcQR":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("../core-js/promise"),t=n(e);function n(e){return e&&e.__esModule?e:{default:e}}exports.default=function(e){return function(){var n=e.apply(this,arguments);return new t.default(function(e,r){return function u(o,i){try{var f=n[o](i),c=f.value}catch(e){return void r(e)}if(!f.done)return t.default.resolve(c).then(function(e){u("next",e)},function(e){u("throw",e)});e(c)}("next")})}};
},{"../core-js/promise":"L3Vt"}],"/sTc":[function(require,module,exports) {
var define;
var t;!function(){var i=function(t){for(var i in this.options={maxCache:10,enableCache:!0,insertOrder:!1,returnRoot:!1,insert:null,sort:null,clip:null,copy:null,merge:null},this.root={},this.index=0,t)t.hasOwnProperty(i)&&(this.options[i]=t[i]);"function"!=typeof this.options.insert&&(this.options.insert=function(t,i){return this.options.insertOrder&&void 0===i.d&&void 0===i.o&&(i={d:i,o:this.index++}),t&&t.length?t.push(i):t=[i],t}),"function"!=typeof this.options.sort&&(this.options.insertOrder?this.options.insertOrder&&(this.options.sort=function(){this.sort(function(t,i){return t.o-i.o})}):this.options.sort=function(){this.sort()}),"function"!=typeof this.options.clip&&(this.options.clip=function(t){this.length>t&&this.splice(t,this.length-t)}),"function"!=typeof this.options.copy&&(this.options.copy=function(t){return t.slice(0)}),"function"!=typeof this.options.merge&&(this.options.merge=function(t,i,o){for(var s=0,n=i.length;s<n;s++)t=this.options.insert.call(this,t,i[s]),this.options.sort.call(t,o),this.options.clip.call(t,this.options.maxCache);return t})};i.prototype={_addCacheData:function(t,i){return!(this.root===t&&!this.options.returnRoot||!1===this.options.enableCache)&&(t.$d||(t.$d={}),t.$d=this.options.insert.call(this,t.$d,i),this.options.sort.call(t.$d),this.options.clip.call(t.$d,this.options.maxCache),!0)},_addSuffix:function(t,i,o){var s=t.charAt(0),n=t.substring(1)||null,e={$d:{}};n&&(e.$s=n),void 0===o[s]?o[s]=e:void 0===o[s].$d&&(o[s].$d={},n&&void 0===o[s].$s&&(o[s].$s=n)),o[s].$d=this.options.insert.call(this,o[s].$d,i),this.options.sort.call(o[s].$d)},_moveSuffix:function(t,i,o){var s=t.charAt(0),n=t.substring(1)||null,e={$d:{}};n&&(e.$s=n),void 0===o[s]&&(o[s]=e),o[s].$d=this.options.copy(i)},_getDataAtNode:function(t,i){var o;return this.options.enableCache?(this.options.sort.call(t.$d,i),o=t.$d):o=this._getSubtree(t,i),this.options.insertOrder&&(o=this._stripInsertOrder(o)),o?this.options.copy(o):void 0},_stripInsertOrder:function(t){if(void 0!==t){for(var i=[],o=0,s=t.length;o<s;o++)i.push(t[o].d);return i}},_getSubtree:function(t,i){for(var o,s,n=[t];s=n.pop();)for(var e in s)s.hasOwnProperty(e)&&("$d"==e?(void 0===o&&(o=[]),o=this.options.merge.call(this,o,s.$d,i)):"$s"!=e&&n.push(s[e]));return o},add:function(t,i){if("string"!=typeof t)return!1;1==arguments.length&&(i=t),t=t.toLowerCase();for(var o=this.root,s=0,n=t.length;s<n;s++){var e=t.charAt(s);if(o[e])s==n-1?(this._addCacheData(o,i),this._addCacheData(o[e],i)||this._addSuffix(e,i,o)):(this._addCacheData(o,i),o=o[e]);else{if(o.$s){if(o.$s==t.substring(s)){this._addCacheData(o,i)||(o.$d=this.options.insert.call(this,o.$d,i),this.options.sort.call(o.$d));break}this._moveSuffix(o.$s,o.$d,o),delete o.$s,!1===this.options.enableCache&&delete o.$d}if(!o[e]){this._addSuffix(t.substring(s),i,o),this._addCacheData(o,i);break}this._addCacheData(o,i),s==n-1&&(o[e].$s?(this._moveSuffix(o[e].$s,o[e].$d,o[e]),delete o[e].$s,!1===this.options.enableCache&&delete o[e].$d,this._addSuffix(e,i,o)):this._addCacheData(o[e],i)||this._addSuffix(e,i,o)),o=o[e]}}},remove:function(t){if("string"==typeof t&&""!==t&&!this.options.enableCache){t=t.toLowerCase();var i,o,s,n,e,r,h=this.root,a=0;for(o=0,s=t.length;o<s;o++){if(!h[i=t.charAt(o)]){if(h.$s&&h.$s===t.substring(o))break;return}n=h,e=i,h=h[i]}for(var d in r=this.options.copy(h.$d),this.options.insertOrder&&(r=this._stripInsertOrder(r)),delete h.$d,delete h.$s,h)h.hasOwnProperty(d)&&a++;return a||delete n[e],r}},contains:function(t){if("string"!=typeof t||""==t)return!1;t=t.toLowerCase();for(var i=this.root,o=0,s=t.length;o<s;o++){var n=t.charAt(o);if(!i[n])return!(!i.$s||i.$s!==t.substring(o));i=i[n]}return!(!i.$d||void 0!==i.$s)},find:function(t){if("string"==typeof t&&(""!=t||this.options.returnRoot)){t=t.toLowerCase();for(var i=this.root,o=0,s=t.length;o<s;o++){var n=t.charAt(o);if(!i[n])return i.$s&&0==i.$s.indexOf(t.substring(o))?this._getDataAtNode(i,t):void 0;i=i[n]}return this._getDataAtNode(i,t)}}},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=i),exports.Triejs=i):"function"==typeof t&&t.amd?t("triejs",function(){return i}):this.Triejs=i}();
},{}],"1mqu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("babel-runtime/core-js/promise")),t=i(require("babel-runtime/helpers/asyncToGenerator")),s=i(require("triejs"));function i(e){return e&&e.__esModule?e:{default:e}}var r={name:"tab-complete-input",data:function(){return{trie:{},position:0,wordPos:0,index:0,words:[],word:"",dynamicData:!1,possible:!1,saved:!1}},created:function(){this.dynamicData=this.dataSource instanceof Function,this.dynamicData||this.setData(this.dataSource)},props:{dataSource:{default:[]},format:{default:function(e,t,s){return{word:e,prev:t}},type:Function},value:{default:"",type:String}},methods:{setData:function(e){var t=this;this.trie=new s.default,e.forEach(function(e){t.trie.add(e)})},handleKey:function(){var s=(0,t.default)(regeneratorRuntime.mark(function t(s){var i,r,a,n,o,h,d,u,c,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(9!==s.keyCode){t.next=33;break}if(console.log("tab pressed"),this.saved){t.next=28;break}this.position=this.getCursorPos(),this.words=this.value.split(" "),i=0,r=0;case 7:if(!(r<this.words.length)){t.next=17;break}if(a=this.words[r],!((i+=a.length+1)>=this.position)){t.next=14;break}return this.word=this.words[r],this.wordPos=r,t.abrupt("break",17);case 14:r++,t.next=7;break;case 17:if(""!=this.word&&s.preventDefault(),!this.dynamicData){t.next=24;break}return n=this.dataSource(this.word,this.wordPos),t.next=22,e.default.resolve(n);case 22:o=t.sent,this.setData(o);case 24:this.saved=!0,this.possible=this.trie.find(this.word),t.next=29;break;case 28:this.index++;case 29:this.possible&&this.index>=this.possible.length&&(this.index=0),this.possible&&(s.preventDefault(),h=this.words,d=this.possible[this.index],u="",h.length>1&&(u=h[this.wordPos-1]),c=this.format(d,u,this.wordPos),h[this.wordPos]=c.word,c.prev&&(h[this.wordPos-1]=c.prev),l=this.words.slice(0,this.wordPos+1).join(" ").length,this.value=h.join(" "),this.updateValue(this.value),this.selectRange(l,l)),t.next=35;break;case 33:this.saved=!1,this.index=0;case 35:case"end":return t.stop()}},t,this)}));return function(e){return s.apply(this,arguments)}}(),updateValue:function(e){this.$emit("input",e)},selectRange:function(e,t){this.$el.focus(),this.$el.setSelectionRange(e,t)},getCursorPos:function(){return this.$el.selectionStart}}};exports.default=r;
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{attrs:{type:"text"},domProps:{value:e.value},on:{keydown:e.handleKey,input:function(t){e.updateValue(t.target.value)}}})},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{"babel-runtime/core-js/promise":"L3Vt","babel-runtime/helpers/asyncToGenerator":"kcQR","triejs":"/sTc"}]},{},["1mqu"], null)
//# sourceMappingURL=/tab-complete-input.map