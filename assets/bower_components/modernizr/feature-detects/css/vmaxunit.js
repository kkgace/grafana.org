/*!
{
  "name": "CSS vmax unit",
  "property": "cssvmaxunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vmaxunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/glsee/JDsWQ/4/"
  }]
}
!*/
define(["Modernizr","docElement","testStyles","roundedEquals"],function(e,t,n,i){n("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}",function(n){var r=n.childNodes[1],o=n.childNodes[0],s=parseInt((o.offsetWidth-o.clientWidth)/2,10),a=t.clientWidth/100,c=t.clientHeight/100,l=parseInt(50*Math.max(a,c),10),u=parseInt((window.getComputedStyle?getComputedStyle(r,null):r.currentStyle).width,10);e.addTest("cssvmaxunit",i(l,u)||i(l,u-s))},2)});