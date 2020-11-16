!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(
        ((n = "undefined" != typeof globalThis ? globalThis : n || self)[
          "validate-data-type"
        ] = {})
      );
})(this, function (n) {
  "use strict";
  var t = Object.prototype.toString,
    e = function (n, e) {
      return t.call(n) === "[object " + e + "]";
    };
  function r(n) {
    return String.prototype.trim
      ? n.trim()
      : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }
  var i = function (n) {
      return e(n, "String");
    },
    u = function (n) {
      return e(n, "Boolean");
    },
    o = Math.pow(2, 53) - 1,
    c = function (n) {
      return e(n, "Number");
    },
    f = function (n) {
      return e(n, "Array");
    },
    s = function (n) {
      return e(n, "Object");
    };
  (n.isArray = f),
    (n.isArrayBuffer = function (n) {
      return e(n, "ArrayBuffer");
    }),
    (n.isAsyncFunction = function (n) {
      return e(n, "AsyncFunction");
    }),
    (n.isBoolean = u),
    (n.isDate = function (n) {
      return e(n, "Date");
    }),
    (n.isEmptyArray = function (n) {
      return f(n) && 0 === n.length;
    }),
    (n.isEmptyObject = function (n) {
      return s(n) && 0 === Object.keys(n).length;
    }),
    (n.isEmptyString = function (n) {
      return i(n) && 0 === r(n).length;
    }),
    (n.isError = function (n) {
      return e(n, "Error");
    }),
    (n.isFalse = function (n) {
      return u(n) && !1 === n;
    }),
    (n.isFunction = function (n) {
      return t.call(n).toLowerCase().includes("function");
    }),
    (n.isGeneralFunction = function (n) {
      return e(n, "Function");
    }),
    (n.isGeneratorFunction = function (n) {
      return e(n, "GeneratorFunction");
    }),
    (n.isMap = function (n) {
      return e(n, "Map");
    }),
    (n.isNull = function (n) {
      return e(n, "Null");
    }),
    (n.isNumber = c),
    (n.isObject = s),
    (n.isPromise = function (n) {
      return e(n, "Promise");
    }),
    (n.isSet = function (n) {
      return e(n, "Set");
    }),
    (n.isString = i),
    (n.isSymbol = function (n) {
      return e(n, "Symbol");
    }),
    (n.isTrue = function (n) {
      return u(n) && !0 === n;
    }),
    (n.isUndefined = function (n) {
      return e(n, "Undefined");
    }),
    (n.isValidArray = function (n) {
      return f(n) && n.length > 0;
    }),
    (n.isValidNumber = function (n) {
      return c(n) && isFinite(n) && n < o && n > -o;
    }),
    (n.isValidObject = function (n) {
      return s(n) && Object.keys(n).length > 0;
    }),
    (n.isValidString = function (n) {
      return i(n) && r(n).length > 0;
    }),
    (n.isWeakMap = function (n) {
      return e(n, "WeakMap");
    }),
    (n.isWeakSet = function (n) {
      return e(n, "WeakSet");
    }),
    Object.defineProperty(n, "__esModule", { value: !0 });
});
