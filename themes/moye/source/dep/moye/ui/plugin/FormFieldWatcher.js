/*! 2015 Baidu Inc. All Rights Reserved */
define("moye/plugin/FormFieldWatcher",["require","jquery","./Plugin","../lib"],function(require){var t=require("jquery"),e=require("./Plugin"),i=require("../lib"),n=e.extend({$class:"FormFieldWatcher",options:{eventTypes:["change","input"]},initialize:function(e){this.$parent(e),this.fireFieldChange=t.proxy(this.fireFieldChange,this)},activate:function(e){if(!this.isActivated())this.control=e,e.once("afterrender",t.proxy(this.bindEvents,this)),this.$parent()},inactivate:function(){if(this.isActivated()){var t=this.controls,e=this.fireFieldChange;if(t){var n=this.eventTypes;i.each(t,function(t){for(var i=n.length-1;i>=0;i--)t.un(n[i],e)})}this.controls=null,this.$parent()}},bindEvents:function(){var t=this.fireFieldChange,e=this.controls=this.control.getInputControls(),n=this.eventTypes;i.each(e,function(e){for(var i=n.length-1;i>=0;i--)e.on(n[i],t)})},fireFieldChange:function(t){this.control.fire("fieldchange",{target:t.target,originEvent:t})},dispose:function(){this.control=null,this.$parent()}});return n});