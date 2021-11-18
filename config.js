const config = {
    providerId: "Dummy Provider",
    doors: ["Door 1", "Door 2"],
    server:{
        cors: {
            enabled: true,
            origin: []
        },
        https: {
            enabled: false,
            key: "",
            cert: "",
            port: 443
        },
        http:{
            enabled: true,
            port: 83
        }
    },
    token:{
        fetch: false,
        key: "",
        refresh: 0
    },
    authentication:{
        username: "",
        password: "",
        headers: {}
    },
    master:{
        url: "http://127.0.0.1:8080/"
    },
    target: {
        url: "http://127.0.0.1/"
    }
}

module.exports = config;