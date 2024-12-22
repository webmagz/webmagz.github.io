// Forkphorus scripts...
window.ScratchSB1Converter=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e,n){"use strict";n.d(e,"d",function(){return p}),n.d(e,"a",function(){return d}),n.d(e,"j",function(){return b}),n.d(e,"e",function(){return g}),n.d(e,"f",function(){return E}),n.d(e,"h",function(){return A}),n.d(e,"g",function(){return R}),n.d(e,"i",function(){return I}),n.d(e,"b",function(){return C}),n.d(e,"c",function(){return j});var r=n(3);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f,l,h,y=function(){throw new Error("Not implemented")},p=(f=new Uint16Array(1),l=new Uint8Array(f.buffer),f[0]=43707,187===l[0]),d=function(){function t(e){var n=e.size,r=void 0===n?0:n,i=e.sizeOf,o=void 0===i?function(){return r}:i,u=e.writeSizeOf,a=void 0===u?y:u,c=e.toBytes,f=void 0===c?new Uint8Array(1):c,l=e.read,h=e.write,p=void 0===h?y:h;s(this,t),this.size=r,this.sizeOf=o,this.writeSizeOf=a,this.toBytes=f,this.bytes=new Uint8Array(f.buffer),this.read=l,this.write=p}var e,n,r;return e=t,(n=[{key:"asPropertyObject",value:function(t){var e=this;return{get:function(){return e.read(this.uint8a,t+this.offset)},set:function(n){return e.write(this.uint8a,t+this.offset,n)},enumerable:!0}}},{key:"read",value:function(){return null}}])&&c(e.prototype,n),r&&c(e,r),t}(),b=new d({size:1,read:function(t,e){return t[e]},write:function(t,e,n){return t[e]=n,n}}),v={size:2,read:function(t,e){return this.bytes[1]=t[e+0],this.bytes[0]=t[e+1],this.toBytes[0]},write:function(t,e,n){return this.toBytes[0]=n,t[e+0]=this.bytes[1],t[e+1]=this.bytes[0],n}},w={size:2,read:function(t,e){return this.bytes[0]=t[e+0],this.bytes[1]=t[e+1],this.toBytes[0]},write:function(t,e,n){return this.toBytes[0]=n,t[e+0]=this.bytes[0],t[e+1]=this.bytes[1],n}};h=p?v:w;new d(Object.assign({},h,{toBytes:new Uint16Array(1)}));var m,g=new d(Object.assign({},h,{toBytes:new Int16Array(1)})),S={size:4,read:function(t,e){return this.bytes[3]=t[e+0],this.bytes[2]=t[e+1],this.bytes[1]=t[e+2],this.bytes[0]=t[e+3],this.toBytes[0]},write:function(t,e,n){return this.toBytes[0]=n,t[e+0]=this.bytes[3],t[e+1]=this.bytes[2],t[e+2]=this.bytes[1],t[e+3]=this.bytes[0],n}},O={size:4,read:function(t,e){return this.bytes[0]=t[e+0],this.bytes[1]=t[e+1],this.bytes[2]=t[e+2],this.bytes[3]=t[e+3],this.toBytes[0]},write:function(t,e,n){return this.toBytes[0]=n,t[e+0]=this.bytes[0],t[e+1]=this.bytes[1],t[e+2]=this.bytes[2],t[e+3]=this.bytes[3],n}};m=p?S:O;var _,E=new d(Object.assign({},m,{toBytes:new Int32Array(1)})),A=new d(Object.assign({},m,{toBytes:new Uint32Array(1)}));_=p?w:v;var T,R=new d(Object.assign({},_,{toBytes:new Uint16Array(1)}));T=p?O:S;var k,I=new d(Object.assign({},T,{toBytes:new Uint32Array(1)}));k={size:8,read:function(t,e){return this.bytes[7]=t[e+0],this.bytes[6]=t[e+1],this.bytes[5]=t[e+2],this.bytes[4]=t[e+3],this.bytes[3]=t[e+4],this.bytes[2]=t[e+5],this.bytes[1]=t[e+6],this.bytes[0]=t[e+7],this.toBytes[0]}};var C=new d(Object.assign({},k,{toBytes:new Float64Array(1)})),j=function(t){function e(t){return s(this,e),o(this,u(e).call(this,{size:t,read:function(e,n){for(var i="",o=0;o<t;o++){var u=e[n+o];Object(r.c)(u<=127,"Non-ascii character in FixedAsciiString"),i+=String.fromCharCode(u)}return i},write:function(e,n,i){for(var o=0;o<t;o++){var u=i.charCodeAt(o);Object(r.c)(u<=127,"Non-ascii character in FixedAsciiString"),e[n+o]=u}return i}}))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,d),e}()},function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i={NULL:1,TRUE:2,FALSE:3,SMALL_INT:4,SMALL_INT_16:5,LARGE_INT_POSITIVE:6,LARGE_INT_NEGATIVE:7,FLOATING:8,STRING:9,SYMBOL:10,BYTES:11,SOUND:12,BITMAP:13,UTF8:14,ARRAY:20,ORDERED_COLLECTION:21,SET:22,IDENTITY_SET:23,DICTIONARY:24,IDENTITY_DICTIONARY:25,COLOR:30,TRANSLUCENT_COLOR:31,POINT:32,RECTANGLE:33,FORM:34,SQUEAK:35,OBJECT_REF:99,MORPH:100,ALIGNMENT:104,STATIC_STRING:105,UPDATING_STRING:106,SAMPLED_SOUND:109,IMAGE_MORPH:110,SPRITE:124,STAGE:125,WATCHER:155,IMAGE_MEDIA:162,SOUND_MEDIA:164,MULTILINE_STRING:171,WATCHER_READOUT_FRAME:173,WATCHER_SLIDER:174,LIST_WATCHER:175},o=Object.entries(i).reduce(function(t,e){var n=r(e,2),i=n[0];return t[n[1]]=i,t},{})},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}n.d(e,"a",function(){return f});var f=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Uint8Array(this.size),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;a(this,t),this.uint8a=e,this.offset=n}return c(t,[{key:"equals",value:function(t){for(var e in t)if(this[e]!==t[e])return!1;return!0}},{key:"view",value:function(){var t=this.constructor.name,e={toString:function(){return t}};for(var n in this.shape)e[n]=this[n];return e}}],[{key:"initConstructor",value:function(t){return t.size=t.prototype.size,t}},{key:"extend",value:function(e){var n=function(n){function r(){return a(this,r),i(this,o(r).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(r,t),c(r,[{key:"shape",get:function(){return e}}]),r}(),r=0;return Object.keys(e).forEach(function(t){if(Object.defineProperty(n.prototype,t,e[t].asPropertyObject(r)),0===e[t].size)throw new Error("Packet cannot be defined with variable sized members.");r+=e[t].size}),n.prototype.size=r,n.size=r,n}}]),t}()},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return s(t,arguments,f(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)})(t)}function s(t,e,n){return(s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&c(i,n.prototype),i}).apply(null,arguments)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"c",function(){return y}),n.d(e,"a",function(){return l}),n.d(e,"b",function(){return h});var l=function(t){function e(){return i(this,e),o(this,f(e).apply(this,arguments))}return u(e,a(Error)),e}(),h=function(t){function e(){return i(this,e),o(this,f(e).apply(this,arguments))}return u(e,l),e}(),y=function(t,e){if(!t)throw new l(e)};y.validate=function(t,e){if(!t)throw new h(e)}},function(t,e,n){"use strict";n.d(e,"b",function(){return h}),n.d(e,"g",function(){return y}),n.d(e,"f",function(){return p}),n.d(e,"d",function(){return d}),n.d(e,"e",function(){return b}),n.d(e,"a",function(){return v}),n.d(e,"c",function(){return w});var r=n(1);function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function u(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var h=function t(e,n){l(this,t),this.classId=e,this.position=n},y=function(t){return"object"===f(t)&&t?t.valueOf():t},p=function(t){function e(t,n,r){var i;return l(this,e),(i=u(this,a(e).call(this,t,n))).value=r,i}return s(e,h),o(e,[{key:"valueOf",value:function(){return this.value}},{key:"toJSON",value:function(){return this.classId===r.a.TRANSLUCENT_COLOR||this.classId===r.a.COLOR?16777215&this.value:this.value}},{key:"toString",value:function(){return this.value}}]),e}(),d=function(t){function e(t,n,r){var i;return l(this,e),(i=u(this,a(e).call(this,t,n))).size=r,i}return s(e,h),e}(),b=function(t){function e(t,n,r){var i;return l(this,e),(i=u(this,a(e).call(this,t,n))).index=r,i}return s(e,h),o(e,[{key:"valueOf",value:function(){return"Ref(".concat(this.index,")")}}]),e}(),v=function(t){function e(t,n){return l(this,e),u(this,a(e).call(this,t,n,0))}return s(e,d),e}(),w=function(t){function e(t,n,r,i){var o;return l(this,e),(o=u(this,a(e).call(this,t,n,i))).version=r,o}return s(e,d),e}()},function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r=n(1);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=function(){function t(e){var n=e.classId,r=e.version,i=e.fields;s(this,t),this.classId=n,this.version=r,this.fields=i}return f(t,[{key:"string",value:function(t){return String(this.fields[t])}},{key:"number",value:function(t){return+this.fields[t]}},{key:"boolean",value:function(t){return!!this.fields[t]}},{key:"toString",value:function(){return this.constructor===t?"".concat(this.constructor.name," ").concat(this.classId," ").concat(r.b[this.classId]):this.constructor.name}},{key:"FIELDS",get:function(){return[]}},{key:"RAW_FIELDS",get:function(){return this.fields}}],[{key:"define",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=function(t){function r(){return s(this,r),o(this,u(r).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(r,n),f(r,[{key:"FIELDS",get:function(){return e}}],[{key:"FIELDS",get:function(){return e}}]),r}();return Object.keys(e).forEach(function(t){var n=e[t];Object.defineProperty(r.prototype,t.toLowerCase().replace(/_(\w)/g,function(t){return l(t,2)[1].toUpperCase()}),{get:function(){return this.fields[n]}})}),r}}]),t}()},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(3);function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.buffer=e,this.position=n,this.uint8a=new Uint8Array(this.buffer)}var e,n,o;return e=t,(n=[{key:"read",value:function(t){var e=t.read(this.uint8a,this.position);return 0===t.size?this.position+=t.sizeOf(this.uint8a,this.position):this.position+=t.size,e}},{key:"readStruct",value:function(t){var e=new t(this.uint8a,this.position);return this.position+=t.size,e}},{key:"resize",value:function(t){if(this.buffer.byteLength<t){var e=this.uint8a,n=Math.pow(2,Math.ceil(Math.log(t)/Math.log(2)));this.buffer=new ArrayBuffer(n),this.uint8a=new Uint8Array(this.buffer),this.uint8a.set(e)}}},{key:"write",value:function(t,e){return 0===t.size?this.resize(this.position+t.writeSizeOf(e)):this.resize(this.position+t.size),t.write(this.uint8a,this.position,e),0===t.size?this.position+=t.writeSizeOf(this.uint8a,this.position):this.position+=t.size,e}},{key:"writeStruct",value:function(t,e){this.resize(this.position+t.size);var n=Object.assign(new t(this.uint8a,this.position),e);return this.position+=t.size,n}},{key:"writeBytes",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.length;Object(r.c)(t instanceof Uint8Array,"writeBytes must be passed an Uint8Array"),this.resize(this.position+(n-e));for(var i=e;i<n;i++)this.uint8a[this.position+i-e]=t[i];return this.position+=n-e,t}}])&&i(e.prototype,n),o&&i(e,o),t}()},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",function(){return i});var i=function(){function t(){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.bit=new Uint32Array(1),this.crc=0,this.c=0,this.table=[];for(var n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;this.table[n]=e>>>0}}var e,n,i;return e=t,(n=[{key:"update",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.length,r=~this.crc>>>0,i=0;i<n;i++)r=r>>>8^this.table[255&(r^t[e+i])];return this.crc=~r>>>0,this}},{key:"digest",get:function(){return this.crc}}])&&r(e.prototype,n),i&&r(e,i),t}()},function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
!function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,AMD=__webpack_require__(16),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t){return function(e){return new Md5(!0).update(e)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Md5},t.update=function(e){return t.create().update(e)};for(var e=0;e<OUTPUT_TYPES.length;++e){var n=OUTPUT_TYPES[e];t[n]=createOutputMethod(n)}return t},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"==typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null==t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){if(t)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if("string"!==n){if("object"!==n)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||ARRAY_BUFFER&&ArrayBuffer.isView(t)))throw ERROR;e=!0}for(var r,i,o=0,u=t.length,a=this.blocks,s=this.buffer8;o<u;){if(this.hashed&&(this.hashed=!1,a[0]=a[16],a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),e)if(ARRAY_BUFFER)for(i=this.start;o<u&&i<64;++o)s[i++]=t[o];else for(i=this.start;o<u&&i<64;++o)a[i>>2]|=t[o]<<SHIFT[3&i++];else if(ARRAY_BUFFER)for(i=this.start;o<u&&i<64;++o)(r=t.charCodeAt(o))<128?s[i++]=r:r<2048?(s[i++]=192|r>>6,s[i++]=128|63&r):r<55296||r>=57344?(s[i++]=224|r>>12,s[i++]=128|r>>6&63,s[i++]=128|63&r):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++o)),s[i++]=240|r>>18,s[i++]=128|r>>12&63,s[i++]=128|r>>6&63,s[i++]=128|63&r);else for(i=this.start;o<u&&i<64;++o)(r=t.charCodeAt(o))<128?a[i>>2]|=r<<SHIFT[3&i++]:r<2048?(a[i>>2]|=(192|r>>6)<<SHIFT[3&i++],a[i>>2]|=(128|63&r)<<SHIFT[3&i++]):r<55296||r>=57344?(a[i>>2]|=(224|r>>12)<<SHIFT[3&i++],a[i>>2]|=(128|r>>6&63)<<SHIFT[3&i++],a[i>>2]|=(128|63&r)<<SHIFT[3&i++]):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++o)),a[i>>2]|=(240|r>>18)<<SHIFT[3&i++],a[i>>2]|=(128|r>>12&63)<<SHIFT[3&i++],a[i>>2]|=(128|r>>6&63)<<SHIFT[3&i++],a[i>>2]|=(128|63&r)<<SHIFT[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=EXTRA[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var t,e,n,r,i,o,u=this.blocks;this.first?e=((e=((t=((t=u[0]-680876937)<<7|t>>>25)-271733879<<0)^(n=((n=(-271733879^(r=((r=(-1732584194^2004318071&t)+u[1]-117830708)<<12|r>>>20)+t<<0)&(-271733879^t))+u[2]-1126478375)<<17|n>>>15)+r<<0)&(r^t))+u[3]-1316259209)<<22|e>>>10)+n<<0:(t=this.h0,e=this.h1,n=this.h2,e=((e+=((t=((t+=((r=this.h3)^e&(n^r))+u[0]-680876936)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+u[1]-389564586)<<12|r>>>20)+t<<0)&(t^e))+u[2]+606105819)<<17|n>>>15)+r<<0)&(r^t))+u[3]-1044525330)<<22|e>>>10)+n<<0),e=((e+=((t=((t+=(r^e&(n^r))+u[4]-176418897)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+u[5]+1200080426)<<12|r>>>20)+t<<0)&(t^e))+u[6]-1473231341)<<17|n>>>15)+r<<0)&(r^t))+u[7]-45705983)<<22|e>>>10)+n<<0,e=((e+=((t=((t+=(r^e&(n^r))+u[8]+1770035416)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+u[9]-1958414417)<<12|r>>>20)+t<<0)&(t^e))+u[10]-42063)<<17|n>>>15)+r<<0)&(r^t))+u[11]-1990404162)<<22|e>>>10)+n<<0,e=((e+=((t=((t+=(r^e&(n^r))+u[12]+1804603682)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+u[13]-40341101)<<12|r>>>20)+t<<0)&(t^e))+u[14]-1502002290)<<17|n>>>15)+r<<0)&(r^t))+u[15]+1236535329)<<22|e>>>10)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+u[1]-165796510)<<5|t>>>27)+e<<0)^e))+u[6]-1069501632)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+u[11]+643717713)<<14|n>>>18)+r<<0)^r))+u[0]-373897302)<<20|e>>>12)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+u[5]-701558691)<<5|t>>>27)+e<<0)^e))+u[10]+38016083)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+u[15]-660478335)<<14|n>>>18)+r<<0)^r))+u[4]-405537848)<<20|e>>>12)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+u[9]+568446438)<<5|t>>>27)+e<<0)^e))+u[14]-1019803690)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+u[3]-187363961)<<14|n>>>18)+r<<0)^r))+u[8]+1163531501)<<20|e>>>12)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+u[13]-1444681467)<<5|t>>>27)+e<<0)^e))+u[2]-51403784)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+u[7]+1735328473)<<14|n>>>18)+r<<0)^r))+u[12]-1926607734)<<20|e>>>12)+n<<0,e=((e+=((o=(r=((r+=((i=e^n)^(t=((t+=(i^r)+u[5]-378558)<<4|t>>>28)+e<<0))+u[8]-2022574463)<<11|r>>>21)+t<<0)^t)^(n=((n+=(o^e)+u[11]+1839030562)<<16|n>>>16)+r<<0))+u[14]-35309556)<<23|e>>>9)+n<<0,e=((e+=((o=(r=((r+=((i=e^n)^(t=((t+=(i^r)+u[1]-1530992060)<<4|t>>>28)+e<<0))+u[4]+1272893353)<<11|r>>>21)+t<<0)^t)^(n=((n+=(o^e)+u[7]-155497632)<<16|n>>>16)+r<<0))+u[10]-1094730640)<<23|e>>>9)+n<<0,e=((e+=((o=(r=((r+=((i=e^n)^(t=((t+=(i^r)+u[13]+681279174)<<4|t>>>28)+e<<0))+u[0]-358537222)<<11|r>>>21)+t<<0)^t)^(n=((n+=(o^e)+u[3]-722521979)<<16|n>>>16)+r<<0))+u[6]+76029189)<<23|e>>>9)+n<<0,e=((e+=((o=(r=((r+=((i=e^n)^(t=((t+=(i^r)+u[9]-640364487)<<4|t>>>28)+e<<0))+u[12]-421815835)<<11|r>>>21)+t<<0)^t)^(n=((n+=(o^e)+u[15]+530742520)<<16|n>>>16)+r<<0))+u[2]-995338651)<<23|e>>>9)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+u[0]-198630844)<<6|t>>>26)+e<<0)|~n))+u[7]+1126891415)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+u[14]-1416354905)<<15|n>>>17)+r<<0)|~t))+u[5]-57434055)<<21|e>>>11)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+u[12]+1700485571)<<6|t>>>26)+e<<0)|~n))+u[3]-1894986606)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+u[10]-1051523)<<15|n>>>17)+r<<0)|~t))+u[1]-2054922799)<<21|e>>>11)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+u[8]+1873313359)<<6|t>>>26)+e<<0)|~n))+u[15]-30611744)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+u[6]-1560198380)<<15|n>>>17)+r<<0)|~t))+u[13]+1309151649)<<21|e>>>11)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+u[4]-145523070)<<6|t>>>26)+e<<0)|~n))+u[11]-1120210379)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+u[2]+718787259)<<15|n>>>17)+r<<0)|~t))+u[9]-343485551)<<21|e>>>11)+n<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=n-1732584194<<0,this.h3=r+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,r=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,r=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,e,n,r="",i=this.array(),o=0;o<15;)t=i[o++],e=i[o++],n=i[o++],r+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|e>>>4)]+BASE64_ENCODE_CHAR[63&(e<<2|n>>>6)]+BASE64_ENCODE_CHAR[63&n];return t=i[o],r+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"=="};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__(14),__webpack_require__(15))},,function(t,e,n){"use strict";var r=n(6),i=n(3),o=n(2),u=n(0);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(){return s(this,e),f(this,l(e).apply(this,arguments))}var n,r,a;return h(e,o["a"].extend({support8Bit:u["j"],png:new u["c"](3),dosLineEnding:new u["c"](2),dosEndOfFile:new u["c"](1),unixLineEnding:new u["c"](1)})),n=e,a=[{key:"validate",value:function(){Object(i.c)(this.equals({support8Bit:137,png:"PNG",dosLineEnding:"\r\n",dosEndOfFile:"",unixLineEnding:"\n"}),"PNGSignature does not match the expected values")}}],(r=null)&&c(n.prototype,r),a&&c(n,a),e}();o.a.initConstructor(p);var d=function(t){function e(){return s(this,e),f(this,l(e).apply(this,arguments))}return h(e,o["a"].extend({length:u["h"],chunkType:new u["c"](4)})),e}();o.a.initConstructor(d);var b=function(t){function e(){return s(this,e),f(this,l(e).apply(this,arguments))}return h(e,o["a"].extend({checksum:u["h"]})),e}();o.a.initConstructor(b);var v=function(t){function e(){return s(this,e),f(this,l(e).apply(this,arguments))}return h(e,o["a"].extend({width:u["h"],height:u["h"],bitDepth:u["j"],colorType:u["j"],compressionMethod:u["j"],filterMethod:u["j"],interlaceMethod:u["j"]})),e}();o.a.initConstructor(v);var w=function(t){function e(){return s(this,e),f(this,l(e).apply(this,arguments))}return h(e,o["a"].extend({method:u["j"]})),e}();function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}o.a.initConstructor(w);var g=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.adler=1}var e,n,r;return e=t,(n=[{key:"update",value:function(t,e,n){for(var r=65535&this.adler,i=this.adler>>>16,o=0;o<n;o++)i=(i+(r=(r+t[e+o])%65521))%65521;return this.adler=i<<16|r,this}},{key:"digest",get:function(){return this.adler}}])&&m(e.prototype,n),r&&m(e,r),t}();function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){return!e||"object"!==S(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function A(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var R=function(t){function e(){return O(this,e),_(this,E(e).apply(this,arguments))}return A(e,o["a"].extend({cmf:u["j"],flag:u["j"]})),e}();o.a.initConstructor(R);var k=function(t){function e(){return O(this,e),_(this,E(e).apply(this,arguments))}return A(e,o["a"].extend({lastPacket:u["j"],length:u["g"],lengthCheck:u["g"]})),e}();o.a.initConstructor(k);var I=function(t){function e(){return O(this,e),_(this,E(e).apply(this,arguments))}return A(e,o["a"].extend({checksum:u["i"]})),e}();function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}o.a.initConstructor(I);var j=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.stream=e}var e,n,r;return e=t,(n=[{key:"writeStruct",value:function(t,e){return this.stream.writeStruct(t,e)}},{key:"writeBytes",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.length;return this.stream.writeBytes(t,e,n)}},{key:"uint8a",get:function(){return this.stream.uint8a},set:function(t){return this.stream.uint8a=t,this.stream.uint8a}},{key:"position",get:function(){return this.stream.position},set:function(t){return this.stream.position=t,this.stream.position}}])&&C(e.prototype,n),r&&C(e,r),t}();function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function M(t,e){return!e||"object"!==P(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var D=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=M(this,N(e).call(this,t))).stream.writeStruct(R,{cmf:8,flag:29}),n.adler=new g,n.chunk=n.stream.writeStruct(k,{lastPacket:0,length:0,lengthCheck:65535}),n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(e,j),n=e,i=[{key:"estimateSize",value:function(t){var e=Math.ceil(t/65535);return R.size+e*k.size+I.size+t}}],(r=[{key:"writeStruct",value:function(t,e){this.writeBytes(Object.assign(new t,e).uint8a)}},{key:"writeBytes",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.length,r=e;n-r>0;){65535===this._deflateIndex&&(this.chunk=this.stream.writeStruct(k,{lastPacket:0,length:0,lengthCheck:65535}));var i=Math.min(n-r,65535-this._deflateIndex);this.stream.writeBytes(t,r,r+i),this._deflateIndex+=i,r+=i}this.adler.update(t,e,n-e)}},{key:"finish",value:function(){this.chunk.lastPacket=1,this.stream.writeStruct(I,{checksum:this.adler.digest})}},{key:"_deflateIndex",get:function(){return this.chunk.length},set:function(t){return this.chunk.length=t,this.chunk.lengthCheck=65535^t,this.chunk.length}}])&&B(n.prototype,r),i&&B(n,i),e}(),L=n(7);function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function U(t,e){return!e||"object"!==H(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var G=function(t){function e(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"IHDR";return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=U(this,F(e).call(this,t))).start=n.stream.writeStruct(d,{length:0,chunkType:r}),n.crc=new L.a,n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(e,j),n=e,i=[{key:"size",value:function(t){return d.size+t+b.size}}],(r=[{key:"finish",value:function(){var t=this.start.offset+this.start.size,e=this.position-t;this.start.length=e,this.crc.update(this.stream.uint8a,t-u.h.size,e+u.h.size),this.stream.writeStruct(b,{checksum:this.crc.digest})}}])&&z(n.prototype,r),i&&z(n,i),e}();function Y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",function(){return W});var W=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,i=[{key:"encode",value:function(e,n,r){return(new t).encode(e,n,r)}}],(n=[{key:"encode",value:function(t,e,n){var i=4*t+w.size,o=i*e,u=p.size+G.size(v.size)+G.size(D.estimateSize(o))+G.size(0),a=new r.a(new ArrayBuffer(u));a.writeStruct(p,{support8Bit:137,png:"PNG",dosLineEnding:"\r\n",dosEndOfFile:"",unixLineEnding:"\n"});var s=new G(a,"IHDR");s.writeStruct(v,{width:t,height:e,bitDepth:8,colorType:6,compressionMethod:0,filterMethod:0,interlaceMethod:0}),s.finish();for(var c=new G(a,"IDAT"),f=new D(c),l=0;l<n.length;){f.writeStruct(w,{method:0});var h=Math.min(n.length-l,i-w.size);f.writeBytes(n,l,l+h),l+=h}return f.finish(),c.finish(),new G(a,"IEND").finish(),a.buffer}}])&&Y(e.prototype,n),i&&Y(e,i),t}()},function(t,e,n){"use strict";var r=n(6),i=n(2),o=n(0);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){function e(){return a(this,e),s(this,c(e).apply(this,arguments))}return f(e,i["a"].extend({riff:new o["c"](4),length:o["i"],wave:new o["c"](4)})),e}();i.a.initConstructor(h);var y=function(t){function e(){return a(this,e),s(this,c(e).apply(this,arguments))}return f(e,i["a"].extend({chunkType:new o["c"](4),length:o["i"]})),e}();i.a.initConstructor(y);var p=function(t){function e(){return a(this,e),s(this,c(e).apply(this,arguments))}return f(e,i["a"].extend({format:o["g"],channels:o["g"],sampleRate:o["i"],bytesPerSec:o["i"],blockAlignment:o["g"],bitsPerSample:o["g"]})),e}();function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}i.a.initConstructor(p),n.d(e,"a",function(){return b});var b=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,i=[{key:"encode",value:function(e,n){return(new t).encode(e,n)}},{key:"samples",value:function(t){var e=new y(t,h.size).length;return new y(t,h.size+y.size+e).length/2}}],(n=[{key:"encode",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.channels,i=void 0===n?1:n,o=e.sampleRate,u=void 0===o?22050:o,a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength),s=h.size+y.size+p.size+y.size+a.length,c=new r.a(new ArrayBuffer(s));return c.writeStruct(h,{riff:"RIFF",length:s-8,wave:"WAVE"}),c.writeStruct(y,{chunkType:"fmt ",length:p.size}),c.writeStruct(p,{format:1,channels:i,sampleRate:u,bytesPerSec:2*u*i,blockAlignment:2*i,bitsPerSample:16}),c.writeStruct(y,{chunkType:"data",length:s-c.position-y.size}),c.writeBytes(a),c.uint8a}}])&&d(e.prototype,n),i&&d(e,i),t}()},function(t,e){t.exports=window["text-encoding"]},function(t,e,n){"use strict";n.r(e);var r=n(6);function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o,u=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.iter=e,this.maxPosition=n}var e,n,r;return e=t,(n=[{key:Symbol.iterator,value:function(){return this}},{key:"next",value:function(){return this.iter.stream.position>=this.maxPosition?{value:null,done:!0}:this.iter.next()}}])&&i(e.prototype,n),r&&i(e,r),t}(),a=n(0),s=n(12),c=n(3);o=a.d?new a.a({size:3,read:function(t,e){return t[e+0]<<16|t[e+1]<<8|t[e+2]}}):new a.a({size:3,read:function(t,e){return t[e+2]<<16|t[e+1]<<8|t[e+0]}});var f,l=new a.a({sizeOf:function(t,e){var n=a.e.read(t,e);return a.e.size+n},read:function(t,e){for(var n=0,r=0,i=a.e.read(t,e),o=0;o<i;o++)n+=r*a.j.read(t,e++),r*=256;return n}}),h=new a.a({sizeOf:function(t,e){var n=a.h.read(t,e);return a.h.size+n},read:function(t,e){var n=a.h.read(t,e);Object(c.c)(n<10485760,"asciiString too big"),e+=4;for(var r="",i=0;i<n;i++)r+=String.fromCharCode(t[e++]);return r}}),y=new a.a({sizeOf:function(t,e){return a.h.size+a.h.read(t,e)},read:function(t,e){var n=a.h.read(t,e);return Object(c.c)(n<10485760,"bytes too big"),e+=a.h.size,Object(c.c)(n<10485760,"uint8a array too big"),new Uint8Array(t.buffer,e,n)}}),p=new a.a({sizeOf:function(t,e){return a.h.size+2*a.h.read(t,e)},read:function(t,e){var n=a.h.read(t,e);Object(c.c)(n<10485760,"sound too big"),e+=a.h.size;var r=2*n;return Object(c.c)(r<10485760,"uint8a array too big"),new Uint8Array(t.buffer,e,r)}}),d=new a.a({sizeOf:function(t,e){return a.h.size+a.h.read(t,e)*a.h.size},read:function(t,e){var n=a.h.read(t,e);Object(c.c)(n<10485760,"bitmap too big"),e+=a.h.size,Object(c.c)(n<10485760,"uint8a array too big");for(var r=new Uint32Array(n),i=0;i<n;i++)r[i]=a.h.read(t,e),e+=a.h.size;return r}});f="undefined"==typeof TextDecoder?new s.TextDecoder:new TextDecoder;var b,v=new a.a({sizeOf:function(t,e){return a.h.size+a.h.read(t,e)},read:function(t,e){var n=a.h.read(t,e);return Object(c.c)(n<10485760,"utf8 too big"),e+=a.h.size,Object(c.c)(n<10485760,"uint8a array too big"),f.decode(new Uint8Array(t.buffer,e,n))}}),w=new a.a({size:4,read:function(t,e){var n=a.h.read(t,e);return(255<<24|(n>>22&255)<<16|(n>>12&255)<<8|n>>2&255)>>>0}}),m=new a.a({size:5,read:function(t,e){var n=a.h.read(t,e);return(a.j.read(t,e)<<24|(n>>22&255)<<16|(n>>12&255)<<8|n>>2&255)>>>0}}),g=n(4),S=n(1);function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A(t,e,n){return e&&E(t.prototype,e),n&&E(t,n),t}var T=function(){function t(e){var n=e.type,r=void 0===n?g.f:n,i=e.read,o=e.value,u=void 0===o?i?function(t){return t.read(i)}:null:o;_(this,t),this.type=r,this.value=u}return A(t,[{key:"next",value:function(t,e,n){return{value:new this.type(e,n,this.value(t)),done:!1}}}]),t}(),R=(O(b={},S.a.NULL,{value:function(){return null}}),O(b,S.a.TRUE,{value:function(){return!0}}),O(b,S.a.FALSE,{value:function(){return!1}}),O(b,S.a.SMALL_INT,{read:a.f}),O(b,S.a.SMALL_INT_16,{read:a.e}),O(b,S.a.LARGE_INT_POSITIVE,{read:l}),O(b,S.a.LARGE_INT_NEGATIVE,{read:l}),O(b,S.a.FLOATING,{read:a.b}),O(b,S.a.STRING,{read:h}),O(b,S.a.SYMBOL,{read:h}),O(b,S.a.BYTES,{read:y}),O(b,S.a.SOUND,{read:p}),O(b,S.a.BITMAP,{read:d}),O(b,S.a.UTF8,{read:v}),O(b,S.a.ARRAY,{type:g.d,read:a.f}),O(b,S.a.ORDERED_COLLECTION,{type:g.d,read:a.f}),O(b,S.a.SET,{type:g.d,read:a.f}),O(b,S.a.IDENTITY_SET,{type:g.d,read:a.f}),O(b,S.a.DICTIONARY,{type:g.d,value:function(t){return 2*t.read(a.f)}}),O(b,S.a.IDENTITY_DICTIONARY,{type:g.d,value:function(t){return 2*t.read(a.f)}}),O(b,S.a.COLOR,{read:w}),O(b,S.a.TRANSLUCENT_COLOR,{read:m}),O(b,S.a.POINT,{type:g.d,value:function(){return 2}}),O(b,S.a.RECTANGLE,{type:g.d,value:function(){return 4}}),O(b,S.a.FORM,{type:g.d,value:function(){return 5}}),O(b,S.a.SQUEAK,{type:g.d,value:function(){return 6}}),O(b,S.a.OBJECT_REF,{type:g.e,read:o}),b),k=Array.from({length:256},function(t,e){return R[e]?new T(R[e]):null}),I=new T({type:g.a,value:function(){return null}}),C=function(){function t(e,n){_(this,t),this.buffer=e,this.stream=new r.a(e,n)}return A(t,[{key:Symbol.iterator,value:function(){return this}},{key:"next",value:function(){if(this.stream.position>=this.stream.uint8a.length)return{value:null,done:!0};var t=this.stream.position,e=this.stream.read(a.j),n=k[e];if(null!==n)return n.next(this.stream,e,t);if(e<S.a.OBJECT_REF)return I.next(this.stream,e,t);var r=this.stream.read(a.j),i=this.stream.read(a.j);return{value:new g.c(e,t,r,i),done:!1}}}]),t}(),j=n(5),P=n(7);function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var M=[0,4278190080,4294967295,4286611584,4294901760,4278255360,4278190335,4278255615,4294967040,4294902015,4280295456,4282400832,4284506208,4288651167,4290756543,4292861919,4278716424,4279242768,4279769112,4280821800,4281348144,4281874488,4282927176,4283453520,4283979864,4285032552,4285558896,4286085240,4287072135,4287598479,4288124823,4289177511,4289703855,4290230199,4291282887,4291809231,4292335575,4293388263,4293914607,4294440951,4278190080,4278203136,4278216192,4278229248,4278242304,4278255360,4278190131,4278203187,4278216243,4278229299,4278242355,4278255411,4278190182,4278203238,4278216294,4278229350,4278242406,4278255462,4278190233,4278203289,4278216345,4278229401,4278242457,4278255513,4278190284,4278203340,4278216396,4278229452,4278242508,4278255564,4278190335,4278203391,4278216447,4278229503,4278242559,4278255615,4281532416,4281545472,4281558528,4281571584,4281584640,4281597696,4281532467,4281545523,4281558579,4281571635,4281584691,4281597747,4281532518,4281545574,4281558630,4281571686,4281584742,4281597798,4281532569,4281545625,4281558681,4281571737,4281584793,4281597849,4281532620,4281545676,4281558732,4281571788,4281584844,4281597900,4281532671,4281545727,4281558783,4281571839,4281584895,4281597951,4284874752,4284887808,4284900864,4284913920,4284926976,4284940032,4284874803,4284887859,4284900915,4284913971,4284927027,4284940083,4284874854,4284887910,4284900966,4284914022,4284927078,4284940134,4284874905,4284887961,4284901017,4284914073,4284927129,4284940185,4284874956,4284888012,4284901068,4284914124,4284927180,4284940236,4284875007,4284888063,4284901119,4284914175,4284927231,4284940287,4288217088,4288230144,4288243200,4288256256,4288269312,4288282368,4288217139,4288230195,4288243251,4288256307,4288269363,4288282419,4288217190,4288230246,4288243302,4288256358,4288269414,4288282470,4288217241,4288230297,4288243353,4288256409,4288269465,4288282521,4288217292,4288230348,4288243404,4288256460,4288269516,4288282572,4288217343,4288230399,4288243455,4288256511,4288269567,4288282623,4291559424,4291572480,4291585536,4291598592,4291611648,4291624704,4291559475,4291572531,4291585587,4291598643,4291611699,4291624755,4291559526,4291572582,4291585638,4291598694,4291611750,4291624806,4291559577,4291572633,4291585689,4291598745,4291611801,4291624857,4291559628,4291572684,4291585740,4291598796,4291611852,4291624908,4291559679,4291572735,4291585791,4291598847,4291611903,4291624959,4294901760,4294914816,4294927872,4294940928,4294953984,4294967040,4294901811,4294914867,4294927923,4294940979,4294954035,4294967091,4294901862,4294914918,4294927974,4294941030,4294954086,4294967142,4294901913,4294914969,4294928025,4294941081,4294954137,4294967193,4294901964,4294915020,4294928076,4294941132,4294954188,4294967244,4294902015,4294915071,4294928127,4294941183,4294954239,4294967295],N=[4294967295,4278190080],x=new a.a({sizeOf:function(t,e){var n=t[e];return n<=223?1:n<=254?2:5},read:function(t,e){var n=t[e];return n<=223?n:n<=254?256*(n-224)+t[e+1]:a.h.read(t,e+1)}}),D=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,(n=[{key:"decode",value:function(t,e,n,r,i){var o=this.decodePixels(r,32===n);if(n<=8)return i||(i=1===n?N:M),this.unpackPixels(o,t,e,n,i);if(16===n)return this.raster16To32(o,t,e);if(32===n)return o;throw new Error("Unhandled Squeak Image depth.")}},{key:"decodePixels",value:function(t,e){var n;if(Array.isArray(t)||t instanceof Uint32Array){if(n=new Uint32Array(t),e)for(var i=0;i<n.length;i++)0!==n[i]&&(n[i]=4278190080|n[i]);return n}var o=new r.a(t.buffer,t.byteOffset),u=o.read(x);n=new Uint32Array(u);for(var s=0;s<u;){var c=o.read(x),f=c>>2,l=void 0;switch(3&c){case 0:s+=f;break;case 1:l=o.read(a.j),l|=l<<24|l<<16|l<<8,e&&0!==l&&(l|=4278190080);for(var h=0;h<f;h++)n[s++]=l;break;case 2:l=o.read(a.h),e&&0!==l&&(l|=4278190080);for(var y=0;y<f;y++)n[s++]=l;break;case 3:for(var p=0;p<f;p++)l=o.read(a.h),e&&0!==l&&(l|=4278190080),n[s++]=l}}return n}},{key:"unpackPixels",value:function(t,e,n,r,i){for(var o=new Uint32Array(e*n),u=(1<<r)-1,a=32/r,s=0,c=0,f=0;f<n;f++)for(var l=void 0,h=-1,y=0;y<e;y++)h<0&&(h=r*(a-1),l=t[c++]),o[s++]=i[l>>h&u],h-=r;return o}},{key:"raster16To32",value:function(t,e,n){for(var r,i,o,u=new Uint32Array(2*t.length),a=0,s=0,c=0;c<n;c++){r=-1;for(var f=0;f<e;f++){if(r<0&&(r=16,i=t[a++]),0!==(o=i>>r&65535))o=4278190080|(o>>7&248)<<16|(o>>2&248)<<8|o<<3&248;u[s++]=o,r-=16}}return u}},{key:"buildCustomColormap",value:function(t,e,n){for(var r=new Uint32Array(1<<t),i=0;i<e.length;i++)r[i]=n[e[i].index-1];return r}}])&&B(e.prototype,n),i&&B(e,i),t}();function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var H,z=[7,8,9,10,11,12,13,14,16,17,19,21,23,25,28,31,34,37,41,45,50,55,60,66,73,80,88,97,107,118,130,143,157,173,190,209,230,253,279,307,337,371,408,449,494,544,598,658,724,796,876,963,1060,1166,1282,1411,1552,1707,1878,2066,2272,2499,2749,3024,3327,3660,4026,4428,4871,5358,5894,6484,7132,7845,8630,9493,10442,11487,12635,13899,15289,16818,18500,20350,22385,24623,27086,29794,32767],U={2:[-1,2,-1,2],3:[-1,-1,2,4,-1,-1,2,4],4:[-1,-1,-1,-1,2,4,6,8,-1,-1,-1,-1,2,4,6,8],5:[-1,-1,-1,-1,-1,-1,-1,-1,1,2,4,6,8,10,13,16,-1,-1,-1,-1,-1,-1,-1,-1,1,2,4,6,8,10,13,16]},F=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.bitsPerSample=e,this.indexTable=U[e],this.signMask=1<<e-1,this.valueMask=this.signMask-1,this.valueHighBit=this.signMask>>1,this.bitPosition=0,this.currentByte=0,this.stream=null,this.end=0}var e,n,i;return e=t,i=[{key:"samples",value:function(t,e){return 8*e.length/t}}],(n=[{key:"decode",value:function(t){this.bitPosition=0,this.currentByte=0,this.stream=new r.a(t.buffer,t.byteOffset),this.end=t.byteOffset+t.length;for(var e=Math.floor(8*t.length/this.bitsPerSample),n=new Int16Array(e),i=0,o=0,u=0;u<e;u++){var a=this.nextCode();Object(c.c)(a>=0,"Ran out of bits in Squeak Sound");for(var s=z[o],f=0,l=this.valueHighBit;l>0;l>>=1)0!=(a&l)&&(f+=s),s>>=1;f+=s,i+=0==(a&this.signMask)?f:-f,(o+=this.indexTable[a])<0&&(o=0),o>88&&(o=88),i>32767&&(i=32767),i<-32768&&(i=-32768),n[u]=i}return n}},{key:"nextCode",value:function(){for(var t=this.bitsPerSample,e=t-this.bitPosition,n=e<0?this.currentByte>>-e:this.currentByte<<e;e>0;){if(t-=this.bitPosition,!(this.end-this.stream.position>0))return this.currentByte=0,this.bitPosition=0,-1;this.currentByte=this.stream.read(a.j),this.bitPosition=8,n+=(e=t-this.bitPosition)<0?this.currentByte>>-e:this.currentByte<<e}return this.bitPosition-=t,this.currentByte=this.currentByte&255>>8-this.bitPosition,n}}])&&L(e.prototype,n),i&&L(e,i),t}(),X=n(11),G=n(8),Y=n.n(G);function W(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function J(t,e,n){return e&&V(t.prototype,e),n&&V(t,n),t}function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function K(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Q(t,e){return!e||"object"!==q(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Z(t){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function $(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&tt(t,e)}function tt(t,e){return(tt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var et=function(t){function e(){return K(this,e),Q(this,Z(e).apply(this,arguments))}return $(e,j["a"].define({X:0,Y:1})),e}(),nt=function(t){function e(){return K(this,e),Q(this,Z(e).apply(this,arguments))}return $(e,j["a"].define({X:0,Y:1,X2:2,Y2:3})),J(e,[{key:"width",get:function(){return this.x2-this.x}},{key:"height",get:function(){return this.y2-this.y}}]),e}(),rt=function(t){function e(){return K(this,e),Q(this,Z(e).apply(this,arguments))}return $(e,j["a"].define({WIDTH:0,HEIGHT:1,DEPTH:2,BYTES:4,COLORMAP:5})),J(e,[{key:"decoded",get:function(){return this._decoded||(this._decoded=function(t){for(var e=0;e<t.length;e+=4){var n=t[e+2],r=t[e+0];t[e+2]=r,t[e+0]=n}return t}(new Uint8Array((new D).decode(this.width.value,this.height.value,this.depth.value,this.bytes.value,this.colormap&&this.colormap.map(function(t){return t.valueOf()})).buffer))),this._decoded}},{key:"extension",get:function(){return"uncompressed"}}]),e}(),it=function(t){function e(){return K(this,e),Q(this,Z(e).apply(this,arguments))}return $(e,j["a"].define({STAGE_CONTENTS:2,OBJ_NAME:6,VARS:7,BLOCKS_BIN:8,IS_CLONE:9,MEDIA:10,CURRENT_COSTUME:11,ZOOM:12,H_PAN:13,V_PAN:14,OBSOLETE_SAVED_STATE:15,SPRITE_ORDER_IN_LIBRARY:16,VOLUME:17,TEMPO_BPM:18,SCENE_STATES:19,LISTS:20})),J(e,[{key:"spriteOrderInLibrary",get:function(){return this.fields[this.FIELDS.SPRITE_ORDER_IN_LIBRARY]||null}},{key:"tempoBPM",get:function(){return this.fields[this.FIELDS.TEMPO_BPM]||0}},{key:"lists",get:function(){return this.fields[this.FIELDS.LISTS]||[]}}]),e}(),ot=function(t){function e(){return K(this,e),Q(this,Z(e).apply(this,arguments))}return $(e,j["a"].define({BOX:0,PARENT:1,COLOR:3,VISIBLE:4,OBJ_NAME:6,VARS:7,BLOCKS_BIN:8,IS_CLONE:9,MEDIA:10,CURRENT_COSTUME:11,VISIBILITY:12,SCALE_POINT:13,ROTATION_DEGREES:14,ROTATION_STYLE:15,VOLUME:16,TEMPO_BPM:17,DRAGGABLE:18,SCENE_STATES:19,LISTS:20})),J(e,[{key:"scratchX",get:function(){return this.box.x+this.currentCostume.rotationCenter.x-240}},{key:"scratchY",get:function(){return 180-(this.box.y+this.currentCostume.rotationCenter.y)}},{key:"visible",get:function(){return 0==(1&this.fields[this.FIELDS.VISIBLE])}},{key:"tempoBPM",get:function(){return this.fields[this.FIELDS.TEMPO_BPM]||0}},{key:"lists",get:function(){return this.fields[this.FIELDS.LISTS]||[]}}]),e}(),ut=function(t){function e(){return K(this,e),Q(this,Z(e).apply(this,arguments))}return $(e,j["a"].define({COSTUME_NAME:0,BITMAP:1,ROTATION_CENTER:2,TEXT_DETAILS:3,BASE_LAYER_DATA:4,OLD_COMPOSITE:5})),J(e,[{key:"toString",value:function(){return'ImageMediaData "'.concat(this.costumeName,'"')}},{key:"image",get:function(){return this.oldComposite instanceof rt?this.oldComposite:this.baseLayerData.value?null:this.bitmap}},{key:"width",get:function(){return null===this.image?-1:this.image.width}},{key:"height",get:function(){return null===this.image?-1:this.image.height}},{key:"rawBytes",get:function(){return null===this.image?this.baseLayerData.value.slice():this.image.bytes.value}},{key:"decoded",get:function(){return null===this.image?this.baseLayerData.value.slice():this.image.decoded}},{key:"crc",get:function(){if(!this._crc){var t=(new P.a).update(new Uint8Array(new Uint32Array([this.bitmap.width]).buffer)).update(new Uint8Array(new Uint32Array([this.bitmap.height]).buffer)).update(new Uint8Array(new Uint32Array([this.bitmap.depth]).buffer)).update(this.rawBytes);this._crc=t.digest}return this._crc}},{key:"extension",get:function(){return this.oldComposite instanceof rt?"uncompressed":this.baseLayerData.value?"jpg":"uncompressed"}}]),e}(),at=function(t){function e(){return K(this,e),Q(this,Z(e).apply(this,arguments))}return $(e,j["a"].define({DATA:3,RATE:4})),e}(),st=function(t){function e(){return K(this,e),Q(this,Z(e).apply(this,arguments))}return $(e,j["a"].define({NAME:0,UNCOMPRESSED:1,RATE:4,BITS_PER_SAMPLE:5,DATA:6})),J(e,[{key:"toString",value:function(){return'SoundMediaData "'.concat(this.name,'"')}},{key:"rate",get:function(){return 0!==this.uncompressed.data.value.length?this.uncompressed.rate:this.fields[this.FIELDS.RATE]}},{key:"rawBytes",get:function(){return this.data&&this.data.value?this.data.value:this.uncompressed.data.value}},{key:"decoded",get:function(){return this._decoded||(this.data&&this.data.value?this._decoded=new F(this.bitsPerSample.value).decode(this.data.value):this._decoded=new Int16Array(function(t){for(var e=new Uint8Array(t),n=0;n<e.length;n+=2)e[n]=t[n+1],e[n+1]=t[n];return e}(this.uncompressed.data.value.slice()).buffer)),this._decoded}},{key:"crc",get:function(){return this._crc||(this._crc=(new P.a).update(new Uint32Array([this.rate])).update(this.rawBytes).digest),this._crc}},{key:"sampleCount",get:function(){return this.data&&this.data.value?F.samples(this.bitsPerSample.value,this.data.value):this.uncompressed.data.value.length/2}},{key:"extension",get:function(){return"pcm"}},{key:"wavEncodedData",get:function(){return this._wavEncodedData||(this._wavEncodedData=new Uint8Array(X.a.encode(this.decoded,{sampleRate:this.rate&&this.rate.value}))),this._wavEncodedData}},{key:"md5",get:function(){return this._md5||(this._md5=Y()(this.wavEncodedData)),this._md5}}]),e}(),ct=function(t){function e(){return K(this,e),Q(this,Z(e).apply(this,arguments))}return $(e,j["a"].define({BOX:0,HIDDEN_WHEN_NULL:1,LIST_NAME:8,CONTENTS:9,TARGET:10})),J(e,[{key:"x",get:function(){return null===Object(g.g)(this.hiddenWhenNull)?5:this.box.x+1}},{key:"y",get:function(){return null===Object(g.g)(this.hiddenWhenNull)?5:this.box.y+1}},{key:"width",get:function(){return this.box.width-2}},{key:"height",get:function(){return this.box.height-2}}]),e}(),ft=function(t){function e(){return K(this,e),Q(this,Z(e).apply(this,arguments))}return $(e,j["a"].define({BOX:0,PARENT:1,FRAMES:2,COLOR:3,DIRECTION:8,ALIGNMENT:9})),e}(),lt=function(t){function e(){return K(this,e),Q(this,Z(e).apply(this,arguments))}return $(e,j["a"].define({BOX:0,PARENT:1,COLOR:3})),e}(),ht=function(t){function e(){return K(this,e),Q(this,Z(e).apply(this,arguments))}return $(e,j["a"].define({BOX:0,COLOR:3,VALUE:8})),e}(),yt=function(t){function e(){return K(this,e),Q(this,Z(e).apply(this,arguments))}return $(e,j["a"].define({BOX:0,READOUT_FRAME:1,COLOR:3,FONT:6,VALUE:8,TARGET:10,CMD:11,PARAM:13})),e}(),pt=function(t){function e(){return K(this,e),Q(this,Z(e).apply(this,arguments))}return $(e,j["a"].define({BOX:0})),e}(),dt=1,bt=2,vt=3,wt=function(t){function e(){return K(this,e),Q(this,Z(e).apply(this,arguments))}return $(e,j["a"].define({BOX:0,TARGET:1,SHAPE:2,READOUT:14,READOUT_FRAME:15,SLIDER:16,ALIGNMENT:17,SLIDER_MIN:20,SLIDER_MAX:21})),J(e,[{key:"x",get:function(){return this.box.x}},{key:"y",get:function(){return this.box.y}},{key:"mode",get:function(){return null===Object(g.g)(this.slider)?this.readoutFrame.box.height<=14?dt:bt:vt}},{key:"isDiscrete",get:function(){return Math.floor(this.sliderMin)===this.sliderMin&&Math.floor(this.sliderMax)===this.sliderMax&&Math.floor(this.readout.value)===this.readout.value}}]),e}(),mt=(W(H={},S.a.POINT,et),W(H,S.a.RECTANGLE,nt),W(H,S.a.FORM,rt),W(H,S.a.SQUEAK,rt),W(H,S.a.SAMPLED_SOUND,at),W(H,S.a.SPRITE,ot),W(H,S.a.STAGE,it),W(H,S.a.IMAGE_MEDIA,ut),W(H,S.a.SOUND_MEDIA,st),W(H,S.a.ALIGNMENT,ft),W(H,S.a.MORPH,lt),W(H,S.a.WATCHER_READOUT_FRAME,pt),W(H,S.a.STATIC_STRING,ht),W(H,S.a.UPDATING_STRING,yt),W(H,S.a.WATCHER,wt),W(H,S.a.LIST_WATCHER,ct),H),gt=Array.from({length:256},function(t,e){return mt[e]||null});function St(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var Ot=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.valueIterator=e}var e,n,r;return e=t,(n=[{key:Symbol.iterator,value:function(){return this}},{key:"next",value:function(){var t=this.valueIterator.next();if(t.done)return t;var e=t.value,n=e.classId,r=e;if(e instanceof g.d){r=[];for(var i=0;i<e.size;i++)r.push(this.next().value)}(null!==gt[n]||e instanceof g.c)&&(r=new(gt[e.classId]||j.a)({classId:e.classId,version:e.version,fields:r}));return{value:r,done:!1}}}])&&St(e.prototype,n),r&&St(e,r),t}();function _t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var Et=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.table=Array.from(e),this.fixed=this.fix(this.table)}var e,n,r;return e=t,(n=[{key:"fix",value:function(){for(var t=[],e=0;e<this.table.length;e++)this.fixItem(this.table[e]),t.push(this.table[e]);return t}},{key:"fixItem",value:function(t){if(void 0!==t.fields&&(t=t.fields),Array.isArray(t))for(var e=0;e<t.length;e++)t[e]=this.deref(t[e])}},{key:"deref",value:function(t){return t instanceof g.e?this.table[t.index-1]:t}}])&&_t(e.prototype,n),r&&_t(e,r),t}(),At=n(10);function Tt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Rt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function kt(t,e,n){return e&&Rt(t.prototype,e),n&&Rt(t,n),t}var It=function(){function t(e){Tt(this,t),this.file=e}return kt(t,[{key:"async",value:function(t){return Object(c.c)("uint8array"===t,"SB1FakeZipFile only supports uint8array"),Promise.resolve(this.file.bytes)}}]),t}(),Ct=function(){function t(e){Tt(this,t),this.files=e}return kt(t,[{key:"file",value:function(t){if(t in this.files)return new It(this.files[t])}}]),t}(),jt=function(t){return"uncompressed"===t.extension?new Uint8Array(At.a.encode(t.width,t.height,t.decoded)):t.decoded};function Pt(t){return(Pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Bt(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Mt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Nt=function(t){var e=String(t[t.length-1]),n=t.length-1;return"mouse"===e?t[n]="_mouse_":"edge"===e?t[n]="_edge_":t[t.length-1]instanceof it&&(t[n]="_stage_"),t},xt={getParam:function(t){var e=Mt(t,4);return[e[0],e[1],e[2],e[3]||"r"]},changeVariable:function(t){return[t[2],t[1],t[3]]},EventHatMorph:function(t){return"Scratch-StartClicked"===String(t[1])?["whenGreenFlag"]:["whenIReceive",t[1]]},MouseClickEventHatMorph:function(){return["whenClicked"]},KeyEventHatMorph:function(t){return["whenKeyPressed",t[1]]},stopScripts:function(t){return"other scripts"===String(t[1])?[t[0],"other scripts in sprite"]:t},abs:function(t){return["computeFunction:of:","abs",t[1]]},sqrt:function(t){return["computeFunction:of:","sqrt",t[1]]},"\\\\":function(t){return["%"].concat(Bt(t.slice(1)))},doReturn:function(){return["stopScripts","this script"]},stopAll:function(){return["stopScripts","all"]},"showBackground:":function(t){return["startScene",t[1]]},nextBackground:function(){return["nextScene"]},doForeverIf:function(t){return["doForever",[["doIf",t[1],t[2]]]]},"getAttribute:of:":Nt,"gotoSpriteOrMouse:":Nt,"distanceTo:":Nt,"pointTowards:":Nt,"touching:":Nt},Dt=function(t){var e,n,r,i=t.info,o=t.stageData,u=t.images,a=t.sounds,s=function(t){for(var e=[],n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e},c=function(t){var e=Mt(t,2);return{name:e[0],value:e[1],isPersistent:!1}},f=function(t){var e,n=Mt(t,2)[1],r=n.listName,i=n.contents,o=n.x,u=n.y,a=n.width,s=n.height,c=n.hiddenWhenNull;return{listName:r,contents:i,isPersistent:!1,x:o,y:u,width:a,height:s,visible:null!==(e=c,"object"===Pt(e)&&e?e.valueOf():e)}},l=function(t){var e=a.findIndex(function(e){return e.crc===t.crc});return{soundName:t.name,soundID:e,md5:"".concat(t.md5,".wav"),sampleCount:t.sampleCount,rate:t.rate,format:""}},h=function(t){var e,n=u.findIndex(function(e){return e.crc===t.crc});return{costumeName:t.costumeName,baseLayerID:n,baseLayerMD5:"".concat(Y()(t.rawBytes),".").concat((e=t,"uncompressed"===e.extension?"png":"jpg")),bitmapResolution:1,rotationCenterX:t.rotationCenter.x,rotationCenterY:t.rotationCenter.y}},y=function(t){var e=t.map(d),n=xt[e[0]];return n&&(e=n(e)),e},p=function(t){return t.map(y)},d=function(t){return t instanceof ot?t.objName:Array.isArray(t)?0===t.length||Array.isArray(t[0])?p(t):y(t):t},b=function(t){return[t[0].x,t[0].y,p(t[1])]},v=function(t){return t instanceof ot?(n=(e=t).media.filter(function(t){return t instanceof ut}),r=e.media.filter(function(t){return t instanceof st}),{objName:e.objName,variables:s(e.vars).map(c),lists:s(e.lists).map(f),scripts:e.blocksBin.map(b),costumes:n.map(h),currentCostumeIndex:n.findIndex(function(t){return t.crc===e.currentCostume.crc}),sounds:r.map(l),scratchX:e.scratchX,scratchY:e.scratchY,scale:e.scalePoint.x,direction:Math.round(1e6*e.rotationDegrees)/1e6-270,rotationStyle:e.rotationStyle,isDraggable:e.draggable,indexInLibrary:o.spriteOrderInLibrary.indexOf(e),visible:e.visible,spriteInfo:{}}):null;var e,n,r};return JSON.parse(JSON.stringify(Object.assign((n=(e=o).media.filter(function(t){return t instanceof ut}),r=e.media.filter(function(t){return t instanceof st}),{objName:e.objName,variables:s(e.vars).map(c),lists:s(e.lists).map(f),scripts:e.blocksBin.map(b),costumes:n.map(h),currentCostumeIndex:n.findIndex(function(t){return t.crc===e.currentCostume.crc}),sounds:r.map(l),penLayerMD5:"5c81a336fab8be57adc039a8a2b33ca9.png",penLayerID:0,tempoBPM:e.tempoBPM,videoAlpha:.5,children:e.stageContents.map(v).filter(Boolean).reverse()}),{info:function(t){for(var e={},n=0;n<t.length;n+=2)"thumbnail"!==String(t[n])&&(e[String(t[n])]=String(t[n+1]));return e}(i)})))},Lt=n(2);function Ht(t){return(Ht="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function zt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ut(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ft(t,e,n){return e&&Ut(t.prototype,e),n&&Ut(t,n),t}function Xt(t,e){return!e||"object"!==Ht(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Gt(t){return(Gt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Yt(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Wt(t,e)}function Wt(t,e){return(Wt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Vt=function(t){function e(){return zt(this,e),Xt(this,Gt(e).apply(this,arguments))}return Yt(e,Lt["a"].extend({version:new a["c"](10),infoByteLength:a["h"]})),Ft(e,[{key:"validate",value:function(){c.c.validate(this.equals({version:"ScratchV01"})||this.equals({version:"ScratchV02"}),"Invalid Scratch file signature.")}}]),e}();Lt.a.initConstructor(Vt);var Jt=function(t){function e(){return zt(this,e),Xt(this,Gt(e).apply(this,arguments))}return Yt(e,Lt["a"].extend({ObjS:new a["c"](4),ObjSValue:a["j"],Stch:new a["c"](4),StchValue:a["j"],numObjects:a["h"]})),Ft(e,[{key:"validate",value:function(){c.c.validate(this.equals({ObjS:"ObjS",ObjSValue:1,Stch:"Stch",StchValue:1}),"Invalid Scratch file info packet header.")}}]),e}();function qt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Lt.a.initConstructor(Jt);var Kt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.buffer=e,this.stream=new r.a(e),this.signature=this.stream.readStruct(Vt),this.signature.validate(),this.infoHeader=this.stream.readStruct(Jt),this.infoHeader.validate(),this.stream.position+=this.signature.infoByteLength-Jt.size,this.dataHeader=this.stream.readStruct(Jt),this.dataHeader.validate()}var e,n,i;return e=t,(n=[{key:"view",value:function(){return{signature:this.signature,infoHeader:this.infoHeader,dataHeader:this.dataHeader,toString:function(){return"SB1File"}}}},{key:"infoRaw",value:function(){return new u(new C(this.buffer,this.infoHeader.offset+Jt.size),this.signature.infoByteLength+Vt.size)}},{key:"infoTable",value:function(){return new Ot(this.infoRaw())}},{key:"info",value:function(){return this._info||(this._info=new Et(this.infoTable()).table[0]),this._info}},{key:"dataRaw",value:function(){return new u(new C(this.buffer,this.dataHeader.offset+Jt.size),this.stream.uint8a.length)}},{key:"dataTable",value:function(){return new Ot(this.dataRaw())}},{key:"dataFixed",value:function(){return this._data||(this._data=new Et(this.dataTable()).table),this._data}},{key:"data",value:function(){return this.dataFixed()[0]}},{key:"images",value:function(){var t=new Set;return this.dataFixed().filter(function(e){return e instanceof ut&&(!t.has(e.crc)&&(t.add(e.crc),!0))})}},{key:"sounds",value:function(){var t=new Set;return this.dataFixed().filter(function(e){return e instanceof st&&(!t.has(e.crc)&&(t.add(e.crc),!0))})}},{key:"json",get:function(){return Dt({info:this.info(),stageData:this.data(),images:this.images(),sounds:this.sounds()})}},{key:"zip",get:function(){return function(t){var e,n=t.images,r=t.sounds,i={},o=0,u=!0,a=!1,s=void 0;try{for(var c,f=n[Symbol.iterator]();!(u=(c=f.next()).done);u=!0){var l=c.value;i["".concat(o++,".").concat((e=l,"uncompressed"===e.extension?"png":"jpg"))]={bytes:jt(l)}}}catch(t){a=!0,s=t}finally{try{u||null==f.return||f.return()}finally{if(a)throw s}}o=0;var h,y=!0,p=!1,d=void 0;try{for(var b,v=r[Symbol.iterator]();!(y=(b=v.next()).done);y=!0){var w=b.value;i["".concat(o++,".wav")]={bytes:(h=w,h.wavEncodedData)}}}catch(t){p=!0,d=t}finally{try{y||null==v.return||v.return()}finally{if(p)throw d}}return new Ct(i)}({images:this.images(),sounds:this.sounds()})}}])&&qt(e.prototype,n),i&&qt(e,i),t}();n.d(e,"SB1File",function(){return Kt}),n.d(e,"AssertionError",function(){return c.a}),n.d(e,"ValidationError",function(){return c.b})},function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var s,c=[],f=!1,l=-1;function h(){f&&s&&(f=!1,s.length?c=s.concat(c):l=-1,c.length&&y())}function y(){if(!f){var t=a(h);f=!0;for(var e=c.length;e;){for(s=c,c=[];++l<e;)s&&s[l].run();l=-1,e=c.length}s=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function d(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new p(t,e)),1!==c.length||f||a(y)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){(function(e){t.exports=e}).call(this,{})}]);
/* canvg 3.0.7 https://github.com/canvg/canvg */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).canvg={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}var n=function(t){return t&&t.Math==Math&&t},i=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")(),a=function(t){try{return!!t()}catch(t){return!0}},o=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,c={f:s&&!u.call({1:2},1)?function(t){var e=s(this,t);return!!e&&e.enumerable}:u},l=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},f={}.toString,h=function(t){return f.call(t).slice(8,-1)},p="".split,y=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==h(t)?p.call(t,""):Object(t)}:Object,v=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},g=function(t){return y(v(t))},d=function(t){return"object"==typeof t?null!==t:"function"==typeof t},m=function(t,e){if(!d(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!d(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!d(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!d(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},x={}.hasOwnProperty,b=function(t,e){return x.call(t,e)},w=i.document,S=d(w)&&d(w.createElement),A=function(t){return S?w.createElement(t):{}},k=!o&&!a((function(){return 7!=Object.defineProperty(A("div"),"a",{get:function(){return 7}}).a})),T=Object.getOwnPropertyDescriptor,O={f:o?T:function(t,e){if(t=g(t),e=m(e,!0),k)try{return T(t,e)}catch(t){}if(b(t,e))return l(!c.f.call(t,e),t[e])}},P=/#|\.prototype\./,C=function(t,e){var r=M[E(t)];return r==R||r!=N&&("function"==typeof e?a(e):!!e)},E=C.normalize=function(t){return String(t).replace(P,".").toLowerCase()},M=C.data={},N=C.NATIVE="N",R=C.POLYFILL="P",_=C,D={},V=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},L=function(t,e,r){if(V(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}},I=function(t){if(!d(t))throw TypeError(String(t)+" is not an object");return t},j=Object.defineProperty,z={f:o?j:function(t,e,r){if(I(t),e=m(e,!0),I(r),k)try{return j(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},F=o?function(t,e,r){return z.f(t,e,l(1,r))}:function(t,e,r){return t[e]=r,t},B=O.f,H=function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e},U=function(t,e){var r,n,a,o,u,s,c,l,f=t.target,h=t.global,p=t.stat,y=t.proto,v=h?i:p?i[f]:(i[f]||{}).prototype,g=h?D:D[f]||(D[f]={}),d=g.prototype;for(a in e)r=!_(h?a:f+(p?".":"#")+a,t.forced)&&v&&b(v,a),u=g[a],r&&(s=t.noTargetGet?(l=B(v,a))&&l.value:v[a]),o=r&&s?s:e[a],r&&typeof u==typeof o||(c=t.bind&&r?L(o,i):t.wrap&&r?H(o):y&&"function"==typeof o?L(Function.call,o):o,(t.sham||o&&o.sham||u&&u.sham)&&F(c,"sham",!0),g[a]=c,y&&(b(D,n=f+"Prototype")||F(D,n,{}),D[n][a]=o,t.real&&d&&!d[a]&&F(d,a,o)))},X=Math.ceil,Y=Math.floor,q=function(t){return isNaN(t=+t)?0:(t>0?Y:X)(t)},G=Math.min,Q=function(t){return t>0?G(q(t),9007199254740991):0},W="__core-js_shared__",$=i[W]||function(t,e){try{F(i,t,e)}catch(r){i[t]=e}return e}(W,{}),Z=r((function(t){(t.exports=function(t,e){return $[t]||($[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:"pure",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),K=0,J=Math.random(),tt=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++K+J).toString(36)},et=!!Object.getOwnPropertySymbols&&!a((function(){return!String(Symbol())})),rt=et&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,nt=Z("wks"),it=i.Symbol,at=rt?it:it&&it.withoutSetter||tt,ot=function(t){return b(nt,t)||(et&&b(it,t)?nt[t]=it[t]:nt[t]=at("Symbol."+t)),nt[t]},ut=ot("match"),st=function(t){if(function(t){var e;return d(t)&&(void 0!==(e=t[ut])?!!e:"RegExp"==h(t))}(t))throw TypeError("The method doesn't accept regular expressions");return t},ct=ot("match"),lt=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[ct]=!1,"/./"[t](e)}catch(t){}}return!1},ft="".startsWith,ht=Math.min,pt=lt("startsWith");U({target:"String",proto:!0,forced:!pt},{startsWith:function(t){var e=String(v(this));st(t);var r=Q(ht(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return ft?ft.call(e,n,r):e.slice(r,r+n.length)===n}});var yt=function(t){return D[t+"Prototype"]},vt=yt("String").startsWith,gt=String.prototype,dt=function(t){var e=t.startsWith;return"string"==typeof t||t===gt||t instanceof String&&e===gt.startsWith?vt:e},mt="\t\n\v\f\r                　\u2028\u2029\ufeff",xt="["+mt+"]",bt=RegExp("^"+xt+xt+"*"),wt=RegExp(xt+xt+"*$"),St=function(t){return function(e){var r=String(v(e));return 1&t&&(r=r.replace(bt,"")),2&t&&(r=r.replace(wt,"")),r}},At={start:St(1),end:St(2),trim:St(3)},kt=At.trim,Tt=i.parseFloat,Ot=1/Tt(mt+"-0")!=-1/0?function(t){var e=kt(String(t)),r=Tt(e);return 0===r&&"-"==e.charAt(0)?-0:r}:Tt;U({global:!0,forced:parseFloat!=Ot},{parseFloat:Ot});var Pt,Ct,Et=D.parseFloat,Mt=function(t){return Object(v(t))},Nt=Array.isArray||function(t){return"Array"==h(t)},Rt=ot("species"),_t=function(t,e){var r;return Nt(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!Nt(r.prototype)?d(r)&&null===(r=r[Rt])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)},Dt=[].push,Vt=function(t){var e=1==t,r=2==t,n=3==t,i=4==t,a=6==t,o=5==t||a;return function(u,s,c,l){for(var f,h,p=Mt(u),v=y(p),g=L(s,c,3),d=Q(v.length),m=0,x=l||_t,b=e?x(u,d):r?x(u,0):void 0;d>m;m++)if((o||m in v)&&(h=g(f=v[m],m,p),t))if(e)b[m]=h;else if(h)switch(t){case 3:return!0;case 5:return f;case 6:return m;case 2:Dt.call(b,f)}else if(i)return!1;return a?-1:n||i?i:b}},Lt={forEach:Vt(0),map:Vt(1),filter:Vt(2),some:Vt(3),every:Vt(4),find:Vt(5),findIndex:Vt(6)},It=function(t){return"function"==typeof t?t:void 0},jt=function(t,e){return arguments.length<2?It(D[t])||It(i[t]):D[t]&&D[t][e]||i[t]&&i[t][e]},zt=jt("navigator","userAgent")||"",Ft=i.process,Bt=Ft&&Ft.versions,Ht=Bt&&Bt.v8;Ht?Ct=(Pt=Ht.split("."))[0]+Pt[1]:zt&&(!(Pt=zt.match(/Edge\/(\d+)/))||Pt[1]>=74)&&(Pt=zt.match(/Chrome\/(\d+)/))&&(Ct=Pt[1]);var Ut=Ct&&+Ct,Xt=ot("species"),Yt=function(t){return Ut>=51||!a((function(){var e=[];return(e.constructor={})[Xt]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},qt=Object.defineProperty,Gt={},Qt=function(t){throw t},Wt=function(t,e){if(b(Gt,t))return Gt[t];e||(e={});var r=[][t],n=!!b(e,"ACCESSORS")&&e.ACCESSORS,i=b(e,0)?e[0]:Qt,u=b(e,1)?e[1]:void 0;return Gt[t]=!!r&&!a((function(){if(n&&!o)return!0;var t={length:-1};n?qt(t,1,{enumerable:!0,get:Qt}):t[1]=1,r.call(t,i,u)}))},$t=Lt.map,Zt=Yt("map"),Kt=Wt("map");U({target:"Array",proto:!0,forced:!Zt||!Kt},{map:function(t){return $t(this,t,arguments.length>1?arguments[1]:void 0)}});var Jt=yt("Array").map,te=Array.prototype,ee=function(t){var e=t.map;return t===te||t instanceof Array&&e===te.map?Jt:e};function re(t){return t.replace(/(?!\u3000)\s+/gm," ")}function ne(t){return t.replace(/^[\n \t]+/,"")}function ie(t){return t.replace(/[\n \t]+$/,"")}function ae(t){var e=(t||"").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm)||[];return ee(e).call(e,Et)}var oe=/^[A-Z-]+$/;function ue(t){return oe.test(t)?t.toLowerCase():t}function se(t){var e=t.match(/url\(('([^']+)'|"([^"]+)"|([^'"\)]+))\)/)||[];return e[2]||e[3]||e[4]}function ce(t){if(!dt(t).call(t,"rgb"))return t;var e=3;return t.replace(/\d+(\.\d+)?/g,(function(t,r){return e--&&r?String(Math.round(Et(t))):t}))}U({target:"Array",stat:!0},{isArray:Nt});var le=D.Array.isArray,fe=le;var he=function(t){if(fe(t))return t},pe={},ye=Function.toString;"function"!=typeof $.inspectSource&&($.inspectSource=function(t){return ye.call(t)});var ve,ge,de,me=$.inspectSource,xe=i.WeakMap,be="function"==typeof xe&&/native code/.test(me(xe)),we=Z("keys"),Se=function(t){return we[t]||(we[t]=tt(t))},Ae={},ke=i.WeakMap;if(be){var Te=new ke,Oe=Te.get,Pe=Te.has,Ce=Te.set;ve=function(t,e){return Ce.call(Te,t,e),e},ge=function(t){return Oe.call(Te,t)||{}},de=function(t){return Pe.call(Te,t)}}else{var Ee=Se("state");Ae[Ee]=!0,ve=function(t,e){return F(t,Ee,e),e},ge=function(t){return b(t,Ee)?t[Ee]:{}},de=function(t){return b(t,Ee)}}var Me,Ne,Re,_e={set:ve,get:ge,has:de,enforce:function(t){return de(t)?ge(t):ve(t,{})},getterFor:function(t){return function(e){var r;if(!d(e)||(r=ge(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},De=!a((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),Ve=Se("IE_PROTO"),Le=Object.prototype,Ie=De?Object.getPrototypeOf:function(t){return t=Mt(t),b(t,Ve)?t[Ve]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Le:null},je=(ot("iterator"),!1);[].keys&&("next"in(Re=[].keys())?(Ne=Ie(Ie(Re)))!==Object.prototype&&(Me=Ne):je=!0),null==Me&&(Me={});var ze,Fe={IteratorPrototype:Me,BUGGY_SAFARI_ITERATORS:je},Be=Math.max,He=Math.min,Ue=function(t,e){var r=q(t);return r<0?Be(r+e,0):He(r,e)},Xe=function(t){return function(e,r,n){var i,a=g(e),o=Q(a.length),u=Ue(n,o);if(t&&r!=r){for(;o>u;)if((i=a[u++])!=i)return!0}else for(;o>u;u++)if((t||u in a)&&a[u]===r)return t||u||0;return!t&&-1}},Ye={includes:Xe(!0),indexOf:Xe(!1)},qe=Ye.indexOf,Ge=function(t,e){var r,n=g(t),i=0,a=[];for(r in n)!b(Ae,r)&&b(n,r)&&a.push(r);for(;e.length>i;)b(n,r=e[i++])&&(~qe(a,r)||a.push(r));return a},Qe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],We=Object.keys||function(t){return Ge(t,Qe)},$e=o?Object.defineProperties:function(t,e){I(t);for(var r,n=We(e),i=n.length,a=0;i>a;)z.f(t,r=n[a++],e[r]);return t},Ze=jt("document","documentElement"),Ke=Se("IE_PROTO"),Je=function(){},tr=function(t){return"<script>"+t+"</"+"script>"},er=function(){try{ze=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;er=ze?function(t){t.write(tr("")),t.close();var e=t.parentWindow.Object;return t=null,e}(ze):((e=A("iframe")).style.display="none",Ze.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(tr("document.F=Object")),t.close(),t.F);for(var r=Qe.length;r--;)delete er.prototype[Qe[r]];return er()};Ae[Ke]=!0;var rr=Object.create||function(t,e){var r;return null!==t?(Je.prototype=I(t),r=new Je,Je.prototype=null,r[Ke]=t):r=er(),void 0===e?r:$e(r,e)},nr={};nr[ot("toStringTag")]="z";var ir="[object z]"===String(nr),ar=ot("toStringTag"),or="Arguments"==h(function(){return arguments}()),ur=ir?h:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),ar))?r:or?h(e):"Object"==(n=h(e))&&"function"==typeof e.callee?"Arguments":n},sr=ir?{}.toString:function(){return"[object "+ur(this)+"]"},cr=z.f,lr=ot("toStringTag"),fr=function(t,e,r,n){if(t){var i=r?t:t.prototype;b(i,lr)||cr(i,lr,{configurable:!0,value:e}),n&&!ir&&F(i,"toString",sr)}},hr=Fe.IteratorPrototype,pr=function(){return this},yr=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return I(r),function(t){if(!d(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(n),e?t.call(r,n):r.__proto__=n,r}}():void 0),vr=function(t,e,r,n){n&&n.enumerable?t[e]=r:F(t,e,r)},gr=Fe.IteratorPrototype,dr=Fe.BUGGY_SAFARI_ITERATORS,mr=ot("iterator"),xr="keys",br="values",wr="entries",Sr=function(){return this},Ar=function(t,e,r,n,i,a,o){!function(t,e,r){var n=e+" Iterator";t.prototype=rr(hr,{next:l(1,r)}),fr(t,n,!1,!0),pe[n]=pr}(r,e,n);var u,s,c,f=function(t){if(t===i&&g)return g;if(!dr&&t in y)return y[t];switch(t){case xr:case br:case wr:return function(){return new r(this,t)}}return function(){return new r(this)}},h=e+" Iterator",p=!1,y=t.prototype,v=y[mr]||y["@@iterator"]||i&&y[i],g=!dr&&v||f(i),d="Array"==e&&y.entries||v;if(d&&(u=Ie(d.call(new t)),gr!==Object.prototype&&u.next&&(fr(u,h,!0,!0),pe[h]=Sr)),i==br&&v&&v.name!==br&&(p=!0,g=function(){return v.call(this)}),o&&y[mr]!==g&&F(y,mr,g),pe[e]=g,i)if(s={values:f(br),keys:a?g:f(xr),entries:f(wr)},o)for(c in s)(dr||p||!(c in y))&&vr(y,c,s[c]);else U({target:e,proto:!0,forced:dr||p},s);return s},kr="Array Iterator",Tr=_e.set,Or=_e.getterFor(kr);Ar(Array,"Array",(function(t,e){Tr(this,{type:kr,target:g(t),index:0,kind:e})}),(function(){var t=Or(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values");pe.Arguments=pe.Array;var Pr=ot("toStringTag");for(var Cr in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Er=i[Cr],Mr=Er&&Er.prototype;Mr&&ur(Mr)!==Pr&&F(Mr,Pr,Cr),pe[Cr]=pe.Array}var Nr=function(t){return function(e,r){var n,i,a=String(v(e)),o=q(r),u=a.length;return o<0||o>=u?t?"":void 0:(n=a.charCodeAt(o))<55296||n>56319||o+1===u||(i=a.charCodeAt(o+1))<56320||i>57343?t?a.charAt(o):n:t?a.slice(o,o+2):i-56320+(n-55296<<10)+65536}},Rr={codeAt:Nr(!1),charAt:Nr(!0)}.charAt,_r="String Iterator",Dr=_e.set,Vr=_e.getterFor(_r);Ar(String,"String",(function(t){Dr(this,{type:_r,string:String(t),index:0})}),(function(){var t,e=Vr(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=Rr(r,n),e.index+=t.length,{value:t,done:!1})}));var Lr=ot("iterator"),Ir=function(t){if(null!=t)return t[Lr]||t["@@iterator"]||pe[ur(t)]},jr=function(t){var e=Ir(t);if("function"!=typeof e)throw TypeError(String(t)+" is not iterable");return I(e.call(t))},zr=ot("iterator"),Fr=function(t){var e=Object(t);return void 0!==e[zr]||"@@iterator"in e||pe.hasOwnProperty(ur(e))},Br=function(t,e,r){var n=m(e);n in t?z.f(t,n,l(0,r)):t[n]=r},Hr=ot("isConcatSpreadable"),Ur=9007199254740991,Xr="Maximum allowed index exceeded",Yr=Ut>=51||!a((function(){var t=[];return t[Hr]=!1,t.concat()[0]!==t})),qr=Yt("concat"),Gr=function(t){if(!d(t))return!1;var e=t[Hr];return void 0!==e?!!e:Nt(t)};U({target:"Array",proto:!0,forced:!Yr||!qr},{concat:function(t){var e,r,n,i,a,o=Mt(this),u=_t(o,0),s=0;for(e=-1,n=arguments.length;e<n;e++)if(Gr(a=-1===e?o:arguments[e])){if(s+(i=Q(a.length))>Ur)throw TypeError(Xr);for(r=0;r<i;r++,s++)r in a&&Br(u,s,a[r])}else{if(s>=Ur)throw TypeError(Xr);Br(u,s++,a)}return u.length=s,u}});var Qr=Qe.concat("length","prototype"),Wr={f:Object.getOwnPropertyNames||function(t){return Ge(t,Qr)}},$r=Wr.f,Zr={}.toString,Kr="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Jr={f:function(t){return Kr&&"[object Window]"==Zr.call(t)?function(t){try{return $r(t)}catch(t){return Kr.slice()}}(t):$r(g(t))}},tn={f:Object.getOwnPropertySymbols},en={f:ot},rn=z.f,nn=function(t){var e=D.Symbol||(D.Symbol={});b(e,t)||rn(e,t,{value:en.f(t)})},an=Lt.forEach,on=Se("hidden"),un="Symbol",sn=ot("toPrimitive"),cn=_e.set,ln=_e.getterFor(un),fn=Object.prototype,hn=i.Symbol,pn=jt("JSON","stringify"),yn=O.f,vn=z.f,gn=Jr.f,dn=c.f,mn=Z("symbols"),xn=Z("op-symbols"),bn=Z("string-to-symbol-registry"),wn=Z("symbol-to-string-registry"),Sn=Z("wks"),An=i.QObject,kn=!An||!An.prototype||!An.prototype.findChild,Tn=o&&a((function(){return 7!=rr(vn({},"a",{get:function(){return vn(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=yn(fn,e);n&&delete fn[e],vn(t,e,r),n&&t!==fn&&vn(fn,e,n)}:vn,On=function(t,e){var r=mn[t]=rr(hn.prototype);return cn(r,{type:un,tag:t,description:e}),o||(r.description=e),r},Pn=rt?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof hn},Cn=function(t,e,r){t===fn&&Cn(xn,e,r),I(t);var n=m(e,!0);return I(r),b(mn,n)?(r.enumerable?(b(t,on)&&t[on][n]&&(t[on][n]=!1),r=rr(r,{enumerable:l(0,!1)})):(b(t,on)||vn(t,on,l(1,{})),t[on][n]=!0),Tn(t,n,r)):vn(t,n,r)},En=function(t,e){I(t);var r=g(e),n=We(r).concat(_n(r));return an(n,(function(e){o&&!Mn.call(r,e)||Cn(t,e,r[e])})),t},Mn=function(t){var e=m(t,!0),r=dn.call(this,e);return!(this===fn&&b(mn,e)&&!b(xn,e))&&(!(r||!b(this,e)||!b(mn,e)||b(this,on)&&this[on][e])||r)},Nn=function(t,e){var r=g(t),n=m(e,!0);if(r!==fn||!b(mn,n)||b(xn,n)){var i=yn(r,n);return!i||!b(mn,n)||b(r,on)&&r[on][n]||(i.enumerable=!0),i}},Rn=function(t){var e=gn(g(t)),r=[];return an(e,(function(t){b(mn,t)||b(Ae,t)||r.push(t)})),r},_n=function(t){var e=t===fn,r=gn(e?xn:g(t)),n=[];return an(r,(function(t){!b(mn,t)||e&&!b(fn,t)||n.push(mn[t])})),n};if(et||(vr((hn=function(){if(this instanceof hn)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=tt(t),r=function(t){this===fn&&r.call(xn,t),b(this,on)&&b(this[on],e)&&(this[on][e]=!1),Tn(this,e,l(1,t))};return o&&kn&&Tn(fn,e,{configurable:!0,set:r}),On(e,t)}).prototype,"toString",(function(){return ln(this).tag})),vr(hn,"withoutSetter",(function(t){return On(tt(t),t)})),c.f=Mn,z.f=Cn,O.f=Nn,Wr.f=Jr.f=Rn,tn.f=_n,en.f=function(t){return On(ot(t),t)},o&&vn(hn.prototype,"description",{configurable:!0,get:function(){return ln(this).description}})),U({global:!0,wrap:!0,forced:!et,sham:!et},{Symbol:hn}),an(We(Sn),(function(t){nn(t)})),U({target:un,stat:!0,forced:!et},{for:function(t){var e=String(t);if(b(bn,e))return bn[e];var r=hn(e);return bn[e]=r,wn[r]=e,r},keyFor:function(t){if(!Pn(t))throw TypeError(t+" is not a symbol");if(b(wn,t))return wn[t]},useSetter:function(){kn=!0},useSimple:function(){kn=!1}}),U({target:"Object",stat:!0,forced:!et,sham:!o},{create:function(t,e){return void 0===e?rr(t):En(rr(t),e)},defineProperty:Cn,defineProperties:En,getOwnPropertyDescriptor:Nn}),U({target:"Object",stat:!0,forced:!et},{getOwnPropertyNames:Rn,getOwnPropertySymbols:_n}),U({target:"Object",stat:!0,forced:a((function(){tn.f(1)}))},{getOwnPropertySymbols:function(t){return tn.f(Mt(t))}}),pn){var Dn=!et||a((function(){var t=hn();return"[null]"!=pn([t])||"{}"!=pn({a:t})||"{}"!=pn(Object(t))}));U({target:"JSON",stat:!0,forced:Dn},{stringify:function(t,e,r){for(var n,i=[t],a=1;arguments.length>a;)i.push(arguments[a++]);if(n=e,(d(e)||void 0!==t)&&!Pn(t))return Nt(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Pn(e))return e}),i[1]=e,pn.apply(null,i)}})}hn.prototype[sn]||F(hn.prototype,sn,hn.prototype.valueOf),fr(hn,un),Ae[on]=!0,nn("asyncIterator"),nn("hasInstance"),nn("isConcatSpreadable"),nn("iterator"),nn("match"),nn("matchAll"),nn("replace"),nn("search"),nn("species"),nn("split"),nn("toPrimitive"),nn("toStringTag"),nn("unscopables"),fr(Math,"Math",!0),fr(i.JSON,"JSON",!0);var Vn=D.Symbol;nn("asyncDispose"),nn("dispose"),nn("observable"),nn("patternMatch"),nn("replaceAll");var Ln=Vn;var In=function(t,e){if(void 0!==Ln&&Fr(Object(t))){var r=[],n=!0,i=!1,a=void 0;try{for(var o,u=jr(t);!(n=(o=u.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(t){i=!0,a=t}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}return r}},jn=function(t,e,r,n){try{return n?e(I(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&I(i.call(t)),e}},zn=ot("iterator"),Fn=Array.prototype,Bn=function(t){return void 0!==t&&(pe.Array===t||Fn[zn]===t)},Hn=ot("iterator"),Un=!1;try{var Xn=0,Yn={next:function(){return{done:!!Xn++}},return:function(){Un=!0}};Yn[Hn]=function(){return this},Array.from(Yn,(function(){throw 2}))}catch(t){}var qn=function(t,e){if(!e&&!Un)return!1;var r=!1;try{var n={};n[Hn]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r},Gn=!qn((function(t){Array.from(t)}));U({target:"Array",stat:!0,forced:Gn},{from:function(t){var e,r,n,i,a,o,u=Mt(t),s="function"==typeof this?this:Array,c=arguments.length,l=c>1?arguments[1]:void 0,f=void 0!==l,h=Ir(u),p=0;if(f&&(l=L(l,c>2?arguments[2]:void 0,2)),null==h||s==Array&&Bn(h))for(r=new s(e=Q(u.length));e>p;p++)o=f?l(u[p],p):u[p],Br(r,p,o);else for(a=(i=h.call(u)).next,r=new s;!(n=a.call(i)).done;p++)o=f?jn(i,l,[n.value,p],!0):n.value,Br(r,p,o);return r.length=p,r}});var Qn=D.Array.from,Wn=Qn,$n=Yt("slice"),Zn=Wt("slice",{ACCESSORS:!0,0:0,1:2}),Kn=ot("species"),Jn=[].slice,ti=Math.max;U({target:"Array",proto:!0,forced:!$n||!Zn},{slice:function(t,e){var r,n,i,a=g(this),o=Q(a.length),u=Ue(t,o),s=Ue(void 0===e?o:e,o);if(Nt(a)&&("function"!=typeof(r=a.constructor)||r!==Array&&!Nt(r.prototype)?d(r)&&null===(r=r[Kn])&&(r=void 0):r=void 0,r===Array||void 0===r))return Jn.call(a,u,s);for(n=new(void 0===r?Array:r)(ti(s-u,0)),i=0;u<s;u++,i++)u in a&&Br(n,i,a[u]);return n.length=i,n}});var ei=yt("Array").slice,ri=Array.prototype,ni=function(t){var e=t.slice;return t===ri||t instanceof Array&&e===ri.slice?ei:e},ii=ni;var ai=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n};var oi=function(t,e){var r;if(t){if("string"==typeof t)return ai(t,e);var n=ii(r=Object.prototype.toString.call(t)).call(r,8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Wn(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ai(t,e):void 0}};var ui=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var si=function(t,e){return he(t)||In(t,e)||oi(t,e)||ui()},ci=/(\[[^\]]+\])/g,li=/(#[^\s\+>~\.\[:]+)/g,fi=/(\.[^\s\+>~\.\[:]+)/g,hi=/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,pi=/(:[\w-]+\([^\)]*\))/gi,yi=/(:[^\s\+>~\.\[:]+)/g,vi=/([^\s\+>~\.\[:]+)/g;function gi(t,e){var r=t.match(e);return r?[t.replace(e," "),r.length]:[t,0]}function di(t){var e=[0,0,0],r=t.replace(/:not\(([^\)]*)\)/g,"     $1 ").replace(/{[\s\S]*/gm," "),n=0,i=gi(r,ci),a=si(i,2);r=a[0],n=a[1],e[1]+=n;var o=gi(r,li),u=si(o,2);r=u[0],n=u[1],e[0]+=n;var s=gi(r,fi),c=si(s,2);r=c[0],n=c[1],e[1]+=n;var l=gi(r,hi),f=si(l,2);r=f[0],n=f[1],e[2]+=n;var h=gi(r,pi),p=si(h,2);r=p[0],n=p[1],e[1]+=n;var y=gi(r,yi),v=si(y,2);r=v[0],n=v[1],e[1]+=n;var g=gi(r=r.replace(/[\*\s\+>~]/g," ").replace(/[#\.]/g," "),vi),d=si(g,2);return r=d[0],n=d[1],e[2]+=n,e.join("")}var mi=1e-8;function xi(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2))}function bi(t,e){return(t[0]*e[0]+t[1]*e[1])/(xi(t)*xi(e))}function wi(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(bi(t,e))}function Si(t){return t*t*t}function Ai(t){return 3*t*t*(1-t)}function ki(t){return 3*t*(1-t)*(1-t)}function Ti(t){return(1-t)*(1-t)*(1-t)}function Oi(t){return t*t}function Pi(t){return 2*t*(1-t)}function Ci(t){return(1-t)*(1-t)}U({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:z.f});var Ei=r((function(t){var e=D.Object,r=t.exports=function(t,r,n){return e.defineProperty(t,r,n)};e.defineProperty.sham&&(r.sham=!0)})),Mi=Ei;U({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperties:$e});var Ni=r((function(t){var e=D.Object,r=t.exports=function(t,r){return e.defineProperties(t,r)};e.defineProperties.sham&&(r.sham=!0)})),Ri=jt("Reflect","ownKeys")||function(t){var e=Wr.f(I(t)),r=tn.f;return r?e.concat(r(t)):e};U({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var e,r,n=g(t),i=O.f,a=Ri(n),o={},u=0;a.length>u;)void 0!==(r=i(n,e=a[u++]))&&Br(o,e,r);return o}});var _i=D.Object.getOwnPropertyDescriptors,Di=function(t,e){var r=[][t];return!!r&&a((function(){r.call(null,e||function(){throw 1},1)}))},Vi=Lt.forEach,Li=Di("forEach"),Ii=Wt("forEach"),ji=Li&&Ii?[].forEach:function(t){return Vi(this,t,arguments.length>1?arguments[1]:void 0)};U({target:"Array",proto:!0,forced:[].forEach!=ji},{forEach:ji});var zi=yt("Array").forEach,Fi=Array.prototype,Bi={DOMTokenList:!0,NodeList:!0},Hi=function(t){var e=t.forEach;return t===Fi||t instanceof Array&&e===Fi.forEach||Bi.hasOwnProperty(ur(t))?zi:e},Ui=O.f,Xi=a((function(){Ui(1)}));U({target:"Object",stat:!0,forced:!o||Xi,sham:!o},{getOwnPropertyDescriptor:function(t,e){return Ui(g(t),e)}});var Yi=r((function(t){var e=D.Object,r=t.exports=function(t,r){return e.getOwnPropertyDescriptor(t,r)};e.getOwnPropertyDescriptor.sham&&(r.sham=!0)})),qi=Yi,Gi=Lt.filter,Qi=Yt("filter"),Wi=Wt("filter");U({target:"Array",proto:!0,forced:!Qi||!Wi},{filter:function(t){return Gi(this,t,arguments.length>1?arguments[1]:void 0)}});var $i=yt("Array").filter,Zi=Array.prototype,Ki=function(t){var e=t.filter;return t===Zi||t instanceof Array&&e===Zi.filter?$i:e},Ji=D.Object.getOwnPropertySymbols,ta=a((function(){We(1)}));U({target:"Object",stat:!0,forced:ta},{keys:function(t){return We(Mt(t))}});var ea,ra,na,ia=D.Object.keys,aa=r((function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),o=new P(n||[]);return a._invoke=function(t,e,r){var n=l;return function(i,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw a;return E()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var u=k(o,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=c(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,o),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",y={};function v(){}function g(){}function d(){}var m={};m[a]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(C([])));b&&b!==r&&n.call(b,a)&&(m=b);var w=d.prototype=v.prototype=Object.create(m);function S(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function A(t,e){function r(i,a,o,u){var s=c(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,o,u)}),(function(t){r("throw",t,o,u)})):e.resolve(f).then((function(t){l.value=t,o(l)}),(function(t){return r("throw",t,o,u)}))}u(s.arg)}var i;this._invoke=function(t,n){function a(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var i=c(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:E}}function E(){return{value:e,done:!0}}return g.prototype=w.constructor=d,d.constructor=g,d[u]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},S(A.prototype),A.prototype[o]=function(){return this},t.AsyncIterator=A,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new A(s(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},S(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return u.type="throw",u.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],u=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}})),oa=i.Promise,ua=function(t,e,r){for(var n in e)r&&r.unsafe&&t[n]?t[n]=e[n]:vr(t,n,e[n],r);return t},sa=ot("species"),ca=function(t){var e=jt(t),r=z.f;o&&e&&!e[sa]&&r(e,sa,{configurable:!0,get:function(){return this}})},la=function(t,e,r){if(!(t instanceof e))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t},fa=r((function(t){var e=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,r,n,i,a){var o,u,s,c,l,f,h,p=L(r,n,i?2:1);if(a)o=t;else{if("function"!=typeof(u=Ir(t)))throw TypeError("Target is not iterable");if(Bn(u)){for(s=0,c=Q(t.length);c>s;s++)if((l=i?p(I(h=t[s])[0],h[1]):p(t[s]))&&l instanceof e)return l;return new e(!1)}o=u.call(t)}for(f=o.next;!(h=f.call(o)).done;)if("object"==typeof(l=jn(o,p,h.value,i))&&l&&l instanceof e)return l;return new e(!1)}).stop=function(t){return new e(!0,t)}})),ha=ot("species"),pa=function(t,e){var r,n=I(t).constructor;return void 0===n||null==(r=I(n)[ha])?e:V(r)},ya=/(iphone|ipod|ipad).*applewebkit/i.test(zt),va=i.location,ga=i.setImmediate,da=i.clearImmediate,ma=i.process,xa=i.MessageChannel,ba=i.Dispatch,wa=0,Sa={},Aa="onreadystatechange",ka=function(t){if(Sa.hasOwnProperty(t)){var e=Sa[t];delete Sa[t],e()}},Ta=function(t){return function(){ka(t)}},Oa=function(t){ka(t.data)},Pa=function(t){i.postMessage(t+"",va.protocol+"//"+va.host)};ga&&da||(ga=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return Sa[++wa]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},ea(wa),wa},da=function(t){delete Sa[t]},"process"==h(ma)?ea=function(t){ma.nextTick(Ta(t))}:ba&&ba.now?ea=function(t){ba.now(Ta(t))}:xa&&!ya?(na=(ra=new xa).port2,ra.port1.onmessage=Oa,ea=L(na.postMessage,na,1)):!i.addEventListener||"function"!=typeof postMessage||i.importScripts||a(Pa)||"file:"===va.protocol?ea=Aa in A("script")?function(t){Ze.appendChild(A("script")).onreadystatechange=function(){Ze.removeChild(this),ka(t)}}:function(t){setTimeout(Ta(t),0)}:(ea=Pa,i.addEventListener("message",Oa,!1)));var Ca,Ea,Ma,Na,Ra,_a,Da,Va,La={set:ga,clear:da},Ia=O.f,ja=La.set,za=i.MutationObserver||i.WebKitMutationObserver,Fa=i.process,Ba=i.Promise,Ha="process"==h(Fa),Ua=Ia(i,"queueMicrotask"),Xa=Ua&&Ua.value;Xa||(Ca=function(){var t,e;for(Ha&&(t=Fa.domain)&&t.exit();Ea;){e=Ea.fn,Ea=Ea.next;try{e()}catch(t){throw Ea?Na():Ma=void 0,t}}Ma=void 0,t&&t.enter()},Ha?Na=function(){Fa.nextTick(Ca)}:za&&!ya?(Ra=!0,_a=document.createTextNode(""),new za(Ca).observe(_a,{characterData:!0}),Na=function(){_a.data=Ra=!Ra}):Ba&&Ba.resolve?(Da=Ba.resolve(void 0),Va=Da.then,Na=function(){Va.call(Da,Ca)}):Na=function(){ja.call(i,Ca)});var Ya,qa,Ga,Qa=Xa||function(t){var e={fn:t,next:void 0};Ma&&(Ma.next=e),Ea||(Ea=e,Na()),Ma=e},Wa=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n})),this.resolve=V(e),this.reject=V(r)},$a={f:function(t){return new Wa(t)}},Za=function(t,e){if(I(t),d(e)&&e.constructor===t)return e;var r=$a.f(t);return(0,r.resolve)(e),r.promise},Ka=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},Ja=La.set,to=ot("species"),eo="Promise",ro=_e.get,no=_e.set,io=_e.getterFor(eo),ao=oa,oo=i.TypeError,uo=i.document,so=i.process,co=(jt("fetch"),$a.f),lo=co,fo="process"==h(so),ho=!!(uo&&uo.createEvent&&i.dispatchEvent),po="unhandledrejection",yo=_(eo,(function(){if(!(me(ao)!==String(ao))){if(66===Ut)return!0;if(!fo&&"function"!=typeof PromiseRejectionEvent)return!0}if(!ao.prototype.finally)return!0;if(Ut>=51&&/native code/.test(ao))return!1;var t=ao.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[to]=e,!(t.then((function(){}))instanceof e)})),vo=yo||!qn((function(t){ao.all(t).catch((function(){}))})),go=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},mo=function(t,e,r){if(!e.notified){e.notified=!0;var n=e.reactions;Qa((function(){for(var i=e.value,a=1==e.state,o=0;n.length>o;){var u,s,c,l=n[o++],f=a?l.ok:l.fail,h=l.resolve,p=l.reject,y=l.domain;try{f?(a||(2===e.rejection&&So(t,e),e.rejection=1),!0===f?u=i:(y&&y.enter(),u=f(i),y&&(y.exit(),c=!0)),u===l.promise?p(oo("Promise-chain cycle")):(s=go(u))?s.call(u,h,p):h(u)):p(i)}catch(t){y&&!c&&y.exit(),p(t)}}e.reactions=[],e.notified=!1,r&&!e.rejection&&bo(t,e)}))}},xo=function(t,e,r){var n,a;ho?((n=uo.createEvent("Event")).promise=e,n.reason=r,n.initEvent(t,!1,!0),i.dispatchEvent(n)):n={promise:e,reason:r},(a=i["on"+t])?a(n):t===po&&function(t,e){var r=i.console;r&&r.error&&(1===arguments.length?r.error(t):r.error(t,e))}("Unhandled promise rejection",r)},bo=function(t,e){Ja.call(i,(function(){var r,n=e.value;if(wo(e)&&(r=Ka((function(){fo?so.emit("unhandledRejection",n,t):xo(po,t,n)})),e.rejection=fo||wo(e)?2:1,r.error))throw r.value}))},wo=function(t){return 1!==t.rejection&&!t.parent},So=function(t,e){Ja.call(i,(function(){fo?so.emit("rejectionHandled",t):xo("rejectionhandled",t,e.value)}))},Ao=function(t,e,r,n){return function(i){t(e,r,i,n)}},ko=function(t,e,r,n){e.done||(e.done=!0,n&&(e=n),e.value=r,e.state=2,mo(t,e,!0))},To=function(t,e,r,n){if(!e.done){e.done=!0,n&&(e=n);try{if(t===r)throw oo("Promise can't be resolved itself");var i=go(r);i?Qa((function(){var n={done:!1};try{i.call(r,Ao(To,t,n,e),Ao(ko,t,n,e))}catch(r){ko(t,n,r,e)}})):(e.value=r,e.state=1,mo(t,e,!1))}catch(r){ko(t,{done:!1},r,e)}}};yo&&(ao=function(t){la(this,ao,eo),V(t),Ya.call(this);var e=ro(this);try{t(Ao(To,this,e),Ao(ko,this,e))}catch(t){ko(this,e,t)}},(Ya=function(t){no(this,{type:eo,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=ua(ao.prototype,{then:function(t,e){var r=io(this),n=co(pa(this,ao));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=fo?so.domain:void 0,r.parent=!0,r.reactions.push(n),0!=r.state&&mo(this,r,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),qa=function(){var t=new Ya,e=ro(t);this.promise=t,this.resolve=Ao(To,t,e),this.reject=Ao(ko,t,e)},$a.f=co=function(t){return t===ao||t===Ga?new qa(t):lo(t)}),U({global:!0,wrap:!0,forced:yo},{Promise:ao}),fr(ao,eo,!1,!0),ca(eo),Ga=jt(eo),U({target:eo,stat:!0,forced:yo},{reject:function(t){var e=co(this);return e.reject.call(void 0,t),e.promise}}),U({target:eo,stat:!0,forced:!0},{resolve:function(t){return Za(this===Ga?ao:this,t)}}),U({target:eo,stat:!0,forced:vo},{all:function(t){var e=this,r=co(e),n=r.resolve,i=r.reject,a=Ka((function(){var r=V(e.resolve),a=[],o=0,u=1;fa(t,(function(t){var s=o++,c=!1;a.push(void 0),u++,r.call(e,t).then((function(t){c||(c=!0,a[s]=t,--u||n(a))}),i)})),--u||n(a)}));return a.error&&i(a.value),r.promise},race:function(t){var e=this,r=co(e),n=r.reject,i=Ka((function(){var i=V(e.resolve);fa(t,(function(t){i.call(e,t).then(r.resolve,n)}))}));return i.error&&n(i.value),r.promise}}),U({target:"Promise",stat:!0},{allSettled:function(t){var e=this,r=$a.f(e),n=r.resolve,i=r.reject,a=Ka((function(){var r=V(e.resolve),i=[],a=0,o=1;fa(t,(function(t){var u=a++,s=!1;i.push(void 0),o++,r.call(e,t).then((function(t){s||(s=!0,i[u]={status:"fulfilled",value:t},--o||n(i))}),(function(t){s||(s=!0,i[u]={status:"rejected",reason:t},--o||n(i))}))})),--o||n(i)}));return a.error&&i(a.value),r.promise}});var Oo=!!oa&&a((function(){oa.prototype.finally.call({then:function(){}},(function(){}))}));U({target:"Promise",proto:!0,real:!0,forced:Oo},{finally:function(t){var e=pa(this,jt("Promise")),r="function"==typeof t;return this.then(r?function(r){return Za(e,t()).then((function(){return r}))}:t,r?function(r){return Za(e,t()).then((function(){throw r}))}:t)}});var Po=D.Promise,Co=_e.set,Eo=_e.getterFor("AggregateError"),Mo=function(t,e){var r=this;if(!(r instanceof Mo))return new Mo(t,e);yr&&(r=yr(new Error(e),Ie(r)));var n=[];return fa(t,n.push,n),o?Co(r,{errors:n,type:"AggregateError"}):r.errors=n,void 0!==e&&F(r,"message",String(e)),r};Mo.prototype=rr(Error.prototype,{constructor:l(5,Mo),message:l(5,""),name:l(5,"AggregateError")}),o&&z.f(Mo.prototype,"errors",{get:function(){return Eo(this).errors},configurable:!0}),U({global:!0},{AggregateError:Mo}),U({target:"Promise",stat:!0},{try:function(t){var e=$a.f(this),r=Ka(t);return(r.error?e.reject:e.resolve)(r.value),e.promise}});var No="No one promise resolved";U({target:"Promise",stat:!0},{any:function(t){var e=this,r=$a.f(e),n=r.resolve,i=r.reject,a=Ka((function(){var r=V(e.resolve),a=[],o=0,u=1,s=!1;fa(t,(function(t){var c=o++,l=!1;a.push(void 0),u++,r.call(e,t).then((function(t){l||s||(s=!0,n(t))}),(function(t){l||s||(l=!0,a[c]=t,--u||i(new(jt("AggregateError"))(a,No)))}))})),--u||i(new(jt("AggregateError"))(a,No))}));return a.error&&i(a.value),r.promise}});var Ro=Po;function _o(t,e,r,n,i,a,o){try{var u=t[a](o),s=u.value}catch(t){return void r(t)}u.done?e(s):Ro.resolve(s).then(n,i)}var Do=function(t){return function(){var e=this,r=arguments;return new Ro((function(n,i){var a=t.apply(e,r);function o(t){_o(a,n,i,o,u,"next",t)}function u(t){_o(a,n,i,o,u,"throw",t)}o(void 0)}))}},Vo=Ei;var Lo=function(t,e,r){return e in t?Vo(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t};var Io=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function jo(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Vo(t,n.key,n)}}var zo=function(t,e,r){return e&&jo(t.prototype,e),r&&jo(t,r),t},Fo=yt("Array").concat,Bo=Array.prototype,Ho=function(t){var e=t.concat;return t===Bo||t instanceof Array&&e===Bo.concat?Fo:e},Uo=function(t){return function(e,r,n,i){V(r);var a=Mt(e),o=y(a),u=Q(a.length),s=t?u-1:0,c=t?-1:1;if(n<2)for(;;){if(s in o){i=o[s],s+=c;break}if(s+=c,t?s<0:u<=s)throw TypeError("Reduce of empty array with no initial value")}for(;t?s>=0:u>s;s+=c)s in o&&(i=r(i,o[s],s,a));return i}},Xo={left:Uo(!1),right:Uo(!0)}.left,Yo=Di("reduce"),qo=Wt("reduce",{1:0});U({target:"Array",proto:!0,forced:!Yo||!qo},{reduce:function(t){return Xo(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}});var Go=yt("Array").reduce,Qo=Array.prototype,Wo=function(t){var e=t.reduce;return t===Qo||t instanceof Array&&e===Qo.reduce?Go:e};U({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}});var $o=D.Date.now,Zo=Lt.every,Ko=Di("every"),Jo=Wt("every");U({target:"Array",proto:!0,forced:!Ko||!Jo},{every:function(t){return Zo(this,t,arguments.length>1?arguments[1]:void 0)}});var tu=yt("Array").every,eu=Array.prototype,ru=function(t){var e=t.every;return t===eu||t instanceof Array&&e===eu.every?tu:e},nu=Po,iu=[].slice,au={},ou=function(t,e,r){if(!(e in au)){for(var n=[],i=0;i<e;i++)n[i]="a["+i+"]";au[e]=Function("C,a","return new C("+n.join(",")+")")}return au[e](t,r)},uu=Function.bind||function(t){var e=V(this),r=iu.call(arguments,1),n=function(){var i=r.concat(iu.call(arguments));return this instanceof n?ou(e,i.length,i):e.apply(t,i)};return d(e.prototype)&&(n.prototype=e.prototype),n};U({target:"Function",proto:!0},{bind:uu});var su=yt("Function").bind,cu=Function.prototype,lu=function(t){var e=t.bind;return t===cu||t instanceof Function&&e===cu.bind?su:e},fu="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function hu(){throw new Error("setTimeout has not been defined")}function pu(){throw new Error("clearTimeout has not been defined")}var yu=hu,vu=pu;function gu(t){if(yu===setTimeout)return setTimeout(t,0);if((yu===hu||!yu)&&setTimeout)return yu=setTimeout,setTimeout(t,0);try{return yu(t,0)}catch(e){try{return yu.call(null,t,0)}catch(e){return yu.call(this,t,0)}}}"function"==typeof fu.setTimeout&&(yu=setTimeout),"function"==typeof fu.clearTimeout&&(vu=clearTimeout);var du,mu=[],xu=!1,bu=-1;function wu(){xu&&du&&(xu=!1,du.length?mu=du.concat(mu):bu=-1,mu.length&&Su())}function Su(){if(!xu){var t=gu(wu);xu=!0;for(var e=mu.length;e;){for(du=mu,mu=[];++bu<e;)du&&du[bu].run();bu=-1,e=mu.length}du=null,xu=!1,function(t){if(vu===clearTimeout)return clearTimeout(t);if((vu===pu||!vu)&&clearTimeout)return vu=clearTimeout,clearTimeout(t);try{vu(t)}catch(e){try{return vu.call(null,t)}catch(e){return vu.call(this,t)}}}(t)}}function Au(t,e){this.fun=t,this.array=e}Au.prototype.run=function(){this.fun.apply(null,this.array)};function ku(){}var Tu=ku,Ou=ku,Pu=ku,Cu=ku,Eu=ku,Mu=ku,Nu=ku;var Ru=fu.performance||{},_u=Ru.now||Ru.mozNow||Ru.msNow||Ru.oNow||Ru.webkitNow||function(){return(new Date).getTime()};var Du=new Date;for(var Vu={nextTick:function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];mu.push(new Au(t,e)),1!==mu.length||xu||gu(Su)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:Tu,addListener:Ou,once:Pu,off:Cu,removeListener:Eu,removeAllListeners:Mu,emit:Nu,binding:function(t){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(t){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(t){var e=.001*_u.call(Ru),r=Math.floor(e),n=Math.floor(e%1*1e9);return t&&(r-=t[0],(n-=t[1])<0&&(r--,n+=1e9)),[r,n]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-Du)/1e3}},Lu=r((function(t){(function(){var e,r,n,i,a,o;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:null!=Vu&&Vu.hrtime?(t.exports=function(){return(e()-a)/1e6},r=Vu.hrtime,i=(e=function(){var t;return 1e9*(t=r())[0]+t[1]})(),o=1e9*Vu.uptime(),a=i-o):Date.now?(t.exports=function(){return Date.now()-n},n=Date.now()):(t.exports=function(){return(new Date).getTime()-n},n=(new Date).getTime())}).call(e)})),Iu="undefined"==typeof window?e:window,ju=["moz","webkit"],zu="AnimationFrame",Fu=Iu["request"+zu],Bu=Iu["cancel"+zu]||Iu["cancelRequest"+zu],Hu=0;!Fu&&Hu<ju.length;Hu++)Fu=Iu[ju[Hu]+"Request"+zu],Bu=Iu[ju[Hu]+"Cancel"+zu]||Iu[ju[Hu]+"CancelRequest"+zu];if(!Fu||!Bu){var Uu=0,Xu=0,Yu=[];Fu=function(t){if(0===Yu.length){var e=Lu(),r=Math.max(0,16.666666666666668-(e-Uu));Uu=r+e,setTimeout((function(){var t=Yu.slice(0);Yu.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(Uu)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(r))}return Yu.push({handle:++Xu,callback:t,cancelled:!1}),Xu},Bu=function(t){for(var e=0;e<Yu.length;e++)Yu[e].handle===t&&(Yu[e].cancelled=!0)}}var qu=function(t){return Fu.call(Iu,t)};qu.cancel=function(){Bu.apply(Iu,arguments)},qu.polyfill=function(t){t||(t=Iu),t.requestAnimationFrame=Fu,t.cancelAnimationFrame=Bu};var Gu,Qu=At.trim;U({target:"String",proto:!0,forced:(Gu="trim",a((function(){return!!mt[Gu]()||"​᠎"!="​᠎"[Gu]()||mt[Gu].name!==Gu})))},{trim:function(){return Qu(this)}});var Wu=yt("String").trim,$u=String.prototype,Zu=function(t){var e=t.trim;return"string"==typeof t||t===$u||t instanceof String&&e===$u.trim?Wu:e},Ku=function(t){this.ok=!1,this.alpha=1,"#"==t.charAt(0)&&(t=t.substr(1,6)),t=(t=t.replace(/ /g,"")).toLowerCase();var e={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};t=e[t]||t;for(var r=[{re:/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,example:["rgba(123, 234, 45, 0.8)","rgba(255,234,245,1.0)"],process:function(t){return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3]),parseFloat(t[4])]}},{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(t){return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])]}},{re:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,example:["#00ff00","336699"],process:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,example:["#fb0","f0f"],process:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}}],n=0;n<r.length;n++){var i=r[n].re,a=r[n].process,o=i.exec(t);if(o){var u=a(o);this.r=u[0],this.g=u[1],this.b=u[2],u.length>3&&(this.alpha=u[3]),this.ok=!0}}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.alpha=this.alpha<0?0:this.alpha>1||isNaN(this.alpha)?1:this.alpha,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toRGBA=function(){return"rgba("+this.r+", "+this.g+", "+this.b+", "+this.alpha+")"},this.toHex=function(){var t=this.r.toString(16),e=this.g.toString(16),r=this.b.toString(16);return 1==t.length&&(t="0"+t),1==e.length&&(e="0"+e),1==r.length&&(r="0"+r),"#"+t+e+r},this.getHelpXML=function(){for(var t=new Array,n=0;n<r.length;n++)for(var i=r[n].example,a=0;a<i.length;a++)t[t.length]=i[a];for(var o in e)t[t.length]=o;var u=document.createElement("ul");u.setAttribute("id","rgbcolor-examples");for(n=0;n<t.length;n++)try{var s=document.createElement("li"),c=new RGBColor(t[n]),l=document.createElement("div");l.style.cssText="margin: 3px; border: 1px solid black; background:"+c.toHex()+"; color:"+c.toHex(),l.appendChild(document.createTextNode("test"));var f=document.createTextNode(" "+t[n]+" -> "+c.toRGB()+" -> "+c.toHex());s.appendChild(l),s.appendChild(f),u.appendChild(s)}catch(t){}return u}},Ju=function(){function t(e,r,n){Io(this,t),this.document=e,this.name=r,this.value=n,this.isNormalizedColor=!1}return zo(t,[{key:"split",value:function(){var e,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ",i=this.document,a=this.name;return ee(e=Zu(r=re(this.getString())).call(r).split(n)).call(e,(function(e){return new t(i,a,e)}))}},{key:"hasValue",value:function(t){var e=this.value;return null!==e&&""!==e&&(t||0!==e)&&void 0!==e}},{key:"isString",value:function(t){var e=this.value,r="string"==typeof e;return r&&t?t.test(e):r}},{key:"isUrlDefinition",value:function(){return this.isString(/^url\(/)}},{key:"isPixels",value:function(){if(!this.hasValue())return!1;var t=this.getString();switch(!0){case/px$/.test(t):case/^[0-9]+$/.test(t):return!0;default:return!1}}},{key:"setValue",value:function(t){return this.value=t,this}},{key:"getValue",value:function(t){return void 0===t||this.hasValue()?this.value:t}},{key:"getNumber",value:function(t){if(!this.hasValue())return void 0===t?0:Et(t);var e=this.value,r=Et(e);return this.isString(/%$/)&&(r/=100),r}},{key:"getString",value:function(t){return void 0===t||this.hasValue()?void 0===this.value?"":String(this.value):String(t)}},{key:"getColor",value:function(t){var e=this.getString(t);return this.isNormalizedColor||(this.isNormalizedColor=!0,e=ce(e),this.value=e),e}},{key:"getDpi",value:function(){return 96}},{key:"getRem",value:function(){return this.document.rootEmSize}},{key:"getEm",value:function(){return this.document.emSize}},{key:"getUnits",value:function(){return this.getString().replace(/[0-9\.\-]/g,"")}},{key:"getPixels",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.hasValue())return 0;var r="boolean"==typeof t?[void 0,t]:[t],n=si(r,2),i=n[0],a=n[1],o=this.document.screen.viewPort;switch(!0){case this.isString(/vmin$/):return this.getNumber()/100*Math.min(o.computeSize("x"),o.computeSize("y"));case this.isString(/vmax$/):return this.getNumber()/100*Math.max(o.computeSize("x"),o.computeSize("y"));case this.isString(/vw$/):return this.getNumber()/100*o.computeSize("x");case this.isString(/vh$/):return this.getNumber()/100*o.computeSize("y");case this.isString(/rem$/):return this.getNumber()*this.getRem();case this.isString(/em$/):return this.getNumber()*this.getEm();case this.isString(/ex$/):return this.getNumber()*this.getEm()/2;case this.isString(/px$/):return this.getNumber();case this.isString(/pt$/):return this.getNumber()*this.getDpi()*(1/72);case this.isString(/pc$/):return 15*this.getNumber();case this.isString(/cm$/):return this.getNumber()*this.getDpi()/2.54;case this.isString(/mm$/):return this.getNumber()*this.getDpi()/25.4;case this.isString(/in$/):return this.getNumber()*this.getDpi();case this.isString(/%$/)&&a:return this.getNumber()*this.getEm();case this.isString(/%$/):return this.getNumber()*o.computeSize(i);default:var u=this.getNumber();return e&&u<1?u*o.computeSize(i):u}}},{key:"getMilliseconds",value:function(){return this.hasValue()?this.isString(/ms$/)?this.getNumber():1e3*this.getNumber():0}},{key:"getRadians",value:function(){if(!this.hasValue())return 0;switch(!0){case this.isString(/deg$/):return this.getNumber()*(Math.PI/180);case this.isString(/grad$/):return this.getNumber()*(Math.PI/200);case this.isString(/rad$/):return this.getNumber();default:return this.getNumber()*(Math.PI/180)}}},{key:"getDefinition",value:function(){var t=this.getString(),e=t.match(/#([^\)'"]+)/);return e&&(e=e[1]),e||(e=t),this.document.definitions[e]}},{key:"getFillStyleDefinition",value:function(t,e){var r=this.getDefinition();if(!r)return null;if("function"==typeof r.createGradient)return r.createGradient(this.document.ctx,t,e);if("function"==typeof r.createPattern){if(r.getHrefAttribute().hasValue()){var n=r.getAttribute("patternTransform");r=r.getHrefAttribute().getDefinition(),n.hasValue()&&r.getAttribute("patternTransform",!0).setValue(n.value)}return r.createPattern(this.document.ctx,t,e)}return null}},{key:"getTextBaseline",value:function(){return this.hasValue()?t.textBaselineMapping[this.getString()]:null}},{key:"addOpacity",value:function(e){for(var r=this.getColor(),n=r.length,i=0,a=0;a<n&&(","===r[a]&&i++,3!==i);a++);if(e.hasValue()&&this.isString()&&3!==i){var o=new Ku(r);o.ok&&(o.alpha=e.getNumber(),r=o.toRGBA())}return new t(this.document,this.name,r)}}],[{key:"empty",value:function(e){return new t(e,"EMPTY","")}}]),t}();Ju.textBaselineMapping={baseline:"alphabetic","before-edge":"top","text-before-edge":"top",middle:"middle",central:"middle","after-edge":"bottom","text-after-edge":"bottom",ideographic:"ideographic",alphabetic:"alphabetic",hanging:"hanging",mathematical:"alphabetic"};var ts=function(){function t(){Io(this,t),this.viewPorts=[]}return zo(t,[{key:"clear",value:function(){this.viewPorts=[]}},{key:"setCurrent",value:function(t,e){this.viewPorts.push({width:t,height:e})}},{key:"removeCurrent",value:function(){this.viewPorts.pop()}},{key:"getCurrent",value:function(){var t=this.viewPorts;return t[t.length-1]}},{key:"computeSize",value:function(t){return"number"==typeof t?t:"x"===t?this.width:"y"===t?this.height:Math.sqrt(Math.pow(this.width,2)+Math.pow(this.height,2))/Math.sqrt(2)}},{key:"width",get:function(){return this.getCurrent().width}},{key:"height",get:function(){return this.getCurrent().height}}]),t}(),es=function(){function t(e,r){Io(this,t),this.x=e,this.y=r}return zo(t,[{key:"angleTo",value:function(t){return Math.atan2(t.y-this.y,t.x-this.x)}},{key:"applyTransform",value:function(t){var e=this.x,r=this.y,n=e*t[0]+r*t[2]+t[4],i=e*t[1]+r*t[3]+t[5];this.x=n,this.y=i}}],[{key:"parse",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=ae(e),i=si(n,2),a=i[0],o=void 0===a?r:a,u=i[1],s=void 0===u?r:u;return new t(o,s)}},{key:"parseScale",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=ae(e),i=si(n,2),a=i[0],o=void 0===a?r:a,u=i[1],s=void 0===u?o:u;return new t(o,s)}},{key:"parsePath",value:function(e){for(var r=ae(e),n=r.length,i=[],a=0;a<n;a+=2)i.push(new t(r[a],r[a+1]));return i}}]),t}(),rs=function(){function t(e){var r,n;Io(this,t),this.screen=e,this.working=!1,this.events=[],this.eventElements=[],this.onClick=lu(r=this.onClick).call(r,this),this.onMouseMove=lu(n=this.onMouseMove).call(n,this)}return zo(t,[{key:"isWorking",value:function(){return this.working}},{key:"start",value:function(){if(!this.working){var t=this.screen,e=this.onClick,r=this.onMouseMove,n=t.ctx.canvas;n.onclick=e,n.onmousemove=r,this.working=!0}}},{key:"stop",value:function(){if(this.working){var t=this.screen.ctx.canvas;this.working=!1,t.onclick=null,t.onmousemove=null}}},{key:"hasEvents",value:function(){return this.working&&this.events.length>0}},{key:"runEvents",value:function(){if(this.working){var t=this.screen,e=this.events,r=this.eventElements,n=t.ctx.canvas.style;n&&(n.cursor=""),Hi(e).call(e,(function(t,e){for(var n=t.run,i=r[e];i;)n(i),i=i.parent})),this.events=[],this.eventElements=[]}}},{key:"checkPath",value:function(t,e){if(this.working&&e){var r=this.events,n=this.eventElements;Hi(r).call(r,(function(r,i){var a=r.x,o=r.y;!n[i]&&e.isPointInPath&&e.isPointInPath(a,o)&&(n[i]=t)}))}}},{key:"checkBoundingBox",value:function(t,e){if(this.working&&e){var r=this.events,n=this.eventElements;Hi(r).call(r,(function(r,i){var a=r.x,o=r.y;!n[i]&&e.isPointInBox(a,o)&&(n[i]=t)}))}}},{key:"mapXY",value:function(t,e){for(var r=this.screen,n=r.window,i=r.ctx,a=new es(t,e),o=i.canvas;o;)a.x-=o.offsetLeft,a.y-=o.offsetTop,o=o.offsetParent;return n.scrollX&&(a.x+=n.scrollX),n.scrollY&&(a.y+=n.scrollY),a}},{key:"onClick",value:function(t){var e=this.mapXY((t||event).clientX,(t||event).clientY),r=e.x,n=e.y;this.events.push({type:"onclick",x:r,y:n,run:function(t){t.onClick&&t.onClick()}})}},{key:"onMouseMove",value:function(t){var e=this.mapXY((t||event).clientX,(t||event).clientY),r=e.x,n=e.y;this.events.push({type:"onmousemove",x:r,y:n,run:function(t){t.onMouseMove&&t.onMouseMove()}})}}]),t}(),ns="undefined"!=typeof window?window:null,is="undefined"!=typeof fetch?lu(fetch).call(fetch,void 0):null,as=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.fetch,i=void 0===n?is:n,a=r.window,o=void 0===a?ns:a;Io(this,t),this.ctx=e,this.FRAMERATE=30,this.MAX_VIRTUAL_PIXELS=3e4,this.CLIENT_WIDTH=800,this.CLIENT_HEIGHT=600,this.viewPort=new ts,this.mouse=new rs(this),this.animations=[],this.waits=[],this.frameDuration=0,this.isReadyLock=!1,this.isFirstRender=!0,this.intervalId=null,this.window=o,this.fetch=i}return zo(t,[{key:"wait",value:function(t){this.waits.push(t)}},{key:"ready",value:function(){return this.readyPromise?this.readyPromise:nu.resolve()}},{key:"isReady",value:function(){var t;if(this.isReadyLock)return!0;var e=ru(t=this.waits).call(t,(function(t){return t()}));return e&&(this.waits=[],this.resolveReady&&this.resolveReady()),this.isReadyLock=e,e}},{key:"setDefaults",value:function(t){t.strokeStyle="rgba(0,0,0,0)",t.lineCap="butt",t.lineJoin="miter",t.miterLimit=4}},{key:"setViewBox",value:function(t){var e=t.document,r=t.ctx,n=t.aspectRatio,i=t.width,a=t.desiredWidth,o=t.height,u=t.desiredHeight,s=t.minX,c=void 0===s?0:s,l=t.minY,f=void 0===l?0:l,h=t.refX,p=t.refY,y=t.clip,v=void 0!==y&&y,g=t.clipX,d=void 0===g?0:g,m=t.clipY,x=void 0===m?0:m,b=re(n).replace(/^defer\s/,"").split(" "),w=si(b,2),S=w[0]||"xMidYMid",A=w[1]||"meet",k=i/a,T=o/u,O=Math.min(k,T),P=Math.max(k,T),C=a,E=u;"meet"===A&&(C*=O,E*=O),"slice"===A&&(C*=P,E*=P);var M=new Ju(e,"refX",h),N=new Ju(e,"refY",p),R=M.hasValue()&&N.hasValue();if(R&&r.translate(-O*M.getPixels("x"),-O*N.getPixels("y")),v){var _=O*d,D=O*x;r.beginPath(),r.moveTo(_,D),r.lineTo(i,D),r.lineTo(i,o),r.lineTo(_,o),r.closePath(),r.clip()}if(!R){var V="meet"===A&&O===T,L="slice"===A&&P===T,I="meet"===A&&O===k,j="slice"===A&&P===k;/^xMid/.test(S)&&(V||L)&&r.translate(i/2-C/2,0),/YMid$/.test(S)&&(I||j)&&r.translate(0,o/2-E/2),/^xMax/.test(S)&&(V||L)&&r.translate(i-C,0),/YMax$/.test(S)&&(I||j)&&r.translate(0,o-E)}switch(!0){case"none"===S:r.scale(k,T);break;case"meet"===A:r.scale(O,O);break;case"slice"===A:r.scale(P,P)}r.translate(-c,-f)}},{key:"start",value:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.enableRedraw,i=void 0!==n&&n,a=r.ignoreMouse,o=void 0!==a&&a,u=r.ignoreAnimation,s=void 0!==u&&u,c=r.ignoreDimensions,l=void 0!==c&&c,f=r.ignoreClear,h=void 0!==f&&f,p=r.forceRedraw,y=r.scaleWidth,v=r.scaleHeight,g=r.offsetX,d=r.offsetY,m=this.FRAMERATE,x=this.mouse,b=1e3/m;if(this.frameDuration=b,this.readyPromise=new nu((function(t){e.resolveReady=t})),this.isReady()&&this.render(t,l,h,y,v,g,d),i){var w=$o(),S=w,A=0,k=function r(){w=$o(),(A=w-S)>=b&&(S=w-A%b,e.shouldUpdate(s,p)&&(e.render(t,l,h,y,v,g,d),x.runEvents())),e.intervalId=qu(r)};o||x.start(),this.intervalId=qu(k)}}},{key:"stop",value:function(){this.intervalId&&(qu.cancel(this.intervalId),this.intervalId=null),this.mouse.stop()}},{key:"shouldUpdate",value:function(t,e){if(!t){var r,n=this.frameDuration,i=Wo(r=this.animations).call(r,(function(t,e){return e.update(n)||t}),!1);if(i)return!0}return!("function"!=typeof e||!e())||(!(this.isReadyLock||!this.isReady())||!!this.mouse.hasEvents())}},{key:"render",value:function(t,e,r,n,i,a,o){var u=this.CLIENT_WIDTH,s=this.CLIENT_HEIGHT,c=this.viewPort,l=this.ctx,f=this.isFirstRender,h=l.canvas;c.clear(),h.width&&h.height?c.setCurrent(h.width,h.height):c.setCurrent(u,s);var p=t.getStyle("width"),y=t.getStyle("height");!e&&(f||"number"!=typeof n&&"number"!=typeof i)&&(p.hasValue()&&(h.width=p.getPixels("x"),h.style&&(h.style.width="".concat(h.width,"px"))),y.hasValue()&&(h.height=y.getPixels("y"),h.style&&(h.style.height="".concat(h.height,"px"))));var v=h.clientWidth||h.width,g=h.clientHeight||h.height;if(e&&p.hasValue()&&y.hasValue()&&(v=p.getPixels("x"),g=y.getPixels("y")),c.setCurrent(v,g),"number"==typeof a&&t.getAttribute("x",!0).setValue(a),"number"==typeof o&&t.getAttribute("y",!0).setValue(o),"number"==typeof n||"number"==typeof i){var d,m,x=ae(t.getAttribute("viewBox").getString()),b=0,w=0;if("number"==typeof n){var S=t.getStyle("width");S.hasValue()?b=S.getPixels("x")/n:isNaN(x[2])||(b=x[2]/n)}if("number"==typeof i){var A=t.getStyle("height");A.hasValue()?w=A.getPixels("y")/i:isNaN(x[3])||(w=x[3]/i)}b||(b=w),w||(w=b),t.getAttribute("width",!0).setValue(n),t.getAttribute("height",!0).setValue(i);var k=t.getStyle("transform",!0,!0);k.setValue(Ho(d=Ho(m="".concat(k.getString()," scale(")).call(m,1/b,", ")).call(d,1/w,")"))}r||l.clearRect(0,0,v,g),t.render(l),f&&(this.isFirstRender=!1)}}]),t}();as.defaultWindow=ns,as.defaultFetch=is;var os=as.defaultFetch,us="undefined"!=typeof DOMParser?DOMParser:null,ss=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.fetch,n=void 0===r?os:r,i=e.DOMParser,a=void 0===i?us:i;Io(this,t),this.fetch=n,this.DOMParser=a}var e,r;return zo(t,[{key:"parse",value:(r=Do(aa.mark((function t(e){return aa.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!/^</.test(e)){t.next=2;break}return t.abrupt("return",this.parseFromString(e));case 2:return t.abrupt("return",this.load(e));case 3:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})},{key:"parseFromString",value:function(t){var e=new this.DOMParser;try{return this.checkDocument(e.parseFromString(t,"image/svg+xml"))}catch(r){return this.checkDocument(e.parseFromString(t,"text/xml"))}}},{key:"checkDocument",value:function(t){var e=t.getElementsByTagName("parsererror")[0];if(e)throw new Error(e.textContent);return t}},{key:"load",value:(e=Do(aa.mark((function t(e){var r,n;return aa.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch(e);case 2:return r=t.sent,t.next=5,r.text();case 5:return n=t.sent,t.abrupt("return",this.parseFromString(n));case 7:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),t}(),cs=jt("Reflect","construct"),ls=a((function(){function t(){}return!(cs((function(){}),[],t)instanceof t)})),fs=!a((function(){cs((function(){}))})),hs=ls||fs;U({target:"Reflect",stat:!0,forced:hs,sham:hs},{construct:function(t,e){V(t),I(e);var r=arguments.length<3?t:V(arguments[2]);if(fs&&!ls)return cs(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(uu.apply(t,n))}var i=r.prototype,a=rr(d(i)?i:Object.prototype),o=Function.apply.call(t,a,e);return d(o)?o:a}});var ps=D.Reflect.construct;U({target:"Object",stat:!0,sham:!o},{create:rr});var ys=D.Object,vs=function(t,e){return ys.create(t,e)};U({target:"Object",stat:!0},{setPrototypeOf:yr});var gs=D.Object.setPrototypeOf,ds=r((function(t){function e(r,n){return t.exports=e=gs||function(t,e){return t.__proto__=e,t},e(r,n)}t.exports=e}));var ms=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=vs(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ds(t,e)},xs=en.f("iterator"),bs=r((function(t){function e(r){return t.exports=e="function"==typeof Ln&&"symbol"==typeof xs?function(t){return typeof t}:function(t){return t&&"function"==typeof Ln&&t.constructor===Ln&&t!==Ln.prototype?"symbol":typeof t},e(r)}t.exports=e}));var ws=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};var Ss=function(t,e){return!e||"object"!==bs(e)&&"function"!=typeof e?ws(t):e},As=a((function(){Ie(1)}));U({target:"Object",stat:!0,forced:As,sham:!De},{getPrototypeOf:function(t){return Ie(Mt(t))}});var ks=D.Object.getPrototypeOf,Ts=r((function(t){function e(r){return t.exports=e=gs?ks:function(t){return t.__proto__||ks(t)},e(r)}t.exports=e}));var Os=function(t){if(fe(t))return ai(t)};var Ps=function(t){if(void 0!==Ln&&Fr(Object(t)))return Wn(t)};var Cs=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var Es=function(t){return Os(t)||Ps(t)||oi(t)||Cs()},Ms=Lt.some,Ns=Di("some"),Rs=Wt("some");U({target:"Array",proto:!0,forced:!Ns||!Rs},{some:function(t){return Ms(this,t,arguments.length>1?arguments[1]:void 0)}});var _s=yt("Array").some,Ds=Array.prototype,Vs=function(t){var e=t.some;return t===Ds||t instanceof Array&&e===Ds.some?_s:e},Ls=Ye.includes,Is=Wt("indexOf",{ACCESSORS:!0,1:0});U({target:"Array",proto:!0,forced:!Is},{includes:function(t){return Ls(this,t,arguments.length>1?arguments[1]:void 0)}});var js=yt("Array").includes;U({target:"String",proto:!0,forced:!lt("includes")},{includes:function(t){return!!~String(v(this)).indexOf(st(t),arguments.length>1?arguments[1]:void 0)}});var zs=yt("String").includes,Fs=Array.prototype,Bs=String.prototype,Hs=function(t){var e=t.includes;return t===Fs||t instanceof Array&&e===Fs.includes?js:"string"==typeof t||t===Bs||t instanceof String&&e===Bs.includes?zs:e},Us=Qn,Xs=function(){function t(e,r){Io(this,t),this.type="translate",this.point=null,this.point=es.parse(r)}return zo(t,[{key:"apply",value:function(t){var e=this.point,r=e.x,n=e.y;t.translate(r||0,n||0)}},{key:"unapply",value:function(t){var e=this.point,r=e.x,n=e.y;t.translate(-1*r||0,-1*n||0)}},{key:"applyToPoint",value:function(t){var e=this.point,r=e.x,n=e.y;t.applyTransform([1,0,0,1,r||0,n||0])}}]),t}(),Ys=function(){function t(e,r,n){Io(this,t),this.type="rotate",this.angle=null,this.originX=null,this.originY=null,this.cx=0,this.cy=0;var i=ae(r);this.angle=new Ju(e,"angle",i[0]),this.originX=n[0],this.originY=n[1],this.cx=i[1]||0,this.cy=i[2]||0}return zo(t,[{key:"apply",value:function(t){var e=this.cx,r=this.cy,n=this.originX,i=this.originY,a=this.angle,o=e+n.getPixels("x"),u=r+i.getPixels("y");t.translate(o,u),t.rotate(a.getRadians()),t.translate(-o,-u)}},{key:"unapply",value:function(t){var e=this.cx,r=this.cy,n=this.angle;t.translate(e,r),t.rotate(-1*n.getRadians()),t.translate(-e,-r)}},{key:"applyToPoint",value:function(t){var e=this.cx,r=this.cy,n=this.angle.getRadians();t.applyTransform([1,0,0,1,e||0,r||0]),t.applyTransform([Math.cos(n),Math.sin(n),-Math.sin(n),Math.cos(n),0,0]),t.applyTransform([1,0,0,1,-e||0,-r||0])}}]),t}(),qs=function(){function t(e,r){Io(this,t),this.type="scale",this.scale=null;var n=es.parseScale(r);0!==n.x&&0!==n.y||(n.x=mi,n.y=mi),this.scale=n}return zo(t,[{key:"apply",value:function(t){var e=this.scale,r=e.x,n=e.y;t.scale(r,n||r)}},{key:"unapply",value:function(t){var e=this.scale,r=e.x,n=e.y;t.scale(1/r,1/n||r)}},{key:"applyToPoint",value:function(t){var e=this.scale,r=e.x,n=e.y;t.applyTransform([r||0,0,0,n||0,0,0])}}]),t}(),Gs=function(){function t(e,r){Io(this,t),this.type="matrix",this.matrix=[],this.matrix=ae(r)}return zo(t,[{key:"apply",value:function(t){var e=this.matrix;t.transform(e[0],e[1],e[2],e[3],e[4],e[5])}},{key:"unapply",value:function(t){var e=this.matrix,r=e[0],n=e[2],i=e[4],a=e[1],o=e[3],u=e[5],s=1/(r*(1*o-0*u)-n*(1*a-0*u)+i*(0*a-0*o));t.transform(s*(1*o-0*u),s*(0*u-1*a),s*(0*i-1*n),s*(1*r-0*i),s*(n*u-i*o),s*(i*a-r*u))}},{key:"applyToPoint",value:function(t){t.applyTransform(this.matrix)}}]),t}();function Qs(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Ws=function(t){ms(r,t);var e=Qs(r);function r(t,n){var i;return Io(this,r),(i=e.call(this,t,n)).type="skew",i.angle=null,i.angle=new Ju(t,"angle",n),i}return r}(Gs);function $s(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Zs=function(t){ms(r,t);var e=$s(r);function r(t,n){var i;return Io(this,r),(i=e.call(this,t,n)).type="skewX",i.matrix=[1,0,Math.tan(i.angle.getRadians()),1,0,0],i}return r}(Ws);function Ks(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Js=function(t){ms(r,t);var e=Ks(r);function r(t,n){var i;return Io(this,r),(i=e.call(this,t,n)).type="skewY",i.matrix=[1,Math.tan(i.angle.getRadians()),0,1,0,0],i}return r}(Ws);var tc=function(){function t(e,r,n){var i=this;Io(this,t),this.document=e,this.transforms=[];var a=function(t){var e;return Zu(e=re(t)).call(e).replace(/\)([a-zA-Z])/g,") $1").replace(/\)(\s?,\s?)/g,") ").split(/\s(?=[a-z])/)}(r);Hi(a).call(a,(function(e){if("none"!==e){var r=function(t){var e=t.split("("),r=si(e,2),n=r[0],i=r[1];return[Zu(n).call(n),Zu(i).call(i).replace(")","")]}(e),a=si(r,2),o=a[0],u=a[1],s=t.transformTypes[o];void 0!==s&&i.transforms.push(new s(i.document,u,n))}}))}return zo(t,[{key:"apply",value:function(t){for(var e=this.transforms,r=e.length,n=0;n<r;n++)e[n].apply(t)}},{key:"unapply",value:function(t){for(var e=this.transforms,r=e.length-1;r>=0;r--)e[r].unapply(t)}},{key:"applyToPoint",value:function(t){for(var e=this.transforms,r=e.length,n=0;n<r;n++)e[n].applyToPoint(t)}}],[{key:"fromElement",value:function(e,r){var n=r.getStyle("transform",!1,!0),i=r.getStyle("transform-origin",!1,!0).split(),a=si(i,2),o=a[0],u=a[1],s=[o,void 0===u?o:u];return n.hasValue()?new t(e,n.getString(),s):null}}]),t}();tc.transformTypes={translate:Xs,rotate:Ys,scale:qs,matrix:Gs,skewX:Zs,skewY:Js};var ec=function(){function t(e,r){var n,i,a=this,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(Io(this,t),this.document=e,this.node=r,this.captureTextNodes=o,this.attributes={},this.styles={},this.stylesSpecificity={},this.animationFrozen=!1,this.animationFrozenValue="",this.parent=null,this.children=[],r&&1===r.nodeType){if(Hi(n=Us(r.attributes)).call(n,(function(t){var r=ue(t.nodeName);a.attributes[r]=new Ju(e,r,t.value)})),this.addStylesFromStyleDefinition(),this.getAttribute("style").hasValue()){var u,s=ee(u=this.getAttribute("style").getString().split(";")).call(u,(function(t){return Zu(t).call(t)}));Hi(s).call(s,(function(t){var r;if(t){var n=ee(r=t.split(":")).call(r,(function(t){return Zu(t).call(t)})),i=si(n,2),o=i[0],u=i[1];a.styles[o]=new Ju(e,o,u)}}))}var c=e.definitions,l=this.getAttribute("id");l.hasValue()&&(c[l.getValue()]||(c[l.getValue()]=this)),Hi(i=Us(r.childNodes)).call(i,(function(t){if(1===t.nodeType)a.addChild(t);else if(o&&(3===t.nodeType||4===t.nodeType)){var r=e.createTextNode(t);r.getText().length>0&&a.addChild(r)}}))}}return zo(t,[{key:"getAttribute",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.attributes[t];if(!r&&e){var n=new Ju(this.document,t,"");return this.attributes[t]=n,n}return r||Ju.empty(this.document)}},{key:"getHrefAttribute",value:function(){for(var t in this.attributes)if("href"===t||/:href$/.test(t))return this.attributes[t];return Ju.empty(this.document)}},{key:"getStyle",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=this.styles[t];if(n)return n;var i=this.getAttribute(t);if(i&&i.hasValue())return this.styles[t]=i,i;if(!r){var a=this.parent;if(a){var o=a.getStyle(t);if(o&&o.hasValue())return o}}if(e){var u=new Ju(this.document,t,"");return this.styles[t]=u,u}return n||Ju.empty(this.document)}},{key:"render",value:function(t){if("none"!==this.getStyle("display").getString()&&"hidden"!==this.getStyle("visibility").getString()){if(t.save(),this.getStyle("mask").hasValue()){var e=this.getStyle("mask").getDefinition();e&&(this.applyEffects(t),e.apply(t,this))}else if("none"!==this.getStyle("filter").getValue("none")){var r=this.getStyle("filter").getDefinition();r&&(this.applyEffects(t),r.apply(t,this))}else this.setContext(t),this.renderChildren(t),this.clearContext(t);t.restore()}}},{key:"setContext",value:function(t){}},{key:"applyEffects",value:function(t){var e=tc.fromElement(this.document,this);e&&e.apply(t);var r=this.getStyle("clip-path",!1,!0);if(r.hasValue()){var n=r.getDefinition();n&&n.apply(t)}}},{key:"clearContext",value:function(t){}},{key:"renderChildren",value:function(t){var e;Hi(e=this.children).call(e,(function(e){e.render(t)}))}},{key:"addChild",value:function(e){var r,n=e instanceof t?e:this.document.createElement(e);n.parent=this,Hs(r=t.ignoreChildTypes).call(r,n.type)||this.children.push(n)}},{key:"matchesSelector",value:function(t){var e,r=this.node;if("function"==typeof r.matches)return r.matches(t);var n=r.getAttribute("class");return!(!n||""===n)&&Vs(e=n.split(" ")).call(e,(function(e){if(".".concat(e)===t)return!0}))}},{key:"addStylesFromStyleDefinition",value:function(){var t=this.document,e=t.styles,r=t.stylesSpecificity;for(var n in e)if("@"!==n[0]&&this.matchesSelector(n)){var i=e[n],a=r[n];if(i)for(var o in i){var u=this.stylesSpecificity[o];void 0===u&&(u="000"),a>=u&&(this.styles[o]=i[o],this.stylesSpecificity[o]=a)}}}},{key:"removeStyles",value:function(t,e){return Wo(e).call(e,(function(e,r){var n,i=t.getStyle(r);if(!i.hasValue())return e;var a=i.getString();return i.setValue(""),Ho(n=[]).call(n,Es(e),[[r,a]])}),[])}},{key:"restoreStyles",value:function(t,e){Hi(e).call(e,(function(e){var r=si(e,2),n=r[0],i=r[1];t.getStyle(n,!0).setValue(i)}))}}]),t}();function rc(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}ec.ignoreChildTypes=["title"];var nc=function(t){ms(r,t);var e=rc(r);function r(t,n,i){return Io(this,r),e.call(this,t,n,i)}return r}(ec),ic=[].reverse,ac=[1,2];U({target:"Array",proto:!0,forced:String(ac)===String(ac.reverse())},{reverse:function(){return Nt(this)&&(this.length=this.length),ic.call(this)}});var oc=yt("Array").reverse,uc=Array.prototype,sc=function(t){var e=t.reverse;return t===uc||t instanceof Array&&e===uc.reverse?oc:e},cc=Ye.indexOf,lc=[].indexOf,fc=!!lc&&1/[1].indexOf(1,-0)<0,hc=Di("indexOf"),pc=Wt("indexOf",{ACCESSORS:!0,1:0});U({target:"Array",proto:!0,forced:fc||!hc||!pc},{indexOf:function(t){return fc?lc.apply(this,arguments)||0:cc(this,t,arguments.length>1?arguments[1]:void 0)}});var yc=yt("Array").indexOf,vc=Array.prototype,gc=function(t){var e=t.indexOf;return t===vc||t instanceof Array&&e===vc.indexOf?yc:e},dc=Yi;U({target:"Reflect",stat:!0},{get:function t(e,r){var n,i,a=arguments.length<3?e:arguments[2];return I(e)===a?e[r]:(n=O.f(e,r))?b(n,"value")?n.value:void 0===n.get?void 0:n.get.call(a):d(i=Ie(e))?t(i,r,a):void 0}});var mc=D.Reflect.get;var xc=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Ts(t)););return t},bc=r((function(t){function e(r,n,i){return"undefined"!=typeof Reflect&&mc?t.exports=e=mc:t.exports=e=function(t,e,r){var n=xc(t,e);if(n){var i=dc(n,e);return i.get?i.get.call(r):i.value}},e(r,n,i||r)}t.exports=e}));function wc(t){var e=Zu(t).call(t);return/^('|")/.test(e)?e:'"'.concat(e,'"')}function Sc(t){if(!t)return"";var e=Zu(t).call(t).toLowerCase();switch(e){case"normal":case"italic":case"oblique":case"inherit":case"initial":case"unset":return e;default:return/^oblique\s+(-|)\d+deg$/.test(e)?e:""}}function Ac(t){if(!t)return"";var e=Zu(t).call(t).toLowerCase();switch(e){case"normal":case"bold":case"lighter":case"bolder":case"inherit":case"initial":case"unset":return e;default:return/^[\d.]+$/.test(e)?e:""}}var kc=function(){function t(e,r,n,i,a,o){Io(this,t);var u=o?"string"==typeof o?t.parse(o):o:{};this.fontFamily=a||u.fontFamily,this.fontSize=i||u.fontSize,this.fontStyle=e||u.fontStyle,this.fontWeight=n||u.fontWeight,this.fontVariant=r||u.fontVariant}return zo(t,[{key:"toString",value:function(){var t,e,r;return Zu(t=[Sc(this.fontStyle),this.fontVariant,Ac(this.fontWeight),this.fontSize,(e=this.fontFamily,"undefined"==typeof process?e:ee(r=Zu(e).call(e).split(",")).call(r,wc).join(","))].join(" ")).call(t)}}],[{key:"parse",value:function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,i="",a="",o="",u="",s="",c=Zu(e=re(r)).call(e).split(" "),l={fontSize:!1,fontStyle:!1,fontWeight:!1,fontVariant:!1};return Hi(c).call(c,(function(e){var r,n,c;switch(!0){case!l.fontStyle&&Hs(r=t.styles).call(r,e):"inherit"!==e&&(i=e),l.fontStyle=!0;break;case!l.fontVariant&&Hs(n=t.variants).call(n,e):"inherit"!==e&&(a=e),l.fontStyle=!0,l.fontVariant=!0;break;case!l.fontWeight&&Hs(c=t.weights).call(c,e):"inherit"!==e&&(o=e),l.fontStyle=!0,l.fontVariant=!0,l.fontWeight=!0;break;case!l.fontSize:if("inherit"!==e){var f=e.split("/"),h=si(f,1);u=h[0]}l.fontStyle=!0,l.fontVariant=!0,l.fontWeight=!0,l.fontSize=!0;break;default:"inherit"!==e&&(s+=e)}})),new t(i,a,o,u,s,n)}}]),t}();kc.styles="normal|italic|oblique|inherit",kc.variants="normal|small-caps|inherit",kc.weights="normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";var Tc=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number.NaN,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.NaN,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Number.NaN,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Number.NaN;Io(this,t),this.x1=e,this.y1=r,this.x2=n,this.y2=i,this.addPoint(e,r),this.addPoint(n,i)}return zo(t,[{key:"addPoint",value:function(t,e){void 0!==t&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=t,this.x2=t),t<this.x1&&(this.x1=t),t>this.x2&&(this.x2=t)),void 0!==e&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))}},{key:"addX",value:function(t){this.addPoint(t,null)}},{key:"addY",value:function(t){this.addPoint(null,t)}},{key:"addBoundingBox",value:function(t){if(t){var e=t.x1,r=t.y1,n=t.x2,i=t.y2;this.addPoint(e,r),this.addPoint(n,i)}}},{key:"sumCubic",value:function(t,e,r,n,i){return Math.pow(1-t,3)*e+3*Math.pow(1-t,2)*t*r+3*(1-t)*Math.pow(t,2)*n+Math.pow(t,3)*i}},{key:"bezierCurveAdd",value:function(t,e,r,n,i){var a=6*e-12*r+6*n,o=-3*e+9*r-9*n+3*i,u=3*r-3*e;if(0!==o){var s=Math.pow(a,2)-4*u*o;if(!(s<0)){var c=(-a+Math.sqrt(s))/(2*o);0<c&&c<1&&(t?this.addX(this.sumCubic(c,e,r,n,i)):this.addY(this.sumCubic(c,e,r,n,i)));var l=(-a-Math.sqrt(s))/(2*o);0<l&&l<1&&(t?this.addX(this.sumCubic(l,e,r,n,i)):this.addY(this.sumCubic(l,e,r,n,i)))}}else{if(0===a)return;var f=-u/a;0<f&&f<1&&(t?this.addX(this.sumCubic(f,e,r,n,i)):this.addY(this.sumCubic(f,e,r,n,i)))}}},{key:"addBezierCurve",value:function(t,e,r,n,i,a,o,u){this.addPoint(t,e),this.addPoint(o,u),this.bezierCurveAdd(!0,t,r,i,o),this.bezierCurveAdd(!1,e,n,a,u)}},{key:"addQuadraticCurve",value:function(t,e,r,n,i,a){var o=t+2/3*(r-t),u=e+2/3*(n-e),s=o+1/3*(i-t),c=u+1/3*(a-e);this.addBezierCurve(t,e,o,s,u,c,i,a)}},{key:"isPointInBox",value:function(t,e){var r=this.x1,n=this.y1,i=this.x2,a=this.y2;return r<=t&&t<=i&&n<=e&&e<=a}},{key:"x",get:function(){return this.x1}},{key:"y",get:function(){return this.y1}},{key:"width",get:function(){return this.x2-this.x1}},{key:"height",get:function(){return this.y2-this.y1}}]),t}();function Oc(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Pc=function(t){ms(r,t);var e=Oc(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).modifiedEmSizeStack=!1,t}return zo(r,[{key:"calculateOpacity",value:function(){for(var t=1,e=this;e;){var r=e.getStyle("opacity",!1,!0);r.hasValue(!0)&&(t*=r.getNumber()),e=e.parent}return t}},{key:"setContext",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e){var r=this.getStyle("fill"),n=this.getStyle("fill-opacity"),i=this.getStyle("stroke"),a=this.getStyle("stroke-opacity");if(r.isUrlDefinition()){var o=r.getFillStyleDefinition(this,n);o&&(t.fillStyle=o)}else if(r.hasValue()){"currentColor"===r.getString()&&r.setValue(this.getStyle("color").getColor());var u=r.getColor();"inherit"!==u&&(t.fillStyle="none"===u?"rgba(0,0,0,0)":u)}if(n.hasValue()){var s=new Ju(this.document,"fill",t.fillStyle).addOpacity(n).getColor();t.fillStyle=s}if(i.isUrlDefinition()){var c=i.getFillStyleDefinition(this,a);c&&(t.strokeStyle=c)}else if(i.hasValue()){"currentColor"===i.getString()&&i.setValue(this.getStyle("color").getColor());var l=i.getString();"inherit"!==l&&(t.strokeStyle="none"===l?"rgba(0,0,0,0)":l)}if(a.hasValue()){var f=new Ju(this.document,"stroke",t.strokeStyle).addOpacity(a).getString();t.strokeStyle=f}var h=this.getStyle("stroke-width");if(h.hasValue()){var p=h.getPixels();t.lineWidth=p||mi}var y=this.getStyle("stroke-linecap"),v=this.getStyle("stroke-linejoin"),g=this.getStyle("stroke-miterlimit"),d=this.getStyle("paint-order"),m=this.getStyle("stroke-dasharray"),x=this.getStyle("stroke-dashoffset");if(y.hasValue()&&(t.lineCap=y.getString()),v.hasValue()&&(t.lineJoin=v.getString()),g.hasValue()&&(t.miterLimit=g.getNumber()),d.hasValue()&&(t.paintOrder=d.getValue()),m.hasValue()&&"none"!==m.getString()){var b=ae(m.getString());void 0!==t.setLineDash?t.setLineDash(b):void 0!==t.webkitLineDash?t.webkitLineDash=b:void 0===t.mozDash||1===b.length&&0===b[0]||(t.mozDash=b);var w=x.getPixels();void 0!==t.lineDashOffset?t.lineDashOffset=w:void 0!==t.webkitLineDashOffset?t.webkitLineDashOffset=w:void 0!==t.mozDashOffset&&(t.mozDashOffset=w)}}if(this.modifiedEmSizeStack=!1,void 0!==t.font){var S=this.getStyle("font"),A=this.getStyle("font-style"),k=this.getStyle("font-variant"),T=this.getStyle("font-weight"),O=this.getStyle("font-size"),P=this.getStyle("font-family"),C=new kc(A.getString(),k.getString(),T.getString(),O.hasValue()?"".concat(O.getPixels(!0),"px"):"",P.getString(),kc.parse(S.getString(),t.font));A.setValue(C.fontStyle),k.setValue(C.fontVariant),T.setValue(C.fontWeight),O.setValue(C.fontSize),P.setValue(C.fontFamily),t.font=C.toString(),O.isPixels()&&(this.document.emSize=O.getPixels(),this.modifiedEmSizeStack=!0)}e||(this.applyEffects(t),t.globalAlpha=this.calculateOpacity())}},{key:"clearContext",value:function(t){bc(Ts(r.prototype),"clearContext",this).call(this,t),this.modifiedEmSizeStack&&this.document.popEmSize()}}]),r}(ec);function Cc(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Ec=function(t){ms(r,t);var e=Cc(r);function r(t,n,i){var a;return Io(this,r),(a=e.call(this,t,n,(this instanceof r?this.constructor:void 0)===r||i)).type="text",a.x=0,a.y=0,a.measureCache=-1,a}return zo(r,[{key:"setContext",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];bc(Ts(r.prototype),"setContext",this).call(this,t,e);var n=this.getStyle("dominant-baseline").getTextBaseline()||this.getStyle("alignment-baseline").getTextBaseline();n&&(t.textBaseline=n)}},{key:"initializeCoordinates",value:function(t){this.x=this.getAttribute("x").getPixels("x"),this.y=this.getAttribute("y").getPixels("y");var e=this.getAttribute("dx"),r=this.getAttribute("dy");e.hasValue()&&(this.x+=e.getPixels("x")),r.hasValue()&&(this.y+=r.getPixels("y")),this.x+=this.getAnchorDelta(t,this,0)}},{key:"getBoundingBox",value:function(t){var e,r=this;if("text"!==this.type)return this.getTElementBoundingBox(t);this.initializeCoordinates(t);var n=null;return Hi(e=this.children).call(e,(function(e,i){var a=r.getChildBoundingBox(t,r,r,i);n?n.addBoundingBox(a):n=a})),n}},{key:"getFontSize",value:function(){var t=this.document,e=this.parent,r=kc.parse(t.ctx.font).fontSize;return e.getStyle("font-size").getNumber(r)}},{key:"getTElementBoundingBox",value:function(t){var e=this.getFontSize();return new Tc(this.x,this.y-e,this.x+this.measureText(t),this.y)}},{key:"getGlyph",value:function(t,e,r){var n=e[r],i=null;if(t.isArabic){var a=e.length,o=e[r-1],u=e[r+1],s="isolated";(0===r||" "===o)&&r<a-2&&" "!==u&&(s="terminal"),r>0&&" "!==o&&r<a-2&&" "!==u&&(s="medial"),r>0&&" "!==o&&(r===a-1||" "===u)&&(s="initial"),void 0!==t.glyphs[n]&&((i=t.glyphs[n][s])||"glyph"!==t.glyphs[n].type||(i=t.glyphs[n]))}else i=t.glyphs[n];return i||(i=t.missingGlyph),i}},{key:"getText",value:function(){return""}},{key:"getTextFromNode",value:function(t){var e=t||this.node,r=Us(e.parentNode.childNodes),n=gc(r).call(r,e),i=r.length-1,a=re(e.value||e.text||e.textContent||"");return 0===n&&(a=ne(a)),n===i&&(a=ie(a)),a}},{key:"renderChildren",value:function(t){var e,r=this;if("text"===this.type){this.initializeCoordinates(t),Hi(e=this.children).call(e,(function(e,n){r.renderChild(t,r,r,n)}));var n=this.document.screen.mouse;n.isWorking()&&n.checkBoundingBox(this,this.getBoundingBox(t))}else this.renderTElementChildren(t)}},{key:"renderTElementChildren",value:function(t){var e=this.document,r=this.parent,n=this.getText(),i=r.getStyle("font-family").getDefinition();if(i)for(var a,o=i.fontFace.unitsPerEm,u=kc.parse(e.ctx.font),s=r.getStyle("font-size").getNumber(u.fontSize),c=r.getStyle("font-style").getString(u.fontStyle),l=s/o,f=i.isRTL?sc(a=n.split("")).call(a).join(""):n,h=ae(r.getAttribute("dx").getString()),p=f.length,y=0;y<p;y++){var v=this.getGlyph(i,f,y);t.translate(this.x,this.y),t.scale(l,-l);var g=t.lineWidth;t.lineWidth=t.lineWidth*o/s,"italic"===c&&t.transform(1,0,.4,1,0,0),v.render(t),"italic"===c&&t.transform(1,0,-.4,1,0,0),t.lineWidth=g,t.scale(1/l,-1/l),t.translate(-this.x,-this.y),this.x+=s*(v.horizAdvX||i.horizAdvX)/o,void 0===h[y]||isNaN(h[y])||(this.x+=h[y])}else{var d=this.x,m=this.y;"stroke"===t.paintOrder?(t.strokeStyle&&t.strokeText(n,d,m),t.fillStyle&&t.fillText(n,d,m)):(t.fillStyle&&t.fillText(n,d,m),t.strokeStyle&&t.strokeText(n,d,m))}}},{key:"getAnchorDelta",value:function(t,e,r){var n=this.getStyle("text-anchor").getString("start");if("start"!==n){for(var i=e.children,a=i.length,o=null,u=0,s=r;s<a&&(o=i[s],!(s>r&&o.getAttribute("x").hasValue()||o.getAttribute("text-anchor").hasValue()));s++)u+=o.measureTextRecursive(t);return-1*("end"===n?u:u/2)}return 0}},{key:"adjustChildCoordinates",value:function(t,e,r,n){var i=r.children[n];if("function"!=typeof i.measureText)return i;t.save(),i.setContext(t,!0);var a=i.getAttribute("x"),o=i.getAttribute("y"),u=i.getAttribute("dx"),s=i.getAttribute("dy"),c=i.getAttribute("text-anchor").getString("start");if(0===n&&"textNode"!==i.type&&(a.hasValue()||a.setValue(e.getAttribute("x").getValue("0")),o.hasValue()||o.setValue(e.getAttribute("y").getValue("0")),u.hasValue()||u.setValue(e.getAttribute("dx").getValue("0")),s.hasValue()||s.setValue(e.getAttribute("dy").getValue("0"))),a.hasValue()){if(i.x=a.getPixels("x")+e.getAnchorDelta(t,r,n),"start"!==c){var l=i.measureTextRecursive(t);i.x+=-1*("end"===c?l:l/2)}u.hasValue()&&(i.x+=u.getPixels("x"))}else{if("start"!==c){var f=i.measureTextRecursive(t);e.x+=-1*("end"===c?f:f/2)}u.hasValue()&&(e.x+=u.getPixels("x")),i.x=e.x}return e.x=i.x+i.measureText(t),o.hasValue()?(i.y=o.getPixels("y"),s.hasValue()&&(i.y+=s.getPixels("y"))):(s.hasValue()&&(e.y+=s.getPixels("y")),i.y=e.y),e.y=i.y,i.clearContext(t),t.restore(),i}},{key:"getChildBoundingBox",value:function(t,e,r,n){var i,a=this.adjustChildCoordinates(t,e,r,n);if("function"!=typeof a.getBoundingBox)return null;var o=a.getBoundingBox(t);return o?(Hi(i=a.children).call(i,(function(r,n){var i=e.getChildBoundingBox(t,e,a,n);o.addBoundingBox(i)})),o):null}},{key:"renderChild",value:function(t,e,r,n){var i,a=this.adjustChildCoordinates(t,e,r,n);a.render(t),Hi(i=a.children).call(i,(function(r,n){e.renderChild(t,e,a,n)}))}},{key:"measureTextRecursive",value:function(t){var e;return Wo(e=this.children).call(e,(function(e,r){return e+r.measureTextRecursive(t)}),this.measureText(t))}},{key:"measureText",value:function(t){var e=this.measureCache;if(~e)return e;var r=this.getText(),n=this.measureTargetText(t,r);return this.measureCache=n,n}},{key:"measureTargetText",value:function(t,e){if(!e.length)return 0;var r=this.parent,n=r.getStyle("font-family").getDefinition();if(n){for(var i,a=this.getFontSize(),o=n.isRTL?sc(i=e.split("")).call(i).join(""):e,u=ae(r.getAttribute("dx").getString()),s=o.length,c=0,l=0;l<s;l++){c+=(this.getGlyph(n,o,l).horizAdvX||n.horizAdvX)*a/n.fontFace.unitsPerEm,void 0===u[l]||isNaN(u[l])||(c+=u[l])}return c}if(!t.measureText)return 10*e.length;t.save(),this.setContext(t,!0);var f=t.measureText(e).width;return this.clearContext(t),t.restore(),f}}]),r}(Pc);function Mc(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Nc=function(t){ms(r,t);var e=Mc(r);function r(t,n,i){var a;return Io(this,r),(a=e.call(this,t,n,(this instanceof r?this.constructor:void 0)===r||i)).type="tspan",a.text=a.children.length>0?"":a.getTextFromNode(),a}return zo(r,[{key:"getText",value:function(){return this.text}}]),r}(Ec);function Rc(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var _c=function(t){ms(r,t);var e=Rc(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="textNode",t}return r}(Nc);U({target:"Array",proto:!0},{fill:function(t){for(var e=Mt(this),r=Q(e.length),n=arguments.length,i=Ue(n>1?arguments[1]:void 0,r),a=n>2?arguments[2]:void 0,o=void 0===a?r:Ue(a,r);o>i;)e[i++]=t;return e}});var Dc=yt("Array").fill,Vc=Array.prototype,Lc=function(t){var e=t.fill;return t===Vc||t instanceof Array&&e===Vc.fill?Dc:e},Ic=function(t,e){return(Ic=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function jc(t,e){function r(){this.constructor=t}Ic(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function zc(t,e){var r=t[0],n=t[1];return[r*Math.cos(e)-n*Math.sin(e),r*Math.sin(e)+n*Math.cos(e)]}function Fc(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var r=0;r<t.length;r++)if("number"!=typeof t[r])throw new Error("assertNumbers arguments["+r+"] is not a number. "+typeof t[r]+" == typeof "+t[r]);return!0}var Bc=Math.PI;function Hc(t,e,r){t.lArcFlag=0===t.lArcFlag?0:1,t.sweepFlag=0===t.sweepFlag?0:1;var n=t.rX,i=t.rY,a=t.x,o=t.y;n=Math.abs(t.rX),i=Math.abs(t.rY);var u=zc([(e-a)/2,(r-o)/2],-t.xRot/180*Bc),s=u[0],c=u[1],l=Math.pow(s,2)/Math.pow(n,2)+Math.pow(c,2)/Math.pow(i,2);1<l&&(n*=Math.sqrt(l),i*=Math.sqrt(l)),t.rX=n,t.rY=i;var f=Math.pow(n,2)*Math.pow(c,2)+Math.pow(i,2)*Math.pow(s,2),h=(t.lArcFlag!==t.sweepFlag?1:-1)*Math.sqrt(Math.max(0,(Math.pow(n,2)*Math.pow(i,2)-f)/f)),p=n*c/i*h,y=-i*s/n*h,v=zc([p,y],t.xRot/180*Bc);t.cX=v[0]+(e+a)/2,t.cY=v[1]+(r+o)/2,t.phi1=Math.atan2((c-y)/i,(s-p)/n),t.phi2=Math.atan2((-c-y)/i,(-s-p)/n),0===t.sweepFlag&&t.phi2>t.phi1&&(t.phi2-=2*Bc),1===t.sweepFlag&&t.phi2<t.phi1&&(t.phi2+=2*Bc),t.phi1*=180/Bc,t.phi2*=180/Bc}function Uc(t,e,r){Fc(t,e,r);var n=t*t+e*e-r*r;if(0>n)return[];if(0===n)return[[t*r/(t*t+e*e),e*r/(t*t+e*e)]];var i=Math.sqrt(n);return[[(t*r+e*i)/(t*t+e*e),(e*r-t*i)/(t*t+e*e)],[(t*r-e*i)/(t*t+e*e),(e*r+t*i)/(t*t+e*e)]]}var Xc,Yc=Math.PI/180;function qc(t,e,r){return(1-r)*t+r*e}function Gc(t,e,r,n){return t+Math.cos(n/180*Bc)*e+Math.sin(n/180*Bc)*r}function Qc(t,e,r,n){var i=e-t,a=r-e,o=3*i+3*(n-r)-6*a,u=6*(a-i),s=3*i;return Math.abs(o)<1e-6?[-s/u]:function(t,e,r){void 0===r&&(r=1e-6);var n=t*t/4-e;if(n<-r)return[];if(n<=r)return[-t/2];var i=Math.sqrt(n);return[-t/2-i,-t/2+i]}(u/o,s/o,1e-6)}function Wc(t,e,r,n,i){var a=1-i;return t*(a*a*a)+e*(3*a*a*i)+r*(3*a*i*i)+n*(i*i*i)}!function(t){function e(){return i((function(t,e,r){return t.relative&&(void 0!==t.x1&&(t.x1+=e),void 0!==t.y1&&(t.y1+=r),void 0!==t.x2&&(t.x2+=e),void 0!==t.y2&&(t.y2+=r),void 0!==t.x&&(t.x+=e),void 0!==t.y&&(t.y+=r),t.relative=!1),t}))}function r(){var t=NaN,e=NaN,r=NaN,n=NaN;return i((function(i,a,o){return i.type&el.SMOOTH_CURVE_TO&&(i.type=el.CURVE_TO,t=isNaN(t)?a:t,e=isNaN(e)?o:e,i.x1=i.relative?a-t:2*a-t,i.y1=i.relative?o-e:2*o-e),i.type&el.CURVE_TO?(t=i.relative?a+i.x2:i.x2,e=i.relative?o+i.y2:i.y2):(t=NaN,e=NaN),i.type&el.SMOOTH_QUAD_TO&&(i.type=el.QUAD_TO,r=isNaN(r)?a:r,n=isNaN(n)?o:n,i.x1=i.relative?a-r:2*a-r,i.y1=i.relative?o-n:2*o-n),i.type&el.QUAD_TO?(r=i.relative?a+i.x1:i.x1,n=i.relative?o+i.y1:i.y1):(r=NaN,n=NaN),i}))}function n(){var t=NaN,e=NaN;return i((function(r,n,i){if(r.type&el.SMOOTH_QUAD_TO&&(r.type=el.QUAD_TO,t=isNaN(t)?n:t,e=isNaN(e)?i:e,r.x1=r.relative?n-t:2*n-t,r.y1=r.relative?i-e:2*i-e),r.type&el.QUAD_TO){t=r.relative?n+r.x1:r.x1,e=r.relative?i+r.y1:r.y1;var a=r.x1,o=r.y1;r.type=el.CURVE_TO,r.x1=((r.relative?0:n)+2*a)/3,r.y1=((r.relative?0:i)+2*o)/3,r.x2=(r.x+2*a)/3,r.y2=(r.y+2*o)/3}else t=NaN,e=NaN;return r}))}function i(t){var e=0,r=0,n=NaN,i=NaN;return function(a){if(isNaN(n)&&!(a.type&el.MOVE_TO))throw new Error("path must start with moveto");var o=t(a,e,r,n,i);return a.type&el.CLOSE_PATH&&(e=n,r=i),void 0!==a.x&&(e=a.relative?e+a.x:a.x),void 0!==a.y&&(r=a.relative?r+a.y:a.y),a.type&el.MOVE_TO&&(n=e,i=r),o}}function a(t,e,r,n,a,o){return Fc(t,e,r,n,a,o),i((function(i,u,s,c){var l=i.x1,f=i.x2,h=i.relative&&!isNaN(c),p=void 0!==i.x?i.x:h?0:u,y=void 0!==i.y?i.y:h?0:s;function v(t){return t*t}i.type&el.HORIZ_LINE_TO&&0!==e&&(i.type=el.LINE_TO,i.y=i.relative?0:s),i.type&el.VERT_LINE_TO&&0!==r&&(i.type=el.LINE_TO,i.x=i.relative?0:u),void 0!==i.x&&(i.x=i.x*t+y*r+(h?0:a)),void 0!==i.y&&(i.y=p*e+i.y*n+(h?0:o)),void 0!==i.x1&&(i.x1=i.x1*t+i.y1*r+(h?0:a)),void 0!==i.y1&&(i.y1=l*e+i.y1*n+(h?0:o)),void 0!==i.x2&&(i.x2=i.x2*t+i.y2*r+(h?0:a)),void 0!==i.y2&&(i.y2=f*e+i.y2*n+(h?0:o));var g=t*n-e*r;if(void 0!==i.xRot&&(1!==t||0!==e||0!==r||1!==n))if(0===g)delete i.rX,delete i.rY,delete i.xRot,delete i.lArcFlag,delete i.sweepFlag,i.type=el.LINE_TO;else{var d=i.xRot*Math.PI/180,m=Math.sin(d),x=Math.cos(d),b=1/v(i.rX),w=1/v(i.rY),S=v(x)*b+v(m)*w,A=2*m*x*(b-w),k=v(m)*b+v(x)*w,T=S*n*n-A*e*n+k*e*e,O=A*(t*n+e*r)-2*(S*r*n+k*t*e),P=S*r*r-A*t*r+k*t*t,C=(Math.atan2(O,T-P)+Math.PI)%Math.PI/2,E=Math.sin(C),M=Math.cos(C);i.rX=Math.abs(g)/Math.sqrt(T*v(M)+O*E*M+P*v(E)),i.rY=Math.abs(g)/Math.sqrt(T*v(E)-O*E*M+P*v(M)),i.xRot=180*C/Math.PI}return void 0!==i.sweepFlag&&0>g&&(i.sweepFlag=+!i.sweepFlag),i}))}t.ROUND=function(t){function e(e){return Math.round(e*t)/t}return void 0===t&&(t=1e13),Fc(t),function(t){return void 0!==t.x1&&(t.x1=e(t.x1)),void 0!==t.y1&&(t.y1=e(t.y1)),void 0!==t.x2&&(t.x2=e(t.x2)),void 0!==t.y2&&(t.y2=e(t.y2)),void 0!==t.x&&(t.x=e(t.x)),void 0!==t.y&&(t.y=e(t.y)),void 0!==t.rX&&(t.rX=e(t.rX)),void 0!==t.rY&&(t.rY=e(t.rY)),t}},t.TO_ABS=e,t.TO_REL=function(){return i((function(t,e,r){return t.relative||(void 0!==t.x1&&(t.x1-=e),void 0!==t.y1&&(t.y1-=r),void 0!==t.x2&&(t.x2-=e),void 0!==t.y2&&(t.y2-=r),void 0!==t.x&&(t.x-=e),void 0!==t.y&&(t.y-=r),t.relative=!0),t}))},t.NORMALIZE_HVZ=function(t,e,r){return void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),i((function(n,i,a,o,u){if(isNaN(o)&&!(n.type&el.MOVE_TO))throw new Error("path must start with moveto");return e&&n.type&el.HORIZ_LINE_TO&&(n.type=el.LINE_TO,n.y=n.relative?0:a),r&&n.type&el.VERT_LINE_TO&&(n.type=el.LINE_TO,n.x=n.relative?0:i),t&&n.type&el.CLOSE_PATH&&(n.type=el.LINE_TO,n.x=n.relative?o-i:o,n.y=n.relative?u-a:u),n.type&el.ARC&&(0===n.rX||0===n.rY)&&(n.type=el.LINE_TO,delete n.rX,delete n.rY,delete n.xRot,delete n.lArcFlag,delete n.sweepFlag),n}))},t.NORMALIZE_ST=r,t.QT_TO_C=n,t.INFO=i,t.SANITIZE=function(t){void 0===t&&(t=0),Fc(t);var e=NaN,r=NaN,n=NaN,a=NaN;return i((function(i,o,u,s,c){var l=Math.abs,f=!1,h=0,p=0;if(i.type&el.SMOOTH_CURVE_TO&&(h=isNaN(e)?0:o-e,p=isNaN(r)?0:u-r),i.type&(el.CURVE_TO|el.SMOOTH_CURVE_TO)?(e=i.relative?o+i.x2:i.x2,r=i.relative?u+i.y2:i.y2):(e=NaN,r=NaN),i.type&el.SMOOTH_QUAD_TO?(n=isNaN(n)?o:2*o-n,a=isNaN(a)?u:2*u-a):i.type&el.QUAD_TO?(n=i.relative?o+i.x1:i.x1,a=i.relative?u+i.y1:i.y2):(n=NaN,a=NaN),i.type&el.LINE_COMMANDS||i.type&el.ARC&&(0===i.rX||0===i.rY||!i.lArcFlag)||i.type&el.CURVE_TO||i.type&el.SMOOTH_CURVE_TO||i.type&el.QUAD_TO||i.type&el.SMOOTH_QUAD_TO){var y=void 0===i.x?0:i.relative?i.x:i.x-o,v=void 0===i.y?0:i.relative?i.y:i.y-u;h=isNaN(n)?void 0===i.x1?h:i.relative?i.x:i.x1-o:n-o,p=isNaN(a)?void 0===i.y1?p:i.relative?i.y:i.y1-u:a-u;var g=void 0===i.x2?0:i.relative?i.x:i.x2-o,d=void 0===i.y2?0:i.relative?i.y:i.y2-u;l(y)<=t&&l(v)<=t&&l(h)<=t&&l(p)<=t&&l(g)<=t&&l(d)<=t&&(f=!0)}return i.type&el.CLOSE_PATH&&l(o-s)<=t&&l(u-c)<=t&&(f=!0),f?[]:i}))},t.MATRIX=a,t.ROTATE=function(t,e,r){void 0===e&&(e=0),void 0===r&&(r=0),Fc(t,e,r);var n=Math.sin(t),i=Math.cos(t);return a(i,n,-n,i,e-e*i+r*n,r-e*n-r*i)},t.TRANSLATE=function(t,e){return void 0===e&&(e=0),Fc(t,e),a(1,0,0,1,t,e)},t.SCALE=function(t,e){return void 0===e&&(e=t),Fc(t,e),a(t,0,0,e,0,0)},t.SKEW_X=function(t){return Fc(t),a(1,0,Math.atan(t),1,0,0)},t.SKEW_Y=function(t){return Fc(t),a(1,Math.atan(t),0,1,0,0)},t.X_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),Fc(t),a(-1,0,0,1,t,0)},t.Y_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),Fc(t),a(1,0,0,-1,0,t)},t.A_TO_C=function(){return i((function(t,e,r){return el.ARC===t.type?function(t,e,r){var n,i,a,o;t.cX||Hc(t,e,r);for(var u=Math.min(t.phi1,t.phi2),s=Math.max(t.phi1,t.phi2)-u,c=Math.ceil(s/90),l=new Array(c),f=e,h=r,p=0;p<c;p++){var y=qc(t.phi1,t.phi2,p/c),v=qc(t.phi1,t.phi2,(p+1)/c),g=v-y,d=4/3*Math.tan(g*Yc/4),m=[Math.cos(y*Yc)-d*Math.sin(y*Yc),Math.sin(y*Yc)+d*Math.cos(y*Yc)],x=m[0],b=m[1],w=[Math.cos(v*Yc),Math.sin(v*Yc)],S=w[0],A=w[1],k=[S+d*Math.sin(v*Yc),A-d*Math.cos(v*Yc)],T=k[0],O=k[1];l[p]={relative:t.relative,type:el.CURVE_TO};var P=function(e,r){var n=zc([e*t.rX,r*t.rY],t.xRot),i=n[0],a=n[1];return[t.cX+i,t.cY+a]};n=P(x,b),l[p].x1=n[0],l[p].y1=n[1],i=P(T,O),l[p].x2=i[0],l[p].y2=i[1],a=P(S,A),l[p].x=a[0],l[p].y=a[1],t.relative&&(l[p].x1-=f,l[p].y1-=h,l[p].x2-=f,l[p].y2-=h,l[p].x-=f,l[p].y-=h),f=(o=[l[p].x,l[p].y])[0],h=o[1]}return l}(t,t.relative?0:e,t.relative?0:r):t}))},t.ANNOTATE_ARCS=function(){return i((function(t,e,r){return t.relative&&(e=0,r=0),el.ARC===t.type&&Hc(t,e,r),t}))},t.CLONE=function(){return function(t){var e={};for(var r in t)e[r]=t[r];return e}},t.CALCULATE_BOUNDS=function(){var t=e(),a=n(),o=r(),u=i((function(e,r,n){var i=o(a(t(function(t){var e={};for(var r in t)e[r]=t[r];return e}(e))));function s(t){t>u.maxX&&(u.maxX=t),t<u.minX&&(u.minX=t)}function c(t){t>u.maxY&&(u.maxY=t),t<u.minY&&(u.minY=t)}if(i.type&el.DRAWING_COMMANDS&&(s(r),c(n)),i.type&el.HORIZ_LINE_TO&&s(i.x),i.type&el.VERT_LINE_TO&&c(i.y),i.type&el.LINE_TO&&(s(i.x),c(i.y)),i.type&el.CURVE_TO){s(i.x),c(i.y);for(var l=0,f=Qc(r,i.x1,i.x2,i.x);l<f.length;l++)0<(P=f[l])&&1>P&&s(Wc(r,i.x1,i.x2,i.x,P));for(var h=0,p=Qc(n,i.y1,i.y2,i.y);h<p.length;h++)0<(P=p[h])&&1>P&&c(Wc(n,i.y1,i.y2,i.y,P))}if(i.type&el.ARC){s(i.x),c(i.y),Hc(i,r,n);for(var y=i.xRot/180*Math.PI,v=Math.cos(y)*i.rX,g=Math.sin(y)*i.rX,d=-Math.sin(y)*i.rY,m=Math.cos(y)*i.rY,x=i.phi1<i.phi2?[i.phi1,i.phi2]:-180>i.phi2?[i.phi2+360,i.phi1+360]:[i.phi2,i.phi1],b=x[0],w=x[1],S=function(t){var e=t[0],r=t[1],n=180*Math.atan2(r,e)/Math.PI;return n<b?n+360:n},A=0,k=Uc(d,-v,0).map(S);A<k.length;A++)(P=k[A])>b&&P<w&&s(Gc(i.cX,v,d,P));for(var T=0,O=Uc(m,-g,0).map(S);T<O.length;T++){var P;(P=O[T])>b&&P<w&&c(Gc(i.cY,g,m,P))}}return e}));return u.minX=1/0,u.maxX=-1/0,u.minY=1/0,u.maxY=-1/0,u}}(Xc||(Xc={}));var $c,Zc=function(){function t(){}return t.prototype.round=function(t){return this.transform(Xc.ROUND(t))},t.prototype.toAbs=function(){return this.transform(Xc.TO_ABS())},t.prototype.toRel=function(){return this.transform(Xc.TO_REL())},t.prototype.normalizeHVZ=function(t,e,r){return this.transform(Xc.NORMALIZE_HVZ(t,e,r))},t.prototype.normalizeST=function(){return this.transform(Xc.NORMALIZE_ST())},t.prototype.qtToC=function(){return this.transform(Xc.QT_TO_C())},t.prototype.aToC=function(){return this.transform(Xc.A_TO_C())},t.prototype.sanitize=function(t){return this.transform(Xc.SANITIZE(t))},t.prototype.translate=function(t,e){return this.transform(Xc.TRANSLATE(t,e))},t.prototype.scale=function(t,e){return this.transform(Xc.SCALE(t,e))},t.prototype.rotate=function(t,e,r){return this.transform(Xc.ROTATE(t,e,r))},t.prototype.matrix=function(t,e,r,n,i,a){return this.transform(Xc.MATRIX(t,e,r,n,i,a))},t.prototype.skewX=function(t){return this.transform(Xc.SKEW_X(t))},t.prototype.skewY=function(t){return this.transform(Xc.SKEW_Y(t))},t.prototype.xSymmetry=function(t){return this.transform(Xc.X_AXIS_SYMMETRY(t))},t.prototype.ySymmetry=function(t){return this.transform(Xc.Y_AXIS_SYMMETRY(t))},t.prototype.annotateArcs=function(){return this.transform(Xc.ANNOTATE_ARCS())},t}(),Kc=function(t){return" "===t||"\t"===t||"\r"===t||"\n"===t},Jc=function(t){return"0".charCodeAt(0)<=t.charCodeAt(0)&&t.charCodeAt(0)<="9".charCodeAt(0)},tl=function(t){function e(){var e=t.call(this)||this;return e.curNumber="",e.curCommandType=-1,e.curCommandRelative=!1,e.canParseCommandOrComma=!0,e.curNumberHasExp=!1,e.curNumberHasExpDigits=!1,e.curNumberHasDecimal=!1,e.curArgs=[],e}return jc(e,t),e.prototype.finish=function(t){if(void 0===t&&(t=[]),this.parse(" ",t),0!==this.curArgs.length||!this.canParseCommandOrComma)throw new SyntaxError("Unterminated command at the path end.");return t},e.prototype.parse=function(t,e){var r=this;void 0===e&&(e=[]);for(var n=function(t){e.push(t),r.curArgs.length=0,r.canParseCommandOrComma=!0},i=0;i<t.length;i++){var a=t[i],o=!(this.curCommandType!==el.ARC||3!==this.curArgs.length&&4!==this.curArgs.length||1!==this.curNumber.length||"0"!==this.curNumber&&"1"!==this.curNumber),u=Jc(a)&&("0"===this.curNumber&&"0"===a||o);if(!Jc(a)||u)if("e"!==a&&"E"!==a)if("-"!==a&&"+"!==a||!this.curNumberHasExp||this.curNumberHasExpDigits)if("."!==a||this.curNumberHasExp||this.curNumberHasDecimal||o){if(this.curNumber&&-1!==this.curCommandType){var s=Number(this.curNumber);if(isNaN(s))throw new SyntaxError("Invalid number ending at "+i);if(this.curCommandType===el.ARC)if(0===this.curArgs.length||1===this.curArgs.length){if(0>s)throw new SyntaxError('Expected positive number, got "'+s+'" at index "'+i+'"')}else if((3===this.curArgs.length||4===this.curArgs.length)&&"0"!==this.curNumber&&"1"!==this.curNumber)throw new SyntaxError('Expected a flag, got "'+this.curNumber+'" at index "'+i+'"');this.curArgs.push(s),this.curArgs.length===rl[this.curCommandType]&&(el.HORIZ_LINE_TO===this.curCommandType?n({type:el.HORIZ_LINE_TO,relative:this.curCommandRelative,x:s}):el.VERT_LINE_TO===this.curCommandType?n({type:el.VERT_LINE_TO,relative:this.curCommandRelative,y:s}):this.curCommandType===el.MOVE_TO||this.curCommandType===el.LINE_TO||this.curCommandType===el.SMOOTH_QUAD_TO?(n({type:this.curCommandType,relative:this.curCommandRelative,x:this.curArgs[0],y:this.curArgs[1]}),el.MOVE_TO===this.curCommandType&&(this.curCommandType=el.LINE_TO)):this.curCommandType===el.CURVE_TO?n({type:el.CURVE_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x2:this.curArgs[2],y2:this.curArgs[3],x:this.curArgs[4],y:this.curArgs[5]}):this.curCommandType===el.SMOOTH_CURVE_TO?n({type:el.SMOOTH_CURVE_TO,relative:this.curCommandRelative,x2:this.curArgs[0],y2:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===el.QUAD_TO?n({type:el.QUAD_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===el.ARC&&n({type:el.ARC,relative:this.curCommandRelative,rX:this.curArgs[0],rY:this.curArgs[1],xRot:this.curArgs[2],lArcFlag:this.curArgs[3],sweepFlag:this.curArgs[4],x:this.curArgs[5],y:this.curArgs[6]})),this.curNumber="",this.curNumberHasExpDigits=!1,this.curNumberHasExp=!1,this.curNumberHasDecimal=!1,this.canParseCommandOrComma=!0}if(!Kc(a))if(","===a&&this.canParseCommandOrComma)this.canParseCommandOrComma=!1;else if("+"!==a&&"-"!==a&&"."!==a)if(u)this.curNumber=a,this.curNumberHasDecimal=!1;else{if(0!==this.curArgs.length)throw new SyntaxError("Unterminated command at index "+i+".");if(!this.canParseCommandOrComma)throw new SyntaxError('Unexpected character "'+a+'" at index '+i+". Command cannot follow comma");if(this.canParseCommandOrComma=!1,"z"!==a&&"Z"!==a)if("h"===a||"H"===a)this.curCommandType=el.HORIZ_LINE_TO,this.curCommandRelative="h"===a;else if("v"===a||"V"===a)this.curCommandType=el.VERT_LINE_TO,this.curCommandRelative="v"===a;else if("m"===a||"M"===a)this.curCommandType=el.MOVE_TO,this.curCommandRelative="m"===a;else if("l"===a||"L"===a)this.curCommandType=el.LINE_TO,this.curCommandRelative="l"===a;else if("c"===a||"C"===a)this.curCommandType=el.CURVE_TO,this.curCommandRelative="c"===a;else if("s"===a||"S"===a)this.curCommandType=el.SMOOTH_CURVE_TO,this.curCommandRelative="s"===a;else if("q"===a||"Q"===a)this.curCommandType=el.QUAD_TO,this.curCommandRelative="q"===a;else if("t"===a||"T"===a)this.curCommandType=el.SMOOTH_QUAD_TO,this.curCommandRelative="t"===a;else{if("a"!==a&&"A"!==a)throw new SyntaxError('Unexpected character "'+a+'" at index '+i+".");this.curCommandType=el.ARC,this.curCommandRelative="a"===a}else e.push({type:el.CLOSE_PATH}),this.canParseCommandOrComma=!0,this.curCommandType=-1}else this.curNumber=a,this.curNumberHasDecimal="."===a}else this.curNumber+=a,this.curNumberHasDecimal=!0;else this.curNumber+=a;else this.curNumber+=a,this.curNumberHasExp=!0;else this.curNumber+=a,this.curNumberHasExpDigits=this.curNumberHasExp}return e},e.prototype.transform=function(t){return Object.create(this,{parse:{value:function(e,r){void 0===r&&(r=[]);for(var n=0,i=Object.getPrototypeOf(this).parse.call(this,e);n<i.length;n++){var a=i[n],o=t(a);Array.isArray(o)?r.push.apply(r,o):r.push(o)}return r}}})},e}(Zc),el=function(t){function e(r){var n=t.call(this)||this;return n.commands="string"==typeof r?e.parse(r):r,n}return jc(e,t),e.prototype.encode=function(){return e.encode(this.commands)},e.prototype.getBounds=function(){var t=Xc.CALCULATE_BOUNDS();return this.transform(t),t},e.prototype.transform=function(t){for(var e=[],r=0,n=this.commands;r<n.length;r++){var i=t(n[r]);Array.isArray(i)?e.push.apply(e,i):e.push(i)}return this.commands=e,this},e.encode=function(t){return function(t){var e="";Array.isArray(t)||(t=[t]);for(var r=0;r<t.length;r++){var n=t[r];if(n.type===el.CLOSE_PATH)e+="z";else if(n.type===el.HORIZ_LINE_TO)e+=(n.relative?"h":"H")+n.x;else if(n.type===el.VERT_LINE_TO)e+=(n.relative?"v":"V")+n.y;else if(n.type===el.MOVE_TO)e+=(n.relative?"m":"M")+n.x+" "+n.y;else if(n.type===el.LINE_TO)e+=(n.relative?"l":"L")+n.x+" "+n.y;else if(n.type===el.CURVE_TO)e+=(n.relative?"c":"C")+n.x1+" "+n.y1+" "+n.x2+" "+n.y2+" "+n.x+" "+n.y;else if(n.type===el.SMOOTH_CURVE_TO)e+=(n.relative?"s":"S")+n.x2+" "+n.y2+" "+n.x+" "+n.y;else if(n.type===el.QUAD_TO)e+=(n.relative?"q":"Q")+n.x1+" "+n.y1+" "+n.x+" "+n.y;else if(n.type===el.SMOOTH_QUAD_TO)e+=(n.relative?"t":"T")+n.x+" "+n.y;else{if(n.type!==el.ARC)throw new Error('Unexpected command type "'+n.type+'" at index '+r+".");e+=(n.relative?"a":"A")+n.rX+" "+n.rY+" "+n.xRot+" "+ +n.lArcFlag+" "+ +n.sweepFlag+" "+n.x+" "+n.y}}return e}(t)},e.parse=function(t){var e=new tl,r=[];return e.parse(t,r),e.finish(r),r},e.CLOSE_PATH=1,e.MOVE_TO=2,e.HORIZ_LINE_TO=4,e.VERT_LINE_TO=8,e.LINE_TO=16,e.CURVE_TO=32,e.SMOOTH_CURVE_TO=64,e.QUAD_TO=128,e.SMOOTH_QUAD_TO=256,e.ARC=512,e.LINE_COMMANDS=e.LINE_TO|e.HORIZ_LINE_TO|e.VERT_LINE_TO,e.DRAWING_COMMANDS=e.HORIZ_LINE_TO|e.VERT_LINE_TO|e.LINE_TO|e.CURVE_TO|e.SMOOTH_CURVE_TO|e.QUAD_TO|e.SMOOTH_QUAD_TO|e.ARC,e}(Zc),rl=(($c={})[el.MOVE_TO]=2,$c[el.LINE_TO]=2,$c[el.HORIZ_LINE_TO]=1,$c[el.VERT_LINE_TO]=1,$c[el.CLOSE_PATH]=0,$c[el.QUAD_TO]=4,$c[el.SMOOTH_QUAD_TO]=2,$c[el.CURVE_TO]=6,$c[el.SMOOTH_CURVE_TO]=4,$c[el.ARC]=7,$c);function nl(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var il=function(t){ms(r,t);var e=nl(r);function r(t){var n;return Io(this,r),(n=e.call(this,t.replace(/[+-.]\s+/g,"-").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g,""))).control=null,n.start=null,n.current=null,n.command=null,n.commands=n.commands,n.i=-1,n.previousCommand=null,n.points=[],n.angles=[],n}return zo(r,[{key:"reset",value:function(){this.i=-1,this.command=null,this.previousCommand=null,this.start=new es(0,0),this.control=new es(0,0),this.current=new es(0,0),this.points=[],this.angles=[]}},{key:"isEnd",value:function(){return this.i>=this.commands.length-1}},{key:"next",value:function(){var t=this.commands[++this.i];return this.previousCommand=this.command,this.command=t,t}},{key:"getPoint",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"x",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y",r=new es(this.command[t],this.command[e]);return this.makeAbsolute(r)}},{key:"getAsControlPoint",value:function(t,e){var r=this.getPoint(t,e);return this.control=r,r}},{key:"getAsCurrentPoint",value:function(t,e){var r=this.getPoint(t,e);return this.current=r,r}},{key:"getReflectedControlPoint",value:function(){var t=this.previousCommand.type;if(t!==el.CURVE_TO&&t!==el.SMOOTH_CURVE_TO&&t!==el.QUAD_TO&&t!==el.SMOOTH_QUAD_TO)return this.current;var e=this.current,r=e.x,n=e.y,i=this.control,a=i.x,o=i.y;return new es(2*r-a,2*n-o)}},{key:"makeAbsolute",value:function(t){if(this.command.relative){var e=this.current,r=e.x,n=e.y;t.x+=r,t.y+=n}return t}},{key:"addMarker",value:function(t,e,r){var n=this.points,i=this.angles;r&&i.length>0&&!i[i.length-1]&&(i[i.length-1]=n[n.length-1].angleTo(r)),this.addMarkerAngle(t,e?e.angleTo(t):null)}},{key:"addMarkerAngle",value:function(t,e){this.points.push(t),this.angles.push(e)}},{key:"getMarkerPoints",value:function(){return this.points}},{key:"getMarkerAngles",value:function(){for(var t=this.angles,e=t.length,r=0;r<e;r++)if(!t[r])for(var n=r+1;n<e;n++)if(t[n]){t[r]=t[n];break}return t}}]),r}(el);function al(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var ol=function(t){ms(r,t);var e=al(r);function r(t,n,i){var a;return Io(this,r),(a=e.call(this,t,n,i)).type="path",a.pathParser=null,a.pathParser=new il(a.getAttribute("d").getString()),a}return zo(r,[{key:"path",value:function(t){var e=this.pathParser,r=new Tc;for(e.reset(),t&&t.beginPath();!e.isEnd();)switch(e.next().type){case il.MOVE_TO:this.pathM(t,r);break;case il.LINE_TO:this.pathL(t,r);break;case il.HORIZ_LINE_TO:this.pathH(t,r);break;case il.VERT_LINE_TO:this.pathV(t,r);break;case il.CURVE_TO:this.pathC(t,r);break;case il.SMOOTH_CURVE_TO:this.pathS(t,r);break;case il.QUAD_TO:this.pathQ(t,r);break;case il.SMOOTH_QUAD_TO:this.pathT(t,r);break;case il.ARC:this.pathA(t,r);break;case il.CLOSE_PATH:this.pathZ(t,r)}return r}},{key:"getBoundingBox",value:function(t){return this.path()}},{key:"getMarkers",value:function(){var t=this.pathParser,e=t.getMarkerPoints(),r=t.getMarkerAngles();return ee(e).call(e,(function(t,e){return[t,r[e]]}))}},{key:"renderChildren",value:function(t){this.path(t),this.document.screen.mouse.checkPath(this,t);var e=this.getStyle("fill-rule");""!==t.fillStyle&&("inherit"!==e.getString("inherit")?Lc(t).call(t,e.getString()):Lc(t).call(t)),""!==t.strokeStyle&&t.stroke();var r=this.getMarkers();if(r){var n=r.length-1,i=this.getStyle("marker-start"),a=this.getStyle("marker-mid"),o=this.getStyle("marker-end");if(i.isUrlDefinition()){var u=i.getDefinition(),s=si(r[0],2),c=s[0],l=s[1];u.render(t,c,l)}if(a.isUrlDefinition())for(var f=a.getDefinition(),h=1;h<n;h++){var p=si(r[h],2),y=p[0],v=p[1];f.render(t,y,v)}if(o.isUrlDefinition()){var g=o.getDefinition(),d=si(r[n],2),m=d[0],x=d[1];g.render(t,m,x)}}}},{key:"pathM",value:function(t,e){var n=this.pathParser,i=r.pathM(n).point,a=i.x,o=i.y;n.addMarker(i),e.addPoint(a,o),t&&t.moveTo(a,o)}},{key:"pathL",value:function(t,e){var n=this.pathParser,i=r.pathL(n),a=i.current,o=i.point,u=o.x,s=o.y;n.addMarker(o,a),e.addPoint(u,s),t&&t.lineTo(u,s)}},{key:"pathH",value:function(t,e){var n=this.pathParser,i=r.pathH(n),a=i.current,o=i.point,u=o.x,s=o.y;n.addMarker(o,a),e.addPoint(u,s),t&&t.lineTo(u,s)}},{key:"pathV",value:function(t,e){var n=this.pathParser,i=r.pathV(n),a=i.current,o=i.point,u=o.x,s=o.y;n.addMarker(o,a),e.addPoint(u,s),t&&t.lineTo(u,s)}},{key:"pathC",value:function(t,e){var n=this.pathParser,i=r.pathC(n),a=i.current,o=i.point,u=i.controlPoint,s=i.currentPoint;n.addMarker(s,u,o),e.addBezierCurve(a.x,a.y,o.x,o.y,u.x,u.y,s.x,s.y),t&&t.bezierCurveTo(o.x,o.y,u.x,u.y,s.x,s.y)}},{key:"pathS",value:function(t,e){var n=this.pathParser,i=r.pathS(n),a=i.current,o=i.point,u=i.controlPoint,s=i.currentPoint;n.addMarker(s,u,o),e.addBezierCurve(a.x,a.y,o.x,o.y,u.x,u.y,s.x,s.y),t&&t.bezierCurveTo(o.x,o.y,u.x,u.y,s.x,s.y)}},{key:"pathQ",value:function(t,e){var n=this.pathParser,i=r.pathQ(n),a=i.current,o=i.controlPoint,u=i.currentPoint;n.addMarker(u,o,o),e.addQuadraticCurve(a.x,a.y,o.x,o.y,u.x,u.y),t&&t.quadraticCurveTo(o.x,o.y,u.x,u.y)}},{key:"pathT",value:function(t,e){var n=this.pathParser,i=r.pathT(n),a=i.current,o=i.controlPoint,u=i.currentPoint;n.addMarker(u,o,o),e.addQuadraticCurve(a.x,a.y,o.x,o.y,u.x,u.y),t&&t.quadraticCurveTo(o.x,o.y,u.x,u.y)}},{key:"pathA",value:function(t,e){var n=this.pathParser,i=r.pathA(n),a=i.currentPoint,o=i.rX,u=i.rY,s=i.sweepFlag,c=i.xAxisRotation,l=i.centp,f=i.a1,h=i.ad,p=1-s?1:-1,y=f+p*(h/2),v=new es(l.x+o*Math.cos(y),l.y+u*Math.sin(y));if(n.addMarkerAngle(v,y-p*Math.PI/2),n.addMarkerAngle(a,y-p*Math.PI),e.addPoint(a.x,a.y),t&&!isNaN(f)&&!isNaN(h)){var g=o>u?o:u,d=o>u?1:o/u,m=o>u?u/o:1;t.translate(l.x,l.y),t.rotate(c),t.scale(d,m),t.arc(0,0,g,f,f+h,Boolean(1-s)),t.scale(1/d,1/m),t.rotate(-c),t.translate(-l.x,-l.y)}}},{key:"pathZ",value:function(t,e){r.pathZ(this.pathParser),t&&e.x1!==e.x2&&e.y1!==e.y2&&t.closePath()}}],[{key:"pathM",value:function(t){var e=t.getAsCurrentPoint();return t.start=t.current,{point:e}}},{key:"pathL",value:function(t){return{current:t.current,point:t.getAsCurrentPoint()}}},{key:"pathH",value:function(t){var e=t.current,r=t.command,n=new es((r.relative?e.x:0)+r.x,e.y);return t.current=n,{current:e,point:n}}},{key:"pathV",value:function(t){var e=t.current,r=t.command,n=new es(e.x,(r.relative?e.y:0)+r.y);return t.current=n,{current:e,point:n}}},{key:"pathC",value:function(t){return{current:t.current,point:t.getPoint("x1","y1"),controlPoint:t.getAsControlPoint("x2","y2"),currentPoint:t.getAsCurrentPoint()}}},{key:"pathS",value:function(t){return{current:t.current,point:t.getReflectedControlPoint(),controlPoint:t.getAsControlPoint("x2","y2"),currentPoint:t.getAsCurrentPoint()}}},{key:"pathQ",value:function(t){return{current:t.current,controlPoint:t.getAsControlPoint("x1","y1"),currentPoint:t.getAsCurrentPoint()}}},{key:"pathT",value:function(t){var e=t.current,r=t.getReflectedControlPoint();return t.control=r,{current:e,controlPoint:r,currentPoint:t.getAsCurrentPoint()}}},{key:"pathA",value:function(t){var e=t.current,r=t.command,n=r.rX,i=r.rY,a=r.xRot,o=r.lArcFlag,u=r.sweepFlag,s=a*(Math.PI/180),c=t.getAsCurrentPoint(),l=new es(Math.cos(s)*(e.x-c.x)/2+Math.sin(s)*(e.y-c.y)/2,-Math.sin(s)*(e.x-c.x)/2+Math.cos(s)*(e.y-c.y)/2),f=Math.pow(l.x,2)/Math.pow(n,2)+Math.pow(l.y,2)/Math.pow(i,2);f>1&&(n*=Math.sqrt(f),i*=Math.sqrt(f));var h=(o===u?-1:1)*Math.sqrt((Math.pow(n,2)*Math.pow(i,2)-Math.pow(n,2)*Math.pow(l.y,2)-Math.pow(i,2)*Math.pow(l.x,2))/(Math.pow(n,2)*Math.pow(l.y,2)+Math.pow(i,2)*Math.pow(l.x,2)));isNaN(h)&&(h=0);var p=new es(h*n*l.y/i,h*-i*l.x/n),y=new es((e.x+c.x)/2+Math.cos(s)*p.x-Math.sin(s)*p.y,(e.y+c.y)/2+Math.sin(s)*p.x+Math.cos(s)*p.y),v=wi([1,0],[(l.x-p.x)/n,(l.y-p.y)/i]),g=[(l.x-p.x)/n,(l.y-p.y)/i],d=[(-l.x-p.x)/n,(-l.y-p.y)/i],m=wi(g,d);return bi(g,d)<=-1&&(m=Math.PI),bi(g,d)>=1&&(m=0),{currentPoint:c,rX:n,rY:i,sweepFlag:u,xAxisRotation:s,centp:y,a1:v,ad:m}}},{key:"pathZ",value:function(t){t.current=t.start}}]),r}(Pc);function ul(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var sl=function(t){ms(r,t);var e=ul(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="svg",t.root=!1,t}return zo(r,[{key:"setContext",value:function(t){var e=this.document,n=e.screen,i=e.window,a=t.canvas;if(n.setDefaults(t),a.style&&void 0!==t.font&&i&&void 0!==i.getComputedStyle){t.font=i.getComputedStyle(a).getPropertyValue("font");var o=new Ju(e,"fontSize",kc.parse(t.font).fontSize);o.hasValue()&&(e.rootEmSize=o.getPixels("y"),e.emSize=e.rootEmSize)}this.getAttribute("x").hasValue()||this.getAttribute("x",!0).setValue(0),this.getAttribute("y").hasValue()||this.getAttribute("y",!0).setValue(0);var u=n.viewPort,s=u.width,c=u.height;this.getStyle("width").hasValue()||this.getStyle("width",!0).setValue("100%"),this.getStyle("height").hasValue()||this.getStyle("height",!0).setValue("100%"),this.getStyle("color").hasValue()||this.getStyle("color",!0).setValue("black");var l=this.getAttribute("refX"),f=this.getAttribute("refY"),h=this.getAttribute("viewBox"),p=h.hasValue()?ae(h.getString()):null,y=!this.root&&"visible"!==this.getStyle("overflow").getValue("hidden"),v=0,g=0,d=0,m=0;p&&(v=p[0],g=p[1]),this.root||(s=this.getStyle("width").getPixels("x"),c=this.getStyle("height").getPixels("y"),"marker"===this.type&&(d=v,m=g,v=0,g=0)),n.viewPort.setCurrent(s,c),this.node&&this.getStyle("transform",!1,!0).hasValue()&&!this.getStyle("transform-origin",!1,!0).hasValue()&&this.getStyle("transform-origin",!0,!0).setValue("50% 50%"),bc(Ts(r.prototype),"setContext",this).call(this,t),t.translate(this.getAttribute("x").getPixels("x"),this.getAttribute("y").getPixels("y")),p&&(s=p[2],c=p[3]),e.setViewBox({ctx:t,aspectRatio:this.getAttribute("preserveAspectRatio").getString(),width:n.viewPort.width,desiredWidth:s,height:n.viewPort.height,desiredHeight:c,minX:v,minY:g,refX:l.getValue(),refY:f.getValue(),clip:y,clipX:d,clipY:m}),p&&(n.viewPort.removeCurrent(),n.viewPort.setCurrent(s,c))}},{key:"clearContext",value:function(t){bc(Ts(r.prototype),"clearContext",this).call(this,t),this.document.screen.viewPort.removeCurrent()}},{key:"resize",value:function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.getAttribute("width",!0),a=this.getAttribute("height",!0),o=this.getAttribute("viewBox"),u=this.getAttribute("style"),s=i.getNumber(0),c=a.getNumber(0);if(n)if("string"==typeof n)this.getAttribute("preserveAspectRatio",!0).setValue(n);else{var l=this.getAttribute("preserveAspectRatio");l.hasValue()&&l.setValue(l.getString().replace(/^\s*(\S.*\S)\s*$/,"$1"))}(i.setValue(t),a.setValue(r),o.hasValue())||o.setValue(Ho(e="0 0 ".concat(s||t," ")).call(e,c||r));if(u.hasValue()){var f=this.getStyle("width"),h=this.getStyle("height");f.hasValue()&&f.setValue("".concat(t,"px")),h.hasValue()&&h.setValue("".concat(r,"px"))}}}]),r}(Pc);function cl(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var ll=function(t){ms(r,t);var e=cl(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="rect",t}return zo(r,[{key:"path",value:function(t){var e=this.getAttribute("x").getPixels("x"),r=this.getAttribute("y").getPixels("y"),n=this.getStyle("width",!1,!0).getPixels("x"),i=this.getStyle("height",!1,!0).getPixels("y"),a=this.getAttribute("rx"),o=this.getAttribute("ry"),u=a.getPixels("x"),s=o.getPixels("y");if(a.hasValue()&&!o.hasValue()&&(s=u),o.hasValue()&&!a.hasValue()&&(u=s),u=Math.min(u,n/2),s=Math.min(s,i/2),t){var c=(Math.sqrt(2)-1)/3*4;t.beginPath(),i>0&&n>0&&(t.moveTo(e+u,r),t.lineTo(e+n-u,r),t.bezierCurveTo(e+n-u+c*u,r,e+n,r+s-c*s,e+n,r+s),t.lineTo(e+n,r+i-s),t.bezierCurveTo(e+n,r+i-s+c*s,e+n-u+c*u,r+i,e+n-u,r+i),t.lineTo(e+u,r+i),t.bezierCurveTo(e+u-c*u,r+i,e,r+i-s+c*s,e,r+i-s),t.lineTo(e,r+s),t.bezierCurveTo(e,r+s-c*s,e+u-c*u,r,e+u,r),t.closePath())}return new Tc(e,r,e+n,r+i)}},{key:"getMarkers",value:function(){return null}}]),r}(ol);function fl(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var hl=function(t){ms(r,t);var e=fl(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="circle",t}return zo(r,[{key:"path",value:function(t){var e=this.getAttribute("cx").getPixels("x"),r=this.getAttribute("cy").getPixels("y"),n=this.getAttribute("r").getPixels();return t&&n>0&&(t.beginPath(),t.arc(e,r,n,0,2*Math.PI,!1),t.closePath()),new Tc(e-n,r-n,e+n,r+n)}},{key:"getMarkers",value:function(){return null}}]),r}(ol);function pl(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var yl=function(t){ms(r,t);var e=pl(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="ellipse",t}return zo(r,[{key:"path",value:function(t){var e=(Math.sqrt(2)-1)/3*4,r=this.getAttribute("rx").getPixels("x"),n=this.getAttribute("ry").getPixels("y"),i=this.getAttribute("cx").getPixels("x"),a=this.getAttribute("cy").getPixels("y");return t&&r>0&&n>0&&(t.beginPath(),t.moveTo(i+r,a),t.bezierCurveTo(i+r,a+e*n,i+e*r,a+n,i,a+n),t.bezierCurveTo(i-e*r,a+n,i-r,a+e*n,i-r,a),t.bezierCurveTo(i-r,a-e*n,i-e*r,a-n,i,a-n),t.bezierCurveTo(i+e*r,a-n,i+r,a-e*n,i+r,a),t.closePath()),new Tc(i-r,a-n,i+r,a+n)}},{key:"getMarkers",value:function(){return null}}]),r}(ol);function vl(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var gl=function(t){ms(r,t);var e=vl(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="line",t}return zo(r,[{key:"getPoints",value:function(){return[new es(this.getAttribute("x1").getPixels("x"),this.getAttribute("y1").getPixels("y")),new es(this.getAttribute("x2").getPixels("x"),this.getAttribute("y2").getPixels("y"))]}},{key:"path",value:function(t){var e=this.getPoints(),r=si(e,2),n=r[0],i=n.x,a=n.y,o=r[1],u=o.x,s=o.y;return t&&(t.beginPath(),t.moveTo(i,a),t.lineTo(u,s)),new Tc(i,a,u,s)}},{key:"getMarkers",value:function(){var t=this.getPoints(),e=si(t,2),r=e[0],n=e[1],i=r.angleTo(n);return[[r,i],[n,i]]}}]),r}(ol);function dl(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var ml=function(t){ms(r,t);var e=dl(r);function r(t,n,i){var a;return Io(this,r),(a=e.call(this,t,n,i)).type="polyline",a.points=[],a.points=es.parsePath(a.getAttribute("points").getString()),a}return zo(r,[{key:"path",value:function(t){var e=this.points,r=si(e,1)[0],n=r.x,i=r.y,a=new Tc(n,i);return t&&(t.beginPath(),t.moveTo(n,i)),Hi(e).call(e,(function(e){var r=e.x,n=e.y;a.addPoint(r,n),t&&t.lineTo(r,n)})),a}},{key:"getMarkers",value:function(){var t=this.points,e=t.length-1,r=[];return Hi(t).call(t,(function(n,i){i!==e&&r.push([n,n.angleTo(t[i+1])])})),r.length>0&&r.push([t[t.length-1],r[r.length-1][1]]),r}}]),r}(ol);function xl(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var bl=function(t){ms(r,t);var e=xl(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="polygon",t}return zo(r,[{key:"path",value:function(t){var e=bc(Ts(r.prototype),"path",this).call(this,t),n=si(this.points,1)[0],i=n.x,a=n.y;return t&&(t.lineTo(i,a),t.closePath()),e}}]),r}(ml),wl=O.f;U({target:"Reflect",stat:!0},{deleteProperty:function(t,e){var r=wl(I(t),e);return!(r&&!r.configurable)&&delete t[e]}});var Sl=D.Reflect.deleteProperty;function Al(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var kl=function(t){ms(r,t);var e=Al(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="pattern",t}return zo(r,[{key:"createPattern",value:function(t,e,r){var n=this.getStyle("width").getPixels("x",!0),i=this.getStyle("height").getPixels("y",!0),a=new sl(this.document,null);a.attributes.viewBox=new Ju(this.document,"viewBox",this.getAttribute("viewBox").getValue()),a.attributes.width=new Ju(this.document,"width","".concat(n,"px")),a.attributes.height=new Ju(this.document,"height","".concat(i,"px")),a.attributes.transform=new Ju(this.document,"transform",this.getAttribute("patternTransform").getValue()),a.children=this.children;var o=this.document.createCanvas(n,i),u=o.getContext("2d"),s=this.getAttribute("x"),c=this.getAttribute("y");s.hasValue()&&c.hasValue()&&u.translate(s.getPixels("x",!0),c.getPixels("y",!0)),r.hasValue()?this.styles["fill-opacity"]=r:Sl(this.styles,"fill-opacity");for(var l=-1;l<=1;l++)for(var f=-1;f<=1;f++)u.save(),a.attributes.x=new Ju(this.document,"x",l*o.width),a.attributes.y=new Ju(this.document,"y",f*o.height),a.render(u),u.restore();return t.createPattern(o,"repeat")}}]),r}(ec);function Tl(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Ol=function(t){ms(r,t);var e=Tl(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="marker",t}return zo(r,[{key:"render",value:function(t,e,r){if(e){var n=e.x,i=e.y,a=this.getAttribute("orient").getValue("auto"),o=this.getAttribute("markerUnits").getValue("strokeWidth");t.translate(n,i),"auto"===a&&t.rotate(r),"strokeWidth"===o&&t.scale(t.lineWidth,t.lineWidth),t.save();var u=new sl(this.document,null);u.type=this.type,u.attributes.viewBox=new Ju(this.document,"viewBox",this.getAttribute("viewBox").getValue()),u.attributes.refX=new Ju(this.document,"refX",this.getAttribute("refX").getValue()),u.attributes.refY=new Ju(this.document,"refY",this.getAttribute("refY").getValue()),u.attributes.width=new Ju(this.document,"width",this.getAttribute("markerWidth").getValue()),u.attributes.height=new Ju(this.document,"height",this.getAttribute("markerHeight").getValue()),u.attributes.overflow=new Ju(this.document,"overflow",this.getAttribute("overflow").getValue()),u.attributes.fill=new Ju(this.document,"fill",this.getAttribute("fill").getColor("black")),u.attributes.stroke=new Ju(this.document,"stroke",this.getAttribute("stroke").getValue("none")),u.children=this.children,u.render(t),t.restore(),"strokeWidth"===o&&t.scale(1/t.lineWidth,1/t.lineWidth),"auto"===a&&t.rotate(-r),t.translate(-n,-i)}}}]),r}(ec);function Pl(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Cl=function(t){ms(r,t);var e=Pl(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="defs",t}return zo(r,[{key:"render",value:function(){}}]),r}(ec);function El(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Ml=function(t){ms(r,t);var e=El(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="g",t}return zo(r,[{key:"getBoundingBox",value:function(t){var e,r=new Tc;return Hi(e=this.children).call(e,(function(e){r.addBoundingBox(e.getBoundingBox(t))})),r}}]),r}(Pc);function Nl(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Rl=function(t){ms(r,t);var e=Nl(r);function r(t,n,i){var a;Io(this,r),(a=e.call(this,t,n,i)).attributesToInherit=["gradientUnits"],a.stops=[];var o=ws(a),u=o.stops,s=o.children;return Hi(s).call(s,(function(t){"stop"===t.type&&u.push(t)})),a}return zo(r,[{key:"getGradientUnits",value:function(){return this.getAttribute("gradientUnits").getString("objectBoundingBox")}},{key:"createGradient",value:function(t,e,r){var n=this,i=this;this.getHrefAttribute().hasValue()&&(i=this.getHrefAttribute().getDefinition(),this.inheritStopContainer(i));var a=i.stops,o=this.getGradient(t,e);if(!o)return this.addParentOpacity(r,a[a.length-1].color);if(Hi(a).call(a,(function(t){o.addColorStop(t.offset,n.addParentOpacity(r,t.color))})),this.getAttribute("gradientTransform").hasValue()){var u=this.document,s=u.screen,c=s.MAX_VIRTUAL_PIXELS,l=s.viewPort,f=si(l.viewPorts,1)[0],h=new ll(u,null);h.attributes.x=new Ju(u,"x",-c/3),h.attributes.y=new Ju(u,"y",-c/3),h.attributes.width=new Ju(u,"width",c),h.attributes.height=new Ju(u,"height",c);var p=new Ml(u,null);p.attributes.transform=new Ju(u,"transform",this.getAttribute("gradientTransform").getValue()),p.children=[h];var y=new sl(u,null);y.attributes.x=new Ju(u,"x",0),y.attributes.y=new Ju(u,"y",0),y.attributes.width=new Ju(u,"width",f.width),y.attributes.height=new Ju(u,"height",f.height),y.children=[p];var v=u.createCanvas(f.width,f.height),g=v.getContext("2d");return g.fillStyle=o,y.render(g),g.createPattern(v,"no-repeat")}return o}},{key:"inheritStopContainer",value:function(t){var e,r=this;Hi(e=this.attributesToInherit).call(e,(function(e){!r.getAttribute(e).hasValue()&&t.getAttribute(e).hasValue()&&r.getAttribute(e,!0).setValue(t.getAttribute(e).getValue())}))}},{key:"addParentOpacity",value:function(t,e){return t.hasValue()?new Ju(this.document,"color",e).addOpacity(t).getColor():e}}]),r}(ec);function _l(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Dl=function(t){ms(r,t);var e=_l(r);function r(t,n,i){var a;return Io(this,r),(a=e.call(this,t,n,i)).type="linearGradient",a.attributesToInherit.push("x1","y1","x2","y2"),a}return zo(r,[{key:"getGradient",value:function(t,e){var r="objectBoundingBox"===this.getGradientUnits(),n=r?e.getBoundingBox(t):null;if(r&&!n)return null;this.getAttribute("x1").hasValue()||this.getAttribute("y1").hasValue()||this.getAttribute("x2").hasValue()||this.getAttribute("y2").hasValue()||(this.getAttribute("x1",!0).setValue(0),this.getAttribute("y1",!0).setValue(0),this.getAttribute("x2",!0).setValue(1),this.getAttribute("y2",!0).setValue(0));var i=r?n.x+n.width*this.getAttribute("x1").getNumber():this.getAttribute("x1").getPixels("x"),a=r?n.y+n.height*this.getAttribute("y1").getNumber():this.getAttribute("y1").getPixels("y"),o=r?n.x+n.width*this.getAttribute("x2").getNumber():this.getAttribute("x2").getPixels("x"),u=r?n.y+n.height*this.getAttribute("y2").getNumber():this.getAttribute("y2").getPixels("y");return i===o&&a===u?null:t.createLinearGradient(i,a,o,u)}}]),r}(Rl);function Vl(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Ll=function(t){ms(r,t);var e=Vl(r);function r(t,n,i){var a;return Io(this,r),(a=e.call(this,t,n,i)).type="radialGradient",a.attributesToInherit.push("cx","cy","r","fx","fy","fr"),a}return zo(r,[{key:"getGradient",value:function(t,e){var r="objectBoundingBox"===this.getGradientUnits(),n=e.getBoundingBox(t);if(r&&!n)return null;this.getAttribute("cx").hasValue()||this.getAttribute("cx",!0).setValue("50%"),this.getAttribute("cy").hasValue()||this.getAttribute("cy",!0).setValue("50%"),this.getAttribute("r").hasValue()||this.getAttribute("r",!0).setValue("50%");var i=r?n.x+n.width*this.getAttribute("cx").getNumber():this.getAttribute("cx").getPixels("x"),a=r?n.y+n.height*this.getAttribute("cy").getNumber():this.getAttribute("cy").getPixels("y"),o=i,u=a;this.getAttribute("fx").hasValue()&&(o=r?n.x+n.width*this.getAttribute("fx").getNumber():this.getAttribute("fx").getPixels("x")),this.getAttribute("fy").hasValue()&&(u=r?n.y+n.height*this.getAttribute("fy").getNumber():this.getAttribute("fy").getPixels("y"));var s=r?(n.width+n.height)/2*this.getAttribute("r").getNumber():this.getAttribute("r").getPixels(),c=this.getAttribute("fr").getPixels();return t.createRadialGradient(o,u,c,i,a,s)}}]),r}(Rl);function Il(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var jl=function(t){ms(r,t);var e=Il(r);function r(t,n,i){var a;Io(this,r),(a=e.call(this,t,n,i)).type="stop";var o=Math.max(0,Math.min(1,a.getAttribute("offset").getNumber())),u=a.getStyle("stop-opacity"),s=a.getStyle("stop-color",!0);return""===s.getString()&&s.setValue("#000"),u.hasValue()&&(s=s.addOpacity(u)),a.offset=o,a.color=s.getColor(),a}return r}(ec),zl=yt("Array").values,Fl=Array.prototype,Bl={DOMTokenList:!0,NodeList:!0},Hl=function(t){var e=t.values;return t===Fl||t instanceof Array&&e===Fl.values||Bl.hasOwnProperty(ur(t))?zl:e};function Ul(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Xl=function(t){ms(r,t);var e=Ul(r);function r(t,n,i){var a;return Io(this,r),(a=e.call(this,t,n,i)).type="animate",a.duration=0,a.initialValue=null,a.initialUnits="",a.removed=!1,a.frozen=!1,t.screen.animations.push(ws(a)),a.begin=a.getAttribute("begin").getMilliseconds(),a.maxDuration=a.begin+a.getAttribute("dur").getMilliseconds(),a.from=a.getAttribute("from"),a.to=a.getAttribute("to"),a.values=a.getAttribute("values"),Hl(a).hasValue()&&Hl(a).setValue(Hl(a).getString().split(";")),a}return zo(r,[{key:"getProperty",value:function(){var t=this.getAttribute("attributeType").getString(),e=this.getAttribute("attributeName").getString();return"CSS"===t?this.parent.getStyle(e,!0):this.parent.getAttribute(e,!0)}},{key:"calcValue",value:function(){var t,e=this.initialUnits,r=this.getProgress(),n=r.progress,i=r.from,a=r.to,o=i.getNumber()+(a.getNumber()-i.getNumber())*n;return"%"===e&&(o*=100),Ho(t="".concat(o)).call(t,e)}},{key:"update",value:function(t){var e=this.parent,r=this.getProperty();if(this.initialValue||(this.initialValue=r.getString(),this.initialUnits=r.getUnits()),this.duration>this.maxDuration){var n=this.getAttribute("fill").getString("remove");if("indefinite"===this.getAttribute("repeatCount").getString()||"indefinite"===this.getAttribute("repeatDur").getString())this.duration=0;else if("freeze"!==n||this.frozen){if("remove"===n&&!this.removed)return this.removed=!0,r.setValue(e.animationFrozen?e.animationFrozenValue:this.initialValue),!0}else this.frozen=!0,e.animationFrozen=!0,e.animationFrozenValue=r.getString();return!1}this.duration+=t;var i=!1;if(this.begin<this.duration){var a=this.calcValue(),o=this.getAttribute("type");if(o.hasValue()){var u,s=o.getString();a=Ho(u="".concat(s,"(")).call(u,a,")")}r.setValue(a),i=!0}return i}},{key:"getProgress",value:function(){var t=this.document,e=Hl(this),r={progress:(this.duration-this.begin)/(this.maxDuration-this.begin)};if(e.hasValue()){var n=r.progress*(e.getValue().length-1),i=Math.floor(n),a=Math.ceil(n);r.from=new Ju(t,"from",Et(e.getValue()[i])),r.to=new Ju(t,"to",Et(e.getValue()[a])),r.progress=(n-i)/(a-i)}else r.from=this.from,r.to=this.to;return r}}]),r}(ec),Yl=At.trim,ql=i.parseInt,Gl=/^[+-]?0[Xx]/,Ql=8!==ql(mt+"08")||22!==ql(mt+"0x16")?function(t,e){var r=Yl(String(t));return ql(r,e>>>0||(Gl.test(r)?16:10))}:ql;U({global:!0,forced:parseInt!=Ql},{parseInt:Ql});var Wl=D.parseInt;function $l(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Zl=function(t){ms(r,t);var e=$l(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="animateColor",t}return zo(r,[{key:"calcValue",value:function(){var t=this.getProgress(),e=t.progress,r=t.from,n=t.to,i=new Ku(r.getColor()),a=new Ku(n.getColor());if(i.ok&&a.ok){var o,u,s=i.r+(a.r-i.r)*e,c=i.g+(a.g-i.g)*e,l=i.b+(a.b-i.b)*e;return Ho(o=Ho(u="rgb(".concat(Wl(s,10),", ")).call(u,Wl(c,10),", ")).call(o,Wl(l,10),")")}return this.getAttribute("from").getColor()}}]),r}(Xl);function Kl(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Jl=function(t){ms(r,t);var e=Kl(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="animateTransform",t}return zo(r,[{key:"calcValue",value:function(){var t=this.getProgress(),e=t.progress,r=t.from,n=t.to,i=ae(r.getString()),a=ae(n.getString());return ee(i).call(i,(function(t,r){return t+(a[r]-t)*e})).join(" ")}}]),r}(Xl),tf=le,ef=Ir,rf=Vn,nf=ni;function af(t,e){var r;if(void 0===rf||null==ef(t)){if(tf(t)||(r=function(t,e){var r;if(!t)return;if("string"==typeof t)return of(t,e);var n=nf(r=Object.prototype.toString.call(t)).call(r,8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Us(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return of(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){r=jr(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){u=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(u)throw a}}}}function of(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function uf(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var sf=function(t){ms(r,t);var e=uf(r);function r(t,n,i){var a;Io(this,r),(a=e.call(this,t,n,i)).type="font",a.glyphs={},a.horizAdvX=a.getAttribute("horiz-adv-x").getNumber();var o,u=t.definitions,s=af(ws(a).children);try{for(s.s();!(o=s.n()).done;){var c=o.value;switch(c.type){case"font-face":a.fontFace=c;var l=c.getStyle("font-family");l.hasValue()&&(u[l.getString()]=ws(a));break;case"missing-glyph":a.missingGlyph=c;break;case"glyph":var f=c;f.arabicForm?(a.isRTL=!0,a.isArabic=!0,void 0===a.glyphs[f.unicode]&&(a.glyphs[f.unicode]={}),a.glyphs[f.unicode][f.arabicForm]=f):a.glyphs[f.unicode]=f}}}catch(t){s.e(t)}finally{s.f()}return a}return zo(r,[{key:"render",value:function(){}}]),r}(ec);function cf(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var lf=function(t){ms(r,t);var e=cf(r);function r(t,n,i){var a;return Io(this,r),(a=e.call(this,t,n,i)).type="font-face",a.ascent=a.getAttribute("ascent").getNumber(),a.descent=a.getAttribute("descent").getNumber(),a.unitsPerEm=a.getAttribute("units-per-em").getNumber(),a}return r}(ec);function ff(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var hf=function(t){ms(r,t);var e=ff(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="missing-glyph",t.horizAdvX=0,t}return r}(ol);function pf(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var yf=function(t){ms(r,t);var e=pf(r);function r(t,n,i){var a;return Io(this,r),(a=e.call(this,t,n,i)).type="glyph",a.horizAdvX=a.getAttribute("horiz-adv-x").getNumber(),a.unicode=a.getAttribute("unicode").getString(),a.arabicForm=a.getAttribute("arabic-form").getString(),a}return r}(ol);function vf(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var gf=function(t){ms(r,t);var e=vf(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="tref",t}return zo(r,[{key:"getText",value:function(){var t=this.getHrefAttribute().getDefinition();if(t){var e=t.children[0];if(e)return e.getText()}return""}}]),r}(Ec);function df(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var mf=function(t){ms(r,t);var e=df(r);function r(t,n,i){var a,o;Io(this,r),(o=e.call(this,t,n,i)).type="a";var u=n.childNodes,s=u[0],c=u.length>0&&ru(a=Us(u)).call(a,(function(t){return 3===t.nodeType}));return o.hasText=c,o.text=c?o.getTextFromNode(s):"",o}return zo(r,[{key:"getText",value:function(){return this.text}},{key:"renderChildren",value:function(t){if(this.hasText){bc(Ts(r.prototype),"renderChildren",this).call(this,t);var e=this.document,n=this.x,i=this.y,a=e.screen.mouse,o=new Ju(e,"fontSize",kc.parse(e.ctx.font).fontSize);a.isWorking()&&a.checkBoundingBox(this,new Tc(n,i-o.getPixels("y"),n+this.measureText(t),i))}else if(this.children.length>0){var u=new Ml(this.document,null);u.children=this.children,u.parent=this,u.render(t)}}},{key:"onClick",value:function(){var t=this.document.window;t&&t.open(this.getHrefAttribute().getString())}},{key:"onMouseMove",value:function(){this.document.ctx.canvas.style.cursor="pointer"}}]),r}(Ec),xf=!a((function(){return Object.isExtensible(Object.preventExtensions({}))})),bf=r((function(t){var e=z.f,r=tt("meta"),n=0,i=Object.isExtensible||function(){return!0},a=function(t){e(t,r,{value:{objectID:"O"+ ++n,weakData:{}}})},o=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!d(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!b(t,r)){if(!i(t))return"F";if(!e)return"E";a(t)}return t[r].objectID},getWeakData:function(t,e){if(!b(t,r)){if(!i(t))return!0;if(!e)return!1;a(t)}return t[r].weakData},onFreeze:function(t){return xf&&o.REQUIRED&&i(t)&&!b(t,r)&&a(t),t}};Ae[r]=!0})),wf=z.f,Sf=Lt.forEach,Af=_e.set,kf=_e.getterFor,Tf=z.f,Of=bf.fastKey,Pf=_e.set,Cf=_e.getterFor,Ef=(function(t,e,r){var n,u=-1!==t.indexOf("Map"),s=-1!==t.indexOf("Weak"),c=u?"set":"add",l=i[t],f=l&&l.prototype,h={};if(o&&"function"==typeof l&&(s||f.forEach&&!a((function(){(new l).entries().next()})))){n=e((function(e,r){Af(la(e,n,t),{type:t,collection:new l}),null!=r&&fa(r,e[c],e,u)}));var p=kf(t);Sf(["add","clear","delete","forEach","get","has","set","keys","values","entries"],(function(t){var e="add"==t||"set"==t;!(t in f)||s&&"clear"==t||F(n.prototype,t,(function(r,n){var i=p(this).collection;if(!e&&s&&!d(r))return"get"==t&&void 0;var a=i[t](0===r?0:r,n);return e?this:a}))})),s||wf(n.prototype,"size",{configurable:!0,get:function(){return p(this).collection.size}})}else n=r.getConstructor(e,t,u,c),bf.REQUIRED=!0;fr(n,t,!1,!0),h[t]=n,U({global:!0,forced:!0},h),s||r.setStrong(n,t,u)}("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),{getConstructor:function(t,e,r,n){var i=t((function(t,a){la(t,i,e),Pf(t,{type:e,index:rr(null),first:void 0,last:void 0,size:0}),o||(t.size=0),null!=a&&fa(a,t[n],t,r)})),a=Cf(e),u=function(t,e,r){var n,i,u=a(t),c=s(t,e);return c?c.value=r:(u.last=c={index:i=Of(e,!0),key:e,value:r,previous:n=u.last,next:void 0,removed:!1},u.first||(u.first=c),n&&(n.next=c),o?u.size++:t.size++,"F"!==i&&(u.index[i]=c)),t},s=function(t,e){var r,n=a(t),i=Of(e);if("F"!==i)return n.index[i];for(r=n.first;r;r=r.next)if(r.key==e)return r};return ua(i.prototype,{clear:function(){for(var t=a(this),e=t.index,r=t.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete e[r.index],r=r.next;t.first=t.last=void 0,o?t.size=0:this.size=0},delete:function(t){var e=this,r=a(e),n=s(e,t);if(n){var i=n.next,u=n.previous;delete r.index[n.index],n.removed=!0,u&&(u.next=i),i&&(i.previous=u),r.first==n&&(r.first=i),r.last==n&&(r.last=u),o?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=a(this),n=L(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!s(this,t)}}),ua(i.prototype,r?{get:function(t){var e=s(this,t);return e&&e.value},set:function(t,e){return u(this,0===t?0:t,e)}}:{add:function(t){return u(this,t=0===t?0:t,t)}}),o&&Tf(i.prototype,"size",{get:function(){return a(this).size}}),i},setStrong:function(t,e,r){var n=e+" Iterator",i=Cf(e),a=Cf(n);Ar(t,e,(function(t,e){Pf(this,{type:n,target:t,state:i(t),kind:e,last:void 0})}),(function(){for(var t=a(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),ca(e)}}),D.Map);function Mf(t,e){var r;if(void 0===rf||null==ef(t)){if(tf(t)||(r=function(t,e){var r;if(!t)return;if("string"==typeof t)return Nf(t,e);var n=nf(r=Object.prototype.toString.call(t)).call(r,8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Us(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nf(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){r=jr(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){u=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(u)throw a}}}}function Nf(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Rf(t,e){var r=ia(t);if(Ji){var n=Ji(t);e&&(n=Ki(n).call(n,(function(e){return qi(t,e).enumerable}))),r.push.apply(r,n)}return r}function _f(t){for(var e=1;e<arguments.length;e++){var r,n=null!=arguments[e]?arguments[e]:{};if(e%2)Hi(r=Rf(Object(n),!0)).call(r,(function(e){Lo(t,e,n[e])}));else if(_i)Ni(t,_i(n));else{var i;Hi(i=Rf(Object(n))).call(i,(function(e){Mi(t,e,qi(n,e))}))}}return t}function Df(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Vf=function(t){ms(r,t);var e=Df(r);function r(t,n,i){var a;Io(this,r),(a=e.call(this,t,n,i)).type="textPath",a.textWidth=0,a.textHeight=0,a.pathLength=-1,a.glyphInfo=null,a.letterSpacingCache=[],a.measuresCache=new Ef([["",0]]);var o=a.getHrefAttribute().getDefinition();return a.text=a.getTextFromNode(),a.dataArray=a.parsePathData(o),a}return zo(r,[{key:"getText",value:function(){return this.text}},{key:"path",value:function(t){var e=this.dataArray;t&&t.beginPath(),Hi(e).call(e,(function(e){var r=e.type,n=e.points;switch(r){case il.LINE_TO:t&&t.lineTo(n[0],n[1]);break;case il.MOVE_TO:t&&t.moveTo(n[0],n[1]);break;case il.CURVE_TO:t&&t.bezierCurveTo(n[0],n[1],n[2],n[3],n[4],n[5]);break;case il.QUAD_TO:t&&t.quadraticCurveTo(n[0],n[1],n[2],n[3]);break;case il.ARC:var i=si(n,8),a=i[0],o=i[1],u=i[2],s=i[3],c=i[4],l=i[5],f=i[6],h=i[7],p=u>s?u:s,y=u>s?1:u/s,v=u>s?s/u:1;t&&(t.translate(a,o),t.rotate(f),t.scale(y,v),t.arc(0,0,p,c,c+l,Boolean(1-h)),t.scale(1/y,1/v),t.rotate(-f),t.translate(-a,-o));break;case il.CLOSE_PATH:t&&t.closePath()}}))}},{key:"renderChildren",value:function(t){this.setTextData(t),t.save();var e=this.parent.getStyle("text-decoration").getString(),r=this.getFontSize(),n=this.glyphInfo,i=t.fillStyle;"underline"===e&&t.beginPath(),Hi(n).call(n,(function(n,i){var a=n.p0,o=n.p1,u=n.rotation,s=n.text;t.save(),t.translate(a.x,a.y),t.rotate(u),t.fillStyle&&t.fillText(s,0,0),t.strokeStyle&&t.strokeText(s,0,0),t.restore(),"underline"===e&&(0===i&&t.moveTo(a.x,a.y+r/8),t.lineTo(o.x,o.y+r/5))})),"underline"===e&&(t.lineWidth=r/20,t.strokeStyle=i,t.stroke(),t.closePath()),t.restore()}},{key:"getLetterSpacingAt",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.letterSpacingCache[t]||0}},{key:"findSegmentToFitChar",value:function(t,e,r,n,i,a,o,u,s){var c=a,l=this.measureText(t,u);" "===u&&"justify"===e&&r<n&&(l+=(n-r)/i),s>-1&&(c+=this.getLetterSpacingAt(s));var f=this.textHeight/20,h=this.getEquidistantPointOnPath(c,f,0),p=this.getEquidistantPointOnPath(c+l,f,0),y={p0:h,p1:p},v=h&&p?Math.atan2(p.y-h.y,p.x-h.x):0;if(o){var g=Math.cos(Math.PI/2+v)*o,d=Math.cos(-v)*o;y.p0=_f(_f({},h),{},{x:h.x+g,y:h.y+d}),y.p1=_f(_f({},p),{},{x:p.x+g,y:p.y+d})}return{offset:c+=l,segment:y,rotation:v}}},{key:"measureText",value:function(t,e){var r=this.measuresCache,n=e||this.getText();if(r.has(n))return r.get(n);var i=this.measureTargetText(t,n);return r.set(n,i),i}},{key:"setTextData",value:function(t){var e,r=this;if(!this.glyphInfo){var n=this.getText(),i=n.split(""),a=n.split(" ").length-1,o=ee(e=this.parent.getAttribute("dx").split()).call(e,(function(t){return t.getPixels("x")})),u=this.parent.getAttribute("dy").getPixels("y"),s=this.parent.getStyle("text-anchor").getString("start"),c=this.getStyle("letter-spacing"),l=this.parent.getStyle("letter-spacing"),f=0;c.hasValue()&&"inherit"!==c.getValue()?c.hasValue()&&"initial"!==c.getValue()&&"unset"!==c.getValue()&&(f=c.getPixels()):f=l.getPixels();var h=[],p=n.length;this.letterSpacingCache=h;for(var y=0;y<p;y++)h.push(void 0!==o[y]?o[y]:f);var v=Wo(h).call(h,(function(t,e,r){return 0===r?0:t+e||0}),0),g=this.measureText(t),d=Math.max(g+v,0);this.textWidth=g,this.textHeight=this.getFontSize(),this.glyphInfo=[];var m=this.getPathLength(),x=this.getStyle("startOffset").getNumber(0)*m,b=0;"middle"!==s&&"center"!==s||(b=-d/2),"end"!==s&&"right"!==s||(b=-d),b+=x,Hi(i).call(i,(function(e,n){var o=r.findSegmentToFitChar(t,s,d,m,a,b,u,e,n),c=o.offset,l=o.segment,f=o.rotation;b=c,l.p0&&l.p1&&r.glyphInfo.push({text:i[n],p0:l.p0,p1:l.p1,rotation:f})}))}}},{key:"parsePathData",value:function(t){if(this.pathLength=-1,!t)return[];var e=[],r=t.pathParser;for(r.reset();!r.isEnd();){var n=r.current,i=n?n.x:0,a=n?n.y:0,o=r.next(),u=o.type,s=[];switch(o.type){case il.MOVE_TO:this.pathM(r,s);break;case il.LINE_TO:u=this.pathL(r,s);break;case il.HORIZ_LINE_TO:u=this.pathH(r,s);break;case il.VERT_LINE_TO:u=this.pathV(r,s);break;case il.CURVE_TO:this.pathC(r,s);break;case il.SMOOTH_CURVE_TO:u=this.pathS(r,s);break;case il.QUAD_TO:this.pathQ(r,s);break;case il.SMOOTH_QUAD_TO:u=this.pathT(r,s);break;case il.ARC:s=this.pathA(r);break;case il.CLOSE_PATH:ol.pathZ(r)}o.type!==il.CLOSE_PATH?e.push({type:u,points:s,start:{x:i,y:a},pathLength:this.calcLength(i,a,u,s)}):e.push({type:il.CLOSE_PATH,points:[],pathLength:0})}return e}},{key:"pathM",value:function(t,e){var r=ol.pathM(t).point,n=r.x,i=r.y;e.push(n,i)}},{key:"pathL",value:function(t,e){var r=ol.pathL(t).point,n=r.x,i=r.y;return e.push(n,i),il.LINE_TO}},{key:"pathH",value:function(t,e){var r=ol.pathH(t).point,n=r.x,i=r.y;return e.push(n,i),il.LINE_TO}},{key:"pathV",value:function(t,e){var r=ol.pathV(t).point,n=r.x,i=r.y;return e.push(n,i),il.LINE_TO}},{key:"pathC",value:function(t,e){var r=ol.pathC(t),n=r.point,i=r.controlPoint,a=r.currentPoint;e.push(n.x,n.y,i.x,i.y,a.x,a.y)}},{key:"pathS",value:function(t,e){var r=ol.pathS(t),n=r.point,i=r.controlPoint,a=r.currentPoint;return e.push(n.x,n.y,i.x,i.y,a.x,a.y),il.CURVE_TO}},{key:"pathQ",value:function(t,e){var r=ol.pathQ(t),n=r.controlPoint,i=r.currentPoint;e.push(n.x,n.y,i.x,i.y)}},{key:"pathT",value:function(t,e){var r=ol.pathT(t),n=r.controlPoint,i=r.currentPoint;return e.push(n.x,n.y,i.x,i.y),il.QUAD_TO}},{key:"pathA",value:function(t){var e=ol.pathA(t),r=e.rX,n=e.rY,i=e.sweepFlag,a=e.xAxisRotation,o=e.centp,u=e.a1,s=e.ad;return 0===i&&s>0&&(s-=2*Math.PI),1===i&&s<0&&(s+=2*Math.PI),[o.x,o.y,r,n,u,s,a,i]}},{key:"calcLength",value:function(t,e,r,n){var i=0,a=null,o=null,u=0;switch(r){case il.LINE_TO:return this.getLineLength(t,e,n[0],n[1]);case il.CURVE_TO:for(i=0,a=this.getPointOnCubicBezier(0,t,e,n[0],n[1],n[2],n[3],n[4],n[5]),u=.01;u<=1;u+=.01)o=this.getPointOnCubicBezier(u,t,e,n[0],n[1],n[2],n[3],n[4],n[5]),i+=this.getLineLength(a.x,a.y,o.x,o.y),a=o;return i;case il.QUAD_TO:for(i=0,a=this.getPointOnQuadraticBezier(0,t,e,n[0],n[1],n[2],n[3]),u=.01;u<=1;u+=.01)o=this.getPointOnQuadraticBezier(u,t,e,n[0],n[1],n[2],n[3]),i+=this.getLineLength(a.x,a.y,o.x,o.y),a=o;return i;case il.ARC:i=0;var s=n[4],c=n[5],l=n[4]+c,f=Math.PI/180;if(Math.abs(s-l)<f&&(f=Math.abs(s-l)),a=this.getPointOnEllipticalArc(n[0],n[1],n[2],n[3],s,0),c<0)for(u=s-f;u>l;u-=f)o=this.getPointOnEllipticalArc(n[0],n[1],n[2],n[3],u,0),i+=this.getLineLength(a.x,a.y,o.x,o.y),a=o;else for(u=s+f;u<l;u+=f)o=this.getPointOnEllipticalArc(n[0],n[1],n[2],n[3],u,0),i+=this.getLineLength(a.x,a.y,o.x,o.y),a=o;return o=this.getPointOnEllipticalArc(n[0],n[1],n[2],n[3],l,0),i+=this.getLineLength(a.x,a.y,o.x,o.y)}return 0}},{key:"getPointOnLine",value:function(t,e,r,n,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:r,u=(i-r)/(n-e+mi),s=Math.sqrt(t*t/(1+u*u));n<e&&(s*=-1);var c=u*s,l=null;if(n===e)l={x:a,y:o+c};else if((o-r)/(a-e+mi)===u)l={x:a+s,y:o+c};else{var f=0,h=0,p=this.getLineLength(e,r,n,i);if(p<mi)return null;var y=(a-e)*(n-e)+(o-r)*(i-r);f=e+(y/=p*p)*(n-e),h=r+y*(i-r);var v=this.getLineLength(a,o,f,h),g=Math.sqrt(t*t-v*v);s=Math.sqrt(g*g/(1+u*u)),n<e&&(s*=-1),l={x:f+s,y:h+(c=u*s)}}return l}},{key:"getPointOnPath",value:function(t){var e=this.getPathLength(),r=0,n=null;if(t<-5e-5||t-5e-5>e)return null;var i,a=Mf(this.dataArray);try{for(a.s();!(i=a.n()).done;){var o=i.value;if(!o||!(o.pathLength<5e-5||r+o.pathLength+5e-5<t)){var u=t-r,s=0;switch(o.type){case il.LINE_TO:n=this.getPointOnLine(u,o.start.x,o.start.y,o.points[0],o.points[1],o.start.x,o.start.y);break;case il.ARC:var c=o.points[4],l=o.points[5],f=o.points[4]+l;if(s=c+u/o.pathLength*l,l<0&&s<f||l>=0&&s>f)break;n=this.getPointOnEllipticalArc(o.points[0],o.points[1],o.points[2],o.points[3],s,o.points[6]);break;case il.CURVE_TO:(s=u/o.pathLength)>1&&(s=1),n=this.getPointOnCubicBezier(s,o.start.x,o.start.y,o.points[0],o.points[1],o.points[2],o.points[3],o.points[4],o.points[5]);break;case il.QUAD_TO:(s=u/o.pathLength)>1&&(s=1),n=this.getPointOnQuadraticBezier(s,o.start.x,o.start.y,o.points[0],o.points[1],o.points[2],o.points[3])}if(n)return n;break}r+=o.pathLength}}catch(t){a.e(t)}finally{a.f()}return null}},{key:"getLineLength",value:function(t,e,r,n){return Math.sqrt((r-t)*(r-t)+(n-e)*(n-e))}},{key:"getPathLength",value:function(){var t;-1===this.pathLength&&(this.pathLength=Wo(t=this.dataArray).call(t,(function(t,e){return e.pathLength>0?t+e.pathLength:t}),0));return this.pathLength}},{key:"getPointOnCubicBezier",value:function(t,e,r,n,i,a,o,u,s){return{x:u*Si(t)+a*Ai(t)+n*ki(t)+e*Ti(t),y:s*Si(t)+o*Ai(t)+i*ki(t)+r*Ti(t)}}},{key:"getPointOnQuadraticBezier",value:function(t,e,r,n,i,a,o){return{x:a*Oi(t)+n*Pi(t)+e*Ci(t),y:o*Oi(t)+i*Pi(t)+r*Ci(t)}}},{key:"getPointOnEllipticalArc",value:function(t,e,r,n,i,a){var o=Math.cos(a),u=Math.sin(a),s=r*Math.cos(i),c=n*Math.sin(i);return{x:t+(s*o-c*u),y:e+(s*u+c*o)}}},{key:"buildEquidistantCache",value:function(t,e){var r=this.getPathLength(),n=e||.25,i=t||r/100;if(!this.equidistantCache||this.equidistantCache.step!==i||this.equidistantCache.precision!==n){this.equidistantCache={step:i,precision:n,points:[]};for(var a=0,o=0;o<=r;o+=n){var u=this.getPointOnPath(o),s=this.getPointOnPath(o+n);u&&s&&((a+=this.getLineLength(u.x,u.y,s.x,s.y))>=i&&(this.equidistantCache.points.push({x:u.x,y:u.y,distance:o}),a-=i))}}}},{key:"getEquidistantPointOnPath",value:function(t,e,r){if(this.buildEquidistantCache(e,r),t<0||t-this.getPathLength()>5e-5)return null;var n=Math.round(t/this.getPathLength()*(this.equidistantCache.points.length-1));return this.equidistantCache.points[n]||null}}]),r}(Ec);function Lf(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var If=function(t){ms(i,t);var e,r,n=Lf(i);function i(t,e,r){var a;Io(this,i),(a=n.call(this,t,e,r)).type="image",a.loaded=!1;var o=a.getHrefAttribute().getString();if(!o)return Ss(a);var u=/\.svg$/.test(o);return t.images.push(ws(a)),u?a.loadSvg(o):a.loadImage(o),a.isSvg=u,a}return zo(i,[{key:"loadImage",value:(r=Do(aa.mark((function t(e){var r;return aa.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.document.createImage(e);case 3:r=t.sent,this.image=r,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error('Error while loading image "'.concat(e,'":'),t.t0);case 10:this.loaded=!0;case 11:case"end":return t.stop()}}),t,this,[[0,7]])}))),function(t){return r.apply(this,arguments)})},{key:"loadSvg",value:(e=Do(aa.mark((function t(e){var r,n;return aa.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.document.fetch(e);case 3:return r=t.sent,t.next=6,r.text();case 6:n=t.sent,this.image=n,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error('Error while loading image "'.concat(e,'":'),t.t0);case 13:this.loaded=!0;case 14:case"end":return t.stop()}}),t,this,[[0,10]])}))),function(t){return e.apply(this,arguments)})},{key:"renderChildren",value:function(t){var e=this.document,r=this.image,n=this.loaded,i=this.getAttribute("x").getPixels("x"),a=this.getAttribute("y").getPixels("y"),o=this.getStyle("width").getPixels("x"),u=this.getStyle("height").getPixels("y");if(n&&r&&o&&u){if(t.save(),this.isSvg)e.canvg.forkString(t,this.image,{ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0,ignoreClear:!0,offsetX:i,offsetY:a,scaleWidth:o,scaleHeight:u}).render();else{var s=this.image;t.translate(i,a),e.setViewBox({ctx:t,aspectRatio:this.getAttribute("preserveAspectRatio").getString(),width:o,desiredWidth:s.width,height:u,desiredHeight:s.height}),this.loaded&&(void 0===s.complete||s.complete)&&t.drawImage(s,0,0)}t.restore()}}},{key:"getBoundingBox",value:function(){var t=this.getAttribute("x").getPixels("x"),e=this.getAttribute("y").getPixels("y"),r=this.getStyle("width").getPixels("x"),n=this.getStyle("height").getPixels("y");return new Tc(t,e,t+r,e+n)}}]),i}(Pc);function jf(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var zf=function(t){ms(r,t);var e=jf(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="symbol",t}return zo(r,[{key:"render",value:function(t){}}]),r}(Pc),Ff=function(){function t(e){Io(this,t),this.document=e,this.loaded=!1,e.fonts.push(this)}var e;return zo(t,[{key:"load",value:(e=Do(aa.mark((function t(e,r){var n,i,a,o;return aa.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i=this.document,t.next=4,i.canvg.parser.load(r);case 4:a=t.sent,o=a.getElementsByTagName("font"),Hi(n=Us(o)).call(n,(function(t){var r=i.createElement(t);i.definitions[e]=r})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error('Error while loading font "'.concat(r,'":'),t.t0);case 12:this.loaded=!0;case 13:case"end":return t.stop()}}),t,this,[[0,9]])}))),function(t,r){return e.apply(this,arguments)})}]),t}();function Bf(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Hf=function(t){ms(r,t);var e=Bf(r);function r(t,n,i){var a,o;Io(this,r),(o=e.call(this,t,n,i)).type="style";var u=re(ee(a=Us(n.childNodes)).call(a,(function(t){return t.data})).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,"").replace(/@import.*;/g,"")).split("}");return Hi(u).call(u,(function(e){var r=Zu(e).call(e);if(r){var n=r.split("{"),i=n[0].split(","),a=n[1].split(";");Hi(i).call(i,(function(e){var r=Zu(e).call(e);if(r){var n=t.styles[r]||{};if(Hi(a).call(a,(function(e){var r,i,a=gc(e).call(e,":"),o=Zu(r=e.substr(0,a)).call(r),u=Zu(i=e.substr(a+1,e.length-a)).call(i);o&&u&&(n[o]=new Ju(t,o,u))})),t.styles[r]=n,t.stylesSpecificity[r]=di(r),"@font-face"===r){var i=n["font-family"].getString().replace(/"|'/g,""),o=n.src.getString().split(",");Hi(o).call(o,(function(e){if(gc(e).call(e,'format("svg")')>0){var r=se(e);r&&new Ff(t).load(i,r)}}))}}}))}})),o}return r}(ec);function Uf(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}Hf.parseExternalUrl=se;var Xf=function(t){ms(r,t);var e=Uf(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="use",t}return zo(r,[{key:"setContext",value:function(t){bc(Ts(r.prototype),"setContext",this).call(this,t);var e=this.getAttribute("x"),n=this.getAttribute("y");e.hasValue()&&t.translate(e.getPixels("x"),0),n.hasValue()&&t.translate(0,n.getPixels("y"))}},{key:"path",value:function(t){var e=this.element;e&&e.path(t)}},{key:"renderChildren",value:function(t){var e=this.document,r=this.element;if(r){var n=r;if("symbol"===r.type&&((n=new sl(e,null)).attributes.viewBox=new Ju(e,"viewBox",r.getAttribute("viewBox").getString()),n.attributes.preserveAspectRatio=new Ju(e,"preserveAspectRatio",r.getAttribute("preserveAspectRatio").getString()),n.attributes.overflow=new Ju(e,"overflow",r.getAttribute("overflow").getString()),n.children=r.children,r.styles.opacity=new Ju(e,"opacity",this.calculateOpacity())),"svg"===n.type){var i=this.getStyle("width",!1,!0),a=this.getStyle("height",!1,!0);i.hasValue()&&(n.attributes.width=new Ju(e,"width",i.getString())),a.hasValue()&&(n.attributes.height=new Ju(e,"height",a.getString()))}var o=n.parent;n.parent=this,n.render(t),n.parent=o}}},{key:"getBoundingBox",value:function(t){var e=this.element;return e?e.getBoundingBox(t):null}},{key:"elementTransform",value:function(){var t=this.document,e=this.element;return tc.fromElement(t,e)}},{key:"element",get:function(){return this._element||(this._element=this.getHrefAttribute().getDefinition()),this._element}}]),r}(Pc);function Yf(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}function qf(t,e,r,n,i,a){return t[r*n*4+4*e+a]}function Gf(t,e,r,n,i,a,o){t[r*n*4+4*e+a]=o}function Qf(t,e,r){return t[e]*r}function Wf(t,e,r,n){return e+Math.cos(t)*r+Math.sin(t)*n}var $f=function(t){ms(r,t);var e=Yf(r);function r(t,n,i){var a;Io(this,r),(a=e.call(this,t,n,i)).type="feColorMatrix";var o=ae(a.getAttribute("values").getString());switch(a.getAttribute("type").getString("matrix")){case"saturate":var u=o[0];o=[.213+.787*u,.715-.715*u,.072-.072*u,0,0,.213-.213*u,.715+.285*u,.072-.072*u,0,0,.213-.213*u,.715-.715*u,.072+.928*u,0,0,0,0,0,1,0,0,0,0,0,1];break;case"hueRotate":var s=o[0]*Math.PI/180;o=[Wf(s,.213,.787,-.213),Wf(s,.715,-.715,-.715),Wf(s,.072,-.072,.928),0,0,Wf(s,.213,-.213,.143),Wf(s,.715,.285,.14),Wf(s,.072,-.072,-.283),0,0,Wf(s,.213,-.213,-.787),Wf(s,.715,-.715,.715),Wf(s,.072,.928,.072),0,0,0,0,0,1,0,0,0,0,0,1];break;case"luminanceToAlpha":o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.2125,.7154,.0721,0,0,0,0,0,0,1]}return a.matrix=o,a.includeOpacity=a.getAttribute("includeOpacity").hasValue(),a}return zo(r,[{key:"apply",value:function(t,e,r,n,i){for(var a=this.includeOpacity,o=this.matrix,u=t.getImageData(0,0,n,i),s=0;s<i;s++)for(var c=0;c<n;c++){var l=qf(u.data,c,s,n,0,0),f=qf(u.data,c,s,n,0,1),h=qf(u.data,c,s,n,0,2),p=qf(u.data,c,s,n,0,3),y=Qf(o,0,l)+Qf(o,1,f)+Qf(o,2,h)+Qf(o,3,p)+Qf(o,4,1),v=Qf(o,5,l)+Qf(o,6,f)+Qf(o,7,h)+Qf(o,8,p)+Qf(o,9,1),g=Qf(o,10,l)+Qf(o,11,f)+Qf(o,12,h)+Qf(o,13,p)+Qf(o,14,1),d=Qf(o,15,l)+Qf(o,16,f)+Qf(o,17,h)+Qf(o,18,p)+Qf(o,19,1);a&&(y=v=g=0,d*=p/255),Gf(u.data,c,s,n,0,0,y),Gf(u.data,c,s,n,0,1,v),Gf(u.data,c,s,n,0,2,g),Gf(u.data,c,s,n,0,3,d)}t.clearRect(0,0,n,i),t.putImageData(u,0,0)}}]),r}(ec);function Zf(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Kf=function(t){ms(r,t);var e=Zf(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="mask",t}return zo(r,[{key:"apply",value:function(t,e){var n=this.document,i=this.getAttribute("x").getPixels("x"),a=this.getAttribute("y").getPixels("y"),o=this.getStyle("width").getPixels("x"),u=this.getStyle("height").getPixels("y");if(!o&&!u){var s,c=new Tc;Hi(s=this.children).call(s,(function(e){c.addBoundingBox(e.getBoundingBox(t))})),i=Math.floor(c.x1),a=Math.floor(c.y1),o=Math.floor(c.width),u=Math.floor(c.height)}var l=this.removeStyles(e,r.ignoreStyles),f=n.createCanvas(i+o,a+u),h=f.getContext("2d");n.screen.setDefaults(h),this.renderChildren(h),new $f(n,{nodeType:1,childNodes:[],attributes:[{nodeName:"type",value:"luminanceToAlpha"},{nodeName:"includeOpacity",value:"true"}]}).apply(h,0,0,i+o,a+u);var p=n.createCanvas(i+o,a+u),y=p.getContext("2d");n.screen.setDefaults(y),e.render(y),y.globalCompositeOperation="destination-in",y.fillStyle=h.createPattern(f,"no-repeat"),y.fillRect(0,0,i+o,a+u),t.fillStyle=y.createPattern(p,"no-repeat"),t.fillRect(0,0,i+o,a+u),this.restoreStyles(e,l)}},{key:"render",value:function(t){}}]),r}(ec);Kf.ignoreStyles=["mask","transform","clip-path"];var Jf=jt("Reflect","apply"),th=Function.apply,eh=!a((function(){Jf((function(){}))}));U({target:"Reflect",stat:!0,forced:eh},{apply:function(t,e,r){return V(t),I(r),Jf?Jf(t,e,r):th.call(t,e,r)}});var rh=D.Reflect.apply;U({target:"Reflect",stat:!0,sham:!De},{getPrototypeOf:function(t){return Ie(I(t))}});var nh=D.Reflect.getPrototypeOf;function ih(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var ah=function(){},oh=function(t){ms(r,t);var e=ih(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="clipPath",t}return zo(r,[{key:"apply",value:function(t){var e,r=this.document,n=nh(t),i=t.beginPath,a=t.closePath;n&&(n.beginPath=ah,n.closePath=ah),rh(i,t,[]),Hi(e=this.children).call(e,(function(e){if(void 0!==e.path){var i=void 0!==e.elementTransform?e.elementTransform():null;i||(i=tc.fromElement(r,e)),i&&i.apply(t),e.path(t),n&&(n.closePath=a),i&&i.unapply(t)}})),rh(a,t,[]),t.clip(),n&&(n.beginPath=i,n.closePath=a)}},{key:"render",value:function(t){}}]),r}(ec);function uh(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var sh=function(t){ms(r,t);var e=uh(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="filter",t}return zo(r,[{key:"apply",value:function(t,e){var n=this.document,i=this.children,a=e.getBoundingBox(t);if(a){var o=0,u=0;Hi(i).call(i,(function(t){var e=t.extraFilterDistance||0;o=Math.max(o,e),u=Math.max(u,e)}));var s=Math.floor(a.width),c=Math.floor(a.height),l=s+2*o,f=c+2*u;if(!(l<1||f<1)){var h=Math.floor(a.x),p=Math.floor(a.y),y=this.removeStyles(e,r.ignoreStyles),v=n.createCanvas(l,f),g=v.getContext("2d");n.screen.setDefaults(g),g.translate(-h+o,-p+u),e.render(g),Hi(i).call(i,(function(t){"function"==typeof t.apply&&t.apply(g,0,0,l,f)})),t.drawImage(v,0,0,l,f,h-o,p-u,l,f),this.restoreStyles(e,y)}}}},{key:"render",value:function(t){}}]),r}(ec);function ch(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}sh.ignoreStyles=["filter","transform","clip-path"];var lh=function(t){ms(r,t);var e=ch(r);function r(t,n,i){var a;return Io(this,r),(a=e.call(this,t,n,i)).type="feDropShadow",a.addStylesFromStyleDefinition(),a}return zo(r,[{key:"apply",value:function(t,e,r,n,i){}}]),r}(ec);function fh(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var hh=function(t){ms(r,t);var e=fh(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="feMorphology",t}return zo(r,[{key:"apply",value:function(t,e,r,n,i){}}]),r}(ec);function ph(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var yh=function(t){ms(r,t);var e=ph(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="feComposite",t}return zo(r,[{key:"apply",value:function(t,e,r,n,i){}}]),r}(ec);function vh(t){return(vh="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var gh=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],dh=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function mh(t,e,r,n,i,a){if(!(isNaN(a)||a<1)){a|=0;var o=function(t,e,r,n,i){if("string"==typeof t&&(t=document.getElementById(t)),!t||"object"!==vh(t)||!("getContext"in t))throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");var a=t.getContext("2d");try{return a.getImageData(e,r,n,i)}catch(t){throw new Error("unable to access image data: "+t)}}(t,e,r,n,i);o=function(t,e,r,n,i,a){for(var o,u=t.data,s=2*a+1,c=n-1,l=i-1,f=a+1,h=f*(f+1)/2,p=new xh,y=p,v=1;v<s;v++)y=y.next=new xh,v===f&&(o=y);y.next=p;for(var g=null,d=null,m=0,x=0,b=gh[a],w=dh[a],S=0;S<i;S++){y=p;for(var A=u[x],k=u[x+1],T=u[x+2],O=u[x+3],P=0;P<f;P++)y.r=A,y.g=k,y.b=T,y.a=O,y=y.next;for(var C=0,E=0,M=0,N=0,R=f*A,_=f*k,D=f*T,V=f*O,L=h*A,I=h*k,j=h*T,z=h*O,F=1;F<f;F++){var B=x+((c<F?c:F)<<2),H=u[B],U=u[B+1],X=u[B+2],Y=u[B+3],q=f-F;L+=(y.r=H)*q,I+=(y.g=U)*q,j+=(y.b=X)*q,z+=(y.a=Y)*q,C+=H,E+=U,M+=X,N+=Y,y=y.next}g=p,d=o;for(var G=0;G<n;G++){var Q=z*b>>w;if(u[x+3]=Q,0!==Q){var W=255/Q;u[x]=(L*b>>w)*W,u[x+1]=(I*b>>w)*W,u[x+2]=(j*b>>w)*W}else u[x]=u[x+1]=u[x+2]=0;L-=R,I-=_,j-=D,z-=V,R-=g.r,_-=g.g,D-=g.b,V-=g.a;var $=G+a+1;$=m+($<c?$:c)<<2,L+=C+=g.r=u[$],I+=E+=g.g=u[$+1],j+=M+=g.b=u[$+2],z+=N+=g.a=u[$+3],g=g.next;var Z=d,K=Z.r,J=Z.g,tt=Z.b,et=Z.a;R+=K,_+=J,D+=tt,V+=et,C-=K,E-=J,M-=tt,N-=et,d=d.next,x+=4}m+=n}for(var rt=0;rt<n;rt++){var nt=u[x=rt<<2],it=u[x+1],at=u[x+2],ot=u[x+3],ut=f*nt,st=f*it,ct=f*at,lt=f*ot,ft=h*nt,ht=h*it,pt=h*at,yt=h*ot;y=p;for(var vt=0;vt<f;vt++)y.r=nt,y.g=it,y.b=at,y.a=ot,y=y.next;for(var gt=n,dt=0,mt=0,xt=0,bt=0,wt=1;wt<=a;wt++){x=gt+rt<<2;var St=f-wt;ft+=(y.r=nt=u[x])*St,ht+=(y.g=it=u[x+1])*St,pt+=(y.b=at=u[x+2])*St,yt+=(y.a=ot=u[x+3])*St,bt+=nt,dt+=it,mt+=at,xt+=ot,y=y.next,wt<l&&(gt+=n)}x=rt,g=p,d=o;for(var At=0;At<i;At++){var kt=x<<2;u[kt+3]=ot=yt*b>>w,ot>0?(ot=255/ot,u[kt]=(ft*b>>w)*ot,u[kt+1]=(ht*b>>w)*ot,u[kt+2]=(pt*b>>w)*ot):u[kt]=u[kt+1]=u[kt+2]=0,ft-=ut,ht-=st,pt-=ct,yt-=lt,ut-=g.r,st-=g.g,ct-=g.b,lt-=g.a,kt=rt+((kt=At+f)<l?kt:l)*n<<2,ft+=bt+=g.r=u[kt],ht+=dt+=g.g=u[kt+1],pt+=mt+=g.b=u[kt+2],yt+=xt+=g.a=u[kt+3],g=g.next,ut+=nt=d.r,st+=it=d.g,ct+=at=d.b,lt+=ot=d.a,bt-=nt,dt-=it,mt-=at,xt-=ot,d=d.next,x+=n}}return t}(o,0,0,n,i,a),t.getContext("2d").putImageData(o,e,r)}}var xh=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.r=0,this.g=0,this.b=0,this.a=0,this.next=null};function bh(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var wh=function(t){ms(r,t);var e=bh(r);function r(t,n,i){var a;return Io(this,r),(a=e.call(this,t,n,i)).type="feGaussianBlur",a.blurRadius=Math.floor(a.getAttribute("stdDeviation").getNumber()),a.extraFilterDistance=a.blurRadius,a}return zo(r,[{key:"apply",value:function(t,e,r,n,i){var a=this.document,o=this.blurRadius,u=a.window?a.window.document.body:null,s=t.canvas;s.id=a.getUniqueId(),u&&(s.style.display="none",u.appendChild(s)),mh(s,e,r,n,i,o),u&&u.removeChild(s)}}]),r}(ec);function Sh(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Ah=function(t){ms(r,t);var e=Sh(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="title",t}return r}(ec);function kh(t){var e=function(){if("undefined"==typeof Reflect||!ps)return!1;if(ps.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ps(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Ts(t);if(e){var i=Ts(this).constructor;r=ps(n,arguments,i)}else r=n.apply(this,arguments);return Ss(this,r)}}var Th=function(t){ms(r,t);var e=kh(r);function r(){var t;return Io(this,r),(t=e.apply(this,arguments)).type="desc",t}return r}(ec),Oh={svg:sl,rect:ll,circle:hl,ellipse:yl,line:gl,polyline:ml,polygon:bl,path:ol,pattern:kl,marker:Ol,defs:Cl,linearGradient:Dl,radialGradient:Ll,stop:jl,animate:Xl,animateColor:Zl,animateTransform:Jl,font:sf,"font-face":lf,"missing-glyph":hf,glyph:yf,text:Ec,tspan:Nc,tref:gf,a:mf,textPath:Vf,image:If,g:Ml,symbol:zf,style:Hf,use:Xf,mask:Kf,clipPath:oh,filter:sh,feDropShadow:lh,feMorphology:hh,feComposite:yh,feColorMatrix:$f,feGaussianBlur:wh,title:Ah,desc:Th};function Ph(t,e){var r=ia(t);if(Ji){var n=Ji(t);e&&(n=Ki(n).call(n,(function(e){return qi(t,e).enumerable}))),r.push.apply(r,n)}return r}function Ch(){return(Ch=Do(aa.mark((function t(e){var r,n,i=arguments;return aa.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>1&&void 0!==i[1]&&i[1],n=document.createElement("img"),r&&(n.crossOrigin="Anonymous"),t.abrupt("return",new nu((function(t,r){n.onload=function(){t(n)},n.onerror=function(){r()},n.src=e})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Eh=function(){function t(e){var r,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.rootEmSize,o=void 0===a?12:a,u=i.emSize,s=void 0===u?12:u,c=i.createCanvas,l=void 0===c?t.createCanvas:c,f=i.createImage,h=void 0===f?t.createImage:f,p=i.anonymousCrossOrigin;Io(this,t),this.canvg=e,this.definitions={},this.styles={},this.stylesSpecificity={},this.images=[],this.fonts=[],this.emSizeStack=[],this.uniqueId=0,this.screen=e.screen,this.rootEmSize=o,this.emSize=s,this.createCanvas=l,this.createImage=this.bindCreateImage(h,p),this.screen.wait(lu(r=this.isImagesLoaded).call(r,this)),this.screen.wait(lu(n=this.isFontsLoaded).call(n,this))}return zo(t,[{key:"bindCreateImage",value:function(t,e){return"boolean"==typeof e?function(r,n){return t(r,"boolean"==typeof n?n:e)}:t}},{key:"popEmSize",value:function(){this.emSizeStack.pop()}},{key:"getUniqueId",value:function(){return"canvg".concat(++this.uniqueId)}},{key:"isImagesLoaded",value:function(){var t;return ru(t=this.images).call(t,(function(t){return t.loaded}))}},{key:"isFontsLoaded",value:function(){var t;return ru(t=this.fonts).call(t,(function(t){return t.loaded}))}},{key:"createDocumentElement",value:function(t){var e=this.createElement(t.documentElement);return e.root=!0,e.addStylesFromStyleDefinition(),this.documentElement=e,e}},{key:"createElement",value:function(e){var r=e.nodeName.replace(/^[^:]+:/,""),n=t.elementTypes[r];return void 0!==n?new n(this,e):new nc(this,e)}},{key:"createTextNode",value:function(t){return new _c(this,t)}},{key:"setViewBox",value:function(t){this.screen.setViewBox(function(t){for(var e=1;e<arguments.length;e++){var r,n=null!=arguments[e]?arguments[e]:{};if(e%2)Hi(r=Ph(Object(n),!0)).call(r,(function(e){Lo(t,e,n[e])}));else if(_i)Ni(t,_i(n));else{var i;Hi(i=Ph(Object(n))).call(i,(function(e){Mi(t,e,qi(n,e))}))}}return t}({document:this},t))}},{key:"window",get:function(){return this.screen.window}},{key:"fetch",get:function(){return this.screen.fetch}},{key:"ctx",get:function(){return this.screen.ctx}},{key:"emSize",get:function(){var t=this.emSizeStack;return t[t.length-1]},set:function(t){this.emSizeStack.push(t)}}]),t}();function Mh(t,e){var r=ia(t);if(Ji){var n=Ji(t);e&&(n=Ki(n).call(n,(function(e){return qi(t,e).enumerable}))),r.push.apply(r,n)}return r}function Nh(t){for(var e=1;e<arguments.length;e++){var r,n=null!=arguments[e]?arguments[e]:{};if(e%2)Hi(r=Mh(Object(n),!0)).call(r,(function(e){Lo(t,e,n[e])}));else if(_i)Ni(t,_i(n));else{var i;Hi(i=Mh(Object(n))).call(i,(function(e){Mi(t,e,qi(n,e))}))}}return t}Eh.createCanvas=function(t,e){var r=document.createElement("canvas");return r.width=t,r.height=e,r},Eh.createImage=function(t){return Ch.apply(this,arguments)},Eh.elementTypes=Oh;var Rh=function(){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Io(this,t),this.parser=new ss(n),this.screen=new as(e,n),this.options=n;var i=new Eh(this,n),a=i.createDocumentElement(r);this.document=i,this.documentElement=a}var e,r;return zo(t,[{key:"fork",value:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.from(e,r,Nh(Nh({},this.options),n))}},{key:"forkString",value:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.fromString(e,r,Nh(Nh({},this.options),n))}},{key:"ready",value:function(){return this.screen.ready()}},{key:"isReady",value:function(){return this.screen.isReady()}},{key:"render",value:(r=Do(aa.mark((function t(){var e,r=arguments;return aa.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},this.start(Nh({enableRedraw:!0,ignoreAnimation:!0,ignoreMouse:!0},e)),t.next=4,this.ready();case 4:this.stop();case 5:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"start",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.documentElement,r=this.screen,n=this.options;r.start(e,Nh(Nh({enableRedraw:!0},n),t))}},{key:"stop",value:function(){this.screen.stop()}},{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.documentElement.resize(t,e,r)}}],[{key:"from",value:(e=Do(aa.mark((function e(r,n){var i,a,o,u=arguments;return aa.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]?u[2]:{},a=new ss(i),e.next=4,a.parse(n);case 4:return o=e.sent,e.abrupt("return",new t(r,o,i));case 6:case"end":return e.stop()}}),e)}))),function(t,r){return e.apply(this,arguments)})},{key:"fromString",value:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=new ss(n),a=i.parseFromString(r);return new t(e,a,n)}}]),t}();var _h=Object.freeze({__proto__:null,offscreen:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.DOMParser,r={window:null,ignoreAnimation:!0,ignoreMouse:!0,DOMParser:e,createCanvas:function(t,e){return new OffscreenCanvas(t,e)},createImage:function(t){return Do(aa.mark((function e(){var r,n,i;return aa.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return r=e.sent,e.next=5,r.blob();case 5:return n=e.sent,e.next=8,createImageBitmap(n);case 8:return i=e.sent,e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})))()}};return"undefined"==typeof DOMParser&&void 0!==e||Sl(r,"DOMParser"),r},node:function(t){var e=t.DOMParser,r=t.canvas;return{window:null,ignoreAnimation:!0,ignoreMouse:!0,DOMParser:e,fetch:t.fetch,createCanvas:r.createCanvas,createImage:r.loadImage}}});t.AElement=mf,t.AnimateColorElement=Zl,t.AnimateElement=Xl,t.AnimateTransformElement=Jl,t.BoundingBox=Tc,t.CB1=Si,t.CB2=Ai,t.CB3=ki,t.CB4=Ti,t.Canvg=Rh,t.CircleElement=hl,t.ClipPathElement=oh,t.DefsElement=Cl,t.DescElement=Th,t.Document=Eh,t.Element=ec,t.EllipseElement=yl,t.FeColorMatrixElement=$f,t.FeCompositeElement=yh,t.FeDropShadowElement=lh,t.FeGaussianBlurElement=wh,t.FeMorphologyElement=hh,t.FilterElement=sh,t.Font=kc,t.FontElement=sf,t.FontFaceElement=lf,t.GElement=Ml,t.GlyphElement=yf,t.GradientElement=Rl,t.ImageElement=If,t.LineElement=gl,t.LinearGradientElement=Dl,t.MarkerElement=Ol,t.MaskElement=Kf,t.Matrix=Gs,t.MissingGlyphElement=hf,t.Mouse=rs,t.PSEUDO_ZERO=mi,t.Parser=ss,t.PathElement=ol,t.PathParser=il,t.PatternElement=kl,t.Point=es,t.PolygonElement=bl,t.PolylineElement=ml,t.Property=Ju,t.QB1=Oi,t.QB2=Pi,t.QB3=Ci,t.RadialGradientElement=Ll,t.RectElement=ll,t.RenderedElement=Pc,t.Rotate=Ys,t.SVGElement=sl,t.SVGFontLoader=Ff,t.Scale=qs,t.Screen=as,t.Skew=Ws,t.SkewX=Zs,t.SkewY=Js,t.StopElement=jl,t.StyleElement=Hf,t.SymbolElement=zf,t.TRefElement=gf,t.TSpanElement=Nc,t.TextElement=Ec,t.TextPathElement=Vf,t.TitleElement=Ah,t.Transform=tc,t.Translate=Xs,t.UnknownElement=nc,t.UseElement=Xf,t.ViewPort=ts,t.compressSpaces=re,t.default=Rh,t.getSelectorSpecificity=di,t.normalizeAttributeName=ue,t.normalizeColor=ce,t.parseExternalUrl=se,t.presets=_h,t.toNumbers=ae,t.trimLeft=ne,t.trimRight=ie,t.vectorMagnitude=xi,t.vectorsAngle=wi,t.vectorsRatio=bi,Object.defineProperty(t,"__esModule",{value:!0})}));

/* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function t(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function u(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=k;z(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var C=null,D=null,E=null,F=null;function G(){if(null===D)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);D=!!a&&603>parseInt(a[1],10)}else D=!1;return D}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
B.prototype.load=function(a,b){var c=this,k=a||"BESbswy",r=0,n=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=n?b(Error(""+n+"ms timeout exceeded")):document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},b)}e()}),N=new Promise(function(a,c){r=setTimeout(function(){c(Error(""+n+"ms timeout exceeded"))},n)});Promise.race([N,M]).then(function(){clearTimeout(r);a(c)},
b)}else m(function(){function v(){var b;if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(f==w&&g==w&&h==w||f==x&&g==x&&h==x||f==y&&g==y&&h==y)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(r),a(c))}function I(){if((new Date).getTime()-H>=n)d.parentNode&&d.parentNode.removeChild(d),b(Error(""+
n+"ms timeout exceeded"));else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,g=p.a.offsetWidth,h=q.a.offsetWidth,v();r=setTimeout(I,50)}}var e=new t(k),p=new t(k),q=new t(k),f=-1,g=-1,h=-1,w=-1,x=-1,y=-1,d=document.createElement("div");d.dir="ltr";u(e,L(c,"sans-serif"));u(p,L(c,"serif"));u(q,L(c,"monospace"));d.appendChild(e.a);d.appendChild(p.a);d.appendChild(q.a);document.body.appendChild(d);w=e.a.offsetWidth;x=p.a.offsetWidth;y=q.a.offsetWidth;I();A(e,function(a){f=a;v()});u(e,
L(c,'"'+c.family+'",sans-serif'));A(p,function(a){g=a;v()});u(p,L(c,'"'+c.family+'",serif'));A(q,function(a){h=a;v()});u(q,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=B:(window.FontFaceObserver=B,window.FontFaceObserver.prototype.load=B.prototype.load);}());

/*!

JSZip v3.1.5 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.JSZip=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";var d=a("./utils"),e=a("./support"),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";c.encode=function(a){for(var b,c,e,g,h,i,j,k=[],l=0,m=a.length,n=m,o="string"!==d.getTypeOf(a);l<a.length;)n=m-l,o?(b=a[l++],c=l<m?a[l++]:0,e=l<m?a[l++]:0):(b=a.charCodeAt(l++),c=l<m?a.charCodeAt(l++):0,e=l<m?a.charCodeAt(l++):0),g=b>>2,h=(3&b)<<4|c>>4,i=n>1?(15&c)<<2|e>>6:64,j=n>2?63&e:64,k.push(f.charAt(g)+f.charAt(h)+f.charAt(i)+f.charAt(j));return k.join("")},c.decode=function(a){var b,c,d,g,h,i,j,k=0,l=0,m="data:";if(a.substr(0,m.length)===m)throw new Error("Invalid base64 input, it looks like a data url.");a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");var n=3*a.length/4;if(a.charAt(a.length-1)===f.charAt(64)&&n--,a.charAt(a.length-2)===f.charAt(64)&&n--,n%1!==0)throw new Error("Invalid base64 input, bad content length.");var o;for(o=e.uint8array?new Uint8Array(0|n):new Array(0|n);k<a.length;)g=f.indexOf(a.charAt(k++)),h=f.indexOf(a.charAt(k++)),i=f.indexOf(a.charAt(k++)),j=f.indexOf(a.charAt(k++)),b=g<<2|h>>4,c=(15&h)<<4|i>>2,d=(3&i)<<6|j,o[l++]=b,64!==i&&(o[l++]=c),64!==j&&(o[l++]=d);return o}},{"./support":30,"./utils":32}],2:[function(a,b,c){"use strict";function d(a,b,c,d,e){this.compressedSize=a,this.uncompressedSize=b,this.crc32=c,this.compression=d,this.compressedContent=e}var e=a("./external"),f=a("./stream/DataWorker"),g=a("./stream/DataLengthProbe"),h=a("./stream/Crc32Probe"),g=a("./stream/DataLengthProbe");d.prototype={getContentWorker:function(){var a=new f(e.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new g("data_length")),b=this;return a.on("end",function(){if(this.streamInfo.data_length!==b.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),a},getCompressedWorker:function(){return new f(e.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},d.createWorkerFrom=function(a,b,c){return a.pipe(new h).pipe(new g("uncompressedSize")).pipe(b.compressWorker(c)).pipe(new g("compressedSize")).withStreamInfo("compression",b)},b.exports=d},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(a,b,c){"use strict";var d=a("./stream/GenericWorker");c.STORE={magic:"\0\0",compressWorker:function(a){return new d("STORE compression")},uncompressWorker:function(){return new d("STORE decompression")}},c.DEFLATE=a("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(a,b,c){"use strict";function d(){for(var a,b=[],c=0;c<256;c++){a=c;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;b[c]=a}return b}function e(a,b,c,d){var e=h,f=d+c;a^=-1;for(var g=d;g<f;g++)a=a>>>8^e[255&(a^b[g])];return a^-1}function f(a,b,c,d){var e=h,f=d+c;a^=-1;for(var g=d;g<f;g++)a=a>>>8^e[255&(a^b.charCodeAt(g))];return a^-1}var g=a("./utils"),h=d();b.exports=function(a,b){if("undefined"==typeof a||!a.length)return 0;var c="string"!==g.getTypeOf(a);return c?e(0|b,a,a.length,0):f(0|b,a,a.length,0)}},{"./utils":32}],5:[function(a,b,c){"use strict";c.base64=!1,c.binary=!1,c.dir=!1,c.createFolders=!0,c.date=null,c.compression=null,c.compressionOptions=null,c.comment=null,c.unixPermissions=null,c.dosPermissions=null},{}],6:[function(a,b,c){"use strict";var d=null;d="undefined"!=typeof Promise?Promise:a("lie"),b.exports={Promise:d}},{lie:58}],7:[function(a,b,c){"use strict";function d(a,b){h.call(this,"FlateWorker/"+a),this._pako=null,this._pakoAction=a,this._pakoOptions=b,this.meta={}}var e="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,f=a("pako"),g=a("./utils"),h=a("./stream/GenericWorker"),i=e?"uint8array":"array";c.magic="\b\0",g.inherits(d,h),d.prototype.processChunk=function(a){this.meta=a.meta,null===this._pako&&this._createPako(),this._pako.push(g.transformTo(i,a.data),!1)},d.prototype.flush=function(){h.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new f[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var a=this;this._pako.onData=function(b){a.push({data:b,meta:a.meta})}},c.compressWorker=function(a){return new d("Deflate",a)},c.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:59}],8:[function(a,b,c){"use strict";function d(a,b,c,d){f.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=b,this.zipPlatform=c,this.encodeFileName=d,this.streamFiles=a,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}var e=a("../utils"),f=a("../stream/GenericWorker"),g=a("../utf8"),h=a("../crc32"),i=a("../signature"),j=function(a,b){var c,d="";for(c=0;c<b;c++)d+=String.fromCharCode(255&a),a>>>=8;return d},k=function(a,b){var c=a;return a||(c=b?16893:33204),(65535&c)<<16},l=function(a,b){return 63&(a||0)},m=function(a,b,c,d,f,m){var n,o,p=a.file,q=a.compression,r=m!==g.utf8encode,s=e.transformTo("string",m(p.name)),t=e.transformTo("string",g.utf8encode(p.name)),u=p.comment,v=e.transformTo("string",m(u)),w=e.transformTo("string",g.utf8encode(u)),x=t.length!==p.name.length,y=w.length!==u.length,z="",A="",B="",C=p.dir,D=p.date,E={crc32:0,compressedSize:0,uncompressedSize:0};b&&!c||(E.crc32=a.crc32,E.compressedSize=a.compressedSize,E.uncompressedSize=a.uncompressedSize);var F=0;b&&(F|=8),r||!x&&!y||(F|=2048);var G=0,H=0;C&&(G|=16),"UNIX"===f?(H=798,G|=k(p.unixPermissions,C)):(H=20,G|=l(p.dosPermissions,C)),n=D.getUTCHours(),n<<=6,n|=D.getUTCMinutes(),n<<=5,n|=D.getUTCSeconds()/2,o=D.getUTCFullYear()-1980,o<<=4,o|=D.getUTCMonth()+1,o<<=5,o|=D.getUTCDate(),x&&(A=j(1,1)+j(h(s),4)+t,z+="up"+j(A.length,2)+A),y&&(B=j(1,1)+j(h(v),4)+w,z+="uc"+j(B.length,2)+B);var I="";I+="\n\0",I+=j(F,2),I+=q.magic,I+=j(n,2),I+=j(o,2),I+=j(E.crc32,4),I+=j(E.compressedSize,4),I+=j(E.uncompressedSize,4),I+=j(s.length,2),I+=j(z.length,2);var J=i.LOCAL_FILE_HEADER+I+s+z,K=i.CENTRAL_FILE_HEADER+j(H,2)+I+j(v.length,2)+"\0\0\0\0"+j(G,4)+j(d,4)+s+z+v;return{fileRecord:J,dirRecord:K}},n=function(a,b,c,d,f){var g="",h=e.transformTo("string",f(d));return g=i.CENTRAL_DIRECTORY_END+"\0\0\0\0"+j(a,2)+j(a,2)+j(b,4)+j(c,4)+j(h.length,2)+h},o=function(a){var b="";return b=i.DATA_DESCRIPTOR+j(a.crc32,4)+j(a.compressedSize,4)+j(a.uncompressedSize,4)};e.inherits(d,f),d.prototype.push=function(a){var b=a.meta.percent||0,c=this.entriesCount,d=this._sources.length;this.accumulate?this.contentBuffer.push(a):(this.bytesWritten+=a.data.length,f.prototype.push.call(this,{data:a.data,meta:{currentFile:this.currentFile,percent:c?(b+100*(c-d-1))/c:100}}))},d.prototype.openedSource=function(a){this.currentSourceOffset=this.bytesWritten,this.currentFile=a.file.name;var b=this.streamFiles&&!a.file.dir;if(b){var c=m(a,b,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:c.fileRecord,meta:{percent:0}})}else this.accumulate=!0},d.prototype.closedSource=function(a){this.accumulate=!1;var b=this.streamFiles&&!a.file.dir,c=m(a,b,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(c.dirRecord),b)this.push({data:o(a),meta:{percent:100}});else for(this.push({data:c.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},d.prototype.flush=function(){for(var a=this.bytesWritten,b=0;b<this.dirRecords.length;b++)this.push({data:this.dirRecords[b],meta:{percent:100}});var c=this.bytesWritten-a,d=n(this.dirRecords.length,c,a,this.zipComment,this.encodeFileName);this.push({data:d,meta:{percent:100}})},d.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},d.prototype.registerPrevious=function(a){this._sources.push(a);var b=this;return a.on("data",function(a){b.processChunk(a)}),a.on("end",function(){b.closedSource(b.previous.streamInfo),b._sources.length?b.prepareNextSource():b.end()}),a.on("error",function(a){b.error(a)}),this},d.prototype.resume=function(){return!!f.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},d.prototype.error=function(a){var b=this._sources;if(!f.prototype.error.call(this,a))return!1;for(var c=0;c<b.length;c++)try{b[c].error(a)}catch(a){}return!0},d.prototype.lock=function(){f.prototype.lock.call(this);for(var a=this._sources,b=0;b<a.length;b++)a[b].lock()},b.exports=d},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(a,b,c){"use strict";var d=a("../compressions"),e=a("./ZipFileWorker"),f=function(a,b){var c=a||b,e=d[c];if(!e)throw new Error(c+" is not a valid compression method !");return e};c.generateWorker=function(a,b,c){var d=new e(b.streamFiles,c,b.platform,b.encodeFileName),g=0;try{a.forEach(function(a,c){g++;var e=f(c.options.compression,b.compression),h=c.options.compressionOptions||b.compressionOptions||{},i=c.dir,j=c.date;c._compressWorker(e,h).withStreamInfo("file",{name:a,dir:i,date:j,comment:c.comment||"",unixPermissions:c.unixPermissions,dosPermissions:c.dosPermissions}).pipe(d)}),d.entriesCount=g}catch(h){d.error(h)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(a,b,c){"use strict";function d(){if(!(this instanceof d))return new d;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files={},this.comment=null,this.root="",this.clone=function(){var a=new d;for(var b in this)"function"!=typeof this[b]&&(a[b]=this[b]);return a}}d.prototype=a("./object"),d.prototype.loadAsync=a("./load"),d.support=a("./support"),d.defaults=a("./defaults"),d.version="3.1.5",d.loadAsync=function(a,b){return(new d).loadAsync(a,b)},d.external=a("./external"),b.exports=d},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(a,b,c){"use strict";function d(a){return new f.Promise(function(b,c){var d=a.decompressed.getContentWorker().pipe(new i);d.on("error",function(a){c(a)}).on("end",function(){d.streamInfo.crc32!==a.decompressed.crc32?c(new Error("Corrupted zip : CRC32 mismatch")):b()}).resume()})}var e=a("./utils"),f=a("./external"),g=a("./utf8"),e=a("./utils"),h=a("./zipEntries"),i=a("./stream/Crc32Probe"),j=a("./nodejsUtils");b.exports=function(a,b){var c=this;return b=e.extend(b||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:g.utf8decode}),j.isNode&&j.isStream(a)?f.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):e.prepareContent("the loaded zip file",a,!0,b.optimizedBinaryString,b.base64).then(function(a){var c=new h(b);return c.load(a),c}).then(function(a){var c=[f.Promise.resolve(a)],e=a.files;if(b.checkCRC32)for(var g=0;g<e.length;g++)c.push(d(e[g]));return f.Promise.all(c)}).then(function(a){for(var d=a.shift(),e=d.files,f=0;f<e.length;f++){var g=e[f];c.file(g.fileNameStr,g.decompressed,{binary:!0,optimizedBinaryString:!0,date:g.date,dir:g.dir,comment:g.fileCommentStr.length?g.fileCommentStr:null,unixPermissions:g.unixPermissions,dosPermissions:g.dosPermissions,createFolders:b.createFolders})}return d.zipComment.length&&(c.comment=d.zipComment),c})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(a,b,c){"use strict";function d(a,b){f.call(this,"Nodejs stream input adapter for "+a),this._upstreamEnded=!1,this._bindStream(b)}var e=a("../utils"),f=a("../stream/GenericWorker");e.inherits(d,f),d.prototype._bindStream=function(a){var b=this;this._stream=a,a.pause(),a.on("data",function(a){b.push({data:a,meta:{percent:0}})}).on("error",function(a){b.isPaused?this.generatedError=a:b.error(a)}).on("end",function(){b.isPaused?b._upstreamEnded=!0:b.end()})},d.prototype.pause=function(){return!!f.prototype.pause.call(this)&&(this._stream.pause(),!0)},d.prototype.resume=function(){return!!f.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},b.exports=d},{"../stream/GenericWorker":28,"../utils":32}],13:[function(a,b,c){"use strict";function d(a,b,c){e.call(this,b),this._helper=a;var d=this;a.on("data",function(a,b){d.push(a)||d._helper.pause(),c&&c(b)}).on("error",function(a){d.emit("error",a)}).on("end",function(){d.push(null)})}var e=a("readable-stream").Readable,f=a("../utils");f.inherits(d,e),d.prototype._read=function(){this._helper.resume()},b.exports=d},{"../utils":32,"readable-stream":16}],14:[function(a,b,c){"use strict";b.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(a,b){return new Buffer(a,b)},allocBuffer:function(a){return Buffer.alloc?Buffer.alloc(a):new Buffer(a)},isBuffer:function(a){return Buffer.isBuffer(a)},isStream:function(a){return a&&"function"==typeof a.on&&"function"==typeof a.pause&&"function"==typeof a.resume}}},{}],15:[function(a,b,c){"use strict";function d(a){return"[object RegExp]"===Object.prototype.toString.call(a)}var e=a("./utf8"),f=a("./utils"),g=a("./stream/GenericWorker"),h=a("./stream/StreamHelper"),i=a("./defaults"),j=a("./compressedObject"),k=a("./zipObject"),l=a("./generate"),m=a("./nodejsUtils"),n=a("./nodejs/NodejsStreamInputAdapter"),o=function(a,b,c){var d,e=f.getTypeOf(b),h=f.extend(c||{},i);h.date=h.date||new Date,null!==h.compression&&(h.compression=h.compression.toUpperCase()),"string"==typeof h.unixPermissions&&(h.unixPermissions=parseInt(h.unixPermissions,8)),h.unixPermissions&&16384&h.unixPermissions&&(h.dir=!0),h.dosPermissions&&16&h.dosPermissions&&(h.dir=!0),h.dir&&(a=q(a)),h.createFolders&&(d=p(a))&&r.call(this,d,!0);var l="string"===e&&h.binary===!1&&h.base64===!1;c&&"undefined"!=typeof c.binary||(h.binary=!l);var o=b instanceof j&&0===b.uncompressedSize;(o||h.dir||!b||0===b.length)&&(h.base64=!1,h.binary=!0,b="",h.compression="STORE",e="string");var s=null;s=b instanceof j||b instanceof g?b:m.isNode&&m.isStream(b)?new n(a,b):f.prepareContent(a,b,h.binary,h.optimizedBinaryString,h.base64);var t=new k(a,s,h);this.files[a]=t},p=function(a){"/"===a.slice(-1)&&(a=a.substring(0,a.length-1));var b=a.lastIndexOf("/");return b>0?a.substring(0,b):""},q=function(a){return"/"!==a.slice(-1)&&(a+="/"),a},r=function(a,b){return b="undefined"!=typeof b?b:i.createFolders,a=q(a),this.files[a]||o.call(this,a,null,{dir:!0,createFolders:b}),this.files[a]},s={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(a){var b,c,d;for(b in this.files)this.files.hasOwnProperty(b)&&(d=this.files[b],c=b.slice(this.root.length,b.length),c&&b.slice(0,this.root.length)===this.root&&a(c,d))},filter:function(a){var b=[];return this.forEach(function(c,d){a(c,d)&&b.push(d)}),b},file:function(a,b,c){if(1===arguments.length){if(d(a)){var e=a;return this.filter(function(a,b){return!b.dir&&e.test(a)})}var f=this.files[this.root+a];return f&&!f.dir?f:null}return a=this.root+a,o.call(this,a,b,c),this},folder:function(a){if(!a)return this;if(d(a))return this.filter(function(b,c){return c.dir&&a.test(b)});var b=this.root+a,c=r.call(this,b),e=this.clone();return e.root=c.name,e},remove:function(a){a=this.root+a;var b=this.files[a];if(b||("/"!==a.slice(-1)&&(a+="/"),b=this.files[a]),b&&!b.dir)delete this.files[a];else for(var c=this.filter(function(b,c){return c.name.slice(0,a.length)===a}),d=0;d<c.length;d++)delete this.files[c[d].name];return this},generate:function(a){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(a){var b,c={};try{if(c=f.extend(a||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:e.utf8encode}),c.type=c.type.toLowerCase(),c.compression=c.compression.toUpperCase(),"binarystring"===c.type&&(c.type="string"),!c.type)throw new Error("No output type specified.");f.checkSupport(c.type),"darwin"!==c.platform&&"freebsd"!==c.platform&&"linux"!==c.platform&&"sunos"!==c.platform||(c.platform="UNIX"),"win32"===c.platform&&(c.platform="DOS");var d=c.comment||this.comment||"";b=l.generateWorker(this,c,d)}catch(i){b=new g("error"),b.error(i)}return new h(b,c.type||"string",c.mimeType)},generateAsync:function(a,b){return this.generateInternalStream(a).accumulate(b)},generateNodeStream:function(a,b){return a=a||{},a.type||(a.type="nodebuffer"),this.generateInternalStream(a).toNodejsStream(b)}};b.exports=s},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(a,b,c){b.exports=a("stream")},{stream:void 0}],17:[function(a,b,c){"use strict";function d(a){e.call(this,a);for(var b=0;b<this.data.length;b++)a[b]=255&a[b]}var e=a("./DataReader"),f=a("../utils");f.inherits(d,e),d.prototype.byteAt=function(a){return this.data[this.zero+a]},d.prototype.lastIndexOfSignature=function(a){for(var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=this.length-4;f>=0;--f)if(this.data[f]===b&&this.data[f+1]===c&&this.data[f+2]===d&&this.data[f+3]===e)return f-this.zero;return-1},d.prototype.readAndCheckSignature=function(a){var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=this.readData(4);return b===f[0]&&c===f[1]&&d===f[2]&&e===f[3]},d.prototype.readData=function(a){if(this.checkOffset(a),0===a)return[];var b=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{"../utils":32,"./DataReader":18}],18:[function(a,b,c){"use strict";function d(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}var e=a("../utils");d.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(a){},readInt:function(a){var b,c=0;for(this.checkOffset(a),b=this.index+a-1;b>=this.index;b--)c=(c<<8)+this.byteAt(b);return this.index+=a,c},readString:function(a){return e.transformTo("string",this.readData(a))},readData:function(a){},lastIndexOfSignature:function(a){},readAndCheckSignature:function(a){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC((a>>25&127)+1980,(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},b.exports=d},{"../utils":32}],19:[function(a,b,c){"use strict";function d(a){e.call(this,a)}var e=a("./Uint8ArrayReader"),f=a("../utils");f.inherits(d,e),d.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(a,b,c){"use strict";function d(a){e.call(this,a)}var e=a("./DataReader"),f=a("../utils");f.inherits(d,e),d.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},d.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},d.prototype.readAndCheckSignature=function(a){var b=this.readData(4);return a===b},d.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{"../utils":32,"./DataReader":18}],21:[function(a,b,c){"use strict";function d(a){e.call(this,a)}var e=a("./ArrayReader"),f=a("../utils");f.inherits(d,e),d.prototype.readData=function(a){if(this.checkOffset(a),0===a)return new Uint8Array(0);var b=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{"../utils":32,"./ArrayReader":17}],22:[function(a,b,c){"use strict";var d=a("../utils"),e=a("../support"),f=a("./ArrayReader"),g=a("./StringReader"),h=a("./NodeBufferReader"),i=a("./Uint8ArrayReader");b.exports=function(a){var b=d.getTypeOf(a);return d.checkSupport(b),"string"!==b||e.uint8array?"nodebuffer"===b?new h(a):e.uint8array?new i(d.transformTo("uint8array",a)):new f(d.transformTo("array",a)):new g(a)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(a,b,c){"use strict";c.LOCAL_FILE_HEADER="PK",c.CENTRAL_FILE_HEADER="PK",c.CENTRAL_DIRECTORY_END="PK",c.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",c.ZIP64_CENTRAL_DIRECTORY_END="PK",c.DATA_DESCRIPTOR="PK\b"},{}],24:[function(a,b,c){"use strict";function d(a){e.call(this,"ConvertWorker to "+a),this.destType=a}var e=a("./GenericWorker"),f=a("../utils");f.inherits(d,e),d.prototype.processChunk=function(a){this.push({data:f.transformTo(this.destType,a.data),meta:a.meta})},b.exports=d},{"../utils":32,"./GenericWorker":28}],25:[function(a,b,c){"use strict";function d(){e.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}var e=a("./GenericWorker"),f=a("../crc32"),g=a("../utils");g.inherits(d,e),d.prototype.processChunk=function(a){this.streamInfo.crc32=f(a.data,this.streamInfo.crc32||0),this.push(a)},b.exports=d},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(a,b,c){"use strict";function d(a){f.call(this,"DataLengthProbe for "+a),this.propName=a,this.withStreamInfo(a,0)}var e=a("../utils"),f=a("./GenericWorker");e.inherits(d,f),d.prototype.processChunk=function(a){if(a){var b=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=b+a.data.length}f.prototype.processChunk.call(this,a)},b.exports=d},{"../utils":32,"./GenericWorker":28}],27:[function(a,b,c){"use strict";function d(a){f.call(this,"DataWorker");var b=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,a.then(function(a){b.dataIsReady=!0,b.data=a,b.max=a&&a.length||0,b.type=e.getTypeOf(a),b.isPaused||b._tickAndRepeat()},function(a){b.error(a)})}var e=a("../utils"),f=a("./GenericWorker"),g=16384;e.inherits(d,f),d.prototype.cleanUp=function(){f.prototype.cleanUp.call(this),this.data=null},d.prototype.resume=function(){return!!f.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,e.delay(this._tickAndRepeat,[],this)),!0)},d.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(e.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},d.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var a=g,b=null,c=Math.min(this.max,this.index+a);if(this.index>=this.max)return this.end();switch(this.type){case"string":b=this.data.substring(this.index,c);break;case"uint8array":b=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":b=this.data.slice(this.index,c)}return this.index=c,this.push({data:b,meta:{percent:this.max?this.index/this.max*100:0}})},b.exports=d},{"../utils":32,"./GenericWorker":28}],28:[function(a,b,c){"use strict";function d(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}d.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,b){return this._listeners[a].push(b),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,b){if(this._listeners[a])for(var c=0;c<this._listeners[a].length;c++)this._listeners[a][c].call(this,b)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var b=this;return a.on("data",function(a){b.processChunk(a)}),a.on("end",function(){b.end()}),a.on("error",function(a){b.error(a)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;this.isPaused=!1;var a=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,b){return this.extraStreamInfo[a]=b,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},b.exports=d},{}],29:[function(a,b,c){"use strict";function d(a,b,c){switch(a){case"blob":return h.newBlob(h.transformTo("arraybuffer",b),c);case"base64":return k.encode(b);default:return h.transformTo(a,b)}}function e(a,b){var c,d=0,e=null,f=0;for(c=0;c<b.length;c++)f+=b[c].length;switch(a){case"string":return b.join("");case"array":return Array.prototype.concat.apply([],b);case"uint8array":for(e=new Uint8Array(f),c=0;c<b.length;c++)e.set(b[c],d),d+=b[c].length;return e;case"nodebuffer":return Buffer.concat(b);default:throw new Error("concat : unsupported type '"+a+"'")}}function f(a,b){return new m.Promise(function(c,f){var g=[],h=a._internalType,i=a._outputType,j=a._mimeType;a.on("data",function(a,c){g.push(a),b&&b(c)}).on("error",function(a){g=[],f(a)}).on("end",function(){try{var a=d(i,e(h,g),j);c(a)}catch(b){f(b)}g=[]}).resume()})}function g(a,b,c){var d=b;switch(b){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=b,this._mimeType=c,h.checkSupport(d),this._worker=a.pipe(new i(d)),a.lock()}catch(e){this._worker=new j("error"),this._worker.error(e)}}var h=a("../utils"),i=a("./ConvertWorker"),j=a("./GenericWorker"),k=a("../base64"),l=a("../support"),m=a("../external"),n=null;if(l.nodestream)try{n=a("../nodejs/NodejsStreamOutputAdapter")}catch(o){}g.prototype={accumulate:function(a){return f(this,a)},on:function(a,b){var c=this;return"data"===a?this._worker.on(a,function(a){b.call(c,a.data,a.meta)}):this._worker.on(a,function(){h.delay(b,arguments,c)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(a){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new n(this,{objectMode:"nodebuffer"!==this._outputType},a)}},b.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(a,b,c){"use strict";if(c.base64=!0,c.array=!0,c.string=!0,c.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,c.nodebuffer="undefined"!=typeof Buffer,c.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)c.blob=!1;else{var d=new ArrayBuffer(0);try{c.blob=0===new Blob([d],{type:"application/zip"}).size}catch(e){try{var f=self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder,g=new f;g.append(d),c.blob=0===g.getBlob("application/zip").size}catch(e){c.blob=!1}}}try{c.nodestream=!!a("readable-stream").Readable}catch(e){c.nodestream=!1}},{"readable-stream":16}],31:[function(a,b,c){"use strict";function d(){i.call(this,"utf-8 decode"),this.leftOver=null}function e(){i.call(this,"utf-8 encode")}for(var f=a("./utils"),g=a("./support"),h=a("./nodejsUtils"),i=a("./stream/GenericWorker"),j=new Array(256),k=0;k<256;k++)j[k]=k>=252?6:k>=248?5:k>=240?4:k>=224?3:k>=192?2:1;j[254]=j[254]=1;var l=function(a){var b,c,d,e,f,h=a.length,i=0;for(e=0;e<h;e++)c=a.charCodeAt(e),55296===(64512&c)&&e+1<h&&(d=a.charCodeAt(e+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),e++)),i+=c<128?1:c<2048?2:c<65536?3:4;for(b=g.uint8array?new Uint8Array(i):new Array(i),f=0,e=0;f<i;e++)c=a.charCodeAt(e),55296===(64512&c)&&e+1<h&&(d=a.charCodeAt(e+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),e++)),c<128?b[f++]=c:c<2048?(b[f++]=192|c>>>6,b[f++]=128|63&c):c<65536?(b[f++]=224|c>>>12,b[f++]=128|c>>>6&63,b[f++]=128|63&c):(b[f++]=240|c>>>18,b[f++]=128|c>>>12&63,b[f++]=128|c>>>6&63,b[f++]=128|63&c);return b},m=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return c<0?b:0===c?b:c+j[a[c]]>b?c:b},n=function(a){var b,c,d,e,g=a.length,h=new Array(2*g);for(c=0,b=0;b<g;)if(d=a[b++],d<128)h[c++]=d;else if(e=j[d],e>4)h[c++]=65533,b+=e-1;else{for(d&=2===e?31:3===e?15:7;e>1&&b<g;)d=d<<6|63&a[b++],e--;e>1?h[c++]=65533:d<65536?h[c++]=d:(d-=65536,h[c++]=55296|d>>10&1023,h[c++]=56320|1023&d)}return h.length!==c&&(h.subarray?h=h.subarray(0,c):h.length=c),f.applyFromCharCode(h)};c.utf8encode=function(a){return g.nodebuffer?h.newBufferFrom(a,"utf-8"):l(a)},c.utf8decode=function(a){return g.nodebuffer?f.transformTo("nodebuffer",a).toString("utf-8"):(a=f.transformTo(g.uint8array?"uint8array":"array",a),n(a))},f.inherits(d,i),d.prototype.processChunk=function(a){var b=f.transformTo(g.uint8array?"uint8array":"array",a.data);if(this.leftOver&&this.leftOver.length){if(g.uint8array){var d=b;b=new Uint8Array(d.length+this.leftOver.length),b.set(this.leftOver,0),b.set(d,this.leftOver.length)}else b=this.leftOver.concat(b);this.leftOver=null}var e=m(b),h=b;e!==b.length&&(g.uint8array?(h=b.subarray(0,e),this.leftOver=b.subarray(e,b.length)):(h=b.slice(0,e),this.leftOver=b.slice(e,b.length))),this.push({data:c.utf8decode(h),meta:a.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:c.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},c.Utf8DecodeWorker=d,f.inherits(e,i),e.prototype.processChunk=function(a){this.push({data:c.utf8encode(a.data),meta:a.meta})},c.Utf8EncodeWorker=e},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(a,b,c){"use strict";function d(a){var b=null;return b=i.uint8array?new Uint8Array(a.length):new Array(a.length),f(a,b)}function e(a){return a}function f(a,b){for(var c=0;c<a.length;++c)b[c]=255&a.charCodeAt(c);return b}function g(a){var b=65536,d=c.getTypeOf(a),e=!0;if("uint8array"===d?e=n.applyCanBeUsed.uint8array:"nodebuffer"===d&&(e=n.applyCanBeUsed.nodebuffer),e)for(;b>1;)try{return n.stringifyByChunk(a,d,b)}catch(f){b=Math.floor(b/2)}return n.stringifyByChar(a)}function h(a,b){for(var c=0;c<a.length;c++)b[c]=a[c];
return b}var i=a("./support"),j=a("./base64"),k=a("./nodejsUtils"),l=a("core-js/library/fn/set-immediate"),m=a("./external");c.newBlob=function(a,b){c.checkSupport("blob");try{return new Blob([a],{type:b})}catch(d){try{var e=self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder,f=new e;return f.append(a),f.getBlob(b)}catch(d){throw new Error("Bug : can't construct the Blob.")}}};var n={stringifyByChunk:function(a,b,c){var d=[],e=0,f=a.length;if(f<=c)return String.fromCharCode.apply(null,a);for(;e<f;)"array"===b||"nodebuffer"===b?d.push(String.fromCharCode.apply(null,a.slice(e,Math.min(e+c,f)))):d.push(String.fromCharCode.apply(null,a.subarray(e,Math.min(e+c,f)))),e+=c;return d.join("")},stringifyByChar:function(a){for(var b="",c=0;c<a.length;c++)b+=String.fromCharCode(a[c]);return b},applyCanBeUsed:{uint8array:function(){try{return i.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(a){return!1}}(),nodebuffer:function(){try{return i.nodebuffer&&1===String.fromCharCode.apply(null,k.allocBuffer(1)).length}catch(a){return!1}}()}};c.applyFromCharCode=g;var o={};o.string={string:e,array:function(a){return f(a,new Array(a.length))},arraybuffer:function(a){return o.string.uint8array(a).buffer},uint8array:function(a){return f(a,new Uint8Array(a.length))},nodebuffer:function(a){return f(a,k.allocBuffer(a.length))}},o.array={string:g,array:e,arraybuffer:function(a){return new Uint8Array(a).buffer},uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return k.newBufferFrom(a)}},o.arraybuffer={string:function(a){return g(new Uint8Array(a))},array:function(a){return h(new Uint8Array(a),new Array(a.byteLength))},arraybuffer:e,uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return k.newBufferFrom(new Uint8Array(a))}},o.uint8array={string:g,array:function(a){return h(a,new Array(a.length))},arraybuffer:function(a){return a.buffer},uint8array:e,nodebuffer:function(a){return k.newBufferFrom(a)}},o.nodebuffer={string:g,array:function(a){return h(a,new Array(a.length))},arraybuffer:function(a){return o.nodebuffer.uint8array(a).buffer},uint8array:function(a){return h(a,new Uint8Array(a.length))},nodebuffer:e},c.transformTo=function(a,b){if(b||(b=""),!a)return b;c.checkSupport(a);var d=c.getTypeOf(b),e=o[d][a](b);return e},c.getTypeOf=function(a){return"string"==typeof a?"string":"[object Array]"===Object.prototype.toString.call(a)?"array":i.nodebuffer&&k.isBuffer(a)?"nodebuffer":i.uint8array&&a instanceof Uint8Array?"uint8array":i.arraybuffer&&a instanceof ArrayBuffer?"arraybuffer":void 0},c.checkSupport=function(a){var b=i[a.toLowerCase()];if(!b)throw new Error(a+" is not supported by this platform")},c.MAX_VALUE_16BITS=65535,c.MAX_VALUE_32BITS=-1,c.pretty=function(a){var b,c,d="";for(c=0;c<(a||"").length;c++)b=a.charCodeAt(c),d+="\\x"+(b<16?"0":"")+b.toString(16).toUpperCase();return d},c.delay=function(a,b,c){l(function(){a.apply(c||null,b||[])})},c.inherits=function(a,b){var c=function(){};c.prototype=b.prototype,a.prototype=new c},c.extend=function(){var a,b,c={};for(a=0;a<arguments.length;a++)for(b in arguments[a])arguments[a].hasOwnProperty(b)&&"undefined"==typeof c[b]&&(c[b]=arguments[a][b]);return c},c.prepareContent=function(a,b,e,f,g){var h=m.Promise.resolve(b).then(function(a){var b=i.blob&&(a instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(a))!==-1);return b&&"undefined"!=typeof FileReader?new m.Promise(function(b,c){var d=new FileReader;d.onload=function(a){b(a.target.result)},d.onerror=function(a){c(a.target.error)},d.readAsArrayBuffer(a)}):a});return h.then(function(b){var h=c.getTypeOf(b);return h?("arraybuffer"===h?b=c.transformTo("uint8array",b):"string"===h&&(g?b=j.decode(b):e&&f!==!0&&(b=d(b))),b):m.Promise.reject(new Error("Can't read the data of '"+a+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"core-js/library/fn/set-immediate":36}],33:[function(a,b,c){"use strict";function d(a){this.files=[],this.loadOptions=a}var e=a("./reader/readerFor"),f=a("./utils"),g=a("./signature"),h=a("./zipEntry"),i=(a("./utf8"),a("./support"));d.prototype={checkSignature:function(a){if(!this.reader.readAndCheckSignature(a)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+f.pretty(b)+", expected "+f.pretty(a)+")")}},isSignature:function(a,b){var c=this.reader.index;this.reader.setIndex(a);var d=this.reader.readString(4),e=d===b;return this.reader.setIndex(c),e},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var a=this.reader.readData(this.zipCommentLength),b=i.uint8array?"uint8array":"array",c=f.transformTo(b,a);this.zipComment=this.loadOptions.decodeFileName(c)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var a,b,c,d=this.zip64EndOfCentralSize-44,e=0;e<d;)a=this.reader.readInt(2),b=this.reader.readInt(4),c=this.reader.readData(b),this.zip64ExtensibleData[a]={id:a,length:b,value:c}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var a,b;for(a=0;a<this.files.length;a++)b=this.files[a],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(g.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var a;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(g.CENTRAL_FILE_HEADER);)a=new h({zip64:this.zip64},this.loadOptions),a.readCentralPart(this.reader),this.files.push(a);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var a=this.reader.lastIndexOfSignature(g.CENTRAL_DIRECTORY_END);if(a<0){var b=!this.isSignature(0,g.LOCAL_FILE_HEADER);throw b?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory")}this.reader.setIndex(a);var c=a;if(this.checkSignature(g.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===f.MAX_VALUE_16BITS||this.diskWithCentralDirStart===f.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===f.MAX_VALUE_16BITS||this.centralDirRecords===f.MAX_VALUE_16BITS||this.centralDirSize===f.MAX_VALUE_32BITS||this.centralDirOffset===f.MAX_VALUE_32BITS){if(this.zip64=!0,a=this.reader.lastIndexOfSignature(g.ZIP64_CENTRAL_DIRECTORY_LOCATOR),a<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(a),this.checkSignature(g.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,g.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(g.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(g.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var e=c-d;if(e>0)this.isSignature(c,g.CENTRAL_FILE_HEADER)||(this.reader.zero=e);else if(e<0)throw new Error("Corrupted zip: missing "+Math.abs(e)+" bytes.")},prepareReader:function(a){this.reader=e(a)},load:function(a){this.prepareReader(a),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},b.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(a,b,c){"use strict";function d(a,b){this.options=a,this.loadOptions=b}var e=a("./reader/readerFor"),f=a("./utils"),g=a("./compressedObject"),h=a("./crc32"),i=a("./utf8"),j=a("./compressions"),k=a("./support"),l=0,m=3,n=function(a){for(var b in j)if(j.hasOwnProperty(b)&&j[b].magic===a)return j[b];return null};d.prototype={isEncrypted:function(){return 1===(1&this.bitFlag)},useUTF8:function(){return 2048===(2048&this.bitFlag)},readLocalPart:function(a){var b,c;if(a.skip(22),this.fileNameLength=a.readInt(2),c=a.readInt(2),this.fileName=a.readData(this.fileNameLength),a.skip(c),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(b=n(this.compressionMethod),null===b)throw new Error("Corrupted zip : compression "+f.pretty(this.compressionMethod)+" unknown (inner file : "+f.transformTo("string",this.fileName)+")");this.decompressed=new g(this.compressedSize,this.uncompressedSize,this.crc32,b,a.readData(this.compressedSize))},readCentralPart:function(a){this.versionMadeBy=a.readInt(2),a.skip(2),this.bitFlag=a.readInt(2),this.compressionMethod=a.readString(2),this.date=a.readDate(),this.crc32=a.readInt(4),this.compressedSize=a.readInt(4),this.uncompressedSize=a.readInt(4);var b=a.readInt(2);if(this.extraFieldsLength=a.readInt(2),this.fileCommentLength=a.readInt(2),this.diskNumberStart=a.readInt(2),this.internalFileAttributes=a.readInt(2),this.externalFileAttributes=a.readInt(4),this.localHeaderOffset=a.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");a.skip(b),this.readExtraFields(a),this.parseZIP64ExtraField(a),this.fileComment=a.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var a=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),a===l&&(this.dosPermissions=63&this.externalFileAttributes),a===m&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(a){if(this.extraFields[1]){var b=e(this.extraFields[1].value);this.uncompressedSize===f.MAX_VALUE_32BITS&&(this.uncompressedSize=b.readInt(8)),this.compressedSize===f.MAX_VALUE_32BITS&&(this.compressedSize=b.readInt(8)),this.localHeaderOffset===f.MAX_VALUE_32BITS&&(this.localHeaderOffset=b.readInt(8)),this.diskNumberStart===f.MAX_VALUE_32BITS&&(this.diskNumberStart=b.readInt(4))}},readExtraFields:function(a){var b,c,d,e=a.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});a.index<e;)b=a.readInt(2),c=a.readInt(2),d=a.readData(c),this.extraFields[b]={id:b,length:c,value:d}},handleUTF8:function(){var a=k.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=i.utf8decode(this.fileName),this.fileCommentStr=i.utf8decode(this.fileComment);else{var b=this.findExtraFieldUnicodePath();if(null!==b)this.fileNameStr=b;else{var c=f.transformTo(a,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(c)}var d=this.findExtraFieldUnicodeComment();if(null!==d)this.fileCommentStr=d;else{var e=f.transformTo(a,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(e)}}},findExtraFieldUnicodePath:function(){var a=this.extraFields[28789];if(a){var b=e(a.value);return 1!==b.readInt(1)?null:h(this.fileName)!==b.readInt(4)?null:i.utf8decode(b.readData(a.length-5))}return null},findExtraFieldUnicodeComment:function(){var a=this.extraFields[25461];if(a){var b=e(a.value);return 1!==b.readInt(1)?null:h(this.fileComment)!==b.readInt(4)?null:i.utf8decode(b.readData(a.length-5))}return null}},b.exports=d},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(a,b,c){"use strict";var d=a("./stream/StreamHelper"),e=a("./stream/DataWorker"),f=a("./utf8"),g=a("./compressedObject"),h=a("./stream/GenericWorker"),i=function(a,b,c){this.name=a,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this.unixPermissions=c.unixPermissions,this.dosPermissions=c.dosPermissions,this._data=b,this._dataBinary=c.binary,this.options={compression:c.compression,compressionOptions:c.compressionOptions}};i.prototype={internalStream:function(a){var b=null,c="string";try{if(!a)throw new Error("No output type specified.");c=a.toLowerCase();var e="string"===c||"text"===c;"binarystring"!==c&&"text"!==c||(c="string"),b=this._decompressWorker();var g=!this._dataBinary;g&&!e&&(b=b.pipe(new f.Utf8EncodeWorker)),!g&&e&&(b=b.pipe(new f.Utf8DecodeWorker))}catch(i){b=new h("error"),b.error(i)}return new d(b,c,"")},async:function(a,b){return this.internalStream(a).accumulate(b)},nodeStream:function(a,b){return this.internalStream(a||"nodebuffer").toNodejsStream(b)},_compressWorker:function(a,b){if(this._data instanceof g&&this._data.compression.magic===a.magic)return this._data.getCompressedWorker();var c=this._decompressWorker();return this._dataBinary||(c=c.pipe(new f.Utf8EncodeWorker)),g.createWorkerFrom(c,a,b)},_decompressWorker:function(){return this._data instanceof g?this._data.getContentWorker():this._data instanceof h?this._data:new e(this._data)}};for(var j=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],k=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},l=0;l<j.length;l++)i.prototype[j[l]]=k;b.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(a,b,c){a("../modules/web.immediate"),b.exports=a("../modules/_core").setImmediate},{"../modules/_core":40,"../modules/web.immediate":56}],37:[function(a,b,c){b.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},{}],38:[function(a,b,c){var d=a("./_is-object");b.exports=function(a){if(!d(a))throw TypeError(a+" is not an object!");return a}},{"./_is-object":51}],39:[function(a,b,c){var d={}.toString;b.exports=function(a){return d.call(a).slice(8,-1)}},{}],40:[function(a,b,c){var d=b.exports={version:"2.3.0"};"number"==typeof __e&&(__e=d)},{}],41:[function(a,b,c){var d=a("./_a-function");b.exports=function(a,b,c){if(d(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}}},{"./_a-function":37}],42:[function(a,b,c){b.exports=!a("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":45}],43:[function(a,b,c){var d=a("./_is-object"),e=a("./_global").document,f=d(e)&&d(e.createElement);b.exports=function(a){return f?e.createElement(a):{}}},{"./_global":46,"./_is-object":51}],44:[function(a,b,c){var d=a("./_global"),e=a("./_core"),f=a("./_ctx"),g=a("./_hide"),h="prototype",i=function(a,b,c){var j,k,l,m=a&i.F,n=a&i.G,o=a&i.S,p=a&i.P,q=a&i.B,r=a&i.W,s=n?e:e[b]||(e[b]={}),t=s[h],u=n?d:o?d[b]:(d[b]||{})[h];n&&(c=b);for(j in c)k=!m&&u&&void 0!==u[j],k&&j in s||(l=k?u[j]:c[j],s[j]=n&&"function"!=typeof u[j]?c[j]:q&&k?f(l,d):r&&u[j]==l?function(a){var b=function(b,c,d){if(this instanceof a){switch(arguments.length){case 0:return new a;case 1:return new a(b);case 2:return new a(b,c)}return new a(b,c,d)}return a.apply(this,arguments)};return b[h]=a[h],b}(l):p&&"function"==typeof l?f(Function.call,l):l,p&&((s.virtual||(s.virtual={}))[j]=l,a&i.R&&t&&!t[j]&&g(t,j,l)))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,i.U=64,i.R=128,b.exports=i},{"./_core":40,"./_ctx":41,"./_global":46,"./_hide":47}],45:[function(a,b,c){b.exports=function(a){try{return!!a()}catch(b){return!0}}},{}],46:[function(a,b,c){var d=b.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=d)},{}],47:[function(a,b,c){var d=a("./_object-dp"),e=a("./_property-desc");b.exports=a("./_descriptors")?function(a,b,c){return d.f(a,b,e(1,c))}:function(a,b,c){return a[b]=c,a}},{"./_descriptors":42,"./_object-dp":52,"./_property-desc":53}],48:[function(a,b,c){b.exports=a("./_global").document&&document.documentElement},{"./_global":46}],49:[function(a,b,c){b.exports=!a("./_descriptors")&&!a("./_fails")(function(){return 7!=Object.defineProperty(a("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":42,"./_dom-create":43,"./_fails":45}],50:[function(a,b,c){b.exports=function(a,b,c){var d=void 0===c;switch(b.length){case 0:return d?a():a.call(c);case 1:return d?a(b[0]):a.call(c,b[0]);case 2:return d?a(b[0],b[1]):a.call(c,b[0],b[1]);case 3:return d?a(b[0],b[1],b[2]):a.call(c,b[0],b[1],b[2]);case 4:return d?a(b[0],b[1],b[2],b[3]):a.call(c,b[0],b[1],b[2],b[3])}return a.apply(c,b)}},{}],51:[function(a,b,c){b.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},{}],52:[function(a,b,c){var d=a("./_an-object"),e=a("./_ie8-dom-define"),f=a("./_to-primitive"),g=Object.defineProperty;c.f=a("./_descriptors")?Object.defineProperty:function(a,b,c){if(d(a),b=f(b,!0),d(c),e)try{return g(a,b,c)}catch(h){}if("get"in c||"set"in c)throw TypeError("Accessors not supported!");return"value"in c&&(a[b]=c.value),a}},{"./_an-object":38,"./_descriptors":42,"./_ie8-dom-define":49,"./_to-primitive":55}],53:[function(a,b,c){b.exports=function(a,b){return{enumerable:!(1&a),configurable:!(2&a),writable:!(4&a),value:b}}},{}],54:[function(a,b,c){var d,e,f,g=a("./_ctx"),h=a("./_invoke"),i=a("./_html"),j=a("./_dom-create"),k=a("./_global"),l=k.process,m=k.setImmediate,n=k.clearImmediate,o=k.MessageChannel,p=0,q={},r="onreadystatechange",s=function(){var a=+this;if(q.hasOwnProperty(a)){var b=q[a];delete q[a],b()}},t=function(a){s.call(a.data)};m&&n||(m=function(a){for(var b=[],c=1;arguments.length>c;)b.push(arguments[c++]);return q[++p]=function(){h("function"==typeof a?a:Function(a),b)},d(p),p},n=function(a){delete q[a]},"process"==a("./_cof")(l)?d=function(a){l.nextTick(g(s,a,1))}:o?(e=new o,f=e.port2,e.port1.onmessage=t,d=g(f.postMessage,f,1)):k.addEventListener&&"function"==typeof postMessage&&!k.importScripts?(d=function(a){k.postMessage(a+"","*")},k.addEventListener("message",t,!1)):d=r in j("script")?function(a){i.appendChild(j("script"))[r]=function(){i.removeChild(this),s.call(a)}}:function(a){setTimeout(g(s,a,1),0)}),b.exports={set:m,clear:n}},{"./_cof":39,"./_ctx":41,"./_dom-create":43,"./_global":46,"./_html":48,"./_invoke":50}],55:[function(a,b,c){var d=a("./_is-object");b.exports=function(a,b){if(!d(a))return a;var c,e;if(b&&"function"==typeof(c=a.toString)&&!d(e=c.call(a)))return e;if("function"==typeof(c=a.valueOf)&&!d(e=c.call(a)))return e;if(!b&&"function"==typeof(c=a.toString)&&!d(e=c.call(a)))return e;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":51}],56:[function(a,b,c){var d=a("./_export"),e=a("./_task");d(d.G+d.B,{setImmediate:e.set,clearImmediate:e.clear})},{"./_export":44,"./_task":54}],57:[function(a,b,c){(function(a){"use strict";function c(){k=!0;for(var a,b,c=l.length;c;){for(b=l,l=[],a=-1;++a<c;)b[a]();c=l.length}k=!1}function d(a){1!==l.push(a)||k||e()}var e,f=a.MutationObserver||a.WebKitMutationObserver;if(f){var g=0,h=new f(c),i=a.document.createTextNode("");h.observe(i,{characterData:!0}),e=function(){i.data=g=++g%2}}else if(a.setImmediate||"undefined"==typeof a.MessageChannel)e="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var b=a.document.createElement("script");b.onreadystatechange=function(){c(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},a.document.documentElement.appendChild(b)}:function(){setTimeout(c,0)};else{var j=new a.MessageChannel;j.port1.onmessage=c,e=function(){j.port2.postMessage(0)}}var k,l=[];b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],58:[function(a,b,c){"use strict";function d(){}function e(a){if("function"!=typeof a)throw new TypeError("resolver must be a function");this.state=s,this.queue=[],this.outcome=void 0,a!==d&&i(this,a)}function f(a,b,c){this.promise=a,"function"==typeof b&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),"function"==typeof c&&(this.onRejected=c,this.callRejected=this.otherCallRejected)}function g(a,b,c){o(function(){var d;try{d=b(c)}catch(e){return p.reject(a,e)}d===a?p.reject(a,new TypeError("Cannot resolve promise with itself")):p.resolve(a,d)})}function h(a){var b=a&&a.then;if(a&&("object"==typeof a||"function"==typeof a)&&"function"==typeof b)return function(){b.apply(a,arguments)}}function i(a,b){function c(b){f||(f=!0,p.reject(a,b))}function d(b){f||(f=!0,p.resolve(a,b))}function e(){b(d,c)}var f=!1,g=j(e);"error"===g.status&&c(g.value)}function j(a,b){var c={};try{c.value=a(b),c.status="success"}catch(d){c.status="error",c.value=d}return c}function k(a){return a instanceof this?a:p.resolve(new this(d),a)}function l(a){var b=new this(d);return p.reject(b,a)}function m(a){function b(a,b){function d(a){g[b]=a,++h!==e||f||(f=!0,p.resolve(j,g))}c.resolve(a).then(d,function(a){f||(f=!0,p.reject(j,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=new Array(e),h=0,i=-1,j=new this(d);++i<e;)b(a[i],i);return j}function n(a){function b(a){c.resolve(a).then(function(a){f||(f=!0,p.resolve(h,a))},function(a){f||(f=!0,p.reject(h,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=-1,h=new this(d);++g<e;)b(a[g]);return h}var o=a("immediate"),p={},q=["REJECTED"],r=["FULFILLED"],s=["PENDING"];b.exports=e,e.prototype["catch"]=function(a){return this.then(null,a)},e.prototype.then=function(a,b){if("function"!=typeof a&&this.state===r||"function"!=typeof b&&this.state===q)return this;var c=new this.constructor(d);if(this.state!==s){var e=this.state===r?a:b;g(c,e,this.outcome)}else this.queue.push(new f(c,a,b));return c},f.prototype.callFulfilled=function(a){p.resolve(this.promise,a)},f.prototype.otherCallFulfilled=function(a){g(this.promise,this.onFulfilled,a)},f.prototype.callRejected=function(a){p.reject(this.promise,a)},f.prototype.otherCallRejected=function(a){g(this.promise,this.onRejected,a)},p.resolve=function(a,b){var c=j(h,b);if("error"===c.status)return p.reject(a,c.value);var d=c.value;if(d)i(a,d);else{a.state=r,a.outcome=b;for(var e=-1,f=a.queue.length;++e<f;)a.queue[e].callFulfilled(b)}return a},p.reject=function(a,b){a.state=q,a.outcome=b;for(var c=-1,d=a.queue.length;++c<d;)a.queue[c].callRejected(b);return a},e.resolve=k,e.reject=l,e.all=m,e.race=n},{immediate:57}],59:[function(a,b,c){"use strict";var d=a("./lib/utils/common").assign,e=a("./lib/deflate"),f=a("./lib/inflate"),g=a("./lib/zlib/constants"),h={};d(h,e,f,g),b.exports=h},{"./lib/deflate":60,"./lib/inflate":61,"./lib/utils/common":62,"./lib/zlib/constants":65}],60:[function(a,b,c){"use strict";function d(a){if(!(this instanceof d))return new d(a);this.options=i.assign({level:s,method:u,chunkSize:16384,windowBits:15,memLevel:8,strategy:t,to:""},a||{});var b=this.options;b.raw&&b.windowBits>0?b.windowBits=-b.windowBits:b.gzip&&b.windowBits>0&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var c=h.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(c!==p)throw new Error(k[c]);if(b.header&&h.deflateSetHeader(this.strm,b.header),b.dictionary){var e;if(e="string"==typeof b.dictionary?j.string2buf(b.dictionary):"[object ArrayBuffer]"===m.call(b.dictionary)?new Uint8Array(b.dictionary):b.dictionary,c=h.deflateSetDictionary(this.strm,e),c!==p)throw new Error(k[c]);this._dict_set=!0}}function e(a,b){var c=new d(b);if(c.push(a,!0),c.err)throw c.msg||k[c.err];return c.result}function f(a,b){return b=b||{},b.raw=!0,e(a,b)}function g(a,b){return b=b||{},b.gzip=!0,e(a,b)}var h=a("./zlib/deflate"),i=a("./utils/common"),j=a("./utils/strings"),k=a("./zlib/messages"),l=a("./zlib/zstream"),m=Object.prototype.toString,n=0,o=4,p=0,q=1,r=2,s=-1,t=0,u=8;d.prototype.push=function(a,b){var c,d,e=this.strm,f=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?o:n,"string"==typeof a?e.input=j.string2buf(a):"[object ArrayBuffer]"===m.call(a)?e.input=new Uint8Array(a):e.input=a,e.next_in=0,e.avail_in=e.input.length;do{if(0===e.avail_out&&(e.output=new i.Buf8(f),e.next_out=0,e.avail_out=f),c=h.deflate(e,d),c!==q&&c!==p)return this.onEnd(c),this.ended=!0,!1;0!==e.avail_out&&(0!==e.avail_in||d!==o&&d!==r)||("string"===this.options.to?this.onData(j.buf2binstring(i.shrinkBuf(e.output,e.next_out))):this.onData(i.shrinkBuf(e.output,e.next_out)))}while((e.avail_in>0||0===e.avail_out)&&c!==q);return d===o?(c=h.deflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===p):d!==r||(this.onEnd(p),e.avail_out=0,!0)},d.prototype.onData=function(a){this.chunks.push(a)},d.prototype.onEnd=function(a){a===p&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Deflate=d,c.deflate=e,c.deflateRaw=f,c.gzip=g},{"./utils/common":62,"./utils/strings":63,"./zlib/deflate":67,"./zlib/messages":72,"./zlib/zstream":74}],61:[function(a,b,c){"use strict";function d(a){if(!(this instanceof d))return new d(a);this.options=h.assign({chunkSize:16384,windowBits:0,to:""},a||{});var b=this.options;b.raw&&b.windowBits>=0&&b.windowBits<16&&(b.windowBits=-b.windowBits,0===b.windowBits&&(b.windowBits=-15)),!(b.windowBits>=0&&b.windowBits<16)||a&&a.windowBits||(b.windowBits+=32),b.windowBits>15&&b.windowBits<48&&0===(15&b.windowBits)&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var c=g.inflateInit2(this.strm,b.windowBits);if(c!==j.Z_OK)throw new Error(k[c]);this.header=new m,g.inflateGetHeader(this.strm,this.header)}function e(a,b){var c=new d(b);if(c.push(a,!0),c.err)throw c.msg||k[c.err];return c.result}function f(a,b){return b=b||{},b.raw=!0,e(a,b)}var g=a("./zlib/inflate"),h=a("./utils/common"),i=a("./utils/strings"),j=a("./zlib/constants"),k=a("./zlib/messages"),l=a("./zlib/zstream"),m=a("./zlib/gzheader"),n=Object.prototype.toString;d.prototype.push=function(a,b){var c,d,e,f,k,l,m=this.strm,o=this.options.chunkSize,p=this.options.dictionary,q=!1;if(this.ended)return!1;d=b===~~b?b:b===!0?j.Z_FINISH:j.Z_NO_FLUSH,"string"==typeof a?m.input=i.binstring2buf(a):"[object ArrayBuffer]"===n.call(a)?m.input=new Uint8Array(a):m.input=a,m.next_in=0,m.avail_in=m.input.length;do{if(0===m.avail_out&&(m.output=new h.Buf8(o),m.next_out=0,m.avail_out=o),c=g.inflate(m,j.Z_NO_FLUSH),c===j.Z_NEED_DICT&&p&&(l="string"==typeof p?i.string2buf(p):"[object ArrayBuffer]"===n.call(p)?new Uint8Array(p):p,c=g.inflateSetDictionary(this.strm,l)),c===j.Z_BUF_ERROR&&q===!0&&(c=j.Z_OK,q=!1),c!==j.Z_STREAM_END&&c!==j.Z_OK)return this.onEnd(c),this.ended=!0,!1;m.next_out&&(0!==m.avail_out&&c!==j.Z_STREAM_END&&(0!==m.avail_in||d!==j.Z_FINISH&&d!==j.Z_SYNC_FLUSH)||("string"===this.options.to?(e=i.utf8border(m.output,m.next_out),f=m.next_out-e,k=i.buf2string(m.output,e),m.next_out=f,m.avail_out=o-f,f&&h.arraySet(m.output,m.output,e,f,0),this.onData(k)):this.onData(h.shrinkBuf(m.output,m.next_out)))),0===m.avail_in&&0===m.avail_out&&(q=!0)}while((m.avail_in>0||0===m.avail_out)&&c!==j.Z_STREAM_END);return c===j.Z_STREAM_END&&(d=j.Z_FINISH),d===j.Z_FINISH?(c=g.inflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===j.Z_OK):d!==j.Z_SYNC_FLUSH||(this.onEnd(j.Z_OK),m.avail_out=0,!0)},d.prototype.onData=function(a){this.chunks.push(a)},d.prototype.onEnd=function(a){a===j.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Inflate=d,c.inflate=e,c.inflateRaw=f,c.ungzip=e},{"./utils/common":62,"./utils/strings":63,"./zlib/constants":65,"./zlib/gzheader":68,"./zlib/inflate":70,"./zlib/messages":72,"./zlib/zstream":74}],62:[function(a,b,c){"use strict";var d="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;c.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!=typeof c)throw new TypeError(c+"must be non-object");for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])}}return a},c.shrinkBuf=function(a,b){return a.length===b?a:a.subarray?a.subarray(0,b):(a.length=b,a)};var e={arraySet:function(a,b,c,d,e){if(b.subarray&&a.subarray)return void a.set(b.subarray(c,c+d),e);for(var f=0;f<d;f++)a[e+f]=b[c+f]},flattenChunks:function(a){var b,c,d,e,f,g;for(d=0,b=0,c=a.length;b<c;b++)d+=a[b].length;for(g=new Uint8Array(d),e=0,b=0,c=a.length;b<c;b++)f=a[b],g.set(f,e),e+=f.length;return g}},f={arraySet:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},flattenChunks:function(a){return[].concat.apply([],a)}};c.setTyped=function(a){a?(c.Buf8=Uint8Array,c.Buf16=Uint16Array,c.Buf32=Int32Array,c.assign(c,e)):(c.Buf8=Array,c.Buf16=Array,c.Buf32=Array,c.assign(c,f))},c.setTyped(d)},{}],63:[function(a,b,c){"use strict";function d(a,b){if(b<65537&&(a.subarray&&g||!a.subarray&&f))return String.fromCharCode.apply(null,e.shrinkBuf(a,b));for(var c="",d=0;d<b;d++)c+=String.fromCharCode(a[d]);return c}var e=a("./common"),f=!0,g=!0;try{String.fromCharCode.apply(null,[0])}catch(h){f=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(h){g=!1}for(var i=new e.Buf8(256),j=0;j<256;j++)i[j]=j>=252?6:j>=248?5:j>=240?4:j>=224?3:j>=192?2:1;i[254]=i[254]=1,c.string2buf=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;f<h;f++)c=a.charCodeAt(f),55296===(64512&c)&&f+1<h&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),i+=c<128?1:c<2048?2:c<65536?3:4;for(b=new e.Buf8(i),g=0,f=0;g<i;f++)c=a.charCodeAt(f),55296===(64512&c)&&f+1<h&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),c<128?b[g++]=c:c<2048?(b[g++]=192|c>>>6,b[g++]=128|63&c):c<65536?(b[g++]=224|c>>>12,b[g++]=128|c>>>6&63,b[g++]=128|63&c):(b[g++]=240|c>>>18,b[g++]=128|c>>>12&63,b[g++]=128|c>>>6&63,b[g++]=128|63&c);return b},c.buf2binstring=function(a){return d(a,a.length)},c.binstring2buf=function(a){for(var b=new e.Buf8(a.length),c=0,d=b.length;c<d;c++)b[c]=a.charCodeAt(c);return b},c.buf2string=function(a,b){var c,e,f,g,h=b||a.length,j=new Array(2*h);for(e=0,c=0;c<h;)if(f=a[c++],f<128)j[e++]=f;else if(g=i[f],g>4)j[e++]=65533,c+=g-1;else{for(f&=2===g?31:3===g?15:7;g>1&&c<h;)f=f<<6|63&a[c++],g--;g>1?j[e++]=65533:f<65536?j[e++]=f:(f-=65536,j[e++]=55296|f>>10&1023,j[e++]=56320|1023&f)}return d(j,e)},c.utf8border=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return c<0?b:0===c?b:c+i[a[c]]>b?c:b}},{"./common":62}],64:[function(a,b,c){"use strict";function d(a,b,c,d){for(var e=65535&a|0,f=a>>>16&65535|0,g=0;0!==c;){g=c>2e3?2e3:c,c-=g;do e=e+b[d++]|0,f=f+e|0;while(--g);e%=65521,f%=65521}return e|f<<16|0;
}b.exports=d},{}],65:[function(a,b,c){"use strict";b.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],66:[function(a,b,c){"use strict";function d(){for(var a,b=[],c=0;c<256;c++){a=c;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;b[c]=a}return b}function e(a,b,c,d){var e=f,g=d+c;a^=-1;for(var h=d;h<g;h++)a=a>>>8^e[255&(a^b[h])];return a^-1}var f=d();b.exports=e},{}],67:[function(a,b,c){"use strict";function d(a,b){return a.msg=I[b],b}function e(a){return(a<<1)-(a>4?9:0)}function f(a){for(var b=a.length;--b>=0;)a[b]=0}function g(a){var b=a.state,c=b.pending;c>a.avail_out&&(c=a.avail_out),0!==c&&(E.arraySet(a.output,b.pending_buf,b.pending_out,c,a.next_out),a.next_out+=c,b.pending_out+=c,a.total_out+=c,a.avail_out-=c,b.pending-=c,0===b.pending&&(b.pending_out=0))}function h(a,b){F._tr_flush_block(a,a.block_start>=0?a.block_start:-1,a.strstart-a.block_start,b),a.block_start=a.strstart,g(a.strm)}function i(a,b){a.pending_buf[a.pending++]=b}function j(a,b){a.pending_buf[a.pending++]=b>>>8&255,a.pending_buf[a.pending++]=255&b}function k(a,b,c,d){var e=a.avail_in;return e>d&&(e=d),0===e?0:(a.avail_in-=e,E.arraySet(b,a.input,a.next_in,e,c),1===a.state.wrap?a.adler=G(a.adler,b,e,c):2===a.state.wrap&&(a.adler=H(a.adler,b,e,c)),a.next_in+=e,a.total_in+=e,e)}function l(a,b){var c,d,e=a.max_chain_length,f=a.strstart,g=a.prev_length,h=a.nice_match,i=a.strstart>a.w_size-la?a.strstart-(a.w_size-la):0,j=a.window,k=a.w_mask,l=a.prev,m=a.strstart+ka,n=j[f+g-1],o=j[f+g];a.prev_length>=a.good_match&&(e>>=2),h>a.lookahead&&(h=a.lookahead);do if(c=b,j[c+g]===o&&j[c+g-1]===n&&j[c]===j[f]&&j[++c]===j[f+1]){f+=2,c++;do;while(j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&f<m);if(d=ka-(m-f),f=m-ka,d>g){if(a.match_start=b,g=d,d>=h)break;n=j[f+g-1],o=j[f+g]}}while((b=l[b&k])>i&&0!==--e);return g<=a.lookahead?g:a.lookahead}function m(a){var b,c,d,e,f,g=a.w_size;do{if(e=a.window_size-a.lookahead-a.strstart,a.strstart>=g+(g-la)){E.arraySet(a.window,a.window,g,g,0),a.match_start-=g,a.strstart-=g,a.block_start-=g,c=a.hash_size,b=c;do d=a.head[--b],a.head[b]=d>=g?d-g:0;while(--c);c=g,b=c;do d=a.prev[--b],a.prev[b]=d>=g?d-g:0;while(--c);e+=g}if(0===a.strm.avail_in)break;if(c=k(a.strm,a.window,a.strstart+a.lookahead,e),a.lookahead+=c,a.lookahead+a.insert>=ja)for(f=a.strstart-a.insert,a.ins_h=a.window[f],a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+1])&a.hash_mask;a.insert&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+ja-1])&a.hash_mask,a.prev[f&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=f,f++,a.insert--,!(a.lookahead+a.insert<ja)););}while(a.lookahead<la&&0!==a.strm.avail_in)}function n(a,b){var c=65535;for(c>a.pending_buf_size-5&&(c=a.pending_buf_size-5);;){if(a.lookahead<=1){if(m(a),0===a.lookahead&&b===J)return ua;if(0===a.lookahead)break}a.strstart+=a.lookahead,a.lookahead=0;var d=a.block_start+c;if((0===a.strstart||a.strstart>=d)&&(a.lookahead=a.strstart-d,a.strstart=d,h(a,!1),0===a.strm.avail_out))return ua;if(a.strstart-a.block_start>=a.w_size-la&&(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=0,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.strstart>a.block_start&&(h(a,!1),0===a.strm.avail_out)?ua:ua}function o(a,b){for(var c,d;;){if(a.lookahead<la){if(m(a),a.lookahead<la&&b===J)return ua;if(0===a.lookahead)break}if(c=0,a.lookahead>=ja&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+ja-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),0!==c&&a.strstart-c<=a.w_size-la&&(a.match_length=l(a,c)),a.match_length>=ja)if(d=F._tr_tally(a,a.strstart-a.match_start,a.match_length-ja),a.lookahead-=a.match_length,a.match_length<=a.max_lazy_match&&a.lookahead>=ja){a.match_length--;do a.strstart++,a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+ja-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart;while(0!==--a.match_length);a.strstart++}else a.strstart+=a.match_length,a.match_length=0,a.ins_h=a.window[a.strstart],a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+1])&a.hash_mask;else d=F._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++;if(d&&(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=a.strstart<ja-1?a.strstart:ja-1,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?ua:va}function p(a,b){for(var c,d,e;;){if(a.lookahead<la){if(m(a),a.lookahead<la&&b===J)return ua;if(0===a.lookahead)break}if(c=0,a.lookahead>=ja&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+ja-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),a.prev_length=a.match_length,a.prev_match=a.match_start,a.match_length=ja-1,0!==c&&a.prev_length<a.max_lazy_match&&a.strstart-c<=a.w_size-la&&(a.match_length=l(a,c),a.match_length<=5&&(a.strategy===U||a.match_length===ja&&a.strstart-a.match_start>4096)&&(a.match_length=ja-1)),a.prev_length>=ja&&a.match_length<=a.prev_length){e=a.strstart+a.lookahead-ja,d=F._tr_tally(a,a.strstart-1-a.prev_match,a.prev_length-ja),a.lookahead-=a.prev_length-1,a.prev_length-=2;do++a.strstart<=e&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+ja-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart);while(0!==--a.prev_length);if(a.match_available=0,a.match_length=ja-1,a.strstart++,d&&(h(a,!1),0===a.strm.avail_out))return ua}else if(a.match_available){if(d=F._tr_tally(a,0,a.window[a.strstart-1]),d&&h(a,!1),a.strstart++,a.lookahead--,0===a.strm.avail_out)return ua}else a.match_available=1,a.strstart++,a.lookahead--}return a.match_available&&(d=F._tr_tally(a,0,a.window[a.strstart-1]),a.match_available=0),a.insert=a.strstart<ja-1?a.strstart:ja-1,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?ua:va}function q(a,b){for(var c,d,e,f,g=a.window;;){if(a.lookahead<=ka){if(m(a),a.lookahead<=ka&&b===J)return ua;if(0===a.lookahead)break}if(a.match_length=0,a.lookahead>=ja&&a.strstart>0&&(e=a.strstart-1,d=g[e],d===g[++e]&&d===g[++e]&&d===g[++e])){f=a.strstart+ka;do;while(d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&e<f);a.match_length=ka-(f-e),a.match_length>a.lookahead&&(a.match_length=a.lookahead)}if(a.match_length>=ja?(c=F._tr_tally(a,1,a.match_length-ja),a.lookahead-=a.match_length,a.strstart+=a.match_length,a.match_length=0):(c=F._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++),c&&(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=0,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?ua:va}function r(a,b){for(var c;;){if(0===a.lookahead&&(m(a),0===a.lookahead)){if(b===J)return ua;break}if(a.match_length=0,c=F._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++,c&&(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=0,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?ua:va}function s(a,b,c,d,e){this.good_length=a,this.max_lazy=b,this.nice_length=c,this.max_chain=d,this.func=e}function t(a){a.window_size=2*a.w_size,f(a.head),a.max_lazy_match=D[a.level].max_lazy,a.good_match=D[a.level].good_length,a.nice_match=D[a.level].nice_length,a.max_chain_length=D[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=ja-1,a.match_available=0,a.ins_h=0}function u(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=$,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new E.Buf16(2*ha),this.dyn_dtree=new E.Buf16(2*(2*fa+1)),this.bl_tree=new E.Buf16(2*(2*ga+1)),f(this.dyn_ltree),f(this.dyn_dtree),f(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new E.Buf16(ia+1),this.heap=new E.Buf16(2*ea+1),f(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new E.Buf16(2*ea+1),f(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function v(a){var b;return a&&a.state?(a.total_in=a.total_out=0,a.data_type=Z,b=a.state,b.pending=0,b.pending_out=0,b.wrap<0&&(b.wrap=-b.wrap),b.status=b.wrap?na:sa,a.adler=2===b.wrap?0:1,b.last_flush=J,F._tr_init(b),O):d(a,Q)}function w(a){var b=v(a);return b===O&&t(a.state),b}function x(a,b){return a&&a.state?2!==a.state.wrap?Q:(a.state.gzhead=b,O):Q}function y(a,b,c,e,f,g){if(!a)return Q;var h=1;if(b===T&&(b=6),e<0?(h=0,e=-e):e>15&&(h=2,e-=16),f<1||f>_||c!==$||e<8||e>15||b<0||b>9||g<0||g>X)return d(a,Q);8===e&&(e=9);var i=new u;return a.state=i,i.strm=a,i.wrap=h,i.gzhead=null,i.w_bits=e,i.w_size=1<<i.w_bits,i.w_mask=i.w_size-1,i.hash_bits=f+7,i.hash_size=1<<i.hash_bits,i.hash_mask=i.hash_size-1,i.hash_shift=~~((i.hash_bits+ja-1)/ja),i.window=new E.Buf8(2*i.w_size),i.head=new E.Buf16(i.hash_size),i.prev=new E.Buf16(i.w_size),i.lit_bufsize=1<<f+6,i.pending_buf_size=4*i.lit_bufsize,i.pending_buf=new E.Buf8(i.pending_buf_size),i.d_buf=1*i.lit_bufsize,i.l_buf=3*i.lit_bufsize,i.level=b,i.strategy=g,i.method=c,w(a)}function z(a,b){return y(a,b,$,aa,ba,Y)}function A(a,b){var c,h,k,l;if(!a||!a.state||b>N||b<0)return a?d(a,Q):Q;if(h=a.state,!a.output||!a.input&&0!==a.avail_in||h.status===ta&&b!==M)return d(a,0===a.avail_out?S:Q);if(h.strm=a,c=h.last_flush,h.last_flush=b,h.status===na)if(2===h.wrap)a.adler=0,i(h,31),i(h,139),i(h,8),h.gzhead?(i(h,(h.gzhead.text?1:0)+(h.gzhead.hcrc?2:0)+(h.gzhead.extra?4:0)+(h.gzhead.name?8:0)+(h.gzhead.comment?16:0)),i(h,255&h.gzhead.time),i(h,h.gzhead.time>>8&255),i(h,h.gzhead.time>>16&255),i(h,h.gzhead.time>>24&255),i(h,9===h.level?2:h.strategy>=V||h.level<2?4:0),i(h,255&h.gzhead.os),h.gzhead.extra&&h.gzhead.extra.length&&(i(h,255&h.gzhead.extra.length),i(h,h.gzhead.extra.length>>8&255)),h.gzhead.hcrc&&(a.adler=H(a.adler,h.pending_buf,h.pending,0)),h.gzindex=0,h.status=oa):(i(h,0),i(h,0),i(h,0),i(h,0),i(h,0),i(h,9===h.level?2:h.strategy>=V||h.level<2?4:0),i(h,ya),h.status=sa);else{var m=$+(h.w_bits-8<<4)<<8,n=-1;n=h.strategy>=V||h.level<2?0:h.level<6?1:6===h.level?2:3,m|=n<<6,0!==h.strstart&&(m|=ma),m+=31-m%31,h.status=sa,j(h,m),0!==h.strstart&&(j(h,a.adler>>>16),j(h,65535&a.adler)),a.adler=1}if(h.status===oa)if(h.gzhead.extra){for(k=h.pending;h.gzindex<(65535&h.gzhead.extra.length)&&(h.pending!==h.pending_buf_size||(h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending!==h.pending_buf_size));)i(h,255&h.gzhead.extra[h.gzindex]),h.gzindex++;h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),h.gzindex===h.gzhead.extra.length&&(h.gzindex=0,h.status=pa)}else h.status=pa;if(h.status===pa)if(h.gzhead.name){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex<h.gzhead.name.length?255&h.gzhead.name.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.gzindex=0,h.status=qa)}else h.status=qa;if(h.status===qa)if(h.gzhead.comment){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex<h.gzhead.comment.length?255&h.gzhead.comment.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.status=ra)}else h.status=ra;if(h.status===ra&&(h.gzhead.hcrc?(h.pending+2>h.pending_buf_size&&g(a),h.pending+2<=h.pending_buf_size&&(i(h,255&a.adler),i(h,a.adler>>8&255),a.adler=0,h.status=sa)):h.status=sa),0!==h.pending){if(g(a),0===a.avail_out)return h.last_flush=-1,O}else if(0===a.avail_in&&e(b)<=e(c)&&b!==M)return d(a,S);if(h.status===ta&&0!==a.avail_in)return d(a,S);if(0!==a.avail_in||0!==h.lookahead||b!==J&&h.status!==ta){var o=h.strategy===V?r(h,b):h.strategy===W?q(h,b):D[h.level].func(h,b);if(o!==wa&&o!==xa||(h.status=ta),o===ua||o===wa)return 0===a.avail_out&&(h.last_flush=-1),O;if(o===va&&(b===K?F._tr_align(h):b!==N&&(F._tr_stored_block(h,0,0,!1),b===L&&(f(h.head),0===h.lookahead&&(h.strstart=0,h.block_start=0,h.insert=0))),g(a),0===a.avail_out))return h.last_flush=-1,O}return b!==M?O:h.wrap<=0?P:(2===h.wrap?(i(h,255&a.adler),i(h,a.adler>>8&255),i(h,a.adler>>16&255),i(h,a.adler>>24&255),i(h,255&a.total_in),i(h,a.total_in>>8&255),i(h,a.total_in>>16&255),i(h,a.total_in>>24&255)):(j(h,a.adler>>>16),j(h,65535&a.adler)),g(a),h.wrap>0&&(h.wrap=-h.wrap),0!==h.pending?O:P)}function B(a){var b;return a&&a.state?(b=a.state.status,b!==na&&b!==oa&&b!==pa&&b!==qa&&b!==ra&&b!==sa&&b!==ta?d(a,Q):(a.state=null,b===sa?d(a,R):O)):Q}function C(a,b){var c,d,e,g,h,i,j,k,l=b.length;if(!a||!a.state)return Q;if(c=a.state,g=c.wrap,2===g||1===g&&c.status!==na||c.lookahead)return Q;for(1===g&&(a.adler=G(a.adler,b,l,0)),c.wrap=0,l>=c.w_size&&(0===g&&(f(c.head),c.strstart=0,c.block_start=0,c.insert=0),k=new E.Buf8(c.w_size),E.arraySet(k,b,l-c.w_size,c.w_size,0),b=k,l=c.w_size),h=a.avail_in,i=a.next_in,j=a.input,a.avail_in=l,a.next_in=0,a.input=b,m(c);c.lookahead>=ja;){d=c.strstart,e=c.lookahead-(ja-1);do c.ins_h=(c.ins_h<<c.hash_shift^c.window[d+ja-1])&c.hash_mask,c.prev[d&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=d,d++;while(--e);c.strstart=d,c.lookahead=ja-1,m(c)}return c.strstart+=c.lookahead,c.block_start=c.strstart,c.insert=c.lookahead,c.lookahead=0,c.match_length=c.prev_length=ja-1,c.match_available=0,a.next_in=i,a.input=j,a.avail_in=h,c.wrap=g,O}var D,E=a("../utils/common"),F=a("./trees"),G=a("./adler32"),H=a("./crc32"),I=a("./messages"),J=0,K=1,L=3,M=4,N=5,O=0,P=1,Q=-2,R=-3,S=-5,T=-1,U=1,V=2,W=3,X=4,Y=0,Z=2,$=8,_=9,aa=15,ba=8,ca=29,da=256,ea=da+1+ca,fa=30,ga=19,ha=2*ea+1,ia=15,ja=3,ka=258,la=ka+ja+1,ma=32,na=42,oa=69,pa=73,qa=91,ra=103,sa=113,ta=666,ua=1,va=2,wa=3,xa=4,ya=3;D=[new s(0,0,0,0,n),new s(4,4,8,4,o),new s(4,5,16,8,o),new s(4,6,32,32,o),new s(4,4,16,16,p),new s(8,16,32,32,p),new s(8,16,128,128,p),new s(8,32,128,256,p),new s(32,128,258,1024,p),new s(32,258,258,4096,p)],c.deflateInit=z,c.deflateInit2=y,c.deflateReset=w,c.deflateResetKeep=v,c.deflateSetHeader=x,c.deflate=A,c.deflateEnd=B,c.deflateSetDictionary=C,c.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":62,"./adler32":64,"./crc32":66,"./messages":72,"./trees":73}],68:[function(a,b,c){"use strict";function d(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}b.exports=d},{}],69:[function(a,b,c){"use strict";var d=30,e=12;b.exports=function(a,b){var c,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;c=a.state,f=a.next_in,B=a.input,g=f+(a.avail_in-5),h=a.next_out,C=a.output,i=h-(b-a.avail_out),j=h+(a.avail_out-257),k=c.dmax,l=c.wsize,m=c.whave,n=c.wnext,o=c.window,p=c.hold,q=c.bits,r=c.lencode,s=c.distcode,t=(1<<c.lenbits)-1,u=(1<<c.distbits)-1;a:do{q<15&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=r[p&t];b:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,0===w)C[h++]=65535&v;else{if(!(16&w)){if(0===(64&w)){v=r[(65535&v)+(p&(1<<w)-1)];continue b}if(32&w){c.mode=e;break a}a.msg="invalid literal/length code",c.mode=d;break a}x=65535&v,w&=15,w&&(q<w&&(p+=B[f++]<<q,q+=8),x+=p&(1<<w)-1,p>>>=w,q-=w),q<15&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=s[p&u];c:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,!(16&w)){if(0===(64&w)){v=s[(65535&v)+(p&(1<<w)-1)];continue c}a.msg="invalid distance code",c.mode=d;break a}if(y=65535&v,w&=15,q<w&&(p+=B[f++]<<q,q+=8,q<w&&(p+=B[f++]<<q,q+=8)),y+=p&(1<<w)-1,y>k){a.msg="invalid distance too far back",c.mode=d;break a}if(p>>>=w,q-=w,w=h-i,y>w){if(w=y-w,w>m&&c.sane){a.msg="invalid distance too far back",c.mode=d;break a}if(z=0,A=o,0===n){if(z+=l-w,w<x){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}else if(n<w){if(z+=l+n-w,w-=n,w<x){x-=w;do C[h++]=o[z++];while(--w);if(z=0,n<x){w=n,x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}}else if(z+=n-w,w<x){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}for(;x>2;)C[h++]=A[z++],C[h++]=A[z++],C[h++]=A[z++],x-=3;x&&(C[h++]=A[z++],x>1&&(C[h++]=A[z++]))}else{z=h-y;do C[h++]=C[z++],C[h++]=C[z++],C[h++]=C[z++],x-=3;while(x>2);x&&(C[h++]=C[z++],x>1&&(C[h++]=C[z++]))}break}}break}}while(f<g&&h<j);x=q>>3,f-=x,q-=x<<3,p&=(1<<q)-1,a.next_in=f,a.next_out=h,a.avail_in=f<g?5+(g-f):5-(f-g),a.avail_out=h<j?257+(j-h):257-(h-j),c.hold=p,c.bits=q}},{}],70:[function(a,b,c){"use strict";function d(a){return(a>>>24&255)+(a>>>8&65280)+((65280&a)<<8)+((255&a)<<24)}function e(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function f(a){var b;return a&&a.state?(b=a.state,a.total_in=a.total_out=b.total=0,a.msg="",b.wrap&&(a.adler=1&b.wrap),b.mode=L,b.last=0,b.havedict=0,b.dmax=32768,b.head=null,b.hold=0,b.bits=0,b.lencode=b.lendyn=new s.Buf32(pa),b.distcode=b.distdyn=new s.Buf32(qa),b.sane=1,b.back=-1,D):G}function g(a){var b;return a&&a.state?(b=a.state,b.wsize=0,b.whave=0,b.wnext=0,f(a)):G}function h(a,b){var c,d;return a&&a.state?(d=a.state,b<0?(c=0,b=-b):(c=(b>>4)+1,b<48&&(b&=15)),b&&(b<8||b>15)?G:(null!==d.window&&d.wbits!==b&&(d.window=null),d.wrap=c,d.wbits=b,g(a))):G}function i(a,b){var c,d;return a?(d=new e,a.state=d,d.window=null,c=h(a,b),c!==D&&(a.state=null),c):G}function j(a){return i(a,sa)}function k(a){if(ta){var b;for(q=new s.Buf32(512),r=new s.Buf32(32),b=0;b<144;)a.lens[b++]=8;for(;b<256;)a.lens[b++]=9;for(;b<280;)a.lens[b++]=7;for(;b<288;)a.lens[b++]=8;for(w(y,a.lens,0,288,q,0,a.work,{bits:9}),b=0;b<32;)a.lens[b++]=5;w(z,a.lens,0,32,r,0,a.work,{bits:5}),ta=!1}a.lencode=q,a.lenbits=9,a.distcode=r,a.distbits=5}function l(a,b,c,d){var e,f=a.state;return null===f.window&&(f.wsize=1<<f.wbits,f.wnext=0,f.whave=0,f.window=new s.Buf8(f.wsize)),d>=f.wsize?(s.arraySet(f.window,b,c-f.wsize,f.wsize,0),f.wnext=0,f.whave=f.wsize):(e=f.wsize-f.wnext,e>d&&(e=d),s.arraySet(f.window,b,c-d,e,f.wnext),d-=e,d?(s.arraySet(f.window,b,c-d,d,0),f.wnext=d,f.whave=f.wsize):(f.wnext+=e,f.wnext===f.wsize&&(f.wnext=0),f.whave<f.wsize&&(f.whave+=e))),0}function m(a,b){var c,e,f,g,h,i,j,m,n,o,p,q,r,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,Aa=0,Ba=new s.Buf8(4),Ca=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!a||!a.state||!a.output||!a.input&&0!==a.avail_in)return G;c=a.state,c.mode===W&&(c.mode=X),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,o=i,p=j,xa=D;a:for(;;)switch(c.mode){case L:if(0===c.wrap){c.mode=X;break}for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(2&c.wrap&&35615===m){c.check=0,Ba[0]=255&m,Ba[1]=m>>>8&255,c.check=u(c.check,Ba,2,0),m=0,n=0,c.mode=M;break}if(c.flags=0,c.head&&(c.head.done=!1),!(1&c.wrap)||(((255&m)<<8)+(m>>8))%31){a.msg="incorrect header check",c.mode=ma;break}if((15&m)!==K){a.msg="unknown compression method",c.mode=ma;break}if(m>>>=4,n-=4,wa=(15&m)+8,0===c.wbits)c.wbits=wa;else if(wa>c.wbits){a.msg="invalid window size",c.mode=ma;break}c.dmax=1<<wa,a.adler=c.check=1,c.mode=512&m?U:W,m=0,n=0;break;case M:for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(c.flags=m,(255&c.flags)!==K){a.msg="unknown compression method",c.mode=ma;break}if(57344&c.flags){a.msg="unknown header flags set",c.mode=ma;break}c.head&&(c.head.text=m>>8&1),512&c.flags&&(Ba[0]=255&m,Ba[1]=m>>>8&255,c.check=u(c.check,Ba,2,0)),m=0,n=0,c.mode=N;case N:for(;n<32;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.head&&(c.head.time=m),512&c.flags&&(Ba[0]=255&m,Ba[1]=m>>>8&255,Ba[2]=m>>>16&255,Ba[3]=m>>>24&255,c.check=u(c.check,Ba,4,0)),m=0,n=0,c.mode=O;case O:for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.head&&(c.head.xflags=255&m,c.head.os=m>>8),512&c.flags&&(Ba[0]=255&m,Ba[1]=m>>>8&255,c.check=u(c.check,Ba,2,0)),m=0,n=0,c.mode=P;case P:if(1024&c.flags){for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.length=m,c.head&&(c.head.extra_len=m),512&c.flags&&(Ba[0]=255&m,Ba[1]=m>>>8&255,c.check=u(c.check,Ba,2,0)),m=0,n=0}else c.head&&(c.head.extra=null);c.mode=Q;case Q:if(1024&c.flags&&(q=c.length,q>i&&(q=i),q&&(c.head&&(wa=c.head.extra_len-c.length,c.head.extra||(c.head.extra=new Array(c.head.extra_len)),s.arraySet(c.head.extra,e,g,q,wa)),512&c.flags&&(c.check=u(c.check,e,q,g)),i-=q,g+=q,c.length-=q),c.length))break a;c.length=0,c.mode=R;case R:if(2048&c.flags){if(0===i)break a;q=0;do wa=e[g+q++],c.head&&wa&&c.length<65536&&(c.head.name+=String.fromCharCode(wa));while(wa&&q<i);if(512&c.flags&&(c.check=u(c.check,e,q,g)),i-=q,g+=q,wa)break a}else c.head&&(c.head.name=null);c.length=0,c.mode=S;case S:if(4096&c.flags){if(0===i)break a;q=0;do wa=e[g+q++],c.head&&wa&&c.length<65536&&(c.head.comment+=String.fromCharCode(wa));while(wa&&q<i);if(512&c.flags&&(c.check=u(c.check,e,q,g)),i-=q,g+=q,wa)break a}else c.head&&(c.head.comment=null);c.mode=T;case T:if(512&c.flags){for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m!==(65535&c.check)){a.msg="header crc mismatch",c.mode=ma;break}m=0,n=0}c.head&&(c.head.hcrc=c.flags>>9&1,c.head.done=!0),a.adler=c.check=0,c.mode=W;break;case U:for(;n<32;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}a.adler=c.check=d(m),m=0,n=0,c.mode=V;case V:if(0===c.havedict)return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,F;a.adler=c.check=1,c.mode=W;case W:if(b===B||b===C)break a;case X:if(c.last){m>>>=7&n,n-=7&n,c.mode=ja;break}for(;n<3;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}switch(c.last=1&m,m>>>=1,n-=1,3&m){case 0:c.mode=Y;break;case 1:if(k(c),c.mode=ca,b===C){m>>>=2,n-=2;break a}break;case 2:c.mode=_;break;case 3:a.msg="invalid block type",c.mode=ma}m>>>=2,n-=2;break;case Y:for(m>>>=7&n,n-=7&n;n<32;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if((65535&m)!==(m>>>16^65535)){a.msg="invalid stored block lengths",c.mode=ma;break}if(c.length=65535&m,m=0,n=0,c.mode=Z,b===C)break a;case Z:c.mode=$;case $:if(q=c.length){if(q>i&&(q=i),q>j&&(q=j),0===q)break a;s.arraySet(f,e,g,q,h),i-=q,g+=q,j-=q,h+=q,c.length-=q;break}c.mode=W;break;case _:for(;n<14;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(c.nlen=(31&m)+257,m>>>=5,n-=5,c.ndist=(31&m)+1,m>>>=5,n-=5,c.ncode=(15&m)+4,m>>>=4,n-=4,c.nlen>286||c.ndist>30){a.msg="too many length or distance symbols",c.mode=ma;break}c.have=0,c.mode=aa;case aa:for(;c.have<c.ncode;){for(;n<3;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.lens[Ca[c.have++]]=7&m,m>>>=3,n-=3}for(;c.have<19;)c.lens[Ca[c.have++]]=0;if(c.lencode=c.lendyn,c.lenbits=7,ya={bits:c.lenbits},xa=w(x,c.lens,0,19,c.lencode,0,c.work,ya),c.lenbits=ya.bits,xa){a.msg="invalid code lengths set",c.mode=ma;break}c.have=0,c.mode=ba;case ba:for(;c.have<c.nlen+c.ndist;){for(;Aa=c.lencode[m&(1<<c.lenbits)-1],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(sa<16)m>>>=qa,n-=qa,c.lens[c.have++]=sa;else{if(16===sa){for(za=qa+2;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m>>>=qa,n-=qa,0===c.have){a.msg="invalid bit length repeat",c.mode=ma;break}wa=c.lens[c.have-1],q=3+(3&m),m>>>=2,n-=2}else if(17===sa){for(za=qa+3;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=qa,n-=qa,wa=0,q=3+(7&m),m>>>=3,n-=3}else{for(za=qa+7;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=qa,n-=qa,wa=0,q=11+(127&m),m>>>=7,n-=7}if(c.have+q>c.nlen+c.ndist){a.msg="invalid bit length repeat",c.mode=ma;break}for(;q--;)c.lens[c.have++]=wa}}if(c.mode===ma)break;if(0===c.lens[256]){a.msg="invalid code -- missing end-of-block",c.mode=ma;break}if(c.lenbits=9,ya={bits:c.lenbits},xa=w(y,c.lens,0,c.nlen,c.lencode,0,c.work,ya),c.lenbits=ya.bits,xa){a.msg="invalid literal/lengths set",c.mode=ma;break}if(c.distbits=6,c.distcode=c.distdyn,ya={bits:c.distbits},xa=w(z,c.lens,c.nlen,c.ndist,c.distcode,0,c.work,ya),c.distbits=ya.bits,xa){a.msg="invalid distances set",c.mode=ma;break}if(c.mode=ca,b===C)break a;case ca:c.mode=da;case da:if(i>=6&&j>=258){a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,v(a,p),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,c.mode===W&&(c.back=-1);break}for(c.back=0;Aa=c.lencode[m&(1<<c.lenbits)-1],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(ra&&0===(240&ra)){for(ta=qa,ua=ra,va=sa;Aa=c.lencode[va+((m&(1<<ta+ua)-1)>>ta)],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(ta+qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=ta,n-=ta,c.back+=ta}if(m>>>=qa,n-=qa,c.back+=qa,c.length=sa,0===ra){c.mode=ia;break}if(32&ra){c.back=-1,c.mode=W;break}if(64&ra){a.msg="invalid literal/length code",c.mode=ma;break}c.extra=15&ra,c.mode=ea;case ea:if(c.extra){for(za=c.extra;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.length+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra}c.was=c.length,c.mode=fa;case fa:for(;Aa=c.distcode[m&(1<<c.distbits)-1],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(0===(240&ra)){for(ta=qa,ua=ra,va=sa;Aa=c.distcode[va+((m&(1<<ta+ua)-1)>>ta)],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(ta+qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=ta,n-=ta,c.back+=ta}if(m>>>=qa,n-=qa,c.back+=qa,64&ra){a.msg="invalid distance code",c.mode=ma;break}c.offset=sa,c.extra=15&ra,c.mode=ga;case ga:if(c.extra){for(za=c.extra;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.offset+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra}if(c.offset>c.dmax){a.msg="invalid distance too far back",c.mode=ma;break}c.mode=ha;case ha:if(0===j)break a;if(q=p-j,c.offset>q){if(q=c.offset-q,q>c.whave&&c.sane){a.msg="invalid distance too far back",c.mode=ma;break}q>c.wnext?(q-=c.wnext,r=c.wsize-q):r=c.wnext-q,q>c.length&&(q=c.length),pa=c.window}else pa=f,r=h-c.offset,q=c.length;q>j&&(q=j),j-=q,c.length-=q;do f[h++]=pa[r++];while(--q);0===c.length&&(c.mode=da);break;case ia:if(0===j)break a;f[h++]=c.length,j--,c.mode=da;break;case ja:if(c.wrap){for(;n<32;){if(0===i)break a;i--,m|=e[g++]<<n,n+=8}if(p-=j,a.total_out+=p,c.total+=p,p&&(a.adler=c.check=c.flags?u(c.check,f,p,h-p):t(c.check,f,p,h-p)),p=j,(c.flags?m:d(m))!==c.check){a.msg="incorrect data check",c.mode=ma;break}m=0,n=0}c.mode=ka;case ka:if(c.wrap&&c.flags){for(;n<32;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m!==(4294967295&c.total)){a.msg="incorrect length check",c.mode=ma;break}m=0,n=0}c.mode=la;case la:xa=E;break a;case ma:xa=H;break a;case na:return I;case oa:default:return G}return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,(c.wsize||p!==a.avail_out&&c.mode<ma&&(c.mode<ja||b!==A))&&l(a,a.output,a.next_out,p-a.avail_out)?(c.mode=na,I):(o-=a.avail_in,p-=a.avail_out,a.total_in+=o,a.total_out+=p,c.total+=p,c.wrap&&p&&(a.adler=c.check=c.flags?u(c.check,f,p,a.next_out-p):t(c.check,f,p,a.next_out-p)),a.data_type=c.bits+(c.last?64:0)+(c.mode===W?128:0)+(c.mode===ca||c.mode===Z?256:0),(0===o&&0===p||b===A)&&xa===D&&(xa=J),xa)}function n(a){if(!a||!a.state)return G;var b=a.state;return b.window&&(b.window=null),a.state=null,D}function o(a,b){var c;return a&&a.state?(c=a.state,0===(2&c.wrap)?G:(c.head=b,b.done=!1,D)):G}function p(a,b){var c,d,e,f=b.length;return a&&a.state?(c=a.state,0!==c.wrap&&c.mode!==V?G:c.mode===V&&(d=1,d=t(d,b,f,0),d!==c.check)?H:(e=l(a,b,f,f))?(c.mode=na,I):(c.havedict=1,D)):G}var q,r,s=a("../utils/common"),t=a("./adler32"),u=a("./crc32"),v=a("./inffast"),w=a("./inftrees"),x=0,y=1,z=2,A=4,B=5,C=6,D=0,E=1,F=2,G=-2,H=-3,I=-4,J=-5,K=8,L=1,M=2,N=3,O=4,P=5,Q=6,R=7,S=8,T=9,U=10,V=11,W=12,X=13,Y=14,Z=15,$=16,_=17,aa=18,ba=19,ca=20,da=21,ea=22,fa=23,ga=24,ha=25,ia=26,ja=27,ka=28,la=29,ma=30,na=31,oa=32,pa=852,qa=592,ra=15,sa=ra,ta=!0;c.inflateReset=g,c.inflateReset2=h,c.inflateResetKeep=f,c.inflateInit=j,c.inflateInit2=i,c.inflate=m,c.inflateEnd=n,c.inflateGetHeader=o,c.inflateSetDictionary=p,c.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":62,"./adler32":64,"./crc32":66,"./inffast":69,"./inftrees":71}],71:[function(a,b,c){"use strict";var d=a("../utils/common"),e=15,f=852,g=592,h=0,i=1,j=2,k=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],m=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],n=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];b.exports=function(a,b,c,o,p,q,r,s){var t,u,v,w,x,y,z,A,B,C=s.bits,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=null,O=0,P=new d.Buf16(e+1),Q=new d.Buf16(e+1),R=null,S=0;for(D=0;D<=e;D++)P[D]=0;for(E=0;E<o;E++)P[b[c+E]]++;for(H=C,G=e;G>=1&&0===P[G];G--);if(H>G&&(H=G),0===G)return p[q++]=20971520,p[q++]=20971520,s.bits=1,0;for(F=1;F<G&&0===P[F];F++);for(H<F&&(H=F),K=1,D=1;D<=e;D++)if(K<<=1,K-=P[D],K<0)return-1;if(K>0&&(a===h||1!==G))return-1;for(Q[1]=0,D=1;D<e;D++)Q[D+1]=Q[D]+P[D];for(E=0;E<o;E++)0!==b[c+E]&&(r[Q[b[c+E]]++]=E);if(a===h?(N=R=r,y=19):a===i?(N=k,O-=257,R=l,S-=257,y=256):(N=m,R=n,y=-1),M=0,E=0,D=F,x=q,I=H,J=0,v=-1,L=1<<H,w=L-1,a===i&&L>f||a===j&&L>g)return 1;for(;;){z=D-J,r[E]<y?(A=0,B=r[E]):r[E]>y?(A=R[S+r[E]],B=N[O+r[E]]):(A=96,B=0),t=1<<D-J,u=1<<I,F=u;do u-=t,p[x+(M>>J)+u]=z<<24|A<<16|B|0;while(0!==u);for(t=1<<D-1;M&t;)t>>=1;if(0!==t?(M&=t-1,M+=t):M=0,E++,0===--P[D]){if(D===G)break;D=b[c+r[E]]}if(D>H&&(M&w)!==v){for(0===J&&(J=H),x+=F,I=D-J,K=1<<I;I+J<G&&(K-=P[I+J],!(K<=0));)I++,K<<=1;if(L+=1<<I,a===i&&L>f||a===j&&L>g)return 1;v=M&w,p[v]=H<<24|I<<16|x-q|0}}return 0!==M&&(p[x+M]=D-J<<24|64<<16|0),s.bits=H,0}},{"../utils/common":62}],72:[function(a,b,c){"use strict";b.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],73:[function(a,b,c){"use strict";function d(a){for(var b=a.length;--b>=0;)a[b]=0}function e(a,b,c,d,e){this.static_tree=a,this.extra_bits=b,this.extra_base=c,this.elems=d,this.max_length=e,this.has_stree=a&&a.length}function f(a,b){this.dyn_tree=a,this.max_code=0,this.stat_desc=b}function g(a){return a<256?ia[a]:ia[256+(a>>>7)]}function h(a,b){a.pending_buf[a.pending++]=255&b,a.pending_buf[a.pending++]=b>>>8&255}function i(a,b,c){a.bi_valid>X-c?(a.bi_buf|=b<<a.bi_valid&65535,h(a,a.bi_buf),a.bi_buf=b>>X-a.bi_valid,a.bi_valid+=c-X):(a.bi_buf|=b<<a.bi_valid&65535,a.bi_valid+=c)}function j(a,b,c){i(a,c[2*b],c[2*b+1])}function k(a,b){var c=0;do c|=1&a,a>>>=1,c<<=1;while(--b>0);return c>>>1}function l(a){16===a.bi_valid?(h(a,a.bi_buf),a.bi_buf=0,a.bi_valid=0):a.bi_valid>=8&&(a.pending_buf[a.pending++]=255&a.bi_buf,a.bi_buf>>=8,a.bi_valid-=8)}function m(a,b){var c,d,e,f,g,h,i=b.dyn_tree,j=b.max_code,k=b.stat_desc.static_tree,l=b.stat_desc.has_stree,m=b.stat_desc.extra_bits,n=b.stat_desc.extra_base,o=b.stat_desc.max_length,p=0;for(f=0;f<=W;f++)a.bl_count[f]=0;for(i[2*a.heap[a.heap_max]+1]=0,
c=a.heap_max+1;c<V;c++)d=a.heap[c],f=i[2*i[2*d+1]+1]+1,f>o&&(f=o,p++),i[2*d+1]=f,d>j||(a.bl_count[f]++,g=0,d>=n&&(g=m[d-n]),h=i[2*d],a.opt_len+=h*(f+g),l&&(a.static_len+=h*(k[2*d+1]+g)));if(0!==p){do{for(f=o-1;0===a.bl_count[f];)f--;a.bl_count[f]--,a.bl_count[f+1]+=2,a.bl_count[o]--,p-=2}while(p>0);for(f=o;0!==f;f--)for(d=a.bl_count[f];0!==d;)e=a.heap[--c],e>j||(i[2*e+1]!==f&&(a.opt_len+=(f-i[2*e+1])*i[2*e],i[2*e+1]=f),d--)}}function n(a,b,c){var d,e,f=new Array(W+1),g=0;for(d=1;d<=W;d++)f[d]=g=g+c[d-1]<<1;for(e=0;e<=b;e++){var h=a[2*e+1];0!==h&&(a[2*e]=k(f[h]++,h))}}function o(){var a,b,c,d,f,g=new Array(W+1);for(c=0,d=0;d<Q-1;d++)for(ka[d]=c,a=0;a<1<<ba[d];a++)ja[c++]=d;for(ja[c-1]=d,f=0,d=0;d<16;d++)for(la[d]=f,a=0;a<1<<ca[d];a++)ia[f++]=d;for(f>>=7;d<T;d++)for(la[d]=f<<7,a=0;a<1<<ca[d]-7;a++)ia[256+f++]=d;for(b=0;b<=W;b++)g[b]=0;for(a=0;a<=143;)ga[2*a+1]=8,a++,g[8]++;for(;a<=255;)ga[2*a+1]=9,a++,g[9]++;for(;a<=279;)ga[2*a+1]=7,a++,g[7]++;for(;a<=287;)ga[2*a+1]=8,a++,g[8]++;for(n(ga,S+1,g),a=0;a<T;a++)ha[2*a+1]=5,ha[2*a]=k(a,5);ma=new e(ga,ba,R+1,S,W),na=new e(ha,ca,0,T,W),oa=new e(new Array(0),da,0,U,Y)}function p(a){var b;for(b=0;b<S;b++)a.dyn_ltree[2*b]=0;for(b=0;b<T;b++)a.dyn_dtree[2*b]=0;for(b=0;b<U;b++)a.bl_tree[2*b]=0;a.dyn_ltree[2*Z]=1,a.opt_len=a.static_len=0,a.last_lit=a.matches=0}function q(a){a.bi_valid>8?h(a,a.bi_buf):a.bi_valid>0&&(a.pending_buf[a.pending++]=a.bi_buf),a.bi_buf=0,a.bi_valid=0}function r(a,b,c,d){q(a),d&&(h(a,c),h(a,~c)),G.arraySet(a.pending_buf,a.window,b,c,a.pending),a.pending+=c}function s(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}function t(a,b,c){for(var d=a.heap[c],e=c<<1;e<=a.heap_len&&(e<a.heap_len&&s(b,a.heap[e+1],a.heap[e],a.depth)&&e++,!s(b,d,a.heap[e],a.depth));)a.heap[c]=a.heap[e],c=e,e<<=1;a.heap[c]=d}function u(a,b,c){var d,e,f,h,k=0;if(0!==a.last_lit)do d=a.pending_buf[a.d_buf+2*k]<<8|a.pending_buf[a.d_buf+2*k+1],e=a.pending_buf[a.l_buf+k],k++,0===d?j(a,e,b):(f=ja[e],j(a,f+R+1,b),h=ba[f],0!==h&&(e-=ka[f],i(a,e,h)),d--,f=g(d),j(a,f,c),h=ca[f],0!==h&&(d-=la[f],i(a,d,h)));while(k<a.last_lit);j(a,Z,b)}function v(a,b){var c,d,e,f=b.dyn_tree,g=b.stat_desc.static_tree,h=b.stat_desc.has_stree,i=b.stat_desc.elems,j=-1;for(a.heap_len=0,a.heap_max=V,c=0;c<i;c++)0!==f[2*c]?(a.heap[++a.heap_len]=j=c,a.depth[c]=0):f[2*c+1]=0;for(;a.heap_len<2;)e=a.heap[++a.heap_len]=j<2?++j:0,f[2*e]=1,a.depth[e]=0,a.opt_len--,h&&(a.static_len-=g[2*e+1]);for(b.max_code=j,c=a.heap_len>>1;c>=1;c--)t(a,f,c);e=i;do c=a.heap[1],a.heap[1]=a.heap[a.heap_len--],t(a,f,1),d=a.heap[1],a.heap[--a.heap_max]=c,a.heap[--a.heap_max]=d,f[2*e]=f[2*c]+f[2*d],a.depth[e]=(a.depth[c]>=a.depth[d]?a.depth[c]:a.depth[d])+1,f[2*c+1]=f[2*d+1]=e,a.heap[1]=e++,t(a,f,1);while(a.heap_len>=2);a.heap[--a.heap_max]=a.heap[1],m(a,b),n(f,j,a.bl_count)}function w(a,b,c){var d,e,f=-1,g=b[1],h=0,i=7,j=4;for(0===g&&(i=138,j=3),b[2*(c+1)+1]=65535,d=0;d<=c;d++)e=g,g=b[2*(d+1)+1],++h<i&&e===g||(h<j?a.bl_tree[2*e]+=h:0!==e?(e!==f&&a.bl_tree[2*e]++,a.bl_tree[2*$]++):h<=10?a.bl_tree[2*_]++:a.bl_tree[2*aa]++,h=0,f=e,0===g?(i=138,j=3):e===g?(i=6,j=3):(i=7,j=4))}function x(a,b,c){var d,e,f=-1,g=b[1],h=0,k=7,l=4;for(0===g&&(k=138,l=3),d=0;d<=c;d++)if(e=g,g=b[2*(d+1)+1],!(++h<k&&e===g)){if(h<l){do j(a,e,a.bl_tree);while(0!==--h)}else 0!==e?(e!==f&&(j(a,e,a.bl_tree),h--),j(a,$,a.bl_tree),i(a,h-3,2)):h<=10?(j(a,_,a.bl_tree),i(a,h-3,3)):(j(a,aa,a.bl_tree),i(a,h-11,7));h=0,f=e,0===g?(k=138,l=3):e===g?(k=6,l=3):(k=7,l=4)}}function y(a){var b;for(w(a,a.dyn_ltree,a.l_desc.max_code),w(a,a.dyn_dtree,a.d_desc.max_code),v(a,a.bl_desc),b=U-1;b>=3&&0===a.bl_tree[2*ea[b]+1];b--);return a.opt_len+=3*(b+1)+5+5+4,b}function z(a,b,c,d){var e;for(i(a,b-257,5),i(a,c-1,5),i(a,d-4,4),e=0;e<d;e++)i(a,a.bl_tree[2*ea[e]+1],3);x(a,a.dyn_ltree,b-1),x(a,a.dyn_dtree,c-1)}function A(a){var b,c=4093624447;for(b=0;b<=31;b++,c>>>=1)if(1&c&&0!==a.dyn_ltree[2*b])return I;if(0!==a.dyn_ltree[18]||0!==a.dyn_ltree[20]||0!==a.dyn_ltree[26])return J;for(b=32;b<R;b++)if(0!==a.dyn_ltree[2*b])return J;return I}function B(a){pa||(o(),pa=!0),a.l_desc=new f(a.dyn_ltree,ma),a.d_desc=new f(a.dyn_dtree,na),a.bl_desc=new f(a.bl_tree,oa),a.bi_buf=0,a.bi_valid=0,p(a)}function C(a,b,c,d){i(a,(L<<1)+(d?1:0),3),r(a,b,c,!0)}function D(a){i(a,M<<1,3),j(a,Z,ga),l(a)}function E(a,b,c,d){var e,f,g=0;a.level>0?(a.strm.data_type===K&&(a.strm.data_type=A(a)),v(a,a.l_desc),v(a,a.d_desc),g=y(a),e=a.opt_len+3+7>>>3,f=a.static_len+3+7>>>3,f<=e&&(e=f)):e=f=c+5,c+4<=e&&b!==-1?C(a,b,c,d):a.strategy===H||f===e?(i(a,(M<<1)+(d?1:0),3),u(a,ga,ha)):(i(a,(N<<1)+(d?1:0),3),z(a,a.l_desc.max_code+1,a.d_desc.max_code+1,g+1),u(a,a.dyn_ltree,a.dyn_dtree)),p(a),d&&q(a)}function F(a,b,c){return a.pending_buf[a.d_buf+2*a.last_lit]=b>>>8&255,a.pending_buf[a.d_buf+2*a.last_lit+1]=255&b,a.pending_buf[a.l_buf+a.last_lit]=255&c,a.last_lit++,0===b?a.dyn_ltree[2*c]++:(a.matches++,b--,a.dyn_ltree[2*(ja[c]+R+1)]++,a.dyn_dtree[2*g(b)]++),a.last_lit===a.lit_bufsize-1}var G=a("../utils/common"),H=4,I=0,J=1,K=2,L=0,M=1,N=2,O=3,P=258,Q=29,R=256,S=R+1+Q,T=30,U=19,V=2*S+1,W=15,X=16,Y=7,Z=256,$=16,_=17,aa=18,ba=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ca=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],da=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ea=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],fa=512,ga=new Array(2*(S+2));d(ga);var ha=new Array(2*T);d(ha);var ia=new Array(fa);d(ia);var ja=new Array(P-O+1);d(ja);var ka=new Array(Q);d(ka);var la=new Array(T);d(la);var ma,na,oa,pa=!1;c._tr_init=B,c._tr_stored_block=C,c._tr_flush_block=E,c._tr_tally=F,c._tr_align=D},{"../utils/common":62}],74:[function(a,b,c){"use strict";function d(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}b.exports=d},{}]},{},[10])(10)});
/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).DOMPurify=t()}(this,(function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.freeze,o=Object.seal,i=Object.create,a="undefined"!=typeof Reflect&&Reflect,l=a.apply,c=a.construct;l||(l=function(e,t,n){return e.apply(t,n)}),r||(r=function(e){return e}),o||(o=function(e){return e}),c||(c=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var s,u=T(Array.prototype.forEach),d=T(Array.prototype.pop),f=T(Array.prototype.push),p=T(String.prototype.toLowerCase),m=T(String.prototype.match),y=T(String.prototype.replace),h=T(String.prototype.indexOf),g=T(String.prototype.trim),v=T(RegExp.prototype.test),b=(s=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c(s,t)});function T(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return l(e,t,r)}}function A(e,r){t&&t(e,null);for(var o=r.length;o--;){var i=r[o];if("string"==typeof i){var a=p(i);a!==i&&(n(r)||(r[o]=a),i=a)}e[i]=!0}return e}function x(t){var n=i(null),r=void 0;for(r in t)l(e,t,[r])&&(n[r]=t[r]);return n}var S=r(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),k=r(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),_=r(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),D=r(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),E=r(["#text"]),L=r(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]),w=r(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),M=r(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),O=r(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),N=o(/\{\{[\s\S]*|[\s\S]*\}\}/gm),R=o(/<%[\s\S]*|[\s\S]*%>/gm),F=o(/^data-[\-\w.\u00B7-\uFFFF]/),C=o(/^aria-[\-\w]+$/),H=o(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),z=o(/^(?:\w+script|data):/i),I=o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function U(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var P=function(){return"undefined"==typeof window?null:window},W=function(e,t){if("object"!==(void 0===e?"undefined":j(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P(),n=function(t){return e(t)};if(n.version="2.1.1",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var o=t.document,i=t.document,a=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,s=t.NodeFilter,T=t.NamedNodeMap,B=void 0===T?t.NamedNodeMap||t.MozNamedAttrMap:T,G=t.Text,q=t.Comment,K=t.DOMParser,V=t.trustedTypes;if("function"==typeof l){var Y=i.createElement("template");Y.content&&Y.content.ownerDocument&&(i=Y.content.ownerDocument)}var X=W(V,o),$=X&&Le?X.createHTML(""):"",Z=i,J=Z.implementation,Q=Z.createNodeIterator,ee=Z.getElementsByTagName,te=Z.createDocumentFragment,ne=o.importNode,re={};try{re=x(i).documentMode?i.documentMode:{}}catch(e){}var oe={};n.isSupported=J&&void 0!==J.createHTMLDocument&&9!==re;var ie=N,ae=R,le=F,ce=C,se=z,ue=I,de=H,fe=null,pe=A({},[].concat(U(S),U(k),U(_),U(D),U(E))),me=null,ye=A({},[].concat(U(L),U(w),U(M),U(O))),he=null,ge=null,ve=!0,be=!0,Te=!1,Ae=!1,xe=!1,Se=!1,ke=!1,_e=!1,De=!1,Ee=!1,Le=!1,we=!0,Me=!0,Oe=!1,Ne={},Re=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),Fe=null,Ce=A({},["audio","video","img","source","image","track"]),He=null,ze=A({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Ie=null,je=i.createElement("form"),Ue=function(e){Ie&&Ie===e||(e&&"object"===(void 0===e?"undefined":j(e))||(e={}),e=x(e),fe="ALLOWED_TAGS"in e?A({},e.ALLOWED_TAGS):pe,me="ALLOWED_ATTR"in e?A({},e.ALLOWED_ATTR):ye,He="ADD_URI_SAFE_ATTR"in e?A(x(ze),e.ADD_URI_SAFE_ATTR):ze,Fe="ADD_DATA_URI_TAGS"in e?A(x(Ce),e.ADD_DATA_URI_TAGS):Ce,he="FORBID_TAGS"in e?A({},e.FORBID_TAGS):{},ge="FORBID_ATTR"in e?A({},e.FORBID_ATTR):{},Ne="USE_PROFILES"in e&&e.USE_PROFILES,ve=!1!==e.ALLOW_ARIA_ATTR,be=!1!==e.ALLOW_DATA_ATTR,Te=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ae=e.SAFE_FOR_TEMPLATES||!1,xe=e.WHOLE_DOCUMENT||!1,_e=e.RETURN_DOM||!1,De=e.RETURN_DOM_FRAGMENT||!1,Ee=e.RETURN_DOM_IMPORT||!1,Le=e.RETURN_TRUSTED_TYPE||!1,ke=e.FORCE_BODY||!1,we=!1!==e.SANITIZE_DOM,Me=!1!==e.KEEP_CONTENT,Oe=e.IN_PLACE||!1,de=e.ALLOWED_URI_REGEXP||de,Ae&&(be=!1),De&&(_e=!0),Ne&&(fe=A({},[].concat(U(E))),me=[],!0===Ne.html&&(A(fe,S),A(me,L)),!0===Ne.svg&&(A(fe,k),A(me,w),A(me,O)),!0===Ne.svgFilters&&(A(fe,_),A(me,w),A(me,O)),!0===Ne.mathMl&&(A(fe,D),A(me,M),A(me,O))),e.ADD_TAGS&&(fe===pe&&(fe=x(fe)),A(fe,e.ADD_TAGS)),e.ADD_ATTR&&(me===ye&&(me=x(me)),A(me,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&A(He,e.ADD_URI_SAFE_ATTR),Me&&(fe["#text"]=!0),xe&&A(fe,["html","head","body"]),fe.table&&(A(fe,["tbody"]),delete he.tbody),r&&r(e),Ie=e)},Pe=function(e){f(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=$}},We=function(e,t){try{f(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){f(n.removed,{attribute:null,from:t})}t.removeAttribute(e)},Be=function(e){var t=void 0,n=void 0;if(ke)e="<remove></remove>"+e;else{var r=m(e,/^[\r\n\t ]+/);n=r&&r[0]}var o=X?X.createHTML(e):e;try{t=(new K).parseFromString(o,"text/html")}catch(e){}if(!t||!t.documentElement){var a=(t=J.createHTMLDocument("")).body;a.parentNode.removeChild(a.parentNode.firstElementChild),a.outerHTML=o}return e&&n&&t.body.insertBefore(i.createTextNode(n),t.body.childNodes[0]||null),ee.call(t,xe?"html":"body")[0]},Ge=function(e){return Q.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT,(function(){return s.FILTER_ACCEPT}),!1)},qe=function(e){return!(e instanceof G||e instanceof q)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof B&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI)},Ke=function(e){return"object"===(void 0===c?"undefined":j(c))?e instanceof c:e&&"object"===(void 0===e?"undefined":j(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Ve=function(e,t,r){oe[e]&&u(oe[e],(function(e){e.call(n,t,r,Ie)}))},Ye=function(e){var t=void 0;if(Ve("beforeSanitizeElements",e,null),qe(e))return Pe(e),!0;if(m(e.nodeName,/[\u0080-\uFFFF]/))return Pe(e),!0;var r=p(e.nodeName);if(Ve("uponSanitizeElement",e,{tagName:r,allowedTags:fe}),("svg"===r||"math"===r)&&0!==e.querySelectorAll("p, br").length)return Pe(e),!0;if(!Ke(e.firstElementChild)&&(!Ke(e.content)||!Ke(e.content.firstElementChild))&&v(/<[!/\w]/g,e.innerHTML)&&v(/<[!/\w]/g,e.textContent))return Pe(e),!0;if(!fe[r]||he[r]){if(Me&&!Re[r]&&"function"==typeof e.insertAdjacentHTML)try{var o=e.innerHTML;e.insertAdjacentHTML("AfterEnd",X?X.createHTML(o):o)}catch(e){}return Pe(e),!0}return"noscript"!==r&&"noembed"!==r||!v(/<\/no(script|embed)/i,e.innerHTML)?(Ae&&3===e.nodeType&&(t=e.textContent,t=y(t,ie," "),t=y(t,ae," "),e.textContent!==t&&(f(n.removed,{element:e.cloneNode()}),e.textContent=t)),Ve("afterSanitizeElements",e,null),!1):(Pe(e),!0)},Xe=function(e,t,n){if(we&&("id"===t||"name"===t)&&(n in i||n in je))return!1;if(be&&v(le,t));else if(ve&&v(ce,t));else{if(!me[t]||ge[t])return!1;if(He[t]);else if(v(de,y(n,ue,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==h(n,"data:")||!Fe[e]){if(Te&&!v(se,y(n,ue,"")));else if(n)return!1}else;}return!0},$e=function(e){var t=void 0,r=void 0,o=void 0,i=void 0;Ve("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:me};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(r=g(t.value),o=p(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,Ve("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(We(s,e),l.keepAttr))if(v(/\/>/i,r))We(s,e);else{Ae&&(r=y(r,ie," "),r=y(r,ae," "));var f=e.nodeName.toLowerCase();if(Xe(f,o,r))try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),d(n.removed)}catch(e){}}}Ve("afterSanitizeAttributes",e,null)}},Ze=function e(t){var n=void 0,r=Ge(t);for(Ve("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Ve("uponSanitizeShadowNode",n,null),Ye(n)||(n.content instanceof a&&e(n.content),$e(n));Ve("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,r){var i=void 0,l=void 0,s=void 0,u=void 0,d=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Ke(e)){if("function"!=typeof e.toString)throw b("toString is not a function");if("string"!=typeof(e=e.toString()))throw b("dirty is not a string, aborting")}if(!n.isSupported){if("object"===j(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Ke(e))return t.toStaticHTML(e.outerHTML)}return e}if(Se||Ue(r),n.removed=[],"string"==typeof e&&(Oe=!1),Oe);else if(e instanceof c)1===(l=(i=Be("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?i=l:i.appendChild(l);else{if(!_e&&!Ae&&!xe&&-1===e.indexOf("<"))return X&&Le?X.createHTML(e):e;if(!(i=Be(e)))return _e?null:$}i&&ke&&Pe(i.firstChild);for(var f=Ge(Oe?e:i);s=f.nextNode();)3===s.nodeType&&s===u||Ye(s)||(s.content instanceof a&&Ze(s.content),$e(s),u=s);if(u=null,Oe)return e;if(_e){if(De)for(d=te.call(i.ownerDocument);i.firstChild;)d.appendChild(i.firstChild);else d=i;return Ee&&(d=ne.call(o,d,!0)),d}var p=xe?i.outerHTML:i.innerHTML;return Ae&&(p=y(p,ie," "),p=y(p,ae," ")),X&&Le?X.createHTML(p):p},n.setConfig=function(e){Ue(e),Se=!0},n.clearConfig=function(){Ie=null,Se=!1},n.isValidAttribute=function(e,t,n){Ie||Ue({});var r=p(e),o=p(t);return Xe(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(oe[e]=oe[e]||[],f(oe[e],t))},n.removeHook=function(e){oe[e]&&d(oe[e])},n.removeHooks=function(e){oe[e]&&(oe[e]=[])},n.removeAllHooks=function(){oe={}},n}()}));
//# sourceMappingURL=purify.min.js.map

"use strict";
/*!
=== NOTE ===
This file is generated from source files in https://github.com/forkphorus/forkphorus
Please see the README for more information.

=== LICENSE ===
The MIT License (MIT)

Copyright (c) 2013-2017 Nathan Dinsmore
Copyright (c) 2019-2020 Thomas Weber

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
if (!('Promise' in window)) {
    throw new Error('Browser does not support Promise');
}
var P;
(function (P) {
    var config;
    (function (config) {
        config.debug = false;
        config.useWebGL = false;
        config.supportVideoSensing = false;
        config.experimentalOptimizations = false;
        config.scale = window.devicePixelRatio || 1;
        config.PROJECT_API = 'https://projects.scratch.mit.edu/$id';
    })(config = P.config || (P.config = {}));
})(P || (P = {}));
var P;
(function (P) {
    var audio;
    (function (audio) {
        audio.context = (function () {
            if (window.AudioContext) {
                return new AudioContext();
            }
            else if (window.webkitAudioContext) {
                return new window.webkitAudioContext();
            }
            else {
                return null;
            }
        })();
        if (audio.context) {
            var volume = 0.5;
            var globalNode = audio.context.createGain();
            globalNode.gain.value = volume;
            globalNode.connect(audio.context.destination);
        }
        audio.drums = [
            { name: 'SnareDrum', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
            { name: 'Tom', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
            { name: 'SideStick', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
            { name: 'Crash', baseRatio: 0.8908987181403393, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
            { name: 'HiHatOpen', baseRatio: 0.9438743126816935, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
            { name: 'HiHatClosed', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
            { name: 'Tambourine', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
            { name: 'Clap', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
            { name: 'Claves', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
            { name: 'WoodBlock', baseRatio: 0.7491535384383408, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
            { name: 'Cowbell', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
            { name: 'Triangle', baseRatio: 0.8514452780229479, loop: true, loopStart: 0.7638548752834468, loopEnd: 0.7825396825396825, attackEnd: 0, holdEnd: 0, decayEnd: 2 },
            { name: 'Bongo', baseRatio: 0.5297315471796477, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
            { name: 'Conga', baseRatio: 0.7954545454545454, loop: true, loopStart: 0.1926077097505669, loopEnd: 0.20403628117913833, attackEnd: 0, holdEnd: 0, decayEnd: 2 },
            { name: 'Cabasa', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
            { name: 'GuiroLong', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
            { name: 'Vibraslap', baseRatio: 0.8408964152537145, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
            { name: 'Cuica', baseRatio: 0.7937005259840998, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
        ];
        audio.instruments = [
            [
                { top: 38, name: 'AcousticPiano_As3', baseRatio: 0.5316313272700484, loop: true, loopStart: 0.465578231292517, loopEnd: 0.7733786848072562, attackEnd: 0, holdEnd: 0.1, decayEnd: 22.1 },
                { top: 44, name: 'AcousticPiano_C4', baseRatio: 0.5905141892259927, loop: true, loopStart: 0.6334693877551021, loopEnd: 0.8605442176870748, attackEnd: 0, holdEnd: 0.1, decayEnd: 20.1 },
                { top: 51, name: 'AcousticPiano_G4', baseRatio: 0.8843582887700535, loop: true, loopStart: 0.5532879818594104, loopEnd: 0.5609977324263039, attackEnd: 0, holdEnd: 0.08, decayEnd: 18.08 },
                { top: 62, name: 'AcousticPiano_C6', baseRatio: 2.3557692307692304, loop: true, loopStart: 0.5914739229024943, loopEnd: 0.6020861678004535, attackEnd: 0, holdEnd: 0.08, decayEnd: 16.08 },
                { top: 70, name: 'AcousticPiano_F5', baseRatio: 1.5776515151515151, loop: true, loopStart: 0.5634920634920635, loopEnd: 0.5879818594104308, attackEnd: 0, holdEnd: 0.04, decayEnd: 14.04 },
                { top: 77, name: 'AcousticPiano_Ds6', baseRatio: 2.800762112139358, loop: true, loopStart: 0.560907029478458, loopEnd: 0.5836281179138322, attackEnd: 0, holdEnd: 0.02, decayEnd: 10.02 },
                { top: 85, name: 'AcousticPiano_Ds6', baseRatio: 2.800762112139358, loop: true, loopStart: 0.560907029478458, loopEnd: 0.5836281179138322, attackEnd: 0, holdEnd: 0, decayEnd: 8 },
                { top: 90, name: 'AcousticPiano_Ds6', baseRatio: 2.800762112139358, loop: true, loopStart: 0.560907029478458, loopEnd: 0.5836281179138322, attackEnd: 0, holdEnd: 0, decayEnd: 6 },
                { top: 96, name: 'AcousticPiano_D7', baseRatio: 5.275119617224881, loop: true, loopStart: 0.3380498866213152, loopEnd: 0.34494331065759637, attackEnd: 0, holdEnd: 0, decayEnd: 3 },
                { top: 128, name: 'AcousticPiano_D7', baseRatio: 5.275119617224881, loop: true, loopStart: 0.3380498866213152, loopEnd: 0.34494331065759637, attackEnd: 0, holdEnd: 0, decayEnd: 2 }
            ], [
                { top: 48, name: 'ElectricPiano_C2', baseRatio: 0.14870515241435123, loop: true, loopStart: 0.6956009070294784, loopEnd: 0.7873015873015873, attackEnd: 0, holdEnd: 0.08, decayEnd: 10.08 },
                { top: 74, name: 'ElectricPiano_C4', baseRatio: 0.5945685670261941, loop: true, loopStart: 0.5181859410430839, loopEnd: 0.5449433106575964, attackEnd: 0, holdEnd: 0.04, decayEnd: 8.04 },
                { top: 128, name: 'ElectricPiano_C4', baseRatio: 0.5945685670261941, loop: true, loopStart: 0.5181859410430839, loopEnd: 0.5449433106575964, attackEnd: 0, holdEnd: 0, decayEnd: 6 }
            ], [
                { top: 128, name: 'Organ_G2', baseRatio: 0.22283731584620914, loop: true, loopStart: 0.05922902494331066, loopEnd: 0.1510204081632653, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
            ], [{ top: 40, name: 'AcousticGuitar_F3', baseRatio: 0.3977272727272727, loop: true, loopStart: 1.6628117913832199, loopEnd: 1.6685260770975057, attackEnd: 0, holdEnd: 0, decayEnd: 15 },
                { top: 56, name: 'AcousticGuitar_F3', baseRatio: 0.3977272727272727, loop: true, loopStart: 1.6628117913832199, loopEnd: 1.6685260770975057, attackEnd: 0, holdEnd: 0, decayEnd: 13.5 },
                { top: 60, name: 'AcousticGuitar_F3', baseRatio: 0.3977272727272727, loop: true, loopStart: 1.6628117913832199, loopEnd: 1.6685260770975057, attackEnd: 0, holdEnd: 0, decayEnd: 12 },
                { top: 67, name: 'AcousticGuitar_F3', baseRatio: 0.3977272727272727, loop: true, loopStart: 1.6628117913832199, loopEnd: 1.6685260770975057, attackEnd: 0, holdEnd: 0, decayEnd: 8.5 },
                { top: 72, name: 'AcousticGuitar_F3', baseRatio: 0.3977272727272727, loop: true, loopStart: 1.6628117913832199, loopEnd: 1.6685260770975057, attackEnd: 0, holdEnd: 0, decayEnd: 7 },
                { top: 83, name: 'AcousticGuitar_F3', baseRatio: 0.3977272727272727, loop: true, loopStart: 1.6628117913832199, loopEnd: 1.6685260770975057, attackEnd: 0, holdEnd: 0, decayEnd: 5.5 },
                { top: 128, name: 'AcousticGuitar_F3', baseRatio: 0.3977272727272727, loop: true, loopStart: 1.6628117913832199, loopEnd: 1.6685260770975057, attackEnd: 0, holdEnd: 0, decayEnd: 4.5 }
            ], [
                { top: 40, name: 'ElectricGuitar_F3', baseRatio: 0.39615522817103843, loop: true, loopStart: 1.5733333333333333, loopEnd: 1.5848072562358, attackEnd: 0, holdEnd: 0, decayEnd: 15 },
                { top: 56, name: 'ElectricGuitar_F3', baseRatio: 0.39615522817103843, loop: true, loopStart: 1.5733333333333333, loopEnd: 1.5848072562358277, attackEnd: 0, holdEnd: 0, decayEnd: 13.5 },
                { top: 60, name: 'ElectricGuitar_F3', baseRatio: 0.39615522817103843, loop: true, loopStart: 1.5733333333333333, loopEnd: 1.5848072562358277, attackEnd: 0, holdEnd: 0, decayEnd: 12 },
                { top: 67, name: 'ElectricGuitar_F3', baseRatio: 0.39615522817103843, loop: true, loopStart: 1.5733333333333333, loopEnd: 1.5848072562358277, attackEnd: 0, holdEnd: 0, decayEnd: 8.5 },
                { top: 72, name: 'ElectricGuitar_F3', baseRatio: 0.39615522817103843, loop: true, loopStart: 1.5733333333333333, loopEnd: 1.5848072562358277, attackEnd: 0, holdEnd: 0, decayEnd: 7 },
                { top: 83, name: 'ElectricGuitar_F3', baseRatio: 0.39615522817103843, loop: true, loopStart: 1.5733333333333333, loopEnd: 1.5848072562358277, attackEnd: 0, holdEnd: 0, decayEnd: 5.5 },
                { top: 128, name: 'ElectricGuitar_F3', baseRatio: 0.39615522817103843, loop: true, loopStart: 1.5733333333333333, loopEnd: 1.5848072562358277, attackEnd: 0, holdEnd: 0, decayEnd: 4.5 }
            ], [
                { top: 34, name: 'ElectricBass_G1', baseRatio: 0.11111671034065712, loop: true, loopStart: 1.9007709750566892, loopEnd: 1.9212244897959183, attackEnd: 0, holdEnd: 0, decayEnd: 17 },
                { top: 48, name: 'ElectricBass_G1', baseRatio: 0.11111671034065712, loop: true, loopStart: 1.9007709750566892, loopEnd: 1.9212244897959183, attackEnd: 0, holdEnd: 0, decayEnd: 14 },
                { top: 64, name: 'ElectricBass_G1', baseRatio: 0.11111671034065712, loop: true, loopStart: 1.9007709750566892, loopEnd: 1.9212244897959183, attackEnd: 0, holdEnd: 0, decayEnd: 12 },
                { top: 128, name: 'ElectricBass_G1', baseRatio: 0.11111671034065712, loop: true, loopStart: 1.9007709750566892, loopEnd: 1.9212244897959183, attackEnd: 0, holdEnd: 0, decayEnd: 10 }
            ], [
                { top: 38, name: 'Pizz_G2', baseRatio: 0.21979665071770335, loop: true, loopStart: 0.3879365079365079, loopEnd: 0.3982766439909297, attackEnd: 0, holdEnd: 0, decayEnd: 5 },
                { top: 45, name: 'Pizz_G2', baseRatio: 0.21979665071770335, loop: true, loopStart: 0.3879365079365079, loopEnd: 0.3982766439909297, attackEnd: 0, holdEnd: 0.012, decayEnd: 4.012 },
                { top: 56, name: 'Pizz_A3', baseRatio: 0.503654636820466, loop: true, loopStart: 0.5197278911564626, loopEnd: 0.5287528344671202, attackEnd: 0, holdEnd: 0, decayEnd: 4 },
                { top: 64, name: 'Pizz_A3', baseRatio: 0.503654636820466, loop: true, loopStart: 0.5197278911564626, loopEnd: 0.5287528344671202, attackEnd: 0, holdEnd: 0, decayEnd: 3.2 },
                { top: 72, name: 'Pizz_E4', baseRatio: 0.7479647218453188, loop: true, loopStart: 0.7947845804988662, loopEnd: 0.7978231292517007, attackEnd: 0, holdEnd: 0, decayEnd: 2.8 },
                { top: 80, name: 'Pizz_E4', baseRatio: 0.7479647218453188, loop: true, loopStart: 0.7947845804988662, loopEnd: 0.7978231292517007, attackEnd: 0, holdEnd: 0, decayEnd: 2.2 },
                { top: 128, name: 'Pizz_E4', baseRatio: 0.7479647218453188, loop: true, loopStart: 0.7947845804988662, loopEnd: 0.7978231292517007, attackEnd: 0, holdEnd: 0, decayEnd: 1.5 }
            ], [
                { top: 41, name: 'Cello_C2', baseRatio: 0.14870515241435123, loop: true, loopStart: 0.3876643990929705, loopEnd: 0.40294784580498866, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
                { top: 52, name: 'Cello_As2', baseRatio: 0.263755980861244, loop: true, loopStart: 0.3385487528344671, loopEnd: 0.35578231292517004, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
                { top: 62, name: 'Violin_D4', baseRatio: 0.6664047388781432, loop: true, loopStart: 0.48108843537414964, loopEnd: 0.5151927437641723, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
                { top: 75, name: 'Violin_A4', baseRatio: 0.987460815047022, loop: true, loopStart: 0.14108843537414967, loopEnd: 0.15029478458049886, attackEnd: 0.07, holdEnd: 0.07, decayEnd: 0.07 },
                { top: 128, name: 'Violin_E5', baseRatio: 1.4885238523852387, loop: true, loopStart: 0.10807256235827664, loopEnd: 0.1126530612244898, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
            ], [
                { top: 30, name: 'BassTrombone_A2_3', baseRatio: 0.24981872564125807, loop: true, loopStart: 0.061541950113378686, loopEnd: 0.10702947845804989, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
                { top: 40, name: 'BassTrombone_A2_2', baseRatio: 0.24981872564125807, loop: true, loopStart: 0.08585034013605441, loopEnd: 0.13133786848072562, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
                { top: 55, name: 'Trombone_B3', baseRatio: 0.5608240680183126, loop: true, loopStart: 0.12, loopEnd: 0.17673469387755103, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
                { top: 88, name: 'Trombone_B3', baseRatio: 0.5608240680183126, loop: true, loopStart: 0.12, loopEnd: 0.17673469387755103, attackEnd: 0.05, holdEnd: 0.05, decayEnd: 0.05 },
                { top: 128, name: 'Trumpet_E5', baseRatio: 1.4959294436906376, loop: true, loopStart: 0.1307936507936508, loopEnd: 0.14294784580498865, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
            ], [
                { top: 128, name: 'Clarinet_C4', baseRatio: 0.5940193965517241, loop: true, loopStart: 0.6594104308390023, loopEnd: 0.7014965986394558, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
            ], [
                { top: 40, name: 'TenorSax_C3', baseRatio: 0.2971698113207547, loop: true, loopStart: 0.4053968253968254, loopEnd: 0.4895238095238095, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
                { top: 50, name: 'TenorSax_C3', baseRatio: 0.2971698113207547, loop: true, loopStart: 0.4053968253968254, loopEnd: 0.4895238095238095, attackEnd: 0.02, holdEnd: 0.02, decayEnd: 0.02 },
                { top: 59, name: 'TenorSax_C3', baseRatio: 0.2971698113207547, loop: true, loopStart: 0.4053968253968254, loopEnd: 0.4895238095238095, attackEnd: 0.04, holdEnd: 0.04, decayEnd: 0.04 },
                { top: 67, name: 'AltoSax_A3', baseRatio: 0.49814747876378096, loop: true, loopStart: 0.3875736961451247, loopEnd: 0.4103854875283447, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
                { top: 75, name: 'AltoSax_A3', baseRatio: 0.49814747876378096, loop: true, loopStart: 0.3875736961451247, loopEnd: 0.4103854875283447, attackEnd: 0.02, holdEnd: 0.02, decayEnd: 0.02 },
                { top: 80, name: 'AltoSax_A3', baseRatio: 0.49814747876378096, loop: true, loopStart: 0.3875736961451247, loopEnd: 0.4103854875283447, attackEnd: 0.02, holdEnd: 0.02, decayEnd: 0.02 },
                { top: 128, name: 'AltoSax_C6', baseRatio: 2.3782742681047764, loop: true, loopStart: 0.05705215419501134, loopEnd: 0.0838095238095238, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
            ], [
                { top: 61, name: 'Flute_B5_2', baseRatio: 2.255113636363636, loop: true, loopStart: 0.08430839002267573, loopEnd: 0.10244897959183673, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
                { top: 128, name: 'Flute_B5_1', baseRatio: 2.255113636363636, loop: true, loopStart: 0.10965986394557824, loopEnd: 0.12780045351473923, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
            ], [
                { top: 128, name: 'WoodenFlute_C5', baseRatio: 1.1892952324548416, loop: true, loopStart: 0.5181859410430839, loopEnd: 0.7131065759637188, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
            ], [
                { top: 57, name: 'Bassoon_C3', baseRatio: 0.29700969827586204, loop: true, loopStart: 0.11011337868480725, loopEnd: 0.19428571428571428, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
                { top: 67, name: 'Bassoon_C3', baseRatio: 0.29700969827586204, loop: true, loopStart: 0.11011337868480725, loopEnd: 0.19428571428571428, attackEnd: 0.04, holdEnd: 0.04, decayEnd: 0.04 },
                { top: 76, name: 'Bassoon_C3', baseRatio: 0.29700969827586204, loop: true, loopStart: 0.11011337868480725, loopEnd: 0.19428571428571428, attackEnd: 0.08, holdEnd: 0.08, decayEnd: 0.08 },
                { top: 84, name: 'EnglishHorn_F3', baseRatio: 0.39601293103448276, loop: true, loopStart: 0.341859410430839, loopEnd: 0.4049886621315193, attackEnd: 0.04, holdEnd: 0.04, decayEnd: 0.04 },
                { top: 128, name: 'EnglishHorn_D4', baseRatio: 0.6699684005833739, loop: true, loopStart: 0.22027210884353743, loopEnd: 0.23723356009070296, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
            ], [
                { top: 39, name: 'Choir_F3', baseRatio: 0.3968814788643197, loop: true, loopStart: 0.6352380952380953, loopEnd: 1.8721541950113378, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
                { top: 50, name: 'Choir_F3', baseRatio: 0.3968814788643197, loop: true, loopStart: 0.6352380952380953, loopEnd: 1.8721541950113378, attackEnd: 0.04, holdEnd: 0.04, decayEnd: 0.04 },
                { top: 61, name: 'Choir_F3', baseRatio: 0.3968814788643197, loop: true, loopStart: 0.6352380952380953, loopEnd: 1.8721541950113378, attackEnd: 0.06, holdEnd: 0.06, decayEnd: 0.06 },
                { top: 72, name: 'Choir_F4', baseRatio: 0.7928898424161845, loop: true, loopStart: 0.7415419501133786, loopEnd: 2.1059410430839, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
                { top: 128, name: 'Choir_F5', baseRatio: 1.5879576065654504, loop: true, loopStart: 0.836281179138322, loopEnd: 2.0585487528344673, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
            ], [
                { top: 38, name: 'Vibraphone_C3', baseRatio: 0.29829545454545453, loop: true, loopStart: 0.2812698412698413, loopEnd: 0.28888888888888886, attackEnd: 0, holdEnd: 0.1, decayEnd: 8.1 },
                { top: 48, name: 'Vibraphone_C3', baseRatio: 0.29829545454545453, loop: true, loopStart: 0.2812698412698413, loopEnd: 0.28888888888888886, attackEnd: 0, holdEnd: 0.1, decayEnd: 7.6 },
                { top: 59, name: 'Vibraphone_C3', baseRatio: 0.29829545454545453, loop: true, loopStart: 0.2812698412698413, loopEnd: 0.28888888888888886, attackEnd: 0, holdEnd: 0.06, decayEnd: 7.06 },
                { top: 70, name: 'Vibraphone_C3', baseRatio: 0.29829545454545453, loop: true, loopStart: 0.2812698412698413, loopEnd: 0.28888888888888886, attackEnd: 0, holdEnd: 0.04, decayEnd: 6.04 },
                { top: 78, name: 'Vibraphone_C3', baseRatio: 0.29829545454545453, loop: true, loopStart: 0.2812698412698413, loopEnd: 0.28888888888888886, attackEnd: 0, holdEnd: 0.02, decayEnd: 5.02 },
                { top: 86, name: 'Vibraphone_C3', baseRatio: 0.29829545454545453, loop: true, loopStart: 0.2812698412698413, loopEnd: 0.28888888888888886, attackEnd: 0, holdEnd: 0, decayEnd: 4 },
                { top: 128, name: 'Vibraphone_C3', baseRatio: 0.29829545454545453, loop: true, loopStart: 0.2812698412698413, loopEnd: 0.28888888888888886, attackEnd: 0, holdEnd: 0, decayEnd: 3 }
            ], [
                { top: 128, name: 'MusicBox_C4', baseRatio: 0.5937634640241276, loop: true, loopStart: 0.6475283446712018, loopEnd: 0.6666666666666666, attackEnd: 0, holdEnd: 0, decayEnd: 2 }
            ], [
                { top: 128, name: 'SteelDrum_D5', baseRatio: 1.3660402567543959, loop: false, loopStart: -0.000045351473922902495, loopEnd: -0.000045351473922902495, attackEnd: 0, holdEnd: 0, decayEnd: 2 }
            ], [
                { top: 128, name: 'Marimba_C4', baseRatio: 0.5946035575013605, loop: false, loopStart: -0.000045351473922902495, loopEnd: -0.000045351473922902495, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
            ], [
                { top: 80, name: 'SynthLead_C4', baseRatio: 0.5942328422565577, loop: true, loopStart: 0.006122448979591836, loopEnd: 0.06349206349206349, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
                { top: 128, name: 'SynthLead_C6', baseRatio: 2.3760775862068964, loop: true, loopStart: 0.005623582766439909, loopEnd: 0.01614512471655329, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
            ], [
                { top: 38, name: 'SynthPad_A3', baseRatio: 0.4999105065330231, loop: true, loopStart: 0.1910204081632653, loopEnd: 3.9917006802721087, attackEnd: 0.05, holdEnd: 0.05, decayEnd: 0.05 },
                { top: 50, name: 'SynthPad_A3', baseRatio: 0.4999105065330231, loop: true, loopStart: 0.1910204081632653, loopEnd: 3.9917006802721087, attackEnd: 0.08, holdEnd: 0.08, decayEnd: 0.08 },
                { top: 62, name: 'SynthPad_A3', baseRatio: 0.4999105065330231, loop: true, loopStart: 0.1910204081632653, loopEnd: 3.9917006802721087, attackEnd: 0.11, holdEnd: 0.11, decayEnd: 0.11 },
                { top: 74, name: 'SynthPad_A3', baseRatio: 0.4999105065330231, loop: true, loopStart: 0.1910204081632653, loopEnd: 3.9917006802721087, attackEnd: 0.15, holdEnd: 0.15, decayEnd: 0.15 },
                { top: 86, name: 'SynthPad_A3', baseRatio: 0.4999105065330231, loop: true, loopStart: 0.1910204081632653, loopEnd: 3.9917006802721087, attackEnd: 0.2, holdEnd: 0.2, decayEnd: 0.2 },
                { top: 128, name: 'SynthPad_C6', baseRatio: 2.3820424708835755, loop: true, loopStart: 0.11678004535147392, loopEnd: 0.41732426303854875, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
            ]
        ];
        const SB2_SOUNDBANK_FILES = {
            'AcousticGuitar_F3': 'sb2/instruments/AcousticGuitar_F3_22k.wav',
            'AcousticPiano_As3': 'sb2/instruments/AcousticPiano(5)_A%233_22k.wav',
            'AcousticPiano_C4': 'sb2/instruments/AcousticPiano(5)_C4_22k.wav',
            'AcousticPiano_G4': 'sb2/instruments/AcousticPiano(5)_G4_22k.wav',
            'AcousticPiano_F5': 'sb2/instruments/AcousticPiano(5)_F5_22k.wav',
            'AcousticPiano_C6': 'sb2/instruments/AcousticPiano(5)_C6_22k.wav',
            'AcousticPiano_Ds6': 'sb2/instruments/AcousticPiano(5)_D%236_22k.wav',
            'AcousticPiano_D7': 'sb2/instruments/AcousticPiano(5)_D7_22k.wav',
            'AltoSax_A3': 'sb2/instruments/AltoSax_A3_22K.wav',
            'AltoSax_C6': 'sb2/instruments/AltoSax(3)_C6_22k.wav',
            'Bassoon_C3': 'sb2/instruments/Bassoon_C3_22k.wav',
            'BassTrombone_A2_2': 'sb2/instruments/BassTrombone_A2(2)_22k.wav',
            'BassTrombone_A2_3': 'sb2/instruments/BassTrombone_A2(3)_22k.wav',
            'Cello_C2': 'sb2/instruments/Cello(3b)_C2_22k.wav',
            'Cello_As2': 'sb2/instruments/Cello(3)_A%232_22k.wav',
            'Choir_F3': 'sb2/instruments/Choir(4)_F3_22k.wav',
            'Choir_F4': 'sb2/instruments/Choir(4)_F4_22k.wav',
            'Choir_F5': 'sb2/instruments/Choir(4)_F5_22k.wav',
            'Clarinet_C4': 'sb2/instruments/Clarinet_C4_22k.wav',
            'ElectricBass_G1': 'sb2/instruments/ElectricBass(2)_G1_22k.wav',
            'ElectricGuitar_F3': 'sb2/instruments/ElectricGuitar(2)_F3(1)_22k.wav',
            'ElectricPiano_C2': 'sb2/instruments/ElectricPiano_C2_22k.wav',
            'ElectricPiano_C4': 'sb2/instruments/ElectricPiano_C4_22k.wav',
            'EnglishHorn_D4': 'sb2/instruments/EnglishHorn(1)_D4_22k.wav',
            'EnglishHorn_F3': 'sb2/instruments/EnglishHorn(1)_F3_22k.wav',
            'Flute_B5_1': 'sb2/instruments/Flute(3)_B5(1)_22k.wav',
            'Flute_B5_2': 'sb2/instruments/Flute(3)_B5(2)_22k.wav',
            'Marimba_C4': 'sb2/instruments/Marimba_C4_22k.wav',
            'MusicBox_C4': 'sb2/instruments/MusicBox_C4_22k.wav',
            'Organ_G2': 'sb2/instruments/Organ(2)_G2_22k.wav',
            'Pizz_A3': 'sb2/instruments/Pizz(2)_A3_22k.wav',
            'Pizz_E4': 'sb2/instruments/Pizz(2)_E4_22k.wav',
            'Pizz_G2': 'sb2/instruments/Pizz(2)_G2_22k.wav',
            'SteelDrum_D5': 'sb2/instruments/SteelDrum_D5_22k.wav',
            'SynthLead_C4': 'sb2/instruments/SynthLead(6)_C4_22k.wav',
            'SynthLead_C6': 'sb2/instruments/SynthLead(6)_C6_22k.wav',
            'SynthPad_A3': 'sb2/instruments/SynthPad(2)_A3_22k.wav',
            'SynthPad_C6': 'sb2/instruments/SynthPad(2)_C6_22k.wav',
            'TenorSax_C3': 'sb2/instruments/TenorSax(1)_C3_22k.wav',
            'Trombone_B3': 'sb2/instruments/Trombone_B3_22k.wav',
            'Trumpet_E5': 'sb2/instruments/Trumpet_E5_22k.wav',
            'Vibraphone_C3': 'sb2/instruments/Vibraphone_C3_22k.wav',
            'Violin_D4': 'sb2/instruments/Violin(2)_D4_22K.wav',
            'Violin_A4': 'sb2/instruments/Violin(3)_A4_22k.wav',
            'Violin_E5': 'sb2/instruments/Violin(3b)_E5_22k.wav',
            'WoodenFlute_C5': 'sb2/instruments/WoodenFlute_C5_22k.wav',
            'BassDrum': 'sb2/drums/BassDrum(1b)_22k.wav',
            'Bongo': 'sb2/drums/Bongo_22k.wav',
            'Cabasa': 'sb2/drums/Cabasa(1)_22k.wav',
            'Clap': 'sb2/drums/Clap(1)_22k.wav',
            'Claves': 'sb2/drums/Claves(1)_22k.wav',
            'Conga': 'sb2/drums/Conga(1)_22k.wav',
            'Cowbell': 'sb2/drums/Cowbell(3)_22k.wav',
            'Crash': 'sb2/drums/Crash(2)_22k.wav',
            'Cuica': 'sb2/drums/Cuica(2)_22k.wav',
            'GuiroLong': 'sb2/drums/GuiroLong(1)_22k.wav',
            'GuiroShort': 'sb2/drums/GuiroShort(1)_22k.wav',
            'HiHatClosed': 'sb2/drums/HiHatClosed(1)_22k.wav',
            'HiHatOpen': 'sb2/drums/HiHatOpen(2)_22k.wav',
            'HiHatPedal': 'sb2/drums/HiHatPedal(1)_22k.wav',
            'Maracas': 'sb2/drums/Maracas(1)_22k.wav',
            'SideStick': 'sb2/drums/SideStick(1)_22k.wav',
            'SnareDrum': 'sb2/drums/SnareDrum(1)_22k.wav',
            'Tambourine': 'sb2/drums/Tambourine(3)_22k.wav',
            'Tom': 'sb2/drums/Tom(1)_22k.wav',
            'Triangle': 'sb2/drums/Triangle(1)_22k.wav',
            'Vibraslap': 'sb2/drums/Vibraslap(1)_22k.wav',
            'WoodBlock': 'sb2/drums/WoodBlock(1)_22k.wav'
        };
        const soundbank = {};
        function loadSoundbankSB2(loader) {
            if (!audio.context)
                return Promise.resolve();
            const promises = [];
            for (const name in SB2_SOUNDBANK_FILES) {
                if (!soundbank[name]) {
                    const promise = P.utils.settled(loadSoundbankBuffer(name));
                    promises.push(promise);
                    if (loader) {
                        loader.addTask(new P.io.PromiseTask(promise));
                    }
                }
            }
            return Promise.all(promises);
        }
        audio.loadSoundbankSB2 = loadSoundbankSB2;
        function loadSoundbankBuffer(name) {
            return P.io.getAssetManager().loadSoundbankFile(SB2_SOUNDBANK_FILES[name])
                .then((buffer) => P.audio.decodeAudio(buffer))
                .then((sound) => soundbank[name] = sound);
        }
        function playSpan(span, key, duration, connection) {
            if (!audio.context) {
                throw new Error('Cannot playSpan without an AudioContext');
            }
            const buffer = soundbank[span.name];
            if (!buffer) {
                throw new Error('No soundbank entry named: ' + span.name);
            }
            const source = audio.context.createBufferSource();
            const note = audio.context.createGain();
            source.buffer = buffer;
            if (source.loop = span.loop) {
                source.loopStart = span.loopStart;
                source.loopEnd = span.loopEnd;
            }
            source.connect(note);
            note.connect(connection);
            const time = audio.context.currentTime;
            source.playbackRate.value = Math.pow(2, (key - 69) / 12) / span.baseRatio;
            const gain = note.gain;
            gain.value = 0;
            gain.setValueAtTime(0, time);
            if (span.attackEnd < duration) {
                gain.linearRampToValueAtTime(1, time + span.attackEnd);
                if (span.decayTime > 0 && span.holdEnd < duration) {
                    gain.linearRampToValueAtTime(1, time + span.holdEnd);
                    if (span.decayEnd < duration) {
                        gain.linearRampToValueAtTime(0, time + span.decayEnd);
                    }
                    else {
                        gain.linearRampToValueAtTime(1 - (duration - span.holdEnd) / span.decayTime, time + duration);
                    }
                }
                else {
                    gain.linearRampToValueAtTime(1, time + duration);
                }
            }
            else {
                gain.linearRampToValueAtTime(1, time + duration);
            }
            gain.linearRampToValueAtTime(0, time + duration + 0.02267573696);
            source.start(time);
            source.stop(time + duration + 0.02267573696);
            return source;
        }
        audio.playSpan = playSpan;
        function connectNode(node) {
            node.connect(globalNode);
        }
        audio.connectNode = connectNode;
        const ADPCM_STEPS = [
            7, 8, 9, 10, 11, 12, 13, 14, 16, 17,
            19, 21, 23, 25, 28, 31, 34, 37, 41, 45,
            50, 55, 60, 66, 73, 80, 88, 97, 107, 118,
            130, 143, 157, 173, 190, 209, 230, 253, 279, 307,
            337, 371, 408, 449, 494, 544, 598, 658, 724, 796,
            876, 963, 1060, 1166, 1282, 1411, 1552, 1707, 1878, 2066,
            2272, 2499, 2749, 3024, 3327, 3660, 4026, 4428, 4871, 5358,
            5894, 6484, 7132, 7845, 8630, 9493, 10442, 11487, 12635, 13899,
            15289, 16818, 18500, 20350, 22385, 24623, 27086, 29794, 32767,
        ];
        const ADPCM_INDEX = [-1, -1, -1, -1, 2, 4, 6, 8, -1, -1, -1, -1, 2, 4, 6, 8];
        function decodeADPCMAudio(ab, cb) {
            var dv = new DataView(ab);
            if (dv.getUint32(0) !== 0x52494646 || dv.getUint32(8) !== 0x57415645) {
                return cb(new Error('Unrecognized audio format'));
            }
            var blocks = {};
            var i = 12, l = dv.byteLength - 8;
            while (i < l) {
                blocks[String.fromCharCode(dv.getUint8(i), dv.getUint8(i + 1), dv.getUint8(i + 2), dv.getUint8(i + 3))] = i;
                i += 8 + dv.getUint32(i + 4, true);
            }
            var format = dv.getUint16(20, true);
            var channels = dv.getUint16(22, true);
            var sampleRate = dv.getUint32(24, true);
            var byteRate = dv.getUint32(28, true);
            var blockAlign = dv.getUint16(32, true);
            var bitsPerSample = dv.getUint16(34, true);
            if (format === 17) {
                var samplesPerBlock = dv.getUint16(38, true);
                var blockSize = ((samplesPerBlock - 1) / 2) + 4;
                var frameCount = dv.getUint32(blocks.fact + 8, true);
                var buffer = audio.context.createBuffer(1, frameCount, sampleRate);
                var channel = buffer.getChannelData(0);
                var sample, index = 0;
                var step, code, delta;
                var lastByte = -1;
                var offset = blocks.data + 8;
                i = offset;
                var j = 0;
                while (true) {
                    if ((((i - offset) % blockSize) == 0) && (lastByte < 0)) {
                        if (i >= dv.byteLength)
                            break;
                        sample = dv.getInt16(i, true);
                        i += 2;
                        index = dv.getUint8(i);
                        i += 1;
                        i++;
                        if (index > 88)
                            index = 88;
                        channel[j++] = sample / 32767;
                    }
                    else {
                        if (lastByte < 0) {
                            if (i >= dv.byteLength)
                                break;
                            lastByte = dv.getUint8(i);
                            i += 1;
                            code = lastByte & 0xf;
                        }
                        else {
                            code = (lastByte >> 4) & 0xf;
                            lastByte = -1;
                        }
                        step = ADPCM_STEPS[index];
                        delta = 0;
                        if (code & 4)
                            delta += step;
                        if (code & 2)
                            delta += step >> 1;
                        if (code & 1)
                            delta += step >> 2;
                        delta += step >> 3;
                        index += ADPCM_INDEX[code];
                        if (index > 88)
                            index = 88;
                        if (index < 0)
                            index = 0;
                        sample += (code & 8) ? -delta : delta;
                        if (sample > 32767)
                            sample = 32767;
                        if (sample < -32768)
                            sample = -32768;
                        channel[j++] = sample / 32768;
                    }
                }
                return cb(null, buffer);
            }
            cb(new Error('Unrecognized WAV format ' + format));
        }
        function decodeAudio(ab) {
            if (!audio.context) {
                return Promise.reject(new Error('No audio context'));
            }
            return new Promise((resolve, reject) => {
                decodeADPCMAudio(ab, function (err1, buffer) {
                    if (buffer) {
                        resolve(buffer);
                        return;
                    }
                    audio.context.decodeAudioData(ab, function (buffer) {
                        resolve(buffer);
                    }, function (err2) {
                        reject(`Could not decode audio: ${err1} | ${err2}`);
                    });
                });
            });
        }
        audio.decodeAudio = decodeAudio;
    })(audio = P.audio || (P.audio = {}));
})(P || (P = {}));
var P;
(function (P) {
    var core;
    (function (core) {
        ;
        class PenColor {
            constructor() {
                this.x = 0;
                this.y = 0;
                this.z = 255;
                this.a = 1;
                this.mode = 0;
                this.css = 'rgba(0, 0, 255, 1)';
            }
            setRGBA(rgba) {
                this.x = rgba >> 16 & 0xff;
                this.y = rgba >> 8 & 0xff;
                this.z = rgba & 0xff;
                this.a = (rgba >> 24 & 0xff) / 0xff || 1;
                this.css = 'rgba(' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.a + ')';
                this.mode = 0;
            }
            toHSLA() {
                switch (this.mode) {
                    case 0: {
                        this.mode = 1;
                        const hsl = P.utils.rgbToHSL(this.x, this.y, this.z);
                        this.x = hsl[0];
                        this.y = hsl[1] * 100;
                        this.z = hsl[2] * 100;
                        break;
                    }
                    case 2: {
                        this.mode = 1;
                        const hsl = P.utils.hsvToHSL(this.x, this.y / 100, this.z / 100);
                        this.x = hsl[0];
                        this.y = hsl[1] * 100;
                        this.z = hsl[2] * 100;
                        break;
                    }
                }
            }
            toHSVA() {
                switch (this.mode) {
                    case 0: {
                        this.mode = 2;
                        const hsv = P.utils.rgbToHSV(this.x, this.y, this.z);
                        this.x = hsv[0];
                        this.y = hsv[1] * 100;
                        this.z = hsv[2] * 100;
                        break;
                    }
                    case 1: {
                        this.mode = 2;
                        const hsv = P.utils.hslToHSV(this.x, this.y / 100, this.z / 100);
                        this.x = hsv[0];
                        this.y = hsv[1] * 100;
                        this.z = hsv[2] * 100;
                        break;
                    }
                }
            }
            toParts() {
                switch (this.mode) {
                    case 0: {
                        return [this.x, this.y, this.z, this.a];
                    }
                    case 2: {
                        const rgb = P.utils.hsvToRGB(this.x / 360, this.y / 100, this.z / 100);
                        return [rgb[0], rgb[1], rgb[2], this.a];
                    }
                    case 1: {
                        const rgb = P.utils.hslToRGB(this.x / 360, this.y / 100, this.z / 100);
                        return [rgb[0], rgb[1], rgb[2], this.a];
                    }
                }
            }
            toCSS() {
                switch (this.mode) {
                    case 0:
                        return this.css;
                    case 1:
                        return 'hsla(' + this.x + ',' + this.y + '%,' + (this.z > 100 ? 200 - this.z : this.z) + '%,' + this.a + ')';
                    case 2: {
                        const rgb = P.utils.hsvToRGB(this.x / 360, this.y / 100, this.z / 100);
                        return 'rgba(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ', ' + this.a + ')';
                    }
                }
            }
            setParam(param, value) {
                this.toHSVA();
                switch (param) {
                    case 'color':
                        this.x = (value * 360 / 100) % 360;
                        if (this.x < 0)
                            this.x += 360;
                        break;
                    case 'saturation':
                        this.y = P.utils.clamp(value, 0, 100);
                        break;
                    case 'brightness':
                        this.z = P.utils.clamp(value, 0, 100);
                        break;
                    case 'transparency':
                        this.a = 1 - (value / 100);
                        if (this.a > 1)
                            this.a = 1;
                        if (this.a < 0)
                            this.a = 0;
                        break;
                }
            }
            changeParam(param, value) {
                this.toHSVA();
                switch (param) {
                    case 'color':
                        this.x = (this.x + value * 360 / 100) % 360;
                        if (this.x < 0)
                            this.x += 360;
                        break;
                    case 'saturation':
                        this.y = P.utils.clamp(this.y + value, 0, 100);
                        break;
                    case 'brightness':
                        this.z = P.utils.clamp(this.z + value, 0, 100);
                        break;
                    case 'transparency':
                        this.a = Math.max(0, Math.min(1, this.a - value / 100));
                        break;
                }
            }
            copy(other) {
                this.x = other.x;
                this.y = other.y;
                this.z = other.z;
                this.a = other.a;
                this.css = other.css;
                this.mode = other.mode;
            }
        }
        core.PenColor = PenColor;
        class Base {
            constructor() {
                this.isStage = false;
                this.isSprite = false;
                this.isClone = false;
                this.visible = true;
                this.scratchX = 0;
                this.scratchY = 0;
                this.name = '';
                this.costumes = [];
                this.currentCostumeIndex = 0;
                this.sounds = [];
                this.soundRefs = {};
                this.instrument = 0;
                this.volume = 1;
                this.node = null;
                this.activeSounds = new Set();
                this.watchers = {};
                this.listWatchers = {};
                this.vars = {};
                this.lists = {};
                this.saying = false;
                this.thinking = false;
                this.sayId = 0;
                this.procedures = {};
                this.listeners = {
                    whenClicked: [],
                    whenCloned: [],
                    whenGreenFlag: [],
                    whenIReceive: {},
                    whenKeyPressed: [],
                    whenSceneStarts: {},
                    edgeActivated: [],
                };
                this.fns = [];
                this.filters = {
                    color: 0,
                    fisheye: 0,
                    whirl: 0,
                    pixelate: 0,
                    mosaic: 0,
                    brightness: 0,
                    ghost: 0,
                };
                this.soundFilters = {
                    pitch: 0,
                };
                this.penSize = 1;
                this.penColor = new PenColor();
                this.isPenDown = false;
                for (var i = 0; i < 128; i++) {
                    this.listeners.whenKeyPressed.push([]);
                }
            }
            addSound(sound) {
                this.soundRefs[sound.name] = sound;
                this.sounds.push(sound);
            }
            showVariable(name, visible) {
                let watcher = this.watchers[name];
                if (!watcher) {
                    const newWatcher = this.createVariableWatcher(this, name);
                    if (!newWatcher) {
                        return;
                    }
                    newWatcher.init();
                    this.watchers[name] = watcher = newWatcher;
                    this.stage.allWatchers.push(watcher);
                }
                watcher.setVisible(visible);
            }
            showList(name, visible) {
                let watcher = this.listWatchers[name];
                if (!watcher) {
                    const newWatcher = this.createListWatcher(this, name);
                    if (!newWatcher) {
                        return;
                    }
                    newWatcher.init();
                    this.listWatchers[name] = watcher = newWatcher;
                    this.stage.allWatchers.push(watcher);
                }
                watcher.setVisible(visible);
            }
            showNextCostume() {
                this.currentCostumeIndex = (this.currentCostumeIndex + 1) % this.costumes.length;
                if (this.saying && isSprite(this))
                    this.updateBubble();
            }
            showPreviousCostume() {
                var length = this.costumes.length;
                this.currentCostumeIndex = (this.currentCostumeIndex + length - 1) % length;
                if (this.saying && isSprite(this))
                    this.updateBubble();
            }
            getCostumeName() {
                return this.costumes[this.currentCostumeIndex] ? this.costumes[this.currentCostumeIndex].name : '';
            }
            setCostume(costume) {
                if (typeof costume !== 'number') {
                    costume = '' + costume;
                    for (var i = 0; i < this.costumes.length; i++) {
                        if (this.costumes[i].name === costume) {
                            this.currentCostumeIndex = i;
                            if (this.saying && isSprite(this))
                                this.updateBubble();
                            return;
                        }
                    }
                    if (costume === (this.isSprite ? 'next costume' : 'next backdrop')) {
                        this.showNextCostume();
                        return;
                    }
                    if (costume === (this.isSprite ? 'previous costume' : 'previous backdrop')) {
                        this.showPreviousCostume();
                        return;
                    }
                    if (!isFinite(costume) || !/\d/.test(costume)) {
                        return;
                    }
                }
                var i = (Math.floor(costume) - 1 || 0) % this.costumes.length;
                if (i < 0)
                    i += this.costumes.length;
                this.currentCostumeIndex = i;
                if (isSprite(this) && this.saying)
                    this.updateBubble();
            }
            setFilter(name, value) {
                switch (name) {
                    case 'ghost':
                        if (value < 0)
                            value = 0;
                        if (value > 100)
                            value = 100;
                        break;
                    case 'brightness':
                        if (value < -100)
                            value = -100;
                        if (value > 100)
                            value = 100;
                        break;
                    case 'color':
                        if (value === Infinity) {
                            break;
                        }
                        value = value % 200;
                        if (value < 0)
                            value += 200;
                        break;
                }
                this.filters[name] = value;
            }
            changeFilter(name, value) {
                this.setFilter(name, this.filters[name] + value);
            }
            resetFilters() {
                this.filters = {
                    color: 0,
                    fisheye: 0,
                    whirl: 0,
                    pixelate: 0,
                    mosaic: 0,
                    brightness: 0,
                    ghost: 0
                };
                this.soundFilters = {
                    pitch: 0
                };
            }
            setSoundFilter(name, value) {
                value = value || 0;
                switch (name.toLowerCase()) {
                    case 'pitch':
                        this.soundFilters.pitch = value;
                        if (this.soundFilters.pitch > 360)
                            this.soundFilters.pitch = 360;
                        if (this.soundFilters.pitch < -360)
                            this.soundFilters.pitch = -360;
                        break;
                }
            }
            changeSoundFilter(name, value) {
                switch (name.toLowerCase()) {
                    case 'pitch':
                        this.soundFilters.pitch += value;
                        if (this.soundFilters.pitch > 360)
                            this.soundFilters.pitch = 360;
                        if (this.soundFilters.pitch < -360)
                            this.soundFilters.pitch = -360;
                        break;
                }
            }
            resetSoundFilters() {
                this.soundFilters = {
                    pitch: 0,
                };
            }
            getSound(name) {
                if (typeof name === 'string') {
                    var s = this.soundRefs[name];
                    if (s)
                        return s;
                    name = +name;
                }
                var l = this.sounds.length;
                if (l && typeof name === 'number' && name === name) {
                    var i = Math.round(name - 1) % l;
                    if (i < 0)
                        i += l;
                    return this.sounds[i];
                }
            }
            stopSounds() {
                if (this.node) {
                    for (const sound of this.activeSounds) {
                        sound.stopped = true;
                        if (sound.node) {
                            sound.node.disconnect();
                        }
                    }
                    this.activeSounds.clear();
                    this.node.disconnect();
                    this.node = null;
                }
            }
            stopSoundsExcept(originBase) {
                if (this.node) {
                    for (const sound of this.activeSounds) {
                        if (sound.base !== originBase) {
                            if (sound.node) {
                                sound.node.disconnect();
                            }
                            sound.stopped = true;
                            this.activeSounds.delete(sound);
                        }
                    }
                }
            }
            ask(question) {
                var stage = this.stage;
                if (question) {
                    if (this.visible && isSprite(this)) {
                        this.say(question);
                        stage.promptTitle.style.display = 'none';
                    }
                    else {
                        stage.promptTitle.style.display = 'block';
                        stage.promptTitle.textContent = question;
                    }
                }
                else {
                    stage.promptTitle.style.display = 'none';
                }
                stage.hidePrompt = false;
                stage.prompter.style.display = 'block';
                stage.prompt.value = '';
                stage.prompt.focus();
            }
            say(text, thinking = false) {
                text = '' + text;
                if (text.length === 0) {
                    this.saying = false;
                    if (this.bubbleContainer)
                        this.bubbleContainer.style.display = 'none';
                    return ++this.sayId;
                }
                this.saying = true;
                this.thinking = thinking;
                if (!this.bubbleContainer) {
                    this.bubbleContainer = document.createElement('div');
                    this.bubbleContainer.style.maxWidth = (127 / 14) + 'em';
                    this.bubbleContainer.style.minWidth = (48 / 14) + 'em';
                    this.bubbleContainer.style.padding = (8 / 14) + 'em ' + (10 / 14) + 'em';
                    this.bubbleContainer.style.border = (3 / 14) + 'em solid rgb(160, 160, 160)';
                    this.bubbleContainer.style.borderRadius = (10 / 14) + 'em';
                    this.bubbleContainer.style.background = '#fff';
                    this.bubbleContainer.style.position = 'absolute';
                    this.bubbleContainer.style.font = 'bold 1.4em sans-serif';
                    this.bubbleContainer.style.whiteSpace = 'pre-wrap';
                    this.bubbleContainer.style.wordWrap = 'break-word';
                    this.bubbleContainer.style.textAlign = 'center';
                    this.bubbleContainer.style.cursor = 'default';
                    this.bubbleContainer.style.pointerEvents = 'auto';
                    this.bubbleContainer.appendChild(this.bubbleText = document.createTextNode(''));
                    this.bubbleContainer.appendChild(this.bubblePointer = document.createElement('div'));
                    this.bubblePointer.style.position = 'absolute';
                    this.bubblePointer.style.height = (21 / 14) + 'em';
                    this.bubblePointer.style.width = (44 / 14) + 'em';
                    this.bubblePointer.style.background = 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMzg0IgogICBoZWlnaHQ9IjY0IgogICBpZD0ic3ZnMjk4NSIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJpY29ucy5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyOTg3IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSI1LjU5ODkwMDgiCiAgICAgaW5rc2NhcGU6Y3g9IjE5My43MDIxNCIKICAgICBpbmtzY2FwZTpjeT0iMjguNzUwODY5IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0idHJ1ZSIKICAgICBpbmtzY2FwZTpncmlkLWJib3g9InRydWUiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICB1bml0cz0iaW4iCiAgICAgd2lkdGg9IjEyaW4iPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIHR5cGU9Inh5Z3JpZCIKICAgICAgIGlkPSJncmlkMjk5MyIKICAgICAgIGVtcHNwYWNpbmc9IjQiCiAgICAgICB2aXNpYmxlPSJ0cnVlIgogICAgICAgZW5hYmxlZD0idHJ1ZSIKICAgICAgIHNuYXB2aXNpYmxlZ3JpZGxpbmVzb25seT0idHJ1ZSIgLz4KICAgIDxpbmtzY2FwZTpncmlkCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBpZD0iZ3JpZDM4MDUiCiAgICAgICBlbXBzcGFjaW5nPSIxIgogICAgICAgdmlzaWJsZT0idHJ1ZSIKICAgICAgIGVuYWJsZWQ9InRydWUiCiAgICAgICBzbmFwdmlzaWJsZWdyaWRsaW5lc29ubHk9InRydWUiCiAgICAgICBzcGFjaW5neD0iMzIiCiAgICAgICBzcGFjaW5neT0iMzIiCiAgICAgICBlbXBjb2xvcj0iIzAwMDAwMCIKICAgICAgIGVtcG9wYWNpdHk9IjAuNiIKICAgICAgIG9yaWdpbng9IjAiCiAgICAgICBvcmlnaW55PSIwIiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTI5OTAiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaWQ9ImxheWVyMSIKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMzIpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxMCwtOSB2IC0xNCBoIDIgdiAxNCB6IgogICAgICAgaWQ9InBhdGgyOTk1IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTIsLTIyIGMgMCwwIDMsLTEgNSwxIDIsMiA1LDEgNSwxIHYgOCBjIDAsMCAtMywxIC01LC0xIC0yLC0yIC01LC0xIC01LC0xIHoiCiAgICAgICBpZD0icGF0aDM3NjUiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjemNjemNjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDQyLC0yMyBoIDQgdiAxNCBoIC00IHoiCiAgICAgICBpZD0icGF0aDM4MDciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSA0OSwtMjMgaCA0IHYgMTQgaCAtNCB6IgogICAgICAgaWQ9InBhdGgzODE3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTA5LC05IGggNiBsIDQsLTQgdiAtNiBsIC00LC00IGggLTYgbCAtNCw0IHYgNiB6IgogICAgICAgaWQ9InBhdGgzODIxIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDc0LC0yMyAxMiw3IC0xMiw3IHoiCiAgICAgICBpZD0icGF0aDM4MjMiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDIwMSwtMjMgaCA3IHYgMiBoIC01IHYgMTAgaCAxMCB2IC01IGggMiB2IDcgaCAtMTQgeiIKICAgICAgIGlkPSJwYXRoMzkxMCIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMjA3LC0xNi41IDQuNSwtNC41IC0yLC0yIGggNS41IHYgNS41IGwgLTIsLTIgLTQuNSw0LjUgSCAyMDcgWiIKICAgICAgIGlkPSJwYXRoMzkxMiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxNTEsLTIzIHYgNS41IGwgLTIsLTIgLTIuNSwyLjUgLTAuNjU1ODcsLTAuNjU1ODY5IEwgMTQ1LC0xOC41IGwgMi41LC0yLjUgLTIsLTIgeiIKICAgICAgIGlkPSJwYXRoMzkzNiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoMzkzOCIKICAgICAgIGQ9Im0gMTM3LC0yMyBoIDUuNSBsIC0yLDIgMi41LDIuNSAtMS41LDEuNSAtMi41LC0yLjUgLTIsMiB6IgogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxMzcsLTkgdiAtNS41IGwgMiwyIDIuNSwtMi41IDEuNSwxLjUgLTIuNSwyLjUgMiwyIHoiCiAgICAgICBpZD0icGF0aDM5NDAiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDQxMDgiCiAgICAgICBkPSJtIDE1MSwtOSBoIC01LjUgbCAyLC0yIC0yLjUsLTIuNSAwLjY1NTg3LC0wLjY1NTg3IEwgMTQ2LjUsLTE1IGwgMi41LDIuNSAyLC0yIHoiCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJNIDEwLDIzIFYgOSBoIDIgdiAxNCB6IgogICAgICAgaWQ9InBhdGgyOTk1LTciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxMiwxMCBjIDAsMCAzLC0xIDUsMSAyLDIgNSwxIDUsMSB2IDggYyAwLDAgLTMsMSAtNSwtMSAtMiwtMiAtNSwtMSAtNSwtMSB6IgogICAgICAgaWQ9InBhdGgzNzY1LTgiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjemNjemNjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDQyLDkgaCA0IHYgMTQgaCAtNCB6IgogICAgICAgaWQ9InBhdGgzODA3LTEiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSA0OSw5IGggNCB2IDE0IGggLTQgeiIKICAgICAgIGlkPSJwYXRoMzgxNy0zIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTA5LDIzIGggNiBsIDQsLTQgdiAtNiBsIC00LC00IGggLTYgbCAtNCw0IHYgNiB6IgogICAgICAgaWQ9InBhdGgzODIxLTQiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gNzQsOSAxMiw3IC0xMiw3IHoiCiAgICAgICBpZD0icGF0aDM4MjMtMiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Ik0gMTc3LDE1IFYgOS41IGwgMiwyIDIuNSwtMi41IDAuNjU1ODcsMC42NTU4NjkgTCAxODMsMTAuNSBsIC0yLjUsMi41IDIsMiB6IgogICAgICAgaWQ9InBhdGgzOTM2LTIiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDM5MzgtNyIKICAgICAgIGQ9Im0gMTc1LDE1IGggLTUuNSBsIDIsLTIgLTIuNSwtMi41IDEuNSwtMS41IDIuNSwyLjUgMiwtMiB6IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxNzUsMTcgdiA1LjUgbCAtMiwtMiAtMi41LDIuNSAtMS41LC0xLjUgMi41LC0yLjUgLTIsLTIgeiIKICAgICAgIGlkPSJwYXRoMzk0MC03IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2MiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InBhdGg0MDExIgogICAgICAgZD0ibSAxNzcsMTcgaCA1LjUgbCAtMiwyIDIuNSwyLjUgLTAuNjU1ODcsMC42NTU4NyBMIDE4MS41LDIzIDE3OSwyMC41IGwgLTIsMiB6IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJmaWxsOiMyZWFlZGY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBpZD0icGF0aDI5ODciCiAgICAgICBjeD0iMjQwIgogICAgICAgY3k9Ii0xNiIKICAgICAgIHI9IjEwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDIzNCwtMTQuNSA0LDQgNywtNyB2IC00IGwgLTcsNyAtMiwtMiB6IgogICAgICAgaWQ9InBhdGgzNzU3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OlNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpTYW5zO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7ZmlsbDojYTBhMGEwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDozO21hcmtlcjpub25lO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiCiAgICAgICBkPSJtIDI2OCwtMjggYyAwLDAgLTUuMDU2MiwxMi43OTcyIC02LjI0OTE0LDE1LjYyMjg0MSAtMS4xOTI5MywyLjgyNTY0MiAwLjE4OTM3LDMuNjEwMDkyIDIuNzcxNjUsMi41ODkxOSBDIDI2Ny4xMDQ3OSwtMTAuODA4ODcxIDMwMywtMjUgMzAzLC0yNSB2IC0zIGwgLTM4LDE1IDYsLTE1IHoiCiAgICAgICBpZD0icGF0aDM4NTciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjenpjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAyNjUsLTEzIDYsLTE1IGggMzIgeiIKICAgICAgIGlkPSJwYXRoMzg2NSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpTYW5zOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246U2Fuczt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6I2EwYTBhMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MzttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIgogICAgICAgZD0ibSAyOTUsNCBjIDAsMCA1LjA1NjIsMTIuNzk3MiA2LjI0OTE0LDE1LjYyMjg0MSAxLjE5MjkzLDIuODI1NjQyIC0wLjE4OTM3LDMuNjEwMDkyIC0yLjc3MTY1LDIuNTg5MTkgQyAyOTUuODk1MjEsMjEuMTkxMTI5IDI2MCw3IDI2MCw3IFYgNCBsIDM4LDE1IC02LC0xNSB6IgogICAgICAgaWQ9InBhdGgzODU3LTMiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjenpjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0iTSAyOTgsMTkgMjkyLDQgaCAtMzIgeiIKICAgICAgIGlkPSJwYXRoMzg2NS04IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjYyIgLz4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojYTBhMGEwO3N0cm9rZS13aWR0aDowLjk5OTkwMDk0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDM5NzUiCiAgICAgICBjeD0iMzI4LjkxNjQ3IgogICAgICAgY3k9Ii0xMC40MTY0NTgiCiAgICAgICByeD0iMy41MDAwNDk2IgogICAgICAgcnk9IjIuMDAwMDQ5NiIgLz4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojYTBhMGEwO3N0cm9rZS13aWR0aDoxLjM1Nzc5NzE1O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDM5NzUtNiIKICAgICAgIGN4PSIzMzUuNzE3NSIKICAgICAgIGN5PSItMTQuNDUwMDAxIgogICAgICAgcng9IjQuMTcxMTAxNiIKICAgICAgIHJ5PSIyLjA3MTEwMTQiIC8+CiAgICA8ZWxsaXBzZQogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2EwYTBhMDtzdHJva2Utd2lkdGg6MS44MjY0NzAxNDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9InBhdGgzOTc1LTYtNiIKICAgICAgIGN4PSIzNDEuNSIKICAgICAgIGN5PSItMjEiCiAgICAgICByeD0iNS40OTk5OTgxIgogICAgICAgcnk9IjMuMDk0NzM0NyIgLz4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojYTBhMGEwO3N0cm9rZS13aWR0aDowLjk5OTkwMDk0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDM5NzUtMSIKICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoLTEsMSkiCiAgICAgICBjeD0iLTM2My4wODM1NiIKICAgICAgIGN5PSIyMS41ODQiCiAgICAgICByeD0iMy41MDAwNDk2IgogICAgICAgcnk9IjIuMDAwMDQ5NiIgLz4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojYTBhMGEwO3N0cm9rZS13aWR0aDoxLjM1Nzc5NzE1O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDM5NzUtNi0zIgogICAgICAgdHJhbnNmb3JtPSJzY2FsZSgtMSwxKSIKICAgICAgIGN4PSItMzU2LjI4MjUiCiAgICAgICBjeT0iMTcuNTUwNDU3IgogICAgICAgcng9IjQuMTcxMTAxNiIKICAgICAgIHJ5PSIyLjA3MTEwMTQiIC8+CiAgICA8ZWxsaXBzZQogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2EwYTBhMDtzdHJva2Utd2lkdGg6MS44MjY0NzAxNDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9InBhdGgzOTc1LTYtNi00IgogICAgICAgdHJhbnNmb3JtPSJzY2FsZSgtMSwxKSIKICAgICAgIGN4PSItMzUwLjUiCiAgICAgICBjeT0iMTEuMDAwNDYiCiAgICAgICByeD0iNS40OTk5OTgxIgogICAgICAgcnk9IjMuMDk0NzM0NyIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDMwNDUiCiAgICAgICBkPSJtIDE1MSw5IHYgNS41IGwgLTIsLTIgLTIuNSwyLjUgLTAuNjU1ODcsLTAuNjU1ODY5IEwgMTQ1LDEzLjUgbCAyLjUsLTIuNSAtMiwtMiB6IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxMzcsOSBoIDUuNSBsIC0yLDIgMi41LDIuNSAtMS41LDEuNSAtMi41LC0yLjUgLTIsMiB6IgogICAgICAgaWQ9InBhdGgzMDQ3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDMwNDkiCiAgICAgICBkPSJtIDEzNywyMyB2IC01LjUgbCAyLDIgMi41LC0yLjUgMS41LDEuNSAtMi41LDIuNSAyLDIgeiIKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTUxLDIzIGggLTUuNSBsIDIsLTIgLTIuNSwtMi41IDAuNjU1ODcsLTAuNjU1ODcgTCAxNDYuNSwxNyBsIDIuNSwyLjUgMiwtMiB6IgogICAgICAgaWQ9InBhdGgzMDUxIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDQ3IgogICAgICAgZD0ibSAyMDEsOSBoIDcgdiAyIGggLTUgdiAxMCBoIDEwIHYgLTUgaCAyIHYgNyBoIC0xNCB6IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDQ5IgogICAgICAgZD0ibSAyMDcsMTUuNSA0LjUsLTQuNSAtMiwtMiBoIDUuNSB2IDUuNSBsIC0yLC0yIC00LjUsNC41IEggMjA3IFoiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgogICAgPHBhdGgKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoNDU1NyIKICAgICAgIGQ9Im0gMTc3LC0xNyB2IC01LjUgbCAyLDIgMi41LC0yLjUgMC42NTU4NywwLjY1NTg2OSBMIDE4MywtMjEuNSBsIC0yLjUsMi41IDIsMiB6IgogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxNzUsLTE3IGggLTUuNSBsIDIsLTIgLTIuNSwtMi41IDEuNSwtMS41IDIuNSwyLjUgMiwtMiB6IgogICAgICAgaWQ9InBhdGg0NTU5IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDQ1NjEiCiAgICAgICBkPSJtIDE3NSwtMTUgdiA1LjUgbCAtMiwtMiAtMi41LDIuNSAtMS41LC0xLjUgMi41LC0yLjUgLTIsLTIgeiIKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTc3LC0xNSBoIDUuNSBsIC0yLDIgMi41LDIuNSAtMC42NTU4NywwLjY1NTg3IEwgMTgxLjUsLTkgbCAtMi41LC0yLjUgLTIsMiB6IgogICAgICAgaWQ9InBhdGg0NTYzIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIiAvPgogIDwvZz4KPC9zdmc+Cg==")';
                    this.bubblePointer.style.backgroundSize = (384 / 14) + 'em ' + (64 / 14) + 'em';
                    this.bubblePointer.style.backgroundPositionY = (-4 / 14) + 'em';
                    this.stage.ui.appendChild(this.bubbleContainer);
                }
                this.bubblePointer.style.backgroundPositionX = (thinking ? -323 : -259) / 14 + 'em';
                this.bubbleContainer.style.display = 'block';
                this.bubbleText.nodeValue = text;
                this.updateBubble();
                return ++this.sayId;
            }
            updateBubble() {
                if (!this.visible || !this.saying) {
                    this.bubbleContainer.style.display = 'none';
                    return;
                }
                this.bubbleContainer.style.display = 'block';
                const b = this.rotatedBounds();
                const left = 240 + b.right;
                var bottom = 180 + b.top;
                const width = this.bubbleContainer.offsetWidth / this.stage.zoom;
                const height = this.bubbleContainer.offsetHeight / this.stage.zoom;
                this.bubblePointer.style.top = ((height - 6) / 14) + 'em';
                if (left + width + 2 > 480) {
                    var d = (240 - b.left) / 14;
                    if (d > 25)
                        d = 25;
                    this.bubbleContainer.style.right = d + 'em';
                    this.bubbleContainer.style.left = 'auto';
                    this.bubblePointer.style.right = (3 / 14) + 'em';
                    this.bubblePointer.style.left = 'auto';
                    this.bubblePointer.style.backgroundPositionY = (-36 / 14) + 'em';
                }
                else {
                    this.bubbleContainer.style.left = (left / 14) + 'em';
                    this.bubbleContainer.style.right = 'auto';
                    this.bubblePointer.style.left = (3 / 14) + 'em';
                    this.bubblePointer.style.right = 'auto';
                    this.bubblePointer.style.backgroundPositionY = (-4 / 14) + 'em';
                }
                if (bottom + height + 2 > 360) {
                    bottom = 360 - height - 2;
                }
                if (bottom < 19) {
                    bottom = 19;
                }
                this.bubbleContainer.style.bottom = (bottom / 14) + 'em';
            }
            remove() {
                if (this.bubbleContainer) {
                    this.stage.ui.removeChild(this.bubbleContainer);
                }
                if (this.node && this.isClone && !this.isStage) {
                    for (const sound of this.activeSounds) {
                        if (sound.node) {
                            sound.node.disconnect();
                        }
                        sound.stopped = true;
                    }
                    this.activeSounds.clear();
                    this.node.disconnect();
                    this.node.connect(this.stage.getAudioNode());
                    this.node = null;
                }
            }
            getAudioNode() {
                if (this.node) {
                    return this.node;
                }
                if (!P.audio.context) {
                    throw new Error('No audio context');
                }
                this.node = P.audio.context.createGain();
                this.node.gain.value = this.volume;
                P.audio.connectNode(this.node);
                return this.node;
            }
            createVariableWatcher(target, variableName) {
                return null;
            }
            createListWatcher(target, listName) {
                return null;
            }
            dotPen() {
                this.stage.renderer.penDot(this.penColor, this.penSize, this.scratchX, this.scratchY);
            }
            stamp() {
                this.stage.renderer.penStamp(this);
            }
            setPenColor(color) {
                if (typeof color === 'string') {
                    if (color.startsWith('#')) {
                        color = parseInt(color.substr(1), 16);
                    }
                    else if (color.startsWith('0x')) {
                        color = parseInt(color.substr(2), 16);
                    }
                    else {
                        color = +color;
                    }
                }
                this.penColor.setRGBA(color);
            }
        }
        core.Base = Base;
        class Stage extends Base {
            constructor() {
                super();
                this.stage = this;
                this.isStage = true;
                this.children = [];
                this.allWatchers = [];
                this.answer = '';
                this.promptId = 0;
                this.nextPromptId = 0;
                this.hidePrompt = false;
                this.zoom = 1;
                this.rawMouseX = 0;
                this.rawMouseY = 0;
                this.mouseX = 0;
                this.mouseY = 0;
                this.mousePressed = false;
                this.tempoBPM = 60;
                this.username = '';
                this.counter = 0;
                this.cloudHandler = null;
                this.cloudVariables = [];
                this.microphone = null;
                this.tts = null;
                this.extensions = [];
                this.useSpriteFencing = false;
                this.runtime = new P.runtime.Runtime(this);
                this.keys = [];
                this.keys.any = 0;
                this.root = document.createElement('div');
                this.root.classList.add('forkphorus-root');
                if (P.config.useWebGL) {
                    this.renderer = new P.renderer.webgl.WebGLProjectRenderer(this);
                }
                else {
                    this.renderer = new P.renderer.canvas2d.ProjectRenderer2D(this);
                }
                this.renderer.resize(1);
                this.renderer.init(this.root);
                this.canvas = this.renderer.canvas;
                this.ui = document.createElement('div');
                this.root.appendChild(this.ui);
                this.ui.style.pointerEvents = 'none';
                this.canvas.tabIndex = 0;
                this.canvas.style.outline = 'none';
                this.prompter = document.createElement('div');
                this.ui.appendChild(this.prompter);
                this.prompter.style.zIndex = '1';
                this.prompter.style.pointerEvents = 'auto';
                this.prompter.style.position = 'absolute';
                this.prompter.style.left =
                    this.prompter.style.right = '1.4em';
                this.prompter.style.bottom = '.6em';
                this.prompter.style.padding = '.5em 3.0em .5em .5em';
                this.prompter.style.border = '.3em solid rgb(46, 174, 223)';
                this.prompter.style.borderRadius = '.8em';
                this.prompter.style.background = '#fff';
                this.prompter.style.display = 'none';
                this.promptTitle = document.createElement('div');
                this.prompter.appendChild(this.promptTitle);
                this.promptTitle.textContent = '';
                this.promptTitle.style.cursor = 'default';
                this.promptTitle.style.font = 'bold 1.3em sans-serif';
                this.promptTitle.style.margin = '0 ' + (-25 / 13) + 'em ' + (5 / 13) + 'em 0';
                this.promptTitle.style.whiteSpace = 'pre';
                this.promptTitle.style.overflow = 'hidden';
                this.promptTitle.style.textOverflow = 'ellipsis';
                this.prompt = document.createElement('input');
                this.prompter.appendChild(this.prompt);
                this.prompt.style.border = '0';
                this.prompt.style.background = '#eee';
                this.prompt.style.boxSizing = 'border-box';
                this.prompt.style.font = '1.3em sans-serif';
                this.prompt.style.padding = '0 ' + (3 / 13) + 'em';
                this.prompt.style.outline = '0';
                this.prompt.style.margin = '0';
                this.prompt.style.width = '100%';
                this.prompt.style.height = '' + (20 / 13) + 'em';
                this.prompt.style.display = 'block';
                this.prompt.style.borderRadius = '0';
                this.prompt.style.boxShadow = 'inset ' + (1 / 13) + 'em ' + (1 / 13) + 'em ' + (2 / 13) + 'em rgba(0, 0, 0, .2), inset ' + (-1 / 13) + 'em ' + (-1 / 13) + 'em ' + (1 / 13) + 'em rgba(255, 255, 255, .2)';
                this.prompt.style.webkitAppearance = 'none';
                this.promptButton = document.createElement('div');
                this.prompter.appendChild(this.promptButton);
                this.promptButton.style.width = '2.2em';
                this.promptButton.style.height = '2.2em';
                this.promptButton.style.position = 'absolute';
                this.promptButton.style.right = '.4em';
                this.promptButton.style.bottom = '.4em';
                this.promptButton.style.background = 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMzg0IgogICBoZWlnaHQ9IjY0IgogICBpZD0ic3ZnMjk4NSIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJpY29ucy5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyOTg3IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSI1LjU5ODkwMDgiCiAgICAgaW5rc2NhcGU6Y3g9IjE5My43MDIxNCIKICAgICBpbmtzY2FwZTpjeT0iMjguNzUwODY5IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0idHJ1ZSIKICAgICBpbmtzY2FwZTpncmlkLWJib3g9InRydWUiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICB1bml0cz0iaW4iCiAgICAgd2lkdGg9IjEyaW4iPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIHR5cGU9Inh5Z3JpZCIKICAgICAgIGlkPSJncmlkMjk5MyIKICAgICAgIGVtcHNwYWNpbmc9IjQiCiAgICAgICB2aXNpYmxlPSJ0cnVlIgogICAgICAgZW5hYmxlZD0idHJ1ZSIKICAgICAgIHNuYXB2aXNpYmxlZ3JpZGxpbmVzb25seT0idHJ1ZSIgLz4KICAgIDxpbmtzY2FwZTpncmlkCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBpZD0iZ3JpZDM4MDUiCiAgICAgICBlbXBzcGFjaW5nPSIxIgogICAgICAgdmlzaWJsZT0idHJ1ZSIKICAgICAgIGVuYWJsZWQ9InRydWUiCiAgICAgICBzbmFwdmlzaWJsZWdyaWRsaW5lc29ubHk9InRydWUiCiAgICAgICBzcGFjaW5neD0iMzIiCiAgICAgICBzcGFjaW5neT0iMzIiCiAgICAgICBlbXBjb2xvcj0iIzAwMDAwMCIKICAgICAgIGVtcG9wYWNpdHk9IjAuNiIKICAgICAgIG9yaWdpbng9IjAiCiAgICAgICBvcmlnaW55PSIwIiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTI5OTAiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaWQ9ImxheWVyMSIKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMzIpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxMCwtOSB2IC0xNCBoIDIgdiAxNCB6IgogICAgICAgaWQ9InBhdGgyOTk1IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTIsLTIyIGMgMCwwIDMsLTEgNSwxIDIsMiA1LDEgNSwxIHYgOCBjIDAsMCAtMywxIC01LC0xIC0yLC0yIC01LC0xIC01LC0xIHoiCiAgICAgICBpZD0icGF0aDM3NjUiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjemNjemNjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDQyLC0yMyBoIDQgdiAxNCBoIC00IHoiCiAgICAgICBpZD0icGF0aDM4MDciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSA0OSwtMjMgaCA0IHYgMTQgaCAtNCB6IgogICAgICAgaWQ9InBhdGgzODE3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTA5LC05IGggNiBsIDQsLTQgdiAtNiBsIC00LC00IGggLTYgbCAtNCw0IHYgNiB6IgogICAgICAgaWQ9InBhdGgzODIxIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDc0LC0yMyAxMiw3IC0xMiw3IHoiCiAgICAgICBpZD0icGF0aDM4MjMiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDIwMSwtMjMgaCA3IHYgMiBoIC01IHYgMTAgaCAxMCB2IC01IGggMiB2IDcgaCAtMTQgeiIKICAgICAgIGlkPSJwYXRoMzkxMCIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMjA3LC0xNi41IDQuNSwtNC41IC0yLC0yIGggNS41IHYgNS41IGwgLTIsLTIgLTQuNSw0LjUgSCAyMDcgWiIKICAgICAgIGlkPSJwYXRoMzkxMiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxNTEsLTIzIHYgNS41IGwgLTIsLTIgLTIuNSwyLjUgLTAuNjU1ODcsLTAuNjU1ODY5IEwgMTQ1LC0xOC41IGwgMi41LC0yLjUgLTIsLTIgeiIKICAgICAgIGlkPSJwYXRoMzkzNiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoMzkzOCIKICAgICAgIGQ9Im0gMTM3LC0yMyBoIDUuNSBsIC0yLDIgMi41LDIuNSAtMS41LDEuNSAtMi41LC0yLjUgLTIsMiB6IgogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxMzcsLTkgdiAtNS41IGwgMiwyIDIuNSwtMi41IDEuNSwxLjUgLTIuNSwyLjUgMiwyIHoiCiAgICAgICBpZD0icGF0aDM5NDAiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDQxMDgiCiAgICAgICBkPSJtIDE1MSwtOSBoIC01LjUgbCAyLC0yIC0yLjUsLTIuNSAwLjY1NTg3LC0wLjY1NTg3IEwgMTQ2LjUsLTE1IGwgMi41LDIuNSAyLC0yIHoiCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJNIDEwLDIzIFYgOSBoIDIgdiAxNCB6IgogICAgICAgaWQ9InBhdGgyOTk1LTciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxMiwxMCBjIDAsMCAzLC0xIDUsMSAyLDIgNSwxIDUsMSB2IDggYyAwLDAgLTMsMSAtNSwtMSAtMiwtMiAtNSwtMSAtNSwtMSB6IgogICAgICAgaWQ9InBhdGgzNzY1LTgiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjemNjemNjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDQyLDkgaCA0IHYgMTQgaCAtNCB6IgogICAgICAgaWQ9InBhdGgzODA3LTEiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSA0OSw5IGggNCB2IDE0IGggLTQgeiIKICAgICAgIGlkPSJwYXRoMzgxNy0zIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTA5LDIzIGggNiBsIDQsLTQgdiAtNiBsIC00LC00IGggLTYgbCAtNCw0IHYgNiB6IgogICAgICAgaWQ9InBhdGgzODIxLTQiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gNzQsOSAxMiw3IC0xMiw3IHoiCiAgICAgICBpZD0icGF0aDM4MjMtMiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Ik0gMTc3LDE1IFYgOS41IGwgMiwyIDIuNSwtMi41IDAuNjU1ODcsMC42NTU4NjkgTCAxODMsMTAuNSBsIC0yLjUsMi41IDIsMiB6IgogICAgICAgaWQ9InBhdGgzOTM2LTIiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDM5MzgtNyIKICAgICAgIGQ9Im0gMTc1LDE1IGggLTUuNSBsIDIsLTIgLTIuNSwtMi41IDEuNSwtMS41IDIuNSwyLjUgMiwtMiB6IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxNzUsMTcgdiA1LjUgbCAtMiwtMiAtMi41LDIuNSAtMS41LC0xLjUgMi41LC0yLjUgLTIsLTIgeiIKICAgICAgIGlkPSJwYXRoMzk0MC03IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2MiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InBhdGg0MDExIgogICAgICAgZD0ibSAxNzcsMTcgaCA1LjUgbCAtMiwyIDIuNSwyLjUgLTAuNjU1ODcsMC42NTU4NyBMIDE4MS41LDIzIDE3OSwyMC41IGwgLTIsMiB6IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJmaWxsOiMyZWFlZGY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBpZD0icGF0aDI5ODciCiAgICAgICBjeD0iMjQwIgogICAgICAgY3k9Ii0xNiIKICAgICAgIHI9IjEwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDIzNCwtMTQuNSA0LDQgNywtNyB2IC00IGwgLTcsNyAtMiwtMiB6IgogICAgICAgaWQ9InBhdGgzNzU3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OlNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpTYW5zO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7ZmlsbDojYTBhMGEwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDozO21hcmtlcjpub25lO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiCiAgICAgICBkPSJtIDI2OCwtMjggYyAwLDAgLTUuMDU2MiwxMi43OTcyIC02LjI0OTE0LDE1LjYyMjg0MSAtMS4xOTI5MywyLjgyNTY0MiAwLjE4OTM3LDMuNjEwMDkyIDIuNzcxNjUsMi41ODkxOSBDIDI2Ny4xMDQ3OSwtMTAuODA4ODcxIDMwMywtMjUgMzAzLC0yNSB2IC0zIGwgLTM4LDE1IDYsLTE1IHoiCiAgICAgICBpZD0icGF0aDM4NTciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjenpjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAyNjUsLTEzIDYsLTE1IGggMzIgeiIKICAgICAgIGlkPSJwYXRoMzg2NSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpTYW5zOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246U2Fuczt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6I2EwYTBhMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MzttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIgogICAgICAgZD0ibSAyOTUsNCBjIDAsMCA1LjA1NjIsMTIuNzk3MiA2LjI0OTE0LDE1LjYyMjg0MSAxLjE5MjkzLDIuODI1NjQyIC0wLjE4OTM3LDMuNjEwMDkyIC0yLjc3MTY1LDIuNTg5MTkgQyAyOTUuODk1MjEsMjEuMTkxMTI5IDI2MCw3IDI2MCw3IFYgNCBsIDM4LDE1IC02LC0xNSB6IgogICAgICAgaWQ9InBhdGgzODU3LTMiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjenpjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0iTSAyOTgsMTkgMjkyLDQgaCAtMzIgeiIKICAgICAgIGlkPSJwYXRoMzg2NS04IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjYyIgLz4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojYTBhMGEwO3N0cm9rZS13aWR0aDowLjk5OTkwMDk0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDM5NzUiCiAgICAgICBjeD0iMzI4LjkxNjQ3IgogICAgICAgY3k9Ii0xMC40MTY0NTgiCiAgICAgICByeD0iMy41MDAwNDk2IgogICAgICAgcnk9IjIuMDAwMDQ5NiIgLz4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojYTBhMGEwO3N0cm9rZS13aWR0aDoxLjM1Nzc5NzE1O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDM5NzUtNiIKICAgICAgIGN4PSIzMzUuNzE3NSIKICAgICAgIGN5PSItMTQuNDUwMDAxIgogICAgICAgcng9IjQuMTcxMTAxNiIKICAgICAgIHJ5PSIyLjA3MTEwMTQiIC8+CiAgICA8ZWxsaXBzZQogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2EwYTBhMDtzdHJva2Utd2lkdGg6MS44MjY0NzAxNDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9InBhdGgzOTc1LTYtNiIKICAgICAgIGN4PSIzNDEuNSIKICAgICAgIGN5PSItMjEiCiAgICAgICByeD0iNS40OTk5OTgxIgogICAgICAgcnk9IjMuMDk0NzM0NyIgLz4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojYTBhMGEwO3N0cm9rZS13aWR0aDowLjk5OTkwMDk0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDM5NzUtMSIKICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoLTEsMSkiCiAgICAgICBjeD0iLTM2My4wODM1NiIKICAgICAgIGN5PSIyMS41ODQiCiAgICAgICByeD0iMy41MDAwNDk2IgogICAgICAgcnk9IjIuMDAwMDQ5NiIgLz4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojYTBhMGEwO3N0cm9rZS13aWR0aDoxLjM1Nzc5NzE1O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDM5NzUtNi0zIgogICAgICAgdHJhbnNmb3JtPSJzY2FsZSgtMSwxKSIKICAgICAgIGN4PSItMzU2LjI4MjUiCiAgICAgICBjeT0iMTcuNTUwNDU3IgogICAgICAgcng9IjQuMTcxMTAxNiIKICAgICAgIHJ5PSIyLjA3MTEwMTQiIC8+CiAgICA8ZWxsaXBzZQogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2EwYTBhMDtzdHJva2Utd2lkdGg6MS44MjY0NzAxNDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9InBhdGgzOTc1LTYtNi00IgogICAgICAgdHJhbnNmb3JtPSJzY2FsZSgtMSwxKSIKICAgICAgIGN4PSItMzUwLjUiCiAgICAgICBjeT0iMTEuMDAwNDYiCiAgICAgICByeD0iNS40OTk5OTgxIgogICAgICAgcnk9IjMuMDk0NzM0NyIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDMwNDUiCiAgICAgICBkPSJtIDE1MSw5IHYgNS41IGwgLTIsLTIgLTIuNSwyLjUgLTAuNjU1ODcsLTAuNjU1ODY5IEwgMTQ1LDEzLjUgbCAyLjUsLTIuNSAtMiwtMiB6IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxMzcsOSBoIDUuNSBsIC0yLDIgMi41LDIuNSAtMS41LDEuNSAtMi41LC0yLjUgLTIsMiB6IgogICAgICAgaWQ9InBhdGgzMDQ3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDMwNDkiCiAgICAgICBkPSJtIDEzNywyMyB2IC01LjUgbCAyLDIgMi41LC0yLjUgMS41LDEuNSAtMi41LDIuNSAyLDIgeiIKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTUxLDIzIGggLTUuNSBsIDIsLTIgLTIuNSwtMi41IDAuNjU1ODcsLTAuNjU1ODcgTCAxNDYuNSwxNyBsIDIuNSwyLjUgMiwtMiB6IgogICAgICAgaWQ9InBhdGgzMDUxIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDQ3IgogICAgICAgZD0ibSAyMDEsOSBoIDcgdiAyIGggLTUgdiAxMCBoIDEwIHYgLTUgaCAyIHYgNyBoIC0xNCB6IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDQ5IgogICAgICAgZD0ibSAyMDcsMTUuNSA0LjUsLTQuNSAtMiwtMiBoIDUuNSB2IDUuNSBsIC0yLC0yIC00LjUsNC41IEggMjA3IFoiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgogICAgPHBhdGgKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoNDU1NyIKICAgICAgIGQ9Im0gMTc3LC0xNyB2IC01LjUgbCAyLDIgMi41LC0yLjUgMC42NTU4NywwLjY1NTg2OSBMIDE4MywtMjEuNSBsIC0yLjUsMi41IDIsMiB6IgogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxNzUsLTE3IGggLTUuNSBsIDIsLTIgLTIuNSwtMi41IDEuNSwtMS41IDIuNSwyLjUgMiwtMiB6IgogICAgICAgaWQ9InBhdGg0NTU5IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDQ1NjEiCiAgICAgICBkPSJtIDE3NSwtMTUgdiA1LjUgbCAtMiwtMiAtMi41LDIuNSAtMS41LC0xLjUgMi41LC0yLjUgLTIsLTIgeiIKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTc3LC0xNSBoIDUuNSBsIC0yLDIgMi41LDIuNSAtMC42NTU4NywwLjY1NTg3IEwgMTgxLjUsLTkgbCAtMi41LC0yLjUgLTIsMiB6IgogICAgICAgaWQ9InBhdGg0NTYzIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIiAvPgogIDwvZz4KPC9zdmc+Cg==) -22.8em -0.4em';
                this.promptButton.style.backgroundSize = '38.4em 6.4em';
                this.addEventListeners();
            }
            addEventListeners() {
                this._onmousedown = this._onmousedown.bind(this);
                this._onmouseup = this._onmouseup.bind(this);
                this._onmousemove = this._onmousemove.bind(this);
                this._ontouchstart = this._ontouchstart.bind(this);
                this._ontouchend = this._ontouchend.bind(this);
                this._ontouchmove = this._ontouchmove.bind(this);
                document.addEventListener('mousedown', this._onmousedown);
                document.addEventListener('mouseup', this._onmouseup);
                document.addEventListener('mousemove', this._onmousemove);
                document.addEventListener('touchstart', this._ontouchstart, { passive: false });
                document.addEventListener('touchend', this._ontouchend);
                document.addEventListener('touchmove', this._ontouchmove);
                this.root.addEventListener('wheel', this._onwheel.bind(this));
                this.root.addEventListener('keyup', this._onkeyup.bind(this));
                this.root.addEventListener('keydown', this._onkeydown.bind(this));
                this.promptButton.addEventListener('touchstart', this.submitPrompt.bind(this));
                this.promptButton.addEventListener('mousedown', this.submitPrompt.bind(this));
                this.prompt.addEventListener('keydown', (e) => {
                    if (e.keyCode === 13)
                        this.submitPrompt();
                });
            }
            removeEventListeners() {
                document.removeEventListener('mousedown', this._onmousedown);
                document.removeEventListener('mouseup', this._onmouseup);
                document.removeEventListener('mousemove', this._onmousemove);
                document.removeEventListener('touchstart', this._ontouchstart);
                document.removeEventListener('touchend', this._ontouchend);
                document.removeEventListener('touchmove', this._ontouchmove);
            }
            _onwheel(e) {
                if (e.deltaY > 0) {
                    this.runtime.trigger('whenKeyPressed', 40);
                }
                else if (e.deltaY < 0) {
                    this.runtime.trigger('whenKeyPressed', 38);
                }
            }
            keyEventToCode(e) {
                const key = e.key;
                switch (key) {
                    case 'Enter': return 13;
                    case 'ArrowLeft':
                    case 'Left': return 37;
                    case 'ArrowUp':
                    case 'Up': return 38;
                    case 'ArrowRight':
                    case 'Right': return 39;
                    case 'ArrowDown':
                    case 'Down': return 40;
                }
                if (key.length !== 1) {
                    return -1;
                }
                return key.toUpperCase().charCodeAt(0);
            }
            _onkeyup(e) {
                const c = this.keyEventToCode(e);
                if (c === -1)
                    return;
                if (this.keys[c])
                    this.keys.any--;
                this.keys[c] = false;
                e.stopPropagation();
                if (e.target === this.canvas) {
                    e.preventDefault();
                }
            }
            _onkeydown(e) {
                const c = this.keyEventToCode(e);
                if (c === -1)
                    return;
                if (!this.keys[c])
                    this.keys.any++;
                this.keys[c] = true;
                if (e.ctrlKey || e.altKey || e.metaKey || c === 27)
                    return;
                e.stopPropagation();
                if (e.target === this.canvas) {
                    e.preventDefault();
                    this.runtime.trigger('whenKeyPressed', c);
                }
            }
            _onmousedown(e) {
                if (!this.runtime.isRunning)
                    return;
                this.updateMousePosition(e);
                this.mousePressed = true;
                if (e.target === this.canvas) {
                    this.clickMouse();
                    e.preventDefault();
                    this.canvas.focus();
                }
                this.onmousedown(e);
            }
            _onmouseup(e) {
                if (!this.runtime.isRunning)
                    return;
                this.updateMousePosition(e);
                this.releaseMouse();
                this.onmouseup(e);
            }
            _onmousemove(e) {
                if (!this.runtime.isRunning)
                    return;
                this.updateMousePosition(e);
                this.onmousemove(e);
            }
            _ontouchend(e) {
                if (!this.runtime.isRunning)
                    return;
                this.releaseMouse();
                for (var i = 0; i < e.changedTouches.length; i++) {
                    const t = e.changedTouches[i];
                    this.ontouch(e, t);
                }
            }
            _ontouchstart(e) {
                if (!this.runtime.isRunning)
                    return;
                this.mousePressed = true;
                for (var i = 0; i < e.changedTouches.length; i++) {
                    const t = e.changedTouches[i];
                    this.updateMousePosition(t);
                    if (e.target === this.canvas) {
                        this.clickMouse();
                    }
                    this.ontouch(e, t);
                }
                if (e.target === this.canvas)
                    e.preventDefault();
            }
            _ontouchmove(e) {
                if (!this.runtime.isRunning)
                    return;
                this.updateMousePosition(e.changedTouches[0]);
                for (var i = 0; i < e.changedTouches.length; i++) {
                    const t = e.changedTouches[i];
                    this.ontouch(e, t);
                }
            }
            ontouch(e, t) { }
            onmousedown(e) { }
            onmouseup(e) { }
            onmousemove(e) { }
            destroy() {
                this.runtime.stopAll();
                this.runtime.pause();
                this.stopAllSounds();
                for (const extension of this.extensions) {
                    extension.destroy();
                }
                this.renderer.destroy();
                this.removeEventListeners();
            }
            pauseExtensions() {
                for (const extension of this.extensions) {
                    extension.onpause();
                }
            }
            startExtensions() {
                for (const extension of this.extensions) {
                    extension.onstart();
                }
            }
            updateExtensions() {
                if (this.extensions.length) {
                    for (const extension of this.extensions) {
                        extension.update();
                    }
                }
            }
            focus() {
                if (this.promptId < this.nextPromptId) {
                    this.prompt.focus();
                }
                else {
                    this.canvas.focus();
                }
            }
            updateMousePosition(e) {
                var rect = this.canvas.getBoundingClientRect();
                var x = (e.clientX - rect.left) / this.zoom - 240;
                var y = 180 - (e.clientY - rect.top) / this.zoom;
                this.rawMouseX = x;
                this.rawMouseY = y;
                if (x < -240)
                    x = -240;
                if (x > 240)
                    x = 240;
                if (y < -180)
                    y = -180;
                if (y > 180)
                    y = 180;
                this.mouseX = Math.round(x);
                this.mouseY = Math.round(y);
            }
            setZoom(zoom) {
                if (this.zoom === zoom)
                    return;
                this.renderer.resize(zoom);
                this.root.style.width = (480 * zoom | 0) + 'px';
                this.root.style.height = (360 * zoom | 0) + 'px';
                this.root.style.fontSize = (zoom * 10) + 'px';
                this.zoom = zoom;
                for (const watcher of this.allWatchers) {
                    if (watcher instanceof P.sb3.Scratch3ListWatcher) {
                        watcher.updateList();
                    }
                }
            }
            clickMouse() {
                this.mouseSprite = undefined;
                for (var i = this.children.length; i--;) {
                    var c = this.children[i];
                    if (c.visible && c.filters.ghost < 100 && c.touching("_mouse_")) {
                        if (c.isDraggable) {
                            this.mouseSprite = c;
                            c.mouseDown();
                        }
                        else {
                            this.runtime.triggerFor(c, 'whenClicked');
                        }
                        return;
                    }
                }
                this.runtime.triggerFor(this, 'whenClicked');
            }
            releaseMouse() {
                this.mousePressed = false;
                if (this.mouseSprite) {
                    this.mouseSprite.mouseUp();
                    this.mouseSprite = undefined;
                }
            }
            setFilter(name, value) {
                super.setFilter(name, value);
                this.renderer.onStageFiltersChanged();
            }
            resetFilters() {
                super.resetFilters();
                this.renderer.onStageFiltersChanged();
            }
            getObject(name) {
                for (var i = 0; i < this.children.length; i++) {
                    var c = this.children[i];
                    if (c.name === name && !c.isClone) {
                        return c;
                    }
                }
                if (name === "_stage_" || name === this.name) {
                    return this;
                }
                return null;
            }
            getObjects(name) {
                const result = [];
                for (var i = 0; i < this.children.length; i++) {
                    if (this.children[i].name === name) {
                        result.push(this.children[i]);
                    }
                }
                return result;
            }
            getPosition(name) {
                switch (name) {
                    case "_mouse_": return {
                        x: this.mouseX,
                        y: this.mouseY,
                    };
                    case "_random_": return {
                        x: Math.round(480 * Math.random() - 240),
                        y: Math.round(360 * Math.random() - 180),
                    };
                }
                const sprite = this.getObject(name);
                if (!sprite)
                    return null;
                return {
                    x: sprite.scratchX,
                    y: sprite.scratchY,
                };
            }
            draw() {
                this.renderer.drawFrame();
                for (var i = this.allWatchers.length; i--;) {
                    var w = this.allWatchers[i];
                    if (w.visible) {
                        w.update();
                    }
                }
                if (this.hidePrompt) {
                    this.hidePrompt = false;
                    this.prompter.style.display = 'none';
                    this.canvas.focus();
                }
            }
            showVideo(visible) {
                if (P.config.supportVideoSensing) {
                    if (visible) {
                        if (!this.videoElement) {
                            this.videoElement = document.createElement('video');
                            this.videoElement.onloadedmetadata = () => {
                                this.videoElement.play();
                            };
                            this.videoElement.style.opacity = '0.5';
                            this.root.insertBefore(this.videoElement, this.canvas);
                            navigator.mediaDevices.getUserMedia({ video: true, audio: false })
                                .then((stream) => this.videoElement.srcObject = stream);
                        }
                        this.videoElement.style.display = 'block';
                    }
                    else {
                        if (this.videoElement) {
                            this.videoElement.style.display = 'none';
                        }
                    }
                }
            }
            addExtension(extension) {
                this.extensions.push(extension);
            }
            initMicrophone() {
                if (!this.microphone) {
                    this.microphone = new P.ext.microphone.MicrophoneExtension(this);
                    this.addExtension(this.microphone);
                }
            }
            initTextToSpeech() {
                if (!this.tts) {
                    this.tts = new P.ext.tts.TextToSpeechExtension(this);
                    this.addExtension(this.tts);
                }
            }
            setCloudHandler(cloudHandler) {
                this.cloudHandler = cloudHandler;
                this.addExtension(cloudHandler);
            }
            stopAllSounds() {
                for (var children = this.children, i = children.length; i--;) {
                    children[i].stopSounds();
                }
                this.stopSounds();
            }
            removeAllClones() {
                var i = this.children.length;
                while (i--) {
                    if (this.children[i].isClone) {
                        this.children[i].remove();
                        this.children.splice(i, 1);
                    }
                }
            }
            moveTo() {
            }
            gotoObject() {
            }
            forward() {
            }
            setDirection(direction) {
            }
            rotatedBounds() {
                return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                };
            }
            touching(thing) {
                if (thing == "_mouse_") {
                    return true;
                }
                return false;
            }
            touchingColor(color) {
                return false;
            }
            colorTouchingColor(colorA, colorB) {
                return false;
            }
            submitPrompt() {
                if (this.promptId < this.nextPromptId) {
                    this.answer = this.prompt.value;
                    this.promptId += 1;
                    if (this.promptId >= this.nextPromptId) {
                        this.hidePrompt = true;
                    }
                }
            }
            clearPen() {
                this.renderer.penClear();
            }
        }
        core.Stage = Stage;
        class Sprite extends Base {
            constructor(stage) {
                super();
                this.isSprite = true;
                this.isClone = false;
                this.direction = 90;
                this.rotationStyle = 0;
                this.isDraggable = false;
                this.isDragging = false;
                this.scale = 1;
                this.dragStartX = 0;
                this.dragStartY = 0;
                this.dragOffsetX = 0;
                this.dragOffsetY = 0;
                this.stage = stage;
            }
            mouseDown() {
                this.dragStartX = this.scratchX;
                this.dragStartY = this.scratchY;
                this.dragOffsetX = this.scratchX - this.stage.mouseX;
                this.dragOffsetY = this.scratchY - this.stage.mouseY;
                this.isDragging = true;
            }
            mouseUp() {
                if (this.isDragging && this.scratchX === this.dragStartX && this.scratchY === this.dragStartY) {
                    this.stage.runtime.triggerFor(this, 'whenClicked');
                }
                this.isDragging = false;
            }
            rotatedBounds() {
                const costume = this.costumes[this.currentCostumeIndex];
                const scale = costume.scale * this.scale;
                var left = -costume.rotationCenterX * scale;
                var top = costume.rotationCenterY * scale;
                var right = left + costume.width * scale;
                var bottom = top - costume.height * scale;
                if (this.rotationStyle !== 0) {
                    if (this.rotationStyle === 1 && this.direction < 0) {
                        right = -left;
                        left = right - costume.width * costume.scale * this.scale;
                    }
                    return {
                        left: this.scratchX + left,
                        right: this.scratchX + right,
                        top: this.scratchY + top,
                        bottom: this.scratchY + bottom
                    };
                }
                const mSin = Math.sin(this.direction * Math.PI / 180);
                const mCos = Math.cos(this.direction * Math.PI / 180);
                const tlX = mSin * left - mCos * top;
                const tlY = mCos * left + mSin * top;
                const trX = mSin * right - mCos * top;
                const trY = mCos * right + mSin * top;
                const blX = mSin * left - mCos * bottom;
                const blY = mCos * left + mSin * bottom;
                const brX = mSin * right - mCos * bottom;
                const brY = mCos * right + mSin * bottom;
                return {
                    left: this.scratchX + Math.min(tlX, trX, blX, brX),
                    right: this.scratchX + Math.max(tlX, trX, blX, brX),
                    top: this.scratchY + Math.max(tlY, trY, blY, brY),
                    bottom: this.scratchY + Math.min(tlY, trY, blY, brY)
                };
            }
            showRotatedBounds() {
                var bounds = this.rotatedBounds();
                var div = document.createElement('div');
                div.style.outline = '1px solid red';
                div.style.position = 'absolute';
                div.style.left = (240 + bounds.left) + 'px';
                div.style.top = (180 - bounds.top) + 'px';
                div.style.width = (bounds.right - bounds.left) + 'px';
                div.style.height = (bounds.top - bounds.bottom) + 'px';
                this.stage.canvas.parentNode.appendChild(div);
            }
            createVariableWatcher(target, variableName) {
                return this.stage.createVariableWatcher(target, variableName);
            }
            forward(steps) {
                const d = (90 - this.direction) * Math.PI / 180;
                this.moveTo(this.scratchX + steps * Math.cos(d), this.scratchY + steps * Math.sin(d));
            }
            keepInView() {
                const rb = this.rotatedBounds();
                const width = rb.right - rb.left;
                const height = rb.top - rb.bottom;
                const bounds = Math.min(15, Math.floor(Math.min(width, height) / 2));
                if (rb.right - bounds < -240) {
                    this.scratchX -= rb.right - bounds + 240;
                }
                if (rb.left + bounds > 240) {
                    this.scratchX -= rb.left + bounds - 240;
                }
                if (rb.bottom + bounds > 180) {
                    this.scratchY -= rb.bottom + bounds - 180;
                }
                if (rb.top - bounds < -180) {
                    this.scratchY -= rb.top - bounds + 180;
                }
            }
            moveTo(x, y) {
                var ox = this.scratchX;
                var oy = this.scratchY;
                if (ox === x && oy === y && !this.isPenDown) {
                    return;
                }
                this.scratchX = x;
                this.scratchY = y;
                if (this.stage.useSpriteFencing) {
                    this.keepInView();
                }
                if (this.isPenDown && !this.isDragging) {
                    this.stage.renderer.penLine(this.penColor, this.penSize, ox, oy, x, y);
                }
                if (this.saying) {
                    this.updateBubble();
                }
            }
            setDirection(degrees) {
                var d = degrees % 360;
                if (d > 180)
                    d -= 360;
                if (d <= -180)
                    d += 360;
                this.direction = d;
                if (this.saying)
                    this.updateBubble();
            }
            clone() {
                const clone = this._clone();
                clone.isClone = true;
                for (const key of Object.keys(this.vars)) {
                    clone.vars[key] = this.vars[key];
                }
                for (const key of Object.keys(this.lists)) {
                    clone.lists[key] = this.lists[key].slice(0);
                }
                clone.filters = {
                    color: this.filters.color,
                    fisheye: this.filters.fisheye,
                    whirl: this.filters.whirl,
                    pixelate: this.filters.pixelate,
                    mosaic: this.filters.mosaic,
                    brightness: this.filters.brightness,
                    ghost: this.filters.ghost
                };
                clone.procedures = this.procedures;
                clone.listeners = this.listeners;
                clone.fns = this.fns;
                clone.name = this.name;
                clone.costumes = this.costumes;
                clone.currentCostumeIndex = this.currentCostumeIndex;
                clone.sounds = this.sounds;
                clone.soundRefs = this.soundRefs;
                clone.direction = this.direction;
                clone.instrument = this.instrument;
                clone.isDraggable = this.isDraggable;
                clone.rotationStyle = this.rotationStyle;
                clone.scale = this.scale;
                clone.volume = this.volume;
                clone.scratchX = this.scratchX;
                clone.scratchY = this.scratchY;
                clone.visible = this.visible;
                clone.penSize = this.penSize;
                clone.penColor.copy(this.penColor);
                clone.isPenDown = this.isPenDown;
                clone.watchers = this.watchers;
                clone.listWatchers = this.listWatchers;
                return clone;
            }
            touching(thing) {
                if (thing === "_mouse_") {
                    const x = this.stage.rawMouseX;
                    const y = this.stage.rawMouseY;
                    return this.stage.renderer.spriteTouchesPoint(this, x, y);
                }
                else if (thing === "_edge_") {
                    const bounds = this.rotatedBounds();
                    return bounds.left <= -240 || bounds.right >= 240 || bounds.top >= 180 || bounds.bottom <= -180;
                }
                else {
                    if (!this.visible)
                        return false;
                    const sprites = this.stage.getObjects(thing);
                    return this.stage.renderer.spritesIntersect(this, sprites);
                }
            }
            touchingColor(color) {
                return this.stage.renderer.spriteTouchesColor(this, color);
            }
            colorTouchingColor(sourceColor, touchingColor) {
                return this.stage.renderer.spriteColorTouchesColor(this, sourceColor, touchingColor);
            }
            bounceOffEdge() {
                var b = this.rotatedBounds();
                var dl = 240 + b.left;
                var dt = 180 - b.top;
                var dr = 240 - b.right;
                var db = 180 + b.bottom;
                var d = Math.min(dl, dt, dr, db);
                if (d > 0)
                    return;
                var dir = this.direction * Math.PI / 180;
                var dx = Math.sin(dir);
                var dy = -Math.cos(dir);
                switch (d) {
                    case dl:
                        dx = Math.max(0.2, Math.abs(dx));
                        break;
                    case dt:
                        dy = Math.max(0.2, Math.abs(dy));
                        break;
                    case dr:
                        dx = -Math.max(0.2, Math.abs(dx));
                        break;
                    case db:
                        dy = -Math.max(0.2, Math.abs(dy));
                        break;
                }
                this.direction = Math.atan2(dy, dx) * 180 / Math.PI + 90;
                if (this.saying)
                    this.updateBubble();
            }
            distanceTo(thing) {
                const p = this.stage.getPosition(thing);
                if (!p) {
                    return 10000;
                }
                const x = p.x;
                const y = p.y;
                return Math.sqrt((this.scratchX - x) * (this.scratchX - x) + (this.scratchY - y) * (this.scratchY - y));
            }
            gotoObject(thing) {
                const position = this.stage.getPosition(thing);
                if (!position) {
                    return 0;
                }
                this.moveTo(position.x, position.y);
            }
            pointTowards(thing) {
                const position = this.stage.getPosition(thing);
                if (!position) {
                    return 0;
                }
                const dx = position.x - this.scratchX;
                const dy = position.y - this.scratchY;
                this.direction = dx === 0 && dy === 0 ? 90 : Math.atan2(dx, dy) * 180 / Math.PI;
                if (this.saying)
                    this.updateBubble();
            }
        }
        core.Sprite = Sprite;
        class Costume {
            constructor(costumeData) {
                this.name = costumeData.name;
                this.scale = 1 / costumeData.bitmapResolution;
                this.rotationCenterX = costumeData.rotationCenterX;
                this.rotationCenterY = costumeData.rotationCenterY;
            }
        }
        core.Costume = Costume;
        class BitmapCostume extends Costume {
            constructor(image, options) {
                super(options);
                if (image.tagName === 'CANVAS') {
                    const ctx = image.getContext('2d');
                    if (!ctx) {
                        throw new Error(`Cannot get 2d rendering context of costume image, despite it already being a canvas "${this.name}"`);
                    }
                    this.ctx = ctx;
                }
                this.image = image;
                this.width = image.width;
                this.height = image.height;
                this.isScalable = false;
            }
            getContext() {
                if (this.ctx) {
                    return this.ctx;
                }
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    throw new Error(`cannot get 2d rendering context in getContext on Bitmap "${this.name}"`);
                }
                canvas.width = this.width;
                canvas.height = this.height;
                ctx.drawImage(this.image, 0, 0);
                this.ctx = ctx;
                return ctx;
            }
            getImage() {
                return this.image;
            }
            requestSize(scale) {
                throw new Error(`requestSize is not implemented on BitmapCostume "${this.name}" isScalable=${this.isScalable}`);
            }
        }
        core.BitmapCostume = BitmapCostume;
        class VectorCostume extends Costume {
            constructor(svg, options) {
                super(options);
                if (svg.height < 1 || svg.width < 1) {
                    svg = new Image(1, 1);
                }
                this.isScalable = true;
                this.width = svg.width;
                this.height = svg.height;
                this.svg = svg;
                this.maxScale = this.calculateMaxScale();
                this.currentScale = Math.min(1, this.maxScale);
            }
            calculateMaxScale() {
                if (VectorCostume.MAX_SIZE / this.width < VectorCostume.MAX_SCALE) {
                    return VectorCostume.MAX_SIZE / this.width;
                }
                if (VectorCostume.MAX_SIZE / this.height < VectorCostume.MAX_SCALE) {
                    return VectorCostume.MAX_SIZE / this.height;
                }
                return VectorCostume.MAX_SCALE;
            }
            render() {
                const width = Math.floor(Math.max(1, this.width * this.currentScale));
                const height = Math.floor(Math.max(1, this.height * this.currentScale));
                if (!this.canvas) {
                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) {
                        const fmt = (n) => Math.round(n * 100) / 100;
                        throw new Error(`cannot get 2d rendering context in initCanvas on Vector "${this.name}" @ ${fmt(this.currentScale)}/${fmt(this.maxScale)} | ${width}x${height}`);
                    }
                    this.canvas = canvas;
                    this.ctx = ctx;
                }
                else {
                    this.canvas.width = width;
                    this.canvas.height = height;
                }
                this.ctx.drawImage(this.svg, 0, 0, width, height);
            }
            requestSize(costumeScale) {
                if (VectorCostume.DISABLE_RASTERIZE) {
                    return;
                }
                const scale = Math.min(Math.ceil(costumeScale), this.maxScale);
                if (this.currentScale < scale) {
                    this.currentScale = scale;
                    this.render();
                }
            }
            getContext() {
                if (this.ctx) {
                    return this.ctx;
                }
                this.render();
                return this.ctx;
            }
            getImage() {
                if (VectorCostume.DISABLE_RASTERIZE) {
                    return this.svg;
                }
                if (this.canvas) {
                    return this.canvas;
                }
                this.render();
                return this.canvas;
            }
        }
        VectorCostume.MAX_SCALE = 16;
        VectorCostume.MAX_SIZE = 2048;
        VectorCostume.DISABLE_RASTERIZE = false;
        core.VectorCostume = VectorCostume;
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            console.log('Vector rasterization is disabled. This may affect performance.');
            VectorCostume.DISABLE_RASTERIZE = true;
        }
        class Sound {
            constructor(data) {
                this.source = null;
                if (!data.buffer)
                    throw new Error('no AudioBuffer');
                this.name = data.name;
                this.buffer = data.buffer;
                this.duration = this.buffer.duration;
            }
            createSourceNode() {
                if (this.source) {
                    this.source.disconnect();
                }
                this.source = P.audio.context.createBufferSource();
                this.source.buffer = this.buffer;
                this.source.start();
                return this.source;
            }
        }
        core.Sound = Sound;
        class Watcher {
            constructor(stage, targetName) {
                this.valid = true;
                this.visible = true;
                this.x = 0;
                this.y = 0;
                this.stage = stage;
                this.targetName = targetName;
            }
            init() {
                this.target = this.stage.getObject(this.targetName) || this.stage;
            }
            setVisible(visible) {
                this.visible = visible;
            }
        }
        core.Watcher = Watcher;
        class Procedure {
            constructor(fn, warp, inputs) {
                this.fn = fn;
                this.warp = warp;
                this.inputs = inputs;
            }
        }
        core.Procedure = Procedure;
        function isSprite(base) {
            return base.isSprite;
        }
        core.isSprite = isSprite;
    })(core = P.core || (P.core = {}));
})(P || (P = {}));
var P;
(function (P) {
    var fonts;
    (function (fonts_1) {
        const fontFamilyCache = {};
        fonts_1.scratch3 = {
            'Marker': 'fonts/Knewave-Regular.woff',
            'Handwriting': 'fonts/Handlee-Regular.woff',
            'Pixel': 'fonts/Grand9K-Pixel.ttf',
            'Curly': 'fonts/Griffy-Regular.woff',
            'Serif': 'fonts/SourceSerifPro-Regular.woff',
            'Sans Serif': 'fonts/NotoSans-Regular.woff',
        };
        function loadLocalFont(fontFamily, src) {
            if (fontFamilyCache[fontFamily]) {
                return Promise.resolve(fontFamilyCache[fontFamily]);
            }
            return P.io.getAssetManager().loadFont(src)
                .then((blob) => P.io.readers.toDataURL(blob))
                .then((url) => {
                fontFamilyCache[fontFamily] = url;
                return url;
            });
        }
        fonts_1.loadLocalFont = loadLocalFont;
        function getFont(fontFamily) {
            if (!(fontFamily in fontFamilyCache)) {
                return null;
            }
            return fontFamilyCache[fontFamily];
        }
        function getCSSFontFace(fontFamily, src) {
            return `@font-face { font-family: "${fontFamily}"; src: url("${src}"); }`;
        }
        function addFontRules(svg, fonts) {
            const cssRules = [];
            for (const fontName of fonts) {
                const font = getFont(fontName);
                if (!font) {
                    console.warn('unknown font from cache', fontName);
                    continue;
                }
                cssRules.push(getCSSFontFace(fontName, font));
            }
            const doc = svg.ownerDocument;
            const defs = doc.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const style = doc.createElementNS('http://www.w3.org/2000/svg', 'style');
            style.innerHTML = cssRules.join('\n');
            defs.appendChild(style);
            svg.appendChild(style);
        }
        fonts_1.addFontRules = addFontRules;
        function loadWebFont(name) {
            const observer = new FontFaceObserver(name);
            return observer.load();
        }
        fonts_1.loadWebFont = loadWebFont;
    })(fonts = P.fonts || (P.fonts = {}));
})(P || (P = {}));
var P;
(function (P) {
    var i18n;
    (function (i18n) {
        'use strict';
        const SUPPORTED_LANGUAGES = ['en', 'es'];
        const DEFAULT_LANGUAGE = 'en';
        function getLanguage() {
            let language = navigator.language;
            if (language.indexOf('-') > -1) {
                language = language.substring(0, language.indexOf('-'));
            }
            if (SUPPORTED_LANGUAGES.indexOf(language) === -1) {
                language = DEFAULT_LANGUAGE;
            }
            return language;
        }
        const translations = {};
        const defaultTranslations = {};
        const language = getLanguage();
        function translate(messageId) {
            if (translations[messageId]) {
                return translations[messageId];
            }
            if (defaultTranslations[messageId]) {
                return defaultTranslations[messageId];
            }
            console.warn('Missing translation:', messageId);
            return '## ' + messageId + ' ##';
        }
        i18n.translate = translate;
        function translateElement(element) {
            const translatable = element.querySelectorAll('[data-i18n]');
            for (var i = 0; i < translatable.length; i++) {
                const el = translatable[i];
                const messageId = el.getAttribute('data-i18n');
                if (messageId === null)
                    continue;
                const result = translate(messageId);
                el.textContent = result;
            }
        }
        i18n.translateElement = translateElement;
        function merge(into, source) {
            for (const key of Object.keys(source)) {
                into[key] = source[key];
            }
        }
        function addTranslations(importedLanguage, importedTranslations) {
            if (importedLanguage === language) {
                merge(translations, importedTranslations);
            }
            else if (importedLanguage === DEFAULT_LANGUAGE) {
                merge(defaultTranslations, importedTranslations);
            }
        }
        i18n.addTranslations = addTranslations;
        addTranslations('en', {
            'player.controls.turboIndicator': 'Turbo Mode',
            'player.controls.fullscreen.title': 'Click to fullscreen player, Shift+click to just maximize.',
            'player.controls.flag.title': 'Shift+click to enable turbo mode.',
            'player.controls.flag.title.enabled': 'Turbo mode is enabled. Shift+click to disable turbo mode.',
            'player.controls.flag.title.disabled': 'Turbo mode is disabled. Shift+click to enable turbo mode.',
            'player.errorhandler.error': 'An internal error occurred. <a $attrs>Click here</a> to file a bug report.',
            'player.errorhandler.error.doesnotexist': 'There is no project with ID $id (Project was probably deleted, never existed, or you made a typo.)',
        });
        addTranslations('es', {
            'player.controls.turboIndicator': 'Modo Turbo',
        });
    })(i18n = P.i18n || (P.i18n = {}));
})(P || (P = {}));
var P;
(function (P) {
    var io;
    (function (io) {
        io.config = {
            localPath: '',
        };
        if (['http:', 'https:'].indexOf(location.protocol) === -1) {
            io.config.localPath = 'https://forkphorus.github.io';
        }
        let readers;
        (function (readers) {
            function toArrayBuffer(object) {
                return new Promise((resolve, reject) => {
                    const fileReader = new FileReader();
                    fileReader.onloadend = function () {
                        resolve(fileReader.result);
                    };
                    fileReader.onerror = function (err) {
                        reject(new Error('Could not read object as ArrayBuffer'));
                    };
                    fileReader.readAsArrayBuffer(object);
                });
            }
            readers.toArrayBuffer = toArrayBuffer;
            function toDataURL(object) {
                return new Promise((resolve, reject) => {
                    const fileReader = new FileReader();
                    fileReader.onloadend = function () {
                        resolve(fileReader.result);
                    };
                    fileReader.onerror = function (err) {
                        reject(new Error('Could not read object as data: URL'));
                    };
                    fileReader.readAsDataURL(object);
                });
            }
            readers.toDataURL = toDataURL;
            function toText(object) {
                return new Promise((resolve, reject) => {
                    const fileReader = new FileReader();
                    fileReader.onloadend = function () {
                        resolve(fileReader.result);
                    };
                    fileReader.onerror = function (err) {
                        reject(new Error('Could not read object as text'));
                    };
                    fileReader.readAsText(object);
                });
            }
            readers.toText = toText;
        })(readers = io.readers || (io.readers = {}));
        class FetchingAssetManager {
            constructor() {
                this.soundbankSource = 'soundbank/';
            }
            loadSoundbankFile(src) {
                return this.loadArrayBuffer(this.soundbankSource + src);
            }
            loadFont(src) {
                return this.loadBlob(src);
            }
            loadArrayBuffer(src) {
                return new Request(io.config.localPath + src).load('arraybuffer');
            }
            loadBlob(src) {
                return new Request(io.config.localPath + src).load('blob');
            }
        }
        var globalAssetManager = new FetchingAssetManager();
        function getAssetManager() {
            return globalAssetManager;
        }
        io.getAssetManager = getAssetManager;
        function setAssetManager(newManager) {
            globalAssetManager = newManager;
        }
        io.setAssetManager = setAssetManager;
        class Throttler {
            constructor() {
                this.maxConcurrentTasks = 20;
                this.concurrentTasks = 0;
                this.queue = [];
            }
            startNextTask() {
                if (this.queue.length === 0)
                    return;
                if (this.concurrentTasks >= this.maxConcurrentTasks)
                    return;
                const fn = this.queue.shift();
                this.concurrentTasks++;
                fn();
            }
            run(fn) {
                return new Promise((resolve, reject) => {
                    const run = () => {
                        fn()
                            .then((r) => {
                            this.concurrentTasks--;
                            this.startNextTask();
                            resolve(r);
                        })
                            .catch((e) => {
                            this.concurrentTasks--;
                            this.startNextTask();
                            reject(e);
                        });
                    };
                    if (this.concurrentTasks < this.maxConcurrentTasks) {
                        this.concurrentTasks++;
                        run();
                    }
                    else {
                        this.queue.push(run);
                    }
                });
            }
        }
        const requestThrottler = new Throttler();
        class AbstractTask {
            setLoader(loader) {
                this.loader = loader;
            }
            updateLoaderProgress() {
                if (this.loader) {
                    this.loader.updateProgress();
                }
            }
        }
        io.AbstractTask = AbstractTask;
        class Retry extends AbstractTask {
            constructor() {
                super(...arguments);
                this.aborted = false;
                this.retries = 0;
            }
            async try(handle) {
                const MAX_ATTEMPTS = 4;
                let lastErr;
                for (let i = 0; i < MAX_ATTEMPTS; i++) {
                    this.retries = i;
                    try {
                        return await handle();
                    }
                    catch (err) {
                        if (this.aborted) {
                            throw err;
                        }
                        lastErr = err;
                        const retryIn = 2 ** i * 500 * Math.random() + 50;
                        console.warn(`Attempt #${i + 1} to ${this.getRetryWarningDescription()} failed, trying again in ${retryIn}ms`, err);
                        await P.utils.sleep(retryIn);
                    }
                }
                throw lastErr;
            }
            getRetryWarningDescription() {
                return 'complete task';
            }
            abort() {
                this.aborted = true;
            }
        }
        io.Retry = Retry;
        class Request extends Retry {
            constructor(url) {
                super();
                this.url = url;
                this.shouldIgnoreErrors = false;
                this.workComputable = false;
                this.totalWork = 0;
                this.completedWork = 0;
                this.complete = false;
                this.status = 0;
                this.xhr = null;
            }
            isComplete() {
                return this.complete;
            }
            isWorkComputable() {
                return this.workComputable;
            }
            getTotalWork() {
                return this.totalWork;
            }
            getCompletedWork() {
                return this.completedWork;
            }
            abort() {
                super.abort();
                if (this.xhr) {
                    this.xhr.abort();
                }
            }
            ignoreErrors() {
                this.shouldIgnoreErrors = true;
                return this;
            }
            getStatus() {
                return this.status;
            }
            updateProgress(event) {
                this.workComputable = event.lengthComputable;
                this.totalWork = event.total;
                this.completedWork = event.loaded;
                this.updateLoaderProgress();
            }
            _load() {
                if (this.aborted) {
                    return Promise.reject(new Error(`Cannot download ${this.url} -- aborted.`));
                }
                return new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.open('GET', this.url);
                    xhr.responseType = this.responseType;
                    this.xhr = xhr;
                    xhr.onload = () => {
                        this.status = xhr.status;
                        if (Request.acceptableResponseCodes.indexOf(xhr.status) !== -1 || this.shouldIgnoreErrors) {
                            resolve(xhr.response);
                        }
                        else {
                            reject(new Error(`HTTP Error ${xhr.status} while downloading ${this.url}`));
                        }
                    };
                    xhr.onloadstart = (e) => {
                        this.updateProgress(e);
                    };
                    xhr.onloadend = (e) => {
                        this.xhr = null;
                        this.complete = true;
                        this.updateProgress(e);
                    };
                    xhr.onerror = (err) => {
                        reject(new Error(`Error while downloading ${this.url} (error) (r=${this.retries} s=${xhr.readyState}/${xhr.status}/${xhr.statusText})`));
                    };
                    xhr.onabort = (err) => {
                        this.aborted = true;
                        reject(new Error(`Error while downloading ${this.url} (abort)`));
                    };
                    xhr.send();
                });
            }
            load(type) {
                this.responseType = type;
                return requestThrottler.run(() => this.try(() => this._load()));
            }
            getRetryWarningDescription() {
                return `download ${this.url}`;
            }
        }
        Request.acceptableResponseCodes = [0, 200];
        io.Request = Request;
        class Img extends Retry {
            constructor(src) {
                super();
                this.src = src;
                this.complete = false;
            }
            isComplete() {
                return this.complete;
            }
            isWorkComputable() {
                return false;
            }
            getTotalWork() {
                return 0;
            }
            getCompletedWork() {
                return 0;
            }
            _load() {
                return new Promise((resolve, reject) => {
                    const image = new Image();
                    image.onload = () => {
                        this.complete = true;
                        this.updateLoaderProgress();
                        resolve(image);
                    };
                    image.onerror = (err) => {
                        reject(new Error(`Failed to load image: ${image.src} (r=${this.retries})`));
                    };
                    image.crossOrigin = 'anonymous';
                    setTimeout(() => {
                        image.src = this.src;
                    });
                });
            }
            load() {
                return requestThrottler.run(() => this.try(() => this._load()));
            }
            getRetryWarningDescription() {
                return `download image ${this.src}`;
            }
        }
        io.Img = Img;
        class Manual extends AbstractTask {
            constructor() {
                super(...arguments);
                this.complete = false;
                this.aborted = false;
            }
            markComplete() {
                this.complete = true;
                this.updateLoaderProgress();
            }
            isComplete() {
                return this.complete;
            }
            isWorkComputable() {
                return false;
            }
            getTotalWork() {
                return 0;
            }
            getCompletedWork() {
                return 0;
            }
            abort() {
                this.aborted = true;
            }
        }
        io.Manual = Manual;
        class PromiseTask extends Manual {
            constructor(promise) {
                super();
                promise.then(() => this.markComplete());
            }
        }
        io.PromiseTask = PromiseTask;
        class Loader {
            constructor() {
                this._tasks = [];
                this.aborted = false;
                this.error = false;
            }
            calculateProgress() {
                if (this.aborted) {
                    return 1;
                }
                const totalTasks = this._tasks.length;
                if (totalTasks === 0) {
                    return 0;
                }
                let finishedTasks = 0;
                for (const task of this._tasks) {
                    if (task.isComplete()) {
                        finishedTasks++;
                    }
                }
                return finishedTasks / totalTasks;
            }
            updateProgress() {
                if (this.error) {
                    return;
                }
                const progress = this.calculateProgress();
                this.onprogress(progress);
            }
            resetTasks() {
                this._tasks = [];
                this.updateProgress();
            }
            addTask(task) {
                this._tasks.push(task);
                task.setLoader(this);
                return task;
            }
            abort() {
                this.aborted = true;
                for (const task of this._tasks) {
                    task.abort();
                }
            }
            cleanup() {
                for (const task of this._tasks) {
                    task.setLoader(null);
                }
                this._tasks.length = 0;
            }
            onprogress(progress) {
            }
        }
        io.Loader = Loader;
    })(io = P.io || (P.io = {}));
})(P || (P = {}));
var P;
(function (P) {
    var json;
    (function (json) {
        class JSONParser {
            constructor(source) {
                this.source = source;
                this.index = 0;
            }
            parse() {
                return this.parseValue();
            }
            lineInfo() {
                let line = 0;
                let column = 0;
                for (var i = 0; i < this.index; i++) {
                    if (this.source[i] === '\n') {
                        line++;
                        column = 0;
                    }
                    else {
                        column++;
                    }
                }
                return { line: line + 1, column: column + 1 };
            }
            error(message) {
                const { line, column } = this.lineInfo();
                throw new SyntaxError(`JSONParser: ${message} (Line ${line} Column ${column})`);
            }
            char() {
                return this.charAt(this.index);
            }
            charAt(index) {
                if (index >= this.source.length) {
                    this.error('Unexpected end of input');
                }
                return this.source[index];
            }
            next() {
                this.index++;
            }
            expect(char) {
                if (this.char() !== char) {
                    this.error(`Expected '${char}' but found '${this.char()}'`);
                }
                this.next();
            }
            peek(length = 1, offset = 1) {
                if (length === 1)
                    return this.charAt(this.index + offset);
                let result = '';
                for (var i = 0; i < length; i++) {
                    result += this.charAt(this.index + offset + i);
                }
                return result;
            }
            skipWhitespace() {
                while (/\s/.test(this.char())) {
                    this.next();
                }
            }
            parseValue() {
                this.skipWhitespace();
                const char = this.char();
                switch (char) {
                    case '"': return this.parseString();
                    case '{': return this.parseObject();
                    case '[': return this.parseList();
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                    case '-':
                        return this.parseNumber();
                    default: return this.parseWord();
                }
            }
            parseWord() {
                if (this.peek(4, 0) === 'null') {
                    for (var i = 0; i < 4; i++)
                        this.next();
                    return null;
                }
                if (this.peek(4, 0) === 'true') {
                    for (var i = 0; i < 4; i++)
                        this.next();
                    return true;
                }
                if (this.peek(5, 0) === 'false') {
                    for (var i = 0; i < 5; i++)
                        this.next();
                    return false;
                }
                if (this.peek(8, 0) === 'Infinity') {
                    for (var i = 0; i < 8; i++)
                        this.next();
                    return Infinity;
                }
                if (this.peek(9, 0) === '-Infinity') {
                    for (var i = 0; i < 9; i++)
                        this.next();
                    return -Infinity;
                }
                if (this.peek(3, 0) === 'NaN') {
                    for (var i = 0; i < 3; i++)
                        this.next();
                    return NaN;
                }
                this.error(`Unknown word (starts with ${this.char()})`);
            }
            parseNumber() {
                let number = '';
                while (true) {
                    number += this.char();
                    if (/[\d\.e+-]/i.test(this.peek())) {
                        this.next();
                    }
                    else {
                        break;
                    }
                }
                this.next();
                const value = +number;
                if (Number.isNaN(value)) {
                    this.error('Not a number: ' + number);
                }
                return value;
            }
            parseString() {
                this.expect('"');
                let result = '';
                if (this.char() === '"') {
                    this.next();
                    return '';
                }
                while (true) {
                    const char = this.char();
                    if (char === '\\') {
                        this.next();
                        switch (this.char()) {
                            case '"':
                                result += '"';
                                break;
                            case '/':
                                result += '/';
                                break;
                            case '\\':
                                result += '\\';
                                break;
                            case 'b':
                                result += '\b';
                                break;
                            case 'f':
                                result += '\f';
                                break;
                            case 'n':
                                result += '\n';
                                break;
                            case 'r':
                                result += '\r';
                                break;
                            case 't':
                                result += '\t';
                                break;
                            case 'u': {
                                let hexString = '';
                                for (var i = 0; i < 4; i++) {
                                    this.next();
                                    const char = this.char();
                                    if (!/[0-9a-f]/i.test(char)) {
                                        this.error('Invalid hex code: ' + char);
                                    }
                                    hexString += char;
                                }
                                const hexNumber = Number.parseInt(hexString, 16);
                                const letter = String.fromCharCode(hexNumber);
                                result += letter;
                                break;
                            }
                            default: this.error('Invalid escape code: \\' + this.char());
                        }
                    }
                    else {
                        result += char;
                    }
                    if (this.peek() === '"') {
                        break;
                    }
                    this.next();
                }
                this.next();
                this.expect('"');
                return result;
            }
            parseList() {
                this.expect('[');
                this.skipWhitespace();
                if (this.char() === ']') {
                    this.next();
                    return [];
                }
                const result = [];
                while (true) {
                    this.skipWhitespace();
                    const value = this.parseValue();
                    result.push(value);
                    this.skipWhitespace();
                    if (this.char() === ']') {
                        break;
                    }
                    this.expect(',');
                }
                this.expect(']');
                return result;
            }
            parseObject() {
                this.expect('{');
                this.skipWhitespace();
                if (this.char() === '}') {
                    this.next();
                    return {};
                }
                const result = Object.create(null);
                while (true) {
                    this.skipWhitespace();
                    const key = this.parseString();
                    this.skipWhitespace();
                    this.expect(':');
                    const value = this.parseValue();
                    result[key] = value;
                    this.skipWhitespace();
                    if (this.char() === '}') {
                        break;
                    }
                    this.expect(',');
                }
                this.expect('}');
                return result;
            }
        }
        function parse(source) {
            if (!/^\s*{/.test(source)) {
                throw new Error('The input does not seem to be a JSON object');
            }
            try {
                return JSON.parse(source);
            }
            catch (firstError) {
                console.warn('JSON.parse failed. Trying alternative parser', firstError);
                try {
                    const parser = new JSONParser(source);
                    return parser.parse();
                }
                catch (secondError) {
                    console.warn('Alternative parser failed', secondError);
                    throw firstError;
                }
            }
        }
        json.parse = parse;
    })(json = P.json || (P.json = {}));
})(P || (P = {}));
var P;
(function (P) {
    var utils;
    (function (utils) {
        function parseRotationStyle(style) {
            switch (style) {
                case 'leftRight':
                case 'left-right':
                    return 1;
                case 'none':
                case 'don\'t rotate':
                    return 2;
                case 'normal':
                case 'all around':
                    return 0;
            }
            console.warn('unknown rotation style', style);
            return 0;
        }
        utils.parseRotationStyle = parseRotationStyle;
        function rgbToHSL(r, g, b) {
            r /= 255;
            g /= 255;
            b /= 255;
            var min = Math.min(r, g, b);
            var max = Math.max(r, g, b);
            if (min === max) {
                return [0, 0, r];
            }
            var c = max - min;
            var l = (min + max) / 2;
            var s = c / (1 - Math.abs(2 * l - 1));
            var h;
            switch (max) {
                case r:
                    h = ((g - b) / c + 6) % 6;
                    break;
                case g:
                    h = (b - r) / c + 2;
                    break;
                case b:
                    h = (r - g) / c + 4;
                    break;
            }
            h *= 60;
            return [h, s, l];
        }
        utils.rgbToHSL = rgbToHSL;
        function rgbToHSV(r, g, b) {
            r /= 255;
            g /= 255;
            b /= 255;
            var max = Math.max(r, g, b), min = Math.min(r, g, b);
            var h, s, v = max;
            var d = max - min;
            s = max == 0 ? 0 : d / max;
            if (max == min) {
                h = 0;
            }
            else {
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break;
                }
                h /= 6;
            }
            return [h * 360, s, v];
        }
        utils.rgbToHSV = rgbToHSV;
        function hsvToRGB(h, s, v) {
            var r, g, b;
            var i = Math.floor(h * 6);
            var f = h * 6 - i;
            var p = v * (1 - s);
            var q = v * (1 - f * s);
            var t = v * (1 - (1 - f) * s);
            switch (i % 6) {
                case 0:
                    r = v, g = t, b = p;
                    break;
                case 1:
                    r = q, g = v, b = p;
                    break;
                case 2:
                    r = p, g = v, b = t;
                    break;
                case 3:
                    r = p, g = q, b = v;
                    break;
                case 4:
                    r = t, g = p, b = v;
                    break;
                case 5:
                    r = v, g = p, b = q;
                    break;
            }
            return [r * 255, g * 255, b * 255];
        }
        utils.hsvToRGB = hsvToRGB;
        function hslToRGB(h, s, l) {
            var r, g, b;
            if (s == 0) {
                r = g = b = l;
            }
            else {
                function hue2rgb(p, q, t) {
                    if (t < 0)
                        t += 1;
                    if (t > 1)
                        t -= 1;
                    if (t < 1 / 6)
                        return p + (q - p) * 6 * t;
                    if (t < 1 / 2)
                        return q;
                    if (t < 2 / 3)
                        return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                }
                var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }
            return [r * 255, g * 255, b * 255];
        }
        utils.hslToRGB = hslToRGB;
        function hslToHSV(h, s, l) {
            var v = l + s * Math.min(l, 1 - l);
            var s = v === 0 ? 0 : 2 - 2 * l / v;
            return [h, s, v];
        }
        utils.hslToHSV = hslToHSV;
        function hsvToHSL(h, s, v) {
            var l = v - v * s / 2;
            var s = l === 0 ? 0 : (v - l) / Math.min(2 - 2 * l / v);
            return [h, s, l];
        }
        utils.hsvToHSL = hsvToHSL;
        function clamp(number, min, max) {
            return Math.min(max, Math.max(min, number));
        }
        utils.clamp = clamp;
        function settled(promise) {
            return new Promise((resolve, _reject) => {
                promise
                    .then(() => resolve())
                    .catch(() => resolve());
            });
        }
        utils.settled = settled;
        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }
        utils.sleep = sleep;
    })(utils = P.utils || (P.utils = {}));
})(P || (P = {}));
var P;
(function (P) {
    var player;
    (function (player_1) {
        class PlayerError extends Error {
            constructor() {
                super(...arguments);
                this.handledByPlayer = true;
            }
        }
        player_1.PlayerError = PlayerError;
        class ProjectDoesNotExistError extends PlayerError {
            constructor(id) {
                super('Project with ID ' + id + ' does not exist');
                this.id = id;
                this.name = 'ProjectDoesNotExistError';
            }
        }
        player_1.ProjectDoesNotExistError = ProjectDoesNotExistError;
        class LoaderIdentifier {
            constructor() {
                this.active = true;
                this.loader = null;
            }
            cancel() {
                if (!this.active) {
                    throw new Error('cannot cancel: already cancelled');
                }
                this.active = false;
                if (this.loader) {
                    this.loader.abort();
                }
            }
            setLoader(loader) {
                if (!this.active) {
                    throw new Error('Loading aborted');
                }
                this.loader = loader;
            }
            isActive() {
                return this.active;
            }
        }
        class Slot {
            constructor() {
                this._listeners = [];
            }
            subscribe(fn) {
                this._listeners.push(fn);
            }
            emit(value) {
                for (const listener of this._listeners) {
                    listener(value);
                }
            }
        }
        class LocalProjectMeta {
            constructor(filename) {
                this.filename = filename;
            }
            load() {
                return Promise.resolve(this);
            }
            getTitle() {
                return this.filename;
            }
            getId() {
                return this.filename;
            }
            isFromScratch() {
                return false;
            }
        }
        class BinaryProjectMeta {
            load() {
                return Promise.resolve(this);
            }
            getTitle() {
                return null;
            }
            getId() {
                return '#buffer#';
            }
            isFromScratch() {
                return false;
            }
        }
        class RemoteProjectMeta {
            constructor(id) {
                this.id = id;
                this.title = null;
            }
            load() {
                return new P.io.Request('https://trampoline.turbowarp.org/proxy/projects/$id'.replace('$id', this.id))
                    .ignoreErrors()
                    .load('json')
                    .then((data) => {
                    if (data.title) {
                        this.title = data.title;
                    }
                    return this;
                });
            }
            getTitle() {
                return this.title;
            }
            getId() {
                return this.id;
            }
            isFromScratch() {
                return true;
            }
        }
        class Player {
            constructor(options = {}) {
                this.onprogress = new Slot();
                this.onload = new Slot();
                this.onstartload = new Slot();
                this.oncleanup = new Slot();
                this.onthemechange = new Slot();
                this.onerror = new Slot();
                this.onresume = new Slot();
                this.onpause = new Slot();
                this.onoptionschange = new Slot();
                this.MAGIC = {
                    LARGE_Z_INDEX: '9999999999',
                };
                this.stage = null;
                this.projectMeta = null;
                this.currentLoader = null;
                this.fullscreenEnabled = false;
                this.clickToPlayContainer = null;
                this.root = document.createElement('div');
                this.root.className = 'player-root';
                this.playerContainer = document.createElement('div');
                this.playerContainer.className = 'player-stage';
                this.root.appendChild(this.playerContainer);
                this.setOptions(Object.assign(Object.assign({}, options), Player.DEFAULT_OPTIONS));
                window.addEventListener('resize', () => this.updateFullscreen());
                document.addEventListener('fullscreenchange', () => this.onfullscreenchange());
                document.addEventListener('mozfullscreenchange', () => this.onfullscreenchange());
                document.addEventListener('webkitfullscreenchange', () => this.onfullscreenchange());
                this.handleError = this.handleError.bind(this);
            }
            enableAttribute(name) {
                this.root.setAttribute(name, '');
            }
            disableAttribute(name) {
                this.root.removeAttribute(name);
            }
            setAttribute(name, enabled) {
                if (enabled) {
                    this.enableAttribute(name);
                }
                else {
                    this.disableAttribute(name);
                }
            }
            setOptions(changedOptions) {
                this.options = Object.assign(Object.assign({}, this.options), changedOptions);
                if (typeof changedOptions.turbo !== 'undefined') {
                    this.setAttribute('turbo', changedOptions.turbo);
                }
                if (typeof changedOptions.theme !== 'undefined') {
                    this.root.setAttribute('theme', changedOptions.theme);
                    this.onthemechange.emit(changedOptions.theme);
                }
                if (this.hasStage()) {
                    this.applyOptionsToStage();
                }
                this.onoptionschange.emit(changedOptions);
            }
            getOptions() {
                return this.options;
            }
            addControls(options = {}) {
                if (this.controlsContainer) {
                    throw new Error('This player already has controls.');
                }
                let flagTouchTimeout = undefined;
                const clickStop = (e) => {
                    this.throwWithoutStage();
                    this.stopAll();
                    this.stage.draw();
                    e.preventDefault();
                };
                const clickPause = (e) => {
                    this.toggleRunning();
                };
                const clickFullscreen = (e) => {
                    this.throwWithoutStage();
                    this.setOptions({ fullscreenMode: e.shiftKey ? 'window' : 'full' });
                    if (this.fullscreenEnabled) {
                        this.exitFullscreen();
                    }
                    else {
                        this.enterFullscreen();
                    }
                };
                const clickFlag = (e) => {
                    if (flagTouchTimeout === null) {
                        return;
                    }
                    if (flagTouchTimeout) {
                        clearTimeout(flagTouchTimeout);
                    }
                    this.throwWithoutStage();
                    if (e.shiftKey) {
                        this.setOptions({ turbo: !this.options.turbo });
                    }
                    else {
                        this.triggerGreenFlag();
                    }
                    this.focus();
                    e.preventDefault();
                };
                const startTouchFlag = (e) => {
                    flagTouchTimeout = setTimeout(() => {
                        flagTouchTimeout = null;
                        this.setOptions({ turbo: !this.options.turbo });
                    }, 500);
                };
                const preventDefault = (e) => {
                    e.preventDefault();
                };
                this.controlsContainer = document.createElement('div');
                this.controlsContainer.className = 'player-controls';
                this.controlsContainer.onmousedown = (e) => {
                    if (e.target !== this.controlsContainer) {
                        e.stopPropagation();
                    }
                };
                this.controlsContainer.ontouchstart = (e) => {
                    if (e.target !== this.controlsContainer) {
                        e.stopPropagation();
                    }
                };
                if (options.enableStop !== false) {
                    var stopButton = document.createElement('span');
                    stopButton.className = 'player-button player-stop';
                    this.controlsContainer.appendChild(stopButton);
                    stopButton.addEventListener('click', clickStop);
                    stopButton.addEventListener('touchend', clickStop);
                    stopButton.addEventListener('touchstart', preventDefault);
                }
                if (options.enablePause !== false) {
                    var pauseButton = document.createElement('span');
                    pauseButton.className = 'player-button player-pause';
                    this.controlsContainer.appendChild(pauseButton);
                    pauseButton.addEventListener('click', clickPause);
                    pauseButton.addEventListener('touchend', clickPause);
                    pauseButton.addEventListener('touchstart', preventDefault);
                }
                if (options.enableFlag !== false) {
                    var flagButton = document.createElement('span');
                    flagButton.className = 'player-button player-flag';
                    flagButton.title = P.i18n.translate('player.controls.flag.title');
                    this.controlsContainer.appendChild(flagButton);
                    flagButton.addEventListener('click', clickFlag);
                    flagButton.addEventListener('touchend', clickFlag);
                    flagButton.addEventListener('touchstart', startTouchFlag);
                    flagButton.addEventListener('touchstart', preventDefault);
                }
                if (options.enableTurbo !== false) {
                    var turboText = document.createElement('span');
                    turboText.innerText = P.i18n.translate('player.controls.turboIndicator');
                    turboText.className = 'player-label player-turbo';
                    this.controlsContainer.appendChild(turboText);
                    this.onoptionschange.subscribe((options) => {
                        if (flagButton && typeof options.turbo === 'boolean') {
                            if (options.turbo) {
                                flagButton.title = P.i18n.translate('player.controls.flag.title.enabled');
                            }
                            else {
                                flagButton.title = P.i18n.translate('player.controls.flag.title.disabled');
                            }
                        }
                    });
                }
                if (options.enableFullscreen !== false) {
                    var fullscreenButton = document.createElement('span');
                    fullscreenButton.className = 'player-button player-fullscreen-btn';
                    fullscreenButton.title = P.i18n.translate('player.controls.fullscreen.title');
                    this.controlsContainer.appendChild(fullscreenButton);
                    fullscreenButton.addEventListener('click', clickFullscreen);
                    fullscreenButton.addEventListener('touchend', clickFullscreen);
                    fullscreenButton.addEventListener('touchstart', preventDefault);
                }
                this.root.addEventListener('touchmove', (e) => {
                    if (this.fullscreenEnabled) {
                        e.preventDefault();
                    }
                });
                this.root.insertBefore(this.controlsContainer, this.root.firstChild);
            }
            applyOptionsToStage() {
                if (this.stage.runtime.framerate !== this.options.fps) {
                    this.stage.runtime.framerate = this.options.fps;
                    if (this.isRunning()) {
                        this.stage.runtime.resetInterval();
                    }
                }
                this.stage.username = this.options.username;
                this.stage.runtime.isTurbo = this.options.turbo;
                this.stage.useSpriteFencing = this.options.spriteFencing;
                this.stage.renderer.imageSmoothingEnabled = this.options.imageSmoothing;
            }
            generateUsernameIfMissing() {
                if (!this.options.username) {
                    this.setOptions({
                        username: 'player' + Math.random().toFixed(10).substr(2, 6)
                    });
                }
            }
            throwWithoutStage() {
                if (!this.stage) {
                    throw new Error('Missing stage.');
                }
            }
            resume() {
                this.throwWithoutStage();
                if (this.isRunning()) {
                    throw new Error('cannot resume: project is already running');
                }
                this.stage.runtime.start();
                this.enableAttribute('running');
                this.onresume.emit();
            }
            pause() {
                this.throwWithoutStage();
                if (!this.isRunning()) {
                    throw new Error('cannot pause: project is already paused');
                }
                this.stage.runtime.pause();
                this.disableAttribute('running');
                this.onpause.emit();
            }
            isRunning() {
                if (!this.hasStage()) {
                    return false;
                }
                return this.stage.runtime.isRunning;
            }
            toggleRunning() {
                this.throwWithoutStage();
                if (this.stage.runtime.isRunning) {
                    this.pause();
                }
                else {
                    this.resume();
                }
            }
            stopAll() {
                this.throwWithoutStage();
                this.pause();
                this.stage.runtime.stopAll();
            }
            triggerGreenFlag() {
                this.throwWithoutStage();
                if (!this.isRunning()) {
                    this.resume();
                }
                this.stage.runtime.stopAll();
                this.stage.runtime.triggerGreenFlag();
                if (this.clickToPlayContainer) {
                    this.removeClickToPlayContainer();
                }
            }
            cleanup() {
                if (this.currentLoader) {
                    this.currentLoader.cancel();
                    this.currentLoader = null;
                }
                if (this.clickToPlayContainer) {
                    this.removeClickToPlayContainer();
                }
                if (this.fullscreenEnabled) {
                    this.exitFullscreen();
                }
                if (this.stage) {
                    this.stage.destroy();
                    this.stage = null;
                }
                this.projectMeta = null;
                while (this.playerContainer.firstChild) {
                    this.playerContainer.removeChild(this.playerContainer.firstChild);
                }
                this.oncleanup.emit();
            }
            focus() {
                this.stage.focus();
            }
            hasStage() {
                return !!this.stage;
            }
            getStage() {
                this.throwWithoutStage();
                return this.stage;
            }
            hasProjectMeta() {
                return !!this.projectMeta;
            }
            getProjectMeta() {
                if (!this.projectMeta) {
                    throw new Error('no project meta');
                }
                return this.projectMeta;
            }
            handleError(error) {
                console.error(error);
                this.onerror.emit(error);
            }
            enterFullscreen() {
                this.savedTheme = this.root.getAttribute('theme');
                this.setOptions({ theme: 'dark' });
                if (this.options.fullscreenMode === 'full') {
                    if (this.root.requestFullScreenWithKeys) {
                        this.root.requestFullScreenWithKeys();
                    }
                    else if (this.root.webkitRequestFullScreen) {
                        this.root.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                    }
                    else if (this.root.requestFullscreen) {
                        this.root.requestFullscreen();
                    }
                }
                document.body.classList.add('player-body-fullscreen');
                this.root.style.zIndex = this.MAGIC.LARGE_Z_INDEX;
                this.enableAttribute('fullscreen');
                this.fullscreenEnabled = true;
                if (this.hasStage()) {
                    if (!this.isRunning()) {
                        this.stage.draw();
                    }
                    if (this.options.focusOnLoad) {
                        this.focus();
                    }
                }
                this.updateFullscreen();
            }
            exitFullscreen() {
                this.setOptions({ theme: this.savedTheme });
                this.disableAttribute('fullscreen');
                this.fullscreenEnabled = false;
                if (document.fullscreenElement === this.root || document.webkitFullscreenElement === this.root) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    }
                    else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    }
                    else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                    else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    }
                }
                this.root.style.paddingLeft = '';
                this.root.style.paddingTop = '';
                this.root.style.zIndex = '';
                if (this.controlsContainer) {
                    this.controlsContainer.style.width = '';
                }
                document.body.classList.remove('player-body-fullscreen');
                if (this.stage) {
                    this.stage.setZoom(1);
                    this.focus();
                }
            }
            updateFullscreen() {
                if (!this.fullscreenEnabled) {
                    return;
                }
                this.throwWithoutStage();
                const controlsHeight = this.controlsContainer ? this.controlsContainer.offsetHeight : 0;
                window.scrollTo(0, 0);
                let w = window.innerWidth - this.options.fullscreenPadding * 2;
                let h = window.innerHeight - this.options.fullscreenPadding - controlsHeight;
                w = Math.min(w, h / 0.75);
                w = Math.min(w, this.options.fullscreenMaxWidth);
                h = w * 0.75 + controlsHeight;
                if (this.controlsContainer) {
                    this.controlsContainer.style.width = w + 'px';
                }
                this.root.style.paddingLeft = (window.innerWidth - w) / 2 + 'px';
                this.root.style.paddingTop = (window.innerHeight - h - this.options.fullscreenPadding) / 2 + 'px';
                this.stage.setZoom(w / 480);
            }
            onfullscreenchange() {
                if (typeof document.fullscreen === 'boolean' && document.fullscreen !== this.fullscreenEnabled) {
                    this.exitFullscreen();
                }
                else if (typeof document.webkitIsFullScreen === 'boolean' && document.webkitIsFullScreen !== this.fullscreenEnabled) {
                    this.exitFullscreen();
                }
            }
            async getCloudVariablesFromLogs(id) {
                const data = await new P.io.Request(this.options.cloudHistoryHost.replace('$id', id)).load('json');
                const variables = Object.create(null);
                for (const entry of data.reverse()) {
                    const { verb, name, value } = entry;
                    switch (verb) {
                        case 'create_var':
                        case 'set_var':
                            variables[name] = value;
                            break;
                        case 'del_var':
                            delete variables[name];
                            break;
                        case 'rename_var':
                            variables[value] = variables[name];
                            delete variables[name];
                            break;
                        default:
                            console.warn('unknown cloud variable log verb', verb);
                    }
                }
                return variables;
            }
            applyCloudVariablesOnce(stage, id) {
                this.getCloudVariablesFromLogs(id).then((variables) => {
                    for (const name of Object.keys(variables)) {
                        if (stage.cloudVariables.indexOf(name) > -1) {
                            stage.vars[name] = variables[name];
                        }
                        else {
                            console.warn('not applying unknown cloud variable:', name);
                        }
                    }
                });
            }
            applyCloudVariablesSocket(stage, id) {
                this.generateUsernameIfMissing();
                const handler = new P.ext.cloud.WebSocketCloudHandler(stage, this.options.cloudHost, id);
                stage.setCloudHandler(handler);
            }
            applyCloudVariablesLocalStorage(stage, id) {
                const handler = new P.ext.cloud.LocalStorageCloudHandler(stage, id);
                stage.setCloudHandler(handler);
            }
            applyCloudVariables(policy) {
                const stage = this.stage;
                const meta = this.projectMeta;
                if (!meta) {
                    throw new Error('cannot apply cloud variable settings without projectMeta');
                }
                const hasCloudVariables = stage.cloudVariables.length > 0;
                if (!hasCloudVariables) {
                    return;
                }
                switch (policy) {
                    case 'once':
                        if (!meta.isFromScratch()) {
                            throw new Error('once cloudVariables does not work with projects not from scratch.mit.edu');
                        }
                        this.applyCloudVariablesOnce(stage, meta.getId());
                        break;
                    case 'ws':
                        if (!meta.isFromScratch()) {
                            throw new Error('ws cloudVariables does not work with projects not from scratch.mit.edu');
                        }
                        this.applyCloudVariablesSocket(stage, meta.getId());
                        break;
                    case 'localStorage':
                        this.applyCloudVariablesLocalStorage(stage, meta.getId());
                        break;
                }
            }
            applyAutoplayPolicy(policy) {
                switch (policy) {
                    case 'always': {
                        this.triggerGreenFlag();
                        break;
                    }
                    case 'if-audio-playable': {
                        if (!P.audio.context || P.audio.context.state === 'running') {
                            this.triggerGreenFlag();
                        }
                        else {
                            this.showClickToPlayContainer();
                        }
                        break;
                    }
                    case 'never': {
                        this.showClickToPlayContainer();
                        break;
                    }
                }
            }
            showClickToPlayContainer() {
                if (this.clickToPlayContainer) {
                    throw new Error('cannot show click-to-play interface: already shown');
                }
                this.clickToPlayContainer = document.createElement('div');
                this.clickToPlayContainer.className = 'player-click-to-play-container';
                this.clickToPlayContainer.onclick = () => {
                    if (P.audio.context && P.audio.context.state !== 'running') {
                        P.audio.context.resume();
                    }
                    this.removeClickToPlayContainer();
                    this.triggerGreenFlag();
                    this.focus();
                };
                const content = document.createElement('div');
                content.className = 'player-click-to-play-icon';
                this.clickToPlayContainer.appendChild(content);
                this.stage.ui.appendChild(this.clickToPlayContainer);
            }
            removeClickToPlayContainer() {
                if (this.clickToPlayContainer === null) {
                    throw new Error('cannot hide click-to-play interface: already hidden');
                }
                this.stage.ui.removeChild(this.clickToPlayContainer);
                this.clickToPlayContainer = null;
            }
            beginLoadingProject() {
                this.cleanup();
                this.onstartload.emit();
                const loaderId = new LoaderIdentifier();
                this.currentLoader = loaderId;
                return { loaderId };
            }
            determineProjectType(data) {
                if ('objName' in data)
                    return 'sb2';
                if ('targets' in data)
                    return 'sb3';
                throw new Error('Unknown project type');
            }
            isScratch1Project(buffer) {
                const MAGIC = 'ScratchV0';
                const array = new Uint8Array(buffer);
                for (var i = 0; i < MAGIC.length; i++) {
                    if (String.fromCharCode(array[i]) !== MAGIC[i]) {
                        return false;
                    }
                }
                return true;
            }
            convertScratch1Project(buffer) {
                const sb1 = new ScratchSB1Converter.SB1File(buffer);
                const projectData = sb1.json;
                const zipFiles = sb1.zip.files;
                const zip = new JSZip();
                zip.file('project.json', JSON.stringify(projectData));
                for (const fileName of Object.keys(zipFiles)) {
                    zip.file(fileName, zipFiles[fileName].bytes);
                }
                return zip.generateAsync({ type: 'arraybuffer' });
            }
            fetchProject(id) {
                const request = new P.io.Request(this.options.projectHost.replace('$id', id));
                return request
                    .ignoreErrors()
                    .load('blob')
                    .then(function (response) {
                    if (request.getStatus() === 404) {
                        throw new ProjectDoesNotExistError(id);
                    }
                    return response;
                });
            }
            setStage(stage) {
                this.stage = stage;
                this.stage.runtime.handleError = this.handleError;
                this.applyOptionsToStage();
                this.playerContainer.appendChild(stage.root);
                if (this.options.focusOnLoad) {
                    this.focus();
                }
                this.onload.emit(stage);
                this.stage.draw();
                this.applyCloudVariables(this.options.cloudVariables);
                this.applyAutoplayPolicy(this.options.autoplayPolicy);
            }
            async loadLoader(loaderId, loader) {
                loaderId.setLoader(loader);
                loader.onprogress = (progress) => {
                    if (loaderId.isActive()) {
                        this.onprogress.emit(progress);
                    }
                };
                const stage = await loader.load();
                this.setStage(stage);
                this.currentLoader = null;
                loader.cleanup();
                return stage;
            }
            async loadProjectById(id) {
                const { loaderId } = this.beginLoadingProject();
                const getLoader = async (blob) => {
                    try {
                        const projectText = await P.io.readers.toText(blob);
                        const projectJson = P.json.parse(projectText);
                        switch (this.determineProjectType(projectJson)) {
                            case 'sb2': return new P.sb2.Scratch2Loader(projectJson);
                            case 'sb3': return new P.sb3.Scratch3Loader(projectJson);
                        }
                    }
                    catch (e) {
                        let buffer = await P.io.readers.toArrayBuffer(blob);
                        if (this.isScratch1Project(buffer)) {
                            buffer = await this.convertScratch1Project(buffer);
                        }
                        else {
                            const zip = await JSZip.loadAsync(buffer);
                            const projectJSON = zip.file('project.json');
                            if (!projectJSON) {
                                throw new Error('zip is missing project.json');
                            }
                            const projectDataText = await projectJSON.async('text');
                            try {
                                const projectData = JSON.parse(projectDataText);
                                if (this.determineProjectType(projectData) === 'sb3') {
                                    return new P.sb3.SB3FileLoader(buffer);
                                }
                            }
                            catch (e) {
                            }
                        }
                        return new P.sb2.SB2FileLoader(buffer);
                    }
                };
                try {
                    this.projectMeta = new RemoteProjectMeta(id);
                    const blob = await this.fetchProject(id);
                    const loader = await getLoader(blob);
                    await this.loadLoader(loaderId, loader);
                }
                catch (e) {
                    if (loaderId.isActive()) {
                        this.handleError(e);
                    }
                }
            }
            async loadProjectFromBufferWithType(loaderId, buffer, type) {
                let loader;
                if (type === 'sb') {
                    buffer = await this.convertScratch1Project(buffer);
                    type = 'sb2';
                }
                switch (type) {
                    case 'sb2':
                        loader = new P.sb2.SB2FileLoader(buffer);
                        break;
                    case 'sb3':
                        loader = new P.sb3.SB3FileLoader(buffer);
                        break;
                    default: throw new Error('Unknown type: ' + type);
                }
                await this.loadLoader(loaderId, loader);
            }
            async loadProjectFromFile(file) {
                const { loaderId } = this.beginLoadingProject();
                try {
                    this.projectMeta = new LocalProjectMeta(file.name);
                    const extension = file.name.split('.').pop() || '';
                    const buffer = await P.io.readers.toArrayBuffer(file);
                    switch (extension) {
                        case 'sb': return this.loadProjectFromBufferWithType(loaderId, buffer, 'sb');
                        case 'sb2': return this.loadProjectFromBufferWithType(loaderId, buffer, 'sb2');
                        case 'sb3': return this.loadProjectFromBufferWithType(loaderId, buffer, 'sb3');
                        default: throw new Error('Unrecognized file extension: ' + extension);
                    }
                }
                catch (e) {
                    if (loaderId.isActive()) {
                        this.handleError(e);
                    }
                }
            }
            async loadProjectFromBuffer(buffer, type) {
                const { loaderId } = this.beginLoadingProject();
                try {
                    this.projectMeta = new BinaryProjectMeta();
                    return await this.loadProjectFromBufferWithType(loaderId, buffer, type);
                }
                catch (e) {
                    if (loaderId.isActive()) {
                        this.handleError(e);
                    }
                }
            }
        }
        Player.DEFAULT_OPTIONS = {
            autoplayPolicy: 'always',
            cloudVariables: 'ws',
            fps: 30,
            theme: 'light',
            turbo: false,
            username: '',
            fullscreenMode: 'full',
            fullscreenPadding: 8,
            fullscreenMaxWidth: Infinity,
            imageSmoothing: false,
            focusOnLoad: true,
            spriteFencing: false,
            projectHost: 'https://projects.scratch.mit.edu/$id',
            cloudHost: 'wss://stratus.turbowarp.org',
            cloudHistoryHost: 'https://trampoline.turbowarp.org/cloud-proxy/logs/$id?limit=100'
        };
        player_1.Player = Player;
        class ErrorHandler {
            constructor(player, options = {}) {
                this.player = player;
                this.errorEl = null;
                this.errorContainer = null;
                this.generatedErrorLink = null;
                this.player = player;
                player.onerror.subscribe(this.onerror.bind(this));
                player.oncleanup.subscribe(this.oncleanup.bind(this));
                this.errorEl = null;
                if (options.container) {
                    this.errorContainer = options.container;
                }
                else {
                    this.errorContainer = null;
                }
            }
            stringifyError(error) {
                if (!error) {
                    return 'unknown error';
                }
                if (error.stack) {
                    return 'Message: ' + error.message + '\nStack:\n' + error.stack;
                }
                return '' + error;
            }
            createBugReportLink(error) {
                const type = error ? '[Error]' : '[Bug]';
                const title = `${type} ${this.getBugReportTitle()}`;
                const body = this.getBugReportBody(error);
                return ErrorHandler.BUG_REPORT_LINK
                    .replace('$title', encodeURIComponent(title))
                    .replace('$body', encodeURIComponent(body));
            }
            getBugReportTitle() {
                if (!this.player.hasProjectMeta()) {
                    return 'Unknown Project';
                }
                const meta = this.player.getProjectMeta();
                const title = meta.getTitle();
                const id = meta.getId();
                if (title) {
                    return title;
                }
                if (id) {
                    return id;
                }
                return 'Unknown Project';
            }
            getBugReportBody(error) {
                const sections = [];
                sections.push({
                    title: 'Describe the bug, including any steps to reproduce it',
                    body: '',
                });
                sections.push({
                    title: 'Project ID, URL, or file',
                    body: this.getProjectInformation(),
                });
                let debug = '';
                debug += location.href + '\n';
                debug += navigator.userAgent + '\n';
                if (error) {
                    debug += '```\n' + this.stringifyError(error) + '\n```';
                }
                sections.push({
                    title: 'Debug information <!-- DO NOT EDIT -->',
                    body: debug,
                });
                return sections
                    .map((i) => `**${i.title}**\n${i.body}\n`)
                    .join('\n')
                    .trim();
            }
            getProjectInformation() {
                if (!this.player.hasProjectMeta()) {
                    return 'no project meta loaded';
                }
                const projectMeta = this.player.getProjectMeta();
                if (projectMeta.isFromScratch()) {
                    if (projectMeta.getTitle()) {
                        return 'https://scratch.mit.edu/projects/' + projectMeta.getId();
                    }
                    else {
                        return 'https://scratch.mit.edu/projects/' + projectMeta.getId() + ' (probably unshared)';
                    }
                }
                return 'Not from Scratch: ' + projectMeta.getId();
            }
            oncleanup() {
                if (this.errorEl && this.errorEl.parentNode) {
                    this.errorEl.parentNode.removeChild(this.errorEl);
                    this.errorEl = null;
                }
                this.generatedErrorLink = null;
            }
            handleError(error) {
                const el = document.createElement('div');
                const errorLink = this.createBugReportLink(error);
                this.generatedErrorLink = errorLink;
                const attributes = 'href="' + errorLink + '" target="_blank" ref="noopener"';
                el.innerHTML = P.i18n.translate('player.errorhandler.error').replace('$attrs', attributes);
                return el;
            }
            handleDoesNotExistError(error) {
                const el = document.createElement('div');
                el.textContent = P.i18n.translate('player.errorhandler.error.doesnotexist').replace('$id', error.id);
                return el;
            }
            onerror(error) {
                const el = document.createElement('div');
                el.className = 'player-error';
                if (error instanceof ProjectDoesNotExistError) {
                    el.appendChild(this.handleDoesNotExistError(error));
                }
                else {
                    el.appendChild(this.handleError(error));
                }
                if (this.errorContainer) {
                    this.errorContainer.appendChild(el);
                }
                else if (this.player.hasStage()) {
                    this.player.getStage().ui.appendChild(el);
                }
                else {
                    this.player.playerContainer.appendChild(el);
                }
                this.errorEl = el;
            }
        }
        ErrorHandler.BUG_REPORT_LINK = 'https://github.com/forkphorus/forkphorus/issues/new?template=bug_report.md&labels=bug&title=$title&body=$body&';
        player_1.ErrorHandler = ErrorHandler;
        class ProgressBar {
            constructor(player, options = {}) {
                this.el = document.createElement('div');
                this.el.className = 'player-progress';
                this.bar = document.createElement('div');
                this.bar.className = 'player-progress-fill';
                this.el.appendChild(this.bar);
                this.setTheme(player.getOptions().theme);
                player.onthemechange.subscribe((theme) => this.setTheme(theme));
                player.onprogress.subscribe((progress) => this.setProgress(progress));
                player.onstartload.subscribe(() => {
                    this.el.setAttribute('state', 'loading');
                    this.setProgress(0);
                });
                player.onload.subscribe(() => {
                    this.el.setAttribute('state', 'loaded');
                });
                player.oncleanup.subscribe(() => {
                    this.el.setAttribute('state', '');
                    this.bar.style.width = '0%';
                });
                player.onerror.subscribe(() => {
                    this.el.setAttribute('state', 'error');
                    this.bar.style.width = '100%';
                });
                if (options.position === 'controls' || options.position === undefined) {
                    if (!player.controlsContainer) {
                        throw new Error('No controls to put progess bar in.');
                    }
                    player.controlsContainer.appendChild(this.el);
                }
                else {
                    options.position.appendChild(this.el);
                }
            }
            setTheme(theme) {
                this.el.setAttribute('theme', theme);
            }
            setProgress(progress) {
                this.bar.style.width = 10 + progress * 90 + '%';
            }
        }
        player_1.ProgressBar = ProgressBar;
    })(player = P.player || (P.player = {}));
})(P || (P = {}));
var P;
(function (P) {
    var runtime;
    (function (runtime_1) {
        var runtime;
        var self;
        var S;
        var R;
        var STACK;
        var C;
        var CALLS;
        var WARP;
        var BASE;
        var THREAD;
        var IMMEDIATE;
        var VISUAL;
        const epoch = Date.UTC(2000, 0, 1);
        const INSTRUMENTS = P.audio.instruments;
        const DRUMS = P.audio.drums;
        const DIGIT = /\d/;
        var bool = function (v) {
            return +v !== 0 && v !== '' && v !== 'false' && v !== false;
        };
        var compare = function (x, y) {
            if ((typeof x === 'number' || DIGIT.test(x)) && (typeof y === 'number' || DIGIT.test(y))) {
                var nx = +x;
                var ny = +y;
                if (nx === nx && ny === ny) {
                    return nx < ny ? -1 : nx === ny ? 0 : 1;
                }
            }
            var xs = ('' + x).toLowerCase();
            var ys = ('' + y).toLowerCase();
            return xs < ys ? -1 : xs === ys ? 0 : 1;
        };
        var numLess = function (nx, y) {
            if (typeof y === 'number' || DIGIT.test(y)) {
                var ny = +y;
                if (ny === ny) {
                    return nx < ny;
                }
            }
            var ys = ('' + y).toLowerCase();
            return '' + nx < ys;
        };
        var numGreater = function (nx, y) {
            if (typeof y === 'number' || DIGIT.test(y)) {
                var ny = +y;
                if (ny === ny) {
                    return nx > ny;
                }
            }
            var ys = ('' + y).toLowerCase();
            return '' + nx > ys;
        };
        var equal = function (x, y) {
            if ((typeof x === 'number' || typeof x === 'boolean' || DIGIT.test(x)) && (typeof y === 'number' || typeof x === 'boolean' || DIGIT.test(y))) {
                var nx = +x;
                var ny = +y;
                if (nx === nx && ny === ny) {
                    return nx === ny;
                }
            }
            var xs = ('' + x).toLowerCase();
            var ys = ('' + y).toLowerCase();
            return xs === ys;
        };
        var numEqual = function (nx, y) {
            if (typeof y === 'number' || DIGIT.test(y)) {
                var ny = +y;
                return ny === ny && nx === ny;
            }
            return false;
        };
        var numEqualExperimental = function (nx, y) {
            var ny = +y;
            return ny === ny && nx === ny;
        };
        var numLessExperimental = function (nx, y) {
            var ny = +y;
            return ny === ny && nx < y;
        };
        var numGreaterExperimental = function (nx, y) {
            var ny = +y;
            return ny === ny && nx > y;
        };
        var strEqual = function (a, b) {
            return (a + '').toLowerCase() === (b + '').toLowerCase();
        };
        var stringContains = function (baseString, needle) {
            return baseString.toLowerCase().indexOf(needle.toLowerCase()) > -1;
        };
        var mod = function (x, y) {
            var r = x % y;
            if (r / y < 0) {
                r += y;
            }
            return r;
        };
        var random = function (x, y) {
            var fractional = (typeof x === 'string' && !isNaN(+x) && x.indexOf('.') > -1) ||
                (typeof y === 'string' && !isNaN(+y) && y.indexOf('.') > -1);
            x = +x || 0;
            y = +y || 0;
            if (x > y) {
                var tmp = y;
                y = x;
                x = tmp;
            }
            if (!fractional && (x % 1 === 0 && y % 1 === 0)) {
                return Math.floor(Math.random() * (y - x + 1)) + x;
            }
            return Math.random() * (y - x) + x;
        };
        var clone = function (name) {
            const parent = name === '_myself_' ? S : self.getObject(name);
            if (!parent || !P.core.isSprite(parent)) {
                return;
            }
            const c = parent.clone();
            self.children.splice(self.children.indexOf(parent), 0, c);
            runtime.triggerFor(c, 'whenCloned');
            if (c.visible) {
                VISUAL = true;
            }
        };
        var getVars = function (name) {
            return self.vars[name] !== undefined ? self.vars : S.vars;
        };
        var getLists = function (name) {
            if (self.lists[name] !== undefined)
                return self.lists;
            if (S.lists[name] === undefined) {
                S.lists[name] = [];
            }
            return S.lists;
        };
        var listIndex = function (list, index, length) {
            var i = index | 0;
            if (i === index)
                return i > 0 && i <= length ? i - 1 : -1;
            if (index === 'random' || index === 'any') {
                return Math.random() * length | 0;
            }
            if (index === 'last') {
                return length - 1;
            }
            return i > 0 && i <= length ? i - 1 : -1;
        };
        var contentsOfList = function (list) {
            var isSingle = true;
            for (var i = list.length; i--;) {
                if (list[i].length !== 1) {
                    isSingle = false;
                    break;
                }
            }
            return list.join(isSingle ? '' : ' ');
        };
        var getLineOfList = function (list, index) {
            var i = listIndex(list, index, list.length);
            return i !== -1 ? list[i] : '';
        };
        var listContains = function (list, value) {
            for (var i = list.length; i--;) {
                if (equal(list[i], value))
                    return true;
            }
            return false;
        };
        var listIndexOf = function (list, value) {
            for (var i = 0; i < list.length; i++) {
                if (equal(list[i], value))
                    return i + 1;
            }
            return 0;
        };
        var appendToList = function (list, value) {
            list.push(value);
        };
        var deleteLineOfList = function (list, index) {
            if (index === 'all') {
                list.length = 0;
            }
            else {
                var i = listIndex(list, index, list.length);
                if (i === list.length - 1) {
                    list.pop();
                }
                else if (i !== -1) {
                    list.splice(i, 1);
                }
            }
        };
        var insertInList = function (list, index, value) {
            var i = listIndex(list, index, list.length + 1);
            if (i === list.length) {
                list.push(value);
            }
            else if (i !== -1) {
                list.splice(i, 0, value);
            }
        };
        var setLineOfList = function (list, index, value) {
            var i = listIndex(list, index, list.length);
            if (i !== -1) {
                list[i] = value;
            }
        };
        var watchedAppendToList = function (list, value) {
            appendToList(list, value);
            if (!list.modified)
                list.modified = true;
        };
        var watchedDeleteLineOfList = function (list, index) {
            deleteLineOfList(list, index);
            if (!list.modified)
                list.modified = true;
        };
        var watchedDeleteAllOfList = function (list) {
            list.length = 0;
            if (!list.modified)
                list.modified = true;
        };
        var watchedInsertInList = function (list, index, value) {
            insertInList(list, index, value);
            if (!list.modified)
                list.modified = true;
        };
        var watchedSetLineOfList = function (list, index, value) {
            setLineOfList(list, index, value);
            if (!list.modified)
                list.modified = true;
        };
        var mathFunc = function (f, x) {
            switch (f) {
                case 'abs':
                    return Math.abs(x);
                case 'floor':
                    return Math.floor(x);
                case 'sqrt':
                    return Math.sqrt(x);
                case 'ceiling':
                    return Math.ceil(x);
                case 'cos':
                    return Math.cos(x * Math.PI / 180);
                case 'sin':
                    return Math.sin(x * Math.PI / 180);
                case 'tan':
                    return Math.tan(x * Math.PI / 180);
                case 'asin':
                    return Math.asin(x) * 180 / Math.PI;
                case 'acos':
                    return Math.acos(x) * 180 / Math.PI;
                case 'atan':
                    return Math.atan(x) * 180 / Math.PI;
                case 'ln':
                    return Math.log(x);
                case 'log':
                    return Math.log(x) / Math.LN10;
                case 'e ^':
                    return Math.exp(x);
                case '10 ^':
                    return Math.exp(x * Math.LN10);
            }
            return 0;
        };
        var attribute = function (attr, objName) {
            const o = self.getObject(objName);
            if (!o)
                return 0;
            if (P.core.isSprite(o)) {
                switch (attr) {
                    case 'x position': return o.scratchX;
                    case 'y position': return o.scratchY;
                    case 'direction': return o.direction;
                    case 'costume #': return o.currentCostumeIndex + 1;
                    case 'costume name': return o.costumes[o.currentCostumeIndex].name;
                    case 'size': return o.scale * 100;
                    case 'volume': return o.volume * 100;
                }
            }
            else {
                switch (attr) {
                    case 'background #':
                    case 'backdrop #': return o.currentCostumeIndex + 1;
                    case 'backdrop name': return o.costumes[o.currentCostumeIndex].name;
                    case 'volume': return o.volume * 100;
                }
            }
            const value = o.vars[attr];
            if (value !== undefined) {
                return value;
            }
            return 0;
        };
        var timeAndDate = function (format) {
            switch (format) {
                case 'year':
                    return new Date().getFullYear();
                case 'month':
                    return new Date().getMonth() + 1;
                case 'date':
                    return new Date().getDate();
                case 'day of week':
                    return new Date().getDay() + 1;
                case 'hour':
                    return new Date().getHours();
                case 'minute':
                    return new Date().getMinutes();
                case 'second':
                    return new Date().getSeconds();
            }
            return 0;
        };
        function getKeyCode(keyName) {
            keyName = keyName + '';
            switch (keyName.toLowerCase()) {
                case 'space': return 32;
                case 'left arrow': return 37;
                case 'up arrow': return 38;
                case 'right arrow': return 39;
                case 'down arrow': return 40;
                case 'any': return 'any';
            }
            return keyName.toUpperCase().charCodeAt(0);
        }
        runtime_1.getKeyCode = getKeyCode;
        var getKeyCode3 = function (keyName) {
            switch (keyName.toLowerCase()) {
                case 'space': return 32;
                case 'left arrow': return 37;
                case 'up arrow': return 38;
                case 'right arrow': return 39;
                case 'down arrow': return 40;
                case 'enter': return 13;
                case 'any': return 'any';
            }
            return keyName.toUpperCase().charCodeAt(0);
        };
        const audioContext = P.audio.context;
        if (audioContext) {
            var playNote = function (key, duration) {
                var span;
                var spans = INSTRUMENTS[S.instrument];
                for (var i = 0, l = spans.length; i < l; i++) {
                    span = spans[i];
                    if (span.top >= key || span.top === 128)
                        break;
                }
                return playSpan(span, key, duration);
            };
            var playSpan = function (span, key, duration) {
                const node = P.audio.playSpan(span, key, duration, S.getAudioNode());
                return {
                    stopped: false,
                    node,
                    base: BASE,
                };
            };
            var applySoundEffects = function (node) {
                node.playbackRate.value = Math.pow(2, (S.soundFilters.pitch / 10 / 12));
            };
            var playSound = function (sound) {
                const node = sound.createSourceNode();
                applySoundEffects(node);
                node.connect(S.getAudioNode());
                return {
                    stopped: false,
                    node,
                    base: BASE,
                };
            };
            var startSound = function (sound) {
                for (const s of S.activeSounds) {
                    if (s.node === sound.source) {
                        s.stopped = true;
                        break;
                    }
                }
                const node = sound.createSourceNode();
                applySoundEffects(node);
                node.connect(S.getAudioNode());
            };
        }
        var save = function () {
            STACK.push(R);
            R = {};
        };
        var restore = function () {
            R = STACK.pop();
        };
        var call = function (procedure, id, values) {
            if (procedure) {
                STACK.push(R);
                CALLS.push(C);
                C = {
                    base: procedure.fn,
                    fn: S.fns[id],
                    args: procedure.call(values),
                    numargs: [],
                    boolargs: [],
                    stack: STACK = [],
                    warp: procedure.warp,
                };
                R = {};
                if (C.warp || WARP) {
                    WARP++;
                    IMMEDIATE = procedure.fn;
                }
                else {
                    if (VISUAL) {
                        for (var i = CALLS.length, j = 5; i-- && j--;) {
                            if (CALLS[i].base === procedure.fn) {
                                runtime.queue[THREAD] = {
                                    sprite: S,
                                    base: BASE,
                                    fn: procedure.fn,
                                    calls: CALLS,
                                    warp: WARP
                                };
                                return;
                            }
                        }
                    }
                    IMMEDIATE = procedure.fn;
                }
            }
            else {
                IMMEDIATE = S.fns[id];
            }
        };
        var endCall = function () {
            if (CALLS.length) {
                if (WARP)
                    WARP--;
                IMMEDIATE = C.fn;
                C = CALLS.pop();
                STACK = C.stack;
                R = STACK.pop();
            }
        };
        var cloudVariableChanged = function (name) {
            if (self.cloudHandler) {
                self.cloudHandler.variableChanged(name);
            }
        };
        var sceneChange = function () {
            return runtime.trigger('whenSceneStarts', self.getCostumeName());
        };
        var broadcast = function (name) {
            return runtime.trigger('whenIReceive', name);
        };
        var running = function (bases) {
            for (var j = 0; j < runtime.queue.length; j++) {
                if (runtime.queue[j] && bases.indexOf(runtime.queue[j].base) !== -1)
                    return true;
            }
            return false;
        };
        var queue = function (id) {
            if (WARP) {
                IMMEDIATE = S.fns[id];
            }
            else {
                forceQueue(id);
            }
        };
        var forceQueue = function (id) {
            runtime.queue[THREAD] = {
                sprite: S,
                base: BASE,
                fn: S.fns[id],
                calls: CALLS,
                warp: WARP
            };
        };
        class Runtime {
            constructor(stage) {
                this.stage = stage;
                this.queue = [];
                this.isRunning = false;
                this.timerStart = 0;
                this.baseTime = 0;
                this.baseNow = 0;
                this.isTurbo = false;
                this.framerate = 30;
                this.currentMSecs = 0;
                this.whenTimerMSecs = 0;
                this.onError = this.onError.bind(this);
                this.step = this.step.bind(this);
            }
            startThread(sprite, base, replaceExisting) {
                const thread = {
                    sprite: sprite,
                    base: base,
                    fn: base,
                    calls: [{
                            args: [],
                            stack: [{}],
                        }],
                    warp: 0
                };
                for (let i = 0; i < this.queue.length; i++) {
                    const q = this.queue[i];
                    if (q && q.sprite === sprite && q.base === base) {
                        if (replaceExisting) {
                            this.queue[i] = thread;
                        }
                        return;
                    }
                }
                this.queue.push(thread);
            }
            triggerFor(sprite, event, arg) {
                let threads;
                let replaceExisting = true;
                switch (event) {
                    case 'whenClicked':
                        threads = sprite.listeners.whenClicked;
                        break;
                    case 'whenCloned':
                        threads = sprite.listeners.whenCloned;
                        break;
                    case 'whenGreenFlag':
                        threads = sprite.listeners.whenGreenFlag;
                        break;
                    case 'whenKeyPressed':
                        replaceExisting = false;
                        threads = sprite.listeners.whenKeyPressed[arg];
                        break;
                    case 'whenSceneStarts':
                        threads = sprite.listeners.whenSceneStarts[('' + arg).toLowerCase()];
                        break;
                    case 'whenIReceive':
                        arg = '' + arg;
                        threads = sprite.listeners.whenIReceive[arg] || sprite.listeners.whenIReceive[arg.toLowerCase()];
                        break;
                    case 'edgeActivated':
                        threads = sprite.listeners.edgeActivated;
                        break;
                    default: throw new Error('Unknown trigger event: ' + event);
                }
                if (threads) {
                    for (let i = 0; i < threads.length; i++) {
                        this.startThread(sprite, threads[i], replaceExisting);
                    }
                }
                return threads || [];
            }
            trigger(event, arg) {
                let threads = [];
                for (let i = this.stage.children.length; i--;) {
                    threads = threads.concat(this.triggerFor(this.stage.children[i], event, arg));
                }
                return threads.concat(this.triggerFor(this.stage, event, arg));
            }
            triggerGreenFlag() {
                this.timerStart = this.now();
                this.trigger('whenGreenFlag');
                this.trigger('edgeActivated');
            }
            start() {
                this.isRunning = true;
                if (this.interval)
                    return;
                window.addEventListener('error', this.onError);
                this.baseTime = Date.now();
                this.interval = setInterval(this.step, 1000 / this.framerate);
                if (audioContext)
                    audioContext.resume();
                this.stage.startExtensions();
            }
            pause() {
                if (this.interval) {
                    this.baseNow = this.now();
                    clearInterval(this.interval);
                    this.interval = 0;
                    window.removeEventListener('error', this.onError);
                    if (audioContext)
                        audioContext.suspend();
                    this.stage.pauseExtensions();
                }
                this.isRunning = false;
            }
            resetInterval() {
                if (!this.isRunning) {
                    throw new Error('Cannot restart interval when paused');
                }
                if (this.interval) {
                    clearInterval(this.interval);
                }
                this.interval = setInterval(this.step, 1000 / this.framerate);
            }
            stopAll() {
                this.stage.hidePrompt = false;
                this.stage.prompter.style.display = 'none';
                this.stage.promptId = this.stage.nextPromptId = 0;
                this.queue.length = 0;
                this.stage.resetFilters();
                this.stage.stopSounds();
                for (var i = 0; i < this.stage.children.length; i++) {
                    const c = this.stage.children[i];
                    if (c.isClone) {
                        c.remove();
                        this.stage.children.splice(i, 1);
                        i -= 1;
                    }
                    else {
                        c.resetFilters();
                        if (c.saying && P.core.isSprite(c))
                            c.say('');
                        c.stopSounds();
                    }
                }
            }
            now() {
                return this.baseNow + Date.now() - this.baseTime;
            }
            resetTimer() {
                this.timerStart = this.now();
                this.whenTimerMSecs = 0;
            }
            evaluateExpression(sprite, fn) {
                self = this.stage;
                runtime = this;
                S = sprite;
                try {
                    return fn();
                }
                catch (e) {
                    return undefined;
                }
            }
            step() {
                self = this.stage;
                runtime = this;
                VISUAL = false;
                for (var i = 0; i < this.stage.children.length; i++) {
                    const c = this.stage.children[i];
                    if (c.isDragging) {
                        c.moveTo(c.dragOffsetX + c.stage.mouseX, c.dragOffsetY + c.stage.mouseY);
                    }
                }
                if (audioContext && audioContext.state === 'suspended') {
                    audioContext.resume();
                }
                const start = Date.now();
                this.currentMSecs = this.whenTimerMSecs = this.now();
                const queue = this.queue;
                do {
                    for (THREAD = 0; THREAD < queue.length; THREAD++) {
                        const thread = queue[THREAD];
                        if (thread) {
                            S = thread.sprite;
                            IMMEDIATE = thread.fn;
                            BASE = thread.base;
                            CALLS = thread.calls;
                            C = CALLS.pop();
                            STACK = C.stack;
                            R = STACK.pop();
                            queue[THREAD] = undefined;
                            WARP = thread.warp;
                            while (IMMEDIATE) {
                                const fn = IMMEDIATE;
                                IMMEDIATE = null;
                                fn();
                            }
                            STACK.push(R);
                            CALLS.push(C);
                        }
                    }
                    for (let i = queue.length; i--;) {
                        if (!queue[i]) {
                            queue.splice(i, 1);
                        }
                    }
                } while ((this.isTurbo || !VISUAL) && Date.now() - start < 1000 / this.framerate && queue.length);
                this.stage.updateExtensions();
                this.stage.draw();
            }
            onError(e) {
                clearInterval(this.interval);
                this.handleError(e.error);
            }
            handleError(e) {
                console.error(e);
            }
        }
        runtime_1.Runtime = Runtime;
        function createContinuation(source) {
            var result = '(function() {\n';
            var brackets = 0;
            var delBrackets = 0;
            var shouldDelete = false;
            var here = 0;
            var length = source.length;
            while (here < length) {
                var i = source.indexOf('{', here);
                var j = source.indexOf('}', here);
                var k = source.indexOf('return;', here);
                if (k === -1)
                    k = length;
                if (i === -1 && j === -1) {
                    if (!shouldDelete) {
                        result += source.slice(here, k);
                    }
                    break;
                }
                if (i === -1)
                    i = length;
                if (j === -1)
                    j = length;
                if (shouldDelete) {
                    if (i < j) {
                        delBrackets++;
                        here = i + 1;
                    }
                    else {
                        delBrackets--;
                        if (!delBrackets) {
                            shouldDelete = false;
                        }
                        here = j + 1;
                    }
                }
                else {
                    if (brackets === 0 && k < i && k < j) {
                        result += source.slice(here, k);
                        break;
                    }
                    if (i < j) {
                        result += source.slice(here, i + 1);
                        brackets++;
                        here = i + 1;
                    }
                    else {
                        result += source.slice(here, j);
                        here = j + 1;
                        if (source.substr(j, 8) === '} else {') {
                            if (brackets > 0) {
                                result += '} else {';
                                here = j + 8;
                            }
                            else {
                                shouldDelete = true;
                                delBrackets = 0;
                            }
                        }
                        else {
                            if (brackets > 0) {
                                result += '}';
                                brackets--;
                            }
                        }
                    }
                }
            }
            result += '})';
            return scopedEval(result);
        }
        runtime_1.createContinuation = createContinuation;
        function scopedEval(source) {
            return eval(source);
        }
        runtime_1.scopedEval = scopedEval;
    })(runtime = P.runtime || (P.runtime = {}));
})(P || (P = {}));
var P;
(function (P) {
    var sb2;
    (function (sb2) {
        const ASSET_URL = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/';
        class Scratch2VariableWatcher extends P.core.Watcher {
            constructor(stage, targetName, data) {
                super(stage, targetName);
                this.cmd = data.cmd;
                this.type = data.type || 'var';
                if (data.color) {
                    var c = (data.color < 0 ? data.color + 0x1000000 : data.color).toString(16);
                    this.color = '#000000'.slice(0, -c.length) + c;
                }
                else {
                    this.color = '#ee7d16';
                }
                this.isDiscrete = data.isDiscrete == null ? true : data.isDiscrete;
                this.label = data.label || '';
                this.mode = data.mode || 1;
                this.param = data.param;
                this.sliderMax = data.sliderMax == null ? 100 : data.sliderMax;
                this.sliderMin = data.sliderMin || 0;
                this.targetName = data.target;
                this.visible = data.visible == null ? false : data.visible;
                this.x = data.x || 0;
                this.y = data.y || 0;
            }
            init() {
                super.init();
                if (this.target && this.cmd === 'getVar:') {
                    this.target.watchers[this.param] = this;
                }
                if (!this.label) {
                    this.label = this.getLabel();
                    if (this.target.isSprite)
                        this.label = this.target.name + ': ' + this.label;
                }
                this.layout();
            }
            getLabel() {
                var WATCHER_LABELS = {
                    'costumeIndex': 'costume #',
                    'xpos': 'x position',
                    'ypos': 'y position',
                    'heading': 'direction',
                    'scale': 'size',
                    'backgroundIndex': 'background #',
                    'sceneName': 'background name',
                    'tempo': 'tempo',
                    'volume': 'volume',
                    'answer': 'answer',
                    'timer': 'timer',
                    'soundLevel': 'loudness',
                    'isLoud': 'loud?',
                    'xScroll': 'x scroll',
                    'yScroll': 'y scroll'
                };
                switch (this.cmd) {
                    case 'getVar:': return this.param;
                    case 'sensor:': return this.param + ' sensor value';
                    case 'sensorPressed': return 'sensor ' + this.param + '?';
                    case 'timeAndDate': return this.param;
                    case 'senseVideoMotion': return 'video ' + this.param;
                }
                return WATCHER_LABELS[this.cmd] || '';
            }
            setVisible(visible) {
                super.setVisible(visible);
                this.layout();
            }
            update() {
                var value = 0;
                if (!this.target)
                    return;
                switch (this.cmd) {
                    case 'answer':
                        value = this.stage.answer;
                        break;
                    case 'backgroundIndex':
                        value = this.stage.currentCostumeIndex + 1;
                        break;
                    case 'costumeIndex':
                        value = this.target.currentCostumeIndex + 1;
                        break;
                    case 'getVar:':
                        value = this.target.vars[this.param];
                        break;
                    case 'heading':
                        value = this.target.direction;
                        break;
                    case 'scale':
                        if (this.target.isSprite) {
                            value = this.target.scale * 100;
                        }
                        break;
                    case 'sceneName':
                        value = this.stage.getCostumeName();
                        break;
                    case 'senseVideoMotion':
                        break;
                    case 'soundLevel':
                        if (this.stage.microphone) {
                            value = this.stage.microphone.getLoudness();
                        }
                        else {
                            value = -1;
                        }
                        break;
                    case 'tempo':
                        value = this.stage.tempoBPM;
                        break;
                    case 'timeAndDate':
                        value = this.timeAndDate(this.param);
                        break;
                    case 'timer':
                        value = Math.round((this.stage.runtime.now() - this.stage.runtime.timerStart) / 100) / 10;
                        break;
                    case 'volume':
                        value = this.target.volume * 100;
                        break;
                    case 'xpos':
                        value = this.target.scratchX;
                        break;
                    case 'ypos':
                        value = this.target.scratchY;
                        break;
                }
                if (typeof value === 'number' && (value < 0.001 || value > 0.001)) {
                    value = Math.round(value * 1000) / 1000;
                }
                this.readout.textContent = '' + value;
                if (this.slider) {
                    this.buttonWrap.style.transform = 'translate(' + ((+value || 0) - this.sliderMin) / (this.sliderMax - this.sliderMin) * 100 + '%,0)';
                }
            }
            timeAndDate(format) {
                switch (format) {
                    case 'year':
                        return new Date().getFullYear();
                    case 'month':
                        return new Date().getMonth() + 1;
                    case 'date':
                        return new Date().getDate();
                    case 'day of week':
                        return new Date().getDay() + 1;
                    case 'hour':
                        return new Date().getHours();
                    case 'minute':
                        return new Date().getMinutes();
                    case 'second':
                        return new Date().getSeconds();
                }
                return 0;
            }
            layout() {
                if (this.el) {
                    this.el.style.display = this.visible ? 'block' : 'none';
                    return;
                }
                if (!this.visible)
                    return;
                this.el = document.createElement('div');
                this.el.dataset.watcher = '' + this.stage.allWatchers.indexOf(this);
                this.el.style.whiteSpace = 'pre';
                this.el.style.position = 'absolute';
                this.el.style.left = this.el.style.top = '0';
                this.el.style.transform = 'translate(' + (this.x | 0) / 10 + 'em,' + (this.y | 0) / 10 + 'em)';
                this.el.style.cursor = 'default';
                if (this.mode === 2) {
                    this.el.appendChild(this.readout = document.createElement('div'));
                    this.readout.style.minWidth = (38 / 15) + 'em';
                    this.readout.style.font = 'bold 1.5em/' + (19 / 15) + ' sans-serif';
                    this.readout.style.height = (19 / 15) + 'em';
                    this.readout.style.borderRadius = (4 / 15) + 'em';
                    this.readout.style.margin = (3 / 15) + 'em 0 0 0';
                    this.readout.style.padding = '0 ' + (3 / 10) + 'em';
                }
                else {
                    this.el.appendChild(this.labelEl = document.createElement('div'));
                    this.el.appendChild(this.readout = document.createElement('div'));
                    this.el.style.border = '.1em solid rgb(148,145,145)';
                    this.el.style.borderRadius = '.4em';
                    this.el.style.background = 'rgb(193,196,199)';
                    this.el.style.padding = '.2em .6em .3em .5em';
                    this.labelEl.textContent = this.label;
                    this.labelEl.style.font = 'bold 1.1em/1 sans-serif';
                    this.labelEl.style.display = 'inline-block';
                    this.labelEl.style.verticalAlign =
                        this.readout.style.verticalAlign = 'middle';
                    this.readout.style.minWidth = (37 / 10) + 'em';
                    this.readout.style.padding = '0 ' + (1 / 10) + 'em';
                    this.readout.style.font = 'bold 1.0em/' + (13 / 10) + ' sans-serif';
                    this.readout.style.height = (13 / 10) + 'em';
                    this.readout.style.borderRadius = (4 / 10) + 'em';
                    this.readout.style.marginLeft = (6 / 10) + 'em';
                }
                this.readout.style.color = '#fff';
                var f = 1 / (this.mode === 2 ? 15 : 10);
                this.readout.style.border = f + 'em solid #fff';
                this.readout.style.boxShadow = 'inset ' + f + 'em ' + f + 'em ' + f + 'em rgba(0,0,0,.5), inset -' + f + 'em -' + f + 'em ' + f + 'em rgba(255,255,255,.5)';
                this.readout.style.textAlign = 'center';
                this.readout.style.background = this.color;
                this.readout.style.display = 'inline-block';
                if (this.mode === 3) {
                    this.el.appendChild(this.slider = document.createElement('div'));
                    this.slider.appendChild(this.buttonWrap = document.createElement('div'));
                    this.buttonWrap.appendChild(this.button = document.createElement('div'));
                    this.slider.style.height =
                        this.slider.style.borderRadius = '.5em';
                    this.slider.style.background = 'rgb(192,192,192)';
                    this.slider.style.margin = '.4em 0 .1em';
                    this.slider.style.boxShadow = 'inset .125em .125em .125em rgba(0,0,0,.5), inset -.125em -.125em .125em rgba(255,255,255,.5)';
                    this.slider.style.position = 'relative';
                    this.slider.style.pointerEvents = 'auto';
                    this.slider.dataset.slider = '';
                    this.slider.style.paddingRight =
                        this.button.style.width =
                            this.button.style.height =
                                this.button.style.borderRadius = '1.1em';
                    this.button.style.position = 'absolute';
                    this.button.style.left = '0';
                    this.button.style.top = '-.3em';
                    this.button.style.background = '#fff';
                    this.button.style.boxShadow = 'inset .3em .3em .2em -.2em rgba(255,255,255,.9), inset -.3em -.3em .2em -.2em rgba(0,0,0,.9), inset 0 0 0 .1em #777';
                    this.button.dataset.button = '';
                }
                this.stage.ui.appendChild(this.el);
            }
        }
        sb2.Scratch2VariableWatcher = Scratch2VariableWatcher;
        class Scratch2Stage extends P.core.Stage {
            constructor() {
                super(...arguments);
                this.dragging = {};
                this.defaultWatcherX = 10;
                this.defaultWatcherY = 10;
            }
            createVariableWatcher(target, variableName) {
                const x = this.defaultWatcherX;
                const y = this.defaultWatcherY;
                this.defaultWatcherY += 26;
                if (this.defaultWatcherY >= 450) {
                    this.defaultWatcherY = 10;
                    this.defaultWatcherX += 150;
                }
                return new P.sb2.Scratch2VariableWatcher(this, target.name, {
                    cmd: 'getVar:',
                    param: variableName,
                    x,
                    y,
                });
            }
            say(text, thinking) {
                return ++this.sayId;
            }
            updateBubble() {
            }
            watcherStart(id, t, e) {
                var p = e.target;
                while (p && p.dataset.watcher == null)
                    p = p.parentElement;
                if (!p)
                    return;
                var w = this.allWatchers[p.dataset.watcher];
                this.dragging[id] = {
                    watcher: w,
                    offset: (e.target.dataset.button == null ? -w.button.offsetWidth / 2 | 0 : w.button.getBoundingClientRect().left - t.clientX) - w.slider.getBoundingClientRect().left
                };
            }
            watcherMove(id, t, e) {
                var d = this.dragging[id];
                if (!d)
                    return;
                var w = d.watcher;
                var sw = w.slider.offsetWidth;
                var bw = w.button.offsetWidth;
                var value = w.sliderMin + Math.max(0, Math.min(1, (t.clientX + d.offset) / (sw - bw))) * (w.sliderMax - w.sliderMin);
                w.target.vars[w.param] = w.isDiscrete ? Math.round(value) : Math.round(value * 100) / 100;
                w.update();
                e.preventDefault();
            }
            watcherEnd(id, t, e) {
                this.watcherMove(id, t, e);
                delete this.dragging[id];
            }
            ontouch(event, touch) {
                const target = event.target;
                if (target.dataset.button != null || target.dataset.slider != null) {
                    this.watcherStart(touch.identifier, touch, event);
                }
            }
            onmousedown(e) {
                const target = e.target;
                if (target.dataset.button != null || target.dataset.slider != null) {
                    this.watcherStart('mouse', e, e);
                }
            }
            onmousemove(e) {
                this.watcherMove('mouse', e, e);
            }
            onmouseup(e) {
                this.watcherEnd('mouse', e, e);
            }
        }
        sb2.Scratch2Stage = Scratch2Stage;
        class Scratch2Sprite extends P.core.Sprite {
            _clone() {
                return new Scratch2Sprite(this.stage);
            }
        }
        sb2.Scratch2Sprite = Scratch2Sprite;
        class BaseSB2Loader extends P.io.Loader {
            loadImage(url) {
                return this.addTask(new P.io.Img(url)).load();
            }
            loadFonts() {
                return Promise.all([
                    this.addTask(new P.io.PromiseTask((P.utils.settled(P.fonts.loadWebFont('Donegal One'))))),
                    this.addTask(new P.io.PromiseTask((P.utils.settled(P.fonts.loadWebFont('Gloria Hallelujah'))))),
                    this.addTask(new P.io.PromiseTask((P.utils.settled(P.fonts.loadWebFont('Mystery Quest'))))),
                    this.addTask(new P.io.PromiseTask((P.utils.settled(P.fonts.loadWebFont('Permanent Marker'))))),
                ]).then(() => undefined);
            }
            loadBase(data, isStage) {
                var costumes;
                var sounds;
                return Promise.all([
                    this.loadArray(data.costumes, this.loadCostume.bind(this)).then((c) => costumes = c),
                    this.loadArray(data.sounds, this.loadSound.bind(this)).then((s) => sounds = s),
                ]).then(() => {
                    const object = new (isStage ? Scratch2Stage : Scratch2Sprite)(null);
                    if (data.variables) {
                        for (const variable of data.variables) {
                            if (variable.isPersistent) {
                                if (object.isStage) {
                                    object.cloudVariables.push(variable.name);
                                }
                                else {
                                    console.warn('Cloud variable found on a non-stage object. Skipping.');
                                }
                            }
                            object.vars[variable.name] = variable.value;
                        }
                    }
                    if (data.lists) {
                        for (const list of data.lists) {
                            if (list.isPersistent) {
                                console.warn('Cloud lists are not supported');
                            }
                            object.lists[list.listName] = list.contents;
                        }
                    }
                    object.name = data.objName;
                    object.costumes = costumes;
                    object.currentCostumeIndex = Math.floor(data.currentCostumeIndex);
                    sounds.forEach((sound) => sound && object.addSound(sound));
                    if (isStage) {
                    }
                    else {
                        const sprite = object;
                        sprite.scratchX = data.scratchX;
                        sprite.scratchY = data.scratchY;
                        sprite.direction = data.direction;
                        sprite.isDraggable = data.isDraggable;
                        sprite.rotationStyle = P.utils.parseRotationStyle(data.rotationStyle);
                        sprite.scale = data.scale;
                        sprite.visible = data.visible;
                    }
                    object.scripts = data.scripts || [];
                    return object;
                });
            }
            loadArray(data, process) {
                return Promise.all((data || []).map((i, ind) => process(i, ind)));
            }
            loadObject(data) {
                if (data.cmd) {
                    return this.loadVariableWatcher(data);
                }
                else if (data.listName) {
                }
                else {
                    return this.loadBase(data, false);
                }
            }
            loadVariableWatcher(data) {
                const targetName = data.target;
                const watcher = new Scratch2VariableWatcher(null, targetName, data);
                return watcher;
            }
            loadCostume(data) {
                const promises = [
                    this.loadMD5(data.baseLayerMD5, data.baseLayerID)
                        .then((asset) => data.$image = asset)
                ];
                if (data.textLayerMD5) {
                    promises.push(this.loadMD5(data.textLayerMD5, data.textLayerID)
                        .then((asset) => data.$text = asset));
                }
                return Promise.all(promises)
                    .then((layers) => {
                    var image;
                    if (layers.length > 1) {
                        image = document.createElement('canvas');
                        const ctx = image.getContext('2d');
                        if (!ctx) {
                            throw new Error('Cannot get 2d rendering context loading costume ' + data.costumeName);
                        }
                        image.width = Math.max(layers[0].width, 1);
                        image.height = Math.max(layers[0].height, 1);
                        for (const layer of layers) {
                            ctx.drawImage(layer, 0, 0);
                        }
                    }
                    else {
                        image = layers[0];
                    }
                    return new P.core.BitmapCostume(image, {
                        name: data.costumeName,
                        bitmapResolution: data.bitmapResolution,
                        rotationCenterX: data.rotationCenterX,
                        rotationCenterY: data.rotationCenterY,
                    });
                });
            }
            loadSound(data) {
                return new Promise((resolve, reject) => {
                    this.loadMD5(data.md5, data.soundID, true)
                        .then((buffer) => {
                        resolve(new P.core.Sound({
                            name: data.soundName,
                            buffer,
                        }));
                    })
                        .catch((err) => {
                        resolve(null);
                        console.warn('Could not load sound: ' + err);
                    });
                });
            }
            loadSVG(source) {
                const parser = new DOMParser();
                var doc = parser.parseFromString(source, 'image/svg+xml');
                var svg = doc.documentElement;
                DOMPurify.sanitize(svg, {
                    IN_PLACE: true,
                    USE_PROFILES: { svg: true }
                });
                if (!svg.style) {
                    doc = parser.parseFromString('<body>' + source, 'text/html');
                    svg = doc.querySelector('svg');
                }
                svg.style.visibility = 'hidden';
                svg.style.position = 'absolute';
                svg.style.left = '-10000px';
                svg.style.top = '-10000px';
                document.body.appendChild(svg);
                const viewBox = svg.viewBox.baseVal;
                if (viewBox && (viewBox.x || viewBox.y)) {
                    svg.width.baseVal.value = viewBox.width - viewBox.x;
                    svg.height.baseVal.value = viewBox.height - viewBox.y;
                    viewBox.x = 0;
                    viewBox.y = 0;
                    viewBox.width = 0;
                    viewBox.height = 0;
                }
                patchSVG(svg, svg);
                document.body.removeChild(svg);
                svg.style.visibility = svg.style.position = svg.style.left = svg.style.top = '';
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    throw new Error('unable to get rendering context for drawing svg');
                }
                return canvg.Canvg.from(ctx, new XMLSerializer().serializeToString(svg), {
                    ignoreMouse: true,
                    ignoreAnimation: true,
                    ignoreClear: true,
                })
                    .then((v) => {
                    return v.render();
                }).then(() => {
                    return canvas;
                });
            }
            load() {
                var children;
                var stage;
                return this.loadFonts()
                    .then(() => Promise.all([
                    P.audio.loadSoundbankSB2(this),
                    this.loadArray(this.projectData.children, this.loadObject.bind(this)).then((c) => children = c),
                    this.loadBase(this.projectData, true).then((s) => stage = s),
                ]))
                    .then(() => {
                    if (this.aborted) {
                        throw new Error('Loading aborting.');
                    }
                    children = children.filter((i) => i);
                    children.forEach((c) => c.stage = stage);
                    const sprites = children.filter((i) => i instanceof Scratch2Sprite);
                    const watchers = children.filter((i) => i instanceof Scratch2VariableWatcher);
                    stage.children = sprites;
                    stage.allWatchers = watchers;
                    stage.allWatchers.forEach((w) => w.init());
                    P.sb2.compiler.compile(stage);
                    return stage;
                });
            }
        }
        sb2.BaseSB2Loader = BaseSB2Loader;
        class SB2FileLoader extends BaseSB2Loader {
            constructor(buffer) {
                super();
                this.buffer = buffer;
            }
            loadMD5(hash, id, isAudio = false) {
                const f = isAudio ? (this.zip.file(id + '.wav') || this.zip.file(id + '.mp3')) : this.zip.file(id + '.gif') || (this.zip.file(id + '.png') || this.zip.file(id + '.jpg') || this.zip.file(id + '.svg'));
                if (!f) {
                    throw new Error('cannot find md5: ' + hash + ' (isAudio=' + isAudio + ')');
                }
                hash = f.name;
                if (isAudio) {
                    return f.async('arraybuffer')
                        .then((buffer) => P.audio.decodeAudio(buffer));
                }
                const ext = hash.split('.').pop();
                if (ext === 'svg') {
                    return f.async('text')
                        .then((text) => this.loadSVG(text));
                }
                else {
                    return new Promise((resolve, reject) => {
                        var image = new Image();
                        image.onload = function () {
                            resolve(image);
                        };
                        image.onerror = function () {
                            reject(new Error('Failed to load image: ' + hash + '/' + id));
                        };
                        f.async('binarystring')
                            .then((data) => {
                            image.src = 'data:image/' + (ext === 'jpg' ? 'jpeg' : ext) + ';base64,' + btoa(data);
                        });
                    });
                }
            }
            load() {
                return JSZip.loadAsync(this.buffer)
                    .then((data) => {
                    this.zip = data;
                    const project = this.zip.file('project.json');
                    if (!project) {
                        throw new Error('project.json is missing');
                    }
                    return project.async('text');
                })
                    .then((project) => {
                    this.projectData = P.json.parse(project);
                })
                    .then(() => super.load());
            }
        }
        sb2.SB2FileLoader = SB2FileLoader;
        class Scratch2Loader extends BaseSB2Loader {
            constructor(idOrData) {
                super();
                if (typeof idOrData === 'object') {
                    this.projectData = idOrData;
                    this.projectId = null;
                }
                else {
                    this.projectId = idOrData;
                }
            }
            loadMD5(hash, id, isAudio = false) {
                const ext = hash.split('.').pop();
                if (ext === 'svg') {
                    return this.addTask(new P.io.Request(ASSET_URL + hash + '/get/')).load('text')
                        .then((text) => this.loadSVG(text));
                }
                else if (ext === 'wav') {
                    return this.addTask(new P.io.Request(ASSET_URL + hash + '/get/')).load('arraybuffer')
                        .then((buffer) => P.audio.decodeAudio(buffer));
                }
                else {
                    return this.loadImage(ASSET_URL + hash + '/get/');
                }
            }
            load() {
                if (this.projectId) {
                    return this.addTask(new P.io.Request(P.config.PROJECT_API.replace('$id', '' + this.projectId))).load('json')
                        .then((data) => {
                        this.projectData = data;
                        return super.load();
                    });
                }
                else {
                    return super.load();
                }
            }
        }
        sb2.Scratch2Loader = Scratch2Loader;
        function patchSVG(svg, element) {
            const FONTS = {
                '': 'Helvetica',
                Donegal: 'Donegal One',
                Gloria: 'Gloria Hallelujah',
                Marker: 'Permanent Marker',
                Mystery: 'Mystery Quest'
            };
            const LINE_HEIGHTS = {
                Helvetica: 1.13,
                'Donegal One': 1.25,
                'Gloria Hallelujah': 1.97,
                'Permanent Marker': 1.43,
                'Mystery Quest': 1.37
            };
            if (element.nodeType !== 1)
                return;
            if (element.nodeName === 'text') {
                var font = element.getAttribute('font-family') || '';
                font = FONTS[font] || font;
                if (font) {
                    element.setAttribute('font-family', font);
                    if (font === 'Helvetica')
                        element.style.fontWeight = 'bold';
                }
                var size = +element.getAttribute('font-size');
                if (!size) {
                    element.setAttribute('font-size', size = 18);
                }
                var bb = element.getBBox();
                var transform = element.transform.baseVal.consolidate();
                if (transform) {
                    var x = 4 - .6 * transform.matrix.a;
                    var y = (element.getAttribute('y') - bb.y) * 1.1;
                    element.setAttribute('x', x);
                    element.setAttribute('y', y);
                    var lines = element.textContent.split('\n');
                    if (lines.length > 1) {
                        element.textContent = lines[0];
                        var lineHeight = LINE_HEIGHTS[font] || 1;
                        for (var i = 1, l = lines.length; i < l; i++) {
                            var tspan = document.createElementNS(null, 'tspan');
                            tspan.textContent = lines[i];
                            tspan.setAttribute('x', '' + x);
                            tspan.setAttribute('y', '' + (y + size * i * lineHeight));
                            element.appendChild(tspan);
                        }
                    }
                }
            }
            else if ((element.hasAttribute('x') || element.hasAttribute('y')) && element.hasAttribute('transform')) {
                element.setAttribute('x', 0);
                element.setAttribute('y', 0);
            }
            [].forEach.call(element.childNodes, patchSVG.bind(null, svg));
        }
    })(sb2 = P.sb2 || (P.sb2 = {}));
})(P || (P = {}));
(function (P) {
    var sb2;
    (function (sb2) {
        var compiler;
        (function (compiler) {
            const CLOUD = '☁ ';
            var LOG_PRIMITIVES;
            class Scratch2Procedure extends P.core.Procedure {
                call(inputs) {
                    return inputs;
                }
            }
            compiler.Scratch2Procedure = Scratch2Procedure;
            var EVENT_SELECTORS = [
                'procDef',
                'whenClicked',
                'whenCloned',
                'whenGreenFlag',
                'whenIReceive',
                'whenKeyPressed',
                'whenSceneStarts',
                'whenSensorGreaterThan'
            ];
            var compileScripts = function (object) {
                for (var i = 0; i < object.scripts.length; i++) {
                    compiler.compileListener(object, object.scripts[i][2]);
                }
            };
            var warnings;
            var warn = function (message) {
                warnings[message] = (warnings[message] || 0) + 1;
            };
            compiler.compileListener = function (object, script) {
                if (!script[0] || EVENT_SELECTORS.indexOf(script[0][0]) === -1)
                    return;
                var nextLabel = function () {
                    return object.fns.length + fns.length;
                };
                var label = function () {
                    var id = nextLabel();
                    fns.push(source.length);
                    visual = 0;
                    return id;
                };
                var delay = function () {
                    source += 'return;\n';
                    label();
                };
                var queue = function (id) {
                    source += 'queue(' + id + ');\n';
                    source += 'return;\n';
                };
                var forceQueue = function (id) {
                    source += 'forceQueue(' + id + ');\n';
                    source += 'return;\n';
                };
                var seq = function (script) {
                    if (!script)
                        return;
                    for (var i = 0; i < script.length; i++) {
                        compile(script[i]);
                    }
                };
                var varRef = function (name) {
                    if (typeof name !== 'string') {
                        return 'getVars(' + val(name) + ')[' + val(name) + ']';
                    }
                    var o = object.stage.vars[name] !== undefined ? 'self' : 'S';
                    return o + '.vars[' + val(name) + ']';
                };
                var isCloudVar = function (name) {
                    if (typeof name !== 'string') {
                        return false;
                    }
                    return name.startsWith(CLOUD) && object.stage.vars[name] !== undefined && object.stage.cloudVariables.indexOf(name) > -1;
                };
                var listRef = function (name) {
                    if (typeof name !== 'string') {
                        return 'getLists(' + val(name) + ')[' + val(name) + ']';
                    }
                    var o = object.stage.lists[name] !== undefined ? 'self' : 'S';
                    if (o === 'S' && !object.lists[name]) {
                        object.lists[name] = [];
                    }
                    return o + '.lists[' + val(name) + ']';
                };
                var param = function (name, usenum, usebool) {
                    if (typeof name !== 'string') {
                        throw new Error('Dynamic parameters are not supported');
                    }
                    if (!inputs)
                        return '0';
                    var i = inputs.indexOf(name);
                    if (i === -1) {
                        return '0';
                    }
                    var t = types[i];
                    var kind = t === '%n' || t === '%d' || t === '%c' ? 'num' :
                        t === '%b' ? 'bool' : '';
                    if (kind === 'num' && usenum) {
                        used[i] = true;
                        return 'C.numargs[' + i + ']';
                    }
                    if (kind === 'bool' && usebool) {
                        used[i] = true;
                        return 'C.boolargs[' + i + ']';
                    }
                    var v = 'C.args[' + i + ']';
                    if (usenum)
                        return '(+' + v + ' || 0)';
                    if (usebool)
                        return 'bool(' + v + ')';
                    return v;
                };
                var val2 = function (e) {
                    var v;
                    if (e[0] === 'costumeName') {
                        return 'S.getCostumeName()';
                    }
                    else if (e[0] === 'sceneName') {
                        return 'self.getCostumeName()';
                    }
                    else if (e[0] === 'readVariable') {
                        return varRef(e[1]);
                    }
                    else if (e[0] === 'contentsOfList:') {
                        return 'contentsOfList(' + listRef(e[1]) + ')';
                    }
                    else if (e[0] === 'getLine:ofList:') {
                        return 'getLineOfList(' + listRef(e[2]) + ', ' + val(e[1]) + ')';
                    }
                    else if (e[0] === 'concatenate:with:') {
                        return '("" + ' + val(e[1]) + ' + ' + val(e[2]) + ')';
                    }
                    else if (e[0] === 'letter:of:') {
                        return '(("" + ' + val(e[2]) + ')[(' + num(e[1]) + ' | 0) - 1] || "")';
                    }
                    else if (e[0] === 'answer') {
                        return 'self.answer';
                    }
                    else if (e[0] === 'getAttribute:of:') {
                        return 'attribute(' + val(e[1]) + ', ' + val(e[2]) + ')';
                    }
                    else if (e[0] === 'getUserId') {
                        return '0';
                    }
                    else if (e[0] === 'getUserName') {
                        return 'self.username';
                    }
                    else {
                        warn('Undefined val: ' + e[0]);
                    }
                };
                var val = function (e, usenum, usebool) {
                    var v;
                    if (typeof e === 'number' || typeof e === 'boolean' || e === null) {
                        return '' + e;
                    }
                    else if (typeof e === 'string') {
                        return '"' + e
                            .replace(/\\/g, '\\\\')
                            .replace(/\n/g, '\\n')
                            .replace(/\r/g, '\\r')
                            .replace(/"/g, '\\"')
                            .replace(/\{/g, '\\x7b')
                            .replace(/\}/g, '\\x7d') + '"';
                    }
                    else if (e[0] === 'getParam') {
                        return param(e[1], usenum, usebool);
                    }
                    else if ((v = numval(e)) != null || (v = boolval(e)) != null) {
                        return v;
                    }
                    else {
                        v = val2(e);
                        if (usenum)
                            return '(+' + v + ' || 0)';
                        if (usebool)
                            return 'bool(' + v + ')';
                        return v;
                    }
                };
                var numval = function (e) {
                    if (e[0] === 'xpos') {
                        return 'S.scratchX';
                    }
                    else if (e[0] === 'ypos') {
                        return 'S.scratchY';
                    }
                    else if (e[0] === 'heading') {
                        return 'S.direction';
                    }
                    else if (e[0] === 'costumeIndex') {
                        return '(S.currentCostumeIndex + 1)';
                    }
                    else if (e[0] === 'backgroundIndex') {
                        return '(self.currentCostumeIndex + 1)';
                    }
                    else if (e[0] === 'scale') {
                        return 'Math.round(S.scale * 100)';
                    }
                    else if (e[0] === 'volume') {
                        return '(S.volume * 100)';
                    }
                    else if (e[0] === 'tempo') {
                        return 'self.tempoBPM';
                    }
                    else if (e[0] === 'lineCountOfList:') {
                        return listRef(e[1]) + '.length';
                    }
                    else if (e[0] === '+') {
                        return '(' + num(e[1]) + ' + ' + num(e[2]) + ' || 0)';
                    }
                    else if (e[0] === '-') {
                        return '(' + num(e[1]) + ' - ' + num(e[2]) + ' || 0)';
                    }
                    else if (e[0] === '*') {
                        return '(' + num(e[1]) + ' * ' + num(e[2]) + ' || 0)';
                    }
                    else if (e[0] === '/') {
                        return '(' + num(e[1]) + ' / ' + num(e[2]) + ' || 0)';
                    }
                    else if (e[0] === 'randomFrom:to:') {
                        return 'random(' + num(e[1]) + ', ' + num(e[2]) + ')';
                    }
                    else if (e[0] === 'abs') {
                        return 'Math.abs(' + num(e[1]) + ')';
                    }
                    else if (e[0] === 'sqrt') {
                        return 'Math.sqrt(' + num(e[1]) + ')';
                    }
                    else if (e[0] === 'stringLength:') {
                        return '("" + ' + val(e[1]) + ').length';
                    }
                    else if (e[0] === '%' || e[0] === '\\\\') {
                        return 'mod(' + num(e[1]) + ', ' + num(e[2]) + ')';
                    }
                    else if (e[0] === 'rounded') {
                        return 'Math.round(' + num(e[1]) + ')';
                    }
                    else if (e[0] === 'computeFunction:of:') {
                        if (typeof e[1] !== 'object') {
                            switch ('' + e[1]) {
                                case 'abs':
                                    return 'Math.abs(' + num(e[2]) + ')';
                                case 'floor':
                                    return 'Math.floor(' + num(e[2]) + ')';
                                case 'sqrt':
                                    return 'Math.sqrt(' + num(e[2]) + ')';
                                case 'ceiling':
                                    return 'Math.ceil(' + num(e[2]) + ')';
                                case 'cos':
                                    return 'Math.cos(' + num(e[2]) + ' * Math.PI / 180)';
                                case 'sin':
                                    return 'Math.sin(' + num(e[2]) + ' * Math.PI / 180)';
                                case 'tan':
                                    return 'Math.tan(' + num(e[2]) + ' * Math.PI / 180)';
                                case 'asin':
                                    return '(Math.asin(' + num(e[2]) + ') * 180 / Math.PI)';
                                case 'acos':
                                    return '(Math.acos(' + num(e[2]) + ') * 180 / Math.PI)';
                                case 'atan':
                                    return '(Math.atan(' + num(e[2]) + ') * 180 / Math.PI)';
                                case 'ln':
                                    return 'Math.log(' + num(e[2]) + ')';
                                case 'log':
                                    return '(Math.log(' + num(e[2]) + ') / Math.LN10)';
                                case 'e ^':
                                    return 'Math.exp(' + num(e[2]) + ')';
                                case '10 ^':
                                    return 'Math.exp(' + num(e[2]) + ' * Math.LN10)';
                            }
                            return '0';
                        }
                        return 'mathFunc(' + val(e[1]) + ', ' + num(e[2]) + ')';
                    }
                    else if (e[0] === 'mouseX') {
                        return 'self.mouseX';
                    }
                    else if (e[0] === 'mouseY') {
                        return 'self.mouseY';
                    }
                    else if (e[0] === 'timer') {
                        return '((runtime.now() - runtime.timerStart) / 1000)';
                    }
                    else if (e[0] === 'distanceTo:') {
                        return 'S.distanceTo(' + val(e[1]) + ')';
                    }
                    else if (e[0] === 'soundLevel') {
                        object.stage.initMicrophone();
                        return 'self.microphone.getLoudness()';
                    }
                    else if (e[0] === 'timestamp') {
                        return '((Date.now() - epoch) / 86400000)';
                    }
                    else if (e[0] === 'timeAndDate') {
                        return 'timeAndDate(' + val(e[1]) + ')';
                    }
                };
                var DIGIT = /\d/;
                var boolval = function (e) {
                    if (e[0] === 'list:contains:') {
                        return 'listContains(' + listRef(e[1]) + ', ' + val(e[2]) + ')';
                    }
                    else if (e[0] === '<' || e[0] === '>') {
                        var less;
                        let x;
                        let y;
                        if (typeof e[1] === 'string' && DIGIT.test(e[1]) || typeof e[1] === 'number') {
                            less = e[0] === '<';
                            x = e[1];
                            y = e[2];
                        }
                        else if (typeof e[2] === 'string' && DIGIT.test(e[2]) || typeof e[2] === 'number') {
                            less = e[0] === '>';
                            x = e[2];
                            y = e[1];
                        }
                        var nx = +x;
                        if (x == null || nx !== nx) {
                            return '(compare(' + val(e[1]) + ', ' + val(e[2]) + ') === ' + (e[0] === '<' ? -1 : 1) + ')';
                        }
                        return (less ? 'numLess' : 'numGreater') + '(' + nx + ', ' + val(y) + ')';
                    }
                    else if (e[0] === '=') {
                        let x;
                        let y;
                        if (typeof e[1] === 'string' && DIGIT.test(e[1]) || typeof e[1] === 'number') {
                            x = e[1];
                            y = e[2];
                        }
                        else if (typeof e[2] === 'string' && DIGIT.test(e[2]) || typeof e[2] === 'number') {
                            x = e[2];
                            y = e[1];
                        }
                        var nx = +x;
                        if (x == null || nx !== nx) {
                            return '(equal(' + val(e[1]) + ', ' + val(e[2]) + '))';
                        }
                        return '(numEqual(' + nx + ', ' + val(y) + '))';
                    }
                    else if (e[0] === '&') {
                        return '(' + bool(e[1]) + ' && ' + bool(e[2]) + ')';
                    }
                    else if (e[0] === '|') {
                        return '(' + bool(e[1]) + ' || ' + bool(e[2]) + ')';
                    }
                    else if (e[0] === 'not') {
                        return '!' + bool(e[1]) + '';
                    }
                    else if (e[0] === 'mousePressed') {
                        return 'self.mousePressed';
                    }
                    else if (e[0] === 'touching:') {
                        return 'S.touching(' + val(e[1]) + ')';
                    }
                    else if (e[0] === 'touchingColor:') {
                        return 'S.touchingColor(' + val(e[1]) + ')';
                    }
                    else if (e[0] === 'color:sees:') {
                        return 'S.colorTouchingColor(' + val(e[1]) + ', ' + val(e[2]) + ')';
                    }
                    else if (e[0] === 'keyPressed:') {
                        var v = typeof e[1] === 'object' ?
                            'getKeyCode(' + val(e[1]) + ')' : val(P.runtime.getKeyCode(e[1]));
                        return '!!self.keys[' + v + ']';
                    }
                };
                var bool = function (e) {
                    if (typeof e === 'boolean') {
                        return e;
                    }
                    if (typeof e === 'number' || typeof e === 'string') {
                        return +e !== 0 && e !== '' && e !== 'false';
                    }
                    var v = boolval(e);
                    return v != null ? v : val(e, false, true);
                };
                var num = function (e) {
                    if (typeof e === 'number') {
                        return e || 0;
                    }
                    if (typeof e === 'boolean' || typeof e === 'string') {
                        return +e || 0;
                    }
                    var v = numval(e);
                    return v != null ? v : val(e, true);
                };
                var beatHead = function (dur) {
                    source += 'save();\n';
                    source += 'R.start = runtime.now();\n';
                    source += 'R.duration = ' + num(dur) + ' * 60 / self.tempoBPM;\n';
                    source += 'var first = true;\n';
                };
                var beatTail = function () {
                    var id = label();
                    source += 'if (!R.sound) R.sound = { stopped: false };';
                    source += 'S.activeSounds.add(R.sound);\n';
                    source += 'if ((runtime.now() - R.start < R.duration * 1000 || first) && !R.sound.stopped) {\n';
                    source += '  var first;\n';
                    forceQueue(id);
                    source += '}\n';
                    source += 'S.activeSounds.delete(R.sound);';
                    source += 'restore();\n';
                };
                var wait = function (dur) {
                    source += 'save();\n';
                    source += 'R.start = runtime.now();\n';
                    source += 'R.duration = ' + dur + ';\n';
                    source += 'var first = true;\n';
                    var id = label();
                    source += 'if (runtime.now() - R.start < R.duration * 1000 || first) {\n';
                    source += '  var first;\n';
                    forceQueue(id);
                    source += '}\n';
                    source += 'restore();\n';
                };
                var toHSLA = 'S.penColor.toHSLA();\n';
                toHSLA += 'S.penColor.a = 1;\n';
                var visual = 0;
                var compile = function (block) {
                    if (LOG_PRIMITIVES) {
                        source += 'console.log(' + val(block[0]) + ');\n';
                    }
                    if (['turnRight:', 'turnLeft:', 'heading:', 'pointTowards:', 'setRotationStyle', 'lookLike:', 'nextCostume', 'say:duration:elapsed:from:', 'say:', 'think:duration:elapsed:from:', 'think:', 'changeGraphicEffect:by:', 'setGraphicEffect:to:', 'filterReset', 'changeSizeBy:', 'setSizeTo:', 'comeToFront', 'goBackByLayers:'].indexOf(block[0]) !== -1) {
                        if (visual < 2) {
                            source += 'if (S.visible) VISUAL = true;\n';
                            visual = 2;
                        }
                        else if (P.config.debug)
                            source += '/* visual: 2 */\n';
                    }
                    else if (['forward:', 'gotoX:y:', 'gotoSpriteOrMouse:', 'changeXposBy:', 'xpos:', 'changeYposBy:', 'ypos:', 'bounceOffEdge', 'glideSecs:toX:y:elapsed:from:'].indexOf(block[0]) !== -1) {
                        if (visual < 1) {
                            source += 'if (S.visible || S.isPenDown) VISUAL = true;\n';
                            visual = 1;
                        }
                        else if (P.config.debug)
                            source += '/* visual: 1 */\n';
                    }
                    else if (['showBackground:', 'startScene', 'nextBackground', 'nextScene', 'startSceneAndWait', 'show', 'hide', 'putPenDown', 'stampCostume', 'showVariable:', 'hideVariable:', 'doAsk', 'setVolumeTo:', 'changeVolumeBy:', 'setTempoTo:', 'changeTempoBy:'].indexOf(block[0]) !== -1) {
                        if (visual < 3) {
                            source += 'VISUAL = true;\n';
                            visual = 3;
                        }
                        else if (P.config.debug)
                            source += '/* visual: 3 */\n';
                    }
                    if (block[0] === 'forward:') {
                        source += 'S.forward(' + num(block[1]) + ');\n';
                    }
                    else if (block[0] === 'turnRight:') {
                        source += 'S.setDirection(S.direction + ' + num(block[1]) + ');\n';
                    }
                    else if (block[0] === 'turnLeft:') {
                        source += 'S.setDirection(S.direction - ' + num(block[1]) + ');\n';
                    }
                    else if (block[0] === 'heading:') {
                        source += 'S.setDirection(' + num(block[1]) + ');\n';
                    }
                    else if (block[0] === 'pointTowards:') {
                        source += 'S.pointTowards(' + val(block[1]) + ');\n';
                    }
                    else if (block[0] === 'gotoX:y:') {
                        source += 'S.moveTo(' + num(block[1]) + ', ' + num(block[2]) + ');\n';
                    }
                    else if (block[0] === 'gotoSpriteOrMouse:') {
                        source += 'S.gotoObject(' + val(block[1]) + ');\n';
                    }
                    else if (block[0] === 'changeXposBy:') {
                        source += 'S.moveTo(S.scratchX + ' + num(block[1]) + ', S.scratchY);\n';
                    }
                    else if (block[0] === 'xpos:') {
                        source += 'S.moveTo(' + num(block[1]) + ', S.scratchY);\n';
                    }
                    else if (block[0] === 'changeYposBy:') {
                        source += 'S.moveTo(S.scratchX, S.scratchY + ' + num(block[1]) + ');\n';
                    }
                    else if (block[0] === 'ypos:') {
                        source += 'S.moveTo(S.scratchX, ' + num(block[1]) + ');\n';
                    }
                    else if (block[0] === 'bounceOffEdge') {
                        source += 'S.bounceOffEdge();\n';
                    }
                    else if (block[0] === 'setRotationStyle') {
                        source += 'S.rotationStyle = P.utils.parseRotationStyle(' + val(block[1]) + ');\n';
                    }
                    else if (block[0] === 'lookLike:') {
                        source += 'S.setCostume(' + val(block[1]) + ');\n';
                    }
                    else if (block[0] === 'nextCostume') {
                        source += 'S.showNextCostume();\n';
                    }
                    else if (block[0] === 'showBackground:' ||
                        block[0] === 'startScene') {
                        source += 'self.setCostume(' + val(block[1]) + ');\n';
                        source += 'var threads = sceneChange();\n';
                        source += 'if (threads.indexOf(BASE) !== -1) {return;}\n';
                    }
                    else if (block[0] === 'nextBackground' ||
                        block[0] === 'nextScene') {
                        source += 'S.showNextCostume();\n';
                        source += 'var threads = sceneChange();\n';
                        source += 'if (threads.indexOf(BASE) !== -1) {return;}\n';
                    }
                    else if (block[0] === 'startSceneAndWait') {
                        source += 'save();\n';
                        source += 'self.setCostume(' + val(block[1]) + ');\n';
                        source += 'R.threads = sceneChange();\n';
                        source += 'if (R.threads.indexOf(BASE) !== -1) {return;}\n';
                        var id = label();
                        source += 'if (!running(R.threads)) {\n';
                        forceQueue(id);
                        source += '}\n';
                        source += 'restore();\n';
                    }
                    else if (block[0] === 'say:duration:elapsed:from:') {
                        source += 'save();\n';
                        source += 'R.id = S.say(' + val(block[1]) + ', false);\n';
                        source += 'R.start = runtime.now();\n';
                        source += 'R.duration = ' + num(block[2]) + ';\n';
                        var id = label();
                        source += 'if (runtime.now() - R.start < R.duration * 1000) {\n';
                        forceQueue(id);
                        source += '}\n';
                        source += 'if (S.sayId === R.id) {\n';
                        source += '  S.say("");\n';
                        source += '}\n';
                        source += 'restore();\n';
                    }
                    else if (block[0] === 'say:') {
                        source += 'S.say(' + val(block[1]) + ', false);\n';
                    }
                    else if (block[0] === 'think:duration:elapsed:from:') {
                        source += 'save();\n';
                        source += 'R.id = S.say(' + val(block[1]) + ', true);\n';
                        source += 'R.start = runtime.now();\n';
                        source += 'R.duration = ' + num(block[2]) + ';\n';
                        var id = label();
                        source += 'if (runtime.now() - R.start < R.duration * 1000) {\n';
                        forceQueue(id);
                        source += '}\n';
                        source += 'if (S.sayId === R.id) {\n';
                        source += '  S.say("");\n';
                        source += '}\n';
                        source += 'restore();\n';
                    }
                    else if (block[0] === 'think:') {
                        source += 'S.say(' + val(block[1]) + ', true);\n';
                    }
                    else if (block[0] === 'changeGraphicEffect:by:') {
                        source += 'S.changeFilter(' + val(block[1]) + ', ' + num(block[2]) + ');\n';
                    }
                    else if (block[0] === 'setGraphicEffect:to:') {
                        source += 'S.setFilter(' + val(block[1]) + ', ' + num(block[2]) + ');\n';
                    }
                    else if (block[0] === 'filterReset') {
                        source += 'S.resetFilters();\n';
                    }
                    else if (block[0] === 'changeSizeBy:') {
                        source += 'var f = S.scale + ' + num(block[1]) + ' / 100;\n';
                        source += 'S.scale = f < 0 ? 0 : f;\n';
                    }
                    else if (block[0] === 'setSizeTo:') {
                        source += 'var f = ' + num(block[1]) + ' / 100;\n';
                        source += 'S.scale = f < 0 ? 0 : f;\n';
                    }
                    else if (block[0] === 'show') {
                        source += 'S.visible = true;\n';
                        source += 'if (S.saying) S.updateBubble();\n';
                    }
                    else if (block[0] === 'hide') {
                        source += 'S.visible = false;\n';
                        source += 'if (S.saying) S.updateBubble();\n';
                    }
                    else if (block[0] === 'comeToFront') {
                        source += 'var i = self.children.indexOf(S);\n';
                        source += 'if (i !== -1) self.children.splice(i, 1);\n';
                        source += 'self.children.push(S);\n';
                    }
                    else if (block[0] === 'goBackByLayers:') {
                        source += 'var i = self.children.indexOf(S);\n';
                        source += 'if (i !== -1) {\n';
                        source += '  self.children.splice(i, 1);\n';
                        source += '  self.children.splice(Math.max(0, i - ' + num(block[1]) + '), 0, S);\n';
                        source += '}\n';
                    }
                    else if (block[0] === 'setVideoState') {
                        source += 'switch (' + val(block[1]) + ') {';
                        source += '  case "off": self.showVideo(false); break;';
                        source += '  case "on": self.showVideo(true); break;';
                        source += '}';
                    }
                    else if (block[0] === 'playSound:') {
                        if (P.audio.context) {
                            source += 'var sound = S.getSound(' + val(block[1]) + ');\n';
                            source += 'if (sound) startSound(sound);\n';
                        }
                    }
                    else if (block[0] === 'doPlaySoundAndWait') {
                        if (P.audio.context) {
                            source += 'var sound = S.getSound(' + val(block[1]) + ');\n';
                            source += 'if (sound) {\n';
                            source += '  save();\n';
                            source += '  R.sound = playSound(sound);\n';
                            source += '  S.activeSounds.add(R.sound);\n';
                            source += '  R.start = runtime.now();\n';
                            source += '  R.duration = sound.duration;\n';
                            source += '  var first = true;\n';
                            var id = label();
                            source += '  if ((runtime.now() - R.start < R.duration * 1000 || first) && !R.sound.stopped) {\n';
                            source += '    var first;\n';
                            forceQueue(id);
                            source += '  }\n';
                            source += '  S.activeSounds.delete(R.sound);\n';
                            source += '  restore();\n';
                            source += '}\n';
                        }
                    }
                    else if (block[0] === 'stopAllSounds') {
                        if (P.audio.context) {
                            source += 'self.stopAllSounds();\n';
                        }
                    }
                    else if (block[0] === 'playDrum') {
                        beatHead(block[2]);
                        if (P.audio.context) {
                            source += 'R.sound = playSpan(DRUMS[Math.round(' + num(block[1]) + ') - 1] || DRUMS[2], 60, 10);\n';
                        }
                        beatTail();
                    }
                    else if (block[0] === 'rest:elapsed:from:') {
                        beatHead(block[1]);
                        beatTail();
                    }
                    else if (block[0] === 'noteOn:duration:elapsed:from:') {
                        beatHead(block[2]);
                        if (P.audio.context) {
                            source += 'R.sound = playNote(' + num(block[1]) + ', R.duration);\n';
                        }
                        beatTail();
                    }
                    else if (block[0] === 'instrument:') {
                        source += 'S.instrument = Math.max(0, Math.min(INSTRUMENTS.length - 1, ' + num(block[1]) + ' - 1)) | 0;';
                    }
                    else if (block[0] === 'changeVolumeBy:' || block[0] === 'setVolumeTo:') {
                        source += 'S.volume = Math.min(1, Math.max(0, ' + (block[0] === 'changeVolumeBy:' ? 'S.volume + ' : '') + num(block[1]) + ' / 100));\n';
                        source += 'if (S.node) S.node.gain.value = S.volume;\n';
                    }
                    else if (block[0] === 'changeTempoBy:') {
                        source += 'self.tempoBPM += ' + num(block[1]) + ';\n';
                    }
                    else if (block[0] === 'setTempoTo:') {
                        source += 'self.tempoBPM = ' + num(block[1]) + ';\n';
                    }
                    else if (block[0] === 'clearPenTrails') {
                        source += 'self.clearPen();\n';
                    }
                    else if (block[0] === 'putPenDown') {
                        source += 'S.isPenDown = true;\n';
                        source += 'S.dotPen();\n';
                    }
                    else if (block[0] === 'putPenUp') {
                        source += 'S.isPenDown = false;\n';
                    }
                    else if (block[0] === 'penColor:') {
                        source += 'S.setPenColor(' + num(block[1]) + ');\n';
                    }
                    else if (block[0] === 'setPenHueTo:') {
                        source += toHSLA;
                        source += 'S.penColor.x = ' + num(block[1]) + ' * 360 / 200;\n';
                        source += 'S.penColor.y = 100;\n';
                    }
                    else if (block[0] === 'changePenHueBy:') {
                        source += toHSLA;
                        source += 'S.penColor.x += ' + num(block[1]) + ' * 360 / 200;\n';
                        source += 'S.penColor.y = 100;\n';
                    }
                    else if (block[0] === 'setPenShadeTo:') {
                        source += toHSLA;
                        source += 'S.penColor.z = ' + num(block[1]) + ' % 200;\n';
                        source += 'if (S.penColor.z < 0) S.penColor.z += 200;\n';
                        source += 'S.penColor.y = 100;\n';
                    }
                    else if (block[0] === 'changePenShadeBy:') {
                        source += toHSLA;
                        source += 'S.penColor.z = (S.penColor.z + ' + num(block[1]) + ') % 200;\n';
                        source += 'if (S.penColor.z < 0) S.penColor.z += 200;\n';
                        source += 'S.penColor.y = 100;\n';
                    }
                    else if (block[0] === 'penSize:') {
                        source += 'var f = ' + num(block[1]) + ';\n';
                        source += 'S.penSize = f < 1 ? 1 : f;\n';
                    }
                    else if (block[0] === 'changePenSizeBy:') {
                        source += 'var f = S.penSize + ' + num(block[1]) + ';\n';
                        source += 'S.penSize = f < 1 ? 1 : f;\n';
                    }
                    else if (block[0] === 'stampCostume') {
                        source += 'S.stamp();\n';
                    }
                    else if (block[0] === 'setVar:to:') {
                        source += varRef(block[1]) + ' = ' + val(block[2]) + ';\n';
                        if (isCloudVar(block[1])) {
                            source += 'cloudVariableChanged(' + val(block[1]) + ');\n';
                        }
                    }
                    else if (block[0] === 'changeVar:by:') {
                        var ref = varRef(block[1]);
                        source += ref + ' = (+' + ref + ' || 0) + ' + num(block[2]) + ';\n';
                        if (isCloudVar(block[1])) {
                            source += 'cloudVariableChanged(' + val(block[1]) + ');\n';
                        }
                    }
                    else if (block[0] === 'append:toList:') {
                        source += 'appendToList(' + listRef(block[2]) + ', ' + val(block[1]) + ');\n';
                    }
                    else if (block[0] === 'deleteLine:ofList:') {
                        source += 'deleteLineOfList(' + listRef(block[2]) + ', ' + val(block[1]) + ');\n';
                    }
                    else if (block[0] === 'insert:at:ofList:') {
                        source += 'insertInList(' + listRef(block[3]) + ', ' + val(block[2]) + ', ' + val(block[1]) + ');\n';
                    }
                    else if (block[0] === 'setLine:ofList:to:') {
                        source += 'setLineOfList(' + listRef(block[2]) + ', ' + val(block[1]) + ', ' + val(block[3]) + ');\n';
                    }
                    else if (block[0] === 'showVariable:' || block[0] === 'hideVariable:') {
                        var isShow = block[0] === 'showVariable:';
                        if (typeof block[1] === 'string') {
                            var o = object.vars[block[1]] !== undefined ? 'S' : 'self';
                            source += o + '.showVariable(' + val(block[1]) + ', ' + isShow + ');\n';
                        }
                        else {
                            warn('ignoring dynamic variable');
                        }
                    }
                    else if (block[0] === 'broadcast:') {
                        source += 'var threads = broadcast(' + val(block[1]) + ');\n';
                        source += 'if (threads.indexOf(BASE) !== -1) {return;}\n';
                    }
                    else if (block[0] === 'call') {
                        if (P.config.debug && block[1] === 'phosphorus: debug') {
                            source += 'debugger;\n';
                        }
                        else {
                            source += 'call(S.procedures[' + val(block[1]) + '], ' + nextLabel() + ', [';
                            for (var i = 2; i < block.length; i++) {
                                if (i > 2) {
                                    source += ', ';
                                }
                                source += val(block[i]);
                            }
                            source += ']);\n';
                            delay();
                        }
                    }
                    else if (block[0] === 'doBroadcastAndWait') {
                        source += 'save();\n';
                        source += 'R.threads = broadcast(' + val(block[1]) + ');\n';
                        source += 'if (R.threads.indexOf(BASE) !== -1) {return;}\n';
                        var id = label();
                        source += 'if (running(R.threads)) {\n';
                        forceQueue(id);
                        source += '}\n';
                        source += 'restore();\n';
                    }
                    else if (block[0] === 'doForever') {
                        var id = label();
                        seq(block[1]);
                        forceQueue(id);
                    }
                    else if (block[0] === 'doForeverIf') {
                        var id = label();
                        source += 'if (' + bool(block[1]) + ') {\n';
                        seq(block[2]);
                        source += '}\n';
                        forceQueue(id);
                    }
                    else if (block[0] === 'doIf') {
                        source += 'if (' + bool(block[1]) + ') {\n';
                        seq(block[2]);
                        source += '}\n';
                    }
                    else if (block[0] === 'doIfElse') {
                        source += 'if (' + bool(block[1]) + ') {\n';
                        seq(block[2]);
                        source += '} else {\n';
                        seq(block[3]);
                        source += '}\n';
                    }
                    else if (block[0] === 'doRepeat') {
                        source += 'save();\n';
                        source += 'R.count = ' + num(block[1]) + ';\n';
                        var id = label();
                        source += 'if (R.count >= 0.5) {\n';
                        source += '  R.count -= 1;\n';
                        seq(block[2]);
                        queue(id);
                        source += '} else {\n';
                        source += '  restore();\n';
                        source += '}\n';
                    }
                    else if (block[0] === 'doReturn') {
                        source += 'endCall();\n';
                        source += 'return;\n';
                    }
                    else if (block[0] === 'doUntil') {
                        var id = label();
                        source += 'if (!' + bool(block[1]) + ') {\n';
                        seq(block[2]);
                        queue(id);
                        source += '}\n';
                    }
                    else if (block[0] === 'doWhile') {
                        var id = label();
                        source += 'if (' + bool(block[1]) + ') {\n';
                        seq(block[2]);
                        queue(id);
                        source += '}\n';
                    }
                    else if (block[0] === 'doWaitUntil') {
                        var id = label();
                        source += 'if (!' + bool(block[1]) + ') {\n';
                        forceQueue(id);
                        source += '}\n';
                    }
                    else if (block[0] === 'glideSecs:toX:y:elapsed:from:') {
                        source += 'save();\n';
                        source += 'R.start = runtime.now();\n';
                        source += 'R.duration = ' + num(block[1]) + ';\n';
                        source += 'R.baseX = S.scratchX;\n';
                        source += 'R.baseY = S.scratchY;\n';
                        source += 'R.deltaX = ' + num(block[2]) + ' - S.scratchX;\n';
                        source += 'R.deltaY = ' + num(block[3]) + ' - S.scratchY;\n';
                        var id = label();
                        source += 'var f = (runtime.now() - R.start) / (R.duration * 1000);\n';
                        source += 'if (f > 1 || isNaN(f)) f = 1;\n';
                        source += 'S.moveTo(R.baseX + f * R.deltaX, R.baseY + f * R.deltaY);\n';
                        source += 'if (f < 1) {\n';
                        forceQueue(id);
                        source += '}\n';
                        source += 'restore();\n';
                    }
                    else if (block[0] === 'stopAll') {
                        source += 'runtime.stopAll();\n';
                        source += 'return;\n';
                    }
                    else if (block[0] === 'stopScripts') {
                        source += 'switch (' + val(block[1]) + ') {\n';
                        source += '  case "all":\n';
                        source += '    runtime.stopAll();\n';
                        source += '    return;\n';
                        source += '  case "this script":\n';
                        source += '    endCall();\n';
                        source += '    return;\n';
                        source += '  case "other scripts in sprite":\n';
                        source += '  case "other scripts in stage":\n';
                        source += '    S.stopSoundsExcept(BASE);\n';
                        source += '    for (var i = 0; i < runtime.queue.length; i++) {\n';
                        source += '      if (i !== THREAD && runtime.queue[i] && runtime.queue[i].sprite === S) {\n';
                        source += '        runtime.queue[i] = undefined;\n';
                        source += '      }\n';
                        source += '    }\n';
                        source += '    break;\n';
                        source += '}\n';
                    }
                    else if (block[0] === 'wait:elapsed:from:') {
                        wait(num(block[1]));
                    }
                    else if (block[0] === 'warpSpeed') {
                        source += 'WARP++;\n';
                        seq(block[1]);
                        source += 'WARP--;\n';
                    }
                    else if (block[0] === 'createCloneOf') {
                        source += 'clone(' + val(block[1]) + ');\n';
                    }
                    else if (block[0] === 'deleteClone') {
                        source += 'if (S.isClone) {\n';
                        source += '  S.remove();\n';
                        source += '  var i = self.children.indexOf(S);\n';
                        source += '  if (i !== -1) self.children.splice(i, 1);\n';
                        source += '  for (var i = 0; i < runtime.queue.length; i++) {\n';
                        source += '    if (runtime.queue[i] && runtime.queue[i].sprite === S) {\n';
                        source += '      runtime.queue[i] = undefined;\n';
                        source += '    }\n';
                        source += '  }\n';
                        source += '  return;\n';
                        source += '}\n';
                    }
                    else if (block[0] === 'doAsk') {
                        source += 'R.id = self.nextPromptId++;\n';
                        var id = label();
                        source += 'if (self.promptId < R.id) {\n';
                        forceQueue(id);
                        source += '}\n';
                        source += 'S.ask(' + val(block[1]) + ');\n';
                        var id = label();
                        source += 'if (self.promptId === R.id) {\n';
                        forceQueue(id);
                        source += '}\n';
                    }
                    else if (block[0] === 'timerReset') {
                        source += 'runtime.timerStart = runtime.now();\n';
                    }
                    else {
                        warn('Undefined command: ' + block[0]);
                    }
                };
                var source = '';
                var startfn = object.fns.length;
                var fns = [0];
                if (script[0][0] === 'procDef') {
                    var inputs = script[0][2];
                    var types = script[0][1].match(/%[snmdcb]/g) || [];
                    var used = [];
                }
                for (let i = 1; i < script.length; i++) {
                    compile(script[i]);
                }
                if (script[0][0] === 'procDef') {
                    let pre = '';
                    for (let i = types.length; i--;) {
                        if (used[i]) {
                            const t = types[i];
                            if (t === '%d' || t === '%n' || t === '%c') {
                                pre += 'C.numargs[' + i + '] = +C.args[' + i + '] || 0;\n';
                            }
                            else if (t === '%b') {
                                pre += 'C.boolargs[' + i + '] = bool(C.args[' + i + ']);\n';
                            }
                        }
                    }
                    source = pre + source;
                    for (let i = 1, l = fns.length; i < l; ++i) {
                        fns[i] += pre.length;
                    }
                    source += 'endCall();\n';
                    source += 'return;\n';
                }
                for (let i = 0; i < fns.length; i++) {
                    object.fns.push(P.runtime.createContinuation(source.slice(fns[i])));
                }
                var f = object.fns[startfn];
                if (script[0][0] === 'whenClicked') {
                    object.listeners.whenClicked.push(f);
                }
                else if (script[0][0] === 'whenGreenFlag') {
                    object.listeners.whenGreenFlag.push(f);
                }
                else if (script[0][0] === 'whenCloned') {
                    object.listeners.whenCloned.push(f);
                }
                else if (script[0][0] === 'whenIReceive') {
                    var key = script[0][1].toLowerCase();
                    (object.listeners.whenIReceive[key] || (object.listeners.whenIReceive[key] = [])).push(f);
                }
                else if (script[0][0] === 'whenKeyPressed') {
                    if (script[0][1] === 'any') {
                        for (var i = 128; i--;) {
                            object.listeners.whenKeyPressed[i].push(f);
                        }
                    }
                    else {
                        object.listeners.whenKeyPressed[P.runtime.getKeyCode(script[0][1])].push(f);
                    }
                }
                else if (script[0][0] === 'whenSceneStarts') {
                    var key = script[0][1].toLowerCase();
                    (object.listeners.whenSceneStarts[key] || (object.listeners.whenSceneStarts[key] = [])).push(f);
                }
                else if (script[0][0] === 'procDef') {
                    const warp = script[0][4];
                    const name = script[0][1];
                    if (!object.procedures[name]) {
                        object.procedures[name] = new Scratch2Procedure(f, warp, inputs);
                    }
                    else {
                        warn('procedure already exists: ' + name);
                    }
                }
                else {
                    warn('Undefined event: ' + script[0][0]);
                }
                if (P.config.debug) {
                    var variant = script[0][0];
                    if (variant === 'procDef') {
                        variant += ':' + script[0][1];
                    }
                    console.log('compiled sb2 script', variant, source);
                }
            };
            function compile(stage) {
                warnings = Object.create(null);
                compileScripts(stage);
                for (var i = 0; i < stage.children.length; i++) {
                    compileScripts(stage.children[i]);
                }
                for (var key in warnings) {
                    console.warn(key + (warnings[key] > 1 ? ' (repeated ' + warnings[key] + ' times)' : ''));
                }
            }
            compiler.compile = compile;
        })(compiler = sb2.compiler || (sb2.compiler = {}));
    })(sb2 = P.sb2 || (P.sb2 = {}));
})(P || (P = {}));
var P;
(function (P) {
    var sb3;
    (function (sb3) {
        sb3.ASSETS_API = 'https://assets.scratch.mit.edu/internalapi/asset/$md5ext/get/';
        class Scratch3Stage extends P.core.Stage {
            constructor() {
                super(...arguments);
                this.listIds = {};
                this.varIds = {};
            }
        }
        sb3.Scratch3Stage = Scratch3Stage;
        class Scratch3Sprite extends P.core.Sprite {
            constructor() {
                super(...arguments);
                this.listIds = {};
                this.varIds = {};
            }
            _clone() {
                return new Scratch3Sprite(this.stage);
            }
        }
        sb3.Scratch3Sprite = Scratch3Sprite;
        class Scratch3VariableWatcher extends P.core.Watcher {
            constructor(stage, data) {
                super(stage, data.spriteName || '');
                this.id = data.id;
                this.opcode = data.opcode;
                this.mode = data.mode;
                this.params = data.params;
                this.libraryEntry = P.sb3.compiler.watcherLibrary[this.opcode];
                this.x = data.x;
                this.y = data.y;
                this.visible = typeof data.visible === 'boolean' ? data.visible : true;
                this.sliderMin = data.sliderMin || 0;
                this.sliderMax = data.sliderMax || 0;
                if (typeof data.isDiscrete !== 'undefined') {
                    this.sliderStep = data.isDiscrete ? 1 : 0.01;
                }
                else {
                    this.sliderStep = 1;
                }
                if (!this.libraryEntry) {
                    console.warn('unknown watcher', this.opcode, this);
                    this.valid = false;
                }
            }
            update() {
                if (this.visible) {
                    const value = this.getValue();
                    if (this.valueEl.textContent !== value) {
                        this.valueEl.textContent = value;
                    }
                    if (this.sliderInput) {
                        this.sliderInput.value = value;
                    }
                }
            }
            init() {
                super.init();
                if (this.libraryEntry.init) {
                    this.libraryEntry.init(this);
                }
                this.updateLayout();
            }
            setVisible(visible) {
                super.setVisible(visible);
                this.updateLayout();
            }
            getLabel() {
                const label = this.libraryEntry.getLabel(this);
                if (!this.target.isStage) {
                    return this.targetName + ': ' + label;
                }
                return label;
            }
            getValue() {
                const value = this.libraryEntry.evaluate(this);
                if (typeof value === 'number') {
                    return '' + (Math.round(value * 1e6) / 1e6);
                }
                return '' + value;
            }
            setValue(value) {
                if (this.libraryEntry.set) {
                    this.libraryEntry.set(this, value);
                    this.update();
                }
            }
            updateLayout() {
                if (this.containerEl) {
                    this.containerEl.style.display = this.visible ? 'flex' : 'none';
                    return;
                }
                if (!this.visible) {
                    return;
                }
                const container = document.createElement('div');
                container.classList.add('s3-watcher-container');
                container.dataset.opcode = this.opcode;
                container.style.top = (this.y / 10) + 'em';
                container.style.left = (this.x / 10) + 'em';
                container.onmousedown = (e) => e.stopPropagation();
                container.ontouchstart = (e) => e.stopPropagation();
                const value = document.createElement('div');
                value.classList.add('s3-watcher-value');
                value.textContent = this.getValue();
                this.containerEl = container;
                this.valueEl = value;
                this.stage.ui.appendChild(container);
                const mode = this.mode;
                if (mode === 'large') {
                    container.classList.add('s3-watcher-large');
                    container.appendChild(value);
                }
                else {
                    const row = document.createElement('div');
                    row.classList.add('s3-watcher-row');
                    row.classList.add('s3-watcher-row-normal');
                    const label = document.createElement('div');
                    label.classList.add('s3-watcher-label');
                    label.textContent = this.getLabel();
                    row.appendChild(label);
                    row.appendChild(value);
                    container.classList.add('s3-watcher-container-normal');
                    container.appendChild(row);
                    if (mode === 'slider') {
                        const slider = document.createElement('div');
                        slider.classList.add('s3-watcher-row-slider');
                        const input = document.createElement('input');
                        input.type = 'range';
                        input.min = '' + this.sliderMin;
                        input.max = '' + this.sliderMax;
                        input.step = '' + this.sliderStep;
                        input.value = this.getValue();
                        input.addEventListener('input', this.sliderChanged.bind(this));
                        this.sliderInput = input;
                        slider.appendChild(input);
                        container.appendChild(slider);
                    }
                }
            }
            sliderChanged(e) {
                const value = +e.target.value;
                this.setValue(value);
            }
        }
        sb3.Scratch3VariableWatcher = Scratch3VariableWatcher;
        class ListWatcherRow {
            constructor() {
                this.value = '';
                this.index = -1;
                this.y = 0;
                this.visible = true;
                this.element = document.createElement('div');
                this.indexEl = document.createElement('div');
                this.valueEl = document.createElement('div');
                this.element.className = 's3-list-row';
                this.indexEl.className = 's3-list-index';
                this.valueEl.className = 's3-list-value';
                this.element.appendChild(this.indexEl);
                this.element.appendChild(this.valueEl);
            }
            setValue(value) {
                if (value !== this.value) {
                    this.value = value;
                    this.valueEl.textContent = value;
                }
            }
            setIndex(index) {
                if (index !== this.index) {
                    this.index = index;
                    this.indexEl.textContent = (index + 1).toString();
                }
            }
            setY(y) {
                if (y !== this.y) {
                    this.y = y;
                    this.element.style.transform = 'translateY(' + y + 'px)';
                }
            }
            setVisible(visible) {
                if (this.visible !== visible) {
                    this.visible = visible;
                    this.element.style.display = visible ? '' : 'none';
                }
            }
        }
        sb3.ListWatcherRow = ListWatcherRow;
        class Scratch3ListWatcher extends P.core.Watcher {
            constructor(stage, data) {
                super(stage, data.spriteName || '');
                this.rows = [];
                this.firstUpdateComplete = false;
                this._rowHeight = -1;
                this.scrollTop = 0;
                this.lastZoomLevel = 1;
                this.scrollAhead = 8;
                this.scrollBack = 3;
                this.scrollDirection = 1;
                this._contentHeight = -1;
                this.id = data.id;
                this.params = data.params;
                this.x = data.x;
                this.y = data.y;
                this.visible = typeof data.visible === 'boolean' ? data.visible : true;
                this.width = data.width || 100;
                this.height = data.height || 200;
            }
            shouldUpdate() {
                if (!this.visible)
                    return false;
                if (this.lastZoomLevel !== this.stage.zoom)
                    return true;
                if (!this.firstUpdateComplete)
                    return true;
                return this.list.modified;
            }
            update() {
                if (!this.shouldUpdate()) {
                    return;
                }
                if (this.lastZoomLevel !== this.stage.zoom) {
                    this.contentEl.scrollTop *= this.stage.zoom / this.lastZoomLevel;
                }
                this.list.modified = false;
                this.lastZoomLevel = this.stage.zoom;
                this.firstUpdateComplete = true;
                this.updateList();
                const bottomLabelText = this.getBottomLabel();
                if (this.bottomLabelEl.textContent !== bottomLabelText) {
                    this.bottomLabelEl.textContent = this.getBottomLabel();
                }
            }
            updateList() {
                if (!this.visible && this._rowHeight === -1) {
                    return;
                }
                const height = this.list.length * this.getRowHeight() * this.stage.zoom;
                this.endpointEl.style.transform = 'translateY(' + height + 'px)';
                const topVisible = this.scrollTop;
                const bottomVisible = topVisible + this.getContentHeight();
                let startingIndex = Math.floor(topVisible / this.getRowHeight());
                let endingIndex = Math.ceil(bottomVisible / this.getRowHeight());
                if (this.scrollDirection === 1) {
                    startingIndex -= this.scrollBack;
                    endingIndex += this.scrollAhead;
                }
                else {
                    startingIndex -= this.scrollAhead;
                    endingIndex += this.scrollBack;
                }
                if (startingIndex < 0)
                    startingIndex = 0;
                if (endingIndex > this.list.length - 1)
                    endingIndex = this.list.length - 1;
                if (endingIndex - startingIndex > 50) {
                    endingIndex = startingIndex + 50;
                }
                const visibleRows = endingIndex - startingIndex;
                while (this.rows.length <= visibleRows) {
                    this.addRow();
                }
                for (var listIndex = startingIndex, rowIndex = 0; listIndex <= endingIndex; listIndex++, rowIndex++) {
                    let row = this.rows[rowIndex];
                    row.setIndex(listIndex);
                    row.setValue(this.list[listIndex]);
                    row.setY(listIndex * this._rowHeight * this.stage.zoom);
                    row.setVisible(true);
                }
                while (rowIndex < this.rows.length) {
                    this.rows[rowIndex].setVisible(false);
                    rowIndex++;
                }
            }
            init() {
                super.init();
                const target = this.target;
                const listId = this.id;
                const listName = target.listIds[listId];
                if (!(listName in this.target.lists)) {
                    this.target.lists[listName] = createList();
                }
                this.list = this.target.lists[listName];
                this.target.listWatchers[listName] = this;
                if (this.visible) {
                    this.updateLayout();
                }
            }
            getTopLabel() {
                if (this.target.isStage) {
                    return this.params.LIST;
                }
                return this.target.name + ': ' + this.params.LIST;
            }
            getBottomLabel() {
                return 'length ' + this.list.length;
            }
            getContentHeight() {
                if (this._contentHeight === -1) {
                    this._contentHeight = this.contentEl.offsetHeight;
                }
                return this._contentHeight;
            }
            getRowHeight() {
                if (this._rowHeight === -1) {
                    const PADDING = 2;
                    if (this.rows.length === 0) {
                        this.addRow();
                    }
                    const height = this.rows[0].element.offsetHeight / this.stage.zoom;
                    if (height === 0) {
                        return 0;
                    }
                    this._rowHeight = height + PADDING;
                }
                return this._rowHeight;
            }
            addRow() {
                const row = new ListWatcherRow();
                this.rows.push(row);
                this.contentEl.appendChild(row.element);
                return row;
            }
            updateLayout() {
                if (!this.containerEl) {
                    if (!this.visible) {
                        return;
                    }
                    this.createLayout();
                }
                this.containerEl.style.display = this.visible ? '' : 'none';
            }
            setVisible(visible) {
                super.setVisible(visible);
                this.updateLayout();
            }
            createLayout() {
                this.containerEl = document.createElement('div');
                this.topLabelEl = document.createElement('div');
                this.bottomLabelEl = document.createElement('div');
                this.middleContainerEl = document.createElement('div');
                this.contentEl = document.createElement('div');
                this.containerEl.style.top = (this.y / 10) + 'em';
                this.containerEl.style.left = (this.x / 10) + 'em';
                this.containerEl.style.height = (this.height / 10) + 'em';
                this.containerEl.style.width = (this.width / 10) + 'em';
                this.containerEl.classList.add('s3-list-container');
                this.containerEl.onmousedown = (e) => e.stopPropagation();
                this.containerEl.ontouchstart = (e) => e.stopPropagation();
                this.topLabelEl.textContent = this.getTopLabel();
                this.topLabelEl.classList.add('s3-list-top-label');
                this.bottomLabelEl.textContent = this.getBottomLabel();
                this.bottomLabelEl.classList.add('s3-list-bottom-label');
                this.middleContainerEl.classList.add('s3-list-content');
                this.contentEl.classList.add('s3-list-rows');
                this.contentEl.addEventListener('scroll', (e) => {
                    const scrollTop = this.contentEl.scrollTop / this.stage.zoom;
                    const scrollChange = this.scrollTop - scrollTop;
                    if (scrollChange < 0) {
                        this.scrollDirection = 1;
                    }
                    else if (scrollChange > 0) {
                        this.scrollDirection = 0;
                    }
                    this.scrollTop = scrollTop;
                    this.updateList();
                });
                this.endpointEl = document.createElement('div');
                this.endpointEl.className = 's3-list-endpoint';
                this.contentEl.appendChild(this.endpointEl);
                this.middleContainerEl.appendChild(this.contentEl);
                this.containerEl.appendChild(this.topLabelEl);
                this.containerEl.appendChild(this.middleContainerEl);
                this.containerEl.appendChild(this.bottomLabelEl);
                this.stage.ui.appendChild(this.containerEl);
            }
        }
        sb3.Scratch3ListWatcher = Scratch3ListWatcher;
        class Scratch3Procedure extends P.core.Procedure {
            call(inputs) {
                const args = {};
                for (var i = 0; i < this.inputs.length; i++) {
                    args[this.inputs[i]] = inputs[i];
                }
                return args;
            }
        }
        sb3.Scratch3Procedure = Scratch3Procedure;
        function createList() {
            const list = [];
            list.modified = false;
            list.toString = function () {
                var i = this.length;
                while (i--) {
                    if (('' + this[i]).length !== 1) {
                        return this.join(' ');
                    }
                }
                return this.join('');
            };
            return list;
        }
        sb3.createList = createList;
        const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
        function fixSVGNamespace(svg) {
            const newDocument = document.implementation.createHTMLDocument();
            const newSVG = newDocument.createElementNS(SVG_NAMESPACE, 'svg');
            for (const attribute of svg.attributes) {
                newSVG.setAttribute(attribute.name, attribute.value);
            }
            newSVG.innerHTML = svg.innerHTML;
            return newSVG;
        }
        function patchSVG(svg, costumeOptions) {
            const invalidNamespace = svg.namespaceURI !== SVG_NAMESPACE;
            if (invalidNamespace) {
                svg = fixSVGNamespace(svg);
                if (svg.firstElementChild && svg.firstElementChild.tagName !== 'g') {
                    const width = svg.width.baseVal;
                    const height = svg.height.baseVal;
                    if (width.unitType !== width.SVG_LENGTHTYPE_PERCENTAGE && height.unitType !== width.SVG_LENGTHTYPE_PERCENTAGE) {
                        const group = document.createElementNS(SVG_NAMESPACE, 'g');
                        const transform = svg.createSVGTransform();
                        for (const el of svg.children) {
                            group.appendChild(el);
                        }
                        transform.setTranslate(-width.value / 2, height.value / 2);
                        group.transform.baseVal.appendItem(transform);
                        costumeOptions.rotationCenterX -= width.value / 2;
                        costumeOptions.rotationCenterY += height.value / 2;
                        svg.appendChild(group);
                    }
                }
            }
            if (svg.hasAttribute('viewBox')) {
                const viewBox = svg.getAttribute('viewBox').split(/ |,/).map((i) => +i);
                if (viewBox.every((i) => !isNaN(i)) && viewBox.length === 4) {
                    const [x, y, w, h] = viewBox;
                    svg.setAttribute('width', (w + x).toString());
                    svg.setAttribute('height', (h + y).toString());
                }
                else {
                    console.warn('weird viewBox', svg.getAttribute('viewBox'));
                }
                svg.removeAttribute('viewBox');
            }
            const textElements = svg.querySelectorAll('text');
            const usedFonts = [];
            const addFont = (font) => {
                if (usedFonts.indexOf(font) === -1) {
                    usedFonts.push(font);
                }
            };
            for (var i = 0; i < textElements.length; i++) {
                const el = textElements[i];
                let fonts = (el.getAttribute('font-family') || '')
                    .split(',')
                    .map((i) => i.trim());
                let found = false;
                for (const family of fonts) {
                    if (P.fonts.scratch3[family]) {
                        found = true;
                        addFont(family);
                        break;
                    }
                    else if (family === 'sans-serif') {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    console.warn('unknown fonts', fonts);
                    const font = 'Sans Serif';
                    addFont(font);
                    el.setAttribute('font-family', font);
                }
            }
            P.fonts.addFontRules(svg, usedFonts);
            return svg;
        }
        class BaseSB3Loader extends P.io.Loader {
            constructor() {
                super(...arguments);
                this.needsMusic = false;
            }
            getSVG(path, costumeOptions) {
                return this.getAsText(path)
                    .then((source) => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(source, 'image/svg+xml');
                    const svg = patchSVG(doc.documentElement, costumeOptions);
                    return new Promise((resolve, reject) => {
                        const image = new Image();
                        image.onload = (e) => {
                            resolve(image);
                        };
                        image.onerror = (e) => {
                            reject(new Error('Failed to load SVG: ' + path));
                        };
                        image.src = 'data:image/svg+xml,' + encodeURIComponent(new XMLSerializer().serializeToString(svg));
                    });
                });
            }
            getBitmapImage(path, format) {
                return this.getAsImage(path, format);
            }
            loadCostume(data, index) {
                const path = data.assetId + '.' + data.dataFormat;
                const costumeOptions = {
                    name: data.name,
                    bitmapResolution: data.bitmapResolution || 1,
                    rotationCenterX: data.rotationCenterX,
                    rotationCenterY: data.rotationCenterY,
                };
                if (data.dataFormat === 'svg') {
                    return this.getSVG(path, costumeOptions)
                        .then((svg) => new P.core.VectorCostume(svg, costumeOptions));
                }
                else {
                    return this.getBitmapImage(path, data.dataFormat)
                        .then((image) => new P.core.BitmapCostume(image, costumeOptions));
                }
            }
            getAudioBuffer(path) {
                return this.getAsArrayBuffer(path)
                    .then((buffer) => P.audio.decodeAudio(buffer))
                    .catch((err) => {
                    throw new Error(`Could not load audio: ${path} (${err})`);
                });
            }
            loadSound(data) {
                return new Promise((resolve, reject) => {
                    this.getAudioBuffer(data.md5ext)
                        .then((buffer) => {
                        resolve(new P.core.Sound({
                            name: data.name,
                            buffer,
                        }));
                    })
                        .catch((err) => {
                        console.warn('Could not load sound: ' + err);
                        resolve(null);
                    });
                });
            }
            loadWatcher(data, stage) {
                if (data.mode === 'list') {
                    return new Scratch3ListWatcher(stage, data);
                }
                return new Scratch3VariableWatcher(stage, data);
            }
            loadTarget(data) {
                const target = new (data.isStage ? Scratch3Stage : Scratch3Sprite)(null);
                for (const id of Object.keys(data.variables)) {
                    const variable = data.variables[id];
                    const name = variable[0];
                    const value = variable[1];
                    if (variable.length > 2) {
                        const cloud = variable[2];
                        if (cloud) {
                            if (data.isStage) {
                                target.cloudVariables.push(name);
                            }
                            else {
                                console.warn('Cloud variable found on a non-stage object. Skipping.');
                            }
                        }
                    }
                    target.vars[name] = value;
                    target.varIds[id] = name;
                }
                for (const id of Object.keys(data.lists)) {
                    const list = data.lists[id];
                    const name = list[0];
                    const content = list[1];
                    if (target.lists[name]) {
                        continue;
                    }
                    const scratchList = createList();
                    for (var i = 0; i < content.length; i++) {
                        scratchList[i] = content[i];
                    }
                    target.lists[name] = scratchList;
                    target.listIds[id] = name;
                }
                target.name = data.name;
                target.currentCostumeIndex = data.currentCostume;
                target.sb3data = data;
                if (target.isStage) {
                }
                else {
                    const sprite = target;
                    sprite.scratchX = data.x;
                    sprite.scratchY = data.y;
                    sprite.visible = data.visible;
                    sprite.direction = data.direction;
                    sprite.scale = data.size / 100;
                    sprite.isDraggable = data.draggable;
                    sprite.rotationStyle = P.utils.parseRotationStyle(data.rotationStyle);
                }
                const costumesPromise = Promise.all(data.costumes.map((c, i) => this.loadCostume(c, i)));
                const soundsPromise = Promise.all(data.sounds.map((c) => this.loadSound(c)));
                return Promise.all([costumesPromise, soundsPromise])
                    .then((result) => {
                    const costumes = result[0];
                    const sounds = result[1];
                    target.costumes = costumes;
                    sounds.forEach((sound) => sound && target.addSound(sound));
                    return target;
                });
            }
            loadRequiredAssets() {
                return Promise.all([
                    this.loadFonts(),
                ]);
            }
            loadSoundbank() {
                return P.audio.loadSoundbankSB2(this);
            }
            loadFonts() {
                const promises = [];
                for (const family in P.fonts.scratch3) {
                    const promise = P.utils.settled(P.fonts.loadLocalFont(family, P.fonts.scratch3[family]));
                    promises.push(promise);
                    this.addTask(new P.io.PromiseTask(promise));
                }
                return Promise.all(promises);
            }
            compileTargets(targets, stage) {
                if (P.config.debug) {
                    console.time('Scratch 3 compile');
                }
                for (const target of targets) {
                    const compiler = new P.sb3.compiler.Compiler(target);
                    compiler.compile();
                    if (compiler.needsMusic) {
                        this.needsMusic = true;
                    }
                }
                if (P.config.debug) {
                    console.timeEnd('Scratch 3 compile');
                }
            }
            async load() {
                if (!this.projectData) {
                    throw new Error('Project data is missing or invalid');
                }
                if (!Array.isArray(this.projectData.targets)) {
                    throw new Error('Invalid project data: missing targets');
                }
                await this.loadRequiredAssets();
                this.resetTasks();
                const targets = await Promise.all(this.projectData.targets
                    .sort((a, b) => a.layerOrder - b.layerOrder)
                    .map((data) => this.loadTarget(data)));
                if (this.aborted) {
                    throw new Error('Loading aborting.');
                }
                const stage = targets.filter((i) => i.isStage)[0];
                if (!stage) {
                    throw new Error('Project does not have a Stage');
                }
                const sprites = targets.filter((i) => i.isSprite);
                sprites.forEach((sprite) => sprite.stage = stage);
                stage.children = sprites;
                if (this.projectData.monitors) {
                    stage.allWatchers = this.projectData.monitors
                        .map((data) => this.loadWatcher(data, stage))
                        .filter((i) => i && i.valid);
                    stage.allWatchers.forEach((watcher) => watcher.init());
                }
                this.compileTargets(targets, stage);
                if (this.needsMusic) {
                    await this.loadSoundbank();
                }
                this.projectData = null;
                return stage;
            }
        }
        sb3.BaseSB3Loader = BaseSB3Loader;
        class SB3FileLoader extends BaseSB3Loader {
            constructor(buffer) {
                super();
                this.buffer = buffer;
            }
            getAsText(path) {
                const task = this.addTask(new P.io.Manual());
                const file = this.zip.file(path);
                if (!file) {
                    throw new Error('cannot find file as text: ' + path);
                }
                return file.async('text')
                    .then((response) => {
                    task.markComplete();
                    return response;
                });
            }
            getAsArrayBuffer(path) {
                const task = this.addTask(new P.io.Manual());
                const file = this.zip.file(path);
                if (!file) {
                    throw new Error('cannot find file as arraybuffer: ' + path);
                }
                return file.async('arraybuffer')
                    .then((response) => {
                    task.markComplete();
                    return response;
                });
            }
            getAsBase64(path) {
                const task = this.addTask(new P.io.Manual());
                const file = this.zip.file(path);
                if (!file) {
                    throw new Error('cannot find file as base64: ' + path);
                }
                return file.async('base64')
                    .then((response) => {
                    task.markComplete();
                    return response;
                });
            }
            getAsImage(path, format) {
                const task = this.addTask(new P.io.Manual());
                return this.getAsBase64(path)
                    .then((imageData) => {
                    return new Promise((resolve, reject) => {
                        const image = new Image();
                        image.onload = () => {
                            task.markComplete();
                            resolve(image);
                        };
                        image.onerror = (error) => {
                            reject(new Error('Failed to load image: ' + path + '.' + format));
                        };
                        image.src = 'data:image/' + format + ';base64,' + imageData;
                    });
                });
            }
            load() {
                return JSZip.loadAsync(this.buffer)
                    .then((data) => {
                    this.zip = data;
                    return this.getAsText('project.json');
                })
                    .then((project) => {
                    this.projectData = JSON.parse(project);
                })
                    .then(() => super.load());
            }
        }
        sb3.SB3FileLoader = SB3FileLoader;
        class Scratch3Loader extends BaseSB3Loader {
            constructor(idOrData) {
                super();
                if (typeof idOrData === 'object') {
                    this.projectData = idOrData;
                    this.projectId = null;
                }
                else {
                    this.projectId = idOrData;
                }
            }
            getAsText(path) {
                return this.addTask(new P.io.Request(sb3.ASSETS_API.replace('$md5ext', path))).load('text');
            }
            getAsArrayBuffer(path) {
                return this.addTask(new P.io.Request(sb3.ASSETS_API.replace('$md5ext', path))).load('arraybuffer');
            }
            getAsImage(path) {
                return this.addTask(new P.io.Img(sb3.ASSETS_API.replace('$md5ext', path))).load();
            }
            load() {
                if (this.projectId) {
                    return this.addTask(new P.io.Request(P.config.PROJECT_API.replace('$id', '' + this.projectId))).load('json')
                        .then((data) => {
                        this.projectData = data;
                        return super.load();
                    });
                }
                else {
                    return super.load();
                }
            }
        }
        sb3.Scratch3Loader = Scratch3Loader;
    })(sb3 = P.sb3 || (P.sb3 = {}));
})(P || (P = {}));
(function (P) {
    var sb3;
    (function (sb3) {
        var compiler;
        (function (compiler_1) {
            function assertNever(i) {
                throw new Error('Compile-time assertNever failed.');
            }
            class CompiledInput {
                constructor(source, type) {
                    this.source = source;
                    this.type = type;
                    this.potentialNumber = true;
                    this.flags = 0;
                }
                enableFlag(flag) {
                    this.flags |= flag;
                }
                hasFlag(flag) {
                    return (this.flags & flag) !== 0;
                }
                toString() {
                    return this.source;
                }
            }
            compiler_1.CompiledInput = CompiledInput;
            const stringInput = (v) => new CompiledInput(v, 'string');
            const numberInput = (v) => new CompiledInput(v, 'number');
            const booleanInput = (v) => new CompiledInput(v, 'boolean');
            const anyInput = (v) => new CompiledInput(v, 'any');
            ;
            class BlockUtil {
                constructor(compiler, block) {
                    this.compiler = compiler;
                    this.block = block;
                }
                get target() {
                    return this.compiler.target;
                }
                get stage() {
                    return this.compiler.target.stage;
                }
                getInput(name, type) {
                    return this.compiler.compileInput(this.block, name, type);
                }
                getField(name) {
                    return this.compiler.getField(this.block, name);
                }
                fieldInput(name) {
                    return this.sanitizedInput(this.getField(name));
                }
                sanitizedInput(string) {
                    return this.compiler.sanitizedInput(string);
                }
                sanitizedString(string) {
                    return this.compiler.sanitizedString(string);
                }
                getVariableReference(field) {
                    return this.compiler.getVariableReference(this.compiler.getVariableField(this.block, field));
                }
                getListReference(field) {
                    return this.compiler.getListReference(this.compiler.getVariableField(this.block, field));
                }
                getVariableScope(field) {
                    return this.compiler.findVariable(this.compiler.getVariableField(this.block, field)).scope;
                }
                isCloudVariable(field) {
                    return this.target.stage.cloudVariables.indexOf(this.getField(field)) > -1;
                }
                getListScope(field) {
                    return this.compiler.findList(this.compiler.getVariableField(this.block, field)).scope;
                }
                asType(input, type) {
                    return this.compiler.asType(input, type);
                }
                evaluateInputOnce(input) {
                    const fn = P.runtime.scopedEval(`(function() { return ${input}; })`);
                    return this.target.stage.runtime.evaluateExpression(this.target, fn);
                }
            }
            compiler_1.BlockUtil = BlockUtil;
            class StatementUtil extends BlockUtil {
                constructor() {
                    super(...arguments);
                    this.content = '';
                    this.substacksQueue = false;
                }
                getSubstack(name) {
                    const labelsBefore = this.compiler.labelCount;
                    const substack = this.compiler.compileSubstackInput(this.block, name);
                    if (this.compiler.labelCount !== labelsBefore) {
                        this.substacksQueue = true;
                    }
                    return substack;
                }
                claimNextLabel() {
                    return this.compiler.labelCount++;
                }
                addLabel(label) {
                    if (!label) {
                        label = this.claimNextLabel();
                    }
                    this.write(`{{${label}}}`);
                    return label;
                }
                queue(label) {
                    this.writeLn(`queue(${label}); return;`);
                }
                forceQueue(label) {
                    this.writeLn(`forceQueue(${label}); return;`);
                }
                visual(variant) {
                    switch (variant) {
                        case 'drawing':
                            this.writeLn('if (S.visible || S.isPenDown) VISUAL = true;');
                            break;
                        case 'visible':
                            this.writeLn('if (S.visible) VISUAL = true;');
                            break;
                        case 'always':
                            this.writeLn('VISUAL = true;');
                            break;
                        default: assertNever(variant);
                    }
                }
                updateBubble() {
                    this.writeLn('if (S.saying) S.updateBubble()');
                }
                waitUntilSettles(source) {
                    this.writeLn('save();');
                    this.writeLn('R.resume = false;');
                    this.writeLn('var localR = R;');
                    this.writeLn(`${source}`);
                    this.writeLn('  .then(function() { localR.resume = true; })');
                    this.writeLn('  .catch(function() { localR.resume = true; });');
                    const label = this.addLabel();
                    this.writeLn('if (!R.resume) {');
                    this.forceQueue(label);
                    this.writeLn('}');
                    this.writeLn('restore();');
                }
                waitOneTick() {
                    this.writeLn('save();');
                    this.writeLn('R.start = runtime.currentMSecs;');
                    const label = this.addLabel();
                    this.writeLn('if (runtime.currentMSecs === R.start) {');
                    this.forceQueue(label);
                    this.writeLn('}');
                    this.writeLn('restore();');
                }
                write(content) {
                    this.content += content;
                }
                writeLn(content) {
                    this.content += content + '\n';
                }
            }
            compiler_1.StatementUtil = StatementUtil;
            class InputUtil extends BlockUtil {
                numberInput(v) { return numberInput(v); }
                stringInput(v) { return stringInput(v); }
                booleanInput(v) { return booleanInput(v); }
                anyInput(v) { return anyInput(v); }
            }
            compiler_1.InputUtil = InputUtil;
            class HatUtil extends BlockUtil {
                constructor(compiler, block, startingFunction) {
                    super(compiler, block);
                    this.startingFunction = startingFunction;
                }
            }
            compiler_1.HatUtil = HatUtil;
            compiler_1.statementLibrary = Object.create(null);
            compiler_1.inputLibrary = Object.create(null);
            compiler_1.hatLibrary = Object.create(null);
            compiler_1.watcherLibrary = Object.create(null);
            class Compiler {
                constructor(target) {
                    this.labelCount = 0;
                    this.needsMusic = false;
                    this.costumeAndSoundNames = new Set();
                    this.target = target;
                    this.data = target.sb3data;
                    this.blocks = this.data.blocks;
                    for (const costume of target.costumes) {
                        this.costumeAndSoundNames.add(costume.name);
                    }
                    for (const sound of target.sounds) {
                        this.costumeAndSoundNames.add(sound.name);
                    }
                }
                getHatBlocks() {
                    return Object.keys(this.blocks)
                        .filter((i) => this.blocks[i].topLevel);
                }
                getStatementCompiler(opcode) {
                    if (compiler_1.statementLibrary[opcode]) {
                        return compiler_1.statementLibrary[opcode];
                    }
                    return null;
                }
                getInputCompiler(opcode) {
                    if (compiler_1.inputLibrary[opcode]) {
                        return compiler_1.inputLibrary[opcode];
                    }
                    return null;
                }
                getHatCompiler(opcode) {
                    if (compiler_1.hatLibrary[opcode]) {
                        return compiler_1.hatLibrary[opcode];
                    }
                    return null;
                }
                getInputFallback(type) {
                    switch (type) {
                        case 'number': return '0';
                        case 'boolean': return 'false';
                        case 'string': return '""';
                        case 'any': return '""';
                        case 'list': return '""';
                    }
                    assertNever(type);
                }
                asType(input, type) {
                    switch (type) {
                        case 'string': return '("" + ' + input + ')';
                        case 'number': return '(+' + input + ' || 0)';
                        case 'boolean': return 'bool(' + input + ')';
                        case 'any': return input;
                        case 'list': throw new Error("Converting to 'list' type is not something you're supposed to do");
                    }
                    assertNever(type);
                }
                convertInputType(input, type) {
                    if (input.type === type) {
                        if (type === 'number' && input.hasFlag(1)) {
                            return new CompiledInput('(' + input.source + ' || 0)', type);
                        }
                        return input;
                    }
                    if (type === 'any') {
                        if (input.type === 'list') {
                            type = 'string';
                        }
                        else {
                            return input;
                        }
                    }
                    return new CompiledInput(this.asType(input.source, type), type);
                }
                sanitizedInput(string) {
                    return stringInput(this.sanitizedString(string));
                }
                sanitizedString(string) {
                    string = string
                        .replace(/\\/g, '\\\\')
                        .replace(/'/g, '\\\'')
                        .replace(/"/g, '\\"')
                        .replace(/\n/g, '\\n')
                        .replace(/\r/g, '\\r')
                        .replace(/\{/g, '\\x7b')
                        .replace(/\}/g, '\\x7d');
                    return `"${string}"`;
                }
                sanitizedComment(content) {
                    content = content
                        .replace(/\*\//g, '');
                    return `/* ${content} */`;
                }
                findVariable(id) {
                    const stage = this.target.stage;
                    if (stage.varIds.hasOwnProperty(id)) {
                        return { scope: 'self', name: stage.varIds[id] };
                    }
                    else if (this.target.varIds.hasOwnProperty(id)) {
                        return { scope: 'S', name: this.target.varIds[id] };
                    }
                    else {
                        this.target.vars[id] = 0;
                        this.target.varIds[id] = id;
                        return { scope: 'S', name: id };
                    }
                }
                findList(id) {
                    const stage = this.target.stage;
                    if (stage.listIds.hasOwnProperty(id)) {
                        return { scope: 'self', name: stage.listIds[id] };
                    }
                    else if (this.target.listIds.hasOwnProperty(id)) {
                        return { scope: 'S', name: this.target.listIds[id] };
                    }
                    else {
                        this.target.lists[id] = sb3.createList();
                        this.target.listIds[id] = id;
                        return { scope: 'S', name: id };
                    }
                }
                getVariableReference(id) {
                    const { scope, name } = this.findVariable(id);
                    return `${scope}.vars[${this.sanitizedString(name)}]`;
                }
                getListReference(id) {
                    const { scope, name } = this.findList(id);
                    return `${scope}.lists[${this.sanitizedString(name)}]`;
                }
                isStringLiteralPotentialNumber(text) {
                    return /\d|true|false|Infinity/.test(text);
                }
                isNameOfCostumeOrSound(text) {
                    return this.costumeAndSoundNames.has(text);
                }
                compileNativeInput(native, desiredType) {
                    const type = native[0];
                    switch (type) {
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8: {
                            const number = +native[1];
                            if (isNaN(number) || desiredType === 'string') {
                                return this.sanitizedInput('' + native[1]);
                            }
                            else {
                                return numberInput(number.toString());
                            }
                        }
                        case 10: {
                            const value = native[1];
                            if (desiredType !== 'string' && /\d|Infinity/.test(value) && !this.isNameOfCostumeOrSound(value)) {
                                const number = +value;
                                if (number.toString() === value) {
                                    if (!isNaN(number)) {
                                        return numberInput(number.toString());
                                    }
                                }
                            }
                            const input = this.sanitizedInput(native[1] + '');
                            input.potentialNumber = this.isStringLiteralPotentialNumber(native[1]);
                            return input;
                        }
                        case 12:
                            return anyInput(this.getVariableReference(native[2]));
                        case 13:
                            return new CompiledInput(this.getListReference(native[2]), 'list');
                        case 11:
                            return this.sanitizedInput(native[1]);
                        case 9: {
                            const color = native[1];
                            const hex = color.substr(1);
                            if (/^[0-9a-f]{6,8}$/.test(hex)) {
                                return numberInput('0x' + hex);
                            }
                            else {
                                this.warn('expected hex color code but got', hex);
                                return numberInput('0x0');
                            }
                        }
                        default:
                            this.warn('unknown native', type, native);
                            return stringInput('""');
                    }
                }
                compileInput(parentBlock, inputName, type) {
                    if (!parentBlock.inputs[inputName]) {
                        this.warn('missing input', inputName);
                        return new CompiledInput(this.getInputFallback(type), type);
                    }
                    const input = parentBlock.inputs[inputName];
                    if (Array.isArray(input[1])) {
                        const native = input[1];
                        return this.convertInputType(this.compileNativeInput(native, type), type);
                    }
                    const inputBlockId = input[1];
                    if (!inputBlockId) {
                        return new CompiledInput(this.getInputFallback(type), type);
                    }
                    const inputBlock = this.blocks[inputBlockId];
                    const opcode = inputBlock.opcode;
                    const compiler = this.getInputCompiler(opcode);
                    if (!compiler) {
                        this.warn('unknown input', opcode, inputBlock);
                        return new CompiledInput(this.getInputFallback(type), type);
                    }
                    const util = new InputUtil(this, inputBlock);
                    let result = compiler(util);
                    if (P.config.debug) {
                        result.source = this.sanitizedComment(inputBlock.opcode) + result.source;
                    }
                    return this.convertInputType(result, type);
                }
                getField(block, fieldName) {
                    const value = block.fields[fieldName];
                    if (!value) {
                        this.warn('missing field', fieldName);
                        return '';
                    }
                    return '' + value[0];
                }
                getVariableField(block, fieldName) {
                    const value = block.fields[fieldName];
                    if (!value) {
                        this.warn('missing variable field', fieldName);
                        return '';
                    }
                    return '' + value[1];
                }
                compileSubstackInput(block, substackName) {
                    if (!block.inputs[substackName]) {
                        return '';
                    }
                    const substack = block.inputs[substackName];
                    const type = substack[0];
                    const id = substack[1];
                    if (id === null) {
                        return '';
                    }
                    return this.compileStack(id);
                }
                getNewState() {
                    return {
                        isWarp: false,
                        isProcedure: false,
                        argumentNames: []
                    };
                }
                compileStack(startingBlock) {
                    let script = '';
                    let block = this.blocks[startingBlock];
                    while (true) {
                        var opcode = block.opcode;
                        const compiler = this.getStatementCompiler(opcode);
                        if (P.config.debug) {
                            script += this.sanitizedComment(block.opcode);
                        }
                        if (compiler) {
                            const util = new StatementUtil(this, block);
                            compiler(util);
                            script += util.content;
                        }
                        else {
                            script += '/* unknown statement */';
                            this.warn('unknown statement', opcode, block);
                        }
                        if (!block.next) {
                            break;
                        }
                        block = this.blocks[block.next];
                    }
                    return script;
                }
                compileHat(hat) {
                    const hatCompiler = this.getHatCompiler(hat.opcode);
                    if (!hatCompiler) {
                        if (!this.getInputCompiler(hat.opcode) && !this.getStatementCompiler(hat.opcode)) {
                            this.warn('unknown hat block', hat.opcode, hat);
                        }
                        return;
                    }
                    this.labelCount = this.target.fns.length;
                    const startingBlock = hat.next;
                    if (!startingBlock) {
                        return;
                    }
                    this.state = this.getNewState();
                    let script = `{{${this.labelCount++}}}`;
                    if (hatCompiler.precompile) {
                        script += hatCompiler.precompile(this, hat);
                    }
                    script += this.compileStack(startingBlock);
                    if (hatCompiler.postcompile) {
                        script = hatCompiler.postcompile(this, script, hat);
                    }
                    const parseResult = this.parseScript(script);
                    const parsedScript = parseResult.script;
                    const startFn = this.target.fns.length;
                    for (let label of Object.keys(parseResult.labels)) {
                        this.target.fns[label] = P.runtime.createContinuation(parsedScript.slice(parseResult.labels[label]));
                    }
                    const startingFunction = this.target.fns[startFn];
                    const util = new HatUtil(this, hat, startingFunction);
                    hatCompiler.handle(util);
                    if (P.config.debug) {
                        this.log(`[${this.target.name}] compiled sb3 script "${hat.opcode}"`, script, this.target);
                    }
                }
                parseScript(script) {
                    const labels = {};
                    let index = 0;
                    let accumulator = 0;
                    while (true) {
                        const labelStart = script.indexOf('{{', index);
                        if (labelStart === -1) {
                            break;
                        }
                        const labelEnd = script.indexOf('}}', index);
                        const id = script.substring(labelStart + 2, labelEnd);
                        const length = labelEnd + 2 - labelStart;
                        accumulator += length;
                        labels[id] = labelEnd + 2 - accumulator;
                        index = labelEnd + 2;
                    }
                    const fixedScript = script.replace(/{{\d+}}/g, '');
                    return {
                        labels,
                        script: fixedScript,
                    };
                }
                warn(...args) {
                    args.unshift(`[sb3 compiler ${this.target.name}]`);
                    console.warn.apply(console, args);
                }
                log(...args) {
                    args.unshift(`[sb3 compiler ${this.target.name}]`);
                    console.log.apply(console, args);
                }
                compile() {
                    const hats = this.getHatBlocks();
                    for (const hatId of hats) {
                        const hat = this.blocks[hatId];
                        this.compileHat(hat);
                    }
                    this.target.sb3data = null;
                }
            }
            compiler_1.Compiler = Compiler;
        })(compiler = sb3.compiler || (sb3.compiler = {}));
    })(sb3 = P.sb3 || (P.sb3 = {}));
})(P || (P = {}));
(function () {
    const statementLibrary = P.sb3.compiler.statementLibrary;
    const inputLibrary = P.sb3.compiler.inputLibrary;
    const hatLibrary = P.sb3.compiler.hatLibrary;
    const watcherLibrary = P.sb3.compiler.watcherLibrary;
    statementLibrary['control_all_at_once'] = function (util) {
        const SUBSTACK = util.getSubstack('SUBSTACK');
        util.write(SUBSTACK);
    };
    statementLibrary['control_clear_counter'] = function (util) {
        util.writeLn('self.counter = 0;');
    };
    statementLibrary['control_create_clone_of'] = function (util) {
        const CLONE_OPTION = util.getInput('CLONE_OPTION', 'any');
        util.writeLn(`clone(${CLONE_OPTION});`);
    };
    statementLibrary['control_delete_this_clone'] = function (util) {
        util.writeLn('if (S.isClone) {');
        util.visual('visible');
        util.writeLn('  S.remove();');
        util.writeLn('  var i = self.children.indexOf(S);');
        util.writeLn('  if (i !== -1) self.children.splice(i, 1);');
        util.writeLn('  for (var i = 0; i < runtime.queue.length; i++) {');
        util.writeLn('    if (runtime.queue[i] && runtime.queue[i].sprite === S) {');
        util.writeLn('      runtime.queue[i] = undefined;');
        util.writeLn('    }');
        util.writeLn('  }');
        util.writeLn('  return;');
        util.writeLn('}');
    };
    statementLibrary['control_for_each'] = function (util) {
        const VARIABLE = util.getVariableReference('VARIABLE');
        const SUBSTACK = util.getSubstack('SUBSTACK');
        const VALUE = util.getInput('VALUE', 'number');
        util.writeLn('save();');
        util.writeLn(`R.times = ${VALUE};`);
        util.writeLn('R.current = 0;');
        const label = util.addLabel();
        util.writeLn(`if (R.current < R.times) {`);
        util.writeLn(`  ${VARIABLE} = ++R.current;`);
        util.write(SUBSTACK);
        util.queue(label);
        util.writeLn('} else {');
        util.writeLn('  restore();');
        util.writeLn('}');
    };
    statementLibrary['control_forever'] = function (util) {
        const SUBSTACK = util.getSubstack('SUBSTACK');
        if (util.compiler.state.isWarp && !util.substacksQueue) {
            util.writeLn('while (true) {');
            util.write(SUBSTACK);
            util.writeLn('}');
        }
        else {
            const label = util.addLabel();
            util.write(SUBSTACK);
            util.queue(label);
        }
    };
    statementLibrary['control_if'] = function (util) {
        const CONDITION = util.getInput('CONDITION', 'boolean');
        const SUBSTACK = util.getSubstack('SUBSTACK');
        util.writeLn(`if (${CONDITION}) {`);
        util.write(SUBSTACK);
        util.writeLn('}');
    };
    statementLibrary['control_if_else'] = function (util) {
        const CONDITION = util.getInput('CONDITION', 'boolean');
        const SUBSTACK = util.getSubstack('SUBSTACK');
        const SUBSTACK2 = util.getSubstack('SUBSTACK2');
        util.writeLn(`if (${CONDITION}) {`);
        util.write(SUBSTACK);
        util.writeLn('} else {');
        util.write(SUBSTACK2);
        util.writeLn('}');
    };
    statementLibrary['control_incr_counter'] = function (util) {
        util.writeLn('self.counter++;');
    };
    statementLibrary['control_repeat'] = function (util) {
        const TIMES = util.getInput('TIMES', 'any');
        const SUBSTACK = util.getSubstack('SUBSTACK');
        if (util.compiler.state.isWarp && !util.substacksQueue) {
            util.writeLn('save();');
            util.writeLn(`R.count = ${TIMES};`);
            util.writeLn('while (R.count >= 0.5) {');
            util.writeLn('  R.count -= 1;');
            util.write(SUBSTACK);
            util.writeLn('}');
            util.writeLn('restore();');
        }
        else {
            util.writeLn('save();');
            util.writeLn(`R.count = ${TIMES};`);
            const label = util.addLabel();
            util.writeLn('if (R.count >= 0.5) {');
            util.writeLn('  R.count -= 1;');
            util.write(SUBSTACK);
            util.queue(label);
            util.writeLn('} else {');
            util.writeLn('  restore();');
            util.writeLn('}');
        }
    };
    statementLibrary['control_repeat_until'] = function (util) {
        const CONDITION = util.getInput('CONDITION', 'boolean');
        const SUBSTACK = util.getSubstack('SUBSTACK');
        if (util.compiler.state.isWarp && !util.substacksQueue) {
            util.writeLn(`while (!${CONDITION}) {`);
            util.write(SUBSTACK);
            util.writeLn('}');
        }
        else {
            const label = util.addLabel();
            util.writeLn(`if (!${CONDITION}) {`);
            util.write(SUBSTACK);
            util.queue(label);
            util.writeLn('}');
        }
    };
    statementLibrary['control_stop'] = function (util) {
        const STOP_OPTION = util.getField('STOP_OPTION');
        switch (STOP_OPTION) {
            case 'all':
                util.writeLn('runtime.stopAll(); return;');
                break;
            case 'this script':
                util.writeLn('endCall(); return;');
                break;
            case 'other scripts in sprite':
            case 'other scripts in stage':
                util.writeLn('S.stopSoundsExcept(BASE);');
                util.writeLn('for (var i = 0; i < runtime.queue.length; i++) {');
                util.writeLn('  if (i !== THREAD && runtime.queue[i] && runtime.queue[i].sprite === S) {');
                util.writeLn('    runtime.queue[i] = undefined;');
                util.writeLn('  }');
                util.writeLn('}');
                break;
        }
    };
    statementLibrary['control_wait'] = function (util) {
        const DURATION = util.getInput('DURATION', 'any');
        util.visual('always');
        util.writeLn('save();');
        util.writeLn('R.start = runtime.currentMSecs;');
        util.writeLn(`R.duration = ${DURATION};`);
        util.writeLn(`var first = true;`);
        const label = util.addLabel();
        util.writeLn('if (runtime.currentMSecs - R.start < R.duration * 1000 || first) {');
        util.writeLn('  var first;');
        util.forceQueue(label);
        util.writeLn('}');
        util.writeLn('restore();');
    };
    statementLibrary['control_wait_until'] = function (util) {
        const CONDITION = util.getInput('CONDITION', 'boolean');
        const label = util.addLabel();
        util.writeLn(`if (!${CONDITION}) {`);
        util.forceQueue(label);
        util.writeLn('}');
    };
    statementLibrary['control_while'] = function (util) {
        const CONDITION = util.getInput('CONDITION', 'boolean');
        const SUBSTACK = util.getSubstack('SUBSTACK');
        if (util.compiler.state.isWarp && !util.substacksQueue) {
            util.writeLn(`while (${CONDITION}) {`);
            util.write(SUBSTACK);
            util.writeLn('}');
        }
        else {
            const label = util.addLabel();
            util.writeLn(`if (${CONDITION}) {`);
            util.write(SUBSTACK);
            util.queue(label);
            util.writeLn('}');
        }
    };
    statementLibrary['data_addtolist'] = function (util) {
        const LIST = util.getListReference('LIST');
        const ITEM = util.getInput('ITEM', 'any');
        util.writeLn(`watchedAppendToList(${LIST}, ${ITEM});`);
    };
    statementLibrary['data_changevariableby'] = function (util) {
        const VARIABLE = util.getVariableReference('VARIABLE');
        const VALUE = util.getInput('VALUE', 'number');
        util.writeLn(`${VARIABLE} = (${util.asType(VARIABLE, 'number')} + ${VALUE});`);
        if (util.isCloudVariable('VARIABLE')) {
            util.writeLn(`cloudVariableChanged(${util.sanitizedString(util.getField('VARIABLE'))})`);
        }
    };
    statementLibrary['data_deletealloflist'] = function (util) {
        const LIST = util.getListReference('LIST');
        util.writeLn(`watchedDeleteAllOfList(${LIST});`);
    };
    statementLibrary['data_deleteoflist'] = function (util) {
        const LIST = util.getListReference('LIST');
        const INDEX = util.getInput('INDEX', 'any');
        util.writeLn(`watchedDeleteLineOfList(${LIST}, ${INDEX});`);
    };
    statementLibrary['data_hidelist'] = function (util) {
        const LIST = util.sanitizedString(util.getField('LIST'));
        const scope = util.getListScope('LIST');
        util.writeLn(`${scope}.showList(${LIST}, false);`);
    };
    statementLibrary['data_hidevariable'] = function (util) {
        const VARIABLE = util.sanitizedString(util.getField('VARIABLE'));
        const scope = util.getVariableScope('VARIABLE');
        util.writeLn(`${scope}.showVariable(${VARIABLE}, false);`);
    };
    statementLibrary['data_insertatlist'] = function (util) {
        const LIST = util.getListReference('LIST');
        const INDEX = util.getInput('INDEX', 'any');
        const ITEM = util.getInput('ITEM', 'any');
        util.writeLn(`watchedInsertInList(${LIST}, ${INDEX}, ${ITEM});`);
    };
    statementLibrary['data_replaceitemoflist'] = function (util) {
        const LIST = util.getListReference('LIST');
        const ITEM = util.getInput('ITEM', 'any');
        const INDEX = util.getInput('INDEX', 'any');
        util.writeLn(`watchedSetLineOfList(${LIST}, ${INDEX}, ${ITEM});`);
    };
    statementLibrary['data_setvariableto'] = function (util) {
        const VARIABLE = util.getVariableReference('VARIABLE');
        const VALUE = util.getInput('VALUE', 'any');
        util.writeLn(`${VARIABLE} = ${VALUE};`);
        if (util.isCloudVariable('VARIABLE')) {
            util.writeLn(`cloudVariableChanged(${util.sanitizedString(util.getField('VARIABLE'))})`);
        }
    };
    statementLibrary['data_showlist'] = function (util) {
        const LIST = util.sanitizedString(util.getField('LIST'));
        const scope = util.getListScope('LIST');
        util.writeLn(`${scope}.showList(${LIST}, true);`);
    };
    statementLibrary['data_showvariable'] = function (util) {
        const VARIABLE = util.sanitizedString(util.getField('VARIABLE'));
        const scope = util.getVariableScope('VARIABLE');
        util.writeLn(`${scope}.showVariable(${VARIABLE}, true);`);
    };
    statementLibrary['event_broadcast'] = function (util) {
        const BROADCAST_INPUT = util.getInput('BROADCAST_INPUT', 'any');
        util.writeLn(`var threads = broadcast(${BROADCAST_INPUT});`);
        util.writeLn('if (threads.indexOf(BASE) !== -1) {return;}');
    };
    statementLibrary['event_broadcastandwait'] = function (util) {
        const BROADCAST_INPUT = util.getInput('BROADCAST_INPUT', 'any');
        util.writeLn('save();');
        util.writeLn(`R.threads = broadcast(${BROADCAST_INPUT});`);
        util.writeLn('if (R.threads.indexOf(BASE) !== -1) {return;}');
        const label = util.addLabel();
        util.writeLn('if (running(R.threads)) {');
        util.forceQueue(label);
        util.writeLn('}');
        util.writeLn('restore();');
    };
    statementLibrary['looks_changeeffectby'] = function (util) {
        const EFFECT = util.sanitizedString(util.getField('EFFECT')).toLowerCase();
        const CHANGE = util.getInput('CHANGE', 'number');
        util.writeLn(`S.changeFilter(${EFFECT}, ${CHANGE});`);
        util.visual('visible');
    };
    statementLibrary['looks_changesizeby'] = function (util) {
        const CHANGE = util.getInput('CHANGE', 'any');
        util.writeLn(`var f = S.scale + ${CHANGE} / 100;`);
        util.writeLn('S.scale = f < 0 ? 0 : f;');
        util.visual('visible');
    };
    statementLibrary['looks_cleargraphiceffects'] = function (util) {
        util.writeLn('S.resetFilters();');
        util.visual('visible');
    };
    statementLibrary['looks_goforwardbackwardlayers'] = function (util) {
        const FORWARD_BACKWARD = util.getField('FORWARD_BACKWARD');
        const NUM = util.getInput('NUM', 'number');
        util.writeLn('var i = self.children.indexOf(S);');
        util.writeLn('if (i !== -1) {');
        util.writeLn('  self.children.splice(i, 1);');
        if (FORWARD_BACKWARD === 'forward') {
            util.writeLn(`  self.children.splice(Math.min(self.children.length - 1, i + ${NUM}), 0, S);`);
        }
        else {
            util.writeLn(`  self.children.splice(Math.max(0, i - ${NUM}), 0, S);`);
        }
        util.writeLn('}');
    };
    statementLibrary['looks_gotofrontback'] = function (util) {
        const FRONT_BACK = util.getField('FRONT_BACK');
        util.writeLn('var i = self.children.indexOf(S);');
        util.writeLn('if (i !== -1) self.children.splice(i, 1);');
        if (FRONT_BACK === 'front') {
            util.writeLn('self.children.push(S);');
        }
        else {
            util.writeLn('self.children.unshift(S);');
        }
    };
    statementLibrary['looks_hide'] = function (util) {
        util.visual('visible');
        util.writeLn('S.visible = false;');
        util.updateBubble();
    };
    statementLibrary['looks_nextbackdrop'] = function (util) {
        util.writeLn('self.showNextCostume();');
        util.visual('always');
        util.writeLn('var threads = sceneChange();');
        util.writeLn('if (threads.indexOf(BASE) !== -1) {return;}');
    };
    statementLibrary['looks_nextcostume'] = function (util) {
        util.writeLn('S.showNextCostume();');
        util.visual('visible');
    };
    statementLibrary['looks_say'] = function (util) {
        const MESSAGE = util.getInput('MESSAGE', 'any');
        util.writeLn(`S.say(${MESSAGE}, false);`);
        util.visual('visible');
    };
    statementLibrary['looks_sayforsecs'] = function (util) {
        const MESSAGE = util.getInput('MESSAGE', 'any');
        const SECS = util.getInput('SECS', 'number');
        util.writeLn('save();');
        util.writeLn(`R.id = S.say(${MESSAGE}, false);`);
        util.visual('visible');
        util.writeLn('R.start = runtime.now();');
        util.writeLn(`R.duration = ${SECS};`);
        const label = util.addLabel();
        util.writeLn('if (runtime.now() - R.start < R.duration * 1000) {');
        util.forceQueue(label);
        util.writeLn('}');
        util.writeLn('if (S.sayId === R.id) {');
        util.writeLn('  S.say("");');
        util.writeLn('}');
        util.writeLn('restore();');
    };
    statementLibrary['looks_seteffectto'] = function (util) {
        const EFFECT = util.sanitizedString(util.getField('EFFECT')).toLowerCase();
        const VALUE = util.getInput('VALUE', 'number');
        util.writeLn(`S.setFilter(${EFFECT}, ${VALUE});`);
        util.visual('visible');
    };
    statementLibrary['looks_setsizeto'] = function (util) {
        const SIZE = util.getInput('SIZE', 'number');
        util.writeLn(`S.scale = Math.max(0, ${SIZE} / 100);`);
        util.visual('visible');
    };
    statementLibrary['looks_show'] = function (util) {
        util.writeLn('S.visible = true;');
        util.visual('always');
        util.updateBubble();
    };
    statementLibrary['looks_switchbackdropto'] = function (util) {
        const BACKDROP = util.getInput('BACKDROP', 'any');
        util.writeLn(`self.setCostume(${BACKDROP});`);
        util.visual('always');
        util.writeLn('var threads = sceneChange();');
        util.writeLn('if (threads.indexOf(BASE) !== -1) {return;}');
    };
    statementLibrary['looks_switchcostumeto'] = function (util) {
        const COSTUME = util.getInput('COSTUME', 'any');
        util.writeLn(`S.setCostume(${COSTUME});`);
        util.visual('visible');
    };
    statementLibrary['looks_think'] = function (util) {
        const MESSAGE = util.getInput('MESSAGE', 'any');
        util.writeLn(`S.say(${MESSAGE}, true);`);
        util.visual('visible');
    };
    statementLibrary['looks_thinkforsecs'] = function (util) {
        const MESSAGE = util.getInput('MESSAGE', 'any');
        const SECS = util.getInput('SECS', 'number');
        util.writeLn('save();');
        util.writeLn(`R.id = S.say(${MESSAGE}, true);`);
        util.visual('visible');
        util.writeLn('R.start = runtime.now();');
        util.writeLn(`R.duration = ${SECS};`);
        const label = util.addLabel();
        util.writeLn('if (runtime.now() - R.start < R.duration * 1000) {');
        util.forceQueue(label);
        util.writeLn('}');
        util.writeLn('if (S.sayId === R.id) {');
        util.writeLn('  S.say("");');
        util.writeLn('}');
        util.writeLn('restore();');
    };
    statementLibrary['motion_changexby'] = function (util) {
        const DX = util.getInput('DX', 'number');
        util.writeLn(`S.moveTo(S.scratchX + ${DX}, S.scratchY);`);
        util.visual('drawing');
    };
    statementLibrary['motion_changeyby'] = function (util) {
        const DY = util.getInput('DY', 'number');
        util.writeLn(`S.moveTo(S.scratchX, S.scratchY + ${DY});`);
        util.visual('drawing');
    };
    statementLibrary['motion_glidesecstoxy'] = function (util) {
        const SECS = util.getInput('SECS', 'any');
        const X = util.getInput('X', 'any');
        const Y = util.getInput('Y', 'any');
        util.visual('drawing');
        util.writeLn('save();');
        util.writeLn('R.start = runtime.now();');
        util.writeLn(`R.duration = ${SECS};`);
        util.writeLn('R.baseX = S.scratchX;');
        util.writeLn('R.baseY = S.scratchY;');
        util.writeLn(`R.deltaX = ${X} - S.scratchX;`);
        util.writeLn(`R.deltaY = ${Y} - S.scratchY;`);
        const label = util.addLabel();
        util.writeLn('var f = (runtime.now() - R.start) / (R.duration * 1000);');
        util.writeLn('if (f > 1 || isNaN(f)) f = 1;');
        util.writeLn('S.moveTo(R.baseX + f * R.deltaX, R.baseY + f * R.deltaY);');
        util.visual('drawing');
        util.writeLn('if (f < 1) {');
        util.forceQueue(label);
        util.writeLn('}');
        util.writeLn('restore();');
    };
    statementLibrary['motion_glideto'] = function (util) {
        const SECS = util.getInput('SECS', 'any');
        const TO = util.getInput('TO', 'any');
        util.visual('drawing');
        util.writeLn('save();');
        util.writeLn('R.start = runtime.now();');
        util.writeLn(`R.duration = ${SECS};`);
        util.writeLn('R.baseX = S.scratchX;');
        util.writeLn('R.baseY = S.scratchY;');
        util.writeLn(`var to = self.getPosition(${TO});`);
        util.writeLn('if (to) {');
        util.writeLn('  R.deltaX = to.x - S.scratchX;');
        util.writeLn('  R.deltaY = to.y - S.scratchY;');
        const label = util.addLabel();
        util.writeLn('  var f = (runtime.now() - R.start) / (R.duration * 1000);');
        util.writeLn('  if (f > 1 || isNaN(f)) f = 1;');
        util.writeLn('  S.moveTo(R.baseX + f * R.deltaX, R.baseY + f * R.deltaY);');
        util.visual('drawing');
        util.writeLn('  if (f < 1) {');
        util.forceQueue(label);
        util.writeLn('  }');
        util.writeLn('  restore();');
        util.writeLn('}');
    };
    statementLibrary['motion_goto'] = function (util) {
        const TO = util.getInput('TO', 'any');
        util.writeLn(`S.gotoObject(${TO});`);
        util.visual('drawing');
    };
    statementLibrary['motion_gotoxy'] = function (util) {
        const X = util.getInput('X', 'number');
        const Y = util.getInput('Y', 'number');
        util.writeLn(`S.moveTo(${X}, ${Y});`);
        util.visual('drawing');
    };
    statementLibrary['motion_ifonedgebounce'] = function (util) {
        util.writeLn('S.bounceOffEdge();');
    };
    statementLibrary['motion_movesteps'] = function (util) {
        const STEPS = util.getInput('STEPS', 'number');
        util.writeLn(`S.forward(${STEPS});`);
        util.visual('drawing');
    };
    statementLibrary['motion_pointindirection'] = function (util) {
        const DIRECTION = util.getInput('DIRECTION', 'number');
        util.visual('visible');
        util.writeLn(`S.setDirection(${DIRECTION});`);
    };
    statementLibrary['motion_pointtowards'] = function (util) {
        const TOWARDS = util.getInput('TOWARDS', 'any');
        util.writeLn(`S.pointTowards(${TOWARDS});`);
        util.visual('visible');
    };
    statementLibrary['motion_setrotationstyle'] = function (util) {
        const STYLE = P.utils.parseRotationStyle(util.getField('STYLE'));
        util.writeLn(`S.rotationStyle = ${STYLE};`);
        util.visual('visible');
    };
    statementLibrary['motion_setx'] = function (util) {
        const X = util.getInput('X', 'number');
        util.writeLn(`S.moveTo(${X}, S.scratchY);`);
        util.visual('drawing');
    };
    statementLibrary['motion_sety'] = function (util) {
        const Y = util.getInput('Y', 'number');
        util.writeLn(`S.moveTo(S.scratchX, ${Y});`);
        util.visual('drawing');
    };
    statementLibrary['motion_turnleft'] = function (util) {
        const DEGREES = util.getInput('DEGREES', 'number');
        util.writeLn(`S.setDirection(S.direction - ${DEGREES});`);
        util.visual('visible');
    };
    statementLibrary['motion_turnright'] = function (util) {
        const DEGREES = util.getInput('DEGREES', 'number');
        util.writeLn(`S.setDirection(S.direction + ${DEGREES});`);
        util.visual('visible');
    };
    statementLibrary['music_changeTempo'] = function (util) {
        const TEMPO = util.getInput('TEMPO', 'number');
        util.writeLn(`self.tempoBPM += ${TEMPO};`);
    };
    statementLibrary['music_playDrumForBeats'] = function (util) {
        const BEATS = util.getInput('BEATS', 'number');
        const DRUM = util.getInput('DRUM', 'number');
        util.compiler.needsMusic = true;
        util.writeLn('save();');
        util.writeLn('R.start = runtime.now();');
        util.writeLn(`R.duration = ${BEATS} * 60 / self.tempoBPM;`);
        util.writeLn(`var first = true;`);
        if (P.audio.context) {
            util.writeLn(`R.sound = playSpan(DRUMS[Math.round(${DRUM}) - 1] || DRUMS[2], 60, 10);`);
        }
        else {
            util.writeLn('R.sound = { stopped: false };');
        }
        const id = util.addLabel();
        util.writeLn('S.activeSounds.add(R.sound);');
        util.writeLn('if ((runtime.now() - R.start < R.duration * 1000 || first) && !R.sound.stopped) {');
        util.writeLn('  var first;');
        util.forceQueue(id);
        util.writeLn('}');
        util.writeLn('S.activeSounds.delete(R.sound);');
        util.writeLn('restore();');
    };
    statementLibrary['music_playNoteForBeats'] = function (util) {
        const BEATS = util.getInput('BEATS', 'number');
        const NOTE = util.getInput('NOTE', 'number');
        util.compiler.needsMusic = true;
        util.writeLn('save();');
        util.writeLn('R.start = runtime.now();');
        util.writeLn(`R.duration = ${BEATS} * 60 / self.tempoBPM;`);
        util.writeLn(`var first = true;`);
        if (P.audio.context) {
            util.writeLn(`R.sound = playNote(${NOTE}, R.duration);`);
        }
        else {
            util.writeLn('R.sound = { stopped: false };');
        }
        const id = util.addLabel();
        util.writeLn('S.activeSounds.add(R.sound);');
        util.writeLn('if ((runtime.now() - R.start < R.duration * 1000 || first) && !R.sound.stopped) {');
        util.writeLn('  var first;');
        util.forceQueue(id);
        util.writeLn('}');
        util.writeLn('S.activeSounds.delete(R.sound);');
        util.writeLn('restore();');
    };
    statementLibrary['music_restForBeats'] = function (util) {
        const BEATS = util.getInput('BEATS', 'number');
        util.writeLn('save();');
        util.writeLn('R.start = runtime.now();');
        util.writeLn(`R.duration = ${BEATS} * 60 / self.tempoBPM;`);
        util.writeLn(`var first = true;`);
        const id = util.addLabel();
        util.writeLn('if (runtime.now() - R.start < R.duration * 1000 || first) {');
        util.writeLn('  var first;');
        util.forceQueue(id);
        util.writeLn('}');
        util.writeLn('restore();');
    };
    statementLibrary['music_setTempo'] = function (util) {
        const TEMPO = util.getInput('TEMPO', 'number');
        util.writeLn(`self.tempoBPM = ${TEMPO};`);
    };
    statementLibrary['music_setInstrument'] = function (util) {
        const INSTRUMENT = util.getInput('INSTRUMENT', 'number');
        util.writeLn(`S.instrument = Math.max(0, Math.min(INSTRUMENTS.length - 1, ${INSTRUMENT} - 1)) | 0;`);
    };
    statementLibrary['pen_changePenColorParamBy'] = function (util) {
        const COLOR_PARAM = util.getInput('COLOR_PARAM', 'string');
        const VALUE = util.getInput('VALUE', 'number');
        util.writeLn(`S.penColor.changeParam(${COLOR_PARAM}, ${VALUE});`);
    };
    statementLibrary['pen_changePenHueBy'] = function (util) {
        const HUE = util.getInput('HUE', 'number');
        util.writeLn('S.penColor.toHSLA();');
        util.writeLn(`S.penColor.x += ${HUE} * 360 / 200;`);
        util.writeLn('S.penColor.y = 100;');
    };
    statementLibrary['pen_changePenShadeBy'] = function (util) {
        const SHADE = util.getInput('SHADE', 'number');
        util.writeLn('S.penColor.toHSLA();');
        util.writeLn(`S.penColor.z = (S.penColor.z + ${SHADE}) % 200;`);
        util.writeLn('if (S.penColor.z < 0) S.penColor.z += 200;');
        util.writeLn('S.penColor.y = 100;');
    };
    statementLibrary['pen_changePenSizeBy'] = function (util) {
        const SIZE = util.getInput('SIZE', 'number');
        util.writeLn(`S.penSize = Math.max(1, S.penSize + ${SIZE});`);
    };
    statementLibrary['pen_clear'] = function (util) {
        util.writeLn('self.clearPen();');
        util.visual('always');
    };
    statementLibrary['pen_penDown'] = function (util) {
        util.writeLn('S.isPenDown = true;');
        util.writeLn('S.dotPen();');
        util.visual('always');
    };
    statementLibrary['pen_penUp'] = function (util) {
        util.writeLn('S.isPenDown = false;');
    };
    statementLibrary['pen_setPenColorParamTo'] = function (util) {
        const COLOR_PARAM = util.getInput('COLOR_PARAM', 'string');
        const VALUE = util.getInput('VALUE', 'number');
        util.writeLn(`S.penColor.setParam(${COLOR_PARAM}, ${VALUE});`);
    };
    statementLibrary['pen_setPenColorToColor'] = function (util) {
        const COLOR = util.getInput('COLOR', 'any');
        util.writeLn(`S.setPenColor(${COLOR});`);
    };
    statementLibrary['pen_setPenHueToNumber'] = function (util) {
        const HUE = util.getInput('HUE', 'number');
        util.writeLn('S.penColor.toHSLA();');
        util.writeLn(`S.penColor.x = ${HUE} * 360 / 200;`);
        util.writeLn('S.penColor.y = 100;');
        util.writeLn('S.penColor.a = 1;');
    };
    statementLibrary['pen_setPenShadeToNumber'] = function (util) {
        const SHADE = util.getInput('SHADE', 'number');
        util.writeLn('S.penColor.toHSLA();');
        util.writeLn(`S.penColor.z = ${SHADE} % 200;`);
        util.writeLn('if (S.penColor.z < 0) S.penColor.z += 200;');
        util.writeLn('S.penColor.y = 100;');
    };
    statementLibrary['pen_setPenSizeTo'] = function (util) {
        const SIZE = util.getInput('SIZE', 'number');
        util.writeLn(`S.penSize = Math.max(1, ${SIZE});`);
    };
    statementLibrary['pen_stamp'] = function (util) {
        util.writeLn('S.stamp();');
        util.visual('always');
    };
    statementLibrary['procedures_call'] = function (util) {
        const mutation = util.block.mutation;
        const name = mutation.proccode;
        if (P.config.debug) {
            if (name === 'forkphorus:debugger;') {
                util.writeLn('/* forkphorus */ debugger;');
                return;
            }
            else if (name === 'forkphorus:throw;') {
                util.writeLn('/* forkphorus */ throw new Error("Debug intended crash");');
                return;
            }
        }
        const label = util.claimNextLabel();
        util.write(`call(S.procedures[${util.sanitizedString(name)}], ${label}, [`);
        const inputNames = JSON.parse(mutation.argumentids);
        for (const inputName of inputNames) {
            util.write(`${util.getInput(inputName, 'any')}, `);
        }
        util.writeLn(']); return;');
        util.addLabel(label);
    };
    statementLibrary['sound_changeeffectby'] = function (util) {
        const EFFECT = util.sanitizedString(util.getField('EFFECT'));
        const VALUE = util.getInput('VALUE', 'number');
        util.writeLn(`S.changeSoundFilter(${EFFECT}, ${VALUE});`);
        util.waitOneTick();
    };
    statementLibrary['sound_changevolumeby'] = function (util) {
        const VOLUME = util.getInput('VOLUME', 'number');
        util.writeLn(`S.volume = Math.max(0, Math.min(1, S.volume + ${VOLUME} / 100));`);
        util.writeLn('if (S.node) S.node.gain.value = S.volume;');
        util.waitOneTick();
    };
    statementLibrary['sound_cleareffects'] = function (util) {
        util.writeLn('S.resetSoundFilters();');
    };
    statementLibrary['sound_play'] = function (util) {
        const SOUND_MENU = util.getInput('SOUND_MENU', 'any');
        if (P.audio.context) {
            util.writeLn(`var sound = S.getSound(${SOUND_MENU});`);
            util.writeLn('if (sound) startSound(sound);');
        }
    };
    statementLibrary['sound_playuntildone'] = function (util) {
        const SOUND_MENU = util.getInput('SOUND_MENU', 'any');
        if (P.audio.context) {
            util.writeLn(`var sound = S.getSound(${SOUND_MENU});`);
            util.writeLn('if (sound) {');
            util.writeLn('  save();');
            util.writeLn('  R.sound = playSound(sound);');
            util.writeLn('  S.activeSounds.add(R.sound);');
            util.writeLn('  R.start = runtime.now();');
            util.writeLn('  R.duration = sound.duration;');
            util.writeLn('  var first = true;');
            const label = util.addLabel();
            util.writeLn('  if ((runtime.now() - R.start < R.duration * 1000 || first) && !R.sound.stopped) {');
            util.writeLn('    var first;');
            util.forceQueue(label);
            util.writeLn('  }');
            util.writeLn('  S.activeSounds.delete(R.sound);');
            util.writeLn('  restore();');
            util.writeLn('}');
        }
    };
    statementLibrary['sound_seteffectto'] = function (util) {
        const EFFECT = util.sanitizedString(util.getField('EFFECT'));
        const VALUE = util.getInput('VALUE', 'number');
        util.writeLn(`S.setSoundFilter(${EFFECT}, ${VALUE});`);
        util.waitOneTick();
    };
    statementLibrary['sound_setvolumeto'] = function (util) {
        const VOLUME = util.getInput('VOLUME', 'number');
        util.writeLn(`S.volume = Math.max(0, Math.min(1, ${VOLUME} / 100));`);
        util.writeLn('if (S.node) S.node.gain.value = S.volume;');
        util.waitOneTick();
    };
    statementLibrary['sound_stopallsounds'] = function (util) {
        if (P.audio.context) {
            util.writeLn('self.stopAllSounds();');
        }
    };
    statementLibrary['sensing_askandwait'] = function (util) {
        const QUESTION = util.getInput('QUESTION', 'string');
        util.writeLn('R.id = self.nextPromptId++;');
        const label1 = util.addLabel();
        util.writeLn('if (self.promptId < R.id) {');
        util.forceQueue(label1);
        util.writeLn('}');
        util.writeLn(`S.ask(${QUESTION});`);
        const label2 = util.addLabel();
        util.writeLn('if (self.promptId === R.id) {');
        util.forceQueue(label2);
        util.writeLn('}');
        util.writeLn('S.say("");');
        util.visual('always');
    };
    statementLibrary['sensing_resettimer'] = function (util) {
        util.writeLn('runtime.resetTimer();');
    };
    statementLibrary['sensing_setdragmode'] = function (util) {
        const DRAG_MODE = util.getField('DRAG_MODE');
        if (DRAG_MODE === 'draggable') {
            util.writeLn('S.isDraggable = true;');
        }
        else {
            util.writeLn('S.isDraggable = false;');
        }
    };
    statementLibrary['text2speech_setVoice'] = function (util) {
        const VOICE = util.getInput('VOICE', 'string');
        util.stage.initTextToSpeech();
        util.writeLn(`self.tts.setVoice(${VOICE});`);
    };
    statementLibrary['text2speech_setLanguage'] = function (util) {
        const LANGUAGE = util.getInput('LANGUAGE', 'string');
        util.stage.initTextToSpeech();
        util.writeLn(`self.tts.setLanguage(${LANGUAGE});`);
    };
    statementLibrary['text2speech_speakAndWait'] = function (util) {
        const WORDS = util.getInput('WORDS', 'string');
        util.stage.initTextToSpeech();
        util.waitUntilSettles(`self.tts.speak(${WORDS})`);
    };
    statementLibrary['videoSensing_videoToggle'] = function (util) {
        const VIDEO_STATE = util.getInput('VIDEO_STATE', 'string');
        util.writeLn(`switch (${VIDEO_STATE}) {`);
        util.writeLn('  case "off": self.showVideo(false); break;');
        util.writeLn('  case "on": self.showVideo(true); break;');
        util.writeLn('}');
    };
    const noopStatement = (util) => util.writeLn('/* noop */');
    statementLibrary['motion_align_scene'] = noopStatement;
    statementLibrary['motion_scroll_right'] = noopStatement;
    statementLibrary['motion_scroll_up'] = noopStatement;
    statementLibrary['looks_changestretchby'] = noopStatement;
    statementLibrary['looks_hideallsprites'] = noopStatement;
    statementLibrary['looks_setstretchto'] = noopStatement;
    inputLibrary['argument_reporter_boolean'] = function (util) {
        const VALUE = util.getField('VALUE');
        if (!util.compiler.state.isProcedure || util.compiler.state.argumentNames.indexOf(VALUE) === -1) {
            const lowerCaseName = VALUE.toLowerCase();
            if (lowerCaseName === 'is compiled?' || lowerCaseName === 'is forkphorus?') {
                return util.booleanInput('true');
            }
            return util.numberInput('0');
        }
        return util.booleanInput(util.asType(`C.args[${util.sanitizedString(VALUE)}]`, 'boolean'));
    };
    inputLibrary['argument_reporter_string_number'] = function (util) {
        const VALUE = util.getField('VALUE');
        if (!util.compiler.state.isProcedure || util.compiler.state.argumentNames.indexOf(VALUE) === -1) {
            return util.numberInput('0');
        }
        return util.anyInput(`C.args[${util.sanitizedString(VALUE)}]`);
    };
    inputLibrary['control_create_clone_of_menu'] = function (util) {
        return util.fieldInput('CLONE_OPTION');
    };
    inputLibrary['control_get_counter'] = function (util) {
        return util.numberInput('self.counter');
    };
    inputLibrary['data_itemoflist'] = function (util) {
        const LIST = util.getListReference('LIST');
        const INDEX = util.getInput('INDEX', 'any');
        return util.anyInput(`getLineOfList(${LIST}, ${INDEX})`);
    };
    inputLibrary['data_itemnumoflist'] = function (util) {
        const LIST = util.getListReference('LIST');
        const ITEM = util.getInput('ITEM', 'any');
        return util.numberInput(`listIndexOf(${LIST}, ${ITEM})`);
    };
    inputLibrary['data_lengthoflist'] = function (util) {
        const LIST = util.getListReference('LIST');
        return util.numberInput(`${LIST}.length`);
    };
    inputLibrary['data_listcontainsitem'] = function (util) {
        const LIST = util.getListReference('LIST');
        const ITEM = util.getInput('ITEM', 'any');
        return util.booleanInput(`listContains(${LIST}, ${ITEM})`);
    };
    inputLibrary['looks_backdropnumbername'] = function (util) {
        const NUMBER_NAME = util.getField('NUMBER_NAME');
        if (NUMBER_NAME === 'number') {
            return util.numberInput('(self.currentCostumeIndex + 1)');
        }
        else {
            return util.stringInput('self.costumes[self.currentCostumeIndex].name');
        }
    };
    inputLibrary['looks_backdrops'] = function (util) {
        return util.fieldInput('BACKDROP');
    };
    inputLibrary['looks_costume'] = function (util) {
        return util.fieldInput('COSTUME');
    };
    inputLibrary['looks_costumenumbername'] = function (util) {
        const NUMBER_NAME = util.getField('NUMBER_NAME');
        if (NUMBER_NAME === 'number') {
            return util.numberInput('(S.currentCostumeIndex + 1)');
        }
        else {
            return util.stringInput('S.costumes[S.currentCostumeIndex].name');
        }
    };
    inputLibrary['looks_size'] = function (util) {
        return util.numberInput('Math.round(S.scale * 100)');
    };
    inputLibrary['makeymakey_menu_KEY'] = function (util) {
        return util.fieldInput('KEY');
    };
    inputLibrary['makeymakey_menu_SEQUENCE'] = function (util) {
        return util.fieldInput('SEQUENCE');
    };
    inputLibrary['matrix'] = function (util) {
        return util.fieldInput('MATRIX');
    };
    inputLibrary['motion_direction'] = function (util) {
        return util.numberInput('S.direction');
    };
    inputLibrary['motion_glideto_menu'] = function (util) {
        return util.fieldInput('TO');
    };
    inputLibrary['motion_goto_menu'] = function (util) {
        return util.fieldInput('TO');
    };
    inputLibrary['motion_pointtowards_menu'] = function (util) {
        return util.fieldInput('TOWARDS');
    };
    inputLibrary['motion_xposition'] = function (util) {
        return util.numberInput('S.scratchX');
    };
    inputLibrary['motion_yposition'] = function (util) {
        return util.numberInput('S.scratchY');
    };
    inputLibrary['music_getTempo'] = function (util) {
        return util.numberInput('self.tempoBPM');
    };
    inputLibrary['music_menu_DRUM'] = function (util) {
        return util.fieldInput('DRUM');
    };
    inputLibrary['music_menu_INSTRUMENT'] = function (util) {
        return util.fieldInput('INSTRUMENT');
    };
    inputLibrary['note'] = function (util) {
        return util.fieldInput('NOTE');
    };
    inputLibrary['operator_add'] = function (util) {
        const NUM1 = util.getInput('NUM1', 'number');
        const NUM2 = util.getInput('NUM2', 'number');
        return util.numberInput(`(${NUM1} + ${NUM2} || 0)`);
    };
    inputLibrary['operator_and'] = function (util) {
        const OPERAND1 = util.getInput('OPERAND1', 'any');
        const OPERAND2 = util.getInput('OPERAND2', 'any');
        return util.booleanInput(`(${OPERAND1} && ${OPERAND2})`);
    };
    inputLibrary['operator_contains'] = function (util) {
        const STRING1 = util.getInput('STRING1', 'string');
        const STRING2 = util.getInput('STRING2', 'string');
        return util.booleanInput(`stringContains(${STRING1}, ${STRING2})`);
    };
    inputLibrary['operator_divide'] = function (util) {
        const NUM1 = util.getInput('NUM1', 'number');
        const NUM2 = util.getInput('NUM2', 'number');
        const input = util.numberInput(`(${NUM1} / ${NUM2})`);
        input.enableFlag(1);
        return input;
    };
    inputLibrary['operator_equals'] = function (util) {
        const OPERAND1 = util.getInput('OPERAND1', 'any');
        const OPERAND2 = util.getInput('OPERAND2', 'any');
        if (!OPERAND1.potentialNumber || !OPERAND2.potentialNumber) {
            return util.booleanInput(`strEqual(${OPERAND1}, ${OPERAND2})`);
        }
        if (P.config.experimentalOptimizations) {
            if (OPERAND1.type === 'number') {
                return util.booleanInput(`numEqualExperimental(${OPERAND1}, ${OPERAND2})`);
            }
            if (OPERAND2.type === 'number') {
                return util.booleanInput(`numEqualExperimental(${OPERAND2}, ${OPERAND1})`);
            }
        }
        return util.booleanInput(`equal(${OPERAND1}, ${OPERAND2})`);
    };
    inputLibrary['operator_gt'] = function (util) {
        const OPERAND1 = util.getInput('OPERAND1', 'any');
        const OPERAND2 = util.getInput('OPERAND2', 'any');
        if (P.config.experimentalOptimizations) {
            if (OPERAND1.type === 'number') {
                return util.booleanInput(`numGreaterExperimental(${OPERAND1}, ${OPERAND2})`);
            }
        }
        return util.booleanInput(`(compare(${OPERAND1}, ${OPERAND2}) === 1)`);
    };
    inputLibrary['operator_join'] = function (util) {
        const STRING1 = util.getInput('STRING1', 'string');
        const STRING2 = util.getInput('STRING2', 'string');
        return util.stringInput(`(${STRING1} + ${STRING2})`);
    };
    inputLibrary['operator_length'] = function (util) {
        const STRING = util.getInput('STRING', 'string');
        return util.numberInput(`(${STRING}).length`);
    };
    inputLibrary['operator_letter_of'] = function (util) {
        const STRING = util.getInput('STRING', 'string');
        const LETTER = util.getInput('LETTER', 'number');
        return util.stringInput(`((${STRING})[(${LETTER} | 0) - 1] || "")`);
    };
    inputLibrary['operator_lt'] = function (util) {
        const OPERAND1 = util.getInput('OPERAND1', 'any');
        const OPERAND2 = util.getInput('OPERAND2', 'any');
        if (P.config.experimentalOptimizations) {
            if (OPERAND1.type === 'number') {
                return util.booleanInput(`numLessExperimental(${OPERAND1}, ${OPERAND2})`);
            }
        }
        return util.booleanInput(`(compare(${OPERAND1}, ${OPERAND2}) === -1)`);
    };
    inputLibrary['operator_mathop'] = function (util) {
        const OPERATOR = util.getField('OPERATOR');
        const NUM = util.getInput('NUM', 'number');
        switch (OPERATOR) {
            case 'abs':
                return util.numberInput(`Math.abs(${NUM})`);
            case 'floor':
                return util.numberInput(`Math.floor(${NUM})`);
            case 'sqrt': {
                const input = util.numberInput(`Math.sqrt(${NUM})`);
                input.enableFlag(1);
                return input;
            }
            case 'ceiling':
                return util.numberInput(`Math.ceil(${NUM})`);
            case 'cos':
                return util.numberInput(`(Math.round(Math.cos(${NUM} * Math.PI / 180) * 1e10) / 1e10)`);
            case 'sin':
                return util.numberInput(`(Math.round(Math.sin(${NUM} * Math.PI / 180) * 1e10) / 1e10)`);
            case 'tan':
                return util.numberInput(`Math.tan(${NUM} * Math.PI / 180)`);
            case 'asin':
                return util.numberInput(`(Math.asin(${NUM}) * 180 / Math.PI)`);
            case 'acos':
                return util.numberInput(`(Math.acos(${NUM}) * 180 / Math.PI)`);
            case 'atan':
                return util.numberInput(`(Math.atan(${NUM}) * 180 / Math.PI)`);
            case 'ln':
                return util.numberInput(`Math.log(${NUM})`);
            case 'log':
                return util.numberInput(`(Math.log(${NUM}) / Math.LN10)`);
            case 'e ^':
                return util.numberInput(`Math.exp(${NUM})`);
            case '10 ^':
                return util.numberInput(`Math.pow(10, ${NUM})`);
            default:
                return util.numberInput('0');
        }
    };
    inputLibrary['operator_mod'] = function (util) {
        const NUM1 = util.getInput('NUM1', 'number');
        const NUM2 = util.getInput('NUM2', 'number');
        return util.numberInput(`mod(${NUM1}, ${NUM2})`);
    };
    inputLibrary['operator_multiply'] = function (util) {
        const NUM1 = util.getInput('NUM1', 'number');
        const NUM2 = util.getInput('NUM2', 'number');
        return util.numberInput(`(${NUM1} * ${NUM2} || 0)`);
    };
    inputLibrary['operator_not'] = function (util) {
        const OPERAND = util.getInput('OPERAND', 'any');
        return util.booleanInput(`!${OPERAND}`);
    };
    inputLibrary['operator_or'] = function (util) {
        const OPERAND1 = util.getInput('OPERAND1', 'any');
        const OPERAND2 = util.getInput('OPERAND2', 'any');
        return util.booleanInput(`(${OPERAND1} || ${OPERAND2})`);
    };
    inputLibrary['operator_random'] = function (util) {
        const FROM = util.getInput('FROM', 'string');
        const TO = util.getInput('TO', 'string');
        return util.numberInput(`random(${FROM}, ${TO})`);
    };
    inputLibrary['operator_round'] = function (util) {
        const NUM = util.getInput('NUM', 'number');
        return util.numberInput(`Math.round(${NUM})`);
    };
    inputLibrary['operator_subtract'] = function (util) {
        const NUM1 = util.getInput('NUM1', 'number');
        const NUM2 = util.getInput('NUM2', 'number');
        return util.numberInput(`(${NUM1} - ${NUM2} || 0)`);
    };
    inputLibrary['pen_menu_colorParam'] = function (util) {
        return util.fieldInput('colorParam');
    };
    inputLibrary['sensing_answer'] = function (util) {
        return util.stringInput('self.answer');
    };
    inputLibrary['sensing_coloristouchingcolor'] = function (util) {
        const COLOR = util.getInput('COLOR', 'any');
        const COLOR2 = util.getInput('COLOR2', 'any');
        return util.booleanInput(`S.colorTouchingColor(${COLOR}, ${COLOR2})`);
    };
    inputLibrary['sensing_current'] = function (util) {
        const CURRENTMENU = util.getField('CURRENTMENU').toLowerCase();
        switch (CURRENTMENU) {
            case 'year': return util.numberInput('new Date().getFullYear()');
            case 'month': return util.numberInput('(new Date().getMonth() + 1)');
            case 'date': return util.numberInput('new Date().getDate()');
            case 'dayofweek': return util.numberInput('(new Date().getDay() + 1)');
            case 'hour': return util.numberInput('new Date().getHours()');
            case 'minute': return util.numberInput('new Date().getMinutes()');
            case 'second': return util.numberInput('new Date().getSeconds()');
        }
        return util.numberInput('0');
    };
    inputLibrary['sensing_dayssince2000'] = function (util) {
        return util.numberInput('((Date.now() - epoch) / 86400000)');
    };
    inputLibrary['sensing_distanceto'] = function (util) {
        const DISTANCETOMENU = util.getInput('DISTANCETOMENU', 'any');
        return util.numberInput(`S.distanceTo(${DISTANCETOMENU})`);
    };
    inputLibrary['sensing_distancetomenu'] = function (util) {
        return util.fieldInput('DISTANCETOMENU');
    };
    inputLibrary['sensing_keyoptions'] = function (util) {
        return util.fieldInput('KEY_OPTION');
    };
    inputLibrary['sensing_keypressed'] = function (util) {
        const KEY_OPTION = util.getInput('KEY_OPTION', 'string');
        return util.booleanInput(`!!self.keys[getKeyCode3(${KEY_OPTION})]`);
    };
    inputLibrary['sensing_loud'] = function (util) {
        util.stage.initMicrophone();
        return util.booleanInput('(self.microphone.getLoudness() > 10)');
    };
    inputLibrary['sensing_loudness'] = function (util) {
        util.stage.initMicrophone();
        return util.numberInput('self.microphone.getLoudness()');
    };
    inputLibrary['sensing_mousedown'] = function (util) {
        return util.booleanInput('self.mousePressed');
    };
    inputLibrary['sensing_mousex'] = function (util) {
        return util.numberInput('self.mouseX');
    };
    inputLibrary['sensing_mousey'] = function (util) {
        return util.numberInput('self.mouseY');
    };
    inputLibrary['sensing_of'] = function (util) {
        const PROPERTY = util.sanitizedString(util.getField('PROPERTY'));
        const OBJECT = util.getInput('OBJECT', 'string');
        return util.anyInput(`attribute(${PROPERTY}, ${OBJECT})`);
    };
    inputLibrary['sensing_of_object_menu'] = function (util) {
        return util.fieldInput('OBJECT');
    };
    inputLibrary['sensing_timer'] = function (util) {
        return util.numberInput('((runtime.now() - runtime.timerStart) / 1000)');
    };
    inputLibrary['sensing_touchingcolor'] = function (util) {
        const COLOR = util.getInput('COLOR', 'any');
        return util.booleanInput(`S.touchingColor(${COLOR})`);
    };
    inputLibrary['sensing_touchingobject'] = function (util) {
        const TOUCHINGOBJECTMENU = util.getInput('TOUCHINGOBJECTMENU', 'string');
        return util.booleanInput(`S.touching(${TOUCHINGOBJECTMENU})`);
    };
    inputLibrary['sensing_touchingobjectmenu'] = function (util) {
        return util.fieldInput('TOUCHINGOBJECTMENU');
    };
    inputLibrary['sound_sounds_menu'] = function (util) {
        return util.fieldInput('SOUND_MENU');
    };
    inputLibrary['sensing_username'] = function (util) {
        return util.stringInput('self.username');
    };
    inputLibrary['sound_volume'] = function (util) {
        return util.numberInput('(S.volume * 100)');
    };
    inputLibrary['text2speech_menu_voices'] = function (util) {
        return util.fieldInput('voices');
    };
    inputLibrary['text2speech_menu_languages'] = function (util) {
        return util.fieldInput('languages');
    };
    inputLibrary['translate_menu_languages'] = function (util) {
        return util.fieldInput('languages');
    };
    inputLibrary['translate_getTranslate'] = function (util) {
        const WORDS = util.getInput('WORDS', 'string');
        const LANGUAGE = util.getInput('LANGUAGE', 'string');
        return WORDS;
    };
    inputLibrary['translate_getViewerLanguage'] = function (util) {
        return util.sanitizedInput('English');
    };
    inputLibrary['videoSensing_menu_VIDEO_STATE'] = function (util) {
        return util.fieldInput('VIDEO_STATE');
    };
    const noopInput = (util) => util.anyInput('undefined');
    inputLibrary['motion_yscroll'] = noopInput;
    inputLibrary['motion_xscroll'] = noopInput;
    inputLibrary['sensing_userid'] = noopInput;
    hatLibrary['control_start_as_clone'] = {
        handle(util) {
            util.target.listeners.whenCloned.push(util.startingFunction);
        },
    };
    hatLibrary['event_whenbackdropswitchesto'] = {
        handle(util) {
            const BACKDROP = util.getField('BACKDROP').toLowerCase();
            if (!util.target.listeners.whenSceneStarts[BACKDROP]) {
                util.target.listeners.whenSceneStarts[BACKDROP] = [];
            }
            util.target.listeners.whenSceneStarts[BACKDROP].push(util.startingFunction);
        },
    };
    hatLibrary['event_whenbroadcastreceived'] = {
        handle(util) {
            const BROADCAST_OPTION = util.getField('BROADCAST_OPTION').toLowerCase();
            if (!util.target.listeners.whenIReceive[BROADCAST_OPTION]) {
                util.target.listeners.whenIReceive[BROADCAST_OPTION] = [];
            }
            util.target.listeners.whenIReceive[BROADCAST_OPTION].push(util.startingFunction);
        },
    };
    hatLibrary['event_whenflagclicked'] = {
        handle(util) {
            util.target.listeners.whenGreenFlag.push(util.startingFunction);
        },
    };
    hatLibrary['event_whengreaterthan'] = {
        precompile(compiler, hat) {
            const WHENGREATERTHANMENU = compiler.getField(hat, 'WHENGREATERTHANMENU');
            const VALUE = compiler.compileInput(hat, 'VALUE', 'number');
            let executeWhen = 'false';
            let stallUntil = 'false';
            switch (WHENGREATERTHANMENU.toLowerCase()) {
                case 'timer':
                    executeWhen = `runtime.whenTimerMSecs / 1000 > ${VALUE}`;
                    stallUntil = `runtime.whenTimerMSecs / 1000 <= ${VALUE}`;
                    break;
                case 'loudness':
                    compiler.target.stage.initMicrophone();
                    executeWhen = `self.microphone.getLoudness() > ${VALUE}`;
                    stallUntil = `self.microphone.getLoudness() <= ${VALUE}`;
                    break;
                default:
                    console.warn('unknown WHENGREATERTHANMENU', WHENGREATERTHANMENU);
            }
            let source = '';
            source += 'if (!R.init) { R.init = true; R.stalled = false; }\n';
            source += `if (R.stalled && (${stallUntil})) { R.stalled = false; }\n`;
            source += `else if (!R.stalled && (${executeWhen})) { R.stalled = true;\n`;
            return source;
        },
        postcompile(compiler, source, hat) {
            source += '}\n';
            source += `forceQueue(${compiler.target.fns.length});`;
            return source;
        },
        handle(util) {
            util.target.listeners.edgeActivated.push(util.startingFunction);
        },
    };
    hatLibrary['event_whenkeypressed'] = {
        handle(util) {
            const KEY_OPTION = util.getField('KEY_OPTION');
            if (KEY_OPTION === 'any') {
                for (var i = 128; i--;) {
                    util.target.listeners.whenKeyPressed[i].push(util.startingFunction);
                }
            }
            else {
                const keyCode = P.runtime.getKeyCode(KEY_OPTION);
                if (!util.target.listeners.whenKeyPressed[keyCode]) {
                    util.target.listeners.whenKeyPressed[keyCode] = [];
                }
                util.target.listeners.whenKeyPressed[keyCode].push(util.startingFunction);
            }
        },
    };
    hatLibrary['event_whenstageclicked'] = {
        handle(util) {
            util.target.listeners.whenClicked.push(util.startingFunction);
        },
    };
    hatLibrary['event_whenthisspriteclicked'] = {
        handle(util) {
            util.target.listeners.whenClicked.push(util.startingFunction);
        },
    };
    function makeymakeyParseKey(key) {
        key = key.toLowerCase();
        if (key === 'up' || key === 'down' || key === 'left' || key === 'right') {
            return P.runtime.getKeyCode(key + ' arrow');
        }
        return P.runtime.getKeyCode(key);
    }
    hatLibrary['makeymakey_whenMakeyKeyPressed'] = {
        handle(util) {
            const KEY = util.getInput('KEY', 'string');
            try {
                const keyValue = '' + util.evaluateInputOnce(KEY);
                if (typeof keyValue !== 'string')
                    throw new Error('cannot accept type: ' + typeof keyValue);
                var keyCode = makeymakeyParseKey(keyValue);
            }
            catch (e) {
                util.compiler.warn('makeymakey key generation error', e);
                return;
            }
            if (keyCode === 'any') {
                for (var i = 128; i--;) {
                    util.target.listeners.whenKeyPressed[i].push(util.startingFunction);
                }
            }
            else {
                if (!util.target.listeners.whenKeyPressed[keyCode]) {
                    util.target.listeners.whenKeyPressed[keyCode] = [];
                }
                util.target.listeners.whenKeyPressed[keyCode].push(util.startingFunction);
            }
        },
    };
    hatLibrary['makeymakey_whenCodePressed'] = {
        handle(util) {
            const SEQUENCE = util.getInput('SEQUENCE', 'string');
            try {
                var sequence = '' + util.evaluateInputOnce(SEQUENCE);
            }
            catch (e) {
                util.compiler.warn('makeymakey key generation error', e);
                return;
            }
            const keys = sequence
                .toLowerCase()
                .split(' ')
                .map((key) => makeymakeyParseKey(key));
            if (keys.some((i) => typeof i !== 'number')) {
                util.compiler.warn('makeymakey whenCodePressed found unexpected string in sequence');
                return;
            }
            const targetFunction = util.startingFunction;
            let sequenceIndex = 0;
            for (let key = 128; key--;) {
                util.target.listeners.whenKeyPressed[key].push(function () {
                    const expectedKey = keys[sequenceIndex];
                    if (key !== expectedKey) {
                        sequenceIndex = 0;
                    }
                    else {
                        sequenceIndex++;
                        if (sequenceIndex === keys.length) {
                            sequenceIndex = 0;
                            targetFunction();
                        }
                    }
                });
            }
        },
    };
    hatLibrary['procedures_definition'] = {
        handle(util) {
            const customBlockId = util.block.inputs.custom_block[1];
            const mutation = util.compiler.blocks[customBlockId].mutation;
            const proccode = mutation.proccode;
            const warp = typeof mutation.warp === 'string' ? mutation.warp === 'true' : mutation.warp;
            const argumentNames = JSON.parse(mutation.argumentnames);
            const procedure = new P.sb3.Scratch3Procedure(util.startingFunction, warp, argumentNames);
            util.target.procedures[proccode] = procedure;
        },
        postcompile(compiler, source, hat) {
            return source + 'endCall(); return;\n';
        },
        precompile(compiler, hat) {
            const customBlockId = hat.inputs.custom_block[1];
            const mutation = compiler.blocks[customBlockId].mutation;
            const warp = typeof mutation.warp === 'string' ? mutation.warp === 'true' : mutation.warp;
            const argumentNames = JSON.parse(mutation.argumentnames);
            compiler.state.isProcedure = true;
            compiler.state.argumentNames = argumentNames;
            if (warp) {
                compiler.state.isWarp = true;
            }
            return '';
        },
    };
    watcherLibrary['data_variable'] = {
        init(watcher) {
            const name = watcher.params.VARIABLE;
            watcher.target.watchers[name] = watcher;
        },
        set(watcher, value) {
            const name = watcher.params.VARIABLE;
            watcher.target.vars[name] = value;
        },
        evaluate(watcher) {
            const name = watcher.params.VARIABLE;
            return watcher.target.vars[name];
        },
        getLabel(watcher) {
            return watcher.params.VARIABLE;
        },
    };
    watcherLibrary['looks_backdropnumbername'] = {
        evaluate(watcher) {
            const target = watcher.stage;
            const param = watcher.params.NUMBER_NAME;
            if (param === 'number') {
                return target.currentCostumeIndex + 1;
            }
            else {
                return target.costumes[target.currentCostumeIndex].name;
            }
        },
        getLabel(watcher) {
            return 'backdrop ' + watcher.params.NUMBER_NAME;
        },
    };
    watcherLibrary['looks_costumenumbername'] = {
        evaluate(watcher) {
            const target = watcher.target;
            const param = watcher.params.NUMBER_NAME;
            if (param === 'number') {
                return target.currentCostumeIndex + 1;
            }
            else {
                return target.costumes[target.currentCostumeIndex].name;
            }
        },
        getLabel(watcher) {
            return 'costume ' + watcher.params.NUMBER_NAME;
        },
    };
    watcherLibrary['looks_size'] = {
        evaluate(watcher) { return P.core.isSprite(watcher.target) ? watcher.target.scale * 100 : 100; },
        getLabel() { return 'size'; },
    };
    watcherLibrary['motion_direction'] = {
        evaluate(watcher) { return P.core.isSprite(watcher.target) ? watcher.target.direction : 0; },
        getLabel() { return 'direction'; },
    };
    watcherLibrary['motion_xposition'] = {
        evaluate(watcher) { return watcher.target.scratchX; },
        getLabel() { return 'x position'; },
    };
    watcherLibrary['motion_yposition'] = {
        evaluate(watcher) { return watcher.target.scratchY; },
        getLabel() { return 'y position'; },
    };
    watcherLibrary['music_getTempo'] = {
        evaluate(watcher) { return watcher.stage.tempoBPM; },
        getLabel() { return 'Music: tempo'; },
    };
    watcherLibrary['sensing_answer'] = {
        evaluate(watcher) { return watcher.stage.answer; },
        getLabel() { return 'answer'; },
    };
    watcherLibrary['sensing_current'] = {
        evaluate(watcher) {
            const param = watcher.params.CURRENTMENU.toLowerCase();
            switch (param) {
                case 'year': return new Date().getFullYear();
                case 'month': return new Date().getMonth() + 1;
                case 'date': return new Date().getDate();
                case 'dayofweek': return new Date().getDay() + 1;
                case 'hour': return new Date().getHours();
                case 'minute': return new Date().getMinutes();
                case 'second': return new Date().getSeconds();
            }
            return 0;
        },
        getLabel(watcher) {
            const param = watcher.params.CURRENTMENU.toLowerCase();
            if (param === 'dayofweek') {
                return 'day of week';
            }
            return param;
        }
    };
    watcherLibrary['sensing_loudness'] = {
        init(watcher) {
            watcher.stage.initMicrophone();
        },
        evaluate(watcher) {
            if (watcher.stage.microphone) {
                return watcher.stage.microphone.getLoudness();
            }
            else {
                return -1;
            }
        },
        getLabel() { return 'loudness'; },
    };
    watcherLibrary['sensing_timer'] = {
        evaluate(watcher) {
            return (watcher.stage.runtime.now() - watcher.stage.runtime.timerStart) / 1000;
        },
        getLabel() { return 'timer'; },
    };
    watcherLibrary['sensing_username'] = {
        evaluate(watcher) { return watcher.stage.username; },
        getLabel() { return 'username'; },
    };
    watcherLibrary['sound_volume'] = {
        evaluate(watcher) { return watcher.target.volume * 100; },
        getLabel() { return 'volume'; },
    };
}());
var P;
(function (P) {
    var ext;
    (function (ext) {
        class Extension {
            constructor(stage) {
                this.stage = stage;
            }
            destroy() {
            }
            onstart() {
            }
            onpause() {
            }
            update() {
            }
        }
        ext.Extension = Extension;
    })(ext = P.ext || (P.ext = {}));
})(P || (P = {}));
var P;
(function (P) {
    var ext;
    (function (ext) {
        var cloud;
        (function (cloud) {
            const UPDATE_INTERVAL = 1000 / 15;
            function getAllCloudVariables(stage) {
                const result = {};
                for (const variable of stage.cloudVariables) {
                    result[variable] = stage.vars[variable];
                }
                return result;
            }
            cloud.getAllCloudVariables = getAllCloudVariables;
            function isCloudDataMessage(data) {
                if (typeof data !== 'object' || !data) {
                    return false;
                }
                return typeof data.method === 'string';
            }
            function isCloudSetMessage(data) {
                return isCloudDataMessage(data) &&
                    typeof data.name === 'string' &&
                    typeof data.value !== 'undefined';
            }
            class WebSocketCloudHandler extends P.ext.Extension {
                constructor(stage, host, id) {
                    super(stage);
                    this.host = host;
                    this.id = id;
                    this.ws = null;
                    this.queuedVariableChanges = [];
                    this.updateInterval = null;
                    this.reconnectTimeout = null;
                    this.shouldReconnect = true;
                    this.failures = 0;
                    this.logPrefix = '[cloud-ws ' + host + ']';
                    this.username = this.stage.username;
                    this.interfaceStatusIndicator = document.createElement('div');
                    this.interfaceStatusIndicator.className = 'phosphorus-cloud-status-indicator';
                    stage.ui.appendChild(this.interfaceStatusIndicator);
                    this.handleUpdateInterval = this.handleUpdateInterval.bind(this);
                    this.connect();
                }
                variableChanged(name) {
                    if (this.queuedVariableChanges.indexOf(name) > -1) {
                        return;
                    }
                    this.queuedVariableChanges.push(name);
                    if (this.updateInterval === null) {
                        this.handleUpdateInterval();
                        this.startUpdateInterval();
                    }
                }
                handleUpdateInterval() {
                    if (this.queuedVariableChanges.length === 0) {
                        this.stopUpdateInterval();
                        return;
                    }
                    if (this.ws === null || this.ws.readyState !== this.ws.OPEN || this.ws.bufferedAmount > 16384) {
                        return;
                    }
                    const variableName = this.queuedVariableChanges.shift();
                    const value = this.getVariable(variableName);
                    this.send({
                        method: 'set',
                        name: variableName,
                        value: value,
                    });
                }
                send(data) {
                    if (!this.ws)
                        throw new Error('not connected');
                    this.ws.send(JSON.stringify(data));
                }
                getVariable(name) {
                    return this.stage.vars[name];
                }
                setVariable(name, value) {
                    this.stage.vars[name] = value;
                }
                terminateConnection(code = 1000) {
                    if (this.ws !== null) {
                        this.ws.close(code);
                        this.ws = null;
                    }
                }
                connect() {
                    if (this.ws !== null) {
                        throw new Error('already connected');
                    }
                    this.setStatusText('Connecting...');
                    console.log(this.logPrefix, 'connecting');
                    this.ws = new WebSocket(this.host);
                    this.shouldReconnect = true;
                    this.ws.onopen = () => {
                        console.log(this.logPrefix, 'connected');
                        this.setStatusText('Connected');
                        this.setStatusVisible(false);
                        this.failures = 0;
                        this.send({
                            method: 'handshake',
                            project_id: this.id,
                            user: this.username
                        });
                    };
                    this.ws.onmessage = (e) => {
                        try {
                            const lines = e.data.split('\n');
                            for (const line of lines) {
                                const data = JSON.parse(line);
                                this.handleMessage(data);
                            }
                            if (!this.stage.runtime.isRunning) {
                                this.stage.draw();
                            }
                        }
                        catch (err) {
                            console.warn('error parsing cloud server message', e.data, err);
                        }
                    };
                    this.ws.onclose = (e) => {
                        const code = e.code;
                        this.ws = null;
                        console.warn(this.logPrefix, 'closed', code);
                        if (code === 4002) {
                            this.setStatusText('Username is invalid. Change your username to connect.');
                            console.error(this.logPrefix, 'error: Username');
                        }
                        else {
                            this.reconnect();
                        }
                    };
                    this.ws.onerror = (e) => {
                        console.warn(this.logPrefix, 'error', e);
                    };
                }
                reconnect() {
                    if (!this.shouldReconnect) {
                        return;
                    }
                    this.terminateConnection();
                    if (this.reconnectTimeout) {
                        clearTimeout(this.reconnectTimeout);
                    }
                    else {
                        this.failures++;
                    }
                    this.setStatusText('Connection lost, reconnecting...');
                    const delayTime = 2 ** this.failures * 1000 * Math.random();
                    console.log(this.logPrefix, 'reconnecting in', delayTime);
                    this.reconnectTimeout = setTimeout(() => {
                        this.reconnectTimeout = null;
                        this.connect();
                    }, delayTime);
                }
                disconnect() {
                    console.log(this.logPrefix, 'disconnecting');
                    this.shouldReconnect = false;
                    this.terminateConnection();
                }
                handleMessage(data) {
                    if (!isCloudSetMessage(data)) {
                        return;
                    }
                    const { name: variableName, value } = data;
                    if (this.stage.cloudVariables.indexOf(variableName) === -1) {
                        throw new Error('invalid variable name');
                    }
                    this.setVariable(variableName, value);
                }
                startUpdateInterval() {
                    if (this.updateInterval !== null) {
                        return;
                    }
                    this.updateInterval = setInterval(this.handleUpdateInterval, UPDATE_INTERVAL);
                }
                stopUpdateInterval() {
                    if (this.updateInterval === null) {
                        return;
                    }
                    clearInterval(this.updateInterval);
                    this.updateInterval = null;
                }
                setStatusText(text) {
                    this.interfaceStatusIndicator.textContent = `☁ ${text}`;
                    this.setStatusVisible(true);
                }
                setStatusVisible(visible) {
                    this.interfaceStatusIndicator.classList.toggle('phosphorus-cloud-status-indicator-hidden', !visible);
                }
                onstart() {
                    if (this.queuedVariableChanges.length > 0) {
                        this.startUpdateInterval();
                    }
                }
                onpause() {
                    this.stopUpdateInterval();
                }
                update() {
                    if (this.stage.username !== this.username) {
                        console.log(this.logPrefix, 'username changed to', this.stage.username);
                        this.username = this.stage.username;
                        this.terminateConnection(4100);
                        this.reconnect();
                    }
                }
                destroy() {
                    this.stopUpdateInterval();
                    this.disconnect();
                }
            }
            cloud.WebSocketCloudHandler = WebSocketCloudHandler;
            class LocalStorageCloudHandler extends P.ext.Extension {
                constructor(stage, id) {
                    super(stage);
                    this.storageKey = 'cloud-data:' + id;
                    this.load();
                    this.save = this.save.bind(this);
                }
                variableChanged(name) {
                    this.save();
                }
                load() {
                    try {
                        const savedData = localStorage.getItem(this.storageKey);
                        if (savedData === null) {
                            return;
                        }
                        const parsedData = JSON.parse(savedData);
                        for (const key of Object.keys(parsedData)) {
                            if (this.stage.cloudVariables.indexOf(key) > -1) {
                                this.stage.vars[key] = parsedData[key];
                            }
                        }
                    }
                    catch (e) {
                        console.warn('cannot read from localStorage', e);
                    }
                }
                save() {
                    try {
                        localStorage.setItem(this.storageKey, JSON.stringify(getAllCloudVariables(this.stage)));
                    }
                    catch (e) {
                        console.warn('cannot save to localStorage', e);
                    }
                }
            }
            cloud.LocalStorageCloudHandler = LocalStorageCloudHandler;
        })(cloud = ext.cloud || (ext.cloud = {}));
    })(ext = P.ext || (P.ext = {}));
})(P || (P = {}));
/*!
Parts of this file (microphone.ts) are derived from https://github.com/LLK/scratch-audio/blob/develop/src/Loudness.js
*/
var P;
(function (P) {
    var ext;
    (function (ext) {
        var microphone;
        (function (microphone_1) {
            let microphone = null;
            let state = 0;
            const CACHE_TIME = 1000 / 30;
            function createAnalyzerDataArray(analyzer) {
                if (!!analyzer.getFloatTimeDomainData) {
                    return new Float32Array(analyzer.fftSize);
                }
                else if (!!analyzer.getByteTimeDomainData) {
                    return new Uint8Array(analyzer.fftSize);
                }
                else {
                    throw new Error('Analyzer node does not support getFloatTimeDomainData or getByteTimeDomainData');
                }
            }
            function connect() {
                if (state !== 0) {
                    return;
                }
                if (!P.audio.context) {
                    console.warn('Cannot connect to microphone without audio context.');
                    state = 3;
                    return;
                }
                if (!navigator.mediaDevices) {
                    console.warn('Cannot access media devices, probably running in insecure (non-HTTPS) context.');
                    state = 3;
                    return;
                }
                state = 2;
                navigator.mediaDevices.getUserMedia({ audio: true })
                    .then((mediaStream) => {
                    const source = P.audio.context.createMediaStreamSource(mediaStream);
                    const analyzer = P.audio.context.createAnalyser();
                    if (!analyzer.getFloatTimeDomainData) {
                        throw new Error('Missing API getFloatTimeDomainData');
                    }
                    source.connect(analyzer);
                    microphone = {
                        source: source,
                        stream: mediaStream,
                        analyzer,
                        dataArray: createAnalyzerDataArray(analyzer),
                        lastValue: -1,
                        lastCheck: 0,
                    };
                    state = 1;
                })
                    .catch((err) => {
                    console.warn('Cannot connect to microphone: ' + err);
                    state = 3;
                });
            }
            function reinitAnalyser() {
                if (!microphone) {
                    throw new Error('Microphone not connected; cannot re-init something that does not exist!');
                }
                const analyzer = P.audio.context.createAnalyser();
                microphone.source.disconnect();
                microphone.source.connect(analyzer);
                microphone.analyzer = analyzer;
                if (microphone.dataArray.length !== analyzer.fftSize) {
                    microphone.dataArray = createAnalyzerDataArray(analyzer);
                }
            }
            function getLoudness() {
                if (microphone === null) {
                    connect();
                    return -1;
                }
                if (!microphone.stream.active) {
                    return -1;
                }
                if (Date.now() - microphone.lastCheck < CACHE_TIME) {
                    return microphone.lastValue;
                }
                let sum = 0;
                if (microphone.dataArray instanceof Float32Array) {
                    microphone.analyzer.getFloatTimeDomainData(microphone.dataArray);
                    for (let i = 0; i < microphone.dataArray.length; i++) {
                        sum += Math.pow(microphone.dataArray[i], 2);
                    }
                }
                else {
                    microphone.analyzer.getByteTimeDomainData(microphone.dataArray);
                    for (let i = 0; i < microphone.dataArray.length; i++) {
                        sum += Math.pow((microphone.dataArray[i] - 128) / 128, 2);
                    }
                }
                let rms = Math.sqrt(sum / microphone.dataArray.length);
                if (microphone.lastValue !== -1) {
                    rms = Math.max(rms, microphone.lastValue * 0.6);
                }
                microphone.lastValue = rms;
                rms *= 1.63;
                rms = Math.sqrt(rms);
                rms = Math.round(rms * 100);
                rms = Math.min(rms, 100);
                return rms;
            }
            class MicrophoneExtension extends P.ext.Extension {
                getLoudness() {
                    return getLoudness();
                }
                onstart() {
                    if (microphone) {
                        reinitAnalyser();
                    }
                }
            }
            microphone_1.MicrophoneExtension = MicrophoneExtension;
        })(microphone = ext.microphone || (ext.microphone = {}));
    })(ext = P.ext || (P.ext = {}));
})(P || (P = {}));
var P;
(function (P) {
    var ext;
    (function (ext) {
        var tts;
        (function (tts) {
            let Gender;
            (function (Gender) {
                Gender[Gender["Male"] = 0] = "Male";
                Gender[Gender["Female"] = 1] = "Female";
                Gender[Gender["Unknown"] = 2] = "Unknown";
            })(Gender = tts.Gender || (tts.Gender = {}));
            const femaleVoices = [
                /Zira/,
                /female/i,
            ];
            const maleVoices = [
                /David/,
                /\bmale/i,
            ];
            const scratchVoices = {
                ALTO: { gender: Gender.Female, pitch: 1, rate: 1 },
                TENOR: { gender: Gender.Male, pitch: 1.5, rate: 1 },
                GIANT: { gender: Gender.Male, pitch: 0.5, rate: 0.75 },
                SQUEAK: { gender: Gender.Female, pitch: 2, rate: 1.5 },
                KITTEN: { gender: Gender.Female, pitch: 2, rate: 1 },
            };
            class TextToSpeechExtension extends P.ext.Extension {
                constructor(stage) {
                    super(stage);
                    this.language = 'en';
                    this.voice = 'ALTO';
                    this.supported = 'speechSynthesis' in window;
                    if (!this.supported) {
                        console.warn('TTS extension is not supported in this browser: it requires the speechSynthesis API https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis');
                    }
                    else {
                        speechSynthesis.getVoices();
                    }
                }
                getVoiceGender(voice) {
                    if (femaleVoices.some((i) => i.test(voice.name)))
                        return Gender.Female;
                    if (maleVoices.some((i) => i.test(voice.name)))
                        return Gender.Male;
                    return Gender.Unknown;
                }
                getVoiceData(voiceName) {
                    const matchesGender = (voice) => this.getVoiceGender(voice) === voiceGender;
                    const voice = scratchVoices[voiceName];
                    const rate = voice.rate;
                    const pitch = voice.pitch;
                    const voiceGender = scratchVoices[this.voice].gender;
                    const voices = speechSynthesis.getVoices();
                    const matchesLanguage = voices.filter((i) => i.lang.substr(0, 2) === this.language.substr(0, 2));
                    let candidates = matchesLanguage.filter(matchesGender);
                    if (candidates.length === 0)
                        candidates = matchesLanguage;
                    if (candidates.length === 0)
                        candidates = voices;
                    const defaultVoice = candidates.find((i) => i.default);
                    return {
                        voice: defaultVoice || candidates[0] || null,
                        pitch,
                        rate,
                    };
                }
                setVoice(voice) {
                    if (!scratchVoices.hasOwnProperty(voice)) {
                        return;
                    }
                    this.voice = voice;
                }
                setLanguage(language) {
                    this.language = language;
                }
                speak(text) {
                    if (!this.supported) {
                        return Promise.resolve();
                    }
                    if (this.voice === 'KITTEN')
                        text = text.replace(/\w+?\b/g, 'meow');
                    return new Promise((resolve, reject) => {
                        const end = () => resolve();
                        const utterance = new SpeechSynthesisUtterance(text);
                        utterance.lang = this.language;
                        const { voice, rate, pitch } = this.getVoiceData(this.voice);
                        utterance.voice = voice;
                        utterance.rate = rate;
                        utterance.pitch = pitch;
                        utterance.onerror = end;
                        utterance.onend = end;
                        speechSynthesis.speak(utterance);
                        speechSynthesis.resume();
                    });
                }
                onstart() {
                    if (this.supported) {
                        speechSynthesis.resume();
                    }
                }
                onpause() {
                    if (this.supported) {
                        speechSynthesis.pause();
                    }
                }
                destroy() {
                    if (this.supported) {
                        speechSynthesis.cancel();
                    }
                }
            }
            tts.TextToSpeechExtension = TextToSpeechExtension;
        })(tts = ext.tts || (ext.tts = {}));
    })(ext = P.ext || (P.ext = {}));
})(P || (P = {}));
var P;
(function (P) {
    var renderer;
    (function (renderer_1) {
        var canvas2d;
        (function (canvas2d) {
            function getCSSFilter(filters) {
                let filter = '';
                if (filters.brightness) {
                    filter += 'brightness(' + (100 + filters.brightness) + '%) ';
                }
                if (filters.color) {
                    if (filters.color === Infinity) {
                        filter += 'grayscale(100%) ';
                    }
                    else {
                        filter += 'hue-rotate(' + (filters.color / 200 * 360) + 'deg) ';
                    }
                }
                return filter;
            }
            function create2dCanvas() {
                const canvas = document.createElement('canvas');
                canvas.width = 480;
                canvas.height = 360;
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    throw new Error('Cannot get 2d rendering context in create2dCanvas');
                }
                ctx.imageSmoothingEnabled = false;
                return { canvas, ctx };
            }
            const COLOR_MASK = 0b111110001111100011110000;
            class SpriteRenderer2D {
                constructor() {
                    this.noEffects = false;
                    this.imageSmoothingEnabled = false;
                    const { canvas, ctx } = create2dCanvas();
                    this.canvas = canvas;
                    this.ctx = ctx;
                }
                reset(scale) {
                    this._reset(this.ctx, scale);
                }
                drawChild(c) {
                    this._drawChild(c, this.ctx);
                }
                drawObjects(children) {
                    for (var i = 0; i < children.length; i++) {
                        var child = children[i];
                        if (!child.visible) {
                            continue;
                        }
                        this.drawChild(child);
                    }
                }
                _reset(ctx, scale) {
                    const effectiveScale = scale * P.config.scale;
                    const width = 480 * effectiveScale;
                    const height = 360 * effectiveScale;
                    if (ctx.canvas.width !== width || ctx.canvas.height !== height) {
                        ctx.canvas.width = width;
                        ctx.canvas.height = height;
                        ctx.scale(effectiveScale, effectiveScale);
                    }
                    else {
                        ctx.clearRect(0, 0, 480, 360);
                    }
                }
                _drawChild(c, ctx) {
                    const costume = c.costumes[c.currentCostumeIndex];
                    if (!costume) {
                        return;
                    }
                    ctx.save();
                    const globalScale = c.stage.zoom * P.config.scale;
                    ctx.translate(((c.scratchX + 240) * globalScale | 0) / globalScale, ((180 - c.scratchY) * globalScale | 0) / globalScale);
                    let objectScale = costume.scale;
                    if (P.core.isSprite(c)) {
                        if (c.rotationStyle === 0) {
                            ctx.rotate((c.direction - 90) * Math.PI / 180);
                        }
                        else if (c.rotationStyle === 1 && c.direction < 0) {
                            ctx.scale(-1, 1);
                        }
                        objectScale *= c.scale;
                    }
                    if (costume.isScalable) {
                        costume.requestSize(objectScale * globalScale);
                    }
                    ctx.imageSmoothingEnabled = costume.isScalable || this.imageSmoothingEnabled;
                    const image = costume.getImage();
                    const x = -costume.rotationCenterX * objectScale;
                    const y = -costume.rotationCenterY * objectScale;
                    const w = costume.width * objectScale;
                    const h = costume.height * objectScale;
                    if (w < 1 || h < 1) {
                        ctx.restore();
                        return;
                    }
                    if (!this.noEffects) {
                        ctx.globalAlpha = Math.max(0, Math.min(1, 1 - c.filters.ghost / 100));
                        if (c.filters.brightness === 100) {
                            workingRenderer.canvas.width = w;
                            workingRenderer.canvas.height = h;
                            workingRenderer.ctx.save();
                            workingRenderer.ctx.translate(0, 0);
                            workingRenderer.ctx.drawImage(image, 0, 0, w, h);
                            workingRenderer.ctx.globalCompositeOperation = 'source-in';
                            workingRenderer.ctx.fillStyle = 'white';
                            workingRenderer.ctx.fillRect(0, 0, w, h);
                            ctx.drawImage(workingRenderer.canvas, x, y);
                            workingRenderer.ctx.restore();
                        }
                        else {
                            const filter = getCSSFilter(c.filters);
                            if (filter !== '') {
                                ctx.filter = getCSSFilter(c.filters);
                            }
                            ctx.drawImage(image, x, y, w, h);
                        }
                    }
                    else {
                        ctx.drawImage(image, x, y, w, h);
                    }
                    ctx.restore();
                }
            }
            canvas2d.SpriteRenderer2D = SpriteRenderer2D;
            const workingRenderer = new SpriteRenderer2D();
            const workingRenderer2 = new SpriteRenderer2D();
            class ProjectRenderer2D extends SpriteRenderer2D {
                constructor(stage) {
                    super();
                    this.stage = stage;
                    this.zoom = 1;
                    this.penScalingEnabled = true;
                    this.penModified = false;
                    this.penTargetZoom = -1;
                    this.penZoom = 1;
                    this.stageCostumeIndex = -1;
                    const { ctx: stageContext, canvas: stageLayer } = create2dCanvas();
                    this.stageContext = stageContext;
                    this.stageLayer = stageLayer;
                    const { ctx: penContext, canvas: penLayer } = create2dCanvas();
                    this.penContext = penContext;
                    this.penLayer = penLayer;
                }
                onStageFiltersChanged() {
                    this.renderStageCostume(this.zoom);
                }
                renderStageCostume(scale) {
                    this._reset(this.stageContext, scale);
                    this._drawChild(this.stage, this.stageContext);
                }
                init(root) {
                    root.appendChild(this.stageLayer);
                    root.appendChild(this.penLayer);
                    root.appendChild(this.canvas);
                }
                destroy() {
                }
                drawFrame() {
                    this.reset(this.zoom);
                    this.drawObjects(this.stage.children);
                    if (this.stage.currentCostumeIndex !== this.stageCostumeIndex) {
                        this.stageCostumeIndex = this.stage.currentCostumeIndex;
                        this.renderStageCostume(this.zoom);
                    }
                }
                drawAllExcept(renderer, skip) {
                    renderer.drawChild(this.stage);
                    renderer.ctx.drawImage(this.penLayer, 0, 0, 480, 360);
                    for (var i = 0; i < this.stage.children.length; i++) {
                        var child = this.stage.children[i];
                        if (!child.visible || child === skip) {
                            continue;
                        }
                        renderer.drawChild(child);
                    }
                }
                resize(zoom) {
                    this.zoom = zoom;
                    this.resizePen(zoom);
                    this.renderStageCostume(this.zoom);
                }
                resizePen(zoom) {
                    if (!this.penScalingEnabled) {
                        return;
                    }
                    if (zoom > this.penZoom) {
                        this.penZoom = zoom;
                        workingRenderer.canvas.width = this.penLayer.width;
                        workingRenderer.canvas.height = this.penLayer.height;
                        workingRenderer.ctx.drawImage(this.penLayer, 0, 0);
                        this._reset(this.penContext, zoom);
                        this.penContext.drawImage(workingRenderer.canvas, 0, 0, 480, 360);
                    }
                    else if (!this.penModified) {
                        this.penZoom = zoom;
                        this._reset(this.penContext, zoom);
                    }
                    else {
                        this.penTargetZoom = zoom;
                    }
                }
                penClear() {
                    this.penModified = false;
                    if (this.penTargetZoom !== -1) {
                        this._reset(this.penContext, this.penTargetZoom);
                        this.penZoom = this.penTargetZoom;
                        this.penTargetZoom = -1;
                    }
                    this.penContext.clearRect(0, 0, 480, 360);
                }
                penDot(color, size, x, y) {
                    this.penModified = true;
                    this.penContext.fillStyle = color.toCSS();
                    this.penContext.beginPath();
                    this.penContext.arc(240 + x, 180 - y, size / 2, 0, 2 * Math.PI, false);
                    this.penContext.fill();
                }
                penLine(color, size, x1, y1, x2, y2) {
                    this.penModified = true;
                    this.penContext.lineCap = 'round';
                    if (this.penZoom === 1) {
                        if (size % 2 > .5 && size % 2 < 1.5) {
                            x1 -= .5;
                            y1 -= .5;
                            x2 -= .5;
                            y2 -= .5;
                        }
                    }
                    this.penContext.strokeStyle = color.toCSS();
                    this.penContext.lineWidth = size;
                    this.penContext.beginPath();
                    this.penContext.moveTo(240 + x1, 180 - y1);
                    this.penContext.lineTo(240 + x2, 180 - y2);
                    this.penContext.stroke();
                }
                penStamp(sprite) {
                    this.penModified = true;
                    this._drawChild(sprite, this.penContext);
                }
                spriteTouchesPoint(sprite, x, y) {
                    const bounds = sprite.rotatedBounds();
                    if (x < bounds.left || y < bounds.bottom || x > bounds.right || y > bounds.top || sprite.scale === 0) {
                        return false;
                    }
                    const costume = sprite.costumes[sprite.currentCostumeIndex];
                    var cx = (x - sprite.scratchX) / sprite.scale;
                    var cy = (sprite.scratchY - y) / sprite.scale;
                    if (sprite.rotationStyle === 0 && sprite.direction !== 90) {
                        const d = (90 - sprite.direction) * Math.PI / 180;
                        const ox = cx;
                        const s = Math.sin(d), c = Math.cos(d);
                        cx = c * ox - s * cy;
                        cy = s * ox + c * cy;
                    }
                    else if (sprite.rotationStyle === 1 && sprite.direction < 0) {
                        cx = -cx;
                    }
                    let positionX = Math.round(cx / costume.scale + costume.rotationCenterX);
                    let positionY = Math.round(cy / costume.scale + costume.rotationCenterY);
                    if (costume instanceof P.core.VectorCostume) {
                        positionX *= costume.currentScale;
                        positionY *= costume.currentScale;
                    }
                    if (!Number.isFinite(positionX) || !Number.isFinite(positionY)) {
                        return false;
                    }
                    const data = costume.getContext().getImageData(positionX, positionY, 1, 1).data;
                    return data[3] !== 0;
                }
                spritesIntersect(spriteA, otherSprites) {
                    const mb = spriteA.rotatedBounds();
                    for (var i = 0; i < otherSprites.length; i++) {
                        const spriteB = otherSprites[i];
                        if (!spriteB.visible || spriteA === spriteB) {
                            continue;
                        }
                        const ob = spriteB.rotatedBounds();
                        if (mb.bottom >= ob.top || ob.bottom >= mb.top || mb.left >= ob.right || ob.left >= mb.right) {
                            continue;
                        }
                        const left = Math.max(mb.left, ob.left);
                        const top = Math.min(mb.top, ob.top);
                        const right = Math.min(mb.right, ob.right);
                        const bottom = Math.max(mb.bottom, ob.bottom);
                        const width = right - left;
                        const height = top - bottom;
                        if (width < 1 || height < 1 || width !== width || height !== height) {
                            continue;
                        }
                        workingRenderer.canvas.width = width;
                        workingRenderer.canvas.height = height;
                        workingRenderer.ctx.save();
                        workingRenderer.noEffects = true;
                        workingRenderer.ctx.translate(-(left + 240), -(180 - top));
                        workingRenderer.drawChild(spriteA);
                        workingRenderer.ctx.globalCompositeOperation = 'source-in';
                        workingRenderer.drawChild(spriteB);
                        workingRenderer.noEffects = false;
                        workingRenderer.ctx.restore();
                        const data = workingRenderer.ctx.getImageData(0, 0, width, height).data;
                        const length = data.length;
                        for (var j = 0; j < length; j += 4) {
                            if (data[j + 3]) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
                spriteTouchesColor(sprite, color) {
                    const b = sprite.rotatedBounds();
                    const width = b.right - b.left;
                    const height = b.top - b.bottom;
                    if (width < 1 || height < 1 || width !== width || height !== height) {
                        return false;
                    }
                    workingRenderer.canvas.width = width;
                    workingRenderer.canvas.height = height;
                    workingRenderer.ctx.save();
                    workingRenderer.ctx.translate(-(240 + b.left), -(180 - b.top));
                    this.drawAllExcept(workingRenderer, sprite);
                    workingRenderer.ctx.globalCompositeOperation = 'destination-in';
                    workingRenderer.noEffects = true;
                    workingRenderer.drawChild(sprite);
                    workingRenderer.noEffects = false;
                    workingRenderer.ctx.restore();
                    const data = workingRenderer.ctx.getImageData(0, 0, b.right - b.left, b.top - b.bottom).data;
                    color = color & COLOR_MASK;
                    const length = (b.right - b.left) * (b.top - b.bottom) * 4;
                    for (var i = 0; i < length; i += 4) {
                        if (((data[i] << 16 | data[i + 1] << 8 | data[i + 2]) & COLOR_MASK) === color && data[i + 3]) {
                            return true;
                        }
                    }
                    return false;
                }
                spriteColorTouchesColor(sprite, spriteColor, otherColor) {
                    var rb = sprite.rotatedBounds();
                    const width = rb.right - rb.left;
                    const height = rb.top - rb.bottom;
                    if (width < 1 || height < 1 || width !== width || height !== height) {
                        return false;
                    }
                    workingRenderer.canvas.width = workingRenderer2.canvas.width = width;
                    workingRenderer.canvas.height = workingRenderer2.canvas.height = height;
                    workingRenderer.ctx.save();
                    workingRenderer2.ctx.save();
                    workingRenderer.ctx.translate(-(240 + rb.left), -(180 - rb.top));
                    workingRenderer2.ctx.translate(-(240 + rb.left), -(180 - rb.top));
                    this.drawAllExcept(workingRenderer, sprite);
                    workingRenderer2.drawChild(sprite);
                    workingRenderer.ctx.restore();
                    workingRenderer2.ctx.restore();
                    var dataA = workingRenderer.ctx.getImageData(0, 0, width, height).data;
                    var dataB = workingRenderer2.ctx.getImageData(0, 0, width, height).data;
                    spriteColor = spriteColor & COLOR_MASK;
                    otherColor = otherColor & COLOR_MASK;
                    var length = dataA.length;
                    for (var i = 0; i < length; i += 4) {
                        var touchesSource = ((dataB[i] << 16 | dataB[i + 1] << 8 | dataB[i + 2]) & COLOR_MASK) === spriteColor && dataB[i + 3];
                        var touchesOther = ((dataA[i] << 16 | dataA[i + 1] << 8 | dataA[i + 2]) & COLOR_MASK) === otherColor && dataA[i + 3];
                        if (touchesSource && touchesOther) {
                            return true;
                        }
                    }
                    return false;
                }
            }
            canvas2d.ProjectRenderer2D = ProjectRenderer2D;
        })(canvas2d = renderer_1.canvas2d || (renderer_1.canvas2d = {}));
    })(renderer = P.renderer || (P.renderer = {}));
})(P || (P = {}));
var P;
(function (P) {
    var m3;
    (function (m3) {
        function multiply(out, other) {
            const a0 = out[0];
            const a1 = out[1];
            const a2 = out[2];
            const a3 = out[3];
            const a4 = out[4];
            const a5 = out[5];
            const a6 = out[6];
            const a7 = out[7];
            const a8 = out[8];
            const b0 = other[0];
            const b1 = other[1];
            const b2 = other[2];
            const b3 = other[3];
            const b4 = other[4];
            const b5 = other[5];
            const b6 = other[6];
            const b7 = other[7];
            const b8 = other[8];
            out[0] = b0 * a0 + b1 * a3 + b2 * a6;
            out[1] = b0 * a1 + b1 * a4 + b2 * a7;
            out[2] = b0 * a2 + b1 * a5 + b2 * a8;
            out[3] = b3 * a0 + b4 * a3 + b5 * a6;
            out[4] = b3 * a1 + b4 * a4 + b5 * a7;
            out[5] = b3 * a2 + b4 * a5 + b5 * a8;
            out[6] = b6 * a0 + b7 * a3 + b8 * a6;
            out[7] = b6 * a1 + b7 * a4 + b8 * a7;
            out[8] = b6 * a2 + b7 * a5 + b8 * a8;
        }
        m3.multiply = multiply;
        function translation(x, y) {
            return [
                1, 0, 0,
                0, 1, 0,
                x, y, 1,
            ];
        }
        m3.translation = translation;
        function rotation(degrees) {
            const radians = degrees * Math.PI / 180;
            const cos = Math.cos(radians);
            const sin = Math.sin(radians);
            return [
                cos, -sin, 0,
                sin, cos, 0,
                0, 0, 1,
            ];
        }
        m3.rotation = rotation;
        function scaling(x, y) {
            return [
                x, 0, 0,
                0, y, 0,
                0, 0, 1,
            ];
        }
        m3.scaling = scaling;
        function projection(width, height) {
            return [
                2 / width, 0, 0,
                0, -2 / height, 0,
                -1, 1, 1,
            ];
        }
        m3.projection = projection;
    })(m3 = P.m3 || (P.m3 = {}));
})(P || (P = {}));
var P;
(function (P) {
    var renderer;
    (function (renderer) {
        var webgl;
        (function (webgl) {
            function createCanvas() {
                const canvas = document.createElement('canvas');
                canvas.width = 480;
                canvas.height = 360;
                return canvas;
            }
            const horizontalInvertMatrix = P.m3.scaling(-1, 1);
            class Shader {
                constructor(gl, program) {
                    this.gl = gl;
                    this.program = program;
                    this.uniformLocations = {};
                    this.attributeLocations = {};
                    const activeUniforms = gl.getProgramParameter(program, this.gl.ACTIVE_UNIFORMS);
                    for (let index = 0; index < activeUniforms; index++) {
                        const info = gl.getActiveUniform(program, index);
                        if (!info) {
                            throw new Error('uniform at index ' + index + ' does not exist');
                        }
                        const name = info.name;
                        const location = gl.getUniformLocation(program, name);
                        if (!location) {
                            throw new Error('uniform named ' + name + ' does not exist');
                        }
                        this.uniformLocations[name] = location;
                    }
                    const activeAttributes = gl.getProgramParameter(program, this.gl.ACTIVE_ATTRIBUTES);
                    for (let index = 0; index < activeAttributes; index++) {
                        const info = gl.getActiveAttrib(program, index);
                        if (!info) {
                            throw new Error('attribute at index ' + index + ' does not exist');
                        }
                        this.attributeLocations[info.name] = index;
                    }
                }
                uniform1f(name, value) {
                    const location = this.getUniform(name);
                    this.gl.uniform1f(location, value);
                }
                uniform2f(name, a, b) {
                    const location = this.getUniform(name);
                    this.gl.uniform2f(location, a, b);
                }
                uniform4f(name, a, b, c, d) {
                    const location = this.getUniform(name);
                    this.gl.uniform4f(location, a, b, c, d);
                }
                uniformMatrix3(name, value) {
                    const location = this.getUniform(name);
                    this.gl.uniformMatrix3fv(location, false, value);
                }
                hasUniform(name) {
                    return this.uniformLocations.hasOwnProperty(name);
                }
                getUniform(name) {
                    if (!this.hasUniform(name)) {
                        throw new Error('uniform of name ' + name + ' does not exist');
                    }
                    return this.uniformLocations[name];
                }
                attributeBuffer(name, value) {
                    if (!this.hasAttribute(name)) {
                        throw new Error('attribute of name ' + name + ' does not exist');
                    }
                    const location = this.attributeLocations[name];
                    this.gl.enableVertexAttribArray(location);
                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, value);
                    this.gl.vertexAttribPointer(location, 2, this.gl.FLOAT, false, 0, 0);
                }
                hasAttribute(name) {
                    return this.attributeLocations.hasOwnProperty(name);
                }
                getAttribute(name) {
                    if (!this.hasAttribute(name)) {
                        throw new Error('attribute of name ' + name + ' does not exist');
                    }
                    return this.attributeLocations[name];
                }
            }
            class WebGLSpriteRenderer {
                constructor() {
                    this.globalScaleMatrix = P.m3.scaling(1, 1);
                    this.costumeTextures = new Map();
                    this.canvas = createCanvas();
                    const gl = this.canvas.getContext('webgl', this.getContextOptions());
                    if (!gl) {
                        throw new Error('cannot get webgl rendering context');
                    }
                    this.gl = gl;
                    this.noFiltersShader = this.createShader(WebGLSpriteRenderer.vertexShader, WebGLSpriteRenderer.fragmentShader, []);
                    this.allFiltersShader = this.createShader(WebGLSpriteRenderer.vertexShader, WebGLSpriteRenderer.fragmentShader, [
                        'ENABLE_BRIGHTNESS',
                        'ENABLE_COLOR',
                        'ENABLE_GHOST',
                        'ENABLE_FISHEYE',
                        'ENABLE_MOSAIC',
                        'ENABLE_PIXELATE',
                    ]);
                    this.gl.enable(this.gl.BLEND);
                    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
                    this.quadBuffer = this.gl.createBuffer();
                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.quadBuffer);
                    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
                        0, 0,
                        0, 1,
                        1, 0,
                        1, 0,
                        0, 1,
                        1, 1,
                    ]), this.gl.STATIC_DRAW);
                    this.reset(1);
                }
                getContextOptions() {
                    return {
                        alpha: false,
                    };
                }
                compileShader(type, source, definitions) {
                    if (definitions) {
                        for (const def of definitions) {
                            source = '#define ' + def + '\n' + source;
                        }
                    }
                    const shader = this.gl.createShader(type);
                    if (!shader) {
                        throw new Error('Cannot create shader');
                    }
                    this.gl.shaderSource(shader, source);
                    this.gl.compileShader(shader);
                    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
                        const error = this.gl.getShaderInfoLog(shader);
                        this.gl.deleteShader(shader);
                        throw new Error('Shader compilation error: ' + error);
                    }
                    return shader;
                }
                compileProgram(vs, fs, definitions) {
                    const vertexShader = this.compileShader(this.gl.VERTEX_SHADER, vs, definitions);
                    const fragmentShader = this.compileShader(this.gl.FRAGMENT_SHADER, fs, definitions);
                    const program = this.gl.createProgram();
                    if (!program) {
                        throw new Error('Cannot create program');
                    }
                    this.gl.attachShader(program, vertexShader);
                    this.gl.attachShader(program, fragmentShader);
                    this.gl.linkProgram(program);
                    if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
                        const error = this.gl.getProgramInfoLog(program);
                        this.gl.deleteProgram(program);
                        throw new Error('Program compilation error: ' + error);
                    }
                    return program;
                }
                createShader(vs, fs, definitions) {
                    const program = this.compileProgram(vs, fs, definitions);
                    return new Shader(this.gl, program);
                }
                convertToTexture(canvas) {
                    const texture = this.gl.createTexture();
                    if (!texture) {
                        throw new Error('Cannot create texture');
                    }
                    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
                    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, canvas);
                    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
                    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
                    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
                    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
                    return texture;
                }
                destroy() {
                    const extension = this.gl.getExtension('WEBGL_lose_context');
                    if (extension) {
                        extension.loseContext();
                    }
                }
                reset(scale) {
                    this.canvas.width = scale * 480;
                    this.canvas.height = scale * 360;
                    this.gl.viewport(0, 0, scale * 480, scale * 360);
                    if (this.globalScaleMatrix[0] !== scale) {
                        this.globalScaleMatrix = P.m3.scaling(scale, scale);
                    }
                    this.gl.clearColor(1, 1, 1, 1);
                    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
                }
                useShader(shader) {
                    this.gl.useProgram(shader.program);
                    this.shader = shader;
                }
                drawChild(child) {
                    const costume = child.costumes[child.currentCostumeIndex];
                    if (!this.costumeTextures.has(costume)) {
                        const image = costume.getImage();
                        const texture = this.convertToTexture(image);
                        this.costumeTextures.set(costume, texture);
                    }
                    this.gl.bindTexture(this.gl.TEXTURE_2D, this.costumeTextures.get(costume));
                    this.shader.attributeBuffer('a_position', this.quadBuffer);
                    const matrix = P.m3.projection(this.canvas.width, this.canvas.height);
                    P.m3.multiply(matrix, this.globalScaleMatrix);
                    P.m3.multiply(matrix, P.m3.translation(240 + child.scratchX | 0, 180 - child.scratchY | 0));
                    if (P.core.isSprite(child)) {
                        if (child.rotationStyle === 0 && child.direction !== 90) {
                            P.m3.multiply(matrix, P.m3.rotation(90 - child.direction));
                        }
                        else if (child.rotationStyle === 1 && child.direction < 0) {
                            P.m3.multiply(matrix, horizontalInvertMatrix);
                        }
                        if (child.scale !== 1) {
                            P.m3.multiply(matrix, P.m3.scaling(child.scale, child.scale));
                        }
                    }
                    if (costume.scale !== 1) {
                        P.m3.multiply(matrix, P.m3.scaling(costume.scale, costume.scale));
                    }
                    P.m3.multiply(matrix, P.m3.translation(-costume.rotationCenterX, -costume.rotationCenterY));
                    P.m3.multiply(matrix, P.m3.scaling(costume.width, costume.height));
                    this.shader.uniformMatrix3('u_matrix', matrix);
                    if (this.shader.hasUniform('u_opacity')) {
                        this.shader.uniform1f('u_opacity', 1 - child.filters.ghost / 100);
                    }
                    if (this.shader.hasUniform('u_brightness')) {
                        this.shader.uniform1f('u_brightness', child.filters.brightness / 100);
                    }
                    if (this.shader.hasUniform('u_color')) {
                        this.shader.uniform1f('u_color', child.filters.color / 200);
                    }
                    if (this.shader.hasUniform('u_mosaic')) {
                        const mosaic = Math.round((Math.abs(child.filters.mosaic) + 10) / 10);
                        this.shader.uniform1f('u_mosaic', P.utils.clamp(mosaic, 1, 512));
                    }
                    if (this.shader.hasUniform('u_whirl')) {
                        this.shader.uniform1f('u_whirl', child.filters.whirl * Math.PI / -180);
                    }
                    if (this.shader.hasUniform('u_fisheye')) {
                        this.shader.uniform1f('u_fisheye', Math.max(0, (child.filters.fisheye + 100) / 100));
                    }
                    if (this.shader.hasUniform('u_pixelate')) {
                        this.shader.uniform1f('u_pixelate', Math.abs(child.filters.pixelate) / 10);
                    }
                    if (this.shader.hasUniform('u_size')) {
                        this.shader.uniform2f('u_size', costume.width, costume.height);
                    }
                    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
                }
                drawTextureOverlay(texture) {
                    const shader = this.noFiltersShader;
                    this.gl.useProgram(shader.program);
                    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
                    shader.attributeBuffer('a_position', this.quadBuffer);
                    const matrix = P.m3.projection(this.canvas.width, this.canvas.height);
                    P.m3.multiply(matrix, this.globalScaleMatrix);
                    P.m3.multiply(matrix, P.m3.translation(240, 180));
                    P.m3.multiply(matrix, P.m3.scaling(1, 1));
                    P.m3.multiply(matrix, P.m3.translation(-240, -180));
                    P.m3.multiply(matrix, P.m3.scaling(480, 360));
                    shader.uniformMatrix3('u_matrix', matrix);
                    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
                }
            }
            WebGLSpriteRenderer.vertexShader = `
    attribute vec2 a_position;

    uniform mat3 u_matrix;

    varying vec2 v_texcoord;

    void main() {
      gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);
      v_texcoord = a_position;
    }
    `;
            WebGLSpriteRenderer.fragmentShader = `
    precision mediump float;

    varying vec2 v_texcoord;

    uniform sampler2D u_texture;

    #ifdef ENABLE_BRIGHTNESS
      uniform float u_brightness;
    #endif
    #ifdef ENABLE_COLOR
      uniform float u_color;
    #endif
    #ifdef ENABLE_GHOST
      uniform float u_opacity;
    #endif
    #ifdef ENABLE_MOSAIC
      uniform float u_mosaic;
    #endif
    #ifdef ENABLE_WHIRL
      uniform float u_whirl;
    #endif
    #ifdef ENABLE_FISHEYE
      uniform float u_fisheye;
    #endif
    #ifdef ENABLE_PIXELATE
      uniform float u_pixelate;
      uniform vec2 u_size;
    #endif
    #ifdef ENABLE_COLOR_TEST
      uniform vec3 u_colorTest;
    #endif

    const float minimumAlpha = 1.0 / 250.0;
    const vec2 vecCenter = vec2(0.5, 0.5);

    // http://lolengine.net/blog/2013/07/27/rgb-to-hsv-in-glsl
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }
    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    void main() {
      // varyings cannot be modified
      vec2 texcoord = v_texcoord;

      #ifdef ENABLE_MOSAIC
        texcoord = fract(u_mosaic * v_texcoord);
      #endif

      #ifdef ENABLE_PIXELATE
      if (u_pixelate != 0.0) {
        vec2 texelSize = u_size / u_pixelate;
        texcoord = (floor(texcoord * texelSize) + vecCenter) / texelSize;
      }
      #endif

      #ifdef ENABLE_WHIRL
      {
        const float radius = 0.5;
        vec2 offset = texcoord - vecCenter;
        float offsetMagnitude = length(offset);
        float whirlFactor = max(1.0 - (offsetMagnitude / radius), 0.0);
        float whirlActual = u_whirl * whirlFactor * whirlFactor;
        float sinWhirl = sin(whirlActual);
        float cosWhirl = cos(whirlActual);
        mat2 rotationMatrix = mat2(
          cosWhirl, -sinWhirl,
          sinWhirl, cosWhirl
        );
        texcoord = rotationMatrix * offset + vecCenter;
      }
      #endif

      #ifdef ENABLE_FISHEYE
      {
        vec2 vec = (texcoord - vecCenter) / vecCenter;
        float vecLength = length(vec);
        float r = pow(min(vecLength, 1.0), u_fisheye) * max(1.0, vecLength);
        vec2 unit = vec / vecLength;
        texcoord = vecCenter + r * unit * vecCenter;
      }
      #endif

      vec4 color = texture2D(u_texture, texcoord);
      #ifndef DISABLE_MINIMUM_ALPHA
      if (color.a < minimumAlpha) {
        discard;
      }
      #endif

      #ifdef ENABLE_GHOST
        color.a *= u_opacity;
      #endif

      #ifdef ENABLE_COLOR
      if (u_color != 0.0) {
        vec3 hsv = rgb2hsv(color.rgb);
        // hsv.x = hue
        // hsv.y = saturation
        // hsv.z = value

        // scratch forces all colors to have some minimal amount saturation so there is a visual change
        const float minValue = 0.11 / 2.0;
        const float minSaturation = 0.09;
        if (hsv.z < minValue) hsv = vec3(0.0, 1.0, minValue);
        else if (hsv.y < minSaturation) hsv = vec3(0.0, minSaturation, hsv.z);

        hsv.x = mod(hsv.x + u_color, 1.0);
        if (hsv.x < 0.0) hsv.x += 1.0;
        color = vec4(hsv2rgb(hsv), color.a);
      }
      #endif

      #ifdef ENABLE_BRIGHTNESS
        color.rgb = clamp(color.rgb + vec3(u_brightness), 0.0, 1.0);
      #endif

      #ifdef ENABLE_COLOR_TEST
        if (color.rgb != u_colorTest) {
          color = vec4(0.0, 0.0, 0.0, 0.0);
        }
      #endif

      gl_FragColor = color;
    }
    `;
            class CollisionRenderer extends WebGLSpriteRenderer {
                constructor() {
                    super();
                    this.gl.enable(this.gl.SCISSOR_TEST);
                    this.gl.scissor(0, 0, 480, 360);
                    this.gl.clearColor(0, 0, 0, 0);
                    this.touchingShader = this.createShader(CollisionRenderer.vertexShader, WebGLSpriteRenderer.fragmentShader, ['DISABLE_MINIMUM_ALPHA']);
                    this.shapeFiltersShader = this.createShader(CollisionRenderer.vertexShader, WebGLSpriteRenderer.fragmentShader, [
                        'ENABLE_FISHEYE',
                        'ENABLE_PIXELATE',
                        'ENABLE_MOSAIC',
                    ]);
                    this.touchingColorShader = this.createShader(CollisionRenderer.vertexShader, WebGLSpriteRenderer.fragmentShader, [
                        'DISABLE_MINIMUM_ALPHA',
                        'ENABLE_COLOR_TEST',
                    ]);
                }
                getContextOptions() {
                    return {
                        alpha: true
                    };
                }
                spritesIntersect(spriteA, otherSprites) {
                    const mb = spriteA.rotatedBounds();
                    for (const spriteB of otherSprites) {
                        if (!spriteB.visible || spriteA === spriteB) {
                            continue;
                        }
                        const ob = spriteB.rotatedBounds();
                        if (mb.bottom >= ob.top || ob.bottom >= mb.top || mb.left >= ob.right || ob.left >= mb.right) {
                            continue;
                        }
                        const left = Math.max(mb.left, ob.left);
                        const top = Math.min(mb.top, ob.top);
                        const right = Math.min(mb.right, ob.right);
                        const bottom = Math.max(mb.bottom, ob.bottom);
                        const width = Math.max(right - left, 1);
                        const height = Math.max(top - bottom, 1);
                        this.gl.scissor(240 + left, 180 + bottom, width, height);
                        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
                        this.useShader(this.allFiltersShader);
                        this.drawChild(spriteA);
                        this.gl.blendFunc(this.gl.DST_ALPHA, this.gl.ZERO);
                        this.useShader(this.touchingShader);
                        this.drawChild(spriteB);
                        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
                        var data = new Uint8Array(width * height * 4);
                        this.gl.readPixels(240 + left, 180 + bottom, width, height, this.gl.RGBA, this.gl.UNSIGNED_BYTE, data);
                        this.gl.scissor(0, 0, 480, 360);
                        var length = data.length;
                        for (var j = 0; j < length; j += 4) {
                            if (data[j + 3]) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
                spriteTouchesPoint(sprite, x, y) {
                    const cx = 240 + x | 0;
                    const cy = 180 + y | 0;
                    this.gl.scissor(cx, cy, 1, 1);
                    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
                    this.useShader(this.shapeFiltersShader);
                    this.drawChild(sprite);
                    const result = new Uint8Array(4);
                    this.gl.readPixels(cx, cy, 1, 1, this.gl.RGBA, this.gl.UNSIGNED_BYTE, result);
                    this.gl.scissor(0, 0, 480, 360);
                    return result[3] !== 0;
                }
            }
            class PenRenderer extends WebGLSpriteRenderer {
                constructor() {
                    super();
                    this.dirty = false;
                    this.penCoords = new Float32Array(65536);
                    this.penLines = new Float32Array(32768);
                    this.penColors = new Float32Array(65536);
                    this.penCoordsIndex = 0;
                    this.penLinesIndex = 0;
                    this.penColorsIndex = 0;
                    this.penShader = this.createShader(PenRenderer.PEN_VERTEX_SHADER, PenRenderer.PEN_FRAGMENT_SHADER);
                    this.positionBuffer = this.gl.createBuffer();
                    this.lineBuffer = this.gl.createBuffer();
                    this.colorBuffer = this.gl.createBuffer();
                    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
                }
                getContextOptions() {
                    return {
                        alpha: true,
                        preserveDrawingBuffer: true,
                    };
                }
                pendingPenOperations() {
                    return this.penLinesIndex > 0;
                }
                drawPendingOperations() {
                    const gl = this.gl;
                    this.dirty = true;
                    this.useShader(this.penShader);
                    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
                    gl.bufferData(gl.ARRAY_BUFFER, this.penCoords, gl.STREAM_DRAW);
                    gl.vertexAttribPointer(this.penShader.getAttribute('a_vertexData'), 4, gl.FLOAT, false, 0, 0);
                    gl.enableVertexAttribArray(this.penShader.getAttribute('a_vertexData'));
                    gl.bindBuffer(gl.ARRAY_BUFFER, this.lineBuffer);
                    gl.bufferData(gl.ARRAY_BUFFER, this.penLines, gl.STREAM_DRAW);
                    gl.vertexAttribPointer(this.penShader.getAttribute('a_lineData'), 2, gl.FLOAT, false, 0, 0);
                    gl.enableVertexAttribArray(this.penShader.getAttribute('a_lineData'));
                    gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
                    gl.bufferData(gl.ARRAY_BUFFER, this.penColors, gl.STREAM_DRAW);
                    gl.vertexAttribPointer(this.penShader.getAttribute('a_color'), 4, gl.FLOAT, false, 0, 0);
                    gl.enableVertexAttribArray(this.penShader.getAttribute('a_color'));
                    gl.drawArrays(gl.TRIANGLES, 0, (this.penCoordsIndex + 1) / 4);
                    this.penCoordsIndex = 0;
                    this.penLinesIndex = 0;
                    this.penColorsIndex = 0;
                }
                buffersCanFit(size) {
                    return this.penCoordsIndex + size > this.penCoords.length;
                }
                getCircleResolution(size) {
                    return Math.max(Math.ceil(size), 3);
                }
                penLine(color, size, x1, y1, x2, y2) {
                    const circleRes = this.getCircleResolution(size);
                    if (this.buffersCanFit(24 * (circleRes + 1))) {
                        this.drawPendingOperations();
                    }
                    this.penCoords[this.penCoordsIndex] = x1;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = y1;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = x2;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = y2;
                    this.penCoordsIndex++;
                    this.penLines[this.penLinesIndex] = -Math.PI / 2;
                    this.penLinesIndex++;
                    this.penLines[this.penLinesIndex] = size / 2;
                    this.penLinesIndex++;
                    this.penCoords[this.penCoordsIndex] = x2;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = y2;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = x1;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = y1;
                    this.penCoordsIndex++;
                    this.penLines[this.penLinesIndex] = Math.PI / 2;
                    this.penLinesIndex++;
                    this.penLines[this.penLinesIndex] = size / 2;
                    this.penLinesIndex++;
                    this.penCoords[this.penCoordsIndex] = x1;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = y1;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = x2;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = y2;
                    this.penCoordsIndex++;
                    this.penLines[this.penLinesIndex] = Math.PI / 2;
                    this.penLinesIndex++;
                    this.penLines[this.penLinesIndex] = size / 2;
                    this.penLinesIndex++;
                    this.penCoords[this.penCoordsIndex] = x1;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = y1;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = x2;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = y2;
                    this.penCoordsIndex++;
                    this.penLines[this.penLinesIndex] = Math.PI / 2;
                    this.penLinesIndex++;
                    this.penLines[this.penLinesIndex] = size / 2;
                    this.penLinesIndex++;
                    this.penCoords[this.penCoordsIndex] = x2;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = y2;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = x1;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = y1;
                    this.penCoordsIndex++;
                    this.penLines[this.penLinesIndex] = -Math.PI / 2;
                    this.penLinesIndex++;
                    this.penLines[this.penLinesIndex] = size / 2;
                    this.penLinesIndex++;
                    this.penCoords[this.penCoordsIndex] = x2;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = y2;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = x1;
                    this.penCoordsIndex++;
                    this.penCoords[this.penCoordsIndex] = y1;
                    this.penCoordsIndex++;
                    this.penLines[this.penLinesIndex] = Math.PI / 2;
                    this.penLinesIndex++;
                    this.penLines[this.penLinesIndex] = size / 2;
                    this.penLinesIndex++;
                    for (var i = 0; i < circleRes; i++) {
                        this.penCoords[this.penCoordsIndex] = x2;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y2;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = x1;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y1;
                        this.penCoordsIndex++;
                        this.penLines[this.penLinesIndex] = 0;
                        this.penLinesIndex++;
                        this.penLines[this.penLinesIndex] = 0;
                        this.penLinesIndex++;
                        this.penCoords[this.penCoordsIndex] = x2;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y2;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = x1;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y1;
                        this.penCoordsIndex++;
                        this.penLines[this.penLinesIndex] = Math.PI / 2 + i / circleRes * Math.PI;
                        this.penLinesIndex++;
                        this.penLines[this.penLinesIndex] = size / 2;
                        this.penLinesIndex++;
                        this.penCoords[this.penCoordsIndex] = x2;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y2;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = x1;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y1;
                        this.penCoordsIndex++;
                        this.penLines[this.penLinesIndex] = Math.PI / 2 + (i + 1) / circleRes * Math.PI;
                        this.penLinesIndex++;
                        this.penLines[this.penLinesIndex] = size / 2;
                        this.penLinesIndex++;
                        this.penCoords[this.penCoordsIndex] = x1;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y1;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = x2;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y2;
                        this.penCoordsIndex++;
                        this.penLines[this.penLinesIndex] = 0;
                        this.penLinesIndex++;
                        this.penLines[this.penLinesIndex] = 0;
                        this.penLinesIndex++;
                        this.penCoords[this.penCoordsIndex] = x1;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y1;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = x2;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y2;
                        this.penCoordsIndex++;
                        this.penLines[this.penLinesIndex] = Math.PI / 2 + i / circleRes * Math.PI;
                        this.penLinesIndex++;
                        this.penLines[this.penLinesIndex] = size / 2;
                        this.penLinesIndex++;
                        this.penCoords[this.penCoordsIndex] = x1;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y1;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = x2;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y2;
                        this.penCoordsIndex++;
                        this.penLines[this.penLinesIndex] = Math.PI / 2 + (i + 1) / circleRes * Math.PI;
                        this.penLinesIndex++;
                        this.penLines[this.penLinesIndex] = size / 2;
                        this.penLinesIndex++;
                    }
                    const [r, g, b, a] = color.toParts();
                    for (var i = 0; i < circleRes * 6 + 6; i++) {
                        this.penColors[this.penColorsIndex] = r;
                        this.penColorsIndex++;
                        this.penColors[this.penColorsIndex] = g;
                        this.penColorsIndex++;
                        this.penColors[this.penColorsIndex] = b;
                        this.penColorsIndex++;
                        this.penColors[this.penColorsIndex] = a;
                        this.penColorsIndex++;
                    }
                }
                penDot(color, size, x, y) {
                    const circleRes = this.getCircleResolution(size);
                    if (this.buffersCanFit(12 * circleRes)) {
                        this.drawPendingOperations();
                    }
                    for (var i = 0; i < circleRes; i++) {
                        this.penCoords[this.penCoordsIndex] = x;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = x;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = x;
                        this.penCoordsIndex++;
                        this.penLines[this.penLinesIndex] = 0;
                        this.penLinesIndex++;
                        this.penLines[this.penLinesIndex] = 0;
                        this.penLinesIndex++;
                        this.penCoords[this.penCoordsIndex] = x;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = x + 1;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y + 1;
                        this.penCoordsIndex++;
                        this.penLines[this.penLinesIndex] = Math.PI / 2 + i / circleRes * 2 * Math.PI;
                        this.penLinesIndex++;
                        this.penLines[this.penLinesIndex] = size / 2;
                        this.penLinesIndex++;
                        this.penCoords[this.penCoordsIndex] = x;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = x + 1;
                        this.penCoordsIndex++;
                        this.penCoords[this.penCoordsIndex] = y + 1;
                        this.penCoordsIndex++;
                        this.penLines[this.penLinesIndex] = Math.PI / 2 + (i + 1) / circleRes * 2 * Math.PI;
                        this.penLinesIndex++;
                        this.penLines[this.penLinesIndex] = size / 2;
                        this.penLinesIndex++;
                    }
                    const [r, g, b, a] = color.toParts();
                    for (var i = 0; i < circleRes * 3; i++) {
                        this.penColors[this.penColorsIndex] = r;
                        this.penColorsIndex++;
                        this.penColors[this.penColorsIndex] = g;
                        this.penColorsIndex++;
                        this.penColors[this.penColorsIndex] = b;
                        this.penColorsIndex++;
                        this.penColors[this.penColorsIndex] = a;
                        this.penColorsIndex++;
                    }
                }
                penStamp(sprite) {
                    this.dirty = true;
                    if (this.pendingPenOperations()) {
                        this.drawPendingOperations();
                    }
                    this.useShader(this.allFiltersShader);
                    this.drawChild(sprite);
                }
                penClear() {
                    this.gl.clearColor(0, 0, 0, 0);
                    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
                }
            }
            PenRenderer.PEN_VERTEX_SHADER = `
    precision mediump float;

    // [0] = x1
    // [1] = y1
    // [2] = x2
    // [3] = y2
    attribute vec4 a_vertexData;
    // [0] = thickened vertex direction
    // [1] = thickened vertex distance
    attribute vec2 a_lineData;
    // [0] = red
    // [1] = green
    // [2] = blue
    // [3] = alpha
    attribute vec4 a_color;

    varying vec4 v_color;

    void main() {
      vec2 lineDir = normalize(a_vertexData.zw - a_vertexData.xy);

      mat2 rot;
      rot[0] = vec2(cos(a_lineData.x), sin(a_lineData.x));
      rot[1] = vec2(-sin(a_lineData.x), cos(a_lineData.x));

      lineDir *= rot * a_lineData.y;

      vec2 p = (a_vertexData.xy + lineDir);
      p.x /= 240.0;
      p.y /= 180.0;

      gl_Position = vec4(p, 0.0, 1.0);
      v_color = vec4(a_color.xyz / 255.0, a_color.w);
    }`;
            PenRenderer.PEN_FRAGMENT_SHADER = `
    precision mediump float;

    varying vec4 v_color;

    void main() {
      gl_FragColor = v_color;
    }`;
            class WebGLProjectRenderer extends WebGLSpriteRenderer {
                constructor(stage) {
                    super();
                    this.stage = stage;
                    this.zoom = 1;
                    this.collisionRenderer = new CollisionRenderer();
                    this.penRenderer = new PenRenderer();
                    this.fallbackRenderer = new P.renderer.canvas2d.ProjectRenderer2D(stage);
                }
                drawFrame() {
                    if (this.penRenderer.pendingPenOperations()) {
                        this.penRenderer.drawPendingOperations();
                    }
                    if (this.penRenderer.dirty) {
                        this.updatePenTexture();
                        this.penRenderer.dirty = false;
                    }
                    this.reset(this.zoom);
                    this.useShader(this.allFiltersShader);
                    this.drawChild(this.stage);
                    if (this.penTexture) {
                        this.drawTextureOverlay(this.penTexture);
                        this.useShader(this.allFiltersShader);
                    }
                    for (var i = 0; i < this.stage.children.length; i++) {
                        var child = this.stage.children[i];
                        if (!child.visible) {
                            continue;
                        }
                        this.drawChild(child);
                    }
                    this.gl.flush();
                }
                init(root) {
                    root.appendChild(this.canvas);
                }
                destroy() {
                    super.destroy();
                    this.penRenderer.destroy();
                    this.collisionRenderer.destroy();
                }
                onStageFiltersChanged() {
                }
                penLine(color, size, x1, y1, x2, y2) {
                    this.penRenderer.penLine(color, size, x1, y1, x2, y2);
                }
                penDot(color, size, x, y) {
                    this.penRenderer.penDot(color, size, x, y);
                }
                penStamp(sprite) {
                    this.penRenderer.penStamp(sprite);
                }
                penClear() {
                    this.penRenderer.penClear();
                }
                updatePenTexture() {
                    if (this.penTexture) {
                        this.gl.bindTexture(this.gl.TEXTURE_2D, this.penTexture);
                        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.penRenderer.canvas);
                    }
                    else {
                        this.penTexture = this.convertToTexture(this.penRenderer.canvas);
                    }
                }
                resize(scale) {
                    this.zoom = scale * P.config.scale;
                }
                spriteTouchesPoint(sprite, x, y) {
                    return this.collisionRenderer.spriteTouchesPoint(sprite, x, y);
                }
                spritesIntersect(spriteA, otherSprites) {
                    return this.collisionRenderer.spritesIntersect(spriteA, otherSprites);
                }
                spriteTouchesColor(sprite, color) {
                    return this.fallbackRenderer.spriteTouchesColor(sprite, color);
                }
                spriteColorTouchesColor(sprite, spriteColor, otherColor) {
                    return this.fallbackRenderer.spriteColorTouchesColor(sprite, spriteColor, otherColor);
                }
            }
            webgl.WebGLProjectRenderer = WebGLProjectRenderer;
        })(webgl = renderer.webgl || (renderer.webgl = {}));
    })(renderer = P.renderer || (P.renderer = {}));
})(P || (P = {}));
//# sourceMappingURL=phosphorus.dist.js.map

// NW.js hook...
(function() {
  if (typeof nw !== 'undefined') {
    // open links in the browser
    var win = nw.Window.get();
    win.on('new-win-policy', (frame, url, policy) => {
      policy.ignore();
      nw.Shell.openExternal(url);
    });
    // fix the size of the window made by NW.js
    var package = nw.require('package.json');
    if (package.window && package.window.height && package.window.width) {
      win.resizeBy(package.window.width - window.innerWidth, package.window.height - window.innerHeight);
    }
  }
})();

// Player scripts...
(function () {
  'use strict';

  var splash = document.querySelector('.splash');
  var error = document.querySelector('.error');
  var progressBar = document.querySelector('.progress');
  var progressBarFill = document.querySelector('.progress-bar');

  var splash = document.querySelector('.splash');
  var error = document.querySelector('.error');
  var progressBar = document.querySelector('.progress');
  var progressBarFill = document.querySelector('.progress-bar');

  var player = new P.player.Player();
  player.setOptions({ theme: 'dark' });
  var errorHandler = new P.player.ErrorHandler(player, {
    container: document.querySelector('.error-report'),
  });
  player.onprogress.subscribe(function(progress) {
    progressBarFill.style.width = (10 + progress * 90) + '%';
  });
  player.onerror.subscribe(function(e) {
    player.exitFullscreen();
    error.style.display = 'table';
  });
  document.querySelector('.player').appendChild(player.root);

  document.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, { passive: false });

  P.io.setAssetManager(new class {
    constructor() {
      // Assets...
      this.data = soundBankJS;
    }

    loadSoundbankFile(src) {
      return this.fetch('soundbank/' + src).then(function(e) { return e.arrayBuffer(); });
    }

    loadFont(src) {
      return this.fetch(src).then(function(e) { return e.blob(); });
    }

    fetch(u) {
      return fetch(this.data[u]);
    }
  });

  // Project type...
  var type = 'sb3';
  // Project data...
  // Attribution Notice: No license assumed.
  var project = octetStreamJS;

  // Player options...
  var playerOptions = {"fullscreenPadding":0,"fullscreenMode":"window","turbo":false,"autoplayPolicy":"always","username":"","fps":30,"spriteFencing":false,"cloudVariables":"off"};
  // Controls options...
  var controlsOptions = {"enableFullscreen":false};

  player.setOptions(playerOptions);
  if (controlsOptions) {
    player.addControls(controlsOptions);
  }

  fetch(project)
    .then(function(request) { return request.arrayBuffer(); })
    .then(function(buffer) { return player.loadProjectFromBuffer(buffer, type); })
    .then(function() {
      player.enterFullscreen();
      splash.style.display = 'none';
    })
    .catch(function(e) {
      player.handleError(e);
    });
}());
