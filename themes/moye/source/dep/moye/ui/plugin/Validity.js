/*! 2015 Baidu Inc. All Rights Reserved */
define("moye/plugin/Validity",["require"],function(require){function t(){this.states=[],this.stateIndex={},this.customMessage="",this.customValidState=null}return t.prototype.addState=function(t,e){var i=this.states,n=this.stateIndex[t];if(n){if(n===e)return;for(var r=0,s=i.length;s>r;r++)if(i[r]===n){i.splice(r,1);break}}i.push(e),this.stateIndex[t]=e},t.prototype.getState=function(t){return this.stateIndex[t]||null},t.prototype.getStates=function(){return this.states.slice()},t.prototype.getCustomMessage=function(){return this.customMessage},t.prototype.setCustomMessage=function(t){this.customMessage=t},t.prototype.setCustomValidState=function(t){this.customValidState=t},t.prototype.isValid=function(){for(var t=this.getStates(),e=t.length-1;e>=0;e--)if(!t[e].getState())return!1;return!0},t.prototype.getValidState=function(){return this.customValidState||(this.isValid()?"valid":"invalid")},t});