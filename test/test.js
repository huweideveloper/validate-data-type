
'use strict';
const {
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
} = require('../index');
const assert = require('assert');

describe('isNull', function() {
  it('test isNull', function() {
    assert.deepStrictEqual(isNull(null), true);
    assert.deepStrictEqual(isNull(undefined), false);
    assert.deepStrictEqual(isNull(''), false);
    assert.deepStrictEqual(isNull(1), false);
    assert.deepStrictEqual(isNull(false), false);
    assert.deepStrictEqual(isNull(true), false);
    assert.deepStrictEqual(isNull({}), false);
    assert.deepStrictEqual(isNull([]), false);
    assert.deepStrictEqual(isNull({age:1}), false);
    assert.deepStrictEqual(isNull([1,2,3]), false);
    assert.deepStrictEqual(isNull(function(){}), false);
  });
});

describe('isUndefined', function() {
  it('test isUndefined', function() {
    assert.deepStrictEqual(isUndefined(null), false);
    assert.deepStrictEqual(isUndefined(undefined), true);
    assert.deepStrictEqual(isUndefined(''), false);
    assert.deepStrictEqual(isUndefined(1), false);
    assert.deepStrictEqual(isUndefined(false), false);
    assert.deepStrictEqual(isUndefined(true), false);
    assert.deepStrictEqual(isUndefined({}), false);
    assert.deepStrictEqual(isUndefined([]), false);
    assert.deepStrictEqual(isUndefined({age:1}), false);
    assert.deepStrictEqual(isUndefined([1,2,3]), false);
    assert.deepStrictEqual(isUndefined(function(){}), false);
  });
});

describe('isString', function() {
  it('test isString', function() {
    assert.deepStrictEqual(isString(null), false);
    assert.deepStrictEqual(isString(undefined), false);
    assert.deepStrictEqual(isString(''), true);
    assert.deepStrictEqual(isString('123'), true);
    assert.deepStrictEqual(isString(1), false);
    assert.deepStrictEqual(isString(false), false);
    assert.deepStrictEqual(isString(true), false);
    assert.deepStrictEqual(isString({}), false);
    assert.deepStrictEqual(isString([]), false);
    assert.deepStrictEqual(isString({age:1}), false);
    assert.deepStrictEqual(isString([1,2,3]), false);
    assert.deepStrictEqual(isString(function(){}), false);
  });
});

describe('isBoolean', function() {
  it('test isBoolean', function() {
    assert.deepStrictEqual(isBoolean(null), false);
    assert.deepStrictEqual(isBoolean(undefined), false);
    assert.deepStrictEqual(isBoolean(''), false);
    assert.deepStrictEqual(isBoolean('123'), false);
    assert.deepStrictEqual(isBoolean(1), false);
    assert.deepStrictEqual(isBoolean(false), true);
    assert.deepStrictEqual(isBoolean(true), true);
    assert.deepStrictEqual(isBoolean({}), false);
    assert.deepStrictEqual(isBoolean([]), false);
    assert.deepStrictEqual(isBoolean({age:1}), false);
    assert.deepStrictEqual(isBoolean([1,2,3]), false);
    assert.deepStrictEqual(isBoolean(function(){}), false);
    assert.deepStrictEqual(isTure(true), true);
    assert.deepStrictEqual(isFalse(false), true);
    assert.deepStrictEqual(isTure(false), false);
    assert.deepStrictEqual(isFalse(true), false);
  });
});

describe('isNumber', function() {
  it('test isNumber', function() {
    assert.deepStrictEqual(isNumber(null), false);
    assert.deepStrictEqual(isNumber(undefined), false);
    assert.deepStrictEqual(isNumber(''), false);
    assert.deepStrictEqual(isNumber('123'), false);
    assert.deepStrictEqual(isNumber(1), true);
    assert.deepStrictEqual(isNumber(false), false);
    assert.deepStrictEqual(isNumber(true), false);
    assert.deepStrictEqual(isNumber({}), false);
    assert.deepStrictEqual(isNumber([]), false);
    assert.deepStrictEqual(isNumber({age:1}), false);
    assert.deepStrictEqual(isNumber([1,2,3]), false);
    assert.deepStrictEqual(isNumber(function(){}), false);
  });
});

