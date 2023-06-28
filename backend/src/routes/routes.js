const express = require("express");
const router = express.Router();
const {
  login,
  addOrder,
  getOrderDetails,
} = require("../controller/controller");

router.post("/login", login);
router.post("/add-order", addOrder);
router.post("/order-details", getOrderDetails);

module.exports = router;
