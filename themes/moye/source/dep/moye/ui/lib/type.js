/*! 2015 Baidu Inc. All Rights Reserved */
define("moye/lib/type",["require","jquery","./function","./array"],function(require){function t(t,e){return Object.prototype.toString.call(e).slice(8,-1)===t}var e=require("jquery"),i=require("./function"),n=require("./array"),exports={},s=["Null","Undefined","String","Array","Function","Number","Date","Object","Boolean","RegExp"];return n.each(s,function(e){exports["is"+e]=i.curry(t,e)}),exports.isNaN=function(t){return Number.isNaN(t)},exports.isElement=function(t){return!(!t||1!==t.nodeType)},exports.isPromise=function(t){return t&&exports.isFunction(t.then)},exports.typeOf=function(t){return exports.isElement(t)?"element":e.type(t)},exports});