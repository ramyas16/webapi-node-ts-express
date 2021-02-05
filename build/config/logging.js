"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getTimestamp = function () {
    return new Date().toISOString();
};
var info = function (namespace, message, object) {
    if (object) {
        console.log("[" + getTimestamp() + "][INFO][" + namespace + "] " + message + " ", object);
    }
    else {
        console.log("[" + getTimestamp() + "][INFO][" + namespace + "] " + message + " ");
    }
};
var warn = function (namespace, message, object) {
    if (object) {
        console.log("[" + getTimestamp() + "][WARN][" + namespace + "] " + message + " ", object);
    }
    else {
        console.log("[" + getTimestamp() + "][WARN][" + namespace + "] " + message + " ");
    }
};
var error = function (namespace, message, object) {
    if (object) {
        console.log("[" + getTimestamp() + "][ERROR][" + namespace + "] " + message + " ", object);
    }
    else {
        console.log("[" + getTimestamp() + "][ERROR][" + namespace + "] " + message + " ");
    }
};
var debug = function (namespace, message, object) {
    if (object) {
        console.log("[" + getTimestamp() + "][DEBUG][" + namespace + "] " + message + " ", object);
    }
    else {
        console.log("[" + getTimestamp() + "][DEBUG][" + namespace + "] " + message + " ");
    }
};
exports.default = {
    info: info,
    warn: warn,
    error: error,
    debug: debug
};
