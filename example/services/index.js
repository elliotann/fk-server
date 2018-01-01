const { config, start } = require("fk-server")
const serverConfig = require( "./config")

const person = require("./services/person/index.js")

const user = require("./services/user/index.js")


const services = {
	
    person,
	
    user,

}


config(serverConfig({services}))

start()