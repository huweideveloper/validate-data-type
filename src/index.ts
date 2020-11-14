const _toString = Object.prototype.toString;
const isType = (value:any, type: string) : boolean => _toString.call(value) === '[object ' + type + ']';

const isNull = (value: any) : boolean => isType(value, 'Null');
const isUndefined = (value: any) : boolean => isType(value, 'Undefined');

// string
function trim(value: string) {
    if (!!String.prototype.trim) return value.trim();
    return value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}
const isString = (value: any) : boolean => isType(value, 'String');
const isValidString = (value: any) : boolean => isString(value) && trim(value).length > 0;
const isEmptyString = (value: any) : boolean => isString(value) && trim(value).length === 0;

// boolean
const isBoolean = (value: any) : boolean => isType(value, 'Boolean');
const isTrue = (value: any) : boolean => isBoolean(value) && value === true;
const isFalse = (value: any) : boolean => isBoolean(value) && value === false;

// number
const MaxNumber = Math.pow(2, 53) - 1;
const isNumber = (value: any) : boolean => isType(value, 'Number');
const isValidNumber = (value: any) : boolean => isNumber(value) && isFinite(value) && value < MaxNumber && value > -MaxNumber;

// function
const isGeneralFunction = (value: any) : boolean => isType(value, 'Function');
const isAsyncFunction = (value: any) : boolean => isType(value, 'AsyncFunction');
const isGeneratorFunction = (value: any) : boolean => isType(value, 'GeneratorFunction');
const isFunction = (value: any) : boolean => _toString.call(value).toLowerCase().includes("function");

// array
const isArray = (value: any) : boolean => isType(value, 'Array');
const isArrayBuffer = (value: any) : boolean => isType(value, 'ArrayBuffer');
const isValidArray = (value: any) : boolean => isArray(value) && value.length > 0;
const isEmptyArray = (value: any) : boolean => isArray(value) && value.length === 0;

// object
const isObject = (value: any) : boolean => isType(value, 'Object');
const isValidObject = (value: any) : boolean => isObject(value) && Object.keys(value).length > 0;
const isEmptyObject = (value: any) : boolean => isObject(value) && Object.keys(value).length === 0;

// date
const isDate = (value: any) : boolean => isType(value, 'Date');
// error
const isError = (value: any) : boolean => isType(value, 'Error');
//map
const isMap = (value: any) : boolean => isType(value, 'Map');
//set
const isSet = (value: any) : boolean => isType(value, 'Set');
//promise
const isPromise = (value: any) : boolean => isType(value, 'Promise');
//symbol
const isSymbol = (value: any) : boolean => isType(value, 'Symbol');
// weakMap
const isWeakMap = (value: any) : boolean => isType(value, 'WeakMap');
// weakSet
const isWeakSet = (value: any) : boolean => isType(value, 'WeakSet');



export {
    isNull,
    isUndefined,
    isString,
    isValidString,
    isEmptyString,
    isBoolean,
    isTrue,
    isFalse,
    isNumber,
    isValidNumber,
    isGeneralFunction,
    isGeneratorFunction,
    isFunction,
    isAsyncFunction,
    isArray,
    isArrayBuffer,
    isValidArray,
    isEmptyArray,
    isObject,
    isValidObject,
    isEmptyObject,
    isDate,
    isError,
    isMap,
    isSet,
    isPromise,
    isSymbol,
    isWeakMap,
    isWeakSet,
}