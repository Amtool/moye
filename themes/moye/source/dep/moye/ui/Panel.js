/*! 2015 Baidu Inc. All Rights Reserved */
define("moye/Panel",["require","./Control","./painter"],function(require){var t=require("./Control"),e=require("./painter"),i=t.extend({type:"Panel",repaint:e.createRepaint(t.prototype.repaint,{name:"content",paint:function(t,e){var i=this.helper;if(null!=e)i.disposeChildren(),this.main.innerHTML=e;i.initChildren()}}),enable:function(){this.$parent(),this.helper.enableChildren()},disable:function(){this.$parent(),this.helper.disableChildren()},setContent:function(t){this.set("content",t)}});return i});