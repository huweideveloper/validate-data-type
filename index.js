(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isWeakSet = exports.isWeakMap = exports.isSymbol = exports.isPromise = exports.isSet = exports.isMap = exports.isError = exports.isDate = exports.isEmptyObject = exports.isValidObject = exports.isObject = exports.isEmptyArray = exports.isValidArray = exports.isArrayBuffer = exports.isArray = exports.isAsyncFunction = exports.isFunction = exports.isGeneratorFunction = exports.isGeneralFunction = exports.isValidNumber = exports.isNumber = exports.isFalse = exports.isTure = exports.isBoolean = exports.isEmptyString = exports.isValidString = exports.isString = exports.isUndefined = exports.isNull = void 0;
    var _toString = Object.prototype.toString;
    var isType = function (value, type) { return _toString.call(value) === '[object ' + type + ']'; };
    var isNull = function (value) { return isType(value, 'Null'); };
    exports.isNull = isNull;
    var isUndefined = function (value) { return isType(value, 'Undefined'); };
    exports.isUndefined = isUndefined;
    // string
    function trim(value) {
        if (String.prototype.trim)
            { return value.trim(); }
        return value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    }
    var isString = function (value) { return isType(value, 'String'); };
    exports.isString = isString;
    var isValidString = function (value) { return isString(value) && trim(value).length > 0; };
    exports.isValidString = isValidString;
    var isEmptyString = function (value) { return isString(value) && trim(value).length === 0; };
    exports.isEmptyString = isEmptyString;
    // boolean
    var isBoolean = function (value) { return isType(value, 'Boolean'); };
    exports.isBoolean = isBoolean;
    var isTure = function (value) { return isBoolean(value) && value === true; };
    exports.isTure = isTure;
    var isFalse = function (value) { return isBoolean(value) && value === false; };
    exports.isFalse = isFalse;
    // number
    var MaxNumber = Math.pow(2, 53) - 1;
    var isNumber = function (value) { return isType(value, 'Number'); };
    exports.isNumber = isNumber;
    var isValidNumber = function (value) { return isNumber(value) && isFinite(value) && value < MaxNumber && value > -MaxNumber; };
    exports.isValidNumber = isValidNumber;
    // function
    var isGeneralFunction = function (value) { return isType(value, 'Function'); };
    exports.isGeneralFunction = isGeneralFunction;
    var isAsyncFunction = function (value) { return isType(value, 'AsyncFunction'); };
    exports.isAsyncFunction = isAsyncFunction;
    var isGeneratorFunction = function (value) { return isType(value, 'GeneratorFunction'); };
    exports.isGeneratorFunction = isGeneratorFunction;
    var isFunction = function (value) { return _toString.call(value).toLowerCase().includes("function"); };
    exports.isFunction = isFunction;
    // array
    var isArray = function (value) { return isType(value, 'Array'); };
    exports.isArray = isArray;
    var isArrayBuffer = function (value) { return isType(value, 'ArrayBuffer'); };
    exports.isArrayBuffer = isArrayBuffer;
    var isValidArray = function (value) { return isArray(value) && value.length > 0; };
    exports.isValidArray = isValidArray;
    var isEmptyArray = function (value) { return isArray(value) && value.length === 0; };
    exports.isEmptyArray = isEmptyArray;
    // object
    var isObject = function (value) { return isType(value, 'Object'); };
    exports.isObject = isObject;
    var isValidObject = function (value) { return isObject(value) && Object.keys(value).length > 0; };
    exports.isValidObject = isValidObject;
    var isEmptyObject = function (value) { return isObject(value) && Object.keys(value).length === 0; };
    exports.isEmptyObject = isEmptyObject;
    // date
    var isDate = function (value) { return isType(value, 'Date'); };
    exports.isDate = isDate;
    // error
    var isError = function (value) { return isType(value, 'Error'); };
    exports.isError = isError;
    //map
    var isMap = function (value) { return isType(value, 'Map'); };
    exports.isMap = isMap;
    //set
    var isSet = function (value) { return isType(value, 'Set'); };
    exports.isSet = isSet;
    //promise
    var isPromise = function (value) { return isType(value, 'Promise'); };
    exports.isPromise = isPromise;
    //symbol
    var isSymbol = function (value) { return isType(value, 'Symbol'); };
    exports.isSymbol = isSymbol;
    // weakMap
    var isWeakMap = function (value) { return isType(value, 'WeakMap'); };
    exports.isWeakMap = isWeakMap;
    // weakSet
    var isWeakSet = function (value) { return isType(value, 'WeakSet'); };
    exports.isWeakSet = isWeakSet;

})));
