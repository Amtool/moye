/*! 2015 Baidu Inc. All Rights Reserved */
define("moye/ui/ScrollBar",["require","jquery","./lib","./Control"],function(require){var t=require("jquery"),e=require("./lib"),i=require("./Control"),s=e.browser.firefox?"DOMMouseScroll":"mousewheel",n=e.browser.ie<9?function(e){var i=t(document.body),s=function(t){t.preventDefault()};i[e?"on":"off"]("selectstart",s)}:function(e,i){t(document.body)[e?"addClass":"removeClass"](i)},r=i.extend({type:"ScrollBar",options:{panel:"",thumb:"",wheelspeed:.05,direction:"vertical",mode:"",preventWheelScroll:!1,autoThumbSize:!0,minThumbSize:30},init:function(i){this.$parent(i),this.curPos=0,this.bindEvents(privates),this.xAxis="horizontal"===opt.direction;var n=this.xAxis?"Width":"Height";if(this.offsetProp="offset"+n,this.clientProp="client"+n,this.scrollProp="scroll"+n,this.scrollDirection="scroll"+(this.xAxis?"Left":"Top"),this.posMode="position"===opt.mode,this.main=e.g(opt.main),!opt.panel)this.panel=t("."+privates.getClass.call(this,"panel"),this.main)[0];else this.panel=e.g(opt.panel);if(!opt.thumb)this.thumb=t("."+privates.getClass.call(this,"thumb"),this.main)[0];else this.thumb=e.g(opt.thumb);this.track=this.thumb.offsetParent;var r=this._bound;t(this.thumb).on("mousedown",r.onThumbdown),t(this.track).on("mouseup",r.onTrackUp),t(this.panel).on(s,r.onMouseWheel),t(this.main).on("mouseenter",r.onMainEnter).on("mouseleave",r.onMainLeave)},scrollTo:function(t){if("begin"===t)t=0;else if("end"===t)t=1;else if(t>1)t/=this.panelSize*(1-this.scrollRatio);else t=1*t||0;privates.setScrollPercent.call(this,t)},refresh:function(){this.panelSize=this.panel[this.scrollProp],this.scrollRatio=this.main[this.clientProp]/this.panelSize;var e=this.scrollRatio>=1?"addClass":"removeClass";t(this.main)[e](privates.getClass.call(this,"noscroll"));var i=this.track[this.clientProp];if(this.options.autoThumbSize&&this.scrollRatio<1){var s=Math.max(this.options.minThumbSize,this.scrollRatio*i);this.thumb.style[this.xAxis?"width":"height"]=s+"px"}return this.trackSize=i-this.thumb[this.offsetProp],this.scrollTo(this.curPos),this._disabled=this.scrollRatio>=1,this},render:function(){if(!this.options.main)throw new Error("invalid main");return this.refresh(),this},onThumbdown:function(e){if(!this._disabled)n(!0,privates.getClass.call(this,"noselect")),this.mouseStart=this.xAxis?e.pageX||e.clientX:e.pageY||e.clientY,this.thumbStart=parseInt(this.thumb.style[this.xAxis?"left":"top"],10)||0,t(document).on("mousemove",this._bound.onMousemove).on("mouseup",this._bound.onMouseup)},onMousemove:function(t){if(this.scrollRatio<1){var e=(this.xAxis?t.pageX||t.clientX:t.pageY||t.clientY)-this.mouseStart;this.thumbPos=Math.min(this.trackSize,Math.max(0,this.thumbStart+e)),privates.setScrollPercent.call(this,this.thumbPos/this.trackSize)}},onMouseup:function(){n(!1,privates.getClass.call(this,"noselect")),t(document).off("mousemove",this._bound.onMousemove).off("mouseup",this._bound.onMouseup)},onTrackUp:function(t){if(!this._disabled&&t.target===this.track){var e=Math.min(this.trackSize,this.xAxis?t.offsetX:t.offsetY);privates.setScrollPercent.call(this,e/this.trackSize)}},onMouseWheel:function(t){if(!this._disabled){var e=t.originalEvent||t,i=e.wheelDelta?e.wheelDelta/120:-(e.detail/3),s=i*this.options.wheelspeed;if(s*(1-this.scrollRatio)>2*this.scrollRatio)s=2*this.scrollRatio;var s=this.curPos-s;if(privates.setScrollPercent.call(this,s),this.options.preventWheelScroll||s>=.005&&.995>=s)t.preventDefault()}},onMainEnter:function(){t(this.main).addClass(privates.getClass.call(this,"over"))},onMainLeave:function(){t(this.main).removeClass(privates.getClass.call(this,"over"))},setScrollPercent:function(t){if(.005>t)t=0;else if(.005>1-t)t=1;var e=this.xAxis?"left":"top";this.thumb.style[e]=Math.round(t*this.trackSize)+"px";var i=Math.round(t*this.panelSize*(1-this.scrollRatio));if(this.posMode)this.panel.style[e]=-i+"px";else this.panel[this.scrollDirection]=i;this.curPos=t;var s={position:t};this.fire("change",s)},getClass:function(t){return t=t?"-"+t:"",this.options.prefix+t},setEnabled:function(e){var i=!e,s=i?"addClass":"removeClass";t(this.main)[s](privates.getClass.call(this,"disable")),this._disabled=i},enable:function(){this.setEnabled(!0)},disable:function(){this.setEnabled(!1)},dispose:function(){var e=this._bound;t(document.body).removeClass(privates.getClass.call(this,"noselect")),t(this.thumb).off("mousedown",e.onThumbdown),t(this.track).off("mouseup",e.onTrackUp),t(this.panel).off(s,e.onMouseWheel),t(document).off("mousemove",e.onMousemove).off("mouseup",e.onMouseup),t(this.main).off("mouseenter",e.onMainEnter).off("mouseleave",e.onMainLeave),this.main=this.panel=this.thumb=this.track=null,this.parent()}});return r});