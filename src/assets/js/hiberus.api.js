const HiberusAPI = {

    signup: {
        method: "post",
        url: "/auth/sign-up"
    },
    login: {
        method: "post",
        url: "/auth/log-in"
    },
    me: {
        method: "get",
        url: "/users/me"
    },
    users: {
        method: "get",
        url: "/users"
    },
    usersnew: {
        method: "post",
        url: "/users"
    },
    usersid: {
        method: "get",
        url: "/users/{id}"
    },
    usersupdate: {
        method: "put",
        url: "/users/{id}"
    },
    usersdelete: {
        method: "delete",
        url: "/users/{id}"
    }

};
export default HiberusAPI;
