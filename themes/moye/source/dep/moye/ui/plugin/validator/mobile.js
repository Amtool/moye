/*! 2015 Baidu Inc. All Rights Reserved */
define("moye/plugin/validator/mobile",["require","../ValidityState","../ValidateRule"],function(require){var t=require("../ValidityState"),e=require("../ValidateRule"),i=/^1\d{10}$/;e.register("mobile",{message:{invalid:"!{title}不符合手机号码格式"},check:function(e,n){var r=!e||i.test(e);return new t(r,this.getMessage(n,r))}})});