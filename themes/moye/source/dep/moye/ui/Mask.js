/*! 2015 Baidu Inc. All Rights Reserved */
define("moye/Mask",["require","jquery","./Control","./lib","./painter"],function(require){var t=require("jquery"),i=require("./Control"),e=require("./lib"),n={right:0,bottom:0,left:0,top:0},s=0,r=i.extend({type:"mask",options:{level:10},init:function(t){this.$parent(t),s++},initStructure:function(){var i=this.level;if(e.browser.ie6){var n=this.helper.getPartHTML("ie6frame","iframe","",{src:"about:blank",frameborder:"0",style:"z-index:"+(i-1)+";display:none;filter:alpha(opacity=0);"});this.ie6frame=t(n).appendTo(document.body).get(0)}t(this.main).appendTo(document.body).css("zIndex",i)},initEvents:function(){this.delegate(this.main,"click",this.onClick)},onClick:function(t){this.fire(t)},repaint:require("./painter").createRepaint(i.prototype.repaint,{name:["visible"],paint:function(i,s){if(!s)return t(this.ie6frame).hide(),void this.removeState("visible");var r,h=e.browser.ie,a=t(this.main);if(6===h)r=t(this.ie6frame).show(),e.fixed(r[0],n),e.fixed(a[0],n);if(9>h)setTimeout(function(){r&&r.toggleClass("shit"),a.toggleClass("shit")});this.addState("visible")}}),show:function(){return this.set("visible",!0),this},hide:function(){return this.set("visible",!1),this},dispose:function(){if(this.$parent(),t(this.main).remove(),this.ie6frame)t(this.ie6frame).remove();s--}});return r.create=function(t){return new r(t)},r});