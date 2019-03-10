const router = require("express").Router();
const houseRoutes = require("./plants");
const sensorRoutes = require("./sensors");

// routes to access data
router.use("/plants", houseRoutes);
router.use("/sensors", sensorRoutes);

module.exports = router;

