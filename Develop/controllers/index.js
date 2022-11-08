const router = require("express").Router();
const apiRoutes = require("./api");
const thoughtController = require("./thoughtController");
const userController = require("./userController");

router.use("/api", apiRoutes);
router.use("/") // use the thoughtController.js and userController.js

module.exports = router;
