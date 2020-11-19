import _AXIOS from "./_axios";
export default {
  install(Vue) {
    // Vue.prototype.$axios = _AXIOS;
    Vue.prototype.$http = _AXIOS;
    Vue.prototype.$axios = {
      get: (url, data, options) => {
        let axiosOpt = {
          ...options,
          ...{
            method: "get",
            url: url,
            params: data
          }
        };
        return _AXIOS(axiosOpt);
      },
      post: (url, data, options) => {
        let axiosOpt = {
          ...options,
          ...{
            method: "post",
            url: url,
            data: data
          }
        };
        return _AXIOS(axiosOpt);
      }
    };
  }
};
