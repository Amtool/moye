/*! 2015 Baidu Inc. All Rights Reserved */
define("moye/ui/lib/dom",["require","./type","./object","./browser"],function(require){var t=require("./type"),e=require("./object"),i=require("./browser").browser;return{g:function(e){return t.isString(e)?document.getElementById(e):e},fixed:function(){function t(t){return"undefined"==typeof t}function n(t){return"%"===(t+"").slice(-1)}function s(t,e){var i=parseInt(t,10);return n(t)?e+"*"+i/100:i}function r(e,i,n,r){var a={},h=o[e],l="document.documentElement."+h.offset,u="document.documentElement."+h.client;if(!t(n)&&!t(r))a[h.coordinate]="eval("+l+"+"+s(n,u)+')+"px"',a[h.size]="eval("+u+"-"+s(n,u)+"-"+s(r,u)+')+"px"';else if(t(n)&&!t(r))a[h.coordinate]="eval("+l+"+"+u+"-"+s(i,u)+"-"+s(r,u)+')+"px"';else a[h.coordinate]="eval("+l+"+"+s(n,u)+')+"px"';return a}function a(t,i){var n=r("horizontal",i.width||t.offsetWidth,i.left,i.right),s=r("vertical",i.height||t.offsetHeight,i.top,i.bottom);for(var a in s)if(e.has(s,a))n[a]=s[a];return n}var o={horizontal:{offset:"scrollLeft",client:"clientWidth",coordinate:"left",size:"width"},vertical:{offset:"scrollTop",client:"clientHeight",coordinate:"top",size:"height"}},h=document.getElementsByTagName("html")[0];if(i.ie6)h.style.backgroundAttachment="fixed",h.style.backgroundImage="url(about:blank)";return h=null,function(t,n){if(i.ie6){t.style.position="absolute";var s=a(t,n);for(var r in s)if(e.has(s,r))t.style.setExpression(r,s[r])}}}()}});