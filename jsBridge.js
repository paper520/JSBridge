(function (undefined) {

  "use strict";

  // 回调函数集合
  var responseCallbacks = {};

  // 本地注册的方法集合
  var messageHandlers = {};

  window.jsBridge = {

    // H5调用，通知原生调用对应的api
    "callHandler": function (handlerName, data, callback) {

    },

    // H5调用，注册一些方法供原生调用
    "registerHandler": function (handlerName, handler) {

    },

    // 原生调用，通过这个方法回调或调用H5方法
    "_handleMessageFromNative": function (messageJSON) {

    }
  };

})();