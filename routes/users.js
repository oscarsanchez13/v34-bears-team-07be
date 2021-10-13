const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.get("/", controller.findAll);
router.get("/:id", controller.findOne);
router.post("/register", controller.register);
router.post("/login", controller.login);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
