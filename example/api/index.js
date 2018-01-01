const { config, start} = require('fk-server');

config({
    host: "localhost",
    port: 8000,
    apiRootUrl: "/v1",
    api: {
        helloworld: () => "hello world", // http://localhost:8000/v1/helloworld
    },
});

start();