describe('isFunction', function() {
  it('test isFunction', function() {
    assert.deepStrictEqual(isFunction(null), false);
    assert.deepStrictEqual(isFunction(undefined), false);
    assert.deepStrictEqual(isFunction(''), false);
    assert.deepStrictEqual(isFunction('123'), false);
    assert.deepStrictEqual(isFunction(1), false);
    assert.deepStrictEqual(isFunction(false), false);
    assert.deepStrictEqual(isFunction(true), false);
    assert.deepStrictEqual(isFunction({}), false);
    assert.deepStrictEqual(isFunction([]), false);
    assert.deepStrictEqual(isFunction({age:1}), false);
    assert.deepStrictEqual(isFunction([1,2,3]), false);
    assert.deepStrictEqual(isFunction(function(){}), true);
  });
});

describe('isAsyncFunction', function() {
  it('test isAsyncFunction', function() {
    assert.deepStrictEqual(isAsyncFunction(null), false);
    assert.deepStrictEqual(isAsyncFunction(undefined), false);
    assert.deepStrictEqual(isAsyncFunction(''), false);
    assert.deepStrictEqual(isAsyncFunction('123'), false);
    assert.deepStrictEqual(isAsyncFunction(1), false);
    assert.deepStrictEqual(isAsyncFunction(false), false);
    assert.deepStrictEqual(isAsyncFunction(true), false);
    assert.deepStrictEqual(isAsyncFunction({}), false);
    assert.deepStrictEqual(isAsyncFunction([]), false);
    assert.deepStrictEqual(isAsyncFunction({age:1}), false);
    assert.deepStrictEqual(isAsyncFunction([1,2,3]), false);
    assert.deepStrictEqual(isAsyncFunction(function(){}), false);
    assert.deepStrictEqual(isAsyncFunction(async function(){}), true);
  });
});

describe('isArray', function() {
  it('test isArray', function() {
    assert.deepStrictEqual(isArray(null), false);
    assert.deepStrictEqual(isArray(undefined), false);
    assert.deepStrictEqual(isArray(''), false);
    assert.deepStrictEqual(isArray('123'), false);
    assert.deepStrictEqual(isArray(1), false);
    assert.deepStrictEqual(isArray(false), false);
    assert.deepStrictEqual(isArray(true), false);
    assert.deepStrictEqual(isArray({}), false);
    assert.deepStrictEqual(isArray([]), true);
    assert.deepStrictEqual(isArray({age:1}), false);
    assert.deepStrictEqual(isArray([1,2,3]), true);
    assert.deepStrictEqual(isArray(function(){}), false);
  });
});


describe('isObject', function() {
  it('test isObject', function() {
    assert.deepStrictEqual(isObject(null), false);
    assert.deepStrictEqual(isObject(undefined), false);
    assert.deepStrictEqual(isObject(''), false);
    assert.deepStrictEqual(isObject('123'), false);
    assert.deepStrictEqual(isObject(1), false);
    assert.deepStrictEqual(isObject(false), false);
    assert.deepStrictEqual(isObject(true), false);
    assert.deepStrictEqual(isObject({}), true);
    assert.deepStrictEqual(isObject([]), false);
    assert.deepStrictEqual(isObject({age:1}), true);
    assert.deepStrictEqual(isObject([1,2,3]), false);
    assert.deepStrictEqual(isObject(function(){}), false);
  });
});

describe('isArrayBuffer', function() {
  it('test isArrayBuffer', function() {
    assert.deepStrictEqual(isArrayBuffer(null), false);
    assert.deepStrictEqual(isArrayBuffer(undefined), false);
    assert.deepStrictEqual(isArrayBuffer(''), false);
    assert.deepStrictEqual(isArrayBuffer('123'), false);
    assert.deepStrictEqual(isArrayBuffer(1), false);
    assert.deepStrictEqual(isArrayBuffer(false), false);
    assert.deepStrictEqual(isArrayBuffer(true), false);
    assert.deepStrictEqual(isArrayBuffer({}), false);
    assert.deepStrictEqual(isArrayBuffer([]), false);
    assert.deepStrictEqual(isArrayBuffer(new ArrayBuffer()), true);
    assert.deepStrictEqual(isArrayBuffer({age:1}), false);
    assert.deepStrictEqual(isArrayBuffer([1,2,3]), false);
    assert.deepStrictEqual(isArrayBuffer(function(){}), false);
  });
});

