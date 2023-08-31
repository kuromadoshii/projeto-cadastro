const express = require("express")
const UserController = require("../../app/controllers/userController")
const router = express.Router();

router.get("/users", UserController.allPlayers)
router.get("/users/:id", UserController.playerById)
router.post("/users", UserController.addPlayer)
router.delete("/users/:id", UserController.delPlayer)
router.patch("/users/:id", UserController.updatePlayer)

module.exports = router