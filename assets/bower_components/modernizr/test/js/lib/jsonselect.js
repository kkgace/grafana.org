/*! Copyright (c) 2011, Lloyd Hilaiel, ISC License */
!function(e){function t(e){try{return JSON&&JSON.parse?JSON.parse(e):new Function("return "+e)()}catch(t){n("ijs")}}function n(e){throw new Error(c[e])}function r(e){return Array.isArray?Array.isArray(e):"[object Array]"===l.call(e)}function i(e){if(null===e)return"null";var t=typeof e;return"object"===t&&r(e)&&(t="array"),t}function o(e,t,n,r,o){var a,s=[],u=">"===t[0]?t[1]:t[0],l=!0;return u.type&&(l=l&&u.type===i(e)),u.id&&(l=l&&u.id===n),l&&u.pf&&(":nth-last-child"===u.pf?r=o-r:r++,0===u.a?l=u.b===r:(a=(r-u.b)%u.a,l=!a&&r*u.a+u.b>=0)),">"!==t[0]&&":root"!==t[0].pc&&s.push(t),l&&(">"===t[0]?t.length>2&&(l=!1,s.push(t.slice(2))):t.length>1&&(l=!1,s.push(t.slice(1)))),[l,s]}function a(e,t,n,i,s,u){var l,c,f=","===e[0]?e.slice(1):[e],d=[],p=!1,h=0,m=0,g=0;for(h=0;h<f.length;h++)for(c=o(t,f[h],i,s,u),c[0]&&(p=!0),m=0;m<c[1].length;m++)d.push(c[1][m]);if(d.length&&"object"==typeof t)if(d.length>=1&&d.unshift(","),r(t))for(h=0;h<t.length;h++)a(d,t[h],n,void 0,h,t.length);else{g=0;for(l in t)t.hasOwnProperty(l)&&g++;h=0;for(l in t)t.hasOwnProperty(l)&&a(d,t[l],n,l,h++,g)}p&&n&&n(t)}function s(e,t){var n=[];return a(e,t,function(e){n.push(e)}),n}function u(e){return{sel:m(e),match:function(e){return s(this.sel,e)},forEach:function(e,t){return a(this.sel,e,t)}}}var l=Object.prototype.toString,c={ijs:"invalid json string",mpc:"multiple pseudo classes (:xxx) not allowed",mepf:"malformed expression in pseudo-function",nmi:"multiple ids not allowed",se:"selector expected",sra:"string required after '.'",uc:"unrecognized char",ujs:"unclosed json string",upc:"unrecognized pseudo class"},f={psc:1,psf:2,typ:3,str:4},d=/^(?:([\r\n\t\ ]+)|([*.,>])|(string|boolean|null|array|object|number)|(:(?:root|first-child|last-child|only-child))|(:(?:nth-child|nth-last-child))|(:\w+)|(\"(?:[^\\]|\\[^\"])*\")|(\")|((?:[_a-zA-Z]|[^\0-\0177]|\\[^\r\n\f0-9a-fA-F])(?:[_a-zA-Z0-9\-]|[^\u0000-\u0177]|(?:\\[^\r\n\f0-9a-fA-F]))*))/,p=/^\s*\(\s*(?:([+\-]?)([0-9]*)n\s*(?:([+\-])\s*([0-9]))?|(odd|even)|([+\-]?[0-9]+))\s*\)/,h=function(e,r){r||(r=0);var i=d.exec(e.substr(r));if(!i)return void 0;r+=i[0].length;var o;return i[1]?o=[r," "]:i[2]?o=[r,i[0]]:i[3]?o=[r,f.typ,i[0]]:i[4]?o=[r,f.psc,i[0]]:i[5]?o=[r,f.psf,i[0]]:i[6]?n("upc"):i[7]?o=[r,f.str,t(i[0])]:i[8]?n("ujs"):i[9]&&(o=[r,f.str,i[0].replace(/\\([^\r\n\f0-9a-fA-F])/g,"$1")]),o},m=function(e){for(var t,n=[],r=0;;){var i=g(e,r);if(n.push(i[1]),i=h(e,r=i[0]),i&&" "===i[1]&&(i=h(e,r=i[0])),!i)break;">"===i[1]?(n.push(">"),r=i[0]):","===i[1]&&(void 0===t?t=[",",n]:t.push(n),n=[],r=i[0])}return t&&t.push(n),t?t:n},g=function(e,t){var r=t,i={},o=h(e,t);for(o&&" "===o[1]&&(r=t=o[0],o=h(e,t)),o&&o[1]===f.typ?(i.type=o[2],o=h(e,t=o[0])):o&&"*"===o[1]&&(o=h(e,t=o[0]));;){if(void 0===o)break;if("."===o[1])o=h(e,t=o[0]),o&&o[1]===f.str||n("sra"),i.id&&n("nmi"),i.id=o[2];else if(o[1]===f.psc)(i.pc||i.pf)&&n("mpc"),":first-child"===o[2]?(i.pf=":nth-child",i.a=0,i.b=1):":last-child"===o[2]?(i.pf=":nth-last-child",i.a=0,i.b=1):i.pc=o[2];else{if(o[1]!==f.psf)break;(i.pc||i.pf)&&n("mpc"),i.pf=o[2];var a=p.exec(e.substr(o[0]));a||n("mepf"),a[5]?(i.a=2,i.b="odd"===a[5]?1:0):a[6]?(i.a=0,i.b=parseInt(a[6],10)):(i.a=parseInt((a[1]?a[1]:"+")+(a[2]?a[2]:"1"),10),i.b=a[3]?parseInt(a[3]+a[4],10):0),o[0]+=a[0].length}o=h(e,t=o[0])}return r===t&&n("se"),[t,i]};e._lex=h,e._parse=m,e.match=function(e,t){return u(e).match(t)},e.forEach=function(e,t,n){return u(e).forEach(t,n)},e.compile=u}("undefined"==typeof exports?window.JSONSelect={}:exports);