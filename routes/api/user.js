const express = require("express");
const userController = require("../../controller/user");
import auth from "../../middleware/auth";

const router = express.Router();

router.get("/user", auth, userController.getUser);
// router.get('/payment-page', userController.getPayment);
router.post('/order', userController.postOrder);
// router.post('/delete-history', userController.deleteHistory)

module.exports = router;
