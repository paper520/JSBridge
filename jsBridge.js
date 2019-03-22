(function (undefined) {

  "use strict";

  // 回调函数集合
  var responseCallbacks = {};

  // 本地注册的方法集合
  var messageHandlers = {};

  // 辅助变量(可以无视的部分)
  var uniqueId = 0;

  // 用以触发scheme的iframe
  var messagingIframe = document.createElement('iframe');
  messagingIframe.style.display = 'none';
  document.documentElement.appendChild(messagingIframe);

  window.jsBridge = {

    // H5调用，通知原生调用对应的api
    "callHandler": function (handlerName, data, callback) {

      var callback_id = "no-callback";

      // 判断是否有回调函数
      if (typeof callback === 'function') {

        // 生成一个回调函数id
        // 并将id和对应回调添加进入回调函数集合responseCallbacks中
        callback_id = "callback_" + (uniqueId++) + "_" + new Date().valueOf();
        responseCallbacks[callback_id] = callback;
      }

      // 触发scheme
      messagingIframe.src = "webviewjsscheme:" + callback_id + "/" + handlerName + "?" + data;

    },

    // H5调用，注册一些方法供原生调用
    "registerHandler": function (handlerName, handler) {

    },

    // 原生调用，通过这个方法回调或调用H5方法
    // messageJSON是一个json，不同的类型有不同的key，具体有下面二种：
    // 类型一：回调（responseId,responseDate）
    // 类型二：主动调用（handlerName,data,callbackId）
    "_handleMessageFromNative": function (messageJSON) {

    }
  };

})();