const _toString = Object.prototype.toString;
const isType = (value, type) => _toString.call(value) === '[object '+type+']';

const isNull = value => isType(value, 'Null');
const isUndefined = value => isType(value, 'Undefined');

// string
function trim(value){
    if( String.prototype.trim ) return value.trim();
    return value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}
const isString = value => isType(value, 'String');
const isValidString = value => isString(value) && trim(value).length > 0;

// boolean
const isBoolean = value => isType(value, 'Boolean');
const isTure = value => isBoolean(value) && value === true;
const isFalse = value => isBoolean(value) && value === false;

// number
const maxNumber = Math.pow(2, 53) - 1;
const isNumber = value => isType(value, 'Number');
const isValidNumber = value => isNumber(value) && isFinite(value) && value < maxNumber && value > -maxNumber;

// function
const isAsyncFunction = value => isType(value, 'AsyncFunction');
const isFunction = value => isType(value, 'Function') || isAsyncFunction(value);

// array
const isArray = value => isType(value, 'Array');
const isArrayBuffer = value => isType(value, 'ArrayBuffer');
const isValidArray = value => isArray(value) && value.length > 0;

// object
const isObject = value => isType(value, 'Object');
const isValidObject = value => isObject(value) && Object.keys(value).length > 0;

// date
const isDate = value => isType(value, 'Date');
// error
const isError = value => isType(value, 'Error');
//map
const isMap = value => isType(value, 'Map');
//set
const isSet = value => isType(value, 'Set');
//promise
const isPromise = value => isType(value, 'Promise');
//symbol
const isSymbol = value => isType(value, 'Symbol');
// weakMap
const isWeakMap = value => isType(value, 'WeakMap');
// weakSet
const isWeakSet = value => isType(value, 'WeakSet');



module.exports = {
    isNull,
    isUndefined,
    isString,
    isValidString,
    isBoolean,
    isTure,
    isFalse,
    isNumber,
    isValidNumber,
    isFunction,
    isAsyncFunction,
    isArray,
    isArrayBuffer,
    isValidArray,
    isObject,
    isValidObject,
    isDate,
    isError,
    isMap,
    isSet,
    isPromise,
    isSymbol,
    isWeakMap,
    isWeakSet,
}