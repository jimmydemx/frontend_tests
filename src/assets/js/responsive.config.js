import Vue from "vue";

class WindowSize {
    constructor () {
        Vue.util.defineReactive(this, "windowsize", document.documentElement.clientWidth);

        document.addEventListener("DOMContentLoaded", () => {
            window.onresize = () => {
                this.windowsize = document.documentElement.clientWidth;
                // console.log(this.windowsize);
                // return WindowSize;
            };
        });
    }
}

Vue.prototype.$WindowSize = new WindowSize();
