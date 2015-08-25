/*! 2015 Baidu Inc. All Rights Reserved */
define("moye/Select",["require","jquery","./lib","./Control","./Popup","./painter"],function(require){var t=require("jquery"),e=require("./lib"),i=require("./Control"),s=require("./Popup"),n=i.extend({type:"Select",options:{maxLength:16,ellipsis:"...",columns:1,selectedClass:"selected",datasource:[],valueUseIndex:!1,emptyText:"请选择",mode:"click",adapter:{toOption:function(t){return t},toLabel:function(t){return t.name}},indicator:{normal:"&#xe604;",expanded:"&#xe603;"}},init:function(t){this.$parent(t),this.datasource=this.datasource||[];var e=this.handleValue(this.value),i=this.getOption(e);this.value=i?this.handleValue(i.value):null},handleValue:function(t){return null==t?"":t+""},getOption:function(t){for(var e=0,i=this.datasource,s=i.length;s>e;++e){var n=this.adapter.toOption.call(this,i[e]);if(n.value===t)return n}return null},initStructure:function(){var e=["select"],i=+this.columns;if(i)e.push("select-columns"+i);var n=this.helper,a=this.popup=new s({main:n.createPart("popup"),target:this.main,triggers:[this.main],skin:e,mode:this.mode});a.on("click",t.proxy(this.onPopupClick,this)).on("show",t.proxy(this.onPopupShow,this)).on("hide",t.proxy(this.onPopupHide,this)).render(),n.addPartClasses("popup",a.main),this.addChild(a),this.main.innerHTML=""+n.getPartHTML("input","input","",{type:"hidden",value:this.value})+n.getPartHTML("label","a","",{href:"#"})+this.getIndicatorHTML()},initEvents:function(){this.delegate(this.main,"click",this.onMainClicked)},repaint:require("./painter").createRepaint(i.prototype.repaint,{name:["datasource"],paint:function(t,i){if(!e.isArray(i))i=(i+"").split(/\s*[,]\s*/);for(var s=[],n=!!this.valueUseIndex,a=0,r=i.length;r>a;++a){var h=i[a];if(!e.isObject(h)){var o=h.split(/\s*[:]\s*/);h={text:o[0]},h.value=o.length>1?o[1]:n?a:o[0]}s.push(this.getOptionHTML(h,a))}this.popup.main.innerHTML=s.join("")}},{name:["value"],paint:function(i,s){var n=this.helper,a=this.datasource||[],r=n.getPartClassName("option-selected"),h=n.getPrimaryClassName("option");s=this.handleValue(s);var o,l=e.reduce(t("."+h,this.popup.main),function(e,i,n){var h=t(i),o=this.adapter.toOption.call(this,a[n]);if(this.handleValue(o.value)!==s)h.removeClass(r);else h.addClass(r),e=o;return e},null,this),u=n.getPart("input");if(l)o=this.adapter.toLabel.call(this,l),u.value=this.handleValue(s),this.addState("selected");else o=this.emptyText,this.value=u.value="",this.removeState("selected");n.getPart("label").innerHTML=o}}),getIndicatorHTML:function(){var t=this.indicator;if(t===!1)return"";else return this.helper.getPartHTML("indicator","i",this.hasState("expanded")?this.indicator.expanded:this.indicator.normal)},getOptionHTML:function(t,e){return t=this.adapter.toOption.call(this,t,e),'<a href="#" class="'+this.helper.getPartClassName("option")+'" data-action="select" data-value="'+t.value+'" data-index="'+e+'">'+t.name+"</a>"},fill:function(t){this.set("datasource",t)},pick:function(t){var e=t.getAttribute("data-value");if(e!==this.handleValue(this.value))this.set("value",e),this.fire("change",{value:e})},getValue:function(t){var e=this.helper.getPart("input").value;return t?+e:e},setValue:function(t){return this.set("value",t),this},onPopupClick:function(t){var e=t.target;if("A"===e.tagName)t.preventDefault(),this.pick(e),this.popup.hide()},onPopupShow:function(t){if(this.isDisabled())return void t.preventDefault();if(this.fire(t),!t.isDefaultPrevented())this.addState("expanded"),this.helper.getPart("indicator").innerHTML=this.indicator.expanded},onPopupHide:function(t){if(this.fire(t),!t.isDefaultPrevented())this.removeState("expanded"),this.helper.getPart("indicator").innerHTML=this.indicator.normal},onMainClicked:function(t){t.preventDefault()},dispose:function(){this.undelegate(this.main,"click",this.onMainClicked),this.popup.destroy(),this.$parent()}});return n});