<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiError extends Error {
    constructor(statusCode, message, stack = '') {
        super(message);
        this.statusCode = statusCode;
        if (stack)
            this.stack = stack;
        else
            Error.captureStackTrace(this, this.constructor);
    }
=======
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class ApiError extends Error {
  constructor(statusCode, message, stack = '') {
    super(message);
    this.statusCode = statusCode;
    if (stack) this.stack = stack;
    else Error.captureStackTrace(this, this.constructor);
  }
>>>>>>> dev-borhan
}
exports.default = ApiError;
