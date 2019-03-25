(function (undefined) {

  "use strict";

  // 回调函数集合，原生调用了对应的api后会根据回调id调用回调函数
  var responseCallbacks = {};

  // 本地注册的方法集合
  var messageHandlers = {};

  // 运行方法队列，每次调用原生api时，会触发一次scheme，
  // 然后原生会通过_fetchQueue方法来获取运行方法队列
  var sendMessageQueue = [];

  // 这个flag控制原生调用本地方法是异步还是同步，默认true，异步
  var dispatchMessagesWithTimeoutSafety = true;

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



    // 原生调用，通过这个方法获取当前调用的api状况
    "_fetchQueue": function () {

    },

    // 原生调用，设置是否异步调用H5方法，默认为异步，调用这个方法后会变为同步
    "disableJavascriptAlertBoxSafetyTimeout": function () {

    },

    // 原生调用，通过这个方法回调或调用H5方法
    // messageJSON是一个json，不同的类型有不同的key，具体有下面二种：
    // 类型一：回调（responseId,responseDate）
    // 类型二：主动调用（handlerName,data,callbackId）
    "_handleMessageFromNative": function (messageJSON) {

    },

  };

})();