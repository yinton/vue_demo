import Vue from 'vue'
import axios from 'axios';
import {Message} from "element-ui";
//import QS from "qs";

/**
 * Created by Jessi on 2019/8/7.
 * 对Axios的封装和扩展操作类
 */
export default class Http {
    constructor(router) {
        this.router = router;
        // 超时时间
        axios.defaults.timeout = 30000;//10秒
        // 环境的切换
        if (process.env.NODE_ENV === 'development') {
            axios.defaults.baseURL = '/kmlc';
        }
        else if (process.env.NODE_ENV === 'debug') {
            axios.defaults.baseURL = 'kmlc';
        }
        else if (process.env.NODE_ENV === 'production') {
            axios.defaults.baseURL = '/kmlc';
        }else{
            axios.defaults.baseURL = 'kmlc';
        }
        this._requestHook();
        this._responseHook();

        Vue.prototype.$http = {
            post: Http.postAction,
          //  postQs: Http.postQsAction,
            get: Http.getAction,
            put: Http.putAction,
            delete:Http.deleteAction
        };

    }
    /**
     * Get方法封装,统一传参格式 
     *
     * @param url [String]    请求地址
     * @param params [Object] 数据
     */
    static getAction(url = '', params = {}){
        return axios.get(url, {params});
    }
    /**
     * POST by body
     *
     * @param url [String]    请求地址
     * @param params [Object] 参数
     */
    static postAction(url = '', params = {}){
        return axios.post(url, params);
    }

    /**
     * POST by header，序列化参数到url
     *
     * @param url [String]    请求地址
     * @param params [Object] 参数
     * @param options [Object] 配置选项，详细参考axios官方配置
     */
    // static postQsAction(url = '', params = {}, options = {}) {
    //     return axios.post(url, QS.stringify(params, options));
    // }

    /**
     * get by header，序列化参数到url
     *
     * @param url [String]    请求地址
     * @param params [Object] 参数
     * @param options [Object] 配置选项，详细参考axios官方配置
     */
    static getQsAction(url = '', params = {}) {
        return axios({
            url: url,
            method: 'get',
            params: params
          })
        // return axios.get(url, QS.stringify(params, options));
    }

    /**
     * delete
     * @param url
     * @param params
     */
    static deleteAction(url,params){
        return axios({
            url: url,
            method: 'delete',
            params: params
        })
    }

    /**
     * put
     * @param url
     * @param params
     * @returns {AxiosPromise}
     */
    static putAction(url,params){
        return axios({
            url: url,
            method:'put',
            data: params
        })
    }

    /**
     * 请求拦截器
     * @private
     */
    _requestHook(){
        axios.interceptors.request.use(config => {
            // 配置content-Type
            // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            let token = window.sessionStorage.getItem('token') ||'';
            config.headers['X-Access-Token'] = token;
            return config;
        }, error => {
            return Promise.reject(error)
        });
    }

    /**
     * 响应拦截器
     * @private
     */
    _responseHook(){
        axios.interceptors.response.use(response => {
            console.log(response);
            return response.status === 200 ? Promise.resolve(response) : Promise.reject(response);
        }, error => {
            const code = error.response.status;
            switch (code) {
                case  400:
                    Message.error({
                        showClose: true,
                        message: "非法请求,服务器无法解析",
                    });
                    break;
                case 401:
                    Message.error({
                        showClose: true,
                        message: "授权认证失败,token过期或无效",
                    });
                    this._handleTimeoutAndAuth();
                    break;
                case 403:
                    Message.error({
                        showClose: true,
                        message: "未授权,服务器拒绝访问",
                    });
                    this._handleTimeoutAndAuth();
                    break;
                case 404:
                    Message.error({
                        showClose: true,
                        message: "请求地址错误",
                    });
                    break;
                case 405:
                    Message.error({
                        showClose: true,
                        message: "错误的请求方式",
                    });
                    break;
                case 501:
                    Message.error({
                        showClose: true,
                        message: "服务器不具备完成请求的功能",

                    });
                    break;
                case 502:
                    Message.error({
                        showClose: true,
                        message: "网络连接错误，请重试",
                    });
                    break;
                case 503:
                    Message.error({
                        showClose: true,
                        message: "服务器目前无法使用（由于超载或停机维护）",
                    });
                    break;
                case 504:
                    Message.error({
                        showClose: true,
                        message: "请求超时，请重试",
                    });
                    break;
                default:
                    Message.error({
                        showClose: true,
                        message: "访问失败，请重试",
                    });
                    break;
            }
            return Promise.reject(error)
        });
    }

    /**
     * 一旦token过期或超时清空localStorage并跳转到当前路由实例的login路由
     * @private
     */
    _handleTimeoutAndAuth(){
        setTimeout(()=>{
            window.localStorage.clear();
        },2000);
        this.router.push('login')
    }

}







