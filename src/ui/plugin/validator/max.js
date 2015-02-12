/**
 * @file RequiredValidator
 * @author leon<lupengyu@baidu.com>
 */

define(function (require) {

    var ValidityState = require('../ValidityState');
    var ValidateRule = require('../ValidateRule');

    ValidateRule.register('max', {

        check: function (value, control) {
            var result = value < this.value;
            return new ValidityState(
                result,
                this.getMessage(control, result)
            );
        },

        message: {
            invalid: '!{title}不能超过!{value}'
        }

    });

});
