import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        LoginState: false
    },
    mutations: {
        ChangeLoginState (state) {
            state.LoginState = !state.LoginState;
        }
    },
    actions: {
        ChangeLoginState ({ commit }) {
            commit("ChangeLoginState");
        }
    },
    modules: {
    }
});
