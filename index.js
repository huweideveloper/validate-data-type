const _toString = Object.prototype.toString;
const isType = (value, type) => _toString.call(value) === '[object '+type+']';
const isNull = value => isType(value, 'Null');
const isUndefined = value => isType(value, 'Undefined');
const isString = value => isType(value, 'String');
const isBoolean = value => isType(value, 'Boolean');
const isNumber = value => isType(value, 'Number');
const isFunction = value => isType(value, 'Function');
const isAsyncFunction = value => isType(value, 'AsyncFunction');
const isArray = value => isType(value, 'Array');
const isArrayBuffer = value => isType(value, 'ArrayBuffer');
const isObject = value => isType(value, 'Object');
const isDate = value => isType(value, 'Date');
const isError = value => isType(value, 'Error');
const isMap = value => isType(value, 'Map');
const isSet = value => isType(value, 'Set');
const isPromise = value => isType(value, 'Promise');
const isSymbol = value => isType(value, 'Symbol');
const isWeakMap = value => isType(value, 'WeakMap');
const isWeakSet = value => isType(value, 'WeakSet');

function trim(value){
    if( String.prototype.trim ) return value.trim();
    return value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}
const maxNumber = Math.pow(2, 53) - 1;
const isValidNumber = value => isNumber(value) && isFinite(value) && value < maxNumber && value > -maxNumber;
const isValidString = value => isString(value) && trim(value).length > 0;
const isValidArray = value => isArray(value) && value.length > 0;
const isValidObject = value => isObject(value) && Object.keys(value).length > 0;


module.exports = {
    isNull,
    isUndefined,
    isString,
    isBoolean,
    isNumber,
    isFunction,
    isAsyncFunction,
    isArray,
    isObject,
    isArrayBuffer,
    isDate,
    isError,
    isMap,
    isSet,
    isPromise,
    isSymbol,
    isWeakMap,
    isWeakSet,
    isValidString,
    isValidNumber,
    isValidArray,
    isValidObject,
}