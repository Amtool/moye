/*! 2015 Baidu Inc. All Rights Reserved */
define("moye/plugin/validator/email",["require","../ValidityState","../ValidateRule"],function(require){var t=require("../ValidityState"),e=require("../ValidateRule"),i=/^[\w\u4e00-\u9fa5._-]+@[\w\u4e00-\u9fa5]+\.[\w\u4e00-\u9fa5]+$/;e.register("email",{check:function(e,n){var r=!e||i.test(e);return new t(r,this.getMessage(n,r))},message:{invalid:"请填写正确的电子邮箱"}})});