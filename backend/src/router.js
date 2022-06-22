const express = require("express");
const { authorization } = require("./controllers/UserController");
const { UserController, ItemController } = require("./controllers");

const router = express.Router();

router.post("/users/register", UserController.register);
router.post("/users/login", UserController.login);
router.get("/users", authorization, UserController.browse);
router.get("/users/logout", authorization, UserController.logout);

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
