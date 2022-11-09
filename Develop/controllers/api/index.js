const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

// slightly different organizationally: the api files still contain routes, but the actual database code for obtaining the routes (all CRUD operations) is contained in the controller files (one level above the api folder).

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
