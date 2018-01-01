const { config, start } = require("fk-server")
const serverConfig = require("./config")

const services = {
}

config(serverConfig({ services }))

start()