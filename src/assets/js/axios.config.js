import axios from "axios";
import Vue from "vue";

// set default URL address
axios.defaults.baseURL = "http://51.38.51.187:5050/api/v1/";

//  interceptors all request will be first put in interceptors
axios.interceptors.response.use((res) => {
    return res.data;
}, (error) => {
    return Promise.reject(error);
});

Vue.prototype.$axios = axios;
