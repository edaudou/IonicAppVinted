'use strict'

var express = require("express")
var md_auth= require('../middleware/authentication')

var UserController = require("../controllers/user")

var api = express.Router()

//routes
api.get("/home",UserController.home)
api.get("/pruebas",UserController.pruebas)
api.post("/register", UserController.saveUser)
api.get("/getusers/:page",UserController.getUsers)
api.post("/login",UserController.login)
api.put("/modifyuser",md_auth.ensureAuth,UserController.updateUser)
api.delete("/deleteuser",md_auth.ensureAuth,UserController.deleteUser)
module.exports =api