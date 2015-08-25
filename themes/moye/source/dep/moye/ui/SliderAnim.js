/*! 2015 Baidu Inc. All Rights Reserved */
define("moye/SliderAnim",["require","jquery","./lib"],function(require){var t=require("jquery"),i=require("./lib"),e=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)}}(),s=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(t){clearTimeout(t)}}(),n=i.browser.ie<9?function(t,i){if(1===i)t.style.filter="";else t.style.filter="alpha(opacity="+100*i+")"}:function(t,i){if(1===i)t.style.opacity="";else t.style.opacity=i},r=i.newClass({type:"SliderAnim",initialize:function(t,i){this.slider=t,this.options=i},switchTo:function(t,i){},isBusy:function(){return!0},enable:function(){},disable:function(){},refresh:function(){},dispose:function(){this.slider=null,this.options=null}});return r.easing={easing:function(t){return t*=2,1>t?.5*t*t:-0.5*(--t*(t-2)-1)},backIn:function(t){var i=1.70158;return t*t*((i+1)*t-i)},backOut:function(t){var i=1.70158;return(t-=1)*t*((i+1)*t+i)+1},backBoth:function(t){var i=1.70158;return t*=2,1>t?.5*(t*t*(((i*=1.525)+1)*t-i)):.5*((t-=2)*t*(((i*=1.525)+1)*t+i)+2)},linear:function(t){return t},bounce:function(t){if(1/2.75>t)return 7.5625*t*t;else if(2/2.75>t)return 7.5625*(t-=1.5/2.75)*t+.75;else if(2.5/2.75>t)return 7.5625*(t-=2.25/2.75)*t+.9375;return 7.5625*(t-=2.625/2.75)*t+.984375}},r.anims={},r.add=function(t,i){if(!this.anims[t])return this.anims[t]=i,!0;else return!1},r.TimeLine=r.extend({type:"TimeLine",initialize:function(i,e){this.$parent(i,e),this.slider=i,this.interval=e.interval||300,this.easingFn=r.easing[e.easing||"easing"],this.timeHandler=t.proxy(this.timeHandler,this)},beforeSwitch:function(t,i){},switchTo:function(t,i){if(this.beforeSwitch(t,i),this.startTime=new Date,!this.timer)this.timer=e(this.timeHandler)},timeHandler:function(){var t=new Date-this.startTime;if(t>=this.interval)this.tick(1),this.timer=0;else this.tick(t/this.interval),this.timer=e(this.timeHandler)},isBusy:function(){return!!this.timer},disable:function(){s(this.timer),this.timer=0},dispose:function(){this.disable(),this.slider=null},tick:function(t){}}),r.add("no",r.extend({type:"SliderAnimNo",switchTo:function(t){this.slider.stage.scrollLeft=this.slider.stageWidth*t}})),r.add("slide",r.TimeLine.extend({type:"SliderAnimSlide",initialize:function(t,i){this.$parent(t,i);var e=i.direction||"horizontal";this.yAxis="vertical"===e,t.helper.addPartClasses("stage-"+e),this.rollCycle=i.rollCycle||!1},beforeSwitch:function(i,e){var s=this.slider.stageWidth,n=this.slider.stageHeight,r=this.slider.capacity-1,a=t(this.slider.stage);if(this.rollCycle)if(!this.cycleNode)a.children().first().clone().appendTo(a),this.cycleNode=!0;if(this.yAxis){if(this.isBusy())this.curPos=a.scrollTop();else this.curPos=n*e;this.targetPos=n*i}else{if(this.isBusy())this.curPos=a.scrollLeft();else this.curPos=s*e;if(this.targetPos=s*i,this.rollCycle)if(0===i&&e===r)this.targetPos=s*(r+1);else if(i===r&&0===e&&!this.isBusy())this.curPos=s*(r+1)}},tick:function(t){var i=(this.targetPos-this.curPos)*this.easingFn(t),e=this.yAxis?"scrollTop":"scrollLeft";this.slider.stage[e]=this.curPos+i}})),r.add("opacity",r.TimeLine.extend({type:"SliderAnimOpacity",setOpacity:n,initialize:function(t,i){this.$parent(t,i),t.helper.addPartClasses("stage-opactiy")},beforeSwitch:function(e){var s=this.slider,n=s.helper,r=t(s.stage).children(),a=r.length;if(i.isUndefined(this.index))this.index=a-1;if(i.isUndefined(this.lastIndex))this.lastIndex=a-1;this.setOpacity(r[this.index],1),t(r[this.index]).removeClass(n.getPartClassName("top")),t(r[this.lastIndex]).removeClass(n.getPartClassName("cover")),t(r[this.index]).addClass(n.getPartClassName("cover")),this.lastIndex=this.index,t(r[this.index=e]).addClass(n.getPartClassName("top")),this.setOpacity(this.curElement=r[e],0)},tick:function(t){var i=this.easingFn(t);if(this.setOpacity(this.curElement,i),1===t)this.curElement=null},dispose:function(){this.curElement=null,this.$parent()}})),r});