'use strict'

function _next(cin) {

    return alphaNumericIncrementer(cin);
};

function alphaNumericIncrementer(val) {
    var isAlphaNumeric = true;
    var val = val.toUpperCase();
    var regex = new RegExp("^[a-zA-Z0-9_]*$");
    if (val && val.length) {
        throw new Error("Please enter an alphanumeric value");
    }
    if (!regex.test(val)) {
        alert("Please enter any alphanumeric value");
        isAlphaNumeric = false;
        document.getElementById("result").innerText = '';
    }
    else {

        var index = val.length - 1;
        for (; index >= 0;) {
            if (String.fromCharCode(val.charCodeAt(index)) == '9') {
                val = val.substr(0, index) + '0' + val.substr(index + 1);
            }
            else if (String.fromCharCode(val.charCodeAt(index)) == 'Z') {
                val = val.substr(0, index) + 'A' + val.substr(index + 1);
            }
            else {
                var char = String.fromCharCode(val.charCodeAt(index) + 1);
                val = val.substr(0, index) + char + val.substr(index + 1);
                index = 0;
            }
            index = index - 1;
        }
    }
    if (isAlphaNumeric) {
        document.getElementById("result").innerText = val;
    }
};

var api = {
    next: _next
};

module.exports = api;