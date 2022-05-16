const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

//create new proposal
router.post("/addConf", orderController.newConfRequest);

//fetchAll
router.get("/", orderController.a11);

module.exports = router;
