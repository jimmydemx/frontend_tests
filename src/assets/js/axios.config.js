import axios from "axios";
import Vue from "vue";
import APIs from "@js/hiberus.api.js";
// set default URL address
axios.defaults.baseURL = "http://51.38.51.187:5050/api/v1/";

var HTTP = {};
// Array [signup,login...]

// console.log(Object.keys(APIs));
Object.keys(APIs).forEach(item => {
    /* API={
        method: "post",
        url: "/auth/sign-up"
    } */
    var API = APIs[item];
    var url = API.url;
    var method = API.method;
    var newParams;
    var res;

    HTTP[item] = async function (
        params,
        isFormData = false,
        config = {}
    ) {
        // form-data
        if (params && isFormData) {
            newParams = new FormData();
            for (const i in params) {
                newParams.append(i, params[i]);
            }
        } else {
            newParams = params;
        }

        if (method === "put" || method === "post" || method === "patch") {
            try {
                res = await axios[method](url, newParams, config);
            } catch (error) {
                res = error;
            }
        } else if (method === "delete" || method === "get") {
            config.params = newParams;
            try {
                res = await axios[method](url, config);
            } catch (error) {
                res = error;
            }
        }
        return res;
    };
});

//  interceptors all request will be first put in interceptors
axios.interceptors.request.use(config => {
    if (localStorage.getItem("accessToken")) {
        config.headers.Authorization = localStorage.getItem("accessToken");
        return config;
    }
}, (error) => {
    return Promise.reject(error);
});

//  interceptors all response will be first put in interceptors
//  sometimes data='', therefor return res directly
axios.interceptors.response.use((res) => {
    console.log("iterceptors.res", res);
    // dedice if status =200 or 204 or...
    if (res.data) {
        if (res.status === 401) {
            localStorage.removeItem("accessToken");
        }
        return res.data;
    } else {
        return res;
    }
}, (error) => {
    return Promise.reject(error.response);
});
Vue.prototype.$axios = axios;
Vue.prototype.$HTTP = HTTP;
