define(["./core","./var/strundefined","./core/access","./css/var/rnumnonpx","./css/curCSS","./css/addGetHookIf","./css/support","./core/init","./css","./selector"],function(e,t,n,r,i,o,a){function s(t){return e.isWindow(t)?t:9===t.nodeType&&t.defaultView}var u=window.document.documentElement;return e.offset={setOffset:function(t,n,r){var i,o,a,s,u,l,c,f=e.css(t,"position"),d=e(t),p={};"static"===f&&(t.style.position="relative"),u=d.offset(),a=e.css(t,"top"),l=e.css(t,"left"),c=("absolute"===f||"fixed"===f)&&(a+l).indexOf("auto")>-1,c?(i=d.position(),s=i.top,o=i.left):(s=parseFloat(a)||0,o=parseFloat(l)||0),e.isFunction(n)&&(n=n.call(t,r,u)),null!=n.top&&(p.top=n.top-u.top+s),null!=n.left&&(p.left=n.left-u.left+o),"using"in n?n.using.call(t,p):d.css(p)}},e.fn.extend({offset:function(n){if(arguments.length)return void 0===n?this:this.each(function(t){e.offset.setOffset(this,n,t)});var r,i,o=this[0],a={top:0,left:0},u=o&&o.ownerDocument;if(u)return r=u.documentElement,e.contains(r,o)?(typeof o.getBoundingClientRect!==t&&(a=o.getBoundingClientRect()),i=s(u),{top:a.top+i.pageYOffset-r.clientTop,left:a.left+i.pageXOffset-r.clientLeft}):a},position:function(){if(this[0]){var t,n,r=this[0],i={top:0,left:0};return"fixed"===e.css(r,"position")?n=r.getBoundingClientRect():(t=this.offsetParent(),n=this.offset(),e.nodeName(t[0],"html")||(i=t.offset()),i.top+=e.css(t[0],"borderTopWidth",!0),i.left+=e.css(t[0],"borderLeftWidth",!0)),{top:n.top-i.top-e.css(r,"marginTop",!0),left:n.left-i.left-e.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||u;t&&!e.nodeName(t,"html")&&"static"===e.css(t,"position");)t=t.offsetParent;return t||u})}}),e.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,r){var i="pageYOffset"===r;e.fn[t]=function(e){return n(this,function(e,t,n){var o=s(e);return void 0===n?o?o[r]:e[t]:void(o?o.scrollTo(i?window.pageXOffset:n,i?n:window.pageYOffset):e[t]=n)},t,e,arguments.length,null)}}),e.each(["top","left"],function(t,n){e.cssHooks[n]=o(a.pixelPosition,function(t,o){return o?(o=i(t,n),r.test(o)?e(t).position()[n]+"px":o):void 0})}),e});