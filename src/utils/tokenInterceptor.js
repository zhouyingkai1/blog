/**
 * 统一 header 过滤
 */
import kits from './kits'
export default {
  request: (config) => {
    if (!config.headers) {
      config.headers = {};
    }
    if (config.method == 'POST' && !config.isAddToken) {
      Object.assign(config.headers, {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }
    // const apgToken = kits.getCookies('apg-oa-token');
    // const apgUid = kits.getCookies('apg-oa-uid');
    // // 如果headers中已有apg-token和apg-uid,则不再覆盖
    // if (apgToken && apgUid && !config.headers['apg-oa-token'] && !config.headers['apg-oa-uid'] && !config.isAddToken) {
    //   Object.assign(config.headers, {
    //     'apg-oa-token': kits.getCookies('apg-oa-token'),
    //     'apg-oa-uid': kits.getCookies('apg-oa-uid')
    //   });
    // }
    return config;
  }
};