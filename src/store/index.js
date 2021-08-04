import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        screenWidth: document.documentElement.clientWidth, // Screen Width
        screenHeight: document.documentElement.clientHeight // SCrenn Height
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
});
