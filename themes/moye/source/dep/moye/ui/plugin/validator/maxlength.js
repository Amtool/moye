/*! 2015 Baidu Inc. All Rights Reserved */
define("moye/plugin/validator/maxlength",["require","../ValidityState","../ValidateRule"],function(require){var t=require("../ValidityState"),e=require("../ValidateRule");e.register("maxlength",{check:function(e,i){var n=this.maxLength,r=(e+"").length<=n;return new t(r,this.getMessage(i,r))},message:{invalid:"!{title}不能超过!{maxLength}"}})});