describe('isDate', function() {
  it('test isDate', function() {
    assert.deepStrictEqual(isDate(null), false);
    assert.deepStrictEqual(isDate(undefined), false);
    assert.deepStrictEqual(isDate(''), false);
    assert.deepStrictEqual(isDate('123'), false);
    assert.deepStrictEqual(isDate(1), false);
    assert.deepStrictEqual(isDate(false), false);
    assert.deepStrictEqual(isDate(true), false);
    assert.deepStrictEqual(isDate({}), false);
    assert.deepStrictEqual(isDate([]), false);
    assert.deepStrictEqual(isDate(new Date()), true);
  });
});


describe('isError', function() {
  it('test isError', function() {
    assert.deepStrictEqual(isError(null), false);
    assert.deepStrictEqual(isError(undefined), false);
    assert.deepStrictEqual(isError(''), false);
    assert.deepStrictEqual(isError('123'), false);
    assert.deepStrictEqual(isError(1), false);
    assert.deepStrictEqual(isError(false), false);
    assert.deepStrictEqual(isError(true), false);
    assert.deepStrictEqual(isError({}), false);
    assert.deepStrictEqual(isError([]), false);
    assert.deepStrictEqual(isError(new Error()), true);
  });
});


describe('isMap', function() {
  it('test isMap', function() {
    assert.deepStrictEqual(isMap(null), false);
    assert.deepStrictEqual(isMap(undefined), false);
    assert.deepStrictEqual(isMap(''), false);
    assert.deepStrictEqual(isMap('123'), false);
    assert.deepStrictEqual(isMap(1), false);
    assert.deepStrictEqual(isMap(false), false);
    assert.deepStrictEqual(isMap(true), false);
    assert.deepStrictEqual(isMap({}), false);
    assert.deepStrictEqual(isMap([]), false);
    assert.deepStrictEqual(isMap(new Map()), true);
  });
});


describe('isSet', function() {
  it('test isSet', function() {
    assert.deepStrictEqual(isSet(null), false);
    assert.deepStrictEqual(isSet(undefined), false);
    assert.deepStrictEqual(isSet(''), false);
    assert.deepStrictEqual(isSet('123'), false);
    assert.deepStrictEqual(isSet(1), false);
    assert.deepStrictEqual(isSet(false), false);
    assert.deepStrictEqual(isSet(true), false);
    assert.deepStrictEqual(isSet({}), false);
    assert.deepStrictEqual(isSet([]), false);
    assert.deepStrictEqual(isSet(new Set()), true);
  });
});


describe('isPromise', function() {
  it('test isPromise', function() {
    assert.deepStrictEqual(isPromise(null), false);
    assert.deepStrictEqual(isPromise(undefined), false);
    assert.deepStrictEqual(isPromise(''), false);
    assert.deepStrictEqual(isPromise('123'), false);
    assert.deepStrictEqual(isPromise(1), false);
    assert.deepStrictEqual(isPromise(false), false);
    assert.deepStrictEqual(isPromise(true), false);
    assert.deepStrictEqual(isPromise({}), false);
    assert.deepStrictEqual(isPromise([]), false);
    assert.deepStrictEqual(isPromise(new Promise((resolve)=> resolve())), true);
  });
});



describe('isSymbol', function() {
  it('test isSymbol', function() {
    assert.deepStrictEqual(isSymbol(null), false);
    assert.deepStrictEqual(isSymbol(undefined), false);
    assert.deepStrictEqual(isSymbol(''), false);
    assert.deepStrictEqual(isSymbol('123'), false);
    assert.deepStrictEqual(isSymbol(1), false);
    assert.deepStrictEqual(isSymbol(false), false);
    assert.deepStrictEqual(isSymbol(true), false);
    assert.deepStrictEqual(isSymbol({}), false);
    assert.deepStrictEqual(isSymbol([]), false);
    assert.deepStrictEqual(isSymbol(Symbol(2)), true);
  });
});

describe('isWeakMap', function() {
  it('test isWeakMap', function() {
    assert.deepStrictEqual(isWeakMap(null), false);
    assert.deepStrictEqual(isWeakMap(undefined), false);
    assert.deepStrictEqual(isWeakMap(''), false);
    assert.deepStrictEqual(isWeakMap('123'), false);
    assert.deepStrictEqual(isWeakMap(1), false);
    assert.deepStrictEqual(isWeakMap(false), false);
    assert.deepStrictEqual(isWeakMap(true), false);
    assert.deepStrictEqual(isWeakMap({}), false);
    assert.deepStrictEqual(isWeakMap([]), false);
    assert.deepStrictEqual(isWeakMap(new WeakMap()), true);
  });
});



