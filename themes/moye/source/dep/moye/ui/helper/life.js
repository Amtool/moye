/*! 2015 Baidu Inc. All Rights Reserved */
define("moye/helper/life",["require","../main","../Context"],function(require){var t=require("../main"),e=require("../Context"),i={NEW:0,INITED:1,RENDERED:2,DISPOSED:4};return{isInStage:function(t){if(null==i[t])throw new Error("Invalid life cycle stage: "+t);return this.stage===i[t]},changeStage:function(t){if(null===i[t])throw new Error("Invalid life cycle stage: "+t);return this.stage=i[t],this},initContext:function(){var i=this.control,s=i.context;if(!e.isContext(s))s=e.get(s)||t.getContext();return i.setContext(s),this},dispose:function(){}}});