/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/safe-buffer";
exports.ids = ["vendor-chunks/safe-buffer"];
exports.modules = {

/***/ "(ssr)/./node_modules/safe-buffer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/safe-buffer/index.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ var buffer = __webpack_require__(/*! buffer */ \"buffer\");\nvar Buffer = buffer.Buffer;\n// alternative to using Object.keys for old browsers\nfunction copyProps(src, dst) {\n    for(var key in src){\n        dst[key] = src[key];\n    }\n}\nif (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {\n    module.exports = buffer;\n} else {\n    // Copy properties from require('buffer')\n    copyProps(buffer, exports);\n    exports.Buffer = SafeBuffer;\n}\nfunction SafeBuffer(arg, encodingOrOffset, length) {\n    return Buffer(arg, encodingOrOffset, length);\n}\nSafeBuffer.prototype = Object.create(Buffer.prototype);\n// Copy static methods from Buffer\ncopyProps(Buffer, SafeBuffer);\nSafeBuffer.from = function(arg, encodingOrOffset, length) {\n    if (typeof arg === \"number\") {\n        throw new TypeError(\"Argument must not be a number\");\n    }\n    return Buffer(arg, encodingOrOffset, length);\n};\nSafeBuffer.alloc = function(size, fill, encoding) {\n    if (typeof size !== \"number\") {\n        throw new TypeError(\"Argument must be a number\");\n    }\n    var buf = Buffer(size);\n    if (fill !== undefined) {\n        if (typeof encoding === \"string\") {\n            buf.fill(fill, encoding);\n        } else {\n            buf.fill(fill);\n        }\n    } else {\n        buf.fill(0);\n    }\n    return buf;\n};\nSafeBuffer.allocUnsafe = function(size) {\n    if (typeof size !== \"number\") {\n        throw new TypeError(\"Argument must be a number\");\n    }\n    return Buffer(size);\n};\nSafeBuffer.allocUnsafeSlow = function(size) {\n    if (typeof size !== \"number\") {\n        throw new TypeError(\"Argument must be a number\");\n    }\n    return buffer.SlowBuffer(size);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2FmZS1idWZmZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQWtGLEdBQ2xGLHlDQUF5QyxHQUN6QyxJQUFJQSxTQUFTQyxtQkFBT0EsQ0FBQztBQUNyQixJQUFJQyxTQUFTRixPQUFPRSxNQUFNO0FBRTFCLG9EQUFvRDtBQUNwRCxTQUFTQyxVQUFXQyxHQUFHLEVBQUVDLEdBQUc7SUFDMUIsSUFBSyxJQUFJQyxPQUFPRixJQUFLO1FBQ25CQyxHQUFHLENBQUNDLElBQUksR0FBR0YsR0FBRyxDQUFDRSxJQUFJO0lBQ3JCO0FBQ0Y7QUFDQSxJQUFJSixPQUFPSyxJQUFJLElBQUlMLE9BQU9NLEtBQUssSUFBSU4sT0FBT08sV0FBVyxJQUFJUCxPQUFPUSxlQUFlLEVBQUU7SUFDL0VDLE9BQU9DLE9BQU8sR0FBR1o7QUFDbkIsT0FBTztJQUNMLHlDQUF5QztJQUN6Q0csVUFBVUgsUUFBUVk7SUFDbEJBLGNBQWMsR0FBR0M7QUFDbkI7QUFFQSxTQUFTQSxXQUFZQyxHQUFHLEVBQUVDLGdCQUFnQixFQUFFQyxNQUFNO0lBQ2hELE9BQU9kLE9BQU9ZLEtBQUtDLGtCQUFrQkM7QUFDdkM7QUFFQUgsV0FBV0ksU0FBUyxHQUFHQyxPQUFPQyxNQUFNLENBQUNqQixPQUFPZSxTQUFTO0FBRXJELGtDQUFrQztBQUNsQ2QsVUFBVUQsUUFBUVc7QUFFbEJBLFdBQVdOLElBQUksR0FBRyxTQUFVTyxHQUFHLEVBQUVDLGdCQUFnQixFQUFFQyxNQUFNO0lBQ3ZELElBQUksT0FBT0YsUUFBUSxVQUFVO1FBQzNCLE1BQU0sSUFBSU0sVUFBVTtJQUN0QjtJQUNBLE9BQU9sQixPQUFPWSxLQUFLQyxrQkFBa0JDO0FBQ3ZDO0FBRUFILFdBQVdMLEtBQUssR0FBRyxTQUFVYSxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUTtJQUMvQyxJQUFJLE9BQU9GLFNBQVMsVUFBVTtRQUM1QixNQUFNLElBQUlELFVBQVU7SUFDdEI7SUFDQSxJQUFJSSxNQUFNdEIsT0FBT21CO0lBQ2pCLElBQUlDLFNBQVNHLFdBQVc7UUFDdEIsSUFBSSxPQUFPRixhQUFhLFVBQVU7WUFDaENDLElBQUlGLElBQUksQ0FBQ0EsTUFBTUM7UUFDakIsT0FBTztZQUNMQyxJQUFJRixJQUFJLENBQUNBO1FBQ1g7SUFDRixPQUFPO1FBQ0xFLElBQUlGLElBQUksQ0FBQztJQUNYO0lBQ0EsT0FBT0U7QUFDVDtBQUVBWCxXQUFXSixXQUFXLEdBQUcsU0FBVVksSUFBSTtJQUNyQyxJQUFJLE9BQU9BLFNBQVMsVUFBVTtRQUM1QixNQUFNLElBQUlELFVBQVU7SUFDdEI7SUFDQSxPQUFPbEIsT0FBT21CO0FBQ2hCO0FBRUFSLFdBQVdILGVBQWUsR0FBRyxTQUFVVyxJQUFJO0lBQ3pDLElBQUksT0FBT0EsU0FBUyxVQUFVO1FBQzVCLE1BQU0sSUFBSUQsVUFBVTtJQUN0QjtJQUNBLE9BQU9wQixPQUFPMEIsVUFBVSxDQUFDTDtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0dXBjcm93ZGZ1bmRpbmcvLi9ub2RlX21vZHVsZXMvc2FmZS1idWZmZXIvaW5kZXguanM/Y2YyZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgc2FmZS1idWZmZXIuIE1JVCBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vZGUvbm8tZGVwcmVjYXRlZC1hcGkgKi9cbnZhciBidWZmZXIgPSByZXF1aXJlKCdidWZmZXInKVxudmFyIEJ1ZmZlciA9IGJ1ZmZlci5CdWZmZXJcblxuLy8gYWx0ZXJuYXRpdmUgdG8gdXNpbmcgT2JqZWN0LmtleXMgZm9yIG9sZCBicm93c2Vyc1xuZnVuY3Rpb24gY29weVByb3BzIChzcmMsIGRzdCkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgZHN0W2tleV0gPSBzcmNba2V5XVxuICB9XG59XG5pZiAoQnVmZmVyLmZyb20gJiYgQnVmZmVyLmFsbG9jICYmIEJ1ZmZlci5hbGxvY1Vuc2FmZSAmJiBCdWZmZXIuYWxsb2NVbnNhZmVTbG93KSB7XG4gIG1vZHVsZS5leHBvcnRzID0gYnVmZmVyXG59IGVsc2Uge1xuICAvLyBDb3B5IHByb3BlcnRpZXMgZnJvbSByZXF1aXJlKCdidWZmZXInKVxuICBjb3B5UHJvcHMoYnVmZmVyLCBleHBvcnRzKVxuICBleHBvcnRzLkJ1ZmZlciA9IFNhZmVCdWZmZXJcbn1cblxuZnVuY3Rpb24gU2FmZUJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuU2FmZUJ1ZmZlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJ1ZmZlci5wcm90b3R5cGUpXG5cbi8vIENvcHkgc3RhdGljIG1ldGhvZHMgZnJvbSBCdWZmZXJcbmNvcHlQcm9wcyhCdWZmZXIsIFNhZmVCdWZmZXIpXG5cblNhZmVCdWZmZXIuZnJvbSA9IGZ1bmN0aW9uIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuU2FmZUJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgdmFyIGJ1ZiA9IEJ1ZmZlcihzaXplKVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGJ1Zi5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgIH0gZWxzZSB7XG4gICAgICBidWYuZmlsbChmaWxsKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBidWYuZmlsbCgwKVxuICB9XG4gIHJldHVybiBidWZcbn1cblxuU2FmZUJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuICByZXR1cm4gQnVmZmVyKHNpemUpXG59XG5cblNhZmVCdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHJldHVybiBidWZmZXIuU2xvd0J1ZmZlcihzaXplKVxufVxuIl0sIm5hbWVzIjpbImJ1ZmZlciIsInJlcXVpcmUiLCJCdWZmZXIiLCJjb3B5UHJvcHMiLCJzcmMiLCJkc3QiLCJrZXkiLCJmcm9tIiwiYWxsb2MiLCJhbGxvY1Vuc2FmZSIsImFsbG9jVW5zYWZlU2xvdyIsIm1vZHVsZSIsImV4cG9ydHMiLCJTYWZlQnVmZmVyIiwiYXJnIiwiZW5jb2RpbmdPck9mZnNldCIsImxlbmd0aCIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsIlR5cGVFcnJvciIsInNpemUiLCJmaWxsIiwiZW5jb2RpbmciLCJidWYiLCJ1bmRlZmluZWQiLCJTbG93QnVmZmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/safe-buffer/index.js\n");

/***/ })

};
;