describe('isWeakSet', function() {
  it('test isWeakSet', function() {
    assert.deepStrictEqual(isWeakSet(null), false);
    assert.deepStrictEqual(isWeakSet(undefined), false);
    assert.deepStrictEqual(isWeakSet(''), false);
    assert.deepStrictEqual(isWeakSet('123'), false);
    assert.deepStrictEqual(isWeakSet(1), false);
    assert.deepStrictEqual(isWeakSet(false), false);
    assert.deepStrictEqual(isWeakSet(true), false);
    assert.deepStrictEqual(isWeakSet({}), false);
    assert.deepStrictEqual(isWeakSet([]), false);
    assert.deepStrictEqual(isWeakSet(new WeakSet()), true);
  });
});


describe('isValidString', function() {
  it('test isValidString', function() {
    assert.deepStrictEqual(isValidString(null), false);
    assert.deepStrictEqual(isValidString(undefined), false);
    assert.deepStrictEqual(isValidString(''), false);
    assert.deepStrictEqual(isValidString(' '), false);
    assert.deepStrictEqual(isValidString('123'), true);
    assert.deepStrictEqual(isValidString(1), false);
    assert.deepStrictEqual(isValidString(false), false);
    assert.deepStrictEqual(isValidString(true), false);
    assert.deepStrictEqual(isValidString({}), false);
    assert.deepStrictEqual(isValidString([]), false);
  });
});



describe('isValidNumber', function() {
  it('test isValidNumber', function() {
    assert.deepStrictEqual(isValidNumber(null), false);
    assert.deepStrictEqual(isValidNumber(undefined), false);
    assert.deepStrictEqual(isValidNumber(''), false);
    assert.deepStrictEqual(isValidNumber(' '), false);
    assert.deepStrictEqual(isValidNumber('123'), false);
    assert.deepStrictEqual(isValidNumber(1), true);
    assert.deepStrictEqual(isValidNumber(1123123123123123123123123), false);
    assert.deepStrictEqual(isValidNumber(-1123123123123123123123123), false);
    assert.deepStrictEqual(isValidNumber(NaN), false);
    assert.deepStrictEqual(isValidNumber(Infinity), false);
    assert.deepStrictEqual(isValidNumber(false), false);
    assert.deepStrictEqual(isValidNumber(true), false);
    assert.deepStrictEqual(isValidNumber({}), false);
    assert.deepStrictEqual(isValidNumber([]), false);
  });
});



describe('isValidArray', function() {
  it('test isValidArray', function() {
    assert.deepStrictEqual(isValidArray(null), false);
    assert.deepStrictEqual(isValidArray(undefined), false);
    assert.deepStrictEqual(isValidArray(''), false);
    assert.deepStrictEqual(isValidArray(' '), false);
    assert.deepStrictEqual(isValidArray('123'), false);
    assert.deepStrictEqual(isValidArray(1), false);
    assert.deepStrictEqual(isValidArray(false), false);
    assert.deepStrictEqual(isValidArray(true), false);
    assert.deepStrictEqual(isValidArray({}), false);
    assert.deepStrictEqual(isValidArray([]), false);
    assert.deepStrictEqual(isValidArray([1]), true);
  });
});



describe('isValidObject', function() {
  it('test isValidObject', function() {
    assert.deepStrictEqual(isValidObject(null), false);
    assert.deepStrictEqual(isValidObject(undefined), false);
    assert.deepStrictEqual(isValidObject(''), false);
    assert.deepStrictEqual(isValidObject(' '), false);
    assert.deepStrictEqual(isValidObject('123'), false);
    assert.deepStrictEqual(isValidObject(1), false);
    assert.deepStrictEqual(isValidObject(false), false);
    assert.deepStrictEqual(isValidObject(true), false);
    assert.deepStrictEqual(isValidObject({}), false);
    assert.deepStrictEqual(isValidObject({age:1}), true);
    assert.deepStrictEqual(isValidObject([]), false);
    assert.deepStrictEqual(isValidObject([1]), false);
  });
});


