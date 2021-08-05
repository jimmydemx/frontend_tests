import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@c/pages/Login.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", redirect: "/Login" },
    {
        path: "/Login",
        name: "Login",
        component: Login
    },
    {
        path: "/Signup",
        name: "Signup",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Signup" */ "@c/pages/Signup.vue")
    },
    {
        path: "/Users",
        name: "Users",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Users" */ "@c/pages/Users.vue")
    },
    {
        path: "/Logout",
        name: "Logout",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Logout" */ "@c/pages/Logout.vue")
    }
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.path === "/Login") {
        next();
    } else {
        const token = localStorage.getItem("accessToken");
        console.log("token=", token);
        if (token === "null" || token === "") {
            next("/Login");
        } else {
            next();
        }
    }
});

export default router;
