/*
 常用的工具集合
 */
;
'use strict';
const Cookies = require('cookies-js');

let kits = {
  userCookiesEexpires: 60 * 60 * 24 * 30,
  regex: { //基础正则
    userName: /(^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]+[^\s]*$)|(^0{0,1}1[1|2|3|4|5|6|7|8|9][0-9]{9}$)/,
    email: /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z])+[^\s]*$/,
    phone: /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/,
    mobile: /^0{0,1}1[1|2|3|4|5|6|7|8|9][0-9]{9}$/
  },
  /**
   * 获取浏览器可视区域高度
   * @returns {{width: *, height: *}}
   */
  viewAbleSize() {
    let $window = window;
    let attr = 'inner';

    if (!('innerWidth' in window)) {
      attr = 'client';
      $window = document.documentElement || document.body;
    }
    return {
      width: $window[attr + 'Width'],
      height: $window[attr + 'Height']
    };
  },
  /**
   * 获取顶级域名字符串
   * @returns {string}
   */
  getRootDomain() {
    let hostnameStr = location.hostname.split('.');
    let rootDomain = `.${hostnameStr.slice(hostnameStr.length - 2, hostnameStr.length).join('.')}`;
    let isIP = isNaN(parseInt(hostnameStr[0]));

    if (isIP) {
      return rootDomain == '.localhost' ? '' : rootDomain;
    } else {
      return location.hostname;
    }
  },
  /**
   * 设置 cookies
   */
  setCookies(name, value) {
    Cookies.set(name, value, {
      path: '/',
      domain: this.getRootDomain(),
      expires: this.userCookiesEexpires
    });
  },
  /**
   * 获取 cookies
   */
  getCookies(name) {
    return Cookies.get(name);
  },
  /**
   * 清除 cookies
   */
  clearCookies(name) {
    Cookies.set(name, '', {
      path: '/',
      domain: this.getRootDomain(),
      expires: 0
    });
  },
  /**
   * 获取当前url中个某个参数值
   */
  byHrefName(name) {
    let hrefReg = new RegExp('(\\?|&)' + name + '=([^&?]*)');
    return window.location.href.match(hrefReg) && window.location.href.match(hrefReg)[2];
  },
  /**
   * 获取元素页面绝对位置
   */
  getElementLeftTop(element) {
    let actualLeft = element.offsetLeft;
    let actualTop = element.offsetTop;
    let current = element.offsetParent;
    while (current !== null) {
      actualLeft += current.offsetLeft;
      actualTop += current.offsetTop;
      current = current.offsetParent;
    }
    return { left: actualLeft, top: actualTop };
  },

  getHashStringArgs() {
    let queryParam = location.search.replace(/\?/, '').split('&')
    let search = 'page'
    let queryObj = {}
    for (let i = 0; i < queryParam.length; i++) {
      let param = queryParam[i].split('=')
      queryObj[param[0]] = param[1]
    }
    return queryObj
  },
  debounce(func, wait, immediate) {

    var timeout, result;

    var debounced = function () {
      var context = this;
      var args = arguments;

      if (timeout) clearTimeout(timeout);
      if (immediate) {
        // 如果已经执行过，不再执行
        var callNow = !timeout;
        timeout = setTimeout(function () {
          timeout = null;
        }, wait)
        if (callNow) result = func.apply(context, args)
      }
      else {
        timeout = setTimeout(function () {
          func.apply(context, args)
        }, wait);
      }
      return result;
    };

    debounced.cancel = function () {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  },
  throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function () {
      previous = options.leading === false ? 0 : new Date().getTime();
      timeout = null;
      func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function () {
      var now = new Date().getTime();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
    };
    return throttled;
  }
};

module.exports = kits;
