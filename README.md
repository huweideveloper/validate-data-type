# type-data
Determine the type of JavaScript data


## Install

Install with [npm](https://www.npmjs.com/package/type-data)

```sh
  npm install --save type-data
```


## Usage

```js
import {isNull,isUndefined,isString,isBoolean,isNumber,isFunction,isAsyncFunction,isArray,isObject,isArrayBuffer,isDate,isError,isMap, isSet, isPromise,isSymbol,isWeakMap, isWeakSet, isValidString, isValidNumber, isValidArray, isValidObject} from 'type-data';
// or
// const { isNull,isUndefined,isString,isBoolean,isNumber,isFunction,isAsyncFunction,isArray,isObject,isArrayBuffer,isDate,isError,isMap, isSet, isPromise,isSymbol,isWeakMap, isWeakSet, isValidString, isValidNumber, isValidArray, isValidObject } =  require('type-data');


// isNull
console.log(isNull(null)); //true
console.log(isNull(undefined)); //false
console.log(isNull('')); //false
console.log(isNull(1)); //false


// isUndefined
console.log(isUndefined(undefined)); //true
console.log(isUndefined(null)); //false
console.log(isUndefined('')); //false
console.log(isUndefined(1)); //false

// isString
console.log(isString('')); //true
console.log(isString('123')); //true
console.log(isString(1)); //false
console.log(isString(true)); //false
console.log(isString({})); //false


// isValidString
console.log(isValidString('123')); //true
console.log(isValidString('')); //false
console.log(isValidString(' ')); //false


// isBoolean
console.log(isBoolean(false)); //true
console.log(isBoolean(true)); //true
console.log(isBoolean('123')); //false
console.log(isBoolean(1)); //false
console.log(isTure(true)); // true
console.log(isFalse(true)); // false

// isNumber
console.log(isNumber(1)); //true
console.log(isNumber('123')); //false
console.log(isNumber(false)); //false
console.log(isNumber({})); //false

// isValidNumber
console.log(isValidNumber(1)); //true
console.log(isValidNumber(1123123123123123123123123)); //false
console.log(isValidNumber(-1123123123123123123123123)); //false
console.log(isValidNumber(NaN)); //false
console.log(isValidNumber(Infinity)); //false


//isFunction
console.log(isFunction(function(){})); //true
console.log(isFunction('123')); //false
console.log(isFunction(1)); //false
console.log(isFunction({})); //false
console.log(isFunction([])); //false

// isAsyncFunction
console.log(isAsyncFunction(function(){})); //false
console.log(isAsyncFunction(async function(){})); //true

// isArray
console.log(isArray([])); //true
console.log(isArray([1,2,3])); //true
console.log(isArray('123')); //false
console.log(isArray(1)); //false
console.log(isArray({})); //false


// isValidArray
console.log(isValidArray([])); //false
console.log(isValidArray([1])); //true
console.log(isValidArray('123')); //false
console.log(isValidArray(1)); //false
console.log(isValidArray({})); //false


// isObject
console.log(isObject({})); //true
console.log(isObject({age:1})); //true
console.log(isObject('123')); //false
console.log(isObject(1)); //false
console.log(isObject([])); //false

// isValidObject
console.log(isValidObject({})); //false
console.log(isValidObject({age:1})); //true


// isArrayBuffer
console.log(isArrayBuffer(new ArrayBuffer())); //true
console.log(isArrayBuffer([])); //false
console.log(isArrayBuffer({age:1})); //false
console.log(isArrayBuffer([1,2,3])); //false

// isDate
console.log(isDate(new Date())); //true

// isError
console.log(isError(new Error())); //true

// isMap
console.log(isMap(new Map())); //true

//isSet
console.log(isSet(new Set())); //true

//isPromise
console.log(isPromise(new Promise((resolve)=> resolve()))); //true

//isSymbol
console.log(isSymbol(Symbol(2))); //true

//isWeakMap
console.log(isWeakMap(new WeakMap())); //true

//isWeakSet
console.log(isWeakSet(new WeakSet())); //true

```

## methods

| method | Parameter type | Return type |
| ------ | ------ | ------ |
| isNull | any | Boolean |
| isUndefined | any | Boolean |
| isString | any | Boolean |
| isValidString | any | Boolean |
| isBoolean | any | Boolean |
| isTure | any | Boolean |
| isFalse | any | Boolean |
| isNumber | any | Boolean |
| isValidNumber | any | Boolean |
| isFunction | any | Boolean |
| isAsyncFunction | any | Boolean |
| isArray | any | Boolean |
| isArrayBuffer | any | Boolean |
| isValidArray | any | Boolean |
| isObject | any | Boolean |
| isValidObject | any | Boolean |
| isDate | any | Boolean |
| isError | any | Boolean |
| isMap | any | Boolean |
| isSet | any | Boolean |
| isPromise | any | Boolean |
| isSymbol | any | Boolean |
| isWeakMap | any | Boolean |
| isWeakSet | any | Boolean |



## Test
More examples to see the test
```sh
  npm test
```
