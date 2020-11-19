import axios from "axios";

//import router from "@main/smp/router"; 
import { Message, Notification } from "element-ui";
//import getVueConfig from "@main/smp/before/getVueConfig";
let webconfig = {};
// getVueConfig.getVueConfigInfo().then(ret => {
//   webconfig = ret;
// });
let _AXIOS = axios.create();

_AXIOS.interceptors.request.use(config => {
  const oldUrl = config.url;
  if (process.env.NODE_ENV === "development")
    //区分生产环境与开发环境
    config.url = "api" + config.url;

  /**
   * @mark :识别isInternet为true，则为系统外部接口，去除api代理功能
   */
  if (config.isInternet) {
    config.url = oldUrl;
    config.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    delete config.isInternet;
    // delete config.headers.access_token
  }

  //是否开启打印
  if (webconfig.CONSOLE_REQUEST_ENABLE) {
    console.group("Request:");
    console.log("url:", config.url);
    console.info("method:", config.method);
    console.info("params:", config.params);
    console.groupEnd();
  }
  return config;
});

_AXIOS.interceptors.response.use(
  response => {
    if (webconfig.CONSOLE_RESPONSE_ENABLE) {
      //是否开启打印
      console.group("Response:");
      console.log(response);
      console.groupEnd();
    }
    let res = response;
    if (
      (res.data && res.data.success) ||
      (res.data && res.data.status) ||
      (res.data && res.data.retCode != undefined)
    ) {
      return res;
    } else {
      if (res.data) {
        Message({
          showClose: true,
          message: res.data.msg,
          type: "error"
        });
      }
    }
  },
  err => {
    let response = err.response;
    switch (response.status) {
      case 401:
        TimeOut(`登录超时，请重新登录`);
        break;
      case 403:
        TimeOut(`未授权，请重新登录`);
        break;
      case 404:
        Message({
          showClose: true,
          message: "请求地址错误，请确认是否正确",
          type: "error"
        });
        break;
      case 500:
        // eslint-disable-next-line no-case-declarations
        let text = "服务器遇到错误，无法完成请求";
        console.log(2233, response);
        if (response && response.data && response.data.message)
          text = response.data.message;
        Message({
          showClose: true,
          message: text,
          type: "error"
        });
        break;
      case 501:
        Message({
          showClose: true,
          message: "服务器不具备完成请求的功能",
          type: "error"
        });
        break;
      case 502:
        Message({
          showClose: true,
          message: "网络连接错误，请重试",
          type: "error"
        });
        break;
      case 503:
        Message({
          showClose: true,
          message: "服务器目前无法使用（由于超载或停机维护）",
          type: "error"
        });
        break;
      case 504:
        Message({
          showClose: true,
          message: "请求超时，请重试",
          type: "error"
        });
        break;
      default:
        Message({
          showClose: true,
          message: "访问失败，请重试",
          type: "error"
        });
        break;
    }
    return Promise.reject(err);
  }
);

const TimeOut = text => {
  window.sessionStorage.clear();
  router.push("Login");
  Message({
    showClose: true,
    message: text,
    type: "warning"
  });
};

export default _AXIOS;
