const { config, start } = require("fk-server")
const serverConfig = require("./config")

const user = require("./services/user/index.js")


const services = {

    user,

}


config(serverConfig({ services }))

start()