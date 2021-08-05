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
        url: "/users"
    },
    usersupdate: {
        method: "put",
        url: "/users"
    },
    usersdelete: {
        method: "delete",
        url: "/users"
    }

};
export default HiberusAPI;
